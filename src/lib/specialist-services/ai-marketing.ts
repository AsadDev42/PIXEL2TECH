import { Lightbulb, PenLine, Route, WandSparkles } from "lucide-react";
import type { SpecialistServiceCopy } from "@/lib/specialist-services";

/**
 * Specialist pages for copywriting, AI creative, AI consulting and campaign
 * strategy. Same truth rules as service-pages.ts: no invented clients, numbers,
 * prices, guarantees or results. `work` lists only published portfolio or
 * automation projects, and each note describes what that project shows.
 */
export const AI_MARKETING_SERVICES: SpecialistServiceCopy[] = [
  {
    slug: "copywriting",
    title: "Copywriting",
    parent: "SEO & Search Growth",
    icon: PenLine,
    menuDescription: "Website, SEO, ad and email copy",
    bestFor: "A website, campaign or product range whose copy no longer explains the offer.",
    metaTitle: "Website copywriting services and SEO copy | Pixel2Tech",
    metaDescription:
      "Website copywriting services for landing pages, SEO articles, ads, emails and product pages, written and edited by people. Fixed quote after a free call.",
    serviceType: "Copywriting",
    h1: "Website copywriting services",
    h1Highlight: "for small businesses and online brands",
    answer:
      "Pixel2Tech, a studio in Lahore, Pakistan working with businesses worldwide, including the US, UK, Canada and the EU, provides website copywriting services and copy for landing pages, SEO articles, ads, emails and product descriptions, and people write and edit every draft around what buyers need to know before they act.",
    tags: ["Website copy", "SEO content", "Ad and email copy"],
    deliverables: [
      {
        title: "Website and landing page copy",
        desc: "Headlines, page sections and calls to action for home, service and landing pages, written to the page plan before design starts.",
      },
      {
        title: "SEO articles and service pages",
        desc: "Articles and service pages planned around one search intent each, with titles, headings and meta descriptions included.",
      },
      {
        title: "Ad copy",
        desc: "Headlines, primary text and hooks for Meta, Google and LinkedIn ads, written in several angles so you can test them.",
      },
      {
        title: "Email copy",
        desc: "Welcome series, follow-up sequences and newsletters, with a subject line and one clear next step in each email.",
      },
      {
        title: "Product descriptions",
        desc: "Product and collection copy that answers questions about size, materials, use and care in the order shoppers ask them.",
      },
      {
        title: "Brand messaging guide",
        desc: "A short guide to your offer, audience, proof points and tone, so every writer and channel describes the business the same way.",
      },
    ],
    audiences: {
      startups:
        "Your product changed faster than your website, and the homepage no longer explains what you sell.",
      smbs: "Your service pages list what you do but don't answer the questions buyers ask before they call.",
      dtc: "You have many products with thin or copied descriptions, and your ads need new angles every month.",
      agencies:
        "You need writers who draft client copy to your brief and fit into your review process.",
    },
    priceDrivers: [
      "Number of pages, articles, ads or emails",
      "New copy, or editing and restructuring what you have",
      "How much research and interviewing the topic needs",
      "Whether keyword research is part of the scope",
      "Number of revision rounds and reviewers",
    ],
    work: [],
    firstPhase: {
      heading: "Start with one page buyers already visit.",
      body: "Send us the page and what you want visitors to do next. We read it against your offer and your buyers' questions, then rewrite it as the first piece of work. You approve the tone and messaging on that page before we write the rest.",
      inputs: [
        "The page URL and its goal",
        "Your offer and the proof behind it",
        "Customer questions and objections",
      ],
    },
    articles: [
      {
        slug: "how-to-find-your-brand-voice",
        title: "Find your brand voice",
        desc: "Write the voice down in plain words and use it on every channel.",
      },
      {
        slug: "search-intent-service-pages",
        title: "Match service pages to search intent",
        desc: "Shape each page around what the searcher wants to find.",
      },
      {
        slug: "welcome-email-series-subscribers-enquiries",
        title: "Write a welcome email series",
        desc: "A four-email plan with one next step in each message.",
      },
    ],
    faqs: [
      {
        q: "What do your copywriting services include?",
        a: "We write website and landing page copy, SEO articles and service pages, ad copy, email sequences, product descriptions and brand messaging guides. Many clients start with one type, such as website copywriting for a redesign, and add others later. The proposal lists each page or asset and the revision rounds included, so you know what you are paying for.",
      },
      {
        q: "Do you write with AI?",
        a: "We may use AI tools for research notes, outlines or a rough first draft. A writer then rewrites the copy, checks each claim against what you've told us and edits it to your voice. We don't publish raw AI output, and we don't invent statistics, reviews or results. If you want no AI tools used at all, tell us and we'll write that into the proposal.",
      },
      {
        q: "How much do copywriting services cost?",
        a: "We don't publish a price list, because a single landing page and a full website rewrite are very different jobs. After a free scoping call we send a written proposal with a fixed price, the list of pages or assets, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Can website copywriting also help a page rank in search?",
        a: "Yes, when it is planned that way. We write each page around the searches it should answer, then write titles, headings and body copy a buyer can read easily. Keywords go where they fit naturally. Rankings also depend on your site's technical health, links and competitors, so no writer can guarantee them. We tell you which of those factors matter for your pages.",
      },
      {
        q: "Who owns the copy you write?",
        a: "You do. Final copy transfers to you once the project is paid in full, as described in your proposal, and you can publish, edit and reuse it anywhere. We keep only our own internal templates and checklists. If the copy quotes third-party material, such as a statistic or a customer review, we note the source so you can confirm you may use it.",
      },
    ],
    ctaTitle: "Get a fixed quote for your copywriting project",
  },

  {
    slug: "ai-creative",
    title: "AI-powered creative",
    parent: "Video Editing & Ads",
    icon: WandSparkles,
    menuDescription: "AI images and video ads, checked by people",
    bestFor:
      "A brand that needs more ad variations and product visuals than its shoots can supply.",
    metaTitle: "AI creative agency for AI video ads and visuals | Pixel2Tech",
    metaDescription:
      "AI creative agency for brands. AI video ads, UGC-style AI ads, product visuals and ad variations, each checked by our designers. Fixed quote after a call.",
    serviceType: "AI-assisted image and video production",
    h1: "AI creative agency",
    h1Highlight: "for DTC brands and agencies",
    answer:
      "Pixel2Tech is an AI creative agency in Lahore, Pakistan working with brands worldwide, including the US, UK, Canada and the EU. It makes product visuals, UGC-style AI video ads and image or video variations for ad testing, and its designers and editors direct each piece and check it before delivery.",
    tags: ["AI images", "AI video ads", "Ad variations"],
    deliverables: [
      {
        title: "Product visuals",
        desc: "Your product placed in new scenes, backgrounds and seasonal settings, built from real product photos so the item stays accurate.",
      },
      {
        title: "UGC-style AI video ads",
        desc: "Short vertical ads with AI-generated scenes or presenters, scripted around one hook and edited with captions and your end card.",
      },
      {
        title: "Variations for testing",
        desc: "Several versions of one ad with different hooks, backgrounds, formats or offers, so you can test them without a new shoot.",
      },
      {
        title: "Concept frames",
        desc: "Quick AI frames that show a campaign idea before you book a shoot or commit to a full edit.",
      },
      {
        title: "Art direction and retouching",
        desc: "A designer sets the look, picks the best outputs, and fixes hands, text, logos and product details by hand.",
      },
      {
        title: "Usage and disclosure notes",
        desc: "A record of which tools made each asset, their commercial-use terms, and where an ad platform asks for an AI label.",
      },
    ],
    audiences: {
      startups:
        "You need ad visuals and product scenes for a launch before you can pay for a full photo or video shoot.",
      smbs: "Your ads reuse the same few photos, and you need fresh versions without booking a shoot each month.",
      dtc: "You test many ad angles on Meta and TikTok and need new hooks and backgrounds every week.",
      agencies:
        "You need AI image and video production for client campaigns, checked against each client's brand rules.",
    },
    priceDrivers: [
      "Number of final images, videos and variations",
      "Images only, or video ads as well",
      "How closely each asset must match a real product",
      "Scripts, voiceover and editing for video",
      "AI tool usage and stock license costs",
    ],
    work: [
      {
        slug: "ugc-video-ad-pipeline",
        note: "An n8n pipeline for a skincare brand that writes ad scripts with AI, generates three clips and stitches them into one UGC-style video.",
      },
      {
        slug: "ai-social-content-engine",
        note: "A daily workflow that writes social posts with AI, creates a matching image and posts to Instagram and LinkedIn.",
      },
    ],
    firstPhase: {
      heading: "Start with one ad you already run.",
      body: "Send us an ad that works for you and the product photos behind it. We make a small set of AI variations of that ad, with new hooks, backgrounds or formats. You judge the quality on real work before you order more.",
      inputs: [
        "A current ad and how it performs",
        "Real product photos and brand files",
        "The platforms and ad rules you follow",
      ],
    },
    articles: [
      {
        slug: "kling-o1-guide",
        title: "Kling O1 explained",
        desc: "What the AI video model does and where it fits in marketing work.",
      },
      {
        slug: "ad-creative-testing-small-budgets",
        title: "Ad creative testing on a small budget",
        desc: "Test one idea at a time and use each result in the next ad.",
      },
      {
        slug: "ai-risks-digital-marketing-brand-protection",
        title: "A risk checklist for AI in marketing",
        desc: "Privacy, bias, brand voice and human review controls for AI work.",
      },
    ],
    faqs: [
      {
        q: "What are AI creative services?",
        a: "AI creative services use image and video generation tools to make ad visuals, product scenes and video ads without a full shoot for every version. At Pixel2Tech a designer or editor writes the prompts, chooses the outputs, fixes errors and finishes each asset in standard design and editing software. You review every piece before it runs.",
      },
      {
        q: "Is AI-generated creative safe to use in ads?",
        a: "It can be, with checks. We use tools whose terms allow commercial use, avoid real people's likenesses and other brands' trademarks, and correct product details so the ad shows what you actually sell. Meta, TikTok and Google set their own rules on AI labels, and some markets regulate AI in ads. Ask your own adviser to check regulated claims before launch.",
      },
      {
        q: "Can you make AI video ads in a UGC style?",
        a: "Yes. We write a short script around one hook, generate the scenes or presenter, then edit the clips with captions, product shots and your end card. AI video ads suit testing many angles. For testimonials and reviews, use real customers, because an AI presenter describing a personal experience with your product can mislead viewers.",
      },
      {
        q: "How much do AI creative services cost?",
        a: "We don't publish a price list, because a handful of product images and a monthly set of AI video ads are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. AI tool and stock fees are listed separately unless the proposal includes them.",
      },
      {
        q: "Who owns AI-generated images and videos?",
        a: "Final deliverables transfer to you once the project is paid in full, as set out in your proposal. Each AI tool's own terms decide how you can use its output commercially. In some countries, including the US, material made only by AI may not qualify for copyright protection, while human edits can. We list the tools used for each asset so you or your lawyer can check.",
      },
    ],
    ctaTitle: "Get a fixed quote for AI creative",
  },

  {
    slug: "ai-consulting",
    title: "AI consulting",
    parent: "AI Solutions",
    icon: Lightbulb,
    menuDescription: "Use cases, tool choice, pilots and training",
    bestFor: "A business that wants to test AI on one real task before buying tools for everyone.",
    metaTitle: "AI consulting services for small businesses | Pixel2Tech",
    metaDescription:
      "AI consulting services for small and midsize businesses. We find use cases, pick tools, run a pilot and train your team. Fixed quote after a free call.",
    serviceType: "AI consulting",
    h1: "AI consulting services",
    h1Highlight: "for small and midsize businesses",
    answer:
      "Pixel2Tech, a studio in Lahore, Pakistan working with businesses worldwide, including the US, UK, Canada and the EU, provides AI consulting services for small and midsize companies, finding the tasks AI can handle, choosing the tools, running a small pilot and training the team before any larger rollout.",
    tags: ["Use-case discovery", "AI pilots", "Team training"],
    deliverables: [
      {
        title: "Use-case discovery",
        desc: "Interviews with your team to list the tasks AI could help with, ranked by time spent, risk and how easy each one is to test.",
      },
      {
        title: "Workflow audit",
        desc: "A written map of how one process runs today, where people copy, search or rewrite information, and which steps AI should leave alone.",
      },
      {
        title: "Tool selection",
        desc: "A comparison of the AI tools that fit each use case, with their pricing model, data terms and the setup work they need.",
      },
      {
        title: "Pilot build",
        desc: "A small working pilot on one use case, such as a document assistant or an email drafting step, tested on real examples.",
      },
      {
        title: "Team training",
        desc: "Practical sessions on the tools you chose, with prompts, review steps and written guides your team keeps.",
      },
      {
        title: "Roadmap and risk review",
        desc: "A phased plan for the next use cases, listing the data each tool receives, who reviews its output and what to measure.",
      },
    ],
    audiences: {
      startups:
        "Your team already uses AI chat tools informally, and you want rules and a plan before you build on them.",
      smbs: "You keep hearing that AI saves time, but you don't know which of your tasks it suits.",
      dtc: "You want AI help with product copy, support replies or reporting without putting customer data at risk.",
      agencies:
        "Clients ask your team about AI, and you need a partner to scope and run pilots with them.",
    },
    priceDrivers: [
      "Number of teams and processes we review",
      "Advice only, or a working pilot as well",
      "How many tools we compare and test",
      "Training sessions and written guides",
      "How sensitive the data is, and the review steps it needs",
    ],
    work: [
      {
        slug: "rag-document-assistant",
        note: "An assistant that answers staff questions from a logistics company's own shipping documents.",
      },
      {
        slug: "ai-lead-research-and-scoring",
        note: "AI agents that research each new lead, score it from 1 to 100 and send the sales team a Hot, Warm or Cold alert.",
      },
      {
        slug: "customer-feedback-triage-agent",
        note: "A workflow that sorts feedback into compliments, complaints and feature requests and notifies the right channel.",
      },
    ],
    firstPhase: {
      heading: "Start with one process your team repeats.",
      body: "Pick a task your team does many times a week, such as answering the same questions or summarizing documents. We map how it runs today and test whether AI can do part of it. Then we tell you what a pilot would involve.",
      inputs: [
        "One repeated task and who does it",
        "Example inputs and finished outputs",
        "The tools you already pay for",
      ],
    },
    articles: [
      {
        slug: "is-ai-worth-the-investment",
        title: "Is AI worth the investment?",
        desc: "Where AI pays off for a business and where money gets wasted.",
      },
      {
        slug: "ai-automation-business-operations",
        title: "AI and automation in business operations",
        desc: "How automation cuts repetitive work in day-to-day operations.",
      },
      {
        slug: "ai-chat-support-automate-vs-keep-human",
        title: "What to automate in AI chat support",
        desc: "Which support questions suit AI and which need a person.",
      },
    ],
    faqs: [
      {
        q: "What does an AI consulting engagement include?",
        a: "It usually starts with interviews and a review of one or two processes. We then list the tasks AI could help with, compare tools for the best candidates and run a small pilot on one of them. You finish with a written roadmap, a risk review and training for the people who will use the tools. Your proposal sets the exact scope.",
      },
      {
        q: "Do we need AI consulting services, or can we just buy a tool?",
        a: "If you already know the task and a tool clearly fits it, buy the tool. Consulting helps when you aren't sure where AI fits, when several teams want different tools, or when customer data is involved. In those cases a short review and pilot can cost less than paying for subscriptions nobody uses. We'll tell you on the call which case you're in.",
      },
      {
        q: "How much do AI consulting services cost?",
        a: "We don't publish a price list, because a one-process review and a multi-team pilot with training are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the milestones and a timeline. AI tool subscriptions and usage fees are separate from our fee unless the proposal says they are included.",
      },
      {
        q: "What happens to our data during a pilot?",
        a: "Before a pilot starts, we agree which data it may use and which AI provider processes it. Where we can, we test with sample or anonymized data first. We check each provider's data retention and training terms, and we tell you which tasks should keep a person approving the output. Regulated businesses should confirm the setup with their compliance adviser.",
      },
      {
        q: "Do we own the roadmap and the pilot?",
        a: "Yes. The written roadmap, guides and the pilot we build for you transfer to you once the project is paid in full, as set out in your proposal. AI tools and platforms stay under their own terms, and we recommend keeping those subscriptions in your own accounts. We keep only our own pre-existing templates and tools.",
      },
    ],
    ctaTitle: "Talk through where AI could help your team",
  },

  {
    slug: "campaign-strategy",
    title: "Campaign strategy",
    parent: "Social Media & Email",
    icon: Route,
    menuDescription: "Audience, message, channels and calendar",
    bestFor: "A launch, sale or seasonal push that runs across more than one channel.",
    metaTitle: "Campaign strategy and planning for brands | Pixel2Tech",
    metaDescription:
      "Campaign strategy and campaign planning for US, UK and EU brands, with the audience, offer, messaging, channels and measurement set out. Fixed quote.",
    serviceType: "Marketing campaign strategy",
    h1: "Campaign strategy and planning",
    h1Highlight: "for brands selling in the US, UK and EU",
    answer:
      "Pixel2Tech, a studio in Lahore, Pakistan working with brands worldwide, including the US, UK, Canada and the EU, builds campaign strategy around one audience and one offer, then writes the messaging, channel plan, creative brief, content calendar and measurement plan the team runs the campaign from.",
    tags: ["Channel plan", "Creative brief", "Content calendar"],
    deliverables: [
      {
        title: "Audience and offer",
        desc: "A written definition of who the campaign targets, what it offers them and the objections the copy has to answer.",
      },
      {
        title: "Messaging",
        desc: "One core message with supporting points and proof, plus the angles to test in ads and emails.",
      },
      {
        title: "Channel plan",
        desc: "The channels the campaign uses, such as Meta, Google, email or LinkedIn, what each one does, and how the budget splits between them.",
      },
      {
        title: "Creative brief",
        desc: "A brief for designers, editors and writers that sets formats, sizes, hooks, required lines and deadlines.",
      },
      {
        title: "Content calendar",
        desc: "Dates for every post, ad, email and landing page, so the launch, reminders and follow-up go out in the right order.",
      },
      {
        title: "Measurement plan",
        desc: "The numbers to track on each channel, how to tag links and conversions, and when to review results and adjust the plan.",
      },
    ],
    audiences: {
      startups:
        "You're launching a product and need one plan that tells the team what to say, where and when.",
      smbs: "You post and advertise, but each piece goes out on its own, with no shared message or goal.",
      dtc: "You have a sale or product launch coming and need ads, emails and posts planned together.",
      agencies:
        "You need campaign plans and creative briefs prepared for clients in your agency's format.",
    },
    priceDrivers: [
      "Number of channels and markets in the plan",
      "Strategy only, or the creative production too",
      "Research needed on audience and competitors",
      "Campaign length and the volume of content",
      "Tracking setup for links, forms and conversions",
    ],
    work: [
      {
        slug: "madluvv-social-media-meta-ads",
        note: "Daily organic posts and weekly batches of Meta ad creative for a beauty brand, in one visual style across four platforms.",
      },
      {
        slug: "swishtag-social-media-management",
        note: "A regular content planning cycle, with static graphics and short social videos produced to the plan.",
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        note: "Campaign visuals and static ads for Meta, AppLovin and Google Ads for a personal injury law firm.",
      },
    ],
    firstPhase: {
      heading: "Start with one campaign and one offer.",
      body: "Tell us what you're launching or promoting, who it's for and the date it needs to go live. We turn that into a draft plan with the message, channels and content list. You see the approach before we write the full strategy.",
      inputs: [
        "The offer, launch date and markets",
        "Past campaign results, if you have them",
        "The channels and budget you use now",
      ],
    },
    articles: [
      {
        slug: "short-form-content-strategy-for-brands",
        title: "Plan short-form content",
        desc: "Give every clip one job and review the right signals.",
      },
      {
        slug: "google-ads-landing-page-service-business",
        title: "Build Google Ads landing pages",
        desc: "Build and test the page your ads send people to.",
      },
      {
        slug: "offline-conversion-tracking-service-business",
        title: "Send CRM results back to ad platforms",
        desc: "Report qualified leads and closed deals to Google Ads and Meta.",
      },
    ],
    faqs: [
      {
        q: "What is a marketing campaign strategy?",
        a: "It is a written plan for one campaign. It names the audience and offer, sets the core message, picks the channels and what each one does, and lists the content with dates. It also says which numbers you'll check and when. Designers, writers and media buyers then work from the same plan instead of guessing.",
      },
      {
        q: "Can you plan one campaign for the US, UK and EU at once?",
        a: "Yes. We keep one core message and adapt the parts that change by market, such as spelling, prices and currency, holidays, channel mix and legal lines. UK and EU campaigns also need consent-based email and tracking. We mark each market's differences in the plan, and you or your local advisers confirm the legal wording before launch.",
      },
      {
        q: "Do you also produce the creative?",
        a: "We can. Our team designs social posts and ads, edits video and writes copy, so the people who wrote the plan can also produce it. Some clients take the strategy and creative brief to their own team or another agency instead. Your proposal states which parts we deliver and which stay with you.",
      },
      {
        q: "How much does campaign strategy cost?",
        a: "We don't publish a price list, because a single-channel promotion and a multi-market launch are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Ad spend and paid tools are separate from our fee unless the proposal says they are included.",
      },
      {
        q: "Do we own the campaign plan and briefs?",
        a: "Yes. The strategy, creative brief, content calendar and measurement plan transfer to you once the project is paid in full, as set out in your proposal. You can use them with any team or agency. Fonts, stock assets and paid tools named in the plan stay under their own licenses.",
      },
    ],
    ctaTitle: "Plan your next campaign with a fixed quote",
  },
];
