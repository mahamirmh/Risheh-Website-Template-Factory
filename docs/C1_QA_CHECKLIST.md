# Phase C1 QA Checklist

## Core flow
- [ ] Business inputs update draft state.
- [ ] Industry change clears incompatible archetype/design/page/pattern selections only.
- [ ] Archetype applies Phase B defaults deterministically.
- [ ] Design DNA allows up to two selected profiles and exposes compatibility guidance.
- [ ] Pages and patterns are editable without mutating Phase B catalogs.
- [ ] RTL/LTR changes document composition direction.
- [ ] Review surfaces composition blockers before export.

## Export and handoff
- [ ] JSON export validates against `risheh.build-spec.v1`.
- [ ] YAML export validates against `risheh.build-spec.v1`.
- [ ] Invalid imported Build Specs are rejected.
- [ ] Valid imported Build Specs hydrate the composer.
- [ ] Codex/Claude/generic handoffs embed the validated spec and truthfulness rules.

## Accessibility / responsive
- [ ] Keyboard-visible focus exists for controls.
- [ ] Mobile layout becomes a one-column guided flow.
- [ ] No essential action is hover-only.
- [ ] `prefers-reduced-motion` disables non-essential transitions.
- [ ] Build output carries accessibility and responsive preferences.

## Verification commands
```bash
npm run check
npm run catalog
npm run build
```
