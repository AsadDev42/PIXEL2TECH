import aiAutomationOperationsNewCover from "@/assets/ai-automation-operations-new-cover.jpg.asset.json";
import aiDesignSystemsHero from "@/assets/ai-design-systems-hero.jpg.asset.json";
import contextualAdvertisingCoverUploaded from "@/assets/contextual-advertising-cover-uploaded.jpg.asset.json";
import googlePakistanOfficeInauguration from "@/assets/google-pakistan-office-inauguration.png.asset.json";
import mobileAppDesignProcessCover from "@/assets/mobile-app-design-process-cover.jpg";
import outtricksComparisonOpt from "@/assets/outtricks-comparison-opt.jpg.asset.json";
import shopifyIssuesBlogHero from "@/assets/shopify-issues-blog-hero.jpg.asset.json";
import topMarketingAgenciesPakistanV2 from "@/assets/top-marketing-agencies-pakistan-v2.jpg.asset.json";
import top7SeoAgenciesPakistanV2 from "@/assets/top-7-seo-agencies-pakistan-v2.jpg.asset.json";
import verifiedWholesaleSourcingCover from "@/assets/verified-wholesale-sourcing-cover.jpg";
import whyAgenciesLoseClientsCover from "@/assets/why-agencies-lose-clients-cover.png.asset.json";
import {
  publishedAt,
  stock,
  toISODate,
  type BlogPost,
  type PostBody,
  type PostMeta,
  type PostSummary,
} from "@/lib/blog-types";

/**
 * Blog manifest: the listing metadata of every article.
 *
 * Article bodies live in src/lib/posts/<slug>.ts (default export, typed
 * PostBody) and are code-split: pages that only list posts (home, /blog)
 * never download article text, and /blog/<slug> loads one body.
 *
 * To add a post: add an entry here (slug, title, excerpt, tag, date, time,
 * author, img) and create src/lib/posts/<slug>.ts with the rest.
 * Slugs must be unique. `tsc` and a runtime check both fail on duplicates.
 */
