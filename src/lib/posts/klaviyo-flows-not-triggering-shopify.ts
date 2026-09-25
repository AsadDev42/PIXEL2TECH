import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Klaviyo Flow Not Triggering on Shopify? A Fix-It Checklist",
  metaDescription:
    "Klaviyo flow live but nothing sends? Work through tracking, identified profiles, flow filters, Smart Sending, consent and Shopify email conflicts in order.",
  keywords: [
    "klaviyo flow not triggering",
    "klaviyo abandoned cart not sending",
    "klaviyo browse abandonment not working",
    "klaviyo viewed product not tracking shopify",
    "klaviyo started checkout not triggering",
    "klaviyo welcome flow not sending",
    "klaviyo shopify integration troubleshooting",
  ],
  keyTakeaways: [
    "Start with the trigger metric, not the flow. If Klaviyo isn't recording Viewed Product, Added to Cart or Started Checkout, no flow built on them can fire.",
    "Klaviyo only tracks browsing for identified browsers, and only profiles with an email or phone number can enter flows, so anonymous visitors never reach browse or cart flows.",
    "On Shopify, onsite tracking depends on the Klaviyo app embed and the 'Track behavioral events' setting. Installing a new theme turns the embed off until you re-enable it.",
    "Filters are the next suspect: AND vs OR logic, 'Placed Order zero times since starting this flow', re-entry limits, Smart Sending and consent can all skip people quietly. The Skipped tab tells you why.",
    "Flows only trigger for events recorded after the flow goes live, and an event that reaches Klaviyo 6 or more hours late won't trigger a metric-triggered flow.",
  ],
  content: [
    {
      heading: "Why is my Klaviyo flow not triggering? Start with the metric",
      definition:
        "Most Klaviyo flows that 'don't trigger' are fine. Either the trigger event never reached Klaviyo, or it arrived for a profile Klaviyo couldn't identify. Check that the flow's messages are Live, then open the trigger metric and confirm recent events are arriving for real, identified profiles.",
      body: [
        "First, the status. Klaviyo's [metric-triggered flow troubleshooting guide](https://help.klaviyo.com/hc/en-us/articles/12278373016603) explains the three states: Live messages send automatically, Manual messages queue profiles but wait for you to send, and Draft messages neither send nor queue. A flow with a Live trigger but Draft emails looks active and does nothing.",
        "Next, look for alerts. Klaviyo shows red or yellow warning icons next to flows with problems, such as a message with no template selected.",
        "Then open the trigger: click the trigger in the flow builder, click the metric name, and look at its recent activity. If the metric has no recent events, the problem is tracking, and editing the flow won't help. If it has events but the flow is empty, the problem is timing, identity or filters.",
        "Two timing rules catch people out. Flows don't trigger retroactively, so events recorded before the flow went live won't enter it. And according to Klaviyo, if there's a delay of 6 hours or more between an event's timestamp and the time Klaviyo records it, the event won't trigger a metric-triggered flow.",
      ],
      table: {
        caption: "Match the symptom to the likely cause",
        headers: ["Symptom", "Likely cause", "Where to check"],
        rows: [
          [
            "Trigger metric shows no recent events",
            "Onsite tracking is off or broken",
            "Klaviyo Integrations > Shopify, and the app embed in your theme",
          ],
          [
            "Metric has events but nobody enters the flow",
            "Trigger filters, events from before the flow went live, or late events",
            "Trigger settings and the flow's go-live date",
          ],
          [
            "Profiles enter but messages don't send",
            "Messages in Draft or Manual, or profiles skipped",
            "Message status and the Skipped tab",
          ],
          [
            "Some profiles get emails, others don't",
            "Flow filters, re-entry limits, Smart Sending or consent",
            "Flow filters and skip reasons",
          ],
          [
            "Customers get two abandoned cart emails",
            "Shopify's own abandoned checkout emails are still on",
            "Shopify admin: Apps > Messaging > Automations",
          ],
          [
            "Tracking stopped after a redesign",
            "New theme without the Klaviyo app embed enabled",
            "Theme editor > App embeds",
          ],
        ],
      },
    },
    {
      heading: "Tracking: the Klaviyo app embed and behavioral events",
      definition:
        "On Shopify, Klaviyo's onsite tracking comes from the Klaviyo app embed in your theme plus the 'Track behavioral events' setting in Klaviyo's Shopify integration. If either is off, Viewed Product and Added to Cart events stop arriving.",
      body: [
        "Klaviyo's setup steps, as of September 2026: in Klaviyo, go to Integrations, select Shopify, and in the Onsite tracking section check 'Track behavioral events'. Klaviyo then prompts you to turn on the app embed. In Shopify's theme editor, open App embeds, toggle Klaviyo on and save. Back in Klaviyo, refresh and look for the green success banner.",
        "Klaviyo's help center says Added to Cart for Shopify is enabled through a Shopify server pixel when 'Track behavioral events' is checked, and that Viewed Product tracking turns on once the app embed is enabled and the Viewed Product setting is checked.",
        "The most common way this breaks is a theme change. According to Klaviyo, if you've added a brand new theme to your store, you need to re-enable the app embed on it. A redesign that went live last month is a prime suspect for a browse abandonment flow that went quiet last month.",
        "Consent is the other cause. Klaviyo notes that, depending on your Shopify customer privacy settings, it may not track onsite events for visitors in the EU, EEA, UK and Switzerland unless they've given consent. If your flows work for US shoppers but not European ones, check the cookie banner before the flow.",
        "If your theme also contains hand-pasted Klaviyo code from an older install, compare it with the app embed and remove the old copy on a duplicate theme. Our guide to [removing leftover Shopify app code](/blog/remove-leftover-shopify-app-code) walks through doing that safely.",
      ],
    },
    {
      heading: "Identity: why anonymous visitors can't enter flows",
      definition:
        "Klaviyo only tracks browsing for 'known' browsers: ones identified through a Klaviyo form, a click from a Klaviyo email or SMS, or custom tracking for logged-in customers. A first-time visitor who never shares an email is invisible to browse and cart flows, however many products they view.",
      body: [
        "Klaviyo's onsite tracking documentation spells this out: tracking covers browsers that have been identified, or cookied, through one of those actions. Its troubleshooting guide adds that profiles must be identified with an email address or phone number to enter flows.",
        "That's why a browse abandonment flow reaches only a slice of your traffic, and why that's working as designed. The slice grows as more visitors sign up through forms or click through from your emails.",
        "Started Checkout is different because checkout collects contact details. Klaviyo says the event triggers once the customer has filled out their contact information and moved on to the shipping step, or reloaded the page, depending on the integration, and that contact information is required to create a profile. A shopper who opens checkout and leaves before entering an email won't trigger it.",
        "Devices matter too. A shopper identified on their phone is anonymous on their laptop until they're identified there as well, so browsing on the second device won't show up on their profile. Klaviyo also warns that when an email is forwarded and someone else clicks it, that device gets linked to the original recipient's profile.",
      ],
    },
    {
      heading: "Trigger filters, flow filters and AND logic",
      definition:
        "Trigger filters decide which events start the flow; flow filters decide which profiles are allowed to continue. Filters that exclude people need AND connectors, and flow filters are checked again before every message.",
      body: [
        "Klaviyo's troubleshooting guide notes that if you're excluding people, for example with 'doesn't contain', you want AND connectors, because OR only requires one condition to be true. A filter group joined with OR by mistake can let everyone through, or, combined with other conditions, block everyone.",
        "The standard abandoned cart filter is 'Placed Order zero times since starting this flow'. Klaviyo checks profile filters before each email, so someone who buys between email one and email two drops out. Compare that with a filter such as 'Placed Order zero times over all time', which would exclude every past customer from the flow. That's an easy slip in the filter builder and a common reason a flow reaches far fewer people than expected.",
        "Re-entry limits work the same way. A filter like 'Has not been in this flow in the last 30 days' is sensible, but it also means the shopper who abandoned a cart last week won't get the flow this week. That's the filter doing its job, not a bug.",
      ],
      bullets: [
        "Read every filter aloud as a sentence and check that it says what you mean.",
        "Use AND between exclusions; use OR only when any one condition should qualify.",
        "Use 'since starting this flow' for purchase exclusions in cart and browse flows.",
        "Check re-entry windows against how often you expect people to come back.",
        "Look for filters copied from another flow that don't fit this one.",
        "Check trigger filters separately; they apply to the event, not the profile.",
      ],
    },
    {
      heading: "Smart Sending, quiet hours and consent",
      definition:
        "If profiles enter a flow but emails don't go out, open the message's Recipient activity and the Skipped tab. Klaviyo lists a reason for every skipped profile, from Smart Sending to failed filters to suppressed addresses.",
      body: [
        "Smart Sending limits how many messages someone receives in a set period. As of September 2026, Klaviyo's default window is 16 hours for email and 24 hours for SMS. It's enabled on flow messages in many pre-built flows, and it only applies to marketing messages; Klaviyo says transactional messages are never skipped. If a shopper got a campaign this morning, the abandoned cart email this afternoon may be skipped.",
        "Other skip reasons Klaviyo lists include Fails Flow Filters, Fails Additional Filters, Missing Email, Person Suppressed (unsubscribed or hard bounced) and, for SMS, Missing SMS Consent. SMS steps can also be held by quiet-hours settings, so a text that 'never sent' may simply be waiting for the morning.",
        "Suppressed profiles being skipped is the system protecting you. Abandoned cart and browse emails are marketing messages, and under the FTC's [CAN-SPAM guidance](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business), commercial email must tell recipients how to opt out and honor opt-outs within 10 business days. The FTC lists penalties of up to $53,088 for each email that violates the law (as of September 2026).",
      ],
    },
    {
      heading: "Shopify conflicts: native abandoned-checkout emails and other apps",
      body: [
        "Shopify can send its own abandoned checkout emails. According to Shopify's help center, a checkout counts as abandoned when it stays incomplete for more than ten minutes after the customer has provided their email, and the automatic emails are managed in Apps > Messaging > Automations under 'Abandoned checkout emails by Shopify'.",
        "Klaviyo's abandoned cart guide recommends turning off any abandoned cart messages sent by your ecommerce platform, so customers only receive messages from Klaviyo. If both run, customers get two reminders for the same cart, and it becomes hard to tell which message actually recovered the sale.",
        "Check for other senders too: older email or SMS apps you tried and never uninstalled, and review or loyalty apps that send their own post-purchase emails. One owner per message type keeps both the customer experience and your reporting clean.",
      ],
      callout: {
        title: "From the studio",
        body: "For every flow fix we keep a short test log: the plus-address used, the time of each action on the site, what appeared on the profile's activity feed, and what the flow's recipient activity said. When a test fails, the log shows which layer broke, whether tracking, identity, filters or sending, so we fix that layer instead of rebuilding the whole flow.",
      },
    },
    {
      heading: "Testing without guessing: cookie-based tests",
      body: [
        "Klaviyo's own test for Shopify tracking uses a URL parameter to identify your browser. Add ?utm_email= followed by a test address to the end of your homepage URL, reload the page, visit a product page, then search for that email in Klaviyo and check that Active on Site and Viewed Product appear. For Added to Cart, add an in-stock product to the cart and look for the event on the same profile.",
        "Use a fresh private window and a new plus-address for each run (for example, yourname+cart3@yourdomain.com), so an old cookie or an earlier test doesn't muddy the result. Remember that your own filters apply to test profiles too: a 're-entry in the last 30 days' filter will block your second test with the same address.",
        "Once events arrive, follow the profile into the flow. The flow's recipient activity shows whether the profile is scheduled, waiting on a time delay, or skipped and why. If a message renders oddly, open it in the flow editor, click Preview & test, and pick a recent event and profile. Seeing the email with real event data catches broken product blocks and personalization before customers see them.",
      ],
      bullets: [
        "Open a new private window.",
        "Load the homepage with ?utm_email=your+testN@yourdomain.com.",
        "View a product, add it to the cart, and start checkout with the same address.",
        "Search the address in Klaviyo and check each event on the profile's activity feed.",
        "Open the flow's recipient activity and confirm the profile is scheduled, not skipped.",
        "Write the time of each step in your test log.",
      ],
    },
    {
      heading: "Flow-by-flow notes",
      body: ["Each common Shopify flow has its own weak spot. Here's where to look first."],
      subsections: [
        {
          heading: "Welcome flow",
          body: [
            "Welcome flows are usually triggered when someone joins a list, so first confirm your signup form adds people to the same list the flow is triggered by. Forms and flows can drift apart after a redesign or a new popup. If the list uses double opt-in, Klaviyo only adds people once they confirm, so anyone who ignores the confirmation email never joins the list and never enters the flow.",
          ],
        },
        {
          heading: "Abandoned cart: Started Checkout vs Added to Cart",
          body: [
            "Klaviyo's default abandoned cart flow is triggered by Started Checkout, which needs the shopper's contact details from checkout. Klaviyo also offers an Added to Cart flow for Shopify that reaches people who added items but never started checkout; it needs the app embed and 'Track behavioral events'. If your Started Checkout flow is healthy but small, the Added to Cart version is often the missing audience. Keep the 'Placed Order zero times since starting this flow' filter on both.",
          ],
        },
        {
          heading: "Browse abandonment",
          body: [
            "Browse abandonment is triggered by Viewed Product, so it depends entirely on onsite tracking and identified browsers. Klaviyo's setup guide recommends filters for 'Placed Order zero times since starting this flow' and 'Started Checkout zero times since starting this flow', so it doesn't compete with your cart flow.",
          ],
        },
        {
          heading: "Post-purchase and replenishment",
          body: [
            "These are triggered by Placed Order, which comes from the Shopify integration rather than onsite tracking. If they stop, check the Placed Order metric first, then any product filters: a renamed product or a new variant can fall outside a filter written for the old one. Klaviyo's replenishment guide suggests timing the first reminder to the product's usage cycle, for example 25 days for a 30-day supply.",
          ],
        },
      ],
    },
    {
      heading: "When it's deeper: headless storefronts and checkout changes",
      body: [
        "Klaviyo's Shopify onsite tracking runs through the theme app embed. A headless storefront doesn't use a Shopify theme, so the embed never loads there, and tracking has to be built into the storefront's own code. If you're planning a move, budget for it; our [headless Shopify guide](/blog/headless-shopify-commerce-guide) covers what else changes.",
        "If order tracking in your analytics or ad platforms changed around Shopify's August 26, 2026 deadline for the new Thank you and Order status pages, that's a separate problem from Klaviyo's integration. Our guide to [fixing Shopify tracking after Additional Scripts](/blog/shopify-additional-scripts-removed-tracking-fix) covers it.",
        "If you'd like a second pair of eyes, the [social media and email team](/services/social-media-and-email) at Pixel2Tech audits Klaviyo flows the same way this article does: metric, identity, filters, sending, conflicts, in that order.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why is my Klaviyo abandoned cart flow not sending?",
      a: "Check four things in order. Are the flow's messages Live rather than Draft or Manual? Is the Started Checkout metric recording recent events? Are profiles being skipped, and for what reason in the Skipped tab? And are filters such as 'Placed Order zero times' set to 'since starting this flow' rather than over all time? Also turn off Shopify's own abandoned checkout emails.",
    },
    {
      q: "Why isn't Viewed Product tracking in Klaviyo?",
      a: "On Shopify, Viewed Product depends on the Klaviyo app embed being turned on in your current theme and the Viewed Product setting being checked in Klaviyo's Shopify integration. A new theme turns the embed off until you re-enable it. Klaviyo also only tracks identified browsers, and may not track visitors in the EU, EEA, UK or Switzerland who haven't given cookie consent.",
    },
    {
      q: "Can Klaviyo flows trigger for anonymous visitors?",
      a: "No. Klaviyo only tracks onsite activity for browsers it has identified, and profiles need an email address or phone number to enter a flow. Visitors become identifiable by submitting a Klaviyo form, clicking through from a Klaviyo email or SMS, or through custom tracking for logged-in customers. Growing your signup forms is how you grow browse and cart flow audiences.",
    },
    {
      q: "Should I turn off Shopify's abandoned checkout emails when using Klaviyo?",
      a: "Yes, if Klaviyo is handling cart recovery. Klaviyo recommends turning off your platform's abandoned cart messages so customers don't receive duplicates. In Shopify, the automation lives under Apps > Messaging > Automations as 'Abandoned checkout emails by Shopify'. Running both confuses customers and makes it hard to tell which message recovered the sale.",
    },
    {
      q: "When should a replenishment email be sent?",
      a: "Time it to how long the product lasts. Klaviyo's replenishment guide gives the example of sending around day 25 for a 30-day supply, then suggests two reminders and one follow-up after the expected buying cycle has passed. Use your own reorder data where you have it, and filter out customers who have already bought again since entering the flow.",
    },
  ],
  sources: [
    {
      label: "Klaviyo Help Center: Troubleshooting a metric-triggered flow",
      href: "https://help.klaviyo.com/hc/en-us/articles/12278373016603",
    },
    {
      label: "Klaviyo Help Center: How to enable onsite tracking for Shopify",
      href: "https://help.klaviyo.com/hc/en-us/articles/4425956184731",
    },
    {
      label: "Klaviyo Help Center: Getting started with onsite tracking",
      href: "https://help.klaviyo.com/hc/en-us/articles/115005076767",
    },
    {
      label: "Klaviyo Help Center: How to create an abandoned cart flow",
      href: "https://help.klaviyo.com/hc/en-us/articles/115002779411",
    },
    {
      label: "Klaviyo Help Center: Understanding Smart Sending",
      href: "https://help.klaviyo.com/hc/en-us/articles/115002779311",
    },
    {
      label: "Shopify Help Center: Abandoned checkouts",
      href: "https://help.shopify.com/en/manual/orders/abandoned-checkouts",
    },
  ],
  internalLinks: [
    {
      label: "Fix Shopify tracking after Additional Scripts",
      to: "/blog/shopify-additional-scripts-removed-tracking-fix",
    },
    { label: "Remove leftover Shopify app code", to: "/blog/remove-leftover-shopify-app-code" },
    { label: "Headless Shopify commerce guide", to: "/blog/headless-shopify-commerce-guide" },
    { label: "Common Shopify issues and fixes", to: "/blog/shopify-issues-and-how-to-fix-them" },
    { label: "Social Media & Email services", to: "/services/social-media-and-email" },
  ],
  cta: {
    title: "Klaviyo flow still silent after this checklist?",
    body: "Send us the flow name and what you've already checked. We'll trace it through metric, identity, filters and sending, and tell you exactly which layer is failing and how to fix it.",
  },
};

export default post;
