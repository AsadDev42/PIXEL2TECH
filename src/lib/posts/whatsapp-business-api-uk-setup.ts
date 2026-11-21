import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "WhatsApp Business API UK Checklist: Setup Steps, Consent Rules and How Pricing Works",
  metaTitle: "WhatsApp Business API UK: Setup, Consent and Pricing",
  metaDescription:
    "Use this WhatsApp Business API UK checklist to see who needs it, how to get access, number and name rules, UK GDPR and PECR consent, and how pricing works.",
  ogTitle: "WhatsApp Business API UK Checklist: Setup Steps, Consent Rules and How Pricing Works",
  ogDescription:
    "Use this WhatsApp Business API UK checklist to see who needs it, how to get access, number and name rules, UK GDPR and PECR consent, and how pricing works.",
  keywords: [
    "whatsapp business api uk",
    "whatsapp business api uk gdpr",
    "whatsapp api for uk businesses",
    "whatsapp business platform uk",
    "whatsapp opt in pecr",
    "whatsapp business api pricing categories",
  ],
  keyTakeaways: [
    "Stay on the free WhatsApp Business app while one or two people reply from a phone, and move to the API when you need several agents, automated messages or a CRM connection.",
    "You reach the API through a Meta business portfolio and a WhatsApp Business Account, then connect it to Meta's Cloud API yourself or through a Meta partner.",
    "Use a number the business owns that can receive a code by SMS or voice call, and pick a display name that matches the trading name on your website.",
    "Under UK GDPR and PECR, collect a clear WhatsApp opt-in, keep a record of it, and sign a data processing agreement with any provider that handles your messages.",
    "Meta charges per delivered message by category and by the recipient's country calling code, and its rates change, so check Meta's official pricing page before you budget.",
  ],
  faqs: [
    {
      q: "How long does WhatsApp Business API UK setup take?",
      a: "The technical steps are short once your documents and number are ready. The slow parts are Meta business verification and template review, which run on Meta's timetable, not yours. Start verification first, even if launch is weeks away. Prepare the website, privacy notice and opt-in wording while you wait, so nothing else holds up the go-live date.",
    },
    {
      q: "Can I use my existing UK mobile or landline number?",
      a: "Usually, yes. Meta's documentation lists landlines as a supported number type, with voice call verification as the standard method. A number already active on the WhatsApp app has to be deleted from the app before you register it, unless a Meta partner moves it over through coexistence. Keep the number owned by the business, not by a member of staff.",
    },
    {
      q: "Do I need consent to send WhatsApp messages to UK customers?",
      a: "For marketing, yes in most cases. WhatsApp's own policy requires an opt-in before you start a conversation, and PECR covers electronic marketing in the UK. The ICO's soft opt-in can cover existing customers who bought something similar and could opt out. Order updates need a lawful basis under UK GDPR too. Take legal advice for your situation.",
    },
    {
      q: "Is the WhatsApp Business API free for UK businesses?",
      a: "Access to Meta's Cloud API has no setup fee, but sending messages costs money. Meta charges per delivered message, based on the message category and the recipient's country calling code. Some messages are free in specific situations, which Meta lists on its pricing page. Providers add their own platform fees on top, so ask for both figures separately.",
    },
    {
      q: "Should a UK business go direct to Meta or use a provider?",
      a: "Go direct to the Cloud API if you have a developer and one clear job, such as order updates from your store. Use a Meta partner if your team needs a shared inbox, chatbot tools and ready integrations without building them. Either way, keep the WhatsApp Business Account under your own Meta business portfolio, so you can change provider later.",
    },
  ],
  internalLinks: [
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    { label: "AI solutions", to: "/services/ai-solutions" },
    {
      label: "WhatsApp Business API Setup: A Guide for UK, EU and US Businesses",
      to: "/blog/whatsapp-business-api-setup-guide",
    },
    {
      label: "How to Automate Lead Follow-Up and Routing for Small Businesses",
      to: "/blog/automate-lead-follow-up",
    },
    {
      label: "AI Chat Support That Actually Helps: What to Automate, What to Keep Human",
      to: "/blog/ai-chat-support-automate-vs-keep-human",
    },
  ],
  sources: [
    {
      label: "Pricing on the WhatsApp Business Platform (Meta for Developers)",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    },
    {
      label: "WhatsApp business phone numbers (Meta for Developers)",
      href: "https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers",
    },
    {
      label: "WhatsApp display names (Meta for Developers)",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names",
    },
    {
      label: "WhatsApp Business Messaging Policy",
      href: "https://whatsappbusiness.com/policy/",
    },
    {
      label: "Electronic mail marketing under PECR (ICO)",
      href: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/",
    },
  ],
  cta: {
    title: "Get the WhatsApp Business API set up properly for your UK customers",
    body: "Tell us which messages you want to send, who replies to them and which systems hold your customer data. Pixel2Tech's automation and CRM team will help you choose between the Cloud API and a provider, write the opt-in wording and message map, and connect WhatsApp to your store, CRM or helpdesk.",
  },
  content: [
    {
      heading: "Who in the UK needs the API and who can stay on the free app",
      body: [
        "Most UK businesses start with the free WhatsApp Business app on one phone. It works well while the owner or one member of staff answers every chat. The WhatsApp Business API is the version for software. Your CRM, helpdesk, online store or a provider's shared inbox sends and receives the messages, so several people and automated flows can work one number. This WhatsApp Business API UK checklist covers who needs it, how to get access, the number and name rules, the consent rules that apply in the UK, and how Meta's pricing categories work.",
        "The app is enough when message volume is low, replies come from one or two people, and nothing needs to happen automatically. The API makes sense when any of these become true:",
      ],
      bullets: [
        "Several staff need to answer the same number without passing a phone around.",
        "You want order confirmations, booking reminders or delivery updates to go out when something happens in your store or booking system.",
        "You want your CRM to log every conversation against the customer's record.",
        "You want a chatbot to answer repeat questions and hand over to a person.",
        "Your team loses enquiries because messages arrive in too many places at once.",
      ],
    },
    {
      heading: "What the WhatsApp Business API is, and what it is not",
      definition:
        "The WhatsApp Business API is Meta's WhatsApp Business Platform, which lets software send and receive WhatsApp messages for a business through a registered phone number and an approved display name.",
      body: [
        "There is no API app to download. You use the platform through something else. That can be Meta's Cloud API, which a developer connects to your systems, or a Meta partner that sells an inbox and campaign tools on top of it. Meta calls these partners Business Solution Providers or Solution Partners.",
        "The platform has rules the free app does not. Messages that your business starts must use templates that Meta reviews and approves. Meta only allows free-form replies inside a customer service window, which opens when a customer messages you. Meta's pricing page describes this window as lasting 24 hours, and each new message from the customer resets it. Plan your messages around that rule before anyone writes a template.",
      ],
    },
    {
      heading: "WhatsApp Business API UK setup, step by step",
      body: [
        "The route is the same for a UK business as anywhere else. What changes is the paperwork you use to prove who you are and the consent rules you follow. Work through these steps in order:",
      ],
      bullets: [
        "Create a Meta business portfolio, formerly called Business Manager, owned by a company email address, with at least two admins.",
        "Enter your legal business name exactly as it appears on your official records. For a limited company, that is usually the name on your Companies House record.",
        "Start business verification with documents that show the legal name and your address or phone number. Check Meta's current list of accepted documents before you upload.",
        "Make sure your website shows the same business name, address and phone number, plus a privacy notice that mentions WhatsApp messaging.",
        "Create a WhatsApp Business Account inside the portfolio, either through Meta's developer tools or through your chosen partner's signup flow.",
        "Register the phone number and display name, and set the two-step verification PIN that Meta asks for at registration.",
        "Add a payment method in WhatsApp Manager, then submit your first message templates for review.",
        "Connect webhooks to your CRM, store or helpdesk so incoming messages and delivery statuses reach your systems, and test every flow before go-live.",
      ],
      subsections: [
        {
          heading: "Going direct to Meta's Cloud API",
          body: [
            "Meta hosts the Cloud API, so you do not run any WhatsApp servers. You still need a developer, because the Cloud API has no inbox. Someone has to build or connect the software that receives messages, stores them and sends replies. This route suits a business with one clear job, such as store order updates, and someone who can own the access tokens, templates and fixes.",
          ],
        },
        {
          heading: "Going through a Meta partner",
          body: [
            "A partner sets up the account with you and gives your team a shared inbox, template tools, chatbot builders and ready integrations. It is the faster route for a team without developers. Before you sign, ask whether the WhatsApp Business Account will sit under your business portfolio or theirs, whether they pass Meta's charges through at cost, whether their quotes include VAT, and whether you can export contacts, opt-in records and history if you leave.",
          ],
        },
      ],
    },
    {
      heading: "Phone number and display name rules",
      body: [
        "Meta's phone number documentation sets out what a number needs before you can register it. Read the current version before you choose, because Meta updates it. At the time of writing, it says:",
      ],
      bullets: [
        "The business must own the number, and it needs a country code and area code. Short codes are not supported.",
        "The number must be able to receive a verification code by SMS or voice call. Landlines are supported, with voice call verification as the standard method.",
        "A number that is already in use with the WhatsApp app cannot be registered until it is deleted from the app. A Meta partner can move an app number over through coexistence instead.",
        "You must set a two-step verification PIN when you register the number, and you need that PIN later to change it or delete the number.",
        "New business portfolios can register two business phone numbers. Meta raises that cap to 20 when the business is verified or reaches a higher messaging limit.",
      ],
      subsections: [
        {
          heading: "Choosing a display name Meta will approve",
          body: [
            "You must give a display name when you register the number, and it appears on your WhatsApp profile. Meta reviews it against its display name guidelines, which live in the Meta Business Help Center. The safest choice is the trading name customers already see on your website, invoices and signage, written the same way.",
            "Meta's display names documentation says you can change the name up to 10 times in a 30-day period. After Meta approves a new name, you have 14 days to re-register the number, or the name goes back for review. Choose carefully the first time, and agree the name internally before anyone starts the registration.",
          ],
        },
      ],
    },
    {
      heading: "Opt-in and UK GDPR basics for WhatsApp messages",
      body: [
        "Two sets of rules apply to a UK business on WhatsApp. The first is WhatsApp's own Business Messaging Policy. It says you may only contact people who have given you their number and agreed to hear from you on WhatsApp, and that you must respect requests to stop. It also makes the business responsible for meeting local law.",
        "The second is UK law. UK GDPR covers how you collect, store and use the phone number and the messages. PECR covers electronic marketing. The ICO's guidance on electronic mail marketing defines electronic mail broadly enough to include direct messages, and it requires specific consent for marketing unless the soft opt-in applies. The soft opt-in covers existing customers, for similar products, when they had a clear chance to opt out at the point you collected their details and in every message since. The ICO has said this guidance is under review after the Data (Use and Access) Act 2025, so check the current version before a campaign.",
        "This is general information, not legal advice. In practice, most UK businesses can cover the basics with a short list:",
      ],
      bullets: [
        "Ask for WhatsApp opt-in with an unticked checkbox or a clear button that names WhatsApp and the type of messages, kept separate from your terms.",
        "Store the opt-in record with the number, date, time, source and the exact wording the customer saw.",
        "Keep marketing consent separate from service messages, so a customer can stop offers and still get order updates.",
        "Update your privacy notice to mention WhatsApp, who processes the messages and how long you keep them.",
        "Sign a data processing agreement with any provider that handles messages for you, as UK GDPR requires for processors.",
        "Ask where your provider stores conversation data, and how it covers transfers outside the UK.",
        "Name your business in every marketing message and give a simple way to stop, then honour it in every system that sends messages.",
      ],
    },
    {
      heading: "How Meta's WhatsApp pricing categories work",
      definition:
        "Meta charges for the WhatsApp Business Platform per delivered message. The rate depends on the message category and on the market, which Meta defines as the country calling code of the recipient's WhatsApp number.",
      body: [
        "Meta's pricing page names five message categories. Marketing, utility and authentication are template categories. Service covers the free-form replies you send inside an open customer service window. Meta Business Agent is the category for messages handled by Meta's AI agent, which Meta bills differently. Meta does not charge for messages customers send to you.",
        "The market matters more than many UK businesses expect. Your business being in the UK does not set the rate. The recipient's number does. Meta charges a message to a +44 number at the UK rate, and charges the same message to a customer with an Irish or a German number at that market's rate. If you sell abroad, look at where your customers' numbers come from before you estimate costs.",
        "Meta's page also explains when messages are free. When a customer messages you from a Click to WhatsApp ad and you reply inside the customer service window, Meta opens a free entry point window. Each business phone number gets a monthly allowance of free service messages. Meta changed these rules on October 1, 2026, when it resumed charging for service messages and for utility templates sent inside an open customer service window. That change is a good reason to treat any cost guide, including this one, as a starting point and to read Meta's page yourself.",
      ],
      table: {
        caption:
          "Meta's WhatsApp message categories, as named on Meta's pricing page in November 2026",
        headers: ["Category", "Type", "Typical use"],
        rows: [
          ["Marketing", "Template", "Offers, product launches and newsletters"],
          ["Utility", "Template", "Order confirmations, delivery updates and booking reminders"],
          ["Authentication", "Template", "One-time passcodes for logins and account checks"],
          ["Service", "Non-template", "Free-form replies inside the customer service window"],
          ["Meta Business Agent", "Non-template", "Conversations handled by Meta's AI agent"],
        ],
      },
      callout: {
        title: "Where to check current prices",
        body: "We do not publish per-message prices in this guide, because Meta changes its rate cards and the figures go out of date. Meta publishes the current rates, by market and currency, on its official pricing page at developers.facebook.com. Check it before you set a budget, and check it again before each new campaign.",
      },
    },
    {
      heading: "Plan your first templates and costs before go-live",
      body: [
        "Write a one-page message map before you submit anything to Meta. List every message the business will send, what triggers it, its category, the consent it relies on, and who answers replies. Keep each template to one job. A template that mixes an order update with a discount code reads as marketing, and you should expect Meta to categorise it that way.",
        "Then estimate volume. Count how many order updates, reminders and campaign messages you expect each month, split by the countries your customers' numbers come from. Multiply by Meta's current rates for each category and market, then add your provider's platform fee and VAT. Review the estimate after the first month against Meta's billing data, because real reply rates rarely match a forecast.",
        "If WhatsApp will take enquiries from your website or ads, decide who replies and how fast. A missed WhatsApp message frustrates a customer as much as a missed call. Our guide to [automating lead follow-up](/blog/automate-lead-follow-up) covers routing rules, and our guide to [AI chat support](/blog/ai-chat-support-automate-vs-keep-human) helps you decide which questions a bot should answer. For a deeper walk through the Cloud API, partner contracts and coexistence, read our [WhatsApp Business API setup guide for UK, EU and US businesses](/blog/whatsapp-business-api-setup-guide).",
        "Pixel2Tech's [automation and CRM team](/services/automation-and-crm) sets up WhatsApp for clients in the UK, US and Europe and connects it to Shopify, CRMs and helpdesks. If you want a chatbot on the number, our [AI solutions team](/services/ai-solutions) can build the handover to your staff. To talk through your setup, [contact us](/contact).",
      ],
    },
  ],
};

export default post satisfies PostBody;
