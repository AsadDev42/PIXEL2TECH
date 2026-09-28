import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Custom Shopify App vs Public App: When to Build Your Own",
  metaDescription:
    "When a custom Shopify app beats paying for public apps: signs you need one, total cost of ownership, common use cases, and alternatives like Functions.",
  keywords: [
    "custom shopify app vs public app",
    "shopify custom app development cost",
    "build a shopify app for my store",
    "shopify private app",
    "shopify functions custom logic",
    "replace multiple shopify apps",
  ],
  keyTakeaways: [
    "A public app is built for many stores, passes Shopify's app review and installs from the Shopify App Store. A custom app is built for one store, or stores in one Plus organization, and skips app review.",
    "Build custom when your workflow is specific to your business, such as an ERP or courier sync, or when several paid apps overlap to half-solve one problem.",
    "Check Shopify Functions, checkout extensions and Shopify Flow first. Note that only Shopify Plus stores can use custom apps that contain Function APIs.",
    "Compare total cost of ownership over two or three years: subscriptions on one side; build, hosting and maintenance on the other. Shopify ships a new API version every quarter, and someone has to keep the app current.",
    "Own the app: keep the code, hosting and developer dashboard under your company's accounts, and request only the access scopes the app needs.",
  ],
  content: [
    {
      heading: "What's the difference between a custom Shopify app and a public app?",
      definition:
        "A public app is built for many stores, passes Shopify's app review and installs from the Shopify App Store. A custom app is built for one store, or for stores in one Plus organization, skips app review, and can't charge through Shopify's app billing. Choose custom when your workflow is specific to your business.",
      body: [
        "The old term 'private app' still shows up in searches. Today, Shopify's [custom apps help page](https://help.shopify.com/en/manual/apps/app-types/custom-apps) describes a custom app as one that you or a developer builds exclusively for your store. New custom apps are created and managed in Shopify's Dev Dashboard. Legacy custom apps created in the Shopify admin before January 1, 2026 can still be managed from the admin.",
        "Shopify's [app distribution documentation](https://shopify.dev/docs/apps/launch/distribution) adds two details that matter for planning. Custom distribution covers a single store or multiple stores in the same Plus organization, and you can't change an app's distribution method after you choose it. Custom apps also can't charge merchants through Shopify's app billing system, which doesn't matter when the merchant is the one paying for the build.",
      ],
      table: {
        caption: "Public vs custom Shopify apps (as of September 2026)",
        headers: ["Question", "Public app", "Custom app"],
        rows: [
          ["Built for", "Many merchants", "Your store, or stores in one Plus organization"],
          ["Shopify app review", "Required, listed or unlisted", "Not required"],
          [
            "Where it's installed from",
            "Shopify App Store or a direct link",
            "An install link from the developer",
          ],
          [
            "How you pay",
            "Monthly subscription or usage fees",
            "Build cost plus hosting and maintenance",
          ],
          ["Who decides the roadmap", "The app vendor", "You"],
          ["Who handles API updates", "The app vendor", "You or your developer"],
        ],
      },
    },
    {
      heading: "Signs you need a custom app",
      body: [
        "Custom apps make sense when the job is specific to how your business runs, not a common storefront feature. A reviews widget is a solved problem. Syncing stock between Shopify and the warehouse system your company picked ten years ago usually isn't.",
        "A quick test: if you can describe the job as 'when this happens in Shopify, do that in another system,' it's an integration, and integrations are where custom apps tend to pay back. If the description starts with 'on the product page,' look for a public app or a custom theme section first, because storefront features are cheaper to build in the theme.",
      ],
      bullets: [
        "You're paying for several apps that overlap, and none of them does the whole job.",
        "Staff copy data between Shopify and another system by hand every day.",
        "Your process depends on business rules no public app supports, such as approval steps or regional pricing logic.",
        "A public app needs more access to your store data than you're comfortable granting.",
        "An integration partner, such as a courier or ERP vendor, has an API but no Shopify app.",
        "You need reports that combine Shopify data with data from other systems.",
      ],
    },
    {
      heading: "When a public app is the smarter choice",
      body: [
        "For most storefront features, a well-supported public app is cheaper and safer than custom code. The vendor spreads development, security and API upgrade costs across many merchants, and you get improvements you didn't pay to build.",
        "Public apps have a cost that doesn't show on the invoice, though. Each one can add scripts to your pages, and some leave code behind after you uninstall them. If your store has cycled through several apps, see [how to remove leftover Shopify app code](/blog/remove-leftover-shopify-app-code), and check what each app adds to interaction delay using our guide to [Shopify INP and Core Web Vitals](/blog/shopify-inp-core-web-vitals).",
      ],
      bullets: [
        "Pick a public app when the feature is common: reviews, subscriptions, loyalty, email capture.",
        "Pick a public app when you need it running this month, not next quarter.",
        "Pick a public app when the vendor supports theme app extensions, so it adds blocks rather than editing theme code.",
        "Pick a public app when you don't have a developer on call to maintain custom code.",
      ],
    },
    {
      heading: "Try these first: Shopify Functions, checkout extensions and Flow",
      definition:
        "Before commissioning a full custom app, check whether Shopify's own extension points or Flow automations cover the need; they are cheaper to build and maintain.",
      body: [
        "Shopify has moved a lot of custom logic into supported extension points. According to Shopify's [Functions documentation](https://shopify.dev/docs/apps/build/functions), Functions customize backend logic such as discounts, payment and delivery options, cart and checkout validation, order routing and bundles. There's an important plan limit: only stores on a Shopify Plus plan can use custom apps that contain Function APIs, although public apps with Functions work on all plans.",
        "[Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is a free app on the Basic, Grow, Advanced and Plus plans. It watches for store events and runs actions when conditions are met, such as tagging high-risk orders or alerting staff when stock runs low. Stores on Grow, Advanced and Plus can use its Send HTTP Request action, which can call another system's API, and that covers some integrations people assume need a custom app.",
        "Checkout is the third place to look. [Checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions) let apps add content and fields to checkout, but Shopify limits extensions on the information, shipping and payment steps to Plus stores. If your idea depends on changing those steps and you're not on Plus, rethink the idea before you scope the app.",
      ],
      table: {
        caption: "Shopify extension options and plan notes (as of September 2026)",
        headers: ["Option", "What it handles", "Plan notes"],
        rows: [
          [
            "Shopify Flow",
            "Event-based automations: tagging, notifications, simple integrations",
            "Free on Basic, Grow, Advanced and Plus; Send HTTP Request on Grow and above",
          ],
          [
            "Shopify Functions",
            "Backend logic for discounts, delivery, payments, validation, bundles",
            "Custom apps with Functions require Plus; public apps with Functions work on all plans",
          ],
          [
            "Checkout UI extensions",
            "Custom content and fields in checkout",
            "Information, shipping and payment steps are Plus only",
          ],
          [
            "Custom app",
            "Integrations, admin tools, reports, data sync",
            "Function APIs inside a custom app need Plus",
          ],
        ],
      },
    },
    {
      heading: "What does a custom Shopify app really cost to own?",
      body: [
        "The build quote is the smallest part of the decision. A custom app has running costs, and the most predictable one is Shopify's release schedule. Shopify's [API versioning documentation](https://shopify.dev/docs/api/usage/versioning) says a new API version ships every three months, each stable version is supported for at least 12 months, and consecutive versions overlap by at least nine months. If an app calls a version that's no longer available, Shopify falls forward to the oldest supported version, which can change behavior without warning. Budget for a review at least once a year and small changes more often.",
        "New integrations should use the GraphQL Admin API. Shopify's [REST Admin API](https://shopify.dev/docs/api/admin-rest) has been a legacy API since October 1, 2024, so a developer proposing REST for new work is adding maintenance debt on day one.",
        "Use the worksheet below and fill in your own numbers. As an illustrative example only: three overlapping apps at $50, $100 and $150 a month add up to $300 a month, or $10,800 over three years. A custom app replacing them has to come in below that once you add its build cost, hosting and three years of maintenance, or deliver something the apps can't, such as removing hours of manual work each week.",
      ],
      table: {
        caption: "Total cost of ownership worksheet (three-year view)",
        headers: ["Cost line", "Public apps", "Custom app"],
        rows: [
          ["Upfront", "Setup and configuration time", "Discovery, design and build"],
          ["Monthly", "Subscriptions and usage fees", "Hosting, monitoring and error logging"],
          [
            "Quarterly",
            "None directly; the vendor handles API versions",
            "API version review and fixes",
          ],
          [
            "When things change",
            "Wait for the vendor, or switch apps",
            "Pay your developer to change it",
          ],
          ["Staff time", "Workarounds for missing features", "Training and internal support"],
          [
            "Exit cost",
            "Removing leftover code, migrating data",
            "Documentation and handover if you change developers",
          ],
        ],
      },
    },
    {
      heading: "Common custom-app use cases",
      body: [
        "The best custom apps usually replace manual work that happens every day. They tend to run in the background, not on your storefront.",
      ],
      bullets: [
        "ERP and inventory sync: pushing orders to the ERP and pulling stock levels back on a schedule.",
        "Courier and 3PL integrations: booking shipments with a regional courier that has no Shopify app, and writing tracking numbers back to orders.",
        "Pricing and approval rules: logic for trade customers or regional price lists that goes beyond discount codes. Check Shopify's native B2B catalogs first.",
        "Finance and tax reporting: exports formatted for your accountant or local tax invoice requirements.",
        "Internal admin tools: bulk edits, data checks or product data enrichment your team runs weekly.",
        "Data pipelines: sending order and customer data to a warehouse or BI tool.",
      ],
    },
    {
      heading: "What a custom app project looks like",
      body: [
        "Integration apps fail in quiet ways: an order that never reached the ERP, a stock level that stopped updating on a Sunday. The build plan should spend as much time on what happens when something goes wrong as on the happy path.",
        "A sensible project runs in stages, with a working version on a development store before anything touches live orders. Ask any developer you're considering how they handle each stage below, and what you'll be able to see and test at the end of it.",
      ],
      bullets: [
        "Discovery: the workflow written as steps, the systems involved, and sample data from each.",
        "Prototype on a development store, using copies of real products and orders.",
        "Error handling: retries for failed calls, a log of every sync, and alerts to a named person.",
        "Safe re-runs: processing the same order twice shouldn't create two shipments or two invoices.",
        "Staged rollout: start with a subset of orders or one location before switching everything over.",
        "Handover: documentation, credentials in your accounts, and a date for the first API version review.",
      ],
    },
    {
      heading: "Ownership, security and access scopes",
      body: [
        "Whoever controls the app's developer account, code repository and hosting controls the app. Put all three under your company's accounts from day one, and give your developer access rather than the other way around.",
        "Ask for the smallest set of access scopes the app needs. An order export doesn't need write access to products. In your Shopify admin, only people with the App development permission can create or manage custom apps, so check who has it.",
      ],
      bullets: [
        "Code in a repository your company owns, with the developer added as a collaborator.",
        "Hosting and domain accounts in your company's name.",
        "API credentials stored in a secrets manager, never in code or chat messages.",
        "Access scopes listed in the brief and reviewed at handover.",
        "A named person responsible for API version reviews.",
        "Written documentation: what the app does, where it runs, how to redeploy it.",
      ],
      callout: {
        title: "From the studio",
        body: "When a client asks for a custom app, we first write the workflow out as steps on one page: what triggers it, what data moves, who checks the result. Sometimes that page shows Flow or an existing app can cover most of it, and the custom part shrinks to a single integration. When we do build, the handover includes a runbook covering how to rotate credentials, how to redeploy, and which API version the app targets.",
      },
    },
    {
      heading: "Scoping a custom app project: the brief to send a developer",
      body: [
        "A clear brief keeps estimates comparable and stops scope creep. Send the same one to every developer you talk to, and ask each for a line-item estimate plus their view on whether Flow, Functions or an existing app could replace part of the build. For how different providers price this work, see [Shopify developer rates](/blog/shopify-developer-rates).",
        "Pixel2Tech builds store-specific integrations and internal tools through our [custom platforms and apps service](/services/custom-platforms-and-apps). The checklist below works with any developer.",
      ],
      bullets: [
        "The problem in one paragraph, and the cost of it today in staff hours or errors.",
        "The apps you're paying for now and what each one does.",
        "Systems to connect, with links to their API documentation.",
        "Data that moves, in which direction, and how often.",
        "Your Shopify plan, since Function APIs in custom apps need Plus.",
        "Who owns the code, hosting and developer account.",
        "Who maintains the app after launch, and the budget for it.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a custom app on Shopify?",
      a: "A custom app is an app built exclusively for your store, unlike a public app that's built for many merchants. It's installed from a link rather than the Shopify App Store, doesn't go through Shopify's app review, and can be distributed only to a single store or to stores in the same Plus organization. New custom apps are created in Shopify's Dev Dashboard.",
    },
    {
      q: "How much does a custom Shopify app cost?",
      a: "It depends on the integrations, data volume and business rules involved, so compare total cost of ownership rather than the build quote alone. Add up build cost, hosting and maintenance over two or three years, including API version reviews, since Shopify releases a new version every quarter. Then compare that with the subscriptions and staff time the app would replace.",
    },
    {
      q: "Do custom apps need Shopify approval?",
      a: "No. Shopify's distribution documentation says apps with custom distribution don't need app review, while public apps do. That makes custom apps faster to launch, but the security review becomes your responsibility. Check the access scopes the app requests, where credentials are stored, and who can deploy changes before you install it on your live store.",
    },
    {
      q: "Can one custom app replace several paid apps?",
      a: "Sometimes. It works best when the apps overlap around one workflow, such as order routing or reporting, and you need behavior none of them offers. It works poorly for broad storefront features like reviews or loyalty, where vendors spread costs across many stores. Also check your plan: only Shopify Plus stores can use custom apps that contain Shopify Function APIs.",
    },
    {
      q: "Who maintains a custom app after launch?",
      a: "You do, through your developer or in-house team. Shopify supports each API version for at least 12 months and releases a new one every quarter, so someone must review the app against new versions and fix anything that changes. Agree on a maintenance retainer or an annual review before launch, and keep documentation so another developer could take over.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center — Custom apps",
      href: "https://help.shopify.com/en/manual/apps/app-types/custom-apps",
    },
    {
      label: "Shopify.dev — App distribution",
      href: "https://shopify.dev/docs/apps/launch/distribution",
    },
    {
      label: "Shopify.dev — API versioning",
      href: "https://shopify.dev/docs/api/usage/versioning",
    },
    {
      label: "Shopify.dev — Shopify Functions",
      href: "https://shopify.dev/docs/apps/build/functions",
    },
    {
      label: "Shopify Help Center — Shopify Flow",
      href: "https://help.shopify.com/en/manual/shopify-flow",
    },
    {
      label: "Shopify.dev — Checkout UI extensions",
      href: "https://shopify.dev/docs/api/checkout-ui-extensions",
    },
  ],
  internalLinks: [
    { label: "Shopify developer rates", to: "/blog/shopify-developer-rates" },
    { label: "Remove leftover Shopify app code", to: "/blog/remove-leftover-shopify-app-code" },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    {
      label: "Custom web app development cost in Pakistan",
      to: "/blog/custom-web-app-development-cost",
    },
    { label: "Custom platforms and apps", to: "/services/custom-platforms-and-apps" },
  ],
  cta: {
    title: "Paying for several apps that half-solve one problem?",
    body: "Send us your app list and a short description of the workflow. We'll tell you whether Flow, Functions, a public app or a custom build is the cheapest way to cover it over three years.",
  },
};

export default post;
