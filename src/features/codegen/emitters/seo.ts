import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';

export function emitSeo(_model: GenerationModel): GeneratedFile[] {
  const content = `import type { Metadata } from 'next';\n\nexport function makeMetadata(title: string, description?: string): Metadata {\n  return { title, description: description || undefined };\n}\n`;
  return [makeGeneratedFile({ path: 'lib/seo.ts', kind: 'config', owner: 'seo', sources: ['seo'], content, overwrite: 'replace-generated' })];
}