const POSTS = [
  {
    slug: "shopify-issues-and-how-to-fix-them",
    title: "10 Common Shopify Issues and How to Fix Them",
    excerpt:
      "Shopify makes it easy to launch a store, but it's not always perfect. Learn how to identify and fix 10 common Shopify issues affecting sales, SEO, speed, and more.",
    tag: "Shopify",
    date: "August 23, 2026",
    time: "11:00 am",
    author: "Pixel2Tech Team",
    img: shopifyIssuesBlogHero.url,
  },
  {
    slug: "top-marketing-agencies-in-pakistan",
    title: "Top 7 Marketing Agencies in Pakistan in 2026",
    excerpt:
      "Pakistan's digital marketing industry is growing quickly. Discover our guide to 7 marketing agencies in Pakistan offering SEO, social media, branding, and creative services.",
    tag: "Marketing",
    date: "August 23, 2026",
    time: "10:00 am",
    author: "Pixel2Tech Team",
    img: topMarketingAgenciesPakistanV2.url,
  },
  {
    slug: "ai-design-systems-future",
    title: "AI Is Changing How Designers Build Products: Why Design Systems Matter More Than Ever",
    excerpt:
      "AI tools can generate interfaces in seconds, but building a cohesive product requires more than just prompts. Discover why design systems are the essential foundation for AI-powered product development.",
    tag: "Design",
    date: "August 23, 2026",
    time: "9:00 am",
    author: "Pixel2Tech Team",
    img: aiDesignSystemsHero.url,
    imgAlt: "Modern digital design system interface with AI conceptual elements",
    related: [
      "ai-automation-business-operations",
      "future-of-digital-products-startup-systems",
      "digital-product-is-more-than-software",
      "how-ai-is-changing-modern-branding",
    ],
  },
  {
    slug: "outtricks-vs-instantly-vs-apollo",
    title: "Outtricks vs Instantly vs Apollo: Which Outbound Sales Platform Is Best in 2026?",
    excerpt:
      "We compare three popular B2B outreach platforms, Outtricks, Instantly and Apollo, on lead data, deliverability and cost, so you can pick the right one for your stage.",
    tag: "Marketing",
    date: "August 22, 2026",
    time: "09:00 am",
    updated: "August 22, 2026",
    author: "Pixel2Tech Team",
    img: outtricksComparisonOpt.url,
    imgAlt:
      "Outtricks vs Instantly vs Apollo: The Ultimate 2026 Comparison featuring tool logos and a winner trophy",
  },
  {
    slug: "ai-automation-business-operations",
    title: "How AI and Automation Are Reshaping Business Operations",
    excerpt:
      "How intelligent automation is helping businesses reduce repetitive work, improve decision-making, streamline workflows, and build more scalable operations.",
    tag: "Automation",
    date: "August 20, 2026",
    time: "10:00 am",
    updated: "August 20, 2026",
    author: "Pixel2Tech Team",
    img: aiAutomationOperationsNewCover.url,
    imgAlt: "AI and automation transforming modern business operations",
  },
  {
    slug: "top-seo-agencies-in-pakistan",
    title: "Top 7 SEO Agencies in Pakistan in 2026",
    excerpt:
      "Finding the right SEO agency can be difficult. Explore our editorial list of 7 top SEO companies in Pakistan offering SEO, content, and digital growth services.",
    tag: "SEO",
    date: "August 20, 2026",
    time: "9:00 am",
    author: "Pixel2Tech Team",
    img: top7SeoAgenciesPakistanV2.url,
  },
  {
    slug: "google-pakistan-office-30-billion-it-export-future",
    title: "Google Pakistan Office: What It Means for Pakistan's $30 Billion IT Future",
    excerpt:
      "Google has opened its first local office in Pakistan. Here is what Google's presence means for Pakistan's digital economy, IT exports, AI ecosystem, and the $30 billion IT export ambition.",
    tag: "Business",
    date: "August 19, 2026",
    time: "11:00 am",
    updated: "August 19, 2026",
    author: "Pixel2Tech Team",
    img: googlePakistanOfficeInauguration.url,
    imgAlt: "Google Pakistan office inauguration with Prime Minister Shehbaz Sharif",
    related: [
      "20-common-technology-mistakes-businesses-make-2026",
      "why-businesses-need-better-systems",
      "building-digital-product-start-with-business",
      "future-of-digital-products-startup-systems",
    ],
  },
  {
    slug: "future-of-digital-products-startup-systems",
    title: "The Future of Digital Products: Why Startups Need Better Technology Systems",
    excerpt:
      "Building a startup that can scale requires moving beyond individual tools toward connected technology systems. Explore the future of digital product strategy.",
    tag: "Business",
    date: "August 10, 2026",
    time: "2:15 pm",
    updated: "August 10, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Conceptual view of connected digital systems and technology infrastructure",
    related: [
      "building-digital-product-start-with-business",
      "digital-product-is-more-than-software",
      "why-businesses-need-better-systems",
      "20-common-technology-mistakes-businesses-make-2026",
    ],
  },
  {
    slug: "building-digital-product-start-with-business",
    title: "Building a Digital Product? Start With the Business, Not the Technology",
    excerpt:
      "Most founders don't start with a technology problem—they start with a business problem. Learn why successful products are built around outcomes rather than features.",
    tag: "Business",
    date: "August 10, 2026",
    time: "10:30 am",
    updated: "August 10, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Team collaborating on product strategy and business goals",
    related: [
      "digital-product-is-more-than-software",
      "why-businesses-need-better-systems",
      "20-common-technology-mistakes-businesses-make-2026",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "digital-product-is-more-than-software",
    title: "Your Digital Product Is More Than Software. It’s a Business System.",
    excerpt:
      "For many founders, building a product starts with 'We need an app.' But technology should never be the starting point. Real value is created when technology solves a business problem and reduces friction.",
    tag: "Business",
    date: "August 10, 2026",
    time: "9:00 am",
    updated: "August 10, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Modern workspace with digital devices representing product strategy",
    related: [
      "why-businesses-need-better-systems",
      "20-common-technology-mistakes-businesses-make-2026",
      "why-modern-brands-need-an-ai-ops-layer",
      "is-ai-worth-the-investment",
    ],
  },
  {
    slug: "20-common-technology-mistakes-businesses-make-2026",
    title: "20 Most Common Technology Mistakes Businesses Make in 2026",
    excerpt:
      "Technology should make business simpler, but many companies find themselves with more software and more manual work. Here are 20 technology mistakes to avoid in 2026.",
    tag: "Business",
    date: "August 8, 2026",
    time: "2:00 pm",
    updated: "August 8, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Team collaborating on a complex technology strategy in a modern office",
    related: [
      "why-businesses-need-better-systems",
      "ai-meeting-assistants-business-guide",
      "biggest-seo-mistakes-businesses-make-2026",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "why-businesses-need-better-systems",
    title: "Your Business Doesn't Need More Software. It Needs Better Systems.",
    excerpt:
      "Most businesses don't have a technology problem—they have a systems problem. Adding another tool rarely fixes friction; sometimes it makes it worse. Here is how to build connected systems that actually scale.",
    tag: "Business",
    date: "August 8, 2026",
    time: "11:00 am",
    updated: "August 8, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Complex electronic circuit board representing connected business systems",
    related: [
      "ai-meeting-assistants-business-guide",
      "biggest-seo-mistakes-businesses-make-2026",
      "why-digital-marketing-agencies-lose-clients",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "leading-creative-agencies-enterprises-brands-2026",
    title: "12 Leading Creative Agencies for Enterprises & Brands in 2026",
    excerpt:
      "Creativity now sits alongside technology, customer experience and AI. Here are twelve creative agencies enterprises and growing brands are working with in 2026 — and how to pick the right one.",
    tag: "Marketing",
    date: "August 7, 2026",
    time: "8:00 pm",
    updated: "August 7, 2026",
    author: "Pixel2Tech Team",
    img: "/__l5e/assets-v1/73321028-4cec-4360-b59e-b09aa4ed5b96/leading-creative-agencies-cover.png",
    imgAlt:
      "Creative agency team reviewing campaign reports, analytics dashboards and brand performance charts around a wooden table",
    related: [
      "why-digital-marketing-agencies-lose-clients",
      "biggest-seo-mistakes-businesses-make-2026",
      "how-ai-is-changing-modern-branding",
      "the-power-of-good-branding-for-business-growth",
    ],
  },
  {
    slug: "biggest-seo-mistakes-businesses-make-2026",
    title:
      "The Biggest SEO Mistakes Businesses Still Make in 2026 (And Why They Cost More Than Rankings)",
    excerpt:
      "Search has changed. Buyers now ask ChatGPT, Gemini, Perplexity and AI Overviews before they visit your site. Here are the SEO mistakes still costing businesses visibility — and what to do instead.",
    tag: "SEO",
    date: "August 7, 2026",
    time: "3:00 pm",
    updated: "August 7, 2026",
    author: "Pixel2Tech Team",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=70",
    imgAlt: "Marketer reviewing website search analytics and traffic charts on a laptop screen",
    related: [
      "ai-seo-mistakes",
      "why-digital-marketing-agencies-lose-clients",
      "why-businesses-need-better-systems",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "why-digital-marketing-agencies-lose-clients",
    title: "Why Digital Marketing Agencies Lose Clients (And 12 Proven Ways to Keep Them in 2026)",
    excerpt:
      "Client churn is the most expensive problem in agency life. Here are the twelve reasons a digital marketing agency loses accounts in 2026 — and the retention fixes that actually work.",
    tag: "Marketing",
    date: "August 4, 2026",
    time: "2:00 pm",
    updated: "August 4, 2026",
    author: "Pixel2Tech Team",
    img: whyAgenciesLoseClientsCover.url,
    imgAlt:
      "Two colleagues at a desk with laptops reviewing hand-drawn website wireframes and marketing plans",
    related: [
      "replace-digital-marketing-agency",
      "ai-seo-mistakes",
      "why-businesses-need-better-systems",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "verified-wholesale-sourcing-vs-auctions-liquidation",
    title: "Why Verified Wholesale Sourcing Beats Auctions and Liquidation Marketplaces",
    excerpt:
      "Cheap inventory is rarely the cheapest inventory. Here is why verified suppliers, escrow payments, managed logistics, and fixed wholesale pricing protect margins better than auctions and liquidation marketplaces.",
    tag: "E-commerce",
    date: "August 4, 2026",
    time: "11:00 am",
    updated: "August 4, 2026",
    author: "Pixel2Tech Team",
    img: verifiedWholesaleSourcingCover,
    imgAlt:
      "Warehouse manager reviewing verified wholesale inventory and shipment details on a tablet beside stacked pallets",
    related: [
      "headless-shopify-commerce-guide",
      "why-modern-brands-need-an-ai-ops-layer",
      "why-businesses-need-better-systems",
      "why-every-business-needs-a-modern-website-in-2026",
    ],
  },
  {
    slug: "advanced-contextual-advertising-privacy-first-marketing",
    title: "Advanced Contextual Advertising: The Future of Privacy-First Marketing",
    excerpt:
      "Third-party cookies are gone. Advanced contextual advertising uses AI and semantic analysis to place ads based on what a page is really about — protecting privacy, brand safety, and performance at the same time.",
    tag: "Marketing",
    date: "August 4, 2026",
    time: "9:00 am",
    updated: "August 4, 2026",
    author: "Pixel2Tech Team",
    img: contextualAdvertisingCoverUploaded.url,
    imgAlt:
      "Hands typing on a laptop with a glowing growth chart and shopping cart icons showing data-driven digital advertising performance",
    related: [
      "ai-seo-mistakes",
      "how-ai-is-changing-modern-branding",
      "why-modern-brands-need-an-ai-ops-layer",
      "is-ai-worth-the-investment",
      "why-every-business-needs-a-modern-website-in-2026",
    ],
  },
  {
    slug: "mobile-app-design-process",
    title: "The Complete Mobile App Design Process (2026): From Idea to App Store Launch",
    excerpt:
      "A practical, end-to-end guide to the mobile app design process — idea validation, research, wireframing, prototyping, UI, design systems, testing, handoff, and launch — written for founders and product teams.",
    tag: "Design",
    date: "August 3, 2026",
    time: "9:00 am",
    updated: "August 3, 2026",
    author: "Pixel2Tech Team",
    img: mobileAppDesignProcessCover,
    imgAlt:
      "Designer's desk with a smartphone showing a mobile app interface, paper wireframe sketches, and a laptop displaying a design system",
    related: [
      "design-systems-for-small-teams",
      "why-every-business-needs-a-modern-website-in-2026",
      "headless-shopify-commerce-guide",
      "why-businesses-need-better-systems",
      "how-ai-is-changing-modern-branding",
    ],
  },
  {
    slug: "headless-shopify-commerce-guide",
    title: "Headless Shopify: A Practical Guide for Founders and eCommerce Brands",
    excerpt:
      "What headless Shopify actually means, when it is worth the cost, when a well-built theme wins, and how to plan the move without breaking revenue.",
    tag: "E-commerce",
    date: "August 2, 2026",
    time: "3:00 pm",
    updated: "August 3, 2026",
    author: "Asad Farooq",
    img: stock("1556742049-0cfed4f6a45d"),
    imgAlt:
      "Merchant reviewing an online store dashboard on a laptop while packing customer orders",
    related: [
      "why-every-business-needs-a-modern-website-in-2026",
      "why-businesses-need-better-systems",
      "design-systems-for-small-teams",
      "ai-seo-mistakes",
      "why-modern-brands-need-an-ai-ops-layer",
    ],
  },
  {
    slug: "best-linkedin-outreach-platforms",
    title: "Best LinkedIn Outreach Platforms in 2026",
    excerpt:
      "A practical look at the best LinkedIn outreach platforms in 2026 — what each one is actually good for, how to choose, and the mistakes that quietly kill reply rates.",
    tag: "Marketing",
    date: "August 2, 2026",
    time: "11:00 am",
    author: "Pixel2Tech Team",
    img: stock("1616469829581-73993eb86b02"),
    related: [
      "why-businesses-need-better-systems",
      "why-modern-brands-need-an-ai-ops-layer",
      "is-ai-worth-the-investment",
      "ai-seo-mistakes",
      "ai-meeting-assistants-business-guide",
    ],
  },
  {
    slug: "ai-seo-mistakes",
    title: "Why Your AI Content Is Not Ranking (And How to Fix It)",
    excerpt:
      "Most businesses are publishing more content than ever and getting less traffic. Here are the AI SEO mistakes behind that, and a simple framework to fix them.",
    tag: "SEO",
    date: "August 2, 2026",
    time: "09:00 am",
    author: "Pixel2Tech Team",
    img: stock("1526628953301-3e589a6a8b74"),
    related: [
      "why-modern-brands-need-an-ai-ops-layer",
      "why-businesses-need-better-systems",
      "is-ai-worth-the-investment",
      "how-ai-is-changing-modern-branding",
    ],
  },
  {
    slug: "ai-meeting-assistants-business-guide",
    title: "AI Meeting Assistants: Are They Worth It for Your Business in 2026?",
    excerpt:
      "Automated notes, transcripts, and action items sound great on paper. Here is an honest look at the benefits, limits, ROI, and how to choose the right AI meeting assistant.",
    tag: "AI",
    date: "August 1, 2026",
    time: "10:00 am",
    author: "Pixel2Tech Team",
    img: stock("1522071820081-009f0129c71c"),
    related: [
      "is-ai-worth-the-investment",
      "why-modern-brands-need-an-ai-ops-layer",
      "why-businesses-need-better-systems",
      "how-ai-is-changing-modern-branding",
      "design-systems-for-small-teams",
    ],
  },
  {
    slug: "replace-digital-marketing-agency",
    title: "10 Signs It's Time to Replace Your Digital Marketing Agency",
    excerpt:
      "Is your marketing agency failing to deliver results? Here are the warning signs, the hidden costs, and what a real digital growth partner looks like.",
    tag: "Business",
    date: "August 1, 2026",
    time: "9:00 am",
    author: "Pixel2Tech Team",
    img: stock("1559526324-4b87b5e36e44"),
  },
  {
    slug: "kling-o1-guide",
    title: "Kling O1 Explained: Features, Use Cases & Business Benefits (2026 Guide)",
    excerpt:
      "Discover what Kling O1 is, how it works, its key features, business use cases, and how AI video can transform marketing and content creation.",
    tag: "AI",
    date: "July 30, 2026",
    time: "10:00 am",
    author: "Pixel2Tech Editorial Team",
    img: stock("1574717024653-61fd2cf4d44d"),
  },
  {
    slug: "startup-investor-ready-guide",
    title: "Before You Raise Funding, Make Sure Your Startup Looks Investable",
    excerpt:
      "Investors research your website, product and brand long before they read your deck. Here is how to make your startup look investor-ready before you raise.",
    tag: "Business",
    date: "July 30, 2026",
    time: "9:00 am",
    author: "Pixel2Tech Editorial Team",
    img: stock("1542744173-8e7e53415bb0"),
  },
  {
    slug: "bots-outnumber-humans-online-2026-website-security",
    title:
      "Bots Have Officially Taken Over the Internet — Here's What It Means for Your Website in 2026",
    excerpt:
      "Bot traffic has officially surpassed human traffic in 2026. Learn how this affects your website, analytics, and security — and how Pixel2Tech can help.",
    tag: "Web Development",
    date: "July 29, 2026",
    time: "9:00 am",
    author: "Pixel2Tech Editorial Team",
    img: stock("1526374965328-7f61d4dc18c5"),
  },
  {
    slug: "is-ai-worth-the-investment",
    title:
      "Is AI Worth the Investment? A Business Owner's Guide to Understanding the Real Value of AI",
    excerpt:
      "Learn when AI is worth investing in, where businesses waste money on AI, and how to implement AI strategically for real business growth.",
    tag: "AI",
    date: "July 28, 2026",
    time: "9:00 am",
    author: "Asad Farooq",
    img: stock("1551288049-bebda4e38f71"),
  },
  {
    slug: "why-most-freelancers-fail-on-upwork",
    title: "Why Most Freelancers Fail on Upwork (And What Clients Actually Want)",
    excerpt:
      "Most freelancers lose Upwork projects for the same reason: they focus on getting hired while clients focus on getting results.",
    tag: "Business",
    date: "July 27, 2026",
    time: "11:00 am",
    author: "Asad Farooq",
    img: stock("1556155092-490a1ba16284"),
  },
  {
    slug: "better-systems-not-more-software",
    title: "Why Most Businesses Don't Need More Software. They Need Better Systems",
    excerpt:
      "Businesses keep buying tools and keep facing the same problems. The issue usually isn't the software — it's the system behind it.",
    tag: "Business",
    date: "July 27, 2026",
    time: "10:00 am",
    author: "Asad Farooq",
    img: stock("1454165804606-c3d57bc86b40"),
  },
  {
    slug: "how-ai-is-changing-modern-branding",
    title: "How AI is Changing Modern Branding",
    excerpt: "The tools have changed. The principles haven't. Here's how we blend both.",
    tag: "AI",
    date: "June 22, 2026",
    time: "10:15 am",
    author: "Asad Farooq",
    img: stock("1550751827-4bd374c3f58b"),
  },
  {
    slug: "why-every-business-needs-a-modern-website-in-2026",
    title: "Why Every Business Needs a Modern Website in 2026",
    excerpt: "A 10-point audit to figure out if your website is helping or hurting.",
    tag: "Web Development",
    date: "April 5, 2026",
    time: "9:12 am",
    author: "Asad Farooq",
    img: stock("1499951360447-b19be8fe80f5"),
  },
  {
    slug: "rebrand-vs-refresh-a-founders-decision-framework",
    title: "Rebrand vs. Refresh: A Founder's Decision Framework",
    excerpt: "Not sure whether to rebrand? Answer these five questions first.",
    tag: "Branding",
    date: "March 12, 2026",
    time: "2:40 pm",
    author: "Asad Farooq",
    img: stock("1533750349088-cd871a92f312"),
  },
  {
    slug: "the-power-of-good-branding-for-business-growth",
    title: "The Power of Good Branding for Business Growth",
    excerpt: "Why a strong brand system compounds every marketing dollar you spend.",
    tag: "Branding",
    date: "February 24, 2026",
    time: "9:36 pm",
    author: "Asad Farooq",
    img: stock("1552664730-d307ca884978"),
  },
  {
    slug: "why-modern-brands-need-an-ai-ops-layer",
    title: "Why Modern Brands Need an AI Ops Layer",
    excerpt: "The teams that win in the next 5 years will run on AI-native workflows.",
    tag: "AI",
    date: "February 24, 2026",
    time: "11:20 am",
    author: "Asad Farooq",
    img: stock("1531403009284-440f080d1e12"),
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design Systems for Small Teams: How to Build Better Products Faster",
    excerpt:
      "A design system isn't only for large companies. Here's how small teams build simple, practical systems that improve consistency, speed, and product quality.",
    tag: "Design",
    date: "January 30, 2026",
    time: "4:05 pm",
    author: "Asad Farooq",
    img: stock("1581291518857-4e27b48ff24e"),
    related: [
      "why-businesses-need-better-systems",
      "how-ai-is-changing-modern-branding",
      "ai-meeting-assistants-business-guide",
      "is-ai-worth-the-investment",
    ],
  },
] as const satisfies readonly PostMeta[];

/* ------------------------------------------------------------------ */
/* Integrity checks                                                    */
/* ------------------------------------------------------------------ */

type SlugOf<T> = T extends { slug: infer S } ? S : never;
type FindDuplicateSlug<T extends readonly unknown[], Seen = never> = T extends readonly [
  infer Head,
  ...infer Rest,
]
  ? SlugOf<Head> extends Seen
    ? SlugOf<Head>
    : FindDuplicateSlug<Rest, Seen | SlugOf<Head>>
  : never;
type DuplicateSlug = FindDuplicateSlug<typeof POSTS>;

/**
 * Compile-time guard: `tsc` fails here, naming the slug, if two posts share
 * one. Two posts on one URL means one of them can never be read.
 */
const noDuplicateSlugs: [DuplicateSlug] extends [never] ? true : { duplicateSlug: DuplicateSlug } =
  true;
void noDuplicateSlugs;

/** Runtime guard for the same mistake, plus data checks while developing. */
function assertValidIndex(posts: readonly PostMeta[]) {
  const slugs = new Set<string>();
  for (const p of posts) {
    if (slugs.has(p.slug)) {
      throw new Error(`Duplicate blog slug "${p.slug}" in src/lib/blog-index.ts.`);
    }
    slugs.add(p.slug);
  }
  if (!import.meta.env.DEV) return;
  for (const p of posts) {
    if (!BODIES[bodyPath(p.slug)]) {
      throw new Error(`Blog post "${p.slug}" has no body file at src/lib/posts/${p.slug}.ts.`);
    }
    for (const d of [p.date, p.updated]) {
      if (d && !toISODate(d))
        throw new Error(`Blog post "${p.slug}" has an unreadable date "${d}".`);
    }
    for (const r of p.related ?? []) {
      if (!slugs.has(r))
        throw new Error(`Blog post "${p.slug}" lists unknown related slug "${r}".`);
    }
  }
  for (const file of Object.keys(BODIES)) {
    const slug = file.replace(/^\.\/posts\/|\.ts$/g, "");
    if (!slugs.has(slug)) {
      throw new Error(`src/lib/posts/${slug}.ts has no entry in src/lib/blog-index.ts.`);
    }
  }
}

/* ------------------------------------------------------------------ */
/* Bodies (one lazy chunk per article)                                 */
/* ------------------------------------------------------------------ */

const BODIES = import.meta.glob<PostBody>("./posts/*.ts", { import: "default" });

function bodyPath(slug: string) {
  return `./posts/${slug}.ts`;
}

assertValidIndex(POSTS);

/* ------------------------------------------------------------------ */
/* Queries                                                             */
/* ------------------------------------------------------------------ */

/** Every post's metadata, newest first. */
export const POST_INDEX: readonly PostMeta[] = [...POSTS].sort(
  (a, b) => publishedAt(b) - publishedAt(a),
);

const BY_SLUG = new Map(POST_INDEX.map((p) => [p.slug, p]));

export function getPostMeta(slug: string): PostMeta | undefined {
  return BY_SLUG.get(slug);
}

/** Loads one full article (metadata + body). Only the requested body is downloaded. */
export async function loadPost(slug: string): Promise<BlogPost | undefined> {
  const meta = BY_SLUG.get(slug);
  const load = meta ? BODIES[bodyPath(slug)] : undefined;
  if (!meta || !load) return undefined;
  return { ...meta, ...(await load()) };
}

export function toPostSummary(p: PostMeta): PostSummary {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    dateISO: toISODate(p.date) ?? "",
    tag: p.tag,
    img: p.img,
    imgAlt: p.imgAlt ?? p.title,
  };
}

/** All posts as card data, newest first. */
export function getPostSummaries(): PostSummary[] {
  return POST_INDEX.map(toPostSummary);
}

/** The `n` newest posts as card data. Does not load any article body. */
export function getLatestPostSummaries(n: number): PostSummary[] {
  return POST_INDEX.slice(0, Math.max(0, n)).map(toPostSummary);
}

/**
 * Related articles: the post's own `related` slugs first, then posts with the
 * same tag, then the newest remaining posts.
 */
export function getRelatedPostSummaries(slug: string, limit = 4): PostSummary[] {
  const post = BY_SLUG.get(slug);
  if (!post) return [];
  const picked: PostMeta[] = [];
  const push = (p?: PostMeta) => {
    if (p && p.slug !== slug && !picked.includes(p)) picked.push(p);
  };
  post.related?.forEach((s) => push(BY_SLUG.get(s)));
  POST_INDEX.filter((p) => p.tag === post.tag).forEach(push);
  POST_INDEX.forEach(push);
  return picked.slice(0, limit).map(toPostSummary);
}

/** Newer (`previous`) and older (`next`) article in newest-first order. */
export function getAdjacentPostSummaries(slug: string) {
  const i = POST_INDEX.findIndex((p) => p.slug === slug);
  const at = (j: number) => (i >= 0 && POST_INDEX[j] ? toPostSummary(POST_INDEX[j]) : undefined);
  return { previous: at(i - 1), next: at(i + 1) };
}

/**
 * Pixel2Tech pages every article can link to, used when a post does not
 * define its own `internalLinks`.
 */
export const SITE_LINKS: { label: string; to: string }[] = [
  { label: "Branding & design", to: "/services" },
  { label: "Website development", to: "/services" },
  { label: "Shopify development", to: "/services" },
  { label: "Automation & CRM", to: "/services" },
  { label: "SEO", to: "/services" },
  { label: "Video editing", to: "/services" },
  { label: "See our work", to: "/portfolio" },
  { label: "About Pixel2Tech", to: "/about" },
  { label: "Contact", to: "/contact" },
];
