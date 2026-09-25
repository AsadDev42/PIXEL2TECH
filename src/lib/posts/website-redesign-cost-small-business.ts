import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Website Redesign Cost for Small Business: 2026 Budget Guide",
  metaDescription:
    "Redesign quotes for the same site can differ several times over. See each line item, what drives the price, and how to budget before you ask for quotes.",
  keywords: [
    "website redesign cost small business",
    "how much does a website redesign cost",
    "website redesign pricing",
    "website redesign budget",
    "cost to redesign a wordpress website",
    "small business website redesign cost 2026",
  ],
  keyTakeaways: [
    "A redesign costs the sum of its line items: discovery, design, development, integrations, content, SEO migration, accessibility, testing and launch. Quotes differ mostly because they assume different line items.",
    "Template versus custom design, the number of unique page templates, integrations and who writes the content move the budget more than page count does.",
    "Budget for a URL map with permanent redirects (Google recommends keeping redirects generally at least a year) and for WCAG 2.2 AA checks. Both cost less during the build than after it.",
    "Hosting, licenses, maintenance and analytics keep costing money after launch, so ask every vendor to list recurring costs separately from the build.",
    "BLS lists 2025 median pay of $47.85 an hour for web developers and digital designers. Agency rates sit above wages because they carry overhead, so compare estimated hours and scope, not rates alone.",
  ],
  content: [
    {
      heading: "How much does a small business website redesign cost?",
      definition:
        "A small business website redesign costs the sum of its line items: discovery, design, development, content, SEO migration, accessibility, testing and launch. A template refresh of a small site sits at the low end; custom design across many page types, with integrations and new copy, costs several times more. Budget by scope, not by a headline number.",
      body: [
        "If you've collected a few prices already, you have probably noticed they don't agree. Price ranges published online don't agree either, and most don't say where their numbers come from.",
        'That\'s because "website redesign" can mean a new color palette on the same 12 pages, or a new platform, new copy and 60 rebuilt pages. Both are redesigns. They are not the same project, and they will never have the same price.',
        "The useful move is to stop asking what a redesign costs and start listing what yours includes. Once each line item is on paper, you can price it, cut it or defer it, and every quote you receive can be checked against the same list.",
        "This guide walks through those line items, the factors that move them, the recurring costs that arrive after launch, and a worksheet to fill in before you contact any agency.",
      ],
    },
    {
      heading: "The line items in a redesign budget",
      definition:
        "Every redesign quote is built from the same set of phases, stated or not. A quote that leaves one out hasn't made it free; it has moved it to you.",
      body: [
        "Here is what each phase covers and what makes it expensive. Use the table to decide which lines your project needs and to spot the ones a vendor may have quietly left out.",
      ],
      table: {
        caption: "Redesign line items and what drives their cost",
        headers: ["Line item", "What it covers", "What pushes the cost up"],
        rows: [
          [
            "Discovery and planning",
            "Goals, audience, analytics review, sitemap, technical requirements",
            "Many stakeholders, unclear goals, a platform decision still open",
          ],
          [
            "Information architecture",
            "Page hierarchy, navigation, URL structure, content model",
            "Dozens of service or location pages, several audiences",
          ],
          [
            "Design",
            "Page templates, components, mobile layouts, design system",
            "Custom design instead of a theme, many unique templates, several revision rounds",
          ],
          [
            "Development",
            "Building templates, CMS setup, forms, responsive behavior",
            "Custom functionality, animation, complex filtering or search",
          ],
          [
            "Integrations",
            "CRM, booking, payments, chat, call tracking, email marketing",
            "Two-way data sync, custom API work, older systems",
          ],
          [
            "Content",
            "Copywriting, editing, photography, video, moving existing pages",
            "New copy for every page, original photography, a large blog to migrate",
          ],
          [
            "SEO migration",
            "URL map, 301 redirects, titles and meta, structured data, XML sitemap",
            "Large sites, changed URLs, a platform switch",
          ],
          [
            "Accessibility",
            "WCAG checks during design and build, keyboard and screen reader testing",
            "Complex forms, video that needs captions, many PDFs",
          ],
          [
            "QA and launch",
            "Browser and device testing, form tests, analytics checks, go-live",
            "Many templates and integrations to test, a tight launch window",
          ],
          [
            "Training and handover",
            "Editor training, documentation, account transfers",
            "Several editors, custom editing workflows",
          ],
        ],
      },
    },
    {
      heading: "What changes the price the most?",
      definition:
        "Four factors move a redesign budget more than anything else: template versus custom design, the number of unique page templates, integrations, and who produces the content.",
      body: [
        "Page count gets the most attention in quote requests, but it's rarely the biggest driver on its own. These four are, and switching platforms adds a fifth.",
      ],
      subsections: [
        {
          heading: "Template or custom design",
          body: [
            "A premium theme or template gives you a tested layout and cuts design hours. The trade-off is that your site shares a structure with other businesses, and bending a theme far from its defaults can cost more than designing from scratch.",
            "Custom design makes sense when your service is hard to explain with stock layouts, when looking different matters to your buyers, or when you need page types the theme doesn't have.",
          ],
        },
        {
          heading: "Unique templates matter more than page count",
          body: [
            "Forty service pages that share one template cost far less to build than ten pages that each need their own layout. When you count pages for a quote, count templates too: home, service, location, team bio, blog post, contact and campaign landing page.",
          ],
        },
        {
          heading: "Integrations",
          body: [
            "Embedding a booking widget is quick. Sending form submissions into a CRM with lead source, service type and location mapped correctly takes real development and testing. List every system the site must talk to, and say whether data only needs to flow one way.",
          ],
        },
        {
          heading: "Content volume and who writes it",
          body: [
            "Content is the line item most often missing from quotes and the most common reason launches slip. If the agency writes the copy, expect a real line for it. If you write it, put a date on when it will be ready, because a finished design with no copy can't launch.",
            "Existing content has a cost too. Moving 200 blog posts from an old CMS, cleaning up their formatting and checking their images is a job in itself, even when nobody rewrites a word.",
          ],
        },
        {
          heading: "A platform switch adds a layer",
          body: [
            "Staying on your current platform keeps the hosting, CMS setup and much of the content structure. Switching platforms adds data migration, a full redirect map, retraining for your editors and new recurring costs. Switch when the platform itself is what's holding you back, not because a new one is fashionable, and budget the migration as its own line.",
          ],
        },
      ],
    },
    {
      heading: "Budget for accessibility now, not after a demand letter",
      definition:
        "Accessibility work costs least when it's designed into templates, because a fix made once in a template carries to every page built from it.",
      body: [
        "The Department of Justice's March 2022 guidance on web accessibility says the ADA's requirements apply to all the goods and services that businesses open to the public offer, including those offered on the web. The same guidance says the Department has no regulation setting detailed technical standards for these businesses, and that they can choose how they make their online offerings accessible.",
        "In practice, most teams use the Web Content Accessibility Guidelines as the target. The current version of WCAG 2.2 is a W3C Recommendation dated 12 December 2024, and content that conforms to 2.2 also conforms to 2.1 and 2.0. Level AA is the usual goal for a business site.",
        "Write these checks into the design and build line items so they aren't an afterthought: text contrast of at least 4.5:1 for normal-size text, visible keyboard focus, labeled form fields with clear error messages, alt text on meaningful images, captions on video, and tap targets of at least 24 by 24 CSS pixels (WCAG 2.2 lists some exceptions).",
        "The budgeting logic is simple. If contrast, focus styles and form labels are right in the component library, every new page inherits them. If they're fixed after launch, someone has to find and correct each instance, then retest, and the same problems return whenever an editor builds a page from an old pattern.",
        "Ask vendors to state the accessibility target in the proposal and how they test it: an automated scan alone, or manual keyboard and screen reader checks on key templates as well. The answer tells you whether the line item is real.",
      ],
    },
    {
      heading: "Hidden and recurring costs after launch",
      definition:
        "A redesign has a one-time build cost and a yearly running cost. Quotes usually show the first and leave the second for you to discover.",
      body: [
        "Ask every vendor to list recurring items separately so you can budget them per year. The usual ones:",
      ],
      bullets: [
        "Hosting or platform subscription, billed monthly or yearly. Plan prices change often, so check the provider's own pricing page before you commit.",
        "Domain renewal and, if you use them, separate DNS or email providers.",
        "Premium theme, plugin or app licenses, which often renew yearly and stop receiving updates when they lapse.",
        "Maintenance: core and plugin updates, backups, uptime monitoring and security patches.",
        "Analytics and conversion tracking, including fixes when forms or tags change.",
        "New pages and content updates after launch, if your own team won't make them.",
        "Periodic accessibility and speed reviews as new content is added.",
      ],
    },
    {
      heading: "How can you sanity-check a quote with US labor data?",
      definition:
        "Break a quote into hours, check those hours against the scope, and use Bureau of Labor Statistics pay data to understand what the labor underneath the price costs.",
      body: [
        "The US Bureau of Labor Statistics reports a [May 2025 median annual wage](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) of $92,650 for web developers and $104,000 for web and digital interface designers. For the two occupations combined, it lists 2025 median pay of $99,520 a year, or $47.85 an hour.",
        "Those are employee wages, not agency rates. An agency's hourly price also has to cover benefits, software, office costs, project management, sales time, hours that can't be billed, and profit. A US agency's rate will normally sit well above the median wage, and that isn't a sign of overcharging.",
        "Illustrative arithmetic: if a proposal estimates 120 hours of design and development, 120 hours at the $47.85 median comes to about $5,742 in wages alone, before any overhead. A quote from a US-based team far below that for the same scope is assuming fewer hours, leaning heavily on a template, or leaving line items out.",
        "Studios outside the US can price lower because their labor costs differ, so across countries, compare hours and scope rather than rates. Either way, ask each vendor for estimated hours per phase. You don't need to audit their rate; you need to see whether the hours match the work.",
      ],
    },
    {
      heading: "Redesign, refresh or rebuild: which scope do you need?",
      definition:
        "A refresh changes how the site looks, a redesign changes how it's organized and what it says, and a rebuild changes what it runs on.",
      body: [
        "Pick the smallest scope that fixes the real problem. If leads are down because the contact form is buried, a refresh with a better page structure may be enough. If your team can't edit the site without a developer, you're probably looking at a rebuild.",
      ],
      table: {
        caption: "Choosing the scope",
        headers: ["Scope", "What changes", "Fits when", "Budget and risk"],
        rows: [
          [
            "Refresh",
            "Visual style, fonts, colors, some layouts; same platform, pages and URLs",
            "Structure and content still work, the site just looks dated",
            "Lowest cost; little SEO risk if URLs stay the same",
          ],
          [
            "Redesign",
            "Navigation, page structure, templates and copy, often on the same platform",
            "Visitors can't find services, messaging is off, pages don't convert",
            "Mid-range; needs a URL map if pages move or merge",
          ],
          [
            "Rebuild",
            "Platform or codebase, plus everything in a redesign",
            "The platform limits you, the site is slow or insecure, or editing is painful",
            "Highest cost; needs full SEO and data migration",
          ],
        ],
      },
    },
    {
      heading: "A budgeting worksheet to fill out before you request quotes",
      definition:
        "Answer these questions before you contact anyone. The answers become your brief, and the brief is what makes quotes comparable.",
      body: [
        "When bids arrive, use our guide to [comparing website development quotes](/blog/compare-website-development-quotes) to line them up against this worksheet.",
      ],
      bullets: [
        "Goal: the one or two numbers the new site should move, such as calls, form leads or bookings.",
        "Scope: refresh, redesign or rebuild.",
        "Platform: keep the current one, switch, or ask for a recommendation.",
        "Templates: which unique page templates you need, and the total page count.",
        "Content: who writes it, who supplies photos, and the date it will be ready.",
        "Integrations: CRM, booking, payments, chat, call tracking, email marketing.",
        "Forms: how many, which fields, and where submissions go.",
        "Accessibility: WCAG 2.2 Level AA unless you have a reason to choose otherwise.",
        "SEO: a list of current URLs, top landing pages from Search Console, and pages other sites link to.",
        "Analytics: which conversions must be tracked from launch day.",
        "Ownership: domain, hosting, platform accounts and code rights in your business's name.",
        "Support: who updates the site after launch, and how often.",
        "Budget range and launch date, including any hard deadlines.",
      ],
    },
    {
      heading: "Red flags in a cheap quote",
      definition:
        "A low quote is only a problem when the savings come from work you'll need anyway.",
      body: ["Look for these gaps before you decide a lower price is a better deal:"],
      bullets: [
        "No redirect plan or URL map. Google's site move guidance says to map old URLs to new ones and keep redirects for as long as possible, generally at least one year. Our guide to [traffic drops after a redesign](/blog/website-traffic-drop-after-redesign) shows what happens when this step is skipped.",
        'No content migration line, or a vague "client provides content" with no help moving it.',
        "No mention of accessibility, or of testing on real phones and browsers.",
        "Hosting, domain or theme licenses registered in the agency's name.",
        "No ownership or intellectual property terms in the contract.",
        '"Unlimited revisions", which usually means undefined revisions.',
        "A fixed price with no written scope, so every question becomes a change request.",
      ],
      callout: {
        title: "From the studio",
        body: "Before pricing a redesign, export every URL that currently gets search clicks or has links from other sites, and price the redirect map as its own line. It's usually a small item, and it's the one that decides whether the new site keeps the old site's traffic. If a vendor can't show you that line, ask for it before you sign.",
      },
    },
    {
      heading: "What you should own at the end of the project",
      body: [
        "When the final invoice is paid, you should hold admin access to the domain registrar, the hosting or platform account, the CMS, analytics, Search Console and every connected tool, plus the design files and a written transfer of rights to the custom design and code. Our [website ownership checklist](/blog/website-ownership-checklist) lists each account and the role you need.",
        "Pixel2Tech's [website development](/services/website-development) team scopes redesigns this way, line item by line item. If you'd rather run the process yourself, the worksheet above is enough to get consistent quotes from any agency.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much should a small business website redesign cost?",
      a: "It should cost what its scope requires, which is why a single number isn't useful. List the line items you need (discovery, design, development, content, integrations, SEO migration, accessibility, testing and launch), note which are template-based or custom, and ask vendors to price each one. Quotes built against the same written scope become comparable, and you can see what to cut or defer.",
    },
    {
      q: "How long does a website redesign take?",
      a: "Timing depends mostly on scope and on how quickly content and approvals arrive. Design and build often move faster than copywriting, photography and stakeholder feedback. After launch, allow time for search engines to catch up: Google says most pages of a small to medium-sized site can take a few weeks to move to their new URLs, and larger sites take longer.",
    },
    {
      q: "Is it cheaper to redesign or rebuild a website from scratch?",
      a: "A redesign on the same platform is usually cheaper, because the hosting, CMS setup and much of the content structure carry over. A rebuild adds a platform switch, data migration and a full SEO migration. Rebuild when the platform itself is the problem, for example when every edit needs a developer or the site can't meet your speed or security needs.",
    },
    {
      q: "Does a website redesign hurt SEO?",
      a: "It can, but it doesn't have to. Google notes that sites may see ranking fluctuations while it recrawls and reindexes after significant changes. Lasting losses usually come from old URLs that weren't redirected, content that was cut, leftover noindex tags or slower pages. Map every old URL to its closest new page with a permanent redirect and keep the redirects for at least a year.",
    },
    {
      q: "What ongoing costs come after a redesign?",
      a: "Plan for hosting or a platform subscription, domain renewal, premium theme or plugin licenses, maintenance and security updates, backups, and analytics upkeep. Many businesses also budget for new pages, content updates and periodic accessibility and speed reviews. Ask each vendor to list these separately from the build price so you can compare them year by year.",
    },
  ],
  sources: [
    {
      label: "U.S. Bureau of Labor Statistics: Web Developers and Digital Designers",
      href: "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
    },
    {
      label: "Google Search Central: Site moves with URL changes",
      href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    },
    {
      label: "ADA.gov: Guidance on Web Accessibility and the ADA",
      href: "https://www.ada.gov/resources/web-guidance/",
    },
    {
      label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
      href: "https://www.w3.org/TR/WCAG22/",
    },
  ],
  internalLinks: [
    {
      label: "How to compare website development quotes",
      to: "/blog/compare-website-development-quotes",
    },
    { label: "Website ownership checklist", to: "/blog/website-ownership-checklist" },
    { label: "Traffic dropped after a redesign?", to: "/blog/website-traffic-drop-after-redesign" },
    {
      label: "WordPress vs Webflow vs Squarespace for service businesses",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
    { label: "Website development services", to: "/services/website-development" },
  ],
  cta: {
    title: "Want a line-item budget before you ask for quotes?",
    body: "Send us your current site and what you want the redesign to fix. We'll map the line items your project needs, flag the ones you can skip, and show you where the budget risk sits.",
  },
};

export default post;
