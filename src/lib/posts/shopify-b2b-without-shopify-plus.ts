import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify B2B Without Plus: What Basic, Grow and Advanced Get",
  metaDescription:
    "Shopify now offers core B2B tools on Basic, Grow and Advanced plans. See what you get, the hard limits, how to set up wholesale and when Plus still pays.",
  keywords: [
    "shopify b2b without shopify plus",
    "shopify wholesale non-plus",
    "shopify b2b catalog limit",
    "shopify b2b payment terms",
    "shopify wholesale pricing",
    "shopify b2b vs plus",
  ],
  keyTakeaways: [
    "Since April 2, 2026, Shopify's Basic, Grow and Advanced plans include core B2B features at no extra cost: company profiles, up to 3 active B2B catalogs, volume pricing, quantity rules, payment terms and vaulted credit cards.",
    "The main limit is catalogs. Non-Plus stores get up to 3 active catalogs across all B2B markets, assigned through Markets rather than directly to individual companies.",
    "Unlimited catalogs, direct company catalogs, deposits and partial payments stay on Shopify Plus, which starts at $2,300 a month as of September 2026.",
    "Wholesale buyers can apply through a company account request form built with the Shopify Forms app, and you approve each company before it can order at B2B prices.",
    "B2B requires the current customer accounts and can't be used with accelerated checkouts, subscriptions, local delivery or pickup points, so plan a blended store carefully.",
  ],
  content: [
    {
      heading: "Can you use Shopify B2B without Shopify Plus?",
      definition:
        "Yes. Since April 2, 2026, Shopify's Basic, Grow and Advanced plans include native B2B features at no extra cost: company profiles, up to 3 active B2B catalogs, volume pricing, quantity rules, payment terms and vaulted credit cards. Unlimited catalogs, direct company catalogs, deposits and partial payments remain exclusive to Shopify Plus.",
      body: [
        "Shopify announced the change in its [changelog on April 2, 2026](https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans), and its [news post](https://www.shopify.com/news/b2b-for-all) describes the same package: company profiles for wholesale buyers, up to three custom catalogs with their own pricing, volume discounts and quantity rules, vaulted credit cards and payment terms. Before that, native B2B was sold as part of Plus, and smaller brands relied on wholesale apps or a separate store.",
        "Many articles about Shopify wholesale still describe the old rules. Everything below reflects Shopify's help center as of September 2026. Plan-level details change, so check the live pages before you commit to a setup.",
        "This matters most to two groups: direct-to-consumer brands adding a wholesale channel for boutiques and retailers, and manufacturers or exporters who already sell to trade buyers by email and spreadsheet. For both, the question is no longer whether Shopify can do wholesale on a smaller plan, but whether your pricing fits inside the non-Plus limits.",
      ],
    },
    {
      heading: "What non-Plus plans include",
      body: [
        "Shopify's [B2B features by plan page](https://help.shopify.com/en/manual/b2b/getting-started/plan-features) is the reference to bookmark. The table below summarizes it. Most of the day-to-day wholesale tools, including net terms, quick order lists, draft order invoicing and PO numbers, are available on every plan.",
        "Vaulted cards and Flow work well together. A buyer on net 30 can save a card at checkout, and a Shopify Flow workflow using the [Charge vaulted payment for B2B order](https://help.shopify.com/en/manual/shopify-flow/reference/actions/charge-vaulted-payment-for-b2b-order) action, paired with the Payment schedule is due trigger, can charge it when the term ends. That action requires Shopify Payments and an order with payment terms and a vaulted payment method, so it replaces a lot of manual invoice chasing for stores that qualify.",
      ],
      table: {
        caption: "Shopify B2B features by plan (as of September 2026)",
        headers: ["Feature", "Basic, Grow and Advanced", "Plus"],
        rows: [
          ["Companies and company locations", "Yes", "Yes"],
          ["B2B market catalogs", "Up to 3 active across all B2B markets", "Unlimited"],
          ["Direct company catalogs (customer-level pricing)", "No", "Yes"],
          ["Quantity rules and quantity price breaks", "Yes", "Yes"],
          ["Net payment terms and payment reminders", "Yes", "Yes"],
          ["ACH payments", "Yes, United States only", "Yes, United States only"],
          ["Vaulted credit cards", "Yes, with Shopify Payments", "Yes, with Shopify Payments"],
          ["Deposits and partial payments", "No", "Yes"],
          ["Draft order to invoice, checkout to draft, PO numbers", "Yes", "Yes"],
          ["Quick order list and easy reorders", "Yes", "Yes"],
          ["Contextual storefront and checkout", "Advanced only", "Yes"],
          ["Shopify Flow with B2B objects", "Yes", "Yes"],
        ],
      },
    },
    {
      heading: "The hard limits compared with Plus",
      definition:
        "Non-Plus B2B is capped at 3 active catalogs across all B2B markets, can't assign catalogs to individual companies, and can't take deposits or partial payments.",
      body: [
        "The catalog cap shapes everything else. According to Shopify's [catalogs help page](https://help.shopify.com/en/manual/b2b/markets/catalogs), Basic, Grow and Advanced stores can assign up to 3 active catalogs across all their B2B markets, and assigning 3 catalogs to one market uses the full limit. A catalog holds which products a buyer can see and their prices, set as an overall percentage adjustment, fixed prices per product or variant, or both, with fixed prices overriding the percentage.",
        "In practice, 3 catalogs means 3 price lists, such as retail partners, distributors and a trade tier. If your sales team negotiates prices account by account, you'll hit the cap quickly, and that's the clearest sign you need Plus.",
        "Here's an illustrative plan for a rug exporter selling to US buyers. Catalog one, for distributors, uses fixed prices per SKU with carton-quantity rules. Catalog two, for retail stores, takes a percentage off retail with volume price breaks at higher quantities. Catalog three, for interior designers, takes a smaller percentage off with no minimums. Every buyer fits one of the three, and nobody needs a private price list, so the non-Plus plan works.",
        "Some features don't work with B2B on any plan. Shopify's [B2B requirements page](https://help.shopify.com/en/manual/b2b/getting-started/considerations) lists them.",
      ],
      bullets: [
        "Accelerated checkouts, including Shop Pay, Apple Pay, Google Pay and Amazon Pay.",
        "Local delivery and pickup points (both remain available on B2B draft orders created in the admin).",
        "Tipping options.",
        "Subscriptions.",
        "Legacy customer accounts: B2B needs the current customer accounts.",
        "Checkout customizations made in the checkout.liquid file.",
        "Some third-party apps, so check with each app developer.",
      ],
    },
    {
      heading: "How to set up B2B on a non-Plus plan",
      body: [
        "Two requirements come first. To use B2B catalogs on Basic, Grow or Advanced, your store must use the new Shopify Markets, and you must turn on customer accounts, because legacy customer accounts can't be used for B2B. After that, Shopify's setup checklist for blended stores follows the order below.",
        "Payment terms options are no terms (payment due immediately, the default), net 7, 15, 30, 45, 60 or 90, due on fulfillment, and a fixed date for draft orders, according to Shopify's [payment terms guide](https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-terms). For buyers who don't pay by card, Shopify supports manual payment methods such as bank transfer.",
      ],
      bullets: [
        "Confirm your store is on the new Shopify Markets and has customer accounts turned on.",
        "Create companies and company locations, with shipping addresses, tax settings and contacts.",
        "Create up to 3 catalogs with percentage adjustments, fixed prices, quantity rules and volume pricing.",
        "Assign catalogs to your B2B markets from the Catalogs section of the admin.",
        "Set payment terms and payment methods for each company location.",
        "Set up B2B shipping, remembering local delivery and pickup points aren't available at B2B checkout.",
        "Customize the storefront for logged-in buyers, for example adding a quick order list.",
        "Place test orders as a B2B buyer and as a regular shopper before inviting customers.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we set up catalogs for a wholesale launch, we ask for the actual price sheet the sales team sends to buyers today and map every tier to one of the three catalogs. If the sheet has more than three tiers, we sort that out with the client before configuring anything, either by merging tiers or by planning for Plus. Discovering the fourth tier after buyers have logged in is much harder to fix.",
      },
    },
    {
      heading: "How do wholesale buyers sign up?",
      body: [
        "Some guides say non-Plus stores have no way for buyers to apply. Shopify's help center now describes [company account requests](https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests): you install the Shopify Forms app, build a form for wholesale applicants, and add it to your store as a popup or inline form. Each submission creates a company, a company location and a customer in your admin, and by default those companies can't order or see B2B pricing until you approve them.",
        "The help page doesn't list a plan restriction for this feature, but it does list limits. You can't use it if your store is dedicated to B2B and restricted to B2B customers only, and each submission creates a new company rather than adding a buyer to an existing one.",
      ],
      bullets: [
        "Ask for the details you need to approve an account: business name, tax or resale documents, website, and expected order volume.",
        "Decide who reviews applications and how quickly, and tell applicants.",
        "For a B2B-only gated store, collect applications on a separate page or form tool and create companies manually.",
        "When a second buyer from an existing company applies, merge or add them by hand.",
      ],
    },
    {
      heading: "One blended store or a separate wholesale store?",
      body: [
        "A blended store serves direct shoppers and wholesale buyers from the same catalog and inventory. Logged-in B2B buyers see their catalog prices and terms, while everyone else sees retail. Shopify publishes separate setup checklists for blended and dedicated B2B stores, so both are supported.",
        "A separate store means a second plan fee, a second theme and syncing inventory between stores. It can still make sense when the wholesale experience is very different, or when you want wholesale behind a login with no retail visibility at all.",
        "If you go blended, decide what logged-out visitors see about wholesale. A clear trade page that explains who qualifies, minimums, terms and how to apply saves your team from answering the same emails, and it gives the application form somewhere sensible to live.",
      ],
      table: {
        caption: "Blended vs dedicated B2B store",
        headers: ["Question", "Blended store", "Dedicated B2B store"],
        rows: [
          ["Inventory", "One shared inventory", "Needs syncing if both stores sell the same stock"],
          ["Plan cost", "One plan", "Two plans"],
          [
            "Buyer sign-up",
            "Company account request form works",
            "Form can't be used if the store is B2B-only and gated",
          ],
          [
            "Setup guide",
            "Shopify's blended store checklist",
            "Shopify's dedicated store checklist",
          ],
          [
            "Brand experience",
            "Same theme, with B2B content for logged-in buyers",
            "Theme and content built only for trade buyers",
          ],
        ],
      },
    },
    {
      heading: "When is upgrading to Plus still worth it?",
      body: [
        "On Shopify's [pricing page](https://www.shopify.com/pricing) as of September 2026, billed monthly, Basic is $25 a month, Grow $65, Advanced $399, and Plus starts at $2,300. The monthly gap between Advanced and the Plus starting price is $1,901, or $22,812 a year. That's simple arithmetic from list prices, not a quote, and your Plus terms may differ. Plus has to earn that back through wholesale revenue or saved staff time.",
        "Run the numbers the other way too. If your team collects deposits by emailing invoices outside Shopify, keeps private price lists in spreadsheets, and re-keys orders for accounts that don't fit the 3 catalogs, that time has a cost. When it approaches the price gap, Plus is the cheaper option, even before counting the errors that manual steps create.",
      ],
      bullets: [
        "You need more than 3 price lists, or prices negotiated per account.",
        "You take deposits or partial payments on large or made-to-order wholesale orders.",
        "You need to customize the information, shipping or payment steps of checkout, which Shopify limits to Plus.",
        "You want custom apps with Shopify Functions for pricing or validation, which only Plus stores can use.",
        "You run several stores in one organization and want shared custom apps.",
      ],
    },
    {
      heading: "Apps or custom logic you may still need",
      body: [
        "Native B2B covers the core, but most wholesale operations have a few rules that don't fit it. Before adding an app for each one, list them together; sometimes a single integration covers several. Our comparison of a [custom Shopify app vs a public app](/blog/custom-shopify-app-vs-public-app) explains how to decide, and note that custom apps containing Shopify Functions need Plus.",
        "The storefront also needs attention. Wholesale buyers want dense product tables, reorder shortcuts and clear minimums, which usually means custom sections on your theme. Our guide to [Shopify theme customization vs a custom theme](/blog/shopify-theme-customization-vs-custom-theme) covers that choice.",
      ],
      bullets: [
        "Applicant screening beyond a basic form, such as verifying resale certificates.",
        "Rules beyond product-level quantity rules, such as order-level minimums.",
        "ERP or accounting sync for invoices and credit limits.",
        "Price lists beyond the 3-catalog cap, if Plus isn't an option yet.",
      ],
    },
    {
      heading: "Which B2B payment options work in the US, UK and EU?",
      body: [
        "The core B2B tools don't depend on where you're based: companies, catalogs, quantity rules, payment terms and manual payment methods such as bank transfer. Two payment features do. Vaulted credit cards require Shopify Payments, and as of September 2026 Shopify's [list of supported countries](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) includes the United States, the United Kingdom and 26 of the 27 EU member states (Slovakia wasn't listed when we checked). ACH payments are for the United States only.",
        "In practice, a US wholesaler can offer cards on file, ACH and net terms. A UK or EU wholesaler can offer cards on file and net terms, with buyers paying invoices by bank transfer as a manual payment method. Confirm your own country on the live page before you promise card-on-file ordering to trade buyers.",
        "We've produced product visuals for carpet brands such as Nayyer Carpets, and for a trade buyer browsing online, photos carry texture and color until a sample arrives. If you're setting up B2B on Shopify, our [WordPress and Shopify team](/services/wordpress-and-shopify) can configure catalogs and terms and build the trade-facing pages.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I use Shopify B2B without Shopify Plus?",
      a: "Yes. Since April 2, 2026, Basic, Grow and Advanced plans include native B2B at no extra cost: company profiles, up to 3 active catalogs, volume pricing, quantity rules, payment terms and vaulted credit cards. Plus still has unlimited catalogs, direct company catalogs, deposits and partial payments. Your store needs the new Shopify Markets and current customer accounts to use B2B catalogs.",
    },
    {
      q: "How many B2B catalogs do non-Plus plans get?",
      a: "Up to 3 active catalogs across all your B2B markets on Basic, Grow and Advanced, as of September 2026. Assigning all 3 to one market uses the whole limit. Catalogs are assigned through B2B markets, not directly to individual companies; direct company catalogs for customer-level pricing are a Plus feature, and Plus has no catalog cap.",
    },
    {
      q: "Can wholesale customers register themselves on non-Plus plans?",
      a: "Yes, through company account requests. You build an application form with the Shopify Forms app and add it to your store. Each submission creates a company, location and customer, which can't order at B2B prices until you approve them. The feature can't be used on a dedicated B2B store restricted to B2B customers only.",
    },
    {
      q: "Do I need a separate store for wholesale?",
      a: "No. Shopify supports blended stores, where logged-in B2B buyers see their catalogs and terms while other shoppers see retail prices, and it publishes a setup checklist for them. A separate store costs a second plan and needs inventory syncing, but can suit brands that want a fully gated trade site with a different design.",
    },
    {
      q: "Do Shopify B2B payment features work for UK and EU stores?",
      a: "Mostly. Companies, catalogs, quantity rules, payment terms and manual methods such as bank transfer work regardless of country. Vaulted credit cards need Shopify Payments, which covers the UK and 26 EU member states as of September 2026. ACH is limited to the United States, so UK and EU trade buyers can settle invoices by bank transfer instead. Check Shopify's supported-countries page for your country first.",
    },
  ],
  sources: [
    {
      label: "Shopify Changelog — Key B2B features now available on non-Plus plans",
      href: "https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans",
    },
    {
      label: "Shopify News — B2B for all",
      href: "https://www.shopify.com/news/b2b-for-all",
    },
    {
      label: "Shopify Help Center — B2B features by plan",
      href: "https://help.shopify.com/en/manual/b2b/getting-started/plan-features",
    },
    {
      label: "Shopify Help Center — Requirements and considerations for B2B",
      href: "https://help.shopify.com/en/manual/b2b/getting-started/considerations",
    },
    {
      label: "Shopify Help Center — Company account requests",
      href: "https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests",
    },
    {
      label: "Shopify — Pricing",
      href: "https://www.shopify.com/pricing",
    },
    {
      label: "Shopify Help Center — Shopify Payments supported countries",
      href: "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries",
    },
  ],
  internalLinks: [
    { label: "Shopify developer rates", to: "/blog/shopify-developer-rates" },
    { label: "WooCommerce to Shopify migration", to: "/blog/woocommerce-to-shopify-migration" },
    { label: "Custom Shopify app vs public app", to: "/blog/custom-shopify-app-vs-public-app" },
    {
      label: "Shopify theme customization vs custom theme",
      to: "/blog/shopify-theme-customization-vs-custom-theme",
    },
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Adding wholesale to your Shopify store?",
    body: "Send us your current price sheet and plan. We'll map your tiers to Shopify's catalog limits, tell you whether you need Plus, and scope the trade pages your buyers will use.",
  },
};

export default post;
