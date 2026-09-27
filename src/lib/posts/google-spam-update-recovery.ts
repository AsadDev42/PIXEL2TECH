import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Google September 2026 Spam Update: Diagnose and Recover",
  metaDescription:
    "Google's September 2026 spam update runs into early October. How to tell a spam-update hit from other drops, which tactics are at risk and how to recover.",
  keywords: [
    "google spam update recovery",
    "google september 2026 spam update",
    "traffic drop after google spam update",
    "scaled content abuse recovery",
    "doorway pages google penalty",
    "spam update vs core update",
    "when to use google disavow tool",
  ],
  keyTakeaways: [
    "Google started the September 2026 spam update on September 24, 2026. It is global, is expected to take about two weeks, and is the fourth spam update of 2026.",
    "Match the first day of your drop to the rollout windows: September 24 onward points to this update, August 18 to 21 to the August spam update, and May 21 to June 2 to the May core update. A drop in analytics with steady Search Console clicks is usually a tracking problem.",
    "The pages most at risk are the ones cheap SEO packages produce: mass AI articles, near-duplicate city pages, content on bought expired domains and paid links.",
    "Recovery comes from fixing or removing what breaks Google's spam policies, not from a disavow file. Google only recommends disavowing when you have many spammy links and a manual action is likely or already in place.",
    "Google says its systems learn over a period of months that a site complies, so plan for a slow recovery and judge progress by months, not days.",
  ],
  content: [
    {
      heading: "What did Google release in September 2026?",
      definition:
        "Google's September 2026 spam update is an automated change to how Google Search detects pages that break its spam policies. It started on September 24, 2026, applies to all regions and languages, and Google expects it to take about two weeks to finish, so it runs into early October.",
      body: [
        "Google posted the update on its [Search Status Dashboard](https://status.search.google.com/summary) on September 24, and Search Engine Roundtable reported the start at around noon Eastern. It is the fourth spam update of the year, after the March, June and August spam updates.",
        "The timing matters for diagnosis. The August 2026 spam update started on August 18 and the dashboard shows it finishing in under three days. The May 2026 core update started on May 21 and took almost 12 days. Three separate Google changes in four months means a drop that looks obvious often has a different cause than the owner assumes.",
        "A spam update is different from a core update. A core update reassesses how helpful and relevant pages are across the web. A spam update targets pages that break specific rules. If this one hit you, the fix is to stop breaking those rules, and that usually means undoing work someone was paid to do.",
      ],
    },
    {
      heading: "Is it the spam update, or something else?",
      definition:
        "Match the first day of the drop in Search Console to Google's rollout dates, then rule out tracking, site changes and seasonality before you blame the update.",
      body: [
        "Open the Performance report in Search Console, set the range to the last 16 months, and find the first day clicks and impressions fell. Google's own guide to [debugging search traffic drops](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) recommends that 16-month view, because it shows whether the same dip happened last year.",
        "Then compare that date to what else happened on your side. A new theme, a plugin update, a migration or a switch to a new analytics setup can all produce a drop that lines up with an update by coincidence. If you redesigned recently, our [redesign traffic recovery checklist](/blog/website-traffic-drop-after-redesign) covers that case.",
      ],
      table: {
        caption: "Date-matched diagnostic for drops in 2026",
        headers: ["What you see", "Most likely cause", "What to check next"],
        rows: [
          [
            "Clicks and impressions fall from September 24 onward, concentrated on groups of similar pages",
            "September 2026 spam update",
            "Which page types lost the most: city pages, blog batches, pages about unrelated topics",
          ],
          [
            "Drop starts between August 18 and 21",
            "August 2026 spam update",
            "Same page-type check; this rollout was already finished before September",
          ],
          [
            "Gradual slide between May 21 and early June",
            "May 2026 core update",
            "Content quality and competitors, not spam cleanup",
          ],
          [
            "Analytics shows fewer visits but Search Console clicks are steady",
            "Tracking or consent-banner change",
            "Tag setup, consent mode and recent script changes",
          ],
          [
            "Drop starts on the day of a launch, migration or plugin update",
            "Technical or redesign problem",
            "Redirects, noindex tags, robots.txt and indexing report",
          ],
          [
            "Same dip appears in the same weeks last year",
            "Seasonality",
            "Google Trends for your core services and your year-over-year view",
          ],
          [
            "Message in the Manual Actions report",
            "Manual action by a Google reviewer",
            "Fix the listed issue, then file a reconsideration request",
          ],
        ],
      },
      subsections: [
        {
          heading: "Don't act until the rollout finishes",
          body: [
            "Rankings move around during a rollout. Deleting a batch of pages on day three because traffic dipped can remove pages that would have been fine. Use the rollout period to collect data and build the page inventory below, then make decisions once the dashboard shows the update as complete.",
          ],
        },
      ],
    },
    {
      heading: "Which tactics are most likely to be hit?",
      definition:
        "Spam updates enforce Google's written spam policies, and a handful of those policies line up almost exactly with what low-cost SEO packages deliver.",
      body: [
        "Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) are specific. Scaled content abuse, for example, is defined as many pages generated mainly to manipulate rankings rather than help users, whether they're written by AI, by people or by both. The method isn't the problem. The purpose and the value are.",
        "Here is how each relevant policy maps to what a typical vendor builds for a local business or a small store.",
      ],
      table: {
        caption: "Google spam policy vs what a cheap SEO package usually delivers",
        headers: ["Spam policy", "What the vendor actually built", "Risk sign on your site"],
        rows: [
          [
            "Scaled content abuse",
            "Dozens of AI blog posts a month on loosely related keywords, published without review",
            "Posts nobody on your team has read; many cover topics you don't sell",
          ],
          [
            "Doorway abuse",
            "One page per city or suburb with the same text and a swapped place name",
            "Dozens of location pages that differ only in the town name and a stock photo",
          ],
          [
            "Expired domain abuse",
            "A bought old domain, sometimes a former nonprofit or school, filled with content pointing to you",
            "Backlinks from a site whose history has nothing to do with your trade",
          ],
          [
            "Site reputation abuse",
            "Paid posts on large third-party sites that exist mainly to borrow their ranking signals",
            "Your service described on a news or coupon site in pages the host didn't write",
          ],
          [
            "Link spam",
            "Monthly link packages, guest posts on link-selling blogs, exchanges and forum signatures",
            "Invoices that list a number of links per month",
          ],
        ],
      },
      subsections: [
        {
          heading: "City pages and AI content are the common local-business cases",
          body: [
            "For contractors, law firms and dental practices, the two patterns that show up most often are near-duplicate location pages and blog volume nobody reads. Google's doorway policy describes pages built to rank for similar searches that funnel people to one destination. Our guide to [service area pages that avoid doorway patterns](/blog/service-area-pages-for-contractors) shows what a defensible location page contains, and [why AI content often fails to rank](/blog/ai-seo-mistakes) covers the volume problem.",
          ],
        },
      ],
    },
    {
      heading: "What did your SEO vendor actually build?",
      definition:
        "Before you can clean anything up, you need a complete list of the pages and links created on your behalf. Ask your vendor for it in writing this week.",
      body: [
        "Many owners have never seen the full output of their SEO retainer. Monthly reports show rankings and a traffic chart, not the individual posts or the link list behind them. Send your vendor a short, specific request:",
      ],
      bullets: [
        "Every URL they created or rewrote on your site, with the publish date and whether AI tools produced the first draft.",
        "Every location or service-area page, with a note on what is unique to each one.",
        "A list of every backlink they built or paid for, with the linking domain, the date and the cost if it was paid.",
        "Any domains they bought or run that link to you, including private blog networks.",
        "Any content placed on third-party sites under your name.",
        "Admin access to your Search Console property, if you don't have it already.",
      ],
      subsections: [
        {
          heading: "Build your own inventory in parallel",
          body: [
            "Don't rely only on the vendor's answer. Export all pages with clicks and impressions from Search Console for the six months before September 24 and the period since. Add a column for page type, one for who wrote it, and one for the change in clicks. The pattern usually becomes clear within an afternoon: the losses sit in one or two page types.",
            "For links, export the Links report in Search Console. It won't list everything, but a long tail of domains with no connection to your industry, or anchor text that exactly matches your money keywords, confirms what the vendor was doing.",
          ],
        },
      ],
    },
    {
      heading: "Cleanup priorities: consolidate, improve or remove",
      definition:
        "Deal with each page type as a group. Keep and improve pages that serve real customers, merge near-duplicates into stronger pages, and remove pages that exist only to rank.",
      body: [
        "A useful test for every page: would you send a customer to it on purpose? If the answer is no, it probably shouldn't be indexed.",
      ],
      bullets: [
        "Improve location pages for areas you actually serve by adding real detail: jobs completed there, local permits, travel times, photos from that area and staff who cover it.",
        "Consolidate near-duplicate city pages into a single service-area page or a few regional pages, and redirect the old URLs to the closest match.",
        "Remove AI posts on topics you don't sell or can't speak to with authority. Return a 404 or 410, or redirect only when a genuinely equivalent page exists.",
        "Rewrite the posts that attract real leads, with first-hand detail your team can supply, and put a named author on them.",
        'Stop any monthly link-buying immediately, and ask for paid placements to be removed or marked with rel="sponsored".',
      ],
      subsections: [
        {
          heading: "When to use the disavow tool",
          body: [
            "Most sites affected by an algorithmic spam update don't need it. Google's [disavow guidance](https://support.google.com/webmasters/answer/2648487) says to use it only when you have a considerable number of spammy, artificial or low-quality links and they have caused, or are likely to cause, a manual action. Google also warns it can hurt performance if used incorrectly.",
            "So check the Manual Actions report first. If there is a link-related manual action, or you have clear evidence of a paid link scheme, a disavow file is reasonable. If there's neither, spend the time on your pages instead.",
          ],
        },
      ],
      callout: {
        title: "From the studio",
        body: "When we run a cleanup, we sort the page inventory into keep, merge and remove before anyone touches the CMS, and we get the owner to sign off on the remove list. Owners know which pages bring real calls. Then we make the changes in one batch, update the sitemap, and log the date so the recovery can be measured against it. Scattered edits over six weeks make it impossible to tell what helped.",
      },
    },
    {
      heading: "What does recovery look like, and why can it take months?",
      definition:
        "Recovery happens when Google's automated systems see over time that the site now complies with its spam policies. Google says that learning takes a period of months, and lost link value does not come back.",
      body: [
        "Google's page on [spam updates](https://developers.google.com/search/updates/spam-updates) is direct about this. Making changes may help a site improve if its automated systems learn over a period of months that the site complies with the spam policies. That's the realistic frame: months, not a week after you delete pages.",
        "Two more points owners often miss. First, when a link spam update neutralizes bought links, Google says any ranking benefit from those links can't be regained. The rankings they propped up weren't really yours. Second, an algorithmic demotion doesn't send you a message. The Manual Actions report stays empty, and nobody at Google files a reconsideration request for you.",
        "What progress usually looks like: impressions stabilize first, then the pages you improved start to pick up queries again. Track the kept pages as their own group in Search Console, and ignore daily swings.",
      ],
    },
    {
      heading: "Questions to ask before hiring anyone to fix a penalty",
      definition:
        "Anyone promising a fast penalty removal after an algorithmic spam update is either misreading the problem or selling another shortcut.",
      body: [
        "Some vendors will now sell recovery to the same businesses their packages put at risk. Ask these questions before you sign:",
      ],
      bullets: [
        "Is this a manual action or an algorithmic change, and how did you confirm it?",
        "Which specific spam policy do you think the site breaks, and on which pages?",
        "What will you remove, merge or rewrite, and who writes the replacement content?",
        "Do you plan to build new links during the recovery? If yes, how, and who pays the linking sites?",
        "What timeline do you expect, and how does it match Google's statement that recovery can take months?",
        "Will I own the page inventory, link export and change log when the work ends?",
      ],
      subsections: [
        {
          heading: "Red flags",
          body: [
            "A guaranteed recovery date. A disavow file as the main deliverable with no manual action in place. A plan that replaces deleted city pages with a new batch of the same. Any fix that involves a new domain or redirecting to one.",
          ],
        },
      ],
    },
    {
      heading: "When to get a professional spam-recovery audit",
      body: [
        "Do it yourself if the drop is small, the affected pages are obvious, and your team can write the replacement content. Bring in help when the drop hits your lead pages, when you can't get a clear answer from your vendor about what was built, when links from bought domains are involved, or when you need to decide whether to restructure the site rather than patch it.",
        "Pixel2Tech's [SEO and search growth](/services/seo-and-search-growth) team runs spam-policy audits for US service businesses and stores: a full page inventory, a link review, a keep-merge-remove plan and a dated change log. When the right answer is a rebuilt service-area structure, our [website development](/services/website-development) team can build it on the same plan.",
      ],
    },
  ],
  faqs: [
    {
      q: "When did the Google September 2026 spam update start?",
      a: "It started on September 24, 2026, according to Google's Search Status Dashboard. Google said it would take about two weeks to roll out and that it applies globally. It is the fourth spam update of 2026, after the March, June and August spam updates.",
    },
    {
      q: "How do I know if the spam update hit my site?",
      a: "Find the first day your clicks and impressions fell in the Search Console Performance report. If the drop starts on or after September 24 and is concentrated on a type of page, such as city pages or a batch of AI articles, the spam update is the likely cause. Rule out tracking changes, site launches and seasonality first.",
    },
    {
      q: "How long does it take to recover from a Google spam update?",
      a: "Google says changes may help a site improve if its automated systems learn over a period of months that the site complies with its spam policies. Plan in months. Rankings that depended on links Google has neutralized won't come back, because Google says that benefit can't be regained.",
    },
    {
      q: "Should I disavow links after a spam update?",
      a: "Usually not. Google recommends the disavow tool only when you have a considerable number of spammy, artificial or low-quality links and they have caused or are likely to cause a manual action. Check the Manual Actions report first, and remove bad links at the source where you can.",
    },
    {
      q: "Is AI-written content automatically against Google's spam policies?",
      a: "No. Google's scaled content abuse policy targets many pages generated mainly to manipulate rankings rather than help users, however they were produced. AI content becomes a problem when it's published in bulk with little value. Reviewed, useful content written with AI assistance isn't the target.",
    },
  ],
  sources: [
    {
      label: "Search Engine Roundtable: Google September 2026 spam update rolling out",
      href: "https://www.seroundtable.com/google-september-2026-spam-update-42163.html",
    },
    {
      label: "Google Search Status Dashboard: Ranking updates summary",
      href: "https://status.search.google.com/summary",
    },
    {
      label: "Google Search Central: Spam policies for Google web search",
      href: "https://developers.google.com/search/docs/essentials/spam-policies",
    },
    {
      label: "Google Search Central: Google Search spam updates and your site",
      href: "https://developers.google.com/search/updates/spam-updates",
    },
    {
      label: "Google Search Console Help: Disavow links to your site",
      href: "https://support.google.com/webmasters/answer/2648487",
    },
    {
      label: "Google Search Central: Debugging drops in Google Search traffic",
      href: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops",
    },
  ],
  internalLinks: [
    { label: "SEO and search growth services", to: "/services/seo-and-search-growth" },
    { label: "Website development services", to: "/services/website-development" },
    {
      label: "Service area pages for contractors without doorway pages",
      to: "/blog/service-area-pages-for-contractors",
    },
    { label: "Why your AI content is not ranking", to: "/blog/ai-seo-mistakes" },
    {
      label: "Traffic dropped after a website redesign? A recovery checklist",
      to: "/blog/website-traffic-drop-after-redesign",
    },
  ],
  cta: {
    title: "Not sure what your SEO vendor built?",
    body: "Share your Search Console access and your vendor's reports. We'll inventory the pages and links, match your drop to Google's update dates, and give you a keep, merge and remove plan you can act on.",
  },
};

export default post;
