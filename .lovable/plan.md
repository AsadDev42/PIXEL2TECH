## Goal

Apply one consistent spacing system across every page without touching colors, fonts, content, or component visuals.

## Spacing tokens (fixed)

- Section vertical: `py-16 md:py-24 lg:py-32`
- Section horizontal: `px-5 md:px-10`
- Container: `mx-auto max-w-7xl`
- Heading → subtext: `mb-3 md:mb-4`
- Subtext → content: `mb-10 md:mb-14`
- Card grid gap: `gap-4 md:gap-6 lg:gap-8`
- Card padding: `p-5 md:p-6 lg:p-8`
- Paragraph width: `max-w-2xl`; heading width: `max-w-3xl`
- Only 8px multiples: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

## Files to sweep

- `src/routes/index.tsx` (homepage — many sections)
- `src/routes/about.tsx`
- `src/routes/services.tsx`
- `src/routes/portfolio.tsx`
- `src/routes/portfolio.$slug.tsx`
- `src/routes/contact.tsx`
- `src/routes/blog.index.tsx`
- `src/routes/blog.$slug.tsx`
- `src/components/site-chrome.tsx` (footer/header padding only if off-grid)

## Per-section rewrite rule

For every `<section>` (or top-level page block acting as one):

1. Replace vertical padding with `py-16 md:py-24 lg:py-32`.
2. Replace horizontal padding with `px-5 md:px-10`.
3. Ensure container uses `mx-auto max-w-7xl` (add wrapper only if missing; do not restructure DOM).
4. Standardize the header block: heading → subtext gap becomes `mb-3 md:mb-4`; subtext → content grid becomes `mb-10 md:mb-14`.
5. Grids get `gap-4 md:gap-6 lg:gap-8`; cards get `p-5 md:p-6 lg:p-8`.
6. Cap heading width at `max-w-3xl`, body paragraphs at `max-w-2xl` (only where a width is currently set).
7. Remove stacked `pt-*` + previous `pb-*` doubling: when two sections meet, keep the shared `py-*` from the rule — don't add extra top/bottom margins on inner elements.
8. Delete non-8px values (e.g. `py-14`, `mt-7`, `gap-5`, arbitrary `p-[…]`); snap to the nearest allowed token that preserves visual rhythm.

## Explicitly not changed

- Hero grids, LoopLoop slider, marquees, testimonial video grid, CTA card, booking modal, contact form fields, navigation, colors, typography, animations, images, copy.
- No component composition changes; only className spacing tokens.

## Verification

- Diff review after each file to confirm only spacing utilities changed.
- Visual check via Playwright at 375, 768, 1440 on `/`, `/about`, `/services`, `/portfolio`, `/contact`, `/blog`.
- Confirm no section has larger interior gap than the gap to the next section.

## Technical notes

- Where a section currently uses `pb-20` followed by another with `pt-14`, both collapse to a single `py-16 md:py-24 lg:py-32` on each — the between-sections gap becomes 2× interior top/bottom of the standard, which stays larger than any interior `mb-10/14`.
- Where a card uses `p-6 sm:p-8 lg:p-10`, snap to `p-5 md:p-6 lg:p-8`.
- Where a grid uses `gap-5`, snap to `gap-4 md:gap-6 lg:gap-8`.
- The dark CTA card on the homepage keeps its inner layout; only its outer section padding and inner `p-*` snap to the tokens.
