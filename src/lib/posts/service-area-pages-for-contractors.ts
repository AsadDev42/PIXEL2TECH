import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Service Area Pages for Contractors Without Doorway Pages",
  metaDescription:
    "City pages can rank or get ignored. How US contractors build service area pages that pass Google's doorway test, with a page template and link plan.",
  keywords: [
    "service area pages for contractors",
    "city pages local seo",
    "doorway pages google",
    "rank in multiple cities without an office",
    "location pages for service area business",
    "contractor local seo",
    "how many service area pages",
  ],
  keyTakeaways: [
    "Google's spam policies list pages 'targeted at specific regions or cities that funnel users to one page' as doorway abuse. A city page is safe when it helps someone in that city more than your main service page would.",
    "Build a page for a city only when you have proof there: completed jobs, reviews from local customers, crews that cover the area and local permit knowledge.",
    "Use one template for structure, never for content: local intro, services offered there, project photos, reviews, permit notes, FAQs and one call to action.",
    "Link hub to spoke. A service-areas hub links to every city page, each city page links to the relevant service pages, and neighboring cities link to each other.",
    "City pages don't set your map coverage. Business Profile service areas are configured separately, up to 20 of them, within about two hours' drive of your base.",
  ],
  content: [
    {
      heading: "What does Google say about doorway pages?",
      definition:
        "Google defines doorway abuse as creating sites or pages to rank for specific, similar search queries that lead users to intermediate pages less useful than the final destination. Its examples include pages targeted at specific cities that funnel users to one page, and substantially similar pages that sit closer to search results than a browseable hierarchy.",
      body: [
        "That definition sits in [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies?hl=en), last updated August 28, 2026 when we checked. Two of its four examples describe the classic contractor mistake: a page per city, each a near-copy, each funneling to the same contact form.",
        "The same page covers scaled content abuse: many pages generated mainly to manipulate rankings rather than help users, with little to no value 'no matter how it's created.' One of Google's examples is using generative AI tools to produce many pages without adding value. Fifty AI-written city pages fit that description.",
        "Notice what Google does not say. It doesn't ban location pages, and it doesn't cap how many you can have. The test is usefulness: would a homeowner in that city learn something on this page they couldn't learn on your main service page?",
      ],
    },
    {
      heading: "Why do swap-the-city-name templates fail?",
      definition:
        "Templates that only swap the city name fail because they add nothing a searcher in that city needs. Google's helpful content guidance asks whether a page offers original information and substantial value compared with other pages; a name swap does neither.",
      body: [
        "Google's [guidance on helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=en) asks questions like: does the content provide original information, reporting, research or analysis? Does it provide substantial value compared with other pages in search results? A page that opens 'Looking for reliable roof repair in Plano? Our Plano roofers...' and then repeats the same 400 words as the Frisco page fails both.",
        "It also fails the reader. A homeowner in Plano wants to know whether you actually work there, what jobs you've done nearby, how fast you can come out and whether you handle the city's permits. The name-swap page answers none of that.",
        "And it fails commercially. Even when a thin city page ranks, it gives the visitor no reason to call you instead of the next result, whose page might show a real job two streets away.",
      ],
    },
    {
      heading: "When does a city deserve its own page?",
      definition:
        "Give a city its own page when you can fill it with proof from that city: recent jobs, local reviews, crews that cover it and local permit knowledge. If you can't yet, list the city on a service-areas hub instead.",
      body: [
        "Start with the three to five cities where you have the most proof, and add more as jobs and reviews come in. Six strong city pages are easier to keep current, and more useful to visitors, than sixty thin ones.",
      ],
      table: {
        caption: "Decision matrix: dedicated city page or hub listing",
        headers: ["Signal", "Build a dedicated page", "List it on the hub for now"],
        rows: [
          [
            "Completed jobs there",
            "Several recent jobs with photos",
            "One or two jobs, or none recently",
          ],
          [
            "Customer reviews",
            "Reviews that mention the city or neighborhood",
            "No local reviews yet",
          ],
          ["Crew coverage", "A crew works there regularly", "Occasional trips only"],
          [
            "Local rules",
            "You know the permit process and local code quirks",
            "You would be guessing",
          ],
          [
            "Search demand",
            "Search Console shows impressions for '[service] [city]' queries",
            "No impressions yet",
          ],
          [
            "Services offered",
            "Your full service list, or a distinct local mix",
            "Emergency calls only",
          ],
        ],
      },
    },
    {
      heading: "What goes on a service area page?",
      definition:
        "Use a fixed template for structure and fill every block with material from that city. The template keeps pages quick to build; the local content is what makes each page worth indexing.",
      body: [
        "How long should it be? Google's helpful content guidance says plainly that it has no preferred word count. Write until the proof is on the page, then stop. Here is the block order we use:",
      ],
      bullets: [
        "Local intro: two or three sentences a local would recognize, such as the housing stock, common problems and the neighborhoods you work in most",
        "Services offered there: only the ones you actually provide in that city, each linking to its main service page",
        "Project gallery: three to six recent jobs with photos, the job type, the neighborhood and the month",
        "Local reviews: quotes from customers in that city, used with permission and linked to the source where possible",
        "Permits and code notes: what the city requires for this kind of job and who pulls the permit, with a link to the city's permit office",
        "Local FAQs: questions customers there actually ask, such as response times, HOA rules or older-home issues",
        "Call to action: one phone number and one form, with service hours for that area",
      ],
      subsections: [
        {
          heading: "A weak intro and a useful one",
          body: [
            "Weak: 'We proudly serve [CITY] with top-quality roof repair. Our [CITY] roofers are licensed, insured and ready to help [CITY] homeowners with all their roofing needs.' Swap the city name and it works for any town in the country, which is the problem.",
            "Useful: 'Most of our [CITY] jobs are re-roofs on homes built in the [DECADE] in [NEIGHBORHOOD] and [NEIGHBORHOOD]. We have a crew in the city most weekdays, we pull the re-roof permit ourselves, and the photos below are from jobs finished this year.'",
            "The difference isn't length. The second version makes four claims a homeowner can check, and each one is a reason to call. Fill the brackets only with what is true for your business.",
          ],
        },
      ],
    },
    {
      heading: "Where does the unique content come from?",
      definition:
        "From the field. Crews and project managers see what makes each city different every day; the job is to capture it in a form a web page can use.",
      body: [
        "Job photos. Ask crews for before-and-after photos on every job, with the address logged internally so you can label the neighborhood without publishing anyone's house number.",
        "Crew notes. A two-line note per job, what the problem was and what you did, is enough raw material for a local project write-up.",
        "Customer quotes. Ask at job completion, in writing, whether you may quote the customer with first name and neighborhood, and keep the permission on file.",
        "Permit experience. Your office manager already knows which cities take longest to issue permits and what each inspection office expects. That is local knowledge a competitor's copywriter can't fake.",
      ],
      callout: {
        title: "From the studio",
        body: "We give field teams a three-question form on their phones: job type, neighborhood, and one sentence on what was unusual about the job, with photos attached to the same entry. Once a month we turn those entries into project blurbs for the city pages, which keeps them current without anyone writing from a blank page.",
      },
    },
    {
      heading: "How should city pages link together?",
      definition:
        "Use hub and spoke. A service-areas hub links to every city page, each city page links to the relevant service pages and back to the hub, and neighboring cities link to each other where it helps the reader.",
      body: [
        "This gives Google the 'clearly defined, browseable hierarchy' its doorway policy contrasts with near-duplicate pages, and it gives visitors a way to find their town without a menu of 40 links. Keep the hub in the main navigation or footer, not every city, and link each project write-up to the city page it belongs to.",
        "Skip the footer wall. A block of 50 '[service] in [city]' links on every page adds nothing for readers and resembles the funnel pattern Google's doorway policy describes. One 'Areas we serve' link does the same job honestly.",
        "If city pages are live but calls aren't coming in, the problem may be elsewhere on the site. Our checklist for a [website that isn't generating leads](/blog/website-not-generating-leads) covers the usual suspects. A simple URL structure looks like this:",
      ],
      bullets: [
        "/service-areas/ as the hub, listing every city you serve",
        "/service-areas/plano-tx/ as a city page with local proof",
        "/services/roof-repair/ as a service page that links to the hub and to relevant city pages",
        "/projects/plano-hail-damage-roof-replacement/ as a project write-up that links to its city page",
      ],
    },
    {
      heading: "Schema: LocalBusiness with areaServed",
      definition:
        "Mark up the business once as a LocalBusiness subtype, such as Plumber, HVACBusiness or RoofingContractor, with areaServed listing the places you serve. Don't invent addresses for cities where you have no office.",
      body: [
        "Schema.org defines [areaServed](https://schema.org/areaServed) as the geographic area where a service or offered item is provided. It accepts a place, an administrative area, a geographic shape or plain text, can be used on an Organization or a Service, and supersedes the older serviceArea property.",
        "Schema.org's HomeAndConstructionBusiness type has more specific subtypes, including Electrician, GeneralContractor, HVACBusiness, Plumber and RoofingContractor. Use the closest one on your homepage or contact page, with your real address if you have a public one.",
        "On each city page, a Service item with areaServed set to that city describes what the page is about without pretending to be a location. Structured data describes the page; it doesn't replace the local proof above.",
      ],
    },
    {
      heading: "How do city pages relate to your Business Profile and Local Services Ads?",
      definition:
        "They are separate systems. City pages are website content, while your Google Business Profile service areas and your Local Services Ads targeting are set in their own dashboards. Keep all three consistent.",
      body: [
        "In a Business Profile you can set [up to 20 service areas](https://support.google.com/business/answer/9157481?hl=en) by city, postal code or other area. Google says the overall area shouldn't extend more than about two hours' driving time from where the business is based, and a radius is no longer an option. If you don't serve customers at your address, Google says to remove it and list only service areas.",
        "Google says [local results are based mainly on relevance, distance and prominence](https://support.google.com/business/answer/7091?hl=en). Distance is the one a city page can't change, because your profile is still based where it is. Prominence, Google adds, draws on information such as how many websites link to your business and how many reviews you have.",
        "[Local Services Ads](https://support.google.com/localservices/answer/12491364?hl=en) have their own service-area settings: you include or exclude counties, cities or zip codes in the ads dashboard. A customer who finds you through an ad, the map or a city page should see the same coverage. For paid search, send traffic to a dedicated landing page instead of a city page; our guide to [Google Ads landing pages for service businesses](/blog/google-ads-landing-page-service-business) explains why.",
      ],
    },
    {
      heading: "How do you measure each city page?",
      definition:
        "In Search Console, filter the Performance report by page to see which queries each city page appears for, then compare impressions, clicks and average position over time. Pair that with calls and form leads by page.",
      body: [
        "Search Console's Performance report shows clicks, impressions, click-through rate and average position, grouped by query or page, and lets you compare periods. Review city pages quarterly, and if you'd rather have someone else run it, this is part of our [SEO and search growth work](/services/seo-and-search-growth).",
      ],
      bullets: [
        "Filter by page: are the queries actually '[service] [city]' and neighborhood names, or unrelated terms?",
        "Compare date ranges: did impressions grow after you added projects and reviews?",
        "Check overlap: is the city page or a service page showing for the city query? If it is the service page, the city page may not be distinct enough.",
        "Track leads by page with a form field or a page-level call tracking number, so you see which pages produce jobs and not just visits",
        "Prune: improve or merge pages that still get no impressions after several months, instead of adding more",
      ],
    },
  ],
  faqs: [
    {
      q: "How many service area pages should a contractor have?",
      a: "There's no set number, and Google doesn't cap it. Build one page per city where you can show real proof: recent jobs, local reviews, crew coverage and permit knowledge. For most contractors that means starting with a handful of core cities and adding pages as work comes in, while every other town you serve goes on a single service-areas hub page.",
    },
    {
      q: "Are city pages considered doorway pages by Google?",
      a: "Not automatically. Google's spam policies target pages built to rank for similar queries that funnel visitors to one page, including city-targeted and substantially similar pages. A city page with local projects, reviews, permit notes and answers specific to that city is useful in its own right. A page that only swaps the city name is the pattern the policy describes.",
    },
    {
      q: "Can I rank in a city where I don't have an office?",
      a: "In regular organic results, a strong city page can rank for that city's searches. The map results are harder. Google says local results depend mainly on relevance, distance and prominence, and distance is measured from where your business is. Your Business Profile can list service areas within about two hours' drive, but that doesn't move where the business is based.",
    },
    {
      q: "How long should a service area page be?",
      a: "As long as it takes to show proof, and no longer. Google's helpful content guidance says it has no preferred word count. A page with four real projects, three local reviews, a permit note and five local FAQs will be substantial without padding. A page that needs filler to reach a word target probably shouldn't exist yet.",
    },
    {
      q: "Should service area pages go in the main navigation?",
      a: "Put the hub in the navigation or footer, not every city. A single 'Areas we serve' link keeps the menu usable and gives Google a clear hierarchy, which is what its doorway policy contrasts with near-duplicate pages. Link to individual city pages from the hub, from relevant service pages and from project write-ups in those cities.",
    },
  ],
  sources: [
    {
      label:
        "Google Search Central: Spam policies for Google web search (doorway and scaled content abuse)",
      href: "https://developers.google.com/search/docs/essentials/spam-policies?hl=en",
    },
    {
      label: "Google Search Central: Creating helpful, reliable, people-first content",
      href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=en",
    },
    {
      label: "Google Business Profile Help: Manage your service areas",
      href: "https://support.google.com/business/answer/9157481?hl=en",
    },
    {
      label: "Google Business Profile Help: Tips to improve your local ranking",
      href: "https://support.google.com/business/answer/7091?hl=en",
    },
    {
      label: "Local Services Help: Edit your industries, service areas and job types",
      href: "https://support.google.com/localservices/answer/12491364?hl=en",
    },
    {
      label: "Schema.org: areaServed property",
      href: "https://schema.org/areaServed",
    },
  ],
  internalLinks: [
    {
      label: "Google Ads landing pages for service businesses",
      to: "/blog/google-ads-landing-page-service-business",
    },
    { label: "Website not generating leads", to: "/blog/website-not-generating-leads" },
    {
      label: "Google Business Profile practitioner listings",
      to: "/blog/google-business-profile-practitioner-listings",
    },
    {
      label: "Biggest SEO mistakes businesses make",
      to: "/blog/biggest-seo-mistakes-businesses-make-2026",
    },
    { label: "SEO and search growth", to: "/services/seo-and-search-growth" },
  ],
  cta: {
    title: "Want a second opinion on your city pages?",
    body: "Send us your site and the cities you want to rank in. We'll tell you which pages have enough local proof to stand on their own and which should fold into a hub.",
  },
};

export default post;
