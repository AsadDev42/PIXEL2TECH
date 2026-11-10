import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "A Customer Portal That Customers Actually Use: What to Include in Version One",
  metaTitle: "A Customer Portal That Customers Actually Use",
  metaDescription:
    "A customer portal only earns its keep when customers return to it. What to include in version one, what to leave out, and how to launch without a long build.",
  ogTitle: "A Customer Portal That Customers Actually Use: What to Include in Version One",
  ogDescription:
    "A customer portal only earns its keep when customers return to it. What to include in version one, what to leave out, and how to launch without a long build.",
  keywords: [
    "customer portal",
    "customer portal features",
    "custom platforms",
    "customer self-service portal",
    "portal version one",
  ],
  keyTakeaways: [
    "A portal earns repeat visits by doing a small number of everyday tasks very well.",
    "Version one should focus on status, documents, payments, and asking for help.",
    "Clear sign in, simple navigation, and mobile friendly pages matter more than extra features.",
    "Launch with a small group of real customers, watch how they use it, and improve from there.",
    "A portal should reduce emails and calls, not simply move the same confusion online.",
  ],
  faqs: [
    {
      q: "How long should version one take to build?",
      a: "It depends on your systems, but a focused version one with sign in, status, documents, payments, and a help form is far quicker than a portal that tries to cover everything. Keeping the scope small is the main factor.",
    },
    {
      q: "Should customers be forced to use the portal?",
      a: "No. Share it at the right moment, for example when an order is confirmed or an invoice is sent, and explain the one task it makes easier.",
    },
    {
      q: "What if customers are not comfortable with technology?",
      a: "Keep pages simple, use large clear buttons, and test with a few real customers before a wider launch.",
    },
    {
      q: "How do we know if the portal is working?",
      a: "Watch repeat visits and completed tasks, and count repeat enquiries about the same topics. Repeat visits and fewer status requests show it is working.",
    },
    {
      q: "What features should a customer portal include in version one?",
      a: "Focus on the everyday tasks customers repeat: checking status, finding documents, paying invoices and asking for help. Add a simple, secure sign in and mobile friendly pages, and show order or project status in plain language. Leave live chat, chatbots, complex ticket categories, advanced reporting and complex permissions for later, unless customers have asked for them.",
    },
  ],
  internalLinks: [
    {
      label:
        "A Custom Booking Platform vs Off the Shelf Software: A Decision Guide for Service Businesses",
      to: "/blog/custom-booking-platform-vs-off-the-shelf-software",
    },
    {
      label: "Custom Web App Development Cost in 2026: US, UK and EU Rates",
      to: "/blog/custom-web-app-development-cost",
    },
  ],
  cta: {
    title: "Planning a customer portal?",
    body: "A customer portal does not need to be large to be useful. It needs to answer the questions customers ask most, in a place they can find easily, on any device. Pixel2Tech builds custom platforms and apps for businesses that want practical tools their customers will actually use,. If you are planning a portal, talk to the team about what version one should include for your customers.",
  },
  content: [
    {
      heading: "Start with the tasks customers repeat",
      body: [
        "A customer portal should save time for everyone. Customers should check an order, find a document, pay an invoice, or raise a request without sending another email. Staff should answer fewer repeat questions and spend more time on work that matters. Yet many portals are launched with good intentions and then quietly ignored. Customers try them once, cannot find what they need, and go back to email and phone calls. The problem is rarely the technology. It is usually a version one that tries to do too much, or misses the few tasks customers actually want. This guide sets out what belongs in version one and what can wait.",
        "Before choosing any feature, list the questions your team answers again and again. Common examples are: where is my order, when will it arrive, can I have a copy of my invoice, and how do I report a problem. These are the tasks your portal must handle first. If a proposed feature does not match a repeated customer task, it can wait. This keeps the build short and gives customers an immediate reason to return.",
      ],
    },
    {
      heading: "Make sign in simple and secure",
      body: [
        "Nothing discourages use faster than a difficult sign in. Customers should sign in with an email address and a password, recover access easily, and stay signed in on a trusted device where appropriate. Security still matters, so use strong password rules, protection against repeated failed attempts, and a clear way to report a suspicious account. The aim is a balance: secure enough to protect customer information, simple enough that nobody needs instructions to get in.",
      ],
    },
    {
      heading: "Show status clearly, in plain language",
      body: [
        "Customers open a portal because they want an answer, not a puzzle. Order status, project progress, appointment details, and payment status should be visible as soon as they sign in. Use plain words that a customer would use, and avoid internal codes or jargon. If a delivery is delayed, say so, and say what happens next. If a document is ready, show it where the customer expects to find it. When customers trust what they see, they stop chasing updates by email.",
      ],
    },
    {
      heading: "Keep documents and payments in one place",
      body: [
        "A portal becomes useful when it removes the search for paperwork. Invoices, quotes, contracts, and reports should be grouped by order, project, or date, and each file should have a clear name. Customers should download what they need without asking your team to resend it. Payments belong in the same place, with a clear view of what is due, what has been paid, and what is overdue.",
      ],
    },
    {
      heading: "Give help, and leave the rest for version two",
      body: [
        "Even a good portal cannot answer every question, so a clear help option is essential. A simple request form, with a few fields for the topic and a message, works well for version one. Show the customer that the request was received, and let them see replies and updates in the portal. Avoid adding live chat, chatbots, and complex ticket categories in version one unless customers have asked for them. The same restraint applies elsewhere: advanced reporting and complex permissions can wait until you know what customers actually use.",
      ],
    },
  ],
};

export default post satisfies PostBody;
