# Storey Architecture — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "Storey Architecture"
  source_url: "https://www.storeyarchitecture.co.uk/"
  analyzed_at: "2026-08-23"
  category: "Premium Architecture Studio"
  subcategory: "Residential Architecture / Interior Architecture / Landscape Integration"
  complexity: "high"
  visual_style:
    - editorial
    - architectural
    - calm-luxury
    - image-led
    - spatial
    - minimal
    - material-focused
  suitable_for:
    - architecture studios
    - interior design studios
    - landscape architecture firms
    - premium residential practices
    - property design consultancies
    - boutique design offices
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Brand: Storey Architecture.
- Domain: storeyarchitecture.co.uk.
- Core positioning: contemporary residential architecture centred on clarity, intentional living, material honesty, light, place and long-term use.
- Primary route structure: Home, Projects, Studio, Journal.
- Main commercial CTA: start a conversation / submit a spatial brief.
- Key areas of practice visible on the site: residential architecture, renovations & extensions, interior architecture, landscape integration.
- Projects index is a highly visual portfolio with project names and direct exploration links.
- Project detail pages use a concise project introduction followed by large photographic sequences.
- Studio page carries philosophy, core principles, process, leadership team and areas of work.
- Journal supports thought leadership around long-term living, material honesty, comfort, privacy, light and landscape.
- Contact intake captures name, email, project type, location, timeline and project context.

## Inferred

- The site sells confidence through visual restraint rather than aggressive sales copy.
- Photography is the principal proof layer; text provides framing, not persuasion overload.
- The Studio page is strategically important because it transforms aesthetic admiration into operational trust.
- The spatial brief intake acts as a qualification mechanism, not merely a generic contact form.

## Recommended for reusable template

- Preserve the quiet editorial pacing and project-first proof model.
- Add stronger project metadata, optional planning/process detail and location/service taxonomy for SEO without damaging the minimal aesthetic.
- Keep all claims, awards, project locations, testimonials, dates and team information data-driven and never hardcoded.

---

# 2. Template Identity

```text
Template Type: Premium Architecture Studio + Editorial Portfolio
Design Direction: Calm / Material-led / Image-first / Architectural Editorial
Primary Goal: Generate qualified project enquiries
Secondary Goal: Demonstrate design philosophy and project quality
Content Density: Medium
Interaction Density: Low-Medium
Trust Density: High
Image Density: Very High
```

Best suited for practices where the visitor must first feel design quality, then understand process, then submit a serious brief.

Reusable sectors:

- architecture
- interiors
- landscape design
- high-end residential development
- boutique hospitality design
- spatial design
- luxury renovation

---

# 3. Design DNA

## Overall visual personality

- calm
- restrained
- tactile
- spatial
- sophisticated without decorative excess
- material-aware
- editorial
- grounded
- premium but not ostentatious

## Visual Keywords

```text
Calm, architectural, restrained, tactile, warm, editorial,
material-honest, spacious, grounded, timeless, image-led
```

## Density

Low to medium text density, high image density. The visitor is given room to look rather than being pushed through dense selling modules.

## Contrast

Soft neutral backgrounds with dark text and high-quality architectural photography. Contrast should come from scale, crop and spatial rhythm rather than bright UI accents.

## White-space strategy

Large vertical breathing room between major narratives. Internal spacing should reinforce gallery pacing and architectural rhythm.

## Content rhythm

```text
Atmosphere
↓
Positioning
↓
Expertise
↓
Projects
↓
Principles / Process
↓
Thought Leadership
↓
Qualified Enquiry
```

## Border usage

Minimal. Prefer fine rules only for metadata, forms, navigation divisions and journal lists.

## Card usage

Avoid generic rounded cards. Use flat editorial frames, image blocks, lists and full-bleed media.

## Motion character

Slow, deliberate and subtle. Image reveals, crossfades, scale shifts and text entrance should feel architectural—not playful.

---

# 4. Information Architecture

## Observed structure

