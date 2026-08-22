# Tresmares Capital — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "Tresmares Capital"
  source_url: "https://www.tresmarescapital.com/"
  analyzed_at: "2026-08-22"
  category: "Alternative Investment Firm"
  subcategory: "Private Equity / Direct Lending / Fund Solutions"
  complexity: "enterprise"
  visual_style:
    - institutional
    - premium
    - finance-led
    - editorial
    - data-driven
    - restrained
    - international
  suitable_for:
    - private equity firms
    - alternative investment managers
    - venture capital firms
    - private credit firms
    - family offices
    - asset managers
    - investment holding companies
    - institutional financial groups
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Brand: Tresmares Capital.
- Domain: tresmarescapital.com.
- Positioning: pan-European alternative investment firm focused on financing and growth of SMEs and private equity managers.
- Core visible solutions: Private Equity, Direct Lending, Fund of Funds, Fund Financing.
- Primary navigation: About, Financial Solutions, Portfolio, Team, Investors, Contact.
- Investor Portal is exposed as a separate authenticated destination.
- Main homepage proposition: tailored financing for high-growth SMEs and private equity managers.
- Strong use of institutional proof through committed capital, invested capital, portfolio/company counts, ticket ranges, team size and geographic footprint.
- Geographic expansion and office presence are important trust layers.
- Strategic backing/partnership information is used to reinforce scale and market access.
- Team visibility is prominent.
- Multilingual structure supports at least English and Spanish.
- Financial-solution detail pages use metrics, fund overview data and strategy descriptions.

## Inferred

- The primary conversion objective is not retail lead capture; it is institutional trust-building and qualified relationship initiation.
- The website serves multiple buyer/user groups simultaneously: SME founders, PE managers, investors/LPs, advisors and prospective employees.
- Information hierarchy prioritizes credibility, breadth of capital solutions and execution capability over marketing-style persuasion.

## Recommended

- Preserve the institutional tone while making audience routing clearer.
- Separate `Capital Seekers` and `Investors` journeys more explicitly.
- Introduce reusable fund/strategy data models so every investment strategy page follows a consistent pattern.
- Keep numerical claims CMS-driven and source-validated; never hardcode stale AUM, portfolio or headcount data.

---

# 2. Template Identity

```text
Template Type: Institutional Investment Firm Website
Design Direction: Premium / Editorial / Data-led / Minimal
Primary Goal: Establish institutional credibility and route qualified visitors
Secondary Goal: Explain investment strategies and portfolio exposure
Content Density: Medium-High
Interaction Density: Medium
Trust Density: Very High
Regulatory Sensitivity: High
```

Best suited for firms where the visitor must quickly answer:

- Who are you?
- What capital strategies do you offer?
- What is your track record?
- What ticket sizes / company profiles fit?
- Where do you operate?
- Who is on the team?
- How can investors access reporting?

---

# 3. Design DNA

## Overall personality

- institutional confidence
- understated premium finance aesthetic
- strong editorial hierarchy
- sparse decorative UI
- high emphasis on numbers, maps, people and investment categories
- controlled motion rather than playful motion
- generous whitespace around financial data

## Visual Keywords

```text
Institutional, precise, international, restrained, premium,
capital-focused, trustworthy, editorial, data-led, professional
```

## White-space strategy

Macro spacing should be generous to keep financial information readable and avoid the visual density associated with banking portals.

## Content rhythm

```text
Positioning
↓
Institutional proof
↓
Strategy architecture
↓
Geographic capability
↓
Team credibility
↓
Qualified contact
```

## Card usage

Prefer structured data panels, strategy rows and editorial tiles over generic rounded SaaS cards.

## Border strategy

Thin rules and data-table separators should create structure without adding visual noise.

---

# 4. Information Architecture

Observed/reconstructed IA:

```text
/
├── /about
├── /financial-solutions
│   ├── /private-equity
│   ├── /direct-lending
│   ├── /fund-of-funds
│   └── /fund-financing
├── /portfolio
├── /team
├── /investors
├── /contact
├── /en
├── /es
└── external / investor-portal
```

## Recommended reusable IA

