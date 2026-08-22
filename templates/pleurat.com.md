# Pleurat — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "Pleurat Shala"
  source_url: "https://www.pleurat.com/"
  analyzed_at: "2026-08-23"
  category: "Personal Portfolio"
  subcategory: "Interactive Product Designer / AI Builder Portfolio"
  complexity: "high"
  visual_style:
    - minimal
    - editorial
    - workspace-inspired
    - developer-tool aesthetic
    - monochrome
    - interactive
    - systems-driven
  suitable_for:
    - product designers
    - AI product builders
    - AI engineers
    - creative technologists
    - design engineers
    - founders
    - senior UX/UI designers
    - technical portfolio sites
  status: "ready"
```

---

# 1. Reference Snapshot

**Observed**

- Personal portfolio for Pleurat Shala.
- Primary positioning: product designer and AI product builder.
- Main navigation is structured as five chapters: Welcome, Work, AI, Profile, Contact.
- Homepage combines traditional portfolio content with an interactive workspace/terminal-like experience.
- Hero messaging emphasizes designing apps, websites, and AI systems.
- Portfolio surfaces include selected work, expertise, numeric experience summary, AI/tool stack, work history, and contact.
- A central interactive module behaves like a live workspace with commands, files, notes, tool references, and a terminal prompt.
- Project detail pages contain role, tools, project type, client, year, project goals, design process, workflow/system improvements, visuals, and measurable outcomes.
- AI-related content is treated as part of daily practice rather than a separate novelty section.
- Contact area is concise, with availability, email, timezone, sitemap, external links, and studio context.

**Inferred**

- The portfolio is intentionally designed to feel like an active working environment rather than a static gallery.
- The workspace interaction is both a credibility device and a personality signal: the portfolio demonstrates systems thinking by behaving like a system.
- The site positions breadth through three related disciplines: product design, systems, and AI-assisted building.

**Recommended for reusable template**

- Keep the “portfolio as working interface” idea configurable.
- Do not force terminal UI on every adaptation; offer terminal, canvas, command palette, file explorer, or tool-bench variants.
- Separate static content and interactive state so the site remains indexable, accessible, and performant.
- Preserve the chapter-based information architecture because it keeps a complex senior profile understandable.

---

# 2. Template Identity

```text
Template Type: Interactive Senior Portfolio + AI Builder Showcase
Design Direction: Minimal / Technical / Editorial / Systems-led
Primary Goal: Demonstrate capability and convert to professional inquiry
Secondary Goal: Show process, depth, and current AI-native workflow
Content Density: Medium-High
Interaction Density: High
Trust Density: High
```

Reusable for:

- senior product designers
- design engineers
- AI product engineers
- founders with a strong personal operating system
- creative technologists
- independent consultants
- software/product leaders

---

# 3. Design DNA

## Overall visual personality

- precise
- technical
- understated
- intelligent
- tool-like
- editorial
- system-oriented
- current without feeling trend-dependent

## Visual Keywords

```text
Minimal, technical, structured, interactive, editorial,
workspace-like, precise, AI-native, pragmatic, calm
```

## Density

Medium. The page can hold a large amount of professional information because hierarchy is very strong and content is grouped into distinct chapters.

## Contrast

High text contrast with restrained surface contrast. Interactive panels may use stronger local contrast to distinguish “workspace mode” from normal page content.

## White-space strategy

Generous outer spacing, tighter internal spacing in system modules, timelines, stats, and work metadata.

## Content rhythm

```text
Positioning
↓
Interactive proof
↓
Expertise
↓
Quantified experience
↓
AI/tool ecosystem
↓
Career history
↓
Selected work
↓
Contact
```

## Card usage

Cards should be sparse and purposeful. Prefer panels, lists, rails, workbenches, and data-oriented surfaces over generic rounded cards.

## Motion character

Fast, controlled, utility-like. Motion should suggest state transitions and tool behavior, not decorative spectacle.

---

# 4. Information Architecture

Observed/reconstructed IA:

```text
/
├── #welcome
├── #work
├── #ai
├── #profile
├── #contact
├── /work/[project]
├── /contact
└── /ai-realtime-renamer-plugin
```

Recommended reusable IA:

```text
/
├── /work
│   └── /work/[slug]
├── /ai
├── /profile
├── /lab
│   └── /lab/[experiment]
├── /contact
└── /resume
```

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Positioning + interactive overview | View work / contact | Portfolio | P0 |
| `/work` | Selected project index | Open case study | Portfolio | P0 |
| `/work/[slug]` | Deep project proof | Contact / next project | Case study | P0 |
| `/ai` | AI workflow / experiments | Explore tools | Lab / thought leadership | P1 |
| `/profile` | Career, expertise, history | Contact | Profile | P1 |
| `/lab/[slug]` | Plugin/tool/experiment detail | Try / view code | Product experiment | P2 |
| `/contact` | Inquiry | Send message | Conversion | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Header / Chapter Nav
│   ├── Name / Wordmark
│   ├── Welcome
│   ├── Work
│   ├── AI
│   ├── Profile
│   └── Contact
├── Main
│   ├── Editorial Sections
│   ├── Interactive Workspace Layer
│   └── Project Rail / Case Studies
└── Footer
    ├── Contact
    ├── Sitemap
    ├── External Links
    └── Studio / Timezone / Availability
```

