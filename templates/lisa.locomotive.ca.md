# Locomotive / LISA — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "Locomotive"
  source_url: "https://lisa.locomotive.ca/en"
  analyzed_at: "2026-08-23"
  category: "Experimental Digital Agency"
  subcategory: "Immersive Editorial Portfolio / Creative Technology Studio"
  complexity: "enterprise"
  visual_style:
    - editorial
    - experimental
    - typography-led
    - motion-heavy
    - monochrome
    - image-led
    - interaction-first
    - creative-technology
  suitable_for:
    - digital agencies
    - creative technology studios
    - web experience studios
    - branding agencies
    - product design studios
    - motion studios
    - creative development teams
    - high-end portfolio websites
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Brand: Locomotive®.
- Positioning: Digital-First Design Agency.
- Location statement: Montréal, Canada.
- Primary visible navigation: Work, Agency, Careers, Store, Let's talk.
- Language switch: English / French.
- Home entry copy progressively resolves from `Digital` to `Digital-First Design Agency` and from `Based` to `Based in Montreal, Canada`, establishing motion as part of the message itself.
- The site functions as both company website and demonstration of the studio's digital craft.
- Work presentation is visual-first and portfolio-oriented.
- Agency content emphasizes the intersection of design thinking and technical know-how.
- Careers and Store are treated as first-class brand destinations rather than footer-only utility links.
- Conversion CTA is conversational: `Let's talk`.

## Inferred

- The website intentionally treats the interface itself as a case study.
- Motion, typography and coded interaction are not decorative layers; they embody the firm's positioning around design + code.
- The site prioritizes memorability and creative reputation over conventional B2B information density.
- The portfolio experience is meant to create desire before delivering detailed service explanations.

## Recommended for reusable template

- Preserve the design/code duality and editorial confidence.
- Make all advanced motion optional and progressively enhanced.
- Keep the base information architecture understandable without animation.
- Never copy Locomotive's exact logo, proprietary graphics, project imagery, client work, copy, 3D characters or branded terminology.

---

# 2. Template Identity

```text
Template Type: Experimental Digital Agency + Immersive Portfolio
Design Direction: Editorial / High-Craft / Motion-led / Creative Technology
Primary Goal: Build desire and credibility, then convert to inquiry
Secondary Goal: Demonstrate technical and creative capability through the website itself
Content Density: Medium
Interaction Density: Very High
Trust Density: Medium-High
Visual Memorability: Very High
```

Best for firms where the website must prove capability through execution rather than only through claims.

Reusable industries:

- digital design agency
- creative development studio
- brand + web agency
- experiential studio
- creative technology consultancy
- digital product studio
- motion + interactive studio
- architecture / fashion / culture studios with strong digital craft

---

# 3. Design DNA

## Overall visual personality

- confident
- experimental
- editorial
- sharp
- playful
- coded
- culturally aware
- high-craft
- anti-template
- deliberately unconventional

## Visual Keywords

```text
Editorial, kinetic, expressive, technical, cinematic, monochrome,
playful, precise, high-craft, experimental, human, Montréal
```

## Density

Medium. Individual sections often have a small amount of copy but a large visual or typographic footprint.

## Contrast

High. Strong black/white contrast is the safest reusable default, with campaign imagery and project media providing color.

## White-space strategy

Large macro whitespace, especially around manifesto statements and project showcases. Dense grids may appear in work views, but major narrative blocks remain spacious.

## Content rhythm

```text
Large Statement
↓
Visual Disruption
↓
Portfolio Proof
↓
Human / Studio Context
↓
Another Visual Event
↓
Inquiry
```

## Border usage

Thin editorial rules and hard-edged frames. Borders structure information rather than create card-like softness.

## Card usage

Avoid generic rounded marketing cards. Prefer:

- full-bleed media
- project tiles
- framed image windows
- rows
- editorial columns
- split panels

## Motion character

Motion should feel authored and choreographed. Common qualities:

- sequential text reveals
- scroll-linked transformations
- image parallax
- typography scaling
- staggered project transitions
- direction-aware hover movement
- mask reveals
- canvas / WebGL sequences

---

# 4. Information Architecture

Observed top-level structure:

```text
/
├── /work
├── /agency
├── /careers
├── /contact
├── external /store
└── /fr (language alternative)
```

Recommended reusable architecture:

```text
/
├── /work
│   └── /work/[project]
├── /agency
├── /services
├── /careers
├── /journal            # optional
├── /contact
├── /privacy
├── /terms
└── /[locale]
```

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Positioning + selected work | Let's talk | Marketing / portfolio | P0 |
| `/work` | Browse complete portfolio | View project | Portfolio index | P0 |
| `/work/[slug]` | Deep case study | Start project | Case study | P0 |
| `/agency` | Explain philosophy/team/capabilities | Let's talk | Company | P1 |
| `/services` | Clarify commercial offering | Start conversation | Services | P1 |
| `/careers` | Employer brand + openings | Apply | Recruitment | P1 |
| `/contact` | Project inquiry | Submit inquiry | Lead capture | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Minimal Header
│   ├── Brand / Wordmark
│   ├── Work
│   ├── Agency
│   ├── Careers
│   ├── Store (optional)
│   ├── Let's Talk
│   └── Menu Trigger
├── Motion / Transition Layer
├── Main
│   ├── Editorial Sections
│   ├── Work Modules
│   ├── Full-bleed Media
│   └── Interactive Canvases
└── Footer
    ├── Contact
    ├── Location
    ├── Social
    ├── Legal
    └── Locale
```

## Layout principles

- Allow full-bleed visual interruptions.
- Keep a strong 12-column editorial grid under expressive compositions.
- Header can alternate between transparent and solid states depending on contrast.
- Page transitions may use a fixed overlay, but all content must remain URL-addressable and SSR-readable.

## Recommended widths

```text
--page-max: 1600px
--content-max: 1440px
--editorial-max: 1120px
--text-max: 760px
--narrow-copy: 620px
```

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Minimal Header
02 Progressive Identity Hero
03 Selected Work / Featured Projects
04 Agency Manifesto
05 Design + Code Positioning
06 Interactive / Human Visual
07 Additional Work / Reputation Proof
08 Capabilities / Services Preview
09 Careers / Culture Teaser
10 Let's Talk CTA
11 Footer
```

### Hero

Objective: communicate identity before explanation.

Pattern:

```text
Short word / fragment
↓
Progressive phrase completion
↓
Location / studio context
↓
Visual or motion reveal
```

### Selected Work

Use very little descriptive copy. Let media, project title, sector and role carry the first impression.

### Agency Manifesto

Large editorial statement describing the studio's belief system rather than a list of services.

### Interactive Human Layer

A canvas, moving portrait, generative object or other interactive element can humanize a highly technical site.

---

## Work Index

```text
01 Work Header
02 Optional Category / Discipline Filter
03 Project Count
04 Grid / List Toggle
05 Project Matrix
06 Hover Preview Layer
07 Final Inquiry CTA
```

Desktop can support dense multi-column grids. Mobile should simplify to one or two columns and remove cursor-dependent interactions.

---

## Project Detail

Recommended reusable structure:

```text
01 Project Identity
02 Hero Media
03 Client / Year / Discipline / Deliverables
04 Project Context
05 Strategy / Creative Idea
06 Visual System
07 Interaction / Technical Execution
08 Full-bleed Media Sequence
09 Outcome / Results (only if real)
10 Credits
11 Next Project
12 Let's Talk CTA
```

The visual sequence should feel editorial rather than like a generic CMS article.

---

## Agency

```text
01 Agency Hero
02 Manifesto
03 Design + Technology Principle
04 Team / People
05 Capabilities
06 Selected Clients / Awards (real only)
07 Culture / Montréal Context
08 Careers Link
09 Let's Talk CTA
```

---

## Careers

```text
01 Employer Brand Statement
02 Culture / Working Principles
03 Team Media
04 Open Roles
05 Role Detail Links
06 Application CTA
07 Equal Opportunity / Policy
```

---

## Contact

```text
01 Large Human CTA
02 Project Inquiry Form
03 Budget / Timeline / Service Fit
04 Contact Details
05 Social / Location
06 Response Expectation
```

Avoid a cold enterprise form. The page should feel like the beginning of a conversation.

---

# 7. Section Anatomy

## Progressive Hero

```text
Hero
├── Stage Label / optional eyebrow
├── Animated Identity Phrase
├── Location Phrase
├── Background / Media Canvas
├── Scroll Cue
└── Primary Action (optional)
```

Important: identity must be understandable even if motion is disabled.

## Project Tile

```text
ProjectTile
├── Media
│   ├── image
│   └── optional hover video
├── Project Title
├── Client / Sector
├── Discipline Tags
└── Link
```