```text
/
├── /about
│   ├── /history
│   ├── /offices
│   └── /responsible-investment
├── /strategies
│   ├── /[strategy-slug]
│   └── /[strategy-slug]/funds
├── /portfolio
│   └── /[company-slug]
├── /team
│   └── /[person-slug]
├── /investors
│   ├── /reports
│   └── /investor-portal
├── /insights
│   └── /[article-slug]
├── /contact
├── /legal
├── /privacy
└── /cookies
```

| Route | Purpose | Primary CTA | Priority |
|---|---|---|---|
| `/` | Institutional overview | Explore strategies | P0 |
| `/about` | Firm credibility | Learn history | P1 |
| `/strategies` | Capital-solution overview | View strategy | P0 |
| `/strategies/[slug]` | Deep strategy explanation | Contact team | P0 |
| `/portfolio` | Investment proof | Explore portfolio | P1 |
| `/team` | Leadership credibility | View profiles | P1 |
| `/investors` | LP/investor information | Investor portal | P0 |
| `/contact` | Qualified relationship entry | Contact | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Header
│   ├── Brand Mark
│   ├── Primary Navigation
│   ├── Language Switcher
│   ├── Investor Portal
│   └── Contact CTA
├── Main
│   ├── Editorial Sections
│   ├── Data Modules
│   ├── Strategy Modules
│   ├── Geographic Modules
│   └── People Modules
└── Footer
    ├── Offices
    ├── Legal
    ├── Regulatory
    ├── Language
    └── Investor Access
```

## Recommended widths

```text
--page-max: 1600px
--content-max: 1320px
--editorial-max: 1040px
--text-max: 760px
```

## Header behavior

- Desktop: sticky, transparent over hero only if contrast remains safe.
- Mobile: compact sticky header with drawer navigation.
- Investor Portal should remain visually distinct from public navigation.

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header
02 Institutional Hero
03 About / Positioning
04 Key Metrics
05 Financial Strategies Overview
06 Strategy Detail Preview
07 Geographic Expansion / Market Coverage
08 Strategic Partner / Scale Proof
09 Office Footprint
10 Team Preview
11 Final Relationship CTA
12 Footer
```

### Hero

Objective: establish category, target market and scope within seconds.

Anatomy:

```text
Hero
├── Short institutional headline
├── Supporting proposition
├── Strategy / solutions CTA
└── Optional editorial media
```

### Key Metrics

Metrics can include:

- foundation year
- capital committed
- capital invested
- typical ticket range
- portfolio/company count
- employee count

All values must come from CMS or verified data source.

---

## About

```text
01 About Hero
02 Firm Thesis
03 History Timeline
04 Milestones
05 Geographic Growth
06 Operating Model
07 Strategic Relationships
08 Responsible Investment / ESG
09 Offices
10 CTA
```

---

## Financial Solutions Index

```text
01 Solutions Hero
02 Capital Structure Explanation
03 Strategy Grid / Rows
04 Comparison Matrix
05 Typical Borrower / Company Profiles
06 Ticket / AUM Summary
07 CTA
```

---

## Strategy Detail

Reusable for Private Equity / Direct Lending / FoF / Fund Financing.

```text
01 Strategy Hero
02 Strategy Thesis
03 Key Metrics
04 Investment Criteria
05 Capital / Ticket Range
06 Use Cases
07 Team / Experience
08 Fund Overview
09 Portfolio / Transactions
10 Related Strategy
11 CTA
```

---

## Portfolio

```text
01 Portfolio Hero
02 Filter / Strategy / Geography / Sector
03 Portfolio Grid or Structured List
04 Company Metadata
05 Optional Status / Realized / Active
06 Portfolio Detail Link
07 CTA
```

---

## Portfolio Detail

```text
01 Company Identity
02 Investment Snapshot
03 Strategy / Fund
04 Sector
05 Geography
06 Investment Rationale
07 Growth / Value Creation Narrative
08 Key Milestones
09 Related Team
10 Related Investments
```

Do not publish confidential financial details unless explicitly approved.

---

## Team

```text
01 Team Hero
02 Leadership
03 Strategy Filters
04 Team Directory
05 Person Detail
06 Offices / Locations
07 Careers CTA (optional)
```

