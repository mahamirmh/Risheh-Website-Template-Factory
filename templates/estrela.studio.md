# Estrela Studio — Reusable Website Template Specification

> Source: https://estrela.studio/
> Analysis date: 2026-08-22
> Template family: Premium Creative Agency / Digital Product & Brand Studio
> Status: ready

---

## 0. Template Metadata

```yaml
template:
  source_name: "Estrela Studio"
  source_url: "https://estrela.studio/"
  analyzed_at: "2026-08-22"
  category: "Creative Agency"
  subcategory: "Branding + Product Design + Digital Studio"
  complexity: "high"
  visual_style:
    - editorial
    - cinematic
    - dark
    - typographic
    - motion-led
    - premium
    - minimal
    - experimental
  suitable_for:
    - digital agencies
    - branding studios
    - product design studios
    - UX/UI agencies
    - creative consultancies
    - premium software studios
    - architecture/design practices
    - boutique innovation teams
  status: "ready"
```

---

# 1. Reference Snapshot

### Observed

Estrela Studio positions itself as a people-first digital studio. The live site exposes four primary navigation routes: Home, Work, About, and Services, plus a strong Contact CTA, Showreel, newsletter signup, phone, and studio time indicator.

Homepage content sequence observed:

1. Hero / brand statement
2. Showreel trigger
3. Studio introduction
4. Featured Work
5. Who We Are
6. What We Do
7. Testimonials
8. FAQ
9. Final contact CTA / footer

Primary services observed:

- Product strategy and design
- App and website design
- Brand strategy and identity design

Additional offer categories:

- Product strategy
- UX design
- UI design
- Design systems
- Branding design
- Motion design

Work page includes filtering by:

- All
- Design Strategy
- Brand Design
- UI Design
- UX Design

and supports Grid/List presentation.

### Inferred

The site deliberately combines three conversion layers:

1. **Emotional credibility** — bold visual identity, motion, showreel, personality.
2. **Professional credibility** — service clarity, work taxonomy, testimonials.
3. **Low-friction conversion** — persistent Contact, phone, newsletter, final CTA.

### Recommended abstraction

Preserve the interaction model and narrative pacing, but never copy Estrela's exact brand identity, copy, artwork, 3D objects, project names, testimonials, client logos, phone number, or visual trademarks.

---

# 2. Template Identity

```text
Template Type: Premium Creative Agency + Portfolio + Services Website
Design Direction: Editorial / Immersive / Minimal / Motion-led
Primary Goal: Convert high-intent visitors into project inquiries
Secondary Goal: Demonstrate design maturity through work and process
Content Density: Medium
Interaction Density: High
Trust Density: High
Visual Personality: Bold but restrained
```

Best fit:

- Product design studios
- Branding agencies
- Creative technology studios
- UX/UI consultancies
- Premium software agencies
- Digital transformation boutiques

---

# 3. Design DNA

### Visual personality

- Dark-first presentation
- High contrast
- Large display typography
- Editorial serif/sans pairing
- Strong full-bleed media
- Minimal card chrome
- Purposeful whitespace
- Numeric sequencing
- Cinematic transitions
- Portfolio-first storytelling
- Strong alternation between dense and quiet sections

### Visual Keywords

```text
Cinematic, editorial, tactile, elegant, confident, expressive, minimal, human, premium, kinetic
```

### Observed palette

Awwwards documents a two-color core palette:

```text
#FBFBF4 — warm off-white
#020202 — near-black
```

Recommended reusable palette model:

```css
--color-bg: #020202;
--color-surface: #0b0b0b;
--color-text: #fbfbf4;
--color-text-muted: rgba(251,251,244,.62);
--color-border: rgba(251,251,244,.14);
--color-accent: var(--brand-accent);
```

Do not hardcode Estrela's project-specific pink/purple 3D art as a brand token.

---

# 4. Information Architecture

```text
/
├── /work
│   └── /work/[project]
├── /about
├── /services
├── /contact        # can be modal or page
├── /privacy-policy
└── newsletter modal
```

### Route responsibilities

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Brand positioning + proof + services | Contact | marketing | P0 |
| `/work` | Portfolio discovery | View project | portfolio | P0 |
| `/work/[project]` | Case study storytelling | Start project | case study | P0 |
| `/about` | Human trust + values + team | Contact | editorial | P1 |
| `/services` | Capability clarity | Contact | service | P0 |
| `/contact` | Lead capture | Submit inquiry | form | P0 |

