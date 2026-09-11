<div align="center">

# 🌿 Risheh Website Template Factory

### _A tiny website factory with suspiciously big ambitions._

**Design intelligence → business psychology → validated Build Spec → production Next.js → safe regeneration.**

`16 industries` · `48 archetypes` · `12 Design DNA profiles` · `27 reusable patterns` · `RTL + LTR`

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.3-20232A?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)
![Factory](https://img.shields.io/badge/Factory-C1%20→%20C2%20→%20C3-174A3A?style=flat-square)
![Direction](https://img.shields.io/badge/UI-RTL%20%2B%20LTR-12304A?style=flat-square)

**[Start here](#-quick-start)** · **[How it works](#-how-the-factory-thinks)** · **[User Guide](docs/USER_GUIDE.md)** · **[Architecture](docs/ARCHITECTURE.md)**

</div>

---

## 👋 Hello, this is not a folder full of templates.

Most template libraries begin with a pretty page and ask: _“Which color do you want?”_

Risheh starts one layer earlier:

> **What business are we building for, how should that business earn trust, what should the visitor do next, and what visual language supports that job?**

The Factory turns reference-site research into reusable **Design DNA**, combines it with **industry psychology and business archetypes**, composes a machine-valid `risheh.build-spec.v1`, generates a standalone production-oriented Next.js project, and can later update that project **without casually bulldozing the human edits made after generation**.

In other words:

```text
pretty website generator ❌

business-aware design system
        +
reproducible code generator
        +
safe evolution engine      ✅
```

---

## 🏭 The Factory in one picture

```text
┌─────────────────────────────── RESEARCH LAYER ───────────────────────────────┐
│  Reference Websites → Design Intelligence → reusable visual principles      │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       ↓
┌────────────────────────────── KNOWLEDGE LAYER ───────────────────────────────┐
│  12 Design DNA   +   27 UX Patterns   +   16 Industry Psychology Models     │
│                                      ↓                                      │
│                              48 Archetypes                                  │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       ↓
┌──────────────────────────────── C1 · COMPOSE ────────────────────────────────┐
│  Business → Industry → Archetype → DNA → Pages → Brand → Quality → Review   │
│                                      ↓                                      │
│                         risheh.build-spec.v1                                │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       ↓
┌──────────────────────────────── C2 · BUILD ──────────────────────────────────┐
│        Resolve → File Plan → Components → Next.js Project → Quality          │
│                                      ↓                                      │
│                       standalone production code                            │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       ↓
┌──────────────────────────────── C3 · EVOLVE ─────────────────────────────────┐
│              Base  ↔  Current  ↔  Next                                      │
│                         ↓                                                    │
│       Preserve / Merge / Conflict → Staging → Quality → Atomic Apply         │
└──────────────────────────────────────────────────────────────────────────────┘
```

The public contract through C1 → C2 → C3 remains **`risheh.build-spec.v1`**. C3 runtime state under `.risheh/` is internal project metadata, not a second competing specification.

---

## ✨ What lives inside?

| Factory shelf | Inventory | What it actually means |
|---|---:|---|
| 🏢 Industries | **16** | Business contexts such as architecture, legal, healthcare, hospitality, SaaS and commerce |
| 🧬 Design DNA | **12** | Reusable visual personalities — not copied websites |
| 🧩 Patterns | **27** | Hero, navigation, portfolio, service, menu, proof, lead and footer patterns |
| 🧠 Archetypes | **48** | Three distinct strategic website directions per industry |
| 🧾 Build contract | **1 stable schema** | `risheh.build-spec.v1` keeps composition and generation speaking the same language |
| ↔️ Direction | **RTL + LTR** | Direction-aware generation, including Persian/RTL scenarios |
| 🖥️ C1 | Visual Generator | Compose and validate the website specification |
| ⚙️ C2 | Code Generator | Deterministically emit a standalone Next.js project |
| ♻️ C3 | Safe Regeneration | Evolve generated projects while protecting legitimate manual work |

### The 16 business families

`Cafe & Restaurant` · `Architecture` · `Construction` · `Legal` · `Professional Services` · `Corporate` · `Healthcare & Clinic` · `Beauty Salon` · `Real Estate` · `Education` · `E-commerce` · `Hospitality & Hotel` · `Gym & Fitness` · `Technology & SaaS` · `Agency & Creative` · `Personal Brand`

### A few Design DNA personalities

`Apple Minimal` · `Editorial Luxury` · `Immersive 3D` · `Cinematic` · `Brutalist Premium` · `Swiss Grid` · `Calm Luxury` · `Bento Modern` · `Magazine Editorial` · `Conversion First` · `Gallery First` · `Storytelling Scroll`

The important bit: **DNA is a design language, not permission to clone somebody else's trade dress.**

---

## 🧠 How the Factory thinks

A legal office and a boutique hotel should not be the same landing page wearing different colors. Their visitors arrive with different questions, different anxieties and different definitions of proof.

That is why industry funnels are encoded before visual styling:

```text
Architecture
Image / Emotion → Philosophy → Portfolio → Process → Proof → Enquiry

Legal
Problem → Authority → Expertise → Evidence → Process → Consultation

Cafe / Restaurant
Atmosphere → Menu → Signature Items → Social Proof → Location → Reservation

Professional Services
Problem → Outcome → Capability → Proof → Method → Contact
```

Then an archetype chooses a more specific strategy. Design DNA gives that strategy a visual grammar. Patterns give it reusable section behavior. Brand/content configuration makes it yours.

**Template ≠ Clone.**  
**Regeneration ≠ Overwrite.**  
Those two rules are the heart of this repository.

---

## 🚀 Quick Start

### 1. Run the Factory

```bash
git clone https://github.com/mahamirmh/Risheh-Website-Template-Factory.git
cd Risheh-Website-Template-Factory
npm install
npm run dev
```

Open:

```text
http://localhost:3000/generator
```

Node.js **20+** is required by the project.

### 2. Compose a website in C1

The visual generator walks through eight steps:

```text
01 Business
02 Industry
03 Archetype
04 Design DNA
05 Pages & Patterns
06 Brand & Content
07 Quality
08 Review
```

The result is a validated `risheh.build-spec.v1`. JSON/YAML import/export and coding-agent handoff are also supported by C1.

### 3. Generate production code with C2

Use the **Generate Project** flow in the generator. C2 resolves the same Build Spec into a deterministic file plan and emits the project under:

```text
.generated/<project-id>/
```

The generated project carries provenance in `risheh-generation.json` and includes direction, accessibility and motion decisions derived from the Build Spec.

### 4. Edit like a human 🧑‍💻

Work on the generated project normally. C3 exists specifically because real projects do not remain untouched after generation.

### 5. Regenerate without the tiny heart attack

When the Build Spec changes, use **C3 · Safe Regeneration → Preview changes** first.

C3 compares:

```text
Base     last successful Factory output
Current  the project as it exists now
Next     the newly generated Factory output
```

Only after a safe preview can the update proceed through staging and quality checks.

➡️ **The detailed operating manual is in [`docs/USER_GUIDE.md`](docs/USER_GUIDE.md).**

---

## ♻️ C3 change language — human edition

| Status | Translation |
|---|---|
| `Added` | Factory wants to add a new generated file |
| `Updated` | Factory changed it; you did not — safe to update |
| `Preserved` | You changed it; Factory did not — your edit stays |
| `Merged` | Both changed different text lines — conservative merge succeeded |
| `Deleted` | Factory no longer needs an untouched Factory-owned file |
| `Conflicted` | Both sides touched something unsafe — **stop and ask a human** |

C3 never treats “I can write to this file” as “I am allowed to destroy this file.” A manually edited obsolete file, an overlapping edit, or a new Factory path colliding with a user-owned path becomes a blocking conflict instead of a silent overwrite.

No surprise confetti. No surprise deletion either. 🎉

---

## 🛡️ Quality is a pipeline, not a vibe

The Factory separates its gates so one green check cannot impersonate the whole release process.

```bash
# Factory schemas, references, quality rules and tests
npm run check

# Rebuild the machine-readable generated catalog
npm run catalog

# Production-build the Factory application
npm run build

# Resolve all archetypes + generate and inspect representative C2 projects
npm run codegen:check

# Verify C3 safe-regeneration contracts
npm run regeneration:check
```

CI runs the Factory validation/build, C2 compatibility/generated-project checks and C3 regeneration checks independently.

### C2 refuses to make things up

Production generation is intentionally hostile to fake credibility. The generator must not invent testimonials, ratings, awards, client logos, revenue metrics, addresses, team identities, professional credentials, prices, stock levels or case outcomes. Missing factual content should remain an authoring problem — not become synthetic “proof.”

---

## 🗂️ Repository map

```text
app/
  generator/              C1 visual composition UI
  api/
    build-spec/            Build Spec validation
    generate/              C2 generation endpoint
    regenerate/            C3 preview/apply endpoint

src/
  components/              Generator + regeneration UI
  features/
    generator/             C1 composition logic
    codegen/               C2 deterministic production generator
    regeneration/          C3 baseline / merge / staging / atomic runtime
  lib/                     catalog + validation infrastructure
  types/                   shared Factory types

design-dna/catalog.yaml    12 visual DNA profiles
patterns/catalog.yaml      27 reusable UX patterns
industries/catalog.yaml    16 industries / 48 archetypes
schemas/                    stable machine contracts
templates/                  reference-analysis knowledge library
tests/                      Factory / C1 / C2 / C3 verification
docs/                       architecture, standards and operating guides
generated/catalog.json      deterministic generator-ready catalog
```

---

## 🧬 C1 → C2 → C3 responsibilities

| Phase | Owns | Does **not** own |
|---|---|---|
| **C1 · Compose** | Business intent, industry/archetype selection, DNA, pages, patterns, brand/content, locale, quality preferences | Production code architecture |
| **C2 · Build** | Deterministic resolution, file plan, components, routes, styles, provenance, generated-project quality | Inventing missing business facts |
| **C3 · Evolve** | Baseline ownership, change classification, conservative merge, conflicts, staging, safe apply | Replacing the Build Spec contract or guessing semantic intent |

This separation is deliberate. C1 describes. C2 builds. C3 protects evolution.

---

## 🌍 RTL is not “flip the page and hope”

The Factory carries direction as an explicit product decision. Generated projects use document direction, logical layout behavior, reduced-motion considerations and direction-aware UI rather than blindly mirroring every visual asset.

Persian content can therefore coexist with English technical/product terms without pretending RTL is just a CSS afterthought.

---

## 🤖 What about AI agents?

Agent handoff exists, but deterministic generation remains the core. An agent may be used for bounded enhancement — visual polish, responsive improvement, accessibility/semantic refinement or non-factual microcopy — while immutable Factory constraints remain protected.

Agents are not allowed to quietly redesign the contract, fabricate business proof, rewrite route intent or turn a carefully selected archetype into whatever aesthetic happened to be fashionable that morning.

See [`docs/CODEGEN_AGENT_POLICY.md`](docs/CODEGEN_AGENT_POLICY.md).

---

## 📚 Documentation shelf

| Read this | When you need… |
|---|---|
| **[`docs/USER_GUIDE.md`](docs/USER_GUIDE.md)** | The complete start-to-finish operating guide |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Factory architecture and source-of-truth boundaries |
| [`docs/PHASE_C1_VISUAL_GENERATOR.md`](docs/PHASE_C1_VISUAL_GENERATOR.md) | C1 composition behavior |
| [`docs/CODEGEN_ARCHITECTURE.md`](docs/CODEGEN_ARCHITECTURE.md) | C2 generation internals |
| [`docs/CODEGEN_QUALITY_GATES.md`](docs/CODEGEN_QUALITY_GATES.md) | Generated-project quality policy |
| [`docs/PHASE_C3_REGENERATION.md`](docs/PHASE_C3_REGENERATION.md) | C3 safety model and API |
| [`docs/DESIGN_DNA_STANDARD.md`](docs/DESIGN_DNA_STANDARD.md) | How Design DNA is modeled |
| [`docs/PATTERN_STANDARD.md`](docs/PATTERN_STANDARD.md) | Pattern contracts |
| [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md) | Accessibility baseline |
| [`docs/COMPONENT_STANDARD.md`](docs/COMPONENT_STANDARD.md) | Component conventions |

---

## 🧪 For Factory contributors

When adding or changing Factory intelligence:

1. change the appropriate machine-readable source of truth;
2. validate references and quality rules;
3. regenerate the catalog;
4. run Factory tests/build;
5. run C2 compatibility when generation behavior is affected;
6. run C3 contracts when regeneration behavior is affected;
7. never “fix” a failed gate by weakening the contract without an explicit architectural decision.

Useful commands:

```bash
npm run validate
npm run quality
npm test
npm run catalog
npm run build
npm run codegen:compat
npm run codegen:check
npm run regeneration:check
```

---

## 🧭 Where this is going

The architecture is intentionally **C-ready**: C1 owns composition, C2 owns deterministic production generation, and C3 owns safe existing-project evolution. Future layers can add richer previewing, deeper semantic merge adapters, deployment integrations or policy-bounded agent workflows **without turning the Build Spec into a moving target**.

---

<div align="center">

### 🌱 Built to grow websites without growing chaos.

**Reference intelligence in. Business-aware production systems out.**

_And yes, the Factory is very protective of your manual edits._ 🫶

</div>
