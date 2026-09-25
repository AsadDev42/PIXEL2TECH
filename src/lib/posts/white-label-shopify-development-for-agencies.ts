import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "White-Label Shopify Development: A Guide for Agencies",
  metaDescription:
    "How agencies can outsource Shopify builds under their own brand: pricing models, store access, hand-off workflow, contracts and how to trial a partner.",
  keywords: [
    "white label shopify development",
    "shopify outsourcing partner for agencies",
    "white label shopify plus development",
    "offshore shopify team for agencies",
    "shopify collaborator access",
    "agency development partner nda",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers white-label Shopify development and creative to agencies.",
  keyTakeaways: [
    "White-label Shopify development means a specialist partner builds themes, sections, apps or migrations that your agency delivers under its own brand. You keep the client, the price and the responsibility for quality.",
    "It makes sense when Shopify demand is uneven, when you lack a specific skill such as app development, or when in-house hiring would cost more than the margin you'd keep.",
    "The client should own the Shopify store and theme license. Partners get collaborator access with limited permissions, ideally through your agency's own Partner organization.",
    "Put NDA, non-solicit, IP assignment and SLA terms in writing, and remember Shopify's partner agreement keeps a partner responsible for work it subcontracts.",
    "Trial any partner with a paid pilot task and a scorecard before giving them a client launch.",
  ],
  content: [
    {
      heading: "What is white-label Shopify development?",
      definition:
        "White-label Shopify development is when a specialist studio builds Shopify themes, sections, apps or migrations for an agency, and the agency delivers the work to its clients under its own brand. The agency keeps the client relationship, sets the price and owns quality; the partner works behind the scenes.",
      body: [
        "Most page-one results for this topic are vendor lists that rank their own company first. This guide is deliberately not a list. It covers how to run the arrangement: scoping, access, hand-off, contracts and how to test a partner before trusting them with a launch.",
        "White-label work usually falls into five buckets: theme builds from the agency's designs, custom sections and templates on premium themes, custom apps and integrations, platform migrations, and monthly maintenance. Each has a different risk profile, so many agencies start a new partner on sections or maintenance before handing over a full build.",
      ],
    },
    {
      heading: "When does white-label make sense for an agency?",
      body: [
        "The common trigger is uneven demand. An agency sells three Shopify builds one quarter and none the next, and a full-time developer is either overloaded or idle. A partner turns that fixed cost into a variable one.",
        "Skills are the second trigger. A branding or performance marketing agency may handle design and campaigns well but not Liquid, the GraphQL Admin API or data migrations. Rather than turning work away, it adds a partner for the build.",
      ],
      bullets: [
        "It fits when Shopify work is a service line you sell, but not your core differentiator.",
        "It fits when you have someone in-house who can review design and QA the result.",
        "It fits when your clients value your strategy and design, and the build is a means to an end.",
        "Think twice when you can't check the partner's work yourself.",
        "Think twice when your pricing leaves no room for a partner's fee plus your own project management.",
        "Think twice when the client's contract forbids subcontracting without consent.",
      ],
    },
    {
      heading: "Engagement and pricing models",
      definition:
        "Agencies usually buy white-label Shopify work per project, as a monthly retainer of hours, or as a dedicated developer, and each model shifts risk differently.",
      body: [
        "Per-project pricing is easiest to resell, because you can mark up a fixed number. It depends on a tight scope, so your brief becomes the contract. Retainers suit agencies with steady maintenance and small changes across many client stores. A dedicated developer suits agencies with enough volume to keep one person busy and a lead who can manage their day.",
        "Count your own time when you set your price. As an illustrative example only: if a partner quotes $4,000 for a build and your project manager spends 20 hours on briefing, reviews and client calls, those hours come out of whatever margin you add on top. Our breakdown of [Shopify developer rates](/blog/shopify-developer-rates) explains how different providers price the same work.",
        "Agree on how scope changes travel before the first project. The partner should flag anything outside the brief in writing before doing it, with an estimate. You decide whether to absorb it, charge the client or push back. A partner who quietly does extra work and bills for it later puts you in the position of explaining a surprise invoice to your own client.",
      ],
      table: {
        caption: "White-label Shopify engagement models",
        headers: ["Model", "Best for", "Main risk", "Agree in writing"],
        rows: [
          [
            "Per project, fixed scope",
            "Theme builds, migrations, one-off features",
            "Scope gaps become change orders",
            "Scope, acceptance criteria, revision rounds",
          ],
          [
            "Monthly retainer",
            "Maintenance and small changes across many stores",
            "Unused hours, unclear priorities",
            "Hours, response times, rollover rules",
          ],
          [
            "Dedicated developer",
            "Agencies with steady Shopify volume",
            "Your team must manage their workload",
            "Working hours, overlap, replacement if they leave",
          ],
        ],
      },
    },
    {
      heading: "Who should own the store, theme and code?",
      body: [
        "The client should own the Shopify store, pay the subscription and hold any theme license. Shopify's [theme licensing page](https://help.shopify.com/en/manual/online-store/themes/managing-themes/unlicensed-themes) says a Theme Store purchase is licensed only to the store it was bought for, so buy premium themes on the client's store, not a partner's development store.",
        "Access runs through collaborator accounts. The [Shopify Help Center](https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts) explains that collaborators are Shopify Partners the store owner allows in, that owners can require a 4-digit request code and set permissions, and that access expires after 90 days without a login. Store ownership can't be transferred to a collaborator. On the partner side, [Shopify's help page on collaborations](https://help.shopify.com/en/partners/dashboard/managing-stores/request-access) confirms the store appears only after the merchant approves, and the merchant controls which areas the partner can reach.",
        "Collaborator access requires a Shopify Partner account, so an agency reselling Shopify work should be in the [Shopify Partner Program](https://www.shopify.com/partners) itself rather than relying on the partner's account. For white-label work, the cleanest setup is often to add the partner's developers as users in your agency's own Partner organization. Shopify's [Partner Dashboard access guide](https://help.shopify.com/en/partners/dashboard/account-access) covers adding users and assigning roles with the permissions they need. Collaborator requests then come from your agency, and you can remove a developer's access without involving the client.",
      ],
      bullets: [
        "Client owns the store, the billing and the theme license.",
        "Agency holds the collaborator relationship through its Partner organization.",
        "Partner developers get only the permissions each task needs.",
        "Code lives in a repository owned by the agency or the client, with the partner added as a collaborator.",
        "App hosting and API credentials sit in accounts the agency or client controls.",
      ],
    },
    {
      heading: "Hand-off workflow: from brief to live theme",
      body: [
        "Most white-label friction comes from hand-offs, not code. The partner can't read your client's mind, so everything the client told you has to reach the partner in writing.",
        "A usable brief covers the store URL and plan, the theme and version, the Figma link, which elements the client's team must be able to edit, the apps involved, the deadline, and the acceptance criteria. Add anything the client is sensitive about, such as a past launch that went badly or a competitor they don't want to resemble.",
        "Shopify's tooling supports a clean process. According to the [Shopify CLI documentation](https://shopify.dev/docs/storefronts/themes/tools/cli), development themes are hidden, don't count toward the store's theme limit, and are deleted after seven days of inactivity, while work that needs a lasting preview can be pushed to an unpublished theme. The CLI also works with Shopify's GitHub integration, which adds version control to theme work.",
      ],
      table: {
        caption: "Who does what in a white-label Shopify project",
        headers: ["Step", "Agency", "Partner"],
        rows: [
          [
            "Discovery and scope",
            "Runs client workshops, writes the brief",
            "Reviews brief, asks questions, estimates",
          ],
          [
            "Design",
            "Delivers Figma files with states and mobile views",
            "Flags anything that won't work in Shopify",
          ],
          [
            "Build",
            "Answers questions within an agreed time",
            "Builds on development and unpublished themes",
          ],
          [
            "QA",
            "Reviews against brief and brand standards",
            "Tests devices, accessibility and speed first",
          ],
          [
            "Client review",
            "Presents the preview theme and collects feedback",
            "Makes agreed revisions",
          ],
          [
            "Launch",
            "Owns the go-live decision and client comms",
            "Publishes and monitors with the agency",
          ],
        ],
      },
      bullets: [
        "QA checklist before anything reaches your client: mobile and desktop on real devices.",
        "Keyboard navigation, focus states and color contrast.",
        "Long product titles, missing images, sold-out and sale states.",
        "Theme editor check: can the client's team edit every new section?",
        "Speed check on the product page before and after new apps or sections.",
        "No stray partner branding, credits or comments in code the client might see.",
      ],
      callout: {
        title: "From the studio",
        body: "When we work white-label, we ask the agency for a one-page brand sheet on top of the Figma file: the client's tone for microcopy, words they never use, and who signs off. We also agree on a single channel for questions, usually a shared thread the agency's project manager watches, so nothing reaches the client that the agency hasn't seen first.",
      },
    },
    {
      heading: "Contracts: NDA, non-solicit, IP assignment and SLAs",
      body: [
        "Get the paperwork right before the first project, not during it. This isn't legal advice; have your own counsel review the templates. The points below are the ones agencies most often leave out.",
        "Check your obligations to Shopify too. The [Shopify Partner Program Agreement](https://www.shopify.com/partners/terms), last updated February 27, 2026, says a partner may only access merchant stores for work the merchant has authorized, using permitted tools, and that a partner stays responsible for its obligations even when it subcontracts them. If your agency is the Partner of record, the client's store is your responsibility no matter who writes the code.",
      ],
      bullets: [
        "NDA covering client names, store data, designs and pricing.",
        "Non-solicit: the partner won't pitch or accept work from your clients directly for an agreed period.",
        "IP assignment: code and designs transfer to the agency or client on payment.",
        "SLAs: response times for questions, bug fixes and urgent production issues.",
        "Data handling: how customer data seen during the work is stored and deleted.",
        "Subcontracting: the partner can't pass your work to someone else without consent.",
        "Exit terms: what gets handed over, and when, if either side ends the relationship.",
      ],
    },
    {
      heading: "How to trial a white-label partner",
      body: [
        "Don't test a new partner on a client's launch. Pay for a real but contained task first, such as a custom section from one of your designs or a small bug list on a staging store, and score the result.",
        "Watch the questions they ask before starting as closely as the code. A partner who asks about editable settings, mobile behavior and edge cases before quoting is showing you how they'll work on the big project.",
        "After the pilot, hold a short review call and ask the partner what they'd change about your brief. Their answer shows whether they'll push back when something is unclear, which is exactly what you need when a client deadline is close. Run a second, slightly larger task before a full build if the first result was mixed.",
      ],
      table: {
        caption: "Pilot task scorecard",
        headers: ["Criterion", "What good looks like"],
        rows: [
          ["Brief questions", "Specific questions before starting; assumptions written down"],
          ["Estimate accuracy", "Delivered close to the estimate, with early warning of changes"],
          [
            "Code quality",
            "New section files with presets; no edits to core theme files without notes",
          ],
          ["Editability", "Your team can change content and settings in the theme editor"],
          ["QA", "Tested on mobile, with long content and missing images"],
          ["Communication", "Clear written updates; questions answered within the agreed window"],
          ["Documentation", "Short notes on what changed and how to use it"],
        ],
      },
    },
    {
      heading: "Communication and time-zone rhythms",
      body: [
        "If your partner is in Pakistan, as we are, time zones shape the working day. Pakistan Standard Time is UTC+5 with no daylight saving, so the gap to your office changes when your clocks do. Lahore is 9 hours ahead of New York during US daylight time and 10 hours ahead in winter, and 4 hours ahead of London during British Summer Time and 5 hours in winter.",
        "That gap can work for you. A brief sent at the end of a New York day can come back as a preview theme the next morning. It only works with written briefs and one short overlap window for calls. For more on contracts and payments with offshore teams, see our guide to [outsourcing web development to Pakistan](/blog/outsource-web-development-to-pakistan).",
      ],
      bullets: [
        "A written end-of-day update from the partner: done, in progress, blocked.",
        "One fixed overlap slot for live calls, kept short.",
        "A shared task board both sides update, not scattered chat messages.",
        "A named escalation contact on each side for launch days.",
        "Launches scheduled when both teams are online, never at the end of the partner's day.",
      ],
      table: {
        caption: "Time difference from Pakistan (PKT, UTC+5)",
        headers: ["Agency location", "Summer time", "Winter time", "Example overlap"],
        rows: [
          [
            "New York",
            "PKT is 9 hours ahead",
            "PKT is 10 hours ahead",
            "9 am New York is 6 pm Lahore in summer",
          ],
          [
            "Los Angeles",
            "PKT is 12 hours ahead",
            "PKT is 13 hours ahead",
            "Early-morning LA calls reach Lahore's evening",
          ],
          [
            "London",
            "PKT is 4 hours ahead",
            "PKT is 5 hours ahead",
            "Most of the UK morning overlaps Lahore's afternoon",
          ],
          [
            "Berlin or Paris",
            "PKT is 3 hours ahead",
            "PKT is 4 hours ahead",
            "Most of the working day overlaps",
          ],
        ],
      },
    },
    {
      heading: "Where Pixel2Tech fits",
      body: [
        "We're a seven-person studio in Lahore that builds Shopify themes, sections and integrations for agencies under their brand, and we've produced creative for Swishtag, a Shopify Plus agency. If your gap is design or ad creative rather than code, our guide to [white-label creative for agencies](/blog/white-label-creative-for-agencies) covers that side of the arrangement.",
        "If you'd like to run a pilot task, our [WordPress and Shopify services](/services/wordpress-and-shopify) page explains how we work. The scorecard above is the one we'd expect you to use on us.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is white-label Shopify development?",
      a: "It's an arrangement where a specialist studio builds Shopify work, such as themes, custom sections, apps or migrations, for an agency, and the agency delivers it to clients under its own brand. The agency keeps the client relationship, pricing and accountability for quality, while the partner handles development behind the scenes under an NDA and non-solicit agreement.",
    },
    {
      q: "Will our clients know we outsource?",
      a: "Only if you tell them or your setup shows it. Adding partner developers as users in your agency's Partner organization means collaborator requests come from your agency. That said, check client contracts for subcontracting clauses, and don't mislead a client who asks directly. Many agencies simply say they work with a specialist development team.",
    },
    {
      q: "How should white-label Shopify work be priced?",
      a: "Agencies usually buy per project for builds and migrations, a monthly retainer for maintenance across several stores, or a dedicated developer when volume is steady. When reselling, price your own project management, QA and client communication on top of the partner's fee. Those hours are real costs, and they're the reason clients hire an agency.",
    },
    {
      q: "Who should own the Shopify store and theme code?",
      a: "The client should own the store, pay the subscription and hold the theme license, since Shopify licenses a Theme Store purchase only to the store it was bought for. Code should live in a repository owned by the agency or client, with the partner added as a collaborator, and IP should transfer on payment under your contract.",
    },
    {
      q: "How do we protect our client relationships when using a partner?",
      a: "Use a written non-solicit clause and an NDA, route all client communication through your agency, and keep store access under your own Partner organization so you can remove it at any time. Review work before the client sees it, and make sure no partner branding or comments appear in code, previews or emails.",
    },
  ],
  sources: [
    {
      label: "Shopify Partner Program",
      href: "https://www.shopify.com/partners",
    },
    {
      label: "Shopify Partner Program Agreement",
      href: "https://www.shopify.com/partners/terms",
    },
    {
      label: "Shopify Help Center — Collaborator accounts",
      href: "https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts",
    },
    {
      label: "Shopify Help Center — Client transfer stores and collaborations",
      href: "https://help.shopify.com/en/partners/dashboard/managing-stores/request-access",
    },
    {
      label: "Shopify.dev — Shopify CLI for themes",
      href: "https://shopify.dev/docs/storefronts/themes/tools/cli",
    },
    {
      label: "Shopify Help Center — Theme licensing",
      href: "https://help.shopify.com/en/manual/online-store/themes/managing-themes/unlicensed-themes",
    },
  ],
  internalLinks: [
    { label: "Shopify developer rates", to: "/blog/shopify-developer-rates" },
    { label: "WooCommerce to Shopify migration", to: "/blog/woocommerce-to-shopify-migration" },
    { label: "White-label creative for agencies", to: "/blog/white-label-creative-for-agencies" },
    {
      label: "Outsourcing web development to Pakistan",
      to: "/blog/outsource-web-development-to-pakistan",
    },
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Looking for a Shopify partner you can test first?",
    body: "Send us one real task, such as a custom section or a short bug list, with your brief and brand sheet. We'll quote it as a paid pilot so you can score the work before any client launch.",
  },
};

export default post;