## Manifesto Block

```text
Manifesto
├── Small Label
├── Oversized Statement
├── Supporting Paragraph
└── Optional Visual / Interactive Object
```

## Inquiry CTA

```text
InquiryCTA
├── Short Provocation
├── Large Let's Talk Action
├── Email fallback
└── Optional location / availability
```

---

# 8. UX & Conversion Architecture

Primary journey:

```text
Visual Curiosity
      ↓
Studio Identity
      ↓
Work Proof
      ↓
Design + Technical Credibility
      ↓
Human / Culture Trust
      ↓
Project Fit
      ↓
Let's Talk
```

Secondary journey:

```text
Direct Work Visitor
      ↓
Project Grid
      ↓
Case Study
      ↓
Related Project
      ↓
Inquiry
```

## Conversion principles

- Do not interrupt the immersive experience with repetitive SaaS-style CTAs.
- Use fewer, stronger calls to action.
- Place inquiry CTA after meaningful proof.
- Make contact available from header at all times.
- Keep a direct email fallback if forms fail.

## UX risks

- Excessive motion can obscure navigation.
- Non-standard cursors can hurt usability.
- WebGL/canvas can block older devices.
- Hover-only project information fails on touch.
- Full-screen transitions can feel slow.

## Improvements for reusable version

1. Always render semantic text beneath motion layers.
2. Maintain route-specific URLs and browser history.
3. Add `prefers-reduced-motion` support.
4. Provide low-power / no-WebGL mode.
5. Ensure project titles and metadata are visible without hover.
6. Keep transition duration below perceived-friction threshold.
7. Lazy-load heavy project videos and 3D assets.

---

# 9. Navigation Architecture

## Desktop

```text
Brand
Work
Agency
Careers
Store (optional)
Let's Talk
Menu
```

The header should feel sparse and editorial.

## Mobile

Use full-screen navigation with:

- large links
- explicit close control
- locale switch
- contact action
- no hidden hover states

## Locale

Locale must be URL-aware. Recommended:

```text
/en/...
/fr/...
```

Use `hreflang` and preserve project slugs per locale.

---

# 10. Design Tokens

Approximate reusable token system, inspired by the visual logic rather than copied values:

```css
:root {
  --color-bg: #f4f4f1;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #6a6a66;
  --color-border: rgba(17,17,17,.24);
  --color-inverse: #050505;
  --color-inverse-text: #f5f5f2;
  --color-accent: #ff4f00; /* configurable */

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
  --radius-lg: 6px;
}
```

---

# 11. Typography System

The source identity is strongly editorial. The reusable template should pair an expressive display face with a neutral sans.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Mega | 110–180px | 56–88px | 400–600 | .82–.95 | Hero / kinetic type |
| Display | 72–112px | 44–64px | 400–600 | .9–1.0 | Manifesto |
| H1 | 64–88px | 40–54px | 500 | .95–1.05 | Page title |
| H2 | 44–64px | 32–44px | 500 | 1.0–1.08 | Major section |
| H3 | 28–38px | 24–30px | 500 | 1.1 | Project / capability |
| Body-lg | 22–30px | 19–23px | 400 | 1.35 | Intro copy |
| Body | 16–19px | 16–18px | 400 | 1.5 | Main copy |
| Label | 11–13px | 11–12px | 500 | 1.2 | Metadata |

## Font behavior

- Display type can be serif, grotesk or variable depending on brand.
- Avoid excessive tracking on large headings.
- Allow controlled line breaks.
- Use variable-font axes only if they serve meaning or motion.

## RTL adaptation

For Persian:

- use a high-quality Persian display family plus a readable UI sans;
- recompose headlines rather than mechanically mirror Latin line breaks;
- reverse directional motion only when semantically appropriate;
- keep numbers and project metadata visually stable.

---

# 12. Color System

Default reusable ratio:

```text
Neutral: 70%
Black / Inverse: 20%
Project Media: 8%
Accent: 2%
```

Project media should carry most of the color.

---

# 13. Grid & Spacing

## Desktop

```text
12-column grid
Max width: 1440–1600px
Gutter: 24–32px
Outer margin: 32–64px
Narrative section spacing: 120–200px
```

## Tablet

```text
8-column grid
Outer margin: 24–32px
Section spacing: 88–136px
```

## Mobile

```text
4-column grid
Outer margin: 16–20px
Section spacing: 64–96px
```

Media can intentionally break the grid, but typography should maintain strong alignment anchors.

