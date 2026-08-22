# Michael Gatt — Immersive Composer / Creative Portfolio Template

## 0. Template Metadata

```yaml
template:
  source_name: "Michael Gatt"
  source_url: "https://michaelgatt.com/"
  analyzed_at: "2026-08-22"
  category: "Creative Portfolio"
  subcategory: "Composer / Film & TV / Sound / Artist Portfolio"
  complexity: "high"
  visual_style:
    - immersive
    - cinematic
    - editorial
    - audio-first
    - minimal
    - monochrome
    - experimental-typography
  suitable_for:
    - film composer
    - music producer
    - sound designer
    - filmmaker
    - creative director
    - photographer
    - motion designer
    - production studio
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Brand: Michael Gatt
- Domain: michaelgatt.com
- Business type: Independent composer / music creator for film, television and other media.
- Primary visible experiences:
  - Sound-enabled immersive entry screen.
  - Projects index.
  - Project detail pages.
  - About / biography.
  - Contact / representation.
- Primary content model: portfolio projects + biography + contact / representation.
- Strong audio integration is part of the interaction model, not a decorative extra.
- Project detail pages combine project description, video CTA and numbered music cue / track lists.
- About page is written as a visual career narrative rather than a conventional résumé page.
- Contact page is intentionally sparse and focused on representation and downloadable bio.

## Inferred

- Primary business objective: establish creative credibility and drive professional inquiries / representation-led opportunities.
- Secondary objective: make the work itself immediately consumable through music and video, reducing the distance between portfolio claim and proof.
- The site behaves more like an interactive title sequence / digital portfolio than a conventional marketing site.

## Recommended for reusable template

- Preserve the immersive and audio-first philosophy.
- Add explicit fallback behavior for users who browse without sound.
- Make media loading progressive and performance-budgeted.
- Separate real client/credit data from the template schema.
- Add optional contact / booking / availability mode without forcing it into the reference aesthetic.

---

# 2. Template Identity

```text
Template Type: Immersive Creative Portfolio + Project Archive
Design Direction: Cinematic / Audio-led / Editorial / Experimental Minimal
Primary Goal: Showcase authorship and convert qualified creative inquiries
Content Density: Medium
Interaction Density: High
Trust Density: High through recognizable work, project detail and direct media proof
```

### Best-fit industries

- Film & TV composers
- Music producers
- Sound designers
- Directors
- Cinematographers
- Motion / VFX artists
- Photographers
- Creative studios
- Production companies
- Artists with media-heavy portfolios

---

# 3. Design DNA

## Overall visual personality

The reference is deliberately cinematic and restrained. The interface does not try to look like a conventional SaaS or agency site. Instead, it creates an atmosphere first and then reveals information through large typography, negative space, image fragments and audio.

## Core characteristics

- Dark / monochrome dominant environment.
- High contrast typography.
- Sparse visible UI chrome.
- Oversized type with widely spaced letterforms.
- Media and sound used as narrative devices.
- Sequential numbering for projects and tracks.
- Strong editorial rhythm rather than card-grid rhythm.
- Low reliance on conventional boxes, borders and UI decoration.
- Portfolio proof is embedded directly inside the experience.
- Brand personality is communicated through pacing, sound and type rather than badges or marketing copy.

## Visual keywords

```text
Cinematic, immersive, atmospheric, restrained, typographic, experimental, dark, audio-first, auteur, editorial
```

---

# 4. Information Architecture

## Reconstructed sitemap

```text
/
├── /projects
│   ├── /projects/batman-the-long-halloween
│   ├── /projects/dungeons-dragons
│   ├── /projects/blood-drive
│   ├── /projects/braid
│   ├── /projects/kite-man-hell-yeah
│   ├── /projects/illumination
│   ├── /projects/justice-league-warworld
│   ├── /projects/shark-week
│   └── /projects/teen-titans-dc-super-hero-girls
├── /about
└── /contact
```

## Route map

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Immersive brand entry | Enter site / enable sound | Intro experience | Critical |
| `/projects` | Browse portfolio | Open project | Project index | Critical |
| `/projects/[slug]` | Deep proof of work | Play video / listen | Project detail | Critical |
| `/about` | Career narrative | Explore work / social follow | Biography | High |
| `/contact` | Professional inquiry route | Representation contact | Contact | High |

---

# 5. Global Layout Architecture

```text
App Shell
├── Sound Entry Layer
│   ├── Enable Sound Prompt
│   └── Enter Without Sound
├── Minimal Header / Navigation
├── Main Stage
│   ├── Typographic Narratives
│   ├── Project Media
│   ├── Audio Modules
│   └── Sequential Content
└── Minimal Footer / Social Links
```

## Layout principles

- Use a full-viewport stage for major moments.
- Keep structural navigation visually quiet.
- Allow text and media to break standard grid expectations selectively.
- Maintain a hidden but consistent container system beneath the expressive layout.
- Project-detail media can use full bleed.
- Long text should still have a readable maximum measure.
- Audio controls must always remain discoverable and keyboard-accessible.

---

# 6. Page-by-Page Structure

## Homepage / Entry

```text
01 Full-screen sound gate
02 Brand / portfolio statement
03 Animated / fragmented visual media
04 Entry into work / project world
05 Navigation access
```

### Objective
Create a strong sensory first impression and establish that sound is a core part of the creator's identity.

### Recommended reusable anatomy

```text
EntryScene
├── background media / visual fragments
├── creator name
├── descriptor
├── sound prompt
├── enter-with-sound action
└── enter-without-sound action
```

---

## Projects Index

Observed project names are represented as a numbered list rather than a generic tile catalog.

```text
Projects
├── Back / navigation control
├── 001 Project Name
├── 002 Project Name
├── 003 Project Name
├── ...
└── 009 Project Name
```

### Template behavior

Each row should support:

- Sequential index.
- Project title.
- Optional year.
- Optional category / role.
- Hover / focus media preview.
- Optional preview audio cue.
- Route to detail page.

For touch devices, hover previews become tap-to-preview or static thumbnails.

---

## Project Detail

Observed structure across multiple project pages:

```text
01 Project title
02 Editorial project description
03 Optional external / More Info action
04 Play Video action
05 Numbered track/cue list
06 Audio playback interactions
07 Related project navigation
```

Examples include projects such as Batman: The Long Halloween, Shark Week, Illumination, Kite Man Hell Yeah!, and Teen Titans / DC Super Hero Girls.

### Recommended structure

```text
ProjectDetail
├── ProjectHero
│   ├── index / eyebrow
│   ├── title
│   ├── visual / video still
│   └── role metadata
├── ProjectStory
│   ├── short narrative
│   └── optional extended context
├── MediaActions
│   ├── play video
│   └── external info
├── TrackList
│   └── TrackRow[]
├── Credits
├── RelatedProjects
└── InquiryCTA
```

---

## About

The reference uses biography as a visual journey instead of a conventional static biography.

Observed themes include:

- Early music study.
- Growing up in Arizona.
- Performing / touring in bands.
- Moving to Los Angeles.
- International travel.
- Work connected with Animal Planet / Discovery Channel.
- Commercials and jingles.
- Theme parks, theme songs, sound design and sonic branding.
- Transition to long-form scoring.

### Reusable structure

```text
About
01 Identity statement
02 Origin / early work
03 Career turning point
04 Timeline chapter
05 Travel / field experience
06 Commercial / client work
07 Medium expansion
08 Current practice
09 Selected credits / project categories
10 Social / external profiles
11 CTA
```

The important pattern is **story chaptering**, not the specific biography.

---

## Contact

Reference behavior is minimal and representation-driven.

```text
Contact
├── inquiry category / representation label
├── representative / contact block
├── optional phone
├── optional email
├── downloadable bio
└── external profile / social links
```

### Reusable variants

- Direct inquiry.
- Management / representation.
- Booking agent.
- Press.
- Licensing.
- General collaboration.

---

# 7. Section Anatomy

## Project Hero

```text
ProjectHero
├── project index
├── title
├── role/category
├── media backdrop
├── short introduction
└── media CTA
```

### Priority
1. Title
2. Media / atmosphere
3. Creator's role
4. Story context
5. Playback action

---

## Track List

```text
TrackList
└── TrackRow[]
    ├── index
    ├── title
    ├── duration (optional)
    ├── play/pause
    ├── progress
    └── active state
