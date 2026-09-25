import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Duplicate Content: Collection, Tag & Filter URLs",
  metaDescription:
    "Shopify creates duplicate URLs by design: collection-scoped product links, tag pages and filter parameters. See which URL Google chose and fix the rest.",
  keywords: [
    "shopify duplicate content",
    "shopify canonical tags",
    "shopify collections products url",
    "within collection liquid filter",
    "shopify filter urls seo",
    "shopify tag pages noindex",
    "google chose different canonical shopify",
  ],
  keyTakeaways: [
    "Shopify creates duplicate URLs by design: a product can load at /products/handle and at /collections/any-collection/products/handle, and tags, filters, sort orders and pagination add more collection URLs.",
    "Shopify themes typically point the canonical tag at the clean /products/ URL, so the bigger problem is internal links. If product cards use the Liquid 'within' filter, your own site keeps linking to the duplicates.",
    "Before changing anything, run Search Console's URL Inspection tool and compare the user-declared canonical with the Google-selected canonical.",
    "Don't point paginated collection pages at page 1 or use robots.txt as a canonical tool. Google advises against both.",
    "Re-check after every theme update, because a new theme version or app can bring collection-scoped product links back.",
  ],
  content: [
    {
      heading: "Does Shopify create duplicate content?",
      definition:
        "Yes, by design. A Shopify product can load at /products/handle and at /collections/any-collection/products/handle, and collections spawn extra URLs for tags, filters, sort orders and pages. Shopify themes add canonical tags to most of these, so the real work is checking which URL Google chose and cleaning up your internal links.",
      body: [
        "Duplicate URLs aren't a penalty. Google's canonicalization documentation says some duplicate content on a site is normal and isn't a violation of its spam policies. Google groups duplicates, picks one URL as the canonical and usually shows that one in results.",
        "The cost is less dramatic but real. Signals such as links get split across several URLs unless you consolidate them. Crawlers spend time on variations instead of new products. And sometimes Google picks a URL you didn't want, such as a collection-scoped product path, as the canonical.",
        'To see what a default setup does, we checked Shopify\'s public Dawn theme demo store in September 2026. A collection-scoped product URL declared the plain /products/ URL as its canonical. A collection URL with a filter and a sort order declared the unfiltered collection as canonical. Page 2 of a collection declared itself canonical. A single-tag collection URL also declared itself canonical. Your theme may differ, so check yours by viewing the page source and searching for rel="canonical".',
      ],
    },
    {
      heading: "Type 1: /collections/x/products/y product paths",
      body: [
        "Shopify's Liquid 'within' filter generates a product URL in the context of a collection, for example /collections/sale-potions/products/draught-of-immortality. Shopify's own reference cautions that the standard product page and the collection-scoped version have the same content on separate URLs, and asks developers to consider the SEO implications.",
        "Many themes use it in product cards so the product page can show a collection-aware breadcrumb or 'back to collection' link. The side effect: every product listed in five collections has five extra URLs, and your internal links point at them.",
        "In a typical theme the canonical tag on those pages still points to /products/handle, which is what you want. But Google's documentation on consolidating duplicate URLs treats canonicals as one signal among several and recommends linking internally to the canonical URL. When thousands of internal links point at the collection paths, you're sending mixed signals.",
        "Variant links are a related case. Selecting a size or color usually adds ?variant= and a variant ID to the product URL. On the Dawn demo, a variant URL declared the plain product URL as its canonical, so Google should treat it as the same page. Check that your theme does the same, especially if a developer has customized the product template or an app builds its own variant links.",
        "A quick way to size the problem on your own store: open a collection page, hover over a few product cards and look at the link in your browser's status bar. If it starts with /collections/, your product cards use the 'within' filter.",
      ],
    },
    {
      heading: "Type 2: tag-filtered collection pages",
      body: [
        "Product tags create collection URLs such as /collections/shirts/linen. Combining tags joins them with a plus sign, as in /collections/all/handbag+tote. On the Dawn demo, single-tag pages declared themselves canonical, so each one is a candidate for indexing even though it's mostly a subset of the parent collection.",
        "The multi-tag versions are less of a worry. The default robots.txt on the Shopify stores we checked in September 2026, including the Dawn demo, disallowed collection URLs containing a plus sign, so crawlers don't fetch those combinations.",
        "Single-tag pages need a decision. If a tag page matches something people search for and you can give it a unique title, description and intro copy, turn it into a real collection. If it's just a navigation convenience, keep it out of the index with a noindex rule in theme.liquid. Liquid's current_tags object is available on collection templates, so a developer can add the noindex tag only when tags are applied.",
      ],
    },
    {
      heading: "Type 3: storefront filter and sort parameters",
      body: [
        "Shopify's Search & Discovery filters let shoppers narrow collection and search pages by availability, price, product type, vendor, tags, variant options and metafields. Each filter adds a URL parameter, such as filter.p.product_type=shoes or filter.v.option.color=red, and sorting adds sort_by.",
        "As of September 2026, Shopify allows up to 25 filters per store, and collections with more than 5,000 products don't show filters. Even within those limits, the combinations add up quickly.",
        "Shopify's defaults handle most of this. On the Dawn demo, a filtered and sorted URL declared the plain collection as canonical. Shopify's help center says the default robots.txt blocks crawling of filtered and sorted collection pages to avoid duplicate content, and on the stores we checked it disallowed sort_by URLs and URLs with more than one filter parameter. Google's own [faceted navigation guidance](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation) supports blocking faceted URLs with robots.txt when indexing them adds little value.",
      ],
    },
    {
      heading: "How do you check which URL Google actually chose?",
      definition:
        "Open Search Console's URL Inspection tool, enter a product or collection URL, and compare the 'User-declared canonical' with the 'Google-selected canonical'. If they match, Google accepted your preference. If they differ, check internal links, sitemaps and content before touching tags.",
      body: [
        "Inspect a sample: five best-selling products, five main collections, one tag page and one filtered URL. The indexed result shows data from the last crawl, while the live test shows what Google sees now, which is useful right after a fix.",
        "Then open the Page indexing report and look at the reasons pages aren't indexed. The statuses that matter for Shopify duplicates are below.",
        "Don't rely on a site: search in Google to judge duplicates. It shows a sample of what's indexed, not which URL Google treats as canonical for each product. URL Inspection answers that question directly, one URL at a time.",
      ],
      bullets: [
        "Pick a sample: top-selling products, main collections, one tag page, one filtered URL and one collection-scoped product URL.",
        "Inspect each in URL Inspection and note the user-declared and Google-selected canonicals.",
        "For any mismatch, run the live test to see whether the current page still sends the same signals.",
        "Open the Page indexing report and export the examples under each duplicate-related status.",
        "Look for patterns: are the mismatches all products in one collection, all tag pages, or all URLs linked from one menu?",
        "Fix the pattern, not the individual URL, then re-inspect a few examples after Google recrawls them.",
      ],
      table: {
        caption: "Page indexing statuses you'll see on Shopify stores, and what to do",
        headers: ["Status in Search Console", "What it means", "Typical Shopify cause", "Action"],
        rows: [
          [
            "Alternate page with proper canonical tag",
            "Google found a duplicate that correctly points to an indexed canonical",
            "/collections/x/products/y pointing to /products/y",
            "Nothing; this is working as intended",
          ],
          [
            "Duplicate without user-selected canonical",
            "No canonical declared, so Google picked one",
            "A custom template or app page missing the canonical tag",
            "Check the theme outputs a canonical tag on that template",
          ],
          [
            "Duplicate, Google chose different canonical than user",
            "Google indexed another URL instead of the one you declared",
            "Internal links, sitemaps or feeds favoring a different URL",
            "Align internal links and sitemaps with your canonical",
          ],
          [
            "URL marked 'noindex'",
            "Google found a noindex directive",
            "Tag pages or search pages you've noindexed",
            "Fine if intended; a problem on paginated or main collections",
          ],
          [
            "URL blocked by robots.txt",
            "Google didn't crawl the URL",
            "Sort, multi-tag and multi-filter URLs",
            "Fine for those; a problem on anything you want indexed",
          ],
          [
            "Indexed, though blocked by robots.txt",
            "Indexed from links despite the block",
            "Someone linked to a blocked filter URL",
            "Robots.txt isn't a noindex; fix the linking or leave it",
          ],
        ],
      },
    },
    {
      heading: "Fixing internal links in your theme (the 'within' filter)",
      body: [
        "Duplicate your theme first. Then search the code for within: collection. It usually appears in the product card snippet used on collection pages, and sometimes in featured-collection sections, related products or quick-view code.",
        "Replace product.url | within: collection with plain product.url in those links. On the Dawn demo, product cards already link to /products/ URLs, so if you're on a recent theme you may find nothing to change.",
        "There's a trade-off. Removing the filter means the product page no longer knows which collection the shopper came from, so collection-aware breadcrumbs and 'back to collection' links stop working. Most stores can live without them, or rebuild them in a way that doesn't change the product link URL.",
        "Themes aren't the only source. Menus, rich-text blocks, metafields, apps that render product recommendations, and email templates can all contain collection-scoped links.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we edit a product card, we crawl the storefront with a desktop crawler and export every internal link whose URL contains both /collections/ and /products/. That gives us a count to compare after the fix, and it surfaces links from menus, apps and metafields that a theme code search misses.",
      },
    },
    {
      heading: "When to use noindex, canonicals or robots rules, and when to leave things alone",
      definition:
        "Use canonical tags and internal links to pick between duplicates, noindex to keep thin pages out of the index, and robots.txt only to save crawling on endless variations. Don't use noindex or robots.txt to choose a canonical.",
      body: [
        "Google's documentation is direct on two mistakes. Don't use robots.txt for canonicalization, because Google may still index a blocked URL without seeing its content. And don't use noindex to steer canonical selection within your site; use rel=\"canonical\" instead.",
        "The other common mistake is over-noindexing pagination. Google's ecommerce pagination guidance says not to use the first page of a paginated sequence as the canonical and to give each page its own canonical URL, which is what the Dawn demo did. Products that only appear on page 3 need page 3 to be crawlable.",
        "If you do need to change robots.txt, Shopify supports a robots.txt.liquid template, but its help center calls this an unsupported customization that Shopify Support can't help with, and warns that incorrect use can lose all your traffic.",
      ],
      table: {
        caption: "What to do with each Shopify URL type",
        headers: ["URL type", "Default behavior we observed", "Recommended"],
        rows: [
          [
            "/collections/x/products/y",
            "Canonical points to /products/y",
            "Keep the canonical; fix internal links to use /products/y",
          ],
          [
            "/collections/x?filter...",
            "Canonical points to /collections/x; multi-filter URLs disallowed in robots.txt",
            "Leave alone unless a filter combination matches real searches; then build a real collection",
          ],
          ["/collections/x?sort_by=...", "Disallowed in robots.txt", "Leave alone"],
          [
            "/collections/x/tag",
            "Self-canonical",
            "Noindex thin tag pages, or turn valuable ones into collections",
          ],
          ["/collections/x/tag1+tag2", "Disallowed in robots.txt", "Leave alone"],
          ["/collections/x?page=2", "Self-canonical", "Keep indexable; never canonical to page 1"],
        ],
      },
    },
    {
      heading: "Aligning your sitemap, Merchant Center feed and internal links",
      body: [
        "Google treats sitemaps as a weak canonical signal and redirects and canonical tags as strong ones, and it recommends not sending conflicting signals. So every place you list product URLs should use the same version.",
        "Shopify generates your sitemap.xml automatically, with links to products, primary product images, pages, collections and blog posts. On the Dawn demo, the product sitemap listed /products/ URLs, which matches the canonical. You can't edit it by hand, but you can keep a page, product or blog post out of the sitemap and search engines with the seo.hidden metafield, or set a product to Unlisted.",
        "Product feeds are the next place to check. If you use a feed app for Google Merchant Center or other marketplaces, confirm the product link field uses the /products/ URL rather than a collection path, so ads and free listings reinforce the same canonical.",
        "If you're coming from another platform, redirects matter just as much; our [WooCommerce to Shopify migration guide](/blog/woocommerce-to-shopify-migration) covers mapping old URLs to the right canonical.",
      ],
    },
    {
      heading: "A checklist for theme updates so the problem doesn't come back",
      body: [
        "Duplicate content fixes tend to regress quietly. A theme update, a new section or a recommendations app can reintroduce collection-scoped links months later. Run this after every theme update and every new app that touches product listings.",
      ],
      bullets: [
        "Search the updated theme for within: collection before publishing it.",
        "View source on a product page reached from a collection and confirm the canonical still points to /products/handle.",
        "Confirm filtered and sorted collection URLs still declare the unfiltered collection as canonical.",
        "Check that paginated pages still declare their own canonical and aren't noindexed.",
        "Re-crawl and compare the count of /collections/.../products/... internal links with your last crawl.",
        "Open yourstore.com/robots.txt and confirm nobody has changed the defaults by accident.",
        "Recheck URL Inspection for your top products and collections a few weeks after publishing.",
      ],
      callout: {
        title: "Where this fits",
        body: "Canonical cleanup is one of the technical fixes in Pixel2Tech's [SEO & Search Growth work](/services/seo-and-search-growth) for Shopify brands. If you're also auditing speed, pair it with our guide to [Shopify INP and Core Web Vitals](/blog/shopify-inp-core-web-vitals).",
      },
    },
  ],
  faqs: [
    {
      q: "Does Shopify create duplicate content?",
      a: "Yes. Every product is reachable at /products/handle and at a collection-scoped path for each collection it belongs to, and collections create extra URLs for tags, filters, sort orders and pagination. Shopify themes typically add canonical tags that point duplicates to the main version, and Google says some duplicate content is normal. The fixes are about consistent signals, not avoiding a penalty.",
    },
    {
      q: "Should I remove 'within: collection' from my Shopify theme?",
      a: "In most cases, yes, in product card links. Replacing product.url | within: collection with product.url makes your internal links point at the canonical /products/ URL, which is what Google recommends. The trade-off is losing collection-aware breadcrumbs on product pages. Make the change on a duplicate theme, and search every snippet and section, not just the main product card.",
    },
    {
      q: "Should I noindex Shopify tag pages?",
      a: "Noindex tag pages that are thin copies of their parent collection with no unique title or copy. If a tag page matches real search demand, such as a style or material people search for, turn it into a proper collection with its own title, description and intro text instead. Multi-tag combinations joined with a plus sign are usually blocked by Shopify's default robots.txt already.",
    },
    {
      q: "Why did Google choose a different canonical than my Shopify store?",
      a: "Google treats canonical tags as a strong hint, not a command, and weighs other signals such as internal links, redirects and sitemaps. If your theme links to collection-scoped product URLs thousands of times while declaring the /products/ URL as canonical, Google may disagree. Align internal links, sitemaps and feeds with your declared canonical, then re-inspect the URL.",
    },
    {
      q: "Do Shopify filter URLs hurt SEO?",
      a: "Usually not, because Shopify's defaults point filtered collection URLs to the unfiltered collection as canonical and block multi-filter and sorted URLs in robots.txt. Problems start when a store edits robots.txt, links to filtered URLs heavily, or wants a filter combination to rank. In that last case, build a dedicated collection with unique content rather than trying to index the filter URL.",
    },
  ],
  sources: [
    {
      label: "Google Search Central: How to specify a canonical URL",
      href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
    },
    {
      label: "Google Search Central: What is canonicalization",
      href: "https://developers.google.com/search/docs/crawling-indexing/canonicalization",
    },
    {
      label: "Google Search Central: Pagination and incremental page loading",
      href: "https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading",
    },
    {
      label: "Shopify.dev: Liquid 'within' filter",
      href: "https://shopify.dev/docs/api/liquid/filters/within",
    },
    {
      label: "Shopify Help Center: Search & Discovery filters",
      href: "https://help.shopify.com/en/manual/online-store/search-and-discovery/filters",
    },
    {
      label: "Search Console Help: URL Inspection tool",
      href: "https://support.google.com/webmasters/answer/9012289",
    },
  ],
  internalLinks: [
    { label: "WooCommerce to Shopify migration", to: "/blog/woocommerce-to-shopify-migration" },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    {
      label: "Biggest SEO mistakes in 2026",
      to: "/blog/biggest-seo-mistakes-businesses-make-2026",
    },
    { label: "Common Shopify issues and fixes", to: "/blog/shopify-issues-and-how-to-fix-them" },
    { label: "SEO & Search Growth services", to: "/services/seo-and-search-growth" },
  ],
  cta: {
    title: "Is Google picking the wrong URLs on your store?",
    body: "Share your Search Console access or a few problem URLs. We'll compare declared and Google-selected canonicals, trace where the duplicate links come from and give you a fix list your developer can apply on a duplicate theme.",
  },
};

export default post;
