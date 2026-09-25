import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Google Ads Landing Page for Service Businesses: How to Build",
  metaDescription:
    "Your homepage makes Google Ads visitors hunt. Build one landing page per service and area, match it to the ad, and track calls and forms as conversions.",
  keywords: [
    "google ads landing page for service business",
    "ppc landing page for contractors",
    "home service landing page",
    "law firm landing page",
    "landing page vs homepage for google ads",
    "google ads landing page experience",
  ],
  keyTakeaways: [
    "Send Google Ads clicks to a page built for one service, one area and one action. Google's own advice is to choose a landing page that closely matches the ad and keywords and mirrors the ad's call to action.",
    "Build separate pages only where the service, offer or location genuinely differs. Near-identical city pages can fall under Google's doorway abuse policy if they end up in organic search.",
    "On mobile, the first screen needs the service and area, one line of proof, a tap-to-call button and a short form.",
    "Track form submissions and calls as conversions, then import qualified leads so bidding learns from customers, not clicks.",
    "Every advertiser is covered by the FTC's testimonial rule. Law firms also answer to state rules based on ABA Model Rule 7.1, so no outcome promises.",
  ],
  content: [
    {
      heading: "Should Google Ads go to your homepage or a landing page?",
      definition:
        "Send Google Ads traffic to a landing page built for one service, one area and one action, not your homepage. Google's guidance is to choose a page that closely matches the ad and keywords and mirrors the ad's call to action. A homepage serves every visitor, so it rarely matches any single search.",
      body: [
        "A homepage has to serve everyone: past clients looking for a phone number, job seekers, and people comparing the five services you offer. Someone who searched for emergency AC repair in Phoenix wants proof that you do that job, in that city, soon. Every extra choice on a homepage is another chance to leave.",
        "Google says as much in its [advice on optimizing ads and landing pages](https://support.google.com/google-ads/answer/6238826?hl=en): pick a landing page that closely matches your ad and keywords, and mirror the ad's call to action on the page. If the ad offers a free estimate, the estimate form should be the first thing the visitor sees.",
        "The page also affects how Google rates your ads. Landing page experience is one of three components of [Quality Score](https://support.google.com/google-ads/answer/2404197?hl=en), alongside expected clickthrough rate and ad relevance. Google describes Quality Score as a diagnostic tool and says it isn't an input in the ad auction, so treat a poor landing page rating as a symptom to investigate, not a number to game.",
        "You'll see claims online that landing pages convert a certain number of times better than homepages. We couldn't trace a specific multiplier to a primary source, so we won't quote one. The comparison is cheap to run in your own account, and your own result is the one that matters.",
      ],
    },
    {
      heading: "One service, one area, one action: how many pages you need",
      definition:
        "Build one landing page for each service and area combination that has its own ad group and a real difference in offer or content. More pages only help if each one is more useful to the person who clicked.",
      body: [
        "For a home services company, that might mean separate pages for water heater repair, drain cleaning and sewer line replacement, because the buyer, the urgency and the price differ. It doesn't usually mean 40 copies of the drain cleaning page with the city name swapped.",
        "Google's spam policies define [doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies) as pages created to rank for similar queries that lead people to intermediate pages less useful than the final destination. One of Google's examples is a set of pages aimed at specific cities or regions that funnel visitors to one page. That policy is about organic search, but ads-only pages often get indexed anyway. Many advertisers set ad variants to noindex so they don't compete in organic results. Either way, each page should be worth landing on.",
        "Where location really matters, make the page earn it: the service area and realistic response times, local project photos, local reviews, licensing for that state or city, and parking or directions if clients visit. For organic pages built to rank locally, see our guide to [service area pages for contractors](/blog/service-area-pages-for-contractors).",
      ],
      table: {
        caption: "How many landing pages to build",
        headers: ["Situation", "Pages to build", "Why"],
        rows: [
          [
            "One core service in one metro area",
            "One landing page",
            "A single, well-matched page can serve the whole ad group",
          ],
          [
            "Several services with different buyers or prices",
            "One page per service",
            "The headline, proof and offer change with the service",
          ],
          [
            "One service across several cities with the same offer",
            "One page listing every area served, with the city named in each ad",
            "City copies would be near-duplicates",
          ],
          [
            "One service in cities with different licensing, pricing or teams",
            "One page per city",
            "The content genuinely differs",
          ],
          [
            "Emergency and scheduled versions of the same service",
            "Separate pages",
            "Emergency pages lead with the phone; scheduled ones lead with booking",
          ],
        ],
      },
    },
    {
      heading: "Message match: mirror the ad's keyword, offer and location",
      body: [
        "Message match means the landing page repeats what made someone click. Google's help page gives a retail example: if your ad promises shoes at 20% off, shoppers should be able to find and buy those shoes at that price on the page. For a service business, the equivalent elements are the service named in the keyword, the offer in the ad and the location.",
        "Here's a worked example for a hypothetical personal injury firm in Houston. The ad group targets car accident lawyer searches in Houston. The ad headline reads 'Houston Car Accident Lawyers' and the description offers a free case review. So the landing page headline should say Houston car accident lawyers, the first screen should offer the free case review with a short form and a phone number, and the proof should relate to car accident clients rather than list every practice area.",
        "Group keywords by theme so each ad group maps to one page. Google recommends grouping keywords by theme or product instead of putting them all in one ad group, for the same reason: the closer the keyword, the ad and the page, the more relevant the whole experience.",
      ],
      subsections: [
        {
          heading: "A home services version of the same check",
          body: [
            "Take a hypothetical HVAC company running an ad group for furnace repair in Denver, with an ad that mentions same-day appointments and upfront pricing. A matched page opens with 'Furnace repair in Denver', states the same-day window in plain terms, explains how the upfront price is set, and puts the call button next to it.",
            "Then read the page as a skeptical customer. Does anything on the first screen contradict the ad, such as a different phone number, a 'serving all of Colorado' line, or an offer that has expired? Those small mismatches are what make people hit the back button and click the next ad.",
          ],
          bullets: [
            "The keyword's service appears in the page headline",
            "The ad's offer appears on the first screen, with the same wording and terms",
            "The location in the ad matches the service area on the page",
            "The phone number matches the ad's call asset or tracked number",
            "Expired offers are removed from ads and pages on the same day",
          ],
        },
      ],
    },
    {
      heading: "What should go above the fold on mobile?",
      definition:
        "On a phone, the first screen should answer four questions: what service, where, why trust you, and how to reach you right now.",
      body: [
        "Google's help notes that many of your customers will visit on a mobile device, where it's harder to find things, so design the mobile first screen before the desktop version. Its checklist for mobile pages starts with making it easy to contact you and easy to navigate.",
        "Below the fold, answer the objections your team hears on every call: how pricing or estimates work, what happens after someone gets in touch, the service area, any guarantee you actually offer, and short FAQs. Keep the navigation light. Removing the full site menu keeps attention on the action, but a logo link home and a footer with your address and policies still help trust.",
      ],
      bullets: [
        "A headline naming the service and area, matching the ad",
        "One line on the outcome and who it's for: homeowners, injured drivers, small practices",
        "A single proof point, such as a review rating with its count, years licensed or a recognized certification",
        "A tap-to-call button using your tracked number",
        "A short form or booking button, with a note on when you'll respond",
        "No full navigation menu competing with the call to action",
        "Hours, or an 'available now' note if you take urgent calls",
      ],
    },
    {
      heading: "Trust and compliance: reviews, licenses and legal advertising rules",
      body: [
        "Use real reviews, attributed and specific, and show license numbers where your trade or state requires them. Photos of your actual team and work beat stock images.",
        "Every US advertiser is covered by the FTC's [Consumer Reviews and Testimonials Rule](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers), in effect since October 21, 2024. It bans fake or false testimonials, undisclosed reviews by insiders, review incentives that require a particular sentiment, and review suppression. The FTC also notes that testimonials on your own website are yours: you're disseminating them, not just hosting them.",
        "Law firms carry an extra layer. ABA Model Rule 7.1 says a lawyer shall not make a false or misleading communication about the lawyer or the lawyer's services, and its comment warns that truthfully reported results can still mislead if they suggest the same result is likely without regard to the facts of each case. A disclaimer may help. State rules differ, sometimes a lot: the [Louisiana Legal Ethics commentary on Rule 7.1](https://lalegalethics.org/louisiana-rules-of-professional-conduct/article-7-information-about-legal-services/rule-7-1-communications-concerning-a-lawyers-services/) notes that Louisiana's advertising rules differ markedly from the ABA model. Have the responsible attorney approve every landing page and check your state bar's rules on testimonials, past results and any filing or review requirements.",
        "We've produced legal explainer videos and ad creative for Affinity Law, and the principle we'd apply to any law firm landing page is the same: explain the process (what happens after an accident, what a consultation covers) rather than promising outcomes. It keeps the page useful and inside the rules. Our guide to law firm explainer video costs covers budgeting for that kind of content. This section is general information, not legal advice.",
      ],
    },
    {
      heading: "Speed and Google's landing page experience",
      body: [
        "Google's Quality Score help describes landing page experience as how relevant and useful your page is to the people who click your ad. Speed is part of useful. A page that takes several seconds to show the phone number on mobile data loses people who were about to call.",
        "Landing pages are easier to make fast than most sites because they do less. Use one compressed hero image instead of a slider or background video. Load chat widgets and heatmap tools after the page is interactive, or drop them. Keep third-party scripts to the ones someone actually uses. Then check the page against Google's Core Web Vitals targets, which we list in our [lead diagnostic for service websites](/blog/website-not-generating-leads), using field data where it exists.",
        "Test on a real mid-range phone over mobile data, not just on office Wi-Fi. Watch for layout shifts that move the call button as the page loads, and for forms that open the wrong keyboard for phone numbers.",
      ],
    },
    {
      heading: "How do you track calls and forms as conversions?",
      definition:
        "Track three things: form submissions, calls from the ad itself, and calls from the landing page. Then send qualified leads back to Google Ads so bidding learns which clicks became customers.",
      body: [
        "Form submissions are the easy part. Fire the conversion when the submission succeeds, on the thank-you state, not on the button click, so failed or invalid submissions don't count.",
        "For calls, Google Ads can [track calls to a phone number on your website](https://support.google.com/google-ads/answer/6095883) by showing a Google forwarding number in place of your own. Calls can then be tied to the keywords, ads and campaigns that drove them, and counted as conversions only when they last longer than a minimum length you set. Calls from call assets in the ad itself are tracked separately. If you use a separate call tracking tool, confirm it can send calls to Google Ads as conversions before you commit.",
        "A click on a phone number isn't a call. Count it as a secondary signal at most, or you'll reward pages that get taps from people who hang up.",
        "The step after that matters more than it sounds: marking in your CRM which leads were qualified and which became clients, then importing those outcomes into Google Ads. We cover the setup in [offline conversion tracking for service businesses](/blog/offline-conversion-tracking-service-business).",
      ],
    },
    {
      heading: "What should you A/B test first?",
      body: [
        "Most service-business accounts don't have the volume for fine-grained tests. If a page gets, say, 30 leads a month, a button-color test would need to run far longer than anyone will wait for a trustworthy answer. Test big differences, one at a time, and run each for whole weeks so weekday and weekend patterns balance out.",
        "Judge tests on qualified leads, not raw form fills. An offer that doubles submissions but fills the pipeline with people outside your area is a loss.",
      ],
      table: {
        caption: "A sensible test order for service landing pages",
        headers: ["Test", "Example", "Measure"],
        rows: [
          [
            "Offer",
            "Free estimate vs. a discount on the first visit vs. same-week booking",
            "Qualified leads, not just form fills",
          ],
          [
            "Primary action",
            "Call-first layout vs. form-first layout",
            "Calls plus forms, split by device",
          ],
          [
            "Headline",
            "Service and area vs. an outcome-led headline",
            "Lead rate and early exits from the first screen",
          ],
          [
            "Proof",
            "Review snippet vs. licensing and guarantees vs. a short video",
            "Lead rate and lead quality",
          ],
          [
            "Form length",
            "Three fields vs. five with a qualifying question",
            "Completion rate and share of qualified leads",
          ],
        ],
      },
      callout: {
        title: "From the studio",
        body: "We write the ad copy and the landing page's first screen in the same document, side by side, before any design starts. If the page headline doesn't repeat the promise in the ad, it gets caught in review instead of after the budget is spent. It's a small habit that keeps the ads team and the web team working from the same message.",
      },
    },
    {
      heading: "Custom build vs landing-page builder: when each makes sense",
      body: [
        "A landing-page builder is a good way to test offers before committing to a design. Once you know which service pages and offers work, rebuilding them on your main site gives you control over speed, tracking and brand consistency.",
        "Pixel2Tech designs and builds landing pages and full service sites for US businesses. If you want pages built to this spec, with calls and forms tracked from day one, see our [website development service](/services/website-development).",
      ],
      table: {
        caption: "Landing-page builder vs. custom pages on your site",
        headers: ["Factor", "Landing-page builder", "Custom build on your site"],
        rows: [
          ["Time to launch", "Days, using templates", "Longer; needs design and development"],
          [
            "Cost structure",
            "Ongoing subscription",
            "Upfront build, then your normal hosting and upkeep",
          ],
          [
            "Page speed",
            "Depends on the builder's templates and scripts",
            "Fully under your control",
          ],
          [
            "Tracking and CRM",
            "Built-in integrations; custom scripts may be limited",
            "Any setup you need, including server-side tracking",
          ],
          [
            "Brand consistency",
            "Easy to drift from the main site",
            "Shares your site's design system",
          ],
          [
            "Best for",
            "Testing offers quickly with no developer",
            "Many services or areas, or strict speed and compliance needs",
          ],
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Should Google Ads go to my homepage or a landing page?",
      a: "A landing page, in almost every case. Google's own guidance is to send people to a page that closely matches the ad and keywords and mirrors the ad's call to action. A homepage serves every kind of visitor, so it rarely matches any single search. Use a page built for one service, one area and one action, with the phone number and form on the first screen.",
    },
    {
      q: "How many landing pages do I need for Google Ads?",
      a: "One for each service and area combination that has its own ad group and genuinely different content, such as a different offer, price, license or team. If only the city name would change, use one page that lists every area you serve and name the city in the ad instead. Near-duplicate city pages add upkeep and can look like doorway pages.",
    },
    {
      q: "What makes a good landing page for a home service business?",
      a: "A first screen that names the service and area, shows one strong proof point such as a review rating or license, and offers a tap-to-call button and a short form. Below that, explain how pricing or estimates work, what happens after someone calls, and your service area. It should load quickly on mobile data and track both calls and forms.",
    },
    {
      q: "Can law firms use testimonials on landing pages?",
      a: "Often yes, with limits. ABA Model Rule 7.1 prohibits false or misleading communications, and its comment warns that past results can create unjustified expectations. States add their own rules on testimonials, disclaimers and advertising review, and they vary. Testimonials must also be genuine under the FTC's rule. Have the responsible attorney check your state bar's rules before publishing. This isn't legal advice.",
    },
    {
      q: "How do I track phone calls from a Google Ads landing page?",
      a: "Use Google Ads call conversions for website calls, which show a Google forwarding number on your page and count a call as a conversion when it lasts longer than a minimum length you set. Track calls from call assets separately. For better data, log each call as a lead in your CRM, mark it qualified or not, and import that outcome into Google Ads.",
    },
  ],
  internalLinks: [
    {
      label: "Website not generating leads? A diagnostic",
      to: "/blog/website-not-generating-leads",
    },
    {
      label: "Offline conversion tracking for service businesses",
      to: "/blog/offline-conversion-tracking-service-business",
    },
    { label: "Service area pages for contractors", to: "/blog/service-area-pages-for-contractors" },
    { label: "Law firm explainer video cost", to: "/blog/law-firm-explainer-video-cost" },
    { label: "Website development", to: "/services/website-development" },
  ],
  sources: [
    {
      label: "Google Ads Help: Optimize your ads and landing pages",
      href: "https://support.google.com/google-ads/answer/6238826?hl=en",
    },
    {
      label: "Google Ads Help: About Quality Score for Search campaigns",
      href: "https://support.google.com/google-ads/answer/2404197?hl=en",
    },
    {
      label: "Google Ads Help: Tracking calls to a phone number on a website",
      href: "https://support.google.com/google-ads/answer/6095883",
    },
    {
      label: "Google Search Central: Spam policies (doorway abuse)",
      href: "https://developers.google.com/search/docs/essentials/spam-policies",
    },
    {
      label: "FTC: Consumer Reviews and Testimonials Rule, questions and answers",
      href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers",
    },
    {
      label: "Louisiana Legal Ethics: Rule 7.1 text and commentary, with the ABA model",
      href: "https://lalegalethics.org/louisiana-rules-of-professional-conduct/article-7-information-about-legal-services/rule-7-1-communications-concerning-a-lawyers-services/",
    },
  ],
  cta: {
    title: "Do your ads and landing pages say the same thing?",
    body: "Send us one campaign and the page it points to. We'll mark where the message breaks, what's slowing the page down, and which calls and forms aren't being counted.",
  },
};

export default post;
