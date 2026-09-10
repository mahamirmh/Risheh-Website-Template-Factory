import type { BuildSpec, FactoryCatalog } from '../../types/factory.ts';
import type { GenerationModel } from './model.ts';
import { CodegenError, CODES } from './errors.ts';
import { resolveRoutes } from './routes.ts';
import { resolveDesignTokens } from './tokens.ts';
import { componentNameForPattern } from './component-graph.ts';

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

function readLocale(buildSpec: BuildSpec) {
  const content = buildSpec.content;
  const brandLocale = asRecord((buildSpec.brand as Record<string, unknown>).locale);
  const seoLocale = asRecord((buildSpec.seo as Record<string, unknown>).locale);

  const localeValue =
    (typeof content.locale === 'string' ? content.locale : undefined) ??
    (typeof brandLocale.language === 'string' ? `${brandLocale.language}${typeof brandLocale.country === 'string' ? `-${brandLocale.country}` : ''}` : undefined) ??
    (typeof seoLocale.language === 'string' ? `${seoLocale.language}${typeof seoLocale.country === 'string' ? `-${seoLocale.country}` : ''}` : undefined);

  const direction = content.direction ?? brandLocale.direction ?? seoLocale.direction;
  if (direction !== 'rtl' && direction !== 'ltr') {
    throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, 'Build Spec requires an explicit rtl/ltr direction');
  }
  if (!localeValue) throw new CodegenError('resolve', CODES.INVALID_BUILD_SPEC, 'Build Spec requires explicit locale information');
  const [language, country] = localeValue.split('-');
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
  const locale = readLocale(buildSpec);
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
