import type { GeneratorDraft } from '@/types/factory';

export function createDefaultDraft(): GeneratorDraft {
  return {
    draftVersion: '1',
    project: { id: 'new-project', name: 'Untitled Website' },
    business: { name: '', positioning: '', primaryGoal: '' },
    industryId: null,
    archetypeId: null,
    designDnaIds: [],
    pages: [],
    patternIds: [],
    brand: { primaryColor: '#111111', secondaryColor: '#ffffff', fontFamily: 'System UI' },
    content: { heroTitle: '', heroSubtitle: '', primaryCta: '' },
    locale: { language: 'fa', direction: 'rtl', country: 'IR' },
    seo: { localTarget: '', indexable: true },
    accessibility: { target: 'AA', reducedMotion: true },
    responsive: { mobileFirst: true },
    motion: { intensity: 'low' },
    implementation: { framework: 'Next.js', language: 'TypeScript', styling: 'Tailwind CSS' },
  };
}
