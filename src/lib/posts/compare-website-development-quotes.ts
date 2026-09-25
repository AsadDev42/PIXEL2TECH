import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "How to Compare Website Quotes: A Line-by-Line Method",
  metaDescription:
    "Holding website quotes with wildly different prices? Normalize the scope, compare line by line, spot hidden costs and score each agency with a matrix.",
  keywords: [
    "how to compare website quotes",
    "website quote breakdown",
    "why website quotes vary",
    "web design proposal comparison",
    "what should a website quote include",
    "website quotation checklist",
    "website design brief template",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the website development services discussed here.",
  keyTakeaways: [
    "Website quotes differ mainly because each agency fills the gaps in your request with its own assumptions. Send every agency the same one-page brief and sitemap.",
    "Compare phase by phase (discovery, design, build, content, SEO migration, accessibility, QA, launch, support) and mark each line as included, excluded or unclear.",
    "Add three years of recurring costs, such as hosting, licenses, care plans and change requests, before you compare totals.",
    "Check ownership terms in writing. Under US copyright rules, commissioned work counts as made for hire only in nine categories with a signed agreement, so ask for an explicit assignment clause.",
    "Score proposals on weighted criteria, then use reference calls to break close scores. The cheapest quote is fine only when its scope is complete.",
  ],
  content: [
    {
      heading: "How do you compare website development quotes?",
      definition:
        "Compare website quotes by having every agency price the same written scope, then line up the bids phase by phase: discovery, design, build, content, SEO migration, accessibility, testing, launch and support. Add three years of recurring costs, check the ownership terms, and score each proposal on weighted criteria instead of picking the lowest total.",
      body: [
        "Three proposals for the same website can differ several times over, and nobody has to be dishonest for that to happen. Each agency read the same short email and filled the gaps with its own assumptions.",
        "The fix is a process, not a negotiation. Give everyone the same brief, force every quote into the same structure, add the costs that show up later, and score what's left. The steps below take an afternoon and save you from comparing a template site with a custom build as if they were the same product.",
      ],
    },
    {
      heading: "Why are website quotes so different?",
      definition:
        "Quotes vary because they describe different projects, built by different teams, with different amounts of risk priced in.",
      body: ["Before you judge any number, find out which of these is behind the gap:"],
      bullets: [
        "Scope assumptions: one agency assumed a theme and your existing copy; another assumed custom design and new copy for every page.",
        "Team and process: a proposal with discovery workshops, a UX phase and formal testing costs more than one that goes straight to building.",
        "Location and overhead: rates reflect local labor costs, office costs and how much of the team's time can be billed.",
        "Risk buffer: a vague brief makes careful agencies add contingency, and lets careless ones underquote and recover the difference through change requests.",
        "Exclusions: hosting, licenses, content entry, redirects and training are often left out without saying so.",
      ],
      subsections: [
        {
          heading: "What a big gap usually means",
          body: [
            "When one quote is far below the others, it's usually a template build, a smaller scope, or a quote that leaves the hard parts (content, redirects, integrations) to you. When one is far above, it often includes strategy, copywriting or custom functionality the others skipped. Neither is wrong on its own. The gap only becomes useful once you know which lines caused it.",
          ],
        },
      ],
    },
    {
      heading: "Normalize the scope first: a one-page brief every agency quotes against",
      definition: "A shared brief turns three guesses into three prices for the same job.",
      body: [
        "Send every agency the same document. It doesn't need to be long; it needs to answer the questions agencies otherwise answer for you. Copy this template and fill it in:",
      ],
      bullets: [
        "Business and goal: what you do, who the site is for, and the one or two actions a visitor should take (call, book, request a quote).",
        "Current site: URL, platform, and what's wrong with it in your own words.",
        "Sitemap: every page, grouped by template (home, service, location, bio, blog post, contact, landing page).",
        "Content: who writes new copy, who supplies photos and video, and how many existing pages and posts must move.",
        "Functionality: forms, booking, payments, search, member areas, more than one language.",
        "Integrations: CRM, email marketing, call tracking, chat, analytics.",
        "Platform: required, preferred, or open to recommendation.",
        "Accessibility: WCAG 2.2 Level AA as the target.",
        'Performance: Core Web Vitals in Google\'s "good" range on mobile.',
        "SEO: keep rankings through launch, with a URL map and a 301 redirect for every changed URL.",
        "Ownership: the domain, hosting, platform accounts and code rights belong to your business.",
        "Support: what help you expect after launch, and for how long.",
        "Budget range and deadline.",
      ],
      subsections: [
        {
          heading: "Why include a budget range",
          body: [
            "Owners often hold back the budget to see who comes in lowest. That usually backfires: without a range, agencies guess at the level of finish you expect, and their guesses spread the quotes further apart. A range lets each agency tell you what it would deliver for that money, which is far easier to compare.",
            "If you haven't set a budget yet, our guide to [website redesign costs](/blog/website-redesign-cost-small-business) walks through each line item before quotes arrive.",
          ],
        },
      ],
    },
    {
      heading: "Compare quotes line by line, not total to total",
      definition:
        "Put each quote's phases side by side and mark every line as included, excluded or unclear. The unclear lines are where the real price difference hides.",
      body: [
        "Use this table as the template. Anything a quote doesn't state goes in the right-hand column as a question for that agency.",
      ],
      table: {
        caption: "Line-by-line comparison template",
        headers: ["Phase", "What a complete quote states", "If it's missing, ask"],
        rows: [
          [
            "Discovery",
            "Calls or workshops, deliverables such as a sitemap and requirements document, hours",
            "What will be decided before design starts?",
          ],
          [
            "Design",
            "Number of templates, mobile layouts, revision rounds, design file handover",
            "How many templates, and how many rounds of changes?",
          ],
          [
            "Build",
            "Platform, CMS setup, forms, integrations, responsive behavior",
            "Which features are custom, and which come from a theme or plugin?",
          ],
          [
            "Content",
            "Who writes, edits, uploads and formats; how many pages migrate",
            "Who enters content into the CMS, and is that priced?",
          ],
          [
            "SEO migration",
            "URL map, 301 redirects, titles, meta descriptions, structured data, sitemap",
            "Will every changed URL get a permanent redirect?",
          ],
          [
            "Accessibility",
            "Target standard, testing method, anything excluded",
            "Which WCAG level, and how will you test it?",
          ],
          [
            "QA and launch",
            "Browsers and devices tested, form tests, analytics checks",
            "What is tested before launch, and by whom?",
          ],
          [
            "Training",
            "Editor training, written documentation",
            "Can my team add a page without you afterward?",
          ],
          [
            "Support",
            "Warranty period, response times, monthly care plan",
            "What's covered free after launch, and for how long?",
          ],
        ],
      },
    },
    {
      heading: "Add hidden and recurring costs over three years",
      definition:
        "Total cost of ownership is the build price plus everything you'll pay to run and change the site. Three years is a practical window for comparing quotes.",
      body: [
        "Recurring costs rarely appear on the first page of a proposal. Look for hosting, platform subscriptions, premium theme or plugin licenses, a maintenance or care plan, and the hourly rate for change requests after launch. Then check whose card each one is billed to: a license or hosting plan paid through the agency is a cost, and also a dependency if you ever switch.",
        "Illustrative example, with made-up numbers: Quote A is $8,000 for the build plus a $150 monthly care plan, which comes to $13,400 over three years. Quote B is $11,000 including the first year of support, then $50 a month, which comes to $12,200. The quote that looked $3,000 more expensive is $1,200 cheaper over three years.",
        'Also ask how change requests are billed. A low fixed price with an expensive change-request rate costs more than a higher price with a clear scope, once the first round of "small tweaks" arrives after launch.',
      ],
    },
    {
      heading: "Quality signals that matter more than price",
      definition:
        "The best early sign of a smooth project is an agency that asks specific questions about your business before it quotes.",
      body: [
        "Price tells you what a project costs. These signals tell you whether it will be finished well:",
      ],
      bullets: [
        "Relevant portfolio: sites for businesses like yours, with live links you can test on your own phone.",
        "References: a past client you can call, ideally one whose project ended more than a year ago.",
        "Who does the work: named roles, and whether any of it is subcontracted.",
        'Measurable performance targets: Google\'s Core Web Vitals "good" thresholds are Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads.',
        "Accessibility: a stated WCAG 2.2 AA target and a testing method, not just a plugin.",
        "SEO realism: Google's SEO starter guide says some changes take effect in a few hours while others can take several months, so treat guaranteed rankings as a warning sign.",
        "Ownership terms: in writing, before you sign.",
      ],
      subsections: [
        {
          heading: "Read the ownership clause closely",
          body: [
            "The US Copyright Office's [Circular 30](https://www.copyright.gov/circs/circ30.pdf) explains that a commissioned work counts as a \"work made for hire\" only if it falls into one of nine listed categories and both parties sign a written agreement saying so. If it fails any of those requirements, it isn't a work made for hire.",
            'A website doesn\'t obviously fit those categories, so a "work for hire" sentence on its own may not do what you expect. Ask for a clause that assigns the copyright in the custom design and code to your business on final payment, and have an attorney review it. Our [website ownership checklist](/blog/website-ownership-checklist) covers the account side of ownership.',
          ],
        },
      ],
    },
    {
      heading: "Local vs offshore quotes: how to compare fairly",
      definition:
        "Compare an offshore quote with a local one on total cost, including your own management time and risk, not on hourly rate.",
      body: [
        "Offshore studios often quote less because their labor and overhead costs are lower. That gap is real, and so are the costs you take on: coordinating across time zones, writing clearer briefs, and working with a contract across borders. Check these before you compare the totals:",
      ],
      bullets: [
        "Time zone overlap: how many working hours overlap each day, and when your calls will happen.",
        "Communication: a named project manager, written status updates and a shared task board.",
        "Payment structure: milestones tied to deliverables you can see, not to time passing.",
        "Contract: governing law, IP assignment, and what happens if either side ends the project early.",
        "Accounts: domain, hosting and platform accounts created in your name from day one.",
        "Your time: an hour a week of your review time for three months is part of the real price.",
      ],
      subsections: [
        {
          heading: "Where offshore quotes fit well",
          body: [
            "Offshore teams tend to work best when the brief is written, decisions are made on a schedule, and the project is split into milestones with something to review at each one. If your process depends on long in-person workshops and quick decisions made in the room, weight communication higher in your scoring.",
            "For a longer look at working with a team in Pakistan, see our guide to [outsourcing web development to Pakistan](/blog/outsource-web-development-to-pakistan).",
          ],
        },
      ],
    },
    {
      heading: "A weighted scoring matrix you can copy",
      definition:
        "Score each proposal from 1 to 5 on each criterion, multiply by the weight, and add up the results.",
      body: [
        "The weights below are a starting point. Move them to match what matters to you, but set them before you open the quotes, so the scores aren't bent toward a favorite.",
      ],
      table: {
        caption: "Example weights; adjust them to your priorities",
        headers: ["Criterion", "Weight", "Quote A (1-5)", "Quote B (1-5)", "Quote C (1-5)"],
        rows: [
          ["Scope completeness (every phase included)", "25%", "", "", ""],
          ["Three-year total cost", "20%", "", "", ""],
          ["Relevant portfolio and references", "15%", "", "", ""],
          ["Process and communication", "15%", "", "", ""],
          ["Ownership and contract terms", "15%", "", "", ""],
          ["Post-launch support", "10%", "", "", ""],
        ],
      },
      subsections: [
        {
          heading: "A worked example",
          body: [
            "Illustrative scoring: an agency that scores 4 on scope (0.25 x 4 = 1.0), 3 on cost (0.6), 5 on portfolio (0.75), 4 on process (0.6), 5 on ownership (0.75) and 3 on support (0.3) totals 4.0 out of 5.",
            "Treat anything within a few tenths of a point as a tie. Break ties with a reference call and a short meeting with the person who would manage your project day to day.",
          ],
        },
      ],
    },
    {
      heading: "Questions to send back to every agency before you sign",
      definition:
        "Send the same questions to every shortlisted agency, in writing, and compare the answers as carefully as the prices.",
      body: ["Copy this list into one email per agency:"],
      bullets: [
        "Which items in my brief are not included in this price?",
        "How many hours have you estimated for each phase?",
        "Who writes, uploads and formats the content?",
        "Will every changed URL get a 301 redirect, and who builds the map?",
        "Which WCAG level will you build to, and how will you test it?",
        "What Core Web Vitals results will you aim for on mobile?",
        "Whose name will the domain, hosting, platform and license accounts be in?",
        "Does the contract assign the copyright in the custom design and code to us on final payment?",
        "What does post-launch support cover, for how long, and at what rate after that?",
        "How are change requests priced and approved?",
        "Who will we speak to week to week, and in which time zone?",
      ],
      callout: {
        title: "From the studio",
        body: 'When you line up quotes, check first whether they all assume the same person writes the copy. That single assumption moves more money than design style or page count. Make "who writes and supplies content" the first line of your brief, and ask any agency that skipped it to requote.',
      },
    },
    {
      heading: "Making the final call",
      body: [
        "The right quote is the one with the most complete scope at a total cost you can sustain for three years, from a team you trust to tell you when something is out of scope. Sometimes that is the cheapest bid. Low prices are only a problem when they come from missing lines.",
        "If you'd like a second opinion, Pixel2Tech's [website development](/services/website-development) team will read your proposals against your brief and point out what each one leaves out, including ours if we've quoted.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why are website quotes so different?",
      a: "Mostly because each agency priced a different project. One assumed a template and your existing copy, another assumed custom design and new content. Team size, process, location, overhead and how much risk they build in also matter. Sending every agency the same written brief and sitemap removes most of the gap, and what remains tells you something real about each team.",
    },
    {
      q: "What should a website quote include?",
      a: "A complete quote lists discovery, design (with the number of templates and revision rounds), build, content responsibilities, SEO migration with redirects, accessibility target and testing, QA, launch, training and support. It should also state recurring costs such as hosting and licenses, how change requests are billed, the payment schedule, and who owns the domain, accounts and code.",
    },
    {
      q: "Is the cheapest quote ever the right choice?",
      a: "Yes, when its scope matches the others line for line and the team checks out on portfolio, references and ownership terms. The cheapest quote is a problem when the savings come from missing work, such as redirects, content entry, testing or support, that you'll end up paying for later through change requests or lost traffic.",
    },
    {
      q: "Should I ask for a fixed price or hourly billing?",
      a: "A fixed price suits a well-defined scope, because it puts the estimating risk on the agency and makes quotes comparable. Hourly or retainer billing suits work that's still being discovered or will change often. Many projects combine the two: a fixed price for the defined build and an agreed hourly rate for changes outside the brief.",
    },
    {
      q: "How many website quotes should I get?",
      a: "Three is usually enough to see a pattern without drowning in proposals. Fewer makes it hard to tell which quote is the outlier; many more costs you time in calls and follow-up questions. Shortlist agencies whose portfolios match your type of business before you send the brief, so every quote is worth reading.",
    },
  ],
  sources: [
    {
      label: "Google Search Central: SEO Starter Guide",
      href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    },
    {
      label: "web.dev: Web Vitals",
      href: "https://web.dev/articles/vitals",
    },
    {
      label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
      href: "https://www.w3.org/TR/WCAG22/",
    },
    {
      label: "U.S. Copyright Office: Circular 30, Works Made for Hire",
      href: "https://www.copyright.gov/circs/circ30.pdf",
    },
  ],
  internalLinks: [
    {
      label: "Website redesign cost for small businesses",
      to: "/blog/website-redesign-cost-small-business",
    },
    { label: "Website ownership checklist", to: "/blog/website-ownership-checklist" },
    {
      label: "WordPress vs Webflow vs Squarespace for service businesses",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
    {
      label: "Outsourcing web development to Pakistan",
      to: "/blog/outsource-web-development-to-pakistan",
    },
    { label: "Website development services", to: "/services/website-development" },
  ],
  cta: {
    title: "Want a second opinion on the quotes you're holding?",
    body: "Send us the proposals and your brief. We'll mark what each one includes, what it leaves out, and what it's likely to cost over three years.",
  },
};

export default post;
