# Pattern Authoring Standard

Patterns are reusable section-level UX recipes. They define intent, required content, responsive behavior and conversion role without carrying a reference brand's visual identity.

## Required decisions

Every pattern must answer:

1. What user problem does it solve?
2. At which business stage is it used?
3. What content is mandatory vs optional?
4. What is the conversion role?
5. What changes on mobile?
6. What is the keyboard/touch behavior?
7. What is the reduced-motion behavior?

## Families

Current supported families: hero, navigation, portfolio, services, menu, testimonials, lead-capture and footer.

## Rules

- Never require hover for essential content.
- Never rely on a fixed viewport height for readability.
- Preserve logical DOM order under RTL/LTR.
- Interactive variants need keyboard and touch equivalents.
- Patterns should compose with multiple Design DNA profiles.
- Pattern IDs are behavioral names (`hero-authority`), not reference-brand names.
