# 🌿 Risheh Website Template Factory

> **Business-oriented website design intelligence for fast, high-quality, non-generic website production.**

Risheh Website Template Factory is not a collection of cloned themes. It is a structured **Design Intelligence + Business Archetype + Production Code Factory** that turns reference-site research into reusable Design DNA, UX patterns, industry psychology, validated archetypes, generator-ready build specifications and standalone Next.js projects.

## ✨ Factory v2 — B → C2

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
Phase C1 Visual Generator
        ↓
risheh.build-spec.v1
        ↓
Phase C2 Deterministic Code Generator
        ↓
Standalone Production Next.js Project
        ↓
Optional Policy-Bounded Agent Enhancement
```

### Current factory inventory

| Layer | Current baseline |
|---|---:|
| Industry families | **16** |
| Business archetypes | **48** |
| Design DNA profiles | **12** |
| Reusable patterns | **27** |
| Stable generation contract | `risheh.build-spec.v1` |
| Languages | RTL + LTR |
| Visual composer | **Phase C1** |
| Production code generator | **Phase C2** |

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

Archetypes must differ materially in layout architecture, proof model, conversion model, motion model, content density, interaction model or Design DNA. A color/font swap is not a new archetype.

## 🖥️ Phase C1 — Visual Generator

The repository includes a real Next.js composition interface at `/generator`.

C1 lets a user select an industry and archetype, blend compatible Design DNA profiles, configure pages/patterns, enter brand/content/locale inputs, apply accessibility/SEO/responsive/motion preferences, and export a schema-validated **`risheh.build-spec.v1`**.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/generator`.

See `docs/PHASE_C1_VISUAL_GENERATOR.md`.

## ⚙️ Phase C2 — Production Next.js Code Generation

C2 consumes the exact same `risheh.build-spec.v1`. It does **not** introduce a second public generation contract and does not scrape Markdown.

The default generator is deterministic and provider-independent:

```text
Validated Build Spec
→ Factory reference resolution
→ GenerationModel
→ Component graph
→ deterministic FilePlan + SHA-256 hashes
→ Next.js project emitters
→ static quality gates
→ .generated/<project-id>
→ npm install
→ ESLint
→ Next production build
→ risheh-generation.json quality evidence
```

Generated projects use:

- Next.js 16.3.x App Router
- React 19.3.x
- TypeScript strict mode
- Tailwind CSS 4.x
- semantic HTML
- explicit RTL/LTR document direction
- reduced-motion safeguards
- reusable section components
- route files matching the Build Spec
- no fabricated testimonials, metrics, awards, addresses, team identities, credentials, prices or case-study outcomes

### Generate from C1

Once the C1 Build Spec is valid, the generator page exposes **Generate Next.js project**. C2 writes the project to the local Factory workspace under:

```text
.generated/<project-id>/
```

The API only reports completion after the generated project passes its applicable quality gates.

### Verify C2 from CLI

```bash
npm run codegen:compat
npm run codegen:fixtures
npm run codegen:fixtures:quality
npm run codegen:forbidden
# complete C2 verification
npm run codegen:check
```

`codegen:check` verifies all **48 archetypes / 12 Design DNA profiles / 27 patterns**, then generates three representative standalone projects — LTR professional services, Persian RTL legal, and architecture/gallery — and independently installs, lints and production-builds them.

### Optional agent enhancement

AI enhancement is deliberately **optional**. The deterministic project must already be runnable before an agent may refine it. Agents can improve polish, responsive composition, accessibility and non-factual microcopy, but cannot change routes, schema identity, industry/archetype identity, provenance, dependency policy or invent factual business claims.

See:

- `docs/CODEGEN_ARCHITECTURE.md`
- `docs/CODEGEN_AGENT_POLICY.md`
- `docs/CODEGEN_QUALITY_GATES.md`

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

`patterns/catalog.yaml` contains **27 reusable behavioral patterns** for Hero, Navigation, Portfolio / Case Study, Services, Menu, Testimonials / Proof, Lead Capture and Footer.

C2 has an explicit component-family mapping for every current pattern. Unsupported required patterns fail closed rather than silently degrading into generic cards.

## 📚 Reference library

Files in `templates/` remain design-analysis sources. They document real-world reference websites with Design DNA, IA, UX flows, responsive rules, components and improvement layers. They are inspiration and research inputs — never pixel-clone instructions.

## 📁 Repository map

```text
.
├── app/
│   ├── generator/             # C1 visual composition surface
│   └── api/generate/          # C2 generation endpoint
├── src/
│   ├── features/generator/    # C1 Build Spec composition
│   └── features/codegen/      # C2 resolver, emitters, quality, agent policy
├── templates/                 # reference analyses
├── design-dna/catalog.yaml    # 12 reusable visual systems
├── patterns/catalog.yaml      # 27 reusable patterns
├── industries/catalog.yaml    # 16 industries + 48 archetypes
├── schemas/                   # stable machine-readable contracts
├── scripts/codegen/           # C2 compatibility and generated-build checks
├── tests/                     # Phase B + C1 + C2 tests and fixtures
├── docs/                      # architecture, standards and generator guides
└── .github/workflows/factory-quality.yml
```

Runtime-generated projects are placed under `.generated/` and are intentionally git-ignored.

## 🔒 Stable contracts

The architecture exposes stable IDs:

- `risheh.business.v1`
- `risheh.design-dna.v1`
- `risheh.pattern.v1`
- `risheh.template.v1`
- `risheh.catalog.v1`
- `risheh.build-spec.v1`

**C2 consumes `risheh.build-spec.v1` unchanged.** Internal generation metadata such as `risheh-generation.json` is provenance, not a replacement input contract.

## ✅ Validation & quality gates

```bash
npm install
npm run validate
npm run quality
npm test
npm run catalog
npm run build
npm run codegen:check
# Factory checks without generated-project production builds
npm run check
```

Factory validation fails on missing references, duplicate IDs, unsupported Design DNA/pattern links, industries with fewer than three archetypes, fewer than 48 total archetypes, invalid high-motion combinations and insufficient archetype differentiation.

C2 additionally fails closed on unsafe routes, path traversal, unknown DNA/pattern IDs, duplicate generated paths, missing declared routes, suspicious fabricated content, missing provenance, failed generated-project lint or failed Next production build.

## 🌐 RTL / LTR

Persian RTL and English LTR are first-class targets. Direction comes from the Build Spec and is applied at the generated document root. Logical layout behavior is preferred over blind mirroring; navigation, media, icons, forms and motion must preserve semantic intent.

## ♿ Quality baseline

Reusable output targets WCAG AA, semantic HTML, keyboard access, visible focus, reduced-motion support, readable line length, touch-safe interactions and no hover-only essential information.

## 🚫 Template ≠ Clone

The factory may learn from layout logic, hierarchy, spacing, interaction patterns and UX strategy, but it must never copy a reference site's trademarked identity, proprietary imagery, claims, testimonials, customer data or distinctive trade dress.

## 🚀 Phase C flow

```text
C1
Industry + Archetype + Design DNA + Pages + Content
→ risheh.build-spec.v1

C2
risheh.build-spec.v1
→ deterministic production code generation
→ quality-verified standalone Next.js project
→ optional bounded agent enhancement
```

See `docs/PHASE_C_CONTRACTS.md`, `docs/PHASE_C1_VISUAL_GENERATOR.md` and the C2 codegen docs for the complete product boundary.

---

**Risheh Digital — engineered systems for repeatable, high-quality digital production.**
