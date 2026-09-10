import type { DesignDnaProfile } from '../../types/factory.ts';
import type { ResolvedDesignTokens } from './model.ts';

export function resolveDesignTokens(primary: DesignDnaProfile, secondary?: DesignDnaProfile): ResolvedDesignTokens {
  return {
    typography: primary.typography,
    spacing: primary.spacing,
    layout: primary.layout,
    geometry: secondary?.geometry ?? primary.geometry,
    imagery: secondary?.imagery ?? primary.imagery,
    motion: secondary?.motion ?? primary.motion,
    interactionDensity: primary.interaction_density,
    contentDensity: primary.content_density,
    accessibility: [...primary.accessibility],
    prohibitedPatterns: [...primary.prohibited_patterns],
  };
}
