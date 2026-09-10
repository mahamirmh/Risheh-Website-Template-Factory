import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import YAML from 'yaml';

const dna = YAML.parse(fs.readFileSync('design-dna/catalog.yaml','utf8'));
const patterns = YAML.parse(fs.readFileSync('patterns/catalog.yaml','utf8'));
const industries = YAML.parse(fs.readFileSync('industries/catalog.yaml','utf8'));

const archetypes = industries.industries.flatMap(i => i.archetypes.map(a => ({...a, industry:i.id})));

test('factory meets minimum catalog size', () => {
  assert.ok(dna.profiles.length >= 12);
  assert.ok(patterns.patterns.length >= 24);
  assert.ok(industries.industries.length >= 16);
  assert.ok(archetypes.length >= 48);
});

test('every industry has at least three archetypes', () => {
  for (const industry of industries.industries) assert.ok(industry.archetypes.length >= 3, industry.id);
});

test('all archetype references resolve', () => {
  const dnaIds = new Set(dna.profiles.map(x => x.id));
  const patternIds = new Set(patterns.patterns.map(x => x.id));
  for (const a of archetypes) {
    for (const id of a.design_dna) assert.ok(dnaIds.has(id), `${a.industry}:${a.id} missing DNA ${id}`);
    for (const id of a.patterns) assert.ok(patternIds.has(id), `${a.industry}:${a.id} missing pattern ${id}`);
  }
});

test('rtl and ltr are first-class factory targets', () => {
  const businessSchema = JSON.parse(fs.readFileSync('schemas/business.schema.json','utf8'));
  const directions = businessSchema.properties.locale.properties.direction.enum;
  assert.deepEqual(new Set(directions), new Set(['rtl','ltr']));
});

test('phase C build-spec contract is stable', () => {
  const schema = JSON.parse(fs.readFileSync('schemas/build-spec.schema.json','utf8'));
  assert.equal(schema.$id, 'risheh.build-spec.v1');
  for (const key of ['project','brand','industry','design','pages','sections','content','seo','accessibility','responsive','motion','implementation','provenance']) {
    assert.ok(schema.required.includes(key), key);
  }
});