---

## Investors

```text
01 Investor Hero
02 Investor Proposition
03 Reporting / Governance
04 Regulatory / Fund Information
05 Downloads / Reports (if public)
06 Investor Portal CTA
07 Investor Relations Contact
```

---

# 7. Section Anatomy

## Metric Strip

```text
MetricStrip
├── metric value
├── metric label
├── optional qualifier
└── source / updatedAt metadata (CMS only)
```

## Strategy Card

```text
StrategyCard
├── strategy name
├── short thesis
├── AUM
├── ticket range
├── target profile
├── team size / experience (optional)
└── CTA
```

## Team Card

```text
TeamCard
├── portrait
├── name
├── title
├── strategy / department
├── office
└── profile link
```

## Office Module

```text
Office
├── city
├── address
├── region coverage
├── contact metadata
└── optional map
```

---

# 8. UX & Conversion Architecture

## Primary user journeys

### SME / Company

```text
Firm credibility
↓
Strategy fit
↓
Ticket / criteria
↓
Portfolio proof
↓
Relevant team
↓
Contact
```

### PE Manager

```text
Fund-related solution
↓
Fund Financing / Fund of Funds
↓
Mandate / ticket understanding
↓
Team credibility
↓
Contact
```

### Investor / LP

```text
Firm overview
↓
Strategies
↓
Track record / governance
↓
Investor information
↓
Investor Portal / IR contact
```

## Recommended audience router

Add a subtle early-page choice:

```text
I am looking for capital
I am an investor
I am a fund manager
I want to explore the portfolio
```

This improves path clarity without turning the site into a wizard.

---

# 9. Navigation Architecture

## Desktop

```text
About
Financial Solutions ▼
Portfolio
Team
Investors
Contact
Language
Investor Portal ↗
```

## Mega menu

Financial Solutions should expose all four strategies with concise descriptions and optional key figures.

## Mobile

- full-height drawer
- strategies grouped under accordion
- Investor Portal pinned as a distinct action
- language switcher visible

## Breadcrumbs

Required on strategy, portfolio detail, insights and legal pages.

---

# 10. Design Tokens

Approximate reusable system; not source-exact.

```css
:root {
  --color-bg: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #122018;
  --color-muted: #68726b;
  --color-primary: #173d2b;
  --color-accent: #b79a63;
  --color-border: rgba(18,32,24,.18);

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

  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  --shadow-sm: 0 1px 4px rgba(0,0,0,.05);
  --shadow-md: 0 8px 24px rgba(0,0,0,.08);
}
```

Keep the default visual system restrained; institutional finance sites should not overuse gradients, glass effects or colorful cards.

---

# 11. Typography System

Recommended pairing: refined serif for major statements + neutral sans for data/UI.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 72–108px | 46–64px | 400–500 | .95–1.0 | Hero |
| H1 | 58–80px | 40–52px | 400–600 | 1.0 | Page title |
| H2 | 40–56px | 30–40px | 450–600 | 1.08 | Section title |
| H3 | 26–34px | 23–28px | 500–600 | 1.15 | Strategy / card |
| Body-lg | 20–26px | 18–21px | 400 | 1.5 | Intro |
| Body | 16–18px | 16px | 400 | 1.55 | Main copy |
| Small | 13–14px | 13px | 400–500 | 1.4 | Metadata |
| Data | 20–36px | 18–30px | 500–650 | 1.1 | Financial values |

For Persian adaptation, use a premium Persian typeface with strong numeric readability and avoid overly decorative display fonts for finance data.

---

# 12. Color System

Suggested ratio:

```text
Neutral backgrounds: 70%
Dark institutional tone: 20%
Premium accent: 7%
Semantic/status: 3%
```

Use accent primarily for selected strategy states, links, highlights and subtle data emphasis.

---

# 13. Grid & Spacing System

## Desktop

```text
12 columns
Max content: 1320px
Outer margin: 48–72px
Gutter: 24–32px
Section spacing: 104–160px
```

## Tablet

```text
8 columns
Outer margin: 28–36px
Gutter: 20–24px
Section spacing: 80–112px
```