---

# 14. Radius, Border & Shadow

- Radius: minimal.
- Border: 1px editorial rules.
- Shadow: avoid standard card shadows.
- Floating overlays may use subtle blur or opacity instead.
- Focus ring must remain visually explicit even in experimental UI.

---

# 15. Iconography

- Minimal icons.
- Arrows and simple system glyphs preferred.
- Icons should look utilitarian rather than illustrated.
- Suggested equivalents: Lucide / custom SVG set.
- Avoid replacing labels with ambiguous icons.

---

# 16. Imagery Direction

Primary media types:

- campaign photography
- project video
- interface capture
- motion graphics
- branded artifacts
- portraits
- 3D / WebGL objects

Rules:

- use strong crops;
- preserve source aspect ratios where storytelling depends on them;
- full-bleed media may alternate with contained editorial frames;
- autoplay video must be muted and pausable;
- provide poster images and fallback images;
- all meaningful media requires descriptive alt text or adjacent text.

---

# 17. Motion & Interaction

Recommended timing:

```text
Micro interaction: 120–180ms
Navigation: 180–260ms
Section reveal: 300–500ms
Page transition: 450–800ms maximum
Hero choreography: 800–1800ms, non-blocking
```

Patterns:

- staggered type reveal
- mask image reveal
- scroll-linked scale
- parallax
- cursor preview
- magnetic button (optional)
- route transition overlay
- canvas / 3D interaction
- project hover video

Rules:

- motion must never gate content;
- no mandatory intro longer than ~1 second before interaction;
- disable or simplify on `prefers-reduced-motion`;
- do not run continuous WebGL when tab is hidden or canvas is offscreen.

---

# 18. Component Inventory

### Layout
- Header
- MobileMenu
- Footer
- Container
- Grid
- Section
- FullBleedMedia

### Portfolio
- ProjectTile
- ProjectGrid
- ProjectListRow
- ProjectPreviewCursor
- ProjectHero
- ProjectMeta
- ProjectCredits
- NextProject

### Editorial
- ProgressiveHero
- ManifestoBlock
- OversizedQuote
- SplitStory
- MediaSequence
- PeopleCanvas
- CapabilityList

### UI
- Button
- TextLink
- LocaleSwitch
- Filter
- Modal
- VideoPlayer
- Image
- LoadingState

### Conversion
- InquiryCTA
- ContactForm
- AvailabilityNote
- EmailFallback

---

# 19. Component Anatomy

```ts
interface ProjectTileProps {
  title: string;
  slug: string;
  client?: string;
  year?: string;
  disciplines?: string[];
  image: MediaAsset;
  hoverVideo?: MediaAsset;
  theme?: 'light' | 'dark';
}
```

```ts
interface ManifestoBlockProps {
  label?: string;
  statement: string;
  body?: string;
  media?: MediaAsset;
  size?: 'large' | 'mega';
}
```

```ts
interface MotionPreference {
  reducedMotion: boolean;
  webglEnabled: boolean;
  lowPowerMode: boolean;
}
```

---

# 20. Variants & States

Interactive elements must implement:

- default
- hover
- focus-visible
- active
- disabled
- loading
- error

Portfolio media should also define:

- image fallback
- video unavailable
- WebGL unavailable
- reduced-motion
- touch device

---

# 21. Responsive Architecture

## Mobile 320–479

- no cursor interactions;
- project previews become inline;
- hero motion reduced;
- one-column project feed;
- full-screen menu;
- minimum 44px touch targets.

## Large Mobile 480–767

- one or two columns depending on project crop;
- maintain large typography but reduce extreme overlaps.

## Tablet 768–1023

- 2-column portfolio layouts;
- simplify WebGL scene complexity;
- preserve editorial whitespace.

## Desktop 1024–1439

- full interaction system;
- 3–4 column portfolio grids;
- hover preview allowed.

## Large Desktop 1440+

- use large media without uncontrolled stretching;
- cap readable text widths;
- allow oversized type and wide compositions.

---

# 22. Accessibility

Target WCAG 2.2 AA wherever possible.

Required:

- semantic landmarks
- correct heading hierarchy
- keyboard navigation
- visible focus states
- skip navigation
- reduced motion
- sufficient contrast
- pause/stop controls for meaningful animation or video
- non-hover access to project metadata
- canvas fallback content
- form labels and useful errors
- meaningful alt text

Experimental interaction must never reduce baseline accessibility.

