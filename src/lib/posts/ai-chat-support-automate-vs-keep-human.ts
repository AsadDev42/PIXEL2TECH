import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "AI Chat Support That Actually Helps: What to Automate, What to Keep Human",
  metaTitle: "AI Chat Support: What to Automate, Keep Human",
  metaDescription: "AI chat support works when it answers the questions it can answer well and hands over the rest quickly. A practical split for small businesses: automate the routine, keep humans for the sensitive and the valuable.",
  ogTitle: "AI Chat Support That Actually Helps: What to Automate, What to Keep Human",
  ogDescription: "AI chat support works when it answers the questions it can answer well and hands over the rest quickly. A practical split for small businesses: automate the routine, keep humans for the sensitive and the valuable.",
  keywords: ["AI chat support", "AI chatbot", "customer support automation", "human handover", "service business AI"],
  keyTakeaways: [
    "Automate questions with one clear, stable answer, such as hours, prices and booking.",
    "Keep humans in charge of money, complaints, cancellations and upset customers.",
    "Design handover triggers before launch, and pass the full conversation to the human.",
    "Judge the chat by resolution, not by chat volume.",
    "Start narrow with five to ten frequent questions, then expand only when that scope resolves cleanly."
  ],
  internalLinks: [
    { label: "Missed Calls After Hours: A Simple Automation That Books the Callback", to: "/blog/missed-calls-after-hours-callback-automation" },
    { label: "A Custom Booking Platform vs Off the Shelf Software: A Decision Guide for Service Businesses", to: "/blog/custom-booking-platform-vs-off-the-shelf-software" }
  ],
  cta: {
    title: "AI chat support scoped to real questions",
    body: "Pixel2Tech builds AI solutions for service businesses, including chat support that is scoped to real questions and clean handovers. If your team spends its day answering the same ten questions, that is a good place to start, with humans kept exactly where they add the most value."
  },
  content: [
    {
      heading: "The test is not whether AI can answer, it is whether the answer helps",
      body: [
        "Many businesses add AI chat because it is available, not because they have decided what it should do. The result is familiar. A customer asks a simple question and gets a long, confident answer that does not solve the problem. Or a customer with a sensitive problem gets trapped in a loop and leaves angry.",
        "A better test is simple. After the chat, did the customer get closer to a booking, an answer or a human who could help? If the answer is no, the chat is decoration, however modern it looks."
      ]
    },
    {
      heading: "Automate the questions with one clear answer",
      body: [
        "Some questions have a single, stable answer. Opening hours, service areas, prices for standard services, delivery times, how to book, how to reschedule and what to bring to an appointment. These are ideal for automation. They are asked often, they rarely change without notice, and a wrong answer is easy to spot and fix.",
        "For these questions, keep answers short and sourced from your own pages. Link to the booking page or the price page instead of rewriting the same facts inside the chat. When a fact changes, update it in one place and let the chat use that place. A chat that invents prices or hours is worse than no chat at all."
      ]
    },
    {
      heading: "Keep humans for money, trust and emotion",
      body: [
        "Keep a human in charge of anything that involves money changing, a complaint, a cancellation with a fee, medical or legal advice, or a customer who is upset. These are not just harder questions. They are moments where trust is decided. A fast automated answer that feels dismissive can cost more than the time a human would have taken.",
        "The same applies to high value enquiries. A customer asking about a large project, a long contract or a custom service deserves a human conversation early. Routing that person to a chat loop signals that the business does not value the enquiry, even if that was never the intention."
      ]
    },
    {
      heading: "Design the handover before you launch",
      body: [
        "The handover is where most AI chat projects fail. Decide, before launch, what triggers a human. Useful triggers include the customer asking for a person, repeating a question, mentioning a complaint, refund or cancellation, asking about a price that is not standard, or staying in the chat beyond a short limit without a resolution.",
        "When a handover happens, pass the conversation with it. The human should see what was asked and what was already answered, so the customer does not have to start again. Also tell the customer what will happen next. A message such as 'I will pass this to our team, and they will reply within two working hours' is far better than silence.",
        "Set a response time you can keep, and publish it inside the chat. An AI chat that promises instant human help at midnight, when nobody is on duty, will break trust faster than a chat that is honest about hours."
      ]
    },
    {
      heading: "Measure resolution, not chat volume",
      body: [
        "Do not judge AI chat by how many chats it handled. Judge it by how many chats ended with a booking, a correct answer, or a clean handover that the human then resolved. Track three simple measures for the first month:",
        "1. How many chats ended without a handover, and were those customers satisfied?",
        "2. How many handovers happened, and how fast did a human reply?",
        "3. Which questions kept failing, and what answer or routing would fix them?",
        "Review the failed chats weekly at first. Most failures come from missing facts, unclear triggers or answers that are too long. Fixing those three things improves the chat more than adding new features."
      ]
    },
    {
      heading: "A safe starting scope",
      body: [
        "Start narrow. Automate five to ten frequent questions, add clear handover triggers, and keep a human review of new questions each week. Expand only when the narrow scope is resolving cleanly. A small chat that helps is better than a broad chat that frustrates.",
        "Pixel2Tech builds AI solutions for service businesses, including chat support that is scoped to real questions and clean handovers. If your team spends its day answering the same ten questions, that is a good place to start, with humans kept exactly where they add the most value."
      ]
    }
  ]
} satisfies PostBody;
export default post;
