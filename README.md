# 🌿 Risheh Website Template Factory

> **Business-oriented website design intelligence for fast, high-quality, non-generic website production.**

Risheh Website Template Factory is not a collection of cloned themes. It is a structured **Design Intelligence + Business Archetype Factory** that turns reference-site research into reusable design DNA, UX patterns, industry psychology, validated archetypes and generator-ready build specifications.

## ✨ Factory v2 — B → C-ready

The repository now has two complementary layers:

```text
Reference Analysis Library
        ↓
Design DNA Library
        ↓
Pattern Library
        ↓
Industry Psychology
        ↓
Business Archetypes
        ↓
Brand / Content Configuration
        ↓
risheh.build-spec.v1
        ↓
Next.js / AI Agent / Future Visual Generator
```

### Current factory inventory

| Layer | Current baseline |
|---|---:|
| Industry families | **16** |
| Business archetypes | **48** |
| Design DNA profiles | **12** |
| Reusable patterns | **27** |
| Phase C contract | `risheh.build-spec.v1` |
| Languages | RTL + LTR |

## 🧠 Core principle

**Industry ≠ visual style.** A law firm, architecture studio or cafe must never be forced into one visual template. Each output composes independent layers:

```text
Business Psychology
+ Design DNA
+ UX / Conversion Recipe
+ Pattern Selection
+ Brand & Content Configuration
= Build Specification
```

Archetypes must differ materially in at least two dimensions such as layout architecture, proof model, conversion model, motion model, content density, interaction model or design DNA. A color/font swap is not a new archetype.

## 🏭 Industry packs

The current catalog covers:

`cafe-restaurant` · `architecture` · `construction` · `legal` · `professional-services` · `corporate` · `healthcare-clinic` · `beauty-salon` · `real-estate` · `education` · `ecommerce` · `hospitality-hotel` · `gym-fitness` · `technology-saas` · `agency-creative` · `personal-brand`

Every industry has at least three distinct archetypes with its own goal, proof model, conversion model, pages, Design DNA and pattern composition.

## 🎨 Design DNA

Reusable profiles live in `design-dna/catalog.yaml`:

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

Each profile defines typography behavior, spacing, layout, geometry, imagery, motion, density, industry fit, prohibited patterns and accessibility safeguards.

## 🧩 Pattern library

`patterns/catalog.yaml` contains reusable behavioral patterns for:

- Hero
- Navigation
- Portfolio / Case Study
- Services
- Menu
- Testimonials / Proof
- Lead Capture
- Footer

Patterns describe **purpose and behavior**, not brand mimicry.

## 📚 Reference library

Existing files in `templates/` remain valuable design-analysis sources. They document real-world reference websites with Design DNA, IA, UX flows, responsive rules, components and improvement layers. They are inspiration and research inputs — never pixel-clone instructions.

## 📁 Repository map

```text
.
├── templates/                 # existing reference analyses
├── design-dna/catalog.yaml    # 12 reusable visual systems
├── patterns/catalog.yaml      # 27 reusable patterns
├── industries/catalog.yaml    # 16 industries + 48 archetypes
├── schemas/                   # stable machine-readable contracts
├── scripts/
│   ├── validate-factory.mjs
│   ├── check-quality-gates.mjs
│   └── build-catalog.mjs
├── tests/
├── docs/
└── .github/workflows/factory-quality.yml
```

## 🔒 Stable contracts

The v2 architecture exposes stable IDs:

- `risheh.business.v1`
- `risheh.design-dna.v1`
- `risheh.pattern.v1`
- `risheh.template.v1`
- `risheh.catalog.v1`
- `risheh.build-spec.v1`

Phase C must consume these contracts directly. It must **not** scrape prose from Markdown to discover generator behavior.

## ✅ Validation & quality gates

```bash
npm install
npm run validate
npm run quality
npm test
npm run catalog
# or
npm run check
```

Validation fails on missing references, duplicate IDs, unsupported Design DNA/pattern links, industries with fewer than three archetypes, fewer than 48 total archetypes, invalid high-motion combinations and insufficient archetype differentiation.

GitHub Actions runs the same checks on feature pushes and pull requests.

## 🌐 RTL / LTR

Persian RTL and English LTR are first-class factory targets. Directionality must be semantic rather than blindly mirrored: navigation, media, icons, breadcrumbs, forms, carousels, charts and motion need explicit RTL behavior.

## ♿ Quality baseline

Reusable output must target WCAG AA, semantic HTML, keyboard access, visible focus, reduced-motion support, readable line length, touch-safe interactions and no hover-only essential information.

## 🚫 Template ≠ Clone

The factory may learn from layout logic, hierarchy, spacing, interaction patterns and UX strategy, but it must never copy a reference site's trademarked identity, proprietary imagery, claims, testimonials, customer data or distinctive trade dress.

## 🚀 Phase C

The next product layer can add a visual configurator / AI generator on top of the same contracts:

```text
Select Industry
→ Select Archetype
→ Select / Blend Design DNA
→ Enter Brand + Content
→ Validate
→ Produce risheh.build-spec.v1
→ Generate production project
```

See `docs/PHASE_C_CONTRACTS.md` for the generator boundary.

---

**Risheh Digital — engineered systems for repeatable, high-quality digital production.**