```text
/
├── /projects
│   ├── /projects/festal-hill
│   ├── /projects/meadow-house
│   ├── /projects/bracken-house
│   ├── /projects/grange-farm
│   └── /projects/rosewood-view
├── /studio
├── /journal
│   └── /journal/[article]
├── /privacy-policy
├── /terms-of-use
└── /cookie-policy
```

## Recommended reusable IA

```text
/
├── /projects
│   ├── /[project]
│   └── optional filters: type / location / status
├── /studio
│   ├── philosophy
│   ├── process
│   └── team
├── /services
│   ├── residential-architecture
│   ├── renovations-extensions
│   ├── interior-architecture
│   └── landscape-integration
├── /journal
│   └── /[article]
├── /contact
└── /legal
```

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Position practice and surface best work | View projects / Start conversation | Marketing | P0 |
| `/projects` | Portfolio discovery | Explore project | Portfolio | P0 |
| `/projects/[slug]` | Project immersion | Start conversation | Case study / Gallery | P0 |
| `/studio` | Philosophy, process, team and credibility | Submit brief | Company | P0 |
| `/services` | Clarify scope and expertise | Discuss project | Service | P1 |
| `/journal` | Thought leadership and SEO | Read article | Editorial | P1 |
| `/contact` | Qualified lead intake | Submit | Lead capture | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Header
│   ├── Wordmark
│   ├── Menu trigger / Primary navigation
│   └── Contact access
├── Main
│   ├── Editorial sections
│   ├── Full-bleed photography
│   ├── Contained copy blocks
│   └── Project / Journal modules
├── Spatial Brief Intake
└── Footer
    ├── Site index
    ├── Legal
    ├── Contact details
    └── Closing image / brand note
```

## Layout rules

- Alternate between contained text and oversized imagery.
- Preserve strong edge alignment across sections.
- Avoid excessive card grids.
- Let project imagery occasionally break container bounds.
- Keep copy measure narrow enough to maintain editorial calm.

## Suggested widths

```text
--page-max: 1600px
--content-max: 1360px
--text-max: 720px
--narrow-copy: 600px
```

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header / Hero imagery
02 Positioning statement
03 View Projects CTA
04 Philosophy introduction
05 Areas of Expertise
06 Studio teaser
07 Selected Projects
08 Brand note / manifesto moment
09 Testimonials / trust layer
10 Journal teaser
11 Spatial Brief CTA
12 Spatial Brief Intake
13 Footer
```

### Hero objective

Create immediate atmosphere and signal design quality before asking the visitor to read deeply.

### Expertise objective

Show architecture, interiors and landscape as connected disciplines rather than disconnected service cards.

### Selected projects objective

Turn visual admiration into portfolio exploration.

### Journal objective

Demonstrate that the studio has a point of view beyond aesthetics.

### Enquiry objective

Transition from inspiration to a structured project brief.

---

## Projects Index

```text
01 Page intro
02 Portfolio statement
03 Project list / editorial grid
04 Optional filters
05 Project thumbnails + titles
06 Final enquiry CTA
07 Footer
```

Recommended metadata:

- project title
- location
- year
- project type
- status
- optional size
- optional service scope

Do not overload the index with technical data. Metadata should support discovery, not turn the page into a spreadsheet.

---

## Project Detail

```text
01 Project category / location / year
02 Project title
03 Short project narrative
04 Hero image
05 Gallery sequence
06 Optional design idea / planning context
07 Material / spatial detail
08 Optional project facts
09 Related projects
10 Start a conversation CTA
11 Footer
```

### Narrative principle

```text
Context
↓
Architectural Response
↓
Spatial Experience
↓
Material Expression
↓
Photography Proof
```

Text should remain concise unless the project genuinely benefits from a deeper case-study layer.

---

## Studio

```text
01 Studio positioning
02 Philosophy / manifesto
03 Large studio image
04 Core Principles
05 Our Process
06 Team
07 Areas of Work
08 Journal teaser
09 Spatial Brief CTA
10 Intake form
11 Footer
```

### Core Principles pattern

Recommended reusable set:

