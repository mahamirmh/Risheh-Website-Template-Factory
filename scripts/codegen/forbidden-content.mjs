import fs from 'node:fs/promises';
import path from 'node:path';
import { scanForbiddenContent } from '../../src/features/codegen/content.ts';

const root = path.resolve(process.argv[2] ?? '.generated');
const files = [];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (['node_modules', '.next'].includes(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(absolute);
    else if (/\.(?:ts|tsx|js|jsx|md|json|css|html)$/i.test(entry.name)) files.push({ path: path.relative(root, absolute), content: await fs.readFile(absolute, 'utf8') });
  }
}
await walk(root);
const result = scanForbiddenContent(files);
if (!result.ok) {
  console.error(result.findings.map((item) => `${item.path}: ${item.reason} (${item.match ?? ''})`).join('\n'));
  process.exit(1);
}
console.log(`forbidden-content scan passed (${files.length} files)`);
