import type { FaqItem } from "@/components/faq";
import { pickFromBank, slugHash } from "@/lib/portfolio-copy";
import { warnOnUnknownSlugs, type PortfolioItem } from "@/lib/portfolio-data";
import type { SERVICES } from "@/lib/site-config";

/**
 * Extended narrative for portfolio detail pages: process, tools, "why this
 * matters", FAQs and contextual internal links.
 *
 * Real client work has hand-written detail in DETAIL_OVERRIDES. Everything
 * else is picked from per-discipline banks, seeded by the slug so the text is
 * stable between builds.
 */

export type ProcessStep = { title: string; body: string };
export type RelatedLink = { slug: string; label: string };
/** A canonical service name, so its /services#anchor link resolves. */
export type ServiceName = (typeof SERVICES)[number];

export type ProjectDetail = {
  process: ProcessStep[];
  technologies: string[];
  whyItMatters: string;
  faqs: FaqItem[];
  relatedReading: RelatedLink[];
  relatedServices: ServiceName[];
};

type DetailBank = Omit<ProjectDetail, "whyItMatters"> & { whyItMatters: string[] };

const CREATIVE_READING: RelatedLink[] = [
  {
    slug: "the-power-of-good-branding-for-business-growth",
    label: "The Power of Good Branding for Business Growth",
  },
  { slug: "how-ai-is-changing-modern-branding", label: "How AI Is Changing Modern Branding" },
  {
    slug: "rebrand-vs-refresh-a-founders-decision-framework",
    label: "Rebrand vs. Refresh: A Founder's Decision Framework",
  },
];

const WEB_READING: RelatedLink[] = [
  {
    slug: "why-every-business-needs-a-modern-website-in-2026",
    label: "Why Every Business Needs a Modern Website in 2026",
  },
  { slug: "design-systems-for-small-teams", label: "Design Systems for Small Teams" },
  { slug: "ai-seo-mistakes", label: "Why Your AI Content Is Not Ranking" },
];

const COMMERCE_READING: RelatedLink[] = [
  {
    slug: "headless-shopify-commerce-guide",
    label: "Headless Shopify: A Practical Guide for Founders",
  },
  {
    slug: "why-every-business-needs-a-modern-website-in-2026",
    label: "Why Every Business Needs a Modern Website in 2026",
  },
  { slug: "design-systems-for-small-teams", label: "Design Systems for Small Teams" },
];

const SYSTEMS_READING: RelatedLink[] = [
  {
    slug: "better-systems-not-more-software",
    label: "Why Most Businesses Don't Need More Software",
  },
  {
    slug: "why-modern-brands-need-an-ai-ops-layer",
    label: "Why Modern Brands Need an AI Ops Layer",
  },
  { slug: "is-ai-worth-the-investment", label: "Is AI Worth the Investment?" },
];

const VIDEO_READING: RelatedLink[] = [
  { slug: "kling-o1-guide", label: "Kling O1 Explained: Features, Use Cases & Business Benefits" },
  { slug: "how-ai-is-changing-modern-branding", label: "How AI Is Changing Modern Branding" },
  {
    slug: "replace-digital-marketing-agency",
    label: "10 Signs It's Time to Replace Your Marketing Agency",
  },
];

/** Blog posts linked from the design and video collections. */
const POST = {
  metaTesting: {
    slug: "meta-ads-creative-testing-small-budget",
    label: "Meta Ads Creative Testing on a Small Budget After Andromeda",
  },
  practitionerListings: {
    slug: "google-business-profile-practitioner-listings",
    label: "Google Business Profile Practitioner Listings for Law and Dental",
  },
  whiteLabelCreative: {
    slug: "white-label-creative-for-agencies",
    label: "White Label Ad Creative for Agencies: How to Outsource Safely",
  },
  brandGuidelines: {
    slug: "brand-guidelines-for-small-business",
    label: "Brand Guidelines for Small Businesses: What to Include",
  },
  outsourceDesign: {
    slug: "outsource-graphic-design-to-pakistan",
    label: "Outsource Graphic Design to Pakistan: A US, UK and EU Guide",
  },
  beautyCreative: {
    slug: "beauty-brand-ad-creative",
    label: "Beauty Brand Ad Creative: Formats That Work on Meta and TikTok",
  },
  identityProcess: {
    slug: "brand-identity-process-for-startups",
    label: "Brand Identity Process for Startups: Timeline, Deliverables, Cost",
  },
  rebrandVsRefresh: {
    slug: "rebrand-vs-refresh-a-founders-decision-framework",
    label: "Rebrand vs. Refresh: A Founder's Decision Framework",
  },
  logoCost: {
    slug: "logo-design-cost",
    label: "How Much Does a Logo Cost in 2026? US, UK and Europe Prices",
  },
  coachRetainers: {
    slug: "video-editing-retainer-for-coaches",
    label: "Video Editing Retainers for Coaches: Scope, Pricing, Turnaround",
  },
  outsourceVideo: {
    slug: "outsource-video-editing-to-pakistan",
    label: "Outsource Video Editing to Pakistan: A US, UK and EU Guide",
  },
  ugcAds: {
    slug: "ugc-ads-for-shopify-brands",
    label: "UGC Ads for Shopify Brands: Brief, Film, Edit and Test",
  },
  productVideo: {
    slug: "shopify-product-video-guide",
    label: "Shopify Product Videos: Types, Specs and Where to Place Them",
  },
} satisfies Record<string, RelatedLink>;

