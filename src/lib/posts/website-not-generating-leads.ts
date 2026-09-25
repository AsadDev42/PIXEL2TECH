import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Website Not Generating Leads? A Service Business Diagnostic",
  metaDescription:
    "Getting visitors but few inquiries? Check tracking, form delivery, traffic fit, offer, trust and response time with this diagnostic for US service firms.",
  keywords: [
    "website not generating leads",
    "website traffic but no leads",
    "why is my website not getting leads",
    "service business website conversion rate",
    "contact form not converting",
    "improve website conversions small business",
  ],
  keyTakeaways: [
    "Rule out missing data first. Submit every form, call every number and confirm each lead shows up in your inbox, your CRM and Google Analytics before you change the design.",
    "Split results by traffic source and landing page. The right audience with no inquiries is a page problem. The wrong audience is a targeting problem, and a redesign won't fix it.",
    "Give each page one obvious next step on mobile: tap-to-call, a short form or a booking link. Ask only for what you need to respond.",
    "Testimonials must be genuine. The FTC's Consumer Reviews and Testimonials Rule, in effect since October 21, 2024, covers testimonials a business publishes on its own website.",
    "The leak often sits after the form. In an HBR audit of 2,241 US companies, 23% never responded to a web lead at all.",
  ],
  content: [
    {
      heading: "Why is your website getting traffic but no leads?",
      definition:
        "A service website that gets visits but few inquiries usually has one of five problems: leads arrive but aren't recorded, form emails or calls get lost, the traffic is the wrong audience, the page hides the next step, or nobody responds fast enough. Check them in that order, because each fix depends on the one before.",
      body: [
        "Most advice on this topic jumps straight to headlines, buttons and colors. Those matter, but they come fourth or fifth. If your contact form has been quietly failing since a plugin update, a new hero section changes nothing.",
        "This guide is for owners and marketing managers at US service firms, such as law practices, home services, clinics and B2B providers, where a lead is a call, a form or a booking rather than a checkout. Work through it top to bottom and write down what you find at each step. The notes become your brief, whether you fix things yourself or hand them to someone else.",
      ],
    },
    {
      heading: "First check: are you losing leads, or losing the data?",
      definition:
        "Before judging your conversion rate, confirm that every inquiry is being counted. A broken form event, an untracked phone number or a CRM that isn't synced can make a working website look dead.",
      body: [
        "Start with a simple reconciliation. Count the inquiries your team actually handled last month: emails, calls, booked appointments. Then compare that number with what Google Analytics and your CRM recorded for the same period. If the numbers are far apart, fix measurement before you touch the design.",
        "In Google Analytics 4, a form submission only counts as a conversion if you collect it as an event and mark it as a key event. Google's [documentation on key events](https://support.google.com/analytics/answer/9267568) explains that any collected event can be marked this way, and that key events then appear as a column in reports such as Landing pages and User acquisition. You'll need that column for the next step, so set it up now.",
        "Phone leads are the usual blind spot. On a service site, many visitors tap the number instead of filling in a form. If you only count forms, a page that produces calls all day will look like a failure. At minimum, track taps on phone links. If phone is your main channel, use call tracking. We cover the wiring in [offline conversion tracking for service businesses](/blog/offline-conversion-tracking-service-business).",
      ],
      table: {
        caption: "Measurement problems that look like a lead problem",
        headers: ["Symptom", "Likely cause", "Quick test"],
        rows: [
          [
            "Your team handled inquiries, analytics shows none",
            "Form event not firing, or not marked as a key event",
            "Submit the form and watch for the event in GA4 Realtime",
          ],
          [
            "Analytics shows submissions, the inbox is empty",
            "Notification emails going to spam or to an old address",
            "Submit a test with a unique name and search every inbox and spam folder",
          ],
          [
            "Calls happen but no conversions are recorded",
            "Phone taps or calls aren't tracked",
            "Tap the number on a phone and look for the event",
          ],
          [
            "Numbers dropped right after a site update",
            "Tracking tag or form plugin broken in the release",
            "Compare the week before and after the release date",
          ],
          [
            "Ad platforms report conversions your CRM can't find",
            "Duplicate or misfiring conversion tags",
            "Match conversion timestamps against CRM entries",
          ],
        ],
      },
      callout: {
        title: "From the studio",
        body: "Before we quote any redesign for a lead-generation site, we run a one-hour audit from a phone: submit every form with a unique test name, tap every phone number and booking link, and note what arrives, where, and how long it takes. It costs nothing, and it tells you whether you're fixing a website or fixing plumbing.",
      },
    },
    {
      heading: "Form delivery, spam filters and missed calls",
      body: [
        "A form that shows a thank-you message hasn't necessarily delivered anything. Many website forms send notification emails straight from the web server, sometimes using the visitor's address as the sender. Mail providers treat unauthenticated mail with suspicion. Gmail's [email sender guidelines](https://support.google.com/a/answer/81126) require every sender to set up SPF or DKIM authentication for its domain, and bulk senders need SPF, DKIM and DMARC.",
        "The practical fix is to send form notifications through an authenticated email service on your own domain, and to store every submission somewhere other than an inbox: your CRM, the form tool's entry log or a database. Then a spam filter can delay a lead but can't erase it.",
        "Calls leak in quieter ways. A number that rings an empty front desk at lunch, a voicemail box that's full, or an after-hours greeting that doesn't say when someone will call back all lose people who had already decided to call. None of this shows up in analytics.",
      ],
      bullets: [
        "Submit each form weekly with a unique test name and confirm it lands in the CRM and the right inbox.",
        "Send form notifications from an authenticated address on your domain, not from the visitor's email.",
        "Keep a copy of every submission outside email: CRM, form entries or a spreadsheet.",
        "Call your own number at lunchtime, after 5 p.m. and on a Saturday. Note what a caller hears.",
        "Check that the voicemail box has space and the greeting says when you'll call back.",
        "Confirm the phone number on the site matches your Google Business Profile and your ads.",
      ],
    },
    {
      heading: "Is it a traffic problem or a conversion problem?",
      definition:
        "If the right people visit and don't inquire, you have a conversion problem. If the wrong people visit, you have a traffic problem, and redesigning the page won't fix it.",
      body: [
        "Open the Landing pages report in GA4 with the key events column visible, then add the traffic source as a secondary dimension. You're looking for patterns by page and source, not one site-wide conversion rate.",
        "Three patterns are common. Blog posts that rank for informational searches bring readers who want an answer, not a provider, so a low inquiry rate there is normal. Paid campaigns with broad keywords can bring people outside your service area, or people looking for jobs, DIY help or free advice. And service pages that attract the right visitors but still produce nothing are your real conversion problem.",
        "If paid search is the leak, a [dedicated Google Ads landing page](/blog/google-ads-landing-page-service-business) usually matters more than homepage copy. If traffic fell right after a relaunch, check rankings and redirects in Search Console before you change anything else.",
      ],
      table: {
        caption: "Reading the landing page report",
        headers: ["What you see", "What it usually means", "Where to fix it"],
        rows: [
          [
            "High traffic and few inquiries on blog posts from informational searches",
            "Readers researching, not buying",
            "Add a relevant service link or offer, but don't judge the post as a sales page",
          ],
          [
            "Paid clicks with almost no inquiries",
            "Keyword, location or audience mismatch",
            "Search terms report, negative keywords, location settings, a dedicated landing page",
          ],
          [
            "Service page with qualified visitors and few inquiries",
            "Clarity, offer or friction problem",
            "The five-second test, offer and friction, and trust sections below",
          ],
          [
            "Traffic fell sharply after a site change",
            "Lost rankings or broken redirects",
            "Search Console and your redirect map",
          ],
        ],
      },
    },
    {
      heading: "The five-second test: what you do, for whom, and where",
      body: [
        "Show your main service page to someone who doesn't know your business for five seconds, then hide it. Ask three questions: what does this company do, who is it for, and where does it work? If they can't answer all three, the page is making visitors work too hard.",
        "Service businesses often fail on the third question. A plumbing company's headline says 'Quality service you can trust' and never names a city. A law firm lists practice areas but not the state where its lawyers are licensed. A B2B firm describes its 'solutions' without saying what it actually delivers.",
        "Rewrite the top of the page so the headline names the service and the place, and the line under it names the customer and the outcome. For a hypothetical plumber, that might read: 'Water heater repair and replacement in Mesa and Chandler. Written quotes before any work starts.' It's less clever and far more useful.",
      ],
    },
    {
      heading: "Offer and friction: one next step per page",
      definition:
        "Every page should make one next step obvious: call, request a quote or book a time. Offer a second option only when it serves a different kind of visitor.",
      body: [
        "A service page with 'Call us', 'Get a quote', 'Book a consultation', 'Download our guide' and a newsletter box asks the visitor to choose before they've decided to trust you. Pick the action that matches how your customers usually buy. Emergency services should lead with tap-to-call. Considered purchases such as legal matters or remodels suit a short form or a booking link.",
        "Form length is a trade-off, not a rule. Every field you add costs some completions, and every field you remove means your team knows less before they respond. Ask for what you need to respond well: a name, a phone number or email, and one or two qualifying questions such as ZIP code or type of service. Everything else can wait for the first conversation.",
        "On mobile, the next step should be visible without scrolling and stay reachable as the visitor reads. A slim sticky call bar does that well, as long as it doesn't cover content or jump around while the page loads.",
      ],
      bullets: [
        "One primary call to action per page, repeated after key sections",
        "The phone number as a tap-to-call link on mobile, with the same number everywhere",
        "Forms with only the fields you need to reply, plus one qualifying question",
        "A clear promise after submission: who will respond, how and by when",
        "No pop-up that covers the page on mobile before someone has read anything",
        "Booking links that open real available times, not a generic contact page",
      ],
    },
    {
      heading: "Trust signals that work, and FTC rules for testimonials",
      body: [
        "Visitors look for evidence that you're real, local and competent: named people, licenses and certifications, photos of actual work, reviews with specifics, and a physical address where one exists. Stock photos of smiling models do the opposite.",
        "On legal and professional sites, a short video in which the practitioner explains how a process works can build trust that a paragraph can't. We've produced legal explainer videos for Affinity Law, and the principle we'd apply to any firm is the same: explain the process clearly and don't promise outcomes.",
        "Reviews and testimonials also carry legal risk. The FTC's [Consumer Reviews and Testimonials Rule](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers) took effect on October 21, 2024, and courts can impose civil penalties for knowing violations. The FTC's guidance says a business that puts testimonials on its own website is disseminating them, not merely hosting them, so a fake or false testimonial on your site can create liability.",
        "The rule also covers undisclosed reviews by insiders such as employees and relatives, incentives that require a positive or negative review, suppressing reviews through threats or false accusations, and presenting a site you control as an independent review source. Incentives for honest reviews are allowed as long as they don't require a particular sentiment. The FTC's [August 2024 announcement](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials) also calls out AI-generated fake reviews.",
        "Professions add their own limits. Lawyer advertising, for example, is also governed by state bar rules, so testimonials and case results on a law firm site need the responsible attorney's review. This section is general information, not legal advice.",
      ],
    },
    {
      heading: "Speed and mobile issues that quietly kill inquiries",
      definition:
        "Google's Core Web Vitals set three targets for a good experience: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads.",
      body: [
        "Those are the thresholds published on [web.dev](https://web.dev/articles/vitals), and each one maps to a lead problem. Slow loading loses impatient mobile visitors before they see your number. Poor responsiveness means a tap on 'Call' or 'Submit' seems to do nothing, so people tap again or leave. Layout shift moves the button just as someone reaches for it.",
        "On service sites the causes tend to be the same handful of things: an autoplaying hero video, a slider with five full-size images, several chat and review widgets loading at once, and tracking scripts added over the years and never removed. Check field data in PageSpeed Insights or Search Console for your main service pages, not just the homepage, and fix the templates those pages share.",
        "Then test the form itself on a mid-range phone. Date pickers that are hard to use, fields that open the wrong keyboard, validation errors that only appear after submitting, and CAPTCHAs that fail silently all cost inquiries without showing up in any speed score.",
      ],
    },
    {
      heading: "Lead response time: the leak after the form",
      body: [
        "A website can do its job perfectly and still 'not generate leads' if nobody answers them. Research published in Harvard Business Review found this is common. The authors [audited 2,241 US companies](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) by submitting web leads: 37% responded within an hour, 24% took more than 24 hours and 23% never responded. Among companies that replied within 30 days, the average response time was 42 hours.",
        "In a separate analysis of 1.25 million leads, firms that tried to contact a lead within an hour were nearly seven times as likely to qualify it as firms that waited even an hour longer, and more than 60 times as likely as firms that waited 24 hours or more. The research dates from 2011, but the causes the authors named, such as pulling leads from the CRM once a day, still describe plenty of small businesses.",
        "The fixes are operational: an instant notification to a named person, an automatic acknowledgment that says when you'll respond, round-robin assignment when several people handle leads, and escalation when a lead sits untouched. Our guide to [automating lead follow-up](/blog/automate-lead-follow-up) walks through each step.",
      ],
    },
    {
      heading: "A 30-day fix plan in priority order",
      body: [
        "Work in this order. Each week's fixes make the next week's data trustworthy, so you're never judging a page on broken numbers.",
      ],
      bullets: [
        "Week 1, measurement: reconcile last month's real inquiries against GA4 and your CRM, fix form events, track phone taps and mark lead events as key events.",
        "Week 1, delivery: authenticate form email, store submissions outside the inbox, and test every form and phone number.",
        "Week 2, segmentation: review landing pages by source, then pause or tighten paid campaigns that send the wrong audience.",
        "Week 2, response: set up notifications, an automatic acknowledgment and a response-time target your team can actually meet.",
        "Week 3, clarity and offer: rewrite the top of your three highest-traffic service pages and cut each to one primary action.",
        "Week 3, trust: replace stock imagery, add license and credential details, and audit testimonials against the FTC rule.",
        "Week 4, speed and mobile: fix the shared templates behind your service pages and retest every form on a real phone.",
        "End of month: compare inquiries per service page with your week-one baseline, using the same definitions.",
      ],
      subsections: [
        {
          heading: "When a redesign is the right answer",
          body: [
            "Sometimes the diagnosis does point to a rebuild: the templates are too slow to fix, the site can't support one page per service, or the content management system fights every change. Pixel2Tech runs this same sequence before recommending one. If you need a rebuild, our [website development service](/services/website-development) covers the page structure, speed and tracking described here. Often a few weeks of targeted fixes is the better spend.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Why is my website getting traffic but no leads?",
      a: "Usually for one of five reasons: leads aren't being recorded, form emails or calls are getting lost, the traffic is the wrong audience, the page doesn't make the next step clear, or leads arrive and nobody responds quickly. Check measurement and delivery first, because a broken form or an untracked phone number can make a working site look dead. Then compare results by traffic source and landing page.",
    },
    {
      q: "What is a good conversion rate for a service business website?",
      a: "There's no reliable universal number. Published benchmarks mix industries, traffic sources and definitions of a conversion, so another company's figure tells you little. Measure your own baseline per service page and per traffic source, count calls as well as forms, and track qualified leads rather than raw submissions. Improvement against your own baseline is the number that matters.",
    },
    {
      q: "How many fields should a contact form have?",
      a: "As few as you need to respond well. For most service businesses that means a name, a phone number or email, and one or two qualifying questions such as ZIP code or type of service. Each extra field costs some completions, and each field you remove gives your team less context. If your team asks the same question on every first call, it belongs on the form.",
    },
    {
      q: "How do I know if my contact form is working?",
      a: "Submit it yourself with a unique test name from both a phone and a desktop, then confirm three things: the notification reached the right inbox (check spam too), the entry appeared in your CRM or form log, and the event registered in Google Analytics. Repeat after every plugin, theme or hosting change, and at least monthly otherwise.",
    },
    {
      q: "Should I put prices on my service business website?",
      a: "Where you can, publish a starting price, a typical range or the factors that set the price. It helps visitors qualify themselves, so the inquiries you get are more serious. Where pricing really does depend on a site visit or case review, explain how the estimate process works and whether it costs anything. A bare 'contact us for pricing' gives visitors nothing to go on.",
    },
  ],
  internalLinks: [
    {
      label: "Google Ads landing pages for service businesses",
      to: "/blog/google-ads-landing-page-service-business",
    },
    {
      label: "Offline conversion tracking for service businesses",
      to: "/blog/offline-conversion-tracking-service-business",
    },
    { label: "How to automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    {
      label: "Why traffic drops after a redesign",
      to: "/blog/website-traffic-drop-after-redesign",
    },
    { label: "Website development", to: "/services/website-development" },
  ],
  sources: [
    {
      label: "FTC: Consumer Reviews and Testimonials Rule, questions and answers",
      href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers",
    },
    {
      label: "FTC: Final rule banning fake reviews and testimonials (August 2024)",
      href: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
    },
    {
      label: "Google Analytics Help: About key events",
      href: "https://support.google.com/analytics/answer/9267568",
    },
    { label: "web.dev: Web Vitals", href: "https://web.dev/articles/vitals" },
    {
      label: "Harvard Business Review: The Short Life of Online Sales Leads (2011)",
      href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
    },
    {
      label: "Gmail Help: Email sender guidelines",
      href: "https://support.google.com/a/answer/81126",
    },
  ],
  cta: {
    title: "Want someone to test your lead flow?",
    body: "Send us your site and tell us where leads are supposed to go. We'll run the phone-first audit from this guide and tell you which leak to fix first, before anyone talks about a redesign.",
  },
};

export default post;
