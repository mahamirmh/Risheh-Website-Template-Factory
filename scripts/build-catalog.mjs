import fs from 'node:fs';
import YAML from 'yaml';

const dna = YAML.parse(fs.readFileSync('design-dna/catalog.yaml','utf8'));
const patterns = YAML.parse(fs.readFileSync('patterns/catalog.yaml','utf8'));
const industries = YAML.parse(fs.readFileSync('industries/catalog.yaml','utf8'));

const archetypes = industries.industries.flatMap(industry =>
  industry.archetypes.map(a => ({
    id: `${industry.id}:${a.id}`,
    industry: industry.id,
    status: 'ready',
    design_dna: a.design_dna,
    primary_goal: a.primary_goal
  }))
).sort((a,b)=>a.id.localeCompare(b.id));

const catalog = {
  schema: 'risheh.catalog.v1',
  version: '2.0.0',
  generated_at: 'deterministic',
  industries: industries.industries.map(i => ({id:i.id,name:i.name})).sort((a,b)=>a.id.localeCompare(b.id)),
  archetypes,
  design_dna: dna.profiles.map(p => ({id:p.id,name:p.name})).sort((a,b)=>a.id.localeCompare(b.id)),
  patterns: patterns.patterns.map(p => ({id:p.id,family:p.family})).sort((a,b)=>a.id.localeCompare(b.id))
};

fs.mkdirSync('generated',{recursive:true});
fs.writeFileSync('generated/catalog.json', JSON.stringify(catalog,null,2)+'\n');
console.log(`Generated catalog with ${catalog.archetypes.length} archetypes.`);