---

# 23. Content Architecture

Core entities:

```text
Project
Client
Discipline
Capability
TeamMember
JobOpening
Office
Award
Article (optional)
CTA
LocaleContent
```

```ts
interface Project {
  slug: string;
  title: string;
  client?: string;
  year?: number;
  sector?: string;
  disciplines: string[];
  summary?: string;
  challenge?: string;
  idea?: string;
  execution?: string;
  outcomes?: Outcome[];
  hero: MediaAsset;
  gallery: MediaBlock[];
  credits?: Credit[];
  featured: boolean;
}
```

Never fabricate outcomes, client relationships, awards or performance metrics.

---

# 24. SEO / GEO Structure

- SSR/SSG all primary text.
- One canonical URL per project.
- `Organization` schema.
- `CreativeWork` or `Article` schema for project case studies when appropriate.
- `JobPosting` schema for real openings.
- multilingual `hreflang`.
- descriptive project metadata.
- internal linking between work, services and disciplines.
- answer-first text blocks on Agency / Services pages for AI search clarity.

Do not hide all critical content inside canvas or animated text layers.

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js / React
TypeScript
GSAP for authored timelines
Lenis or native smooth-scroll abstraction
Three.js / React Three Fiber only where justified
Headless CMS
Cloud image/video optimization
Server-rendered semantic content
```

Suggested structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── portfolio/
│   ├── editorial/
│   ├── motion/
│   ├── media/
│   └── ui/
├── content/
├── lib/
│   ├── motion/
│   ├── webgl/
│   ├── analytics/
│   └── cms/
├── styles/
└── types/
```

## Performance architecture

- route-level code splitting;
- intersection-observer media loading;
- video poster-first strategy;
- compressed GLB / Draco / Meshopt if 3D is used;
- adaptive DPR for canvas;
- suspend animations offscreen;
- CDN image formats AVIF/WebP;
- avoid hydrating purely static editorial sections.

Performance budget:

```text
LCP target: < 2.5s
CLS: < 0.1
INP: < 200ms
Initial JS: as small as practical; keep WebGL separate from base shell
Autoplay video: never part of blocking critical path
```

---

# 26. Reusability Rules

## Keep stable

- editorial grid logic
- portfolio hierarchy
- motion abstraction
- responsive rules
- semantic fallback architecture
- project data schema
- inquiry flow

## Customize

- typography
- palette
- motion intensity
- project media
- service taxonomy
- tone of voice
- 3D object concept
- page transitions

## Never hardcode

- client logos
- project claims
- awards
- team names
- emails
- phone numbers
- addresses
- job openings
- testimonials
- results

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  wordmark: ""
  statement: ""
  location: ""
  tone: "editorial"

navigation:
  work: true
  agency: true
  careers: true
  store: false
  journal: false

visual:
  theme: "light"
  accent: ""
  display_font: ""
  body_font: ""
  motion_intensity: "high"
  webgl_enabled: true

portfolio:
  grid_mode: "mixed"
  hover_video: true
  project_filters: []

agency:
  manifesto: ""
  capabilities: []
  team: []

contact:
  form_enabled: true
  email: ""
  budget_ranges: []
  project_types: []

locale:
  default: "en"
  supported: []

feature_flags:
  page_transitions: true
  custom_cursor: false
  project_hover_preview: true
  people_canvas: false
  careers: true
```

---

# 28. What Must NOT Be Copied

Do not reproduce:

- Locomotive® name or logo
- exact copywriting
- exact animation choreography
- proprietary project screenshots
- client logos
- team likenesses
- 3D characters/models
- store products
- awards/metrics
- trademarked visual identity elements

The reusable value is the system:

```text
Editorial confidence
+ Portfolio-first storytelling
+ Design/code integration
+ Motion as communication
+ Human studio identity
+ Frictionless inquiry
```

---

# 29. Improvement Layer

Recommended improvements beyond the reference pattern:

1. Add optional service landing pages for commercial clarity.
2. Add structured project filters with URL state.
3. Add static project preview fallback for mobile/touch.
4. Add explicit reduced-motion and low-power preferences.
5. Add analytics around work browsing → case study → contact.
6. Add case-study outcome fields but show them only when verified.
7. Add CMS validation to prevent missing alt text and media posters.
8. Add bilingual content parity checks.
9. Add media performance QA per project.
10. Add automated accessibility checks before publish.

---

# 30. Quality Gates

A build based on this template is not ready unless:

### UX
- visitor understands what the studio does within the first screen/interaction;
- Work is reachable in one action;
- Contact is always discoverable;
- mobile experience is intentionally redesigned, not merely scaled down.

### Motion
- no critical text requires animation to become readable;
- reduced-motion mode is complete;
- route transitions never trap navigation;
- hover interactions have touch equivalents.

### Performance
- WebGL is lazy-loaded;
- videos are compressed and poster-first;
- initial page works before heavy media loads;
- no major layout shifts.

### Accessibility
- keyboard navigation passes;
- focus visible;
- canvas has fallback;
- media controls accessible;
- semantic headings valid.

### Content Integrity
- no fake clients;
- no fake awards;
- no fabricated metrics;
- no placeholder contact data in production.

---

# 31. Master Build Prompt

```text
You are a senior creative developer, design engineer and digital art director.