Recommended widths:

```text
--page-max: 1440px
--content-max: 1280px
--text-max: 760px
--narrow-copy: 620px
--workspace-max: 1180px
```

### Behavior

- Header can be sticky with active chapter indication.
- Workspace modules should be contained and visually distinct from editorial sections.
- Footer should stay compact and information-dense.

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header / Chapter Nav
02 Hero Positioning
03 Primary CTA Pair
04 Interactive Workspace / Bench
05 Expertise Tracks
06 Experience by the Numbers
07 AI + Tool Ecosystem
08 Work History / Career Rail
09 Selected Work Preview
10 Availability / Contact
11 Footer
```

### Hero

- Name / role context
- H1 with strong positioning sentence
- supporting experience statement
- CTA: View selected work
- CTA: About / profile

### Workspace

- terminal / command prompt
- file/context indicators
- tool references
- live status text
- optional command shortcuts
- visual board or inspector state

### Expertise

Recommended three-track model:

```text
Product Design
Systems / Design Systems
AI-native Building
```

### Experience Metrics

Use real numbers only. Examples of reusable metrics:

- years of experience
- products shipped
- teams joined
- systems maintained
- active agents/tools
- client count

---

## Work Index

```text
01 Intro
02 Filters / Categories
03 Featured Work Rail
04 Project Grid/List
05 Optional Live Preview Badges
06 Contact CTA
```

Recommended filters:

- Product Design
- SaaS
- AI
- Design Systems
- Brand
- Mobile
- Web

---

## Project Detail

Observed reusable structure from case studies:

```text
01 Project Hero
02 Meta Strip
   ├── Role
   ├── Tools
   ├── Project Type
   ├── Client
   └── Year