```

Track numbering is a strong stylistic device and should remain consistent throughout the portfolio.

---

## Biography Chapter

```text
BiographyChapter
├── oversized statement
├── narrative paragraph
├── optional image
├── optional location / year
└── transition cue
```

---

# 8. UX & Conversion Architecture

The conversion strategy is fundamentally **work-first**, not sales-first.

```text
Atmosphere
   ↓
Identity / Role
   ↓
Project Discovery
   ↓
Media Proof
   ↓
Creative Credibility
   ↓
Biography / Context
   ↓
Professional Inquiry
```

## Primary journeys

### Creative director / producer

```text
Entry
→ Projects
→ Relevant Project
→ Listen / Watch
→ Contact / Representation
```

### Fan / researcher

```text
Entry
→ About
→ Project archive
→ External profile / social
```

### Returning visitor

```text
Projects
→ Direct project selection
→ playback
```

## UX strengths

- Immediate sensory differentiation.
- Strong proof through actual work.
- Low marketing-copy overhead.
- Numbering creates memory and orientation.
- Project pages turn portfolio items into self-contained experiences.

## UX risks

- Sound gates can irritate or confuse some users.
- Heavy media can hurt Core Web Vitals.
- Experimental typography can reduce readability.
- Extremely minimal navigation can lower discoverability.
- Audio/video without captions / transcripts creates accessibility issues.

## Recommended fixes

- Remember sound preference per session.
- Always offer a visible mute control.
- Never autoplay audible audio without consent.
- Add captions/transcripts where relevant.
- Add `prefers-reduced-motion` behavior.
- Use progressive media loading.
- Preserve a semantic nav even if visually minimal.

---

# 9. Navigation Architecture

## Recommended desktop

```text
Header
├── Name / Monogram
├── Projects
├── About
├── Contact
└── Sound Toggle
```

The reference aesthetic favors low-visibility chrome; however, usability should not depend on discovering hidden interactions.

## Mobile

- Full-screen menu or compact drawer.
- Minimum 44×44px touch targets.
- Sound toggle always reachable.
- Keep project index visible.
- Avoid hover-only interactions.

## Contextual navigation

Project pages should include:

```text
Previous Project ←
Project Index
→ Next Project
```

---

# 10. Design Tokens

Exact values are not exposed; values below are reusable approximations.

```css
:root {
  --color-bg: #080808; /* approximate */
  --color-surface: #111111; /* approximate */
  --color-text: #f4f4f1; /* approximate */
  --color-muted: #a4a4a0; /* approximate */
  --color-border: rgba(255,255,255,.16); /* approximate */
  --color-accent: #f4f4f1;

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 5rem;
  --space-7: 8rem;

  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --motion-fast: 160ms;
  --motion-standard: 280ms;
  --motion-scene: 700ms;
}
```

The key visual rule is not the exact black value; it is the **near-monochrome palette + high-contrast media**.

---

# 11. Typography System

Typography is a major identity layer.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display XL | 72–120px | 40–64px | 400–600 | .9–1.0 | Project / scene titles |
| H1 | 56–80px | 36–52px | 400–600 | .95–1.05 | Primary page title |
| H2 | 36–56px | 28–38px | 400–600 | 1.0–1.1 | Chapter headings |
| H3 | 24–32px | 22–28px | 500 | 1.1–1.2 | Supporting headings |
| Body-lg | 20–26px | 18–22px | 400 | 1.4–1.6 | Editorial intro |
| Body | 16–19px | 16–18px | 400 | 1.5–1.7 | Narrative copy |
| Label | 11–14px | 11–13px | 500 | 1.2 | Indices / metadata |

## Style characteristics

- Uppercase labels and titles may use dramatic letter spacing.
- Large display titles can break conventionally across lines.
- Avoid artificially spacing every character in long passages.
- Body text must remain comfortable even when display type is experimental.
- Use fluid `clamp()` scales.

### RTL adaptation

For Persian implementations:

- Preserve cinematic hierarchy, not Latin letter-spacing behavior.
- Never imitate spaced Latin characters by adding Persian whitespace between letters.
- Use a Persian display typeface with strong editorial character and a readable body face.
- Maintain semantic RTL alignment and mirror navigation where appropriate.

---

# 12. Color System

```text
Dark neutral backgrounds: 80–90%
Light typography: 8–15%
Media-derived color: variable
Functional semantic colors: <5%
```

Project artwork/video becomes the primary source of chromatic variation.

### State colors

For a production template add accessible semantic tokens for:

- Focus.
- Error.
- Success.
- Loading.
- Disabled.

Do not rely exclusively on gray values for critical state communication.

---

# 13. Grid & Spacing System

## Desktop

- 12-column conceptual grid.
- Outer gutter: 32–64px.
- Large project scenes may go full bleed.
- Reading copy: ~620–760px max width.
- Section rhythm: 96–160px.

## Tablet

- 8-column grid.
- Outer gutter: 24–40px.
- Section spacing: 72–120px.

## Mobile

- 4-column grid.
- Outer gutter: 16–24px.
- Section spacing: 56–88px.
- Track rows must remain single-tap readable.

---

# 14. Radius, Border & Shadow

The reference aesthetic avoids a card-heavy elevated UI.

- Radius: minimal / near-zero.
- Borders: thin and restrained.
- Shadows: generally avoid UI-card shadows.
- Media overlays: use tonal overlays rather than card elevation.
- Focus ring: clear 2px accessible ring in the reusable implementation.

---

# 15. Iconography

- Minimal icon use.
- Play / pause / volume are the most important controls.
- Prefer thin geometric line icons.
- Suggested implementation: custom SVG set, Lucide, or Phosphor with consistent stroke settings.
- Never use icon-only controls without labels or accessible names.

---

# 16. Imagery Direction

## Media types

- Film / television stills.
- Video clips.
- Behind-the-scenes photography.
- Studio imagery.
- Portraits.
- Artwork / poster imagery.
- Abstract media fragments.

## Rules

- Favor cinematic crops.
- Use full-bleed media sparingly for dramatic moments.
- Prefer high-quality poster frames before video starts.
- Lazy-load non-critical video.
- Generate responsive image sizes.
- Preserve original aspect ratio where possible.
- Provide descriptive alt text for informative images.
- Decorative frames should use empty alt.

---

# 17. Motion & Interaction

Motion is part of the creative identity but must remain purposeful.

## Patterns

- Entry reveal.
- Typographic transitions.
- Project hover preview.
- Media fade / scale.
- Audio state transitions.
- Scroll-linked reveals.
- Scene changes.
- Track active-state animation.

## Timing

```text
Microinteraction: 120–180ms
Navigation / control: 180–280ms
Editorial reveal: 350–600ms
Scene transition: 600–900ms
```

## Accessibility

When `prefers-reduced-motion` is enabled:

- Disable parallax.
- Remove large camera moves.
- Replace animated project previews with stills.
- Use simple fades only.

---

# 18. Component Inventory

## Layout

- AppShell
- MinimalHeader
- FullScreenScene
- EditorialSection
- MediaSection
- Footer

## Navigation

- MainNav
- MobileMenu
- ProjectPager
- BackLink
- SoundToggle

## Portfolio

- ProjectIndex
- ProjectRow
- ProjectPreview
- ProjectHero
- ProjectStory
- RelatedProject

## Audio

- AudioProvider
- AudioPlayer
- TrackList
- TrackRow
- ProgressBar
- VolumeControl
- MuteToggle

## Video

- VideoPoster
- VideoModal
- InlineVideo

## Content

- BiographyChapter
- TimelineMoment
- CreditList
- ContactBlock
- DownloadLink
- ExternalProfileLink

---

# 19. Component Anatomy

## ProjectRow

```text
ProjectRow
├── index
├── title
├── optional metadata
├── preview media
└── href
```

```ts
interface ProjectRowProps {
  index: number;
  title: string;
  slug: string;
  year?: string;
  category?: string;
  previewImage?: string;
  previewVideo?: string;
  previewAudio?: string;
}
```

## TrackRow

```ts
interface TrackRowProps {
  index: number;
  title: string;
  src: string;
  duration?: number;
  active?: boolean;
  disabled?: boolean;
}
```

## Project

```ts
interface CreativeProject {
  slug: string;
  index: number;
  title: string;
  shortDescription: string;
  longDescription?: string;
  year?: string;
  role?: string[];
  categories?: string[];
  heroMedia?: MediaAsset;
  video?: MediaAsset;
  tracks?: AudioTrack[];
  credits?: CreditItem[];
  externalUrl?: string;
  seo: SEOFields;
}
```

---

# 20. Variants & States

## Project Row

- Default.
- Hover preview.
- Focus-visible.
- Active / current.
- Touch preview.
- Loading media.

## Audio Track

- Idle.
- Loading.
- Playing.
- Paused.
- Ended.
- Error.

## Sound Gate

- Unknown preference.
- Sound enabled.
- Muted.
- Remembered preference.

## Video

- Poster.
- Loading.
- Playing.
- Paused.
- Error.
- Caption enabled.

---

# 21. Responsive Architecture

## Mobile 320–479

- No hover assumptions.
- Project rows become stacked/tappable.
- Display titles use aggressive but controlled fluid scaling.
- Audio control is sticky or persistently reachable.
- Full-screen video uses native-friendly controls where appropriate.
- Navigation becomes full-screen or drawer.

## Large Mobile 480–767

- Optional split metadata lines.
- Larger media previews.
- Keep track list horizontally stable.

## Tablet 768–1023

- Project index can use title + metadata columns.
- Biography chapters can begin alternating media/text layout.

## Desktop 1024–1439

- Hover preview enabled.
- Full cinematic transitions.
- Large horizontal type and media compositions.

## Large Desktop 1440+

- Increase whitespace, not only font size.
- Maintain text measure limits.
- Media can become more immersive/full-screen.

---

# 22. Accessibility

Target: WCAG 2.2 AA where technically applicable.

Mandatory improvements:

- Sound must require user intent before audible playback.
- Provide visible sound state.
- Keyboard support for all tracks.
- Native/ARIA states for play/pause.
- Captions for dialogue-heavy video.
- Transcripts where meaningful.
- No essential information only in audio.
- Visible focus styles.
- Semantic heading order despite experimental typography.
- Skip-to-content link.
- Accessible navigation landmarks.
- Motion-reduction support.
- Minimum touch target 44×44px.
- Preserve contrast over media backgrounds.

---

# 23. Content Architecture

## Entities

```text
Creator
Project
AudioTrack
MediaAsset
Credit
BiographyChapter
ContactChannel
Representative
ExternalProfile
DownloadableAsset
```

## Suggested schema

```ts
interface CreatorProfile {
  name: string;
  roles: string[];
  shortBio: string;
  longBio?: string;
  portrait?: MediaAsset;
  socialLinks?: ExternalLink[];
}

