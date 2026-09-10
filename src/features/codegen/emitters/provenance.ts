import type { FilePlan, GeneratedFile, GenerationMode, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';
import { buildProvenance } from '../provenance.ts';

export function emitProvenance(model: GenerationModel, plan: FilePlan, mode: GenerationMode): GeneratedFile {
  const provenance = buildProvenance(model, plan, mode);
  return makeGeneratedFile({
    path: 'risheh-generation.json',
    kind: 'provenance',
    owner: 'provenance',
    sources: ['build-spec','factory-version','file-plan'],
    content: `${JSON.stringify(provenance, null, 2)}\n`,
    overwrite: 'replace-generated',
  });
}
