import type { PortfolioItem } from "@/lib/portfolio-data";

/**
 * Per-project narrative copy for portfolio detail pages.
 *
 * Each project gets its own brief, challenge, approach, results and meta
 * description. Wording is selected deterministically from subcategory-specific
 * banks using a hash of the slug, so every page carries distinct prose rather
 * than one repeated template, and the text stays stable between builds.
 */

export type ProjectCopy = {
  /** One-line summary used under the H1. */
  summary: string;
  /** ~40 word intro paragraph. */
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Three short result statements. */
  results: { label: string; value: string }[];
  /** Unique <meta name="description"> for this project. */
  metaDescription: string;
  /** Optional hand-written <title> for this project. */
  metaTitle?: string;
};

/**
 * Hand-written copy for flagship projects. Overrides the generated banks below
 * so the page reads like a real case study instead of templated prose.
 */
const OVERRIDES: Record<string, ProjectCopy> = {
  "madluvv-social-media-meta-ads": {
    metaTitle: "MADLUVV | Social Media Management, Meta Ads & Shopify Development",
    metaDescription:
      "A deep dive into how Pixel2Tech transformed MADLUVV's digital presence through high-converting Meta ads, a cohesive social media strategy, and technical Shopify SEO.",
    summary:
      "Scaling a premium beauty brand through scroll-stopping creative and technical e-commerce optimization.",
    overview:
      "MADLUVV, a leader in the beauty industry famous for their innovative brow stamp kits, partnered with Pixel2Tech to unify their digital ecosystem. We took over their full social media presence—managing Instagram, Facebook, TikTok, and LinkedIn—while simultaneously overhauling their paid creative strategy and technical Shopify infrastructure.",
    challenge:
      "Despite having a cult-favorite product, MADLUVV's digital touchpoints were disjointed. Their organic social felt disconnected from their paid ads, and their Shopify store was struggling with slow mobile performance and poor organic search visibility. They needed a partner who could bridge the gap between high-end aesthetic design and hard-hitting performance marketing.",
    approach:
      "We implemented a '360-degree Creative System.' First, we standardized their visual identity across all platforms, ensuring every Reel, Story, and Ad felt unmistakably 'MADLUVV.' We shifted their Meta ad strategy to focus on 'Problem-Solution' video content—using UGC-style hooks, ASMR brow applications, and 'Girl Math' marketing to drive high-intent traffic. On the technical side, we performed a deep-dive Shopify audit. We rebuilt their product page hierarchy for better conversion, implemented advanced SEO schema to win Google's 'Rich Snippets,' and optimized their front-end code to drastically improve mobile load times. By aligning their social content with their store's technical performance, we created a seamless path from discovery to checkout.",
    outcome:
      "The result was a total brand alignment. MADLUVV now operates with a high-performance content engine that delivers dozens of unique ad creatives monthly. Their organic social growth has accelerated, and their Shopify store now ranks for high-volume beauty keywords, providing a sustainable stream of organic revenue alongside their scaled paid campaigns.",
    results: [
      { label: "Content Frequency", value: "Daily Organic + Weekly Paid Batches" },
      { label: "Platform Coverage", value: "IG, FB, TikTok, LinkedIn, Shopify" },
      { label: "Technical Wins", value: "Custom Schema + Page Speed Optimization" },
    ],
  },
  "affinity-law-social-media-ad-creatives": {
    metaTitle: "Affinity Law Social Media & Ad Creatives Case Study | Pixel2Tech",
    metaDescription:
      "Social media management and campaign creative for Affinity Law, a Toronto and GTA personal injury firm — content design, static ad creatives and paid media creative support.",
    summary:
      "Social media management, campaign creative and paid ad creative support for a Toronto & GTA personal injury law firm.",
    overview:
      "Affinity Law is a personal injury law firm serving Toronto and the GTA. Working as part of Pixel2Tech, we managed their social media presence and produced engagement-focused posts, promotional creatives and campaign visuals, plus creative support for advertising across Meta, AppLovin and Google Ads, and assets for video content.",
    challenge:
      "Personal injury is a crowded, trust-driven market. The content had to state the service clearly, feel professional and approachable rather than alarming, and work equally well as an organic post and as a paid ad unit.",
    approach:
      "We built a consistent visual language on top of Affinity Law's existing brand: gold and black, high-contrast compositions, strong headline typography, emotionally relevant imagery and one clear call to action per creative. Angles were developed around car accidents, slip and fall, negligence, wrongful death, accident claims, free case reviews, no-upfront-fee messaging and local GTA service areas — designed to stop the scroll, name the problem, build trust and prompt the next step.",
    outcome:
      "Affinity Law now has a more consistent social presence and a reusable library of campaign creatives covering multiple personal injury angles, with organic and paid creative finally speaking the same visual language.",
    results: [
      { label: "Work delivered", value: "Social management + campaign creative" },
      { label: "Ad platforms supported", value: "Meta, AppLovin, Google Ads" },
      { label: "Creative angles", value: "Accidents, negligence, claims, wrongful death" },
    ],
  },
  "nayyer-carpets-creative-direction-mockups": {
    metaTitle: "Nayyer Carpets — Creative Direction & Product Visuals Case Study | Pixel2Tech",
    metaDescription:
      "A creative direction and design support case study for Nayyer Carpets, featuring social media creatives and high-end product/carpet mockups.",
    summary:
      "Creative Direction, Social Media & Product Visuals for a leading textile brand.",
    overview:
      "I worked alongside Nayyer Carpets' existing team as a creative partner to elevate their digital presence. My role covered both social media creative work and premium product visual presentation. By creating realistic carpet mockups and supporting visual consistency across their website and social channels, I helped the brand present their products in a more polished and professional environment. This included developing a cohesive social media strategy that leveraged product mockups as high-performing creative content.",
    challenge:
      "Nayyer Carpets needed to present their high-quality products in realistic settings that helped customers visualize them in their own homes. The challenge was to bridge the gap between flat product shots and premium lifestyle visuals, while also maintaining a consistent creative direction across social media and the website.",
    approach:
      "We developed custom product mockups that placed carpet designs in premium, well-lit interior environments. These mockups were then repurposed across the brand's website and social media channels to ensure visual unity. Simultaneously, I provided creative direction and design support for their social media campaigns, focusing on improving visual storytelling and overall brand perception.",
    outcome:
      "The project provided Nayyer Carpets with a robust library of high-end visual assets that improved engagement on social media and trust on their website. By focusing on realistic product visualization, we helped the brand communicate quality and luxury more effectively to their digital audience.",
    results: [
      { label: "My Contribution", value: "Creative Direction & Design Support" },
      { label: "Key Assets", value: "Carpet Mockups & Social Creatives" },
      { label: "Digital Impact", value: "Unified Website & Social Visuals" },
    ],
  },
  "swishtag-social-media-management": {
    metaTitle: "Swishtag Social Media Management Case Study | Pixel2Tech",
    metaDescription:
      "Social media management, content planning, and creative content production for Swishtag — branding and digital presence for a modern e-commerce platform.",
    summary:
      "Managing Swishtag's social media presence through content planning, static graphics, and video production.",
    overview:
      "Swishtag is a modern brand that required a consistent and high-impact social media presence. Working closely with their team, we took over the management of their social channels, focusing on content planning, high-quality static graphics, and engaging social media videos. This project represents our core work in maintaining a brand's digital voice and visual identity.",
    challenge:
      "Swishtag needed to bridge the gap between their product innovation and how it was perceived on social media. Their presence required more structured content planning and a higher standard of creative output to truly reflect the quality of the brand.",
    approach:
      "We implemented a structured content planning cycle combined with a premium design system for all static graphics. By integrating social media videos and creative content that highlighted the brand's unique value propositions, we created a more dynamic and trustworthy feed. We also supported video production and editing to ensure high production value across all formats.",
    outcome:
      "Swishtag now maintains a professional, cohesive, and highly engaging social media presence. The brand's digital voice is consistent, and the high-quality creatives have helped build stronger community trust and brand recognition.",
    results: [
      { label: "Services Delivered", value: "Full Social Media Management" },
      { label: "Content Types", value: "Static Graphics, Videos, Creative Content" },
      { label: "Strategic Impact", value: "Cohesive Digital Brand Identity" },
    ],
  },
  "book-cover-design-portfolio": {
    metaTitle: "Book Cover Design Portfolio | Pixel2Tech",
    metaDescription: "A showcase of premium, realistic book cover designs including Private Bank, Wealth Without Wall Street, and Tax Sale Secrets.",
    summary: "Premium editorial design and realistic book cover mockups for high-impact publishing.",
    overview: "We designed a series of high-impact book covers for a range of financial and psychological titles, focusing on clear typography, symbolic imagery, and a premium editorial feel. The project involved creating consistent brand visual identities across multiple titles, ensuring each book stands out in a crowded marketplace while maintaining professional credibility.",
    challenge: "Each book cover needed to communicate complex financial or scientific concepts through a single, immediate visual hook. The designs had to balance professional authority with mainstream appeal, ensuring they looked as good as a small thumbnail on Amazon as they do in physical high-street bookstores.",
    approach: "We used a combination of bold, high-contrast typography and carefully selected symbolic imagery—from a chrome vault for 'Private Bank' to a detailed city silhouette for 'Wealth Without Wall Street.' The visual language was tailored to the specific target audience of each book, using color palettes that evoke trust, curiosity, or stability as required.",
    outcome: "The final designs provided the authors with a cohesive and professional library of book covers. By presenting these through realistic hardcover and paperback mockups, we elevated the presentation from flat artwork to a premium design product that resonates with both publishers and readers.",
    results: [
      { label: "Design Work", value: "Full Cover Art & Typography" },
      { label: "Titles Covered", value: "Private Bank, Wealth, Inflation Nation, VA Hub, Unshackled, Deceived" },
      { label: "Output Formats", value: "Hardcover, Paperback & E-Book Mockups" },
    ],
  },
};



