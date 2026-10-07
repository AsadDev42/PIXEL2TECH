import { nayyerAssets } from "@/assets/jacques-assets";
import { swishtagAssets } from "@/assets/swishtag-assets";
import { bookCoverAssets } from "@/assets/book-cover-assets";
import { SITE } from "@/lib/site-config";

export type VideoOrientation = "vertical" | "landscape";

/** A self-hosted video with its poster frame, shown in the detail page's video wall. */
export type PortfolioVideo = {
  src: string;
  poster: string;
  /** Neutral label such as "Talking-head video 3". Never an invented topic. */
  title: string;
  orientation: VideoOrientation;
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
  /** Self-hosted videos, shown as a video wall on the detail page. */
  videos?: PortfolioVideo[];
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
  const counts: Record<VideoOrientation, number> = { vertical: 0, landscape: 0 };
  return numbers.map((n) => {
    const o: VideoOrientation = exceptions.vertical?.includes(n)
      ? "vertical"
      : exceptions.landscape?.includes(n)
        ? "landscape"
        : orientation;
    counts[o] += 1;
    return {
      src: `/portfolio/${slug}/${n}.mp4`,
      poster: `/portfolio/${slug}/${n}.jpg`,
      title: `${labels[o] ?? labels[orientation] ?? "Video"} ${counts[o]}`,
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
const CASH_COW_VIDEOS = numberedVideos(
  "cash-cow-youtube-videos",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  { landscape: "YouTube video", vertical: "Vertical YouTube video" },
  "landscape",
  { vertical: [2, 3] },
);

/** Projects pinned to the top of the /portfolio grid, in this order. */
export const FEATURED_SLUGS: readonly string[] = ["vip-talking-head-videos"];

export const CATEGORIES = ["Creative", "Design", "Video Editing", "Custom Platforms"] as const;
export type Category = (typeof CATEGORIES)[number];

export const SUBS: Record<Category, string[]> = {
  Creative: ["Social Media", "Branding", "Print & Merchandise"],
  Design: ["Websites", "E-Commerce", "Mobile Apps"],
  "Video Editing": ["Short Form", "Long Form", "Commercial"],
  "Custom Platforms": ["Web Apps", "Tools", "Automation"],
};

type RawItem = Omit<PortfolioItem, "category" | "subcategory" | "slug"> & { slug?: string };
type RawWork = Record<Category, Record<string, RawItem[]>>;

const RAW: RawWork = {
  Creative: {
    "Social Media": [
      {
        // Real case studies carry an explicit slug, so their titles can be
        // edited without changing the URL. The placeholder items further down
        // derive their slug from the title: renaming one changes its URL.
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
        slug: "book-cover-design-portfolio",
        title: "Book cover design",
        img: bookCoverAssets.covers[0],
        images: bookCoverAssets.covers,
      },
      {
        slug: "healthcare-meta-ad-creatives",
        title: "Healthcare Meta ad creatives",
        // The knee pain ad (8) is portrait, so it fills the 4:5 grid card.
        img: "/portfolio/healthcare-meta-ad-creatives/8.webp",
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
      {
        title: "Cafe seasonal creatives",
        img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Fashion editorial reels",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
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
      {
        title: "Coffee house identity",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Logo & brand system",
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Studio rebrand",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Restaurant brand guide",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Startup visual identity",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Wellness brand mark",
        img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    "Print & Merchandise": [
      {
        title: "Business card set",
        img: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Packaging mockups",
        img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Merchandise tees",
        img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Brand stationery kit",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Menu & signage",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Tote bag prints",
        img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
  },
  Design: {
    Websites: [
      {
        title: "SaaS marketing site",
        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Agency portfolio",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Landing page series",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Coaching brand site",
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Studio one-pager",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Real estate listings",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    "E-Commerce": [
      {
        title: "Fashion storefront",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Skincare shop",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Electronics marketplace",
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Food delivery store",
        img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Furniture catalog",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Jewelry boutique",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    "Mobile Apps": [
      {
        title: "Fitness tracker app",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Food delivery app",
        img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Banking app redesign",
        img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Meditation app",
        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Travel companion",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Habit tracker",
        img: "https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
  },
  "Video Editing": {
    "Short Form": [
      {
        slug: "vip-talking-head-videos",
        title: "Talking-head videos for founders and personal brands",
        img: TALKING_HEAD_VIDEOS[0]!.poster,
        videos: TALKING_HEAD_VIDEOS,
      },
      {
        title: "Brand reel series",
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&auto=format&fit=crop&fm=webp&q=75",
        video: "https://drive.google.com/file/d/1T0J1ANuSTaboPx3Jinx42P8yP3XEyDAb/preview",
      },
      {
        title: "Product teaser shorts",
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Behind the scenes cuts",
        img: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Founder story reels",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Event highlights",
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Recipe shorts",
        img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    "Long Form": [
      {
        slug: "cash-cow-youtube-videos",
        title: "Faceless YouTube videos for cash cow channels",
        img: CASH_COW_VIDEOS[0]!.poster,
        videos: CASH_COW_VIDEOS,
      },
      {
        title: "Documentary edit",
        img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Podcast video edit",
        img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Tutorial series",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Vlog cuts",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Interview episodes",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Webinar recordings",
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    Commercial: [
      {
        slug: "ugc-video-ads",
        title: "UGC video ads",
        img: UGC_VIDEO_ADS[0]!.poster,
        videos: UGC_VIDEO_ADS,
      },
      {
        title: "Facebook video ads",
        img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "TikTok ad series",
        img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "YouTube pre-roll",
        img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Testimonial ad cuts",
        img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "App promo videos",
        img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Explainer animations",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
  },
  "Custom Platforms": {
    "Web Apps": [
      {
        title: "Client dashboard",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Booking platform",
        img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Analytics portal",
        img: "https://images.unsplash.com/photo-1551288049-4b39c6b5d9f6?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Membership portal",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "CRM workspace",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Design system",
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    Tools: [
      {
        title: "Internal workflow tool",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Invoice generator",
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Content calendar",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Lead tracker",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Report builder",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Review collector",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
    Automation: [
      {
        title: "Email automation",
        img: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "CRM automation",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Zapier integrations",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "AI chatbot setup",
        img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Webhook pipelines",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
      {
        title: "Data sync engine",
        img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&auto=format&fit=crop&fm=webp&q=75",
      },
    ],
  },
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
      Object.entries(RAW[cat]).map(([sub, arr]) => [
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
export type CategorySlug = "creative" | "design" | "video-editing" | "custom-platforms";

export function categorySlug(category: Category): CategorySlug {
  return slugify(category) as CategorySlug;
}

/** Accepts "video-editing", "Video Editing" or "video editing"; undefined otherwise. */
export function categoryFromSlug(value: unknown): Category | undefined {
  if (typeof value !== "string" || !value) return undefined;
  const wanted = slugify(value);
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
