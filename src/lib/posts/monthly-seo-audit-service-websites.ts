import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "A Monthly SEO Audit for Service Websites: Catch Drops Before They Cost Enquiries",
  metaTitle: "A Monthly SEO Audit for Service Websites",
  metaDescription: "SEO drops are cheap to fix when you catch them early and expensive when you find them months later. A monthly audit checklist for service websites, in about an hour.",
  ogTitle: "A Monthly SEO Audit for Service Websites: Catch Drops Before They Cost Enquiries",
  ogDescription: "SEO drops are cheap to fix when you catch them early and expensive when you find them months later. A monthly audit checklist for service websites, in about an hour.",
  keywords: [
    "monthly SEO audit",
    "SEO audit service websites",
    "website SEO checklist",
    "catch SEO drops",
    "Pixel2Tech SEO"
  ],
  keyTakeaways: [
    "Audit the pages that bring enquiries first, not the whole site at once.",
    "Watch for movement over months, not panic over one week of change.",
    "Broken links, missing pages, and lost rankings are the three things to check every month.",
    "Review the newest content for gaps, and update the pages that are closest to ranking.",
    "End every audit with three fixes, done that week, not a long report that nobody reads."
  ],
  faqs: [
    {
      q: "How long does a monthly audit take?",
      a: "About an hour for a small service website, once the routine is set. The first audit takes longer, because you are building the page list and the sheet. After that, it is mostly checking and noting changes.",
    },
    {
      q: "What tools do we need?",
      a: "A free search console account and a basic analytics account cover most of it. A free link checker helps with broken links. Paid SEO tools add convenience, but they are not required for a monthly audit of a small site.",
    },
    {
      q: "What if rankings dropped sharply?",
      a: "Check the simple causes first: a recent site change, a broken page, a hosting problem, or a large update to the site. If nothing changed on your side, look at what competitors published. A sharp drop with no site change usually means the competition improved, not that your site broke.",
    },
    {
      q: "Should we audit competitors too?",
      a: "Briefly, once a quarter. Note which competitor pages rank above yours for your main searches, and what those pages do better. A monthly competitor audit is too much; a quarterly look keeps the team honest without turning the audit into research.",
    },
  ],
  internalLinks: [
    {
      label: "Search Intent for Service Pages: Match the Page to What the Customer Actually Wants",
      to: "/blog/search-intent-service-pages",
    },
    {
      label: "How to Get Cited by AI Search: A Practical Guide for Service Websites",
      to: "/blog/get-cited-ai-search-service-websites",
    },
  ],
  cta: {
    title: "Catch SEO drops before they cost enquiries",
    body: "Pixel2Tech helps service businesses grow through search, from monthly audits to the content and pages that turn rankings into enquiries. If your enquiries have slowed and nobody knows why, an SEO audit is a practical place to start.",
  },
  content: [
    {
      heading: "Start with the pages that bring enquiries",
      body: [
        "Most SEO problems do not arrive with an alarm. A page slips a few positions, a link breaks, a service page stops appearing for its main search, and nobody notices until the enquiries slow down. A monthly audit catches those small changes while they are still small. It takes about an hour, it needs no specialist tools, and it is the cheapest SEO work a service business can do.",
        "Open the list of pages that actually bring visitors and enquiries: the homepage, the main service pages, and the contact page. Check that each one still ranks for the search it was built for, and that its title and description still match what the page offers. A page that drifts away from its search is a page that slowly stops working.",
        "Note the position of each page, in a simple sheet, month by month. One month of data tells you little. Six months tells you whether a page is climbing, steady, or sliding. If a page has slid for two months in a row, it goes on the fix list. If it has climbed, note what changed, so the team can repeat it. For help matching pages to real searches, read [Search Intent for Service Pages](/blog/search-intent-service-pages)."
      ],
    },
    {
      heading: "Check rankings and traffic for movement, not panic",
      body: [
        "Rankings move every week, and most movement means nothing. A page that drops two positions for a few days is normal. A page that drops for a whole month, or a site that loses traffic across several pages at once, is a signal worth investigating. The audit is about telling the difference.",
        "Look for patterns, not single numbers. Did several pages drop at the same time? That points to a site wide cause, such as a slowdown, a broken template, or a change in how the site is built. Did one page drop while others held steady? That points to that page: its content may be outdated, or a competitor may have published something better. Write down the pattern before deciding the fix."
      ],
    },
    {
      heading: "Look for broken links and pages that vanished",
      body: [
        "Click through the main pages once a month and look for what is broken. Links that lead nowhere, images that do not load, and buttons that do nothing all hurt visitors and search engines. A free link checker or a manual click through of the ten most important pages is enough for a small service site.",
        "Also check that no page has vanished. A redesign, a plugin update, or an accidental delete can remove a page that was bringing traffic, and the site will not warn you. Compare the list of live pages against last month's list. If a page is missing, restore it or redirect it to the closest live page, and do it the same day. A missing page that stays missing for months loses its ranking for good."
      ],
    },
    {
      heading: "Review the newest content for gaps",
      body: [
        "Look at what was published in the last month and ask three questions. Does it answer a real search? Does it link to the service page it supports? Does it have a clear next step for the reader? Content that fails those checks is content that will not rank or convert, however well it is written.",
        "Also look for pages that are close to ranking but not quite there: pages on the second page of results for their main search. A small update, a clearer heading, or a better internal link can often move those pages up. Those near misses are the best return on an hour of audit work, because the page is already almost there. For writing that AI search can cite, read [How to Get Cited by AI Search](/blog/get-cited-ai-search-service-websites)."
      ],
    },
    {
      heading: "Write down three fixes and do them this week",
      body: [
        "An audit that ends in a long report is an audit that changes nothing. End every audit with exactly three fixes, written down with an owner and a date this week. A broken link fixed, a page title improved, an outdated paragraph rewritten. Small, finished fixes beat a long list of planned ones.",
        "Keep the list from month to month, so the team can see what was fixed and what is still open. If the same fix appears three months in a row, it is not a fix, it is a process problem, and the process needs changing. The audit is only useful if the fixes actually happen."
      ],
    },
  ],
};

export default post satisfies PostBody;