## Mobile

```text
4 columns
Outer margin: 18–22px
Gutter: 16px
Section spacing: 56–80px
```

Financial metrics must remain legible and should not collapse into overly dense 2xN grids on small devices.

---

# 14. Radius, Border & Shadow

- Radius: low / restrained.
- Borders: thin, low-contrast.
- Shadows: minimal.
- Strategy modules can use line-based separation instead of elevated cards.
- Focus rings must be explicit and WCAG-compliant.

---

# 15. Iconography

- Minimal outline icons.
- Use only where meaning is improved.
- Maps, arrows, external links and document types are appropriate.
- Avoid decorative finance clichés such as coins, charts and generic handshake icons.

Suggested libraries:

- Lucide
- Phosphor
- custom SVG for institutional symbols

---

# 16. Imagery Direction

Primary media types:

- architecture / office photography
- team portraits
- portfolio/company imagery
- geographic / map visualization
- abstract editorial textures

Rules:

- avoid generic stock-finance imagery
- use real people and real locations when possible
- ensure image rights and consent
- use consistent portrait art direction for team
- lazy-load non-critical imagery

---

# 17. Motion & Interaction

Motion should feel composed and institutional.

```text
Fast UI: 140–180ms
Standard: 200–280ms
Section reveal: 320–500ms
Data/map transitions: 300–550ms
```

Recommended interactions:

- strategy tab transitions
- portfolio filters
- animated numeric counters only if accessible and non-blocking
- map hover / region selection
- team filters
- accordion disclosure

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

### Layout
- Header
- Footer
- Container
- Section
- SplitSection
- DataGrid

### Institutional
- MetricStrip
- StrategyCard
- StrategyComparison
- FundOverviewTable
- PortfolioCard
- TeamCard
- OfficeCard
- Timeline
- GeographyMap
- InvestorPortalCTA
- RegulatoryNote

### UI
- Button
- Link
- Tabs
- Accordion
- Filter
- Select
- Modal
- Drawer

### Content
- ArticleCard
- ReportCard
- DownloadRow
- Breadcrumb
- RelatedContent

---

# 19. Component Anatomy

```ts
interface StrategyCardProps {
  name: string;
  thesis: string;
  aum?: string;
  ticketRange?: string;
  targetProfile?: string;
  href: string;
}

interface MetricProps {
  value: string;
  label: string;
  qualifier?: string;
  updatedAt?: string;
}

interface PortfolioCompany {
  name: string;
  sector?: string;
  country?: string;
  strategy?: string;
  status?: 'active' | 'realized';
  logo?: string;
  href?: string;
}
```

---

# 20. Variants & States

For all interactive components:

- default
- hover
- focus-visible
- active
- disabled
- loading
- error
- empty

Investor-only or protected resources need explicit authenticated / unauthenticated states.

---

# 21. Responsive Architecture

## 320–479

- single-column hero
- metrics stack 1–2 per row
- strategy comparison becomes accordion or horizontal-scroll table
- team grid 1 column
- office data stacked

## 480–767

- 2-column metric layouts where safe
- strategy cards stacked

## 768–1023

- 2-column strategy modules
- compact team grid
- map + copy may stack

## 1024–1439

- full institutional layout
- 3–4 metric columns
- multi-column team grid

## 1440+

- preserve readable line lengths; do not simply stretch content
- use whitespace and editorial composition

---

# 22. Accessibility

Target WCAG 2.2 AA.

Requirements:

- semantic heading hierarchy
- keyboard-accessible menus and filters
- visible focus states
- alt text for team and portfolio imagery
- text alternatives for maps
- accessible tables for fund/strategy data
- no meaning communicated only by color
- `aria-expanded` on accordions
- accessible language switcher
- reduced-motion support
- touch targets >= 44px where practical

---

# 23. Content Architecture

Core entities:

```text
Firm
Strategy
Fund
PortfolioCompany
TeamMember
Office
InvestorResource
Article
Metric
TimelineEvent
RegulatoryDocument
CTA
```

Example:

```ts
interface Fund {
  name: string;
  strategy: string;
  vintageYear?: number;
  commitment?: string;
  status?: string;
}

interface TeamMember {
  name: string;
  role: string;
  office?: string;
  strategy?: string[];
  bio?: string;
  portrait?: string;
  linkedin?: string;
}
```

---

# 24. SEO / GEO Structure

Recommended:

- clean strategy URLs
- Organization schema
- Person schema for public team profiles
- Article schema for insights
- BreadcrumbList
- multilingual `hreflang`
- strong entity consistency for firm / strategy / offices
- structured strategy summaries suitable for AI search
- avoid fabricated `Review`, `AggregateRating` or financial claims
- include `dateModified` for time-sensitive metrics and reports

### Security / SEO Integrity Warning

During analysis on 2026-08-22, a retrieved homepage version contained an unrelated gambling/spam sentence inside the financial-solutions section. This is not part of the intended template and should be treated as a possible content-integrity / SEO-injection signal. For any production implementation:

- validate CMS/admin accounts
- audit plugins/dependencies
- scan generated HTML and sitemap
- monitor Search Console
- enforce CSP where feasible
- review third-party scripts
- verify that public content matches CMS source

---

# 25. Technical Frontend Architecture

Recommended:

```text
Next.js
TypeScript
Tailwind CSS
Server Components where appropriate
Headless CMS
Structured content layer
Strong SEO metadata
Optional investor-portal integration
```

Suggested structure:

```text
src/
├── app/
│   ├── [locale]/
│   ├── strategies/
│   ├── portfolio/
│   ├── team/
│   └── investors/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── institutional/
│   ├── data/
│   └── content/
├── content/
├── lib/
├── types/
└── config/
```

Security notes:

- investor portal should be isolated from public CMS
- no confidential LP data in static HTML
- secure document access with signed URLs/authentication
- audit logs for protected resources
- rate-limit sensitive forms

---

# 26. Reusability Rules

## Keep stable

- institutional hierarchy
- strategy-led IA
- metric component system
- team / portfolio / office models
- multilingual shell
- investor routing

## Customize

- brand
- investment strategies
- geography
- metrics
- team
- funds
- portfolio
- regulatory references
- investor portal URL

## Never hardcode

- AUM
- invested capital
- ticket ranges
- headcount
- office addresses
- regulatory claims
- portfolio counts
- partner logos
- fund returns
- investor data

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  palette: {}
  typography: {}

firm:
  positioning: ""
  founded_year: null
  headquarters: ""
  offices: []
  regulatory_status: []

strategies: []
funds: []
portfolio: []
team: []
metrics: []

investors:
  portal_url: ""
  ir_contact: {}
  resources: []

seo:
  title_template: ""
  organization_schema: {}

locale:
  default: "en"
  supported: ["en"]

feature_flags:
  portfolio_details: true
  investor_resources: true
  insights: false
  geography_map: true
  careers: false
```

---

# 28. What Must NOT Be Copied

Do not copy:

- Tresmares name or logo
- proprietary copy
- exact visual assets
- exact team portraits
- exact portfolio logos unless licensed
- exact financial metrics as reusable defaults
- Banco Santander relationship claims
- regulatory claims
- office addresses
- fund names / commitments
- investor portal implementation

Extract patterns, not identity.

---

# 29. Improvement Layer

Recommended improvements over a straightforward reference reproduction:

1. Audience routing for capital seekers vs investors.
2. Strategy comparison matrix.
3. Consistent portfolio data model.
4. Strategy-specific team ownership.
5. Metric timestamps to avoid stale institutional claims.
6. Stronger ESG / responsible-investment architecture.
7. Secure public-vs-investor content separation.
8. Search and filters for portfolio and team at scale.
9. Better multilingual SEO and hreflang governance.
10. Automated content-integrity monitoring to detect spam injection or unauthorized text changes.

---

# 30. Quality Gates

Before production:

### Content
- [ ] Every financial metric has an owner/source.
- [ ] Every metric has a last-updated date internally.
- [ ] No fabricated portfolio or AUM figures.
- [ ] Regulatory language reviewed.

### UX
- [ ] Capital-seeker journey works.
- [ ] Investor journey works.
- [ ] Mobile strategy pages remain readable.
- [ ] Tables have mobile fallbacks.

### Accessibility
- [ ] WCAG 2.2 AA review.
- [ ] Keyboard navigation complete.
- [ ] Maps and charts have text alternatives.

### Security
- [ ] CMS access hardened.
- [ ] Public HTML scanned for injected content.
- [ ] CSP / third-party scripts reviewed.
- [ ] Investor documents protected.
- [ ] Forms rate-limited and spam-protected.

### Performance
- [ ] LCP target < 2.5s on representative mobile.
- [ ] Team/portfolio images optimized.
- [ ] Maps loaded progressively.

---

# 31. Master Build Prompt

```text
Build a premium institutional website for an alternative investment firm using the architectural principles documented in this specification.