interface AudioTrack {
  id: string;
  title: string;
  src: string;
  duration?: number;
  order: number;
}

interface BiographyChapter {
  id: string;
  title?: string;
  body: string;
  location?: string;
  period?: string;
  media?: MediaAsset[];
}

interface Representative {
  category: string;
  name: string;
  company?: string;
  phone?: string;
  email?: string;
}
```

All source-specific names, credits, representatives, track names and claims must live in content/data, not UI code.

---

# 24. SEO / GEO Structure

## Route model

```text
/projects/[slug]
/about
/contact
```

## Structured-data opportunities

Depending on implementation and verified data:

- `Person`
- `MusicGroup` only if appropriate (normally not for an individual composer)
- `CreativeWork`
- `MusicRecording`
- `VideoObject`
- `BreadcrumbList`
- `Organization` for representation/studio entities where factual

Never fabricate awards, clients, credits, release dates or representative data.

## GEO / answer-engine guidance

Project pages should include concise machine-readable facts near the top:

```text
Project
Role
Year
Medium
Key contribution
```

Keep expressive storytelling below that structured summary so cinematic design and semantic clarity coexist.

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js
TypeScript
React
Tailwind CSS or CSS Modules
Framer Motion or Motion One
Howler.js / Web Audio wrapper for portfolio audio
Headless CMS or content collections
Image optimization
Streaming / CDN media delivery
```

