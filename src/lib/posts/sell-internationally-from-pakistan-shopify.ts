import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Sell Internationally From Pakistan on Shopify: 2026 Guide",
  metaDescription:
    "How Pakistani brands sell to UK, US and UAE buyers on Shopify: card payments without Shopify Payments, currency, shipping, duties and export proceeds.",
  keywords: [
    "sell internationally from Pakistan Shopify",
    "Shopify international shipping from Pakistan",
    "accept international payments Pakistan ecommerce",
    "sell to overseas Pakistanis UK USA UAE",
    "Shopify Markets Pakistan",
    "ecommerce export from Pakistan",
  ],
  keyTakeaways: [
    "Yes, a Pakistan-based Shopify store can sell to the UK, US, UAE and beyond, but without Shopify Payments it charges in its store currency and relies on a Pakistani gateway that accepts foreign cards.",
    "Stripe, PayPal and Shopify Payments don't list Pakistan as a supported country as of September 2026, so most brands start with a local aggregator or manual payments for diaspora customers.",
    "Shopify Markets still lets you set market-specific prices and percentage adjustments on any plan, even though local-currency checkout needs Shopify Payments or Adyen.",
    "Duties are now a front-of-page issue: the US has suspended duty-free de minimis entry for shipments of US$800 or less, and UK rules make overseas sellers charge VAT on consignments of £135 or less.",
    "Under the State Bank of Pakistan's B2C e-commerce export rules, parcels go through Customs-registered couriers and proceeds must come back through banking channels or payment gateways within 60 days.",
  ],
  content: [
    {
      heading: "Can you sell internationally from a Pakistani Shopify store?",
      definition:
        "Yes. A Pakistan-based Shopify store can sell to buyers in the UK, US, UAE and elsewhere, but without Shopify Payments it charges in its store currency, needs a Pakistani gateway that accepts foreign cards, and has to handle shipping, duties and export proceeds itself. Many brands start with overseas Pakistani customers.",
      body: [
        "Shopify's own [international page for Pakistan](https://www.shopify.com/pk/international) promotes selling in 130+ currencies. The fine print sits in the help center: local-currency selling needs Shopify Payments or Adyen, and neither is how most Pakistani stores take payment. That gap explains the Shopify Community threads asking whether selling abroad from Pakistan is possible at all.",
        "It is. It just takes a few decisions Shopify can't make for you: who you're selling to, how they'll pay, how parcels travel, who pays duties, and how the money returns to Pakistan legally.",
      ],
    },
    {
      heading: "Who is your international buyer?",
      body: ["Start by naming the customer, because it changes every decision below."],
      subsections: [
        {
          heading: "Overseas Pakistanis",
          body: [
            "They already know your category and your price points at home, and many shop around occasions such as Eid and weddings. Test what they value: a firm delivery date may matter more than speed, product pages can speak to them in English with Urdu where it helps, and some will prefer paying by bank transfer to a Pakistani account.",
          ],
        },
        {
          heading: "Non-Pakistani customers",
          body: [
            "They compare you with local brands in their own country. They expect local-feeling prices, card or wallet payment, fast delivery, clear returns and no duty surprises. Serving them well usually requires more than a Pakistani store can offer from its home setup, which is why many brands start with the diaspora and expand once the operations work.",
          ],
        },
        {
          heading: "Boutiques and resellers abroad",
          body: [
            "A third group is easy to overlook: boutiques and resellers in diaspora neighborhoods who want to buy in bulk. They need wholesale prices, minimum order quantities and invoices rather than a retail checkout. If that's part of your plan, our guide to [Shopify B2B without Shopify Plus](/blog/shopify-b2b-without-shopify-plus) covers how to serve them from the same store.",
          ],
        },
      ],
    },
    {
      heading: "How do Pakistani brands accept international card payments?",
      definition:
        "Usually through a Pakistani aggregator that accepts cards issued abroad, with manual bank transfer as a backup for large orders.",
      body: [
        "Shopify Payments isn't available in Pakistan. As of September 2026, Pakistan also isn't on [Stripe's supported-countries list](https://stripe.com/global) or [PayPal's worldwide country list](https://www.paypal.com/us/webapps/mpp/country-worldwide). That leaves three realistic routes, each with a trade-off.",
        "Whichever route you choose, write down how a refund reaches a customer abroad before your first sale. Card refunds usually go back through the gateway; bank-transfer refunds need the customer's international account details and cost you a transfer fee.",
      ],
      bullets: [
        "Ask your gateway: do you accept Visa and Mastercard cards issued outside Pakistan?",
        "Ask: what's the rate for international cards compared with local ones?",
        "Ask: do you run 3-D Secure or other fraud checks on foreign cards?",
        "Ask: how are disputes handled, and are disputed amounts held from settlements?",
        "Ask: will my bank be able to treat these settlements as realized export proceeds?",
      ],
      table: {
        caption: "International payment routes for a Pakistan-based Shopify store",
        headers: ["Route", "How it works", "Trade-off"],
        rows: [
          [
            "Pakistani aggregator with international card acceptance",
            "Connected in Shopify's payment settings; charges in your store currency",
            "Ask about foreign-card rates, fraud checks and disputes; buyer's bank converts the currency",
          ],
          [
            "Manual bank transfer",
            "Customer sends money from abroad to your Pakistani account; you confirm and mark paid",
            "No Shopify fee, but slow and manual; best for high-value or repeat diaspora orders",
          ],
          [
            "Company registered abroad",
            "Foreign entity opens accounts with processors available in that country",
            "Adds tax, banking and compliance work; needs professional advice before you start",
          ],
        ],
      },
    },
    {
      heading: "Currency and pricing: what Shopify Markets can and can't do",
      body: [
        "Shopify's guidance on [selling in local currencies](https://help.shopify.com/en/manual/international/pricing/limitations) is direct: local-currency selling is only supported by Adyen or Shopify Payments, and orders through other third-party providers are processed in the store's default currency.",
        "The same page adds something most guides miss. Some market pricing customizations, including setting product prices and percentage price adjustments for each market, are available on all plans without Adyen or Shopify Payments. So you can create a UK market with its own prices, even though the charge still happens in PKR.",
      ],
      bullets: [
        "Set international prices per market that cover the extra packaging, card fees and returns risk, not just the PKR price converted.",
        "Show a clear line near the price: 'You'll be charged in PKR. Your bank converts it at its own rate.'",
        "Round market prices so the converted amount feels deliberate, and review them when the exchange rate moves.",
        "Be careful with currency-converter apps. Shopify notes that some show a local currency on the storefront but revert to the store currency at checkout, which buyers read as a bait-and-switch.",
      ],
    },
    {
      heading: "Shipping from Pakistan: express couriers vs consolidated shipping",
      body: [
        "For individual customer orders, many brands use an express courier's international service. It's the simplest to set up, gives customers tracking they can follow, and fits Pakistan's B2C e-commerce export framework, which routes shipments through couriers registered with Pakistan Customs.",
        "Consolidated shipping, where you send stock in bulk to a partner or warehouse abroad and ship locally from there, can lower per-order costs and speed up delivery, but it ties up stock and adds a second business relationship. It usually makes sense only once a single country is a steady share of orders.",
        "Paperwork matters as much as the box. Each parcel needs an invoice with an accurate description, HS code, country of origin and the price the customer actually paid. SBP's rules base each consignment's declared value on that invoice, and under-declaring to save the buyer duty creates problems for both of you.",
      ],
      bullets: [
        "Weigh and measure your five best sellers packed, because couriers charge on actual or volumetric weight, whichever is higher.",
        "Get written transit-time estimates from two couriers for your main destination cities.",
        "Decide whether shipping is a flat rate, free above a threshold or calculated at checkout.",
        "Promise delivery windows you can meet during Eid and wedding season, when volumes spike.",
      ],
    },
    {
      heading: "Who pays customs duties on international orders?",
      definition:
        "Either you collect duties at checkout and ship Delivered Duty Paid (DDP), or the customer pays on arrival under Delivered at Place (DAP).",
      body: [
        "Shopify's [duties guide](https://help.shopify.com/en/manual/international/duties-and-import-taxes) explains the two terms. Under DDP, the seller takes responsibility for import costs and can collect them at checkout, giving the customer one total price. Under DAP, the seller only ships, and the customer pays import costs on delivery, which can mean an unexpected bill and a refused parcel.",
        "To collect duties at checkout through Shopify, your products need HS codes and your carrier must support DDP labels; HS codes are required for all international orders. Stores that don't meet Shopify's requirements can use a third-party app to calculate duties instead.",
        "US buyers deserve special attention. [CBP's e-commerce FAQs](https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs) say the suspension of duty-free de minimis applies to goods valued at US$800 or less arriving by all modes, including the postal network, and that all applicable duties, taxes and fees must be paid based on classification, country of origin and value.",
        "If you ship DAP, say so in three places: the product page, the cart and the order confirmation. A line such as 'Import duties and taxes, if any, are paid by you on delivery' costs you some conversions and saves you refused parcels shipped back at your expense.",
      ],
      table: {
        caption: "Import rules that affect diaspora orders (as of September 2026)",
        headers: ["Destination", "Rule", "What it means for you"],
        rows: [
          [
            "United States",
            "CBP has suspended duty-free de minimis treatment for shipments valued at US$800 or less from all countries",
            "Low-value parcels are no longer duty-free; warn buyers or collect duties at checkout",
          ],
          [
            "United Kingdom",
            "For consignments of £135 or less, the overseas seller must charge and account for UK VAT at the point of sale (which requires UK VAT registration); above £135, import VAT and duty apply at the border",
            "Decide whether you'll register for UK VAT or ship DAP and tell buyers they may pay on delivery",
          ],
          [
            "UAE and others",
            "Rules vary by country and change often",
            "Ask your courier for current duty and tax thresholds before you set shipping terms",
          ],
        ],
      },
    },
    {
      heading: "Size charts, returns and trust signals for overseas buyers",
      body: [
        "An overseas buyer can't visit your shop in Liberty Market or check the fabric. Your product page has to answer the questions a salesperson would.",
      ],
      bullets: [
        "Size charts in inches and centimeters, with garment measurements, not just S, M and L.",
        "Fabric, weight and care instructions, plus close-up photos in daylight.",
        "A returns policy written for international orders: who pays return shipping, and whether exchanges or store credit replace refunds.",
        "Delivery estimates by country on the product page, not only at checkout.",
        "A WhatsApp number with business hours in the buyer's time zone.",
        "Reviews from customers in the same country, once you have them.",
      ],
    },
    {
      heading: "Should you create a separate international Shopify store?",
      body: [
        "One store with Shopify Markets is simpler: one catalog, one set of apps, one admin. A second store makes sense when the international business needs a different currency, payment provider or legal entity. For example, a brand that sets up a company abroad might run an international store in that company's name, with its own processor.",
        "Two stores also mean two sets of SEO pages competing for the same product searches, two inventories to keep in sync and two places to update every product photo. If you do split, use the international store's domain for overseas campaigns only, and keep product content in one source you copy from. For brands with complex multi-market needs, a [headless Shopify build](/blog/headless-shopify-commerce-guide) is another route, though it's rarely the first step.",
      ],
      table: {
        caption: "One store with Markets vs a separate international store",
        headers: ["Question", "One store with Markets", "Separate international store"],
        rows: [
          [
            "Checkout currency",
            "Store currency (PKR) for most Pakistani stores",
            "Can use a different store currency",
          ],
          [
            "Payment providers",
            "Same providers as the home store",
            "Can use providers available to a foreign entity",
          ],
          ["Running cost", "One plan and one app stack", "Second plan and often duplicate apps"],
          ["Inventory", "Shared automatically", "Needs syncing or a separate stock pool"],
          [
            "Best for",
            "Diaspora-first brands testing demand",
            "Brands with a foreign entity and steady overseas volume",
          ],
        ],
      },
    },
    {
      heading: "Receiving export proceeds through proper channels",
      body: [
        "Selling abroad from Pakistan is an export, and the State Bank of Pakistan has specific rules for business-to-consumer e-commerce exports in Chapter 12 of its [Foreign Exchange Manual](https://www.sbp.org.pk/assets/document/Chapter-12-foreign-exchange-manual.pdf), introduced through FE Circular No. 07 of 2020. As we read the current chapter:",
      ],
      bullets: [
        "Your bank (an authorized dealer) registers you in the B2C e-commerce module of WeBOC after its due diligence.",
        "You hand each parcel to a courier registered with Pakistan Customs, which files the goods declaration for you.",
        "Each consignment's value is based on the customer invoice and must not exceed US$5,000.",
        "Proceeds must arrive through a banking channel or an international payment scheme or gateway, within 60 days of shipment or by the due date, whichever is earlier.",
        "You submit a monthly statement of proceeds to your bank within five working days of month end.",
        "If unrealized bills older than 60 days reach US$20,000 or more at month end, your bank marks you 'Suspended' until they're cleared.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we switch on international shipping for a client, we ask them to have one conversation with their bank's trade or e-commerce desk and bring back three answers: are they registered in the WeBOC e-commerce module, whether the bank can see shipments from their chosen courier, and how gateway settlements will be marked as realized. That call takes about an hour and can prevent a suspended export status later. This isn't legal or financial advice; your bank has the final word.",
      },
    },
    {
      heading: "Where to start",
      body: [
        "Pick one destination country and one customer group, usually overseas Pakistanis in the UK or UAE. Price a market for them, confirm your gateway takes foreign cards, agree DDP or DAP with your courier, and register with your bank for e-commerce exports. Then run ten real orders before you advertise.",
        "For payment options in more depth, read our guide to [Shopify payment gateways in Pakistan](/blog/shopify-payment-gateways-pakistan). Pixel2Tech's [WordPress and Shopify team](/services/wordpress-and-shopify) in Lahore sets up international markets, pricing and product pages for Pakistani brands selling abroad.",
        "Your pre-launch checklist for the first market:",
      ],
      bullets: [
        "A market in Shopify with its own prices and a clear note on the charge currency.",
        "A gateway confirmed in writing to accept foreign cards, plus a tested refund.",
        "Courier account, packed weights and written transit estimates for the main cities.",
        "DDP or DAP decided, with the duty line on product, cart and confirmation pages.",
        "HS codes and country of origin on every product you'll ship abroad.",
        "Bank registration for B2C e-commerce exports and a plan for the monthly statement.",
        "International returns policy and size charts published.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I sell to the US or UK from a Pakistani Shopify store?",
      a: "Yes. There's no rule stopping a Pakistan-based Shopify store from selling to US or UK buyers. The practical limits are payments, since Shopify Payments, Stripe and PayPal don't list Pakistan, and duties, since US low-value parcels are no longer duty-free and UK rules require VAT handling. Start with a gateway that accepts foreign cards and clear duty terms.",
    },
    {
      q: "How do Pakistani brands accept international card payments?",
      a: "Usually through a Pakistani payment aggregator that accepts cards issued abroad, connected through Shopify's payment settings, charging in PKR while the buyer's bank converts the amount. Some brands also offer manual bank transfer for large diaspora orders, and a few set up a company abroad to use foreign processors, which needs legal and tax advice first.",
    },
    {
      q: "Should I create a separate international Shopify store?",
      a: "Usually not at first. One store with Shopify Markets lets you set prices per country on any plan, with one catalog and app stack. A separate store makes sense when the international business needs a different currency, payment provider or legal entity, for example once you've registered a company abroad and have steady overseas sales.",
    },
    {
      q: "Who pays customs duties on international orders?",
      a: "It depends on your shipping terms. Under Delivered Duty Paid (DDP), you collect duties at checkout and the customer pays nothing on arrival. Under Delivered at Place (DAP), the customer pays duties and taxes when the parcel arrives, which can lead to refused deliveries. Tell buyers clearly which terms you use before they pay.",
    },
    {
      q: "How long does shipping from Pakistan to the UK take?",
      a: "It depends on the service and the time of year. Express courier services are usually quoted in days, while postal and economy services can take considerably longer, and customs checks add time at either end. Get written transit estimates from two couriers for your main UK cities, and pad them during Eid and wedding season.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center — Guidelines and restrictions for selling in local currencies",
      href: "https://help.shopify.com/en/manual/international/pricing/limitations",
    },
    {
      label: "Shopify Help Center — Duties and import taxes",
      href: "https://help.shopify.com/en/manual/international/duties-and-import-taxes",
    },
    {
      label: "State Bank of Pakistan — Foreign Exchange Manual, Chapter 12 (Exports)",
      href: "https://www.sbp.org.pk/assets/document/Chapter-12-foreign-exchange-manual.pdf",
    },
    {
      label: "State Bank of Pakistan — FE Circular No. 07 of 2020: B2C e-commerce exports",
      href: "https://www.sbp.org.pk/circulars/fe-circular-no-07-of-2020",
    },
    {
      label: "U.S. Customs and Border Protection — E-commerce FAQs",
      href: "https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs",
    },
    {
      label: "GOV.UK — VAT and overseas goods sold directly to customers in the UK",
      href: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    {
      label: "Shopify payment gateways in Pakistan",
      to: "/blog/shopify-payment-gateways-pakistan",
    },
    { label: "Shopify B2B without Shopify Plus", to: "/blog/shopify-b2b-without-shopify-plus" },
    { label: "Headless Shopify guide", to: "/blog/headless-shopify-commerce-guide" },
  ],
  cta: {
    title: "Planning your first overseas market?",
    body: "Tell us which country you want to sell to and what you sell. We'll set up the market, pricing and product pages in Shopify and walk you through the payment and shipping decisions before launch.",
  },
};

export default post;
