import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Google Store Ratings Requirements: 100 Reviews, 3.5 Stars",
  metaDescription:
    "Google's store ratings requirements: about 100 reviews, a 3.5-star average for ads and a 24-month window. How Shopify brands keep stars on Shopping ads.",
  keywords: [
    "google store ratings requirements",
    "google seller ratings 100 reviews",
    "store ratings 3.5 stars shopping ads",
    "google store ratings 24 month window",
    "google customer reviews shopify",
    "klaviyo review request flow",
    "shopify seller ratings google ads",
  ],
  keyTakeaways: [
    "Google's store ratings help page now lists explicit requirements: a store generally needs at least 100 eligible, unique reviews, and paid text and Shopping ads show stars only while the average is at least 3.5 out of 5.",
    "Only reviews from a rolling 24-month window count, and ratings are calculated separately for each country. For a US store, only US customers' reviews count toward the US rating.",
    "Reviews expiring from the window can quietly push a store below 100. Holiday reviews from late 2024 age out between October and December 2026, which is right in the middle of Q4.",
    "Only post-fulfillment reviews count. They come from Google Customer Reviews or an approved review partner such as Yotpo, Trustpilot, Feefo or Bazaarvoice. Product reviews alone don't build a store rating.",
    "The durable fix is a review request timed to delivery, sent to every customer, plus fixing the shipping and support problems behind low scores.",
  ],
  content: [
    {
      heading: "What did Google publish about store ratings requirements?",
      definition:
        "Google's store ratings requirements say a store generally needs at least 100 eligible, unique post-purchase reviews. Those reviews are counted over a rolling 24-month window and calculated separately for each country. Stars show on paid text and Shopping ads only while the average stays at 3.5 or higher.",
      body: [
        "On September 22, 2026, Search Engine Roundtable reported that Google had added a requirements section to its Merchant Center help page on store ratings about a week earlier. Most of the other edits to the page just moved existing content around. The new section is the part that matters, because for the first time the rules are in one place, in plain numbers.",
        "Here is what the updated [store ratings overview](https://support.google.com/merchants/answer/190657) says:",
      ],
      table: {
        caption: "Google store ratings requirements, as documented in September 2026",
        headers: ["Requirement", "What Google says", "What it means for a Shopify brand"],
        rows: [
          [
            "Review volume",
            "A merchant generally needs at least 100 eligible, unique reviews",
            "Treat 100 as the floor, not the target. Google calls it a general guide, not a switch.",
          ],
          [
            "Score for ads",
            "An average composite score of at least 3.5 out of 5 for paid text and Shopping ads",
            "At 3.4 you can still have a rating, but it won't show on your ads.",
          ],
          [
            "Time window",
            "Reviews gathered within a rolling 24-month window",
            "Older reviews drop out every month, so volume has to keep coming in.",
          ],
          [
            "Geography",
            "Ratings are calculated separately for each country, not globally",
            "Reviews from Canadian or UK buyers don't help your US ads.",
          ],
          [
            "Review type",
            "Post-fulfillment reviews, often labeled verified or post-purchase by review partners",
            "Reviews collected before delivery, or with no order behind them, don't count.",
          ],
        ],
      },
    },
    {
      heading: "Why do seller stars matter going into Q4?",
      definition:
        "Store ratings appear next to your ads and free listings. Google says they lift the average click-through rate of text ads by 2%, and you pay nothing extra for them.",
      body: [
        "Store ratings show next to your business name on Search text ads, Shopping ads, YouTube, free product listings and some rich results. When data is available they can include a qualifier, such as your average delivery time. Google Ads treats them as an automated asset. You don't switch them on, and you aren't charged for them beyond the normal cost of a click.",
        "Google's [Ads help page on store ratings](https://support.google.com/google-ads/answer/2375474) says text ads with store ratings drive a 2% improvement in click-through rate on average on the Search Network. Two percent sounds small until you apply it to a November and December budget where every competitor on the results page is bidding harder.",
        "There's also a sharper problem. Shoppers comparing three Shopping ads for the same product will see which ones have stars and which don't. Losing stars in mid-November, because the count slipped under 100 or the average dipped under 3.5, is the kind of change that shows up in your numbers before anyone on the team knows why.",
      ],
    },
    {
      heading: "How do you check where your store stands?",
      definition:
        "Check your public store page on Google for your country, then the Store quality page in Merchant Center, then count your US post-purchase reviews from the last 24 months.",
      body: [
        "Most brands only find out they lost stars when someone notices the ads look different. Do this check before the holiday budget goes live:",
      ],
      bullets: [
        "Open google.com/storepages?q=yourstore.com&c=US. The c parameter sets the country. This shows the rating Google holds for your store in the US, and whether it has one at all.",
        "In Merchant Center, open the Store quality page. Its scorecard can also show shipping, returns, competitive pricing and payment options, and it's where to look first when your score changes.",
        "In Google Ads, open the account-level automated assets report. Google says store rating performance is only reported for text ads, so this is where you confirm the stars are serving on Search.",
        "In your review app, export store (not product) reviews with dates and customer country. Filter to US customers from the last 24 months. That number is closer to what Google counts than the total on your review widget.",
        "Confirm your review app sends store reviews to Google through an approved partner. Many apps send product reviews to Google, and that's a separate program.",
      ],
      subsections: [
        {
          heading: "Reading the result",
          body: [
            "Your widget might say 1,200 reviews while your US store-review count for the window is 130. The first number is marketing copy. The second is the number your Q4 ads depend on. Google also notes that reviews aren't added in real time, so expect a lag between a new review and a change in your rating.",
          ],
        },
      ],
    },
    {
      heading: "The 24-month cliff: how expiring reviews can remove your stars",
      definition:
        "Every month, reviews older than 24 months drop out of the calculation. If new reviews don't replace them, the count can fall under 100 with no change in how you operate.",
      body: [
        "This is the part of the new documentation most brands will miss. A rolling window means your review count behaves like a leaky bucket. Reviews from a big launch or a strong holiday season help for exactly two years, then leave all at once.",
        "The timing this year is awkward. As of late September 2026, the window reaches back to about September 2024. Reviews from the October to December 2024 holiday rush will age out between October and December 2026, the same weeks you're spending the most on ads.",
        "A hypothetical example with round numbers shows how it plays out:",
      ],
      table: {
        caption: "Hypothetical US store: how holiday reviews aging out affect the count",
        headers: [
          "Scenario",
          "US reviews in window, Sept 2026",
          "Aging out Oct to Dec 2026",
          "New reviews needed to stay at 100",
        ],
        rows: [
          ["Steady store", "140", "20", "None"],
          ["Holiday-heavy store", "140", "60", "At least 20 by December"],
          ["Store that paused review requests in 2025", "110", "55", "At least 45 by December"],
        ],
      },
      subsections: [
        {
          heading: "What to do about it",
          body: [
            "Add an expiry column to your review export: the date each review turns 24 months old. Then count how many leave in each of the next six months. If the answer brings you close to 100, the review flow in the sections below isn't a nice-to-have for this quarter. It's what keeps your stars on.",
          ],
        },
      ],
    },
    {
      heading: "Which review sources feed Google store ratings?",
      definition:
        "Store ratings come from Google Customer Reviews, from approved review partners and from Google's own shopping research. A review on your own site that never reaches one of those sources doesn't count.",
      body: [
        "Google lists three sources. The first is Google Customer Reviews, a free program run inside Merchant Center. The second is shopping reviews from supported partners and from Google Search users. The third is performance metrics gathered through Google's own shopping research. Google says it works with more than 30 independent review sites, including Yotpo, Trustpilot, Feefo and Bazaarvoice.",
        "Don't confuse store reviews with product reviews. Google's [Product Ratings program](https://support.google.com/merchants/answer/14620705) puts stars on individual products and needs at least 50 reviews across your catalog. Store ratings rate the business as a whole: delivery, service, the order experience. A Shopify review app that syndicates product reviews can leave you with starred products and an unstarred store.",
      ],
      table: {
        caption: "Review sources for a Shopify store",
        headers: ["Source", "Feeds store ratings?", "Setup notes"],
        rows: [
          [
            "Google Customer Reviews",
            "Yes",
            "Opt-in on the order confirmation page; Google emails a survey after the estimated delivery date. On Shopify it's set up through the Google & YouTube app's store widgets.",
          ],
          [
            "Approved review partner (store reviews)",
            "Yes, if post-purchase and verified",
            "Check the partner is on Google's list and that store reviews, not only product reviews, are syndicated.",
          ],
          [
            "Review app sending product reviews only",
            "No, that's Product Ratings",
            "Useful for product stars, but it won't fix a missing seller rating.",
          ],
          [
            "Google Business Profile reviews",
            "Not listed as a source",
            "Worth having for local search, but don't count on them for Shopping ad stars.",
          ],
        ],
      },
      subsections: [
        {
          heading: "Get the estimated delivery date right",
          body: [
            "Google's [opt-in module](https://support.google.com/merchants/answer/14629205) requires an estimated_delivery_date, and Google sends the survey after that date. If your store passes a date that's too optimistic, customers get asked to rate an order that hasn't arrived yet. That's a reliable way to collect one-star reviews about a package still in transit.",
          ],
        },
      ],
    },
    {
      heading: "How to build a post-purchase review flow in Klaviyo or SMS",
      definition:
        "A good review flow asks every customer about the order experience once the package has arrived, follows up once, and gives anyone with a problem a direct route to support.",
      body: [
        "Google Customer Reviews covers only the customers who tick the opt-in box. A flow from your own email and SMS platform reaches the rest and sends them to your approved review partner. Here's the structure we'd set up:",
      ],
      subsections: [
        {
          heading: "1. Trigger on delivery, not on purchase",
          body: [
            "Klaviyo's [review flow guidance](https://help.klaviyo.com/hc/en-us/articles/115002779391) uses Fulfilled Order as the trigger, with a delay longer than your average delivery time; its example is 14 days. If your review tool can trigger on actual delivery, use that. Klaviyo's own Reviews product, for example, sends requests 7 days after delivery by default on Shopify. If the trigger isn't firing, work through our [Klaviyo flow troubleshooting checklist](/blog/klaviyo-flows-not-triggering-shopify) before you change the timing.",
          ],
        },
        {
          heading: "2. Ask about the store, not only the product",
          body: [
            "The email should link to the store review form from your Google-approved partner. Ask about the order in plain words: did it arrive when we said it would, was it packed well, did we answer your questions? One button, one question, no long preamble.",
          ],
        },
        {
          heading: "3. One follow-up, then stop",
          body: [
            "Send one reminder a few days later to customers who haven't reviewed. Use SMS only for people who opted in to texts, and keep the message short with a single link. Exclude orders with an open return or support ticket, and pause the flow for any order that shipped late until the customer has had it for a while.",
          ],
        },
        {
          heading: "4. A feedback path that isn't review gating",
          body: [
            "Put a visible link to support in every message, next to the review link. What you can't do is ask how the order went and then send only the happy customers to leave a public review. The FTC's [Endorsement Guides Q&A](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) says asking only customers you expect to be happy would be misleading if it substantially skews the reviews. The same page says you can't make a discount depend on a review being positive. Ask everyone, and give unhappy customers a faster way to get their problem fixed.",
          ],
        },
      ],
      callout: {
        title: "From the studio",
        body: "Before building the flow, place a real test order and read the order confirmation page source to see what estimated delivery date the Google Customer Reviews opt-in receives. Compare it with your carrier's actual transit times for your slowest US zone. Then set up a shared sheet with store reviews by month, by country and by expiry month. Update it on the first of each month. It's a ten-minute job that tells you three months ahead if your stars are at risk.",
      },
    },
    {
      heading: "Staying above 3.5: fix the causes, not just the volume",
      definition:
        "More review requests raise the count, but they don't raise the average. The average moves when the things customers complain about get fixed.",
      body: [
        "Sending more requests to a store with a delivery problem mostly collects more reviews about late deliveries. Before you scale the flow, read every one- and two-star store review from the last six months and tag each by cause. Late or inaccurate delivery, wrong or damaged items, slow replies and refund friction usually cover most of them.",
        "Then fix the causes behind those tags:",
      ],
      bullets: [
        "Show delivery estimates on product pages and at checkout that match what your carriers actually achieve, and pass the same realistic date to Google Customer Reviews.",
        "Email customers first when an order is delayed, before they have to ask.",
        "Set a reply-time target for support and track it weekly through Q4.",
        "Make the returns policy easy to find and the process quick. Returns are one of the metrics the Store quality scorecard can show.",
        "Reply to negative reviews where your review platform allows it, with a fix rather than a template apology.",
      ],
      subsections: [
        {
          heading: "Check the store itself too",
          body: [
            "Some low ratings trace back to the site: a broken tracking page, a discount code that fails at checkout, an out-of-stock item that still takes orders. Our guide to [common Shopify issues and how to fix them](/blog/shopify-issues-and-how-to-fix-them) covers the ones we see most often.",
          ],
        },
      ],
    },
    {
      heading: "When to bring in an email and Shopify team",
      body: [
        "You can run the checks above in an afternoon. Bring in help when the numbers show a gap you can't close with your current setup: your US review count is near 100 with a large block expiring this quarter, your review app only syndicates product reviews, the Google Customer Reviews opt-in is passing the wrong delivery date, or your Klaviyo flows aren't firing reliably.",
        "Pixel2Tech's [email and SMS team](/services/social-media-and-email) builds delivery-timed review flows in Klaviyo and SMS. Our [Shopify developers](/services/wordpress-and-shopify) fix the opt-in module, delivery estimates and review app setup. For brands that want the monthly count and expiry tracking to run on its own, our [automation and CRM work](/services/automation-and-crm) can pull review data into one report and flag risk before it reaches your ads.",
      ],
    },
  ],
  faqs: [
    {
      q: "How many reviews do you need for Google store ratings?",
      a: "Google's store ratings help page says a merchant generally needs at least 100 eligible, unique reviews for Google to calculate a reliable rating. The reviews must be post-fulfillment, come from the last 24 months and come from customers in the country where the rating is shown. Google Ads' help page says most merchants get a rating after collecting 100 or more eligible reviews.",
    },
    {
      q: "What star rating do you need for stars to show on Google Shopping ads?",
      a: "For paid text and Shopping ads, Google says your store must maintain an average composite score of at least 3.5 out of 5 stars. If your average falls below 3.5, store ratings stop showing on your ads until it recovers, even though your store may still have a rating elsewhere.",
    },
    {
      q: "Why did my store ratings disappear from Google Ads?",
      a: "The common causes are an average below 3.5, or a count that fell under about 100 as older reviews aged out of the 24-month window. Another is that most of your reviews come from customers outside the country your ads target, since ratings are calculated per country. Check google.com/storepages with your domain and the c parameter for the country, then check the Store quality page in Merchant Center.",
    },
    {
      q: "Do Shopify product reviews count toward Google store ratings?",
      a: "Not by themselves. Product reviews feed Google's separate Product Ratings program, which needs at least 50 reviews across your products. Store ratings need post-purchase reviews of your store, collected through Google Customer Reviews or an approved review partner such as Yotpo, Trustpilot, Feefo or Bazaarvoice.",
    },
    {
      q: "Can I send only happy customers to leave a review?",
      a: "No. The FTC's guidance says asking only customers you expect to be happy for reviews would be misleading if it substantially skews how favorable the reviews are. It also says you can't make an incentive depend on a positive review. Ask every customer, and offer a support link alongside the review link so people with problems can get them fixed.",
    },
  ],
  sources: [
    {
      label: "Search Engine Roundtable: Google Store Ratings requirements (September 22, 2026)",
      href: "https://www.seroundtable.com/google-merchant-center-google-store-ratings-42125.html",
    },
    {
      label: "Google Merchant Center Help: Google store ratings overview and requirements",
      href: "https://support.google.com/merchants/answer/190657#Requirements",
    },
    {
      label: "Google Ads Help: About store ratings",
      href: "https://support.google.com/google-ads/answer/2375474",
    },
    {
      label:
        "Google Merchant Center Help: Integrate the Google Customer Reviews survey opt-in module",
      href: "https://support.google.com/merchants/answer/14629205",
    },
    {
      label: "Klaviyo Help Center: How to create a third-party product review flow",
      href: "https://help.klaviyo.com/hc/en-us/articles/115002779391",
    },
    {
      label: "FTC: FTC's Endorsement Guides, what people are asking",
      href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
    },
  ],
  internalLinks: [
    { label: "Social media and email marketing services", to: "/services/social-media-and-email" },
    { label: "WordPress and Shopify development", to: "/services/wordpress-and-shopify" },
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    {
      label: "Klaviyo flow not triggering on Shopify? A fix-it checklist",
      to: "/blog/klaviyo-flows-not-triggering-shopify",
    },
    {
      label: "Common Shopify issues and how to fix them",
      to: "/blog/shopify-issues-and-how-to-fix-them",
    },
  ],
  cta: {
    title: "Find out if your seller stars survive the holiday season",
    body: "Send us your store URL. We'll check your US review count and what expires in the next six months, confirm your review app feeds Google store ratings, and set up a Klaviyo or SMS review flow timed to delivery.",
  },
};

export default post;
