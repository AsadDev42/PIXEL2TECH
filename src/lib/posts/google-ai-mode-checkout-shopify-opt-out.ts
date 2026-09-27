import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "AI Mode Checkout on Shopify: Keep It On or Opt Out?",
  metaDescription:
    "Google switched on AI Mode and Gemini checkout for US Shopify stores. What breaks (GA4, pixels, upsells, bundles), who should opt out, and what to fix now.",
  keywords: [
    "google ai mode checkout shopify",
    "shopify google ai mode and gemini direct checkout",
    "opt out of google native checkout shopify",
    "shopify agentic storefronts google",
    "native_commerce checkout_eligibility merchant center",
    "ga4 not tracking ai mode orders shopify",
  ],
  keyTakeaways: [
    "Google began switching on native checkout in AI Mode and Gemini for eligible US Shopify stores on Friday, September 18, 2026, and emailed merchants around September 22. No setup was needed: stores matched to Merchant Center were included automatically.",
    "Orders placed there never load your storefront. Shopify says Google Analytics and custom pixels won't fire; only server-to-server started and completed events do, and most checkout blocks such as upsells, loyalty and consent capture are skipped.",
    "Subscriptions, bundles, customizable products and B2B-only products aren't supported, and neither are local delivery, in-store pickup or pickup points.",
    "Opting out doesn't remove you from AI Mode. With direct checkout off, products stay discoverable and shoppers are sent to your store to buy. The toggle is in Sales channels > Agentic > Google AI Mode and Gemini.",
    "The right answer is usually per SKU: keep simple, high-velocity products on, keep products whose margin depends on checkout add-ons or subscriptions off, and fix reporting before you judge ad performance.",
  ],
  content: [
    {
      heading: "What did Google turn on for Shopify stores in September 2026?",
      definition:
        "Starting Friday, September 18, 2026, Google enabled native checkout in AI Mode on Google Search and in Gemini for eligible US Shopify stores. Shoppers can click Buy and pay without visiting your site. Stores matched to Merchant Center were enrolled automatically, and turning it off is a manual step in the Shopify admin.",
      body: [
        "Most merchants found out from an email. As [Search Engine Roundtable reported on September 22, 2026](https://www.seroundtable.com/google-native-checkout-emails-42140.html), Google told Merchant Center users on platforms that support the Universal Commerce Protocol (UCP) that their products were now eligible for native checkout, and that customers could buy them in AI Mode on Google Search, Gemini and other Google surfaces.",
        "The setup history matters because it explains the surprise. Google announced UCP on January 11, 2026. In March, per [PPC Land's timeline](https://ppc.land/google-switched-on-ai-mode-checkout-for-shopify-stores-without-asking/), taking part meant adding a native_commerce attribute to your feed, accepting Google Pay tokens and filling in an interest form. For Shopify stores, that opt-in step disappeared. Shopify has UCP built in, so products that are published on your storefront and available in Merchant Center are included by default.",
        "Shopify's own documentation calls this the Google AI Mode and Gemini channel, part of what it calls agentic storefronts, and describes direct checkout as active by default for eligible stores. It's shown only to shoppers based in the US, and Shopify says there are no extra fees beyond your normal payment processing.",
      ],
    },
    {
      heading: "What happens to an order that never touches your site?",
      definition:
        "You get an order but no session. The shopper completes a Shopify-powered checkout inside Google's interface, so nothing on your storefront loads and most of your client-side tracking and checkout customization never runs.",
      body: [
        "Shopify's [Google AI Mode and Gemini help page](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google) is blunt about this. Google Analytics and custom pixels won't fire in this checkout. It fires only server-to-server pixels for checkout started and checkout completed, so none of the standard or custom client-side pixels run.",
        "In practice that means three things. GA4 won't record the purchase, so ecommerce reports undercount revenue. Meta, TikTok and other pixels installed as custom pixels won't see the conversion, so their optimization loses a signal. And any checkout experience you built to raise order value won't appear.",
        "That last point is the one that costs money. Shopify says the direct checkout loads only the checkout blocks essential to completing the purchase. Blocks that change what the customer is buying, such as add-ons or quantity changes, loyalty and rewards blocks, and informational blocks like trust badges don't show. A block only qualifies if checkout blocking is enabled in its settings, and even then Shopify says display isn't guaranteed.",
        "If you went through the checkout.liquid and additional scripts migration, this will feel familiar. Our guide to [fixing tracking after Shopify removed additional scripts](/blog/shopify-additional-scripts-removed-tracking-fix) covers the same principle: when the browser isn't yours, the data has to come from the server.",
      ],
    },
    {
      heading: "Which products and features does direct checkout skip?",
      definition:
        "Shopify lists four product types and several checkout features that Google AI Mode and Gemini's direct checkout doesn't support. Unsupported products can still be discovered; they just can't be bought inside Google.",
      body: ["According to Shopify's help center, the direct checkout doesn't support:"],
      bullets: [
        "Subscriptions, product bundles, customizable products and B2B-only products.",
        "Local delivery, in-store pickup and pickup points as delivery methods.",
        "Google Analytics and custom pixels.",
        "Requiring customers to sign in before checkout.",
        "Most checkout customization blocks, including custom fields, upsells, loyalty programs and address autocomplete.",
        "Checkout blocks that collect consent for data use or marketing messages.",
        "Some accelerated checkout options.",
      ],
      subsections: [
        {
          heading: "What does still work",
          body: [
            "Automatic discounts and discount codes are supported, and shipping settings sync to Merchant Center when you use the Google & YouTube channel with automatic shipping sync turned on. Payment is by credit or debit card through a Pay now button, according to Shopify. Search Engine Roundtable's report on the rollout describes Google's native checkout as using Google Pay.",
            "B2B-only products are excluded automatically when Shopify can identify them, for example through B2B catalogs assigned to companies or password-protected storefronts. Products you sell to both wholesale and retail buyers appear with D2C pricing only.",
          ],
        },
      ],
    },
    {
      heading: "Should you keep AI Mode checkout on or opt out?",
      definition:
        "Keep it on for simple products whose margin doesn't depend on checkout add-ons or a subscription. Turn it off, or remove specific SKUs, where the order Google captures is worth less than the order your own checkout would have produced.",
      body: [
        "The question isn't whether agentic commerce is good. It's whether a particular product loses more on Google's surface than it gains. A shopper who buys a $40 refill in AI Mode may be a sale you'd never have seen. A shopper who buys the one-time version of a product you normally sell on subscription may be a subscriber you just lost.",
        "Use this matrix as a starting point, then check it against your own order data.",
      ],
      table: {
        caption: "Keep or opt out, by store and product type",
        headers: ["Store or product type", "What you lose on Google's checkout", "Starting call"],
        rows: [
          [
            "Single hero product or simple catalog, few variants",
            "GA4 and pixel data only; order value is close to on-site",
            "Keep on, fix measurement",
          ],
          [
            "High-AOV products sold with add-ons, warranties or gift options at checkout",
            "Checkout upsells and add-on blocks don't load",
            "Test on a few SKUs or opt out those SKUs",
          ],
          [
            "Bundle-led stores where bundles drive AOV",
            "Bundles aren't supported; shoppers may buy a component on its own",
            "Keep bundles on-site; review whether components should be buyable in Google",
          ],
          [
            "Subscription brands",
            "Subscriptions aren't supported; a one-time purchase may replace a subscription",
            "Opt out subscription-first products, or the whole channel",
          ],
          [
            "Personalized, engraved or made-to-order products",
            "Customizable products aren't supported",
            "Nothing to buy in Google; make sure listings route to your store",
          ],
          [
            "Mixed wholesale and retail catalog",
            "Shared products show D2C pricing only",
            "Check that wholesale-only items are set up so Shopify excludes them",
          ],
          [
            "Stores relying on local delivery or pickup",
            "Those delivery methods aren't offered",
            "Keep on only for products you ship",
          ],
          [
            "Brands whose list growth depends on checkout SMS or email opt-in",
            "Consent-capture blocks don't show",
            "Weigh list growth against extra orders; post-purchase follow-up needs another route",
          ],
        ],
      },
    },
    {
      heading: "How do you opt out or keep specific SKUs off the Buy button?",
      definition:
        "Turn off direct checkout for the whole store in the Shopify admin, or use Merchant Center's checkout eligibility attribute to control it product by product.",
      body: [
        "Opting out is less drastic than it sounds. Shopify says that when direct checkout is off, your products remain discoverable in AI Mode and Gemini and shoppers are redirected to your online store to finish buying. You give up the in-Google purchase, not the visibility.",
      ],
      subsections: [
        {
          heading: "Store-wide: the Shopify toggle",
          body: [
            "In the Shopify admin, go to Sales channels > Agentic. Shopify's instructions say to deactivate Allow Shopify to manage for me first, then select Google AI Mode and Gemini and switch Direct checkout off. Switch it back on the same way if you change your mind.",
          ],
        },
        {
          heading: "Per product: checkout_eligibility in Merchant Center",
          body: [
            "Google's [native_commerce attribute documentation](https://support.google.com/merchants/answer/17251586) describes a checkout_eligibility sub-attribute. Set it to true and the Buy button can show on supported Google surfaces; set it to false and the listing stays a standard product listing. Google strongly recommends applying it through a supplemental feed so you don't disturb the primary feed your ads run on.",
            "Because Shopify stores were enrolled through Shopify's integration rather than through this attribute, test it on two or three SKUs and confirm the Buy button disappears before you rely on it across the catalog.",
          ],
        },
        {
          heading: "The option to avoid",
          body: [
            "Setting a product to Unlisted hides it from AI channels, but Shopify notes it also removes the product from sitemaps, from search engines such as Google and from your own store search. That's a heavy price for controlling one checkout surface.",
          ],
        },
      ],
    },
    {
      heading: "If you stay in, is your feed ready to be the product page?",
      definition:
        "In AI Mode your Merchant Center data is the product page. Titles, variants, prices, shipping and return terms are shown as you supplied them, so feed errors that used to cost a click can now cost a return.",
      body: [
        "Shopify syndicates title, description, options, images, price and availability to AI channels. It recommends keeping automatic product and shipping sync on in the Google & YouTube channel so Merchant Center matches your store, and using Shopify Catalog Mapping if key product data lives in metafields, metaobjects or tag prefixes.",
        "Before you leave the channel on, check each of these on your top sellers:",
      ],
      bullets: [
        "Titles say what the product is, including size, material or count where buyers care, not just a brand-style name.",
        "Each variant has its own price, image and availability, so the shopper gets the size and color they picked.",
        "Shipping rates and delivery times in Merchant Center match your checkout, with no stale free-shipping thresholds.",
        "Your return and refund policy, terms of service and privacy policy are complete in Shopify; Shopify lists all three as requirements for the channel.",
        "Out-of-stock and discontinued products actually show as unavailable in the feed.",
        "Merchant Center diagnostics are clear of price mismatch and availability warnings.",
      ],
      subsections: [
        {
          heading: "Why this is also a search problem",
          body: [
            "The same feed powers Shopping listings and free listings, so cleaning it helps beyond AI Mode. If your product pages have their own indexing issues, our [common Shopify issues guide](/blog/shopify-issues-and-how-to-fix-them) covers the usual culprits, and our [SEO and search growth](/services/seo-and-search-growth) work treats the feed and the product pages as one project.",
          ],
        },
      ],
    },
    {
      heading: "How do you measure orders placed on Google's surface?",
      definition:
        "Treat Shopify orders as the source of truth, tag Google-surface orders by channel, and send conversions server-side. Don't judge Shopping or Performance Max campaigns on GA4 revenue alone while this channel is on.",
      body: [
        "Shopify says orders from AI channels carry channel or referrer attribution in the admin, so you can see where an order came from. Start there. Pull a weekly count and revenue for the Google AI Mode and Gemini channel next to your GA4 purchase totals. The gap is roughly the revenue your analytics can't see.",
        "Then close the gap in three steps:",
      ],
      bullets: [
        "Tag the orders. Use a Shopify Flow or webhook to add an order tag for the channel, so every report, export and CRM sync can filter them without guesswork.",
        "Send purchases server-side. Build a server-side purchase event from the Shopify order, for example to GA4 through the Measurement Protocol, so revenue reports stay complete. Keep the channel as a dimension so you can still separate it.",
        "Fix ad reporting. If Google Ads conversions come from GA4 or a browser tag, these orders won't be counted. Compare ROAS with a blended view, total Shopify revenue against total ad spend, before cutting a campaign that looks weaker than it is.",
      ],
      callout: {
        title: "From the studio",
        body: "Before changing any toggle, export 90 days of orders and mark every order that included a checkout upsell, a bundle, a subscription or a pickup method. That list tells you which SKUs have the most to lose on Google's checkout. Then snapshot GA4 and ad-platform conversions for the same period, so after the change you're comparing like with like instead of reacting to a dip you can't explain.",
      },
      subsections: [
        {
          heading: "Automate the reconciliation",
          body: [
            "A weekly reconciliation that someone has to remember will stop happening by November. Our [automation and CRM](/services/automation-and-crm) team usually builds it as a scheduled job that pulls Shopify orders by channel, compares them with GA4 and ad-platform conversions, and posts the difference where the team already looks.",
          ],
        },
      ],
    },
    {
      heading: "A 30-day checklist, and when to bring in a Shopify partner",
      body: [
        "You don't need to decide everything this week. You do need to know what's already happening in your store.",
      ],
      table: {
        caption: "30-day plan for Shopify stores enrolled in AI Mode checkout",
        headers: ["When", "Task"],
        rows: [
          [
            "Days 1-3",
            "Check Sales channels > Agentic to confirm whether direct checkout is on, and pull any orders already attributed to the Google AI Mode and Gemini channel.",
          ],
          [
            "Days 4-7",
            "Export 90 days of orders; flag SKUs that rely on upsells, bundles, subscriptions, customization or pickup.",
          ],
          [
            "Days 8-12",
            "Decide keep or opt out per product group; test checkout_eligibility on a few SKUs if you need per-product control.",
          ],
          [
            "Days 13-20",
            "Clean the feed for top sellers: titles, variants, shipping, policies, availability; clear Merchant Center warnings.",
          ],
          [
            "Days 21-30",
            "Tag channel orders, add server-side purchase events and set up a weekly revenue reconciliation before the holiday season.",
          ],
        ],
      },
      subsections: [
        {
          heading: "When it's worth outside help",
          body: [
            "If your catalog has hundreds of SKUs, a mix of subscriptions and one-time products, or ad spend that's decided on GA4 or platform ROAS, the audit and the measurement rebuild are worth doing properly before Black Friday. Pixel2Tech's [WordPress and Shopify](/services/wordpress-and-shopify) team audits which SKUs are exposed, cleans the Merchant Center feed and rebuilds attribution for orders that happen off your site.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Did I agree to Google AI Mode checkout on my Shopify store?",
      a: "Not through a separate sign-up. Google began enabling native checkout for eligible US Shopify stores on September 18, 2026, because Shopify's integration supports the Universal Commerce Protocol. Shopify says direct checkout is active by default for eligible stores, and products published on your storefront and available in Merchant Center are included automatically.",
    },
    {
      q: "If I turn off direct checkout, will my products disappear from AI Mode?",
      a: "No. Shopify says products stay discoverable in Google AI Mode and Gemini when direct checkout is off. Shoppers who click to buy are redirected to your online store to complete the purchase, so your own checkout, upsells and tracking apply.",
    },
    {
      q: "Why don't AI Mode orders show up in GA4?",
      a: "Google Analytics and custom pixels don't fire in Google AI Mode and Gemini's direct checkout. Shopify says it fires only server-to-server events for checkout started and completed. To see these orders in analytics, send purchase events from your server using the Shopify order data.",
    },
    {
      q: "Can I remove individual products from Google's Buy button?",
      a: "Google's native_commerce attribute has a checkout_eligibility value; setting it to false keeps a product as a standard listing without the Buy button, and Google recommends a supplemental feed for this. Test it on a few Shopify-synced SKUs first. Avoid setting products to Unlisted, which also removes them from search engines and your store search.",
    },
    {
      q: "Does Shopify or Google charge a fee for AI Mode checkout orders?",
      a: "Shopify says there are no fees for selling through Google AI Mode and Gemini's direct checkout beyond your standard payment processing fees. The cost to watch is indirect: lost upsells, subscriptions and marketing consent that your own checkout would have captured.",
    },
  ],
  sources: [
    {
      label:
        "Search Engine Roundtable: Google native checkout emails to merchants (September 22, 2026)",
      href: "https://www.seroundtable.com/google-native-checkout-emails-42140.html",
    },
    {
      label:
        "PPC Land: Google switched on AI Mode checkout for Shopify stores (September 23, 2026)",
      href: "https://ppc.land/google-switched-on-ai-mode-checkout-for-shopify-stores-without-asking/",
    },
    {
      label: "Google Merchant Center Help: Native commerce [native_commerce]",
      href: "https://support.google.com/merchants/answer/17251586",
    },
    {
      label: "Shopify Help Center: Selling on Google AI Mode and Gemini",
      href: "https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google",
    },
    {
      label: "Shopify Help Center: Shopify Catalog and product discovery for agentic storefronts",
      href: "https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    { label: "SEO and search growth services", to: "/services/seo-and-search-growth" },
    {
      label: "Shopify additional scripts removed: fix GA4 and Meta tracking",
      to: "/blog/shopify-additional-scripts-removed-tracking-fix",
    },
    {
      label: "Common Shopify issues and how to fix them",
      to: "/blog/shopify-issues-and-how-to-fix-them",
    },
  ],
  cta: {
    title: "Find out which SKUs AI Mode checkout is costing you",
    body: "Send us your store URL. Pixel2Tech will map which products rely on upsells, bundles or subscriptions, check your Merchant Center feed, and set up server-side tracking so Google-surface orders show up in your reports.",
  },
};

export default post;
