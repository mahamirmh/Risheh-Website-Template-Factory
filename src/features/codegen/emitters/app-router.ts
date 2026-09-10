import type { GeneratedFile, GenerationModel } from '../model.ts';
import { makeGeneratedFile } from '../file-plan.ts';

function pageTitle(id: string) {
  return id.split(/[-_]/g).filter(Boolean).map((part) => part[0]?.toUpperCase() + part.slice(1)).join(' ');
}

export function emitAppRouter(model: GenerationModel): GeneratedFile[] {
  const files: GeneratedFile[] = [];
  const layout = `import type { Metadata } from 'next';\nimport Link from 'next/link';\nimport './globals.css';\nimport { site } from '@/content/site';\n\nexport const metadata: Metadata = { title: site.project.name, description: site.brand.positioning || undefined };\n\nexport default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {\n  return (\n    <html lang={site.locale.language} dir={site.locale.direction}>\n      <body>\n        <header className="site-header">\n          <div className="shell site-header__inner">\n            <Link href="/" aria-label={site.brand.name}>{site.brand.name}</Link>\n            <nav className="site-nav" aria-label="Primary navigation">\n              {site.routes.map((item) => <Link key={item.route} href={item.route}>{item.id === 'home' ? 'Home' : item.id.replaceAll('-', ' ')}</Link>)}\n            </nav>\n          </div>\n        </header>\n        {children}\n        <footer className="site-footer"><div className="shell"><span>{site.brand.name}</span></div></footer>\n      </body>\n    </html>\n  );\n}\n`;
  files.push(makeGeneratedFile({ path: 'app/layout.tsx', kind: 'route', owner: 'app-router', sources: ['project','brand','pages','locale'], content: layout, overwrite: 'replace-generated' }));

  for (const route of model.routes) {
    const pageSections = model.sections.filter((section) => section.pageId === route.id);
    const imports = [...new Set(pageSections.map((section) => section.componentName))].sort();
    const importLine = imports.length ? `import { ${imports.join(', ')} } from '@/components/sections/generated';\n` : '';
    const rendered = pageSections.map((section, index) => {
      const isFirstHero = index === 0 && section.patternId.startsWith('hero-');
      const props = isFirstHero
        ? ` id=${JSON.stringify(section.id)} title={site.content.heroTitle} subtitle={site.content.heroSubtitle} actionLabel={site.content.primaryCta}`
        : ` id=${JSON.stringify(section.id)}`;
      return `      <${section.componentName}${props} />`;
    }).join('\n');
    const empty = `      <section className="section"><div className="section__inner"><div className="section__label">Page</div><h1>${pageTitle(route.id)}</h1><p>Explore this section of the website.</p></div></section>`;
    const page = `${importLine}import { site } from '@/content/site';\n\nexport default function Page() {\n  return (\n    <main>\n${rendered || empty}\n    </main>\n  );\n}\n`;
    files.push(makeGeneratedFile({ path: route.filePath, kind: 'route', owner: 'app-router', sources: [`page:${route.id}`, ...pageSections.map((section) => `pattern:${section.patternId}`)], content: page, overwrite: 'replace-generated' }));
  }
  return files;
}
