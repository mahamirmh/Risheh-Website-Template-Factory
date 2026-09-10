import assert from 'node:assert/strict';
import test from 'node:test';
import { applyArchetypeDefaults, composeBuildSpec, validateDraftForBuild } from '../../src/features/generator/build-spec';
import { createDefaultDraft } from '../../src/features/generator/defaults';
import { createAgentHandoff } from '../../src/features/generator/handoff';
import type { FactoryCatalog } from '../../src/types/factory';

const catalog: FactoryCatalog = {
  version: '1.0.0',
  industries: [{
    id: 'cafe-restaurant',
    name: 'Cafe & Restaurant',
    psychology: ['atmosphere', 'menu', 'reservation'],
    archetypes: [{
      id: 'editorial-bistro',
      design_dna: ['editorial-luxury'],
      primary_goal: 'reservation',
      proof_model: 'atmosphere-and-menu',
      conversion_model: 'reservation',
      motion: 'low',
      content_density: 'medium',
      patterns: ['hero-atmosphere', 'lead-reservation'],
      pages: ['home', 'menu', 'reservation'],
    }],
  }],
  designDna: [{
    id: 'editorial-luxury',
    name: 'Editorial Luxury',
    personality: ['refined'],
    typography: 'editorial',
    spacing: 'generous',
    layout: 'editorial',
    geometry: 'flat',
    imagery: 'art-directed',
    motion: 'low',
    interaction_density: 'low',
    content_density: 'medium',
    suitable_industries: ['cafe-restaurant'],
    prohibited_patterns: [],
    accessibility: ['AA-contrast'],
  }],
  patterns: [
    { id: 'hero-atmosphere', family: 'hero', purpose: 'Mood', stage: 'awareness', conversion_role: 'desire' },
    { id: 'lead-reservation', family: 'lead-capture', purpose: 'Reserve', stage: 'conversion', conversion_role: 'reservation' },
  ],
};

test('archetype selection applies deterministic Phase B defaults', () => {
  const draft = applyArchetypeDefaults(catalog, createDefaultDraft(), 'cafe-restaurant', 'editorial-bistro');
  assert.deepEqual(draft.designDnaIds, ['editorial-luxury']);
  assert.deepEqual(draft.pages, [
    { id: 'home', route: '/' },
    { id: 'menu', route: '/menu' },
    { id: 'reservation', route: '/reservation' },
  ]);
  assert.deepEqual(draft.patternIds, ['hero-atmosphere', 'lead-reservation']);
});

test('composition refuses incomplete drafts', () => {
  const errors = validateDraftForBuild(catalog, createDefaultDraft());
  assert.ok(errors.includes('Business name is required.'));
  assert.ok(errors.includes('Industry is required.'));
  assert.ok(errors.includes('Archetype is required.'));
});

test('valid draft composes risheh.build-spec.v1 deterministically', () => {
  let draft = applyArchetypeDefaults(catalog, createDefaultDraft(), 'cafe-restaurant', 'editorial-bistro');
  draft = {
    ...draft,
    project: { id: 'maha-cafe', name: 'Maha Cafe' },
    business: { ...draft.business, name: 'Maha Cafe', positioning: 'A neighborhood bistro.', primaryGoal: 'reservation' },
    content: { heroTitle: 'Dinner, quietly done well.', heroSubtitle: 'Seasonal food and a calm room.', primaryCta: 'Reserve' },
  };
  const first = composeBuildSpec(catalog, draft);
  const second = composeBuildSpec(catalog, draft);
  assert.deepEqual(first, second);
  assert.equal(first.schema, 'risheh.build-spec.v1');
  assert.equal(first.industry.archetype, 'editorial-bistro');
  assert.equal(first.provenance.template_id, 'cafe-restaurant/editorial-bistro');
});

test('agent handoff embeds contract and truthfulness constraints', () => {
  let draft = applyArchetypeDefaults(catalog, createDefaultDraft(), 'cafe-restaurant', 'editorial-bistro');
  draft = { ...draft, project: { id: 'cafe', name: 'Cafe' }, business: { ...draft.business, name: 'Cafe' } };
  const prompt = createAgentHandoff(composeBuildSpec(catalog, draft), 'codex');
  assert.match(prompt, /risheh\.build-spec\.v1/);
  assert.match(prompt, /Do not invent testimonials/);
  assert.match(prompt, /Codex/);
});