```text
01 Clarity
02 Material Honesty
03 Connection to Place
04 Long-Term Living
```

These are reference-derived themes and should be replaced with each studio's actual principles.

### Process pattern

```text
01 Discovery / Brief
02 Concept Direction
03 Design Development
04 Material + Detail Resolution
05 Delivery / Coordination
```

---

## Journal

```text
01 Journal intro
02 Featured article
03 Article index
04 Category / theme filters
05 Newsletter or project CTA (optional)
06 Footer
```

Recommended topic clusters:

- architecture process
- long-term living
- materials
- light
- planning
- landscape
- renovation
- sustainability
- spatial wellbeing

---

## Journal Article

```text
01 Title
02 Author
03 Role
04 Date / read time
05 Hero image
06 Article body
07 Inline project imagery
08 Related thinking
09 Related projects
10 CTA
```

---

# 7. Section Anatomy

## Architecture Hero

```text
Hero
├── Brand / Header
├── Full-bleed project media
├── Positioning sentence
├── Supporting paragraph
└── CTA
```

Keep the text secondary to the media but make the positioning readable without scroll when possible.

## Project Preview

```text
ProjectPreview
├── Image
├── Project name
├── Optional metadata
└── Explore action
```

## Core Principle Row

```text
Principle
├── Number
├── Title
├── Description
└── Optional image / material detail
```

## Spatial Brief Intake

```text
SpatialBrief
├── Name
├── Email
├── Project type
├── Location
├── Timeline
├── Project description
├── Privacy consent
└── Submit
```

Recommended additions:

- approximate budget band
- planning status
- property/site status
- preferred service scope
- referral source

Only add these if they improve qualification without making the form intimidating.

---

# 8. UX & Conversion Architecture

## Primary journey

```text
Visual admiration
      ↓
Understand design philosophy
      ↓
Explore projects
      ↓
Understand process + team
      ↓
Build trust
      ↓
Submit spatial brief
```

## Conversion Map

```text
Atmosphere
↓
Relevance
↓
Portfolio Proof
↓
Process Confidence
↓
Professional Trust
↓
Qualified Enquiry
```

## Trust layers

- completed projects
- coherent design principles
- clear process
- named team
- journal / expertise content
- testimonials where verified
- professional contact details

## UX improvements for reusable template

1. Add project-type filters only when project volume justifies them.
2. Add optional project facts drawer rather than cluttering galleries.
3. Keep enquiry CTA persistent enough to be discoverable, but never visually aggressive.
4. Add an accessibility-safe image gallery with keyboard navigation.
5. Ensure contact form confirmation is explicit and does not rely on animation only.
6. Add stronger local SEO structure for architecture practices serving defined geographies.

---

# 9. Navigation Architecture

## Desktop

Recommended minimal nav:

```text
Storey / Logo
Projects
Studio
Journal
Start a Project
```

A compact menu-trigger pattern can work if the brand benefits from a more immersive home page, but project and contact access must remain obvious.

## Mobile

- full-screen menu
- large tap targets
- clear section labels
- contact CTA visible without excessive scrolling
- no hover-dependent project discovery

## Footer

```text
Site Index
Legal
Contact
Address
Social
Optional newsletter
```

---

# 10. Design Tokens

Values below are reusable approximations, not extracted source tokens.

```css
:root {
  --color-bg: #f2f0e9;
  --color-surface: #e9e6dd;
  --color-text: #1a1a18;
  --color-muted: #76736b;
  --color-border: rgba(26, 26, 24, 0.18);
  --color-primary: #1a1a18;
  --color-accent: #8a806f;

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
  --space-11: 192px;

  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --shadow-sm: none;
  --shadow-md: none;
}
```

---

# 11. Typography System

