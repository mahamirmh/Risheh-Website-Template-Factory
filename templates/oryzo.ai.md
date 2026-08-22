# ORYZO — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "ORYZO"
  source_url: "https://oryzo.ai/"
  analyzed_at: "2026-08-23"
  category: "Immersive Creative Product Microsite"
  subcategory: "Satirical Product Launch / Fictional Tech Brand / Interactive Storytelling"
  complexity: "high"
  visual_style:
    - immersive
    - satirical
    - product-launch
    - pseudo-technical
    - cinematic
    - interactive
    - editorial
    - playful
  suitable_for:
    - creative studios
    - agency self-promotion
    - experimental launches
    - fictional product campaigns
    - interactive portfolios
    - brand activations
    - product marketing concepts
    - art-tech microsites
  status: "ready"
```

---

# 1. Reference Snapshot

**Observed**

- ORYZO is not a real AI SaaS or real commercial hardware product.
- It is a fictional creative project by Lusion built around a cork coaster.
- The site deliberately parodies AI product marketing language, model naming, benchmark culture, research papers, product tiers, technical claims and investor-style hype.
- The homepage is a long-form single-page immersive experience.
- Core content blocks include:
  - dramatic product intro
  - fictional AI model naming (`Oryzo-1`)
  - exaggerated product benefits
  - pseudo-scientific charts and metrics
  - interactive message-flip / encryption gag
  - anti-slip and sustainability sections
  - satirical testimonials
  - ORYZO / Pro / Pro Max comparison
  - model paper / abstract / acknowledgement / BibTeX section
  - final reveal that the product does not exist
  - CTA redirecting attention back to Lusion as the real service provider
- The site mixes product marketing, humor, 3D/visual presentation, fake technical sophistication and strong reveal-based storytelling.
- Terms explicitly describe the website as a studio promotional experience and portfolio-style showcase.

**Inferred**

- The actual conversion goal is not product purchase; it is proving that Lusion can make almost anything compelling through storytelling, interaction and visual execution.
- The entire site works as an agency case study disguised as a fake product launch.
- Humor is not decorative; it is the primary differentiation and retention mechanism.

**Recommended for reusable template**

- Keep the narrative escalation pattern.
- Make the fictional-product shell fully configurable.
- Preserve the reveal architecture but allow different reveal endings:
  - agency promotion
  - product teaser
  - recruitment campaign
  - experiential brand launch
  - cultural campaign
- Never fabricate claims when the template is adapted to a real product.
- Clearly separate fictional/satirical data from factual content.

---

# 2. Template Identity

```text
Template Type: Immersive Fictional Product Launch + Creative Studio Showcase
Design Direction: Cinematic / Satirical / Product-led / Pseudo-technical
Primary Goal: Capture attention and demonstrate creative capability
Secondary Goal: Convert curiosity into studio inquiry / brand interest
Content Density: High
Interaction Density: High
Trust Density: Low by design, then recovered via reveal
Entertainment Density: Very High
Narrative Importance: Critical
```

Best suited for:

- creative agencies
- interaction design studios
- 3D studios
- motion studios
- experimental product campaigns
- brand launches
- April Fools campaigns
- fictional startups
- art/technology exhibitions
- portfolio centerpiece projects

---

# 3. Design DNA

## Overall visual personality

- absurdly polished
- deliberately over-engineered
- premium product-launch aesthetic
- pseudo-scientific
- self-aware
- cinematic
- playful
- highly art-directed
- deadpan humorous

## Visual Keywords

```text
Satirical, cinematic, polished, pseudo-technical, absurd, playful,
immersive, product-led, interactive, deadpan, tactile, self-aware
```

## Density

High. Many sections carry independent visual concepts, jokes, metrics, demos and supporting copy.

## Contrast

The design relies on strong visual contrast between polished product marketing and obviously ridiculous subject matter.

## White-space strategy

Large cinematic spacing around primary visual moments; denser pseudo-technical blocks where parody is strongest.

## Content rhythm

```text
Serious Product Claim
↓
Technical-looking Proof
↓
Absurd Detail
↓
Interactive Joke
↓
New Product Claim
↓
Escalation
↓
Reveal
```

## Card usage

Cards are secondary. Prefer stage-like sections, pseudo-spec panels, product comparison rows and research-paper blocks.

## Motion character

Motion should feel high-budget, deliberate and cinematic—not generic scroll-reveal animation.

---

# 4. Information Architecture

Observed architecture is primarily single-page:

```text
/
├── hero / product intro
├── AI parody / Oryzo-1
├── portability stunt
├── product benefit sections
├── fake technical metrics
├── encryption interaction
├── grip / sustainability
├── social proof parody
├── product tiers
├── research paper
├── reveal / agency CTA
└── newsletter / contact

