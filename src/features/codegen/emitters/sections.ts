import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';
import { PATTERN_COMPONENTS } from '../component-graph.ts';

const LABELS: Record<string, string> = {
  hero: 'Introduction', navigation: 'Navigation', portfolio: 'Selected work', services: 'Services', menu: 'Menu', testimonials: 'Proof', 'lead-capture': 'Contact', footer: 'More',
};

export function emitSections(model: GenerationModel): GeneratedFile[] {
  const patternsById = new Map(model.patterns.map((pattern) => [pattern.id, pattern]));
  const used = [...new Set(model.sections.map((section) => section.patternId))].sort();
  const wrappers = used.map((patternId) => {
    const name = PATTERN_COMPONENTS[patternId];
    const pattern = patternsById.get(patternId);
    const label = LABELS[pattern?.family ?? ''] ?? 'Section';
    const purpose = pattern?.purpose ?? 'Explore';
    return `export function ${name}(props: SectionProps) { return <PatternSection {...props} label=${JSON.stringify(label)} purpose=${JSON.stringify(purpose)} patternId=${JSON.stringify(patternId)} />; }`;
  }).join('\n\n');

  const content = `import type { ReactNode } from 'react';\n\nexport type SectionProps = { id?: string; title?: string; subtitle?: string; actionLabel?: string; children?: ReactNode };\n\nfunction PatternSection({ id, title, subtitle, actionLabel, children, label, purpose, patternId }: SectionProps & { label: string; purpose: string; patternId: string }) {\n  const heading = title || purpose;\n  return (\n    <section id={id} className="section" data-pattern={patternId}>\n      <div className="section__inner">\n        <div className="section__label">{label}</div>\n        <h2>{heading}</h2>\n        {subtitle ? <p>{subtitle}</p> : null}\n        {children}\n        {actionLabel ? <a className="section__action" href="#contact">{actionLabel}</a> : null}\n      </div>\n    </section>\n  );\n}\n\n${wrappers}\n`;

  return [makeGeneratedFile({ path: 'components/sections/generated.tsx', kind: 'component', owner: 'sections', sources: used, content, overwrite: 'replace-generated' })];
}