---

# 5. Global Layout Architecture

```text
AppShell
├── Loader / transition layer
├── Header
│   ├── Brand wordmark
│   ├── Work
│   ├── About
│   ├── Services
│   ├── Contact CTA
│   └── optional utility menu
├── Main
│   ├── Page-level intro
│   ├── Editorial sections
│   └── Motion/media layers
├── Contact overlay
├── Newsletter overlay
├── Showreel overlay
└── Footer
```

### Global rules

- Header is compact, high-contrast, and visually unobtrusive.
- Full-bleed sections should coexist with contained text blocks.
- Content max-width should remain generous enough for editorial typography.
- Major sections should use large vertical rhythm rather than heavy separators.
- Use z-index deliberately for overlays, menus, video, and animated media.

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header
02 Immersive Hero
03 Scroll Cue
04 Showreel Trigger
05 Studio Intro / Value Proposition
06 Featured Work Intro
07 Featured Work Gallery
08 About / Who We Are
09 Services Overview
10 Testimonials
11 FAQ
12 Final Conversion CTA
13 Footer
```

### Hero

Objective: establish brand memorability before explaining services.

Anatomy:

```text
Hero
├── H1 / brand statement
├── central visual or interactive object
├── optional split phrase / side typography
├── showreel action
├── scroll instruction
└── ambient motion
```

Recommended behavior:

- Desktop: oversized visual and typography with controlled negative space.
- Mobile: simplify 3D/motion, preserve concept and typography hierarchy.
- Never allow visual effects to obscure navigation or CTA.

## Work Page

```text
01 Header
02 Page Title — All Work
03 Category Filter
04 Grid/List Toggle
05 Portfolio Index
06 Project Cards
07 Conversion CTA
08 Footer
```

Observed category system:

```text
All
Design Strategy
Brand Design
UI Design
UX Design
```

Reusable taxonomy must come from project data, not hardcoded UI.

## Project Detail

Recommended reusable structure:

```text
01 Project Hero
02 Client / Project Metadata
03 Challenge / Context
04 Strategy
05 Visual Direction
06 UX / IA
07 UI System
08 Brand / Design System
09 Full-bleed Media Sequence
10 Outcome / Results
11 Credits
12 Next Project
13 Contact CTA
```

The template should support highly visual case studies even when the original project does not expose every narrative field.

## About

Observed sequence:

```text
01 Hero statement
02 Studio imagery
03 Small but Mighty
04 Mission
05 Values 01–04
06 Team
07 Testimonials
08 Footer / Contact
```

Reusable rule: About is not a corporate biography page. It should communicate character, working philosophy, cultural signals, and team credibility.

## Services

Observed sequence:

```text
01 Page Hero
02 Signature Philosophy
03 3 Core Service Pillars
04 Detailed Offer List
05 Featured Work
06 Client / Partner Proof
07 Contact CTA
08 Footer
```

Core capability hierarchy:

```text
Strategy
Design
Brand
Motion
```

---

# 7. Section Anatomy

## Featured Work

```text
FeaturedWork
├── section index / eyebrow
├── H2
├── intro copy
├── project list
│   ├── project number
│   ├── client/project title
│   ├── project subtitle
│   ├── capability tags
│   └── media preview
└── All Work CTA
```

## Service Row

```text
ServiceRow
├── index
├── title
├── description
├── optional visual interaction
└── optional detail link
```

## Testimonial

```text
Testimonial
├── quote
├── person
├── role/company
└── optional carousel/index state
```

## FAQ

```text
FAQItem
├── question
├── expand control
└── answer
```

Use semantic buttons and accessible accordion states.

---

# 8. UX & Conversion Architecture

Core funnel:

```text
Visual Intrigue
      ↓
Studio Positioning
      ↓
Work Proof
      ↓
Human / Cultural Trust
      ↓
Service Clarity
      ↓
Client Validation
      ↓
Objection Handling (FAQ)
      ↓
