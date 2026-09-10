'use client';

import { useState } from 'react';
import type { BuildSpec } from '@/types/factory';

type GenerationState =
  | { kind: 'idle'; message: string }
  | { kind: 'running'; message: string }
  | { kind: 'success'; message: string; outputPath: string; fileCount: number }
  | { kind: 'error'; message: string };

export function GenerateProjectPanel({ disabled, getBuildSpec }: { disabled: boolean; getBuildSpec: () => Promise<BuildSpec | null> }) {
  const [state, setState] = useState<GenerationState>({ kind: 'idle', message: 'Generate a standalone Next.js project from this Build Spec.' });

  async function generate() {
    const spec = await getBuildSpec();
    if (!spec) return;
    setState({ kind: 'running', message: 'Generating file plan, emitting project, installing dependencies, linting and building…' });
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ buildSpec: spec, mode: 'deterministic' }),
      });
      const result = await response.json() as {
        ok: boolean;
        stage?: string;
        error?: string;
        artifact?: { outputPath: string; fileCount: number };
        quality?: { gates: Record<string, boolean> };
      };
      if (!response.ok || !result.ok || !result.artifact) throw new Error(`${result.stage ? `${result.stage}: ` : ''}${result.error ?? 'Generation failed.'}`);
      setState({ kind: 'success', message: 'Production project generated and quality gates passed.', outputPath: result.artifact.outputPath, fileCount: result.artifact.fileCount });
    } catch (error) {
      setState({ kind: 'error', message: error instanceof Error ? error.message : 'Generation failed.' });
    }
  }

  return (
    <section className="handoff-block c2-panel" aria-live="polite">
      <h2>C2 Production Generator</h2>
      <p>{state.message}</p>
      <button className="primary-button" disabled={disabled || state.kind === 'running'} onClick={() => void generate()}>
        {state.kind === 'running' ? 'Generating…' : 'Generate Next.js project'}
      </button>
      {state.kind === 'success' && (
        <div className="generation-result">
          <strong>{state.fileCount} generated files</strong>
          <code>{state.outputPath}</code>
        </div>
      )}
      {state.kind === 'error' && <div className="status-message error">{state.message}</div>}
    </section>
  );
}
