import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "WhatsApp Business API in Pakistan: 2026 Setup Guide",
  metaDescription:
    "How to get the WhatsApp Business API in Pakistan: Meta verification, Cloud API vs a provider, keeping your number, templates, the blue tick and CRM links.",
  keywords: [
    "WhatsApp Business API Pakistan",
    "WhatsApp Cloud API setup",
    "Meta business verification Pakistan",
    "WhatsApp blue tick Pakistan",
    "WhatsApp Business app vs API",
    "WhatsApp API provider Pakistan",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the WhatsApp API setup and integration services discussed here.",
  keyTakeaways: [
    "Pakistani businesses get the WhatsApp Business API the same way as businesses anywhere: through a Meta business portfolio, a WhatsApp Business Account, and either Meta's Cloud API directly or a Business Solution Provider.",
    "Verify your business early. New portfolios can message 250 unique people per rolling 24 hours outside a customer service window; business verification is one of the ways to raise that to 2,000.",
    "You can keep your existing WhatsApp Business app number through Meta's coexistence onboarding, offered through Solution Partners and Tech Providers, but broadcast lists and some app features switch off.",
    "Meta charges per message as of September 2026, by template category and the recipient's country code. Utility templates sent inside an open 24-hour customer service window are free.",
    "The blue checkmark on the API is the Official Business Account. It needs a verified portfolio, an approved display name, two-step verification and at least 30 days on the platform.",
  ],
  content: [
    {
      heading: "How do you get the WhatsApp Business API in Pakistan?",
      definition:
        "Create a Meta business portfolio, verify your business, and register a phone number to a WhatsApp Business Account. Then connect it either to Meta's Cloud API directly, which needs a developer, or through a Business Solution Provider that handles setup, inbox and billing. Pakistani businesses follow the same process as businesses anywhere.",
      body: [
        "Most Pakistani search results for this topic are provider landing pages, each making the case for its own route. This guide stays neutral: what you need, the two ways in, and the approvals that trip people up.",
        "One thing to know upfront: the API isn't an app you download. WhatsApp describes its [Business Platform](https://whatsappbusiness.com/resources/resource-library/whatsapp-vs-whatsapp-business/) as a collection of APIs and solutions, so you'll use it through software, a provider's inbox, your CRM or your own code.",
      ],
    },
    {
      heading: "WhatsApp Business app or API?",
      definition:
        "Stay on the free app while one or two people can handle chats from a phone. Move to the API when you need several agents, automation, system integrations or messages at volume.",
      body: [
        "The app suits a shop owner answering customers personally. The API suits a business that needs WhatsApp to behave like a channel: order updates sent automatically, a shared inbox, chatbots and a record in the CRM.",
      ],
      table: {
        caption: "WhatsApp Business app vs WhatsApp Business Platform (API), as of September 2026",
        headers: ["Question", "WhatsApp Business app", "WhatsApp Business Platform (API)"],
        rows: [
          [
            "Cost to use",
            "Free to download",
            "Meta charges per message by category; providers may add a platform fee",
          ],
          [
            "Who replies",
            "People on linked phones and devices",
            "Any number of agents or bots through software",
          ],
          [
            "Automation",
            "Basic greeting, away and quick replies",
            "Full automation through your systems or a provider",
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
      heading: "What you need before you start",
      body: [
        "Most delays happen here, not in the technical setup. Get these ready before you touch the developer console or sign with a provider.",
      ],
      bullets: [
        "A Meta business portfolio (formerly Business Manager) owned by a company email, with at least two admins.",
        "Your legal business name entered exactly as it appears on your official documents.",
        "Documents that show that legal name and your address or phone, such as a company's SECP incorporation certificate or, for a sole proprietor, tax registration and a utility bill in the business name. Check Meta's current list of accepted documents before uploading.",
        "A live website on your own domain, with the same business name, address and phone, a privacy policy and contact details.",
        "A phone number that can receive a verification code by SMS or call. It can be new, or your existing app number through coexistence.",
        "Two-step verification planned for the number, since it's required for the blue checkmark later.",
      ],
      subsections: [
        {
          heading: "Why verification matters for your limits",
          body: [
            "Meta's [messaging limits](https://developers.facebook.com/docs/whatsapp/messaging-limits) cap how many unique people you can message outside a customer service window in a rolling 24 hours. New portfolios start at 250. Verifying your business, having a partner verify it, or delivering template messages to 2,000 unique people within 30 days using high-quality templates raises the limit to 2,000, and it can then scale automatically to 10,000, 100,000 and unlimited if quality stays high.",
            "Verification also affects templates. Meta's template documentation says each WhatsApp Business Account under an unverified portfolio is limited to 250 templates, compared with up to 6,000 once the portfolio is verified.",
          ],
        },
        {
          heading: "Choosing the number",
          body: [
            "Use a number the business owns, not a staff member's personal SIM. Once it's on the API, it's your customer-facing identity, and you don't want it leaving with an employee. If customers already know your WhatsApp number from packaging, Instagram and Google, moving that number through coexistence is usually better than launching a new one and asking everyone to save it again.",
          ],
        },
      ],
    },
    {
      heading: "Option 1: Meta's Cloud API directly",
      definition:
        "Best for a business with a developer, in-house or hired, that wants no middleman fees and full control over data and logic.",
      body: [
        "Meta hosts the Cloud API, so there are no servers to run for WhatsApp itself. Meta's [Cloud API get-started guide](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started) sets out the path:",
      ],
      bullets: [
        "Register as a Meta developer and create an app with the WhatsApp use case, linked to your business portfolio.",
        "Connect the app to a new or existing WhatsApp Business Account.",
        "Generate a temporary access token and send a test message from the test number Meta provides.",
        "Set up a webhook endpoint to receive incoming messages and delivery statuses.",
        "Create a system user and a permanent token with the business_management, whatsapp_business_messaging and whatsapp_business_management permissions.",
        "Add and verify your real business phone number, then submit your first templates for review.",
      ],
      subsections: [
        {
          heading: "Do you need a developer to use the Cloud API?",
          body: [
            "Yes, or a provider. The Cloud API has no inbox: someone has to build or connect the software that receives webhooks, stores conversations and sends replies. Automation tools such as n8n can cover simple flows, but you still need someone to own the setup, the tokens and the fixes.",
            "The direct route has no platform fee. Your costs are Meta's per-message charges, hosting for the webhook and any inbox or automation tool, and developer time for the build and upkeep. For a business with one clear use, such as order updates, that's often the leaner option; for a support team that needs a polished inbox tomorrow, it usually isn't.",
          ],
        },
      ],
    },
    {
      heading: "Option 2: a Business Solution Provider",
      body: [
        "A Business Solution Provider (BSP) is a Meta partner that sets up your account and gives you software on top: a shared inbox, broadcast tools, chatbot builders and ready-made integrations. You pay for that convenience, usually as a monthly platform fee plus Meta's message charges, sometimes with a markup.",
        "A provider is the faster route for a team without developers. The risk is lock-in: templates, contacts and conversation history live in their system. Ask these questions before you sign:",
      ],
      bullets: [
        "Is the WhatsApp Business Account created under my business portfolio, or yours?",
        "Do you pass Meta's message charges through at cost, or add a markup? Show me both on an invoice.",
        "Can I export contacts, templates and conversation history if I leave?",
        "Can you onboard my existing app number through coexistence?",
        "Which integrations are included: Shopify, my CRM, Google Sheets, a helpdesk?",
        "Who submits templates, and how fast do you respond when one is rejected?",
        "What's the minimum contract length and notice period?",
        "Do you bill in PKR or USD, and are taxes included in the quoted price?",
      ],
    },
    {
      heading: "Can you keep your existing WhatsApp number?",
      definition:
        "Yes, through Meta's coexistence onboarding, which connects an existing WhatsApp Business app number to the Cloud API while you keep using the app.",
      body: [
        "Meta's [coexistence documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) says the flow is offered through Solution Partners and Tech Providers, and the business needs WhatsApp Business app version 2.24.17 or later. Contacts and up to 180 days of one-to-one chat history can sync; group chats don't.",
        "There are trade-offs. Numbers used on both the app and the API have a fixed throughput of 20 messages per second. Broadcast lists, disappearing messages, view-once messages and live location are turned off in the app. Messages you send from the app stay free, while messages sent through the API are charged at API rates.",
      ],
    },
    {
      heading: "Display name, templates and quality rating",
      body: ["Three approvals decide whether your account runs smoothly after setup."],
      subsections: [
        {
          heading: "Display name",
          body: [
            "Meta reviews the display name customers see against its display-name guidelines. The safest choice is the exact name on your website, signage and verification documents. Leave out keywords, taglines and city names you don't actually trade under.",
          ],
        },
        {
          heading: "Templates",
          body: [
            "Any message you start outside a 24-hour customer service window must use an approved template in one of three categories: marketing, utility or authentication. Under Meta's [categorization rules](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization), utility templates follow up on a user's action and must be non-promotional, while any template mixing an order update with a promotion counts as marketing. Meta can recategorize a template it believes is wrong.",
            "Pricing follows the category. Meta has charged per message since July 1, 2025, based on the recipient's country calling code, and its [pricing documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) lists higher utility and authentication rates for Pakistan from April 1, 2026. Check the current rate card before you budget.",
          ],
        },
        {
          heading: "Quality rating",
          body: [
            "Meta tracks how recipients respond to your templates. High quality is a condition for your messaging limit to scale, so send templates only to people who expect them, keep marketing frequency sensible and make opting out easy.",
          ],
        },
      ],
    },
    {
      heading: "Blue tick: Official Business Account vs Meta Verified",
      body: [
        "On the API, the blue checkmark comes from Official Business Account (OBA) status. Many guides still call it the 'green tick'; Meta's current [OBA documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts/) describes a blue checkmark beside the business name. To be eligible:",
      ],
      bullets: [
        "The business complies with the WhatsApp Business Messaging Policy.",
        "It has been on the WhatsApp Business Platform for at least 30 days.",
        "The business portfolio that owns the number has completed business verification.",
        "Two-step verification is enabled on the number.",
        "The display name has been approved.",
        "If a request is denied, you must wait 30 days before applying again.",
      ],
      callout: {
        title: "What about Meta Verified?",
        body: "Meta Verified is a separate paid subscription. When it launched for WhatsApp Business in June 2024, TechCrunch reported it was available in Brazil, India, Indonesia and Colombia first, with plans starting from US$14 a month. Check inside your WhatsApp Business app whether it's offered in Pakistan today, and be wary of anyone selling a guaranteed badge.",
      },
    },
    {
      heading: "Connecting the API to your CRM, Shopify store and chatbot",
      body: [
        "The API earns its cost when it's connected to the systems that already hold your customer and order data. Webhooks bring incoming messages and delivery statuses into your stack; templates go out when something happens in your store or CRM.",
      ],
      bullets: [
        "Shopify: order confirmations, dispatch and delivery updates, and COD confirmation before shipping.",
        "CRM: new WhatsApp leads created as contacts with source and first message logged.",
        "Helpdesk or shared inbox: conversations assigned to agents with notes and tags.",
        "Chatbot: answers to repeat questions such as prices, hours and order status, with a handover to a person.",
        "Reporting: messages sent, delivered, read and answered, by template.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we connect anything, we write a one-page message map: every template the business will send, what triggers it, its category, who owns replies and what gets logged in the CRM. It takes an afternoon, and it's the document the client keeps when the software changes. It also makes template approval faster, because each template has one clear job.",
      },
    },
    {
      heading: "Where to go from here",
      body: [
        "Start the business verification now, even if you're months from launch, because it's the step you can't speed up. Then decide between the Cloud API and a provider based on who will own the setup day to day.",
        "If you sell on Shopify, our guide to [reducing fake COD orders](/blog/reduce-fake-cod-orders-shopify-pakistan) shows a confirmation flow you can run on the API. For the bigger picture of connecting your tools, read [why businesses need better systems](/blog/why-businesses-need-better-systems). Pixel2Tech's [automation and CRM team](/services/automation-and-crm) in Lahore sets up the WhatsApp API and connects it to Shopify, CRMs and chatbots.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can a sole proprietor in Pakistan get the WhatsApp Business API?",
      a: "Generally yes, as long as Meta can verify the business. The challenge is paperwork: you need official documents showing your business name exactly as entered in Meta, with a matching address or phone, and a website with the same details. Check Meta's current list of accepted documents before uploading, and make sure every document shows the same name.",
    },
    {
      q: "Can I keep my existing WhatsApp number when moving to the API?",
      a: "Yes. Meta's coexistence onboarding connects an existing WhatsApp Business app number to the Cloud API, through a Solution Partner or Tech Provider, while you keep using the app. You need app version 2.24.17 or later. Up to 180 days of one-to-one chats can sync, but broadcast lists and some app features are switched off.",
    },
    {
      q: "How long does Meta business verification take?",
      a: "Plan for it to take a while and start well before you need the API live. How quickly it goes depends on how complete and consistent your submission is. Avoid the preventable problems: a legal name that doesn't match your documents, an address or phone missing from them, or a website that shows different details.",
    },
    {
      q: "What is the difference between the green tick and the blue tick?",
      a: "They usually refer to the same thing. Older guides call the WhatsApp verified badge the green tick. Meta's current documentation for Official Business Accounts describes a blue checkmark beside the business name. Separately, Meta Verified is a paid subscription with its own badge that has rolled out country by country, so check availability in your app.",
    },
    {
      q: "Do I need a developer to use the WhatsApp Cloud API?",
      a: "Yes, unless you use a provider. The Cloud API has no inbox or dashboard for chatting. Someone has to connect webhooks, store conversations, manage access tokens and build or configure the tool your team replies in. A Business Solution Provider gives you that software ready-made, in exchange for a platform fee.",
    },
  ],
  sources: [
    {
      label: "Meta for Developers — WhatsApp Cloud API: Get started",
      href: "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    },
    {
      label: "Meta for Developers — WhatsApp messaging limits",
      href: "https://developers.facebook.com/docs/whatsapp/messaging-limits",
    },
    {
      label: "Meta for Developers — WhatsApp Business Platform pricing",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    },
    {
      label: "Meta for Developers — Onboard WhatsApp Business app users (coexistence)",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users",
    },
    {
      label: "Meta for Developers — Official Business Accounts",
      href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts/",
    },
    {
      label: "TechCrunch — Meta Verified comes to WhatsApp Business",
      href: "https://techcrunch.com/?p=2789710",
    },
  ],
  internalLinks: [
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    {
      label: "Why businesses need better systems",
      to: "/blog/why-businesses-need-better-systems",
    },
    {
      label: "How to reduce fake COD orders on Shopify",
      to: "/blog/reduce-fake-cod-orders-shopify-pakistan",
    },
  ],
  cta: {
    title: "Stuck on verification or choosing a provider?",
    body: "Tell us how many messages you send, who answers them and which systems hold your customer data. We'll recommend Cloud API or a provider, help with verification and connect WhatsApp to your store or CRM.",
  },
};

export default post;
