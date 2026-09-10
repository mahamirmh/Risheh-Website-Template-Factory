import { access, readFile, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import type { FilePlan, GenerationModel } from './model.ts';
import { scanForbiddenContent } from './content.ts';
import { CodegenError, CODES } from './errors.ts';

const execFileAsync = promisify(execFile);

export type QualityReport = {
  ok: boolean;
  gates: Record<string, boolean>;
  diagnostics: string[];
};

export function checkPlanQuality(model: GenerationModel, plan: FilePlan): QualityReport {
  const paths = new Set(plan.files.map((file) => file.path));
  const diagnostics: string[] = [];
  const routeExistence = model.routes.every((route) => paths.has(route.filePath));
  if (!routeExistence) diagnostics.push('One or more declared routes do not have generated page files.');
  const uniquePaths = paths.size === plan.files.length;
  if (!uniquePaths) diagnostics.push('Generated file paths are not unique.');
  const contentScan = scanForbiddenContent(plan.files);
  if (!contentScan.ok) diagnostics.push(...contentScan.findings.map((finding) => `${finding.path}: ${finding.reason}`));
  const rtlStructure = model.locale.direction !== 'rtl' || plan.files.some((file) => file.path === 'app/layout.tsx' && file.content.includes('dir={site.locale.direction}'));
  if (!rtlStructure) diagnostics.push('RTL project does not bind document direction.');
  const provenance = paths.has('risheh-generation.json');
  if (!provenance) diagnostics.push('Missing risheh-generation.json.');
  const gates = { routeExistence, uniquePaths, contentIntegrity: contentScan.ok, rtlStructure, provenance };
  return { ok: Object.values(gates).every(Boolean), gates, diagnostics };
}

async function run(projectRoot: string, command: string, args: string[]) {
  try {
    const { stdout, stderr } = await execFileAsync(command, args, { cwd: projectRoot, maxBuffer: 10 * 1024 * 1024, env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' } });
    return { ok: true, output: `${stdout}\n${stderr}`.trim() };
  } catch (error) {
    const value = error as { stdout?: string; stderr?: string; message?: string };
    return { ok: false, output: `${value.stdout ?? ''}\n${value.stderr ?? ''}\n${value.message ?? ''}`.trim() };
  }
}

export async function runGeneratedProjectQuality(projectRoot: string): Promise<QualityReport> {
  await access(path.join(projectRoot, 'package.json'), constants.R_OK);
  const diagnostics: string[] = [];
  const install = await run(projectRoot, 'npm', ['install', '--no-audit', '--no-fund']);
  if (!install.ok) diagnostics.push(`npm install failed:\n${install.output}`);
  const lint = install.ok ? await run(projectRoot, 'npm', ['run', 'lint']) : { ok: false, output: 'skipped' };
  if (install.ok && !lint.ok) diagnostics.push(`lint failed:\n${lint.output}`);
  const build = install.ok ? await run(projectRoot, 'npm', ['run', 'build']) : { ok: false, output: 'skipped' };
  if (install.ok && !build.ok) diagnostics.push(`build failed:\n${build.output}`);
  const gates = { install: install.ok, lint: lint.ok, build: build.ok };
  return { ok: Object.values(gates).every(Boolean), gates, diagnostics };
}

export async function writeQualityToProvenance(projectRoot: string, report: QualityReport) {
  const target = path.join(projectRoot, 'risheh-generation.json');
  const data = JSON.parse(await readFile(target, 'utf8')) as Record<string, unknown>;
  data.quality = { status: report.ok ? 'passed' : 'failed', gates: report.gates, diagnostics: report.diagnostics };
  await writeFile(target, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

export function assertQuality(report: QualityReport) {
  if (!report.ok) throw new CodegenError('quality', CODES.QUALITY_GATE_FAILED, 'Generated project quality gates failed', { details: report });
}
