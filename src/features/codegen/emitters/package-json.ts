import { makeGeneratedFile } from '../file-plan.ts';
import type { GeneratedFile, GenerationModel } from '../model.ts';
import { sanitizeProjectId } from '../naming.ts';

export function emitPackageFiles(model: GenerationModel): GeneratedFile[] {
  const pkg = {
    name: sanitizeProjectId(model.project.id),
    version: '0.1.0',
    private: true,
    scripts: { dev: 'next dev', build: 'next build', start: 'next start', lint: 'eslint .' },
    dependencies: {
      '@tailwindcss/postcss': '^4.1.0',
      next: '16.3.4',
      react: '19.3.0',
      'react-dom': '19.3.0',
      tailwindcss: '^4.1.0',
    },
    devDependencies: {
      '@types/node': '^24.0.0',
      '@types/react': '^19.0.0',
      '@types/react-dom': '^19.0.0',
      eslint: '^9.0.0',
      'eslint-config-next': '16.3.4',
      typescript: '^5.9.0',
    },
  };
  return [
    makeGeneratedFile({ path: 'package.json', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `${JSON.stringify(pkg, null, 2)}\n`, overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: 'tsconfig.json', kind: 'config', owner: 'package-json', sources: ['implementation'], content: JSON.stringify({ compilerOptions: { target: 'ES2017', lib: ['dom','dom.iterable','esnext'], allowJs: false, skipLibCheck: true, strict: true, noEmit: true, esModuleInterop: true, module: 'esnext', moduleResolution: 'bundler', resolveJsonModule: true, isolatedModules: true, jsx: 'react-jsx', incremental: true, plugins: [{ name: 'next' }], paths: { '@/*': ['./*'] } }, include: ['next-env.d.ts','**/*.ts','**/*.tsx','.next/types/**/*.ts'], exclude: ['node_modules'] }, null, 2) + '\n', overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: 'next.config.ts', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `import type { NextConfig } from 'next';\nconst nextConfig: NextConfig = { reactStrictMode: true };\nexport default nextConfig;\n`, overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: 'postcss.config.mjs', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `export default { plugins: { '@tailwindcss/postcss': {} } };\n`, overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: 'eslint.config.mjs', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `import { defineConfig, globalIgnores } from 'eslint/config';\nimport nextVitals from 'eslint-config-next/core-web-vitals';\nexport default defineConfig([...nextVitals, globalIgnores(['.next/**','out/**','build/**','next-env.d.ts'])]);\n`, overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: 'next-env.d.ts', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n`, overwrite: 'replace-generated' }),
    makeGeneratedFile({ path: '.gitignore', kind: 'config', owner: 'package-json', sources: ['implementation'], content: `.next/\nnode_modules/\n.env*\nout/\n.DS_Store\n`, overwrite: 'replace-generated' }),
  ];
}
