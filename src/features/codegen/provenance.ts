import type { FilePlan, GenerationMode, GenerationModel } from './model.ts';

export type GenerationProvenance = {
  schema: 'risheh.generation.v1';
  generatorVersion: string;
  factoryVersion: string;
  buildSpec: { schema: 'risheh.build-spec.v1'; version: string; projectId: string };
  industry: { id: string; archetype: string };
  designDna: string[];
  patterns: string[];
  mode: GenerationMode;
  files: { path: string; hash: string }[];
  quality: { status: 'pending' | 'passed' | 'failed'; gates: Record<string, boolean> };
};

export function buildProvenance(model: GenerationModel, plan: FilePlan, mode: GenerationMode = 'deterministic'): GenerationProvenance {
  return {
    schema: 'risheh.generation.v1',
    generatorVersion: '1.0.0',
    factoryVersion: model.factoryVersion,
    buildSpec: { schema: 'risheh.build-spec.v1', version: model.buildSpec.version, projectId: model.project.id },
    industry: { id: model.industry.id, archetype: model.industry.archetype },
    designDna: [...model.design.dnaIds],
    patterns: [...new Set(model.sections.map((section) => section.patternId))].sort(),
    mode,
    files: plan.files.map((file) => ({ path: file.path, hash: file.hash })).sort((a, b) => a.path.localeCompare(b.path)),
    quality: { status: 'pending', gates: {} },
  };
}
