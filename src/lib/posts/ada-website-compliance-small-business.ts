import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Does a Small Business Website Need to Be ADA Compliant?",
  metaDescription:
    "No small-business exemption exists, but no Title III web regulation does either. What the DOJ says, what the 2024 rule covers and what to fix first.",
  keywords: [
    "does my small business website need to be ada compliant",
    "ada website compliance small business",
    "ada title iii website requirements",
    "doj web accessibility rule 2026 extension",
    "wcag 2.1 aa small business website",
    "ada website demand letter what to do",
    "do accessibility widgets make a website ada compliant",
    "accessibe ftc order",
  ],
  disclosure:
    "This article is general information, not legal advice; if you've received a demand letter or lawsuit, talk to an attorney. Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the website services discussed here.",
  keyTakeaways: [
    "Title III covers businesses open to the public regardless of size, and the DOJ's position is that this includes what they offer online. There is no small-business exemption.",
    "There is also no DOJ web regulation for private businesses. The 2024 rule that adopted WCAG 2.1 AA covers state and local governments, and an April 2026 interim final rule moved its deadlines to April 26, 2027 and April 26, 2028.",
    "WCAG 2.1 or 2.2 Level AA is the practical target for a business site. Content that meets WCAG 2.2 also meets 2.1 and 2.0.",
    "Overlays don't guarantee compliance. In 2025 the FTC finalized an order requiring accessiBe to pay $1 million over claims that its AI tool could make any website WCAG-compliant.",
    "If you receive a demand letter, call an attorney first. Then audit, fix templates before content, and keep a dated record of the work.",
  ],
  content: [
    {
      heading: "Does a small business website need to be ADA compliant?",
      definition:
        "If your business is open to the public, the Department of Justice's position is that the ADA covers what you offer on your website, and Title III applies regardless of business size. But no DOJ regulation sets a technical web standard for private businesses, so WCAG 2.1 or 2.2 Level AA is the practical target, not a legal checklist.",
      body: [
        "That answer frustrates people because it isn't a clean yes or no. The practical version: the legal risk is real, the DOJ has told businesses they can choose how to make their sites accessible, and the benchmark almost everyone uses is the Web Content Accessibility Guidelines.",
        "On size, the DOJ's [ADA primer for small businesses](https://www.ada.gov/resources/title-iii-primer/) says nearly all types of businesses that serve the public are covered by Title III, regardless of the size of the business. Size does affect some obligations for physical premises, where the \"readily achievable\" standard for removing barriers depends on a business's size and resources. It doesn't create an exemption.",
      ],
    },
    {
      heading: "Title II vs Title III: who the 2024 DOJ web rule covers",
      definition:
        "The DOJ's 2024 web accessibility rule applies to state and local governments under Title II, not to private businesses under Title III.",
      body: [
        "In 2024 the DOJ adopted WCAG 2.1 Level AA as the technical standard for the web content and mobile apps of state and local governments. [ADA.gov's summary of the rule](https://www.ada.gov/resources/2024-03-08-web-rule/) says it applies to all state and local governments, including their agencies and departments, as well as special purpose districts, Amtrak and other commuter authorities.",
        "On April 20, 2026, the DOJ published an interim final rule in the Federal Register (document 2026-07663) that moved the compliance dates. As of September 2026, they stand as follows:",
      ],
      table: {
        caption: "Title II web rule compliance dates (as of September 2026)",
        headers: ["Who", "Original date", "Date after the April 2026 extension"],
        rows: [
          [
            "State and local governments with a total population of 50,000 or more",
            "April 24, 2026",
            "April 26, 2027",
          ],
          [
            "Public entities with a total population under 50,000, and special district governments",
            "April 26, 2027",
            "April 26, 2028",
          ],
          [
            "Private businesses (Title III)",
            "Not covered by this rule",
            "Not covered by this rule",
          ],
        ],
      },
      subsections: [
        {
          heading: "Why a private business should still pay attention",
          body: [
            "The rule shows which standard the DOJ chose when it did write a web regulation: WCAG 2.1 Level AA. If you're deciding what to build to, that's a strong signal. And if you sell to state or local government agencies, their own obligations may shape what they ask of your deliverables.",
          ],
        },
      ],
    },
    {
      heading: "What the DOJ's 2022 guidance asks of private businesses",
      definition:
        "The March 2022 guidance says businesses open to the public must make their online goods and services accessible, but leaves the method to them.",
      body: [
        "The DOJ's [guidance on web accessibility and the ADA](https://www.ada.gov/resources/web-guidance/), dated March 18, 2022, says the Department has consistently taken the position that the ADA's requirements apply to all the goods and services that public accommodations offer, including those offered on the web.",
        "It also says the Department doesn't have a regulation setting out detailed standards, and that businesses can currently choose how they will make their online offerings accessible. It points to existing technical standards, WCAG and the federal Section 508 Standards, as helpful guidance, and it lists the kinds of barriers it has in mind:",
      ],
      bullets: [
        "Poor color contrast that makes text hard to read.",
        "Color used alone to convey information.",
        "Images without text alternatives (alt text).",
        "Videos without captions.",
        "Online forms without proper labels and error indicators.",
        "Navigation that works only with a mouse, not a keyboard.",
      ],
    },
    {
      heading: "Why WCAG 2.1 or 2.2 Level AA is still the practical target",
      definition:
        "WCAG is the standard the DOJ's guidance points to, and Level AA is the level the DOJ adopted when it wrote its Title II rule.",
      body: [
        "WCAG defines three conformance levels: A (lowest), AA and AAA (highest). [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is a W3C Recommendation; its current version is dated 12 December 2024, and content that conforms to WCAG 2.2 also conforms to 2.1 and 2.0. Building to 2.2 AA therefore covers the 2.1 AA standard in the Title II rule, with room to spare.",
        "Two examples of what AA means in practice. Normal-size text needs a contrast ratio of at least 4.5:1 against its background. And under WCAG 2.2's new target size criterion, clickable targets generally need to be at least 24 by 24 CSS pixels, with listed exceptions such as links inside a sentence.",
      ],
    },
    {
      heading: "Where small-business sites usually fail",
      definition:
        "Most accessibility failures on small-business sites come from a handful of template and content issues that a basic review can find.",
      body: [
        "The W3C's [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) are a good first pass you can run in any browser: page titles, alt text, headings, contrast, text resize, keyboard access and visible focus, forms and errors, moving or flashing content, captions and basic structure. The W3C is clear that a page can pass these checks and still have significant barriers, so treat them as a starting point, not a verdict.",
        "Don't skip the parts other companies built. Booking widgets, chat pop-ups, embedded maps, review carousels and payment forms all appear on your pages, and customers experience them as part of your site. Include them in testing, and ask each vendor for its accessibility documentation before you renew.",
      ],
      table: {
        caption: "Common problems and their fixes",
        headers: ["Area", "Typical problem", "Fix"],
        rows: [
          [
            "Forms",
            "Placeholder text instead of labels; errors shown only in red",
            "Visible labels, error messages in text, a submit button you can reach by keyboard",
          ],
          [
            "Images",
            "Missing alt text or file names as alt text; words baked into images",
            "Describe meaningful images, mark decorative ones as decorative, use real text",
          ],
          [
            "Contrast",
            "Light gray text on white; text over busy photos",
            "Meet 4.5:1 for normal text; add an overlay behind text on images",
          ],
          [
            "Keyboard",
            "Menus, sliders or pop-ups that can't be reached or closed without a mouse",
            "Test every interactive element with Tab, Enter and Escape",
          ],
          [
            "Video",
            "No captions on explainer or testimonial videos",
            "Add accurate captions and review auto-generated ones before publishing",
          ],
          [
            "PDFs",
            "Scanned menus, price lists or intake forms",
            "Publish the content as HTML pages, or as tagged, accessible PDFs",
          ],
          [
            "Headings",
            "Text styled to look like headings but not marked up as headings",
            "Use real heading levels, in order",
          ],
        ],
      },
    },
    {
      heading: "Do accessibility widgets make you compliant? What the FTC's accessiBe order means",
      definition:
        "No widget can guarantee compliance, and the FTC has already acted against a vendor for claiming its AI tool could make any website WCAG-compliant.",
      body: [
        "Accessibility overlays add a toolbar or script that tries to fix problems automatically. In January 2025 the FTC [announced a proposed order](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites) requiring accessiBe, which sells a plug-in called accessWidget, to pay $1 million. The FTC alleged that accessiBe falsely claimed its product could make any website compliant with WCAG, and that it formatted third-party articles and reviews to look like independent opinions.",
        "In April 2025 the Commission voted 3-0 to [approve the final order](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million). It bars the company from claiming its automated products can make any website WCAG-compliant, or keep it compliant over time, unless it has evidence to support those claims.",
        "The lesson for a business owner: marketing claims about automatic compliance can run well ahead of what a product does. Fix the templates and content of the site itself. If you use a tool, treat it as an extra for some users, not as a legal shield.",
      ],
    },
    {
      heading: "Got a demand letter? What to do in the first week",
      definition:
        "Treat an ADA demand letter as a legal matter first and a website project second. Speak to an attorney before you reply.",
      body: ["A calm first week usually looks like this:"],
      bullets: [
        "Don't ignore the letter, and don't reply or pay anything before speaking to an attorney.",
        "Note any deadline in the letter and share it with your attorney.",
        "Save a dated record of the site as it is today, such as screenshots of the pages the letter mentions.",
        "Gather your records: who built the site, the contract, any earlier audits and any accessibility statement.",
        "Ask your web team for a quick review of the specific barriers the letter describes.",
        "Don't install an overlay as a quick fix; it's unlikely to resolve the issues the letter lists.",
        "Check whether your business insurance covers this kind of claim.",
        "With your attorney, plan remediation you can document.",
      ],
      subsections: [
        {
          heading: "A reminder on advice",
          body: [
            "This section is general information. Only an attorney who knows your situation and jurisdiction can advise you on how to respond, what to say, and whether to settle.",
          ],
        },
      ],
    },
    {
      heading: "A realistic remediation plan: audit, templates, content, monitoring",
      definition:
        "Fix the parts that repeat first. A template fix corrects every page built on it, while a content fix corrects one page.",
      body: [
        "Keep a dated record of what you found, what you fixed and when. It helps you track progress, and your attorney may want it.",
        "On cost, one detail is worth a question to your accountant. The DOJ's small-business primer describes a Disabled Access Credit for businesses with 30 or fewer full-time employees or total revenues of $1 million or less in the previous tax year. Whether your website work qualifies is a tax question, so ask before you assume it does.",
      ],
      subsections: [
        {
          heading: "1. Audit",
          body: [
            "Combine an automated scan with manual testing by keyboard and screen reader on your key templates and your most important tasks: contacting you, booking, buying or applying. Automated tools can't judge things like whether alt text is meaningful or whether a form's error messages make sense, so the manual part isn't optional.",
          ],
        },
        {
          heading: "2. Fix templates and components",
          body: [
            "Header, navigation, footer, forms, buttons, pop-ups and page templates. These fixes carry across the whole site and give you the most progress per hour.",
          ],
        },
        {
          heading: "3. Fix content",
          body: [
            "Alt text, heading order, link text, captions and PDFs. Train whoever publishes content, so new pages don't bring the same problems back.",
          ],
        },
        {
          heading: "4. Monitor",
          body: [
            "Retest after every design change or new plugin, and review a sample of new content on a regular schedule.",
          ],
        },
      ],
      callout: {
        title: "From the studio",
        body: "When you audit, start with the contact or booking flow, not the homepage. Try to complete it using only the keyboard, then again with a screen reader turned on. If you can't send an inquiry that way, fix that first, because it's the task your customers came to do and the one a complaint is most likely to describe.",
      },
    },
    {
      heading: "Accessibility statements: what to include and what not to promise",
      definition:
        "An accessibility statement tells visitors which standard you aim for, what you know isn't working yet, and how to reach you for help.",
      body: [
        "The W3C's guidance on [accessibility statements](https://www.w3.org/WAI/planning/statements/) recommends including:",
      ],
      bullets: [
        "A commitment to accessibility for people with disabilities.",
        "The standard you apply, such as WCAG 2.2.",
        "Contact information for people who run into problems.",
        "Known limitations, described in plain language.",
        "The measures you've taken to support accessibility.",
      ],
      subsections: [
        {
          heading: "Don't overpromise",
          body: [
            'Don\'t claim full compliance unless an audit supports it. "We aim to meet WCAG 2.2 Level AA and are working on the issues listed below" is honest. "This site is 100% ADA compliant" is a promise you may not be able to keep. The DOJ\'s 2022 guidance also notes that giving the public a way to report accessibility problems helps website owners fix them, so make the contact route easy to find.',
          ],
        },
      ],
    },
    {
      heading: "Building accessibility into your next redesign or platform choice",
      body: [
        "Accessibility is cheapest when it's part of the brief. Put WCAG 2.2 AA in your requirements, ask vendors how they test, and include it as a line item. Our guide to [website redesign costs](/blog/website-redesign-cost-small-business) shows where it fits in the budget, and our [platform comparison](/blog/wordpress-vs-webflow-vs-squarespace-service-business) covers how WordPress, Webflow and Squarespace affect it. If you sell on Shopify, see our [Shopify ADA compliance checklist](/blog/shopify-ada-compliance-checklist).",
        "When you compare themes, templates or agencies, ask the same three questions: which WCAG version and level they build to, how they test (automated only, or manual keyboard and screen reader checks too), and what happens when your team adds content after launch. Vague answers to the second question usually mean accessibility hasn't been scoped.",
        "Pixel2Tech's [website development](/services/website-development) team can review your key templates and forms against WCAG 2.2 AA and fix what we find, working alongside your attorney if a letter has already arrived.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is there an ADA exemption for small business websites?",
      a: "No. The DOJ's small-business primer says nearly all types of businesses that serve the public are covered by Title III regardless of their size, and its 2022 web guidance says the ADA applies to goods and services offered on the web. What doesn't exist is a DOJ regulation setting a technical web standard for private businesses, which is why WCAG is the working benchmark.",
    },
    {
      q: "Does the DOJ's 2024 web accessibility rule apply to private businesses?",
      a: "No. It applies to state and local governments under Title II, including special purpose districts, Amtrak and commuter authorities. An interim final rule published on April 20, 2026 moved its compliance dates to April 26, 2027 for entities with populations of 50,000 or more and April 26, 2028 for smaller entities and special district governments. Private businesses fall under Title III.",
    },
    {
      q: "What WCAG level should a small business website meet?",
      a: "Aim for WCAG 2.2 Level AA. Level AA is the level the DOJ adopted, in WCAG 2.1, for state and local governments, and content that conforms to WCAG 2.2 also conforms to 2.1 and 2.0. Level AAA is rarely a realistic target for a whole site. Start with your key templates and the tasks customers most need to complete.",
    },
    {
      q: "Will an accessibility widget protect my business from an ADA lawsuit?",
      a: "You shouldn't rely on one. A widget doesn't fix the underlying code and content, and in 2025 the FTC finalized an order requiring accessiBe to pay $1 million after alleging it falsely claimed its tool could make any website WCAG-compliant. Fixing the site itself, and documenting that work, is the approach that actually reduces barriers.",
    },
    {
      q: "What should I do if I receive an ADA website demand letter?",
      a: "Contact an attorney before you respond or pay anything, and note any deadline in the letter. Save a dated record of the site, gather your website contract and any past audits, and ask your web team to review the specific barriers the letter describes. Avoid quick fixes like overlays; plan documented remediation with your attorney's guidance.",
    },
    {
      q: "Is an accessibility statement legally required?",
      a: "The DOJ's 2022 web guidance for businesses doesn't set a requirement for one, and there's no DOJ web regulation for private businesses. A statement is still useful: the W3C recommends including your standard, known limitations and contact details, and the DOJ notes that a way to report problems helps owners fix them. Ask your attorney about any state or contract requirements.",
    },
  ],
  sources: [
    {
      label: "ADA.gov: Guidance on Web Accessibility and the ADA (March 2022)",
      href: "https://www.ada.gov/resources/web-guidance/",
    },
    {
      label: "ADA.gov: Fact sheet on the 2024 Title II web and mobile app rule",
      href: "https://www.ada.gov/resources/2024-03-08-web-rule/",
    },
    {
      label: "Federal Register: Extension of compliance dates (Interim final rule, April 20, 2026)",
      href: "https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web",
    },
    {
      label: "ADA.gov: ADA Update, A Primer for Small Business",
      href: "https://www.ada.gov/resources/title-iii-primer/",
    },
    {
      label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
      href: "https://www.w3.org/TR/WCAG22/",
    },
    {
      label: "FTC: Final order requiring accessiBe to pay $1 million (April 2025)",
      href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million",
    },
  ],
  internalLinks: [
    { label: "Shopify ADA compliance checklist", to: "/blog/shopify-ada-compliance-checklist" },
    {
      label: "Website redesign cost for small businesses",
      to: "/blog/website-redesign-cost-small-business",
    },
    {
      label: "WordPress vs Webflow vs Squarespace for service businesses",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
    { label: "Website ownership checklist", to: "/blog/website-ownership-checklist" },
    { label: "Website development services", to: "/services/website-development" },
  ],
  cta: {
    title: "Want to know where your site stands before a letter arrives?",
    body: "Send us your URL. We'll review your key templates and forms against WCAG 2.2 AA and give you a prioritized fix list you can hand to any developer.",
  },
};

export default post;