## Suggested structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── audio/
│   ├── media/
│   ├── navigation/
│   ├── projects/
│   ├── sections/
│   └── ui/
├── content/
│   ├── projects/
│   ├── biography/
│   └── settings/
├── lib/
│   ├── audio/
│   ├── media/
│   └── seo/
├── styles/
└── types/
```

## Media architecture

Do not bundle large audio/video in the JavaScript application package.

Use:

- CDN/object storage.
- Adaptive or optimized video delivery.
- Lazy loading.
- Poster frames.
- Preload only the currently relevant audio cue.
- Cache headers.

---

# 26. Reusability Rules

## Fixed in template

- Immersive entry logic.
- Projects index concept.
- Sequential project numbering.
- Project-detail story/media architecture.
- Audio player system.
- Cinematic typography hierarchy.
- Responsive interaction rules.
- Semantic content model.

## Customizable

- Brand name.
- Creator role.
- Color palette.
- Fonts.
- Projects.
- Audio / video.
- Biography.
- Contact mode.
- Social profiles.
- Animation intensity.
- Navigation labels.

## Never hardcode

- Project credits.
- Client brands.
- Track names.
- Awards.
- Contact people.
- Phone numbers.
- Emails.
- Social URLs.
- Biography facts.
- Download assets.

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  monogram: ""
  descriptor: ""
  theme: "dark"
  logo: null

creative_identity:
  primary_role: ""
  secondary_roles: []
  intro_statement: ""

navigation:
  projects_label: "Projects"
  about_label: "About"
  contact_label: "Contact"

entry_experience:
  enabled: true
  sound_prompt_enabled: true
  background_media: null
  enter_label: "Enter"
  muted_enter_label: "Enter without sound"

projects:
  numbering: true
  hover_preview: true
  audio_preview: false
  items: []

audio:
  enabled: true
  remember_preference: true
  autoplay_after_consent: false
  persistent_controls: true

about:
  chapters: []

contact:
  mode: "direct|representation|mixed"
  channels: []
  representatives: []
  downloads: []

seo:
  site_title: ""
  description: ""
  social_image: ""

locale:
  language: "en"
  direction: "ltr"

feature_flags:
  video_modal: true
  captions: true
  project_filters: false
  credits: true
  related_projects: true
```