/terms_and_conditions.pdf
```

Recommended reusable IA:

```text
/
├── /experience
├── /product
├── /specs
├── /paper
├── /about-project
├── /contact
└── /legal
```

For most implementations, keep everything on `/` unless SEO or editorial reuse requires subpages.

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Full immersive narrative | Reveal CTA | Marketing/Experience | P0 |
| `/paper` | Extend pseudo-technical world | Download/View | Editorial | P2 |
| `/about-project` | Explain concept after reveal | Contact studio | Case study | P1 |
| `/contact` | Convert interest | Submit inquiry | Lead | P1 |
| `/legal` | Clarify fictional status / terms | None | Legal | P1 |

---

# 5. Global Layout Architecture

```text
Experience Shell
├── Minimal Header
│   ├── Wordmark
│   ├── Optional Sound / Motion Control
│   └── Optional Menu
├── Main Narrative
│   ├── Full-screen visual stages
│   ├── Pseudo-technical modules
│   ├── Interactive experiments
│   └── Reveal section
└── Footer
    ├── Real studio attribution
    ├── Contact
    ├── Newsletter
    └── Legal disclaimer
```

## Positioning

- Hero and key product stages: full viewport.
- Technical blocks: contained width.
- 3D/render sections: full bleed.
- Reveal: full-width, high contrast.
- Footer: informational and conversion-focused.

## Recommended widths

```text
--page-max: 1600px
--content-max: 1280px
--copy-max: 760px
--spec-max: 1040px
```

---

# 6. Page-by-Page Structure

## Homepage / Main Experience

```text
01 Minimal Header
02 Product Hero
03 Product Tagline / Positioning
04 Cinematic Product Demo
05 AI / Model Parody Introduction
06 Exaggerated Feature Story
07 Portable / Wearable Stunt
08 Fake Benchmark / Editorial Interlude
09 Product Benefit Cluster
10 Thermal / Geometry Metrics
11 Interactive Encryption Demo
12 Grip / Stability Section
13 Sustainability Section
14 Social Proof / Reviews Parody
15 Product Tier Selector
16 Product Comparison Table
17 Research Paper / Open Model Section
18 Abstract / Benchmark / Citation Gag
19 Final Reveal
20 Real Studio CTA
21 Newsletter / Contact
22 Legal Disclaimer
23 Footer
```

---

# 7. Section Anatomy

## Product Hero

```text
Hero
├── Product Name
├── Deadpan Tagline
├── Supporting Claim
├── Product Visual / 3D Asset
├── Play / Explore Trigger
└── Optional Scroll Cue
```

Priority:

1. Visual intrigue
2. Product-world credibility
3. Curiosity
4. Humor, delayed slightly

---

## Fake Technical Module

```text
TechnicalModule
├── Model / Feature Name
├── Scientific-sounding Subtitle
├── Large Metric / Diagram
├── Explanation
├── Footnote / Disclaimer
└── Punchline
```

---

## Product Tier Comparison

```text
TierComparison
├── Variant Switcher
├── Tier Name
├── Product Visual
├── Summary
├── Feature List
├── Fake Technical Specs
└── Purchase-style CTA or Informational CTA
```

---

## Research Paper Section

```text
ResearchPaper
├── Model Name
├── Paper / Model / Code Actions
├── Abstract
├── Benchmark Copy
├── Limitations
├── Acknowledgements
├── Peer Review Quote
└── BibTeX
```

---

## Reveal Section

```text
Reveal
├── Reality Statement
├── Twist / Punchline
├── Studio Positioning
├── Primary CTA
├── Attribution
└── Optional Case Study Link
```

This is the commercial heart of the template.

---

# 8. UX & Conversion Architecture

## Primary journey

```text
Confusion / Curiosity
        ↓
