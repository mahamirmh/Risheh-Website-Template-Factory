# Master Build Prompt Standard

این سند استاندارد ساخت Prompt نهایی برای هر فایل `templates/<site-domain>.md` است.

هدف: Prompt باید آن‌قدر دقیق باشد که یک AI coding agent بتواند بدون توضیح تکمیلی، Template را با کیفیت production-ready پیاده‌سازی کند.

---

# Prompt Structure

هر Master Prompt باید دقیقاً این بلوک‌ها را داشته باشد:

## 1. Role

```text
You are a senior Product Designer, UX Architect, Design Systems Engineer, and Frontend Architect.
```

در صورت نیاز نقش‌های مکمل اضافه شوند:

- Accessibility specialist
- SEO/GEO specialist
- Conversion designer
- Frontend performance engineer

---

## 2. Mission

واضح بیان شود که هدف **بازسازی الگوی طراحی و معماری** است، نه کپی برند.

نمونه:

```text
Build a reusable website template inspired by the structural and interaction patterns documented below. Do not clone copyrighted brand assets, proprietary copy, logos, testimonials, or trademarked visual identity.
```

---

## 3. Reference DNA

خلاصه دقیق:

- template type
- visual direction
- density
- spacing character
- typography character
- card strategy
- navigation style
- motion character
- conversion strategy

---

## 4. Required Pages

تمام routeها به‌صورت explicit:

```text
/
/about
/services
/services/[slug]
/blog
/blog/[slug]
/contact
```

هیچ route مهمی ضمنی باقی نماند.

---

## 5. Exact Page Structure

برای هر Page، ترتیب تمام sections:

```text
Homepage
01 Header
02 Hero
03 Trust Section
04 Feature Grid
05 Product Showcase
06 Testimonials
07 FAQ
08 CTA
09 Footer
```

هر Section باید هدف و anatomy داشته باشد.

---

## 6. Global Layout Rules

شامل:

- max width
- container gutters
- section spacing
- full-width behavior
- sticky header
- footer layout
- page background
- surface rules

---

## 7. Design Tokens

