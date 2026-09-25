import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify INP: Pass Core Web Vitals When Apps Slow Your Store",
  metaDescription:
    "INP is the Core Web Vital app-heavy Shopify stores often fail. Read Shopify's performance report, trace slow taps to their scripts and fix the cause.",
  keywords: [
    "shopify inp",
    "shopify core web vitals",
    "shopify interaction to next paint",
    "shopify web performance report",
    "shopify store slow apps",
    "shopify pagespeed score low",
    "do shopify speed apps work",
  ],
  keyTakeaways: [
    "INP (Interaction to Next Paint) measures how quickly a page responds to clicks, taps and key presses. Google rates 200 ms or less at the 75th percentile as good and anything over 500 ms as poor.",
    "Judge your store by Shopify's web performance report, which uses real-visitor data, not by the PageSpeed Insights score, which comes from a single simulated Lighthouse load and can't measure INP at all.",
    "Shopify's own guidance says a poor INP score most likely means too much JavaScript from your theme, your apps or your tag manager.",
    "Find the cause by page type first, then record the slow interaction in Chrome DevTools and switch app embeds off one at a time on a duplicate theme.",
    "A 'speed booster' app is more JavaScript. Removing or replacing a heavy app usually helps INP more than adding another one.",
  ],
  content: [
    {
      heading: "What is INP, and why do Shopify stores struggle with it?",
      definition:
        "Interaction to Next Paint (INP) is the Core Web Vital that measures responsiveness: the delay between a shopper's click, tap or key press and the next frame the browser paints. Google rates an INP of 200 milliseconds or less as good and over 500 milliseconds as poor, measured at the 75th percentile of page visits.",
      body: [
        "INP replaced First Input Delay (FID) as a Core Web Vital on March 12, 2024, according to [Google's web.dev announcement](https://web.dev/blog/inp-cwv-march-12). FID only timed the delay before the first interaction was handled. INP looks at every click, tap and key press during a visit and reports the slowest one, ignoring one outlier for every 50 interactions.",
        "Each interaction has three parts. Input delay is the wait before your code starts running, usually because the browser's main thread is busy with something else. Processing time is your event handlers running. Presentation delay is the browser recalculating layout and painting the result. A slow tap can come from any of the three.",
        "Scrolling and hovering don't count. That's why a store can scroll smoothly and still fail INP: the problem shows up when someone taps a size swatch, opens the cart drawer or applies a filter.",
        "Shopify stores are especially exposed because every app you install can add JavaScript to every page. Shopify's help center says that when INP is poor, the most likely cause is too much JavaScript from theme code, app code or third-party and tag manager code. Each extra script competes for the same main thread your shopper's tap needs.",
      ],
    },
    {
      heading: "Shopify's web performance report vs PageSpeed Insights: which number matters?",
      definition:
        "Shopify's web performance report shows real-visitor data at the 75th percentile. The PageSpeed Insights performance score is a Lighthouse lab test of one simulated page load. For customers and for Google, the real-visitor data is the number to fix.",
      body: [
        "You'll find the report under Analytics > Reports in your Shopify admin, or from the performance summary on the Themes page. As of September 2026 it rates LCP, INP and CLS as Good, Moderate or Poor, covers the last 90 days, and can lag by up to 36 hours. You can break it down by page type, individual page URL and device type.",
        "The over-time charts carry numbered annotations for events such as app installs, theme updates and new code. If INP got worse the week you installed a new upsell app, the chart will usually show it.",
        "PageSpeed Insights mixes two different things. The top section shows field data from the Chrome User Experience Report (CrUX), a trailing 28-day sample of real Chrome users. The big performance score below it comes from Lighthouse, which, according to [Google's PageSpeed Insights documentation](https://developers.google.com/speed/docs/insights/v5/about), simulates a mid-tier phone on a mobile network. A lab test doesn't tap anything, so it reports Total Blocking Time as a stand-in rather than measuring INP.",
        "Shopify's numbers can also differ from CrUX because Shopify collects data from all Chromium browsers and Firefox, while CrUX only covers Chrome users who opted in. So 'my PageSpeed score is low but the store feels fast' and 'my PageSpeed score is 90 but INP is poor' are both possible. Fix what real visitors experience.",
      ],
      table: {
        caption: "Where each speed number comes from (as of September 2026)",
        headers: ["Source", "Data type", "Whose experience", "Measures INP?", "Best use"],
        rows: [
          [
            "Shopify web performance report",
            "Field (real visitors)",
            "Your visitors on Chromium browsers and Firefox, last 90 days",
            "Yes",
            "Tracking trends, page types and app-install annotations",
          ],
          [
            "PageSpeed Insights field section",
            "Field (CrUX)",
            "Opted-in Chrome users, trailing 28 days",
            "Yes, where Google has enough data",
            "Seeing what Google's public dataset shows",
          ],
          [
            "PageSpeed Insights performance score",
            "Lab (Lighthouse)",
            "One simulated load on a mid-tier phone profile",
            "No, uses Total Blocking Time instead",
            "Debugging load problems and comparing before and after",
          ],
          [
            "Chrome DevTools Performance panel",
            "Local",
            "You, on your own device, with optional CPU throttling",
            "Yes, for interactions you perform",
            "Finding the exact script behind a slow tap",
          ],
        ],
      },
    },
    {
      heading: "How do you find what's making taps slow on your store?",
      definition:
        "Work from broad to narrow: find the page type with poor INP in Shopify's report, reproduce the slow interaction in Chrome DevTools, then test app embeds one at a time on a duplicate theme.",
      body: [
        "Start in the web performance report with the page-type view. If INP is Good on the home page but Poor on product pages, look at what only runs there: variant pickers, image galleries, review widgets, 'frequently bought together' blocks. If collection pages are the problem, look at filters and quick-add buttons.",
        "Next, reproduce it. Open a product page in Chrome, open DevTools and go to the Performance panel. According to [Chrome's DevTools documentation](https://developer.chrome.com/docs/devtools/performance/overview), the panel shows your local INP as you interact, lists each captured interaction, and can compare your local numbers with real-user field data. Turn on CPU throttling so your laptop behaves more like a mid-range phone, then record a trace while you repeat the slow interaction.",
        "In the trace, look at the main thread during the interaction and note which script files the long blocks of work come from. Many app scripts load from the app vendor's own domain, which tells you which app to test. For scripts served from Shopify's CDN, check the file path and the Initiator column in the Network tab to work out which app or theme file requested them.",
        "Finally, isolate apps. Duplicate your theme (Online Store > Themes > Duplicate), open the copy in the theme editor, and switch off app embeds one at a time from the App embeds panel. Preview the copy and repeat the same interaction after each change. Remember that a duplicate theme only isolates theme-level code: apps that load through other routes will still run in the preview.",
      ],
      bullets: [
        "Filter Shopify's report by page type and note which templates are Moderate or Poor for INP.",
        "Check the chart annotations for app installs or theme updates near the date INP got worse.",
        "Write down the exact interaction that feels slow: 'pick the second size', 'open the cart drawer', 'apply the color filter'.",
        "Record that interaction in the DevTools Performance panel with CPU throttling on.",
        "List the script files doing work during the interaction and map each one to an app, the theme or your tag manager.",
        "Duplicate the theme and switch app embeds off one at a time, repeating the same interaction after each change.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we change any code on a slow store, we write a short 'interaction script': open this product, pick the second size, add to cart, open the drawer, change the quantity. We run exactly those taps, on the same throttling setting, after every change. If the number improves, we know it's the change and not the way someone tapped.",
      },
    },
    {
      heading: "Which Shopify features and apps usually cause poor INP?",
      definition:
        "The usual suspects are the interactions shoppers use most, such as cart drawers, variant pickers and collection filters, plus third-party widgets like chat, reviews and upsells that load JavaScript on every page.",
      body: [
        "Google's guidance on optimizing INP explains the mechanics. Scripts that are still loading and evaluating create long tasks that delay a shopper's tap. Event handlers that do too much work block the next paint. Very large pages make every re-render more expensive. Most Shopify INP problems are one of these three in a store-specific form.",
        "The table below lists the patterns we check first. They're starting points for your own trace, not a verdict on any particular app.",
      ],
      table: {
        caption: "Common INP trouble spots on Shopify and what to check",
        headers: ["Interaction", "What often goes wrong", "What to check or change"],
        rows: [
          [
            "Opening or updating the cart drawer",
            "The whole drawer re-renders, and upsell or free-shipping apps recalculate on every click",
            "Show the visual change first, then fetch and recalculate; limit how many apps listen for cart changes",
          ],
          [
            "Choosing a variant or swatch",
            "Price, images, availability, URL and several app widgets all update in one long handler",
            "Update what the shopper sees first and defer the rest; check product pages with many variants",
          ],
          [
            "Applying a collection filter",
            "The entire product grid is replaced on a long, heavy page",
            "Show fewer products per page and keep product cards lean",
          ],
          [
            "Tapping anything while the page loads",
            "Chat, reviews and personalization scripts evaluating at the same time",
            "Load chat on intent (a placeholder button) and load reviews when they scroll into view",
          ],
          [
            "Any click on the page",
            "Tag manager tags that fire on click events",
            "Audit the container and remove unused or low-value tags",
          ],
        ],
      },
    },
    {
      heading: "Fixes that work: less JavaScript, later JavaScript, lighter JavaScript",
      body: [
        "Shopify's advice is to evaluate every installed app and every piece of third-party code, and keep it only if it creates enough value to offset the performance cost. In practice that means three kinds of fix, in this order.",
        "Less: uninstall apps you don't use, and turn off app embeds that don't need to be on every page. Where an app offers an app block, place it only on the templates that need it. Shopify also recommends auditing your tag manager and removing unused or low-value tags.",
        "Later: anything the shopper doesn't need in the first seconds, such as chat, review carousels and social feeds, can load when it scrolls into view or when someone asks for it. For your own theme code, Google's [INP optimization guide](https://web.dev/articles/optimize-inp) recommends doing as little work as possible inside event handlers and yielding to the main thread so the visual update paints before background work continues.",
        "Lighter: smaller pages re-render faster. Shopify recommends not stacking too many sections on a template, and Google notes that rendering work grows as page size grows. If the theme itself is the bottleneck, it may be time to compare [theme customization with a custom theme](/blog/shopify-theme-customization-vs-custom-theme).",
        "When you're choosing a replacement app, the [Built for Shopify requirements](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements) are a useful filter. As of September 2026 they say an app must not reduce a storefront's Lighthouse performance score by more than ten points, and online store apps must use theme app extensions rather than editing theme files.",
      ],
    },
    {
      heading: "Why 'speed booster' apps can make things worse",
      body: [
        "Speed apps range from genuinely useful image compression to all-in-one 'booster' tools. The second group has a basic problem: it's another app, with its own script, running on every page.",
        "Some of these tools work by delaying other scripts until the shopper's first scroll or tap. That can raise a Lighthouse score, because the lab test never interacts with the page. But it also moves all that delayed work into the moment a real shopper taps, which is exactly what INP measures.",
        "Stacking two tools that each try to control when scripts load can also cause conflicts, such as scripts running twice or features that never start. If you trial one, test it on a duplicate theme, measure INP with the same interaction script before and after, and then watch Shopify's field data for a few weeks. A better lab score on day one proves very little.",
      ],
    },
    {
      heading: "Leftover code from uninstalled apps: a quick check",
      body: [
        "Uninstalling an app doesn't always remove its code. Shopify's help center confirms that some apps add code to your theme that isn't removed automatically. That code can keep loading scripts for a service you no longer pay for.",
        "A quick check: open your storefront with DevTools' Network tab filtered to JavaScript, reload, and list every third-party domain. Any domain you can't match to an app you still use is a lead. Then search your theme code for that app's name. The full procedure, including how to remove it safely, is in our guide to [removing leftover Shopify app code](/blog/remove-leftover-shopify-app-code).",
        "One date to note: according to Shopify's developer changelog, as of September 2026 Shopify plans to stop injecting legacy storefront script tags on March 1, 2027. Apps that still rely on them will need to move to app embeds or web pixels.",
      ],
    },
    {
      heading: "LCP and CLS quick wins while you're in there",
      body: [
        "Google's targets for the other two Core Web Vitals are an LCP (Largest Contentful Paint) within 2.5 seconds and a CLS (Cumulative Layout Shift) below 0.1. Shopify's report tracks both next to INP, so check them while you have the trace open.",
      ],
      bullets: [
        "LCP: optimize hero and product images or show fewer of them. Shopify's image CDN resizes and compresses images, so upload a sensible source file and let the theme request the right size.",
        "LCP: if the page sits blank and then appears all at once, Shopify suggests using DevTools to find the slow-loading scripts holding it up.",
        "LCP: keep the number of sections on key templates down, as Shopify recommends.",
        "CLS: compare the report before and after turning on theme animations or page transitions; Shopify notes animations can slow pages.",
        "CLS: reserve space for app widgets such as review stars, badges and announcement bars so they don't push content down when they load.",
        "All three: if you're on an old theme, Shopify points to its current free themes, including the Horizon family, as optimized for performance (as of September 2026).",
      ],
    },
    {
      heading: "A monthly performance routine for your store",
      body: [
        "INP rarely breaks all at once. It creeps up as apps, tags and sections pile on. A short monthly routine catches it early, and it's also a good moment to fix accessibility in the same components; cart drawers and modals show up in both audits, as our [Shopify accessibility checklist](/blog/shopify-ada-compliance-checklist) explains.",
      ],
      bullets: [
        "Open Shopify's web performance report, filter by page type, and note any template that moved from Good to Moderate or Poor.",
        "Match any drop to the chart annotations: app installs, theme updates and new code.",
        "Run your interaction script on product, collection and cart with DevTools throttling on.",
        "Review the app list and uninstall anything nobody has used in the last month, then clean up its code.",
        "Audit the tag manager container with whoever owns marketing tags.",
        "Before installing a new app, record a baseline; a week after, compare INP for the page types it touches.",
        "Keep a one-line change log (date, change, who) so the next slowdown has an obvious suspect.",
      ],
      callout: {
        title: "Need a hand?",
        body: "At Pixel2Tech, our [WordPress & Shopify team](/services/wordpress-and-shopify) runs this kind of audit on a duplicate theme, so nothing changes on your live store until a fix is proven. Bring your page-type numbers from Shopify's report and the interaction that feels slowest.",
      },
    },
  ],
  faqs: [
    {
      q: "What is a good INP score for a Shopify store?",
      a: "Google rates INP of 200 milliseconds or less as good, 201 to 500 milliseconds as needing improvement, and anything over 500 milliseconds as poor, measured at the 75th percentile of visits. Shopify's web performance report uses the same 75th-percentile approach and labels each metric Good, Moderate or Poor. Aim for Good on product, collection and cart pages, because that's where shoppers tap the most.",
    },
    {
      q: "Why is my Shopify PageSpeed score low when my store loads fast?",
      a: "The PageSpeed Insights score comes from Lighthouse, a lab test that simulates one page load on a mid-tier phone over a mobile network. Your real visitors may have faster devices and connections, so the store can feel fast while the lab score looks bad. The reverse also happens. Use Shopify's web performance report, which is built from real visits, to decide what to fix.",
    },
    {
      q: "Do Shopify speed optimization apps actually work?",
      a: "Some do specific jobs well, such as compressing images. All-in-one 'booster' apps are riskier: they add their own script, and some delay other scripts until the first tap, which can lift a lab score while moving work into the interactions INP measures. Test any speed app on a duplicate theme and judge it by field data over several weeks, not by a single PageSpeed run.",
    },
    {
      q: "Which Shopify apps slow down a store the most?",
      a: "There's no universal list, because the impact depends on how each app is built and where it runs. Apps that load JavaScript on every page tend to cost the most: live chat, review widgets, upsell and cross-sell popups, personalization tools and heavy tracking tags. Measure your own store by switching app embeds off one at a time on a duplicate theme and repeating the same interaction.",
    },
    {
      q: "Do Core Web Vitals affect Shopify SEO rankings?",
      a: "Google says Core Web Vitals are used by its ranking systems, but good scores don't guarantee top rankings, and it will still show the most relevant page even when page experience is poor. Treat INP as a tiebreaker for search and a real factor for conversions: a laggy variant picker or cart drawer costs sales whether or not it moves rankings.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Web performance overview",
      href: "https://help.shopify.com/en/manual/online-store/web-performance/overview",
    },
    {
      label: "Shopify Help Center: Web performance reports",
      href: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
    },
    {
      label: "Shopify Help Center: Improving web performance",
      href: "https://help.shopify.com/en/manual/online-store/web-performance/improving-web-performance",
    },
    {
      label: "web.dev: Interaction to Next Paint (INP)",
      href: "https://web.dev/articles/inp",
    },
    {
      label: "Google PageSpeed Insights: About lab and field data",
      href: "https://developers.google.com/speed/docs/insights/v5/about",
    },
    {
      label: "Google Search Central: Understanding page experience",
      href: "https://developers.google.com/search/docs/appearance/page-experience",
    },
  ],
  internalLinks: [
    { label: "Remove leftover Shopify app code", to: "/blog/remove-leftover-shopify-app-code" },
    { label: "Common Shopify issues and fixes", to: "/blog/shopify-issues-and-how-to-fix-them" },
    {
      label: "Theme customization vs custom theme",
      to: "/blog/shopify-theme-customization-vs-custom-theme",
    },
    { label: "Shopify ADA compliance checklist", to: "/blog/shopify-ada-compliance-checklist" },
    { label: "WordPress & Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Want to know which app is slowing your taps?",
    body: "Tell us which page type is failing INP in your Shopify report. We'll trace the slow interactions, test app embeds on a duplicate theme and give you a ranked list of fixes before anything changes on your live store.",
  },
};

export default post;