Recommended system: restrained modern grotesk or refined neo-grotesk, optionally paired with an editorial serif for journal accents.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 72–108px | 42–60px | 400–500 | 0.95–1.02 | Major statement |
| H1 | 56–80px | 38–52px | 400–500 | 1.0–1.08 | Page title |
| H2 | 38–54px | 30–38px | 400–500 | 1.05–1.15 | Section title |
| H3 | 26–34px | 22–28px | 450–550 | 1.15 | Project / principle |
| Body-lg | 20–26px | 18–21px | 400 | 1.45 | Intro copy |
| Body | 16–18px | 16px | 400 | 1.55 | Main copy |
| Small | 13–14px | 13px | 400–500 | 1.4 | Metadata |
| Label | 11–13px | 11–12px | 500 | 1.2 | Index / category |

## Typography rules

- Avoid excessive bold weights.
- Use line breaks intentionally.
- Keep project narratives narrow.
- Use uppercase labels sparingly.
- Prioritise legibility over decorative typography.

## RTL adaptation

For Persian architecture studios:

- use a refined Persian sans or contemporary editorial face;
- preserve calm line height;
- avoid forced Latin-style letter spacing;
- reverse directional gallery/navigation behavior;
- ensure architectural numerals and project metadata remain visually ordered.

---

# 12. Color System

Recommended ratio:

```text
Warm Neutral: 70%
Photography: 20%
Text / Deep Neutral: 8%
Accent / Interactive: 2%
```

Avoid loud brand gradients unless the practice identity requires them.

Semantic colors should exist for form states but remain visually subdued.

---

# 13. Grid & Spacing System

## Desktop

```text
12-column grid
Max width: 1360–1600px
Gutter: 24–32px
Outer margin: 32–64px
Section spacing: 112–192px
```

## Tablet

```text
8-column grid
Gutter: 20–24px
Outer margin: 24–32px
Section spacing: 80–128px
```

## Mobile

```text
4-column grid
Gutter: 16px
Outer margin: 16–20px
Section spacing: 56–88px
```

Project media should often remain near full width on mobile to preserve immersion.

---

# 14. Radius, Border & Shadow

- Radius: almost square by default.
- Borders: 1px subtle neutral rules.
- Shadows: avoid on standard editorial surfaces.
- Modal/gallery overlays may use a soft elevation layer.
- Focus ring: visible and accessible, even if visually restrained.

---

# 15. Iconography

Use iconography sparingly.

Recommended style:

- simple line icons
- 1–1.5px stroke
- sharp or lightly rounded geometry
- 16–20px inline sizes
- arrows for exploration
- plus/minus for accordion or project facts

Equivalent libraries: Lucide or custom SVG system.

---

# 16. Imagery Direction

Photography is a core product surface.

## Required image types

- architecture exterior
- interior atmosphere
- material details
- landscape/context
- construction/process (optional)
- team portraits
- journal editorial imagery

## Ratios

- Hero: 16:9, 3:2 or responsive full bleed
- Project grid: mixed editorial ratios allowed
- Detail gallery: preserve source photography composition
- Portraits: 4:5 or 3:4

## Rules

- never distort architecture photography;
- use object-fit cover only where crop is intentional;
- provide focal-point metadata in CMS;
- serve AVIF/WebP where supported;
- preserve high-resolution zoom only when justified;
- use meaningful alt text where image conveys project information.

---

# 17. Motion & Interaction

Recommended motion language:

```text
Micro interaction: 140–180ms
Standard transition: 220–320ms
Image reveal: 450–700ms
Page transition: 500–800ms maximum
```

Patterns:

- image crossfade
- subtle scale reveal
- text mask / fade
- smooth gallery transitions
- gentle menu opening
- project hover metadata
- restrained parallax only where performance allows

Never let scroll animation delay access to project information.

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

## Layout

- Header
- Menu Overlay
- Footer
- Container
- FullBleedMedia
- EditorialSection
- SplitSection

## Portfolio

- ProjectCard
- ProjectGrid
- ProjectMeta
- ProjectGallery
- RelatedProjects
- ProjectFacts

## Studio

- PrincipleRow
- ProcessStep
- TeamMember
- ServiceArea
- ManifestoBlock

## Content

- JournalCard
- ArticleHeader
- AuthorBlock
- RelatedArticles

## Conversion

