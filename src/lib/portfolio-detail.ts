import type { PortfolioItem } from "@/lib/portfolio-data";

/**
 * Extended, per-discipline narrative for portfolio detail pages: process,
 * technologies, "why this matters", FAQs and contextual internal links.
 *
 * Copy is selected deterministically from the project slug so each page keeps
 * a stable, distinct body of text between builds.
 */

export type ProcessStep = { title: string; body: string };
export type Faq = { q: string; a: string };
export type RelatedLink = { slug: string; label: string };

export type ProjectDetail = {
  process: ProcessStep[];
  technologies: string[];
  whyItMatters: string;
  faqs: Faq[];
  relatedReading: RelatedLink[];
  relatedServices: string[];
};

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

type DetailBank = {
  process: ProcessStep[];
  technologies: string[];
  whyItMatters: string[];
  faqs: Faq[];
  relatedReading: RelatedLink[];
  relatedServices: string[];
};

const CREATIVE_READING: RelatedLink[] = [
  { slug: "the-power-of-good-branding-for-business-growth", label: "The Power of Good Branding for Business Growth" },
  { slug: "how-ai-is-changing-modern-branding", label: "How AI Is Changing Modern Branding" },
  { slug: "rebrand-vs-refresh-a-founders-decision-framework", label: "Rebrand vs. Refresh: A Founder's Decision Framework" },
];

const WEB_READING: RelatedLink[] = [
  { slug: "why-every-business-needs-a-modern-website-in-2026", label: "Why Every Business Needs a Modern Website in 2026" },
  { slug: "design-systems-for-small-teams", label: "Design Systems for Small Teams" },
  { slug: "ai-seo-mistakes", label: "Why Your AI Content Is Not Ranking" },
];

const COMMERCE_READING: RelatedLink[] = [
  { slug: "headless-shopify-commerce-guide", label: "Headless Shopify: A Practical Guide for Founders" },
  { slug: "why-every-business-needs-a-modern-website-in-2026", label: "Why Every Business Needs a Modern Website in 2026" },
  { slug: "design-systems-for-small-teams", label: "Design Systems for Small Teams" },
];

const SYSTEMS_READING: RelatedLink[] = [
  { slug: "why-businesses-need-better-systems", label: "Why Most Businesses Don't Need More Software" },
  { slug: "why-modern-brands-need-an-ai-ops-layer", label: "Why Modern Brands Need an AI Ops Layer" },
  { slug: "is-ai-worth-the-investment", label: "Is AI Worth the Investment?" },
];

const VIDEO_READING: RelatedLink[] = [
  { slug: "kling-o1-guide", label: "Kling O1 Explained: Features, Use Cases & Business Benefits" },
  { slug: "how-ai-is-changing-modern-branding", label: "How AI Is Changing Modern Branding" },
  { slug: "replace-digital-marketing-agency", label: "10 Signs It's Time to Replace Your Marketing Agency" },
];

