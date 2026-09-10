import { loadFactoryCatalog } from '../../src/lib/catalog.ts';
import { generateProjectPlan } from '../../src/features/codegen/generator.ts';
import { resolveGenerationModel } from '../../src/features/codegen/resolve.ts';
import { checkPlanQuality } from '../../src/features/codegen/quality.ts';

const catalog = await loadFactoryCatalog();
let count = 0;
for (const industry of catalog.industries) {
  for (const archetype of industry.archetypes) {
    count += 1;
    const pages = archetype.pages.map((id) => ({ id, route: id === 'home' ? '/' : `/${id}` }));
    const firstPage = pages[0]?.id ?? 'home';
    const spec = {
      schema: 'risheh.build-spec.v1', version: '1.0.0',
      project: { id: `check-${industry.id}-${archetype.id}`, name: `${industry.name} codegen check` },
      brand: { name: industry.name, locale: { language: 'en', direction: 'ltr', country: 'US' } },
      industry: { id: industry.id, archetype: archetype.id },
      design: { dna: [...archetype.design_dna], tokens: {} },
      pages,
      sections: archetype.patterns.map((pattern, index) => ({ id: `${pattern}-${index + 1}`, pattern, page: firstPage })),
      content: { hero_title: 'A clear starting point', primary_cta: 'Contact' },
      seo: { locale: { language: 'en', direction: 'ltr', country: 'US' } },
      accessibility: { target: 'AA', reducedMotion: true }, responsive: { mobileFirst: true }, motion: { intensity: archetype.motion },
      implementation: { framework: 'Next.js', language: 'TypeScript', styling: 'Tailwind CSS' },
      provenance: { factory_version: catalog.version, template_id: `${industry.id}/${archetype.id}`, reference_sources: [] },
    };
    const model = resolveGenerationModel(spec, catalog);
    const plan = generateProjectPlan(spec, catalog);
    const report = checkPlanQuality(model, plan);
    if (!report.ok) throw new Error(`${industry.id}/${archetype.id}: ${report.diagnostics.join('; ')}`);
  }
}
if (count < 48) throw new Error(`Expected at least 48 archetypes, found ${count}`);
if (catalog.designDna.length !== 12) throw new Error(`Expected 12 Design DNA profiles, found ${catalog.designDna.length}`);
if (catalog.patterns.length !== 27) throw new Error(`Expected 27 patterns, found ${catalog.patterns.length}`);
console.log(`C2 compatibility: ${count} archetypes, ${catalog.designDna.length} DNA profiles, ${catalog.patterns.length} patterns`);