- SpatialBriefCTA
- SpatialBriefForm
- ContactDetails
- SuccessState

## UI

- Button
- TextLink
- ArrowLink
- Input
- Select
- Textarea
- Checkbox
- Accordion

---

# 19. Component Anatomy

```ts
interface ProjectCardProps {
  title: string;
  slug: string;
  image: Media;
  location?: string;
  year?: number;
  type?: string;
  status?: 'concept' | 'planning' | 'in-progress' | 'completed';
}
```

```ts
interface ProjectFacts {
  location?: string;
  year?: number;
  projectType?: string;
  size?: string;
  services?: string[];
  architect?: string;
  contractor?: string;
  photographer?: string;
}
```

```ts
interface SpatialBrief {
  name: string;
  email: string;
  projectType: string;
  location?: string;
  timeline?: string;
  budgetBand?: string;
  message: string;
  consent: boolean;
}
```

---

# 20. Variants & States

Interactive components require:

- default
- hover
- focus-visible
- active
- disabled
- loading
- success
- error

Gallery:

- loading
- loaded
- image unavailable
- zoom/open
- keyboard active

Form:

- field error
- submitting
- submitted
- network failure

---

# 21. Responsive Architecture

## Mobile 320–479

- single-column editorial flow
- near-full-width photography
- simplified project metadata
- full-screen menu
- 44px minimum touch targets
- no hover-dependent content
- compact but readable form

## Large Mobile 480–767

- selective 2-column project tiles possible
- maintain large image rhythm
- preserve generous spacing

## Tablet 768–1023

- 2-column project grids
- split copy/media sections where readable
- team can use 2-column grid

## Desktop 1024–1439

- 12-column layout
- mixed project compositions
- sticky contextual elements optional

## Large Desktop 1440+

- cinematic project media
- controlled max widths to avoid text drift
- preserve whitespace rather than endlessly scaling content

Mobile must remain a designed editorial experience, not a collapsed desktop grid.

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Required:

- semantic headings
- keyboard-operable menus and galleries
- visible focus
- adequate contrast
- descriptive project links
- form labels
- inline error messaging
- touch targets >= 44px where practical
- skip navigation
- reduced-motion support
- meaningful alt text
- decorative imagery marked appropriately
- success/error states announced to assistive technology

---

# 23. Content Architecture

Recommended entities:

```text
Project
ProjectCategory
Service
Principle
ProcessStep
TeamMember
JournalArticle
Testimonial
SpatialBrief
ContactDetails
SEOPageData
```

```ts
interface Project {
  title: string;
  slug: string;
  excerpt: string;
  location?: string;
  year?: number;
  category?: string[];
  status?: string;
  hero: Media;
  gallery: Media[];
  facts?: ProjectFacts;
  narrative?: RichText;
  featured?: boolean;
  seo: SEOData;
}
```

```ts
interface JournalArticle {
  title: string;
  slug: string;
  excerpt: string;
  author: TeamMemberRef;
  publishedAt: string;
  readingTime?: number;
  hero: Media;
  body: RichText;
  relatedProjects?: ProjectRef[];
  seo: SEOData;
}
```

---

# 24. SEO / GEO Structure

## Architecture SEO opportunities

- project type + location landing pages
- service pages
- journal topic clusters
- local practice pages where genuinely relevant
- project schema / CreativeWork where appropriate
- Organization schema
- Person schema for team members where useful
- Article schema
- BreadcrumbList

## GEO / AI-search readiness

Each important page should include concise factual summaries such as:

```text
What the studio does
Where it works
Project types
Service scope
Process
Who leads the studio
How to enquire
```

Avoid vague poetic copy as the only machine-readable description.

