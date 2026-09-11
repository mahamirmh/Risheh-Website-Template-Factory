import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyFileChange } from '../../src/features/regeneration/classify.ts';
import { mergeText } from '../../src/features/regeneration/merge.ts';
import { buildRegenerationPlan } from '../../src/features/regeneration/plan.ts';
import { hashContent, hashBuildSpec } from '../../src/features/regeneration/hash.ts';

test('hashes are stable for content and normalized object key order', () => {
  assert.equal(hashContent('abc'), hashContent('abc'));
  assert.equal(hashBuildSpec({ b: 2, a: 1 }), hashBuildSpec({ a: 1, b: 2 }));
});

test('classification protects manual edits and deletions', () => {
  assert.equal(classifyFileChange({ path:'a.ts', base:'base', current:'base', next:'next', ownership:'factory-owned' }).status, 'update-factory');
  assert.equal(classifyFileChange({ path:'a.ts', base:'base', current:'user', next:'base', ownership:'factory-owned' }).status, 'preserve-user');
  assert.equal(classifyFileChange({ path:'a.ts', base:'base', current:'user', next:null, ownership:'factory-owned' }).status, 'conflict');
  assert.equal(classifyFileChange({ path:'a.ts', base:'base', current:null, next:'base', ownership:'factory-owned' }).status, 'conflict');
  assert.equal(classifyFileChange({ path:'a.ts', base:null, current:'user', next:'factory', ownership:'user-owned' }).status, 'conflict');
});

test('three-way merge merges separate line edits and blocks overlap', () => {
  const base = 'one\ntwo\nthree\n';
  const safe = mergeText({ path:'a.ts', base, current:'ONE\ntwo\nthree\n', next:'one\ntwo\nTHREE\n' });
  assert.equal(safe.status, 'merged');
  if (safe.status === 'merged') assert.equal(safe.content, 'ONE\ntwo\nTHREE\n');
  const conflict = mergeText({ path:'a.ts', base, current:'one\nUSER\nthree\n', next:'one\nFACTORY\nthree\n' });
  assert.equal(conflict.status, 'conflict');
});

test('regeneration plan is deterministic and counts conflicts', () => {
  const input = {
    projectId:'demo', previousGenerationId:'g1', nextGenerationId:'g2',
    baseline: new Map([['a.ts','base']]),
    current: new Map([['a.ts','user'], ['notes.md','mine']]),
    next: new Map([['a.ts','base'], ['new.ts','factory']]),
  };
  const first = buildRegenerationPlan(input);
  const second = buildRegenerationPlan(input);
  assert.deepEqual(first, second);
  assert.equal(first.counts.preserved, 1);
  assert.equal(first.counts.added, 1);
  assert.equal(first.entries.some((entry) => entry.path === 'notes.md'), false);
});
