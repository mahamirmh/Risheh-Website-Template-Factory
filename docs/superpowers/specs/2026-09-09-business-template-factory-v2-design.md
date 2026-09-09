# Risheh Website Template Factory v2 — Business Template Factory Design

## Status
Approved architecture: **B → C-ready**

## 1. Goal
Transform the repository from a reference-site specification library into a reusable business-oriented website template factory while preserving the current reference analysis assets.

The system must support:

- reusable industry archetypes;
- multiple premium visual directions per industry;
- machine-readable template contracts;
- reusable design DNA, section patterns, UX flows, content models and quality rules;
- Persian RTL and English LTR output;
- future visual generator / web UI without re-architecting the repository.

## 2. Core Product Principle
The factory must never equate one industry with one visual style.

A business template is composed from four independent layers:

```text
Business Archetype
+ Design DNA
+ UX / Conversion Recipe
+ Brand & Content Configuration
= Build Specification
```

Reference websites remain inspiration and analysis sources, not templates to clone.

## 3. Target Architecture

```text
Reference Websites
       ↓
Reference Analysis Library
       ↓
Design DNA Library
       ↓
Industry Archetypes
       ↓
Business Templates
       ↓
Style Variants
       ↓
Section / UX Recipes
       ↓
Brand + Content Config
       ↓
Build Specification
       ↓
Production Implementation
```

The architecture must allow a future Phase C application to expose the same data through a visual interface and produce build-ready project specifications.

## 4. Repository Structure

```text
Risheh-Website-Template-Factory/
├── README.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── BUSINESS_TEMPLATE_SPEC.md
│   ├── DESIGN_DNA_STANDARD.md
│   ├── COMPONENT_STANDARD.md
│   ├── UX_STANDARD.md
│   ├── ACCESSIBILITY.md
│   ├── SEO_GEO_STANDARD.md
│   ├── QUALITY_GATES.md
│   └── superpowers/
│       ├── specs/
│       └── plans/
├── references/
├── industries/
├── design-dna/
├── patterns/
│   ├── hero/
│   ├── navigation/
│   ├── portfolio/
│   ├── services/
│   ├── menu/
│   ├── testimonials/
│   ├── lead-capture/
│   └── footer/
├── presets/
│   ├── typography/
│   ├── spacing/
│   ├── motion/
│   ├── imagery/
│   └── layouts/
├── schemas/
│   ├── business.schema.json
│   ├── template.schema.json
│   └── design-dna.schema.json
└── examples/
```

## 5. Migration Rule
The existing `templates/` reference files must not be deleted or rewritten in bulk during the first migration.

They will be treated as the source reference library and gradually migrated or aliased into `references/` after schema validation and index generation are available.

This avoids breaking existing knowledge while the new architecture is introduced.

## 6. Initial Industry Catalog
Phase B must support at least the following industry families:

1. Cafe & Restaurant
2. Architecture
3. Construction
4. Legal
5. Professional Services
6. Corporate
7. Healthcare & Clinic
8. Beauty & Salon
9. Real Estate
10. Education
11. E-commerce
12. Hospitality & Hotel
13. Gym & Fitness
14. Technology & SaaS
15. Agency & Creative Studio
16. Personal Brand / Expert

Each industry must define at least three distinct visual directions before it is considered complete.

## 7. Initial Design DNA Catalog
The first reusable design directions are:

- Apple Minimal
- Editorial Luxury
- Immersive 3D
- Cinematic
- Brutalist Premium
- Swiss Grid
- Calm Luxury
- Bento Modern
- Magazine Editorial
- Conversion First
- Gallery First
- Storytelling Scroll

Each Design DNA file must describe:

- personality;
- typography behavior;
- color strategy;
- spacing and grid;
- radius / border / shadow behavior;
- image treatment;
- motion character;
- component geometry;
- section rhythm;
- anti-patterns;
- suitable and unsuitable industries;
- accessibility constraints;
- responsive behavior.

## 8. Business Psychology Layer
The factory must encode business-specific visitor psychology, not only visuals.

Examples:

### Architecture
```text
Emotion → Philosophy → Portfolio → Process → Proof → Enquiry
```

### Legal
```text
Problem → Authority → Expertise → Evidence → Process → Consultation
```

### Cafe / Restaurant
```text
Atmosphere → Menu → Signature Items → Social Proof → Location → Reservation
```

### Professional Services
```text
Problem → Outcome → Capability → Proof → Method → Contact
```

These flows become reusable UX recipes and inform default section order, CTA placement and trust architecture.

## 9. Business Template Contract
Each business template must have a machine-readable manifest plus a human-readable specification.

Recommended manifest shape:

```yaml
id: cafe-editorial-bistro
version: 1.0.0
industry: cafe-restaurant
subcategory: bistro
status: ready

design_dna:
  - editorial-luxury
  - calm-luxury

business_goal:
  primary: reservation
  secondary: menu-discovery

audience:
  intent: local-discovery
  trust_model: atmosphere-and-social-proof

ux_recipe:
  - atmosphere
  - menu
  - signature-items
  - social-proof
  - location
  - reservation

pages:
  - home
  - menu
  - about
  - gallery
  - reservation
  - contact

locale:
  rtl_supported: true
  ltr_supported: true

implementation:
  preferred_framework: nextjs
  preferred_language: typescript
  preferred_styling: tailwind
```

