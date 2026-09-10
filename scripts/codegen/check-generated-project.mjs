import path from 'node:path';
import { runGeneratedProjectQuality, writeQualityToProvenance } from '../../src/features/codegen/quality.ts';

const target = process.argv[2];
if (!target) throw new Error('Usage: tsx scripts/codegen/check-generated-project.mjs <project-dir>');
const projectRoot = path.resolve(target);
const report = await runGeneratedProjectQuality(projectRoot);
await writeQualityToProvenance(projectRoot, report);
if (!report.ok) {
  console.error(report.diagnostics.join('\n\n'));
  process.exit(1);
}
console.log(`quality passed: ${projectRoot}`);
