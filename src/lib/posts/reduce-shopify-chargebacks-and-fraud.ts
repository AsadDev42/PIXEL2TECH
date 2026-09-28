import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "How to Reduce Shopify Chargebacks and Fraud (US, UK, EU)",
  metaDescription:
    "Cut Shopify chargebacks and fraud: fees by region, fraud analysis, Shopify Protect rules, 3-D Secure for UK and EU, and the evidence that wins disputes.",
  keywords: [
    "reduce Shopify chargebacks",
    "Shopify fraud prevention",
    "Shopify Protect eligibility",
    "Shopify chargeback fee",
    "Shopify high risk orders",
    "3D Secure Shopify UK EU",
    "friendly fraud chargebacks",
  ],
  keyTakeaways: [
    "Hold medium- and high-risk orders before they ship. Shopify's fraud analysis rates orders low, medium or high risk, and Shopify Flow can put risky orders on hold automatically so nobody fulfills them by mistake.",
    "A lost chargeback on Shopify Payments costs the order value plus a fee of $15 in the US, £10 in the UK and €15 in most EU countries, as of September 2026. Shopify refunds the fee if you win.",
    "Shopify Protect reimburses fraudulent chargebacks on eligible orders for free, but only for US stores with a US Shopify Payments account and only on Shop Pay orders that ship on time with tracking.",
    "UK and EU card payments fall under Strong Customer Authentication. Shopify Payments runs 3-D Secure when the card issuer requires it, and a successful authentication usually shifts liability for fraud chargebacks to the issuer.",
    "Many disputes are friendly fraud, not stolen cards. A recognizable statement name, visible policies, tracked delivery and fast refunds prevent most of them, and organized evidence wins more of the rest.",
  ],
  content: [
    {
      heading: "How do you reduce chargebacks and fraud on Shopify?",
      definition:
        "Review Shopify's fraud analysis on every order, hold medium- and high-risk orders before shipping, turn on 3-D Secure and AVS/CVV checks, use Shop Pay and Shopify Protect if you sell from the US, make your statement name and policies easy to recognize, ship with tracking, refund obvious fraud early, and answer every dispute with organized evidence.",
      body: [
        "No single setting fixes chargebacks. Stolen-card fraud, friendly fraud and delivery disputes each need a different fix, and the tools differ between a US store and a UK or EU store.",
        "This guide covers what a chargeback costs you on Shopify Payments, how to read Shopify's risk signals, where Shopify Protect and 3-D Secure help, how to hold risky orders automatically, and what evidence to submit when a dispute arrives. It ends with a checklist you can work through in an afternoon.",
      ],
    },
    {
      heading: "Stolen cards, friendly fraud or a real complaint?",
      body: [
        "Sort your disputes before you change anything. The reason code on each chargeback tells you which problem you have, and each one has a different fix.",
      ],
      bullets: [
        "Third-party fraud: someone uses a stolen card or card number. The real cardholder spots the charge and disputes it. Prevention happens before you ship.",
        "Friendly fraud, also called first-party misuse: the real cardholder, or someone in their household, made the purchase and then disputes it. Sometimes they don't recognize your name on the statement; sometimes it's deliberate.",
        "Item not received: the parcel was late, lost or delivered somewhere the buyer didn't check. Tracking and delivery confirmation decide these.",
        "Not as described or refund not processed: the buyer tried to return something, felt ignored and went to their bank instead. Faster support prevents most of these.",
        "Card testing: bots run many small payments to find cards that still work. You see bursts of declined or tiny orders rather than one big loss.",
      ],
      subsections: [
        {
          heading: "Why friendly fraud deserves its own plan",
          body: [
            "Visa describes friendly fraud as a cardholder disputing a legitimate transaction they or someone in their household made, and cites a 2025 industry report estimating it at around 20% of fraudulent disputes globally. Fraud filters don't catch it, because the payment itself looks normal. Clear communication before the dispute and good records after it are what work.",
          ],
        },
      ],
    },
    {
      heading: "What does a chargeback cost on Shopify Payments?",
      definition:
        "When a cardholder disputes a charge, the bank takes the disputed amount from you straight away and Shopify Payments deducts a chargeback fee. If you win, you get the amount and the fee back.",
      body: [
        "The fee is the smallest part of the loss. On a lost fraud chargeback you also lose the product, the outbound shipping and any ad spend behind the order. Too many chargebacks can also cost you your payment processing: Shopify warns that fulfilling high-risk orders can lead to more chargebacks, disabled payments and removal from Shopify Payments.",
        "Timing matters too. According to [Shopify's chargeback guide](https://help.shopify.com/en/manual/payments/chargebacks/chargeback-process), you usually have 7 to 21 days to submit evidence, and the card issuer's review can take up to 75 days after that. The disputed money is held for that whole period.",
      ],
      table: {
        caption:
          "Shopify Payments chargeback fees, selected markets (as listed by Shopify, September 2026)",
        headers: ["Store location", "Chargeback fee", "Fee refunded if you win?"],
        rows: [
          ["United States", "$15 USD", "Yes"],
          ["United Kingdom", "£10 GBP", "Yes"],
          ["Germany, France, Spain, Italy, Netherlands", "€15 EUR", "Yes"],
          ["Ireland", "€15 EUR + 23% VAT", "Yes"],
          ["Sweden", "€15 EUR or 150 SEK", "Yes"],
          ["Denmark", "€15 EUR or 115 DKK", "Yes"],
          ["Switzerland", "€15 EUR or 15 CHF", "Yes"],
          ["Canada", "$15 CAD or $15 USD", "Yes"],
        ],
      },
    },
    {
      heading: "How does Shopify's fraud analysis work?",
      definition:
        "Shopify rates each online order as low, medium or high risk of a fraud chargeback and gives a recommendation: fulfill, confirm with the customer first, or consider canceling. The indicators behind it include AVS and CVV results, location and device signals.",
      body: [
        "Fraud indicators are available on the Basic plan and above. Full fraud recommendations need the Grow plan or higher, or Shopify Payments. Some orders get no recommendation, including test orders, free orders, orders paid by gift card, POS, B2B and subscription renewals.",
        "Shopify's own advice is to go by the overall recommendation rather than a single indicator. One failed check on its own is weak evidence; a failed CVV, a billing country that doesn't match the IP address and a rush shipping upgrade together are a strong one.",
      ],
      subsections: [
        {
          heading: "What AVS and CVV actually check",
          body: [
            "The CVV (or CVC) check asks the card issuer whether the three- or four-digit code matches. The address verification service (AVS) compares the billing postal code and street address with the issuer's records. Stripe's documentation notes that AVS can fail for honest buyers who mistype an address or have moved, and that support varies by country and issuer. Most cards issued in the US, Canada and the UK support street address checks.",
            "Treat a failed CVV as a strong warning and a failed AVS as a reason to look closer. Shopify Payments lets you set AVS and CVV fraud filters in your payment settings.",
          ],
        },
        {
          heading: "Other signals worth a second look",
          body: [
            "Stripe's review checklist is a good manual routine for medium-risk orders. These patterns don't prove fraud, but two or three together justify a hold and a quick email to the buyer.",
          ],
          bullets: [
            "Billing and shipping addresses in different countries, or neither matching the card's country.",
            "Expedited or overnight shipping on a first order, especially on high-resale items.",
            "An order far larger than your average, or only your most expensive products.",
            "A shipping address changed after checkout, or a freight forwarder or storage unit as the destination.",
            "Several cards tried from the same IP address, or many declined attempts before one succeeded.",
          ],
        },
      ],
    },
    {
      heading: "Does 3-D Secure protect UK and EU orders?",
      definition:
        "Largely, yes. Strong Customer Authentication under PSD2 applies to online card payments in the EEA and the UK. Shopify Payments uses 3-D Secure when the issuer requires it, and successful authentication usually shifts liability for fraud chargebacks to the card issuer.",
      body: [
        "Shopify says stores using Shopify Payments or Stripe automatically get a 3-D Secure checkout flow, tuned to use it only when the issuing bank requires it. That keeps friction down for low-risk buyers while still meeting SCA. There's nothing extra to install.",
        "Two caveats. First, liability shift isn't a guarantee. Stripe's [3-D Secure documentation](https://docs.stripe.com/payments/3d-secure/authentication-flow) says it can be expected on authenticated payments that get eligible fraud disputes, but card network rules decide each case, and Shopify notes that issuers can remove the protection from merchants with too many chargebacks. Second, it only covers fraud claims. An authenticated buyer can still dispute for item not received or not as described.",
      ],
      subsections: [
        {
          heading: "Exempted payments stay your risk",
          body: [
            "SCA allows exemptions, and those payments skip authentication. The most common is low value: under the rules as Stripe summarizes them, transactions below €30 or £25 can be exempt, until five exemptions in a row or a running total above €100 or £85 forces authentication again. If a payment went through on an exemption, the fraud liability generally stays with you, so small-ticket stores shouldn't assume 3-D Secure covers everything.",
          ],
        },
        {
          heading: "What about US stores?",
          body: [
            "The US has no SCA mandate, so most US card payments go through without a 3-D Secure challenge. For US merchants the equivalent protection is Shopify Protect on Shop Pay orders, covered next, or a third-party chargeback guarantee.",
          ],
        },
      ],
    },
    {
      heading: "Who qualifies for Shopify Protect?",
      definition:
        "As of September 2026, Shopify Protect is free and reimburses the chargeback amount and fee on eligible Shop Pay orders that receive a fraudulent chargeback. It's only for stores located in the US with a US Shopify Payments account.",
      body: [
        "Coverage is automatic on qualifying orders, and Shopify handles the chargeback process for you. The catch is the fine print: an order that would qualify at checkout can lose its protection through something you do afterwards, such as shipping late or editing the address.",
        "UK and EU merchants can't use Shopify Protect today. Their equivalent is 3-D Secure, plus a hold-and-review process and, for higher volumes, a paid fraud app. Check the [Shopify Protect requirements](https://help.shopify.com/en/manual/payments/shop-pay/shopify-protect/protect-order-with-shopify-protect) before you plan around it, because eligibility can change.",
      ],
      bullets: [
        "The order must be paid through Shop Pay. Shop Pay Installments orders are excluded.",
        "No digital products and no buy-online, pick-up-in-store items in the order.",
        "Subscription orders are covered only for the first order, not renewals. Orders with refunded line items are excluded.",
        "Fulfill within 7 days of the order, and make sure the carrier shows it in transit within 10 days.",
        "Add a valid tracking number from a supported carrier, such as USPS, UPS, FedEx or DHL Express, before the deadline.",
        "Don't change the shipping address after checkout. Doing so voids the coverage.",
      ],
    },
    {
      heading: "How do you hold high-risk orders automatically?",
      body: [
        "Manual review only works if risky orders can't slip through while nobody is looking. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is free on the Basic, Grow, Advanced and Plus plans, and its Hold fulfillment order action stops an order from being fulfilled until someone removes the hold. Shopify ships ready-made Flow templates for holding orders by risk level, by order value, for customers with past chargebacks and for customers who placed several orders in 24 hours.",
        "A simple setup most stores can run looks like this:",
      ],
      bullets: [
        "Order created with high risk: hold fulfillment, tag the order fraud-review and notify the owner.",
        "Medium risk above a value you choose: hold and email the buyer to confirm the order before shipping.",
        "Customer tagged with a past chargeback: hold every new order from them.",
        "More than one order from the same customer in 24 hours: hold for a quick look.",
        "Low risk: no action, ship as normal.",
      ],
      subsections: [
        {
          heading: "Delay capture or delay shipping",
          body: [
            "Shopify supports manual payment capture, which lets you review a risky order before funds are collected. Cardholders can't dispute an authorization you never captured. The trade-off is that authorizations expire, so check the capture deadline on each order.",
            "If you capture automatically, a short delay still helps. Stripe suggests holding physical shipments for 24 to 48 hours so cardholders have a chance to spot and report fraud before the goods leave. You may still get the dispute, but you keep the product.",
          ],
        },
        {
          heading: "When a fraud app is worth paying for",
          body: [
            "Shopify's free Fraud Control app adds rules to block checkouts by email, IP address and similar details. Paid services such as Signifyd go further and offer a financial guarantee against fraud chargebacks on the orders they approve, billed on top of your Shopify plan. Those make sense once manual review eats real hours each week, or when you sell high-resale goods across borders. Compare their pricing against your actual chargeback losses, not against the fee alone.",
          ],
        },
      ],
    },
    {
      heading: "How do you prevent friendly fraud?",
      body: [
        "Most friendly fraud is a buyer who doesn't recognize a charge, can't reach you or thinks the bank is faster than your returns process. Take those reasons away and many disputes never happen.",
      ],
      bullets: [
        "Make your statement name recognizable. Use your store name or domain, not a legal entity nobody has heard of.",
        "Show refund, return and cancellation policies in full at checkout, not only as a footer link. Card issuers can reject a checkbox that only links to a policy.",
        "Send order confirmation, shipping and delivery emails with tracking, so the buyer has a paper trail before they call their bank.",
        "Put a real contact email or chat on every page and answer within a working day.",
        "Refund fast when you're at fault. A fully refunded payment can't be disputed; a partially refunded one can, sometimes for the full amount.",
        "For high-value parcels, consider signature on delivery, which helps with both friendly fraud and item-not-received claims.",
      ],
      subsections: [
        {
          heading: "Use your order history as evidence",
          body: [
            "Visa's Compelling Evidence 3.0 rules let merchants fight friendly fraud disputes on card-absent orders by showing earlier undisputed purchases from the same cardholder. Stripe's summary requires two prior transactions made between 120 and 365 days before the disputed one, with matching details such as IP address, device ID, email or delivery address. Submitting it doesn't guarantee a win, but it's only possible if your store keeps customer accounts and order data long enough to show the pattern.",
          ],
        },
      ],
    },
    {
      heading: "How do you win a chargeback on Shopify?",
      definition:
        "Respond before the deadline in your Shopify admin with evidence that answers the specific dispute reason: proof of delivery or use first, then the customer's own messages, then the policy they agreed to, then supporting context such as order history and address checks.",
      body: [
        "That order of evidence comes from Shopify's own guidance, and it matches how issuers read a response. Lead with the strongest direct proof and keep the rest short. A dispute for item not received is won with tracking and delivery confirmation, not a long history of the customer relationship.",
        "Card issuers don't click links, so Stripe advises submitting screenshots of tracking pages rather than URLs. Answer inquiries on 3-D Secure payments too: ignoring one can lead to a no-reply chargeback that loses you the liability shift.",
        "Accept disputes you can't win. If the buyer is right, or the evidence is thin, contesting costs your team time and changes nothing. Log the reason instead and fix the cause.",
      ],
      callout: {
        title: "From the studio",
        body: "When we set up a Shopify store for fraud control, we write the review routine down before switching on any app: which risk levels get held, who checks the hold queue each morning, what the confirmation email says, and which evidence gets saved for every order over a set value. Then we build the Flow rules to match that document. A written routine survives staff changes; rules that only live in an app's settings usually don't.",
      },
    },
    {
      heading: "A fraud and chargeback checklist for your store",
      body: [
        "Work through this list once, then review your chargeback reasons monthly. If you're choosing or changing payment providers, our guide to [Shopify payment gateways for the US, UK and EU](/blog/shopify-payment-gateways-us-uk-eu) compares the options, and our [WordPress and Shopify team](/services/wordpress-and-shopify) can set up the Flow rules, checkout policies and fraud apps for you.",
      ],
      bullets: [
        "Check the fraud analysis panel on every order before fulfilling.",
        "Turn on AVS and CVV fraud filters in your Shopify Payments settings.",
        "Install Shopify Flow and enable the hold-by-risk-level template.",
        "Add holds for customers with past chargebacks and for repeat orders within 24 hours.",
        "US stores: offer Shop Pay, fulfill within 7 days and add tracking so orders keep Shopify Protect coverage.",
        "UK and EU stores: keep Shopify Payments' 3-D Secure flow and don't assume exempted low-value payments are covered.",
        "Set a recognizable statement name and show full policies at checkout.",
        "Ship with tracking, and use signature on delivery for high-value orders.",
        "Refund clear fraud before it becomes a dispute.",
        "Keep a dispute log with reason, outcome and cause, and review it monthly.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much is a chargeback fee on Shopify?",
      a: "On Shopify Payments, as of September 2026, the chargeback fee is $15 in the US, £10 in the UK and €15 in most EU countries, with VAT added in Ireland. The disputed amount is also taken from your balance while the dispute runs. If you win, Shopify returns both the disputed amount and the fee. Check Shopify's fee table for your country, because some list a local-currency option.",
    },
    {
      q: "Is Shopify Protect available in the UK or EU?",
      a: "Not as of September 2026. Shopify Protect requires a store located in the United States with a US Shopify Payments account, and it covers only eligible Shop Pay orders. UK and EU merchants rely on 3-D Secure, which Shopify Payments runs when the issuer requires it and which usually shifts fraud liability to the card issuer, plus order holds and optional fraud apps.",
    },
    {
      q: "Should I cancel every high-risk order on Shopify?",
      a: "Not automatically. Shopify's recommendation for high-risk orders is to consider canceling, but some are genuine buyers with a mistyped address or a foreign card. Hold the order, check the indicators together, and email the buyer to confirm details. If the answers don't add up or nobody replies, cancel and refund before you ship. Refunding a clearly fraudulent order early avoids the chargeback fee.",
    },
    {
      q: "Does 3-D Secure stop all chargebacks?",
      a: "No. When a payment is successfully authenticated, liability for fraud chargebacks usually shifts to the card issuer, but it isn't guaranteed, and issuers can withdraw it from merchants with too many chargebacks. It also doesn't cover non-fraud disputes such as item not received or not as described, and payments that go through on an SCA exemption usually stay your liability.",
    },
    {
      q: "What evidence wins a Shopify chargeback?",
      a: "Evidence that answers the dispute reason directly. For item not received, send tracking and delivery confirmation as screenshots. For fraud claims, show AVS and CVV results, matching billing and shipping details, and any earlier undisputed orders from the same customer. Add the buyer's own messages and the policy they accepted at checkout. Submit before the deadline, usually 7 to 21 days.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Responding to chargebacks and fees by country",
      href: "https://help.shopify.com/en/manual/payments/chargebacks/chargeback-process",
    },
    {
      label: "Shopify Help Center: Protecting an order with Shopify Protect",
      href: "https://help.shopify.com/en/manual/payments/shop-pay/shopify-protect/protect-order-with-shopify-protect",
    },
    {
      label: "Shopify Help Center: Fraud analysis",
      href: "https://help.shopify.com/en/manual/fulfillment/managing-orders/protecting-orders/fraud-analysis",
    },
    {
      label: "Shopify Help Center: PSD2 and 3D Secure checkout",
      href: "https://help.shopify.com/en/manual/payments/shopify-payments/transactions/psd2-and-3d-secure-checkout",
    },
    {
      label: "Stripe Docs: Best practices for preventing fraud",
      href: "https://docs.stripe.com/disputes/prevention/best-practices",
    },
    {
      label: "Visa: Friendly fraud explained",
      href: "https://corporate.visa.com/en/solutions/visa-protect/insights/friendly-fraud.html",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    {
      label: "Shopify payment gateways for the US, UK and EU",
      to: "/blog/shopify-payment-gateways-us-uk-eu",
    },
    {
      label: "How to sell internationally on Shopify",
      to: "/blog/sell-internationally-on-shopify",
    },
    {
      label: "Common Shopify issues and how to fix them",
      to: "/blog/shopify-issues-and-how-to-fix-them",
    },
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
  ],
  cta: {
    title: "Chargebacks eating into your Shopify margin?",
    body: "Send us your last three months of disputes and your current order review process. We'll map the Flow holds, checkout policies and fraud settings your store needs, and tell you whether a paid fraud app would pay for itself at your volume.",
  },
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan that works with clients in the US, UK and Europe, and offers the Shopify setup services discussed here.",
};

export default post;