const OVERRIDES: Record<string, ProjectDetail> = {
  "nayyer-carpets-creative-direction-mockups": {
    process: [
      {
        title: "Creative Direction & Collaboration",
        body: "I worked as a creative partner alongside the Nayyer Carpets internal team, helping to refine their visual concepts and bring a fresh design perspective to their ongoing marketing efforts.",
      },
      {
        title: "Product Mockup Creation",
        body: "I developed custom, realistic carpet mockups that placed the brand's designs in premium interior settings, providing customers with a clear and aspirational visualization of the products.",
      },
      {
        title: "Social Media Creative Design",
        body: "We designed a series of engaging social media posts and Meta ad creatives that leveraged the new product mockups to drive higher engagement and brand interest.",
      },
      {
        title: "Visual Consistency Support",
        body: "I ensured that the visual quality of the product mockups translated seamlessly across both the website and social media, creating a unified brand experience for the digital customer.",
      },
    ],
    technologies: [
      "Adobe Photoshop",
      "Creative Direction",
      "Product Visualization",
      "Mockup Design",
      "Meta Creative Studio",
      "Digital Design Systems",
    ],
    whyItMatters:
      "High-end product visualization is the bridge between a customer's curiosity and their confidence to purchase. By placing carpets in realistic, premium environments, we didn't just show a product—we sold a vision of a home, significantly elevating the brand's digital presence in the process.",
    faqs: [
      {
        q: "Did you manage the entire marketing for Nayyer Carpets?",
        a: "No, I worked as a creative and design partner alongside their internal team, providing creative direction, design improvements, and specific visual assets like mockups.",
      },
      {
        q: "What were the product mockups used for?",
        a: "The mockups were used to present carpet designs in realistic environments on the website and were repurposed for social media content to maintain visual quality across channels.",
      },
      {
        q: "What specific contributions did you make?",
        a: "My role included social media creative design, Meta creative support, carpet/product mockup creation, website visual support, and overall design refinement and feedback.",
      },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: [
      "Creative Direction",
      "Product Visualization",
      "Social Media Design",
      "Mockup Creation",
    ],
  },
};

const BANKS: Record<string, DetailBank> = {
  "Social Media": {
    process: [
      { title: "Audit and content mapping", body: "We reviewed the existing grid post by post, recorded what actually earned saves and shares, and mapped the content pillars the brand needed to own before a single new layout was drawn." },
      { title: "Design system for the feed", body: "We defined the grid geometry, two type sizes, a locked colour set and an image treatment, then built each recurring format — launch, quote, offer, behind-the-scenes — on top of that shared frame." },
      { title: "Batch production", body: "Posts were produced in batches against the calendar rather than one at a time, which keeps the visual rhythm intentional and removes the scramble at the end of each week." },
      { title: "Handover and enablement", body: "We shipped editable source files, a short usage guide and naming conventions so the in-house team can extend the system without the design quality drifting." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Brand design system", "Content calendar workflow"],
    whyItMatters: [
      "Social is often the first place a customer meets a brand, and a feed that reads as one coherent identity does more for trust than any single high-performing post. A documented system also means the brand keeps looking consistent long after the engagement ends — the value compounds instead of expiring.",
      "Most small teams do not lose on social because of ideas; they lose because production is slow and inconsistent. Turning design into a repeatable system converts a recurring bottleneck into something a non-designer can run, which is the difference between posting monthly and posting weekly.",
    ],
    faqs: [
      { q: "How long does a social media design system take to build?", a: "For most brands the audit, system design and first batch of templates take three to four weeks. After that, ongoing content production runs on a weekly or monthly cycle depending on posting volume." },
      { q: "Do we get the editable source files?", a: "Yes. Every project ships with organised, editable Figma and Adobe source files, plus naming conventions and a short usage guide so your in-house team can produce new posts without starting from scratch." },
      { q: "Can Pixel2Tech also handle the content calendar and copy?", a: "We can. Social media design sits alongside our branding and digital marketing work, so the calendar, copy direction and post design can all be handled by one team rather than split across freelancers." },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
  Branding: {
    process: [
      { title: "Positioning and discovery", body: "We started with the business rather than the sketchpad: what it sells, who it competes with, and the one impression it needs to leave. Everything downstream is judged against that brief." },
      { title: "Concept directions", body: "Three genuinely different directions were developed to the point where they could be evaluated honestly, each applied to real touchpoints instead of shown on a neutral presentation slide." },
      { title: "Refinement and system build", body: "The chosen direction was refined into a full identity system — mark, wordmark, colour, type scale, spacing and imagery rules — tested from favicon size upward." },
      { title: "Guidelines and rollout", body: "We documented the system in brand guidelines and prepared the asset pack, so the team can apply the identity to a deck, a website or a shopfront without a designer in the loop." },
    ],
    technologies: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Brand guideline documentation", "Vector asset library", "Web font pairing"],
    whyItMatters: [
      "Brand identity is the compounding asset in a business. Every ad, page and post either deposits into it or withdraws from it, and a documented system makes sure the deposits keep landing even as the team changes.",
      "A logo alone solves nothing. What actually removes friction is the system around it — the rules that let a founder, a marketer and a developer all produce work that looks like it came from the same company.",
    ],
    faqs: [
      { q: "What is included in a brand identity project?", a: "A typical engagement covers positioning discovery, logo and wordmark design, a colour palette, a typography system, spacing and layout rules, application examples, and a written brand guideline document with all export-ready files." },
      { q: "How is a rebrand different from a brand refresh?", a: "A refresh modernises the existing identity while keeping recognition intact. A rebrand replaces the positioning and the visual system. We help you decide which one the business actually needs before any design work starts." },
      { q: "Will the identity work in print as well as digital?", a: "Yes. We build outward from the smallest digital use case — a 16px favicon — and test upward through web, social, print and signage, supplying CMYK and vector artwork for production." },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design", "Website Development", "Social Media & Email"],
  },
  "Print & Merchandise": {
    process: [
      { title: "Specification and material choice", body: "Before layout, we agreed the stock, finish and print method with the supplier, because paper weight and coating change how colour and type read far more than most people expect." },
      { title: "Artwork on the brand grid", body: "Every piece was laid out on the same grid and type scale as the digital brand, so the printed items sit inside the identity rather than beside it." },
      { title: "Production-ready files", body: "Artwork was prepared in CMYK with correct bleed, trim marks, overprint settings and embedded fonts, accompanied by a spec sheet the printer can work directly from." },
      { title: "Proofing and sign-off", body: "We reviewed physical proofs on the actual substrate before approving the run, which is the only reliable way to catch colour shift and finish issues." },
    ],
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "CMYK / Pantone colour management", "Print production specs", "Packaging dielines"],
    whyItMatters: [
      "Physical touchpoints are where a brand becomes tangible. Packaging, stationery and merchandise are held, kept and photographed, so an inconsistency there is far more visible than one in a passing digital impression.",
      "Print mistakes are expensive because they are permanent. Getting the specification, colour profile and proofing discipline right the first time protects both the budget and the launch timeline.",
    ],
    faqs: [
      { q: "Do you supply files the printer can use directly?", a: "Yes. All artwork ships print-ready with the correct bleed, trim, colour profile and embedded assets, plus a specification sheet so any commercial printer can produce it without asking for revisions." },
      { q: "Can you work with our existing printer or supplier?", a: "Absolutely. We regularly prepare artwork to a third-party supplier's exact template and technical requirements, and we will liaise with them during proofing if that is helpful." },
      { q: "Do you handle packaging design as well as stationery?", a: "Yes — packaging, labels, dielines, menus, signage, business cards and apparel all fall inside this practice, and all are designed against the same brand system." },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Branding & Design", "Social Media & Email", "Website Development"],
  },
  Websites: {
    process: [
      { title: "Discovery and information architecture", body: "We defined who the site is for, the single action each page should drive, and the structure that gets a visitor there in as few steps as possible before any visual work started." },
      { title: "Wireframes and UI design", body: "Layouts were designed mobile-first at 375px and scaled up, with a component library — buttons, cards, forms, states — so the build stays consistent and future pages assemble quickly." },
      { title: "Development and performance", body: "The site was built as a server-rendered React application with responsive images, a critical CSS path and code splitting, with Core Web Vitals treated as a design constraint rather than an afterthought." },
      { title: "SEO, QA and launch", body: "Semantic headings, structured data, canonical URLs, sitemap and metadata were implemented before launch, followed by cross-browser and device QA and a monitored rollout." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Vercel", "Core Web Vitals tooling"],
    whyItMatters: [
      "A website is the only marketing asset that works every hour of the year, and its speed and clarity set the ceiling on every campaign pointed at it. Improving the page a visitor lands on usually returns more than increasing the spend that sends them there.",
      "Search visibility and user experience have converged. The same things that make a page fast, structured and readable for a person now determine whether Google and AI search surfaces will cite it at all.",
    ],
    faqs: [
      { q: "How long does a website project take?", a: "A focused marketing site typically runs six to ten weeks from discovery to launch. Larger builds with custom functionality or content migration take longer, and we agree the timeline in writing before starting." },
      { q: "Will we be able to update content ourselves?", a: "Yes. We hand over a content workflow your team can run without a developer, along with a short walkthrough so publishing new pages does not depend on us." },
      { q: "Is SEO included in the build?", a: "Technical SEO is built in — semantic HTML, heading hierarchy, metadata, structured data, sitemaps, image optimisation and performance. Ongoing content and link strategy is offered separately as an SEO engagement." },
    ],
    relatedReading: WEB_READING,
    relatedServices: ["Website Development", "Branding & Design", "SEO & Search Growth"],
  },
  "E-Commerce": {
    process: [
      { title: "Funnel and catalogue audit", body: "We traced the real path from landing to purchase, identified where customers dropped out, and reviewed how the catalogue was structured against how customers actually search for products." },
      { title: "Product and checkout design", body: "Product templates were rebuilt around the questions that block a purchase — sizing, materials, shipping, returns — and the checkout collapsed into the fewest reviewable steps possible." },
      { title: "Storefront build", body: "The storefront was implemented with fast product imagery, faceted filtering and a payment flow tested on mid-range mobile hardware, where most of the traffic actually converts." },
      { title: "Launch and iteration", body: "After launch we monitored funnel analytics and refined the friction points that only appear with live traffic rather than assuming the first design was final." },
    ],
    technologies: ["Shopify", "Shopify Hydrogen", "React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Analytics & funnel tracking"],
    whyItMatters: [
      "In e-commerce, small structural improvements compound against every order. A checkout that stops asking for unnecessary information or a product page that answers the real objection changes revenue permanently, not just for one campaign.",
      "Mobile is now the majority of storefront traffic but is often designed last. Building for a mid-range phone first is the single change that most reliably moves conversion for growing brands.",
    ],
    faqs: [
      { q: "Do you work with Shopify or custom-built stores?", a: "Both. Shopify and headless Shopify cover most brands well, and we build fully custom storefronts on React and Next.js when the catalogue, pricing logic or integrations need something the platform cannot handle." },
      { q: "Can you migrate our existing store without losing SEO?", a: "Yes. Migrations include a full URL map with 301 redirects, preserved metadata and structured data, and post-launch monitoring so rankings and indexed pages carry over." },
      { q: "What actually improves e-commerce conversion?", a: "In our experience: faster product pages, fewer checkout steps, guest purchase, honest shipping and returns information shown before the cart, and product photography that answers the sizing and material questions people would otherwise email about." },
    ],
    relatedReading: COMMERCE_READING,
    relatedServices: ["WordPress & Shopify", "Website Development", "SEO & Search Growth"],
  },
  "Mobile Apps": {
    process: [
      { title: "User research and job mapping", body: "We identified the single job a user opens the app to do, then mapped every screen against whether it helps or delays that job." },
      { title: "Wireframes and prototypes", body: "Low-fidelity flows were prototyped and tested before visual design, so navigation problems surfaced while they were still cheap to fix." },
      { title: "UI system and screens", body: "A component library covering buttons, sheets, form states, loading and empty states was built first, then screens were assembled from it for consistent behaviour throughout." },
      { title: "Developer handoff", body: "Handoff included spacing tokens, interaction specs, edge-case states and exportable assets, so engineering implements the design without reinterpreting it." },
    ],
    technologies: ["Figma", "React Native", "TypeScript", "Design tokens", "Interactive prototyping", "Supabase", "Accessibility (WCAG) review"],
    whyItMatters: [
      "App retention is decided in the first session. If a user reaches the thing they came for quickly, the rest of the product gets a chance; if not, no later feature recovers them.",
      "A documented UI system pays for itself across every future release, because engineering assembles new screens from existing parts instead of rebuilding patterns and re-litigating decisions each sprint.",
    ],
    faqs: [
      { q: "Do you design for both iOS and Android?", a: "Yes. We design a shared system that respects each platform's native conventions for navigation, typography and gestures, so the app feels correct on both rather than ported to one." },
      { q: "Do you also build the app or only design it?", a: "We do both. Many clients take the design and hand it to their own engineers, and we also build production apps in React Native with a Supabase or Node.js backend." },
      { q: "How do you validate the design before development?", a: "Interactive prototypes are tested with real users on real devices before any code is written, which is far cheaper than discovering the same navigation problem after the build." },
    ],
    relatedReading: WEB_READING,
    relatedServices: ["Custom Platforms & Apps", "AI Solutions", "Website Development"],
  },
  "Short Form": {
    process: [
      { title: "Hook and story planning", body: "Each clip was planned around its opening two seconds first, because that is the only part of a short-form video every viewer actually sees." },
      { title: "Edit template design", body: "We defined pacing, caption style, transition set and sound design once, then applied it across the batch so the channel gains a recognisable signature." },
      { title: "Editing and sound", body: "Cuts were assembled, colour-matched and levelled, with music beds ducked under dialogue so the clip stays intelligible on a phone speaker in a noisy room." },
      { title: "Captioning and platform exports", body: "Captions were hand-corrected and burned in at a readable size, and each clip was exported to the correct ratio and specification for every destination platform." },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Adobe Audition", "Motion graphics templates", "Platform-native export presets"],
    whyItMatters: [
      "Short-form is now the cheapest reach available to most brands, but only when the edit earns the first two seconds. Structure, not budget, is what separates clips that travel from clips that stall.",
      "A repeatable edit template turns video from a per-project scramble into a production line, which is what makes consistent weekly publishing realistic for a small team.",
    ],
    faqs: [
      { q: "How many short-form clips can you produce from one shoot?", a: "A single well-planned shoot day typically yields between twelve and thirty usable clips, depending on the format mix and how much B-roll is captured alongside the primary content." },
      { q: "Do you provide captions and multiple aspect ratios?", a: "Yes. Every clip ships with hand-corrected burned-in captions and exports for 9:16, 1:1 and 16:9 so the same edit works across Reels, TikTok, Shorts and paid placements." },
      { q: "Can you edit footage we film ourselves?", a: "Certainly. Many clients shoot in-house and send us the raw files; we handle structure, editing, colour, sound, captions and delivery." },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "Branding & Design"],
  },
  "Long Form": {
    process: [
      { title: "Structure and chapter planning", body: "The raw material was reviewed and restructured into chapters, each with a stated payoff, so the viewer always has a reason to stay through the middle third." },
      { title: "Audio-first assembly", body: "We ran a full audio pass — levelling, noise reduction, de-essing and music ducking — before the picture edit, because audio quality is what viewers read as production value." },
      { title: "Picture edit and visual variety", body: "B-roll, motion graphics, on-screen text and reframing were layered in to carry the sections a single camera angle could not hold on its own." },
      { title: "Colour, thumbnails and delivery", body: "A consistent colour grade, chapter markers, thumbnail options and platform-ready exports completed the delivery so the episode can be published without further work." },
    ],
    technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Adobe Audition", "Colour grading (LUTs)", "Chapter markers & metadata"],
    whyItMatters: [
      "Long-form video is where authority is built. A well-structured episode keeps earning views months later, which makes it one of the few content formats with a genuinely long tail.",
      "Retention in long-form is an editing problem far more often than a content problem. Chapter structure and audio discipline usually recover more watch time than better cameras.",
    ],
    faqs: [
      { q: "What turnaround should we expect per episode?", a: "Most long-form episodes are delivered within three to five working days of receiving the footage, with an agreed revision round included." },
      { q: "Do you provide thumbnails and chapter markers?", a: "Yes. Delivery includes thumbnail options, chapter markers, a suggested title structure and the description metadata needed for publishing." },
      { q: "Can you repurpose the episode into short clips?", a: "That is usually the highest-value add-on. One long-form edit typically produces eight to fifteen short-form clips using the same footage and grade." },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "SEO & Search Growth"],
  },
  Commercial: {
    process: [
      { title: "Concept and deliverable planning", body: "We planned the campaign as a hierarchy — hero film first, cutdowns derived from it — so every version shares one core beat rather than being reassembled from scratch." },
      { title: "Framing for every ratio", body: "Shots were framed and graded for all required deliverable ratios from the outset, avoiding the destructive cropping that ruins most repurposed commercial footage." },
      { title: "Edit, VFX and grade", body: "The hero cut was built around the customer's problem before the product appears, with motion graphics, sound design and a consistent grade applied across the set." },
      { title: "Versioning and ad delivery", body: "Cutdowns, bumpers and platform-specific specifications were exported and checked against each ad network's technical requirements before handover." },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D motion graphics", "Sound design", "Meta & Google Ads video specs"],
    whyItMatters: [
      "Paid media amplifies whatever creative it is given. A commercial that states the stakes before it shows the product lowers cost per result across every channel it runs on.",
      "Producing the full version set from one shoot is what makes commercial video economically sensible for growing brands rather than a one-off expense.",
    ],
    faqs: [
      { q: "How many versions of a commercial do you deliver?", a: "A typical campaign set includes a hero cut, one or two cutdowns, short bumpers and each of those in the aspect ratios required for broadcast, paid social and in-store screens." },
      { q: "Do you handle scripting and concept, or only editing?", a: "Both. We can develop the concept, script and storyboard, or take an existing concept through edit, VFX, grade and delivery." },
      { q: "Will the ads meet platform technical requirements?", a: "Yes. Exports are checked against current Meta, Google Ads, TikTok and broadcast specifications, including duration, safe zones, bitrate and captioning." },
    ],
    relatedReading: VIDEO_READING,
    relatedServices: ["Video Editing & Ads", "Social Media & Email", "Branding & Design"],
  },
  "Web Apps": {
    process: [
      { title: "Workflow modelling", body: "We documented how the team actually works today — roles, states, exceptions and the informal workarounds — because software that ignores the real process gets abandoned." },
      { title: "Data model and access rules", body: "The schema was designed with row-level security so permissions live in the database rather than scattered through application code, which keeps access rules verifiable." },
      { title: "Iterative build", body: "A working core shipped in weeks and expanded from real usage, so scope was driven by what the team needed next rather than a speculative feature list." },
      { title: "Deployment and support", body: "The platform was deployed with monitoring, backups and error reporting, plus documentation and training so the team owns the system rather than depending on us." },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Row-level security", "REST & GraphQL APIs", "Tailwind CSS"],
    whyItMatters: [
      "Most operational pain is not a missing feature in a SaaS tool — it is the gap between three tools that do not talk to each other. Closing that gap with a purpose-built platform removes an entire category of manual work.",
      "A custom platform that models the real workflow scales with headcount. Spreadsheets and generic tools tend to break at exactly the point where growth makes them most expensive to replace.",
    ],
    faqs: [
      { q: "When does a custom web app make more sense than off-the-shelf software?", a: "When the standard tool covers most of the workflow but the remaining part is manual, when you are paying per seat for features you never use, or when the process is a genuine competitive advantage worth building around." },
      { q: "How is data security handled?", a: "Access rules are enforced at the database level with row-level security and role-based permissions, sensitive credentials live in server-side environment variables, and every deployment includes backups and audit history." },
      { q: "Do we own the code?", a: "Yes. You own the codebase, the data and the infrastructure accounts. We hand over repositories and documentation, and you are free to continue with any development team." },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Custom Platforms & Apps", "AI Solutions", "Automation & CRM"],
  },
  Tools: {
    process: [
      { title: "Process discovery", body: "We sat with the people doing the task, wrote down every step including the undocumented ones, and identified where errors and delays actually enter the process." },
      { title: "Scope to one job", body: "The tool was scoped deliberately narrowly — one job done properly — rather than a general platform that would need training before anyone could use it." },
      { title: "Build with validation", body: "Validation was placed at the point of entry so invalid data is refused rather than silently accepted, and change history was added so any number can be traced." },
      { title: "Rollout and documentation", body: "We rolled out to a small group first, adjusted from their feedback, then documented the tool so onboarding a new team member takes minutes." },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Zod validation", "Role-based access control"],
    whyItMatters: [
      "Internal tools rarely get prioritised because they do not appear in revenue reports, yet they are often where the largest recoverable time cost sits. Removing a daily manual step returns hours every week for the life of the business.",
      "Turning tribal knowledge into software also removes key-person risk. When a process lives in a tool with validation and history, it survives holidays, handovers and staff changes.",
    ],
    faqs: [
      { q: "How small can an internal tool project be?", a: "Very small. Some of the highest-return work we do is a focused two-to-four week build that replaces one recurring manual process." },
      { q: "Can the tool connect to systems we already use?", a: "Yes. We integrate with CRMs, accounting software, spreadsheets, email and most services with an API, so data moves once instead of being retyped." },
      { q: "What happens if requirements change later?", a: "The tools are built on a typed, documented stack so they can be extended. You own the code, and we offer ongoing support if you prefer us to handle changes." },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Custom Platforms & Apps", "Automation & CRM", "Website Development"],
  },
  Automation: {
    process: [
      { title: "Map the existing process", body: "Every step was documented end to end, then split into deterministic steps that can safely be automated and judgement calls that should stay with a person." },
      { title: "Build with failure handling", body: "Automations were built with explicit error handling, retries and alerting, so a silent break surfaces immediately instead of being discovered weeks later." },
      { title: "Integrate the systems", body: "Lead sources, CRM, email and document generation were connected directly, so data moves once with a record of each transfer rather than being copied by hand." },
      { title: "Measure and refine", body: "We instrumented the workflow so time saved is measurable, then refined the sequences that live data showed were misfiring or unnecessary." },
    ],
    technologies: ["Node.js", "TypeScript", "Supabase", "PostgreSQL", "Webhooks", "REST APIs", "Zapier / Make", "OpenAI API"],
    whyItMatters: [
      "Automation is most valuable where a process is frequent, rule-based and currently dependent on somebody remembering. Those tasks quietly consume the capacity a growing team needs for work that actually requires judgement.",
      "Speed of response is itself a competitive advantage. Cutting first-response time from days to minutes usually changes conversion more than any change to the message being sent.",
    ],
    faqs: [
      { q: "What business processes are worth automating first?", a: "Start with anything high-frequency and rule-based: lead capture and routing, follow-up sequences, document generation, reporting, and data transfer between systems. Judgement-heavy work should stay with people." },
      { q: "Will automation replace jobs on our team?", a: "In practice it reallocates them. The automated steps are usually the ones nobody wanted — copying data, chasing reminders — which frees staff time for customer-facing and decision-making work." },
      { q: "How do you prevent automations from failing silently?", a: "Every workflow includes error handling, retry logic and alerting, plus logging so any failed run is visible and traceable rather than discovered when a customer complains." },
    ],
    relatedReading: SYSTEMS_READING,
    relatedServices: ["Automation & CRM", "AI Solutions", "Custom Platforms & Apps"],
  },
};

const FALLBACK = BANKS["Websites"]!;

const DETAIL_OVERRIDES: Record<string, ProjectDetail> = {
  "affinity-law-social-media-ad-creatives": {
    process: [
      { title: "Brand and market review", body: "We started from Affinity Law's existing identity and the reality of a competitive Toronto and GTA personal injury market, where trust, clarity and credibility decide whether a creative is believed." },
      { title: "Creative strategy and angles", body: "We mapped the service angles worth owning — car accidents, slip and fall, negligence, accident claims, wrongful death, free case reviews and no-upfront-fee messaging — and gave each one a clear message and call to action." },
      { title: "Content and creative production", body: "Social posts and promotional creatives were produced against one visual language: gold and black, high-contrast layouts, strong headline typography and emotionally relevant imagery." },
      { title: "Paid media creative support", body: "We created and adapted static and video-supporting assets for advertising campaigns on Meta, AppLovin and Google Ads, keeping brand consistency across every placement. This was creative and advertising support rather than budget, targeting or campaign optimisation." },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects", "Meta Ads creative specs", "Google Ads creative specs", "AppLovin creative specs"],
    whyItMatters:
      "In legal services the creative is often the first credibility signal a potential client receives. Consistent, clearly written visuals that name the problem and the next step do more for enquiry volume than any single clever ad, and a reusable creative library means the firm can keep both organic and paid channels fed without restarting from a blank canvas each month.",
    faqs: [
      { q: "What work did Pixel2Tech do for Affinity Law?", a: "Social media management and content planning, engagement-focused posts, promotional and campaign creatives for personal injury services, static ad creatives, video content support, and creative support for advertising campaigns on Meta, AppLovin and Google Ads." },
      { q: "Did Pixel2Tech manage the ad campaigns themselves?", a: "This engagement covered creative and advertising support — producing and adapting the visual assets used in campaigns. It did not include owning ad budgets, targeting or campaign optimisation." },
      { q: "What were the outcomes of the project?", a: "A more consistent social media presence, a reusable library of campaign creatives, multiple tested creative angles across personal injury services, and closer alignment between organic social content and paid advertising creative." },
    ],
    relatedReading: CREATIVE_READING,
    relatedServices: ["Social Media & Email", "Branding & Design", "Video Editing & Ads"],
  },
};

export function getProjectDetail(item: PortfolioItem): ProjectDetail {
  const override = DETAIL_OVERRIDES[item.slug];
  if (override) return override;
  const bank = BANKS[item.subcategory] ?? FALLBACK;
  const seed = hash(item.slug);
  return {
    process: bank.process,
    technologies: bank.technologies,
    whyItMatters: bank.whyItMatters[seed % bank.whyItMatters.length]!,
    faqs: bank.faqs,
    relatedReading: bank.relatedReading,
    relatedServices: bank.relatedServices,
  };
}
