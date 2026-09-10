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
Phase C1 Visual Generator / Agent Handoff
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
| Visual generator | **Phase C1** |

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

## 🖥️ Phase C1 — Visual Generator

The repository includes a real Next.js composition interface at `/generator`.

C1 lets a user select an industry and archetype, blend compatible Design DNA profiles, configure pages/patterns, enter brand/content/locale inputs, apply accessibility/SEO/responsive/motion preferences, and then export a **schema-validated `risheh.build-spec.v1`**.

It also generates copy-ready handoff prompts for **Codex**, **Claude Code**, and provider-neutral coding agents. C1 deliberately stops before autonomous code generation; that remains the Phase C2 boundary.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/generator`.

See `docs/PHASE_C1_VISUAL_GENERATOR.md` for the operating guide.

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

`patterns/catalog.yaml` contains reusable behavioral patterns for Hero, Navigation, Portfolio / Case Study, Services, Menu, Testimonials / Proof, Lead Capture and Footer.

Patterns describe **purpose and behavior**, not brand mimicry.

## 📚 Reference library

Existing files in `templates/` remain valuable design-analysis sources. They document real-world reference websites with Design DNA, IA, UX flows, responsive rules, components and improvement layers. They are inspiration and research inputs — never pixel-clone instructions.

## 📁 Repository map

```text
.
├── app/                       # Phase C1 Next.js App Router UI
├── src/                       # generator engine, catalog loader, UI and contracts
├── templates/                 # existing reference analyses
├── design-dna/catalog.yaml    # 12 reusable visual systems
├── patterns/catalog.yaml      # 27 reusable patterns
├── industries/catalog.yaml    # 16 industries + 48 archetypes
├── schemas/                   # stable machine-readable contracts
├── scripts/                   # validation, quality and catalog generation
├── tests/                     # Phase B + C1 contract tests
├── docs/                      # architecture, standards and C1 guide
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

Phase C consumes these contracts directly. It does **not** scrape prose from Markdown to discover generator behavior.

## ✅ Validation & quality gates

```bash
npm install
npm run validate
npm run quality
npm test
npm run catalog
npm run build
# or
npm run check
```

Validation fails on missing references, duplicate IDs, unsupported Design DNA/pattern links, industries with fewer than three archetypes, fewer than 48 total archetypes, invalid high-motion combinations and insufficient archetype differentiation.

C1 adds tests for deterministic Build Spec composition and handoff contracts. GitHub Actions also runs a real Next.js production build.

## 🌐 RTL / LTR

Persian RTL and English LTR are first-class factory targets. Directionality must be semantic rather than blindly mirrored: navigation, media, icons, breadcrumbs, forms, carousels, charts and motion need explicit RTL behavior.

## ♿ Quality baseline

Reusable output must target WCAG AA, semantic HTML, keyboard access, visible focus, reduced-motion support, readable line length, touch-safe interactions and no hover-only essential information.

## 🚫 Template ≠ Clone

The factory may learn from layout logic, hierarchy, spacing, interaction patterns and UX strategy, but it must never copy a reference site's trademarked identity, proprietary imagery, claims, testimonials, customer data or distinctive trade dress.

## 🚀 Phase C roadmap

```text
Phase C1
Select Industry
→ Select Archetype
→ Select / Blend Design DNA
→ Configure Pages + Patterns
→ Enter Brand + Content
→ Validate
→ Produce risheh.build-spec.v1
→ Agent Handoff

Phase C2 (future)
Validated Build Spec
→ Code Generation
→ Production Project
```

See `docs/PHASE_C_CONTRACTS.md` and `docs/PHASE_C1_VISUAL_GENERATOR.md` for the product boundary.

---

**Risheh Digital — engineered systems for repeatable, high-quality digital production.**