Project Inquiry
```

### Why this works

The site does not start with a generic service list. It first creates desire and distinctiveness, then earns legitimacy through work, then explains capability.

### Conversion recommendations

For reusable implementation:

- Keep Contact visible in global navigation.
- Repeat conversion CTA after portfolio and near the end.
- Add optional project-fit form.
- Allow direct email/phone fallback.
- Track `contact_open`, `contact_submit`, `showreel_play`, `project_open`, and `service_view`.

---

# 9. Navigation Architecture

Desktop:

```text
Logo | Work | About | Services | Contact | Utility
```

Mobile:

```text
Logo | Menu
        ↓
Full-screen panel
├── Work
├── About
├── Services
├── Contact
├── Phone/email
└── newsletter
```

Navigation should feel part of the art direction, but must remain readable and keyboard accessible.

---

# 10. Design Tokens

Values below are reusable recommendations, not claims of exact source CSS.

```css
:root {
  --container: 1440px;
  --content: 1180px;
  --text-measure: 760px;

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

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  --border-subtle: 1px solid rgba(251,251,244,.14);

  --motion-fast: 160ms;
  --motion-base: 240ms;
  --motion-reveal: 600ms;
}
```

---

# 11. Typography System

External design references identify Migra and PP Neue Montreal in use.

Reusable equivalent pattern:

```text
Display / Editorial: expressive serif
UI / Body: neutral grotesk sans-serif
```

### Recommended scale

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | clamp(64,8vw,140) | 48–64 | 400 | .92–1.0 | hero |
| H1 | 72–104 | 44–56 | 400 | .95 | page title |
| H2 | 48–72 | 34–44 | 400 | 1.0 | section |
| H3 | 30–42 | 26–32 | 400–500 | 1.1 | cards/services |
| Body-lg | 22–28 | 19–22 | 400 | 1.45 | intros |
| Body | 16–18 | 16 | 400 | 1.55 | copy |
| Small | 12–14 | 12–14 | 450 | 1.4 | metadata |

Rules:

- Avoid excessive bold weights.
- Use serif selectively for emotional/editorial emphasis.
- Preserve large line-height contrast between display and body.
- For RTL, select a Persian type pairing with comparable editorial personality rather than mechanically mirroring Latin fonts.

---

# 12. Color System

Recommended template structure:

```text
Neutral core: 85%
Brand accent/media color: 10%
Semantic UI: 5%
```

Base colors:

```text
Background: near-black
Text: warm off-white
Muted text: translucent off-white
Borders: very subtle
Media: full-spectrum project-specific color
```

Key principle: the UI remains neutral so project artwork supplies the color.

---

# 13. Grid & Spacing System

Desktop:

- 12-column grid
- 24–32px gutters
- 32–56px page edge padding
- 96–160px section spacing

Tablet:

- 8 columns
- 24px gutter
- 32px edge padding

Mobile:

- 4 columns
- 16–20px gutter
- 16–24px edge padding
- 64–96px section spacing

Media sections may break the container intentionally.

---

# 14. Radius, Border & Shadow

Design principle: avoid generic SaaS card styling.

- Radius: minimal to small
- Borders: fine, subtle
- Shadows: rare
- Depth comes from scale, motion, overlap, media, and contrast rather than elevation
- Focus rings must be clearly visible even if the visual language is minimal

---

# 15. Iconography

- Minimal outline icons
- Thin-to-medium stroke
- Small utility icons
- Prefer text labels where possible
- Arrow/cross/plus controls may be used for menus and accordion states

Recommended libraries:

- Lucide
- Phosphor
- custom SVG for brand-specific marks

---

# 16. Imagery Direction

Core media system:

- Full-bleed case-study imagery
- Product/UI mockups
- Brand assets
- motion clips
- video showreel
- 3D hero object or abstract motion visual
- editorial team photography

Rules:

- Project art must dominate project cards.
- Avoid stock photography.
- Use responsive art direction for mobile.
- Provide poster frames for all video.
- Use WebP/AVIF and adaptive image sizes.

---

# 17. Motion & Interaction

Awwwards identifies the site with Parallax, 3D, Interaction Design and GSAP.

Reusable motion language:

```text
Micro hover: 120–180ms
UI transition: 180–260ms
Section reveal: 400–700ms
Page transition: 500–900ms
Hero ambient motion: continuous but subtle
```

Patterns:

- project hover preview
- image reveal
- parallax
- scroll-driven typography
- page transitions
- showreel overlay
- modal transitions
- accordion open/close
- grid/list switching
- cursor-aware interactions when appropriate

Must support `prefers-reduced-motion`.

---

# 18. Component Inventory

### Layout

- Header
- Footer
- Container
- FullBleedSection
- EditorialSection
- OverlayShell

### Navigation

- MainNav
- MobileMenu
- ContactTrigger
- ProjectFilter
- GridListToggle

### Marketing

- ImmersiveHero
- StudioIntro
- FeaturedWork
- ServicesOverview
- TestimonialRail
- FAQ
- FinalCTA

### Portfolio

- ProjectCard
- ProjectListRow
- ProjectMedia
- ProjectMeta
- CapabilityTag
- ProjectPagination

### About

- ValuesGrid
- TeamMember
- StudioGallery

### Utility

- ShowreelModal
- ContactModal
- NewsletterModal
- Accordion
- Button
- LinkArrow

---

# 19. Component Anatomy

```ts
interface ProjectCardProps {
  index?: string;
  title: string;
  subtitle?: string;
  slug: string;
  capabilities: string[];
  cover: MediaAsset;
  hoverMedia?: MediaAsset;
  variant?: 'grid' | 'list' | 'featured';
}

