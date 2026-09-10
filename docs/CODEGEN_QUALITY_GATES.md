# C2 Quality Gates

A generated project is not reported as complete until all applicable gates pass.

## Input and resolution

1. `risheh.build-spec.v1` schema validation.
2. Industry/archetype reference resolution.
3. Design DNA reference resolution.
4. Pattern reference resolution.
5. Safe route/path normalization.

## File-plan gates

6. Unique relative file paths.
7. Declared routes have generated `page.tsx` files.
8. `risheh-generation.json` exists.
9. RTL projects bind document direction to the resolved locale.
10. Forbidden/fabricated content scan is clean.

## Production gates

11. Generated `npm install` succeeds.
12. Generated `npm run lint` succeeds.
13. Generated `npm run build` succeeds.
14. Final quality results are written to provenance.

## CI coverage

`npm run codegen:check` validates all 48 archetypes against all current Factory references, then generates three representative projects: professional-services LTR, legal Persian RTL, and architecture gallery. Each representative project is independently installed, linted, and production-built.