## 10. Design DNA Contract
Every design DNA entry must be independently composable with multiple industries.

It must contain stable identifiers and explicit constraints so a future generator does not need to infer visual rules from prose.

The schema must cover:

- token presets;
- typography scale;
- spacing scale;
- layout width strategy;
- card geometry;
- imagery ratios;
- motion intensity;
- interaction density;
- content density;
- accessibility safeguards;
- prohibited patterns.

## 11. Pattern Library
Patterns are reusable section-level recipes, not visual clones.

Each pattern must define:

- purpose;
- required content inputs;
- optional inputs;
- supported Design DNA styles;
- responsive rules;
- accessibility rules;
- conversion role;
- suitable industries;
- incompatible combinations.

Examples:

- editorial split hero;
- cinematic full-bleed hero;
- service proof grid;
- architecture project index;
- restaurant visual menu;
- legal authority block;
- qualified enquiry form;
- local-business location block.

## 12. Brand / Content Configuration
Branding and content must remain data-driven.

Minimum configuration:

```yaml
brand:
  name: ""
  logo: ""
  primary_color: ""
  secondary_color: ""
  accent_color: ""
  font_family: ""
  personality: ""

business:
  industry: ""
  audience: ""
  positioning: ""
  services: []
  products: []

content:
  hero_title: ""
  hero_subtitle: ""
  primary_cta: ""
  secondary_cta: ""
  social_proof: []
  faq: []

locale:
  language: "fa"
  direction: "rtl"
  country: "IR"
```

No business template may hardcode a real client's claims, metrics, team, awards, testimonials, prices or contact information.

## 13. RTL / Persian Requirements
RTL support is a first-class requirement, not a post-processing step.

Every template must document:

- mirrored layout behavior where appropriate;
- logical CSS properties;
- mixed Persian / English typography behavior;
- number and metadata alignment;
- icon direction rules;
- navigation order;
- form alignment;
- responsive RTL testing.

Persian implementations may use Pelak when the consuming project provides the licensed font asset. The repository must not redistribute font binaries.

## 14. Quality Gates
A business template is `ready` only if it passes:

1. business-fit review;
2. visual differentiation review;
3. responsive review;
4. RTL/LTR review;
5. accessibility review;
6. SEO/GEO structure review;
7. conversion-flow review;
8. content-model completeness;
9. schema validation;
10. no-clone / no-brand-copy review;
11. generator compatibility review.

## 15. No-Clone Rule
The factory may reuse:

- hierarchy;
- layout logic;
- information architecture;
- interaction patterns;
- spacing logic;
- generic component structures;
- UX strategy.

It must not reproduce:

- trademarks;
- original brand identity;
- distinctive protected trade dress;
- proprietary copy;
- original claims;
- client/customer data;
- testimonials;
- proprietary illustrations or photography.

## 16. Phase B Deliverables
Phase B is complete when the repository contains:

- normalized architecture documentation;
- machine-readable schemas;
- Design DNA library;
- pattern library foundation;
- 16 industry families;
- at least 3 business template archetypes per industry;
- template indexes and discovery metadata;
- RTL/LTR rules;
- quality gates;
- upgraded README and contributor workflow;
- validation workflow for manifests and schema consistency.

The initial target is at least **48 business archetypes**.

## 17. Phase C Compatibility Contract
Phase C may add a visual application that allows a user to select:

```text
Industry
→ Business Subtype
→ Design Direction
→ Brand Personality
→ Language / Direction
→ Primary Goal
→ Pages
→ Content Inputs
```

The system must then resolve those selections into a deterministic Build Specification.

Phase C must consume the same manifests and schemas created in Phase B. It must not require scraping Markdown or introducing a parallel template database.

## 18. Future Generator Output
A future generator should be able to produce:

- information architecture;
- page map;
- section map;
- component inventory;
- design tokens;
- typography rules;
- responsive rules;
- motion rules;
- content schema;
- SEO/GEO requirements;
- accessibility requirements;
- build prompt;
- implementation manifest.

The actual code generator is outside Phase B scope.

## 19. Technical Direction
Phase B remains repository-first and implementation-agnostic, but assumes modern frontend consumers.

Preferred implementation target metadata:

- Next.js
- TypeScript
- Tailwind CSS
- component-driven architecture
- semantic HTML
- WCAG-oriented accessibility
- responsive-first layout
- RTL/LTR support

This preference must not prevent future adapters for other frameworks.

## 20. Governance
Every new industry template must answer:

1. What business problem does it solve?
2. What visitor psychology does it assume?
3. What is its primary conversion goal?
4. Which Design DNA combinations are valid?
5. What makes it visually distinct from sibling templates?
6. What content inputs are mandatory?
7. What must change for RTL?
8. How is it validated?

A template that only changes colors, fonts or images is not a new template archetype.

## 21. Success Criteria
The new factory succeeds when a designer, engineer or AI agent can choose an industry and style, supply structured brand/content information, and obtain a consistent build specification without manually reading dozens of reference-site documents.

The same structured assets must also be directly consumable by the future Phase C visual generator.
