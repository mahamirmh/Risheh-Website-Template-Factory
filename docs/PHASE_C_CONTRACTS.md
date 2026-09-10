# Phase C Contracts

Phase C is a consumer of Factory v2 contracts, not a replacement for them.

## Input

A configurator or AI agent collects `risheh.business.v1` data: brand, industry, audience, positioning, content, locale, goals and implementation preferences.

## Selection

The consumer selects one industry archetype from `industries/catalog.yaml`, then resolves every referenced Design DNA and pattern ID. Optional DNA blending is allowed only if the resulting rules pass validation and accessibility gates.

## Output

The normalized output MUST conform to `risheh.build-spec.v1` and contain:

- project identity
- brand configuration
- selected industry + archetype
- resolved Design DNA
- page routes
- ordered sections with pattern IDs
- content model
- SEO model
- accessibility requirements
- responsive behavior
- motion behavior
- implementation target
- provenance

## Consumer rules

1. Never scrape prose from Markdown to infer required generator behavior.
2. Never silently repair missing IDs; validation is fail-closed.
3. Never replace factual content with invented testimonials, awards, metrics or credentials.
4. Preserve explicit `rtl` / `ltr` direction.
5. Resolve `prefers-reduced-motion` before enabling advanced motion.
6. Keep references in provenance for design research traceability, while excluding their proprietary assets from generated output.

## Recommended Phase C UI

```text
Business Profile
→ Industry
→ Archetype
→ Design Direction
→ Pages
→ Content
→ Locale
→ Accessibility / Motion
→ Implementation Target
→ Validate
→ Generate Build Spec
```

## API boundary

A future service may expose:

- `GET /catalog`
- `GET /industries/{id}`
- `GET /archetypes/{industry}/{id}`
- `POST /build-spec`
- `POST /validate`

The transport can evolve; `risheh.build-spec.v1` remains the stable product boundary.
