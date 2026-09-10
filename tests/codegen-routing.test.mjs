import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, routeToAppPath } from '../src/features/codegen/routes.ts';
import { sanitizeProjectId } from '../src/features/codegen/naming.ts';

test('normalizes safe routes into App Router file paths', () => {
  assert.equal(normalizeRoute('/services/'), '/services');
  assert.equal(routeToAppPath('/services'), 'app/services/page.tsx');
  assert.equal(routeToAppPath('/'), 'app/page.tsx');
});

test('rejects traversal and unsafe project ids', () => {
  assert.throws(() => normalizeRoute('/../secret'), /UNSAFE_ROUTE/);
  assert.throws(() => sanitizeProjectId('../../escape'), /unsafe/i);
});
