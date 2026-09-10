import type { GenerationModel, GeneratedFile } from './model.ts';

export type ResolvedContent = {
  locale: string;
  direction: 'rtl' | 'ltr';
  heroTitle?: string;
  heroSubtitle?: string;
  primaryCta?: string;
  testimonials?: unknown[];
  raw: Record<string, unknown>;
};

export type ContentScanResult = { ok: boolean; findings: { path: string; reason: string; match?: string }[] };

const suspiciousPatterns = [
  /lorem ipsum/i,
  /trusted by\s+[\d,.]+/i,
  /(?:over|more than)\s+[\d,.]+\s+(?:clients|customers|patients|students|projects)/i,
  /(?:award[- ]winning|#1\s+(?:law|clinic|agency|company))/i,
  /(?:99\.\d|100)%\s+(?:success|satisfaction)/i,
  /\$\d+(?:\.\d{2})?\s*(?:\/month|per month)/i,
  /fake testimonial/i,
];

export function resolveContentSlots(model: GenerationModel): ResolvedContent {
  const raw = model.content;
  const result: ResolvedContent = {
    locale: `${model.locale.language}${model.locale.country ? `-${model.locale.country}` : ''}`,
    direction: model.locale.direction,
    raw: { ...raw },
  };
  if (typeof raw.heroTitle === 'string' && raw.heroTitle.trim()) result.heroTitle = raw.heroTitle.trim();
  if (typeof raw.heroSubtitle === 'string' && raw.heroSubtitle.trim()) result.heroSubtitle = raw.heroSubtitle.trim();
  if (typeof raw.primaryCta === 'string' && raw.primaryCta.trim()) result.primaryCta = raw.primaryCta.trim();
  if (Array.isArray(raw.testimonials) && raw.testimonials.length) result.testimonials = raw.testimonials;
  return result;
}

export function scanForbiddenContent(files: Pick<GeneratedFile, 'path' | 'content'>[]): ContentScanResult {
  const findings: ContentScanResult['findings'] = [];
  for (const file of files) {
    for (const pattern of suspiciousPatterns) {
      const match = file.content.match(pattern);
      if (match) findings.push({ path: file.path, reason: 'suspicious-or-fabricated-content', match: match[0] });
    }
  }
  return { ok: findings.length === 0, findings };
}

export const STRUCTURAL_COPY = Object.freeze({
  exploreServices: 'Explore services',
  viewProjects: 'View projects',
  contact: 'Contact',
  learnMore: 'Learn more',
});
