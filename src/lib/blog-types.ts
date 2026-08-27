
/**
 * Blog shared types and utilities to avoid circular dependencies.
 */

/**
 * Blog cover photography.
 * All covers use licensed Unsplash stock photos so each article has a clear,
 * literal visual. `stock()` returns a plain Unsplash URL.
 */
export function stock(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=70`;
}

/** A comparison table rendered inside an article section. */
export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

/** One H2 section of an article. Everything except `heading` is optional. */
export type BlogSection = {
  heading: string;
  /** Optional one-line definition rendered before the prose (GEO extraction). */
  definition?: string;
  body: string[];
  bullets?: string[];
  table?: BlogTable;
  /** Highlighted expert insight / example box. */
  callout?: { title?: string; body: string };
  /** H3 blocks under this section. */
  subsections?: { heading: string; body: string[]; bullets?: string[] }[];
  /** Inline image with optional caption. */
  image?: { src: string; alt: string; caption?: string };
  /** Embedded video (currently YouTube). */
  video?: { type: "youtube"; id: string; title?: string };
};

export type BlogPost = {
  slug: string;
  tag: string;
  date: string;
  time: string;
  /** Human-readable last-updated date, e.g. "August 3, 2026". */
  updated?: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  title: string;
  /** Optional override for the on-page H1. Defaults to title. */
  h1?: string;
  excerpt: string;
  img: string;
  imgAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
  /** Scannable summary rendered near the top and reused by AI answer engines. */
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
  related?: string[];
  /** Scannable verdict rendered near the top. */
  quickVerdict?: { title: string; body: string; winner?: string };
  /** Pixel2Tech pages this article should link to. */
  internalLinks?: { label: string; to: string }[];
  /** Credible external references (Google, Ahrefs, Shopify, HubSpot…). */
  sources?: { label: string; href: string }[];
  cta?: { title?: string; body?: string; primaryLabel?: string; secondaryLabel?: string };
  content: BlogSection[];
};

/** Stable anchor id for a heading, used by the table of contents. */
export function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}