---

# 28. What Must NOT Be Copied

The reusable template must not reproduce proprietary identity or portfolio material from the source.

Do **not** copy:

- Michael Gatt's name or personal biography.
- His project titles / film and television credits.
- Track names or recordings.
- Production artwork or stills.
- Client / studio marks.
- Representative details.
- Text copy from project descriptions.
- Distinct branded artwork.
- Any copyrighted audio/video.

What can be reused is the abstract system:

- Immersive sound-aware entry.
- Numbered project archive.
- Media-first project pages.
- Editorial biography chapters.
- Sparse representation-focused contact flow.
- Cinematic typography and pacing principles.

---

# 29. Improvement Layer

A production-ready derivative should improve several areas while keeping the design spirit.

## Recommended improvements

1. **Progressive entry**
   - No blocking splash when a user revisits.
   - Remember sound preference per session.

2. **Media performance**
   - Stream audio/video from CDN.
   - Lazy-load project previews.
   - Use poster frames and responsive images.

3. **Project discoverability**
   - Optional filters by medium, role, year or category.
   - Keep filters hidden for small portfolios.

4. **Accessible audio**
   - Keyboard support.
   - visible progress and time.
   - captions/transcripts where relevant.

5. **Contact conversion**
   - Optional project inquiry form.
   - Separate booking / licensing / press channels.

