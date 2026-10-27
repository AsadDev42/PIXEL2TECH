import { VIDEO_TITLES } from "@/lib/video-titles";
import { nayyerAssets } from "@/assets/jacques-assets";
import type { LiveStore } from "@/components/store-showcase";
import {
  AUTOMATION_PROJECTS,
  AUTOMATION_SUBCATEGORIES,
  automationCover,
  automationShowcase,
  type AutomationShowcaseData,
} from "@/lib/automation-projects";
import {
  STORE_PROJECTS,
  isStore,
  isWhiteLabel,
  storeCover,
  storeOf,
  type StoreProject,
} from "@/lib/store-projects";
import { swishtagAssets } from "@/assets/swishtag-assets";
import { bookCoverAssets } from "@/assets/book-cover-assets";
import { SITE } from "@/lib/site-config";
import videoHost from "@/lib/portfolio-video-host.json";

export type VideoOrientation = "vertical" | "landscape";

/** A self-hosted video with its poster frame, shown in the detail page's video wall. */
export type PortfolioVideo = {
  src: string;
  poster: string;
  /** Small silent loop for cards; never use the full playback source as a preview. */
  preview?: string;
  /** Neutral label such as "Talking-head video 3". Never an invented topic. */
  title: string;
  orientation: VideoOrientation;
  /**
   * Full video streamed from an embeddable player (a Google Drive /preview URL),
   * for videos too large to host. `src` is then a short muted preview clip, or
   * empty to show the poster only.
   */
  embed?: string;
};

export type PortfolioItem = {
  title: string;
  img: string;
  category: string;
  subcategory: string;
  slug: string;
  /** Client name, for real client work. Placeholder projects leave it empty. */
  client?: string;
  /** Optional embeddable video URL (e.g. Google Drive /preview link). */
  video?: string;
  /** Optional extra images belonging to this same project (shown in its gallery). */
  images?: string[];
  /** Dedicated images for a 3D slider or special showcase. */
  slider?: string[];
  /**
   * Show every image in `images` as a lazy-loaded grid on the detail page,
   * instead of the subcategory mockup (used for large design collections).
   */
  showAllImages?: boolean;
  /** Preserve landscape artwork in collection galleries. */
  galleryAspect?: "landscape";
  /** Self-hosted videos, shown as a video wall on the detail page. */
  videos?: PortfolioVideo[];
  /** A live Shopify store: screenshots in browser/phone frames plus a link to it. */
  store?: LiveStore;
  /** An AI automation build: captioned workflow screenshots and demo videos. */
  automation?: AutomationShowcaseData;
  /** Built as white-label development partner for an agency (see StoreProject.engagement). */
  whiteLabel?: boolean;
};

/*
 * Real collections live in public/portfolio/<slug>/ as numbered files (1.webp,
 * 2.webp, ... or 1.mp4 + 1.jpg poster). The number lists below are written out
 * in full on purpose: to hide one piece of work, delete its number.
 */

/** "/portfolio/<slug>/<n>.<ext>" for each number, in the order given. */
function numbered(slug: string, numbers: number[], ext: "webp" | "jpg" | "png"): string[] {
  return numbers.map((n) => `/portfolio/${slug}/${n}.${ext}`);
}

/**
 * Numbered <n>.mp4 videos with <n>.jpg posters. The video wall shows each
 * orientation in its own grid, so labels count 1, 2, 3... per orientation, in
 * the order shown: removing a number never leaves a gap in the labels.
 */
