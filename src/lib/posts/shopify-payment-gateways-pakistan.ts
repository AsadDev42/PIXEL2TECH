import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Payment Gateways in Pakistan: 2026 Setup Guide",
  metaDescription:
    "Shopify Payments isn't available in Pakistan. Compare JazzCash, Easypaisa, Raast and card options, set them up in Shopify and test checkout before launch.",
  keywords: [
    "Shopify payment gateway Pakistan",
    "JazzCash Shopify integration",
    "Easypaisa Shopify",
    "Shopify Payments Pakistan",
    "Raast Shopify",
    "Safepay Shopify",
    "PayFast Shopify",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the Shopify setup services discussed here.",
  keyTakeaways: [
    "Shopify Payments isn't available in Pakistan, so every Pakistani Shopify store uses manual payment methods, a third-party gateway, or both.",
    "Manual methods such as cash on delivery and bank or wallet transfers carry no Shopify transaction fee but have to be reconciled by hand. Gateway payments are automatic but carry Shopify's 2%, 1% or 0.6% fee depending on plan.",
    "JazzCash and Easypaisa can be offered today as manual methods. For automatic wallet and card payments, most stores connect a Pakistani aggregator from Shopify's payment settings; the list you see depends on your store address.",
    "State Bank of Pakistan instructions required banks and other regulated institutions to enable Raast payment acceptance for their online and in-store merchant customers by March 31, 2025, so ask your bank or aggregator how Raast can reach your checkout.",
    "Test every payment method with real devices before launch: a successful payment, a failed one, a refund and a reconciliation against your bank or wallet statement.",
  ],
  content: [
    {
      heading: "Which payment gateways work with Shopify in Pakistan?",
      definition:
        "Shopify Payments isn't offered in Pakistan, so Pakistani Shopify stores take payment in three ways: manual methods such as cash on delivery and JazzCash, Easypaisa or bank transfers; a Pakistani payment aggregator connected as a third-party provider for cards, wallets and bank accounts; or, rarely, an international processor through a business entity abroad.",
      body: [
        "A common setup uses two of the three: COD for buyers who want to pay on arrival, plus either a manual transfer option or an aggregator for customers who want to pay upfront.",
        "The right mix depends on how much of your volume you expect to be prepaid, how much manual checking your team can handle, and whether you sell to overseas Pakistanis who pay by card.",
        "The international names founders ask about first aren't open to Pakistan-based businesses. As of September 2026, Pakistan isn't on [Stripe's list of supported countries](https://stripe.com/global), and it isn't on PayPal's worldwide country list either. Brands that use them do so through a company registered abroad, which brings its own tax, banking and compliance work and needs professional advice, not a blog post.",
      ],
    },
    {
      heading: "What does 'no Shopify Payments' mean for fees and checkout?",
      body: [
        "Shopify's [supported-countries list](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) doesn't include Pakistan, and the page tells merchants in unlisted countries to use a third-party payment provider. That has three consequences.",
      ],
      bullets: [
        "An extra Shopify fee on gateway payments: 2% on Basic, 1% on Grow and 0.6% on Advanced as of September 2026, on top of the gateway's own charge. Manual methods, including COD, are exempt.",
        "One card gateway at a time: Shopify allows only one credit card payment provider to be active, and only the store owner can add one.",
        "No local-currency checkout for overseas buyers: selling in multiple currencies needs Shopify Payments or Adyen, so orders through other providers are charged in your store's default currency.",
      ],
    },
    {
      heading: "Your options compared",
      definition:
        "Manual methods cost nothing in Shopify fees but cost staff time; an aggregator automates payment confirmation for a percentage per order.",
      body: [
        "Use this table to decide what to offer at launch. The aggregators named are examples we found listed on the Shopify App Store in September 2026, not recommendations; availability in your admin depends on your store address.",
      ],
      table: {
        caption: "Payment options for a Pakistan-based Shopify store (as of September 2026)",
        headers: [
          "Option",
          "What customers pay with",
          "Shopify fee",
          "Confirmation and reconciliation",
          "Best for",
        ],
        rows: [
          [
            "Cash on delivery (manual)",
            "Cash to the courier",
            "None",
            "Courier remits COD; you match remittances to orders",
            "Most buyers, especially first-time customers",
          ],
          [
            "Wallet or bank transfer (manual)",
            "JazzCash, Easypaisa, IBAN or Raast transfer",
            "None",
            "Order stays unpaid until you check the transfer and mark it paid",
            "Repeat customers and stores with low prepaid volume",
          ],
          [
            "Pakistani aggregator (third-party provider)",
            "Cards, bank accounts and wallets, depending on provider (examples listed: Safepay Checkout, PayFast Gateway App)",
            "2% / 1% / 0.6% by plan",
            "Automatic; order is marked paid when the payment succeeds",
            "Stores with steady prepaid volume",
          ],
          [
            "International processor via a foreign entity",
            "International cards",
            "Depends on setup",
            "Automatic, but adds legal, tax and banking work",
            "Established exporters with advisers in place",
          ],
        ],
      },
    },
    {
      heading: "How to choose a payment gateway in Pakistan",
      body: [
        "Vendor pages compare themselves on the features they're best at. Use a neutral checklist instead and get the answers in writing.",
      ],
      bullets: [
        "Regulation: is the provider, or the bank behind it, regulated by the State Bank of Pakistan? Ask which license or partner bank the service runs under.",
        "Coverage: which methods does it support today, cards, JazzCash, Easypaisa, bank accounts, Raast, and which are only on the roadmap?",
        "Checkout flow: does the customer stay on Shopify's checkout, or get redirected to the provider's page? Redirects add a step on mobile.",
        "Settlement: how quickly does money reach your bank, in which currency, and are refunds deducted from settlements?",
        "Fees: per-method rates, whether taxes are included, and any setup, annual or chargeback fees.",
        "Shopify integration: does it appear in your admin under payment providers for a Pakistan address?",
        "International cards: can it accept cards issued outside Pakistan, and at what rate?",
        "Support: who do you call when a payment is deducted but the order isn't marked paid?",
      ],
      callout: {
        title: "What published pricing looks like",
        body: "Easypaisa publishes its online gateway rates as of September 2026: 1% for Easypaisa Mobile Account and 2% for over-the-counter token payments, inclusive of taxes, with no annual or installation charges. Mobile Account payments settle daily and instantly; token payments settle in 7 working days. Ask every provider for a table this clear.",
      },
    },
    {
      heading: "Can you add JazzCash and Easypaisa to Shopify?",
      definition:
        "Yes. The quickest route is a custom manual payment method; automatic wallet payments need an aggregator that supports them.",
      body: [
        "Easypaisa's [gateway page](https://easypaisa.com.pk/online-payment-gateway/) lists plugins for WooCommerce, OpenCart, Magento and PrestaShop, not Shopify, and requires a business with a live website or app. On Shopify, merchants usually reach wallets through an aggregator, or offer the wallet as a manual method.",
        "JazzCash's [payment gateway page](https://www.jazzcash.com.pk/business/accept-payments/payment-gateway) shows how its checkout works for customers: they enter their JazzCash number and approve an MPIN request on their phone, or choose a voucher and pay it later through the app, USSD or a retailer.",
      ],
      subsections: [
        {
          heading: "Setting up a wallet as a manual payment method",
          body: [
            "Shopify's [manual payment methods](https://help.shopify.com/en/manual/payments/manual-payments) let you add a custom method in Settings > Payments. You name it, add instructions, and activate it. Some names are reserved, such as 'Cash' and 'Bank Deposit', so use something like 'JazzCash or Easypaisa transfer'.",
            "Orders paid this way arrive marked unpaid. Your team checks the wallet or bank app, then marks the order paid. That's workable at 10 orders a day and painful at 100.",
          ],
          bullets: [
            "Put the account title, wallet number or IBAN and the exact amount rule in the instructions.",
            "Ask customers to send the order number as the payment reference and share a screenshot on WhatsApp.",
            "Set a deadline, for example 24 hours, after which unpaid orders are cancelled.",
            "Reconcile once a day at a fixed time, and never ship before the money is confirmed.",
          ],
        },
        {
          heading: "When to outgrow manual payments",
          body: [
            "Manual transfers are a good way to test whether your customers want to prepay at all. They stop being cheap once staff time, errors and slow confirmations cost more than a gateway's percentage. Move to an aggregator when you see these signs:",
          ],
          bullets: [
            "Someone spends more than an hour a day matching transfers to orders.",
            "Customers complain that their order sat unconfirmed after they paid.",
            "You've shipped an order against a fake or edited payment screenshot.",
            "Prepaid orders are a steady share of sales, so the Shopify fee is predictable.",
            "You run sales campaigns where fast confirmation matters.",
          ],
        },
      ],
    },
    {
      heading: "How to connect an aggregator in Shopify, step by step",
      body: [
        "Once your aggregator account is approved, the Shopify side takes a few minutes. Shopify's guide to [configuring third-party providers](https://help.shopify.com/en/manual/payments/third-party-providers/configuring-providers) describes this route for countries where Shopify Payments isn't available:",
      ],
      bullets: [
        "In your Shopify admin, go to Settings > Payments.",
        "In the Payment providers section, click Choose a provider.",
        "Select your provider from the list. The list is filtered by your store address, so a provider may not appear if the address is wrong.",
        "Enter the credentials the provider gave you, click Activate, then Save.",
        "Place test orders (see the last section) before you announce the new option.",
      ],
      subsections: [
        {
          heading: "What aggregators usually ask for",
          body: [
            "Expect a KYC and due-diligence step before you can go live. Have your CNIC or company registration documents, bank account details, and a live store with a refund policy, contact details and product prices visible. Easypaisa, for example, onboards businesses with a live website or app, so apply once the store is public rather than behind a password page.",
          ],
        },
      ],
    },
    {
      heading: "Can you accept Raast payments on Shopify?",
      definition:
        "Not natively. Raast can reach a Shopify store through an aggregator that supports it, or as a manual transfer option using your Raast ID or QR.",
      body: [
        "The State Bank of Pakistan describes [Raast](https://www.sbp.org.pk/raast) as the country's national instant payment system, operated by Raast Payments Pakistan, a wholly owned SBP subsidiary. Person-to-merchant (P2M) payments let customers pay businesses directly from any participating bank app or wallet.",
        "In November 2024, [ProPakistani reported](https://propakistani.pk/2024/11/29/sbp-orders-to-enable-raast-payments-in-online-shopping-stores/) that SBP told banks and other regulated institutions to enable Raast P2M acceptance for existing account holders who sell in-store or online by March 31, 2025, and to include it in onboarding for new merchants. Acceptance can work through QR codes, Raast IDs, IBANs and Request to Pay.",
        "For a Shopify store, the practical questions go to your bank or aggregator:",
      ],
      bullets: [
        "Is Raast P2M enabled on my merchant account, and can I get a dynamic QR per order or only a static one?",
        "Do you support Request to Pay, so the customer gets a payment prompt in their banking app?",
        "Can Raast payments be offered inside your Shopify integration, or only through your own links?",
        "What are the fees and transaction limits, and when do funds settle?",
      ],
    },
    {
      heading: "Accepting cards from overseas Pakistani customers",
      body: [
        "Diaspora buyers in the UK, US and UAE usually want to pay by card. Ask your aggregator directly whether it accepts cards issued outside Pakistan, what extra fee applies, and whether it screens international orders for fraud.",
        "Also ask how disputes work. When a cardholder abroad disputes a charge, you'll need proof of delivery and your policies to contest it, and some providers deduct disputed amounts from your settlements while the case is open. Keep tracking numbers, delivery confirmations and customer messages for every international order.",
        "Without Shopify Payments, those orders are charged in your store currency, typically PKR, and the customer's bank converts it. Say so on the product page and at checkout so the statement amount isn't a surprise. We cover currency, shipping and duties in detail in [how Pakistani brands sell internationally on Shopify](/blog/sell-internationally-from-pakistan-shopify).",
      ],
    },
    {
      heading: "Testing checkout before launch",
      body: [
        "Shopify's [test order guide](https://help.shopify.com/en/manual/checkout-settings/test-orders) offers three routes: its Bogus test gateway, a provider's test mode, or a real transaction you then cancel and refund. The last one may cost processing fees, and while a provider is in test mode, customers can't place live orders, so schedule tests outside peak hours.",
      ],
      bullets: [
        "One successful payment per method, on an Android phone and an iPhone, over mobile data.",
        "One failed payment: wrong MPIN, timed-out approval or declined card. Check what the customer sees.",
        "One refund, and confirm when the money actually returns to the customer.",
        "Match every test to your bank or wallet statement and to the Shopify order.",
        "Check order confirmation emails and WhatsApp messages show the right payment status.",
        "Confirm manual-method instructions appear on the thank-you page and in the confirmation email.",
      ],
      callout: {
        title: "From the studio",
        body: "The failure we test hardest is the 'money deducted, order not marked paid' case, because it creates angry customers and duplicate payments. Before launch we agree with the client who checks the provider's portal, how quickly, and what message the customer gets. It's a support process, not a code fix, and it has to exist on day one.",
      },
    },
    {
      heading: "Getting help with your payment setup",
      body: [
        "Payment setup is where a Pakistani Shopify store most often loses sales quietly: a gateway missing from the admin, a redirect that fails on mobile, or manual transfers nobody reconciles. Start with COD plus one prepaid option, test it properly, and add more once the first one runs cleanly.",
        "If you're still budgeting, our breakdown of [Shopify store costs in Pakistan](/blog/shopify-store-cost-pakistan) shows how gateway fees change the plan decision. Pixel2Tech's [WordPress and Shopify team](/services/wordpress-and-shopify) can set up and test payments for new and existing stores.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Shopify Payments work in Pakistan?",
      a: "No. As of September 2026, Pakistan isn't on Shopify's list of countries where Shopify Payments is available, so Pakistani stores use a third-party provider, manual payment methods such as cash on delivery and bank transfers, or both. Gateway-paid orders carry Shopify's third-party transaction fee; manual methods don't.",
    },
    {
      q: "Can I add JazzCash and Easypaisa to Shopify?",
      a: "Yes. The fastest way is a custom manual payment method with your wallet details and instructions, which carries no Shopify fee but needs manual checking before you mark orders paid. For automatic wallet payments, connect an aggregator that supports JazzCash and Easypaisa from Settings > Payments. Easypaisa's own plugins cover WooCommerce and other platforms, not Shopify.",
    },
    {
      q: "Which payment gateway is best for Shopify in Pakistan?",
      a: "There isn't one best choice for every store. Compare providers on SBP regulation, supported methods, whether checkout redirects, settlement speed, published fees including taxes, and whether they appear in your Shopify admin for a Pakistan address. Get answers in writing and run test orders before committing, because integration quality matters as much as the rate.",
    },
    {
      q: "Does Shopify charge extra fees if I use a third-party gateway?",
      a: "Yes. As of September 2026, Shopify charges 2% on Basic, 1% on Grow and 0.6% on Advanced on orders paid through a third-party provider, on top of the provider's own fee. Manual payment methods, including cash on delivery and bank transfers, aren't charged this fee. Refunds don't return the Shopify transaction fee.",
    },
    {
      q: "Can I accept Raast payments on Shopify?",
      a: "Not through a built-in Shopify option. You can offer Raast as a manual transfer method using your Raast ID or QR code, or use an aggregator that includes Raast in its Shopify integration. SBP instructed banks and regulated institutions to enable Raast P2M acceptance for online and in-store merchants, so ask your bank what's available on your account.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center — Shopify Payments supported countries",
      href: "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries",
    },
    {
      label: "Shopify Help Center — Third-party transaction fees on your Shopify bills",
      href: "https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees",
    },
    {
      label: "Shopify Help Center — Manual payment methods",
      href: "https://help.shopify.com/en/manual/payments/manual-payments",
    },
    { label: "State Bank of Pakistan — Raast", href: "https://www.sbp.org.pk/raast" },
    {
      label: "ProPakistani — SBP orders to enable Raast payments in online shopping stores",
      href: "https://propakistani.pk/2024/11/29/sbp-orders-to-enable-raast-payments-in-online-shopping-stores/",
    },
    {
      label: "Easypaisa — Online Payment Gateway",
      href: "https://easypaisa.com.pk/online-payment-gateway/",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    { label: "Shopify store cost in Pakistan", to: "/blog/shopify-store-cost-pakistan" },
    {
      label: "Selling internationally from Pakistan on Shopify",
      to: "/blog/sell-internationally-from-pakistan-shopify",
    },
    {
      label: "Common Shopify issues and how to fix them",
      to: "/blog/shopify-issues-and-how-to-fix-them",
    },
  ],
  cta: {
    title: "Not sure which payment setup fits your store?",
    body: "Tell us your order volume, how many customers prepay, and which gateway quotes you have. We'll recommend a setup, configure it in Shopify and run the test orders with you before launch.",
  },
};

export default post;
