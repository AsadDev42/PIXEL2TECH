import { PenTool, Presentation, Share2, Target } from "lucide-react";
import type { SpecialistServiceCopy } from "@/lib/specialist-services";

/**
 * Creative design specialist pages, part A: ad creative, social media design,
 * presentation design and illustration. Same truth rules as service-pages.ts.
 * `work` lists only published portfolio projects that show this kind of work.
 */
export const CREATIVE_SERVICES_A: SpecialistServiceCopy[] = [
  {
    slug: "ad-creative-design",
    title: "Ad creative",
    parent: "Social Media & Email",
    icon: Target,
    menuDescription: "Static, carousel and video ads to test",
    bestFor:
      "Brands and agencies that run paid ads on Meta, Google, LinkedIn or TikTok and need new creative to test.",
    metaTitle: "Ad creative services for Meta and Google ads | Pixel2Tech",
    metaDescription:
      "Ad creative services and Facebook ad design for Meta, Google, LinkedIn and TikTok. Static, carousel and video ads plus banner design, in test variations.",
    serviceType: "Ad creative design",
    h1: "Ad creative services",
    h1Highlight: "for brands and agencies that run paid ads",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio that provides ad creative services to businesses in the US, UK, Canada and the EU, with static, carousel and video ads for Meta, Google, LinkedIn and TikTok made in several variations and sized for each placement.",
    tags: ["Static ads", "Video ads", "Test variations"],
    deliverables: [
      {
        title: "Static ad designs",
        desc: "Single-image ads for Meta, Google Display and LinkedIn, with one message and one call to action per design.",
      },
      {
        title: "Carousel ads",
        desc: "Multi-card ads that walk through products, features or steps, with each card readable on its own.",
      },
      {
        title: "Video ad creative",
        desc: "Short video ads cut from your footage or built from product shots and motion graphics, with captions for viewers who watch with the sound off.",
      },
      {
        title: "Test variations",
        desc: "Several hooks, headlines or images on the same core ad, so you can see which angle gets results.",
      },
      {
        title: "Placement sizes",
        desc: "Every approved design resized for the placements you run, such as 1:1, 4:5, 9:16 and the standard Google Display banner sizes.",
      },
      {
        title: "Display and affiliate banners",
        desc: "Banner sets in tall, square and wide formats for display networks and affiliate partners.",
      },
    ],
    audiences: {
      startups:
        "You are starting paid ads and need a first set of creatives in a few angles to learn what your buyers respond to.",
      smbs: "Your ads have run the same image for months, and no one on the team has time to design new versions.",
      dtc: "You need new product ads every week to test on Meta and TikTok and to replace the ones that stop performing.",
      agencies:
        "You need extra design capacity to produce ad creative for client accounts, in each client's brand and to your deadlines.",
    },
    priceDrivers: [
      "Number of ad concepts and variations per concept",
      "Static and carousel ads only, or video ads as well",
      "How many platforms and placement sizes you need",
      "Whether we write the on-image copy or you supply it",
      "A one-off launch set, or a regular monthly volume",
    ],
    work: [
      {
        slug: "healthcare-meta-ad-creatives",
        note: "Static Meta ads for clinics and health brands, each leading with the patient's question and ending on one call to action.",
      },
      {
        slug: "affinity-law-social-media-ad-creatives",
        note: "Static ad creatives for Meta, AppLovin and Google Ads for a Toronto personal injury firm, built on its gold-and-black brand.",
      },
      {
        slug: "jacques-international-affiliate-banner-designs",
        note: "36 affiliate banners in tall, square and wide formats, with fashion imagery and sale offers readable at every size.",
      },
    ],
    articles: [
      {
        slug: "ad-creative-testing-small-budgets",
        title: "Ad creative testing on a small budget",
        desc: "How to plan tests so each one teaches you something.",
      },
      {
        slug: "beauty-brand-ad-creative",
        title: "Beauty brand ad creative",
        desc: "Ad formats that suit beauty products on Meta and TikTok.",
      },
      {
        slug: "white-label-creative-for-agencies",
        title: "White label ad creative for agencies",
        desc: "How an agency can outsource client creative safely.",
      },
    ],
    faqs: [
      {
        q: "What do your ad creative services include?",
        a: "They cover the visual side of a paid ad. We design static, carousel and video ads, write or tighten the headline on the image if you need it, and export each design in the sizes your placements use. Most projects also include variations of each ad for testing. We agree the exact concepts, versions and sizes on the scoping call and write them into the proposal.",
      },
      {
        q: "Which ad platforms and sizes do you design for?",
        a: "We design for Meta, Google, LinkedIn and TikTok. That usually means 1:1 and 4:5 for feeds, 9:16 for stories and Reels, and the standard Google Display banner sizes. Each platform has its own text and safe-zone limits. We lay out every design for the placement it will run in instead of stretching one file across all of them.",
      },
      {
        q: "How many ad variations should we test?",
        a: "Enough to learn something without splitting a small budget too thin. A common starting point is a few different hooks or images on the same offer, each in the sizes you run. When one version wins, we design new variations around it. Your budget and how quickly results come in decide how many versions are worth testing at once.",
      },
      {
        q: "How much does ad creative design cost?",
        a: "We don't publish a price list, because a single launch set and a weekly supply of ads for several platforms are different jobs. After a free scoping call we send a written proposal with a fixed price, the number of concepts and variations, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Do we own the ad files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the exported ads and the editable source files where the proposal lists them. Fonts, stock photos and music stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
    ],
    ctaTitle: "Get a fixed quote for your ad creative",
    firstPhase: {
      heading: "Start with one offer and a few angles",
      body: "We begin with the offer you want to advertise and the audience it is for. We then design a small set of ads around different angles, sized for the placements you run. Your first test then has clear options to compare.",
      inputs: [
        "The offer, product or service to advertise",
        "Your brand files and any past ads",
        "The platforms and placements you run",
      ],
    },
  },

  {
    slug: "social-media-design",
    title: "Social media creative",
    parent: "Social Media & Email",
    icon: Share2,
    menuDescription: "Posts, stories, carousels and templates",
    bestFor:
      "Brands and agencies that post on Instagram, Facebook, LinkedIn or TikTok every week and want every post to look like the same brand.",
    metaTitle: "Social media graphic design services for brands | Pixel2Tech",
    metaDescription:
      "Social media graphic design services for Instagram, Facebook, LinkedIn and TikTok. Posts, stories, carousels and editable templates. Free scoping call.",
    serviceType: "Social media design",
    h1: "Social media graphic design services",
    h1Highlight: "for brands that post every week",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio that provides social media graphic design services to businesses in the US, UK, Canada and the EU, with posts, stories, carousels, profile covers and editable templates for Instagram, Facebook, LinkedIn and TikTok designed in one visual style.",
    tags: ["Posts", "Carousels", "Templates"],
    deliverables: [
      {
        title: "Feed posts",
        desc: "Single-image posts for product launches, offers, tips and announcements, sized for each platform's feed.",
      },
      {
        title: "Carousels",
        desc: "Multi-slide posts for guides, step-by-step routines and product comparisons, with one point per slide.",
      },
      {
        title: "Stories",
        desc: "Vertical 9:16 story frames with space left clear for stickers, links and the platform's own buttons.",
      },
      {
        title: "Profile covers and highlights",
        desc: "Cover images, banners and story highlight icons for your Facebook, LinkedIn, YouTube and Instagram profiles.",
      },
      {
        title: "Editable templates",
        desc: "Post and story templates in Figma, or in Canva if that is where your team works, so new posts keep the same style.",
      },
      {
        title: "A visual style for your feed",
        desc: "Rules for colors, type, photo treatment and layout, so every post looks like it comes from the same brand.",
      },
    ],
    audiences: {
      startups:
        "You need a social presence that looks as credible as your product, and you don't have a full-time designer.",
      smbs: "Whoever has a spare hour makes your posts, and no two of them look alike.",
      dtc: "You launch products and offers often and need posts, stories and carousels ready for each one.",
      agencies:
        "You need a design team to produce social content for client accounts, in each client's brand.",
    },
    priceDrivers: [
      "Number of platforms and posts each month",
      "Single posts only, or carousels and stories as well",
      "Whether you need a visual style and templates first",
      "Whether we write the captions or you supply the copy",
      "A one-off batch, or a regular monthly volume",
    ],
    work: [
      {
        slug: "skin-care-social-media-creatives",
        note: "Launch posts, step-by-step routine guides and product hero shots for skin care brands on Instagram and Facebook.",
      },
      {
        slug: "food-and-drink-social-media-creatives",
        note: "Best-seller, menu and offer posts for cafes, bakeries and restaurants, with names and prices in a consistent place.",
      },
      {
        slug: "jacques-international-social-media-post-designs",
        note: "19 fashion post designs for Jacques International that pair product imagery with large, readable type.",
      },
    ],
    articles: [
      {
        slug: "one-question-week-social-content",
        title: "One customer question, a week of content",
        desc: "Turn real customer questions into a week of posts.",
      },
      {
        slug: "weekly-social-media-routine-service-businesses",
        title: "A weekly social media routine",
        desc: "Plan, make and review posts in one weekly block.",
      },
      {
        slug: "brand-photography-brief-consistent-channels",
        title: "Brief brand photography for every channel",
        desc: "Get photos that match across social, web and ads.",
      },
    ],
    faqs: [
      {
        q: "What do your social media graphic design services include?",
        a: "We design the visual content for your social channels. That covers feed posts, carousels, stories, profile covers and highlight icons. Many clients also want editable templates, so their own team can make posts between batches. If you don't have a set style yet, we start by defining colors, type and layouts for the feed. The proposal lists every format and quantity before work starts.",
      },
      {
        q: "Which platforms do you design for?",
        a: "Mainly Instagram, Facebook, LinkedIn and TikTok. Each platform crops images differently and places its own buttons over parts of the frame, so we size every design for where it appears. An Instagram carousel, a LinkedIn post and a TikTok cover each get their own layout. If your audience spends time on another platform, tell us on the call.",
      },
      {
        q: "Can you make templates our team can edit?",
        a: "Yes. We can build post, carousel and story templates in Figma, or in Canva if your team already works there. Brand elements stay fixed, and each template has clear places for text and photos. Your team can then make new posts without redesigning anything. The proposal lists which templates you get and how many layouts each one has.",
      },
      {
        q: "How much does social media design cost?",
        a: "We don't publish a price list, because one batch of launch posts and a monthly supply of posts, stories and carousels for several platforms are different jobs. After a free scoping call we send a written proposal with a fixed price, the formats and quantities, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Do we own the designs and templates?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the exported posts and the editable templates. Fonts and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
    ],
    ctaTitle: "Get a fixed quote for your social media design",
    firstPhase: {
      heading: "Set the feed style, then design the first batch",
      body: "We start by agreeing colors, type and layouts for your feed, based on your brand files. The first batch of posts uses that style. Once you approve it, every later batch follows the same rules.",
      inputs: [
        "Your logo, colors and fonts",
        "The platforms you post on",
        "Topics, offers or launches for the first batch",
      ],
    },
  },

  {
    slug: "presentation-design",
    title: "Presentation design",
    parent: "Branding & Design",
    icon: Presentation,
    menuDescription: "Pitch decks, sales decks and templates",
    bestFor:
      "Startups preparing an investor pitch, and teams whose sales decks all look different.",
    metaTitle: "Presentation design services and pitch decks | Pixel2Tech",
    metaDescription:
      "Presentation design services for pitch decks, sales decks and templates in PowerPoint, Google Slides, Keynote or Figma. Fixed quote after a free call.",
    serviceType: "Presentation design",
    h1: "Presentation design services",
    h1Highlight: "for startups, sales teams and agencies",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio that provides presentation design services to businesses in the US, UK, Canada and the EU, with investor pitch decks, sales decks, company templates and data charts built in PowerPoint, Google Slides, Keynote or Figma.",
    tags: ["Pitch decks", "PowerPoint", "Google Slides"],
    deliverables: [
      {
        title: "Pitch deck design",
        desc: "Investor decks where the problem, product, market, business model and ask each get a clear slide.",
      },
      {
        title: "Sales decks",
        desc: "Decks your sales team can present or send, with slides for the offer, proof, pricing and next steps.",
      },
      {
        title: "Presentation templates",
        desc: "PowerPoint design, Google Slides and Keynote templates with master layouts, so your team builds new decks in the same style.",
      },
      {
        title: "Infographics and data visualization",
        desc: "Charts, diagrams and process graphics built from your numbers, with one main point per chart.",
      },
      {
        title: "Deck redesign",
        desc: "Your existing content rebuilt in a cleaner layout, with text cut down so each slide makes one point.",
      },
      {
        title: "Editable source files",
        desc: "Native PowerPoint, Google Slides, Keynote or Figma files your team can update, with fonts and images organized.",
      },
    ],
    audiences: {
      startups:
        "You are raising a round and need a pitch deck that explains the business to investors who read it without you in the room.",
      smbs: "Your team builds sales presentations from old slides, and every deck looks different.",
      dtc: "You pitch to retailers, distributors or partners and need a deck that shows your products and numbers clearly.",
      agencies:
        "You need design help to turn client strategy, research or proposals into finished decks on deadline.",
    },
    priceDrivers: [
      "Number of slides and how much of the content is ready",
      "A one-off deck, or a reusable template as well",
      "How many charts, diagrams and custom graphics you need",
      "Whether we help structure the story or work from your outline",
      "Whether you need one version to present and another to send",
    ],
    work: [],
    articles: [
      {
        slug: "startup-investor-ready-guide",
        title: "Make your startup look investable",
        desc: "What investors check before they read your deck.",
      },
      {
        slug: "brand-guidelines-for-small-business",
        title: "Brand guidelines for small businesses",
        desc: "The rules a template needs so every deck stays on-brand.",
      },
      {
        slug: "colour-type-choices-small-brand-look-established",
        title: "Color and type choices for a small brand",
        desc: "Pick colors and fonts that read well on every slide.",
      },
    ],
    faqs: [
      {
        q: "What is pitch deck design?",
        a: "Pitch deck design is the layout and visual work on the slides a startup shows investors. A designer takes your story and numbers and arranges them so each slide makes one point. Charts carry the market size and traction, and your brand sets the type and colors. We can also help order the slides if your outline isn't settled yet.",
      },
      {
        q: "Do you work in PowerPoint, Google Slides, Keynote or Figma?",
        a: "Yes. We build the final deck in the tool you present from, so your team can edit it after handover. PowerPoint and Google Slides suit teams that update decks often. Keynote suits teams on Macs. Figma suits teams that want more design control and present from a PDF export. Tell us your tool on the scoping call, and we'll choose fonts that work in it.",
      },
      {
        q: "How long does a presentation design project take?",
        a: "It depends on the number of slides, how ready your content is and how many charts we need to build. A redesign of an existing deck usually moves faster than a new pitch deck with a template. We set the timeline in the proposal after the scoping call, including review points, so you know when each round of slides arrives.",
      },
      {
        q: "How much do presentation design services cost?",
        a: "We don't publish a price list, because a short deck redesign and a new investor deck with a full template are different jobs. After a free scoping call we send a written proposal with a fixed price, the slide count, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Do we own the deck and template files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the editable deck and template files. Fonts, icons and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
    ],
    ctaTitle: "Get a fixed quote for your presentation",
    firstPhase: {
      heading: "Start with your outline and current slides",
      body: "We start with what you have, such as an existing deck, a document or rough notes, and agree the order of slides with you. We then design a few key slides in the new style. Once you approve them, we build the rest of the deck to match.",
      inputs: [
        "Your current deck, outline or notes",
        "Your logo, colors and fonts",
        "The tool you present in and who will see the deck",
      ],
    },
  },

  {
    slug: "illustration-design",
    title: "Illustration design",
    parent: "Branding & Design",
    icon: PenTool,
    menuDescription: "Brand art, icons, book and packaging art",
    bestFor:
      "Brands, publishers and agencies that want artwork drawn for them instead of picked from a stock library.",
    metaTitle: "Illustration services for brands and publishers | Pixel2Tech",
    metaDescription:
      "Illustration services for brands, publishers and agencies. Custom brand illustrations, icon sets, spot and editorial art, and packaging artwork. Free call.",
    serviceType: "Illustration design",
    h1: "Illustration services",
    h1Highlight: "for brands, publishers and agencies",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio that provides illustration services to businesses in the US, UK, Canada and the EU, with custom brand illustrations, icon sets, spot and editorial illustrations, and book and packaging artwork drawn in a style that fits the brand.",
    tags: ["Brand illustration", "Icons", "Vector art"],
    deliverables: [
      {
        title: "Brand illustrations",
        desc: "A set of illustrations in one style for your website, product and marketing, so every page uses the same kind of artwork.",
      },
      {
        title: "Custom icon sets",
        desc: "Icons drawn on one grid with matching line weights, for websites, apps and presentations.",
      },
      {
        title: "Spot illustrations",
        desc: "Small drawings for empty states, feature lists, onboarding screens and emails.",
      },
      {
        title: "Editorial illustration",
        desc: "Artwork for blog headers, reports and articles that puts the main idea of the piece into one image.",
      },
      {
        title: "Book illustration",
        desc: "Cover art and interior illustrations, prepared to your printer's or publishing platform's size and bleed.",
      },
      {
        title: "Packaging illustration",
        desc: "Artwork for labels, boxes and bags, supplied as print-ready files on the dieline your printer provides.",
      },
    ],
    audiences: {
      startups:
        "Your product site uses the same stock illustrations as other startups, and you want artwork that belongs only to you.",
      smbs: "You want a few drawings or icons that make your website and printed materials look like one business.",
      dtc: "You need illustrated labels, packaging or social graphics that make your products easy to recognize on a shelf or in a feed.",
      agencies:
        "You need an illustrator who can work in a client's existing style or build a new one from your brief.",
    },
    priceDrivers: [
      "Number of illustrations or icons",
      "Simple line art, or detailed full-color scenes",
      "Whether we create a new style or follow an existing one",
      "Whether print preparation, such as bleed and dielines, is included",
      "Which file formats and sizes you need for web and print",
    ],
    work: [],
    articles: [
      {
        slug: "branding-beyond-the-logo",
        title: "Branding beyond the logo",
        desc: "The parts of a brand customers see besides the logo.",
      },
      {
        slug: "brand-guidelines-for-small-business",
        title: "Brand guidelines for small businesses",
        desc: "Where illustration and icon rules belong in a brand guide.",
      },
      {
        slug: "outsource-graphic-design-to-pakistan",
        title: "Outsourcing graphic design to Pakistan",
        desc: "A buyer's guide to working with a design team abroad.",
      },
    ],
    faqs: [
      {
        q: "What are custom illustration services?",
        a: "Custom illustration is artwork drawn for your business instead of bought from a stock library. That can be a set of brand illustrations for a website, an icon set for an app, spot drawings for emails, or artwork for a book or package. We draw it for you in your brand colors, so no other company uses the same image.",
      },
      {
        q: "Can you match our existing illustration style?",
        a: "Yes, if you have one. Send us the existing artwork and any guidelines, and we'll draw new pieces with the same line weight, palette and level of detail. If you don't have a style yet, we propose one and draw a sample or two for your feedback. We produce the full set once you approve the style.",
      },
      {
        q: "Which file formats do you deliver?",
        a: "We draw most brand illustrations and icons as vector art, so you get SVG for the web, PDF or EPS for print, and PNG for quick use. Detailed painted artwork comes as high-resolution PNG or TIFF. We prepare book and packaging artwork to your printer's size, bleed and color requirements. The proposal lists every format before work starts.",
      },
      {
        q: "How much does custom illustration cost?",
        a: "We don't publish a price list, because a set of simple icons and a detailed illustrated book cover are different jobs. After a free scoping call we send a written proposal with a fixed price, the number of pieces, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Do we own the illustrations?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the final artwork and the editable source files where the proposal lists them. Any licensed fonts or stock elements stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
    ],
    ctaTitle: "Get a fixed quote for your illustrations",
    firstPhase: {
      heading: "Agree the style before the full set",
      body: "We start with your references and a short brief about where the artwork will appear. We then draw one or two sample pieces in a proposed style. Once you approve the style, we produce the full set to match it.",
      inputs: [
        "Where the illustrations will appear",
        "Your brand colors and any style references",
        "The list of subjects or icons you need",
      ],
    },
  },
];
