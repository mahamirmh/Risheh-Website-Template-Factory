# Factory Quality Gates

A factory change is releasable only when all structural and semantic gates pass.

## Structural gates

- At least 12 Design DNA profiles.
- At least 24 reusable patterns.
- At least 16 industries.
- At least 3 archetypes per industry.
- At least 48 archetypes in total.
- Stable kebab-case identifiers.
- No duplicate industry, Design DNA, pattern or archetype IDs.
- Every Design DNA and pattern reference resolves.
- Every archetype defines pages, goal, proof model, conversion model, motion and content density.

## Semantic gates

Two archetypes in one industry must differ materially across at least two of: Design DNA, proof model, conversion model, motion, content density, pattern composition or page architecture.

High-motion archetypes require the `immersive-3d` safeguards. Cinematic DNA may not be combined with high content density without redesigning the narrative.

## Accessibility gates

- WCAG AA baseline.
- Semantic document structure.
- Keyboard-operable interactive controls.
- Visible focus states.
- Reduced-motion behavior.
- No essential information available only on hover.
- Touch-safe controls and mobile reflow.
- Caption/pause controls for essential time-based media.

## Brand/IP gates

Reusable outputs must not carry reference-site logos, trademarked phrases, copied testimonials, proprietary project imagery, fake awards or fabricated business proof.

## CI command

```bash
npm run check
npm run catalog
```

A non-zero exit blocks merge.
