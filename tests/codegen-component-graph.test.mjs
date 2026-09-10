import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import YAML from 'yaml';
import { PATTERN_COMPONENTS } from '../src/features/codegen/component-graph.ts';

test('every pattern in the Factory catalog has a supported component family', async () => {
  const source = await fs.readFile(new URL('../patterns/catalog.yaml', import.meta.url), 'utf8');
  const catalog = YAML.parse(source);
  assert.equal(catalog.patterns.length, 27);
  for (const pattern of catalog.patterns) {
    assert.equal(typeof PATTERN_COMPONENTS[pattern.id], 'string', pattern.id);
  }
});
