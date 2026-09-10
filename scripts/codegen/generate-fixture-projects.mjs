import fs from 'node:fs/promises';
import path from 'node:path';
import { loadFactoryCatalog } from '../../src/lib/catalog.ts';
import { generateProjectPlan } from '../../src/features/codegen/generator.ts';
import { writeFilePlan } from '../../src/features/codegen/runtime.ts';

const root = path.join(process.cwd(), '.generated', 'fixtures');
await fs.rm(root, { recursive: true, force: true });
await fs.mkdir(root, { recursive: true });
const catalog = await loadFactoryCatalog();
const names = ['ltr-service.build.json', 'rtl-legal.build.json', 'architecture-gallery.build.json'];
for (const name of names) {
  const spec = JSON.parse(await fs.readFile(path.join(process.cwd(), 'tests', 'fixtures', 'codegen', name), 'utf8'));
  const plan = generateProjectPlan(spec, catalog);
  const result = await writeFilePlan(plan, root);
  console.log(`${name} -> ${result.outputPath} (${result.fileCount} files)`);
}
