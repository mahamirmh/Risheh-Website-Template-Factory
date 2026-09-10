import type { FilePlan, GenerationMode, GenerationModel } from '../model.ts';
import { createFilePlan, validateFilePlan } from '../file-plan.ts';
import { emitPackageFiles } from './package-json.ts';
import { emitContent } from './content.ts';
import { emitStyles } from './styles.ts';
import { emitSections } from './sections.ts';
import { emitUiComponents } from './components.ts';
import { emitSeo } from './seo.ts';
import { emitAppRouter } from './app-router.ts';
import { emitReadme } from './readme.ts';
import { emitProvenance } from './provenance.ts';

export function emitDeterministicProject(model: GenerationModel, mode: GenerationMode = 'deterministic'): FilePlan {
  const baseFiles = [
    ...emitPackageFiles(model),
    ...emitContent(model),
    ...emitStyles(model),
    ...emitSections(model),
    ...emitUiComponents(model),
    ...emitSeo(model),
    ...emitAppRouter(model),
    ...emitReadme(model),
  ];
  const basePlan = createFilePlan(model, baseFiles);
  const provenanceFile = emitProvenance(model, basePlan, mode);
  return validateFilePlan({ projectId: model.project.id, files: [...basePlan.files, provenanceFile] });
}