interface ServiceProps {
  index: string;
  title: string;
  description: string;
  capabilities?: string[];
  media?: MediaAsset;
}

interface TestimonialProps {
  quote: string;
  person: string;
  role?: string;
  company?: string;
}
```

---

# 20. Variants & States

All interactive components require:

- default
- hover
- focus-visible
- active
- disabled
- loading where relevant

Project filters require:

- active category
- inactive category
- no-results state

Contact/newsletter forms require:

- idle
- submitting
- success
- validation error
- server error

---

# 21. Responsive Architecture

## 320–479

- Collapse navigation to menu trigger.
- Replace heavy 3D hero with optimized mobile scene/video/image.
- Stack project metadata vertically.
- Disable cursor-dependent interactions.
- Preserve strong typography but prevent viewport clipping.
- Minimum touch target 44×44px.

## 480–767

- 1-column editorial layout.
- Grid cards may remain single-column or alternating full-width.

## 768–1023

- 2-column project grid possible.
- Preserve large media.
- Reduce parallax amplitude.

## 1024–1439

- Full desktop interaction system.
- 2–3 column work grid depending on composition.

## 1440+

- Do not endlessly expand text width.
- Increase whitespace instead.
- Maintain max container.

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Requirements:

- semantic heading hierarchy
- skip navigation
- keyboard-accessible menu and overlays
- visible focus state
- dialog focus trap
- ESC to close modal
- accessible accordion semantics
- descriptive media alt text
- captions/transcripts for meaningful video
- reduced-motion fallback
- sufficient text contrast
- no critical information conveyed only through hover
- form labels and error association

---

# 23. Content Architecture

```ts
interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  client?: string;
  capabilities: string[];
  year?: number;
  cover: MediaAsset;
  hero?: MediaAsset;
  challenge?: RichText;
  strategy?: RichText;
  outcome?: RichText;
  sections: ProjectSection[];
  credits?: Credit[];
  featured?: boolean;
}

interface Service {
  slug: string;
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
}

interface TeamMember {
  name: string;
  role: string;
  image?: MediaAsset;
  bio?: RichText;
}

interface FAQ {
  question: string;
  answer: RichText;
}
```

Recommended CMS: Prismic, Sanity, Contentful, Directus, or headless WordPress.

---

# 24. SEO / GEO Structure

Recommended:

- clean project slugs
- unique title/H1 per project
- Project/CreativeWork schema where appropriate
- Organization schema
- Person schema for leadership/team pages when useful
- BreadcrumbList on nested work pages
- strong internal links from services ↔ projects
- service summaries written answer-first for AI search
- factual About/Services copy
- no fabricated awards, clients, years, statistics, or testimonials

---

# 25. Technical Frontend Architecture

The source is publicly identified by Awwwards as using Astro, GSAP and Prismic.

Reusable recommended stack:

```text
Next.js or Astro
TypeScript
Tailwind CSS or tokenized CSS
GSAP only where motion needs timeline control
React Three Fiber / Three.js only if 3D is justified
Headless CMS
Image optimization CDN
Analytics
```

Suggested project structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── portfolio/
│   ├── sections/
│   ├── overlays/
│   └── ui/
├── content/
├── lib/
│   ├── animation/
│   ├── cms/
│   └── analytics/
├── styles/
├── types/
└── config/
```

