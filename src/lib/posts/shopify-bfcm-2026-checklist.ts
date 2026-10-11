import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Black Friday Checklist 2026: Fix Checkout, Stop Bots",
  metaDescription:
    "A dated Shopify Black Friday checklist for 2026: fix checkout leaks, time recovery emails, warm your list, block card-testing bots and get clean analytics.",
  keywords: [
    "shopify black friday checklist 2026",
    "shopify abandoned checkout fix",
    "shopify bot orders card testing",
    "fake customer accounts shopify",
    "bfcm email deliverability",
    "shopify conversion rate",
    "shopify bfcm preparation",
  ],
  keyTakeaways: [
    "Black Friday 2026 falls on November 27 and Cyber Monday on November 30, which leaves about six weeks from mid-October to fix your store before peak traffic arrives.",
    "Fix the checkout before you buy more traffic: Baymard Institute's research puts extra costs such as shipping, tax and fees at the top of the reasons shoppers abandon checkout, ahead of slow delivery, trust and forced account creation.",
    "Run one abandoned checkout flow, not two. Klaviyo recommends a first email two to four hours after checkout starts and tells Shopify stores to turn off the platform's own abandoned cart emails to avoid duplicates.",
    "Gmail and Yahoo require bulk senders to authenticate their domain, offer one-click unsubscribe and keep spam complaints below 0.3%, so start ramping email volume to engaged subscribers about two weeks before BFCM.",
    "Bots that test stolen cards and create fake accounts can't be blocked by country alone. Keep hCaptcha on, consider manual payment capture with Shopify Flow, and keep bot profiles out of your email flows.",
    "Shopify changed how Analytics measures sessions on September 21, 2026, so treat reports from that date as a new baseline before you compare this year's BFCM to last year's.",
  ],
  content: [
    {
      heading: "What should you fix first before Black Friday 2026?",
      definition:
        "Fix the parts of your funnel that lose buyers you already have: checkout friction, surprise costs, recovery emails and email deliverability. Then remove bot noise from your orders, lists and analytics. Only after that should you raise ad spend, and only toward warm audiences.",
      body: [
        "Thanksgiving is Thursday, November 26, 2026, according to the [U.S. Office of Personnel Management's federal holiday calendar](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/). That puts Black Friday on November 27 and Cyber Monday on November 30. If you're reading this in mid-October, you have about six weeks.",
        "The BFCM prep threads on r/shopify and r/ecommerce this fall keep circling the same questions: why is my conversion rate so low, why are abandoned checkouts piling up, and where are all these fake accounts coming from? One r/ecommerce thread asked it plainly: should you fix the funnel before scaling ad spend? Yes. More traffic into a leaking checkout just buys more abandoned checkouts at the most expensive time of year.",
        "Here's the order we'd work in, and the rest of this checklist follows it:",
      ],
      bullets: [
        "Checkout: remove surprise costs, forced sign-in and missing payment options, and test everything on a phone.",
        "Recovery: one abandoned checkout flow with sensible timing and clean filters.",
        "Email: authentication in place and a volume ramp to engaged subscribers before the big sends.",
        "Bots: card testing, fake accounts and junk profiles kept out of orders, flows and reports.",
        "Analytics: a clean baseline so you can tell real change from noise.",
        "Ads: scale only toward people who already know you, once the steps above are done.",
      ],
    },
    {
      heading: "Where are shoppers actually leaving your checkout?",
      definition:
        "Most avoidable checkout abandonment comes from costs the shopper didn't expect, forced account creation, a long or broken checkout and too few payment options. All of these can be checked in an afternoon on your own phone.",
      body: [
        "Baymard Institute's [cart abandonment research](https://baymard.com/lists/cart-abandonment-rate) calculates an average documented abandonment rate of 70.22% across 50 studies. Many of those shoppers were never going to buy: in Baymard's survey, 42% of US online shoppers said they'd abandoned because they were just browsing. Set those aside and the reasons that remain are mostly fixable.",
      ],
      table: {
        caption:
          "Top reasons US shoppers abandoned checkout, excluding 'just browsing' (Baymard Institute, 2026 list)",
        headers: ["Reason", "Share of shoppers", "What to check on Shopify"],
        rows: [
          [
            "Extra costs too high (shipping, tax, fees)",
            "40%",
            "Show shipping costs or a free-shipping threshold on product and cart pages",
          ],
          ["Delivery was too slow", "20%", "Show realistic delivery dates and holiday cut-offs"],
          [
            "Didn't trust the site with card details",
            "19%",
            "Clear returns, contact details and familiar payment options",
          ],
          [
            "Site wanted me to create an account",
            "18%",
            "Make sure sign-in isn't required at checkout",
          ],
          ["Too long or complicated checkout", "17%", "Remove optional fields you don't need"],
          [
            "Website had errors or crashed",
            "17%",
            "Test the full path on mobile after every app change",
          ],
          [
            "Couldn't see total cost up front",
            "12%",
            "State taxes, duties and shipping before checkout",
          ],
          ["Not enough payment methods", "9%", "Turn on the wallets your customers use"],
        ],
      },
      subsections: [
        {
          heading: "Settings to check today",
          body: [
            "Open Settings > Checkout and look at the customer information options. Shopify's [checkout form options guide](https://help.shopify.com/en/manual/checkout-settings/checkout-form-options) lists a toggle called 'Require customers to sign in to their account before checkout'. If it's on, Shopify says customers can only check out with an email address and accelerated options such as Apple Pay aren't shown in the online store cart. Unless you run a members-only or wholesale store, that's a lot of friction to add in November.",
            "While you're there, review the optional fields. Shopify warns that setting address line 2 to Required or Don't include can stop some customers from completing a purchase, and that requiring a company name can force Apple Pay and Google Pay customers to type one in.",
            "Then check accelerated checkout buttons. Shopify's [accelerated checkout documentation](https://help.shopify.com/en/manual/online-store/dynamic-checkout) lists branded buttons for Shop Pay, Apple Pay, Google Pay, PayPal, Amazon Pay and Venmo, shown only for methods you've activated in your payment settings. Customers see different buttons depending on their browser, device and payment history, so test on both an iPhone and an Android phone.",
          ],
          bullets: [
            "Place a real order on your phone over mobile data, from an ad link to the thank-you page, and write down every point where you hesitated.",
            "Check that discount codes, gift cards and free-shipping thresholds still work together the way your BFCM offer needs them to.",
            "Remove apps that inject pop-ups into the cart; our [Shopify INP guide](/blog/shopify-inp-core-web-vitals) shows how to find scripts slowing taps on mobile.",
          ],
        },
      ],
    },
    {
      heading: "How soon should abandoned checkout emails go out?",
      definition:
        "Klaviyo recommends a first abandoned checkout email two to four hours after a shopper starts checkout and a second 20 to 48 hours later. In Shopify Messaging, an added abandoned checkout automation waits 10 hours by default. Pick one tool and turn the other off.",
      body: [
        "Shopify counts a checkout as abandoned when it stays incomplete for more than ten minutes after the customer enters an email address, according to its [abandoned checkouts help page](https://help.shopify.com/en/manual/orders/abandoned-checkouts). Recovery emails now run in Shopify Messaging. Shopify's [automation guide](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout) says migrating stores keep their previous settings, an added automation defaults to a 10-hour wait (changed by editing the workflow in Shopify Flow), and emails go only to subscribed customers by default.",
        "Klaviyo's [abandoned cart flow guide](https://help.klaviyo.com/hc/en-us/articles/115002779411) is more aggressive: its pre-built flows wait four hours, and it recommends the first message between two and four hours after checkout starts. It also recommends a 'Placed Order zero times since starting this flow' filter and tells Shopify stores to turn off the platform's default abandoned cart messages so customers don't get duplicates.",
        "That last point matters more than timing. A common fix on Reddit this fall was 'add another recovery app'. If checkout itself is the leak, another recovery tool just sends more overlapping emails to the same people. Fix the checkout, then run one flow you understand. If your Klaviyo flow isn't firing at all, see our guide to [Klaviyo flows not triggering on Shopify](/blog/klaviyo-flows-not-triggering-shopify).",
      ],
      callout: {
        title: "What about calling abandoners with an AI voice agent?",
        body: "Suggestions to phone abandoners with AI voice agents got a cold reception in recent r/ecommerce threads, and there's a legal reason to be careful too. On February 8, 2024 the FCC [ruled](https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf) that AI-generated voices count as 'artificial' under the Telephone Consumer Protection Act, which requires prior express written consent before robocalling consumers for telemarketing. Talk to a lawyer before you try it, and fix the checkout first.",
      },
    },
    {
      heading: "How do you warm your email list for BFCM deliverability?",
      definition:
        "Meet Gmail and Yahoo's bulk sender rules (SPF, DKIM, DMARC, one-click unsubscribe, spam complaints under 0.3%), then raise sending volume gradually to engaged subscribers in the two weeks before Black Friday so your biggest sends don't land in spam.",
      body: [
        "Gmail's [email sender guidelines](https://support.google.com/a/answer/81126?hl=en) apply to anyone sending more than 5,000 messages a day to Gmail accounts, a line many stores cross during BFCM. Gmail's [sender FAQ](https://support.google.com/a/answer/14229414?hl=en) says it started ramping up enforcement on non-compliant traffic in November 2025, including temporary and permanent rejections. Yahoo's [sender best practices](https://senders.yahooinc.com/best-practices/) set out matching rules.",
      ],
      table: {
        caption:
          "Gmail and Yahoo bulk sender requirements (from each provider's documentation, October 2026)",
        headers: ["Requirement", "Gmail", "Yahoo"],
        rows: [
          [
            "Authentication",
            "SPF, DKIM and DMARC (policy can be none)",
            "SPF and DKIM, plus DMARC of at least p=none",
          ],
          [
            "Alignment",
            "From: domain aligned with the SPF or DKIM domain",
            "From: domain aligned with the SPF or DKIM domain",
          ],
          [
            "Unsubscribe",
            "One-click unsubscribe plus a visible link; honor within 48 hours",
            "One-click unsubscribe plus a visible link; honor within 2 days",
          ],
          ["Spam complaint rate", "Stay below 0.1%; never reach 0.3% or higher", "Keep below 0.3%"],
        ],
      },
      subsections: [
        {
          heading: "A ramp you can follow",
          body: [
            "Klaviyo Academy's BFCM [sending volume lesson](https://academy.klaviyo.com/en-us/courses/land-in-the-inbox-on-black-friday-cyber-monday/lessons/land-in-the-inbox-on-bfcm-build-your-sending-volume) starts about two weeks out. Day one goes to your primary engaged audience (its example uses a 90-day engaged segment). Each send after that grows by about 50%, adding less engaged profiles, until you're just under your total active emailable profiles. It then recommends a few buffer days before BFCM where you send only to your primary engaged segment.",
            "On a 2026 calendar, that means starting around November 9 and finishing the ramp by about November 20, leaving the days before Thanksgiving for engaged-only sends. Large lists may need longer, so start earlier if your list is big or you haven't emailed much this year.",
            "Before the ramp, remove bot sign-ups. They never open or click, so sending to them drags down engagement; the Klaviyo section below shows how.",
          ],
        },
      ],
    },
    {
      heading: "Should you scale ad spend for Black Friday?",
      definition:
        "Only after the checkout, recovery flow and email list are in order, and mostly toward warm audiences such as past buyers, subscribers and recent site visitors. Cold traffic is the most expensive way to find out your checkout has a leak.",
      body: [
        "'Just scale ads' is the most common BFCM advice and the riskiest. During peak season you're bidding against every other store that had the same idea, so each visitor costs more. If your checkout loses people to surprise shipping costs, you pay that higher price and still lose the sale.",
        "Warm audiences already trust you and are waiting for the offer. Build them now from past purchasers, subscribers and recent visitors who viewed products or started checkout, spend most of the BFCM budget there, and keep cold prospecting at a level you could live with if conversion dropped.",
        "Make sure your purchase tracking is clean before you set budgets. If your GA4 or Meta purchase events broke after Shopify's checkout changes, fix that first; our guide to [Shopify purchase tracking after Additional Scripts](/blog/shopify-additional-scripts-removed-tracking-fix) walks through it.",
      ],
    },
    {
      heading: "How do you stop card-testing bots and fake customer accounts?",
      definition:
        "Keep Shopify's hCaptcha on for every form and account page, decide whether to capture payments manually during the sale, use Shopify Flow to tag and review risky orders and suspicious new customers, and expect bots to keep changing names, emails and locations.",
      body: [
        "This fall, r/shopify owners described hundreds of fake sign-ups a day, accounts with repeated generic names, and bot carts flooding their email flows. It isn't new. A [Shopify Community thread from early 2024](https://community.shopify.com/t/james-james-and-the-world-of-automated-abandoned-cart-robots/293343) documented a bot nicknamed 'James James' starting and abandoning checkouts across many stores. Merchants there said deleted customers were simply recreated, and app developers told them they couldn't fully fix it. Treat any 'this app fixed it 100%' claim with skepticism.",
        "Shopify's guide to [identifying bot activity](https://help.shopify.com/en/manual/intro-to-shopify/bots/identifying-bot-activity) lists the signs: high volumes of $0 orders, many checkout and payment attempts with repeated or suspicious details, new customer profiles with strangely formatted names, session spikes, and heavy traffic from cloud data center locations. That last one is why 'block the country' rarely works. Bot traffic can come from data centers and proxies in many places, including the countries you sell to, and blocking whole regions mostly blocks real customers.",
      ],
      subsections: [
        {
          heading: "Controls built into Shopify",
          body: [
            "Shopify says hCaptcha is activated by default on all stores. Go to Online Store > Preferences > Spam protection and confirm it's checked for contact, newsletter and comment forms and for login, account creation and password recovery pages, as listed in Shopify's [preferences guide](https://help.shopify.com/en/manual/online-store/setting-up/preferences). Shopify notes hCaptcha isn't compatible with custom code or third-party apps that add a CAPTCHA, so remove those if you've added one.",
            "Since [June 16, 2026](https://changelog.shopify.com/posts/reduced-bot-noise-in-abandoned-checkouts), Shopify no longer creates an abandoned checkout when bots test stolen card numbers without completing payment. Its help center still says not all automated activity is filtered, so some abandoned checkouts may still come from bots. On Shopify Plus, [checkout bot protection](https://help.shopify.com/en/manual/checkout-settings/bot-protection) can be scheduled for up to 60 minutes around a launch, but Shopify says it's built for limited-stock drops and isn't a fraud-prevention tool.",
          ],
        },
        {
          heading: "Manual capture and Shopify Flow",
          body: [
            "Under Settings > Payments > Payment capture method you can switch to manual capture. Shopify's [payment capture guide](https://help.shopify.com/en/manual/payments/payment-authorization) explains that orders then sit as Authorized until you capture them, which gives you time to review before you're paid. The catch for BFCM: Shopify Payments gives you a 7-day authorization period, and capturing after that adds a 1.75% charge on top of standard card fees. Don't switch to manual capture unless someone will clear the queue every day through Cyber Monday.",
            "Shopify Flow makes that queue manageable. Its [trigger list](https://help.shopify.com/en/manual/shopify-flow/reference/triggers) includes 'Order risk analyzed' and 'Customer created', and its [actions](https://help.shopify.com/en/manual/shopify-flow/reference/actions) include 'Capture payment', 'Add order tags', 'Hold fulfillment order', 'Add customer tags' and 'Delete customer'. For example, you could capture low-risk orders automatically and tag the rest for review, or tag new customers whose first and last names match. Review tagged customers before deleting anything; deleting doesn't stop a bot from coming back.",
            "Chargebacks, AVS and CVV checks, 3-D Secure and fraud apps are covered in our guide to [reducing Shopify chargebacks and fraud](/blog/reduce-shopify-chargebacks-and-fraud). For the wider picture on automated traffic, see [why bots now outnumber humans online](/blog/bots-outnumber-humans-online-2026-website-security).",
          ],
        },
      ],
    },
    {
      heading: "How do you keep bot profiles out of Klaviyo?",
      definition:
        "Use double opt-in on sign-up forms, build a segment that matches your bots' patterns, suppress it before BFCM sends, and add flow filters so suspicious profiles don't enter welcome or abandoned checkout flows.",
      body: [
        "Bots reach your email platform two ways: through sign-up forms and through checkouts. Klaviyo's [double opt-in article](https://help.klaviyo.com/hc/en-us/articles/115005251108) explains that with double opt-in, only subscribers who confirm are added to the list. Unconfirmed Klaviyo form sign-ups get a blank profile that isn't on any list. But double opt-in only controls list membership. Abandoned checkout flows are triggered by the Started Checkout event, not by list membership, so a bot that enters an email at checkout can still land in the flow.",
        "Look at your recent fake profiles and find what they share: matching first and last names, the same sign-up form, a cluster of locations, or zero opens and clicks since joining. Build a segment on those traits and suppress its members before your volume ramp starts. Klaviyo's developer documentation confirms suppressed profiles can't receive email marketing, whatever their consent status, and offers a [bulk suppression endpoint](https://developers.klaviyo.com/en/reference/bulk_suppress_profiles) if you'd rather script it. Remember to clean the matching customer records in Shopify too.",
        "Then add a flow filter to your welcome and abandoned checkout flows that excludes profiles in that segment. If you send with Shopify's own email tools, Shopify's changelog says [bot-generated subscribers are filtered out automatically](https://changelog.shopify.com/posts/shopify-email-now-automatically-filters-out-bot-generated-subscribers-from-email-lists) at delivery time, though they stay in your customer list.",
      ],
    },
    {
      heading: "How do you get clean analytics before BFCM?",
      definition:
        "Shopify changed how it measures sessions on September 21, 2026. Default session reports now focus on human visitors where the Human or bot filter is available, so conversion rate and session numbers before and after that date aren't directly comparable.",
      body: [
        "Shopify's [September 21, 2026 changelog entry](https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements) says session-based metrics such as sessions, conversion rate, bounce rate and pageviews per session may look different after the change, while orders, sales and customer counts aren't affected. Shopify suggests treating reports from after the change as a new baseline. The 'Human or bot session' filter itself arrived in [October 2025](https://changelog.shopify.com/posts/filter-out-bot-traffic-in-your-sessions-related-reports).",
        "For BFCM, that means two things. If your conversion rate jumped in late September, check whether it's the measurement change before celebrating. And when you compare BFCM 2026 to BFCM 2025, compare orders and revenue, which didn't change, rather than session conversion rate, which did.",
      ],
      bullets: [
        "Record your post-September 21 baseline now: weekly sessions, conversion rate and orders, with the Human or bot filter applied.",
        "Write down every theme, app and pricing change between now and BFCM with a date, so you can explain movements later.",
        "Check that GA4 and ad platform purchase counts track your Shopify orders on a steady ratio before you rely on them for budget calls.",
      ],
    },
    {
      heading: "Can you load-test a Shopify store before Black Friday?",
      definition:
        "Shopify runs your storefront and checkout infrastructure, so the useful pre-BFCM testing is on the parts you add: apps, theme code and third-party services. We couldn't find Shopify documentation inviting merchants to load-test their own storefront, so ask Shopify support before pointing a load-testing tool at it.",
      body: [
        "Shopify's guide to [dealing with bots](https://help.shopify.com/en/manual/intro-to-shopify/bots/dealing-with-bots) says Cloudflare's firewall and DDoS protection run automatically on every store, and that visitors occasionally see a verification challenge. A flood of synthetic traffic is exactly what that layer exists to challenge. On Plus, raise any supervised test with Plus support first.",
        "Small-store BFCM failures tend to come from add-ons: an upsell app whose server slows down, a widget that blocks the page, or a theme edit made the night before. Shopify's bot guide also recommends keeping your theme and apps updated. Do those updates in October, not November.",
      ],
      bullets: [
        "List every app that touches the product page, cart or checkout, and ask each vendor how they handle peak traffic and what happens to your store if their service goes down.",
        "Remove apps you no longer use and [clear the code they left behind](/blog/remove-leftover-shopify-app-code).",
        "Build BFCM theme changes on a duplicate theme, test on mobile, publish by mid-November, then freeze until December.",
        "Run a full test order after every app update, not just after theme edits.",
      ],
    },
    {
      heading: "A week-by-week BFCM plan from now to Cyber Monday",
      body: [
        "This plan assumes you're starting the week of October 12, 2026. If you're starting later, compress the first three weeks but keep the email ramp and the freeze; those two dates are the hardest to move.",
      ],
      table: {
        caption: "Shopify BFCM 2026 plan, October 12 to December 6",
        headers: ["Dates", "Focus", "Tasks"],
        rows: [
          [
            "Oct 12-18",
            "Audit",
            "Phone test order; review checkout sign-in and field settings; confirm hCaptcha on every location; check SPF, DKIM and DMARC; record the post-September 21 analytics baseline",
          ],
          [
            "Oct 19-25",
            "Checkout and recovery",
            "Show shipping costs early; turn on missing wallets; choose one abandoned checkout tool, set timing and filters, switch the other off",
          ],
          [
            "Oct 26-Nov 1",
            "Bots and fraud",
            "Build the bot segment and suppress it; decide on payment capture; set up Flow rules for risky orders and suspicious customers",
          ],
          [
            "Nov 2-8",
            "Offer and apps",
            "Build BFCM pages and discounts on a duplicate theme; update apps and remove unused ones; build warm ad audiences; test orders",
          ],
          [
            "Nov 9-15",
            "Email ramp starts",
            "Day one to your engaged segment, then grow each send by about 50%; watch spam complaints and bounces daily",
          ],
          [
            "Nov 16-22",
            "Ramp and freeze",
            "Finish the ramp around November 20; publish the BFCM theme; freeze theme and app changes",
          ],
          [
            "Nov 23-26",
            "Buffer",
            "Send only to your engaged segment; final test order on every device; brief whoever is clearing the risk queue",
          ],
          [
            "Nov 27-30",
            "Black Friday to Cyber Monday",
            "Watch checkouts, the risk queue and Gmail spam rate in Postmaster Tools; capture authorized orders inside the 7-day window",
          ],
          [
            "Dec 1-6",
            "Review",
            "Capture or cancel remaining authorized orders; compare orders and revenue to last year; note what to fix before next season",
          ],
        ],
      },
    },
    {
      heading: "Getting help before the freeze",
      body: [
        "Most of this list is settings and discipline, not new software. For a broader store health check, see [10 common Shopify issues and how to fix them](/blog/shopify-issues-and-how-to-fix-them).",
        "If you'd like a second pair of hands before the freeze, the [WordPress & Shopify team](/services/wordpress-and-shopify) at Pixel2Tech can work through the checkout, app and bot items with you, and the [Social Media & Email team](/services/social-media-and-email) can handle segment cleanup and the volume ramp. Either way, start this week; November is for watching the numbers, not changing the store.",
      ],
    },
  ],
  faqs: [
    {
      q: "When is Black Friday 2026?",
      a: "Black Friday 2026 is Friday, November 27, the day after Thanksgiving on Thursday, November 26. Cyber Monday is November 30, 2026. If you're preparing in mid-October, you have about six weeks to fix your checkout, warm your email list and set up bot controls before peak traffic.",
    },
    {
      q: "Why are bots creating fake customer accounts on my Shopify store?",
      a: "Bots fill in sign-up, newsletter and checkout forms to test stolen cards, probe for weak spots or pollute lists. Shopify lists strangely formatted names, repeated customer details and traffic from cloud data centers as common signs. Keep hCaptcha on for every form and account page, tag suspicious new customers with Shopify Flow, and suppress matching profiles in your email platform.",
    },
    {
      q: "Should I block countries to stop Shopify bots?",
      a: "Rarely. Shopify's own list of bot signs includes heavy traffic from cloud data center locations, and bots can route through proxies and data centers in the countries you sell to. Blocking whole regions mostly blocks real customers. Focus on hCaptcha, order risk review, manual capture where it's practical, and keeping bot profiles out of your email flows.",
    },
    {
      q: "How long should I wait before sending an abandoned checkout email?",
      a: "Klaviyo recommends the first email two to four hours after checkout starts, with a second 20 to 48 hours later. An additional abandoned checkout automation in Shopify defaults to a 10-hour wait. Choose one tool, turn off the other so customers don't get duplicates, and exclude anyone who has already placed an order.",
    },
    {
      q: "Do Gmail and Yahoo rules affect small Shopify stores?",
      a: "Gmail's bulk sender rules apply once you send more than 5,000 messages a day to Gmail accounts, which many stores reach during BFCM. Even below that, Gmail and Yahoo expect authenticated mail, easy unsubscribes and low spam complaints. Set up SPF, DKIM and DMARC now and ramp volume to engaged subscribers before the big sends.",
    },
    {
      q: "Why did my Shopify conversion rate change in late September 2026?",
      a: "Shopify changed how Analytics measures sessions on September 21, 2026, focusing default session reports on human visitors where the Human or bot filter is available. Session counts and conversion rate may look different as a result, while orders and sales aren't affected. Treat data from that date as a new baseline.",
    },
  ],
  sources: [
    {
      label: "OPM: Federal holidays (Thanksgiving 2026)",
      href: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
    },
    {
      label: "Baymard Institute: Cart abandonment rate statistics",
      href: "https://baymard.com/lists/cart-abandonment-rate",
    },
    {
      label: "Shopify Help Center: Checkout form options",
      href: "https://help.shopify.com/en/manual/checkout-settings/checkout-form-options",
    },
    {
      label: "Shopify Help Center: Abandoned checkouts",
      href: "https://help.shopify.com/en/manual/orders/abandoned-checkouts",
    },
    {
      label: "Klaviyo Help Center: Create an abandoned cart flow",
      href: "https://help.klaviyo.com/hc/en-us/articles/115002779411",
    },
    {
      label: "Google: Email sender guidelines",
      href: "https://support.google.com/a/answer/81126?hl=en",
    },
    {
      label: "Yahoo Sender Hub: Sender best practices",
      href: "https://senders.yahooinc.com/best-practices/",
    },
    {
      label: "Shopify Help Center: Identifying bot activity",
      href: "https://help.shopify.com/en/manual/intro-to-shopify/bots/identifying-bot-activity",
    },
    {
      label: "Shopify Help Center: Payment capture",
      href: "https://help.shopify.com/en/manual/payments/payment-authorization",
    },
    {
      label: "Shopify Changelog: Shopify Analytics session measurement improvements",
      href: "https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements",
    },
  ],
  internalLinks: [
    {
      label: "Reduce Shopify chargebacks and fraud",
      to: "/blog/reduce-shopify-chargebacks-and-fraud",
    },
    { label: "Klaviyo flows not triggering", to: "/blog/klaviyo-flows-not-triggering-shopify" },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    {
      label: "Bots outnumber humans online",
      to: "/blog/bots-outnumber-humans-online-2026-website-security",
    },
    { label: "WordPress & Shopify services", to: "/services/wordpress-and-shopify" },
    { label: "Social Media & Email services", to: "/services/social-media-and-email" },
  ],
  cta: {
    title: "Six weeks to Black Friday?",
    body: "Send us your store URL and the problems you're seeing. We'll check the checkout, recovery flow, bot controls and app list, and give you a dated fix list that fits before the freeze.",
  },
};

export default post;
