import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Best Shopify Payment Gateways for US, UK & EU Stores (2026)",
  metaDescription:
    "Shopify Payments rates in USD, GBP and EUR, the extra fee on third-party gateways, and where PayPal, Klarna, Apple Pay, iDEAL and SCA fit for your store.",
  keywords: [
    "Shopify payment gateways",
    "best payment gateway for Shopify",
    "Shopify Payments fees UK",
    "Shopify transaction fees",
    "Shopify Payments rates Europe",
    "Klarna Shopify",
    "PayPal Shopify fees",
    "Shopify iDEAL Bancontact",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan that works with clients in the US, UK and Europe, and offers the Shopify setup services discussed here.",
  keyTakeaways: [
    "For most US, UK and EU stores, Shopify Payments is the best main gateway: it avoids Shopify's third-party transaction fee and gives you Shop Pay, multi-currency selling and local payment methods.",
    "As of September 2026, Shopify Payments online card rates start at 2.9% + 30¢ on Basic in the US, 2% + 25p in the UK and 2% + €0.25 (excl. VAT) in Ireland, falling on higher plans.",
    "If you use a third-party card gateway instead, Shopify adds 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus, on top of the gateway's own fee. The fee isn't returned on refunds.",
    "Add PayPal and one buy-now-pay-later option on top of cards. With Shopify Payments active, PayPal Express Checkout carries no Shopify fee, but PayPal still charges its own rate.",
    "UK and EU stores must support 3-D Secure under PSD2 strong customer authentication. Shopify Payments handles this automatically; check it with any third-party provider before switching.",
  ],
  content: [
    {
      heading: "Which payment gateway should a US, UK or EU Shopify store use?",
      definition:
        "For most stores in the US, UK and EU, the best Shopify payment gateway is Shopify Payments. It avoids Shopify's 2%, 1% or 0.6% third-party transaction fee and gives you Shop Pay, multi-currency selling and local methods. Add PayPal and a buy-now-pay-later option on top, and use a third-party card gateway only when Shopify Payments won't accept your business.",
      body: [
        "Shopify Payments is available in the US, the UK and most EU countries, according to Shopify's [supported-countries list](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) as of September 2026. Slovakia is the notable EU gap, so stores based there need a third-party provider from the start.",
        "The rest of this guide covers what each option costs per plan in dollars, pounds and euros, where PayPal, Stripe and Klarna fit, which local European methods you can switch on, and the UK and EU card authentication rules that affect checkout.",
      ],
    },
    {
      heading: "What does Shopify Payments cost on each plan?",
      definition:
        "Shopify Payments charges a percentage plus a fixed fee per online card payment, and the rate drops as you move to a more expensive Shopify plan.",
      body: [
        "Rates differ by market. The UK and Irish pricing pages publish full rate tables, and we use Ireland as the EU example because it prices in euros and English. Other EU countries can differ slightly, so check your own country's pricing page before you budget.",
        "Shopify's US pricing page lists plan prices but, when we checked in September 2026, not card rates. The US figures below come from Shopify's own [June 2026 payment gateway guide](https://www.shopify.com/blog/ecommerce-payment-gateway). In the US, business cards and all American Express cards are priced as premium cards, and Shopify's help center says an extra charge applies to international cards.",
      ],
      table: {
        caption:
          "Shopify Payments online card rates by plan (as of September 2026; Ireland rates exclude VAT)",
        headers: [
          "Plan",
          "US, online card",
          "UK, standard card",
          "UK, Amex and international",
          "Ireland (EU), standard card",
          "Ireland (EU), Amex and international",
        ],
        rows: [
          ["Basic", "2.9% + 30¢", "2% + 25p", "3.1% + 25p", "2% + €0.25", "3.1% + €0.25"],
          ["Grow", "2.6% + 30¢", "1.7% + 25p", "2.7% + 25p", "1.7% + €0.25", "2.7% + €0.25"],
          ["Advanced", "2.4% + 30¢", "1.5% + 25p", "2.5% + 25p", "1.5% + €0.25", "2.5% + €0.25"],
          ["Plus", "Custom rates", "1.3% + 25p", "2.3% + 25p", "1.4% + €0.25", "2.4% + €0.25"],
        ],
      },
      bullets: [
        "Plan prices, billed monthly: Basic $25, £25 or €32; Grow $65, £65 or €92; Advanced $399, £344 or €384; Plus from $2,300, £1,800 or €2,100.",
        "Billed yearly, the same plans cost $19, $49 and $299 in the US, £19, £49 and £259 in the UK, and €24, €69 and €289 in Ireland per month.",
        "In-person card rates are lower: 2.6% to 2.4% + 10¢ in the US, 1.7% to 1.5% with no fixed fee in the UK and Ireland.",
        "A rough upgrade test: on UK standard cards, Grow saves 0.3 points over Basic, or £300 per £100,000 of card sales, against £40 a month more in plan fees on monthly billing.",
      ],
    },
    {
      heading: "What happens if you use a third-party payment gateway?",
      definition:
        "Shopify charges a third-party transaction fee on every order paid through an outside card gateway, on top of whatever that gateway charges.",
      body: [
        "The rate is the same in all three markets as of September 2026: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. Shopify's [third-party transaction fee page](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees) also states that the fee isn't returned when you refund an order.",
        "Here is an illustrative $100 order on the US Basic plan. Through Shopify Payments it costs $3.20 (2.9% + 30¢). Through a hypothetical outside gateway charging the same 2.9% + 30¢, it costs $5.20, because Shopify adds $2.00. That gap is why a switch away from Shopify Payments needs a strong reason.",
      ],
      bullets: [
        "Exempt when you use Shopify Payments: Shopify Payments itself, Shop Pay, Shop Pay Installments, PayPal Express Checkout and manual methods such as bank transfer or cash on delivery.",
        "Plus stores that use Shopify Payments as their only provider have third-party fees waived, including on store credit and gift card transactions.",
        "Running Shopify Payments alongside a direct third-party provider changes the maths. Shopify's [fees page](https://help.shopify.com/en/manual/payments/shopify-payments/onboarding/cost-of-shopify-payments) says Shop Pay and local payment methods are then charged at standard rates plus a 1.25% premium.",
        "Selling in multiple currencies needs Shopify Payments, so a third-party card gateway usually means charging international buyers in your store currency.",
      ],
    },
    {
      heading: "Where do PayPal and Stripe fit?",
      body: [
        "Every new Shopify store gets a PayPal Express Checkout account automatically. Keep it switched on unless you have a reason not to, because some shoppers would rather not type card details into a store they have never used. With Shopify Payments active, Shopify doesn't add its transaction fee, but PayPal charges its own.",
        "Stripe is a different case. Shopify Payments runs on Stripe, and Shopify's help center says that in countries where Shopify Payments is available, Stripe isn't listed as a separate gateway. Stand-alone [Stripe pricing](https://stripe.com/pricing) (2.9% + 30¢ for US domestic cards, 1.5% + 20p for standard UK cards, 1.5% + €0.25 for standard EEA cards in Ireland) only matters for payments you take outside Shopify's checkout, such as deposits on a separate booking tool.",
      ],
      bullets: [
        "US PayPal Checkout: 3.49% + $0.49 per domestic transaction, plus 1.5% on international transactions. PayPal Pay Later is 4.99% + $0.49 (PayPal US fee page, updated September 1, 2026).",
        "UK PayPal: 2.9% + 30p domestic, plus 1.29% when the buyer is in the EEA and 1.99% for other international buyers, per [PayPal UK's fee page](https://www.paypal.com/uk/business/paypal-business-fees) as of September 2026.",
        "Ireland PayPal: 3.40% + €0.35 domestic, no extra fee for EEA buyers and 1.99% for other international buyers (PayPal Ireland fee page, updated September 7, 2026).",
      ],
    },
    {
      heading: "Which buy-now-pay-later options work on Shopify?",
      definition:
        "Shop Pay Installments, Klarna and Afterpay (Clearpay in the UK) are the three BNPL options most US, UK and EU Shopify stores choose between, and which ones you can use depends on where your business is registered.",
      body: [
        "Start with one BNPL option, not three. Each one adds a button, a set of rules and another dispute process your team has to learn.",
        "Klarna is the clearest example of the country split. In the UK and much of Europe it is a [local payment method inside Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/klarna), offering pay in 30 days, pay in full and pay in 3. The US isn't on that list, so US stores install Klarna's own app and connect it with API credentials.",
      ],
      table: {
        caption: "Buy-now-pay-later on Shopify by market (as of September 2026)",
        headers: ["Option", "Markets", "How you add it", "Published merchant fee"],
        rows: [
          [
            "Shop Pay Installments",
            "US (USD, $35 to $30,000 orders), UK (GBP, £50 to £30,000), Canada",
            "Built in; needs Shopify Payments and Shop Pay",
            "Not on the help page we checked; exempt from the third-party fee",
          ],
          [
            "Klarna via Shopify Payments",
            "UK and a list of European countries",
            "Local payment method in Shopify Payments",
            "UK 4.99% + 30p (Plus 3.79% + 30p); Ireland 4.99% + €0.35 excl. VAT (Plus 3.99%)",
          ],
          [
            "Klarna app",
            "US",
            "Klarna app from the Shopify App Store",
            "3.29% to 5.99% + 30¢, and $15 per dispute (per Shopify's August 2026 Klarna guide)",
          ],
          [
            "Afterpay / Clearpay app",
            "US, UK, France, Spain and others",
            "Afterpay and Clearpay app from the Shopify App Store",
            "Set by Afterpay/Clearpay: a minimum annual fee plus volume-based fees",
          ],
        ],
      },
    },
    {
      heading: "Do Apple Pay, Google Pay and Shop Pay cost extra?",
      body: [
        "No. Shopify's help pages for Apple Pay and Google Pay both say you pay no extra fee for accepting them; you pay the normal processing rate of your payment provider. With Shopify Payments they appear in the Wallets section of your payment settings.",
        "Two conditions catch stores out. Apple Pay needs SSL on your store domain and compliance with Apple's acceptable use guidelines. Google Pay works with Shopify Payments in all regions except France, so French stores need a third-party provider that lists it.",
        "Shop Pay is Shopify's own accelerated checkout. It is exempt from the third-party fee when you use Shopify Payments, and it is the gateway to Shop Pay Installments in the US and UK.",
      ],
    },
    {
      heading: "Which local payment methods can EU stores offer?",
      definition:
        "Shopify Payments supports several European local methods, including iDEAL | Wero in the Netherlands, Bancontact in Belgium, EPS in Austria, BLIK and Przelewy24 in Poland, and Klarna across many countries.",
      body: [
        "Each method only shows when the customer is in a supported country and pays in an eligible currency. If you sell into the Netherlands from Germany, for example, the Netherlands has to be set up as a market before iDEAL appears.",
        "Ireland's rates as of September 2026: iDEAL costs 2.2% + €0.25 on Basic, 1.9% on Grow, 1.6% on Advanced and 1.4% on Plus, excluding VAT. Bancontact is the same except Plus, which stays at 1.6%. UK stores pay 2.2% + 20p for both on Basic.",
        "SEPA Direct Debit isn't on Shopify Payments' [local payment methods list](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods) as of September 2026. If your EU buyers ask for it, look for a provider that lists it in your admin, and weigh that against the fees described above for running a third-party provider next to Shopify Payments.",
      ],
      bullets: [
        "Netherlands: iDEAL | Wero.",
        "Belgium: Bancontact.",
        "Austria: EPS, for customers paying in euros.",
        "Poland: BLIK and Przelewy24.",
        "Portugal: MB WAY and Multibanco.",
        "Nordics and Italy: MobilePay (Denmark, Finland), Swish (Sweden), Satispay (Italy).",
      ],
    },
    {
      heading: "How do SCA and 3-D Secure affect UK and EU checkout?",
      definition:
        "Strong customer authentication under PSD2 applies across the European Economic Area and the UK, and online card payments meet it through 3-D Secure, an extra check with the card issuer.",
      body: [
        "Shopify's [PSD2 and 3-D Secure guide](https://help.shopify.com/en/manual/payments/shopify-payments/transactions/psd2-and-3d-secure-checkout) says the directive took effect on September 14, 2019. Shopify Payments uses a 3-D Secure checkout flow automatically and is set up to trigger it only when the customer's bank requires it.",
        "Authenticated payments also get a liability shift: fraud chargebacks move from you to the card issuer. Shopify notes that card networks can revoke this if your chargeback levels run too high, so authentication doesn't replace fraud screening. Our guide to [reducing Shopify chargebacks and fraud](/blog/reduce-shopify-chargebacks-and-fraud) covers the rest.",
        "If you move a UK or EU store to a third-party card gateway, confirm in writing that it supports 3-D Secure on Shopify before you switch. US stores don't face the same legal requirement.",
      ],
    },
    {
      heading: "How to choose your payment stack",
      body: [
        "Use this checklist before launch or before changing providers. Get answers in writing where a provider is involved.",
      ],
      bullets: [
        "Is your business location on Shopify's supported-countries list, and does Shopify Payments accept what you sell?",
        "Which Shopify plan are you on, and at what monthly card volume would the next plan's lower rate pay for itself?",
        "Where are your customers? Cross-border buyers pay the higher international rate, and multi-currency needs Shopify Payments.",
        "Which one BNPL option matches your markets: Shop Pay Installments, Klarna or Afterpay/Clearpay?",
        "Which local methods do your top EU countries expect, and are those countries set up as markets?",
        "Is PayPal on, and have you checked its fee for your country and for international buyers?",
        "For UK and EU stores, does every card route support 3-D Secure?",
        "Who handles disputes, and what does each provider charge per dispute?",
      ],
      callout: {
        title: "From the studio",
        body: "When we set up payments for a store, we switch on Shopify Payments, PayPal and one BNPL option first, then add local methods only for the countries that already send orders. Before launch we place a test order for each method on an iPhone and an Android phone, run one refund, and match both to the payout report. Every extra method is one more thing to reconcile, so we add them on evidence, not guesswork.",
      },
    },
    {
      heading: "Testing checkout before you go live",
      body: [
        "Shopify's [test order guide](https://help.shopify.com/en/manual/checkout-settings/test-orders) offers Shopify's test payment gateway, Shopify Payments test mode, or a real transaction that you cancel and refund. The last route may cost processing fees, and customers can't place live orders while your providers are in test mode, so schedule tests outside busy hours.",
        "If you are still choosing a plan, our breakdown of [what a Shopify store costs](/blog/shopify-store-cost) shows how card rates and plan prices interact. Selling across borders adds currency, duties and tax questions, covered in [how to sell internationally on Shopify](/blog/sell-internationally-on-shopify). Pixel2Tech's [WordPress and Shopify team](/services/wordpress-and-shopify) can configure and test the whole payment setup with you.",
      ],
      bullets: [
        "One successful payment per method, on mobile data as well as Wi-Fi.",
        "One declined card and one abandoned 3-D Secure challenge, to see what the customer is shown.",
        "One refund, then confirm when it appears on the payout report.",
        "Order confirmation emails show the right payment method and status.",
        "Wallet buttons (Apple Pay, Google Pay, Shop Pay) appear on the devices and browsers where they should.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the best payment gateway for Shopify in the US, UK and EU?",
      a: "For most stores it is Shopify Payments, because it avoids Shopify's third-party transaction fee, supports Shop Pay and multi-currency selling, and includes local European methods such as iDEAL and Bancontact. Add PayPal and one buy-now-pay-later option. Use a third-party card gateway only if Shopify Payments isn't available in your country or won't accept your business.",
    },
    {
      q: "How much does Shopify Payments charge in the UK?",
      a: "As of September 2026, UK online rates for standard cards are 2% + 25p on Basic, 1.7% + 25p on Grow, 1.5% + 25p on Advanced and 1.3% + 25p on Plus. American Express and international cards cost 3.1% + 25p on Basic, falling to 2.3% + 25p on Plus. In-person rates are 1.7% to 1.5% with no fixed fee.",
    },
    {
      q: "Does Shopify charge a fee if I don't use Shopify Payments?",
      a: "Yes. Orders paid through a third-party card gateway carry a Shopify transaction fee of 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus, as of September 2026, on top of the gateway's own fee. The fee isn't returned on refunds. Manual methods, and PayPal Express Checkout when Shopify Payments is active, are exempt.",
    },
    {
      q: "Can I use Stripe directly on Shopify?",
      a: "Not as a separate gateway in countries where Shopify Payments is available. Shopify Payments is built on Stripe, and Shopify's help center says Stripe isn't listed separately there, which covers the US, the UK and most of the EU. In practice, activating Shopify Payments gives you Stripe's processing inside Shopify, priced at Shopify's rates.",
    },
    {
      q: "Can US Shopify stores offer Klarna?",
      a: "Yes, but not through Shopify Payments. Klarna's Shopify Payments integration covers the UK and a list of European countries, not the US. US stores install the Klarna app from the Shopify App Store. Shopify's August 2026 Klarna guide lists US fees of 3.29% to 5.99% plus 30¢ per transaction and $15 per dispute.",
    },
    {
      q: "Do UK and EU Shopify stores need 3-D Secure?",
      a: "Yes. PSD2 strong customer authentication applies across the EEA and the UK, and online card payments meet it through 3-D Secure. Shopify Payments applies it automatically and only when the customer's bank requires it. If you use a third-party card gateway, confirm it supports 3-D Secure on Shopify before switching.",
    },
  ],
  sources: [
    {
      label: "Shopify UK — Pricing (Shopify Payments rates in GBP)",
      href: "https://www.shopify.com/uk/pricing",
    },
    {
      label: "Shopify Ireland — Pricing (Shopify Payments rates in EUR)",
      href: "https://www.shopify.com/ie/pricing",
    },
    {
      label: "Shopify Blog — Choosing an ecommerce payment gateway (US rates, June 2026)",
      href: "https://www.shopify.com/blog/ecommerce-payment-gateway",
    },
    {
      label: "Shopify Help Center — Third-party transaction fees",
      href: "https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees",
    },
    {
      label: "Shopify Help Center — Understanding PSD2 and 3D Secure checkout",
      href: "https://help.shopify.com/en/manual/payments/shopify-payments/transactions/psd2-and-3d-secure-checkout",
    },
    {
      label: "PayPal US — Merchant fees",
      href: "https://www.paypal.com/us/business/paypal-business-fees",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    { label: "How much a Shopify store costs", to: "/blog/shopify-store-cost" },
    { label: "Selling internationally on Shopify", to: "/blog/sell-internationally-on-shopify" },
    {
      label: "Reducing Shopify chargebacks and fraud",
      to: "/blog/reduce-shopify-chargebacks-and-fraud",
    },
  ],
  cta: {
    title: "Get your payment setup checked before launch",
    body: "Send us your store's country, Shopify plan, main markets and the payment methods you want. We'll recommend a setup, configure Shopify Payments, PayPal and BNPL, and run the test orders with you before customers see it.",
  },
};

export default post;
