import type { GenerationModel, ResolvedSection } from './model.ts';
import { CodegenError, CODES } from './errors.ts';

export const PATTERN_COMPONENTS: Record<string, string> = {
  'hero-authority': 'AuthorityHero',
  'hero-atmosphere': 'AtmosphereHero',
  'hero-gallery': 'GalleryHero',
  'hero-outcome': 'OutcomeHero',
  'hero-editorial': 'EditorialHero',
  'hero-product': 'ProductHero',
  'hero-local-intent': 'LocalIntentHero',
  'nav-editorial': 'EditorialNavigation',
  'nav-corporate': 'CorporateNavigation',
  'nav-overlay': 'OverlayNavigation',
  'nav-local-service': 'LocalServiceNavigation',
  'nav-product': 'ProductNavigation',
  'portfolio-gallery': 'PortfolioGallery',
  'portfolio-case-study': 'PortfolioCaseStudy',
  'service-authority-grid': 'AuthorityServiceGrid',
  'service-outcome-list': 'OutcomeServiceList',
  'menu-signature': 'SignatureMenu',
  'menu-category': 'CategoryMenu',
  'testimonial-editorial': 'EditorialTestimonials',
  'testimonial-proof-grid': 'ProofTestimonials',
  'lead-qualified-brief': 'QualifiedBriefCTA',
  'lead-consultation': 'ConsultationCTA',
  'lead-reservation': 'ReservationCTA',
  'lead-local-contact': 'LocalContactCTA',
  'footer-editorial': 'EditorialFooter',
  'footer-corporate': 'CorporateFooter',
  'footer-local-business': 'LocalBusinessFooter',
};

export type ComponentGraph = {
  components: string[];
  sections: ResolvedSection[];
  byPage: Record<string, ResolvedSection[]>;
};

export function componentNameForPattern(patternId: string): string {
  const name = PATTERN_COMPONENTS[patternId];
  if (!name) throw new CodegenError('resolve', CODES.UNKNOWN_PATTERN, `${CODES.UNKNOWN_PATTERN}: ${patternId}`);
  return name;
}

export function resolveComponentGraph(model: GenerationModel): ComponentGraph {
  const sections = model.buildSpec.sections.map((section) => ({
    id: section.id,
    patternId: section.pattern,
    pageId: section.page,
    componentName: componentNameForPattern(section.pattern),
  }));
  const byPage: Record<string, ResolvedSection[]> = {};
  for (const section of sections) (byPage[section.pageId] ??= []).push(section);
  return { components: [...new Set(sections.map((section) => section.componentName))].sort(), sections, byPage };
}