6. **Content freshness**
   - Optional Updates / News entity without disturbing the minimalist portfolio.

7. **Analytics**
   - Track project opens, audio plays, video plays, contact CTA and downloads.

---

# 30. Quality Gates

Before shipping a derived site:

## Content

- [ ] No fake project credits.
- [ ] No placeholder awards or brands.
- [ ] All biographies verified.
- [ ] All contact information comes from configuration/content.

## UX

- [ ] User can enter without sound.
- [ ] Sound preference is obvious.
- [ ] No hidden-only navigation.
- [ ] Mobile requires no hover.

## Accessibility

- [ ] Keyboard audio controls work.
- [ ] Video captions are provided where required.
- [ ] Reduced motion is supported.
- [ ] Heading structure is semantic.
- [ ] Focus states are visible.

## Performance

- [ ] Critical first screen does not download every project video.
- [ ] Non-critical audio is lazy-loaded.
- [ ] Images are responsive.
- [ ] Video has poster/fallback.
- [ ] Fonts are subset/preloaded intelligently.

## Engineering

- [ ] Content separated from components.
- [ ] Audio state centralized.
- [ ] Project routes generated from data.
- [ ] Metadata generated per project.
- [ ] 404 behavior implemented.

---

# 31. Master Build Prompt

```text
You are a senior product designer, creative developer, frontend architect, accessibility specialist, and performance engineer.

Build a production-ready immersive creative portfolio website inspired by the architectural principles of a cinematic composer portfolio, but DO NOT clone any brand, copyrighted project, wording, artwork, recording, video, biography, client list, contact detail, or proprietary visual asset from the reference.

The result must be an original reusable template suitable for composers, sound designers, filmmakers, photographers, directors, motion artists, music producers, and creative studios.

PRIMARY EXPERIENCE
Create a dark, cinematic, media-first portfolio where the visitor experiences the creator's work before encountering conventional sales copy.

The core user journey is:

Atmosphere
→ Creator identity
→ Project discovery
→ Media proof
→ Creative credibility
→ Biography / context
→ Professional inquiry

PAGES
Implement:

1. Immersive Home / Entry
2. Projects Index
3. Dynamic Project Detail
4. About / Biography
5. Contact

ENTRY EXPERIENCE
Create an optional full-screen opening scene with:
- creator name
- professional descriptor
- atmospheric media
- “Enter with sound” action
- “Enter without sound” action

Never play audible media until the visitor explicitly consents.
Remember the visitor's sound choice during the session.
Always provide a visible mute/sound toggle after entry.

PROJECTS INDEX
Create a highly editorial project archive based on sequential numbering instead of conventional ecommerce-style cards.

Each project row should support:
- sequence number
- project title
- year
- role/category
- preview image
- optional hover preview video
- optional preview audio
- link to detail page

Desktop may use hover-driven preview media.
Mobile and touch devices must never depend on hover.

PROJECT DETAIL
Each project page should contain:

- project number / eyebrow
- large cinematic title
- optional hero media
- structured metadata summary
- concise project story
- optional extended editorial description
- video action
- optional external information action
- numbered audio track/cue list
- credits
- related projects
- professional inquiry CTA

AUDIO SYSTEM
Build a reusable centralized audio engine.

Required states:
- idle
- loading
- playing
- paused
- ended
- error

Required controls:
- play / pause
- current progress
- duration where available
- mute / volume
- active track state

Only one track should play at a time by default.
All controls must be keyboard-accessible and expose meaningful ARIA labels.

ABOUT PAGE
Do not create a generic résumé wall.
Build a chapter-based visual biography system.

Possible chapter structure:
- origin
- formative period
- career turning point
- notable practice / medium expansion
- current work

Each chapter may contain:
- title
- narrative
- period/year
- location
- image/video

CONTACT
Support configurable modes:
- direct inquiry
- representation
- mixed

Possible channels:
- management
- booking
- licensing
- press
- collaboration
- general inquiry

All personal data must come from configuration or CMS content.
Never hardcode fictional contact information.

VISUAL DIRECTION
Use:
- dark near-monochrome backgrounds
- high-contrast typography
- large fluid headings
- experimental but readable display type
- generous negative space
- cinematic image/video crops
- minimal borders
- almost no conventional elevated card UI
- media as the principal source of color

Do not rely on decorative gradients, glassmorphism, SaaS bento cards, or generic marketing UI unless explicitly customized by the user.

TYPOGRAPHY
Use a fluid typography scale with CSS clamp().
Large project titles may be dramatic and editorial.
Body copy must remain highly readable.
Do not sacrifice accessibility for experimental letter spacing.
For RTL implementations, adapt the typographic logic rather than mechanically copying Latin tracking behavior.

MOTION
Use purposeful cinematic motion:
- entry reveal
- type transitions
- project-preview transitions
- image/video fades
- scroll reveals
- audio state microinteractions

Support prefers-reduced-motion.
When reduced motion is enabled, replace spatial animation/parallax with simple fades or static states.

RESPONSIVE DESIGN
Mobile is not a scaled desktop.

Mobile requirements:
- no hover dependency
- full-screen or drawer navigation
- touch targets >= 44px
- reachable audio control
- fluid display typography
- single-column project/detail flow where needed
- optimized media loading

Desktop requirements:
- optional project hover previews
- editorial compositions
- expansive whitespace
- full-bleed cinematic media where appropriate

ACCESSIBILITY
Target WCAG 2.2 AA where applicable.

Implement:
- semantic landmarks
- proper heading hierarchy
- skip link
- visible focus
- keyboard navigation
- accessible audio controls
- captions/transcripts for relevant video/audio content
- reduced motion
- sufficient contrast over media
- meaningful alt text

PERFORMANCE
Treat media performance as a first-class architecture concern.

Requirements:
- do not bundle large media into application JavaScript
- use CDN/object storage
- responsive images
- lazy-loaded videos
- poster frames
- preload only the most relevant current audio
- avoid downloading all project preview media on initial page load
- respect a clear page-weight budget

TECH STACK
Use:
- Next.js
- TypeScript
- React
- Tailwind CSS or CSS Modules
- component-driven architecture
- Server Components where appropriate
- Framer Motion or Motion One only where animation adds real value
- Howler.js or a small Web Audio abstraction for audio
- content/data separated from UI

DATA MODELS
Create reusable models for:
- Creator
- Project
- MediaAsset
- AudioTrack
- Credit
- BiographyChapter
- Representative
- ContactChannel
- SEOFields

Never hardcode source-brand projects, tracks, client names or claims into components.

SEO / GEO
Each project route must expose clear structured metadata:
- title
- role
- medium/category
- year when known
- concise factual project summary

Add structured data only when supported by verified content.
Never fabricate awards, credits, organizations or release data.

QUALITY BAR
The final result should feel like a premium interactive creative portfolio, not a generic React starter and not a copy of the reference.

Prioritize:
1. atmosphere
2. media proof
3. usability
4. accessibility
5. performance
6. maintainability
7. clean content architecture

Before completion verify:
- sound consent works
- muted entry works
- all media controls are accessible
- mobile requires no hover
- project routing is data-driven
- reduced motion works
- media is lazy-loaded
- no fake data exists
- no source copyright assets or copy have been reproduced
```
