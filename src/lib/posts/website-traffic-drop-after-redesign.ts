import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Traffic Dropped After a Redesign? SEO Recovery Checklist",
  metaDescription:
    "Lost rankings or leads after a new site launch? Triage the usual causes (missing redirects, noindex tags, cut content, slow pages) and win back traffic.",
  keywords: [
    "traffic dropped after website redesign",
    "lost rankings after website redesign",
    "website migration seo recovery",
    "301 redirects after redesign",
    "organic traffic drop new website",
    "google search console after relaunch",
  ],
  keyTakeaways: [
    "Some ranking fluctuation after a redesign is normal while Google recrawls. Losses concentrated on specific pages, rising 404s or pages marked noindex are not.",
    "Check robots.txt, noindex tags, canonical tags and passwords left over from staging first. They take minutes to fix and can hide an entire site.",
    "Rebuild the redirect map from Search Console, old sitemaps, the Wayback Machine, backlink exports and backups. Use permanent server-side redirects and keep them for at least a year, as Google recommends.",
    "Restore cut content, internal links, titles and structured data on the pages that lost traffic, and fix slow templates against Core Web Vitals targets.",
    "If traffic held but leads fell, test forms, phone links and conversion tags before blaming SEO.",
  ],
  content: [
    {
      heading: "Why does traffic drop after a website redesign?",
      definition:
        "Traffic usually drops after a redesign because the new site changed something search engines relied on: old URLs that now return 404s instead of redirecting, a leftover noindex tag or robots.txt block from staging, content that was cut, lost internal links, reset titles or slower pages. Most of these can be diagnosed in Search Console in an afternoon.",
      body: [
        "Start by deciding whether you have a problem at all. Google's [site move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) says that with any significant change to a site, you may see ranking fluctuations while Google recrawls and reindexes it, and that a small to medium-sized site can take a few weeks for most pages to move to new URLs.",
        "So a wobble in the first weeks is expected. A drop that is concentrated on particular pages, or that coincides with errors in Search Console, is not. The table below helps you tell the two apart.",
      ],
      table: {
        caption: "Normal settling vs signs of a real problem",
        headers: ["Normal settling", "Signs of a real problem"],
        rows: [
          [
            "Rankings move around for a few weeks, then stabilize",
            "Specific pages lose most of their clicks and don't come back",
          ],
          [
            "Old URLs are gradually replaced by new ones in results",
            "Old URLs show up as Not found (404) in Search Console",
          ],
          [
            "Indexed page count dips briefly, then recovers",
            "Indexed pages fall while noindex or robots.txt exclusions grow",
          ],
          ["Leads rise and fall with traffic", "Traffic holds, but form or call leads drop"],
        ],
      },
    },
    {
      heading: "First 30 minutes: robots.txt, noindex and staging leftovers",
      definition:
        "Check for accidental blocking first. A single noindex tag or robots.txt rule carried over from staging can hide a whole site from search, and it takes minutes to fix.",
      body: [
        "Development sites are usually hidden from search engines, and the settings that hide them sometimes survive launch. Check these before anything else:",
      ],
      bullets: [
        'Open yourdomain.com/robots.txt and look for "Disallow: /" or rules that block important folders.',
        'View the source of a few key pages and search for "noindex" in the robots meta tag. Check the HTTP response headers for an X-Robots-Tag as well.',
        "On WordPress, make sure the setting that discourages search engines from indexing the site is switched off.",
        "Check canonical tags: they should point to the live domain, not the staging domain.",
        "Make sure the live site isn't behind a password or serving a login page to crawlers.",
      ],
      subsections: [
        {
          heading: "Confirm it in Search Console",
          body: [
            "Open the [Page indexing report](https://support.google.com/webmasters/answer/7440203) and look at why pages aren't indexed. \"URL marked 'noindex'\" and \"URL blocked by robots.txt\" are the first two reasons to check. Google's help page also notes that a drop in indexed pages without a matching rise in errors can mean you're blocking existing pages through robots.txt, noindex or a required login.",
            "Keep in mind that robots.txt and noindex do different jobs. Google's [robots.txt documentation](https://developers.google.com/search/docs/crawling-indexing/robots/intro) says robots.txt is not a mechanism for keeping a page out of Google, and that a blocked URL can still appear in results without a description. After you fix a page, run a live test in URL Inspection to confirm indexing is allowed, then request indexing.",
          ],
        },
      ],
    },
    {
      heading: "Redirects: find old URLs that now 404 and rebuild the redirect map",
      definition:
        "A redirect map lists every old URL and the single new URL that best replaces it, served with a permanent server-side redirect.",
      body: [
        "Old URLs that now return 404 are the most common cause of lasting losses. Links from other sites, bookmarks and Google's index all point at the old addresses, and without redirects the value attached to those pages has nowhere to go.",
        'In the Page indexing report, "Not found (404)" lists URLs Google requested and couldn\'t find, and "Redirect error" flags chains that are too long, loops and broken redirect targets. If the old site is gone, rebuild the full list of old URLs from as many of these sources as you can:',
      ],
      table: {
        caption: "Where to find old URLs when the old site is gone",
        headers: ["Source", "What it gives you", "Limits"],
        rows: [
          [
            "Search Console Performance report",
            "Pages that earned clicks and impressions before launch; compare date ranges and export by page",
            "Only pages that appeared in Google results",
          ],
          [
            "Page indexing report",
            "Old URLs Google now sees as 404s or redirect errors",
            "Only URLs Google has tried to crawl",
          ],
          [
            "Old XML sitemap",
            "The pages the old site told search engines about",
            "Only if someone saved a copy",
          ],
          [
            "Internet Archive's Wayback Machine",
            "Archived copies of old pages, their URLs and their content",
            "Coverage of small sites is uneven",
          ],
          [
            "Backlink tool exports",
            "Old URLs that other sites link to",
            "Only as complete as the tool's crawl",
          ],
          [
            "Analytics landing page report",
            "Old URLs that received visits",
            "Only for the period the old tracking ran",
          ],
          [
            "Old site backup or database",
            "Every page and post URL",
            "Needs access to the old hosting or files",
          ],
        ],
      },
      subsections: [
        {
          heading: "How to write the redirects",
          body: [
            "Map each old URL to its closest equivalent page, not to the homepage. Google's [redirect documentation](https://developers.google.com/search/docs/crawling-indexing/301-redirects) recommends a permanent server-side redirect (a 301 or 308) whenever you change a page's URL, and says to use JavaScript redirects only if you can't use server-side or meta refresh redirects.",
            "Avoid chains, where an old URL redirects to another old URL before reaching the new page. Update the old redirects so each one points straight to the final destination. Google's site move guide says to keep redirects for as long as possible, generally at least one year, so it can transfer signals to the new URLs.",
          ],
        },
      ],
    },
    {
      heading: "Content that went missing in the redesign",
      definition:
        "Redesigns often cut words to make pages look cleaner, and the text that went was sometimes the text that ranked.",
      body: ["Look for these patterns on the pages that lost the most clicks:"],
      bullets: [
        "Service pages shortened to a headline and three bullets.",
        'Separate service pages merged into one general "Services" page.',
        "FAQ sections removed, or moved into widgets that only load after a click.",
        "Location or service-area pages dropped.",
        "Blog posts left behind in the migration.",
        "Case studies, bios or resource pages removed.",
      ],
      subsections: [
        {
          heading: "Compare old and new, page by page",
          body: [
            "Pull up the old version of each affected page in the Wayback Machine or a saved crawl and put it next to the new one. If the old page answered questions the new one doesn't, restore that content in a form that fits the new design. If two services were merged into one page, consider splitting them again so each has a page that matches what people search for.",
          ],
        },
      ],
    },
    {
      heading: "Internal links, navigation and orphaned pages",
      definition:
        "Internal links tell search engines which pages matter. A simpler menu can quietly demote pages that used to be one click from the homepage.",
      body: [
        "New designs often trim navigation to a few items and drop footer links. Pages that were linked from every page may now be linked from nowhere, which makes them harder to discover and signals that they matter less.",
        "Crawl the new site with a site crawler and list important pages with few or no internal links. Add them back through navigation, related-service blocks, location lists and in-text links from relevant pages. Then check that the XML sitemap lists every page you want indexed and none you don't, and resubmit it in Search Console.",
      ],
    },
    {
      heading: "Titles, meta, headings and structured data that got reset",
      definition:
        "Template defaults can overwrite the page-specific titles, descriptions, headings and structured data that the old site had built up.",
      body: ["Check the pages that lost traffic for these resets:"],
      bullets: [
        'Titles replaced by a "Page name | Brand" pattern that drops the service and the city.',
        "Meta descriptions left blank or duplicated across pages.",
        "Missing or duplicate H1 headings from the new templates.",
        "Structured data such as LocalBusiness, FAQ or breadcrumb markup not carried over.",
        "Image alt text lost when media was re-uploaded.",
        "Open Graph tags missing, so shared links show no image or the wrong title.",
      ],
      subsections: [
        {
          heading: "Restore what worked",
          body: [
            "Pull the old titles and descriptions from the Wayback Machine or a pre-launch crawl and restore the ones that performed, adjusted to the new page content. Recreate structured data at the template level so every page of a type gets it automatically.",
          ],
        },
      ],
    },
    {
      heading: "Speed and Core Web Vitals regressions",
      definition:
        "A heavier design can slow pages enough to hurt both rankings and conversions, especially on mobile.",
      body: [
        "Large hero videos, sliders, animation libraries, extra fonts and tracking scripts are the usual culprits. Google's [Core Web Vitals](https://web.dev/articles/vitals) targets are Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads on mobile and desktop.",
        "If the new templates miss those targets, fix the templates rather than individual pages: resize and compress images, prioritize the main image, remove scripts nobody uses, and reserve space for elements that load late so the layout doesn't jump.",
      ],
    },
    {
      heading: "When traffic is fine but leads dropped",
      definition:
        "If sessions are steady but calls and form leads fell, the problem is usually in the conversion path or the tracking, not in search.",
      body: ["Work through this list before you touch anything SEO-related:"],
      bullets: [
        "Submit every form and confirm the email notification and the CRM entry both arrive.",
        "Check spam filters and the notification address, which sometimes still points to a developer's inbox after launch.",
        "Confirm phone numbers, including call tracking numbers, are correct and tappable on mobile.",
        "Check that the thank-you page URLs your conversion tags relied on still exist.",
        "Verify that Google Analytics, Google Ads and Meta tags fire on the new templates.",
        "Check whether a new consent banner changed which tags fire, and whether that matches what you intended.",
        "Compare conversion rates by page, not only as a site-wide total.",
      ],
      subsections: [
        {
          heading: "Go deeper on lead problems",
          body: [
            "If the tracking checks out and leads are still down, the issue may be the pages themselves: weaker calls to action, longer forms or missing trust signals. Our guide to a [website that isn't generating leads](/blog/website-not-generating-leads) covers the usual causes.",
          ],
        },
      ],
    },
    {
      heading: "How long does recovery take, and what should you monitor weekly?",
      definition:
        "Once the causes are fixed, most recovery happens as Google recrawls the affected pages. For a small or medium site, expect weeks rather than days.",
      body: [
        "Google's site move guide says a small to medium-sized site can take a few weeks for most pages to move, and larger sites take longer. After fixing issues in the Page indexing report, click Validate fix; Google's help page says validation typically takes up to about two weeks, but in some cases can take much longer.",
        "Should you roll back to the old site? Only if the old site still exists intact, the new one has fundamental problems you can't fix quickly, and you can restore the old URLs exactly. A rollback followed by a second relaunch is two migrations, so in most cases fixing forward is faster.",
      ],
      subsections: [
        {
          heading: "Weekly monitoring checklist",
          body: ["Check these every week until the numbers settle:"],
          bullets: [
            "Clicks and impressions by page, compared with the same period before launch.",
            "Page indexing report: 404s, noindex, robots.txt blocks and redirect errors.",
            "Your most important old URLs: still redirecting to the right page in a single hop.",
            "Rankings for your main service and location terms.",
            "Form submissions and calls, compared with before launch.",
            "The Core Web Vitals report for the new templates.",
          ],
        },
      ],
    },
    {
      heading: "A pre-launch checklist so it doesn't happen next time",
      definition:
        "Most redesign traffic losses are preventable with a few hours of preparation before launch day.",
      body: ["Run this before any redesign or platform switch goes live:"],
      bullets: [
        "Crawl the old site and save the full URL list with titles, meta descriptions and structured data.",
        "Export top pages from Search Console and the URLs other sites link to.",
        "Build the redirect map and test it on staging.",
        "Remove staging noindex tags, robots.txt blocks and passwords at launch, then check again an hour later.",
        "Compare the content of key pages, old against new.",
        "Test every form, phone link and conversion tag.",
        "Submit the new XML sitemap in Search Console.",
        "Keep a full backup of the old site where you can reach it.",
      ],
      callout: {
        title: "From the studio",
        body: "Before a relaunch, save the old site's full URL list and a copy of its XML sitemap somewhere outside the old hosting account, such as a shared drive. Hosting often gets cancelled the week after launch, and that list is the one thing you can't rebuild perfectly later. It takes minutes and turns any post-launch problem into a lookup instead of an investigation.",
      },
      subsections: [
        {
          heading: "Plan the next one properly",
          body: [
            "If you're planning a redesign, budget these steps as their own line item; our guide to [website redesign costs](/blog/website-redesign-cost-small-business) shows where they fit. If you're already in recovery, Pixel2Tech's [SEO and search growth](/services/seo-and-search-growth) team can run this triage on your site and rebuild the redirect map with you.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does it take to recover SEO after a website redesign?",
      a: "Once the causes are fixed, recovery follows Google's recrawling. Google says a small to medium-sized site can take a few weeks for most pages to move to new URLs, and larger sites take longer. Validating fixes in Search Console typically takes up to about two weeks, sometimes much longer. Recovery that stalls after that usually means a cause is still unfixed.",
    },
    {
      q: "Is it normal for traffic to drop after launching a new website?",
      a: "Some fluctuation is normal. Google notes that sites may see ranking changes while it recrawls and reindexes after significant changes. What isn't normal is a drop concentrated on specific pages, old URLs returning 404 errors, or pages excluded by noindex or robots.txt. Check the Page indexing report and compare clicks by page before deciding it will settle on its own.",
    },
    {
      q: "How do I find old URLs if the old site is gone?",
      a: "Combine several sources: the Search Console Performance report for pages that earned clicks, the Page indexing report for URLs now returning 404, any saved XML sitemap, the Internet Archive's Wayback Machine, backlink tool exports, your analytics landing page report and any backup of the old site's files or database. Merge them into one list and remove duplicates.",
    },
    {
      q: "Should I roll back to the old website?",
      a: "Rarely. Rolling back only makes sense if the old site is fully intact, you can restore its exact URLs, and the new site has problems you can't fix quickly. Otherwise a rollback and a later relaunch mean two migrations and two rounds of recrawling. Fixing redirects, noindex tags and missing content on the new site is usually faster.",
    },
    {
      q: "How long should 301 redirects stay in place?",
      a: "Google's site move guidance says to keep redirects for as long as possible, generally at least one year, so it can transfer signals to the new URLs, including recrawling and reassigning links from other sites. There's rarely a reason to remove them after that, because other sites and old bookmarks can keep sending visitors to the old URLs long after the move.",
    },
  ],
  sources: [
    {
      label: "Google Search Central: Site moves with URL changes",
      href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    },
    {
      label: "Google Search Central: Redirects and Google Search",
      href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
    },
    {
      label: "Search Console Help: Page indexing report",
      href: "https://support.google.com/webmasters/answer/7440203",
    },
    {
      label: "Google Search Central: Introduction to robots.txt",
      href: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
    },
    {
      label: "web.dev: Web Vitals",
      href: "https://web.dev/articles/vitals",
    },
  ],
  internalLinks: [
    {
      label: "Website redesign cost for small businesses",
      to: "/blog/website-redesign-cost-small-business",
    },
    { label: "WooCommerce to Shopify migration", to: "/blog/woocommerce-to-shopify-migration" },
    { label: "Why your website isn't generating leads", to: "/blog/website-not-generating-leads" },
    {
      label: "The biggest SEO mistakes businesses make",
      to: "/blog/biggest-seo-mistakes-businesses-make-2026",
    },
    { label: "SEO and search growth services", to: "/services/seo-and-search-growth" },
  ],
  cta: {
    title: "Lost traffic after a relaunch and not sure why?",
    body: "Share your launch date and Search Console access. We'll run the triage above and tell you which fixes should recover the most traffic first.",
  },
};

export default post;
