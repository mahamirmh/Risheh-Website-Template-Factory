import { NextResponse } from 'next/server';
import type { BuildSpec } from '@/types/factory';
import { validateBuildSpec } from '@/lib/validation';
import { loadFactoryCatalog } from '@/lib/catalog';
import { generateProjectPlan } from '@/features/codegen/generator';
import { resolveGenerationModel } from '@/features/codegen/resolve';
import { checkPlanQuality, assertQuality, runGeneratedProjectQuality, writeQualityToProvenance } from '@/features/codegen/quality';
import { writeFilePlan } from '@/features/codegen/runtime';
import { CodegenError } from '@/features/codegen/errors';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { buildSpec?: unknown; mode?: 'deterministic' | 'deterministic+agent' };
    const validation = validateBuildSpec(body.buildSpec);
    if (!validation.valid) return NextResponse.json({ ok: false, stage: 'validate-input', errors: validation.errors }, { status: 400 });
    const buildSpec = body.buildSpec as BuildSpec;
    const mode = body.mode ?? 'deterministic';
    if (mode !== 'deterministic') return NextResponse.json({ ok: false, stage: 'agent', error: 'Agent enhancement requires an explicit provider adapter and is not enabled by default.' }, { status: 400 });

    const catalog = await loadFactoryCatalog();
    const model = resolveGenerationModel(buildSpec, catalog);
    const plan = generateProjectPlan(buildSpec, catalog, mode);
    const staticReport = checkPlanQuality(model, plan);
    assertQuality(staticReport);
    const artifact = await writeFilePlan(plan);
    const buildReport = await runGeneratedProjectQuality(artifact.outputPath);
    const combined = {
      ok: staticReport.ok && buildReport.ok,
      gates: { ...staticReport.gates, ...buildReport.gates },
      diagnostics: [...staticReport.diagnostics, ...buildReport.diagnostics],
    };
    await writeQualityToProvenance(artifact.outputPath, combined);
    assertQuality(combined);
    return NextResponse.json({ ok: true, stage: 'complete', artifact, quality: combined });
  } catch (error) {
    if (error instanceof CodegenError) {
      return NextResponse.json({ ok: false, stage: error.stage, code: error.code, error: error.message, details: error.details }, { status: 422 });
    }
    return NextResponse.json({ ok: false, stage: 'emit', error: error instanceof Error ? error.message : 'Generation failed.' }, { status: 500 });
  }
}
