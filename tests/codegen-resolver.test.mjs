import test from 'node:test';
import assert from 'node:assert/strict';
import { CodegenError } from '../src/features/codegen/errors.ts';
import { resolveGenerationModel } from '../src/features/codegen/resolve.ts';

const catalog = {
  version: '2.0.0',
  industries: [{ id: 'professional-services', name: 'Professional Services', psychology: [], archetypes: [{ id: 'apple-service-company', design_dna: ['apple-minimal'], primary_goal: 'lead', proof_model: 'clarity', conversion_model: 'enquiry', motion: 'low', content_density: 'low', patterns: ['hero-outcome'], pages: ['home'] }] }],
  designDna: [{ id: 'apple-minimal', name: 'Apple Minimal', personality: [], typography: 'clean', spacing: 'generous', layout: 'wide', geometry: 'soft', imagery: 'quiet', motion: 'low', interaction_density: 'low', content_density: 'low', suitable_industries: ['professional-services'], prohibited_patterns: [], accessibility: ['AA'] }],
  patterns: [{ id: 'hero-outcome', family: 'hero', purpose: 'Outcome', stage: 'awareness', conversion_role: 'clarity' }],
};

const buildSpec = {
  schema: 'risheh.build-spec.v1', version: '1.0.0',
  project: { id: 'sample-service', name: 'Sample Service' },
  brand: { name: 'Sample' },
  industry: { id: 'professional-services', archetype: 'apple-service-company' },
  design: { dna: ['apple-minimal'], tokens: {} },
  pages: [{ id: 'home', route: '/' }],
  sections: [{ id: 'hero', pattern: 'hero-outcome', page: 'home' }],
  content: { locale: 'en-US', direction: 'ltr' },
  seo: {}, accessibility: {}, responsive: {}, motion: {},
  implementation: { framework: 'Next.js', language: 'TypeScript', styling: 'Tailwind CSS' },
  provenance: { factory_version: '2.0.0', template_id: 'professional-services:apple-service-company', reference_sources: [] },
};

test('CodegenError exposes stage and stable code', () => {
  const error = new CodegenError('resolve', 'UNKNOWN_PATTERN', 'Unknown pattern');
  assert.equal(error.stage, 'resolve');
  assert.equal(error.code, 'UNKNOWN_PATTERN');
});

test('resolves known DNA, patterns and routes without mutating BuildSpec', () => {
  const original = structuredClone(buildSpec);
  const model = resolveGenerationModel(buildSpec, catalog);
  assert.deepEqual(buildSpec, original);
  assert.equal(model.industry.id, 'professional-services');
  assert.deepEqual(model.design.dnaIds, ['apple-minimal']);
  assert.equal(model.locale.direction, 'ltr');
  assert.equal(model.routes[0].filePath, 'app/page.tsx');
});

test('fails closed on unknown pattern', () => {
  const invalid = structuredClone(buildSpec);
  invalid.sections[0].pattern = 'not-real';
  assert.throws(() => resolveGenerationModel(invalid, catalog), /UNKNOWN_PATTERN/);
});
