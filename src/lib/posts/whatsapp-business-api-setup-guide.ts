import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "WhatsApp Business API Setup Guide: UK, EU and US (2026)",
  metaDescription:
    "Set up the WhatsApp Business API in the UK, EU or US: Meta verification, Cloud API vs a BSP, per-message rates in USD, GBP and EUR, and GDPR opt-in rules.",
  keywords: [
    "WhatsApp Business API setup",
    "WhatsApp Business API pricing UK",
    "WhatsApp Cloud API setup",
    "WhatsApp Business API cost",
    "WhatsApp Business app vs API",
    "WhatsApp Business API GDPR opt-in",
    "WhatsApp Business Solution Provider",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan that works with clients in the US, UK and Europe, and offers the WhatsApp API setup and integration services discussed here.",
  keyTakeaways: [
    "You get the WhatsApp Business API through a Meta business portfolio and a WhatsApp Business Account, connected either to Meta's Cloud API directly (needs a developer) or through a Business Solution Provider (BSP) that adds an inbox and billing.",
    "Meta charges per delivered message, by template category and the recipient's country code. As of September 2026, a marketing message costs $0.0635 (£0.0458) to a UK number, $0.1365 (€0.1131) to Germany and $0.025 to the US or Canada.",
    "Pricing changes on October 1, 2026: service replies become chargeable at the utility rate after 1,000 free per phone number per month, and utility templates sent inside the 24-hour window stop being free.",
    "Verify your business early. New portfolios can message 250 unique people per rolling 24 hours outside a customer service window; verification is one way to lift that to 2,000.",
    "WhatsApp's policy requires opt-in for every business-initiated message. In the UK and EU, GDPR consent rules and the UK's PECR marketing rules apply on top, so record who opted in, when and for what.",
  ],
  content: [
    {
      heading: "What is the WhatsApp Business API and how do you set it up?",
      definition:
        "The WhatsApp Business API is Meta's platform for sending WhatsApp messages from software instead of a phone. To set it up, create a Meta business portfolio, verify the business, register a phone number and display name to a WhatsApp Business Account, then connect it to Meta's Cloud API directly or through a Business Solution Provider.",
      body: [
        "Most search results for this topic are provider landing pages. This guide stays neutral: what you need, the two ways in, what Meta charges in the UK, Europe and North America, and the consent rules for UK and EU customers.",
        "The API is not an app you download. You use it through software: a provider's shared inbox, your CRM, a helpdesk or your own code.",
      ],
    },
    {
      heading: "WhatsApp Business app or the Business Platform (Cloud API)?",
      definition:
        "Stay on the free app while one or two people answer chats from a phone. Move to the Business Platform when you need several agents, automated messages, system integrations or volume.",
      body: [
        "The platform suits a business that needs WhatsApp to behave like a channel: automatic order updates, a shared inbox, chatbots with a handover to a person, and every conversation logged in the CRM.",
      ],
      table: {
        caption: "WhatsApp Business app vs WhatsApp Business Platform, as of September 2026",
        headers: ["Question", "WhatsApp Business app", "WhatsApp Business Platform (Cloud API)"],
        rows: [
          [
            "Cost to use",
            "Free",
            "Meta charges per delivered message by category and country; providers may add a platform fee",
          ],
          [
            "Who replies",
            "People on linked phones and devices",
            "Any number of agents or bots through software",
          ],
          [
            "Automation",
            "Greeting, away and quick replies",
            "Anything your systems or provider can trigger",
          ],
          ["Business-initiated messages", "Broadcast lists", "Approved message templates"],
          ["Integrations", "Limited", "CRM, Shopify, helpdesk and custom systems through webhooks"],
          [
            "Best for",
            "Owner-run shops and small teams",
            "Stores and service businesses with volume or several agents",
          ],
        ],
      },
    },
    {
      heading: "What do you need before you start?",
      body: ["Most delays happen before any technical work. Get these ready first."],
      bullets: [
        "A Meta business portfolio (formerly Business Manager) owned by a company email address, with at least two admins.",
        "Your legal business name entered exactly as it appears on your official documents, such as a Companies House record in the UK, a Handelsregister extract in Germany or state formation documents in the US.",
        "Documents that show that legal name with your address or phone number. Check Meta's current list of accepted documents before uploading.",
        "A live website on your own domain showing the same business name, address and phone, plus a privacy notice that covers WhatsApp messaging.",
        "A phone number the business owns that can receive a verification code by SMS or voice call.",
        "A display name that matches the name on your website, signage and documents.",
        "Two-step verification planned for the number, since it is required for the blue checkmark later.",
      ],
      subsections: [
        {
          heading: "Why business verification affects your sending limits",
          body: [
            "Meta's [messaging limits](https://developers.facebook.com/docs/whatsapp/messaging-limits) cap how many unique people a business portfolio can message outside a customer service window in a moving 24-hour period. New portfolios start at 250. Verifying your business, having a partner verify it, or delivering 2,000 high-quality template messages to unique people within 30 days raises the limit to 2,000.",
            "From there, Meta scales the limit automatically to 10,000, 100,000 and unlimited when your templates keep a high quality rating and you use at least half of your current limit within seven days. The limit is shared across every number in the portfolio.",
          ],
        },
        {
          heading: "Choosing the number and display name",
          body: [
            "Use a number the business owns, not a staff member's personal SIM. Meta's phone number documentation says a number already active on WhatsApp can't be registered to the Cloud API unless it's deleted from WhatsApp first, or moved over through coexistence (covered below).",
            "Meta reviews the display name customers see. The safest choice is the exact trading name on your website and documents, without taglines, keywords or locations you don't trade under.",
            "The blue checkmark on the platform comes from Official Business Account status. Meta's [OBA documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts/) requires at least 30 days on the platform, a verified business portfolio, two-step verification, an approved display name and compliance with WhatsApp's policies. A denied request can be resubmitted after 30 days.",
          ],
        },
      ],
    },
    {
      heading: "How to set up the Cloud API directly",
      definition:
        "The direct route suits a business with a developer, in-house or hired, that wants no platform fee and full control over data and logic.",
      body: [
        "Meta hosts the Cloud API, so there are no WhatsApp servers to run. Meta's [Cloud API get-started guide](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started) sets out the core path; the last step is where the test setup becomes a live one:",
      ],
      bullets: [
        "Register as a Meta developer and create an app with the WhatsApp use case, linked to your business portfolio.",
        "Connect the app to a new or existing WhatsApp Business Account.",
        "Generate a temporary access token and send a test message.",
        "Set up a webhook endpoint to receive incoming messages and delivery statuses.",
        "Create a system user and a permanent token with the business_management, whatsapp_business_messaging and whatsapp_business_management permissions.",
        "Register your real business phone number and display name, add a payment method, then submit your first templates for review.",
      ],
      subsections: [
        {
          heading: "Do you need a developer for the Cloud API?",
          body: [
            "Yes, or a provider. The Cloud API has no inbox. Someone has to build or connect the software that receives webhooks, stores conversations and sends replies. Automation tools such as n8n can cover simple flows (see our breakdown of [n8n automation cost](/blog/n8n-automation-cost)), but someone still has to own the tokens, templates and fixes.",
            "Your costs on this route are Meta's message charges, hosting, and developer time for the build and upkeep. For one clear job, such as store order updates, it is often the leaner option.",
          ],
        },
      ],
    },
    {
      heading: "Should you use a Business Solution Provider or go direct?",
      body: [
        "A Business Solution Provider (BSP) is a Meta partner that sets up your account and sells software on top: a shared inbox, campaign tools, chatbot builders and ready-made integrations. You usually pay a monthly platform fee plus Meta's message charges, sometimes with a markup on those charges.",
        "A BSP is the faster route for a team without developers. The risk is lock-in, because templates, contacts and conversation history can end up living in the provider's system. Ask these questions before you sign:",
      ],
      bullets: [
        "Is the WhatsApp Business Account created under my business portfolio, or yours?",
        "Do you pass Meta's message charges through at cost, or add a markup? Show me both lines on a sample invoice.",
        "Which currency do you bill in, and is VAT included in the quoted price?",
        "Can I export contacts, opt-in records, templates and conversation history if I leave?",
        "Where is conversation data stored, and will you sign a data processing agreement?",
        "Can you onboard my existing app number through coexistence?",
        "Which integrations are included: Shopify, HubSpot, Salesforce, Zendesk, Google Sheets?",
        "What is the minimum contract length and notice period?",
      ],
      subsections: [
        {
          heading: "Can you keep your existing WhatsApp number?",
          body: [
            "Yes, through Meta's [coexistence onboarding](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users), which connects a WhatsApp Business app number to the Cloud API while you keep using the app. It is offered through Solution Partners and Tech Providers, and it needs app version 2.24.17 or later. Up to 180 days of one-to-one chat history can sync; group chats don't.",
            "There are trade-offs. Numbers used on both the app and the API have a fixed throughput of 20 messages per second. Broadcast lists, disappearing messages, view-once messages and live location are switched off. Messages sent from the app stay free, while messages sent through the API are charged at API rates.",
          ],
        },
      ],
    },
    {
      heading: "How much does the WhatsApp Business API cost in the UK, EU and US?",
      definition:
        "Meta charges per delivered template message, based on the template category and the recipient's country calling code, not where your business is registered. As of September 2026, marketing messages to the markets in this guide cost from $0.025 (US and Canada) to $0.1597 (Netherlands) each; utility messages cost far less.",
      body: [
        "Meta moved to per-message pricing on July 1, 2025. Under the rates that apply through September 30, 2026, marketing templates are always charged, utility and authentication templates are charged when sent outside a customer service window, and replies inside the 24-hour window are free. Meta bills in several currencies, including USD, GBP and EUR, and publishes a rate card in each.",
        "The figures below come straight from Meta's [pricing documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) and its USD, GBP and EUR rate cards. They are Meta's charges only, before volume-tier discounts, any BSP fee or markup, and tax.",
      ],
      table: {
        caption:
          "Meta's per-message rates by recipient market, rate cards effective July 1, 2026 (USD / GBP / EUR, as of September 2026)",
        headers: ["Recipient market", "Marketing", "Utility and authentication"],
        rows: [
          ["United Kingdom", "$0.0635 / £0.0458 / €0.0526", "$0.022 / £0.0159 / €0.0182"],
          ["Germany", "$0.1365 / £0.0985 / €0.1131", "$0.055 / £0.0397 / €0.0456"],
          ["France", "$0.0859 / £0.0620 / €0.0712", "$0.030 / £0.0216 / €0.0248"],
          ["Netherlands", "$0.1597 / £0.1152 / €0.1323", "$0.050 / £0.0361 / €0.0414"],
          ["Spain", "$0.0707 / £0.0509 / €0.0585", "$0.020 / £0.0144 / €0.0166"],
          ["Italy", "$0.0795 / £0.0573 / €0.0658", "$0.030 / £0.0216 / €0.0248"],
          [
            "Rest of Western Europe (incl. Ireland, Belgium, Austria, Nordics)",
            "$0.0592 / £0.0427 / €0.0490",
            "$0.0171 / £0.0123 / €0.0142",
          ],
          [
            "North America (US and Canada)",
            "$0.025 / £0.0180 / €0.0207",
            "$0.0034 / £0.0025 / €0.0028",
          ],
        ],
      },
      subsections: [
        {
          heading: "What changes on October 1, 2026",
          body: [
            "Meta has published two changes that start on October 1, 2026. First, service messages (your free-form replies inside the 24-hour window) become chargeable at the same rate as utility and authentication in each market. Each business phone number gets a shared free tier of 1,000 delivered service messages per month, which resets monthly and doesn't roll over.",
            "Second, utility templates sent inside an open customer service window, free since July 1, 2025, will be charged too. Meta's October rate cards keep the marketing, utility and authentication rates above unchanged for the UK, Germany, France, Spain, Italy, the Netherlands, Rest of Western Europe and North America. Without a payment method on file, Meta stops delivering service messages once the free tier is used up.",
            "Two things stay free: messages inside a 72-hour free entry point window, which opens when a customer messages you from a Click to WhatsApp ad or a Facebook Page call-to-action button and you reply within 24 hours, and messages sent from the WhatsApp Business app on a coexistence number.",
          ],
        },
        {
          heading: "A worked example",
          body: [
            "Take a UK store that sends 5,000 utility order updates outside the customer service window and 2,000 marketing messages a month, all to UK numbers. At Meta's GBP rates that is about £79.50 for the utility messages and £91.60 for marketing, roughly £171 a month before volume tiers, provider fees or VAT. The same volumes to German numbers cost about $275 plus $273, or $548, against about $237 in USD for the UK, because German rates are more than twice as high.",
            "From October 2026, if the same store also sends 3,000 support replies a month from one number, the first 1,000 are free and the other 2,000 cost about £31.80 at the UK service rate of £0.0159. These are calculations from Meta's published rates, not quotes.",
          ],
        },
      ],
    },
    {
      heading: "What are the opt-in rules in the UK and EU?",
      body: [
        "WhatsApp's own rules apply everywhere. The [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) lets you contact people only when they have given you their number and opted in to hear from you on WhatsApp. The opt-in should cover the categories of message you will send, such as order updates or offers, and you must respect opt-out and block requests made on or off WhatsApp. The policy also makes the business responsible for making sure its opt-in method meets local law.",
        "In the EU and UK, consent under GDPR (and the UK GDPR) has to be freely given, specific, informed and unambiguous. The European Commission's [guidance on consent](https://commission.europa.eu/law/law-topic/data-protection/reform/rights-citizens/how-my-personal-data-protected/how-should-my-consent-be-requested_en) says pre-ticked boxes don't count and people must be able to withdraw consent. National e-privacy rules add marketing-specific requirements that vary by country, so check with counsel before a campaign in a new market.",
        "In the UK, marketing messages also fall under PECR. The ICO's [guidance on electronic mail marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/) defines electronic mail broadly, including texts and direct messages on social media, and requires specific consent from individuals unless the soft opt-in applies: existing customers, similar products, and a clear chance to opt out at collection and in every message. The ICO notes this guidance is under review after the Data (Use and Access) Act 2025. In the US, WhatsApp's policy is the minimum; text-marketing laws may also apply, so get advice before running marketing campaigns.",
      ],
      bullets: [
        "Use an unticked checkbox or a clear button that names WhatsApp and the message types, separate from your terms.",
        "Store the opt-in record: phone number, date, time, source (checkout, form, ad) and the wording shown.",
        "Keep marketing and transactional consent separate, so a customer can stop offers but still get order updates.",
        "Honor opt-outs in every system that sends messages, including your CRM, BSP and email tool.",
        "Name the business in every message and give a simple way to stop, such as replying STOP.",
      ],
    },
    {
      heading: "What should you use the WhatsApp API for?",
      body: [
        "The API earns its cost when each message has a clear job. Three uses cover most small and mid-sized businesses.",
      ],
      subsections: [
        {
          heading: "Order and appointment updates",
          body: [
            'Order confirmations, dispatch and delivery notices, booking reminders and payment receipts are utility templates. They are cheaper than marketing, customers tend to read them, and they cut "where is my order?" tickets. Keep promotions out of them: Meta\'s categorization rules treat a template that mixes an update with an offer as marketing.',
          ],
        },
        {
          heading: "Customer support",
          body: [
            "Replies inside the 24-hour customer service window don't need a template. A shared inbox lets several agents work one number, and a chatbot can answer repeat questions about hours, returns and order status before handing over to a person. Budget for the October 2026 service charges if you reply to more than 1,000 conversations a month per number.",
          ],
        },
        {
          heading: "Lead follow-up",
          body: [
            "A lead who fills in a form and ticks a WhatsApp opt-in can get a reply within minutes, with the conversation logged against their CRM record. Our guide to [automating lead follow-up](/blog/automate-lead-follow-up) covers routing rules and response times. Leads from Click to WhatsApp ads are cheap to answer because of the free entry point window.",
          ],
        },
      ],
    },
    {
      heading: "Connecting WhatsApp to your CRM",
      body: [
        "Webhooks bring incoming messages and delivery statuses into your stack, and templates go out when something happens in your store or CRM. The integrations that pay off first are usually these:",
      ],
      bullets: [
        "CRM (HubSpot, Salesforce, Pipedrive or similar): new WhatsApp contacts created with source, opt-in record and first message logged.",
        "Shopify or WooCommerce: order confirmations, dispatch and delivery updates triggered from order events.",
        "Helpdesk or shared inbox: conversations assigned to agents with notes, tags and handover from the bot.",
        "Reporting: messages sent, delivered, read and answered by template, plus Meta charges by category.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we connect anything, we write a one-page message map: every template the business will send, what triggers it, its category, the consent it relies on, who owns the replies and what gets logged in the CRM. It takes an afternoon, it makes template approval faster because each template has one job, and it becomes the document the client keeps when tools change.",
      },
    },
    {
      heading: "WhatsApp Business API setup checklist",
      body: [
        "Start business verification now, even if launch is months away, because it is the step you can't speed up. Then work through the rest in order.",
        "If leads already arrive through several inboxes, read [why businesses need better systems](/blog/why-businesses-need-better-systems) before adding another tool. Pixel2Tech's [automation and CRM team](/services/automation-and-crm) sets up the WhatsApp API for clients in the US, UK and Europe and connects it to Shopify, CRMs and chatbots.",
      ],
      bullets: [
        "Meta business portfolio created, two admins added, legal name matches documents.",
        "Business verification submitted with documents that match the website.",
        "Phone number chosen, owned by the business, and either free of WhatsApp or ready for coexistence.",
        "Display name matches your trading name; two-step verification switched on.",
        "Route chosen: Cloud API with a developer, or a BSP with the contract questions answered.",
        "Payment method added and billing currency set (USD, GBP or EUR).",
        "Opt-in wording live on checkout and forms, with records stored.",
        "Message map written and first templates submitted in the right category.",
        "Webhooks connected to your CRM, store or helpdesk and tested end to end.",
        "Monthly budget modeled on Meta's rates for your customers' countries, including October 2026 service charges.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does the WhatsApp Business API cost per message in the UK?",
      a: "As of September 2026, Meta charges £0.0458 for a marketing message to a UK number and £0.0159 for a utility or authentication message sent outside the customer service window. In USD that's $0.0635 and $0.022. From October 1, 2026, service replies also cost £0.0159 each after 1,000 free per phone number per month. BSP fees and VAT come on top.",
    },
    {
      q: "Is the WhatsApp Business API free?",
      a: "No, but parts of it are. There is no fee to access the Cloud API itself, and messages inside a 72-hour free entry point window from Click to WhatsApp ads are free. Until September 30, 2026, replies inside the 24-hour window are free too. From October 1, 2026, each number gets 1,000 free service messages a month, then pays the market's utility rate.",
    },
    {
      q: "Do I need GDPR consent to message customers on WhatsApp?",
      a: "You need a lawful basis for processing their number and, for marketing, usually consent that is freely given, specific, informed and unambiguous. WhatsApp's own policy also requires opt-in for business-initiated messages. In the UK, PECR's soft opt-in can cover marketing to existing customers about similar products. Keep a record of each opt-in and take legal advice for campaigns.",
    },
    {
      q: "Should I use a BSP or Meta's Cloud API directly?",
      a: "Go direct if you have a developer and one clear use, such as order updates, because you avoid platform fees and keep full control. Use a BSP if your team needs a shared inbox, campaign tools and integrations quickly. Either way, make sure the WhatsApp Business Account sits under your own business portfolio so you can switch later.",
    },
    {
      q: "Can I keep my existing WhatsApp Business number?",
      a: "Yes. Meta's coexistence onboarding connects an existing WhatsApp Business app number to the Cloud API through a Solution Partner or Tech Provider, and you keep using the app. You need app version 2.24.17 or later. Up to 180 days of one-to-one chats can sync, but broadcast lists and some app features are switched off.",
    },
    {
      q: "How fast can a new account send bulk messages?",
      a: "Not fast at first. A new business portfolio can message 250 unique people outside a customer service window in a moving 24-hour period. Business verification, or 2,000 delivered high-quality templates within 30 days, lifts that to 2,000. After that, Meta raises the limit automatically to 10,000, 100,000 and unlimited as long as quality stays high.",
    },
  ],
  sources: [
    {
      label: "Meta for Developers: WhatsApp Business Platform pricing and rate cards",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    },
    {
      label: "Meta for Developers: WhatsApp messaging limits",
      href: "https://developers.facebook.com/docs/whatsapp/messaging-limits",
    },
    {
      label: "Meta for Developers: WhatsApp Cloud API, get started",
      href: "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    },
    {
      label: "Meta for Developers: Onboard WhatsApp Business app users (coexistence)",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users",
    },
    {
      label: "WhatsApp Business Messaging Policy",
      href: "https://whatsappbusiness.com/policy/",
    },
    {
      label: "ICO: Electronic mail marketing (PECR)",
      href: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/",
    },
  ],
  internalLinks: [
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    {
      label: "How to automate lead follow-up and routing",
      to: "/blog/automate-lead-follow-up",
    },
    {
      label: "Why businesses need better systems",
      to: "/blog/why-businesses-need-better-systems",
    },
    { label: "AI chatbot cost for small businesses", to: "/blog/ai-chatbot-cost-small-business" },
  ],
  cta: {
    title: "Get WhatsApp talking to your CRM",
    body: "Tell us which countries your customers are in, how many messages you send and which systems hold your customer data. We'll recommend the Cloud API or a BSP, model your Meta costs in USD, GBP or EUR, and connect WhatsApp to your store or CRM.",
  },
};

export default post;
