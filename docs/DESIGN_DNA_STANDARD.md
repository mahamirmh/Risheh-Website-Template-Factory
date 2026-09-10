# Design DNA Authoring Standard

A Design DNA profile is a reusable visual behavior system, not a theme and not a brand clone.

Each profile must define: personality, typography behavior, spacing rhythm, layout strategy, geometry, imagery treatment, motion intensity, interaction density, content density, suitable/unsuitable industries, prohibited patterns, accessibility safeguards and RTL considerations.

## Rules

- Stable ID: lowercase kebab-case.
- Version with semantic versioning.
- Visual rules must describe behavior, not copied token values from a reference brand.
- Every motion-heavy profile needs static and reduced-motion fallbacks.
- Every profile must remain usable with both RTL and LTR content.
- A profile should be composable with multiple industries.
- If two profiles can only be distinguished by colors/fonts, they are duplicates and should be merged.

## Compatibility

Combining multiple profiles is allowed only when their layout, geometry, motion and density rules do not conflict. Phase C should prefer one primary DNA and at most one supporting DNA unless a validated blend contract is introduced later.
