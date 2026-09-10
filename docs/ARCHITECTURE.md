# Architecture — Risheh Website Template Factory v2

## Purpose

Factory v2 separates reference research from reusable production contracts. Reference sites remain research artifacts; production templates are composed from machine-readable business, visual and UX primitives.

## Layers

1. **Reference Analysis** — existing `templates/*.md` files capture observed design/UX knowledge.
2. **Design DNA** — reusable visual systems independent from any specific brand.
3. **Pattern Library** — reusable behavioral section recipes.
4. **Industry Psychology** — default trust, proof and conversion logic per industry.
5. **Archetypes** — distinct combinations of goal, proof model, conversion model, layout intent, Design DNA and patterns.
6. **Business Input** — brand, locale, content and implementation constraints.
7. **Build Spec** — normalized Phase C output using `risheh.build-spec.v1`.

## Source of truth

The machine-readable source catalogs are:

- `design-dna/catalog.yaml`
- `patterns/catalog.yaml`
- `industries/catalog.yaml`
- `schemas/*.schema.json`

Generated indexes are derivative and must never be edited manually.

## Dependency direction

```text
schemas
  ↓
design-dna + patterns
  ↓
industries/archetypes
  ↓
validation + quality gates
  ↓
generated catalog
  ↓
Phase C configurator / agents / project generators
```

No upstream layer may depend on a downstream generated artifact.

## Compatibility

Stable schema IDs use semantic versions. Breaking contract changes require a new schema major ID; existing consumers must remain able to consume `risheh.build-spec.v1` during the v2 lifecycle.

## RTL/LTR

Direction is explicit data. Phase C consumers must not infer direction from language names. RTL adaptation is semantic and component-specific rather than a CSS mirror of the whole interface.

## Reference safety

Reference analysis may inform structure, hierarchy, spacing, content architecture and interaction strategy. Reusable output must exclude proprietary brand assets, claims, customer data, testimonials and distinctive trade dress.
