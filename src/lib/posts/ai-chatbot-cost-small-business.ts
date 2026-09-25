import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "AI Chatbot Cost for Small Business: Buy vs Build (2026)",
  metaDescription:
    "What an AI chatbot costs a small business: SaaS vs custom build, per-resolution vs token pricing, running costs, hidden risks and a budgeting worksheet.",
  keywords: [
    "ai chatbot cost for small business",
    "custom ai chatbot cost",
    "chatbot development cost",
    "ai chatbot pricing",
    "chatbot trained on company documents",
    "ai customer support shopify",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers custom AI solutions, one of the options compared here.",
  keyTakeaways: [
    "As of September 2026, a small business can start free with Shopify Inbox on Shopify, pay about $13 to $67 a month billed annually for Zapier Chatbots, or pay per outcome, such as $0.99 per Intercom Fin outcome.",
    "A custom build on an LLM API costs more upfront, but in our illustrative example model fees come to between a quarter of a cent and about 5 cents per conversation. The ongoing cost is mostly maintenance and knowledge-base upkeep.",
    "Per-resolution pricing is predictable per success but grows with volume. Token pricing is cheap per conversation but needs someone to build and maintain everything around the model.",
    "If the users are your staff, a team AI plan such as ChatGPT Business or Claude Team, at $20 to $25 per seat a month, may be all you need.",
    "Budget for wrong answers: human handoff, testing and a named owner for the knowledge base. NIST's AI Risk Management Framework is a free, voluntary guide to managing that risk.",
  ],
  content: [
    {
      heading: "How much does an AI chatbot cost a small business?",
      definition:
        "As of September 2026, an AI chatbot can cost nothing (Shopify Inbox is a free Shopify app), about $13 to $67 a month on entry SaaS plans such as Zapier Chatbots billed annually, or $0.99 per successful outcome with per-outcome pricing like Intercom Fin. Custom builds add development cost but can run for cents per conversation.",
      body: [
        "Most pricing pages for AI chatbots are written by the vendors selling them, and each frames the question around its own model. This guide separates the three ways to get a chatbot, explains the pricing units you'll run into, and ends with a worksheet you can fill in with your own numbers.",
        "Prices here were checked on the vendors' own pages in September 2026. They change often, so check again before you sign anything.",
        "One question before any of that: is a chatbot the fix you need? If your real problem is that the website isn't producing inquiries, a bot won't solve it. Start with our [diagnostic for websites that aren't generating leads](/blog/website-not-generating-leads).",
      ],
    },
    {
      heading: "Three ways to get an AI chatbot",
      body: [
        "RAG, short for retrieval-augmented generation, means the assistant searches your documents for relevant passages and hands them to the model along with the customer's question. It's how a bot 'trained on your documents' usually works. It's cheaper and easier to keep current than fine-tuning a model, because updating an answer means editing a document.",
        "Most small businesses should start with the first option, move to the second when the bot keeps saying it can't check something, and consider the third only when volume, data rules or channel needs justify it.",
      ],
      table: {
        caption: "The three routes to an AI chatbot",
        headers: ["Approach", "What it is", "Typical cost shape", "Fits when"],
        rows: [
          [
            "SaaS chatbot",
            "A hosted product you configure: add FAQs and documents, set the tone, embed it on your site",
            "Monthly plan, sometimes plus per-resolution fees",
            "Common questions, standard tools, little custom data",
          ],
          [
            "SaaS plus custom integrations",
            "The same product, connected to your order system, CRM or booking tool through its API or an automation layer",
            "Plan fees, a one-time integration build and some upkeep",
            "Answers depend on live data such as order status or availability",
          ],
          [
            "Custom build",
            "Your own assistant on an LLM API, with retrieval over your documents and your own interface or WhatsApp channel",
            "Upfront build, then model, hosting and maintenance costs",
            "Unusual workflows, strict data control, high volume or several channels",
          ],
        ],
      },
    },
    {
      heading: "Pricing models decoded: per seat, per resolution and per token",
      body: [
        "Intercom defines an outcome as a conversation where the customer confirms the issue is resolved, doesn't ask for more help after Fin responds, or Fin completes a defined workflow; its [pricing page](https://www.intercom.com/pricing) says that last case includes handoffs, and that you're charged once per conversation. Read every vendor's definition of 'resolved' before comparing prices.",
        "Token pricing needs a worked example. Assume, for illustration, a six-message support conversation in which each turn sends about 3,000 input tokens (the question, the chat so far and retrieved help-center passages) and returns about 250 output tokens. That's 18,000 input and 1,500 output tokens per conversation. Using list prices from [Anthropic](https://claude.com/pricing) and [OpenAI](https://developers.openai.com/api/docs/pricing) as of September 2026:",
      ],
      bullets: [
        "Claude Haiku 4.5 ($1 input and $5 output per million tokens): $0.018 plus $0.0075, or about 2.6 cents per conversation",
        "Claude Sonnet 5 ($2 and $10 per million): $0.036 plus $0.015, or about 5 cents",
        "OpenAI gpt-6-luna ($0.10 and $0.50 per million): $0.0018 plus $0.00075, or about a quarter of a cent",
        "At 1,000 conversations a month, that's roughly $26, $51 or $2.55 in model fees, before retrieval, hosting and maintenance",
      ],
      table: {
        caption: "How AI chatbot pricing is metered (vendor examples as of September 2026)",
        headers: ["Model", "You pay for", "Example", "Watch for"],
        rows: [
          [
            "Per seat",
            "Each human agent using the helpdesk",
            "Intercom's Essential, Advanced and Expert plans charge per seat, on top of Fin outcomes",
            "AI usage is often billed on top",
          ],
          [
            "Per resolution or outcome",
            "Each conversation the AI resolves",
            "Intercom Fin at $0.99 per outcome, with a monthly minimum such as 50 outcomes",
            "How the vendor defines 'resolved'",
          ],
          [
            "Per automated interaction",
            "Each conversation the AI handles",
            "Gorgias AI Agent at $0.90 each on annual plans or $1.00 monthly; each also counts as a helpdesk ticket",
            "Counting twice against ticket allowances",
          ],
          [
            "Plan tiers",
            "A bundle of bots and knowledge sources",
            "[Zapier Chatbots](https://zapier.com/pricing) Pro: 5 chatbots with 10 knowledge sources each, $13.33 a month billed annually",
            "Caps on sources, messages or branding",
          ],
          [
            "Per token",
            "Text processed by the model",
            "Claude Haiku 4.5 at $1 per million input tokens and $5 per million output",
            "Long prompts and chat history add up",
          ],
        ],
      },
      subsections: [
        {
          heading: "What the comparison tells you",
          body: [
            "Next to $0.99 per outcome, raw model fees look tiny. The difference pays for everything a SaaS vendor does for you: the chat interface, handoff to people, analytics, guardrails and upkeep. A custom build has to pay for those in development and maintenance time, so compare total cost, not model fees against resolution fees.",
          ],
        },
      ],
    },
    {
      heading: "What does a custom AI chatbot build cost?",
      definition:
        "A custom build is priced by effort across five phases: discovery, knowledge-base preparation, integrations, testing and guardrails, and launch. Integrations and testing tend to take longer than the chat interface itself.",
      body: [
        "Discovery defines what the bot should and shouldn't answer, which systems it can read, when it hands off to a person, and how success will be measured.",
        "Knowledge-base preparation is unglamorous, and it decides quality. Policies, FAQs and product data need to be current, consistent and written so each passage makes sense on its own. Contradictory documents produce confident wrong answers.",
        "Integrations are where cost varies most: reading order status from Shopify, checking availability in a booking tool, creating a ticket or CRM record, sending WhatsApp messages. Each needs authentication, error handling and testing, and often an automation layer; our guide to [n8n automation costs](/blog/n8n-automation-cost) covers that piece.",
        "Testing means a written set of real customer questions, including awkward ones, run before launch and after every change, with answers checked by someone who knows the business.",
        "As an illustrative planning estimate, not a quote: a website assistant answering from about 50 help-center pages, with handoff to a person, might take 40 to 80 hours across the five phases. Adding an order-status integration and a WhatsApp channel could roughly double that. At a hypothetical $50 an hour, 40 to 80 hours is $2,000 to $4,000. Ask bidders for hours per phase so their quotes can be compared.",
      ],
      callout: {
        title: "From the studio",
        body: "Before choosing any platform, pull your last 200 customer messages and tag each one: order status, returns, product questions, pricing, complaints or other. The tags show what share a bot could answer from documents alone, what needs live data, and what should always go to a person. That spreadsheet is a better guide to buy versus build than any vendor demo.",
      },
    },
    {
      heading: "Running costs after launch",
      body: [
        "The last line in the list below is the one to watch. Policies, prices and products change, and a bot answering from last quarter's return policy can cost more in refunds and complaints than it saves. Give the knowledge base an owner and a monthly review, and budget their time.",
        "For WhatsApp, Meta's [pricing page](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) says that as of July 1, 2025 it charges per delivered template message by category, while non-template messages are free. Replies inside a conversation the customer started therefore carry no messaging fee; proactive templates do.",
      ],
      bullets: [
        "Model fees: tokens per conversation × price × conversations (see the example above)",
        "Retrieval and storage: for example, OpenAI lists file search storage at $0.10 per GB per day after 1 GB free, plus $2.50 per 1,000 file search calls",
        "Hosting for the app, database and conversation logs, if custom",
        "Messaging fees for paid WhatsApp templates, if you use WhatsApp",
        "SaaS plan, seat or per-resolution fees, if you bought rather than built",
        "Maintenance: knowledge-base updates, prompt changes, integration fixes and conversation reviews",
      ],
    },
    {
      heading: "Ecommerce use case: order status, returns and sizing on Shopify",
      body: [
        "For Shopify stores, start with what's free. [Shopify Inbox](https://apps.shopify.com/inbox) is listed as a free app in the Shopify App Store. Its instant answers show preset questions in the chat window, and a default Track my order answer uses the customer's order number and email to show order status. You can display up to 100 instant answers.",
        "Shopify's [help page on instant answers](https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/instant-answers) adds two caveats worth copying into any chatbot plan: AI-generated answer suggestions are available only in English, and you're responsible for the accuracy of content you publish, even when it's generated automatically.",
        "Helpdesk tools suit stores managing email, social and chat volume together. As of September 2026, Gorgias lists its Starter helpdesk at $10 a month for 50 tickets, with AI Agent interactions priced separately and counted as tickets ([Gorgias pricing](https://www.gorgias.com/pricing)). Chat apps such as Tidio sit in between.",
        "Go custom when answers depend on data the apps can't reach: a 3PL's tracking events, made-to-order lead times, sizing that depends on a product's cut, or return rules that vary by product type. For sizing in particular, clear size charts and fit notes on the product page help the bot and the customer alike.",
      ],
    },
    {
      heading: "Internal assistant vs customer-facing bot",
      definition:
        "If the users are your staff, a team AI plan with shared custom assistants is usually enough. Build or buy a customer-facing bot only when customers are the users.",
      body: [
        "Many requests for a chatbot are really 'our team can't find answers in our own documents'. For that, a business AI plan is cheaper and faster than any build. As of September 2026, [ChatGPT Business](https://openai.com/business/pricing/) lists a standard seat at $20 a month billed annually or $25 monthly and includes creating and sharing GPTs within a workspace. Claude Team lists a standard seat at the same $20 billed annually or $25 monthly.",
        "OpenAI's business pricing page says business data isn't used for training by default on that plan. Check the equivalent terms for any tool before your team uploads client files.",
        "Keep customers out of staff tools. A public bot needs guardrails, handoff to people, conversation logs and a clear scope, none of which a staff workspace is designed to provide.",
      ],
    },
    {
      heading: "Hidden costs and risks",
      body: [
        "Wrong answers are the biggest hidden cost. A bot that invents a refund policy or a delivery date creates refunds, complaints and, in some cases, legal exposure. Limit it to approved sources, make it say 'I don't know' and hand off, and log conversations so someone can review them.",
        "Data privacy: know what customer data the bot sees, where the vendor stores it, whether it's used for training, and how long logs are kept. Don't give the bot data it doesn't need.",
        "Vendor lock-in: platform bots keep your content and conversation history in their own format. Keep your knowledge base in a source you control, such as your help center or a document store, and confirm you can export conversations.",
        "For a structured approach, NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is free and voluntary. AI RMF 1.0 was released on January 26, 2023, built around four functions (Govern, Map, Measure and Manage), and NIST published a Generative AI Profile, NIST-AI-600-1, on July 26, 2024. A small business doesn't need the whole framework, but its questions make a good pre-launch checklist.",
      ],
      bullets: [
        "The bot answers only from approved, dated sources",
        "It hands off to a person on request, when unsure and on sensitive topics",
        "Staff can see and correct conversations",
        "Customers are told they're talking to an AI assistant",
        "It collects the minimum personal data, with a set retention period",
        "A named owner reviews answers and updates sources every month",
      ],
    },
    {
      heading: "Budgeting worksheet",
      body: [
        "Compare the monthly total with what those conversations cost today in staff time, and with the cost of slow replies. If the bot only pays off at an optimistic resolution rate, start with the free or cheapest option and measure before committing to more.",
        "If after-hours phone calls are the bigger gap, see our guide to AI receptionists for law firms. For what happens once a bot captures a lead, see [how to automate lead follow-up](/blog/automate-lead-follow-up). Pixel2Tech scopes and builds AI assistants and the integrations around them through our [AI solutions service](/services/ai-solutions).",
      ],
      table: {
        caption: "AI chatbot budgeting worksheet (fill in your own numbers)",
        headers: ["Line item", "How to estimate", "One-time or monthly"],
        rows: [
          [
            "Conversations per month",
            "Current chats, emails and messages on the topics the bot will cover",
            "Input",
          ],
          [
            "Share the bot can resolve",
            "From tagging your recent messages; be conservative",
            "Input",
          ],
          ["Platform fee", "SaaS plan price, or $0 for a custom build", "Monthly"],
          [
            "Per-resolution or interaction fees",
            "Resolved conversations × vendor price",
            "Monthly",
          ],
          [
            "Model and retrieval fees (custom)",
            "Tokens per conversation × price × conversations, plus storage",
            "Monthly",
          ],
          ["Messaging fees", "Paid WhatsApp templates × the rate for your market", "Monthly"],
          ["Build and integrations", "Hours per phase × rate, from quotes", "One-time"],
          ["Knowledge-base preparation", "Hours to clean up and write source content", "One-time"],
          ["Maintenance and review", "Hours per month × internal or vendor rate", "Monthly"],
          ["Human handoff time", "Unresolved conversations × minutes each × staff cost", "Monthly"],
        ],
      },
    },
  ],
  faqs: [
    {
      q: "How much does an AI chatbot cost per month?",
      a: "As of September 2026, anywhere from nothing to a few hundred dollars for most small businesses. Shopify Inbox is free on Shopify, Zapier Chatbots runs about $13 to $67 a month billed annually, and per-outcome tools like Intercom Fin charge $0.99 per outcome plus seat fees. A custom build's model fees can be a few dollars to tens of dollars per 1,000 conversations, plus maintenance.",
    },
    {
      q: "Is it cheaper to build or buy a chatbot?",
      a: "Buying is cheaper to start and usually cheaper at low volume, because the vendor covers the interface, handoff, analytics and upkeep. Building costs more upfront, but model fees per conversation can be very low, so it can win at high volume or when you need integrations or data control that platforms don't offer. Compare total cost over a year, including maintenance time.",
    },
    {
      q: "Can I train ChatGPT on my company documents?",
      a: "For staff use, yes in the practical sense: ChatGPT Business lets you create and share custom GPTs within a workspace using your files. For customers, most bots don't retrain a model at all. They use retrieval, searching your documents and passing relevant passages to the model with each question. That's cheaper and easier to update than fine-tuning, since changing an answer means editing a document.",
    },
    {
      q: "What does per-resolution pricing mean?",
      a: "You pay each time the AI resolves a conversation, rather than per seat or per message. The catch is the definition. Intercom, for example, charges $0.99 per outcome, counting cases where the customer confirms the issue is resolved, doesn't ask for more help, or the AI completes a defined workflow, which its pricing page says includes handoffs. Always read how a vendor counts a resolution.",
    },
    {
      q: "Can an AI chatbot answer 'where is my order' on Shopify?",
      a: "Yes. Shopify Inbox, a free app, includes a default Track my order instant answer that uses the customer's order number and email to show order status. Helpdesk tools and custom bots can go further, pulling carrier or 3PL tracking events and handling returns logic, but they need integrations and testing. Start with the free option and add more only if customers still ask.",
    },
  ],
  internalLinks: [
    { label: "AI receptionist for law firms", to: "/blog/ai-receptionist-for-law-firms" },
    { label: "How to automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    {
      label: "Website not generating leads? A diagnostic",
      to: "/blog/website-not-generating-leads",
    },
    { label: "n8n automation cost", to: "/blog/n8n-automation-cost" },
    { label: "AI solutions", to: "/services/ai-solutions" },
  ],
  sources: [
    { label: "Anthropic: Claude pricing", href: "https://claude.com/pricing" },
    { label: "OpenAI: API pricing", href: "https://developers.openai.com/api/docs/pricing" },
    {
      label: "Shopify Help Center: Instant answers for Shopify Inbox",
      href: "https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/instant-answers",
    },
    { label: "Intercom: Pricing", href: "https://www.intercom.com/pricing" },
    { label: "Gorgias: Pricing", href: "https://www.gorgias.com/pricing" },
    {
      label: "NIST: AI Risk Management Framework",
      href: "https://www.nist.gov/itl/ai-risk-management-framework",
    },
  ],
  cta: {
    title: "Not sure whether to buy or build your chatbot?",
    body: "Send us a sample of recent customer questions and the tools you use. We'll tell you which approach fits, what it should cost to run each month, and what we'd test before launch.",
  },
};

export default post;
