export type PortfolioItem = {
  title: string;
  img: string;
  category: string;
  subcategory: string;
  slug: string;
  /** Optional embeddable video URL (e.g. Google Drive /preview link) */
  videoUrl?: string;
};

export const CATEGORIES = ["Creative", "Design", "Video Editing", "Custom Platforms"] as const;
export type Category = typeof CATEGORIES[number];

export const SUBS: Record<Category, string[]> = {
  Creative: ["Social Media", "Branding", "Print & Merchandise"],
  Design: ["Websites", "E-Commerce", "Mobile Apps"],
  "Video Editing": ["Short Form", "Long Form", "Commercial"],
  "Custom Platforms": ["Web Apps", "Tools", "Automation"],
};

type RawWork = Record<Category, Record<string, { title: string; img: string }[]>>;

const RAW: RawWork = {
  Creative: {
    "Social Media": [
      { title: "Product launch campaign", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Bakery brand posts", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Instagram grid design", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Skincare content series", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Cafe seasonal creatives", img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Fashion editorial reels", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    Branding: [
      { title: "Coffee house identity", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Logo & brand system", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Studio rebrand", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Restaurant brand guide", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Startup visual identity", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Wellness brand mark", img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    "Print & Merchandise": [
      { title: "Business card set", img: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Packaging mockups", img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Merchandise tees", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Brand stationery kit", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Menu & signage", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Tote bag prints", img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
  },
  Design: {
    Websites: [
      { title: "SaaS marketing site", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Agency portfolio", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Landing page series", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Coaching brand site", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Studio one-pager", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Real estate listings", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    "E-Commerce": [
      { title: "Fashion storefront", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Skincare shop", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Electronics marketplace", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Food delivery store", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Furniture catalog", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Jewelry boutique", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    "Mobile Apps": [
      { title: "Fitness tracker app", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Food delivery app", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Banking app redesign", img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Meditation app", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Travel companion", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Habit tracker", img: "https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
  },
  "Video Editing": {
    "Short Form": [
      { title: "Brand reel series", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Product teaser shorts", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Behind the scenes cuts", img: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Founder story reels", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Event highlights", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Recipe shorts", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    "Long Form": [
      { title: "Documentary edit", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Podcast video edit", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Tutorial series", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Vlog cuts", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Interview episodes", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Webinar recordings", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    Commercial: [
      { title: "Facebook video ads", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "TikTok ad series", img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "YouTube pre-roll", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Testimonial ad cuts", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "App promo videos", img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Explainer animations", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
  },
  "Custom Platforms": {
    "Web Apps": [
      { title: "Client dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Booking platform", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Analytics portal", img: "https://images.unsplash.com/photo-1551288049-4b39c6b5d9f6?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Membership portal", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "CRM workspace", img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Design system", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    Tools: [
      { title: "Internal workflow tool", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Invoice generator", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Content calendar", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Lead tracker", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Report builder", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Review collector", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&fm=webp&q=75" },
    ],
    Automation: [
      { title: "Email automation", img: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "CRM automation", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Zapier integrations", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "AI chatbot setup", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Webhook pipelines", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&auto=format&fit=crop&fm=webp&q=75" },
      { title: "Data sync engine", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&auto=format&fit=crop&fm=webp&q=75" },
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
          slug: slugify(`${cat}-${sub}-${w.title}`),
        })),
      ])
    ),
  ])
) as Record<Category, Record<string, PortfolioItem[]>>;

export const ALL_ITEMS: PortfolioItem[] = (Object.keys(WORK) as Category[]).flatMap((cat) =>
  Object.keys(WORK[cat]).flatMap((sub) => WORK[cat][sub])
);

export function getItemBySlug(slug: string): PortfolioItem | undefined {
  return ALL_ITEMS.find((i) => i.slug === slug);
}

export function getRelated(item: PortfolioItem, limit = 3): PortfolioItem[] {
  return ALL_ITEMS.filter(
    (i) => i.slug !== item.slug && i.category === item.category
  ).slice(0, limit);
}

// Sibling images from the SAME subcategory — used to build a category-tailored gallery.
export function getSubcategoryGallery(item: PortfolioItem, limit = 6): string[] {
  const siblings = (WORK[item.category as Category]?.[item.subcategory] ?? [])
    .filter((i) => i.slug !== item.slug)
    .map((i) => i.img);
  return siblings.slice(0, limit);
}

// Deterministic gallery: pick 3 sibling images for variety
export function getGallery(item: PortfolioItem): string[] {
  const siblings = ALL_ITEMS.filter((i) => i.slug !== item.slug).map((i) => i.img);
  const start = Math.abs([...item.slug].reduce((a, c) => a + c.charCodeAt(0), 0)) % Math.max(1, siblings.length - 3);
  return siblings.slice(start, start + 3);
}

// Derive a friendly "brand" name from the project title (first 1-2 words).
export function getBrandName(item: PortfolioItem): string {
  const words = item.title.split(" ").filter(Boolean);
  const base = words.slice(0, 2).join(" ");
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Deliverables shown per subcategory on the detail page.
export function getDeliverables(item: PortfolioItem): string[] {
  const map: Record<string, string[]> = {
    "Social Media": ["Content strategy", "Post design system", "Reels & carousels", "Monthly calendar"],
    Branding: ["Logo & wordmark", "Color palette", "Typography system", "Brand guidelines"],
    "Print & Merchandise": ["Print-ready artwork", "Packaging mockups", "Merch design", "Vendor handoff"],
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

