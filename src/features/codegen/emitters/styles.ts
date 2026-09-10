import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';

const DNA_CSS: Record<string, { radius: string; max: string; section: string; tracking: string }> = {
  'apple-minimal': { radius: '18px', max: '1200px', section: '96px', tracking: '-0.03em' },
  'editorial-luxury': { radius: '2px', max: '1280px', section: '112px', tracking: '-0.02em' },
  'immersive-3d': { radius: '8px', max: '1440px', section: '120px', tracking: '-0.04em' },
  cinematic: { radius: '4px', max: '1440px', section: '128px', tracking: '-0.035em' },
  'brutalist-premium': { radius: '0px', max: '1360px', section: '88px', tracking: '-0.045em' },
  'swiss-grid': { radius: '0px', max: '1240px', section: '80px', tracking: '-0.02em' },
  'calm-luxury': { radius: '12px', max: '1180px', section: '104px', tracking: '-0.025em' },
  'bento-modern': { radius: '20px', max: '1240px', section: '88px', tracking: '-0.03em' },
  'magazine-editorial': { radius: '0px', max: '1160px', section: '88px', tracking: '-0.025em' },
  'conversion-first': { radius: '14px', max: '1120px', section: '72px', tracking: '-0.02em' },
  'gallery-first': { radius: '2px', max: '1440px', section: '112px', tracking: '-0.03em' },
  'storytelling-scroll': { radius: '8px', max: '1200px', section: '120px', tracking: '-0.035em' },
};

function safeColor(value: unknown, fallback: string) {
  return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}

export function emitStyles(model: GenerationModel): GeneratedFile[] {
  const preset = DNA_CSS[model.design.dnaIds[0]] ?? DNA_CSS['apple-minimal'];
  const brand = model.buildSpec.brand as Record<string, unknown>;
  const primary = safeColor(brand.primaryColor ?? brand.primary_color, '#111111');
  const secondary = safeColor(brand.secondaryColor ?? brand.secondary_color, '#f5f5f5');
  const css = `@import "tailwindcss";\n\n:root {\n  --bg: #ffffff;\n  --fg: #111111;\n  --muted: #6b7280;\n  --line: #e5e7eb;\n  --primary: ${primary};\n  --secondary: ${secondary};\n  --radius: ${preset.radius};\n  --page-max: ${preset.max};\n  --section-space: ${preset.section};\n  --heading-tracking: ${preset.tracking};\n}\n\n* { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; }\nbody { margin: 0; background: var(--bg); color: var(--fg); font-family: Arial, Helvetica, sans-serif; }\na { color: inherit; text-decoration: none; }\nbutton, input, textarea, select { font: inherit; }\n:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }\n.shell { inline-size: min(100% - 32px, var(--page-max)); margin-inline: auto; }\n.site-header { position: sticky; inset-block-start: 0; z-index: 30; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(18px); border-block-end: 1px solid var(--line); }\n.site-header__inner { min-block-size: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }\n.site-nav { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; }\n.section { padding-block: var(--section-space); border-block-end: 1px solid var(--line); }\n.section__inner { inline-size: min(100% - 32px, var(--page-max)); margin-inline: auto; }\n.section__label { color: var(--muted); font-size: .875rem; margin-block-end: 16px; text-transform: uppercase; letter-spacing: .08em; }\n.section h1, .section h2 { margin: 0; letter-spacing: var(--heading-tracking); line-height: .98; max-inline-size: 15ch; }\n.section h1 { font-size: clamp(3rem, 8vw, 7.5rem); }\n.section h2 { font-size: clamp(2rem, 5vw, 4.5rem); }\n.section p { color: var(--muted); max-inline-size: 62ch; line-height: 1.75; font-size: 1.05rem; }\n.section__action { display: inline-flex; min-block-size: 44px; align-items: center; padding-inline: 18px; border-radius: var(--radius); background: var(--primary); color: #fff; margin-block-start: 24px; }\n.grid { display: grid; gap: 24px; grid-template-columns: repeat(12, minmax(0, 1fr)); }\n.panel { grid-column: span 6; min-block-size: 220px; border: 1px solid var(--line); border-radius: var(--radius); padding: 24px; background: var(--secondary); }\n.site-footer { padding-block: 48px; }\n@media (max-width: 760px) {\n  :root { --section-space: 64px; }\n  .site-header__inner { align-items: flex-start; padding-block: 18px; }\n  .site-nav { gap: 12px; font-size: .9rem; justify-content: flex-end; }\n  .panel { grid-column: 1 / -1; }\n}\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }\n}\n`;
  return [makeGeneratedFile({ path: 'app/globals.css', kind: 'style', owner: 'styles', sources: model.design.dnaIds, content: css, overwrite: 'replace-generated' })];
}
