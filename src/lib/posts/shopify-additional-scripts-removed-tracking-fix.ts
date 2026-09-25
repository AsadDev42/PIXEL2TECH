import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Additional Scripts Removed: Fix GA4 & Meta Tracking",
  metaDescription:
    "Shopify's August 26, 2026 deadline ended Additional Scripts for non-Plus stores. Find broken GA4 and Meta purchase tracking and rebuild it with pixels.",
  keywords: [
    "Shopify additional scripts removed",
    "Shopify purchase tracking not working",
    "Shopify custom pixel GA4",
    "Meta pixel Shopify checkout",
    "GA4 not matching Shopify orders",
    "Shopify customer events",
  ],
  keyTakeaways: [
    "August 26, 2026 was Shopify's deadline for non-Plus stores to move to the new Thank you and Order status pages. Upgrading replaces the old pages and their customizations, including Additional Scripts, and Shopify stopped running Order status script tags for non-Plus stores that day.",
    "Purchase tracking now belongs in pixels managed under Settings > Customer events: app pixels from the Google & YouTube and Facebook & Instagram channels first, custom pixels only when no app does the job.",
    "When you switch to app pixels, remove the old GA4 and Meta code from your theme and tag manager. Shopify's migration guide says tracking the same event more than once is a common problem.",
    "GA4 will never match Shopify orders exactly. Consent choices, ad blockers, time zones and customers who never load the thank-you page all create gaps, so watch the trend rather than single days.",
    "Verify every fix with a real test order in Shopify's Pixel Helper, GA4 DebugView and Meta Events Manager, and keep a dated change log.",
  ],
  content: [
    {
      heading: "What changed on August 26, 2026 for non-Plus stores?",
      definition:
        "August 26, 2026 was Shopify's deadline for stores on non-Plus plans to upgrade their Thank you and Order status pages. Upgrading replaces the old pages and any customizations on them, including code in the Additional Scripts box, and Shopify stopped running script tags on the Order status page for non-Plus stores that day.",
      body: [
        "This was the last step of a change Shopify had been rolling out for a while. Its [upgrade guide](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade) explains that when the pages upgrade, the existing Thank you and Order status pages and their customizations are replaced by the new versions. Customizations have to be rebuilt with blocks and web pixels, and tracking moves to app pixels.",
        "For many stores, the Additional Scripts box held the purchase tags for GA4, Google Ads and Meta, plus affiliate postbacks and survey scripts. On the new pages that code doesn't run, so anything that wasn't rebuilt simply stopped reporting. Stores on the Pause and Build plan were upgraded automatically, and Shopify notes that this upgrade stays in place after the store is unpaused.",
        "You can see what used to run: the Additional Scripts section in Settings > Checkout has been view-only since August 28, 2025. Copy it into a document before doing anything else. It's your inventory of what needs a new home.",
      ],
      table: {
        caption:
          "Shopify's timeline for Thank you and Order status tracking (dates from Shopify's documentation, as of September 2026)",
        headers: ["Date", "What happened"],
        rows: [
          ["February 1, 2025", "Apps could no longer create script tags for the Order status page"],
          [
            "August 28, 2025",
            "Additional Scripts became view-only; script tags stopped running on the Order status page for Plus stores",
          ],
          [
            "August 26, 2026",
            "Upgrade deadline for non-Plus stores; script tags stopped running on the Order status page for all other stores",
          ],
          ["October 1, 2026", "Apps can no longer create or update storefront script tags"],
          ["March 1, 2027", "Shopify plans to stop injecting storefront script tags entirely"],
        ],
      },
    },
    {
      heading: "Symptoms: what broken Shopify tracking looks like",
      body: [
        "Broken tracking rarely announces itself. Orders keep arriving in Shopify while the ad platforms and analytics quietly drift. These are the signs we see most often after a checkout change.",
      ],
      bullets: [
        "GA4 purchases drop to zero, or close to it, while Shopify orders carry on as normal.",
        "Meta Events Manager shows the Purchase event falling off on a specific date.",
        "Reported ROAS in Meta or Google Ads drops overnight with no change in spend or creative.",
        "The opposite problem: two purchase events per order, because both an old tag and a new pixel fire.",
        "Your affiliate network stops receiving conversions, or partners ask why commissions dried up.",
        "A post-purchase survey, order-confirmation message or cash-on-delivery verification step disappears from the thank-you page.",
      ],
    },
    {
      heading: "Quick diagnosis: where are your GA4 and Meta tags installed?",
      definition:
        "List every place a tag can fire: channel apps, Customer events pixels, theme code, Google Tag Manager and third-party apps. Missing purchases usually mean one of those places was removed; inflated numbers usually mean two of them fire the same event.",
      body: [
        "Work through the places below and write down, for GA4 and for Meta separately, where page views, add-to-cart and purchase events come from today. You want exactly one source per event per platform.",
      ],
      table: {
        caption: "Where Shopify tracking can live, and what to look for",
        headers: ["Where to look", "How to check", "What you may find"],
        rows: [
          [
            "Settings > Customer events",
            "Review the list of app pixels and custom pixels and their Connected status",
            "A custom GA4 or Meta pixel from an old agency, or two pixels doing the same job",
          ],
          [
            "Sales channels: Google & YouTube, Facebook & Instagram",
            "Confirm the account connection, the GA4 property and the Meta data-sharing level",
            "A channel pixel already sending purchases that you didn't know about",
          ],
          [
            "Theme code (theme.liquid and snippets)",
            "Search the code editor for gtag(, G-, fbq( and GTM-",
            "Old tags that now duplicate the app pixels on storefront pages",
          ],
          [
            "Google Tag Manager container",
            "List tags that fire on purchase or on thank-you page triggers",
            "A GA4 purchase tag waiting for a data layer that no longer exists",
          ],
          [
            "Settings > Checkout > Additional Scripts (view-only)",
            "Copy the old code and label each block by owner",
            "Affiliate, survey and verification scripts nobody has rebuilt yet",
          ],
          [
            "Other apps (reviews, affiliates, surveys)",
            "Check each app's settings for a pixel or thank-you page block",
            "An updated version of the app that you haven't switched on",
          ],
        ],
      },
      callout: {
        title: "From the studio",
        body: "Before we touch a store's tracking, we paste the view-only Additional Scripts box into a dated document and label every block: GA4, Google Ads, Meta, affiliate, survey or unknown. Nothing gets rebuilt until every 'unknown' has an owner, and we note which blocks we're deliberately not rebuilding and why. That document becomes the change log.",
      },
    },
    {
      heading: "Fix it with the official channel apps first",
      body: [
        "Shopify's pixel documentation recommends app pixels whenever possible, because they're more secure and update automatically, and custom pixels only when no app pixel meets your needs. For GA4 and Meta, the official channels cover the standard ecommerce events.",
        "Google: in your admin, open Sales channels > Google & YouTube, connect your Google account and select your GA4 property. Shopify says certain ecommerce events are then tracked automatically. Its Google Tag Manager help page also recommends the built-in integration for Google Analytics because it already contains the logic for ecommerce data, and warns that running it alongside a GA implementation in Tag Manager can double-count.",
        "Meta: the Facebook & Instagram channel offers three data-sharing levels. According to Shopify's help center, Standard uses the Meta pixel only, which browser ad blockers can stop. Enhanced and Maximum add Meta's Conversions API, which sends events server to server where browser ad blockers can't block them.",
        "Meta deduplicates browser and server events only when they share the same event name and event ID, and only within 48 hours, according to [Meta's deduplication documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events). A pixel you add by hand next to the channel app won't share event IDs with the app's server events, so you'll count purchases twice. Pick one setup per platform.",
      ],
    },
    {
      heading: "Custom pixels via Customer events: when and how",
      definition:
        "A custom pixel is JavaScript you add under Settings > Customer events that subscribes to Shopify's standard events, such as checkout_completed, and forwards them to a third-party tool. Use one only when no app pixel does what you need.",
      body: [
        "Custom pixels run in what Shopify calls a lax sandbox, designed to give you control over what you send to third parties. Shopify notes that not all pixel functionality works in the sandbox, that adding and using custom pixels is unsupported by Shopify, and that compliance, consent, code security and updates are your responsibility.",
        "The event you care about most is checkout_completed. Shopify's developer documentation says it fires once per checkout, typically on the Thank you page. If you use a post-purchase upsell, it fires on the first upsell page instead and not again on the Thank you page. If the page it should fire on fails to load, it doesn't fire at all.",
        "For GA4, map checkout_completed to a purchase event and send the Shopify order ID as the transaction_id. Google's [ecommerce documentation](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) says transaction_id is required for purchases, and that currency must be set when you send a value. Old Additional Scripts snippets often wrapped tags in a first_time_accessed check to avoid counting revisits; the pixel event's once-per-checkout behavior takes care of that.",
        "Shopify also supports Google Tag Manager through a custom pixel if you need tags the channel apps don't cover, such as a niche ad platform. Keep GA4 itself in the Google & YouTube channel to avoid the double-counting Shopify warns about.",
      ],
      bullets: [
        "Go to Settings > Customer events and add a custom pixel with a clear name, such as 'Affiliate network: purchase'.",
        "Subscribe only to the events the tool needs, usually checkout_completed and sometimes page_viewed or product_added_to_cart.",
        "Send the order ID, total and currency from the event data, not values scraped from the page.",
        "Remove the old version of the same tag from theme code and Tag Manager, as Shopify's migration guide instructs.",
        "Save, connect the pixel, and test it before relying on it.",
      ],
    },
    {
      heading: "Moving other scripts: affiliates, COD validators and post-purchase surveys",
      body: [
        "Go back to your copy of the old Additional Scripts and handle each non-analytics block. Shopify's upgrade guide says customizations can be replaced with built-in Shopify features, apps from the Shopify App Store or custom apps.",
        "Affiliate and partner tracking: check whether the network has a Shopify app with an app pixel. If not, a custom pixel on checkout_completed can pass the order ID and value the network needs.",
        "Post-purchase surveys and custom thank-you content: these need visible interface, so they move to blocks on the new Thank you page, usually provided by the survey app or a custom app. A pixel can't draw anything on the page.",
        "Cash-on-delivery verification and order messaging: anything that confirms or flags an order is safer running on the server when an order is created than as a script on the thank-you page, because the page may never load. An app or automation that listens for new orders keeps working whether or not the customer sees the confirmation screen.",
        "If your theme still has tracking code or app snippets from tools you've replaced, clean them out on a duplicate theme; our guide to [removing leftover Shopify app code](/blog/remove-leftover-shopify-app-code) covers the safe way to do it. Klaviyo's order events come from its own Shopify integration, but if your email flows went quiet around the same time, see [why Klaviyo flows stop triggering on Shopify](/blog/klaviyo-flows-not-triggering-shopify).",
      ],
    },
    {
      heading: "Why doesn't GA4 match your Shopify orders?",
      definition:
        "Shopify counts every order; GA4 only counts purchases a browser successfully reported. Consent choices, ad blockers, time zone differences, orders from channels with no web pixel, and customers who never load the thank-you page all widen the gap.",
      body: [
        "Shopify's own help center lists reasons its numbers differ from tools like Google Analytics: visitors who block cookies or JavaScript, browser extensions that block tracking, different reporting time zones, and different tracking methods. Its privacy settings documentation adds that where a cookie banner is required, non-essential data is collected only after consent, which reduces sessions and conversions in analytics.",
        "There's no official 'normal' gap. The useful signal is change: track GA4 purchases divided by Shopify online store orders each week. A steady ratio that suddenly drops points to a tracking break; a ratio above 1 points to duplicates.",
      ],
      table: {
        caption: "Common reasons GA4 and Shopify order counts differ",
        headers: ["Cause", "Why it creates a gap", "What to check"],
        rows: [
          [
            "Consent and cookie banners",
            "Where consent is required, non-essential tracking waits for it",
            "Compare the gap by country or region",
          ],
          [
            "Ad and tracking blockers",
            "Browser extensions can block Google Analytics entirely",
            "Accept some loss; for Meta, server-side events via the Conversions API help",
          ],
          [
            "Time zones",
            "Orders near midnight land on different days",
            "Set the GA4 property time zone to match your store",
          ],
          [
            "Missing or repeated transaction_id",
            "GA4 can't tell orders apart without a unique ID",
            "Confirm every purchase event carries the Shopify order ID",
          ],
          [
            "Thank-you page not loaded",
            "checkout_completed doesn't fire if its page fails to load",
            "Expect a small, steady loss; move critical actions server-side",
          ],
          [
            "Currency",
            "GA4 needs a currency whenever a value is sent",
            "Send the checkout's currency code with every purchase",
          ],
          [
            "Orders outside the online store",
            "POS and manually created orders never pass through a web pixel",
            "Compare GA4 against online store orders only",
          ],
        ],
      },
    },
    {
      heading: "Verifying the fix: test orders, DebugView and Events Manager",
      body: [
        "Don't call it fixed until you've watched a real order flow through every tool. Place a real low-value order you can refund, or use your payment provider's test mode, and check each step below.",
        "Write the result in your change log: date, what changed, who made the change, and the test order number. When reported ROAS moves next month, you'll know whether tracking changed or performance did. Clean purchase data matters most when you're making budget calls, such as deciding which ads to scale in [Meta creative testing on a small budget](/blog/meta-ads-creative-testing-small-budget).",
        "If you'd rather hand the rebuild to someone else, the [WordPress & Shopify team](/services/wordpress-and-shopify) at Pixel2Tech works from the same inventory: every old script labeled, each one moved to an app pixel, custom pixel or app block, and each verified with a test order before we sign it off.",
      ],
      bullets: [
        "Shopify Pixel Helper: in Settings > Customer events, open the pixel and click Test. Shopify says a green dot means the event was subscribed and the callback ran. The event log clears when you navigate to a new page.",
        "GA4 DebugView: in GA4, go to Admin > Data display > DebugView and enable debug mode or Tag Assistant. Google notes events won't appear in debug mode if consent mode is on and consent wasn't given, so accept the cookie banner in your test.",
        "Meta Events Manager: use the test events tool to confirm one Purchase per order, and check that browser and server events are being deduplicated.",
        "Check the values: one purchase per order, correct total and currency, and the order ID in the transaction or event ID field.",
        "Look at the standard reports again a day or two later, since they can lag behind real-time and debug views.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why did my Shopify purchase tracking stop working?",
      a: "If your store is on a non-Plus plan, the most likely cause is the Thank you and Order status page upgrade, with its August 26, 2026 deadline. Upgrading replaces the old pages and their customizations, so purchase tags that lived in Additional Scripts no longer run. Check Settings > Customer events and your channel apps, then rebuild tracking with app pixels or a custom pixel.",
    },
    {
      q: "What replaced Additional Scripts on Shopify?",
      a: "Pixels and blocks. Tracking moves to app pixels installed by apps such as the Google & YouTube and Facebook & Instagram channels, or to custom pixels you add under Settings > Customer events. Visible content on the thank-you page, such as surveys or messages, moves to blocks on the new Thank you and Order status pages, usually provided by apps.",
    },
    {
      q: "Do I still need Google Tag Manager on Shopify?",
      a: "Not for standard GA4 ecommerce tracking. Shopify recommends its built-in Google integration because it already handles ecommerce data, and warns that adding GA through Tag Manager as well can create duplicates. Tag Manager is still available through a custom pixel if you need tags the channel apps don't provide, such as smaller ad platforms or custom events.",
    },
    {
      q: "Why doesn't GA4 match my Shopify orders?",
      a: "Shopify records every order, while GA4 only records purchases a browser reports. Shoppers who decline cookies, use ad blockers or never load the thank-you page won't show up, and different time zones shift orders between days. POS and manual orders never reach GA4. Track the weekly ratio of GA4 purchases to online store orders and investigate sudden changes.",
    },
    {
      q: "Does this change affect Shopify Plus stores?",
      a: "Plus stores were on an earlier schedule. Shopify made the Additional Scripts section view-only on August 28, 2025, and script tags stopped running on the Order status page for Plus stores that same day. If you're on Plus and still see gaps, the same diagnosis applies: find where each tag fires and move tracking into pixels.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Upgrading Thank you and Order status pages",
      href: "https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade",
    },
    {
      label: "Shopify Help Center: Custom pixels",
      href: "https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels",
    },
    {
      label: "Shopify.dev: Web Pixels API",
      href: "https://shopify.dev/docs/api/web-pixels-api",
    },
    {
      label: "Shopify.dev: Order status page script tag deprecation",
      href: "https://shopify.dev/docs/apps/build/online-store/blocking-script-tags",
    },
    {
      label: "Google Analytics: Measure ecommerce",
      href: "https://developers.google.com/analytics/devguides/collection/ga4/ecommerce",
    },
    {
      label: "Meta for Developers: Deduplicate Pixel and server events",
      href: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events",
    },
  ],
  internalLinks: [
    { label: "Remove leftover Shopify app code", to: "/blog/remove-leftover-shopify-app-code" },
    { label: "Klaviyo flows not triggering", to: "/blog/klaviyo-flows-not-triggering-shopify" },
    {
      label: "Meta ads creative testing on a small budget",
      to: "/blog/meta-ads-creative-testing-small-budget",
    },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    { label: "WordPress & Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Lost purchase data after the checkout deadline?",
    body: "Send us a copy of your old Additional Scripts and access to Customer events. We'll map every tag to its new home, remove duplicates and confirm the fix with a test order in GA4 and Meta.",
  },
};

export default post;
