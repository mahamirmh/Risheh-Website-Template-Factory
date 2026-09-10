import type { BuildSpec, DesignDnaProfile, Industry, Pattern } from '../../types/factory.ts';

export type GenerationMode = 'deterministic' | 'deterministic+agent';

export type ResolvedRoute = {
  id: string;
  route: string;
  segments: string[];
  filePath: string;
};

export type ResolvedSection = {
  id: string;
  patternId: string;
  pageId: string;
  componentName: string;
};

export type ResolvedDesignTokens = {
  typography: string;
  spacing: string;
  layout: string;
  geometry: string;
  imagery: string;
  motion: 'low' | 'medium' | 'high';
  interactionDensity: 'low' | 'medium' | 'high';
  contentDensity: 'low' | 'medium' | 'high';
  accessibility: string[];
  prohibitedPatterns: string[];
};

export type GenerationModel = {
  buildSpec: BuildSpec;
  factoryVersion: string;
  project: BuildSpec['project'];
  locale: { language: string; direction: 'rtl' | 'ltr'; country?: string };
  industry: { id: string; archetype: string; source: Industry };
  design: { dnaIds: string[]; profiles: DesignDnaProfile[]; tokens: ResolvedDesignTokens };
  routes: ResolvedRoute[];
  sections: ResolvedSection[];
  patterns: Pattern[];
  content: Record<string, unknown>;
  implementation: BuildSpec['implementation'];
};

export type GeneratedFile = {
  path: string;
  kind: 'config' | 'route' | 'component' | 'style' | 'content' | 'doc' | 'provenance';
  owner: string;
  sources: string[];
  content: string;
  hash: string;
  overwrite: 'create-only' | 'replace-generated';
};

export type FilePlan = {
  projectId: string;
  files: GeneratedFile[];
};
