/**
 * Blog types and pure helpers. No post data lives here, so any module can
 * import it without pulling article text into its bundle.
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

/**
 * What listings need (cards, related posts, sitemaps). Lives in the manifest
 * `src/lib/blog-index.ts`, which every page can import cheaply.
 */
export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  /** Publish date as shown on the page, e.g. "August 3, 2026" (Pakistan time). */
  date: string;
  /** Publish clock time, e.g. "9:00 am". Used for ordering and ISO timestamps. */
  time: string;
  /** Last significant edit, same format as `date`. Omit when never updated. */
  updated?: string;
  author: string;
  img: string;
  imgAlt?: string;
  /** Slugs to show first under "Related articles". */
  related?: readonly string[];
};

/** Everything else about an article. Lives in `src/lib/posts/<slug>.ts`. */
export type PostBody = {
  authorRole?: string;
  authorBio?: string;
  /** Optional override for the on-page H1. Defaults to title. */
  h1?: string;
  /** Hand-written <title>. Used as-is, so keep it under about 60 characters. */
  metaTitle?: string;
  /** Hand-written meta description, ideally 140-155 characters. */
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
  /** Scannable summary rendered near the top and reused by AI answer engines. */
  keyTakeaways?: string[];
  /** Shown above the article, e.g. when a list includes Pixel2Tech itself. */
  disclosure?: string;
  faqs?: { q: string; a: string }[];
  /** Scannable verdict rendered near the top. */
  quickVerdict?: {
    title: string;
    body: string;
    /** Short label under the title, e.g. "Our pick for small teams". */
    label?: string;
    winner?: string;
    /** Official site of the winner, linked from the verdict. */
    url?: string;
    /** Link text for `url`. Defaults to "Visit <winner>". */
    urlLabel?: string;
  };
  /** Pixel2Tech pages this article should link to. */
  internalLinks?: { label: string; to: string }[];
  /** Credible external references (Google, Ahrefs, Shopify, HubSpot…). */
  sources?: { label: string; href: string }[];
  /** Copy for the end-of-article call to action. Buttons are fixed site-wide. */
  cta?: { title?: string; body?: string };
  content: BlogSection[];
};

export type BlogPost = PostMeta & PostBody;

/** A post as shown on a card: no body, safe to import anywhere. */
export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  /** Display date, e.g. "August 23, 2026". */
  date: string;
  /** Machine date for <time dateTime>, e.g. "2026-08-23". */
  dateISO: string;
  tag: string;
  img: string;
  /** Descriptive alt text. Use alt="" on thumbnails that sit next to the title. */
  imgAlt: string;
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

/* ------------------------------------------------------------------ */
/* Reading time                                                        */
/* ------------------------------------------------------------------ */

const WORDS_PER_MINUTE = 225;

/** Words of article prose (sections, bullets, callouts, sub-sections). */
export function countWords(post: Pick<PostBody, "content">): number {
  return post.content.reduce((total, section) => {
    const parts = [
      ...section.body,
      ...(section.bullets ?? []),
      ...(section.subsections?.flatMap((s) => [...s.body, ...(s.bullets ?? [])]) ?? []),
      section.definition ?? "",
      section.callout?.body ?? "",
    ];
    return total + parts.join(" ").split(/\s+/).filter(Boolean).length;
  }, 0);
}

/** The one reading-time estimate: page byline and schema timeRequired. */
export function getReadingMinutes(post: Pick<PostBody, "content">): number {
  return Math.max(1, Math.round(countWords(post) / WORDS_PER_MINUTE));
}

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/** Posts are dated in Pakistan Standard Time (no daylight saving). */
const PKT_OFFSET = "+05:00";

const pad = (n: number) => String(n).padStart(2, "0");

/** "August 3, 2026" -> "2026-08-03". Returns undefined when the format is unexpected. */
export function toISODate(display: string): string | undefined {
  const m = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/.exec(display.trim());
  if (!m) return undefined;
  const month = MONTHS.indexOf(m[1].toLowerCase());
  const day = Number(m[2]);
  if (month < 0 || day < 1 || day > 31) return undefined;
  return `${m[3]}-${pad(month + 1)}-${pad(day)}`;
}

/** "9:00 am" -> "09:00:00". Returns undefined when the format is unexpected. */
function toISOTime(time: string): string | undefined {
  const m = /^(\d{1,2}):(\d{2})\s*(am|pm)$/i.exec(time.trim());
  if (!m) return undefined;
  const hours = (Number(m[1]) % 12) + (m[3].toLowerCase() === "pm" ? 12 : 0);
  return `${pad(hours)}:${m[2]}:00`;
}

/**
 * ISO 8601 timestamp for structured data and article:* meta tags,
 * e.g. ("August 3, 2026", "9:00 am") -> "2026-08-03T09:00:00+05:00".
 */
export function toISODateTime(date: string, time: string): string | undefined {
  const day = toISODate(date);
  if (!day) return undefined;
  return `${day}T${toISOTime(time) ?? "00:00:00"}${PKT_OFFSET}`;
}

/** Sort key for newest-first ordering (publish date, then time). */
export function publishedAt(post: Pick<PostMeta, "date" | "time">): number {
  const iso = toISODateTime(post.date, post.time);
  return iso ? Date.parse(iso) : 0;
}

/** Published and modified timestamps. `modified` only differs when `updated` is a later day. */
export function postTimestamps(post: Pick<PostMeta, "date" | "time" | "updated">) {
  const published = toISODateTime(post.date, post.time);
  const modified =
    post.updated && post.updated !== post.date
      ? (toISODateTime(post.updated, post.time) ?? published)
      : published;
  return { published, modified };
}
