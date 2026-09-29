import { bookCoverAssets } from "@/assets/book-cover-assets";
import { getItemBySlug, warnOnUnknownSlugs, type PortfolioItem } from "@/lib/portfolio-data";

/**
 * How many pieces a collection shows, read from its data, so the copy stays
 * right when a numbered file is removed from the list.
 */
function pieces(slug: string, noun: string): string {
  const item = getItemBySlug(slug);
  const n = item?.videos?.length ?? item?.images?.length ?? 0;
  return `${n} ${noun}`;
}

/**
 * Per-project narrative copy for portfolio detail pages.
 *
 * Real client work has hand-written copy in COPY_OVERRIDES. Placeholder
 * projects get text picked deterministically from subcategory banks using a
 * hash of the slug, so the wording stays stable between builds.
 */

export type ProjectCopy = {
  /** One-line summary used under the H1. */
  summary: string;
  /** ~40 word intro paragraph. */
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Three short result or scope statements. */
  results: { label: string; value: string }[];
  /** What we handed over. Falls back to the subcategory list when omitted. */
  deliverables?: string[];
  /** Unique <meta name="description"> for this project. */
  metaDescription: string;
  /** Optional hand-written <title> for this project. */
  metaTitle?: string;
};

/** FNV-1a hash of a slug. Shared by the copy and detail generators. */
export function slugHash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Stable pick from a bank: the same seed and offset always give the same entry. */
export function pickFromBank<T>(arr: readonly T[], seed: number, offset = 0): T {
  return arr[(seed + offset * 7919) % arr.length]!;
}

/**
 * Hand-written copy for real client projects. Keep claims to what we actually
 * delivered; add numbers only when the client has agreed to share them.
 */
