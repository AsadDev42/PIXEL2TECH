import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Store Cost in Pakistan: Plans, Fees and Apps",
  metaDescription:
    "What a Shopify store really costs in Pakistan: USD plan fees, the third-party gateway fee, apps, themes, COD charges and sample monthly budgets for 2026.",
  keywords: [
    "Shopify store cost in Pakistan",
    "Shopify pricing Pakistan",
    "Shopify monthly cost PKR",
    "Shopify setup charges Pakistan",
    "Shopify website development cost Pakistan",
    "Shopify apps for Pakistan",
    "Shopify transaction fee Pakistan",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the Shopify setup services discussed here.",
  keyTakeaways: [
    "As of September 2026, Shopify's Pakistan pricing page lists Basic at US$25, Grow at US$65 and Advanced at US$399 a month on monthly billing, or US$19, US$49 and US$299 a month billed annually.",
    "Shopify Payments isn't available in Pakistan, so orders paid through a third-party gateway carry an extra Shopify fee of 2% (Basic), 1% (Grow) or 0.6% (Advanced), on top of the gateway's own fee.",
    "Cash on delivery and other manual payment methods are exempt from Shopify's third-party transaction fee, which is why a mostly-COD store pays far less in Shopify fees than a card-heavy one.",
    "Shopify bills are charged in US dollars. Shopify accepts major credit cards and co-branded international debit cards set up for recurring payments, but not prepaid or virtual cards.",
    "A lean small store can run on roughly US$35 a month in fixed Shopify and app costs before gateway fees, and unused apps are the easiest cost to cut.",
  ],
  content: [
    {
      heading: "How much does a Shopify store cost in Pakistan?",
      definition:
        "A Shopify store in Pakistan costs a US-dollar plan fee (US$25 to US$399 a month on monthly billing for Basic to Advanced, as of September 2026), plus Shopify's 2% to 0.6% fee on orders paid through third-party gateways, app subscriptions, an optional one-time theme fee, and your courier's delivery and COD charges.",
      body: [
        "Most cost guides stop at the plan price. That's the smallest surprise. The bigger ones for Pakistani stores are the extra Shopify fee on gateway payments, the paid app stack for couriers and COD, and returned parcels that cost you shipping both ways.",
        "Shopify's [Pakistan pricing page](https://www.shopify.com/pk/pricing) also shows an introductory offer as of September 2026: three days free, then US$1 a month for three months on the Basic, Grow and Advanced plans. Treat that as a runway for setup, not as your real running cost.",
      ],
      table: {
        caption: "Shopify plans on the Pakistan pricing page (as of September 2026)",
        headers: [
          "Plan",
          "Billed monthly",
          "Billed annually (per month)",
          "Third-party gateway fee",
          "Who it usually suits",
        ],
        rows: [
          ["Basic", "US$25", "US$19", "2%", "New and small stores, mostly COD"],
          [
            "Grow",
            "US$65",
            "US$49",
            "1%",
            "Stores with a team and meaningful card or wallet volume",
          ],
          [
            "Advanced",
            "US$399",
            "US$299",
            "0.6%",
            "High-volume stores that need its reporting and staff limits",
          ],
          [
            "Plus",
            "From US$2,300",
            "Not listed",
            "0.2%",
            "Large multi-brand or wholesale operations",
          ],
        ],
      },
    },
    {
      heading: "Which Shopify plan does a Pakistani store need?",
      definition:
        "Start on Basic unless you already know you need more staff accounts or take a large share of payments by card or wallet.",
      body: [
        "Plan choice in Pakistan comes down to two questions that rarely matter as much elsewhere. How many people need their own login, and how much of your revenue will be paid online rather than cash on delivery?",
        "Basic covers the storefront, checkout, discounts, Shopify Flow and the core reports most new stores use. Grow adds staff accounts (up to five, per the pricing page) and cuts the third-party gateway fee from 2% to 1%. Advanced raises staff accounts to 15 and lowers the fee to 0.6%, and only makes sense at volumes most Pakistani stores haven't reached.",
        "A practical rule: if more than one person handles orders, or if gateway-paid sales pass the break-even point we work out further down, move to Grow. Otherwise, Basic with a clean app stack is the cheaper and simpler store to run.",
      ],
      bullets: [
        "Choose Basic if you're launching, most orders are COD and one or two people run the store.",
        "Choose Grow if a team handles orders, or card and wallet payments are a growing share of sales.",
        "Consider Advanced only after you've checked the break-even math against your real gateway volume.",
        "Revisit the choice every six months. Moving between plans is a settings change, not a rebuild.",
      ],
    },
    {
      heading: "Why do Pakistani stores pay Shopify's third-party transaction fee?",
      definition:
        "Because Shopify Payments, which avoids this fee, isn't offered to businesses in Pakistan, so card and wallet payments go through third-party providers.",
      body: [
        "Shopify's [supported-countries list](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) doesn't include Pakistan, and the page says stores outside those countries need a third-party payment provider. Any card, wallet or bank payment that runs through that provider triggers Shopify's third-party transaction fee.",
        "Shopify's help center gives the formula: products minus discounts, plus tax, plus shipping, multiplied by your plan's rate. It's calculated over 30-day billing periods, added to your Shopify bill, and it isn't returned when you refund an order. It sits on top of whatever your gateway charges.",
        "The exemption that matters most in Pakistan: manual payment methods, including cash on delivery and bank transfers, aren't charged the fee. A store that takes 90% of orders as COD pays the fee only on the other 10%.",
      ],
      callout: {
        title: "Worked example",
        body: "A PKR 10,000 order paid by card through a gateway on the Basic plan adds PKR 200 to your Shopify bill (2%), plus the gateway's own processing fee. The same order paid cash on delivery adds nothing to your Shopify bill, though your courier will charge for delivery and COD handling.",
      },
    },
    {
      heading: "What do payment gateways and COD cost on top of Shopify?",
      body: [
        "Gateway fees are set by each provider, so ask for a written schedule that says whether fees include taxes. For a sense of how these are published: Easypaisa's [online payment gateway page](https://easypaisa.com.pk/online-payment-gateway/) lists 1% for Easypaisa Mobile Account payments and 2% for over-the-counter token payments, inclusive of taxes, with no annual or installation charges, as of September 2026.",
        "There's a catch for Shopify stores. That same page lists plugins for WooCommerce, OpenCart, Magento and PrestaShop, not Shopify. On Shopify you usually reach wallets and cards through an aggregator listed in your payment settings, and the aggregator sets its own rates. Our guide to [Shopify payment gateways in Pakistan](/blog/shopify-payment-gateways-pakistan) walks through those options.",
        "COD has its own costs. Couriers charge per parcel for delivery and usually for COD collection, and they charge again when a parcel comes back. Get a rate card that shows all three, plus how often COD is remitted to your account, before you compare couriers on the headline delivery rate.",
      ],
      subsections: [
        {
          heading: "The cost most budgets miss: returned parcels",
          body: [
            "A refused COD parcel costs you the outbound delivery, the return charge, packaging, and the ad spend that produced the order, with no revenue against it. If your return rate is high, fixing it usually saves more than any plan downgrade. We cover the full playbook in [how to reduce fake COD orders](/blog/reduce-fake-cod-orders-shopify-pakistan).",
          ],
        },
      ],
    },
    {
      heading: "Which Shopify apps does a Pakistani store actually need?",
      definition:
        "Most Pakistani stores need four jobs covered: courier booking, COD confirmation, product reviews and basic automation. Everything else is optional until the numbers justify it.",
      body: [
        "Every app adds a monthly line and, often, scripts that slow your storefront. Start with the four jobs below and add others only when you can name the problem they solve. The apps named here are examples with pricing we checked on the Shopify App Store in September 2026, not endorsements.",
      ],
      table: {
        caption: "A lean app stack with listed prices (as of September 2026)",
        headers: ["Job", "Example app", "Listed pricing"],
        rows: [
          [
            "Courier booking",
            "Universal Courier Pakistan",
            "Free for 10 bookings a day; US$5 one-time for 1,000 bookings over 30 days; US$25 one-time for unlimited bookings for 12 months",
          ],
          [
            "COD confirmation on WhatsApp",
            "Confirmify WhatsApp COD Verify",
            "US$9.99/month (400 confirmations), US$19.99 (900), US$69.99 (2,300)",
          ],
          [
            "COD confirmation on WhatsApp",
            "MC WhatsApp Order Notification",
            "Free (10 messages a month), US$14/month pay-as-you-send, US$24/month with your own WhatsApp Business account",
          ],
          ["Product reviews", "Judge.me", "Free plan; US$15/month paid plan"],
          ["Automation (tags, holds)", "Shopify Flow", "Free on Basic, Grow, Advanced and Plus"],
        ],
      },
      bullets: [
        "Before installing an app, write down the problem it solves and the metric you'll check in 30 days.",
        "Check whether it bills monthly, per use or one-time. Usage-based apps can spike during sales.",
        "Test it on a duplicate theme first, and check page speed before and after.",
        "Note who on your team owns it, so it gets removed if nobody uses it.",
        "When you uninstall, check the theme for leftover code the app injected.",
      ],
    },
    {
      heading: "How much do themes and store setup cost?",
      body: [
        "Shopify's Theme Store has free themes and paid ones. The paid themes we saw listed in September 2026 ranged from US$100 to US$420, charged once rather than monthly. A purchased theme is licensed to one store, and licensed themes get free updates when the developer releases a new version.",
        "A well-set-up free theme is often enough for a new store. Pay for a theme when it saves you custom development, for example a mega menu, size guides or bundle layouts you'd otherwise pay a developer to build.",
        "Also budget for a domain and business email. Shopify bills a domain bought through it as a one-time charge on your Shopify bill, alongside theme purchases, while plans and recurring app fees bill every 30 days. Knowing which is which makes the bill easier to read.",
        "Setup cost depends on who does it and what's in scope, so compare quotes line by line rather than on the total. A complete setup for a Pakistani store usually covers products and collections, shipping zones and rates, payment methods including COD, courier booking, order notifications in English and Urdu where needed, legal pages, and a round of test orders on mobile.",
      ],
      bullets: [
        "DIY: no cash cost, but budget the time for products, policies, shipping zones, payment setup and test orders.",
        "Freelancer: often the cheapest route for theme setup and product uploads; confirm who owns the store account and what happens after launch.",
        "Studio or agency: costs more but should include design, courier and COD workflows, speed checks and a handover. Ask for a written scope.",
        "Whoever you hire, the store, domain and apps should be registered to your business email, not theirs.",
      ],
    },
    {
      heading: "Can you pay for Shopify with a Pakistani card?",
      body: [
        "Yes, if the card meets Shopify's rules. Shopify says [most bills are charged in US dollars](https://help.shopify.com/en/manual/your-account/manage-billing/paying-your-bills/managing-payments/local-currency), and PKR isn't on its list of local billing currencies as of September 2026.",
        "Shopify's [billing payment methods page](https://help.shopify.com/en/manual/your-account/manage-billing/paying-your-bills/making-payments/payment-methods-for-bills) accepts Mastercard, Visa, American Express, Diners Club and Discover credit cards, and co-branded debit cards with international capability that are set up for recurring transactions. Prepaid and virtual cards aren't accepted, which rules out some app-based cards Pakistani banks and fintechs issue.",
        "Your bank may add a currency conversion markup and taxes to each USD charge, so the PKR amount on your statement will be higher than the dollar price. Check your bank's schedule of charges, enable international e-commerce on the card, and add a backup payment method so a declined charge doesn't pause your store.",
      ],
    },
    {
      heading: "Sample monthly budgets for a small, growing and established store",
      body: [
        "These budgets are illustrative. They use the plan and app prices listed above, assume annual plan billing except for the small store, and spread a one-time theme purchase over 12 months. Courier charges and the gateway's own fee aren't included because they depend on your contracts.",
      ],
      table: {
        caption: "Illustrative fixed monthly costs in USD (prices as listed in September 2026)",
        headers: ["Line item", "Small store", "Growing store", "Established store"],
        rows: [
          ["Shopify plan", "Basic, monthly: $25", "Grow, annual: $49", "Advanced, annual: $299"],
          [
            "Theme",
            "Free theme: $0",
            "$300 theme over 12 months: $25",
            "$300 theme over 12 months: $25",
          ],
          [
            "Courier booking app",
            "Free tier: $0",
            "$25 per 12 months: about $2",
            "$25 per 12 months: about $2",
          ],
          ["COD confirmation app", "$9.99", "$19.99", "$69.99"],
          ["Reviews app", "Free plan: $0", "$15", "$15"],
          ["Fixed total", "About $35", "About $111", "About $411"],
          ["Shopify fee on gateway-paid sales", "2%", "1%", "0.6%"],
        ],
      },
      subsections: [
        {
          heading: "When does a bigger plan pay for itself?",
          body: [
            "The lower gateway fee on a higher plan only pays off above a certain volume of gateway-paid sales. On annual billing, Grow costs US$30 a month more than Basic and saves 1 percentage point, so it breaks even at US$3,000 a month in gateway-paid sales. On monthly billing the gap is US$40, so the break-even is US$4,000.",
            "Advanced costs US$250 a month more than Grow on annual billing and saves 0.4 points, so it breaks even at US$62,500 a month in gateway-paid sales. COD orders don't count toward either figure, because they carry no Shopify fee.",
          ],
        },
      ],
    },
    {
      heading: "How to cut Shopify costs without hurting conversion",
      body: [
        "The goal is to lower fixed costs without removing what customers use to decide. Start with the items that cost money and do nothing visible.",
      ],
      bullets: [
        "Audit apps every quarter. Remove any app nobody on the team can name a result for.",
        "Switch to annual billing once the store is stable. On Basic that's US$72 a year less than monthly billing; on Grow it's US$192.",
        "Consolidate: one WhatsApp tool that handles both COD confirmation and delivery updates beats two.",
        "Use Shopify Flow for tagging and holds before paying for an app that does the same.",
        "Offer bank or Raast transfer as a manual payment option for customers who want to prepay. It carries no Shopify fee, but budget time to reconcile it.",
        "Fix returned parcels before chasing plan savings. Each avoided return saves two delivery legs.",
      ],
      callout: {
        title: "From the studio",
        body: "When we scope a Pakistani Shopify build, we price the app stack before the design. We list every app the store will need at launch, its billing model and the job it does, and we agree which ones can wait. It also heads off a common surprise: free trials that convert to paid plans without anyone noticing. We put each trial's end date in the handover notes.",
      },
    },
    {
      heading: "Getting a second opinion on your budget",
      body: [
        "If you're budgeting a new store, get the plan, gateway, app and courier numbers into one sheet before you pay for design. If you're already running one, your last three Shopify bills and your courier's return report will show where the money goes.",
        "Pixel2Tech builds and fixes Shopify stores for Pakistani and international brands, including COD and courier workflows. Our [WordPress and Shopify service](/services/wordpress-and-shopify) covers setup, migrations and ongoing fixes, and our list of [common Shopify issues and how to fix them](/blog/shopify-issues-and-how-to-fix-them) is a good self-check before you hire anyone.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does Shopify cost per month in Pakistan?",
      a: "As of September 2026, Shopify's Pakistan pricing page lists Basic at US$25, Grow at US$65 and Advanced at US$399 a month on monthly billing, or US$19, US$49 and US$299 a month billed annually. Add apps, a possible theme purchase, courier charges and Shopify's third-party fee on gateway-paid orders. A lean small store can run on about US$35 a month in fixed costs.",
    },
    {
      q: "Does Shopify charge extra transaction fees in Pakistan?",
      a: "Yes, on orders paid through a third-party gateway, because Shopify Payments isn't available in Pakistan. The fee is 2% on Basic, 1% on Grow and 0.6% on Advanced as of September 2026, on top of the gateway's own fee. Manual payment methods such as cash on delivery and bank transfers are exempt, so COD orders don't carry it.",
    },
    {
      q: "Can I pay for Shopify with a Pakistani debit card?",
      a: "Often, yes. Shopify accepts co-branded Visa, Mastercard or American Express debit cards that have international capability and are set up for recurring payments. Prepaid and virtual cards aren't accepted. Bills are charged in US dollars, so enable international e-commerce on the card, expect your bank's conversion charges, and add a backup card in case a charge is declined.",
    },
    {
      q: "Which Shopify apps does a Pakistani store really need?",
      a: "Most stores need four jobs covered at launch: courier booking, COD confirmation, product reviews and basic automation. Several apps cover each job with free tiers or low monthly prices, and Shopify Flow handles tags and fulfillment holds for free on Basic and above. Add anything else only when you can name the problem it solves and the metric you'll check.",
    },
    {
      q: "How much does a Shopify developer charge in Pakistan?",
      a: "It depends on scope, so compare quotes line by line. A quote for theme setup and product uploads isn't comparable with one that includes design, courier and COD workflows, speed work and training. Ask each developer for a written scope, confirm the store is registered to your business email, and check who handles fixes after launch.",
    },
  ],
  sources: [
    { label: "Shopify — Pricing (Pakistan)", href: "https://www.shopify.com/pk/pricing" },
    {
      label: "Shopify Help Center — Shopify Payments supported countries",
      href: "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries",
    },
    {
      label: "Shopify Help Center — Third-party transaction fees on your Shopify bills",
      href: "https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees",
    },
    {
      label: "Shopify Help Center — Available payment methods for your Shopify bills",
      href: "https://help.shopify.com/en/manual/your-account/manage-billing/paying-your-bills/making-payments/payment-methods-for-bills",
    },
    {
      label: "Easypaisa — Online Payment Gateway",
      href: "https://easypaisa.com.pk/online-payment-gateway/",
    },
    {
      label: "Shopify App Store — Universal Courier Pakistan",
      href: "https://apps.shopify.com/universal-courier-pakistan",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    {
      label: "Shopify payment gateways in Pakistan",
      to: "/blog/shopify-payment-gateways-pakistan",
    },
    {
      label: "How to reduce fake COD orders on Shopify",
      to: "/blog/reduce-fake-cod-orders-shopify-pakistan",
    },
    {
      label: "Common Shopify issues and how to fix them",
      to: "/blog/shopify-issues-and-how-to-fix-them",
    },
  ],
  cta: {
    title: "Want a second opinion on your Shopify budget?",
    body: "Send us your plan, app list and a recent Shopify bill. We'll point out the apps you can drop, the plan that fits your payment mix, and where returned parcels are costing you most.",
  },
};

export default post;
