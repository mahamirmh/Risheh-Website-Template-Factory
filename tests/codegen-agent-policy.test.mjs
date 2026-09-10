import test from 'node:test';
import assert from 'node:assert/strict';
import { assertAgentInvariant, buildAgentEnhancementPrompt } from '../src/features/codegen/agent-policy.ts';

const spec = {
  schema: 'risheh.build-spec.v1', version: '1.0.0', project: { id: 'demo', name: 'Demo' }, brand: {},
  industry: { id: 'legal', archetype: 'institutional-authority' }, design: { dna: ['swiss-grid'], tokens: {} },
  pages: [{ id: 'home', route: '/' }], sections: [], content: {}, seo: {}, accessibility: {}, responsive: {}, motion: {},
  implementation: { framework: 'Next.js', language: 'TypeScript', styling: 'Tailwind CSS' },
  provenance: { factory_version: '2.1.0', template_id: 'legal/institutional-authority', reference_sources: [] },
};

test('agent prompt names immutable boundaries', () => {
  const prompt = buildAgentEnhancementPrompt(spec);
  assert.match(prompt, /Do not change routes/);
  assert.match(prompt, /Do not invent factual business content/);
});

test('agent invariant rejects route changes', () => {
  const changed = structuredClone(spec);
  changed.pages[0].route = '/changed';
  assert.throws(() => assertAgentInvariant(spec, changed), /AGENT_POLICY_VIOLATION|immutable/);
});