const COPY_OVERRIDES: Record<string, ProjectCopy> = {
  "madluvv-social-media-meta-ads": {
    metaTitle: "MADLUVV social media, Meta ads and Shopify work | Pixel2Tech",
    metaDescription:
      "How Pixel2Tech ran social media and Meta ad creative for MADLUVV, the brand behind the Brow Stamp Kit, and improved its Shopify product pages, schema and mobile speed.",
    summary: "Social media, Meta ad creative and Shopify improvements for a brow and beauty brand.",
    overview:
      "MADLUVV sells brow and beauty products, including its Brow Stamp Kit. We ran their social media on Instagram, Facebook, TikTok and LinkedIn, produced the creative for their Meta ads, and worked on their Shopify store.",
    challenge:
      "MADLUVV's organic posts and paid ads looked like they came from two different brands, and the Shopify store was slow on mobile and hard to find in search. They wanted one team to handle the creative and the store together.",
    approach:
      "We set one visual style for every reel, story and ad, so the brand looks the same on each platform. For Meta ads we leaned on problem-and-solution video: creator-style hooks, close-up brow application clips and short product demos. On Shopify we reorganized the product page layout, added product schema markup and cleaned up front-end code to speed up mobile pages.",
    outcome:
      "MADLUVV now has a steady flow of on-brand content: daily organic posts and weekly batches of paid ad creative, all in one visual style, with the store work sitting underneath the campaigns.",
    results: [
      { label: "Posting rhythm", value: "Daily organic, weekly ad batches" },
      { label: "Channels", value: "Instagram, Facebook, TikTok, LinkedIn" },
      { label: "Store work", value: "Product schema and mobile speed" },
    ],
    deliverables: [
      "Organic social content",
      "Meta ad creative",
      "Short-form video",
      "Shopify product page and speed work",
    ],
  },
  "affinity-law-social-media-ad-creatives": {
    metaTitle: "Affinity Law social media and ad creatives | Pixel2Tech",
    metaDescription:
      "Social media management and campaign creative for Affinity Law, a personal injury firm in Toronto and the GTA: posts, static ad creatives and creative support for Meta, AppLovin and Google Ads.",
    summary:
      "Social media management and ad creative for a Toronto and GTA personal injury law firm.",
    overview:
      "Affinity Law is a personal injury firm serving Toronto and the GTA. We managed their social media, designed posts and campaign visuals, made static ad creatives for Meta, AppLovin and Google Ads, and supported their video content.",
    challenge:
      "Personal injury is a crowded market, and people choose a lawyer they trust. Each creative had to say clearly what the firm does, feel professional rather than alarming, and work both as an organic post and as a paid ad.",
    approach:
      "We built on Affinity Law's existing gold-and-black brand: high-contrast layouts, strong headline type, relevant imagery and one call to action per creative. We wrote angles for car accidents, slip and fall, negligence, wrongful death, accident claims, free case reviews, no-upfront-fee messaging and local GTA service areas. Each one names the problem, gives a reason to trust the firm and asks for the next step.",
    outcome:
      "Affinity Law now has a more consistent social presence and a reusable library of campaign creatives covering several personal injury topics, with organic posts and paid ads in the same visual style.",
    results: [
      { label: "Work delivered", value: "Social management and campaign creative" },
      { label: "Ad platforms supported", value: "Meta, AppLovin, Google Ads" },
      { label: "Creative angles", value: "Accidents, negligence, claims, wrongful death" },
    ],
    deliverables: [
      "Social media management and content planning",
      "Campaign creatives",
      "Static ad creatives",
      "Video content support",
    ],
  },
  "nayyer-carpets-creative-direction-mockups": {
    metaTitle: "Nayyer Carpets creative direction and product visuals | Pixel2Tech",
    metaDescription:
      "Creative direction, social media creatives and realistic carpet mockups for Nayyer Carpets, used across their website and social channels.",
    summary: "Creative direction, social media creative and product visuals for a carpet brand.",
    overview:
      "We worked alongside Nayyer Carpets' in-house team as a creative partner. Our part covered social media creative and product visuals, including realistic carpet mockups that show each design in a furnished room. The mockups are used on their website and across their social channels.",
    challenge:
      "Nayyer Carpets needed to show their carpets in realistic rooms so customers could picture them at home. Flat product shots didn't do that, and the website and social posts needed one consistent look.",
    approach:
      "We built custom mockups that place each carpet design in a well-lit interior, then reused them on the website and in social posts so both channels share one look. Alongside the mockups we gave creative direction and design support on their social campaigns.",
    outcome:
      "Nayyer Carpets now has a library of product visuals it can use on the website, in social posts and in ads, all in one consistent style.",
    results: [
      { label: "Our role", value: "Creative direction and design support" },
      { label: "Key assets", value: "Carpet mockups and social creatives" },
      { label: "Used on", value: "Website and social channels" },
    ],
    deliverables: [
      "Carpet product mockups",
      "Social media creatives",
      "Meta ad creative support",
      "Website visual support",
    ],
  },
  "swishtag-social-media-management": {
    metaTitle: "Swishtag social media management | Pixel2Tech",
    metaDescription:
      "Social media management for Swishtag by Pixel2Tech: content planning, static graphics and short social videos.",
    summary: "Content planning, static graphics and video for Swishtag's social channels.",
    overview:
      "We managed Swishtag's social media, working closely with their team. That covered planning the content, designing the static graphics and producing short social videos.",
    challenge:
      "Swishtag's social feed didn't reflect the quality of the brand. Posts needed more planning, and the creative needed a higher, more consistent standard.",
    approach:
      "We set up a regular planning cycle and a design system for the static graphics, then added short videos that explain what the brand offers. We also handled video production and editing so every format met the same standard.",
    outcome:
      "Swishtag's feed now follows a plan and one visual style, with graphics and videos that read as a single brand.",
    results: [
      { label: "Service", value: "Social media management" },
      { label: "Content types", value: "Static graphics and short videos" },
      { label: "Planning", value: "Weekly content calendar" },
    ],
    deliverables: [
      "Content planning",
      "Static social graphics",
      "Social video production and editing",
      "Posting and channel management",
    ],
  },
  "book-cover-design-portfolio": {
    metaTitle: "Book cover design portfolio | Pixel2Tech",
    metaDescription:
      "Book covers by Pixel2Tech for finance, business and self-help titles, including How to Start Your Own Private Bank, Wealth Without Wall Street, Inflation Nation and Tax Sale Secrets.",
    summary:
      "Cover art, typography and realistic mockups for finance, business and self-help books.",
    overview:
      "We designed covers for a range of finance, business and self-help books. Each cover pairs clear typography with one symbolic image, and the set shares a consistent finish while every title keeps its own identity.",
    challenge:
      "Each cover had to get a money or self-improvement idea across in a single image. It had to look credible to serious readers, appeal to a broad audience, and stay readable as a small Amazon thumbnail as well as on a shelf.",
    approach:
      "We paired bold, high-contrast type with one symbolic image per book, such as a chrome vault for How to Start Your Own Private Bank and a city silhouette for Wealth Without Wall Street. Colors were chosen per title to signal trust, curiosity or stability, depending on who the book is for.",
    outcome:
      "The authors got a consistent set of covers, shown as realistic hardcover and paperback mockups they can use in their marketing.",
    results: [
      { label: "Design work", value: "Cover art and typography" },
      {
        label: "Covers shown",
        value: `${bookCoverAssets.covers.length} designs, including alternates`,
      },
      { label: "Mockup formats", value: "Hardcover, paperback and e-book" },
    ],
    deliverables: [
      "Front cover artwork",
      "Title and author typography",
      "Alternate cover versions",
      "Hardcover, paperback and e-book mockups",
    ],
  },

  /*
   * Design and video collections. These are not named case studies: no client
   * names, no results we can't show. Counts come from the data via pieces().
   */
  "healthcare-meta-ad-creatives": {
    metaTitle: "Healthcare Meta ad creatives for clinics | Pixel2Tech",
    metaDescription:
      "Static Meta ad designs for clinics and hospitals: knee, foot and nerve pain, ENT, hearing, heart health, dental and supplements, easy to read on a phone.",
    summary: "Static Meta ad designs for clinics, hospitals and health brands.",
    overview:
      "A set of static ad designs for clinics, hospitals and health brands, made for Meta, Instagram and Facebook. They cover foot and ankle pain, knee pain, nerve pain, ENT, heart health, a hearing day event, dental care and supplements, as both offer ads and patient awareness posts.",
    challenge:
      "A patient scrolling past a health ad gives it a second or two. In that time the ad has to name the problem, show who can help and say what to do next, without sounding alarming or promising more than a clinic can deliver. Meta also reviews health ads closely, so every line has to stay factual.",
    approach:
      "Each design leads with the condition or the question a patient is already asking, such as whether knee pain can be treated without surgery. Below that sits one short supporting point and one call to action: call, book or visit. We used clean medical imagery, a strict type hierarchy and each clinic's own colors, and kept the text short enough to read on a phone.",
    outcome:
      "The set shows how we handle patient-facing creative for regulated categories: clear, calm designs across several treatment areas, each with a single next step.",
    results: [
      {
        label: "In this set",
        value: pieces("healthcare-meta-ad-creatives", "static ad designs"),
      },
      { label: "Treatment areas", value: "Pain, ENT, hearing, heart, dental, supplements" },
      { label: "Made for", value: "Meta, Instagram and Facebook feeds" },
    ],
    deliverables: [
      "Static Meta ad designs",
      "Patient awareness posts",
      "Square and 4:5 feed sizes",
      "Each clinic's colors and logo applied",
    ],
  },
  "food-and-drink-social-media-creatives": {
    metaTitle: "Food and drink social media creatives | Pixel2Tech",
    metaDescription:
      "Social media posts for cafes, juice bars, coffee brands, bakeries and restaurants: best sellers, menu items and offers, made for Instagram and Facebook.",
    summary: "Social posts for cafes, juice bars, coffee brands, bakeries and restaurants.",
    overview:
      "Social media posts for food and drink businesses: cafes, juice and smoothie brands, coffee brands, bakeries and restaurants. The set covers best sellers, menu items, new products and offers, made for Instagram and Facebook feeds.",
    challenge:
      "Food sells on appetite, and every feed is full of it. Each post had to make the product look worth ordering at thumbnail size, carry the brand's own look, and fit a menu or offer message without covering the food.",
    approach:
      "We let the product do most of the work: bold crops, warm light and one clear focal point, with type kept to a headline and a short supporting line. Names, prices and calls to action sit in a consistent place, so followers learn where to look. Each brand kept its own palette and fonts.",
    outcome:
      "The set shows how we keep food and drink posts on-brand across very different businesses, from a juice bar to a sit-down restaurant.",
    results: [
      {
        label: "In this set",
        value: pieces("food-and-drink-social-media-creatives", "social media designs"),
      },
      { label: "Business types", value: "Cafes, juice, coffee, bakery, restaurants" },
      { label: "Made for", value: "Instagram and Facebook feeds" },
    ],
    deliverables: [
      "Product and best-seller posts",
      "Menu and offer posts",
      "Portrait and square feed sizes",
      "Each brand's colors and type applied",
    ],
  },
  "skin-care-social-media-creatives": {
    metaTitle: "Skin care social media creatives | Pixel2Tech",
    metaDescription:
      "Social media posts for skin care brands: product launches, step-by-step routine guides and bold product hero shots, made for Instagram and Meta ads.",
    summary: "Product launch, routine and product hero posts for skin care brands.",
    overview:
      "Social media designs for skin care brands, made for Instagram, Facebook and Meta ad placements. The set includes product launch posts, step-by-step routine guides and product hero shots, such as sunscreen shown in a lifestyle scene.",
    challenge:
      "Skin care buyers compare products closely and distrust hype. A post has to show the product clearly, explain what it does in plain words, and still stop the scroll in a category where most feeds look the same.",
    approach:
      "We gave every post one job: launch a product, explain a routine, or show one product up close. Product shots sit large and sharp, with a short headline and a few labels rather than paragraphs. Routine posts use arrows and callouts so the steps read at a glance. Colors follow each brand, with lifestyle scenes where they help the product feel real.",
    outcome:
      "The set shows a range of skin care formats, from bold launch posts to calm routine guides, that a brand can mix into one consistent feed.",
    results: [
      {
        label: "In this set",
        value: pieces("skin-care-social-media-creatives", "social media designs"),
      },
      { label: "Post types", value: "Launches, routines, product heroes" },
      { label: "Made for", value: "Instagram, Facebook and Meta ads" },
    ],
    deliverables: [
      "Product launch posts",
      "Routine and how-to guides",
      "Product hero posts",
      "Portrait feed sizes",
    ],
  },
  "social-media-and-ad-creative-collection": {
    metaTitle: "Social media and ad creative collection | Pixel2Tech",
    metaDescription:
      "A wide collection of social media posts and ad creatives for beauty, skin care, fashion, apparel and lifestyle brands, made for Meta, Instagram and TikTok.",
    summary: "Social posts and ad creatives for beauty, fashion and lifestyle brands.",
    overview:
      "A broad collection of social media posts and static ad creatives across many industries, including beauty and skin care, fashion and apparel, and fitness and lifestyle brands. The designs were made for Meta, Instagram, Facebook and TikTok.",
    challenge:
      "Every industry has its own visual habits, and every brand has its own rules. The work had to fit each brand's identity and each platform's format, while still giving the viewer a reason to stop.",
    approach:
      "We start each piece from the brand's existing look and one message: a product, an offer, a review or a tip. From there we choose the format that carries it best, whether a bold headline over a product shot, a review card layout or a simple educational post, and size it for the feed it runs in.",
    outcome:
      "The collection gives a quick read on our range: many industries and formats, each one kept to its brand's style.",
    results: [
      {
        label: "In this set",
        value: pieces("social-media-and-ad-creative-collection", "posts and ad creatives"),
      },
      { label: "Industries", value: "Beauty, fashion, fitness, lifestyle" },
      { label: "Made for", value: "Meta, Instagram, Facebook and TikTok" },
    ],
    deliverables: [
      "Social media posts",
      "Static ad creatives",
      "Offer and product layouts",
      "Portrait, square and story sizes",
    ],
  },
  "brand-identity-design-collection": {
    metaTitle: "Brand identity design collection | Pixel2Tech",
    metaDescription:
      "Brand identity boards for food, coffee, retail, tech and agency brands: logos, color palettes, typography, and merchandise and packaging mockups.",
    summary: "Logos, palettes, type and mockups for food, coffee, retail, tech and agency brands.",
    overview:
      "A collection of brand identity boards for food, coffee, retail, tech and agency brands. Each board presents a logo with its color palette and typefaces, then shows the identity applied to real items: cups, bags, packaging, business cards, apparel and signage.",
    challenge:
      "A logo on a white page tells a founder very little. They need to see how the identity behaves on a cup, a box, a shirt and a phone screen before they commit to it, and the system has to stay recognizable on all of them.",
    approach:
      "We build each identity as a small system: a primary mark, a simple palette, one or two typefaces and a few rules for using them. Then we test it on the items the business will actually use, from takeaway cups to hard hats, and present the whole set on one board so the decision is easy to make.",
    outcome:
      "The collection shows identity systems for many kinds of business, each presented the way a founder needs to see it: the mark, the palette, the type and the brand in use.",
    results: [
      {
        label: "In this set",
        value: pieces("brand-identity-design-collection", "identity boards"),
      },
      { label: "Sectors", value: "Food, coffee, retail, tech, agencies" },
      { label: "Each board shows", value: "Logo, palette, type and mockups" },
    ],
    deliverables: [
      "Logo and wordmark",
      "Color palette",
      "Typography pairing",
      "Merchandise and packaging mockups",
    ],
  },
  "logo-design-folio": {
    metaTitle: "Logo design folio | Pixel2Tech",
    metaDescription:
      "A folio of logo designs by Pixel2Tech: wordmarks and combination marks for creative agencies, marketing firms and wellness brands, shown on brand colors.",
    summary: "Wordmarks and combination marks for agencies and wellness brands.",
    overview:
      "A short folio of logo designs: wordmarks and combination marks for creative agencies, marketing firms and wellness brands. Each logo is shown on its brand color.",
    challenge:
      "A logo has to work at every size, from a favicon to a sign, and in one color as well as full color. It also has to say something about the business without trying to say everything.",
    approach:
      "We sketch several directions, then narrow to the one that stays clear when it is small, flat and seen for a second. Letterforms are adjusted by hand, and a small symbol, such as a light bulb or a leaf, carries the idea so the name can stay simple.",
    outcome:
      "The folio shows a range of marks, each built to stay legible and recognizable at small sizes.",
    results: [
      { label: "In this folio", value: pieces("logo-design-folio", "logo designs") },
      { label: "Mark types", value: "Wordmarks and combination marks" },
      { label: "Shown on", value: "Each brand's own color" },
    ],
    deliverables: [
      "Logo concepts",
      "Final logo and wordmark",
      "One-color and full-color versions",
      "Presentation boards",
    ],
  },
  "vip-talking-head-videos": {
    metaTitle: "Talking-head video editing for founders | Pixel2Tech",
    metaDescription:
      "Vertical talking-head videos edited for founders, coaches and personal brands: tight cuts, on-screen text and motion graphics for Reels, TikTok and Shorts.",
    summary: "Vertical talking-head videos edited for founders, coaches and personal brands.",
    overview:
      "Vertical talking-head videos we edited for founders, coaches and personal brands. The speaker films to camera; we turn the raw take into a short video with a strong opening, tight cuts, on-screen text and motion graphics, made for Instagram Reels, TikTok and YouTube Shorts.",
    challenge:
      "A founder talking to camera is only as good as the edit. Raw takes have pauses, restarts and slow openings, and on a vertical feed the viewer decides in the first second or two whether to keep watching.",
    approach:
      "We cut each take down to the point, remove dead air and restarts, and move the strongest line to the opening. On-screen text and motion graphics carry the key ideas for people watching without sound, and pacing changes, zooms and b-roll keep a single-camera video moving.",
    outcome:
      "The result is a set of short, consistent videos that let a founder post regularly without editing themselves, in a style viewers can recognize.",
    results: [
      { label: "In this set", value: pieces("vip-talking-head-videos", "vertical videos") },
      { label: "Format", value: "9:16 talking head" },
      { label: "Made for", value: "Instagram Reels, TikTok, YouTube Shorts" },
    ],
    deliverables: [
      "Edited vertical videos",
      "Hook-first structure",
      "On-screen text and motion graphics",
      "9:16 exports",
    ],
  },
  "ugc-video-ads": {
    metaTitle: "UGC video ads for DTC brands | Pixel2Tech",
    metaDescription:
      "Vertical UGC-style video ads edited for DTC and e-commerce brands: creator footage, product close-ups and on-screen hooks for Meta, Instagram and TikTok.",
    summary: "Vertical UGC-style video ads for DTC and e-commerce brands.",
    overview:
      "Vertical video ads in the user-generated style, edited for DTC and e-commerce brands. They combine creator footage, product close-ups, on-screen text and motion graphics, and were made for Meta, Instagram and TikTok placements.",
    challenge:
      "UGC ads work because they feel native to the feed, not like a commercial. The edit has to keep that natural feel while still landing a clear hook, showing the product properly and ending on one call to action, all inside a few seconds of attention.",
    approach:
      "We open on the hook, a question, a problem or a surprising visual, before any branding. The product appears early and up close, on-screen text states the main benefit for sound-off viewers, and cuts follow the creator's delivery rather than a fixed template. Each ad ends with one clear next step.",
    outcome:
      "The set shows how we edit UGC-style ads that feel native to the feed while still selling one clear idea.",
    results: [
      { label: "In this set", value: pieces("ugc-video-ads", "vertical video ads") },
      { label: "Format", value: "9:16 UGC-style ads" },
      { label: "Made for", value: "Meta, Instagram and TikTok" },
    ],
    deliverables: [
      "Edited UGC video ads",
      "Hooks and on-screen text",
      "Product close-up sequences",
      "9:16 exports",
    ],
  },
  "cash-cow-youtube-videos": {
    metaTitle: "Faceless YouTube video editing | Pixel2Tech",
    metaDescription:
      "Faceless YouTube videos edited for cash cow channels: footage, animated text, sound design and pacing for 16:9 uploads, plus vertical cuts for Shorts.",
    summary: "Faceless YouTube videos edited for cash cow channels, plus vertical cuts.",
    overview:
      "Videos edited for faceless YouTube channels, often called cash cow channels, where no presenter appears on screen. Most are 16:9 uploads that pair narration with footage, animated text and sound effects, with a few vertical cuts for Shorts.",
    challenge:
      "Without a face on screen, the edit carries the whole video. Every few seconds the viewer needs something new to look at, and the visuals have to match the voiceover closely, or people click away.",
    approach:
      "We build the edit on the narration: each line gets matching footage, animated text or a graphic, with sound effects and music to set the pace. Key numbers and phrases appear as bold on-screen text. For vertical cuts, we reframe the strongest moment for Shorts.",
    outcome:
      "The set shows the kind of steady, fast-paced edits faceless channels need to publish on a regular schedule.",
    results: [
      { label: "In this set", value: pieces("cash-cow-youtube-videos", "videos") },
      { label: "Formats", value: "16:9 uploads and 9:16 Shorts" },
      { label: "Made for", value: "YouTube and YouTube Shorts" },
    ],
    deliverables: [
      "Edited faceless videos",
      "Footage and b-roll selection",
      "Animated text and sound design",
      "16:9 and 9:16 exports",
    ],
  },
};