03 Project Context
04 Goals / Problems
05 Discovery / Workflow
06 User Flows / Wireframes
07 Design System / Visual Direction
08 Feature / UX Improvements
09 Final UI / Product Screens
10 Outcome Metrics
11 Related Work
12 Contact CTA
```

### Case Study principle

The page should explain *why* decisions were made, not merely show polished screens.

---

## AI / Lab Page

```text
01 AI Practice Intro
02 Current Workflow
03 Tools / Agents
04 Experiments
05 Plugins / Utilities
06 Process Notes
07 Build Logs / Research
08 Related Work
09 CTA
```

Recommended content types:

- plugin
- internal tool
- automation
- AI workflow
- experiment
- prompt system
- agent architecture

---

## Profile

```text
01 Profile Intro
02 Positioning / Philosophy
03 Experience Summary
04 Expertise
05 Career Timeline
06 Companies / Roles
07 Principles
08 Tooling
09 Selected Work
10 Contact
```

---

# 7. Section Anatomy

## Hero

```text
Hero
├── Identity Label
├── H1 Positioning
├── Supporting Paragraph
├── CTA Group
│   ├── View Work
│   └── About Me
└── Optional Availability Status
```

## Workspace Bench

```text
WorkspaceBench
├── Status Bar
├── Context Header
├── File / Tool Rail
├── Main Canvas
├── Terminal Output
├── Command Input
├── Quick Commands
└── Live State Indicator
```

Suggested props:

```ts
interface WorkspaceBenchProps {
  mode: 'terminal' | 'canvas' | 'hybrid';
  title: string;
  status?: string;
  commands?: WorkspaceCommand[];
  panels?: WorkspacePanel[];
  defaultCommand?: string;
  interactive?: boolean;
}
```

## Career Row

```text
CareerRow
├── Index
├── Company
├── Role
└── One-line Impact
```

## Project Meta

```text
ProjectMeta
├── Role
├── Tools
├── Type
├── Client
└── Year
```

---

# 8. UX & Conversion Architecture

## Primary journey

```text
Strong personal positioning
        ↓
Interactive credibility
        ↓
Evidence of depth
        ↓
Selected work
        ↓
Career proof
        ↓
AI-native relevance
        ↓
Contact
```

## Secondary journey

```text
Project discovery
     ↓
Case study
     ↓
Process depth
     ↓
Outcome proof
     ↓
