import fs from 'node:fs';
import YAML from 'yaml';

const industries = YAML.parse(fs.readFileSync('industries/catalog.yaml', 'utf8'));
const fail = (m) => { throw new Error(m); };
const fields = ['proof_model', 'conversion_model', 'motion', 'content_density'];

const distinctCount = (a, b) => {
  let n = 0;
  if (JSON.stringify(a.design_dna) !== JSON.stringify(b.design_dna)) n++;
  for (const f of fields) if (a[f] !== b[f]) n++;
  if (JSON.stringify(a.patterns) !== JSON.stringify(b.patterns)) n++;
  if (JSON.stringify(a.pages) !== JSON.stringify(b.pages)) n++;
  return n;
};

for (const industry of industries.industries) {
  const items = industry.archetypes;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const d = distinctCount(items[i], items[j]);
      if (d < 2) fail(`${industry.id}: ${items[i].id} and ${items[j].id} are not materially distinct (${d} dimensions)`);
    }
  }
  for (const a of items) {
    if (a.motion === 'high' && !a.design_dna.includes('immersive-3d')) {
      // High motion is allowed only when intentionally backed by the immersive profile.
      fail(`${industry.id}:${a.id} uses high motion without immersive-3d safeguards`);
    }
    if (a.content_density === 'high' && a.design_dna.includes('cinematic')) {
      fail(`${industry.id}:${a.id} combines high content density with cinematic DNA; split the narrative or change DNA`);
    }
  }
}

console.log('Semantic quality gates passed: archetypes are materially differentiated and high-risk combinations are guarded.');