Believable Product World
        ↓
Technical Escalation
        ↓
Humor Recognition
        ↓
Deeper Exploration
        ↓
Proof of Creative Execution
        ↓
Reveal
        ↓
Studio / Brand Conversion
```

## Conversion Map

```text
Attention
↓
Entertainment
↓
Memorability
↓
Craft Proof
↓
Reveal
↓
Inquiry
```

## Why it works

- The visitor is not asked to trust the studio immediately.
- The site demonstrates capability before making a sales claim.
- Product-world consistency creates immersion.
- Humor lowers resistance and increases memorability.
- The reveal reframes every prior section as a proof point.

## UX risks

1. The joke can obscure the real conversion path.
2. Heavy media can hurt performance.
3. Fictional claims can be mistaken for real claims.
4. Excessive motion can reduce accessibility.
5. Long-scroll fatigue is possible if pacing is weak.

## Recommended improvements for reusable template

- Add optional skip-to-reveal control after first 2–3 sections.
- Add persistent but subtle “fictional concept” disclosure mode for regulated industries.
- Add reduced-motion path.
- Instrument scroll depth and interaction engagement.
- Allow story modules to be reordered without breaking narrative logic.

---

# 9. Navigation Architecture

Recommended desktop header:

```text
Brand
Experience
Specs
Paper
About
Contact
```

But keep navigation minimal; over-navigation weakens immersion.

## Mobile

Use a compact menu or bottom sheet. Avoid persistent large nav chrome.

## Footer groups

```text
Project
Studio
Contact
Newsletter
Legal
```

---

# 10. Design Tokens

Approximate reusable system inspired by the observed visual language, not source-exact.

```css
:root {
  --color-bg: #f3efe5;
  --color-surface: #e8e2d7;
  --color-text: #121212;
  --color-muted: #6f6a62;
  --color-border: rgba(18,18,18,.18);
  --color-accent: #d8ff57;
  --color-dark: #0c0c0c;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 144px;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-sm: 0 8px 24px rgba(0,0,0,.08);
  --shadow-md: 0 20px 60px rgba(0,0,0,.12);
}
```

---

# 11. Typography System

Use a clean grotesk / neo-grotesk family plus optional monospace for pseudo-technical blocks.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 84–132px | 48–72px | 500–700 | .88–.98 | Hero / absurd claims |
| H1 | 64–92px | 40–56px | 500–700 | .95–1.05 | Primary sections |
| H2 | 42–64px | 30–42px | 500–650 | 1–1.08 | Feature sections |
| H3 | 28–38px | 24–30px | 500–650 | 1.1 | Technical modules |
| Body-lg | 20–26px | 18–22px | 400 | 1.4 | Narrative copy |
| Body | 16–18px | 16px | 400 | 1.5 | Main copy |
| Mono | 12–15px | 12–14px | 400–500 | 1.45 | Specs / paper |
| Label | 11–13px | 11–12px | 600 | 1.2 | Metrics / metadata |

## Typography mood

- Product-launch confidence
- Scientific credibility parody
- Sparse but bold
- Strong contrast between marketing and technical copy

## RTL adaptation

For Persian reuse:

- use Pelak for primary interface typography;
- use a Persian-capable monospace alternative for pseudo-technical blocks;
- preserve hierarchical contrast rather than imitating Latin letter spacing;
- reverse directional motion/diagram flow where necessary.

---

# 12. Color System

Recommended ratio:

```text
Warm neutral / cork-inspired: 55%
Dark neutral: 25%
White / light surface: 15%
Accent: 5%
```

Accent should feel surprising and synthetic against natural material tones.

---

# 13. Grid & Spacing System

## Desktop

```text
12-column grid
Max width: 1280–1600px
Gutter: 24–32px
Outer margin: 32–72px
Section spacing: 120–220px
```

## Tablet

```text
8-column grid
Gutter: 20–24px
Outer margin: 24–32px
Section spacing: 88–140px
```

## Mobile

```text
4-column grid
Gutter: 16px
Outer margin: 16–20px
Section spacing: 64–96px
```

Cinematic sections may ignore the standard grid and go full-bleed.

---

# 14. Radius, Border & Shadow

- Use moderate radii for product cards and interactive panels.
- Pseudo-paper sections may use square edges.
- Technical tables should rely more on rules than elevation.
- Interactive controls must have visible focus rings.
- 3D/product visual containers can use minimal chrome.

---

# 15. Iconography

Recommended:

- simple outline icons
- 1.5–2px stroke
- technical labels and glyphs
- avoid emoji-like visual language
- use icons sparingly because type and product visuals carry most of the hierarchy

Suggested reusable libraries:

- Lucide
- Phosphor
- custom SVGs for technical diagrams

---

# 16. Imagery Direction

Primary media types:

- 3D product render
- macro material photography
- short video loops
- pseudo-scientific diagrams
- UI-like spec panels
- satirical editorial imagery
- tactile closeups

## Treatment

- large viewport dominance
- high-detail renders
- carefully controlled lighting
- minimal background clutter
- mobile versions should crop to object-first compositions

## Performance

- poster image before video
- lazy-load heavy sections
- use AVIF/WebP
- defer non-critical 3D assets
- provide static fallback for low-power devices

---

# 17. Motion & Interaction

Important interactions:

- hover-based product reveals
- cursor-linked detail changes
- scroll-driven transitions
- object rotation / 3D movement
- tabs / product tier switcher
- fake encryption interaction
- animated metrics
- staggered technical diagrams
- cinematic section transitions

Recommended timing:

```text
Micro: 120–180ms
Standard: 200–320ms
Cinematic reveal: 450–900ms
Scroll-linked: continuous, low-jank
```

Rules:

- motion must support the joke or product-world credibility;
- avoid animation on every element;
- respect `prefers-reduced-motion`;
- preserve readable static state at all times.

---

# 18. Component Inventory

### Layout

- ExperienceShell
- Header
- Section
- FullBleedStage
- TechnicalContainer
- Footer

### UI

- Button
- Pill
- Tabs
- Switcher
- Accordion
- Tooltip
- Input
- Slider

### Product Marketing

- ProductHero
- ProductStage
- FeatureClaim
- MetricBlock
- SpecGrid
- ProductTierSwitcher
- ComparisonTable
- ReviewCarousel
- SustainabilityBlock
- BenchmarkPanel

### Interactive

- FakeEncryptor
- HoverExperiment
- ProductRotator
- ScrollScrubber
- ModelPreview

### Editorial

- AbstractBlock
- PaperSection
- PeerReviewQuote
- BibTeXBlock
- Disclaimer
- RevealSection

---

# 19. Component Anatomy

## FeatureClaim

```text
FeatureClaim
├── label
├── title
├── supportingCopy
├── metric?
├── media?
├── footnote?
└── punchline?
```

```ts
interface FeatureClaimProps {
  label?: string;
  title: string;
  supportingCopy: string;
  metric?: string;
  media?: MediaAsset;
  footnote?: string;
  punchline?: string;
  tone?: 'serious' | 'technical' | 'satirical';
}
```

## ProductTier

```ts
interface ProductTier {
  name: string;
  summary: string;
  stackCount?: number;
  specs: Array<{ label: string; value: string }>;
  visual?: MediaAsset;
  badge?: string;
}
```

## FakeTechnicalMetric

```ts
interface FakeTechnicalMetric {
  name: string;
  value: string;
  unit?: string;
  explanation?: string;
  disclaimer?: string;
  fictional: true;
}
```

---

# 20. Variants & States

Interactive components must support:

- default
- hover
- focus
- active
- disabled
- loading
- reduced-motion
- no-WebGL fallback

Interactive joke components must also support:

- empty
- input entered
- transformed
- reset

---

# 21. Responsive Architecture

## Mobile 320–479

- one-column narrative
- simplified motion
- static product fallback if 3D is expensive
- comparison becomes stacked cards or horizontal scroll
- controls minimum 44px touch target
- technical diagrams become scrollable or simplified

## Large Mobile 480–767

- selective two-column detail blocks
- tier switcher remains touch-first

## Tablet 768–1023

- 6–8 column flexible sections
- preserve major product stages

## Desktop 1024–1439

- full cinematic layouts
- advanced hover interactions
- side-by-side technical narratives

## Large Desktop 1440+

- expanded white space
- larger 3D objects
- broader media staging

Mobile must not simply shrink the desktop experience.

---

# 22. Accessibility

Requirements:

- semantic heading hierarchy
- keyboard-accessible interactive demos
- visible focus states
- no essential information conveyed only by motion
- descriptive labels for fake/fictional controls
- reduced-motion support
- alt text for product renders
- captions/transcripts for video if dialogue exists
- sufficient contrast
- no autoplay audio
- clear fictional/satirical disclosure where necessary

Target: WCAG 2.2 AA.

---

# 23. Content Architecture

Entities:

```text
Experience
ProductConcept
FeatureClaim
TechnicalMetric
InteractiveExperiment
ProductTier
Review
PaperSection
Reveal
StudioCTA
Disclaimer
```

Example:

```ts
interface ProductConcept {
  name: string;
  tagline: string;
  description: string;
  fictional: boolean;
  heroMedia: MediaAsset;
  features: FeatureClaim[];
  tiers?: ProductTier[];
}
```

```ts
interface RevealContent {
  title: string;
  body: string;
  actualBrandName: string;
  ctaLabel: string;
  ctaHref: string;
}
```

---

# 24. SEO / GEO Structure

Recommended:

- descriptive title that does not falsely present the fictional product as real
- Organization schema for the actual studio
- CreativeWork schema for the experience/project
- no fabricated Product/Offer schema unless the product is truly sold
- clear disclaimer in crawlable HTML
- internal link to case study / studio work
- concise “what this is” section after reveal
- social metadata using experience visuals

For AI search / GEO:

- include a factual summary stating that the experience is a creative concept
- identify the creator/studio clearly
- distinguish parody claims from factual studio information

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
GSAP or Framer Motion
React Three Fiber / Three.js for optional 3D
Server Components for static editorial sections
Client Components only for interactions
CMS optional
```