Performance rules:

- 3D is enhancement, not dependency.
- Lazy load case-study media.
- Never preload every project video.
- Keep LCP hero optimized.
- Animate transform/opacity where possible.
- Avoid blocking JavaScript for decorative motion.

---

# 26. Reusability Rules

### Keep

- narrative sequence
- neutral shell + colorful project media
- project taxonomy
- portfolio-first conversion model
- mixed serif/sans hierarchy
- numerical sequencing
- large editorial rhythm
- immersive motion philosophy
- grid/list portfolio pattern

### Customize

- brand name
- logo
- color accent
- fonts
- hero visual
- services
- portfolio
- team
- testimonials
- FAQs
- contact data
- motion intensity

### Never hardcode

- Estrela name/logo
- Estrela's 3D artwork
- client names/logos
- testimonials
- phone number
- Cape Town/Vienna identity
- source project screenshots
- source copy

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  positioning: ""
  primary_color: ""
  accent_color: ""
  display_font: ""
  body_font: ""

hero:
  headline: ""
  subheadline: ""
  media_type: "3d|video|image|kinetic-type"
  media: ""
  showreel_enabled: true

navigation:
  work: true
  about: true
  services: true
  contact: true

portfolio:
  filters: []
  enable_grid_list_toggle: true
  featured_projects: []

services:
  primary: []
  capabilities: []

about:
  intro: ""
  mission: ""
  values: []
  team: []

social_proof:
  testimonials: []
  clients: []

contact:
  email: ""
  phone: ""
  inquiry_form: true
  newsletter: false

feature_flags:
  showreel: true
  three_d_hero: false
  smooth_scroll: true
  page_transitions: true
  cursor_effects: false
```

---

# 28. What Must NOT Be Copied

Do not copy:

- exact Estrela logo or wordmark
- branded 3D hero sculpture
- exact homepage copy
- specific project layouts with source imagery
- client testimonials
- staff names/photos
- exact font files without proper licensing
- source code
- proprietary motion assets

The goal is to reproduce the **design logic**, not impersonate the studio.

---

# 29. Improvement Layer

For a production-grade reusable version, improve the reference pattern with:

1. Optional dedicated Contact page in addition to overlay.
2. Structured project outcomes and business results.
3. Service-to-case-study relational links.
4. CMS-driven filters.
5. Search for large portfolios.
6. Accessible reduced-motion version.
7. Robust analytics events.
8. Better fallback when WebGL is unavailable.
9. Explicit consent for autoplay video/audio.
10. Dedicated SEO text blocks that do not compromise visual minimalism.
11. Stronger mobile portfolio navigation.
12. Reusable case-study section builder.

---

# 30. Quality Gates

Before shipping a site from this template:

### Visual

- [ ] Hero feels distinctive without copying source artwork.
- [ ] Typography hierarchy is editorial, not generic SaaS.
- [ ] Portfolio media drives the color system.
- [ ] Spacing feels intentional and premium.

### UX

- [ ] User can understand services within two scroll sections.
- [ ] Work can be filtered/discovered quickly.
- [ ] Contact is reachable from every major page.
- [ ] Mobile does not depend on hover.

### Technical

- [ ] LCP optimized.
- [ ] No unbounded media downloads.
- [ ] Reduced-motion supported.
- [ ] Modal focus management works.
- [ ] Core experience works without WebGL.

### Content

- [ ] No fake testimonials.
- [ ] No fake client logos.
- [ ] No unverified metrics.
- [ ] Case studies have meaningful context and outcomes.

---

# 31. Master Build Prompt

```text
You are a senior product designer, creative director, frontend architect, and motion engineer.

Build a production-ready premium creative-agency website inspired by the interaction principles, editorial pacing, portfolio architecture, and high-end visual hierarchy documented in the Estrela-style template specification.

