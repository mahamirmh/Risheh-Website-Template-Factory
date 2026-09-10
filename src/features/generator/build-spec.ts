import type { BuildSpec, FactoryCatalog, GeneratorDraft } from '@/types/factory';

export class GeneratorError extends Error {}

export function findSelectedArchetype(catalog: FactoryCatalog, draft: GeneratorDraft) {
  if (!draft.industryId || !draft.archetypeId) return null;
  const industry = catalog.industries.find((item) => item.id === draft.industryId);
  if (!industry) return null;
  const archetype = industry.archetypes.find((item) => item.id === draft.archetypeId);
  return archetype ? { industry, archetype } : null;
}

export function applyArchetypeDefaults(
  catalog: FactoryCatalog,
  draft: GeneratorDraft,
  industryId: string,
  archetypeId: string,
): GeneratorDraft {
  const industry = catalog.industries.find((item) => item.id === industryId);
  const archetype = industry?.archetypes.find((item) => item.id === archetypeId);
  if (!industry || !archetype) throw new GeneratorError('Unknown industry or archetype.');

  return {
    ...draft,
    industryId,
    archetypeId,
    business: {
      ...draft.business,
      primaryGoal: draft.business.primaryGoal || archetype.primary_goal,
    },
    designDnaIds: [...archetype.design_dna],
    pages: archetype.pages.map((id) => ({ id, route: id === 'home' ? '/' : `/${id}` })),
    patternIds: [...archetype.patterns],
    motion: { intensity: archetype.motion },
  };
}

export function getCompatibility(
  catalog: FactoryCatalog,
  draft: GeneratorDraft,
  designDnaId: string,
): 'recommended' | 'compatible' | 'experimental' | 'unsupported' {
  const selected = findSelectedArchetype(catalog, draft);
  const profile = catalog.designDna.find((item) => item.id === designDnaId);
  if (!profile) return 'unsupported';
  if (selected?.archetype.design_dna.includes(designDnaId)) return 'recommended';
  if (draft.industryId && profile.suitable_industries.includes(draft.industryId)) return 'compatible';
  if (!draft.industryId) return 'experimental';
  return 'experimental';
}

export function validateDraftForBuild(catalog: FactoryCatalog, draft: GeneratorDraft): string[] {
  const errors: string[] = [];
  if (!draft.project.id.trim() || !draft.project.name.trim()) errors.push('Project identity is required.');
  if (!draft.business.name.trim()) errors.push('Business name is required.');
  if (!draft.industryId) errors.push('Industry is required.');
  if (!draft.archetypeId) errors.push('Archetype is required.');
  const selected = findSelectedArchetype(catalog, draft);
  if (draft.industryId && draft.archetypeId && !selected) errors.push('Selected archetype does not belong to the selected industry.');
  if (!draft.designDnaIds.length) errors.push('At least one Design DNA profile is required.');
  for (const id of draft.designDnaIds) {
    if (!catalog.designDna.some((item) => item.id === id)) errors.push(`Unknown Design DNA: ${id}`);
  }
  if (!draft.pages.length) errors.push('At least one page is required.');
  for (const id of draft.patternIds) {
    if (!catalog.patterns.some((item) => item.id === id)) errors.push(`Unknown pattern: ${id}`);
  }
  return errors;
}

export function composeBuildSpec(catalog: FactoryCatalog, draft: GeneratorDraft): BuildSpec {
  const errors = validateDraftForBuild(catalog, draft);
  if (errors.length) throw new GeneratorError(errors.join(' '));

  const selected = findSelectedArchetype(catalog, draft)!;
  const firstPageId = draft.pages[0].id;

  return {
    schema: 'risheh.build-spec.v1',
    version: '1.0.0',
    project: { ...draft.project },
    brand: {
      name: draft.business.name,
      positioning: draft.business.positioning,
      primary_color: draft.brand.primaryColor,
      secondary_color: draft.brand.secondaryColor,
      font_family: draft.brand.fontFamily,
      locale: draft.locale,
    },
    industry: { id: selected.industry.id, archetype: selected.archetype.id },
    design: {
      dna: [...draft.designDnaIds],
      tokens: {
        motion_intensity: draft.motion.intensity,
        content_density: selected.archetype.content_density,
      },
    },
    pages: draft.pages.map((page) => ({ ...page })),
    sections: draft.patternIds.map((pattern, index) => ({
      id: `${pattern}-${index + 1}`,
      pattern,
      page: firstPageId,
    })),
    content: {
      hero_title: draft.content.heroTitle,
      hero_subtitle: draft.content.heroSubtitle,
      primary_cta: draft.content.primaryCta,
      primary_goal: draft.business.primaryGoal,
      proof_model: selected.archetype.proof_model,
      conversion_model: selected.archetype.conversion_model,
    },
    seo: { ...draft.seo, locale: draft.locale },
    accessibility: { ...draft.accessibility },
    responsive: { ...draft.responsive },
    motion: { ...draft.motion },
    implementation: { ...draft.implementation },
    provenance: {
      factory_version: catalog.version,
      template_id: `${selected.industry.id}/${selected.archetype.id}`,
      reference_sources: [],
    },
  };
}