Inquiry
```

## Conversion principles

- Contact should be accessible from every chapter.
- “View work” is the primary exploratory CTA.
- Availability should be visible but not over-emphasized.
- Interactive modules should support credibility, not block information.
- Every experimental interaction needs a non-interactive fallback.

## Recommended improvements

1. Make static equivalents available for every terminal action.
2. Add command palette keyboard support.
3. Preserve user workspace state only locally and optionally.
4. Add structured project filters.
5. Add downloadable resume/profile PDF only if maintained.
6. Add concise “how I work” section for hiring managers and founders.

---

# 9. Navigation Architecture

## Desktop

```text
Name / Mark
Welcome
Work
AI
Profile
Contact
```

Optional secondary action:

```text
Availability status / Email ↗
```

## Mobile

- compact sticky header
- slide-over menu
- active section indicator
- contact CTA always reachable

## Contextual navigation

Project detail pages should include:

- back to work
- previous project
- next project
- related work

---

# 10. Design Tokens

Approximate reusable system:

```css
:root {
  --color-bg: #f7f7f4;
  --color-surface: #ffffff;
  --color-surface-alt: #f0f0ed;
  --color-text: #111111;
  --color-muted: #696969;
  --color-border: rgba(17,17,17,.16);
  --color-accent: #111111;
  --color-success: #2d7a4b;

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

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 8px 30px rgba(0,0,0,.06);
}
```

All values are reusable approximations, not source-exact tokens.

---

# 11. Typography System

Recommended neutral grotesk / modern sans.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 68–96px | 42–58px | 500–650 | .95–1.02 | Hero |
| H1 | 56–72px | 38–48px | 500–650 | 1.0 | Page title |
| H2 | 38–52px | 28–38px | 500–600 | 1.05 | Section |
| H3 | 26–34px | 22–28px | 500–600 | 1.15 | Cards / work |
| Body-lg | 20–24px | 18–21px | 400 | 1.45 | Intro |
| Body | 16–18px | 16px | 400 | 1.55 | Main copy |
| Small | 13–14px | 13px | 400–500 | 1.4 | Metadata |
| Mono | 13–15px | 12–14px | 400–500 | 1.5 | Workspace / terminal |

Workspace UI should use a monospace secondary family.

---

# 12. Color System

Recommended ratio:

```text
Neutral backgrounds: 72%
Text / dark surfaces: 18%
Workspace surfaces: 8%
Semantic/accent: 2%
```

Avoid excessive neon “AI” gradients. The intelligence of the site should come from interaction and structure, not cliché visual language.

---

# 13. Grid & Spacing System

## Desktop

```text
12 columns
Outer margin: 40–64px
Gutter: 24–32px
Section spacing: 96–144px
```

## Tablet

```text
8 columns
Outer margin: 24–32px
Gutter: 20–24px
Section spacing: 72–104px
```

## Mobile

```text
4 columns
Outer margin: 16–20px
Gutter: 16px
Section spacing: 56–80px
```

Workspace module may use a denser internal 8- or 12-column system independent of page grid.

---

# 14. Radius, Border & Shadow

- Borders: thin and low contrast.
- Radius: moderate, never exaggerated SaaS-pill styling.
- Workspace panels may use 6–10px radius.
- Project imagery can use small radius or square edges.
- Focus ring must be explicit and high contrast.
- Shadows should be subtle; hierarchy comes mainly from borders and surface contrast.

---

# 15. Iconography

- simple outline icons
- 1.5–2px stroke
- 16–20px common size
- use icons sparingly
- tool logos may be shown when legitimate

Suggested libraries:

- Lucide
- Phosphor
- Radix Icons

Do not fabricate client/tool relationships.

---

# 16. Imagery Direction

Main visual types:

- product screenshots
- workflow boards
- interface fragments
- wireframes
- system diagrams
- tool/plugin screenshots
- occasional logos/tool marks

### Treatment

- image-first case studies
- neutral framing
- restrained shadows
- lazy loading
- zoom/lightbox optional
- project images should never be decorative-only; captions or context are recommended

---

# 17. Motion & Interaction

Recommended motion:

- section fade/translate reveal
- active nav state
- command typing feedback
- workspace panel transitions
- project rail hover
- terminal output progression
- subtle cursor/state indicators

Timing:

```text
Fast UI: 100–160ms
Standard: 180–240ms
Panel transition: 240–360ms
Large section reveal: 300–450ms
```

Avoid fake typing delays that slow the user down.

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

### Layout

- Header
- ChapterNav
- Container
- Section
- SplitSection
- Footer

### Portfolio

- Hero
- WorkRail
- ProjectCard
- ProjectMeta
- OutcomeStats
- CareerTimeline
- ExpertiseTrack
- ToolCloud

### Interactive

- WorkspaceBench
- Terminal
- CommandInput
- CommandSuggestion
- StatusBar
- FileRail
- WorkspacePanel
- CommandPalette

### Content

- CaseStudySection
- ImageGallery
- ProcessStep
- Quote
- MetricRow
- RelatedWork

### Conversion

- AvailabilityBadge
- ContactCard
- EmailAction
- CalendarAction

---

# 19. Component Anatomy

## ProjectCard

```text
ProjectCard
├── Index
├── Title
├── Short Description
├── Role / Type
├── Year
├── Thumbnail
└── Open Action
```

```ts
interface ProjectCardProps {
  index?: string;
  title: string;
  description: string;
  type?: string;
  year?: string;
  image: MediaAsset;
  href: string;
  featured?: boolean;
}
```

## TerminalCommand

```ts
interface TerminalCommand {
  id: string;
  label: string;
  command: string;
  output: string | ReactNode;
  action?: () => void;
}
```

---

# 20. Variants & States

Interactive modules must support:

- default
- hover
- focus
- active
- loading
- disabled
- error
- empty
- offline/fallback

Workspace specifically should support:

- booting
- ready
- command-running
- result
- invalid-command
- cleared

---

# 21. Responsive Architecture

## Mobile 320–479

- single-column editorial layout
- workspace becomes stacked panels
- no horizontally overflowing terminal
- command shortcuts become horizontal scroll or wrapped chips
- project metadata stacks

## Large Mobile 480–767

- two-column metadata where possible
- workspace keeps simplified panel hierarchy

## Tablet 768–1023

- split sections allowed
- project grids 2 columns
- workspace side rails can reappear

## Desktop 1024–1439

- full workspace composition
- sticky chapter nav optional
- work rail 2–3 columns

## Large Desktop 1440+

- preserve max-width; do not stretch typography indefinitely
- interactive bench can use more breathing room, not simply grow proportionally

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Requirements:

- terminal must not be mouse-only
- commands must be accessible through buttons/keyboard
- use semantic form controls
- command output announced through appropriate live regions when needed
- focus must remain visible
- no auto-focusing command input on every page load
- skip navigation
- logical heading hierarchy
- project images need meaningful alt text or empty alt for decorative images
- motion preference respected
- status indicators must not rely on color alone

---

# 23. Content Architecture

Recommended entities:

```text
Profile
Project
ProjectSection
Metric
CareerEntry
ExpertiseTrack
Tool
Experiment
Plugin
WorkspaceCommand
ContactMethod
```

Example:

```ts
interface Project {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  tools: string[];
  type: string;
  client?: string;
  year?: string;
  goals?: ProjectGoal[];
  sections: ProjectSection[];
  metrics?: Metric[];
  media: MediaAsset[];
}
```

---

# 24. SEO / GEO Structure

- Person schema where appropriate.
- CreativeWork / SoftwareApplication only when accurate.
- Case studies must each have unique title, description, and canonical URL.
- Use concise answer-first summaries such as “What I did”, “Problem”, “Outcome”.
- Project pages should clearly identify role, client, timeframe, and contribution.
- Internal links between profile, work, AI experiments, and contact.
- Avoid hidden terminal-only content for important searchable information.

---

# 25. Technical Frontend Architecture

Recommended:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion or GSAP where justified
MDX or headless CMS for case studies
Server Components for static portfolio content
Client Components only for workspace interactions
```

Structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── portfolio/
│   ├── workspace/
│   ├── ui/
│   └── content/
├── content/
│   ├── projects/
│   ├── profile/
│   └── experiments/
├── lib/
├── config/
└── types/
```

Important architecture rule:

```text
Portfolio Content ≠ Workspace State
```

Interactive state must never be the only place where important content exists.

---

# 26. Reusability Rules

### Stable

- chapter-based IA
- interactive-workspace concept
- case-study structure
- career/proof hierarchy
- responsive logic

### Customizable

- visual theme
- workspace metaphor
- commands
- expertise tracks
- work history
- projects
- tool stack
- contact methods

### Never hardcode

- employer names
- project results
- clients
- product counts
- years of experience
- AI agent counts
- availability
- email
- external profile links

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  role: ""
  tagline: ""
  location: ""
  timezone: ""
  availability: ""

navigation:
  chapters: []

hero:
  headline: ""
  supporting_copy: ""
  primary_cta: {}
  secondary_cta: {}

expertise:
  tracks: []

workspace:
  enabled: true
  mode: "terminal|canvas|hybrid"
  title: ""
  commands: []
  panels: []

projects:
  items: []

career:
  entries: []

ai:
  tools: []
  experiments: []

contact:
  email: ""
  calendar_url: ""
  social_links: []

seo:
  title: ""
  description: ""
```

---

# 28. What Must NOT Be Copied

Do not copy:

- Pleurat name/identity
- exact biography
- exact employers
- exact career claims
- exact case studies
- exact outcome numbers
- source screenshots
- proprietary client work
- tool logos unless legitimately relevant
- exact copywriting
- unique workspace command wording

Reuse the architecture and interaction model, not the identity.

---

# 29. Improvement Layer

Recommended improvements beyond the reference pattern:

1. Accessible command palette.
2. Static fallback for workspace content.
3. Search/filter for larger project libraries.
4. “How I work” summary for hiring managers.
5. Clear contribution boundaries in collaborative projects.
6. Optional public changelog for active experiments.
7. Lighthouse performance budget for interactive modules.
8. Local-only workspace persistence.
9. Reduced-motion workspace mode.
10. Print-friendly resume/profile route.