IMPORTANT:
- Do not clone Estrela Studio.
- Do not copy its logo, branded 3D artwork, written copy, client testimonials, staff identities, project screenshots, or proprietary media.
- Recreate the underlying UX and visual principles with an original brand system.

PRODUCT GOAL
Create a visually distinctive but commercially effective website for a premium digital/product/branding studio. The website must communicate creative excellence, prove capability through work, explain services clearly, and convert qualified visitors into project inquiries.

INFORMATION ARCHITECTURE
Implement:
- Home
- Work
- Project Detail
- About
- Services
- Contact
- Privacy

GLOBAL EXPERIENCE
Use:
- compact premium navigation
- persistent Contact action
- dark neutral visual shell
- warm off-white text
- optional configurable brand accent
- expressive editorial serif + neutral grotesk sans pairing
- large typography
- full-bleed project media
- intentional negative space
- subtle numerical indexing
- premium transitions

HOMEPAGE ORDER
1. Immersive Hero
2. Scroll cue
3. Optional Showreel
4. Studio positioning
5. Featured Work
6. About / Philosophy
7. Services
8. Testimonials
9. FAQ
10. Final project inquiry CTA
11. Footer

WORK EXPERIENCE
Create CMS-driven portfolio filtering by capability.
Support Grid and List variants.
Project cards must contain:
- optional index
- title
- subtitle
- capability tags
- cover media
- hover/preview media where supported

PROJECT DETAIL
Create modular case-study pages with configurable sections:
- Hero
- Context
- Challenge
- Strategy
- UX / IA
- UI
- Brand / Design System
- Media gallery
- Results
- Credits
- Next project
- Contact CTA

SERVICES
Support primary service pillars and detailed capability lists.
Service data must be separate from UI components.
Link services to relevant projects.

ABOUT
Treat the About page as a human trust-building experience rather than generic corporate copy.
Include:
- studio philosophy
- mission
- values
- team
- optional photography
- testimonials

MOTION
Use motion to reinforce hierarchy, not decorate every element.
Support:
- hero ambient motion
- image reveals
- subtle parallax
- project hover previews
- accordion motion
- overlay transitions
- page transitions

Respect prefers-reduced-motion.
The entire site must remain usable without advanced animation or WebGL.

TECH STACK
Preferred implementation:
- Next.js or Astro
- TypeScript
- Tailwind CSS or tokenized CSS architecture
- GSAP only where timeline precision is needed
- optional Three.js / React Three Fiber for a truly justified hero visual
- headless CMS-ready data model

ARCHITECTURE
Separate:
- content/data
- components
- design tokens
- motion logic
- CMS logic
- analytics

ACCESSIBILITY
Target WCAG 2.2 AA.
Implement:
- semantic headings
- keyboard navigation
- focus-visible states
- accessible dialogs
- skip navigation
- reduced-motion mode
- alt text
- form labels/errors
- non-hover mobile equivalents

PERFORMANCE
- Optimize LCP.
- Use responsive AVIF/WebP.
- Lazy-load non-critical video/media.
- Never load every portfolio video on first render.
- Keep decorative 3D optional.
- Avoid layout shift.

RESPONSIVE
Mobile must be intentionally redesigned, not merely scaled down.
Simplify expensive effects on small screens while preserving the visual concept.

CONTENT SAFETY
Never fabricate:
- client logos
- testimonials
- awards
- metrics
- addresses
- phone numbers
- case-study results

If data is missing, create neutral editable placeholders clearly marked as content configuration, not factual claims.

FINAL STANDARD
The finished website should feel:
- original
- premium
- editorial
- modern
- human
- motion-aware
- portfolio-first
- highly responsive
- technically clean
- conversion-capable

The result should capture the sophistication and pacing of an award-level studio website while remaining maintainable, accessible, fast, and fully reusable for a different brand.
```

---

## Template Essence

```text
Distinctive Visual Identity
          ↓
Emotional Curiosity
          ↓
Portfolio Proof
          ↓
Human Trust
          ↓
Service Clarity
          ↓
Client Validation
          ↓
Objection Handling
          ↓
Project Inquiry
```

The most reusable lesson from this reference is not the 3D hero. It is the combination of **visual confidence + restrained information architecture + portfolio proof + human credibility + clear conversion**.