import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "WooCommerce to Shopify Migration: Data, Redirects, SEO",
  metaDescription:
    "Moving from WooCommerce to Shopify? See what migrates cleanly, what doesn't (passwords, subscriptions, reviews, custom fields) and a 301 plan for SEO.",
  keywords: [
    "woocommerce to shopify migration",
    "migrate woocommerce to shopify",
    "woocommerce to shopify seo redirects",
    "woocommerce to shopify customer passwords",
    "woocommerce subscriptions to shopify",
    "woocommerce to shopify migration cost",
    "woocommerce vs shopify for growing store",
  ],
  keyTakeaways: [
    "Products, customers, historical orders and blog content can move to Shopify through CSV files, Shopify's Store Migration app or third-party migration apps. Reviews, passwords, subscriptions and plugin data need their own plan.",
    "Customer passwords can't be migrated because they're encrypted outside Shopify. With Shopify's current customer accounts, shoppers sign in with a one-time email code, so no password is needed.",
    "Active subscriptions need their saved payment methods moved through a subscriptions app. Shopify's migration guide covers Stripe, Braintree, PayPal Express and Authorize.net.",
    "WooCommerce URLs such as /product/ and /product-category/ become /products/ and /collections/ on Shopify, so map every old URL to its closest new page with a 301 and keep redirects for at least a year, as Google recommends.",
    "Expect temporary ranking movement after launch. Google says medium-sized sites can take a few weeks or more to show new URLs, so monitor at 30, 60 and 90 days.",
  ],
  content: [
    {
      heading: "What does a WooCommerce to Shopify migration involve?",
      definition:
        "A WooCommerce to Shopify migration moves your products, customers, orders and content into Shopify, rebuilds payments, taxes and shipping, and redirects every old WooCommerce URL to its new Shopify address. Some data, including customer passwords, reviews, active subscriptions and plugin tables, doesn't transfer directly and needs a planned workaround.",
      body: [
        "The data move is the part vendors talk about most, and it's rarely where migrations go wrong. The trouble usually sits in the edges: a subscription base nobody planned for, product options that don't fit Shopify's model, or a WooCommerce URL structure that loses rankings when redirects are rushed.",
        "Shopify's own [WooCommerce migration guide](https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce) lists the routes: its Store Migration app (in early access as of September 2026), CSV imports for products and customers, third-party apps from the Shopify App Store for data such as historical orders, and hiring a Shopify Partner. Most stores use a mix, because no single tool handles every data type.",
        "One structural limit to check before anything else: the same guide notes that Shopify allows 3 product options, and products with more than 3 won't have their options imported. If your WooCommerce catalog uses four or more attributes on a product, decide how to restructure it before the first test import.",
      ],
    },
    {
      heading: "Should you migrate at all?",
      body: [
        "A migration costs time, money and some short-term search visibility. It's worth asking whether the problem you want to solve is really the platform.",
        "WooCommerce is still a reasonable fit when your store is mainly a content site with a shop attached, when your business depends on custom plugins that would be expensive to rebuild, or when you want full control of hosting and data. Shopify tends to fit better when plugin updates, hosting and security patches are eating your team's time, or when you want a hosted checkout and a larger app ecosystem without running servers.",
      ],
      bullets: [
        "Migrate if: plugin conflicts or updates break the store more than once a quarter.",
        "Migrate if: hosting, caching and security are handled by one person who's stretched thin.",
        "Migrate if: you want to use Shopify's checkout, markets or B2B features instead of stitching plugins together.",
        "Wait if: your revenue depends on custom plugin logic nobody has documented yet.",
        "Wait if: you have an active subscription base on a payment gateway Shopify's migration tools don't support.",
        "Wait if: your organic traffic is mostly blog content and you have no redirect budget.",
      ],
    },
    {
      heading: "What transfers cleanly and what doesn't",
      definition:
        "Products, customers, orders and content transfer with the right tools; passwords, reviews, subscriptions and plugin-specific data need workarounds.",
      body: [
        "Use this matrix to scope the project before you request quotes. Every 'needs a workaround' row is a line item, and quotes that ignore those rows aren't cheaper, just incomplete.",
      ],
      table: {
        caption: "WooCommerce to Shopify: what moves and what breaks (as of September 2026)",
        headers: ["Data", "Moves directly?", "Workaround"],
        rows: [
          [
            "Products and variants",
            "Yes, by CSV or migration app",
            "Restructure products with more than 3 options before import",
          ],
          [
            "Customers",
            "Yes, by CSV",
            "Reformat to Shopify's template; files must be 15 MB or smaller, so split large lists",
          ],
          [
            "Customer passwords",
            "No",
            "Customers sign in with a one-time email code on current customer accounts, or you invite them to set a password",
          ],
          [
            "Historical orders",
            "Through third-party apps",
            "Decide how many years you need; import them for customer history and reporting",
          ],
          [
            "Product reviews",
            "No native export or migration",
            "Import into a reviews app from the Shopify App Store",
          ],
          [
            "Active subscriptions",
            "No, not by CSV",
            "Migrate contracts and saved payment methods through a subscriptions app",
          ],
          [
            "Custom fields and plugin tables",
            "No standard path",
            "Map each field to Shopify metafields or metaobjects; needs developer time",
          ],
          [
            "Blog posts and pages",
            "Yes, by app or manually",
            "Check images, internal links and author data after import",
          ],
          [
            "Coupons and discount codes",
            "Depends on the app",
            "Recreate active codes in Shopify and test them at checkout",
          ],
        ],
      },
    },
    {
      heading: "What happens to customer passwords and subscriptions?",
      body: [
        "Passwords first. The [Shopify Help Center](https://help.shopify.com/en/manual/customers/import-export-customers) is direct about it: because passwords are encrypted outside Shopify, you can't migrate them from another online store with a CSV. The older answer was to invite every imported customer to set a new password. With Shopify's current [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts), shoppers enter their email and receive a one-time 6-digit code, so a password isn't needed at all. Either way, tell customers before launch so the change doesn't look like a security problem.",
        "Subscriptions need more care, because WooCommerce Subscriptions renews orders by charging payment methods saved at your gateway. Those saved cards have to be linked to the new Shopify customer records, or renewals stop.",
        "Shopify's [subscription migration guide for developers](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information) lists four supported gateways: Stripe, Braintree, PayPal Express and Authorize.net. Each must be connected as a secondary gateway, PayPal requires approval for reference transactions, and Braintree migration covers credit cards and Apple Pay only. Customer records need an email address, first name and last name. If your subscriptions bill through another gateway, plan for subscribers to re-enter payment details, and confirm with your subscriptions app vendor what they can import.",
      ],
    },
    {
      heading: "How to map WooCommerce URLs to Shopify",
      definition:
        "Build a one-to-one map from every indexed WooCommerce URL to its closest Shopify URL, import it as 301 redirects, and keep those redirects for at least a year.",
      body: [
        "Shopify's URL structure is fixed, so most WooCommerce URLs change. According to [WooCommerce's permalink documentation](https://woocommerce.com/document/permalinks/), products default to /product/product-name, categories to /product-category/name and tags to /product-tag/name. On Shopify, products live under /products/, collections under /collections/, pages under /pages/ and posts under /blogs/ followed by the blog handle. Shopify's default blog is called News, so posts usually end up at /blogs/news/post-name.",
        "[Google's site move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends permanent redirects such as 301 or 308, kept for as long as possible and generally at least one year. It also warns against sending many old URLs to one irrelevant page such as the home page, which can be treated as a soft 404. If you're worried about Shopify creating several URLs for one product, read our note on [Shopify duplicate content from collection URLs](/blog/shopify-duplicate-content-collection-urls) before you build the map.",
      ],
      table: {
        caption: "Default WooCommerce URLs and their usual Shopify equivalents",
        headers: ["WooCommerce URL", "Shopify URL", "Notes"],
        rows: [
          [
            "/product/hoodie-with-logo/",
            "/products/hoodie-with-logo",
            "Keep the same slug as the Shopify handle where you can",
          ],
          [
            "/product-category/accessories/",
            "/collections/accessories",
            "Recreate category hierarchy as collections and menus",
          ],
          [
            "/product-tag/casual/",
            "A matching collection, or the closest category",
            "Don't send every tag page to the home page",
          ],
          [
            "Blog posts (per your WordPress permalink setting)",
            "/blogs/news/post-slug",
            "Check old date-based URLs if your permalinks used them",
          ],
          ["/about/ and other pages", "/pages/about", "Straight one-to-one mapping"],
          [
            "/shop/ and URLs under it",
            "Test before launch",
            "Shopify's redirect tool won't accept old URLs that start with /shop",
          ],
        ],
      },
      bullets: [
        "Pull old URLs from your XML sitemap, analytics landing pages, Search Console and backlink reports.",
        "Map each URL to the most relevant new page, not the home page.",
        "Import redirects by CSV in Shopify's URL redirects screen.",
        "Remember Shopify only redirects from URLs that return a 404, so a live page at the old path blocks the redirect.",
        "Standard plans allow up to 100,000 redirects; Plus allows up to 20,000,000.",
        "Crawl the old URL list after launch and fix any that don't land on a 200 page in one hop.",
      ],
    },
    {
      heading: "Replacing plugins with apps or custom code",
      body: [
        "Export your list of active WordPress plugins and put each one in one of four buckets: a native Shopify feature, a Shopify app, custom code, or no longer needed. The last bucket is usually bigger than people expect, and every app you skip is one less script on your product pages.",
        "Two plugin types deserve special attention. SEO plugins store your custom page titles and meta descriptions in their own fields, so confirm your migration tool maps them to Shopify's SEO title and description fields; otherwise search snippets fall back to defaults on launch day. Review plugins hold years of customer content, and Shopify's guide says WooCommerce reviews can't be exported or migrated directly, only imported through a third-party app. Export them with SKUs or product slugs so the app can match each review to the right product.",
        "Be strict about custom code. Store-specific logic, such as a pricing rule or an ERP sync, may justify a small custom app. Cosmetic features rarely do, and a theme section your team can edit is usually the better answer.",
      ],
      bullets: [
        "List every plugin, what it does, and who on the team relies on it.",
        "Mark plugins that store their own data, such as reviews, wishlists or loyalty points, because that data needs its own export.",
        "Check each candidate app's reviews, pricing and whether it adds blocks through theme app extensions.",
        "Budget developer time for anything that touches checkout, pricing or fulfillment.",
      ],
    },
    {
      heading: "Payments, taxes and shipping to rebuild",
      body: [
        "Settings don't migrate. Shopify's [migration checklist](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/new-to-shopify-checklists/migrating-to-shopify-checklist) walks through payment providers, shipping, taxes and store policies as separate setup steps, followed by test orders. It also reminds merchants that tax compliance is their own responsibility: Shopify calculates taxes but doesn't file or remit them unless you use Shopify Tax's automated filing.",
        "Rebuild shipping zones and rates from your WooCommerce settings, not from memory, and compare a handful of real past orders to make sure the new rates match. Do the same for tax: take several recent orders from different states and check that Shopify calculates the same totals.",
      ],
    },
    {
      heading: "Cutover day: order freeze, DNS and testing",
      body: [
        "Most of the migration happens before launch day through test imports. Cutover is about moving the last changes and switching traffic with as little overlap as possible.",
      ],
      bullets: [
        "Announce a freeze on product and content edits in WooCommerce from the final import onward.",
        "Run a delta import of orders and customers created since the last full sync.",
        "Import the redirect CSV and spot-check your top 50 URLs by traffic.",
        "Connect the domain to Shopify and confirm the primary domain and SSL.",
        "Install analytics, ad pixels and consent tools, then confirm events fire on a test purchase.",
        "Place test orders with each payment method, a discount code and each shipping zone.",
        "Submit the new sitemap in Google Search Console.",
        "If you keep the old WooCommerce site for reference, put it behind a password so it can't be indexed.",
      ],
      callout: {
        title: "From the studio",
        body: "We run at least two full test imports into a development store before cutover. The first one always finds something: an attribute that doesn't map, HTML in descriptions that breaks the layout, or images still loading from the old WordPress media library. We also keep a spreadsheet of the top 200 URLs by traffic with their target Shopify URL, and check every one by hand on launch day, because redirect CSVs fail silently.",
      },
    },
    {
      heading: "Post-launch SEO monitoring at 30, 60 and 90 days",
      body: [
        "Google's site move documentation says to expect temporary fluctuation in rankings during a move, and that for medium-sized sites it can take a few weeks or more for Google to start showing the new URLs. A dip in week two isn't a verdict. A dip that's still growing at day 60 is.",
        "If traffic falls more than you expected, work through the causes in order: redirects, indexing, then content that changed. Our guide to a [website traffic drop after a redesign](/blog/website-traffic-drop-after-redesign) covers the diagnosis step by step.",
      ],
      table: {
        caption: "Post-migration SEO checks",
        headers: ["When", "What to check", "What to do if it's off"],
        rows: [
          [
            "Launch week",
            "Redirects on top URLs, sitemap submitted, robots rules, analytics and pixels firing",
            "Fix broken redirects the same day; they cost the most traffic",
          ],
          [
            "Day 30",
            "Search Console coverage, 404 report, crawl of the old URL list, top landing pages",
            "Add missing redirects; check pages indexed without a canonical",
          ],
          [
            "Day 60",
            "Clicks and positions for the top 50 queries compared with the pre-launch baseline",
            "Compare page content and titles with the old versions for pages that dropped",
          ],
          [
            "Day 90",
            "Organic revenue, conversion rate and Core Web Vitals by template",
            "Plan fixes for templates that lost traffic or speed",
          ],
        ],
      },
    },
    {
      heading: "What drives migration budget and timeline",
      body: [
        "Catalog size matters less than people think. The bigger drivers are data complexity, subscriptions and how much of the store is being redesigned at the same time. Treat the list below as the scope questions to answer before anyone gives you a number, and see our breakdown of [Shopify developer rates](/blog/shopify-developer-rates) for how different providers price the work.",
        "At Pixel2Tech we handle WooCommerce to Shopify moves as part of our [WordPress and Shopify work](/services/wordpress-and-shopify), from data mapping and redirects to theme setup. The checklist below is the same one we'd send you before quoting.",
      ],
      bullets: [
        "Number of products, and how many use more than 3 options.",
        "Custom fields, plugin data and anything stored outside WooCommerce's standard tables.",
        "Active subscriptions and which gateway bills them.",
        "Years of order history you need in Shopify.",
        "Number of indexed URLs, including blog posts and tag pages.",
        "Whether the design is being rebuilt or moved onto an existing Shopify theme.",
        "Integrations with ERP, warehouse, accounting or email tools.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I move customer passwords from WooCommerce to Shopify?",
      a: "No. Shopify states that because passwords are encrypted outside Shopify, you can't migrate them from another store with a CSV. With Shopify's current customer accounts this matters less, because customers sign in with their email and a one-time 6-digit code instead of a password. Email your customers before launch so the new sign-in doesn't catch them off guard.",
    },
    {
      q: "Will I lose SEO rankings when moving from WooCommerce to Shopify?",
      a: "Google says to expect temporary ranking fluctuation during any site move with URL changes. Losses become lasting when redirects are missing, point to irrelevant pages, or content changes a lot at the same time. Map every indexed URL to its closest Shopify page with a 301, keep redirects for at least a year, and compare traffic against a pre-launch baseline.",
    },
    {
      q: "How do I migrate WooCommerce subscriptions to Shopify?",
      a: "Use a Shopify subscriptions app that supports migration. It recreates subscription contracts and links saved payment methods to your imported customers. Shopify's developer guide covers Stripe, Braintree, PayPal Express and Authorize.net, each connected as a secondary gateway. Subscriptions billed through other gateways usually need customers to re-enter payment details, so plan that communication in advance.",
    },
    {
      q: "Can I keep my blog on WordPress after moving the store to Shopify?",
      a: "Yes, but it usually has to move to a subdomain such as blog.example.com, because Shopify serves the paths on your primary domain. That's still a URL change, so old post URLs need redirects. Moving posts into Shopify's blog keeps everything on one domain and one analytics setup, though WordPress editors may miss plugins they relied on.",
    },
    {
      q: "How long does a WooCommerce to Shopify migration take?",
      a: "It depends on data complexity more than catalog size: custom fields, subscriptions, order history and a redesign all add time. Plan for audit, at least two test imports, theme work, testing and cutover. The SEO part continues after launch, since Google notes medium-sized sites can take a few weeks or more before new URLs replace old ones in results.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center — Migrating from WooCommerce",
      href: "https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce",
    },
    {
      label: "Shopify Help Center — Creating and managing URL redirects",
      href: "https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect",
    },
    {
      label: "Shopify Help Center — Importing and exporting customer lists",
      href: "https://help.shopify.com/en/manual/customers/import-export-customers",
    },
    {
      label: "Shopify.dev — Migrate customer information for subscriptions",
      href: "https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information",
    },
    {
      label: "Google Search Central — Site moves with URL changes",
      href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    },
    {
      label: "WooCommerce — Permalinks documentation",
      href: "https://woocommerce.com/document/permalinks/",
    },
  ],
  internalLinks: [
    { label: "Shopify developer rates", to: "/blog/shopify-developer-rates" },
    {
      label: "Website traffic drop after a redesign",
      to: "/blog/website-traffic-drop-after-redesign",
    },
    {
      label: "Shopify duplicate content from collection URLs",
      to: "/blog/shopify-duplicate-content-collection-urls",
    },
    { label: "Headless Shopify guide", to: "/blog/headless-shopify-commerce-guide" },
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Planning a move off WooCommerce?",
    body: "Send us your store URL and plugin list. We'll map what migrates cleanly, what needs a workaround and how many URLs need redirects, so you can budget before you commit.",
  },
};

export default post;