const BANKS: Record<string, DetailBank> = {
  "Social Media": {
    process: [
      {
        title: "Audit and content mapping",
        body: "We reviewed the existing grid post by post, recorded what actually earned saves and shares, and mapped the content pillars the brand needed to own before a single new layout was drawn.",
      },
      {
        title: "Design system for the feed",
        body: "We defined the grid geometry, two type sizes, a locked color set and an image treatment, then built each recurring format — launch, quote, offer, behind-the-scenes — on top of that shared frame.",
      },
      {
        title: "Batch production",
        body: "Posts were produced in batches against the calendar rather than one at a time, which keeps the visual rhythm intentional and removes the scramble at the end of each week.",
      },
      {
        title: "Handover and enablement",
        body: "We shipped editable source files, a short usage guide and naming conventions so the in-house team can extend the system without the design quality drifting.",
      },
    ],
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "After Effects",
      "Brand design system",
      "Content calendar workflow",
    ],
    whyItMatters: [
      "Social is often the first place a customer meets a brand, and a feed that reads as one coherent identity does more for trust than any single high-performing post. A documented system also means the brand keeps looking consistent long after the engagement ends — the value compounds instead of expiring.",
      "Most small teams do not lose on social because of ideas; they lose because production is slow and inconsistent. Turning design into a repeatable system converts a recurring bottleneck into something a non-designer can run, which is the difference between posting monthly and posting weekly.",
    ],
    faqs: [
      {
        q: "How long does a social media design system take to build?",
        a: "For most brands the audit, system design and first batch of templates take three to four weeks. After that, ongoing content production runs on a weekly or monthly cycle depending on posting volume.",
      },
      {
        q: "Do we get the editable source files?",
        a: "Yes. Every project ships with organized, editable Figma and Adobe source files, plus naming conventions and a short usage guide so your in-house team can produce new posts without starting from scratch.",
      },
      {
        q: "Can Pixel2Tech also handle the content calendar and copy?",
        a: "We can. Social media design sits alongside our branding and digital marketing work, so the calendar, copy direction and post design can all be handled by one team rather than split across freelancers.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
  Branding: {
    process: [
      {
        title: "Positioning and discovery",
        body: "We started with the business rather than the sketchpad: what it sells, who it competes with, and the one impression it needs to leave. Everything downstream is judged against that brief.",
      },
      {
        title: "Concept directions",
        body: "Three genuinely different directions were developed to the point where they could be evaluated honestly, each applied to real touchpoints instead of shown on a neutral presentation slide.",
      },
      {
        title: "Refinement and system build",
        body: "The chosen direction was refined into a full identity system — mark, wordmark, color, type scale, spacing and imagery rules — tested from favicon size upward.",
      },
      {
        title: "Guidelines and rollout",
        body: "We documented the system in brand guidelines and prepared the asset pack, so the team can apply the identity to a deck, a website or a shopfront without a designer in the loop.",
      },
    ],
    technologies: [
      "Adobe Illustrator",
      "Figma",
      "Adobe InDesign",
      "Brand guideline documentation",
      "Vector asset library",
      "Web font pairing",
    ],
    whyItMatters: [
      "Brand identity is the compounding asset in a business. Every ad, page and post either deposits into it or withdraws from it, and a documented system makes sure the deposits keep landing even as the team changes.",
      "A logo alone solves nothing. What actually removes friction is the system around it — the rules that let a founder, a marketer and a developer all produce work that looks like it came from the same company.",
    ],
    faqs: [
      {
        q: "What is included in a brand identity project?",
        a: "A typical engagement covers positioning discovery, logo and wordmark design, a color palette, a typography system, spacing and layout rules, application examples, and a written brand guideline document with all export-ready files.",
      },
      {
        q: "How is a rebrand different from a brand refresh?",
        a: "A refresh modernizes the existing identity while keeping recognition intact. A rebrand replaces the positioning and the visual system. We help you decide which one the business actually needs before any design work starts.",
      },
      {
        q: "Will the identity work in print as well as digital?",
        a: "Yes. We build outward from the smallest digital use case — a 16px favicon — and test upward through web, social, print and signage, supplying CMYK and vector artwork for production.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design", "Website Development", "Social Media & Email"],
  },
  "Print & Merchandise": {
    process: [
      {
        title: "Specification and material choice",
        body: "Before layout, we agreed the stock, finish and print method with the supplier, because paper weight and coating change how color and type read far more than most people expect.",
      },
      {
        title: "Artwork on the brand grid",
        body: "Every piece was laid out on the same grid and type scale as the digital brand, so the printed items sit inside the identity rather than beside it.",
      },
      {
        title: "Production-ready files",
        body: "Artwork was prepared in CMYK with correct bleed, trim marks, overprint settings and embedded fonts, accompanied by a spec sheet the printer can work directly from.",
      },
      {
        title: "Proofing and sign-off",
        body: "We reviewed physical proofs on the actual substrate before approving the run, which is the only reliable way to catch color shift and finish issues.",
      },
    ],
    technologies: [
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CMYK / Pantone color management",
      "Print production specs",
      "Packaging dielines",
    ],
    whyItMatters: [
      "Physical touchpoints are where a brand becomes tangible. Packaging, stationery and merchandise are held, kept and photographed, so an inconsistency there is far more visible than one in a passing digital impression.",
      "Print mistakes are expensive because they are permanent. Getting the specification, color profile and proofing discipline right the first time protects both the budget and the launch timeline.",
    ],
    faqs: [
      {
        q: "Do you supply files the printer can use directly?",
        a: "Yes. All artwork ships print-ready with the correct bleed, trim, color profile and embedded assets, plus a specification sheet so any commercial printer can produce it without asking for revisions.",
      },
      {
        q: "Can you work with our existing printer or supplier?",
        a: "Absolutely. We regularly prepare artwork to a third-party supplier's exact template and technical requirements, and we will liaise with them during proofing if that is helpful.",
      },
      {
        q: "Do you handle packaging design as well as stationery?",
        a: "Yes — packaging, labels, dielines, menus, signage, business cards and apparel all fall inside this practice, and all are designed against the same brand system.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design", "Social Media & Email", "Website Development"],
  },
  Websites: {
    process: [
      {
        title: "Discovery and information architecture",
        body: "We defined who the site is for, the single action each page should drive, and the structure that gets a visitor there in as few steps as possible before any visual work started.",
      },
      {
        title: "Wireframes and UI design",
        body: "Layouts were designed mobile-first at 375px and scaled up, with a component library — buttons, cards, forms, states — so the build stays consistent and future pages assemble quickly.",
      },
      {
        title: "Development and performance",
        body: "The site was built as a server-rendered React application with responsive images, a critical CSS path and code splitting, with Core Web Vitals treated as a design constraint rather than an afterthought.",
      },
      {
        title: "SEO, QA and launch",
        body: "Semantic headings, structured data, canonical URLs, sitemap and metadata were implemented before launch, followed by cross-browser and device QA and a monitored rollout.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "Vercel",
      "Core Web Vitals tooling",
    ],
    whyItMatters: [
      "A website is the only marketing asset that works every hour of the year, and its speed and clarity set the ceiling on every campaign pointed at it. Improving the page a visitor lands on usually returns more than increasing the spend that sends them there.",
      "Search visibility and user experience have converged. The same things that make a page fast, structured and readable for a person now determine whether Google and AI search surfaces will cite it at all.",
    ],
    faqs: [
      {
        q: "How long does a website project take?",
        a: "A focused marketing site typically runs six to ten weeks from discovery to launch. Larger builds with custom functionality or content migration take longer, and we agree the timeline in writing before starting.",
      },
      {
        q: "Will we be able to update content ourselves?",
        a: "Yes. We hand over a content workflow your team can run without a developer, along with a short walkthrough so publishing new pages does not depend on us.",
      },
      {
        q: "Is SEO included in the build?",
        a: "Technical SEO is built in — semantic HTML, heading hierarchy, metadata, structured data, sitemaps, image optimization and performance. Ongoing content and link strategy is offered separately as an SEO engagement.",
      },
    ],
    relatedReading: WEB_READING,
    relatedServices: ["Website Development", "Branding & Design", "SEO & Search Growth"],
  },
  "E-Commerce": {
    process: [
      {
        title: "Funnel and catalog audit",
        body: "We traced the real path from landing to purchase, identified where customers dropped out, and reviewed how the catalog was structured against how customers actually search for products.",
      },
      {
        title: "Product and checkout design",
        body: "Product templates were rebuilt around the questions that block a purchase — sizing, materials, shipping, returns — and the checkout collapsed into the fewest reviewable steps possible.",
      },
      {
        title: "Storefront build",
        body: "The storefront was implemented with fast product imagery, faceted filtering and a payment flow tested on mid-range mobile hardware, where most of the traffic actually converts.",
      },
      {
        title: "Launch and iteration",
        body: "After launch we monitored funnel analytics and refined the friction points that only appear with live traffic rather than assuming the first design was final.",
      },
    ],
    technologies: [
      "Shopify",
      "Shopify Hydrogen",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Analytics & funnel tracking",
    ],
    whyItMatters: [
      "In e-commerce, small structural improvements compound against every order. A checkout that stops asking for unnecessary information or a product page that answers the real objection changes revenue permanently, not just for one campaign.",
      "Mobile is now the majority of storefront traffic but is often designed last. Building for a mid-range phone first is the single change that most reliably moves conversion for growing brands.",
    ],
    faqs: [
      {
        q: "Do you work with Shopify or custom-built stores?",
        a: "Both. Shopify and headless Shopify cover most brands well, and we build fully custom storefronts on React and Next.js when the catalog, pricing logic or integrations need something the platform cannot handle.",
      },
      {
        q: "Can you migrate our existing store without losing SEO?",
        a: "Yes. Migrations include a full URL map with 301 redirects, preserved metadata and structured data, and post-launch monitoring so rankings and indexed pages carry over.",
      },
      {
        q: "What actually improves e-commerce conversion?",
        a: "In our experience: faster product pages, fewer checkout steps, guest purchase, honest shipping and returns information shown before the cart, and product photography that answers the sizing and material questions people would otherwise email about.",
      },
    ],
    relatedReading: COMMERCE_READING,
    relatedServices: ["WordPress & Shopify", "Website Development", "SEO & Search Growth"],
  },
  "Mobile Apps": {
    process: [
      {
        title: "User research and job mapping",
        body: "We identified the single job a user opens the app to do, then mapped every screen against whether it helps or delays that job.",
      },
      {
        title: "Wireframes and prototypes",
        body: "Low-fidelity flows were prototyped and tested before visual design, so navigation problems surfaced while they were still cheap to fix.",
      },
      {
        title: "UI system and screens",
        body: "A component library covering buttons, sheets, form states, loading and empty states was built first, then screens were assembled from it for consistent behavior throughout.",
      },
      {
        title: "Developer handoff",
        body: "Handoff included spacing tokens, interaction specs, edge-case states and exportable assets, so engineering implements the design without reinterpreting it.",
      },
    ],
    technologies: [
      "Figma",
      "React Native",
      "TypeScript",
      "Design tokens",
      "Interactive prototyping",
      "Supabase",
      "Accessibility (WCAG) review",
    ],
    whyItMatters: [
      "App retention is decided in the first session. If a user reaches the thing they came for quickly, the rest of the product gets a chance; if not, no later feature recovers them.",
      "A documented UI system pays for itself across every future release, because engineering assembles new screens from existing parts instead of rebuilding patterns and re-litigating decisions each sprint.",
    ],
    faqs: [
      {
        q: "Do you design for both iOS and Android?",
        a: "Yes. We design a shared system that respects each platform's native conventions for navigation, typography and gestures, so the app feels correct on both rather than ported to one.",
      },
      {
        q: "Do you also build the app or only design it?",
        a: "We do both. Many clients take the design and hand it to their own engineers, and we also build production apps in React Native with a Supabase or Node.js backend.",
      },
      {
        q: "How do you validate the design before development?",
        a: "Interactive prototypes are tested with real users on real devices before any code is written, which is far cheaper than discovering the same navigation problem after the build.",
      },
    ],
    relatedReading: WEB_READING,
    relatedServices: ["Custom Platforms & Apps", "AI Solutions", "Website Development"],
  },
  "Short Form": {
    process: [
      {
        title: "Hook and story planning",
        body: "Each clip was planned around its opening two seconds first, because that is the only part of a short-form video every viewer actually sees.",
      },
      {
        title: "Edit template design",
        body: "We defined pacing, caption style, transition set and sound design once, then applied it across the batch so the channel gains a recognizable signature.",
      },
      {
        title: "Editing and sound",
        body: "Cuts were assembled, color-matched and leveled, with music beds ducked under dialogue so the clip stays intelligible on a phone speaker in a noisy room.",
      },
      {
        title: "Captioning and platform exports",
        body: "Captions were hand-corrected and burned in at a readable size, and each clip was exported to the correct ratio and specification for every destination platform.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Adobe Audition",
      "Motion graphics templates",
      "Platform-native export presets",
    ],
    whyItMatters: [
      "Short-form is now the cheapest reach available to most brands, but only when the edit earns the first two seconds. Structure, not budget, is what separates clips that travel from clips that stall.",
      "A repeatable edit template turns video from a per-project scramble into a production line, which is what makes consistent weekly publishing realistic for a small team.",
    ],
    faqs: [
      {
        q: "How many short-form clips can you produce from one shoot?",
        a: "A single well-planned shoot day typically yields between twelve and thirty usable clips, depending on the format mix and how much B-roll is captured alongside the primary content.",
      },
      {
        q: "Do you provide captions and multiple aspect ratios?",
        a: "Yes. Every clip ships with hand-corrected burned-in captions and exports for 9:16, 1:1 and 16:9 so the same edit works across Reels, TikTok, Shorts and paid placements.",
      },
      {
        q: "Can you edit footage we film ourselves?",
        a: "Certainly. Many clients shoot in-house and send us the raw files; we handle structure, editing, color, sound, captions and delivery.",
      },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "Branding & Design"],
  },
  "Long Form": {
    process: [
      {
        title: "Structure and chapter planning",
        body: "The raw material was reviewed and restructured into chapters, each with a stated payoff, so the viewer always has a reason to stay through the middle third.",
      },
      {
        title: "Audio-first assembly",
        body: "We ran a full audio pass — leveling, noise reduction, de-essing and music ducking — before the picture edit, because audio quality is what viewers read as production value.",
      },
      {
        title: "Picture edit and visual variety",
        body: "B-roll, motion graphics, on-screen text and reframing were layered in to carry the sections a single camera angle could not hold on its own.",
      },
      {
        title: "Color, thumbnails and delivery",
        body: "A consistent color grade, chapter markers, thumbnail options and platform-ready exports completed the delivery so the episode can be published without further work.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Adobe Audition",
      "Color grading (LUTs)",
      "Chapter markers & metadata",
    ],
    whyItMatters: [
      "Long-form video is where authority is built. A well-structured episode keeps earning views months later, which makes it one of the few content formats with a genuinely long tail.",
      "Retention in long-form is an editing problem far more often than a content problem. Chapter structure and audio discipline usually recover more watch time than better cameras.",
    ],
    faqs: [
      {
        q: "What turnaround should we expect per episode?",
        a: "Most long-form episodes are delivered within three to five working days of receiving the footage, with an agreed revision round included.",
      },
      {
        q: "Do you provide thumbnails and chapter markers?",
        a: "Yes. Delivery includes thumbnail options, chapter markers, a suggested title structure and the description metadata needed for publishing.",
      },
      {
        q: "Can you repurpose the episode into short clips?",
        a: "That is usually the highest-value add-on. One long-form edit typically produces eight to fifteen short-form clips using the same footage and grade.",
      },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "SEO & Search Growth"],
  },
  Commercial: {
    process: [
      {
        title: "Concept and deliverable planning",
        body: "We planned the campaign as a hierarchy — hero film first, cutdowns derived from it — so every version shares one core beat rather than being reassembled from scratch.",
      },
      {
        title: "Framing for every ratio",
        body: "Shots were framed and graded for all required deliverable ratios from the outset, avoiding the destructive cropping that ruins most repurposed commercial footage.",
      },
      {
        title: "Edit, VFX and grade",
        body: "The hero cut was built around the customer's problem before the product appears, with motion graphics, sound design and a consistent grade applied across the set.",
      },
      {
        title: "Versioning and ad delivery",
        body: "Cutdowns, bumpers and platform-specific specifications were exported and checked against each ad network's technical requirements before handover.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Cinema 4D motion graphics",
      "Sound design",
      "Meta & Google Ads video specs",
    ],
    whyItMatters: [
      "Paid media amplifies whatever creative it is given. A commercial that states the stakes before it shows the product lowers cost per result across every channel it runs on.",
      "Producing the full version set from one shoot is what makes commercial video economically sensible for growing brands rather than a one-off expense.",
    ],
    faqs: [
      {
        q: "How many versions of a commercial do you deliver?",
        a: "A typical campaign set includes a hero cut, one or two cutdowns, short bumpers and each of those in the aspect ratios required for broadcast, paid social and in-store screens.",
      },
      {
        q: "Do you handle scripting and concept, or only editing?",
        a: "Both. We can develop the concept, script and storyboard, or take an existing concept through edit, VFX, grade and delivery.",
      },
      {
        q: "Will the ads meet platform technical requirements?",
        a: "Yes. Exports are checked against current Meta, Google Ads, TikTok and broadcast specifications, including duration, safe zones, bitrate and captioning.",
      },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "Branding & Design"],
  },
  "Web Apps": {
    process: [
      {
        title: "Workflow modeling",
        body: "We documented how the team actually works today — roles, states, exceptions and the informal workarounds — because software that ignores the real process gets abandoned.",
      },
      {
        title: "Data model and access rules",
        body: "The schema was designed with row-level security so permissions live in the database rather than scattered through application code, which keeps access rules verifiable.",
      },
      {
        title: "Iterative build",
        body: "A working core shipped in weeks and expanded from real usage, so scope was driven by what the team needed next rather than a speculative feature list.",
      },
      {
        title: "Deployment and support",
        body: "The platform was deployed with monitoring, backups and error reporting, plus documentation and training so the team owns the system rather than depending on us.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Row-level security",
      "REST & GraphQL APIs",
      "Tailwind CSS",
    ],
    whyItMatters: [
      "Most operational pain is not a missing feature in a SaaS tool — it is the gap between three tools that do not talk to each other. Closing that gap with a purpose-built platform removes an entire category of manual work.",
      "A custom platform that models the real workflow scales with headcount. Spreadsheets and generic tools tend to break at exactly the point where growth makes them most expensive to replace.",
    ],
    faqs: [
      {
        q: "When does a custom web app make more sense than off-the-shelf software?",
        a: "When the standard tool covers most of the workflow but the remaining part is manual, when you are paying per seat for features you never use, or when the process is a genuine competitive advantage worth building around.",
      },
      {
        q: "How is data security handled?",
        a: "Access rules are enforced at the database level with row-level security and role-based permissions, sensitive credentials live in server-side environment variables, and every deployment includes backups and audit history.",
      },
      {
        q: "Do we own the code?",
        a: "Yes. You own the codebase, the data and the infrastructure accounts. We hand over repositories and documentation, and you are free to continue with any development team.",
      },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Custom Platforms & Apps", "AI Solutions", "Automation & CRM"],
  },
  Tools: {
    process: [
      {
        title: "Process discovery",
        body: "We sat with the people doing the task, wrote down every step including the undocumented ones, and identified where errors and delays actually enter the process.",
      },
      {
        title: "Scope to one job",
        body: "The tool was scoped deliberately narrowly — one job done properly — rather than a general platform that would need training before anyone could use it.",
      },
      {
        title: "Build with validation",
        body: "Validation was placed at the point of entry so invalid data is refused rather than silently accepted, and change history was added so any number can be traced.",
      },
      {
        title: "Rollout and documentation",
        body: "We rolled out to a small group first, adjusted from their feedback, then documented the tool so onboarding a new team member takes minutes.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Zod validation",
      "Role-based access control",
    ],
    whyItMatters: [
      "Internal tools rarely get prioritized because they do not appear in revenue reports, yet they are often where the largest recoverable time cost sits. Removing a daily manual step returns hours every week for the life of the business.",
      "Turning tribal knowledge into software also removes key-person risk. When a process lives in a tool with validation and history, it survives holidays, handovers and staff changes.",
    ],
    faqs: [
      {
        q: "How small can an internal tool project be?",
        a: "Very small. Some of the highest-return work we do is a focused two-to-four week build that replaces one recurring manual process.",
      },
      {
        q: "Can the tool connect to systems we already use?",
        a: "Yes. We integrate with CRMs, accounting software, spreadsheets, email and most services with an API, so data moves once instead of being retyped.",
      },
      {
        q: "What happens if requirements change later?",
        a: "The tools are built on a typed, documented stack so they can be extended. You own the code, and we offer ongoing support if you prefer us to handle changes.",
      },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Custom Platforms & Apps", "Automation & CRM", "Website Development"],
  },
  Automation: {
    process: [
      {
        title: "Map the existing process",
        body: "Every step was documented end to end, then split into deterministic steps that can safely be automated and judgement calls that should stay with a person.",
      },
      {
        title: "Build with failure handling",
        body: "Automations were built with explicit error handling, retries and alerting, so a silent break surfaces immediately instead of being discovered weeks later.",
      },
      {
        title: "Integrate the systems",
        body: "Lead sources, CRM, email and document generation were connected directly, so data moves once with a record of each transfer rather than being copied by hand.",
      },
      {
        title: "Measure and refine",
        body: "We instrumented the workflow so time saved is measurable, then refined the sequences that live data showed were misfiring or unnecessary.",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Webhooks",
      "REST APIs",
      "Zapier / Make",
      "OpenAI API",
    ],
    whyItMatters: [
      "Automation is most valuable where a process is frequent, rule-based and currently dependent on somebody remembering. Those tasks quietly consume the capacity a growing team needs for work that actually requires judgement.",
      "Speed of response is itself a competitive advantage. Cutting first-response time from days to minutes usually changes conversion more than any change to the message being sent.",
    ],
    faqs: [
      {
        q: "What business processes are worth automating first?",
        a: "Start with anything high-frequency and rule-based: lead capture and routing, follow-up sequences, document generation, reporting, and data transfer between systems. Judgement-heavy work should stay with people.",
      },
      {
        q: "Will automation replace jobs on our team?",
        a: "In practice it reallocates them. The automated steps are usually the ones nobody wanted — copying data, chasing reminders — which frees staff time for customer-facing and decision-making work.",
      },
      {
        q: "How do you prevent automations from failing silently?",
        a: "Every workflow includes error handling, retry logic and alerting, plus logging so any failed run is visible and traceable rather than discovered when a customer complains.",
      },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Automation & CRM", "AI Solutions", "Custom Platforms & Apps"],
  },
};

const FALLBACK = BANKS["Websites"]!;

/**
 * Hand-written detail for real client projects. Every key must be a live
 * portfolio slug (checked in development by warnOnUnknownSlugs below).
 */
const DETAIL_OVERRIDES: Record<string, ProjectDetail> = {
  "madluvv-social-media-meta-ads": {
    process: [
      {
        title: "One visual style",
        body: "We set a single look for reels, stories, posts and ads so MADLUVV reads as one brand on Instagram, Facebook, TikTok and LinkedIn.",
      },
      {
        title: "Meta ad creative",
        body: "Ads were built around problem-and-solution video: creator-style hooks, close-up brow application clips and short product demos, delivered in weekly batches.",
      },
      {
        title: "Organic content",
        body: "Daily organic posts kept the channels active between campaigns and followed the same visual rules as the ads.",
      },
      {
        title: "Shopify improvements",
        body: "We reorganized the product page layout, added product schema markup and cleaned up front-end code to speed up mobile pages.",
      },
    ],
    technologies: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Meta Ads", "Shopify"],
    whyItMatters:
      "When organic posts, paid ads and the store all look and feel the same, a shopper who sees an ad and then visits the profile or the product page meets the same brand at every step.",
    faqs: [
      {
        q: "What did Pixel2Tech do for MADLUVV?",
        a: "We ran their social media on Instagram, Facebook, TikTok and LinkedIn, produced creative for their Meta ads, made short-form video, and worked on their Shopify store: product page layout, product schema markup and mobile speed.",
      },
      {
        q: "What kind of ad creative did you make?",
        a: "Mostly problem-and-solution video: creator-style hooks, close-up brow application clips and short product demos, delivered in weekly batches alongside daily organic posts.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Social Media & Email", "Video Editing & Ads", "WordPress & Shopify"],
  },
  "affinity-law-social-media-ad-creatives": {
    process: [
      {
        title: "Brand and market review",
        body: "We started from Affinity Law's existing identity and the reality of a competitive Toronto and GTA personal injury market, where trust, clarity and credibility decide whether a creative is believed.",
      },
      {
        title: "Creative strategy and angles",
        body: "We mapped the service angles worth owning (car accidents, slip and fall, negligence, accident claims, wrongful death, free case reviews and no-upfront-fee messaging) and gave each one a clear message and call to action.",
      },
      {
        title: "Content and creative production",
        body: "Social posts and promotional creatives were produced in one visual language: gold and black, high-contrast layouts, strong headline typography and relevant imagery.",
      },
      {
        title: "Paid media creative support",
        body: "We created and adapted static and video-supporting assets for campaigns on Meta, AppLovin and Google Ads, keeping the brand consistent across every placement. This was creative support, not budget, targeting or campaign optimization.",
      },
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "After Effects",
      "Meta Ads creative specs",
      "Google Ads creative specs",
      "AppLovin creative specs",
    ],
    whyItMatters:
      "In legal services the creative is often the first credibility signal a potential client sees. Clear visuals that name the problem and the next step do more for inquiries than any single clever ad, and a reusable creative library keeps both organic and paid channels supplied without starting from a blank canvas each month.",
    faqs: [
      {
        q: "What work did Pixel2Tech do for Affinity Law?",
        a: "Social media management and content planning, engagement-focused posts, promotional and campaign creatives for personal injury services, static ad creatives, video content support, and creative support for advertising campaigns on Meta, AppLovin and Google Ads.",
      },
      {
        q: "Did Pixel2Tech manage the ad campaigns themselves?",
        a: "No. This engagement covered creative and advertising support: producing and adapting the visual assets used in campaigns. It did not include ad budgets, targeting or campaign optimization.",
      },
      {
        q: "What were the outcomes of the project?",
        a: "A more consistent social media presence, a reusable library of campaign creatives, several creative angles across personal injury services, and closer alignment between organic social content and paid advertising creative.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
  "nayyer-carpets-creative-direction-mockups": {
    process: [
      {
        title: "Creative direction",
        body: "We worked as a creative partner alongside Nayyer Carpets' in-house team, refining their visual concepts and giving design feedback on their ongoing marketing.",
      },
      {
        title: "Product mockups",
        body: "We built realistic carpet mockups that place each design in a furnished interior, so customers can see how it would look in a real room.",
      },
      {
        title: "Social and Meta ad creative",
        body: "We designed social posts and Meta ad creatives around the new mockups, keeping the look consistent from post to post.",
      },
      {
        title: "One look across channels",
        body: "We made sure the mockups looked the same on the website and on social, so customers see one brand wherever they find it.",
      },
    ],
    technologies: [
      "Adobe Photoshop",
      "Product mockups",
      "Creative direction",
      "Meta ad creative",
      "Social media design",
    ],
    whyItMatters:
      "People buying a carpet online want to see it in a room before they commit. Realistic mockups answer that question on the product page and in a social feed, and the same images can be reused on every channel.",
    faqs: [
      {
        q: "Did Pixel2Tech manage all of Nayyer Carpets' marketing?",
        a: "No. We worked as a creative and design partner alongside their in-house team, providing creative direction, design feedback and specific visual assets such as the product mockups.",
      },
      {
        q: "What were the product mockups used for?",
        a: "They show carpet designs in realistic rooms on the website, and the same images were reused in social media content so both channels share one visual standard.",
      },
      {
        q: "What exactly did Pixel2Tech contribute?",
        a: "Social media creative design, Meta ad creative support, carpet mockups, website visual support, and design feedback on their ongoing work.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design", "Social Media & Email"],
  },
  "swishtag-social-media-management": {
    process: [
      {
        title: "Content planning",
        body: "We set up a weekly content calendar tied to Swishtag's marketing goals, with a regular posting schedule and a balance of educational and promotional posts.",
      },
      {
        title: "Static graphics",
        body: "We designed a library of static social graphics on the brand's core identity, so the feed has one recognizable look.",
      },
      {
        title: "Social video",
        body: "We produced and edited short social videos that make their point in the first few seconds.",
      },
      {
        title: "Posting and management",
        body: "We handled day-to-day channel management and prepared each post for the platform it was going to.",
      },
    ],
    technologies: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Content management tools",
      "Social analytics tools",
    ],
    whyItMatters:
      "A planned, consistent feed is often the first proof a new visitor gets that a brand is active and cares about quality. For Swishtag it means anyone checking their profile sees the same standard in every post.",
    faqs: [
      {
        q: "Does Pixel2Tech handle the posting for Swishtag?",
        a: "Yes. We cover the whole cycle: content planning, creative production, and scheduling and posting on the social platforms.",
      },
      {
        q: "What kind of video content do you produce?",
        a: "Social-first video: short-form reels, product showcases and other short pieces made for platforms like Instagram and TikTok.",
      },
      {
        q: "How do you keep the content on-brand?",
        a: "We built a design system for Swishtag's social channels that sets typography, color use and image style, so every asset looks like part of the same brand.",
      },
    ],
    relatedReading: COMMERCE_READING,
    relatedServices: ["Social Media & Email", "Video Editing & Ads", "Branding & Design"],
  },
  "book-cover-design-portfolio": {
    process: [
      {
        title: "Audience and market research",
        body: "We looked at competing covers in each book's genre to see which visual cues signal authority and credibility in finance and self-improvement publishing.",
      },
      {
        title: "Cover concepts",
        body: "We developed a visual concept for each title, including How to Start Your Own Private Bank, Wealth Without Wall Street, Inflation Nation, Tax Sale Secrets, Multifamily Money Machine, The VA Hub Pro Client Handbook, Unshackled, Hooked on Cash Flow, The Goal Achiever and Deceived. Each one is built around a single clear, symbolic image.",
      },
      {
        title: "Typography and hierarchy",
        body: "We set the title and author name on each cover so they read clearly at thumbnail size and still feel editorial at full size.",
      },
      {
        title: "Mockups",
        body: "Instead of flat images, we presented the covers as 3D hardcover and paperback mockups with realistic textures, shadows and lighting.",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Editorial typography", "3D mockups"],
    whyItMatters:
      "A cover is often the only thing a reader sees before deciding to click. It has to work as a tiny thumbnail in an online store and as a physical book on a shelf, and it has to look as credible as the ideas inside.",
    faqs: [
      {
        q: "How does the 3D viewer on this page work?",
        a: "It renders each cover on a 3D book model in your browser. Open it with the 3D viewer button above the covers. On a computer you can drag the book to rotate it; on a phone or tablet, use the turn buttons.",
      },
      {
        q: "Do you design the interior pages as well?",
        a: "This project covered the cover art and mockups. We can also typeset and lay out interiors as a separate piece of work.",
      },
      {
        q: "What files do you provide for a cover?",
        a: "Print-ready PDFs with the correct bleed and spine width, high-resolution JPEG and PNG files for e-book platforms such as Amazon Kindle and Apple Books, and mockups for your marketing.",
      },
      {
        q: "Can you design covers for a series?",
        a: "Yes. We link the books with shared typography and layout rules so they read as a series, while each title keeps its own image and identity.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design"],
  },

  "healthcare-meta-ad-creatives": {
    process: [
      {
        title: "Start from the patient's question",
        body: "Each ad opens with the condition or the question a patient is already asking, such as whether knee pain can be treated without surgery, so they recognize themselves before reading anything else.",
      },
      {
        title: "One offer, one next step",
        body: "Every design carries a single message and a single action: call the clinic, book an assessment or visit the website.",
      },
      {
        title: "Calm, factual layout",
        body: "Clean medical imagery, a strict type hierarchy and each clinic's own colors keep the ads professional rather than alarming, with no promises a clinic can't keep.",
      },
      {
        title: "Sized for the feed",
        body: "Designs were built in square and 4:5 formats so they fill the screen in Meta, Instagram and Facebook feeds.",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Meta ad specs", "1:1 and 4:5 formats"],
    whyItMatters:
      "For a clinic, an ad is often the first contact a patient has with the practice. A clear, factual design that names the problem and the next step earns more trust than a loud one, and it sits more comfortably within Meta's rules for health advertising.",
    faqs: [
      {
        q: "Can you design Meta ads for our clinic or dental practice?",
        a: "Yes. We design static and video ads for clinics, dental practices, hearing centers and health brands in the US, UK and Europe, sized for Meta, Instagram and Facebook. Send us your services, offer and brand guidelines to start.",
      },
      {
        q: "How do you keep health ads within Meta's rules?",
        a: "We keep the copy factual: no guaranteed outcomes, no before-and-after promises and no lines that assume something about the viewer's health. Meta makes the final call in its review, so we adjust wording if an ad is rejected.",
      },
      {
        q: "Do you run the campaigns as well?",
        a: "This work covered the ad design. Targeting, budgets and campaign setup are separate; we can supply creative for your media buyer or help plan creative tests.",
      },
    ],
    relatedReading: [POST.metaTesting, POST.practitionerListings, POST.whiteLabelCreative],
    relatedServices: ["Social Media & Email", "Video Editing & Ads", "Branding & Design"],
  },
  "food-and-drink-social-media-creatives": {
    process: [
      {
        title: "Product first",
        body: "We pick the strongest product shot for each post and crop it to fill the frame, so the food or drink is the first thing people see.",
      },
      {
        title: "Short copy",
        body: "Headlines stay to a few words, with one supporting line for the menu item, price or offer.",
      },
      {
        title: "Consistent placement",
        body: "Logos, names, prices and calls to action sit in the same place across a brand's posts, which makes the feed easier to scan.",
      },
      {
        title: "Feed-ready sizes",
        body: "Posts are exported in portrait and square sizes for Instagram and Facebook feeds.",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Instagram and Facebook post sizes"],
    whyItMatters:
      "For a cafe or restaurant, the Instagram grid works like a second menu. People check it before they visit or order, so posts that show the food clearly and look like one brand give them a reason to come in.",
    faqs: [
      {
        q: "Do you design for cafes and restaurants in the US, UK and Europe?",
        a: "Yes. We work remotely from your photos, menu and brand guidelines, and deliver posts ready to schedule on Instagram and Facebook.",
      },
      {
        q: "What do you need from us to start?",
        a: "Your logo and brand colors, product photos, and the items or offers you want to promote. If your photos aren't strong enough yet, we'll tell you what to shoot.",
      },
      {
        q: "Can you make reels as well as static posts?",
        a: "Yes. Short-form video editing is part of our video work, so static posts and reels can be planned together.",
      },
    ],
    relatedReading: [POST.brandGuidelines, POST.metaTesting, POST.outsourceDesign],
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
  "skin-care-social-media-creatives": {
    process: [
      {
        title: "One job per post",
        body: "Each post does one thing: launch a product, explain a routine or show one product up close.",
      },
      {
        title: "Product in focus",
        body: "Product shots sit large and sharp, often in a lifestyle scene, so the packaging is easy to recognize later on a shelf or a product page.",
      },
      {
        title: "Labels, not paragraphs",
        body: "Routine posts use arrows, numbers and short labels so the steps read at a glance.",
      },
      {
        title: "Brand colors throughout",
        body: "Colors and type follow each brand, so the posts fit into its existing feed and ads.",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Instagram post sizes", "Meta ad specs"],
    whyItMatters:
      "Skin care buyers research before they buy and are wary of hype. Posts that show the product clearly and explain how to use it build the familiarity that makes a later ad or product page easier to trust.",
    faqs: [
      {
        q: "Do you work with skin care and beauty brands outside Pakistan?",
        a: "Yes. We design social posts and ad creative for beauty and skin care brands in the US, UK and Europe, working from your product photos and brand guidelines.",
      },
      {
        q: "Can the same designs be used as Meta ads?",
        a: "Most of them, yes. We size posts for feed placements and keep text short, so they can run as ads with light changes to the headline or call to action.",
      },
    ],
    relatedReading: [POST.beautyCreative, POST.metaTesting, POST.brandGuidelines],
    relatedServices: ["Social Media & Email", "Video Editing & Ads", "Branding & Design"],
  },
  "social-media-and-ad-creative-collection": {
    process: [
      {
        title: "Start from the brand",
        body: "Each piece begins with the brand's existing colors, fonts and tone, so it fits the feed it will sit in.",
      },
      {
        title: "Pick one message",
        body: "A product, an offer, a customer review or a tip. One message per design keeps it readable in a second.",
      },
      {
        title: "Choose the format",
        body: "Bold headline over a product shot, review cards, lifestyle scenes or simple educational layouts, whichever carries the message best.",
      },
      {
        title: "Size for the placement",
        body: "Designs are sized for feed and story placements on Meta, Instagram and TikTok.",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Meta ad specs", "TikTok ad specs"],
    whyItMatters:
      "Brands and agencies rarely need one perfect post. They need a steady supply of on-brand designs across products and campaigns. This collection shows the range we can cover for a single brand or for an agency's roster.",
    faqs: [
      {
        q: "Do you work with agencies as a white-label design partner?",
        a: "Yes. We produce social posts and ad creatives under an agency's name for its clients, in the agency's workflow and approval process.",
      },
      {
        q: "How quickly can you turn around a batch of creatives?",
        a: "It depends on the number of designs and how complete the brief is. We agree a schedule up front, usually as weekly or monthly batches.",
      },
    ],
    relatedReading: [POST.whiteLabelCreative, POST.beautyCreative, POST.outsourceDesign],
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
  "brand-identity-design-collection": {
    process: [
      {
        title: "Define the system",
        body: "A primary mark, a small palette, one or two typefaces and a few rules for using them together.",
      },
      {
        title: "Test it on real items",
        body: "We apply the identity to what the business will actually use: cups, bags, packaging, business cards, apparel, signage and screens.",
      },
      {
        title: "Present it on one board",
        body: "Mark, palette, type and mockups sit together on a single board, so a founder can judge the whole identity at once.",
      },
      {
        title: "Refine and hand over",
        body: "After feedback, we refine the chosen direction and prepare the files the business needs to use it.",
      },
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Product and merchandise mockups",
      "Color and type systems",
    ],
    whyItMatters:
      "An identity is judged where customers meet it: on a cup, a bag or a phone screen, not on a white page. Showing the brand in use before launch helps a founder choose with confidence and avoids expensive changes after printing.",
    faqs: [
      {
        q: "What is included in a brand identity project?",
        a: "Usually a logo and wordmark, a color palette, typography, and mockups of the identity on the items your business uses. Brand guidelines can be added so your team applies it consistently.",
      },
      {
        q: "Do you work with startups in the US, UK and Europe?",
        a: "Yes. Most of our identity work is done remotely with founders abroad, with calls at the key decision points.",
      },
      {
        q: "Can you refresh an existing brand instead of starting over?",
        a: "Yes. If the current identity still has recognition worth keeping, a refresh modernizes it without throwing that away.",
      },
    ],
    relatedReading: [POST.identityProcess, POST.brandGuidelines, POST.rebrandVsRefresh],
    relatedServices: ["Branding & Design", "Website Development", "Social Media & Email"],
  },
  "logo-design-folio": {
    process: [
      {
        title: "Several directions",
        body: "We sketch a range of ideas before settling on one, so the choice is between real options.",
      },
      {
        title: "Built to work small",
        body: "The chosen mark is simplified until it reads as a small icon and in a single color.",
      },
      {
        title: "Hand-adjusted letterforms",
        body: "Spacing and letter shapes are adjusted by hand, so the wordmark feels like one piece rather than typed text.",
      },
      {
        title: "Shown in brand color",
        body: "Each logo is presented on its brand color, the way customers will first see it.",
      },
    ],
    technologies: ["Adobe Illustrator", "Vector artwork", "Custom lettering"],
    whyItMatters:
      "A logo shows up everywhere a business does, from a profile picture to an invoice. A mark that stays clear at small sizes saves redesign costs later and keeps the brand recognizable on every channel.",
    faqs: [
      {
        q: "How much does a logo cost?",
        a: "It depends on the number of concepts, revisions and files you need. Our guide to logo pricing in the US, UK and Europe breaks down typical ranges.",
      },
      {
        q: "What files do I get?",
        a: "Vector files for print and signage, plus PNG and SVG versions for web and social, in full color and one color.",
      },
    ],
    relatedReading: [POST.logoCost, POST.identityProcess, POST.brandGuidelines],
    relatedServices: ["Branding & Design", "Social Media & Email"],
  },
  "vip-talking-head-videos": {
    process: [
      {
        title: "Find the hook",
        body: "We watch the full take and move the strongest line to the opening, so viewers get a reason to stay in the first second.",
      },
      {
        title: "Tighten the take",
        body: "Pauses, restarts and filler are cut out, leaving a clean, fast delivery.",
      },
      {
        title: "Text and motion",
        body: "On-screen text and motion graphics carry the key ideas for people watching with the sound off.",
      },
      {
        title: "Keep it moving",
        body: "Zooms, pacing changes and b-roll give a single-camera video visual variety, then we export in 9:16.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Instagram Reels",
      "TikTok",
      "YouTube Shorts",
    ],
    whyItMatters:
      "For founders, coaches and personal brands, short talking-head videos are one of the most direct ways to build trust with an audience. Handing off the edit means they can post regularly without spending their evenings in an editing app.",
    faqs: [
      {
        q: "What do I need to send you?",
        a: "Your raw vertical footage, filmed on a phone or camera, plus your logo, fonts and any examples of edits you like. We handle the cut, text, motion graphics and exports.",
      },
      {
        q: "Can you edit videos for me every week?",
        a: "Yes. Many founders and coaches work with us on a monthly retainer with a set number of videos, which keeps the style consistent and the turnaround predictable.",
      },
      {
        q: "Do you add captions?",
        a: "Yes. On-screen text and captions are part of the edit, so the video still works when people watch without sound.",
      },
    ],
    relatedReading: [POST.coachRetainers, POST.outsourceVideo, POST.metaTesting],
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "Branding & Design"],
  },
  "ugc-video-ads": {
    process: [
      {
        title: "Hook first",
        body: "Each ad opens on a question, a problem or a surprising visual before any branding appears.",
      },
      {
        title: "Show the product early",
        body: "Close-ups of the product in use come in the first seconds, not at the end.",
      },
      {
        title: "Text for sound-off viewing",
        body: "On-screen text states the main benefit, so the ad works for people scrolling with the sound off.",
      },
      {
        title: "One call to action",
        body: "Each ad ends with a single next step, and is exported in 9:16 for Meta, Instagram and TikTok placements.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Meta ad specs",
      "TikTok ad specs",
      "9:16 video",
    ],
    whyItMatters:
      "UGC-style ads are a staple for DTC and e-commerce brands because they look like the content people already watch. The edit decides whether that footage becomes an ad that sells one clear idea or just another clip.",
    faqs: [
      {
        q: "Do you supply the creators, or edit footage we already have?",
        a: "We edit footage you provide, from your creators or your team. We can also write briefs and hook ideas to give to creators before they film.",
      },
      {
        q: "Can you make several versions of one ad for testing?",
        a: "Yes. We often cut one piece of footage into several versions with different hooks or openings, so you can test them against each other.",
      },
    ],
    relatedReading: [POST.ugcAds, POST.metaTesting, POST.productVideo],
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "WordPress & Shopify"],
  },
  "cash-cow-youtube-videos": {
    process: [
      {
        title: "Edit to the narration",
        body: "Each line of the script gets matching footage, a graphic or animated text, so the picture always supports what is being said.",
      },
      {
        title: "Change the view often",
        body: "With no presenter on screen, new visuals every few seconds keep attention through the whole video.",
      },
      {
        title: "Sound design",
        body: "Music and sound effects set the pace and mark key moments.",
      },
      {
        title: "Exports for long and short",
        body: "Main videos are exported in 16:9 for YouTube, with vertical cuts reframed for Shorts.",
      },
    ],
    technologies: ["Adobe Premiere Pro", "Adobe After Effects", "YouTube", "YouTube Shorts"],
    whyItMatters:
      "Faceless channels live on publishing consistently. A reliable editor who can turn narration into watchable videos on schedule is what lets a channel owner focus on topics and scripts instead of the timeline.",
    faqs: [
      {
        q: "What is a cash cow or faceless YouTube channel?",
        a: "A channel where no presenter appears on camera. Videos are built from narration, footage, graphics and text, which makes them easier to produce on a regular schedule.",
      },
      {
        q: "Can you also cut Shorts from the main videos?",
        a: "Yes. We reframe the strongest moments into 9:16 Shorts alongside the main 16:9 upload.",
      },
      {
        q: "Do you write the scripts?",
        a: "This work covered the edit. We can work from your script and voiceover, or discuss scripting as a separate service.",
      },
    ],
    relatedReading: [POST.outsourceVideo, POST.coachRetainers, POST.whiteLabelCreative],
    relatedServices: ["Video Editing & Ads", "Social Media & Email"],
  },
};

warnOnUnknownSlugs("portfolio-detail", Object.keys(DETAIL_OVERRIDES));

export function getProjectDetail(item: PortfolioItem): ProjectDetail {
  const override = DETAIL_OVERRIDES[item.slug];
  if (override) return override;
  const bank = BANKS[item.subcategory] ?? FALLBACK;
  return {
    ...bank,
    whyItMatters: pickFromBank(bank.whyItMatters, slugHash(item.slug)),
  };
}