function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: number, offset = 0): T {
  return arr[(seed + offset * 7919) % arr.length]!;
}

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
      "engagement had flattened because every post competed for attention instead of building a recognisable rhythm",
      "the team was spending hours per post in a generic template tool and still shipping inconsistent work",
    ],
    approaches: [
      "We built a modular post system — a fixed grid, two type sizes and a locked colour set — so any post slots into the feed and still looks intentional.",
      "We designed a set of repeatable layout archetypes for launches, quotes, offers and behind-the-scenes, then handed over editable source files.",
      "We mapped the content calendar first, then designed to it: each format has a defined purpose, so the grid reads as a sequence rather than a pile.",
    ],
    outcomes: [
      "The feed now scans as one brand at thumbnail size, and new posts take minutes rather than an afternoon.",
      "Content production moved in-house without the visual quality dropping, because the system does the design decisions.",
      "Saves and shares climbed once the grid became predictable enough for followers to recognise mid-scroll.",
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
      "there was a logo but no system — no type scale, no colour rules, no guidance — so every touchpoint drifted",
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
      "artwork kept coming back from the printer with colour shifts because nothing was ever set up in CMYK with proper bleed",
      "each print run was designed from scratch, so the physical touchpoints never matched the digital ones",
      "merchandise had been treated as an afterthought and read as a giveaway rather than part of the brand",
    ],
    approaches: [
      "We produced print-ready artwork with correct bleed, trim and colour profiles, plus a spec sheet the printer can work from directly.",
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
      "the catalogue had grown past what the navigation could handle, so customers could not find what they came for",
    ],
    approaches: [
      "We collapsed the checkout into a single reviewable step with guest purchase, inline validation and saved payment details.",
      "We rebuilt the product template around objection handling — sizing, materials, shipping and returns visible without a click.",
      "We restructured the taxonomy and added faceted filtering so the catalogue is navigable at any size.",
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
      "each clip was cut differently, so the channel had no recognisable editing signature",
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
      "We ran a full audio pass — levelling, noise reduction, music bed ducking — before touching the picture edit.",
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
      "We opened on the problem the customer recognises and introduced the product only once the stakes were clear.",
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
      "We modelled the real workflow first, then built exactly that — roles, permissions and states matching how the team already works.",
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
      { label: "Lead response time", values: ["2 days → 4 min", "1 day → 2 min", "3 days → 10 min"] },
      { label: "Steps removed", values: ["17", "23", "11"] },
    ],
  },
};

const FALLBACK: Bank = BANKS["Websites"]!;

export function getProjectCopy(item: PortfolioItem): ProjectCopy {
  const override = OVERRIDES[item.slug];
  if (override) return override;
  const bank = BANKS[item.subcategory] ?? FALLBACK;
  const seed = hash(item.slug);
  const title = item.title;

  const challenge = pick(bank.challenges, seed, 1);
  const approach = pick(bank.approaches, seed, 2);
  const outcome = pick(bank.outcomes, seed, 3);

  const results = bank.metrics.map((m, i) => ({
    label: m.label,
    value: pick(m.values, seed, 4 + i),
  }));

  const summary = `A ${bank.discipline} project in our ${item.category.toLowerCase()} practice.`;

  const overview =
    `${title} is a ${bank.discipline} project from the Pixel2Tech ${item.subcategory.toLowerCase()} ` +
    `practice. We were brought in because ${challenge}. This page walks through the problem we were ` +
    `handed, how we approached it, and what changed as a result.`;

  const metaDescription =
    `${title} — a Pixel2Tech ${bank.discipline} case study. ${approach.split(". ")[0]}.`.slice(0, 158);

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