Build a production-grade website for [BRAND NAME] using the reusable architecture of an immersive editorial digital-agency portfolio.

Do NOT clone Locomotive's branding, copy, project imagery, logo, proprietary 3D assets, team likenesses or exact animation choreography. Extract only reusable design and interaction principles.

GOAL
Create a website that feels like a digital destination and simultaneously proves the studio's ability to combine design thinking, technical execution and cultural taste.

CORE EXPERIENCE
The visitor journey should be:

Visual Curiosity
→ Studio Identity
→ Work Proof
→ Design + Technical Credibility
→ Human / Culture Trust
→ Project Fit
→ Inquiry

INFORMATION ARCHITECTURE
Implement:
- Home
- Work
- Project Detail
- Agency
- Services if required
- Careers if enabled
- Contact
- Legal
- Locale routes if multilingual

HOME
Build the homepage in this sequence:
1. Minimal header
2. Progressive identity hero
3. Selected work
4. Large manifesto statement
5. Design + technology positioning
6. Optional interactive human/3D visual
7. Additional portfolio/reputation proof
8. Capabilities preview
9. Culture/careers teaser
10. Large inquiry CTA
11. Footer

DESIGN SYSTEM
Use:
- strong editorial grid
- large expressive display typography
- neutral body typography
- high contrast
- minimal radius
- thin rules
- generous macro whitespace
- media-led color
- sparse UI chrome

Do not use generic SaaS cards, excessive pills, stock gradients or template-like sections.

PORTFOLIO
Create an editorial Work index with optional filter and grid/list modes.
Each Project Detail should support:
- hero media
- client/year/discipline metadata
- context
- strategy/creative idea
- design system or visual language
- technical/interactive execution
- flexible media sequence
- real outcomes only when verified
- credits
- next project
- inquiry CTA

MOTION
Use authored motion with GSAP or equivalent where appropriate:
- type reveals
- image masks
- scroll-linked transforms
- subtle parallax
- project hover preview
- optional route transitions
- optional WebGL canvas

Motion must communicate hierarchy or craft, not exist as decoration.

ACCESSIBILITY
All content must remain fully understandable when motion is disabled.
Support prefers-reduced-motion.
Provide keyboard navigation, focus-visible states, semantic HTML, media controls and touch equivalents for hover behavior.
Any canvas/WebGL experience must have a semantic fallback.

PERFORMANCE
Do not ship all project video or 3D assets on initial load.
Lazy-load heavy media.
Use AVIF/WebP and optimized video.
Use adaptive DPR for WebGL.
Pause offscreen animation.
Target Core Web Vitals in the green range.

CMS
Model content as:
Project, Client, Discipline, Capability, TeamMember, JobOpening, CTA, Office and LocaleContent.
Keep content completely separate from presentation.

CONVERSION
Use fewer, stronger CTAs.
Make the primary inquiry action always discoverable.
Place major conversion moments after substantial work proof.
Keep an email fallback.

RESPONSIVE
Do not shrink desktop interactions onto mobile.
On mobile:
- remove custom cursor behavior
- replace hover previews with inline media
- simplify 3D
- reduce motion complexity
- keep expressive typography
- use large touch targets

QUALITY RULES
Never invent client names, awards, results, team members, testimonials, addresses or metrics.
Never hide critical SEO text inside canvas.
Never block the visitor with a long intro animation.
Never sacrifice accessibility or performance for visual spectacle.

FINAL RESULT
The site should feel unmistakably designed, technically sophisticated and culturally aware—an authored digital experience rather than a conventional agency template.
```