Never fabricate awards, memberships, planning success rates, project costs, client names or project metrics.

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js or Astro
TypeScript
Tailwind CSS or token-based CSS architecture
Headless CMS
Image CDN
Server-rendered metadata
Progressive enhancement
```

Suggested structure:

```text
src/
├── app/
│   ├── projects/
│   ├── studio/
│   ├── services/
│   ├── journal/
│   └── contact/
├── components/
│   ├── layout/
│   ├── media/
│   ├── portfolio/
│   ├── studio/
│   ├── journal/
│   ├── forms/
│   └── ui/
├── content/
├── lib/
├── styles/
└── types/
```

## Performance priorities

- responsive image srcsets
- AVIF/WebP
- lazy loading below fold
- hero preload only when necessary
- avoid autoplay heavy video by default
- route-level code splitting
- motion library loaded only where needed
- CMS image focal points

---

# 26. Reusability Rules

## Keep stable

- editorial layout logic
- portfolio-first hierarchy
- project gallery architecture
- Studio philosophy/process structure
- journal integration
- spatial brief conversion pattern
- responsive behavior

## Make configurable

- brand
- colors
- fonts
- project categories
- services
- principles
- process stages
- team
- imagery
- contact details
- locations
- project facts

## Never hardcode

- project names
- testimonials
- client details
- team members
- addresses
- phone numbers
- awards
- planning claims
- project metrics
- dates

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  tone: "calm|editorial|technical|luxury"

practice:
  disciplines: []
  locations: []
  principles: []
  process: []

navigation:
  primary: []
  cta: ""

projects:
  featured: []
  filters: []
  show_facts: true

studio:
  manifesto: ""
  team: []
  areas_of_work: []

journal:
  enabled: true
  categories: []

contact:
  email: ""
  phone: ""
  address: ""
  intake_fields: []

seo:
  default_title: ""
  description: ""
  locales: []
```

---

# 28. What Must NOT Be Copied

Do not copy:

- Storey name or wordmark
- exact project photography
- project names
- copywriting
- testimonials
- team identities
- contact details
- exact project descriptions
- proprietary design assets
- unique logos or marks

Reusable:

- editorial pacing
- information hierarchy
- portfolio pattern
- studio/process architecture
- project-gallery logic
- qualification form concept
- journal integration

---

# 29. Improvement Layer

Recommended reusable improvements over a pure visual clone:

1. **Structured project facts** with optional progressive disclosure.
2. **Service landing pages** for discoverability and clearer commercial scope.
3. **Project filters** only after portfolio volume reaches a useful threshold.
4. **Location-aware SEO** for genuine areas of practice.
5. **CMS focal-point control** for architectural photography.
6. **Accessible gallery mode** with keyboard controls and reduced-motion behavior.
7. **Qualified brief form** with configurable project type, location, timeline and optional budget band.
8. **Related project engine** based on location, type and material themes.
9. **Journal-to-project linking** to connect thought leadership with proof.
10. **Performance budget** so image richness never destroys mobile UX.
11. **Privacy-aware lead handling** and explicit consent for submitted project details.
12. **No fake project or testimonial data** in production.

---

# 30. Quality Gates

A build based on this template is not complete until:

- [ ] Home positioning is understandable without relying only on imagery.
- [ ] Projects are real and CMS-driven.
- [ ] Every project image is optimized responsively.
- [ ] Project detail pages are navigable by keyboard.
- [ ] Studio page explains philosophy, process and team clearly.
- [ ] Contact form has labels, validation, success and error states.
- [ ] Mobile experience preserves image rhythm and hierarchy.
- [ ] No project, award, testimonial or business claim is fabricated.
- [ ] Journal content has valid authorship and publication metadata.
- [ ] SEO metadata is route-specific.
- [ ] Organization and article schemas use real data only.
- [ ] Reduced-motion preferences are respected.
- [ ] Core pages meet WCAG 2.2 AA where applicable.
- [ ] Image-heavy routes pass a defined performance budget.
- [ ] Contact submissions are protected from spam and abuse.

---

# 31. Master Build Prompt

