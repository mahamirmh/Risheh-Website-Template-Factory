import type { BuildSpec } from '@/types/factory';

function stringify(spec: BuildSpec) {
  return JSON.stringify(spec, null, 2);
}

export function createAgentHandoff(spec: BuildSpec, target: 'codex' | 'claude' | 'generic'): string {
  const targetLabel = target === 'codex' ? 'Codex' : target === 'claude' ? 'Claude Code' : 'coding agent';
  return `You are implementing a production website from a Risheh Website Template Factory Build Spec.\n\nTarget: ${targetLabel}\nContract: risheh.build-spec.v1\n\nRules:\n- Treat the Build Spec as the source of truth.\n- Preserve information architecture, selected Design DNA, patterns, locale direction, accessibility and responsive rules.\n- Do not invent testimonials, metrics, legal claims, credentials, pricing or client data.\n- Use semantic HTML and production-quality responsive behavior.\n- Respect prefers-reduced-motion.\n- Keep all brand-specific content replaceable.\n- Ask only when a missing business fact blocks a truthful implementation.\n\nBuild Spec:\n\n${stringify(spec)}\n`;
}
