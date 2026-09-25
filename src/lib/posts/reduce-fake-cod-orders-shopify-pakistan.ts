import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "How to Reduce Fake COD Orders on Shopify in Pakistan",
  metaDescription:
    "A practical playbook to cut fake and refused COD orders in Pakistan: WhatsApp confirmation, partial advance, address checks, blocklists and Shopify Flow.",
  keywords: [
    "reduce fake COD orders Shopify",
    "COD order verification Pakistan",
    "COD order confirmation WhatsApp Shopify",
    "return to origin RTO Pakistan",
    "partial advance payment COD",
    "Shopify COD verification app",
  ],
  keyTakeaways: [
    "Confirm every cash-on-delivery order before it ships, usually with a WhatsApp message the buyer answers with one tap, and hold unconfirmed orders instead of booking them with a courier.",
    "Measure your return-to-origin (RTO) rate by courier, city and product, and cost each returned parcel properly. There's no audited public benchmark for Pakistan, so your own trend is the number that matters.",
    "Shopify Flow, free on Basic and above, can tag COD orders, hold their fulfillment and act on a customer tag, so confirmation apps and your team work from the same order status.",
    "A COD confirmation that only covers the buyer's order is a utility message under Meta's rules; add a promotion and it becomes marketing, which costs more per message.",
    "Add friction only where risk is high: a delivery fee or partial advance for large or first-time orders, COD hidden for repeat refusers, and address checks for incomplete entries.",
  ],
  content: [
    {
      heading: "How do you reduce fake COD orders on Shopify?",
      definition:
        "Confirm every cash-on-delivery order before it ships, usually with a WhatsApp message the buyer must answer; hold unconfirmed orders; add friction to risky ones, such as a delivery fee or partial advance; validate phones and addresses; block repeat refusers; and track return-to-origin (RTO) rate by courier, city and product.",
      body: [
        "It's tempting to try one of these in isolation, usually an app, and then wonder why returns barely move. The steps work as a system: confirmation filters out people who never meant to buy, friction discourages casual orders, validation fixes honest mistakes, and measurement tells you which lever is working.",
        "This playbook covers each step in the order we'd set it up, and ends with the choice between an off-the-shelf app and a custom build.",
      ],
    },
    {
      heading: "Why fake and refused COD orders happen",
      body: [
        "Not every returned parcel is fake. Sorting reasons into groups tells you which fix to reach for first.",
      ],
      bullets: [
        "Impulse orders: the buyer tapped 'buy' on a social ad and changed their mind by delivery day.",
        "Pranks and fake details: someone orders to a friend's number or an invented address.",
        "Competitor or malicious orders: a burst of orders to unreachable numbers, sometimes right after a campaign launches.",
        "Bad addresses: honest buyers who typed an incomplete address or a number that isn't on WhatsApp.",
        "Delivery problems: the rider couldn't reach the customer, or arrived when nobody was home.",
        "Expectation gaps: the product looked different, or the buyer wasn't told about the delivery charge.",
      ],
      subsections: [
        {
          heading: "Log a reason for every return",
          body: [
            "Ask your courier for the rider's return reason and add your own after checking: refused, unreachable, wrong address, fake details or changed mind. A simple returns sheet with order number, courier, city, product, reason and ad source is enough. After a month it tells you whether you have a confirmation problem, an address problem or a courier problem, and each needs a different fix.",
          ],
        },
      ],
    },
    {
      heading: "Measure it first: RTO rate and true cost per returned parcel",
      definition:
        "RTO rate is the share of shipped COD parcels that come back undelivered or refused. True cost per return adds both delivery legs, packaging and the ad spend behind the order.",
      body: [
        "You can't manage what you don't count, and you can't compare yourself with a reliable market figure, because we're not aware of an audited public benchmark for COD return rates in Pakistan. Treat figures quoted in vendor marketing with caution. Track your own rate weekly, split by courier, city and product, and judge every change against your own baseline.",
        "Calculate it on shipped COD parcels, not on all orders, and only once each parcel has a final status. Group parcels by the week they shipped so a slow-returning batch doesn't flatter this week's number. Orders you cancel before shipping belong in a separate count: they're the confirmation flow doing its job, not returns.",
      ],
      table: {
        caption: "Cost of one returned COD parcel: what to add up",
        headers: ["Cost line", "Where to find it", "Easy to miss?"],
        rows: [
          ["Outbound delivery charge", "Courier rate card or invoice", "No"],
          ["Return (RTO) charge", "Courier rate card; sometimes a separate line", "Yes"],
          ["COD handling fee, if charged on attempts", "Courier contract", "Yes"],
          ["Packaging and inserts", "Your packaging supplier", "Yes"],
          ["Ad spend per order", "Ad account cost per purchase", "Yes"],
          ["Damaged or unsellable returns", "Returns inspection log", "Yes"],
        ],
      },
      callout: {
        title: "Illustrative example",
        body: "Hypothetical numbers, replace them with your own: if outbound delivery is PKR 250, the return leg PKR 250, packaging PKR 50 and ad spend per order PKR 600, each returned parcel costs PKR 1,150 before any damaged stock. At 100 returns a month, that's PKR 115,000 spent on orders that produced no revenue.",
      },
    },
    {
      heading: "Does WhatsApp order confirmation reduce fake orders?",
      definition:
        "It filters out buyers who never meant to receive the parcel, and it catches honest address and number mistakes before shipping. It can't stop a buyer who confirms and then refuses at the door.",
      body: [
        "WhatsApp lists order confirmations and shipment updates among the core uses of its [Business Platform](https://whatsappbusiness.com/products/business-platform/), and it reaches buyers in an app they already check. Design the flow before you pick a tool. The table below is the sequence we'd start with; adjust the timings to your delivery speed.",
      ],
      table: {
        caption: "A starting COD confirmation flow",
        headers: ["Step", "Timing", "Message", "If there's no reply"],
        rows: [
          [
            "1. Confirmation request",
            "Within minutes of the order",
            "Order number, items, total including delivery, address; buttons: Confirm / Cancel / Change address",
            "Go to step 2",
          ],
          [
            "2. Reminder",
            "A few hours later, within working hours",
            "Short reminder with the same buttons",
            "Go to step 3",
          ],
          [
            "3. Call or final message",
            "Next working day",
            "A team member calls, or a last message says the order will be cancelled",
            "Cancel and tag the order",
          ],
          [
            "4. Dispatch update",
            "When booked with the courier",
            "Tracking number and expected delivery window",
            "No action",
          ],
        ],
      },
      subsections: [
        {
          heading: "Buttons or OTP?",
          body: [
            "Quick-reply buttons are the lowest-friction option and give you a clear yes or no. A one-time passcode at checkout proves the buyer controls the number, but adds a step before the order exists and can cost you real buyers on slow connections. A sensible default is buttons after the order, with an OTP added only for high-risk orders.",
          ],
        },
        {
          heading: "Is a COD confirmation a marketing or a utility message?",
          body: [
            "Under Meta's [template categorization rules](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization), a utility template follows up on a user's action or request and must be non-promotional; an order confirmation with a specific order number is one of Meta's examples. Add a discount code or 'shop our new arrivals' and the template counts as marketing, because mixed content is classified as marketing.",
            "Meta can also recategorize a template it thinks is miscategorized, normally with one day's notice. Keep confirmation templates strictly about the order.",
          ],
        },
        {
          heading: "What does WhatsApp confirmation cost?",
          body: [
            "Meta has charged per message since July 1, 2025, according to its [WhatsApp pricing documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). Rates depend on the template category and the recipient's country calling code. Utility templates sent inside an open 24-hour customer service window are free; outside it, they're charged. Meta's changelog notes higher utility and authentication rates for Pakistan from April 1, 2026, so check the current rate card rather than an old blog figure.",
            "If you use an app, check whether its plan price includes Meta's message charges or bills them separately. Listings don't always say.",
          ],
        },
      ],
    },
    {
      heading: "Wiring it into Shopify: tags, holds and Flow",
      body: [
        "Whatever sends the messages, Shopify should hold the source of truth for each order's status. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is free on the Basic, Grow, Advanced and Plus plans and has the three actions you need: add order tags, hold fulfillment order, and cancel order.",
        "The Hold fulfillment order action puts an order on hold so it isn't fulfilled until the hold is released, with fields for a reason, notes and an option to notify you. Shopify's Flow templates include holding fulfillment by risk level and holding orders from customers with a certain tag.",
      ],
      bullets: [
        "Trigger: order created. Condition: payment gateway is Cash on Delivery.",
        "Action: add the tag cod-pending and hold fulfillment with the reason 'Awaiting WhatsApp confirmation'.",
        "Your confirmation tool changes the tag to cod-confirmed or cod-cancelled when the buyer replies.",
        "Release holds on confirmed orders; cancel orders still pending after your deadline.",
        "Report weekly on how many orders were confirmed, cancelled and never answered.",
      ],
      subsections: [
        {
          heading: "Match the timings to your courier pickup",
          body: [
            "Set the confirmation deadline around your courier's daily pickup. If pickup is at 4 pm, orders confirmed by 2 pm ship today, and everything else waits a day. Build that cutoff into the reminder timing, and tell buyers when their order will leave, so confirming feels like it speeds delivery rather than delays it.",
          ],
        },
      ],
    },
    {
      heading: "Is it okay to ask for a partial advance on COD orders?",
      definition:
        "Yes, if it's disclosed before checkout and applied consistently. It works best as a targeted rule, not a blanket one.",
      body: [
        "A partial advance, such as the delivery charge paid upfront, makes a casual order cost something. The buyer pays through a wallet, bank or Raast transfer set up as a [manual payment method](https://help.shopify.com/en/manual/payments/manual-payments), which carries no Shopify transaction fee, or through your gateway. Say on the product page and in the cart who it applies to and how it's refunded if you cancel.",
        "Other friction levers are gentler. A visible COD fee nudges some buyers to prepay. A minimum order value for COD cuts low-value impulse orders. Stores on Basic or higher can use payment customization apps to hide COD in chosen situations, such as orders above a value or customers tagged as repeat refusers.",
      ],
    },
    {
      heading: "How do you block repeat fake buyers on Shopify?",
      body: [
        "Every repeat refuser who gets through costs you another round trip. Clean data at checkout catches honest mistakes, and a blocklist handles people who refuse again and again.",
      ],
      bullets: [
        "Require a mobile number at checkout, and check it reaches WhatsApp during confirmation.",
        "Ask for house number, street, area and a nearby landmark in the address hint, and confirm the address in the WhatsApp message.",
        "Tag customers who refuse two or more parcels, for example cod-blocked, and record why.",
        "Use Flow to hold new orders from tagged customers automatically.",
        "Use a payment customization app to hide COD for tagged customers so they can still prepay.",
        "Review the blocklist monthly; a changed address or a delivery failure on the courier's side shouldn't mark someone for life.",
      ],
    },
    {
      heading: "Courier-side levers",
      body: [
        "Your courier contract controls part of the RTO rate. Ask each courier what options they offer and compare their return rates for the same cities, because delivery performance varies by courier and area.",
        "If you ship enough volume, split orders for the same city between two couriers for a month and compare delivered, returned and average days to delivery. The cheaper rate card isn't cheaper if its riders return more parcels in the cities where most of your orders go.",
      ],
      bullets: [
        "Open-parcel policy: whether customers may check contents before paying, and how disputes are handled.",
        "Reattempts: how many attempts before return, and whether the rider calls first.",
        "Delivery attempt alerts you can forward to the buyer on WhatsApp.",
        "COD reconciliation: how often cash is remitted and how you match it to orders.",
        "Return charges: whether they're lower than outbound and whether they're negotiable at volume.",
      ],
    },
    {
      heading: "App or custom build: which is right for you?",
      body: [
        "An app is the fastest start. A custom build on Meta's Cloud API with an automation tool such as n8n costs more upfront but gives you control of templates, data and logic. Our breakdown of [n8n automation costs](/blog/n8n-automation-cost) covers the running side of a custom setup.",
        "Move from an app to a custom build when you need logic the app can't express, such as choosing a courier by city, scoring risk from past orders or updating a CRM, or when your message volume makes paying Meta directly cheaper than the app's bundles. For the wider picture of automating order operations, see our guide to [AI automation for business operations](/blog/ai-automation-business-operations).",
      ],
      table: {
        caption: "COD confirmation: app vs custom build (app prices as listed in September 2026)",
        headers: ["Factor", "Off-the-shelf app", "Custom (Cloud API + n8n)"],
        rows: [
          [
            "Monthly cost",
            "Examples: Confirmify US$9.99 to US$69.99 by volume; MC WhatsApp Order Notification free, US$14 or US$24",
            "Meta's per-message charges plus hosting and maintenance",
          ],
          ["Time to launch", "Hours to days", "Weeks, including template approval and testing"],
          [
            "Templates and sender name",
            "Depends on plan; some use the app's number",
            "Your own WhatsApp Business account and templates",
          ],
          ["Logic", "What the app supports", "Anything: courier rules, risk scores, CRM updates"],
          ["Data", "Stored with the app vendor", "Stays in your systems"],
        ],
      },
      callout: {
        title: "From the studio",
        body: "We start clients on a flow that's written down before it's built: the exact message text, button labels, reminder timings, cancel rule and the tags Shopify will show at each step. The team that packs orders signs off on it, because they're the ones who'll read those tags every morning. Changing tools later is easy when the flow is documented; it's painful when the logic only lives inside an app's settings.",
      },
    },
    {
      heading: "Putting it together",
      body: [
        "Start with measurement and confirmation, then add friction and blocklists where the data says they're needed. Review RTO by courier and city every week for the first two months, and change one lever at a time so you know what worked.",
        "Pixel2Tech's [automation and CRM team](/services/automation-and-crm) builds COD confirmation flows, Shopify Flow rules and custom WhatsApp integrations for Pakistani stores. If you're still working out your running costs, see our guide to [Shopify store costs in Pakistan](/blog/shopify-store-cost-pakistan).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a normal COD return rate in Pakistan?",
      a: "There's no audited public benchmark we can point to. Figures quoted by apps and couriers are marketing claims and vary by product, price, city and ad channel. Measure your own return-to-origin rate weekly, split by courier, city and product, and judge changes against your own baseline. A falling trend matters more than any market average.",
    },
    {
      q: "Is it okay to ask for a partial advance on COD orders?",
      a: "Yes, as long as you disclose it before checkout, apply it consistently and explain how it's refunded if you cancel. You can limit it to first-time buyers, high-value orders or tagged repeat refusers, which keeps friction away from good customers. Collect it through a manual wallet or bank transfer, which carries no Shopify fee, or through your gateway.",
    },
    {
      q: "Does WhatsApp order confirmation reduce fake orders?",
      a: "It removes orders from people who never meant to receive the parcel and catches wrong numbers and incomplete addresses before you pay for shipping. It won't stop a buyer who confirms and then refuses at the door, so pair it with courier alerts, targeted partial advances and a blocklist, and measure return rates before and after.",
    },
    {
      q: "Is a COD confirmation a marketing or a utility message on WhatsApp?",
      a: "It's a utility message if it only covers the buyer's specific order, such as order number, items, total and address, and contains nothing promotional. Meta classifies templates with mixed content, like an order update with a discount code, as marketing, which is charged at marketing rates. Meta can recategorize miscategorized templates, so keep confirmations strictly about the order.",
    },
    {
      q: "How do I block repeat fake buyers on Shopify?",
      a: "Tag customers who refuse repeated parcels, for example cod-blocked, and use Shopify Flow to hold their new orders automatically. A payment customization app can hide cash on delivery for tagged customers so they can still prepay. Review the list monthly, because some refusals are courier failures rather than bad buyers.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center — Shopify Flow",
      href: "https://help.shopify.com/en/manual/shopify-flow",
    },
    {
      label: "Shopify Help Center — Flow action: Hold fulfillment order",
      href: "https://help.shopify.com/en/manual/shopify-flow/reference/actions/hold-fulfillment",
    },
    {
      label: "Shopify Help Center — Customizing payment methods and delivery options at checkout",
      href: "https://help.shopify.com/en/manual/checkout-settings/checkout-customization",
    },
    {
      label: "Meta for Developers — WhatsApp template categorization",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization",
    },
    {
      label: "Meta for Developers — WhatsApp Business Platform pricing",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    },
    {
      label: "WhatsApp Business — Business Platform",
      href: "https://whatsappbusiness.com/products/business-platform/",
    },
  ],
  internalLinks: [
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    { label: "Shopify store cost in Pakistan", to: "/blog/shopify-store-cost-pakistan" },
    { label: "n8n automation cost", to: "/blog/n8n-automation-cost" },
    {
      label: "AI automation for business operations",
      to: "/blog/ai-automation-business-operations",
    },
  ],
  cta: {
    title: "Losing margin to refused COD parcels?",
    body: "Send us last month's courier return report and your current confirmation process. We'll map a confirmation flow, the Shopify Flow rules behind it, and whether an app or a custom build fits your volume.",
  },
};

export default post;