```text
Build a premium architecture-studio website inspired by the reusable structural and interaction principles documented in the Storey Architecture template, but do not copy Storey's branding, copywriting, project photography, project names, team identities, testimonials, contact data or proprietary assets.

OBJECTIVE
Create a calm, editorial, image-led website for a contemporary architecture or spatial-design practice. The site must communicate design quality first, then establish trust through philosophy, process, team and thought leadership, and finally convert qualified visitors through a structured project brief.

CORE EXPERIENCE
The experience should feel architectural rather than SaaS-like. Avoid generic rounded cards, excessive gradients, oversized sales widgets or aggressive CTA repetition. Use whitespace, photography, proportion, typography and subtle motion as the primary visual language.

PRIMARY USER JOURNEY
Atmosphere → Positioning → Project Proof → Philosophy → Process → Team Trust → Qualified Enquiry.

REQUIRED ROUTES
1. Home
2. Projects index
3. Project detail
4. Studio
5. Services or Areas of Work
6. Journal index
7. Journal article
8. Contact / Spatial Brief
9. Legal pages

HOME STRUCTURE
- restrained header
- immersive hero photography
- concise positioning statement
- project CTA
- philosophy intro
- areas of expertise
- selected projects
- studio teaser
- testimonial/trust section only when verified data exists
- journal teaser
- spatial brief CTA
- structured enquiry form
- editorial footer

PROJECT INDEX
Create a visual portfolio with project title and lightweight metadata. Add filters only if there are enough real projects to justify them. Project imagery should dominate the page.

PROJECT DETAIL
Use concise project framing followed by a strong photography sequence. Support optional facts including location, year, project type, size, status, services, contractor and photographer. Never invent missing facts. Add related projects and a subtle enquiry CTA.

STUDIO PAGE
Include:
- studio positioning
- manifesto/philosophy
- core principles
- design process
- team
- areas of work
- journal preview
- project enquiry CTA

SERVICES
Support configurable disciplines such as:
- Residential Architecture
- Renovations & Extensions
- Interior Architecture
- Landscape Integration
Do not assume these exact services for every implementation.

JOURNAL
Build an editorial knowledge layer with author, date, reading time, rich text, project imagery, related articles and related projects. Use article content to strengthen topical authority and GEO/AI-search clarity.

SPATIAL BRIEF
Build a qualified enquiry form with configurable fields:
- name
- email
- project type
- location
- timeline
- optional budget band
- project description
- privacy consent
Provide accessible labels, validation, loading, success and failure states.

DESIGN SYSTEM
Use warm neutral surfaces, dark neutral typography and extremely restrained accent color. Use near-square geometry and almost no card shadows. Typography should be refined and editorial with generous line height and carefully controlled measure.

LAYOUT
Desktop: 12-column editorial grid with full-bleed project media.
Tablet: 8-column responsive layout.
Mobile: 4-column designed composition, not a compressed desktop layout.
Maintain generous section spacing and preserve photography impact on small screens.

MOTION
Use subtle fades, reveals, crossfades and image transitions. Motion should feel slow, controlled and architectural. Respect prefers-reduced-motion. No interaction may block content access.

MEDIA
Implement responsive images, focal points, AVIF/WebP, lazy loading and proper alt-text strategy. Never distort architectural photography. Heavy media must not compromise mobile performance.

CONTENT MODEL
All projects, team members, services, principles, journal articles, contact details and testimonials must be data-driven. No fake project facts, awards, client logos, testimonials or business metrics.

SEO / GEO
Provide server-rendered metadata, semantic headings, Organization schema, Article schema and BreadcrumbList where appropriate. Add concise factual descriptions of services, locations, process and project types so the site is understandable by search engines and AI systems without relying solely on poetic copy.

ACCESSIBILITY
Target WCAG 2.2 AA. Provide keyboard navigation, visible focus states, semantic landmarks, labelled forms, alt text, reduced motion, sufficient contrast and accessible galleries.

TECHNICAL DIRECTION
Prefer Next.js or Astro with TypeScript, a reusable token layer, component-driven architecture, a headless CMS, responsive image pipeline, route-level code splitting and progressive enhancement.

FINAL QUALITY BAR
The result should feel like a real architecture practice's digital publication and portfolio—not a generic agency template. Every visual and interaction decision should reinforce calmness, material sensitivity, proportion, longevity and qualified trust.
```