The result must NOT clone Tresmares Capital. Do not reuse its logo, proprietary copy, team, portfolio, financial claims, office addresses, partner relationships, or visual assets.

GOAL
Create a high-trust, multilingual, strategy-led website for an investment manager serving institutional investors, SMEs, founders and private equity managers.

CORE EXPERIENCE
The site must communicate:
1. who the firm is,
2. which investment/capital strategies it offers,
3. its verified scale and track record,
4. where it operates,
5. who leads each strategy,
6. how qualified visitors should engage.

INFORMATION ARCHITECTURE
Include:
- Home
- About
- Strategies index
- Strategy detail template
- Portfolio
- Portfolio detail template
- Team
- Investors
- Contact
- Legal / Privacy / Cookies
- Optional Insights
- External or integrated Investor Portal

HOMEPAGE
Use this sequence:
1. Institutional hero
2. Firm positioning
3. Verified metrics
4. Strategy overview
5. Strategy proof / fit
6. Geographic footprint
7. Institutional trust layer
8. Team preview
9. Final relationship CTA

DESIGN
Use a restrained premium financial aesthetic:
- high editorial quality
- generous whitespace
- refined typography
- subtle borders
- low radius
- minimal shadows
- real team / office / portfolio imagery
- no fintech gradients or crypto-style visuals
- no generic handshake / coin stock photography

COMPONENTS
Create reusable components for:
- MetricStrip
- StrategyCard
- StrategyComparison
- FundOverviewTable
- PortfolioCard
- TeamCard
- OfficeCard
- GeographyMap
- Timeline
- InvestorPortalCTA
- RegulatoryNote
- Breadcrumb
- Filter controls

DATA
All financial claims must come from structured content. Never hardcode AUM, ticket sizes, portfolio count, employee count, regulatory status, returns or investor information into presentation components.

CONTENT MODELS
Implement structured models for:
- Strategy
- Fund
- PortfolioCompany
- TeamMember
- Office
- Metric
- InvestorResource
- RegulatoryDocument
- TimelineEvent

SECURITY
Treat investor content as sensitive:
- do not expose confidential documents in static HTML,
- use authenticated or signed access for protected files,
- separate public CMS from investor systems,
- rate-limit forms,
- sanitize CMS output,
- monitor generated pages for unauthorized/spam content.

MULTILINGUAL
Use locale-aware routing and hreflang metadata. Language switching must preserve the current logical route when translations exist.

ACCESSIBILITY
Target WCAG 2.2 AA. Ensure accessible data tables, keyboard-safe menus, visible focus states, text alternatives for maps/charts and reduced-motion support.

RESPONSIVE
Do not shrink desktop layouts mechanically. On mobile:
- stack metrics safely,
- turn wide comparison tables into accessible accordions or scroll regions,
- keep investor portal and contact actions easy to reach,
- preserve readable data hierarchy.

SEO / GEO
Use Organization, Person, Article and BreadcrumbList schema only where data is real. Produce clear answer-first summaries for each investment strategy. Never fabricate ratings, returns or regulatory data.

TECH STACK
Prefer:
- Next.js
- TypeScript
- Tailwind CSS
- headless CMS
- server-rendered metadata/content where appropriate
- optimized images
- analytics with consent handling

FINAL QUALITY BAR
The result should feel like a credible European institutional investment firm: calm, exact, premium, data-literate and trustworthy. The website should make complex financial offerings easier to understand without oversimplifying them.
```
