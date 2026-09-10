import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';

export function emitUiComponents(_model: GenerationModel): GeneratedFile[] {
  const content = `import type { ReactNode } from 'react';\n\nexport function Container({ children, className = '' }: { children: ReactNode; className?: string }) {\n  return <div className={\`shell \${className}\`.trim()}>{children}</div>;\n}\n`;
  return [makeGeneratedFile({ path: 'components/ui/Container.tsx', kind: 'component', owner: 'components', sources: ['layout'], content, overwrite: 'replace-generated' })];
}
