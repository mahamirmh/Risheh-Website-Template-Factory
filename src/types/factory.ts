export type Direction = 'rtl' | 'ltr';

export type Pattern = {
  id: string;
  family: string;
  purpose: string;
  stage: string;
  conversion_role: string;
};

export type DesignDnaProfile = {
  id: string;
  name: string;
  personality: string[];
  typography: string;
  spacing: string;
  layout: string;
  geometry: string;
  imagery: string;
  motion: 'low' | 'medium' | 'high';
  interaction_density: 'low' | 'medium' | 'high';
  content_density: 'low' | 'medium' | 'high';
  suitable_industries: string[];
  prohibited_patterns: string[];
  accessibility: string[];
};

export type Archetype = {
  id: string;
  design_dna: string[];
  primary_goal: string;
  proof_model: string;
  conversion_model: string;
  motion: 'low' | 'medium' | 'high';
  content_density: 'low' | 'medium' | 'high';
  patterns: string[];
  pages: string[];
};

export type Industry = {
  id: string;
  name: string;
  psychology: string[];
  archetypes: Archetype[];
};

export type FactoryCatalog = {
  version: string;
  industries: Industry[];
  designDna: DesignDnaProfile[];
  patterns: Pattern[];
};

export type PageDraft = { id: string; route: string };

export type GeneratorDraft = {
  draftVersion: '1';
  project: { id: string; name: string };
  business: { name: string; positioning: string; primaryGoal: string };
  industryId: string | null;
  archetypeId: string | null;
  designDnaIds: string[];
  pages: PageDraft[];
  patternIds: string[];
  brand: { primaryColor: string; secondaryColor: string; fontFamily: string };
  content: { heroTitle: string; heroSubtitle: string; primaryCta: string };
  locale: { language: string; direction: Direction; country: string };
  seo: { localTarget: string; indexable: boolean };
  accessibility: { target: 'AA' | 'AAA'; reducedMotion: boolean };
  responsive: { mobileFirst: boolean };
  motion: { intensity: 'low' | 'medium' | 'high' };
  implementation: { framework: 'Next.js'; language: 'TypeScript'; styling: 'Tailwind CSS' };
};

export type BuildSpec = {
  schema: 'risheh.build-spec.v1';
  version: '1.0.0';
  project: { id: string; name: string };
  brand: Record<string, unknown>;
  industry: { id: string; archetype: string };
  design: { dna: string[]; tokens: Record<string, unknown> };
  pages: PageDraft[];
  sections: { id: string; pattern: string; page: string }[];
  content: Record<string, unknown>;
  seo: Record<string, unknown>;
  accessibility: Record<string, unknown>;
  responsive: Record<string, unknown>;
  motion: Record<string, unknown>;
  implementation: { framework: string; language: string; styling: string };
  provenance: { factory_version: string; template_id: string; reference_sources: string[] };
};