Suggested structure:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── experience/
│   ├── product/
│   ├── technical/
│   └── editorial/
├── content/
├── lib/
│   ├── motion/
│   ├── analytics/
│   └── three/
├── styles/
└── types/
```

## Performance requirements

- dynamic import for 3D
- intersection-based media loading
- compressed textures
- SSR for text content
- static fallback when WebGL unavailable
- target LCP < 2.5s on realistic mobile connection where feasible

---

# 26. Reusability Rules

### Fixed in Template

- narrative escalation logic
- serious → absurd → reveal pattern
- cinematic section rhythm
- fake technical module pattern
- interactive experiment slot
- product tier comparison logic
- reveal-to-real-brand conversion

### Customizable

- fictional product
- humor style
- material / visual identity
- claims
- 3D assets
- interaction concepts
- technical naming
- reveal message
- studio/brand CTA

### Never hardcode

- Lusion identity
- ORYZO name
- original jokes
- original reviews
- original fake metrics
- original copy
- original 3D assets
- original paper text

---

# 27. Customization Variables

```yaml
brand:
  public_name: ""
  logo: ""
  accent: ""
  creator_name: ""

concept:
  product_name: ""
  fictional: true
  tagline: ""
  core_material: ""
  tone: "deadpan|absurd|technical|playful"

