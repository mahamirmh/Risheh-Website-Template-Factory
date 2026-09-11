import { createHash } from 'node:crypto';

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value as Record<string,unknown>).sort(([a],[b]) => a.localeCompare(b)).map(([k,v]) => [k, canonical(v)]));
  return value;
}
export function canonicalJson(value: unknown) { return JSON.stringify(canonical(value)); }
export function hashContent(content: string) { return createHash('sha256').update(content).digest('hex'); }
export function hashBuildSpec(value: unknown) { return hashContent(canonicalJson(value)); }
export function createGenerationId(projectId: string, sequence: number, buildSpecHash: string) { return `${projectId}-g${sequence}-${buildSpecHash.slice(0,12)}`; }
