# Accessibility Standard

Factory output targets WCAG 2.2 AA as the default baseline.

## Mandatory

- Semantic landmarks and heading hierarchy.
- Keyboard-operable controls and visible focus.
- Sufficient color contrast.
- Labels, instructions and error messaging for forms.
- No essential hover-only interaction.
- Minimum touch-safe targets on mobile.
- Reduced-motion behavior for all animated experiences.
- Captions/transcripts or alternatives for meaningful time-based media.
- Logical reading order preserved in RTL and LTR.
- Alt text strategy based on image purpose, not filename.

## Motion

`immersive-3d`, `cinematic` and `storytelling-scroll` implementations must preserve complete semantic content when animation, WebGL, video or scroll effects are unavailable.

## RTL

RTL is not implemented by visually mirroring everything. Icons with directional meaning, breadcrumbs, timelines, sliders, charts, number formatting and media composition require explicit behavior.
