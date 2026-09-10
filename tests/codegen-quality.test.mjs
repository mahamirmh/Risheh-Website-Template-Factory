import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { loadFactoryCatalog } from '../src/lib/catalog.ts';
import { resolveGenerationModel } from '../src/features/codegen/resolve.ts';
import { generateProjectPlan } from '../src/features/codegen/generator.ts';
import { checkPlanQuality } from '../src/features/codegen/quality.ts';

async function fixture(name) {
  return JSON.parse(await fs.readFile(new URL(`./fixtures/codegen/${name}`, import.meta.url), 'utf8'));
}

test('representative generated plans pass structural quality gates', async () => {
  const catalog = await loadFactoryCatalog();
  for (const name of ['ltr-service.build.json', 'rtl-legal.build.json', 'architecture-gallery.build.json']) {
    const spec = await fixture(name);
    const model = resolveGenerationModel(spec, catalog);
    const plan = generateProjectPlan(spec, catalog);
    const report = checkPlanQuality(model, plan);
    assert.equal(report.ok, true, `${name}: ${report.diagnostics.join('; ')}`);
  }
});
