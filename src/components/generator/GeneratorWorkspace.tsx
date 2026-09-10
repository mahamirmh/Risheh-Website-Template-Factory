'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import YAML from 'yaml';
import {
  applyArchetypeDefaults,
  composeBuildSpec,
  findSelectedArchetype,
  getCompatibility,
  validateDraftForBuild,
} from '@/features/generator/build-spec';
import { createDefaultDraft } from '@/features/generator/defaults';
import { createAgentHandoff } from '@/features/generator/handoff';
import { loadDraft, saveDraft } from '@/features/generator/persistence';
import type { BuildSpec, FactoryCatalog, GeneratorDraft } from '@/types/factory';

const STEPS = ['Business', 'Industry', 'Archetype', 'Design DNA', 'Pages & Patterns', 'Brand & Content', 'Quality', 'Review'] as const;

type StepName = (typeof STEPS)[number];

type ExportState = { kind: 'idle' | 'success' | 'error'; message: string };

function slugify(value: string) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'website-project';
}

function downloadText(filename: string, text: string, type: string) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function buildSpecToDraft(spec: BuildSpec, current: GeneratorDraft): GeneratorDraft {
  const brand = spec.brand as Record<string, unknown>;
  const content = spec.content as Record<string, unknown>;
  const locale = (brand.locale ?? {}) as Record<string, unknown>;
  const seo = spec.seo as Record<string, unknown>;
  const accessibility = spec.accessibility as Record<string, unknown>;
  const responsive = spec.responsive as Record<string, unknown>;
  const motion = spec.motion as Record<string, unknown>;

  return {
    ...current,
    project: { ...spec.project },
    business: {
      name: String(brand.name ?? ''),
      positioning: String(brand.positioning ?? ''),
      primaryGoal: String(content.primary_goal ?? ''),
    },
    industryId: spec.industry.id,
    archetypeId: spec.industry.archetype,
    designDnaIds: [...spec.design.dna],
    pages: spec.pages.map((page) => ({ ...page })),
    patternIds: spec.sections.map((section) => section.pattern),
    brand: {
      primaryColor: String(brand.primary_color ?? '#111111'),
      secondaryColor: String(brand.secondary_color ?? '#ffffff'),
      fontFamily: String(brand.font_family ?? 'System UI'),
    },
    content: {
      heroTitle: String(content.hero_title ?? ''),
      heroSubtitle: String(content.hero_subtitle ?? ''),
      primaryCta: String(content.primary_cta ?? ''),
    },
    locale: {
      language: String(locale.language ?? 'fa'),
      direction: locale.direction === 'ltr' ? 'ltr' : 'rtl',
      country: String(locale.country ?? 'IR'),
    },
    seo: {
      localTarget: String(seo.localTarget ?? ''),
      indexable: seo.indexable !== false,
    },
    accessibility: {
      target: accessibility.target === 'AAA' ? 'AAA' : 'AA',
      reducedMotion: accessibility.reducedMotion !== false,
    },
    responsive: { mobileFirst: responsive.mobileFirst !== false },
    motion: {
      intensity: motion.intensity === 'high' ? 'high' : motion.intensity === 'medium' ? 'medium' : 'low',
    },
    implementation: { framework: 'Next.js', language: 'TypeScript', styling: 'Tailwind CSS' },
  };
}

