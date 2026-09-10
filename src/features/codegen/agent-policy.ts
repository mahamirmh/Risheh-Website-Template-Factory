import type { BuildSpec } from '../../types/factory.ts';
import { CodegenError, CODES } from './errors.ts';

export const AGENT_ALLOWED = Object.freeze([
  'visual-polish',
  'responsive-composition',
  'component-internal-refactor',
  'non-factual-microcopy',
  'accessibility',
  'semantic-markup',
]);

export const AGENT_FORBIDDEN = Object.freeze([
  'route-change',
  'business-claim',
  'testimonial-or-metric-fabrication',
  'build-spec-schema-change',
  'industry-or-archetype-change',
  'dependency-baseline-replacement',
  'accessibility-safeguard-removal',
  'provenance-rewrite',
  'reference-trade-dress-copy',
]);

export function buildAgentEnhancementPrompt(buildSpec: BuildSpec): string {
  return [
    'You are enhancing a deterministic Risheh-generated Next.js project.',
    'Preserve architecture and public behavior. Treat risheh.build-spec.v1 as immutable.',
    `Project: ${buildSpec.project.id}`,
    `Industry/archetype: ${buildSpec.industry.id}/${buildSpec.industry.archetype}`,
    `Routes: ${buildSpec.pages.map((page) => page.route).join(', ')}`,
    `Design DNA: ${buildSpec.design.dna.join(', ')}`,
    `Allowed: ${AGENT_ALLOWED.join(', ')}.`,
    `Forbidden: ${AGENT_FORBIDDEN.join(', ')}.`,
    'Do not invent factual business content. Do not change routes, dependencies, schema identity, provenance, industry or archetype.',
    'After edits, run the full generated-project quality pipeline.',
  ].join('\n');
}

export function assertAgentInvariant(before: BuildSpec, after: BuildSpec) {
  const invariantBefore = JSON.stringify({ schema: before.schema, project: before.project.id, industry: before.industry, routes: before.pages.map((page) => page.route), dna: before.design.dna });
  const invariantAfter = JSON.stringify({ schema: after.schema, project: after.project.id, industry: after.industry, routes: after.pages.map((page) => page.route), dna: after.design.dna });
  if (invariantBefore !== invariantAfter) throw new CodegenError('agent', CODES.AGENT_POLICY_VIOLATION, 'Agent enhancement changed immutable Build Spec identity');
}