---

# 30. Quality Gates

Before shipping:

- [ ] Hero explains role in under 10 seconds.
- [ ] Important information is accessible without interacting with terminal/workspace.
- [ ] Every case study specifies contribution clearly.
- [ ] No fabricated metrics or clients.
- [ ] Workspace fully keyboard navigable.
- [ ] Mobile has a purpose-built interaction model.
- [ ] Reduced motion supported.
- [ ] Contact is reachable in one interaction from any primary page.
- [ ] Images optimized and lazy-loaded.
- [ ] All project URLs indexable.
- [ ] WCAG 2.2 AA checks completed.
- [ ] Core Web Vitals monitored.

---

# 31. Master Build Prompt

```text
Build a premium, interactive personal portfolio inspired by the structural and UX principles of a senior Product Designer / AI Builder portfolio, but do not copy the source brand, content, identity, screenshots, case studies, claims, or proprietary assets.

GOAL
Create a portfolio that feels like an active working environment rather than a static gallery. The visitor should immediately understand the creator’s positioning, explore selected work, understand depth of experience, see AI-native workflows, and reach contact quickly.

INFORMATION ARCHITECTURE
Use five primary chapters:
1. Welcome
2. Work
3. AI / Lab
4. Profile
5. Contact

HOME PAGE
Build the homepage in this order:
1. Sticky chapter navigation
2. Hero with strong positioning statement
3. CTA pair: View Work + About/Profile
4. Interactive Workspace Bench
5. Expertise tracks
6. Experience metrics
7. AI / tools ecosystem
8. Career history
9. Selected work
10. Contact / availability
11. Compact footer

WORKSPACE BENCH
Create an interactive portfolio module that can be configured as:
- terminal
- visual canvas
- hybrid terminal + panels

It may include:
- status bar
- file rail
- active panel
- commands
- command input
- quick actions
- system output
- contextual tool references

CRITICAL: important portfolio information must not exist only inside this interaction. Always provide semantic static equivalents for accessibility and SEO.

PROJECT CASE STUDIES
Every project page must support:
- title
- short summary
- role
- tools
- project type
- client (optional)
- year
- context/problem
- goals
- process
- discovery/wireframes
- flows
- design system
- feature improvements
- final UI
- measurable outcomes when real
- related work
- contact CTA

Never invent metrics or project claims.

VISUAL DIRECTION
Use a minimal, technical, editorial visual language:
- neutral backgrounds
- high text contrast
- modern grotesk sans-serif
- monospace secondary font for tool/workspace UI
- restrained border radius
- light borders
- subtle shadows
- no cliché AI gradients unless the target brand explicitly requires them

RESPONSIVE UX
Desktop may show a full multi-panel workspace.
Mobile must use a simplified stacked workspace with no horizontal overflow.
The mobile experience must not be a scaled-down desktop version.

MOTION
Use fast, precise interface transitions.
Avoid decorative animation that slows exploration.
Support prefers-reduced-motion.

ACCESSIBILITY
Target WCAG 2.2 AA.
The workspace must be keyboard navigable.
Commands must have button/control equivalents.
Status must not rely on color alone.
Use visible focus states and semantic markup.

TECHNICAL STACK
Prefer:
- Next.js
- TypeScript
- Tailwind CSS
- Server Components for static portfolio content
- Client Components only for interactive workspace elements
- MDX or headless CMS for projects
- Framer Motion or GSAP only where justified

CONTENT ARCHITECTURE
Separate:
- profile data
- career history
- project content
- AI experiments
- workspace interaction state

Do not hardcode biography, employers, client names, project counts, years, metrics, contact details, or external links.

PERFORMANCE
Lazy-load large project media.
Code-split workspace features.
Do not require heavy animation/WebGL to understand the site.
Protect Core Web Vitals.

FINAL RESULT
The finished product should feel like a senior practitioner’s live digital workspace: precise, useful, current, technical, credible, and personal — without becoming a gimmick.
```
