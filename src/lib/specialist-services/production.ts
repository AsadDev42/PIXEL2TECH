import { AtSign, Component, MousePointerClick, Sparkles } from "lucide-react";
import type { SpecialistServiceCopy } from "@/lib/specialist-services";

/**
 * Specialized production pages: motion design, email design, design systems
 * and UI/UX (product) design. Same truth rules as service-pages.ts. `work`
 * lists only published portfolio projects that show this kind of work, and is
 * empty where nothing published fits, so the page shows `firstPhase` instead.
 */
export const PRODUCTION_SERVICES: SpecialistServiceCopy[] = [
  {
    slug: "motion-design",
    title: "Motion design",
    parent: "Video Editing & Ads",
    icon: Sparkles,
    menuDescription: "Explainers, logo animation and social motion",
    bestFor: "A product, logo or idea that is easier to show in motion than to film.",
    metaTitle: "Motion graphics services and explainer videos | Pixel2Tech",
    metaDescription:
      "Motion graphics services for US brands and agencies. Animated explainer videos, logo animation, kinetic type and social motion. Fixed quote after a call.",
    serviceType: "Motion graphics and animation",
    h1: "Motion graphics services",
    h1Highlight: "for US brands and agencies",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio working with businesses in the US, UK, Canada and the EU, and its motion graphics services cover animated explainer videos, logo animation, kinetic type, social motion and product walkthroughs built from each client's brand and script.",
    tags: ["Explainers", "Logo animation", "Social motion"],
    deliverables: [
      {
        title: "Animated explainers",
        desc: "Script, storyboard, styleframes and final animation for a video that explains what your product or service does.",
      },
      {
        title: "Logo animation",
        desc: "An animated version of your logo for video intros, end cards and social profiles, exported with and without a background.",
      },
      {
        title: "Kinetic typography",
        desc: "Animated text timed to a voiceover or quote and set in your brand fonts, so the message reads with the sound off.",
      },
      {
        title: "Social motion",
        desc: "Animated posts, stories and reels in 9:16, 1:1 and 4:5, built from one set of brand animations.",
      },
      {
        title: "UI and website animation",
        desc: "Animated walkthroughs of your app or website screens, plus motion notes for the hover and loading states your developers build.",
      },
      {
        title: "Presentation motion",
        desc: "Animated title cards, charts and transitions for pitch decks, webinars and event screens.",
      },
    ],
    audiences: {
      startups:
        "You need to explain a product that is hard to film, for a landing page, a demo or an investor deck.",
      smbs: "Your service takes several paragraphs to explain, and a short animation would answer the first questions.",
      dtc: "You need animated product ads and social posts every month, all in one style.",
      agencies:
        "You need a motion designer for client explainers, logo animation or campaign assets, working to your brief.",
    },
    priceDrivers: [
      "Length of each video and the number of scenes",
      "Motion graphics, illustrated scenes or animated product screens",
      "Whether scripting, voiceover and music are included",
      "Number of versions, lengths and aspect ratios",
      "A single video, or a regular monthly volume",
    ],
    work: [
      {
        slug: "animated-explainer-videos",
        note: "Nine landscape explainers for SaaS, tech and AI products, with interface walkthroughs, animated typography and illustrated scenes.",
      },
      {
        slug: "performance-marketing-video-ads",
        note: "Ten vertical video ads, including animated ad creative and app promotions alongside creator-led product demos.",
      },
    ],
    articles: [
      {
        slug: "animated-explainer-video-production-process",
        title: "Plan an animated explainer",
        desc: "The brief, script, storyboard and animatic to approve before full animation starts.",
      },
      {
        slug: "saas-product-demo-video-brief",
        title: "Brief a SaaS demo video",
        desc: "Define the audience, product workflow, screen recordings and review stages.",
      },
      {
        slug: "video-deliverables-aspect-ratio-brief",
        title: "One video in several formats",
        desc: "Plan landscape, vertical and square versions, with captions and end cards for each.",
      },
    ],
    faqs: [
      {
        q: "What do your motion graphics services include?",
        a: "We animate explainer videos, logo reveals, kinetic type, social posts and ads, product walkthroughs and presentation graphics. Most projects start from your brand guide, a script or brief, and any product screens you want to show. We agree the list of videos, lengths and formats on the scoping call and write it into the proposal before work starts.",
      },
      {
        q: "How does an animated explainer project run?",
        a: "We agree the script first, before anything is drawn. Next come a storyboard and a few styleframes that set the look. Once you approve those, we animate the video, add voiceover and music if they are in scope, and share a draft for your review. Each stage has its own approval, so late changes stay small.",
      },
      {
        q: "How much do motion graphics cost?",
        a: "We don't publish a price list, because a short logo animation and a long illustrated explainer are very different jobs. After a free scoping call we send a fixed quote in writing with the deliverables, revision rounds and timeline. Paid voiceover, music and stock assets are listed separately unless the proposal says they are included.",
      },
      {
        q: "Do you write the script and arrange the voiceover?",
        a: "We can write the script or tighten yours as part of the project, based on what your customers ask before they buy. Voiceover can come from someone on your team or from a paid voice artist, and music comes from a licensed library. The proposal states who supplies each one and lists any third-party cost.",
      },
      {
        q: "Do we own the animation and the source files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. If you want the editable project files as well as the exported videos, ask on the scoping call so we list them in the proposal. Fonts, music and stock assets stay under their own licenses, which pass to you where the license allows.",
      },
    ],
    ctaTitle: "Get a fixed quote for your motion design",
    firstPhase: {
      heading: "Start with one script.",
      body: "Share the message, the audience and where the video will run. We can agree the script, a storyboard and one styleframe before full animation starts, so you approve the look early.",
      inputs: [
        "Script, brief or key message",
        "Brand guide, logo files and fonts",
        "Placements, lengths and aspect ratios",
      ],
    },
  },

  {
    slug: "email-design",
    title: "Email design",
    parent: "Social Media & Email",
    icon: AtSign,
    menuDescription: "Templates, newsletters and flow emails",
    bestFor: "A brand whose newsletters, campaigns and automated emails each look different.",
    metaTitle: "Email design services and email template design | Pixel2Tech",
    metaDescription:
      "Email design services for US brands. Email template design, newsletters and flow emails built in Klaviyo, Mailchimp or MailerLite. Fixed quote.",
    serviceType: "Email design and template development",
    h1: "Email design services",
    h1Highlight: "for US brands and service businesses",
    answer:
      "Pixel2Tech is a Lahore, Pakistan studio working with businesses in the US, UK, Canada and the EU, and its email design services cover responsive email template design, newsletters, campaign emails and automated flow emails, built in Klaviyo, Mailchimp or MailerLite and tested on phone and desktop before they send.",
    tags: ["HTML email", "Klaviyo", "Newsletters"],
    deliverables: [
      {
        title: "Email template system",
        desc: "Reusable blocks for headers, product rows, text, buttons and footers, designed in Figma and agreed before the build.",
      },
      {
        title: "Responsive HTML templates",
        desc: "Templates built so columns stack on phones and the layout holds in common email apps.",
      },
      {
        title: "Newsletter design",
        desc: "A newsletter layout your team fills in each issue, with set places for the main story, links and one call to action.",
      },
      {
        title: "Campaign emails",
        desc: "One-off emails for launches, sales and announcements, designed in your brand and tested before they send.",
      },
      {
        title: "Automated flow emails",
        desc: "Welcome, abandoned cart, post-purchase and re-engagement emails designed as one set, so every step looks related.",
      },
      {
        title: "Platform setup and handover",
        desc: "Templates saved in Klaviyo, Mailchimp or MailerLite, with notes on which blocks to edit and which to leave alone.",
      },
    ],
    audiences: {
      startups:
        "You send product updates from a default template, and they don't look like the rest of your brand.",
      smbs: "You want a monthly newsletter your team can fill in each month without redesigning it.",
      dtc: "Your Klaviyo flows use three different styles, and campaign emails break on mobile.",
      agencies:
        "You need email templates designed and built for client accounts on Klaviyo, Mailchimp or MailerLite.",
    },
    priceDrivers: [
      "Number of templates and unique layouts",
      "Design only, or design plus build in your platform",
      "Number of flow emails and campaigns",
      "Whether we write the copy or you supply it",
      "How many email apps and devices you need us to test",
    ],
    work: [],
    articles: [
      {
        slug: "welcome-email-series-subscribers-enquiries",
        title: "Plan a welcome email series",
        desc: "A four-email plan with timing, topics and one next step per email.",
      },
      {
        slug: "monthly-email-newsletter-service-businesses",
        title: "Run a monthly newsletter you can keep up",
        desc: "A simple plan that keeps each issue useful and on schedule.",
      },
      {
        slug: "re-engagement-emails-win-back-subscribers",
        title: "Win back subscribers who stopped opening",
        desc: "A short sequence that asks readers what they want and cleans the list.",
      },
    ],
    faqs: [
      {
        q: "What do your email design services include?",
        a: "We design and build email templates, newsletters, campaign emails and automated flow emails such as welcome and abandoned cart series. Most projects start with a master template made of reusable blocks, and the individual emails follow from it. The proposal lists each template, each email and the platform we build in, so you know what you will receive.",
      },
      {
        q: "Do you build email templates in Klaviyo, Mailchimp or MailerLite?",
        a: "Yes. We can build templates in the drag-and-drop editor of Klaviyo, Mailchimp or MailerLite, or hand over coded HTML where your platform accepts custom code. Editor templates are easier for your team to change. Coded templates give more control over the layout. We recommend one based on who will send the emails each week.",
      },
      {
        q: "Will our emails display correctly on phones and in Outlook?",
        a: "We design for small screens first and test each template in common email apps before handover. Some apps, such as older desktop versions of Outlook, ignore parts of modern email code, so we plan layouts that still read well there. No email looks identical in every app, and we tell you where differences remain before you send.",
      },
      {
        q: "How much does email template design cost?",
        a: "We don't publish a price list, because one newsletter template and a full set of flow emails are very different jobs. After a free scoping call we send a fixed quote in writing with the templates, emails, revision rounds and timeline. Your email platform subscription is separate from our fee, and we recommend keeping it in your own account.",
      },
      {
        q: "Do we own the email templates and design files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. That includes the templates saved in your email platform, any HTML we coded and the Figma design files. Fonts and stock images stay under their own licenses, which pass to you where the license allows.",
      },
    ],
    ctaTitle: "Get a fixed quote for your email design",
    firstPhase: {
      heading: "Start with one master template.",
      body: "Share a few emails you send now, your brand guide and the platform you use. We can design one master template with its content blocks, build it in your platform and test it before we design the rest of the set.",
      inputs: [
        "Recent emails and your sending platform",
        "Brand guide, logo and fonts",
        "The flows and campaigns you plan next",
      ],
    },
  },

  {
    slug: "design-systems",
    title: "Design systems",
    parent: "Website Development",
    icon: Component,
    menuDescription: "Figma libraries, tokens and coded components",
    bestFor: "A product or website where each new screen looks a little different from the last.",
    metaTitle: "Design system agency for small product teams | Pixel2Tech",
    metaDescription:
      "Design system agency for startups and small product teams. Figma component libraries, design tokens, documentation and coded React components. Free call.",
    serviceType: "Design system design and development",
    h1: "Design system agency",
    h1Highlight: "for startups and small product teams",
    answer:
      "Pixel2Tech is a design system agency in Lahore, Pakistan working with businesses in the US, UK, Canada and the EU, and its design system services give small teams a Figma component library, design tokens, usage documentation and matching React components, so designers and developers build new screens from the same parts.",
    tags: ["Figma", "Design tokens", "React"],
    deliverables: [
      {
        title: "Interface audit",
        desc: "An inventory of the buttons, forms, colors and type styles in your product today, with duplicates and conflicts marked.",
      },
      {
        title: "Design tokens",
        desc: "Named values for color, type, spacing, corner radius and shadows, set up in Figma and exported for your codebase.",
      },
      {
        title: "Figma component library",
        desc: "Buttons, inputs, cards, navigation, modals and the other components you use, with the variants and states each one needs.",
      },
      {
        title: "Coded React components",
        desc: "The same components built in React and styled from the tokens, ready for your developers to import.",
      },
      {
        title: "Documentation",
        desc: "Usage notes for each component that say when to use it, which states it has and its accessibility requirements.",
      },
      {
        title: "Governance for small teams",
        desc: "A simple process for proposing, reviewing and releasing changes, sized for a team without a dedicated design systems role.",
      },
    ],
    audiences: {
      startups:
        "Your product has grown, and each new screen uses slightly different buttons, spacing and colors.",
      smbs: "Your website, customer portal and marketing pages were built by different people and no longer look related.",
      dtc: "Your store, landing pages and emails need shared components, so a new campaign doesn't start from a blank file.",
      agencies:
        "You want a component library and tokens to reuse across client builds, or a partner to build one for a client.",
    },
    priceDrivers: [
      "Number of components and the variants each one needs",
      "Figma only, or Figma plus coded React components",
      "Starting from an existing product, or from a new brand",
      "Number of themes or brands the system supports",
      "How much documentation and team training you need",
    ],
    work: [],
    articles: [
      {
        slug: "design-systems-for-small-teams",
        title: "Design systems for small teams",
        desc: "How a small team builds a simple system that keeps the product consistent.",
      },
      {
        slug: "ai-design-systems-future",
        title: "Why design systems matter with AI tools",
        desc: "AI tools can generate screens, and a shared system keeps them consistent.",
      },
      {
        slug: "mobile-app-design-process",
        title: "Mobile app design process",
        desc: "Where the design system fits between wireframes, UI, testing and handoff.",
      },
    ],
    faqs: [
      {
        q: "What do design system services include?",
        a: "A typical project covers an audit of your current interface, design tokens for color, type and spacing, a Figma component library and written usage guidance. If you need it, we also code the same components in React. We agree which components come first on the scoping call, because a small team rarely needs a full library on day one.",
      },
      {
        q: "Does a small team need a design system?",
        a: "If more than one person designs or builds your screens, a small system saves repeated decisions. It does not need to be large. A set of tokens and the components you use on every page, such as buttons, inputs and cards, already keeps new screens consistent. We start there and add components when your product needs them.",
      },
      {
        q: "Can you build the components in React for our codebase?",
        a: "Yes. We build React components styled from the same tokens as the Figma library, so a button in the design file matches the button in production. Before we start, we review your stack, your styling approach and how your developers ship code. We fit the components to that setup, so your team keeps the tools it already uses.",
      },
      {
        q: "How much does a design system cost?",
        a: "We don't publish a price list, because a starter set of tokens and core components is a very different job from a full library with coded components and documentation. After a free scoping call we send a fixed quote in writing with the components, deliverables, revision rounds and timeline. Work starts once you accept it.",
      },
      {
        q: "Do we own the design system files and code?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. That includes the Figma library, the tokens, the documentation and any component code written for your project. We keep ownership only of our own pre-existing tools, and open-source libraries stay under their own licenses.",
      },
    ],
    ctaTitle: "Get a fixed quote for your design system",
    firstPhase: {
      heading: "Start with an audit of what you have.",
      body: "Share your Figma files or links to your live product, and tell us which screens your team builds most often. We can audit the current interface, agree the tokens and build the core components before the library grows.",
      inputs: [
        "Figma files or links to live screens",
        "Brand guide and current CSS or theme",
        "Your front-end stack and who maintains it",
      ],
    },
  },

  {
    slug: "ui-ux-design",
    title: "Product design",
    parent: "Custom Platforms & Apps",
    icon: MousePointerClick,
    menuDescription: "Flows, prototypes and app UI for handoff",
    bestFor: "A new app that needs its flows tested, or a product your users find hard to use.",
    metaTitle: "UI/UX design services for startups | Pixel2Tech",
    metaDescription:
      "UI/UX design services, web app and dashboard design for startups and small businesses. User flows, wireframes, prototypes and app UI for developer handoff.",
    serviceType: "UI/UX and product design",
    h1: "UI/UX design services",
    h1Highlight: "for US startups and small businesses",
    answer:
      "Pixel2Tech is a product design agency in Lahore, Pakistan working with businesses in the US, UK, Canada and the EU, and its UI/UX design services cover user flows, wireframes, clickable Figma prototypes and final web or mobile app screens prepared for developer handoff.",
    tags: ["Figma", "Prototypes", "App UI"],
    deliverables: [
      {
        title: "User flows",
        desc: "Diagrams of each task a user needs to complete, with the screens and decisions along the way.",
      },
      {
        title: "Wireframes",
        desc: "Low-detail layouts for every screen in the flows, so you can agree structure and content before visual design.",
      },
      {
        title: "Clickable prototypes",
        desc: "A Figma prototype of the key flows that you can click through and put in front of real users.",
      },
      {
        title: "Web and mobile app UI",
        desc: "Final screens in your brand for desktop, tablet and phone, including empty, loading and error states.",
      },
      {
        title: "Usability review",
        desc: "A review of an existing product or prototype for common usability problems, with fixes listed in priority order.",
      },
      {
        title: "Developer handoff",
        desc: "Annotated Figma files with specs, assets and component notes, plus a walkthrough call with your developers.",
      },
    ],
    audiences: {
      startups:
        "You need an MVP designed and tested as a prototype before you pay for development.",
      smbs: "Your team uses an internal tool or customer portal that people avoid because it is confusing.",
      dtc: "You plan a mobile app or customer account area and want the flows designed before a developer quotes it.",
      agencies:
        "You need product designers for a client app or dashboard, working in Figma to your process.",
    },
    priceDrivers: [
      "Number of user flows and unique screens",
      "A web app, a mobile app, or both",
      "A new product, or a redesign of one already in use",
      "Prototype detail and the number of review rounds",
      "Whether a design system or component library is in scope",
    ],
    work: [],
    articles: [
      {
        slug: "mobile-app-design-process",
        title: "Mobile app design process",
        desc: "Validation, research, wireframes, prototypes, UI, testing and handoff, step by step.",
      },
      {
        slug: "how-to-scope-custom-web-app-first-version",
        title: "Scope the first version of a web app",
        desc: "Decide what goes into version one and what can wait.",
      },
      {
        slug: "design-systems-for-small-teams",
        title: "Design systems for small teams",
        desc: "Keep screens consistent as a small product team adds features.",
      },
    ],
    faqs: [
      {
        q: "What do your UI/UX design services include?",
        a: "A typical project covers user flows, wireframes, a clickable Figma prototype, final UI for web or mobile and a developer handoff. For a product already in use, we can start with a usability review instead. We agree the flows and the screen count on the scoping call, and the proposal lists every deliverable before design starts.",
      },
      {
        q: "What's the difference between UI and UX design?",
        a: "UX design decides how the product works. It covers the tasks users need to complete, the steps in each one and what every screen must contain. UI design decides how those screens look, including layout, type, color and components. We do both in one project, and we agree flows and wireframes before visual design begins.",
      },
      {
        q: "Does your product design agency also build the app?",
        a: "It can. We can stop at a tested prototype and handoff files for your own developers. Our team also builds web and mobile apps, so the same project can continue into development under a separate scope and quote. The proposal states where the design work ends and what a build would include, so you can decide later.",
      },
      {
        q: "How much does UI/UX design cost?",
        a: "We don't publish a price list, because a single flow for an MVP and a full redesign of a working app are very different jobs. After a free scoping call we send a fixed quote in writing with the flows, screens, revision rounds and timeline. Work starts once you accept it and any agreed deposit is paid.",
      },
      {
        q: "Do we own the designs and Figma files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. That includes the Figma files, the prototypes and the exported assets, and we recommend keeping them in your own Figma workspace. Fonts, icon sets and stock images stay under their own licenses, which pass to you where the license allows.",
      },
    ],
    ctaTitle: "Talk through your product design project",
    firstPhase: {
      heading: "Start with one key user flow.",
      body: "Tell us who uses the product and the one task they must be able to complete. We can map that flow, wireframe its screens and build a clickable prototype you can test before we design the rest of the app.",
      inputs: [
        "Who the users are and their main task",
        "Current product, screenshots or sketches",
        "Brand guide and your planned tech stack",
      ],
    },
  },
];
