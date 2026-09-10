import test from 'node:test';
import assert from 'node:assert/strict';
import { hashContent, validateFilePlan } from '../src/features/codegen/file-plan.ts';

test('content hashes are deterministic', () => {
  assert.equal(hashContent('same'), hashContent('same'));
  assert.notEqual(hashContent('same'), hashContent('different'));
});

test('file plan sorts paths and rejects duplicates', () => {
  const file = (path) => ({ path, kind: 'config', owner: 'test', sources: [], content: '', hash: hashContent(''), overwrite: 'replace-generated' });
  const plan = validateFilePlan({ projectId: 'demo', files: [file('z.txt'), file('a.txt')] });
  assert.deepEqual(plan.files.map((item) => item.path), ['a.txt', 'z.txt']);
  assert.throws(() => validateFilePlan({ projectId: 'demo', files: [file('a.txt'), file('a.txt')] }), /Duplicate generated path/);
});
