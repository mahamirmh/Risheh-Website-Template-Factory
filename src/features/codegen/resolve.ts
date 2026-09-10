import type { BuildSpec, FactoryCatalog } from '../../types/factory.ts';
import type { GenerationModel } from './model.ts';
import { CodegenError, CODES } from './errors.ts';
import { resolveRoutes } from './routes.ts';
import { resolveDesignTokens } from './tokens.ts';
import { componentNameForPattern } from './component-graph.ts';

function readLocale(content: Record<string, unknown>) {
  const locale = typeof content.locale === 'string' ? content.locale : '';
  const direction = content.direction;
  if (direction !== 'rtl' && direction !== 'ltr') {
    throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, 'Build Spec content.direction must be rtl or ltr');
  }
  const [language, country] = locale.split('-');
  if (!language) throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, 'Build Spec content.locale is required');
  return { language, direction, country: country || undefined } as const;
}

export function resolveGenerationModel(buildSpec: BuildSpec, catalog: FactoryCatalog): GenerationModel {
  const industry = catalog.industries.find((item) => item.id === buildSpec.industry.id);
  if (!industry) throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, `Unknown industry: ${buildSpec.industry.id}`);
  const archetype = industry.archetypes.find((item) => item.id === buildSpec.industry.archetype);
  if (!archetype) throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, `Unknown archetype: ${buildSpec.industry.archetype}`);

  const profiles = buildSpec.design.dna.map((id) => {
    const profile = catalog.designDna.find((item) => item.id === id);
    if (!profile) throw new CodegenError('resolve', CODES.UNKNOWN_DESIGN_DNA, `${CODES.UNKNOWN_DESIGN_DNA}: ${id}`);
    return profile;
  });
  if (!profiles.length) throw new CodegenError('resolve', CODES.UNKNOWN_DESIGN_DNA, 'At least one Design DNA profile is required');

  const patterns = buildSpec.sections.map((section) => {
    const pattern = catalog.patterns.find((item) => item.id === section.pattern);
    if (!pattern) throw new CodegenError('resolve', CODES.UNKNOWN_PATTERN, `${CODES.UNKNOWN_PATTERN}: ${section.pattern}`);
    componentNameForPattern(section.pattern);
    return pattern;
  });

  const routes = resolveRoutes(buildSpec.pages);
  const locale = readLocale(buildSpec.content);
  const sections = buildSpec.sections.map((section) => ({
    id: section.id,
    patternId: section.pattern,
    pageId: section.page,
    componentName: componentNameForPattern(section.pattern),
  }));

  return {
    buildSpec,
    factoryVersion: buildSpec.provenance.factory_version,
    project: { ...buildSpec.project },
    locale,
    industry: { id: industry.id, archetype: archetype.id, source: industry },
    design: {
      dnaIds: [...buildSpec.design.dna],
      profiles,
      tokens: resolveDesignTokens(profiles[0], profiles[1]),
    },
    routes,
    sections,
    patterns,
    content: { ...buildSpec.content },
    implementation: { ...buildSpec.implementation },
  };
}
