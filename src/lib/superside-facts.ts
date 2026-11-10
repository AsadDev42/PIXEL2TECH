/**
 * Facts about Superside used on /superside-alternative and
 * /superside-vs-pixel2tech. Every line comes from Superside's own public pages
 * on the date below; re-check those pages and update the date before changing
 * any of it. Pixel2Tech is not affiliated with Superside.
 */
export const SUPERSIDE_CHECKED = { iso: "2026-11-10", label: "10 November 2026" } as const;

export const SUPERSIDE_SOURCES = {
  home: "https://www.superside.com/",
  pricing: "https://www.superside.com/pricing",
  webDesign: "https://www.superside.com/web-design-services",
} as const;

/** Short, neutral statements, each traceable to the source named beside it. */
export const SUPERSIDE_FACTS = {
  model:
    "Superside sells creative services on subscription. Its pricing page lists three ways to work: a Flex plan, a Dedicated plan and fixed-scope high-impact projects.",
  audience:
    "Superside's homepage describes an AI-powered creative service built to scale alongside in-house teams at enterprises.",
  minimum:
    "Superside's pricing page says subscriptions start at a $15,000 monthly minimum on an annual term, plus a $1,000 monthly software fee for its platform.",
  dedicated:
    "Dedicated teams start at $30,000 a month on a 12-month term, according to the same page.",
  projects:
    "Superside offers a paid, scoped Exploratory Project, which the pricing page describes as a pathway toward a subscription rather than a standalone trial.",
  range:
    "Superside's pricing page lists design, video, photo, UI/UX, illustration, motion, 3D, AR, video editing, audio, and creative and brand strategy, plus AI consulting and training.",
} as const;
