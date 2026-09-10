import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';

function pickString(source: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) if (typeof source[key] === 'string' && source[key].trim()) return source[key].trim();
  return undefined;
}

export function emitContent(model: GenerationModel): GeneratedFile[] {
  const content = model.buildSpec.content;
  const brand = model.buildSpec.brand as Record<string, unknown>;
  const site = {
    project: model.project,
    brand: {
      name: pickString(brand, 'name') ?? model.project.name,
      positioning: pickString(brand, 'positioning'),
    },
    locale: model.locale,
    content: {
      heroTitle: pickString(content, 'hero_title', 'heroTitle'),
      heroSubtitle: pickString(content, 'hero_subtitle', 'heroSubtitle'),
      primaryCta: pickString(content, 'primary_cta', 'primaryCta'),
      primaryGoal: pickString(content, 'primary_goal', 'primaryGoal'),
    },
    routes: model.routes.map((route) => ({ id: route.id, route: route.route })),
  };
  const source = `export const site = ${JSON.stringify(site, null, 2)} as const;\n`;
  return [makeGeneratedFile({ path: 'content/site.ts', kind: 'content', owner: 'content', sources: ['brand','content','pages'], content: source, overwrite: 'replace-generated' })];
}