warnOnUnknownSlugs("portfolio-copy", Object.keys(COPY_OVERRIDES));

type Bank = {
  discipline: string;
  challenges: string[];
  approaches: string[];
  outcomes: string[];
  metrics: { label: string; values: string[] }[];
};

const BANKS: Record<string, Bank> = {
  "Social Media": {
    discipline: "social media design",
    challenges: [
      "posts were being made one at a time with no shared visual language, so the feed read as six different brands",
      "engagement had flattened because every post competed for attention instead of building a recognizable rhythm",
      "the team was spending hours per post in a generic template tool and still shipping inconsistent work",
    ],
    approaches: [
      "We built a modular post system — a fixed grid, two type sizes and a locked color set — so any post slots into the feed and still looks intentional.",
      "We designed a set of repeatable layout archetypes for launches, quotes, offers and behind-the-scenes, then handed over editable source files.",
      "We mapped the content calendar first, then designed to it: each format has a defined purpose, so the grid reads as a sequence rather than a pile.",
    ],
    outcomes: [
      "The feed now scans as one brand at thumbnail size, and new posts take minutes rather than an afternoon.",
      "Content production moved in-house without the visual quality dropping, because the system does the design decisions.",
      "Saves and shares climbed once the grid became predictable enough for followers to recognize mid-scroll.",
    ],
    metrics: [
      { label: "Design time per post", values: ["−70%", "−65%", "−55%"] },
      { label: "Post formats delivered", values: ["12", "9", "15"] },
      { label: "Engagement lift", values: ["+38%", "+42%", "+27%"] },
    ],
  },
  Branding: {
    discipline: "brand identity design",
    challenges: [
      "the existing mark was drawn for print and fell apart at favicon size, which is where most people actually met the brand",
      "there was a logo but no system — no type scale, no color rules, no guidance — so every touchpoint drifted",
      "the identity was inherited from a previous positioning and no longer matched what the business actually sold",
    ],
    approaches: [
      "We started from positioning, not aesthetics: what the business promises, who it competes with, and what it should feel like — then drew toward that.",
      "We built the identity outward from the smallest use case, so the mark survives a 16px favicon before it ever gets a billboard treatment.",
      "We developed three distinct directions, pressure-tested each against real applications, and refined the one that held up under the most conditions.",
    ],
    outcomes: [
      "The brand now has a documented system — mark, palette, type scale and spacing — that anyone on the team can apply without asking.",
      "Every new asset lands on-brand by default, which removed the review bottleneck that used to sit on the founder.",
      "The identity holds from a business card to a trade-show wall without a redraw.",
    ],
    metrics: [
      { label: "Identity assets delivered", values: ["24", "31", "18"] },
      { label: "Brand guideline pages", values: ["28", "34", "22"] },
      { label: "Turnaround", values: ["5 weeks", "6 weeks", "4 weeks"] },
    ],
  },
  "Print & Merchandise": {
    discipline: "print and merchandise design",
    challenges: [
      "artwork kept coming back from the printer with color shifts because nothing was ever set up in CMYK with proper bleed",
      "each print run was designed from scratch, so the physical touchpoints never matched the digital ones",
      "merchandise had been treated as an afterthought and read as a giveaway rather than part of the brand",
    ],
    approaches: [
      "We produced print-ready artwork with correct bleed, trim and color profiles, plus a spec sheet the printer can work from directly.",
      "We designed the physical pieces against the same grid and type scale as the digital brand, so both read as one system.",
      "We prototyped on the actual stock and substrate before signing off, because material changes how a design reads.",
    ],
    outcomes: [
      "Print runs now go straight through without proofing rounds, which cut both cost and lead time.",
      "The physical and digital sides of the brand finally look like they came from the same place.",
      "Merchandise became something people actually keep and wear rather than bin at the door.",
    ],
    metrics: [
      { label: "Print-ready files", values: ["16", "22", "11"] },
      { label: "Proofing rounds", values: ["1", "2", "1"] },
      { label: "Production lead time", values: ["−40%", "−30%", "−50%"] },
    ],
  },
  Websites: {
    discipline: "website design and development",
    challenges: [
      "the old site loaded in over six seconds on mobile, and most visitors left before the hero image finished painting",
      "the site described what the company did but never told a visitor what to do next, so traffic converted at almost nothing",
      "content updates required a developer, which meant the site went stale between releases",
    ],
    approaches: [
      "We rebuilt on a modern stack with server-rendered pages, compressed responsive imagery and a critical CSS path, targeting good Core Web Vitals on mid-range mobile.",
      "We restructured the page hierarchy around visitor intent — one primary action per page — and wrote the layout to support that action rather than bury it.",
      "We designed mobile-first at 375px, then scaled up, because that is where the majority of the traffic actually arrives.",
    ],
    outcomes: [
      "Largest Contentful Paint dropped under 2.5 seconds on mobile, and the bounce rate followed it down.",
      "Enquiries through the site increased because the path from landing to contact is now three clicks at most.",
      "The team can publish new pages without touching code, so the site stays current.",
    ],
    metrics: [
      { label: "LCP (mobile)", values: ["1.9s", "2.1s", "1.6s"] },
      { label: "Lighthouse performance", values: ["96", "94", "98"] },
      { label: "Conversion lift", values: ["+52%", "+41%", "+63%"] },
    ],
  },
  "E-Commerce": {
    discipline: "e-commerce design and build",
    challenges: [
      "the checkout ran to five steps and abandonment sat well above the category average",
      "product pages showed a photo and a price but answered none of the questions that actually block a purchase",
      "the catalog had grown past what the navigation could handle, so customers could not find what they came for",
    ],
    approaches: [
      "We collapsed the checkout into a single reviewable step with guest purchase, inline validation and saved payment details.",
      "We rebuilt the product template around objection handling — sizing, materials, shipping and returns visible without a click.",
      "We restructured the taxonomy and added faceted filtering so the catalog is navigable at any size.",
    ],
    outcomes: [
      "Cart abandonment fell sharply once the checkout stopped asking for things it did not need.",
      "Average order value rose because related products are now surfaced at the right moment rather than at the end.",
      "Mobile became the higher-converting device for the first time.",
    ],
    metrics: [
      { label: "Cart abandonment", values: ["−34%", "−28%", "−41%"] },
      { label: "Average order value", values: ["+19%", "+24%", "+15%"] },
      { label: "Checkout steps", values: ["5 → 1", "4 → 1", "5 → 2"] },
    ],
  },
  "Mobile Apps": {
    discipline: "mobile app UI/UX design",
    challenges: [
      "the core action was buried three screens deep, so most users never reached it in their first session",
      "the app had grown feature by feature with no interaction model, and each screen behaved slightly differently",
      "onboarding asked for everything up front and lost a large share of users before the first useful moment",
    ],
    approaches: [
      "We mapped the primary job the user opens the app to do, then rebuilt the navigation so that job is one tap from launch.",
      "We defined a component library — buttons, sheets, states, empty states — so every screen behaves the same way.",
      "We deferred every non-essential onboarding question until after the user has seen value once.",
    ],
    outcomes: [
      "Time-to-first-action dropped to seconds, and first-session completion rose with it.",
      "The design system cut build time for new screens because engineering assembles rather than invents.",
      "Store ratings improved once the interaction model stopped surprising people.",
    ],
    metrics: [
      { label: "Screens designed", values: ["42", "36", "58"] },
      { label: "Time to first action", values: ["−61%", "−48%", "−55%"] },
      { label: "Onboarding completion", values: ["+37%", "+44%", "+29%"] },
    ],
  },
  "Short Form": {
    discipline: "short-form video editing",
    challenges: [
      "footage was strong but the first two seconds gave viewers no reason to stay, so retention collapsed immediately",
      "each clip was cut differently, so the channel had no recognizable editing signature",
      "captions were auto-generated and often wrong, which hurt both accessibility and silent-autoplay watch time",
    ],
    approaches: [
      "We restructured every cut around the opening frame — the hook lands before the title card, not after it.",
      "We built a repeatable edit template: pacing, caption style, transition set and sound design, applied consistently across the batch.",
      "We hand-corrected captions and burned them in at a size that reads on a phone held at arm's length.",
    ],
    outcomes: [
      "Average watch time rose because viewers now get the payoff before they decide to swipe.",
      "The channel reads as one series rather than a collection of unrelated uploads.",
      "Editing throughput went up once the template removed per-clip decisions.",
    ],
    metrics: [
      { label: "Clips delivered", values: ["24", "18", "36"] },
      { label: "Average watch time", values: ["+46%", "+58%", "+33%"] },
      { label: "3-second retention", values: ["+29%", "+37%", "+22%"] },
    ],
  },
  "Long Form": {
    discipline: "long-form video editing",
    challenges: [
      "the raw cut ran long and lost the audience in the middle third, where nothing was structurally happening",
      "audio levels drifted between takes and locations, which reads as low production value even when the content is good",
      "there was no visual variety — one camera, one framing — for the whole runtime",
    ],
    approaches: [
      "We restructured the edit into clear chapters with a stated payoff for each, so the viewer always knows why they are still watching.",
      "We ran a full audio pass — leveling, noise reduction, music bed ducking — before touching the picture edit.",
      "We layered in B-roll, motion graphics and on-screen text to carry the sections where the talking head alone was not enough.",
    ],
    outcomes: [
      "Mid-video drop-off flattened once each chapter earned the next one.",
      "The finished pieces hold up as evergreen assets rather than one-week uploads.",
      "Audio quality now matches the visual quality, which raised the perceived production value across the channel.",
    ],
    metrics: [
      { label: "Runtime delivered", values: ["48 min", "72 min", "35 min"] },
      { label: "Mid-roll retention", values: ["+31%", "+26%", "+39%"] },
      { label: "Turnaround per episode", values: ["4 days", "3 days", "5 days"] },
    ],
  },
  Commercial: {
    discipline: "commercial video production",
    challenges: [
      "the brief needed one film to work as a 60-second hero, a 30-second cutdown and a set of 6-second bumpers",
      "previous ads led with the product and lost the viewer before the value was ever stated",
      "the footage had to carry across broadcast, paid social and in-store screens with very different aspect ratios",
    ],
    approaches: [
      "We planned the edit as a hierarchy — hero first, then cutdowns derived from it — so every version shares the same core beat.",
      "We opened on the problem the customer recognizes and introduced the product only once the stakes were clear.",
      "We framed and graded for multiple deliverable ratios from the start rather than cropping after the fact.",
    ],
    outcomes: [
      "One shoot produced a full campaign set instead of a single asset.",
      "Paid performance improved because the shorter cuts kept the hook intact.",
      "The brand now has a reusable visual grammar for future commercial work.",
    ],
    metrics: [
      { label: "Deliverable versions", values: ["9", "12", "7"] },
      { label: "Aspect ratios", values: ["16:9 · 9:16 · 1:1", "16:9 · 9:16 · 4:5", "16:9 · 9:16"] },
      { label: "Cost per completed view", values: ["−35%", "−42%", "−27%"] },
    ],
  },
  "Web Apps": {
    discipline: "custom web application development",
    challenges: [
      "the business was running on a set of linked spreadsheets that broke every time two people edited at once",
      "off-the-shelf software covered about seventy percent of the workflow, and the remaining thirty percent was manual",
      "reporting took a full day each month because the data lived in four disconnected places",
    ],
    approaches: [
      "We modeled the real workflow first, then built exactly that — roles, permissions and states matching how the team already works.",
      "We built on a typed stack with row-level security, so access rules live in the database rather than in application code.",
      "We shipped a working core in weeks and expanded from real usage rather than a speculative feature list.",
    ],
    outcomes: [
      "The manual reporting step disappeared entirely — the numbers are live.",
      "The team stopped maintaining parallel spreadsheets, which removed a whole class of data errors.",
      "The platform now scales with headcount instead of breaking at each new hire.",
    ],
    metrics: [
      { label: "Manual hours saved / month", values: ["60+", "80+", "45+"] },
      { label: "Systems consolidated", values: ["4 → 1", "5 → 1", "3 → 1"] },
      { label: "Time to first release", values: ["6 weeks", "8 weeks", "5 weeks"] },
    ],
  },
  Tools: {
    discipline: "internal tooling",
    challenges: [
      "an important daily task depended on one person who knew which spreadsheet tabs to touch in which order",
      "the team was copying data between systems by hand, and the copy step was where most errors entered",
      "there was no audit trail, so when a number looked wrong nobody could tell when or why it changed",
    ],
    approaches: [
      "We turned the undocumented process into a single-purpose tool with validation at the point of entry.",
      "We connected the systems directly so the data moves once, automatically, with a record of each transfer.",
      "We added change history and role-based access so every edit is attributable.",
    ],
    outcomes: [
      "The process stopped depending on one person's memory.",
      "Error rates fell because the tool refuses invalid input rather than accepting it silently.",
      "Onboarding a new team member on this task now takes minutes.",
    ],
    metrics: [
      { label: "Task time", values: ["−78%", "−65%", "−84%"] },
      { label: "Data entry errors", values: ["−90%", "−82%", "−95%"] },
      { label: "Users onboarded", values: ["14", "22", "8"] },
    ],
  },
  Automation: {
    discipline: "workflow automation",
    challenges: [
      "leads arrived through four channels and were being copied into the CRM by hand, sometimes days late",
      "routine follow-ups depended on someone remembering, so a measurable share simply never went out",
      "the same document was being generated manually for every client, with the same fields retyped each time",
    ],
    approaches: [
      "We mapped every step of the existing process and automated only the deterministic ones, leaving judgement calls with people.",
      "We built the automation with explicit failure handling and alerting, so a silent break surfaces immediately.",
      "We instrumented the workflow so the time saved is measurable rather than assumed.",
    ],
    outcomes: [
      "Response time to a new lead dropped from days to minutes.",
      "The follow-up sequence now runs whether or not anyone remembers it.",
      "Staff time moved from data shuffling to work that actually needs a human.",
    ],
    metrics: [
      { label: "Hours automated / month", values: ["90+", "120+", "55+"] },
      {
        label: "Lead response time",
        values: ["2 days → 4 min", "1 day → 2 min", "3 days → 10 min"],
      },
      { label: "Steps removed", values: ["17", "23", "11"] },
    ],
  },
};

