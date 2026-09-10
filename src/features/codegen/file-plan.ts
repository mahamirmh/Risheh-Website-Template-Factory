import { createHash } from 'node:crypto';
import type { FilePlan, GeneratedFile, GenerationModel } from './model.ts';
import { CodegenError, CODES } from './errors.ts';

export function hashContent(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

export function makeGeneratedFile(input: Omit<GeneratedFile, 'hash'>): GeneratedFile {
  return { ...input, hash: hashContent(input.content) };
}

export function validateFilePlan(plan: FilePlan): FilePlan {
  const seen = new Set<string>();
  const files = [...plan.files].sort((a, b) => a.path.localeCompare(b.path));
  for (const file of files) {
    if (!file.path || file.path.startsWith('/') || file.path.includes('..') || file.path.includes('\\')) {
      throw new CodegenError('file-plan', CODES.DUPLICATE_FILE_PATH, `Unsafe generated path: ${file.path}`);
    }
    if (seen.has(file.path)) throw new CodegenError('file-plan', CODES.DUPLICATE_FILE_PATH, `Duplicate generated path: ${file.path}`);
    seen.add(file.path);
  }
  return { ...plan, files };
}

export function createFilePlan(model: GenerationModel, files: GeneratedFile[]): FilePlan {
  return validateFilePlan({ projectId: model.project.id, files });
}
