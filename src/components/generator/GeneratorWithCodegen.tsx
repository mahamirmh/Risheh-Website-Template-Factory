'use client';

import { GeneratorWorkspace } from './GeneratorWorkspace';
import { GenerateProjectPanel } from './GenerateProjectPanel';
import { composeBuildSpec, validateDraftForBuild } from '@/features/generator/build-spec';
import { loadDraft } from '@/features/generator/persistence';
import type { FactoryCatalog } from '@/types/factory';

export function GeneratorWithCodegen({ catalog }: { catalog: FactoryCatalog }) {
  async function getBuildSpec() {
    const draft = loadDraft();
    if (!draft) return null;
    const errors = validateDraftForBuild(catalog, draft);
    if (errors.length) throw new Error(errors.join(' '));
    const spec = composeBuildSpec(catalog, draft);
    const response = await fetch('/api/build-spec', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(spec) });
    const validation = await response.json() as { valid: boolean; errors?: { path: string; message: string }[] };
    if (!validation.valid) throw new Error(validation.errors?.map((item) => `${item.path}: ${item.message}`).join(' · ') || 'Build Spec validation failed.');
    return spec;
  }

  return (
    <>
      <GeneratorWorkspace catalog={catalog} />
      <div className="c2-dock">
        <GenerateProjectPanel disabled={false} getBuildSpec={getBuildSpec} />
      </div>
    </>
  );
}