function numberedVideos(
  slug: string,
  numbers: number[],
  labels: Partial<Record<VideoOrientation, string>>,
  orientation: VideoOrientation,
  /** File numbers whose orientation differs from the default. */
  exceptions: Partial<Record<VideoOrientation, number[]>> = {},
): PortfolioVideo[] {
  const localFiles: Record<string, string[]> = videoHost.localFiles;
  const counts: Record<VideoOrientation, number> = { vertical: 0, landscape: 0 };
  return numbers.map((n) => {
    const o: VideoOrientation = exceptions.vertical?.includes(n)
      ? "vertical"
      : exceptions.landscape?.includes(n)
        ? "landscape"
        : orientation;
    counts[o] += 1;
    return {
      src: localFiles[slug]?.[n - 1]
        ? `/portfolio/${slug}/stream/${localFiles[slug][n - 1]}.mp4`
        : Object.hasOwn(videoHost.collections, slug)
          ? `${videoHost.baseUrl}/${slug}-${n}.mp4`
          : `/portfolio/${slug}/${n}.mp4`,
      poster: `/portfolio/${slug}/${n}.jpg`,
      preview: `/portfolio/previews/${slug}/${n}.mp4`,
      title:
        VIDEO_TITLES[slug]?.[n - 1] ??
        `${labels[o] ?? labels[orientation] ?? "Portfolio video"} — selected edit`,
      orientation: o,
    };
  });
}

const HEALTHCARE_ADS = numbered(
  "healthcare-meta-ad-creatives",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "webp",
);
const FOOD_AND_DRINK_POSTS = numbered(
  "food-and-drink-social-media-creatives",
  [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 15],
  "webp",
);
const SKIN_CARE_POSTS = numbered(
  "skin-care-social-media-creatives",
  [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 14],
  "webp",
);
const CREATIVE_COLLECTION = numbered(
  "social-media-and-ad-creative-collection",
  [
    1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 27, 28, 29, 30, 32, 33, 34, 35,
    36, 37, 38, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56,
  ],
  "webp",
);
const BRAND_IDENTITY_BOARDS = numbered(
  "brand-identity-design-collection",
  [
    1, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35,
  ],
  "webp",
);
const LOGO_DESIGNS = numbered("logo-design-folio", [2, 3, 4, 7, 8], "webp");

const TALKING_HEAD_VIDEOS = numberedVideos(
  "vip-talking-head-videos",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  { vertical: "Talking-head video" },
  "vertical",
);
const UGC_VIDEO_ADS = numberedVideos(
  "ugc-video-ads",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  { vertical: "UGC video ad" },
  "vertical",
);
const PERFORMANCE_MARKETING_VIDEO_ADS = numberedVideos(
  "performance-marketing-video-ads",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  { vertical: "Performance marketing video ad", landscape: "Performance marketing video ad" },
  "vertical",
);
const SHORT_FORM_SOCIAL_VIDEOS = numberedVideos(
  "short-form-social-media-videos",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  { vertical: "Short-form social video" },
  "vertical",
);
const LONG_FORM_AND_PODCAST_VIDEOS = numberedVideos(
  "long-form-video-and-podcast-production",
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  { landscape: "Long-form and podcast video" },
  "landscape",
);
const ANIMATED_EXPLAINER_VIDEOS = numberedVideos(
  "animated-explainer-videos",
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  { landscape: "Animated explainer video" },
  "landscape",
);
const CASH_COW_VIDEOS = numberedVideos(
  "cash-cow-youtube-videos",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  { landscape: "YouTube video", vertical: "Vertical YouTube video" },
  "landscape",
  { vertical: [2, 3] },
);

/**
 * Long-form edits stay on Google Drive (each is hundreds of MB); the site hosts
 * only a poster and an 8-second muted preview. Files 1 and 5 are view-only on
 * Drive, so they show the poster without a preview.
 */
const LONG_FORM_VIDEOS: PortfolioVideo[] = (
  [
    ["17NkjWcKrg1bn-wrVTz2DmIJEAzsmnZ7y", false],
    ["14FbZyV07YR5CflCLNKsnw6seH78-GTSo", true],
    ["19XJB3rMUiI4E5BVJEUIxPGs6dKzQSUxw", true],
    ["1m-ur7YKYdQ0UiEnuBwWZ_0wqbEnNb2Tb", true],
    ["1lWEVWrKay4MgVE_t5jHz4uHG3SwN_0Mk", false],
    ["1g6xqI7Znmr_DL8ZthN7VWmKYhQlaHJ5j", true],
  ] as [string, boolean][]
).map(([id, hasPreview], i) => ({
  src: hasPreview ? `/portfolio/long-form-video-editing/${i + 1}-preview.mp4` : "",
  poster: `/portfolio/long-form-video-editing/${i + 1}.jpg`,
  preview: hasPreview ? `/portfolio/previews/long-form-video-editing/${i + 1}.mp4` : undefined,
  title: VIDEO_TITLES["long-form-video-editing"][i],
  orientation: "landscape" as const,
  embed: `https://drive.google.com/file/d/${id}/preview`,
}));