const FALLBACK: Bank = BANKS["Websites"]!;

export function getProjectCopy(item: PortfolioItem): ProjectCopy {
  const override = COPY_OVERRIDES[item.slug];
  if (override) return override;
  const bank = BANKS[item.subcategory] ?? FALLBACK;
  const seed = slugHash(item.slug);
  const title = item.title;

  const challenge = pickFromBank(bank.challenges, seed, 1);
  const approach = pickFromBank(bank.approaches, seed, 2);
  const outcome = pickFromBank(bank.outcomes, seed, 3);

  const results = bank.metrics.map((m, i) => ({
    label: m.label,
    value: pickFromBank(m.values, seed, 4 + i),
  }));

  const summary = `A ${bank.discipline} project in our ${item.category.toLowerCase()} practice.`;

  const overview =
    `${title} is a ${bank.discipline} project from the Pixel2Tech ${item.subcategory.toLowerCase()} ` +
    `practice. We were brought in because ${challenge}. This page walks through the problem we were ` +
    `handed, how we approached it, and what changed as a result.`;

  const metaDescription =
    `${title} — a Pixel2Tech ${bank.discipline} case study. ${approach.split(". ")[0]}.`.slice(
      0,
      158,
    );

  return {
    summary,
    overview,
    challenge: `When the project started, ${challenge}.`,
    approach,
    outcome,
    results,
    metaDescription,
  };
}
