import type { FaqItem } from "@/components/faq";
import { SERVICES, serviceAnchor } from "@/lib/site-config";

/**
 * Copy and data for the dedicated service pages at /services/<slug>, one per
 * canonical service in site-config. The slug is always serviceAnchor(title),
 * the same id the service cards on /services use.
 *
 * Truth rules for this file: no invented clients, numbers, prices, guarantees,
 * certifications or time-zone promises. Business facts come from site-config;
 * pricing and ownership wording follows the terms page; portfolio notes follow
 * the case-study copy in portfolio-copy.ts.
 */

export type ServiceTitle = (typeof SERVICES)[number];

/** The four buyer groups every page speaks to, in this order. */
export type AudienceKey = "startups" | "smbs" | "dtc" | "agencies";

export const AUDIENCE_LABELS: Record<AudienceKey, string> = {
  startups: "US startups",
  smbs: "Small and midsize businesses",
  dtc: "DTC and e-commerce brands",
  agencies: "Agencies",
};

type Deliverable = { title: string; desc: string };

/** A real portfolio case study (slug from portfolio-data) and why it is relevant here. */
type RelatedWork = { slug: string; note: string };

/** A planned or published article at /blog/<slug>. */
type RelatedArticle = { slug: string; title: string; desc: string };

type ServicePageCopy = {
  /** <title>, 60 characters or fewer. */
  metaTitle: string;
  /** Meta description, 140 to 155 characters. */
  metaDescription: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** H1 is `${h1} ${h1Highlight}`; the highlight names who the service is for. */
  h1: string;
  h1Highlight: string;
  /** One-sentence answer to "what do you do?" under the H1. */
  answer: string;
  /** Short tags: typical deliverables and tools (same as the /services card). */
  tags: string[];
  deliverables: Deliverable[];
  audiences: Record<AudienceKey, string>;
  /** What moves the quote up or down. No prices. */
  priceDrivers: string[];
  /** Only real client work. Leave empty when nothing published fits. */
  work: RelatedWork[];
  articles: [RelatedArticle, RelatedArticle, RelatedArticle];
  /** 4 to 6 questions, answers of 40 to 80 words. */
  faqs: FaqItem[];
  ctaTitle: string;
};

export type ServicePage = ServicePageCopy & { title: ServiceTitle; slug: string };

/**
 * The same four steps shown under "How a project runs" on /services.
 * Keep the wording of both in sync.
 */
export const SERVICE_PROCESS: { title: string; desc: string }[] = [
  {
    title: "Discovery call",
    desc: "A 30-minute call about your goals, audience and deadline. We ask questions before we recommend anything.",
  },
  {
    title: "Scope and quote",
    desc: "We send a proposal with the scope and timeline, and start once you approve it.",
  },
  {
    title: "Design and build",
    desc: "Our in-house team designs and builds the work, and you review it before anything goes live.",
  },
  {
    title: "Launch and improve",
    desc: "We launch, then keep improving it against what matters to you, such as leads, sales or hours saved.",
  },
];

/** How every engagement is priced. Wording follows the terms and conditions page. */
export const PRICING_POINTS: { title: string; desc: string }[] = [
  {
    title: "Free scoping call",
    desc: "We talk through your goals, audience and deadline before recommending anything or naming a number.",
  },
  {
    title: "Fixed quote in writing",
    desc: "Your proposal sets out the scope, price, milestones, revision rounds, currency and timeline. Work starts once you accept it and any agreed deposit is paid.",
  },
  {
    title: "Changes quoted first",
    desc: "If you ask for something outside the agreed scope, we quote it as additional work before we start on it.",
  },
  {
    title: "Third-party costs listed",
    desc: "Hosting, domains, apps, stock assets and paid tools are separate from our fee unless the proposal says they are included.",
  },
];