Prompt باید token-driven باشد.

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Motion
Z-index
```

مقادیر approximate باید با برچسب approximate مشخص شوند.

---

## 8. Typography Rules

تعریف:

- display
- H1–H6
- body large
- body
- small
- labels
- responsive scaling
- maximum text widths

از font size تصادفی در componentها جلوگیری شود.

---

## 9. Component Architecture

Agent باید component-driven build انجام دهد.

الگوی ترجیحی:

```text
components/ui
components/layout
components/sections
components/content
```

هر component باید reusable باشد و copy/data داخل component hardcode نشود.

---

## 10. Content/Data Separation

Prompt الزام کند:

```text
Keep business data, navigation, contact information, content, and brand configuration separate from presentational components.
```

پیشنهاد:

```text
src/config/site.ts
src/content/*
src/types/*
```

---

## 11. Personalization Contract

Template باید حداقل این بخش‌ها را از config دریافت کند:

```yaml
brand
business
navigation
contact
social
seo
locale
feature_flags
```

با تغییر این config، نباید نیاز به rewrite کامپوننت‌های اصلی باشد.

---

## 12. Responsive Contract

Prompt باید explicit باشد:

```text
320–479 mobile
480–767 large mobile
768–1023 tablet
1024–1439 desktop
1440+ large desktop
```

برای هر breakpoint:

- columns
- navigation
- type scale
- spacing
- image ratio
- card stacking
- CTA behavior

تعریف شود.

---

## 13. RTL/LTR Readiness

Templateها حتی اگر مرجع انگلیسی هستند باید تا حد ممکن direction-safe باشند.

قواعد:

- از logical CSS properties استفاده شود.
- layout به left/right hardcoded وابسته نباشد مگر ضروری.
- icon direction بررسی شود.
- text alignment از locale تبعیت کند.

---

## 14. Accessibility Contract

Prompt الزام کند:

- semantic HTML
- logical heading hierarchy
- keyboard access
- visible focus states
- accessible labels
- sufficient contrast
- alt strategy
- prefers-reduced-motion
- minimum touch targets

Target: WCAG 2.2 AA where applicable.

---

## 15. Performance Contract

حداقل:

- optimized images
- responsive image sizes
- lazy loading below fold
- no unnecessary client components
- avoid animation libraries when CSS suffices
- code splitting
- font optimization
- stable layout / CLS avoidance

---

## 16. SEO/GEO Contract

Prompt شامل:

- metadata
- canonical strategy
- semantic headings
- breadcrumbs when relevant
- structured data only with real values
- Article/Organization/FAQ/LocalBusiness only when applicable
- answer-first content architecture
- entity clarity
- internal linking

Fake structured data ممنوع.

---

## 17. Forms Contract

اگر فرم وجود دارد:

- label واقعی
- validation
- errors
- loading
- success
- disabled
- honeypot/rate-limit suggestion where relevant
- privacy/consent if needed

---

## 18. Motion Contract

Motion باید subtle باشد.

```text
microinteraction: ~120–180ms
standard: ~180–260ms
large reveal: ~300–500ms
```

`prefers-reduced-motion` رعایت شود.

---

## 19. Forbidden Behavior

Master Prompt باید صریحاً منع کند:

- fake stats
- fake testimonials
- fake awards
- fake client logos
- fake team members
- fake addresses
- fake pricing presented as factual
- copying source website text
- copying source logo/trademark
- hardcoded secrets
- huge one-file components
- mobile as an afterthought

---

## 20. Technical Defaults

مگر اینکه Template دلیل دیگری داشته باشد:

```text
Next.js
TypeScript
Tailwind CSS
React Server Components where appropriate
ESLint
strict TypeScript
component-driven architecture
```

Dependencies باید حداقلی باشند.

---

## 21. Suggested File Structure

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── content/
├── config/
├── content/
├── lib/
├── styles/
└── types/
```

---

## 22. Quality Acceptance Criteria

Prompt در انتها Checklist داشته باشد:

```text
[ ] all required pages implemented
[ ] all documented sections implemented
[ ] reusable components
[ ] no fake factual data
[ ] responsive at all defined breakpoints
[ ] mobile navigation complete
[ ] accessible forms
[ ] keyboard navigation
[ ] design tokens centralized
[ ] brand config centralized
[ ] no proprietary source assets copied
[ ] optimized images
[ ] TypeScript strict passes
[ ] lint passes
[ ] build passes
```

---

# Canonical Master Prompt Skeleton

برای هر سایت این Skeleton با اطلاعات واقعی همان Template تکمیل شود:

```text
ROLE
You are a senior Product Designer, UX Architect, Design Systems Engineer, and Frontend Architect.

MISSION
Create a production-ready, reusable website template based on the documented structural and UX patterns of [REFERENCE SITE]. Use the reference as design research, not as a source of copyrighted brand assets or proprietary copy.

TEMPLATE IDENTITY
- Type: [...]
- Audience: [...]
- Visual DNA: [...]
- Density: [...]
- Conversion Model: [...]

PAGES
[EXACT ROUTE LIST]

GLOBAL SHELL
[HEADER / NAV / MAIN / FOOTER]

PAGE ARCHITECTURE
[EXACT SECTION ORDER FOR EVERY PAGE]

DESIGN SYSTEM
[COLORS / TYPE / SPACE / GRID / RADIUS / BORDER / SHADOW / ICON / MOTION]

COMPONENT SYSTEM
[COMPONENT INVENTORY + VARIANTS + STATES]

CONTENT MODEL
[ENTITIES + FIELDS]

PERSONALIZATION
[CONFIG SCHEMA]

RESPONSIVE RULES
[EXPLICIT RULES FOR ALL BREAKPOINTS]

ACCESSIBILITY
[WCAG REQUIREMENTS]

PERFORMANCE
[PERFORMANCE REQUIREMENTS]

SEO/GEO
[SEO AND STRUCTURED CONTENT REQUIREMENTS]

IMPLEMENTATION
[STACK + ARCHITECTURE + FILE STRUCTURE]

DO NOT
[FORBIDDEN BEHAVIOR]

ACCEPTANCE CRITERIA
[TESTABLE CHECKLIST]

DELIVERABLE
Return a complete implementation, not a mockup. Keep design logic reusable and keep brand/content data externalized from components.
```

---

# Prompt Quality Rule

یک Prompt خوب نباید بگوید فقط:

> «یک سایت شبیه X بساز.»

بلکه باید تمام تصمیم‌های قابل مشاهده و reusable را به constraintهای قابل اجرا تبدیل کند.

هدف نهایی:

```text
Reference Website
→ Explicit Design Knowledge
→ Reusable Specification
→ Deterministic Build Prompt
→ Customizable Production Template
```
