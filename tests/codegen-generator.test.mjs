import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { loadFactoryCatalog } from '../src/lib/catalog.ts';
import { generateProjectPlan } from '../src/features/codegen/generator.ts';

async function fixture(name) {
  return JSON.parse(await fs.readFile(new URL(`./fixtures/codegen/${name}`, import.meta.url), 'utf8'));
}

test('same Build Spec produces the same deterministic file set', async () => {
  const catalog = await loadFactoryCatalog();
  const spec = await fixture('ltr-service.build.json');
  const first = generateProjectPlan(spec, catalog);
  const second = generateProjectPlan(spec, catalog);
  assert.deepEqual(first.files.map(({ path, hash }) => ({ path, hash })), second.files.map(({ path, hash }) => ({ path, hash })));
  assert.ok(first.files.some((file) => file.path === 'app/page.tsx'));
  assert.ok(first.files.some((file) => file.path === 'app/services/page.tsx'));
  assert.ok(first.files.some((file) => file.path === 'risheh-generation.json'));
});

test('rtl fixture binds document direction and architecture fixture resolves gallery patterns', async () => {
  const catalog = await loadFactoryCatalog();
  const rtl = generateProjectPlan(await fixture('rtl-legal.build.json'), catalog);
  const layout = rtl.files.find((file) => file.path === 'app/layout.tsx');
  assert.match(layout.content, /dir=\{site\.locale\.direction\}/);
  const architecture = generateProjectPlan(await fixture('architecture-gallery.build.json'), catalog);
  const sections = architecture.files.find((file) => file.path === 'components/sections/generated.tsx');
  assert.match(sections.content, /PortfolioGallery/);
});