narrative:
  intro_claim: ""
  escalation_level: ""
  reveal_message: ""

features:
  - title: ""
    claim: ""
    metric: ""
    fictional: true

interactions:
  enable_3d: true
  enable_fake_tool: true
  enable_scroll_story: true

product_tiers:
  enabled: true
  items: []

paper:
  enabled: true
  abstract: ""
  citation: ""

conversion:
  final_cta_label: ""
  final_cta_href: ""

legal:
  parody_disclaimer: ""
```

---

# 28. What Must NOT Be Copied

Do not copy:

- ORYZO brand name
- Lusion branding
- source slogans
- exact jokes
- exact pseudo-scientific metrics
- exact fictional reviews
- product tier names unless genericized
- exact 3D model
- original illustrations / photos / renders
- original research-paper parody wording
- source contact data
- source legal copy

The reusable asset is the **story architecture**, not the literal campaign.

---

# 29. Improvement Layer

Recommended improvements over the reference pattern:

1. Add optional “skip intro” without ruining immersion.
2. Add explicit project-case-study page after reveal.
3. Add analytics for interaction completion.
4. Add motion-reduced visual narrative.
5. Add explicit fictional-content flag in CMS.
6. Add content linting to prevent fake claims leaking into real-product implementations.
7. Add fallback assets for low-power and no-WebGL devices.
8. Add a final compact case-study summary explaining objective, approach and results.
9. Add shareable deep links to individual experience sections.
10. Add campaign-expiry or archive mode.

---

# 30. Quality Gates

Before release:

- [ ] Fictional vs factual claims are clearly separated.
- [ ] No fake Product/Offer schema is published for nonexistent products.
- [ ] All heavy media has fallback and lazy loading.
- [ ] WebGL failure does not block the experience.
- [ ] Reduced-motion mode is functional.
- [ ] Interactive demos work by keyboard.
- [ ] Final reveal is understandable without prior context.
- [ ] Real creator/studio identity is clearly visible by the end.
- [ ] No original source assets or copy remain.
- [ ] Mobile pacing remains coherent.
- [ ] Performance budget is respected.
- [ ] Contact / conversion path works.

---

# 31. Master Build Prompt

```text
Build a production-ready immersive creative product microsite inspired by the structural and experiential logic of a satirical high-end product launch, but do not copy ORYZO, Lusion, their copy, jokes, images, renders, metrics, or branding.

