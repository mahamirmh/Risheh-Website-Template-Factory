import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const root = process.cwd();
const loadYaml = (p) => YAML.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const fail = (m) => { throw new Error(m); };
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const dna = loadYaml('design-dna/catalog.yaml');
const patterns = loadYaml('patterns/catalog.yaml');
const industries = loadYaml('industries/catalog.yaml');

const dnaIds = new Set();
for (const p of dna.profiles ?? []) {
  if (!kebab.test(p.id)) fail(`Invalid Design DNA id: ${p.id}`);
  if (dnaIds.has(p.id)) fail(`Duplicate Design DNA id: ${p.id}`);
  dnaIds.add(p.id);
}

const patternIds = new Set();
for (const p of patterns.patterns ?? []) {
  if (!kebab.test(p.id)) fail(`Invalid pattern id: ${p.id}`);
  if (patternIds.has(p.id)) fail(`Duplicate pattern id: ${p.id}`);
  patternIds.add(p.id);
}

const industryIds = new Set();
const archetypeIds = new Set();
let archetypeCount = 0;
for (const industry of industries.industries ?? []) {
  if (!kebab.test(industry.id)) fail(`Invalid industry id: ${industry.id}`);
  if (industryIds.has(industry.id)) fail(`Duplicate industry id: ${industry.id}`);
  industryIds.add(industry.id);
  if (!Array.isArray(industry.archetypes) || industry.archetypes.length < 3) fail(`Industry ${industry.id} must contain at least 3 archetypes`);
  for (const a of industry.archetypes) {
    archetypeCount++;
    if (!kebab.test(a.id)) fail(`Invalid archetype id: ${a.id}`);
    const globalId = `${industry.id}:${a.id}`;
    if (archetypeIds.has(globalId)) fail(`Duplicate archetype id: ${globalId}`);
    archetypeIds.add(globalId);
    if (!Array.isArray(a.design_dna) || a.design_dna.length === 0) fail(`${globalId} has no Design DNA`);
    for (const id of a.design_dna) if (!dnaIds.has(id)) fail(`${globalId} references missing Design DNA: ${id}`);
    if (!Array.isArray(a.patterns) || a.patterns.length < 3) fail(`${globalId} must reference at least 3 patterns`);
    for (const id of a.patterns) if (!patternIds.has(id)) fail(`${globalId} references missing pattern: ${id}`);
    if (!Array.isArray(a.pages) || a.pages.length < 3) fail(`${globalId} must define at least 3 pages`);
    for (const key of ['primary_goal','proof_model','conversion_model','motion','content_density']) if (!a[key]) fail(`${globalId} missing ${key}`);
  }
}

if (dnaIds.size < 12) fail(`Expected >=12 Design DNA profiles, got ${dnaIds.size}`);
if (patternIds.size < 24) fail(`Expected >=24 patterns, got ${patternIds.size}`);
if (industryIds.size < 16) fail(`Expected >=16 industries, got ${industryIds.size}`);
if (archetypeCount < 48) fail(`Expected >=48 archetypes, got ${archetypeCount}`);

console.log(`Factory valid: ${industryIds.size} industries, ${archetypeCount} archetypes, ${dnaIds.size} Design DNA profiles, ${patternIds.size} patterns.`);