/** Projects pinned to the top of the /portfolio grid, in this order. */
export const FEATURED_SLUGS: readonly string[] = ["vip-talking-head-videos"];

export const CATEGORIES = [
  "Social Media & Ads",
  "Design",
  "Ecom Stores",
  "Websites",
  "Video Editing",
  "AI Automation",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const SUBS: Record<Category, string[]> = {
  "Social Media & Ads": ["Social Media"],
  Design: ["Branding", "Print & Merchandise"],
  "Ecom Stores": ["Shopify Stores"],
  Websites: ["WordPress Sites", "Custom Websites"],
  "Video Editing": ["Short Form", "Long Form", "Commercial"],
  "AI Automation": [...AUTOMATION_SUBCATEGORIES],
};

type RawItem = Omit<PortfolioItem, "category" | "subcategory" | "slug"> & { slug?: string };
type RawWork = Record<Category, Record<string, RawItem[]>>;

function storeItem(p: StoreProject): RawItem {
  return {
    slug: p.slug,
    title: `${p.client} — ${isStore(p) ? `${p.platform} store` : "website"}`,
    client: p.client,
    img: storeCover(p),
    store: storeOf(p),
    whiteLabel: isWhiteLabel(p) || undefined,
  };
}

const RAW: RawWork = {
  "Social Media & Ads": {
    "Social Media": [
      {
        // Explicit slugs keep project URLs stable when titles change.
        slug: "madluvv-social-media-meta-ads",
        title: "MADLUVV — social media and Meta ads",
        client: "MADLUVV",
        img: "/media/5029b141-c991-4ba8-9909-25e972eb8692/madluvv-cover.png",
        images: [
          "/media/c4bd4358-8aaf-45f3-a6bb-075dec4226e4/madluvv-1.png",
          "/media/5c9ddbab-b0cd-4337-b1f1-8910c27bc9e3/madluvv-2.png",
          "/media/5ca499ea-9272-400e-9a5f-c971dd39de9b/madluvv-3.png",
          "/media/89733ae3-ce34-47b7-8da1-ae426679b42c/madluvv-4.png",
          "/media/907cdda9-156c-4f46-8db0-8636373881c6/madluvv-5.png",
          "/media/d86bb39b-e140-4bc3-aa43-3065ee73af4c/madluvv-6.png",
          "/media/dea8407c-4606-411f-8493-ed3fede95eb6/madluvv-7.png",
          "/media/21615bc5-1b59-4ed8-8da8-7c294082eb0f/madluvv-8.png",
          "/media/d3c35c06-c103-4ae7-a58a-856e1edd0c53/madluvv-9.png",
          "/media/526d0055-df91-415a-a35e-4bd6e9b161e3/madluvv-10.png",
          "/media/7db7c628-1bb0-4e8e-893e-cea7e58d3a9a/madluvv-11.jpg",
          "/media/a83227d7-7e64-4cf6-8a2d-369e3bfeb039/madluvv-12.jpg",
          "/media/106746bf-ed5e-434a-b77b-c15943ac2fe5/madluvv-13.jpg",
        ],
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        title: "Affinity Law — social media and ad creatives",
        client: "Affinity Law",
        img: "/media/eae62611-b17c-4924-8ea3-d63bdb502eb6/affinity-law-1.png",
        images: [
          "/media/2aaa2cc7-874b-4689-aaaf-49a46eeb8e98/affinity-law-2.png",
          "/media/f2f103de-7f42-450f-8bc9-9a1b5a31137f/affinity-law-3.png",
          "/media/d7fd411a-4c8f-4bf5-9782-a22c50a77129/affinity-law-4.png",
          "/media/813f1b8c-f0c3-4440-a56a-2c1d469a5703/affinity-law-5.png",
          "/media/b8537865-3d00-46d4-b967-86468ac24adf/affinity-law-6.png",
          "/media/088b50fb-f17b-4a19-8c6e-10a40aae279b/affinity-law-7.png",
          "/media/82f7253d-19fa-4af2-b6cb-92278ebc9c7f/affinity-law-8.png",
          "/media/c115fc4c-5d96-40d9-ac4d-63891e1ef0a6/affinity-law-9.png",
          "/media/5649d816-c234-46bf-a52a-57844c7458db/affinity-law-10.png",
        ],
      },
      {
        slug: "nayyer-carpets-creative-direction-mockups",
        title: "Nayyer Carpets — creative direction and product visuals",
        client: "Nayyer Carpets",
        img: nayyerAssets.cover,
        images: nayyerAssets.images,
        slider: nayyerAssets.slider,
      },
      {
        slug: "swishtag-social-media-management",
        title: "Swishtag — social media management",
        client: "Swishtag",
        img: swishtagAssets.cover,
        images: swishtagAssets.images,
      },
      {
        slug: "healthcare-meta-ad-creatives",
        title: "Healthcare Meta ad creatives",
        // Original nerve-pain artwork selected by the owner as the cover.
        img: "/portfolio/healthcare-meta-ad-creatives/6.webp",
        images: HEALTHCARE_ADS,
        showAllImages: true,
      },
      {
        slug: "food-and-drink-social-media-creatives",
        title: "Food and drink social media creatives",
        img: FOOD_AND_DRINK_POSTS[0]!,
        images: FOOD_AND_DRINK_POSTS,
        showAllImages: true,
      },
      {
        slug: "skin-care-social-media-creatives",
        title: "Skin care social media creatives",
        img: SKIN_CARE_POSTS[0]!,
        images: SKIN_CARE_POSTS,
        showAllImages: true,
      },
      {
        slug: "social-media-and-ad-creative-collection",
        title: "Social media and ad creative collection",
        img: CREATIVE_COLLECTION[0]!,
        images: CREATIVE_COLLECTION,
        showAllImages: true,
      },
    ],
  },

  Design: {
    Branding: [
      {
        slug: "brand-identity-design-collection",
        title: "Brand identity design collection",
        img: BRAND_IDENTITY_BOARDS[0]!,
        images: BRAND_IDENTITY_BOARDS,
        showAllImages: true,
      },
      {
        slug: "logo-design-folio",
        title: "Logo design folio",
        // Portrait board (4), so it fills the 4:5 grid card.
        img: "/portfolio/logo-design-folio/4.webp",
        images: LOGO_DESIGNS,
        showAllImages: true,
      },
    ],
    "Print & Merchandise": [
      {
        slug: "book-cover-design-portfolio",
        title: "Book cover design",
        img: bookCoverAssets.covers[0],
        images: bookCoverAssets.covers,
      },
    ],
  },

  "Ecom Stores": {
    "Shopify Stores": STORE_PROJECTS.filter(isStore).map(storeItem),
  },
  Websites: {
    "WordPress Sites": STORE_PROJECTS.filter((p) => p.platform === "WordPress").map(storeItem),
    "Custom Websites": STORE_PROJECTS.filter((p) => !isStore(p) && p.platform !== "WordPress").map(
      storeItem,
    ),
  },
  "Video Editing": {
    "Short Form": [
      {
        slug: "short-form-social-media-videos",
        title: "Short-form video production for social media",
        img: SHORT_FORM_SOCIAL_VIDEOS[0]!.poster,
        videos: SHORT_FORM_SOCIAL_VIDEOS,
      },
      {
        slug: "vip-talking-head-videos",
        title: "Talking-head videos for founders and personal brands",
        img: TALKING_HEAD_VIDEOS[0]!.poster,
        videos: TALKING_HEAD_VIDEOS,
      },
    ],
    "Long Form": [
      {
        slug: "long-form-video-and-podcast-production",
        title: "Long-form video and podcast production",
        img: LONG_FORM_AND_PODCAST_VIDEOS[6]!.poster,
        videos: LONG_FORM_AND_PODCAST_VIDEOS,
      },
      {
        slug: "cash-cow-youtube-videos",
        title: "Faceless YouTube videos for cash cow channels",
        img: CASH_COW_VIDEOS[0]!.poster,
        videos: CASH_COW_VIDEOS,
      },
      {
        slug: "long-form-video-editing",
        title: "Long-form video editing",
        img: LONG_FORM_VIDEOS[1]!.poster,
        videos: LONG_FORM_VIDEOS,
      },
    ],
    Commercial: [
      {
        slug: "animated-explainer-videos",
        title: "Animated explainer videos for SaaS, tech and AI",
        img: ANIMATED_EXPLAINER_VIDEOS[1]!.poster,
        videos: ANIMATED_EXPLAINER_VIDEOS,
      },
      {
        slug: "performance-marketing-video-ads",
        title: "Performance marketing video ads",
        img: PERFORMANCE_MARKETING_VIDEO_ADS[0]!.poster,
        videos: PERFORMANCE_MARKETING_VIDEO_ADS,
      },
      {
        slug: "ugc-video-ads",
        title: "UGC video ads",
        img: UGC_VIDEO_ADS[0]!.poster,
        videos: UGC_VIDEO_ADS,
      },
    ],
  },
  "AI Automation": Object.fromEntries(
    AUTOMATION_SUBCATEGORIES.map((sub) => [
      sub,
      AUTOMATION_PROJECTS.filter((p) => p.subcategory === sub).map(
        (p): RawItem => ({
          slug: p.slug,
          title: p.title,
          img: automationCover(p),
          automation: automationShowcase(p),
        }),
      ),
    ]),
  ),
};

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const WORK: Record<Category, Record<string, PortfolioItem[]>> = Object.fromEntries(
  (Object.keys(RAW) as Category[]).map((cat) => [
    cat,
    Object.fromEntries(
      Object.entries(RAW[cat])
        .filter(([, arr]) => arr.length > 0)
        .map(([sub, arr]) => [
          sub,
          arr.map((w) => ({
            ...w,
            category: cat,
            subcategory: sub,
            slug: w.slug ?? slugify(`${cat}-${sub}-${w.title}`),
          })),
        ]),
    ),
  ]),
) as Record<Category, Record<string, PortfolioItem[]>>;

const CATEGORY_ORDER: PortfolioItem[] = (Object.keys(WORK) as Category[]).flatMap((cat) =>
  Object.keys(WORK[cat]).flatMap((sub) => WORK[cat][sub]),
);

/**
 * Every project in display order: FEATURED_SLUGS first, then the rest by
 * category and subcategory as written in RAW. The /portfolio grid, its
 * category filters and the ItemList JSON-LD all follow this order.
 */
export const ALL_ITEMS: PortfolioItem[] = [
  ...FEATURED_SLUGS.map((slug) => CATEGORY_ORDER.find((i) => i.slug === slug)).filter(
    (i): i is PortfolioItem => Boolean(i),
  ),
  ...CATEGORY_ORDER.filter((i) => !FEATURED_SLUGS.includes(i.slug)),
];

export function getItemBySlug(slug: string): PortfolioItem | undefined {
  return ALL_ITEMS.find((i) => i.slug === slug);
}

/**
 * Dev-only guard for hand-written copy keyed by slug: a typo in a key would
 * otherwise silently fall back to the generated template text.
 */
export function warnOnUnknownSlugs(source: string, slugs: string[]): void {
  if (!import.meta.env?.DEV) return;
  for (const slug of slugs) {
    if (!getItemBySlug(slug)) console.warn(`[${source}] no portfolio item has the slug "${slug}"`);
  }
}

/** URL-safe value for the /portfolio?category= filter, e.g. "video-editing". */
export type CategorySlug =
  | "social-media-and-ads"
  | "design"
  | "ecom-stores"
  | "websites"
  | "video-editing"
  | "ai-automation"
  | "custom-platforms";

export function categorySlug(category: Category): CategorySlug {
  return slugify(category) as CategorySlug;
}

/** Accepts "video-editing", "Video Editing" or "video editing"; undefined otherwise. */
export function categoryFromSlug(value: unknown): Category | undefined {
  if (typeof value !== "string" || !value) return undefined;
  const wanted = slugify(value);
  // The "Creative" practice was renamed; keep old ?category=creative links working.
  if (wanted === "creative") return "Social Media & Ads";
  // "WordPress & Shopify" was split into "Ecom Stores" and "Websites".
  if (wanted === "wordpress-and-shopify") return "Ecom Stores";
  return CATEGORIES.find((c) => slugify(c) === wanted);
}

/** Absolute URL for an image, for Open Graph, Twitter cards and JSON-LD. */
export function absoluteImageUrl(src: string): string {
  if (/^https?:\/\//.test(src)) return src;
  return `${SITE.url}${src.startsWith("/") ? "" : "/"}${src}`;
}

/**
 * Responsive srcset for Unsplash-hosted placeholder images, so a 400px card
 * does not download a 1600px photo. Our own uploaded assets are not resized.
 */
export function imageSrcSet(src: string, widths: number[] = [480, 800, 1200]): string | undefined {
  if (!src.includes("images.unsplash.com") || !/[?&]w=\d+/.test(src)) return undefined;
  return widths.map((w) => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(", ");
}

export function getRelated(item: PortfolioItem, limit = 3): PortfolioItem[] {
  return ALL_ITEMS.filter((i) => i.slug !== item.slug && i.category === item.category).slice(
    0,
    limit,
  );
}

// Sibling images from the SAME subcategory — used to build a category-tailored gallery.
export function getSubcategoryGallery(item: PortfolioItem, limit = 6): string[] {
  if (item.images?.length) return item.images.slice(0, limit);
  const siblings = (WORK[item.category as Category]?.[item.subcategory] ?? [])
    .filter((i) => i.slug !== item.slug)
    .map((i) => i.img);
  return siblings.slice(0, limit);
}

/** The client's name, or a short name derived from the title for placeholder projects. */
export function getBrandName(item: PortfolioItem): string {
  if (item.client) return item.client;
  const words = item.title.split(" ").filter(Boolean);
  const base = words.slice(0, 2).join(" ");
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Deliverables shown per subcategory on the detail page.
export function getDeliverables(item: PortfolioItem): string[] {
  const map: Record<string, string[]> = {
    "Social Media": [
      "Content strategy",
      "Post design system",
      "Reels & carousels",
      "Monthly calendar",
    ],
    Branding: ["Logo & wordmark", "Color palette", "Typography system", "Brand guidelines"],
    "Print & Merchandise": [
      "Print-ready artwork",
      "Packaging mockups",
      "Merch design",
      "Vendor handoff",
    ],
    Websites: ["UX wireframes", "Responsive UI", "Copy direction", "CMS handoff"],
    "E-Commerce": ["Storefront design", "Product templates", "Checkout flow", "Launch support"],
    "Mobile Apps": ["App UX", "UI system", "Prototype", "Design handoff"],
    "Short Form": ["Scripting", "Editing", "Captions & motion", "Platform-ready exports"],
    "Long Form": ["Full edit", "Color & sound", "Thumbnails", "Chapters"],
    Commercial: ["Ad concept", "Edit & VFX", "Multiple cuts", "Aspect ratios"],
    "Web Apps": ["Product design", "Frontend build", "Backend & auth", "Deployment"],
    Tools: ["Discovery", "MVP build", "Integrations", "Docs & training"],
    Automation: ["Workflow mapping", "Automation build", "Integrations", "Monitoring"],
  };
  return map[item.subcategory] ?? ["Discovery", "Design", "Build", "Handoff"];
}