GOAL
Create a fictional or conceptual product experience that initially feels like a serious premium technology launch, gradually escalates into playful or absurd pseudo-technical storytelling, and finally reveals the actual creator/brand behind the campaign. The end result must function as both an interactive experience and a conversion-focused creative case study.

CORE EXPERIENCE
1. Minimal high-impact header.
2. Full-screen product hero with product name, concise claim and cinematic visual.
3. Introduce a fictional model/version system.
4. Add 3–5 exaggerated product-feature sections.
5. Each feature should combine:
   - serious product language,
   - technical-looking proof,
   - visual/media evidence,
   - optional punchline.
6. Include at least one interactive experiment/tool.
7. Add pseudo-technical diagrams or benchmark modules.
8. Add social proof/reviews, clearly fictional when applicable.
9. Add a multi-tier product comparison section.
10. Add a research-paper-style section with abstract, limitations and citation-style content.
11. Finish with a strong reveal that explains the real purpose of the experience.
12. Route the visitor into a real CTA for the studio, campaign or parent brand.

DESIGN DIRECTION
- Cinematic.
- Premium.
- Product-led.
- Tactile.
- Pseudo-scientific.
- Self-aware.
- Strong typography.
- Large 3D or visual moments.
- Avoid generic SaaS card layouts.
- Use serious design language to increase the contrast with humorous content.

TECHNICAL STACK
- Next.js
- TypeScript
- Tailwind CSS
- GSAP or Framer Motion
- Optional React Three Fiber / Three.js
- Dynamic import for 3D
- Static fallback for no-WebGL devices
- Semantic HTML
- WCAG 2.2 AA

RESPONSIVE
Create a bespoke mobile version. Do not simply scale down desktop. Simplify 3D and motion on small devices, keep touch targets >=44px, and make large tables horizontally scrollable or convert them into stacked comparison cards.

ACCESSIBILITY
- Respect prefers-reduced-motion.
- No autoplay audio.
- Every interaction must work by keyboard.
- Provide meaningful alt text.
- Never require hover for critical information.

CONTENT SAFETY / TRUTH RULES
- All fictional claims must be marked as fictional in source data.
- Do not generate real Product schema for fictional products.
- Do not fabricate customer names, scientific evidence, compliance certifications, pricing or business results.
- If adapted to a real product, replace parody claims with verified facts only.

COMPONENTS
Build reusable components for:
- ProductHero
- ProductStage
- FeatureClaim
- TechnicalMetric
- BenchmarkPanel
- InteractiveExperiment
- ProductTierSwitcher
- ComparisonTable
- ReviewCarousel
- ResearchPaper
- RevealSection
- StudioCTA
- Disclaimer

PERFORMANCE
- Lazy-load 3D and video.
- Use optimized media.
- Keep copy server-rendered.
- Use static posters before motion content.
- Ensure the experience remains usable without WebGL.

FINAL DELIVERABLE
The completed site should feel like a fully realized fictional product universe, not a collection of disconnected effects. Every visual, interaction and piece of copy must serve the central narrative arc:

Curiosity → Believability → Escalation → Humor → Craft Proof → Reveal → Conversion.
```