const COPY: Record<ServiceTitle, ServicePageCopy> = {
  "Branding & Design": {
    metaTitle: "Brand Identity & Logo Design for US Startups | Pixel2Tech",
    metaDescription:
      "Logo, color palette, typography and brand guidelines for US startups and small businesses, designed in-house and fixed-quoted after a free scoping call.",
    serviceType: "Brand identity design",
    h1: "Brand identity and logo design",
    h1Highlight: "for US startups and small businesses",
    answer:
      "We design your logo, color palette, typography and brand guidelines, plus the templates that apply them, so your website, social posts, ads and packaging all look like one company.",
    tags: ["Logo", "Brand guide", "UI/UX"],
    deliverables: [
      {
        title: "Logo and wordmark",
        desc: "A primary logo, alternate versions and an icon mark, supplied in the file formats you need for web, print and social.",
      },
      {
        title: "Color and typography",
        desc: "A color palette with HEX, RGB and CMYK values, and heading and body typefaces that work on screen and in print.",
      },
      {
        title: "Brand guidelines",
        desc: "A guide showing how to use the logo, colors, type and imagery, so your team and other vendors apply the brand the same way.",
      },
      {
        title: "Social and ad templates",
        desc: "Post, story and ad templates in the new style, ready for your team or ours to fill in.",
      },
      {
        title: "Print artwork",
        desc: "Business cards, packaging, book covers and other print pieces, prepared as print-ready files.",
      },
      {
        title: "UI/UX design",
        desc: "Website and app screens designed in the brand and prepared for developer handoff.",
      },
    ],
    audiences: {
      startups:
        "You need a brand that looks credible to early customers, investors and hires before you have a big marketing budget.",
      smbs: "Your logo was made quickly years ago and now looks different on your sign, website and social profiles.",
      dtc: "You sell online and need product visuals, social templates and packaging that clearly belong to one brand.",
      agencies:
        "You need extra design capacity for client brand projects, working to your process and deadlines.",
    },
    priceDrivers: [
      "A new identity, or a refresh of the logo you have",
      "How many logo concepts and revision rounds are included",
      "How detailed the brand guidelines need to be",
      "How many templates and print pieces you need",
      "Whether website or app UI design is part of the scope",
    ],
    work: [
      {
        slug: "nayyer-carpets-creative-direction-mockups",
        note: "Creative direction, social creatives and realistic carpet mockups, used across the brand's website and social channels.",
      },
      {
        slug: "book-cover-design-portfolio",
        note: "Cover art, typography and hardcover, paperback and e-book mockups for finance, business and self-help titles.",
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        note: "Campaign creative built on the firm's existing gold-and-black brand, consistent across organic posts and paid ads.",
      },
    ],
    articles: [
      {
        slug: "brand-identity-process-for-startups",
        title: "Brand identity process for startups",
        desc: "The stages, timeline and deliverables of a startup identity project.",
      },
      {
        slug: "brand-guidelines-for-small-business",
        title: "Brand guidelines for small businesses",
        desc: "What to put in a brand guide so your team can use it.",
      },
      {
        slug: "outsource-graphic-design-to-pakistan",
        title: "Outsourcing graphic design to Pakistan",
        desc: "A buyer's guide to working with a design team abroad.",
      },
    ],
    faqs: [
      {
        q: "What's included in a brand identity package?",
        a: "A typical package covers a primary logo with alternate versions, a color palette, a typography system and brand guidelines that show how to use them. Many clients add social media templates, print pieces or website UI design. We agree the exact list on the scoping call and write it into the proposal before any design work starts.",
      },
      {
        q: "How much does brand identity design cost?",
        a: "We don't publish a price list, because a logo refresh and a full identity with guidelines and templates are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Can you refresh our logo instead of starting over?",
        a: "Yes. If customers already recognize your name and logo, a refresh keeps what they know and fixes what isn't working, such as poor legibility at small sizes or colors that clash online. If the brand no longer fits the business, a full rebrand may make more sense. We'll give you our honest view on the scoping call.",
      },
      {
        q: "Do we own the logo and brand files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the final logo files and brand guidelines. Fonts and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
      {
        q: "Can a studio in Pakistan design a brand for a US company?",
        a: "Yes. Brand work depends on understanding your customers and competitors, not on sharing an office. We start with a call about your market, review the brands you compete with, and share concepts for your feedback. We work with US clients over email, WhatsApp and Google Meet, and you review every stage before files are final.",
      },
    ],
    ctaTitle: "Get a fixed quote for your brand identity",
  },

  "Website Development": {
    metaTitle: "Website Development for US Small Businesses | Pixel2Tech",
    metaDescription:
      "Mobile-ready websites for US small businesses and startups, built in React, Next.js or custom code by an in-house team. Fixed quote after a free call.",
    serviceType: "Website development",
    h1: "Website development",
    h1Highlight: "for US small businesses and startups",
    answer:
      "We design and build fast, mobile-ready websites in React, Next.js or custom code, from a single landing page to a full business site, set up so visitors understand what you offer and get in touch.",
    tags: ["React", "Next.js", "Custom code"],
    deliverables: [
      {
        title: "Sitemap and wireframes",
        desc: "We plan the pages and what each one needs to do before design starts, so the site follows how your customers decide.",
      },
      {
        title: "Responsive design",
        desc: "Layouts designed for phones first, then tablets and large screens, in your brand.",
      },
      {
        title: "Development and CMS",
        desc: "Built in React, Next.js or custom code, with an editor for the content your team changes often.",
      },
      {
        title: "On-page SEO basics",
        desc: "Page titles, meta descriptions, headings, structured data and an XML sitemap in place at launch.",
      },
      {
        title: "Forms and tracking",
        desc: "Inquiry forms, booking links and analytics events, so you can see which pages bring in leads.",
      },
      {
        title: "Launch and handover",
        desc: "Domain, hosting and redirects set up for launch, with logins and files handed over once the project is paid in full.",
      },
    ],
    audiences: {
      startups:
        "You need a marketing site that explains the product clearly and is easy to change as your positioning shifts.",
      smbs: "Your current site is slow, hard to update or doesn't turn visitors into inquiries.",
      dtc: "You need landing pages or a brand site next to your store, built to the same standard.",
      agencies:
        "You need a development partner to build the sites your team designs and sells to clients.",
    },
    priceDrivers: [
      "Number of pages and unique page templates",
      "Custom design, or adapting an existing layout",
      "Integrations such as booking, payments, forms or a CRM",
      "Whether copywriting and photography are included",
      "Content and URL migration from your current site",
    ],
    work: [],
    articles: [
      {
        slug: "website-redesign-cost-small-business",
        title: "Website redesign cost for small businesses",
        desc: "A line-by-line budget for a redesign, before quotes arrive.",
      },
      {
        slug: "compare-website-development-quotes",
        title: "How to compare website development quotes",
        desc: "Normalize scope, spot hidden costs and score each bid.",
      },
      {
        slug: "outsource-web-development-to-pakistan",
        title: "Outsourcing web development to Pakistan",
        desc: "Engagement models, vetting, contracts and red flags.",
      },
    ],
    faqs: [
      {
        q: "How much does a small business website cost?",
        a: "It depends on the number of pages, how custom the design is, and what the site connects to, such as booking, payments or a CRM. We don't publish a price list. After a free scoping call we send a written proposal with a fixed price, milestones and a timeline. Hosting, domains and paid tools are listed separately unless the proposal includes them.",
      },
      {
        q: "How long does it take to build a website?",
        a: "It depends on the page count, how much content is ready and how quickly feedback comes back. A landing page takes far less time than a multi-page site with integrations. Your proposal includes a timeline with milestones, and we tell you as soon as missing content or delayed approvals are likely to move a date.",
      },
      {
        q: "Will I own my website when it's finished?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. We keep only our own pre-existing tools and internal templates. Third-party items such as themes, fonts, plugins and hosting stay under their own licenses, which pass to you where the license allows.",
      },
      {
        q: "Do you build with WordPress or custom code?",
        a: "Both. Custom React or Next.js builds suit sites that need speed, custom features or app-like behavior. WordPress suits teams who want a familiar editor and a large choice of plugins. We recommend one based on your budget, your content and who will maintain the site after launch, and explain the trade-offs on the scoping call.",
      },
      {
        q: "Can you redesign my site without hurting search traffic?",
        a: "We plan redesigns to protect what already ranks: we map old URLs to new ones with 301 redirects, keep the titles and content that bring in traffic, and check indexing after launch. No one can guarantee rankings, but common causes of lost traffic after a redesign, such as missing redirects and deleted content, can be planned for.",
      },
    ],
    ctaTitle: "Get a fixed quote for your website",
  },

  "WordPress & Shopify": {
    metaTitle: "Shopify & WordPress Development for US Brands | Pixel2Tech",
    metaDescription:
      "Shopify stores and WordPress sites for US brands: theme customization, product pages, apps, payments and migrations. Fixed quote after a free call.",
    serviceType: "Shopify and WordPress development",
    h1: "Shopify and WordPress development",
    h1Highlight: "for US brands",
    answer:
      "We build and improve Shopify stores and WordPress sites, handling the theme, product pages, apps or plugins and payment setup, so you can run the store yourself after launch.",
    tags: ["Shopify", "WordPress", "WooCommerce"],
    deliverables: [
      {
        title: "Store and site setup",
        desc: "Shopify or WordPress configured with your products or pages, navigation, shipping, taxes and payment settings.",
      },
      {
        title: "Theme customization",
        desc: "An existing theme adapted to your brand, or custom sections built where the theme falls short.",
      },
      {
        title: "Product and collection pages",
        desc: "Layouts, product schema and content structure that help shoppers compare and buy.",
      },
      {
        title: "Apps and plugins",
        desc: "The apps or plugins you need, installed and configured, with leftover code from old ones cleaned up.",
      },
      {
        title: "Speed and SEO fixes",
        desc: "Front-end cleanup, image handling and on-page SEO for stores that load slowly on mobile.",
      },
      {
        title: "Platform migrations",
        desc: "Moves from WooCommerce or another platform to Shopify, with products, customers and URL redirects planned.",
      },
    ],
    audiences: {
      startups: "You're launching your first store and want it set up properly from day one.",
      smbs: "Your WordPress site has become slow or fragile, or you want to start selling online.",
      dtc: "Your Shopify store works, but product pages, speed or tracking need fixing before you spend more on ads.",
      agencies: "You need Shopify or WordPress developers to build or maintain client stores.",
    },
    priceDrivers: [
      "Shopify or WordPress, and a customized theme or a custom one",
      "Number of product, collection and page templates",
      "Apps, plugins and integrations to configure",
      "Product, customer and content migration from another platform",
      "Speed, tracking or SEO fixes on an existing store",
    ],
    work: [
      {
        slug: "madluvv-social-media-meta-ads",
        note: "Shopify product page layout, product schema markup and front-end cleanup for faster mobile pages, alongside the brand's ad campaigns.",
      },
    ],
    articles: [
      {
        slug: "shopify-developer-rates",
        title: "Shopify developer rates in 2026",
        desc: "What US brands pay for Shopify work, and why rates vary.",
      },
      {
        slug: "woocommerce-to-shopify-migration",
        title: "WooCommerce to Shopify migration",
        desc: "What breaks during a move, and how to keep your SEO.",
      },
      {
        slug: "wordpress-vs-webflow-vs-squarespace-service-business",
        title: "WordPress vs. Webflow vs. Squarespace",
        desc: "Choosing a platform for a service business website.",
      },
    ],
    faqs: [
      {
        q: "Should I use Shopify or WordPress?",
        a: "Shopify suits most businesses whose main job is selling products, because hosting, checkout and security are handled for you. WordPress suits content-led sites and service businesses, and WooCommerce adds a store when you need one. We recommend a platform based on what you sell, your budget and who will run the site day to day.",
      },
      {
        q: "Can you fix my existing Shopify store instead of rebuilding it?",
        a: "Yes, and it's often the better option. We review the theme, apps and product pages, then fix what slows the store down or confuses shoppers, such as heavy apps, leftover code or unclear product layouts. If a rebuild would cost less over time than repeated patching, we'll say so and explain why.",
      },
      {
        q: "Do you build custom Shopify themes?",
        a: "We do both theme customization and custom builds. Customizing a well-supported theme is usually faster and cheaper, and it keeps theme updates available. A custom theme makes sense when your design or features would mean fighting the theme at every step. We recommend one after looking at your store and your plans.",
      },
      {
        q: "Can you migrate my store from WooCommerce to Shopify?",
        a: "Yes. We plan which products, customers, orders and content move across, rebuild the key templates on Shopify, and map old URLs to new ones with redirects so search traffic and bookmarks keep working. The proposal lists exactly what moves and what doesn't, so you know what to expect before launch day.",
      },
      {
        q: "Who pays for Shopify apps, themes and plugins?",
        a: "Third-party costs such as Shopify plans, paid themes, apps and plugins are separate from our fee unless your proposal says they're included. We list the ones we expect in the proposal, and we recommend keeping those subscriptions in your own accounts so you stay in control of them.",
      },
    ],
    ctaTitle: "Get a fixed quote for your store or site",
  },

  "Custom Platforms & Apps": {
    metaTitle: "Custom App & SaaS Development for US Startups | Pixel2Tech",
    metaDescription:
      "Custom web apps, SaaS products, portals, dashboards and mobile apps for US startups and small businesses, scoped with you and quoted at a fixed price.",
    serviceType: "Custom software development",
    h1: "Custom apps, SaaS and client portals",
    h1Highlight: "for US startups and small businesses",
    answer:
      "We design and build mobile apps, SaaS products, client portals and internal dashboards around how your business works, starting with the smallest version that proves the idea.",
    tags: ["SaaS", "Mobile app", "Portals"],
    deliverables: [
      {
        title: "Discovery and scoping",
        desc: "User roles, key workflows and must-have features written down before design starts, so the first version stays focused.",
      },
      {
        title: "Product and UX design",
        desc: "Screens and flows designed and reviewed before code is written, so changes are cheap while they're still drawings.",
      },
      {
        title: "Front-end and back-end build",
        desc: "The interface, database, user accounts and permissions, built for the features in your scope.",
      },
      {
        title: "Integrations",
        desc: "Connections to the tools you already use, such as payments, email, a CRM or accounting software.",
      },
      {
        title: "Admin dashboards",
        desc: "Internal views for your team to manage users, content, orders or reports.",
      },
      {
        title: "Deployment and handover",
        desc: "Hosting set up, documentation written and code handed over once the project is paid in full.",
      },
    ],
    audiences: {
      startups: "You need an MVP to test with users or show investors, built so it can grow.",
      smbs: "You run key processes on spreadsheets and email threads and need one system for them.",
      dtc: "You need a custom tool or private Shopify app for a workflow no public app handles well.",
      agencies:
        "You need a development team for a client portal, dashboard or web app your agency has sold.",
    },
    priceDrivers: [
      "Number of user roles and core workflows",
      "Integrations with payments, CRMs or other APIs",
      "A web app only, or iOS and Android apps too",
      "Reporting, admin and permission requirements",
      "Hosting and third-party API costs after launch",
    ],
    work: [],
    articles: [
      {
        slug: "custom-web-app-development-cost-pakistan",
        title: "Custom web app development cost",
        desc: "Cost drivers, MVP scoping and running costs for an offshore build.",
      },
      {
        slug: "custom-shopify-app-vs-public-app",
        title: "Custom Shopify app vs. public app",
        desc: "When it's worth building your own Shopify app.",
      },
      {
        slug: "website-ownership-checklist",
        title: "Do you own your website and code?",
        desc: "A checklist for domains, hosting, accounts and code rights.",
      },
    ],
    faqs: [
      {
        q: "How much does a custom web app cost?",
        a: "The biggest cost drivers are the number of user roles, the workflows each role needs, integrations with other software, and reporting. Rather than guess, we scope the first version with you on a free call, then send a written proposal with a fixed price, milestones and a timeline. Hosting and third-party API fees are listed separately.",
      },
      {
        q: "Should we build custom software or use an existing tool?",
        a: "Use an existing tool if it covers most of what you need at a fair price; that's usually faster and cheaper. Build custom when your workflow is what sets you apart, when you're stitching together tools that don't talk to each other, or when per-user fees grow faster than your team. We'll tell you honestly which side you're on.",
      },
      {
        q: "What is an MVP, and do I need one?",
        a: "An MVP, or minimum viable product, is the smallest version of your product that real users can try. It lets you test demand and learn what people use before paying for every feature. Most new products should start there. We help you decide which features belong in the first version and which can wait.",
      },
      {
        q: "Do I own the source code?",
        a: "Yes. Final deliverables, including the code written for your project, transfer to you once it's paid in full, as set out in your proposal. We keep ownership only of our own pre-existing tools and frameworks. Open-source libraries and paid services you use stay under their own licenses.",
      },
      {
        q: "What happens after launch?",
        a: "We fix defects in the work we delivered when they're reported within the support period stated in your proposal. New features, changes made by others after handover, and issues caused by third-party platform changes are quoted as new work, so you can keep improving the product in planned phases.",
      },
    ],
    ctaTitle: "Talk through your app or platform idea",
  },

  "Automation & CRM": {
    metaTitle: "Workflow Automation & CRM Setup for US SMBs | Pixel2Tech",
    metaDescription:
      "Workflow automation and CRM setup for US small businesses: n8n, Make and Zapier builds that move leads, orders and data between your tools automatically.",
    serviceType: "Business process automation",
    h1: "Workflow automation and CRM setup",
    h1Highlight: "for US small businesses",
    answer:
      "We map the repetitive work your team does by hand, such as copying leads between tools or chasing follow-ups, then automate it in n8n, Make or Zapier and set up a CRM that keeps every lead in one place.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
    deliverables: [
      {
        title: "Workflow mapping",
        desc: "A written map of the process as it runs today, where time is lost, and which steps are worth automating.",
      },
      {
        title: "Automation builds",
        desc: "Workflows in n8n, Make or Zapier that move data between your forms, inbox, CRM, store and spreadsheets.",
      },
      {
        title: "CRM setup",
        desc: "Pipelines, fields, lead sources and user roles set up in your CRM, or a custom CRM when off-the-shelf tools don't fit.",
      },
      {
        title: "Lead routing and follow-up",
        desc: "New inquiries assigned, tagged and followed up automatically, so none sit unanswered.",
      },
      {
        title: "Integrations and webhooks",
        desc: "Connections between tools that have no ready-made integration, built on their APIs.",
      },
      {
        title: "Alerts and documentation",
        desc: "Error alerts and plain-language notes on how each workflow runs, so your team isn't left guessing.",
      },
    ],
    audiences: {
      startups: "Your small team spends hours on admin work that software should handle.",
      smbs: "Leads arrive by form, phone and email, and some are never followed up.",
      dtc: "Order, inventory and customer data is copied by hand between Shopify and other tools.",
      agencies: "You need automations built for clients, or for your own reporting and onboarding.",
    },
    priceDrivers: [
      "Number of workflows and the steps in each",
      "Which tools need connecting, and whether they have APIs",
      "Self-hosted n8n, or a paid platform such as Make or Zapier",
      "A new CRM setup, or cleanup of the one you have",
      "Data migration from spreadsheets or an old CRM",
    ],
    work: [],
    articles: [
      {
        slug: "automate-lead-follow-up",
        title: "How to automate lead follow-up and routing",
        desc: "Make sure every small business inquiry gets a fast reply.",
      },
      {
        slug: "n8n-automation-cost",
        title: "n8n automation cost",
        desc: "Hosting, build and maintenance costs, explained.",
      },
      {
        slug: "offline-conversion-tracking-service-business",
        title: "Offline conversion tracking for service businesses",
        desc: "Send closed deals from your CRM back to your ad platforms.",
      },
    ],
    faqs: [
      {
        q: "What kinds of tasks can be automated?",
        a: "Good candidates are repetitive, rule-based tasks that follow the same steps each time: copying form leads into a CRM, sending follow-up emails, creating invoices from orders, updating spreadsheets or posting alerts to Slack. Tasks that need judgment each time are better kept with people, with automation preparing the information they need.",
      },
      {
        q: "Should I use n8n, Make or Zapier?",
        a: "Zapier is the simplest to start with and has the most ready-made integrations, but costs rise with volume. Make handles more complex logic at a lower price per task. n8n can be self-hosted, which suits high volumes and data you'd rather keep on your own server. We recommend one based on volume, budget and who will maintain it.",
      },
      {
        q: "Do you set up a new CRM or work with the one we have?",
        a: "Either. We set up and connect the CRM that fits your sales process and budget, or build a custom CRM when off-the-shelf tools force your team into workarounds. If you already use a CRM, we clean up pipelines and fields before automating anything, so the automations run on reliable data.",
      },
      {
        q: "What happens if an automation breaks?",
        a: "Automations can fail when a connected tool changes its API or someone renames a form field. We add error alerts so failures are noticed quickly, and document each workflow so your team can see what it does. Defects in our work are fixed within the support period in your proposal, and ongoing maintenance can be quoted separately.",
      },
      {
        q: "How much does workflow automation cost?",
        a: "It depends on how many workflows you need, how many tools they connect and the volume they run at. Platform fees for Zapier, Make or n8n hosting are separate from our build fee. After a free scoping call we send a fixed quote for the build, with the expected platform costs listed so you can see the full picture.",
      },
    ],
    ctaTitle: "Find out what your team can stop doing by hand",
  },

  "AI Solutions": {
    metaTitle: "AI Chatbots & Voice Agents for US Businesses | Pixel2Tech",
    metaDescription:
      "AI chatbots, voice agents and RAG systems for US businesses that answer customer questions and search your own documents. Fixed quote after a free call.",
    serviceType: "AI chatbot and voice agent development",
    h1: "AI chatbots and voice agents",
    h1Highlight: "for US businesses",
    answer:
      "We build AI chatbots, voice agents and RAG systems that answer common customer questions from your own content, capture leads and hand complex conversations to your team.",
    tags: ["Chatbots", "RAG", "Voice agents"],
    deliverables: [
      {
        title: "Use-case scoping",
        desc: "We pick the questions and tasks worth handing to AI first, and decide what the assistant must never answer on its own.",
      },
      {
        title: "Website and chat assistants",
        desc: "A chatbot on your site or messaging channels that answers from your FAQs, policies and product information.",
      },
      {
        title: "Voice agents",
        desc: "Phone assistants that answer common calls, take messages or collect booking details, and pass callers to a person when needed.",
      },
      {
        title: "Document search (RAG)",
        desc: "A private assistant that searches your internal documents and shows where each answer came from.",
      },
      {
        title: "Lead capture and handoff",
        desc: "Conversations that collect contact details and send them to your CRM or inbox, with a clear route to a person.",
      },
      {
        title: "Testing and guardrails",
        desc: "Test questions, fallback answers and limits on what the assistant says, reviewed with you before launch.",
      },
    ],
    audiences: {
      startups: "You want an AI feature in your product or support flow without hiring an ML team.",
      smbs: "Your team answers the same questions by phone, email and chat every day.",
      dtc: "Shoppers ask about sizing, shipping and returns before they buy, often outside business hours.",
      agencies: "You want to offer AI assistants to your clients and need a team to build them.",
    },
    priceDrivers: [
      "Chat, voice or both, and on which channels",
      "How much content the assistant answers from",
      "Integrations with your CRM, calendar or help desk",
      "Conversation volume and AI provider usage fees",
      "Review and approval steps for regulated industries",
    ],
    work: [],
    articles: [
      {
        slug: "ai-chatbot-cost-small-business",
        title: "AI chatbot cost for small businesses",
        desc: "A buy-vs-build breakdown of what a chatbot really costs.",
      },
      {
        slug: "ai-receptionist-for-law-firms",
        title: "AI receptionists for law firms",
        desc: "Intake setup, and what ABA Formal Opinion 512 means for it.",
      },
      {
        slug: "automate-lead-follow-up",
        title: "How to automate lead follow-up and routing",
        desc: "Make sure every small business inquiry gets a fast reply.",
      },
    ],
    faqs: [
      {
        q: "What can an AI chatbot do for a small business?",
        a: "It can answer repeat questions about pricing, hours, shipping, returns or services, collect contact details from new leads, and pass complex or sensitive conversations to a person. The best results come from giving it a narrow, well-defined job and good source content, not from trying to answer everything on day one.",
      },
      {
        q: "What is RAG?",
        a: "RAG, or retrieval-augmented generation, means the AI looks up relevant passages in your own documents before it answers, instead of relying only on what the model learned in training. That keeps answers tied to your actual policies and product details, and makes it possible to show where each answer came from.",
      },
      {
        q: "Will an AI chatbot make things up?",
        a: "AI models can give confident wrong answers, so we design against it: the assistant answers from content you approve, says when it doesn't know, and hands off to a person for anything outside its scope. We test it with real questions before launch. No AI system is error-free, so sensitive topics should always have a human review step.",
      },
      {
        q: "How much does an AI chatbot cost?",
        a: "Cost depends on the channels, how much content the assistant draws on, the integrations it needs and how many conversations it handles. Our build fee is quoted at a fixed price after a free scoping call. AI provider and platform usage fees are separate and depend on volume, and we estimate them in the proposal.",
      },
      {
        q: "What happens to our data?",
        a: "Before we build, we show you where your data goes: which AI provider processes it, what is stored, and who can see conversation logs. We limit the assistant's sources to content you approve and avoid sending sensitive data where it isn't needed. In regulated fields such as law or healthcare, review the setup with your compliance adviser before launch.",
      },
    ],
    ctaTitle: "See where AI fits in your business",
  },

  "SEO & Search Growth": {
    metaTitle: "Technical & Local SEO for US Small Businesses | Pixel2Tech",
    metaDescription:
      "Technical SEO audits, on-page fixes, keyword strategy and local SEO for US small businesses and online stores, so the right customers find you on Google.",
    serviceType: "Search engine optimization",
    h1: "Technical and local SEO",
    h1Highlight: "for US small businesses and online stores",
    answer:
      "We audit your site for technical problems, fix on-page issues, plan keywords around what your customers search for and set up local SEO, so the right people find your business on Google.",
    tags: ["On-page SEO", "Technical SEO", "Local SEO"],
    deliverables: [
      {
        title: "Technical SEO audit",
        desc: "Crawling, indexing, speed, redirects and structured data checked, with a prioritized list of fixes.",
      },
      {
        title: "On-page optimization",
        desc: "Titles, headings, internal links and page content improved for the searches each page targets.",
      },
      {
        title: "Keyword strategy",
        desc: "Search terms grouped by intent and mapped to existing or new pages, so each page covers one clear topic.",
      },
      {
        title: "Local SEO",
        desc: "Google Business Profile setup, service-area and location pages, and consistent business details across listings.",
      },
      {
        title: "Store SEO",
        desc: "Collection and product page structure, duplicate URL cleanup and product schema for Shopify and WooCommerce stores.",
      },
      {
        title: "Search reporting",
        desc: "Google Search Console and analytics set up, so you can see which pages and queries bring in traffic.",
      },
    ],
    audiences: {
      startups:
        "You need your product pages and content found by people searching for the problem you solve.",
      smbs: "You serve a local area, and competitors show up in Google Maps before you do.",
      dtc: "Your store has thin or duplicate collection pages and depends on paid ads for traffic.",
      agencies: "You need technical SEO support on client sites alongside your own strategy work.",
    },
    priceDrivers: [
      "Site size and platform",
      "A one-off audit and fixes, or ongoing work",
      "Number of locations or service areas",
      "Whether new content needs to be written",
      "Fixes we implement, or a list handed to your developer",
    ],
    work: [
      {
        slug: "madluvv-social-media-meta-ads",
        note: "Product schema markup and mobile speed work on the brand's Shopify store, to make product pages easier to find in search.",
      },
    ],
    articles: [
      {
        slug: "website-traffic-drop-after-redesign",
        title: "Traffic dropped after a website redesign?",
        desc: "A recovery checklist for lost rankings and redirects.",
      },
      {
        slug: "service-area-pages-for-contractors",
        title: "Service area pages for contractors",
        desc: "How to rank in the towns you serve without doorway pages.",
      },
      {
        slug: "outsource-seo-to-pakistan",
        title: "Outsourcing SEO to Pakistan",
        desc: "How to vet and manage an offshore SEO partner.",
      },
    ],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Technical fixes, such as indexing or redirect problems, can show results within weeks of Google recrawling your pages. Ranking for competitive terms usually takes months of steady work on content and links. Anyone promising a guaranteed first-page ranking by a set date is guessing, so we set goals around the pages and queries that matter to your business.",
      },
      {
        q: "What's included in a technical SEO audit?",
        a: "We check whether Google can crawl and index your pages, how fast they load on mobile, redirect chains and broken links, duplicate content, structured data and internal linking. You get a prioritized list of fixes that explains what each one affects, and we can implement them or hand the list to your developer.",
      },
      {
        q: "Can you do local SEO for a US business from Pakistan?",
        a: "Yes. Local SEO doesn't depend on where the SEO team sits. It depends on your Google Business Profile, service-area and location pages, reviews and consistent business details across listings. We set these up and fix them using your real address and service areas, and we never create fake locations.",
      },
      {
        q: "Can you do SEO for a Shopify store?",
        a: "Yes. Shopify stores often have duplicate URLs from collections and tags, thin collection pages, and apps that slow pages down. We clean up the URL structure, write collection and product copy where it's missing, add product schema and fix speed problems in the theme, so both shoppers and search engines can find products.",
      },
      {
        q: "How do you report on SEO results?",
        a: "We set up Google Search Console and analytics if they're missing, then report on the numbers that matter: which pages get impressions and clicks, which queries they appear for, and what changed since the last report. Every report ties back to the goals agreed in your proposal, not to vanity metrics.",
      },
    ],
    ctaTitle: "Find out what's holding back your search traffic",
  },

  "Social Media & Email": {
    metaTitle: "Social Media & Email Marketing for US Brands | Pixel2Tech",
    metaDescription:
      "Social content, Meta ad creative, email flows and newsletters for US brands, planned and designed by an in-house team. Scoped on a free call, fixed-quoted.",
    serviceType: "Social media and email marketing",
    h1: "Social media and email marketing",
    h1Highlight: "for US brands",
    answer:
      "We plan and design your social content, produce creative for paid ads, and write and build email sequences and newsletters, so your brand looks and sounds the same everywhere customers see it.",
    tags: ["Instagram", "Facebook ads", "Email"],
    deliverables: [
      {
        title: "Content planning",
        desc: "A content calendar built around your launches, offers and the questions your audience asks.",
      },
      {
        title: "Posts and stories",
        desc: "Static posts, carousels and stories in one visual style for Instagram, Facebook, TikTok and LinkedIn.",
      },
      {
        title: "Short-form video",
        desc: "Reels and short videos edited for each platform's format.",
      },
      {
        title: "Meta ad creative",
        desc: "Static and video ads in several angles, so you can test which message works.",
      },
      {
        title: "Email flows",
        desc: "Welcome, abandoned cart and post-purchase sequences, written and built in your email platform.",
      },
      {
        title: "Newsletters",
        desc: "Regular campaign emails designed in your brand and written for your audience.",
      },
    ],
    audiences: {
      startups: "You need a consistent social presence, and no one on the team has time to run it.",
      smbs: "You post when you remember to, and your feed doesn't match the rest of your brand.",
      dtc: "You need a steady supply of ad creative and email flows that bring customers back.",
      agencies:
        "You need a creative team to produce social content and ad creative for your clients.",
    },
    priceDrivers: [
      "Number of platforms and posts each month",
      "Static graphics only, or video as well",
      "Ad creative volume and number of angles",
      "Email flows to build and campaigns each month",
      "Whether we post and manage channels, or hand over files",
    ],
    work: [
      {
        slug: "madluvv-social-media-meta-ads",
        note: "Daily organic posts and weekly batches of Meta ad creative across Instagram, Facebook, TikTok and LinkedIn, in one visual style.",
      },
      {
        slug: "swishtag-social-media-management",
        note: "Content planning, static graphics and short social videos, run on a weekly content calendar.",
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        note: "Social media management and a reusable library of campaign creatives for a personal injury law firm.",
      },
    ],
    articles: [
      {
        slug: "klaviyo-flows-not-triggering-shopify",
        title: "Klaviyo flow not triggering on Shopify?",
        desc: "A fix-it checklist for email flows that stop sending.",
      },
      {
        slug: "meta-ads-creative-testing-small-budget",
        title: "Meta ads creative testing on a small budget",
        desc: "How to test ad creative without wasting spend.",
      },
      {
        slug: "ugc-ads-for-shopify-brands",
        title: "UGC ads for Shopify brands",
        desc: "Brief, film, edit and test creator-style ads.",
      },
    ],
    faqs: [
      {
        q: "Do you manage our social accounts or only create content?",
        a: "Either. Some clients want us to plan, design and post everything; others want content files their own team schedules. For Swishtag we handled planning, graphics, video and channel management. For MADLUVV we produced daily organic posts and weekly ad creative batches. Your proposal states exactly which parts we own and which stay with your team.",
      },
      {
        q: "Which platforms do you create content for?",
        a: "Mainly Instagram, Facebook, TikTok and LinkedIn, plus Meta ads. We adapt each piece to the platform's format instead of posting the same file everywhere, so a reel, a carousel and a LinkedIn post each fit where they appear. If your audience spends time somewhere else, tell us on the call and we'll say whether we're a fit.",
      },
      {
        q: "Do you run the ads or only make the creative?",
        a: "Our core work is the creative: static and video ads in several angles, sized for each placement. Campaign setup and management can be part of the scope as well. Tell us on the scoping call how your ads are run today, and the proposal will spell out who handles targeting, budgets and reporting.",
      },
      {
        q: "Which email flows should a store set up first?",
        a: "Start with flows that trigger on customer actions: a welcome series for new subscribers, abandoned cart and browse reminders, and a post-purchase sequence that asks for a review or suggests a next product. These run every day without new work from your team. Regular newsletters come after, once the automated flows are live and tested.",
      },
      {
        q: "How do you keep content on-brand?",
        a: "We set a visual style and tone at the start, with templates for posts, stories and ads, and use them for every piece. For MADLUVV that meant one style across reels, stories and ads on every platform. For Affinity Law, it meant creatives built on the firm's existing gold-and-black brand. You review content before it goes out.",
      },
    ],
    ctaTitle: "Get a fixed quote for social and email",
  },

  "Video Editing & Ads": {
    metaTitle: "Video Editing & Ad Creative for US Brands | Pixel2Tech",
    metaDescription:
      "Reels, brand videos, YouTube edits and paid ad creative for US brands, edited in-house for the platform they'll run on. Fixed quote after a free call.",
    serviceType: "Video editing and video ad production",
    h1: "Video editing and ad creative",
    h1Highlight: "for US brands",
    answer:
      "We edit reels, brand videos, YouTube content and paid ad creative from your footage, cut for the platform each one will run on, with captions, motion graphics and versions to test.",
    tags: ["Reels", "YouTube", "Paid ads"],
    deliverables: [
      {
        title: "Short-form edits",
        desc: "Reels, TikToks and Shorts with hooks, captions and pacing made for vertical feeds.",
      },
      {
        title: "Video ad creative",
        desc: "Ads in several hooks and angles, exported in the aspect ratios each placement needs.",
      },
      {
        title: "YouTube and long-form",
        desc: "Full edits with color, sound cleanup, chapters and thumbnails.",
      },
      {
        title: "Brand and explainer videos",
        desc: "Videos that explain what you do, for your website, sales pages or pitch.",
      },
      {
        title: "Captions and motion graphics",
        desc: "Burned-in captions, titles and simple animation, so videos work with the sound off.",
      },
      {
        title: "Repurposing",
        desc: "Long recordings such as podcasts, webinars or interviews cut into short clips.",
      },
    ],
    audiences: {
      startups:
        "You have product demos or founder footage and need it turned into videos people watch to the end.",
      smbs: "You record videos on your phone but don't have time to edit them.",
      dtc: "You need a steady flow of creator-style and product ads to test on Meta and TikTok.",
      agencies: "You need extra editing capacity for client campaigns and social content.",
    },
    priceDrivers: [
      "Number of videos and their length",
      "Short-form, long-form or ad creative",
      "Versions per video, such as extra hooks or aspect ratios",
      "Captions, motion graphics and sound work",
      "A one-off project, or a regular monthly volume",
    ],
    work: [
      {
        slug: "madluvv-social-media-meta-ads",
        note: "Creator-style hooks, close-up brow application clips and short product demos for Meta ads.",
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        note: "Video content support and ad creatives for Meta, AppLovin and Google Ads for a personal injury firm.",
      },
      {
        slug: "swishtag-social-media-management",
        note: "Short social videos that explain what the brand offers, produced and edited in-house.",
      },
    ],
    articles: [
      {
        slug: "video-editing-retainer-for-coaches",
        title: "Video editing retainers for coaches",
        desc: "Scope, pricing models and turnaround for ongoing editing.",
      },
      {
        slug: "law-firm-explainer-video-cost",
        title: "Law firm explainer video cost",
        desc: "Animated vs. live-action pricing for legal video.",
      },
      {
        slug: "outsource-video-editing-to-pakistan",
        title: "Hiring a video editor from Pakistan",
        desc: "Costs, engagement models and how to vet an editor.",
      },
    ],
    faqs: [
      {
        q: "Do you shoot video or only edit it?",
        a: "Our core service is editing: you or your creators supply the footage, and we turn it into finished videos. If you don't have footage yet, tell us on the scoping call. We can help plan scripts and shot lists so what you record is easy to edit, and talk through stock or creator footage options.",
      },
      {
        q: "How many versions of a video ad should we test?",
        a: "Enough to learn something without spreading your budget too thin. A practical start is a few different hooks on the same core video, each exported for the placements you'll run. Once one version wins, we make new variations around it. Your budget and how quickly results come in decide how many you can test at once.",
      },
      {
        q: "Which formats and aspect ratios do you deliver?",
        a: "Whatever your platforms need: 9:16 vertical for Reels, TikTok and Shorts, 1:1 or 4:5 for feed placements, and 16:9 for YouTube and websites. Each video is exported with captions where they help, and we agree the full list of versions in the proposal, so there's no guesswork at delivery.",
      },
      {
        q: "Can you edit video for a regulated business such as a law firm?",
        a: "Yes. For Affinity Law, a personal injury firm, we supported their video content and made campaign creative that explains their services clearly and feels professional rather than alarming. Regulated businesses should still check every video against their own advertising rules before it runs, and we build that approval step into the schedule.",
      },
      {
        q: "How does ongoing video editing work?",
        a: "For regular content we agree a monthly volume, the formats, and how you send footage and feedback. You get a steady flow of edits without briefing a new editor every time. One-off projects, such as a brand video or a launch ad set, are quoted separately with their own scope and timeline.",
      },
    ],
    ctaTitle: "Get a fixed quote for your video work",
  },
};

/** Every service page, in the canonical /services order. */
export const SERVICE_PAGES: ServicePage[] = SERVICES.map((title) => ({
  ...COPY[title],
  title,
  slug: serviceAnchor(title),
}));

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