export function GeneratorWorkspace({ catalog }: { catalog: FactoryCatalog }) {
  const [draft, setDraft] = useState<GeneratorDraft>(() => createDefaultDraft());
  const [stepIndex, setStepIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [exportState, setExportState] = useState<ExportState>({ kind: 'idle', message: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = loadDraft();
    if (saved) setDraft(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveDraft(draft);
  }, [draft, hydrated]);

  const selected = useMemo(() => findSelectedArchetype(catalog, draft), [catalog, draft]);
  const buildErrors = useMemo(() => validateDraftForBuild(catalog, draft), [catalog, draft]);
  const selectedDna = useMemo(
    () => catalog.designDna.filter((profile) => draft.designDnaIds.includes(profile.id)),
    [catalog.designDna, draft.designDnaIds],
  );

  function patchDraft(patch: Partial<GeneratorDraft>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function patchProject(name: string) {
    setDraft((current) => ({
      ...current,
      project: { name, id: current.project.id === 'new-project' ? slugify(name) : current.project.id },
    }));
  }

  function selectIndustry(industryId: string) {
    setDraft((current) => ({
      ...current,
      industryId,
      archetypeId: null,
      designDnaIds: [],
      pages: [],
      patternIds: [],
    }));
    setStepIndex(2);
  }

  function selectArchetype(archetypeId: string) {
    if (!draft.industryId) return;
    setDraft((current) => applyArchetypeDefaults(catalog, current, draft.industryId!, archetypeId));
    setStepIndex(3);
  }

  function toggleDna(id: string) {
    setDraft((current) => {
      const exists = current.designDnaIds.includes(id);
      if (exists) return { ...current, designDnaIds: current.designDnaIds.filter((item) => item !== id) };
      if (current.designDnaIds.length >= 2) return { ...current, designDnaIds: [current.designDnaIds[0], id] };
      return { ...current, designDnaIds: [...current.designDnaIds, id] };
    });
  }

  function togglePage(id: string) {
    setDraft((current) => {
      const exists = current.pages.some((page) => page.id === id);
      return {
        ...current,
        pages: exists
          ? current.pages.filter((page) => page.id !== id)
          : [...current.pages, { id, route: id === 'home' ? '/' : `/${id}` }],
      };
    });
  }

  function togglePattern(id: string) {
    setDraft((current) => ({
      ...current,
      patternIds: current.patternIds.includes(id)
        ? current.patternIds.filter((item) => item !== id)
        : [...current.patternIds, id],
    }));
  }

  async function validatedSpec(): Promise<BuildSpec | null> {
    setExportState({ kind: 'idle', message: '' });
    try {
      const spec = composeBuildSpec(catalog, draft);
      const response = await fetch('/api/build-spec', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(spec),
      });
      const result = (await response.json()) as { valid: boolean; errors?: { path: string; message: string }[] };
      if (!result.valid) {
        setExportState({
          kind: 'error',
          message: result.errors?.map((error) => `${error.path}: ${error.message}`).join(' · ') || 'Schema validation failed.',
        });
        return null;
      }
      return spec;
    } catch (error) {
      setExportState({ kind: 'error', message: error instanceof Error ? error.message : 'Unable to compose Build Spec.' });
      return null;
    }
  }

  async function exportSpec(format: 'json' | 'yaml') {
    const spec = await validatedSpec();
    if (!spec) return;
    const fileBase = slugify(spec.project.name);
    if (format === 'json') {
      downloadText(`${fileBase}.build-spec.json`, JSON.stringify(spec, null, 2), 'application/json');
    } else {
      downloadText(`${fileBase}.build-spec.yaml`, YAML.stringify(spec), 'text/yaml');
    }
    setExportState({ kind: 'success', message: `Validated ${format.toUpperCase()} export created.` });
  }

  async function copyHandoff(target: 'codex' | 'claude' | 'generic') {
    const spec = await validatedSpec();
    if (!spec) return;
    await navigator.clipboard.writeText(createAgentHandoff(spec, target));
    setExportState({ kind: 'success', message: `${target === 'claude' ? 'Claude Code' : target === 'codex' ? 'Codex' : 'Generic agent'} handoff copied.` });
  }

  async function importSpec(file: File) {
    try {
      const text = await file.text();
      const parsed = file.name.endsWith('.yaml') || file.name.endsWith('.yml') ? YAML.parse(text) : JSON.parse(text);
      const response = await fetch('/api/build-spec', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed),
      });
      const result = (await response.json()) as { valid: boolean };
      if (!result.valid) throw new Error('Imported file is not a valid risheh.build-spec.v1 document.');
      setDraft((current) => buildSpecToDraft(parsed as BuildSpec, current));
      setStepIndex(7);
      setExportState({ kind: 'success', message: 'Build Spec imported into the composer.' });
    } catch (error) {
      setExportState({ kind: 'error', message: error instanceof Error ? error.message : 'Import failed.' });
    }
  }

  const currentStep = STEPS[stepIndex] as StepName;

  return (
    <main className="generator-app" dir={draft.locale.direction}>
      <header className="generator-header">
        <div className="generator-brand">
          <span className="brand-mark small" aria-hidden="true">R</span>
          <div>
            <strong>Website Template Factory</strong>
            <span>C1 Visual Generator</span>
          </div>
        </div>
        <div className="header-actions">
          <input
            ref={fileInputRef}
            className="sr-only"
            type="file"
            accept=".json,.yaml,.yml,application/json,text/yaml"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void importSpec(file);
              event.currentTarget.value = '';
            }}
          />
          <button className="quiet-button" onClick={() => fileInputRef.current?.click()}>Import</button>
          <button className="quiet-button" onClick={() => void exportSpec('json')}>JSON</button>
          <button className="primary-button compact" onClick={() => void exportSpec('yaml')}>Export YAML</button>
        </div>
      </header>

      <section className="workspace">
        <nav className="step-rail" aria-label="Generator steps">
          <div className="rail-progress"><span style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }} /></div>
          {STEPS.map((step, index) => (
            <button
              key={step}
              className={`step-button ${index === stepIndex ? 'active' : ''} ${index < stepIndex ? 'complete' : ''}`}
              onClick={() => setStepIndex(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </button>
          ))}
        </nav>

        <section className="composer" aria-live="polite">
          <div className="composer-heading">
            <span>{String(stepIndex + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}</span>
            <h1>{currentStep}</h1>
          </div>

          {currentStep === 'Business' && (
            <div className="form-grid">
              <label className="field wide">Project name<input value={draft.project.name} onChange={(e) => patchProject(e.target.value)} /></label>
              <label className="field">Business name<input value={draft.business.name} onChange={(e) => patchDraft({ business: { ...draft.business, name: e.target.value } })} /></label>
              <label className="field">Primary goal<input value={draft.business.primaryGoal} onChange={(e) => patchDraft({ business: { ...draft.business, primaryGoal: e.target.value } })} placeholder="booking, qualified enquiry, purchase…" /></label>
              <label className="field wide">Positioning<textarea value={draft.business.positioning} onChange={(e) => patchDraft({ business: { ...draft.business, positioning: e.target.value } })} placeholder="One truthful sentence about the business and its value." /></label>
              <label className="field">Language<input value={draft.locale.language} onChange={(e) => patchDraft({ locale: { ...draft.locale, language: e.target.value } })} /></label>
              <label className="field">Country<input value={draft.locale.country} onChange={(e) => patchDraft({ locale: { ...draft.locale, country: e.target.value.toUpperCase() } })} /></label>
              <label className="field">Direction<select value={draft.locale.direction} onChange={(e) => patchDraft({ locale: { ...draft.locale, direction: e.target.value as 'rtl' | 'ltr' } })}><option value="rtl">RTL</option><option value="ltr">LTR</option></select></label>
            </div>
          )}

          {currentStep === 'Industry' && (
            <div className="choice-list">
              {catalog.industries.map((industry) => (
                <button key={industry.id} className={`choice-row ${draft.industryId === industry.id ? 'selected' : ''}`} onClick={() => selectIndustry(industry.id)}>
                  <div><strong>{industry.name}</strong><p>{industry.psychology.join(' → ')}</p></div>
                  <span>{industry.archetypes.length} archetypes</span>
                </button>
              ))}
            </div>
          )}

          {currentStep === 'Archetype' && (
            <div className="choice-list">
              {!draft.industryId && <EmptyState text="Choose an industry first." />}
              {catalog.industries.find((item) => item.id === draft.industryId)?.archetypes.map((archetype) => (
                <button key={archetype.id} className={`choice-row archetype-row ${draft.archetypeId === archetype.id ? 'selected' : ''}`} onClick={() => selectArchetype(archetype.id)}>
                  <div><strong>{archetype.id.replaceAll('-', ' ')}</strong><p>{archetype.proof_model} · {archetype.conversion_model}</p></div>
                  <div className="row-meta"><span>{archetype.content_density} density</span><span>{archetype.motion} motion</span></div>
                </button>
              ))}
            </div>
          )}

          {currentStep === 'Design DNA' && (
            <div className="dna-grid">
              {catalog.designDna.map((profile) => {
                const compatibility = getCompatibility(catalog, draft, profile.id);
                const checked = draft.designDnaIds.includes(profile.id);
                return (
                  <button key={profile.id} className={`dna-option ${checked ? 'selected' : ''}`} onClick={() => toggleDna(profile.id)}>
                    <div className="dna-top"><strong>{profile.name}</strong><span className={`compatibility ${compatibility}`}>{compatibility}</span></div>
                    <p>{profile.personality.join(', ')}</p>
                    <dl><div><dt>Layout</dt><dd>{profile.layout}</dd></div><div><dt>Motion</dt><dd>{profile.motion}</dd></div></dl>
                  </button>
                );
              })}
            </div>
          )}

          {currentStep === 'Pages & Patterns' && (
            <div className="composition-columns">
              <div><h2>Pages</h2><div className="check-list">{selected?.archetype.pages.map((id) => <Toggle key={id} checked={draft.pages.some((page) => page.id === id)} label={id} onClick={() => togglePage(id)} />) ?? <EmptyState text="Choose an archetype first." />}</div></div>
              <div><h2>Patterns</h2><div className="check-list">{catalog.patterns.map((pattern) => <Toggle key={pattern.id} checked={draft.patternIds.includes(pattern.id)} label={pattern.id} detail={pattern.purpose} onClick={() => togglePattern(pattern.id)} />)}</div></div>
            </div>
          )}

          {currentStep === 'Brand & Content' && (
            <div className="form-grid">
              <label className="field">Primary color<input type="color" value={draft.brand.primaryColor} onChange={(e) => patchDraft({ brand: { ...draft.brand, primaryColor: e.target.value } })} /></label>
              <label className="field">Secondary color<input type="color" value={draft.brand.secondaryColor} onChange={(e) => patchDraft({ brand: { ...draft.brand, secondaryColor: e.target.value } })} /></label>
              <label className="field wide">Font family<input value={draft.brand.fontFamily} onChange={(e) => patchDraft({ brand: { ...draft.brand, fontFamily: e.target.value } })} /></label>
              <label className="field wide">Hero title<input value={draft.content.heroTitle} onChange={(e) => patchDraft({ content: { ...draft.content, heroTitle: e.target.value } })} /></label>
              <label className="field wide">Hero subtitle<textarea value={draft.content.heroSubtitle} onChange={(e) => patchDraft({ content: { ...draft.content, heroSubtitle: e.target.value } })} /></label>
              <label className="field wide">Primary CTA<input value={draft.content.primaryCta} onChange={(e) => patchDraft({ content: { ...draft.content, primaryCta: e.target.value } })} /></label>
            </div>
          )}

          {currentStep === 'Quality' && (
            <div className="quality-list">
              <Setting label="Accessibility target" detail="WCAG conformance target for generated implementation."><select value={draft.accessibility.target} onChange={(e) => patchDraft({ accessibility: { ...draft.accessibility, target: e.target.value as 'AA' | 'AAA' } })}><option>AA</option><option>AAA</option></select></Setting>
              <Setting label="Reduced motion" detail="Require a reduced-motion path for non-essential animation."><input type="checkbox" checked={draft.accessibility.reducedMotion} onChange={(e) => patchDraft({ accessibility: { ...draft.accessibility, reducedMotion: e.target.checked } })} /></Setting>
              <Setting label="Mobile first" detail="Treat mobile as a first-class layout, not a collapsed desktop afterthought."><input type="checkbox" checked={draft.responsive.mobileFirst} onChange={(e) => patchDraft({ responsive: { mobileFirst: e.target.checked } })} /></Setting>
              <Setting label="Motion intensity" detail="Can be stricter than the archetype default."><select value={draft.motion.intensity} onChange={(e) => patchDraft({ motion: { intensity: e.target.value as 'low' | 'medium' | 'high' } })}><option>low</option><option>medium</option><option>high</option></select></Setting>
              <Setting label="Indexable" detail="Whether generated public pages should be indexable by default."><input type="checkbox" checked={draft.seo.indexable} onChange={(e) => patchDraft({ seo: { ...draft.seo, indexable: e.target.checked } })} /></Setting>
              <Setting label="Local SEO target" detail="Optional city/region intent."><input value={draft.seo.localTarget} onChange={(e) => patchDraft({ seo: { ...draft.seo, localTarget: e.target.value } })} /></Setting>
            </div>
          )}

          {currentStep === 'Review' && (
            <div className="review-stack">
              <div className={`health-panel ${buildErrors.length ? 'warning' : 'healthy'}`}>
                <strong>{buildErrors.length ? `${buildErrors.length} item${buildErrors.length > 1 ? 's' : ''} before export` : 'Build Spec is composition-ready'}</strong>
                {buildErrors.length ? <ul>{buildErrors.map((error) => <li key={error}>{error}</li>)}</ul> : <p>The server schema is still checked at export time.</p>}
              </div>
              <div className="review-actions">
                <button className="primary-button" onClick={() => void exportSpec('yaml')}>Export validated YAML</button>
                <button className="quiet-button" onClick={() => void exportSpec('json')}>Export JSON</button>
              </div>
              <div className="handoff-block"><h2>Agent handoff</h2><p>Copy a complete implementation brief with the validated Build Spec embedded.</p><div className="handoff-actions"><button onClick={() => void copyHandoff('codex')}>Copy for Codex</button><button onClick={() => void copyHandoff('claude')}>Copy for Claude Code</button><button onClick={() => void copyHandoff('generic')}>Copy generic</button></div></div>
            </div>
          )}

          <div className="composer-footer">
            <button className="quiet-button" disabled={stepIndex === 0} onClick={() => setStepIndex((value) => Math.max(0, value - 1))}>Back</button>
            <button className="primary-button compact" disabled={stepIndex === STEPS.length - 1} onClick={() => setStepIndex((value) => Math.min(STEPS.length - 1, value + 1))}>Continue</button>
          </div>
        </section>

        <aside className="live-summary">
          <div className="summary-heading"><span>Live summary</span><strong>{buildErrors.length ? 'Needs input' : 'Ready'}</strong></div>
          <SummaryItem label="Project" value={draft.project.name} />
          <SummaryItem label="Industry" value={selected?.industry.name ?? draft.industryId ?? 'Not selected'} />
          <SummaryItem label="Archetype" value={draft.archetypeId?.replaceAll('-', ' ') ?? 'Not selected'} />
          <SummaryItem label="Design DNA" value={selectedDna.map((item) => item.name).join(' + ') || 'Not selected'} />
          <SummaryItem label="Pages" value={draft.pages.length ? draft.pages.map((item) => item.id).join(', ') : 'None'} />
          <SummaryItem label="Patterns" value={draft.patternIds.length ? `${draft.patternIds.length} selected` : 'None'} />
          <SummaryItem label="Locale" value={`${draft.locale.language.toUpperCase()} · ${draft.locale.direction.toUpperCase()} · ${draft.locale.country}`} />
          <div className="summary-rule" />
          <div className="build-health"><span>Build health</span><div className="health-meter"><i style={{ width: `${Math.max(10, 100 - buildErrors.length * 14)}%` }} /></div><small>{buildErrors.length ? buildErrors[0] : 'No composition blockers detected.'}</small></div>
          {exportState.kind !== 'idle' && <div className={`status-message ${exportState.kind}`}>{exportState.message}</div>}
        </aside>
      </section>
    </main>
  );
}

function EmptyState({ text }: { text: string }) { return <div className="empty-state">{text}</div>; }

function Toggle({ checked, label, detail, onClick }: { checked: boolean; label: string; detail?: string; onClick: () => void }) {
  return <button className={`toggle-row ${checked ? 'selected' : ''}`} onClick={onClick}><span className="toggle-box" aria-hidden="true">{checked ? '✓' : ''}</span><span><strong>{label.replaceAll('-', ' ')}</strong>{detail && <small>{detail}</small>}</span></button>;
}

function Setting({ label, detail, children }: { label: string; detail: string; children: React.ReactNode }) {
  return <label className="setting-row"><span><strong>{label}</strong><small>{detail}</small></span><span className="setting-control">{children}</span></label>;
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return <div className="summary-item"><span>{label}</span><strong>{value}</strong></div>;
}
