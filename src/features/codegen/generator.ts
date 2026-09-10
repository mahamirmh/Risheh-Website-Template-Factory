import type { BuildSpec, FactoryCatalog } from '../../types/factory.ts';
import type { FilePlan, GenerationMode } from './model.ts';
import { resolveGenerationModel } from './resolve.ts';
import { emitDeterministicProject } from './emitters/project.ts';
import { scanForbiddenContent } from './content.ts';
import { CodegenError, CODES } from './errors.ts';

export function generateProjectPlan(buildSpec: BuildSpec, catalog: FactoryCatalog, mode: GenerationMode = 'deterministic'): FilePlan {
  if (buildSpec.schema !== 'risheh.build-spec.v1') {
    throw new CodegenError('validate-input', CODES.INVALID_BUILD_SPEC, 'Expected risheh.build-spec.v1');
  }
  const model = resolveGenerationModel(buildSpec, catalog);
  const plan = emitDeterministicProject(model, mode);
  const scan = scanForbiddenContent(plan.files);
  if (!scan.ok) throw new CodegenError('quality', CODES.QUALITY_GATE_FAILED, 'Generated content integrity scan failed', { details: scan.findings });
  return plan;
}
