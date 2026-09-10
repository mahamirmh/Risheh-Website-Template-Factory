import test from 'node:test';
import assert from 'node:assert/strict';
import { scanForbiddenContent } from '../src/features/codegen/content.ts';

test('forbidden factual placeholder claims are rejected', () => {
  const result = scanForbiddenContent([{ path: 'app/page.tsx', content: 'Trusted by 10,000 clients' }]);
  assert.equal(result.ok, false);
});

test('neutral structural copy passes', () => {
  const result = scanForbiddenContent([{ path: 'app/page.tsx', content: 'Explore services and Contact' }]);
  assert.equal(result.ok, true);
});
