import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "How Much Does a Shopify Store Cost in 2026? USD, GBP, EUR",
  metaDescription:
    "What a Shopify store costs in 2026 in the US, UK and EU: plan prices in USD, GBP and EUR, card fees, themes, apps, build costs and the fees budgets miss.",
  keywords: [
    "how much does a Shopify store cost",
    "Shopify pricing 2026",
    "Shopify monthly cost",
    "Shopify pricing UK",
    "Shopify pricing EUR",
    "Shopify transaction fees",
    "Shopify website development cost",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan that works with clients in the US, UK and Europe, and offers the Shopify services discussed here.",
  keyTakeaways: [
    "As of September 2026, Shopify's regional pricing pages list Basic at $25, £25 or €32 a month on monthly billing (US, UK and Ireland pages), or $19, £19 or €24 a month billed yearly.",
    "Payment processing is usually the biggest running cost. Shopify Payments online card rates run from 2.5% to 2.9% plus 30¢ in the US, and from 2% + 25p (UK) or 2% + €0.25 (Ireland) on Basic.",
    "Paid themes in the Shopify Theme Store are one-time purchases; the paid themes we checked in September 2026 ranged from $100 to $500. Many small stores start on a free theme.",
    "Build costs depend on who does it: DIY costs your time, Shopify cites Upwork medians of about $15 to $55+ an hour for developers, and Clutch reports most US e-commerce firms bill $100 to $149 an hour.",
    "Watch the fees that don't appear on the pricing card: third-party transaction fees, currency conversion fees, a 1.5% exchange fee on USD-priced apps and themes billed in GBP or EUR, and app charges that keep running after a trial.",
  ],
  content: [
    {
      heading: "How much does a Shopify store cost in 2026?",
      definition:
        "A Shopify store costs a monthly plan fee ($19 to $399 in the US, £19 to £344 in the UK, €24 to €384 on the Irish EUR page, as of September 2026), card processing on every sale, apps, an optional one-time theme, and the build. A lean store can run under $50 a month before processing.",
      body: [
        "The plan price is the number everyone quotes and the one that matters least once you're selling. Card processing grows with every order, apps add up quietly, and the build is a one-off cost that ranges from your own weekends to a five-figure agency project.",
        "Shopify publishes prices per region, and they aren't straight currency conversions. The UK page lists Basic at the same £25 that the US page lists as $25, while the Irish page lists €32. Check the pricing page for the country your business is registered in before you budget.",
        "All three pages also showed the same introductory offer as of September 2026: three days free, then $1, £1 or €1 a month for three months on the standard plans. That's a useful runway for setup, not your running cost.",
      ],
      table: {
        caption:
          "Shopify plan prices by region, monthly billing / yearly billing per month (as of September 2026)",
        headers: ["Plan", "US (USD)", "UK (GBP)", "Ireland (EUR)", "Third-party gateway fee"],
        rows: [
          ["Basic", "$25 / $19", "£25 / £19", "€32 / €24", "2%"],
          ["Grow", "$65 / $49", "£65 / £49", "€92 / €69", "1%"],
          ["Advanced", "$399 / $299", "£344 / £259", "€384 / €289", "0.6%"],
          ["Plus", "From $2,300", "From £1,800", "From €2,100", "0.2%"],
        ],
      },
    },
    {
      heading: "Which Shopify plan do you actually need?",
      definition:
        "Start on Basic unless you already need staff logins or process enough card volume for a lower rate to cover the higher fee.",
      body: [
        "The plans share the same storefront, checkout and core features. What changes as you move up is staff accounts, card rates, third-party fees and a few advanced tools. Shopify's comparison table lists up to 5 additional staff accounts on Grow, 15 on Advanced and unlimited on Plus.",
        "The honest test for upgrading is arithmetic. On the UK page, Grow costs £30 a month more than Basic on yearly billing and cuts the standard online card rate from 2% to 1.7%. That 0.3-point saving covers £30 at £10,000 a month in standard card sales. On the Irish page the gap is €45 a month for the same 0.3 points, so the break-even is €15,000.",
        "If you use a third-party gateway instead of Shopify Payments, the math changes. Grow costs $30 more than Basic on US yearly billing and cuts the third-party fee from 2% to 1%, so it pays for itself at $3,000 a month in gateway-paid sales.",
      ],
      bullets: [
        "Choose Basic if you're launching and one or two people run the store.",
        "Choose Grow when more people need their own login or your card volume passes the break-even for your region.",
        "Look at Advanced only after running the same math on your real monthly sales.",
        "Revisit the plan every six months. Switching plans is a billing change, not a rebuild.",
      ],
    },
    {
      heading: "What does Shopify charge per transaction in the US, UK and EU?",
      definition:
        "With Shopify Payments, you pay a card rate per sale that depends on your plan and region. With a third-party gateway, you pay that gateway's fee plus Shopify's third-party transaction fee of 0.2% to 2%.",
      body: [
        "Shopify Payments is available in the US, the UK and most EU countries, including Ireland, Germany, France, the Netherlands, Spain and Italy, according to Shopify's [supported countries list](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries). Where it's available, it's usually the cheapest setup, because Shopify doesn't add its third-party fee on top.",
        "For the US, Shopify's [January 2026 guide to card processing fees](https://www.shopify.com/blog/credit-card-processing-fees) gives online rates of 2.5% to 2.9% plus 30¢ depending on plan, and in-person rates of 2.6% + 10¢ on Basic, 2.5% + 10¢ on Grow and 2.4% + 10¢ on Advanced. The UK and Irish pricing pages list their rates plan by plan, shown below.",
        "Using another gateway is sometimes the right call, for example if you already have negotiated rates. Our guide to [Shopify payment gateways in the US, UK and EU](/blog/shopify-payment-gateways-us-uk-eu) compares the options.",
      ],
      table: {
        caption:
          "Shopify Payments online card rates on the UK and Irish pricing pages (as of September 2026; Irish rates shown excl. VAT)",
        headers: [
          "Plan",
          "UK standard card",
          "UK Amex / international",
          "Ireland standard card",
          "Ireland Amex / international",
        ],
        rows: [
          ["Basic", "2% + 25p", "3.1% + 25p", "2% + €0.25", "3.1% + €0.25"],
          ["Grow", "1.7% + 25p", "2.7% + 25p", "1.7% + €0.25", "2.7% + €0.25"],
          ["Advanced", "1.5% + 25p", "2.5% + 25p", "1.5% + €0.25", "2.5% + €0.25"],
          ["Plus", "1.3% + 25p", "2.3% + 25p", "1.4% + €0.25", "2.4% + €0.25"],
        ],
      },
      subsections: [
        {
          heading: "Worked examples",
          body: [
            "A US store on Basic taking 200 online orders of $50 a month ($10,000) pays up to $350 in processing at the top of the published range: 2.9% of $10,000 is $290, plus 200 × 30¢ is $60.",
            "A UK store on Basic taking 160 orders of £50 (£8,000) with standard UK cards pays £200: 2% is £160, plus 160 × 25p is £40. If a quarter of those orders came on Amex or international cards at 3.1%, the bill rises. Your card mix matters as much as your plan.",
          ],
        },
      ],
    },
    {
      heading: "How much do Shopify themes cost?",
      definition:
        "Shopify has free themes and paid ones. Paid themes are a one-time charge, not a subscription; the paid themes we checked in the Theme Store in September 2026 were listed from $100 to $500.",
      body: [
        "Theme Store purchases are billed immediately as a one-time charge. Per Shopify's help page on [adding and buying themes](https://help.shopify.com/en/manual/online-store/themes/adding-themes), a purchased theme is licensed to the store you bought it for, you can preview it in your admin before paying, and third-party theme purchases are final sale.",
        "A well-configured free theme is enough for many new stores. Pay for a theme when it replaces custom development you'd otherwise buy, such as mega menus, size guides, bundle layouts or quick-order tables. Paying $350 for a theme that saves ten hours of developer time is a good trade; paying it for looks you could get from a free theme is not.",
        "Customizing a theme is where most build budgets go. If you're deciding how far to take it, see our comparison of [Shopify theme customization vs a custom theme](/blog/shopify-theme-customization-vs-custom-theme).",
      ],
    },
    {
      heading: "How much do Shopify apps cost per month?",
      definition:
        "Most small stores need a handful of apps. Many have free tiers; the paid tiers we checked started at $15 to $20 a month per app, billed every 30 days alongside your plan.",
      body: [
        "Apps are the line item that drifts. Each one is cheap on its own, but five or six paid apps can cost more than your plan, and many add scripts that slow your storefront. The prices below are examples we checked on the Shopify App Store in September 2026, not endorsements.",
        "Shopify's help page on [app charges](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/app-charges) explains the billing rules worth knowing. Recurring app plans are charged every 30 days, usage charges build up during each app's cycle, and uninstalling an app stops future cycles but doesn't remove a charge already generated for your next invoice.",
      ],
      table: {
        caption: "Example app pricing on the Shopify App Store (as of September 2026)",
        headers: ["Job", "Example app", "Listed pricing (USD)"],
        rows: [
          [
            "Product reviews",
            "Judge.me",
            "Free plan; Awesome plan $15 a month, billed every 30 days",
          ],
          [
            "Email and SMS marketing",
            "Klaviyo",
            "Free for up to 250 email contacts; Email plan $20 a month for 251 to 500 contacts; SMS plan $15 a month",
          ],
          ["Workflow automation", "Shopify Flow", "Free (listed as free on the App Store)"],
        ],
      },
      bullets: [
        "Before installing an app, write down the problem it solves and the number you'll check in 30 days.",
        "Check the billing model: monthly, usage-based or one-time. Usage-based apps can spike during sales.",
        "Note every free trial's end date in one place.",
        "Test new apps on a duplicate theme and compare page speed before and after.",
        "When you remove an app, check the theme for code it left behind.",
      ],
    },
    {
      heading: "How much does it cost to design and build a Shopify store?",
      definition:
        "Building a Shopify store costs your time if you DIY, about $15 to $55+ an hour with a marketplace freelancer, or around $100 to $149 an hour with a US e-commerce agency. Clutch reports that most e-commerce projects reviewed on its platform cost under $10,000.",
      body: [
        "The build is a one-time cost, and the range is wide because the scope is. Uploading 30 products into a free theme is a different job from a custom design, migrated data, integrations and a round of speed work.",
        "For freelancers, Shopify's [May 2026 guide to working with a developer](https://www.shopify.com/blog/developers-for-retail-website) cites Upwork median rates of about $15 an hour for entry-level front-end developers, $35 for intermediate to advanced front-end work and $55 or more for full-stack developers.",
        "For agencies, Clutch's [e-commerce development pricing guide](https://clutch.co/developers/ecommerce/pricing) says most e-commerce development firms listed on Clutch charge $24 to $49 an hour, with firms in the United States typically at $100 to $149 and Spain at $50 to $99. It also reports that most e-commerce projects reviewed on Clutch cost less than $10,000. Clutch publishes these figures in USD. Our [Shopify developer rates guide](/blog/shopify-developer-rates) breaks down what drives these numbers.",
      ],
      table: {
        caption:
          "Shopify build options and what they typically cost (sources as of September 2026)",
        headers: ["Route", "Typical cost", "What you usually get", "Source"],
        rows: [
          [
            "DIY",
            "Plan fee plus your time; optional theme ($0 to about $500)",
            "Full control; you handle products, shipping, policies and testing",
            "Shopify pricing pages, Theme Store",
          ],
          [
            "Freelancer",
            "About $15 to $55+ an hour (Upwork medians)",
            "Theme setup, product uploads, specific fixes",
            "Shopify, citing Upwork",
          ],
          [
            "Offshore studio",
            "Clutch lists $25 to $49 an hour for Poland, Ukraine and the Philippines",
            "Design and build to a written brief, remote collaboration",
            "Clutch e-commerce pricing guide",
          ],
          [
            "US agency",
            "About $100 to $149 an hour",
            "Design, development, QA and project management",
            "Clutch e-commerce pricing guide",
          ],
        ],
      },
      bullets: [
        "Ask every provider for a line-item scope, not a single total.",
        "Confirm the store, domain and apps are registered to your business email, not theirs.",
        "Check what's included after launch: fixes, training and how long support lasts.",
        "Ask how they'll give themselves access. The answer should be a collaborator account, never your login.",
      ],
    },
    {
      heading: "What does a Shopify store cost per month? Illustrative budgets",
      body: [
        "These budgets are illustrative, built from the US prices listed above with yearly plan billing and a paid theme spread over 12 months. They exclude card processing, shipping, marketing and the build, because those depend on your sales and scope.",
        "For a UK or EU store, swap in the GBP or EUR plan price from the first table. Apps and themes stay priced in USD, and if you're billed in GBP or EUR, Shopify converts them and adds a 1.5% exchange fee.",
      ],
      table: {
        caption:
          "Illustrative fixed monthly costs for a US store (prices as listed in September 2026)",
        headers: ["Line item", "Starter store", "Growing store", "Established store"],
        rows: [
          ["Shopify plan (yearly billing)", "Basic: $19", "Grow: $49", "Advanced: $299"],
          [
            "Theme",
            "Free theme: $0",
            "$350 theme over 12 months: about $29",
            "$350 theme over 12 months: about $29",
          ],
          ["Reviews app", "Free plan: $0", "$15", "$15"],
          [
            "Email marketing",
            "Free tier (up to 250 contacts): $0",
            "$20 (251 to 500 contacts)",
            "Higher tier, priced by list size",
          ],
          ["Fixed total before processing", "About $19", "About $113", "About $343 plus email"],
        ],
      },
    },
    {
      heading: "What hidden costs should you budget for?",
      body: [
        "These are the charges that surprise owners in their first few Shopify bills. None are secret; they're just not on the headline pricing card.",
      ],
      bullets: [
        "Third-party transaction fees: 2%, 1%, 0.6% or 0.2% by plan on orders paid through another gateway. Shopify's [third-party fee page](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees) says they aren't returned when you refund an order.",
        "Mixing gateways: Shopify's help center says that if you run Shopify Payments alongside a direct third-party provider, Shopify Payments transactions such as Shop Pay are charged at standard rates plus a 1.25% premium.",
        "Currency conversion: Shopify's January 2026 fees guide lists a 1.5% conversion fee for US-based stores and 2% for stores in other regions when you sell in other currencies.",
        "Exchange fee on your bill: if you're billed in GBP or EUR, USD-priced apps, themes and domains are converted with a 1.5% exchange fee, per Shopify's [local currency billing page](https://help.shopify.com/en/manual/your-account/manage-billing/paying-your-bills/managing-payments/local-currency).",
        "Premium cards: Amex and international cards cost more. On the UK Basic plan that's 3.1% + 25p against 2% + 25p for standard cards.",
        "Trials that convert: app trials turn into paid plans, and some apps, including Klaviyo, may bill you directly rather than through your Shopify invoice.",
        "Non-refundable themes: Theme Store purchases are final sale, so preview before you buy.",
      ],
      callout: {
        title: "From the studio",
        body: "When we scope a Shopify build, we price the running costs before the design. We list every app the store needs at launch, its billing model and what job it does, and we agree which ones can wait until the store has sales. We also write down every trial's end date in the handover notes, because a forgotten trial is the most common line on a surprise bill.",
      },
    },
    {
      heading: "How to keep Shopify costs down without hurting sales",
      body: [
        "Cut the costs customers never see first. Removing a review widget that shoppers read to decide is a false saving; removing an app nobody on your team can name a result for is not.",
      ],
      bullets: [
        "Switch to yearly billing once the store is stable. On the US Basic plan that's $72 a year less than monthly; on Grow it's $192.",
        "Use Shopify Payments where it's available, so you avoid the third-party transaction fee.",
        "Audit apps every quarter and remove leftover code when you uninstall. Our guide to [removing leftover Shopify app code](/blog/remove-leftover-shopify-app-code) shows how.",
        "Use Shopify Flow for tagging and simple automation before paying for an app that does the same thing.",
        "Recheck the plan break-even every six months using your real card volume.",
      ],
    },
    {
      heading: "Getting a second opinion on your Shopify budget",
      body: [
        "If you're planning a new store, put the plan, processing, app and build numbers into one sheet before you pay for design. If you're already selling, your last three Shopify bills and your payout reports will show where the money goes.",
        "Buyers in the US, UK and Europe often hire a studio abroad to keep build costs down while keeping the store and accounts in their own name. Pixel2Tech designs and builds Shopify stores to a fixed quote agreed after a scoping call; our [WordPress and Shopify service](/services/wordpress-and-shopify) covers setup, migrations and ongoing fixes.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does Shopify cost per month in 2026?",
      a: "As of September 2026, Shopify's US page lists Basic at $25, Grow at $65 and Advanced at $399 a month on monthly billing, or $19, $49 and $299 a month billed yearly. Plus starts at $2,300. On top of the plan, budget for card processing on every sale, any paid apps, and an optional one-time theme purchase.",
    },
    {
      q: "How much does Shopify cost in the UK and Europe?",
      a: "Shopify's UK page lists Basic at £25, Grow at £65 and Advanced at £344 a month on monthly billing, or £19, £49 and £259 billed yearly, as of September 2026. The Irish page lists €32, €92 and €384 monthly, or €24, €69 and €289 yearly. Other EU country pages can differ, so check the page for your country.",
    },
    {
      q: "What are Shopify's transaction fees?",
      a: "If you use Shopify Payments, you pay card rates only: 2.5% to 2.9% plus 30¢ online in the US, and from 2% + 25p in the UK or 2% + €0.25 in Ireland on Basic, as of September 2026. If you use a third-party gateway, Shopify adds 2% on Basic, 1% on Grow, 0.6% on Advanced or 0.2% on Plus.",
    },
    {
      q: "How much does it cost to have someone build a Shopify store?",
      a: "It depends on scope and who you hire. Shopify cites Upwork median rates of about $15 to $55+ an hour for developers, and Clutch reports that most US e-commerce firms bill $100 to $149 an hour, while most e-commerce projects reviewed on Clutch cost under $10,000. Ask each provider for a line-item scope so quotes are comparable.",
    },
    {
      q: "Are Shopify themes a one-time cost?",
      a: "Yes. Paid themes from the Shopify Theme Store are a one-time charge billed when you confirm the purchase, and the paid themes we checked in September 2026 were listed from $100 to $500. The theme is licensed to one store, you can preview it before buying, and third-party theme purchases are final sale.",
    },
    {
      q: "What hidden costs does Shopify have?",
      a: "The common ones are third-party transaction fees when you don't use Shopify Payments, higher rates on Amex and international cards, currency conversion fees when selling in other currencies, a 1.5% exchange fee on USD-priced apps and themes if you're billed in GBP or EUR, and app trials that roll into paid plans.",
    },
  ],
  sources: [
    { label: "Shopify: Pricing (United States)", href: "https://www.shopify.com/pricing" },
    { label: "Shopify: Pricing (United Kingdom)", href: "https://www.shopify.com/uk/pricing" },
    { label: "Shopify: Pricing (Ireland, EUR)", href: "https://www.shopify.com/ie/pricing" },
    {
      label: "Shopify: The average credit card processing fees for 2026",
      href: "https://www.shopify.com/blog/credit-card-processing-fees",
    },
    {
      label: "Shopify Help Center: Paying Shopify bills in your local currency",
      href: "https://help.shopify.com/en/manual/your-account/manage-billing/paying-your-bills/managing-payments/local-currency",
    },
    {
      label: "Clutch: E-commerce development pricing guide",
      href: "https://clutch.co/developers/ecommerce/pricing",
    },
  ],
  internalLinks: [
    { label: "Shopify developer rates in 2026", to: "/blog/shopify-developer-rates" },
    {
      label: "Shopify payment gateways in the US, UK and EU",
      to: "/blog/shopify-payment-gateways-us-uk-eu",
    },
    {
      label: "Shopify theme customization vs custom theme",
      to: "/blog/shopify-theme-customization-vs-custom-theme",
    },
    { label: "Remove leftover Shopify app code", to: "/blog/remove-leftover-shopify-app-code" },
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Want your Shopify costs checked before you commit?",
    body: "Send us your plan, app list and a recent Shopify bill, or your build brief if you haven't launched. We'll show which apps you can drop, which plan fits your card volume, and what a fixed-quote build would include.",
  },
};

export default post;
