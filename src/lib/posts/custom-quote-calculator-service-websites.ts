import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "A Custom Quote Calculator for Service Websites: What to Build in Version One",
  metaTitle: "Custom Quote Calculator for Service Websites",
  metaDescription:
    "A quote calculator turns vague price enquiries into qualified leads. What to build in version one, what to leave out, and how to keep quotes honest.",
  ogTitle: "A Custom Quote Calculator for Service Websites: What to Build in Version One",
  ogDescription:
    "A quote calculator turns vague price enquiries into qualified leads. What to build in version one, what to leave out, and how to keep quotes honest.",
  keywords: [
    "custom quote calculator",
    "quote calculator service website",
    "service business pricing",
    "online quote tool",
    "Pixel2Tech custom platforms",
  ],
  keyTakeaways: [
    "A quote calculator works when it gives a realistic range, not a false exact price.",
    "Version one should cover your most common job types, with a handful of clear choices.",
    "Every result should lead to a next step, such as a call, a form, or a detailed quote request.",
    "Honest disclaimers protect trust: state what the estimate excludes and when a human will confirm it.",
    "Track which options people choose, because that data shows what customers actually want.",
  ],
  faqs: [
    {
      q: "How accurate should a version one calculator be?",
      a: "Accurate as a range. It should reflect your real starting prices and the factors that move them, with a human confirmation step before any final quote.",
    },
    {
      q: "Will a calculator reduce phone enquiries?",
      a: "It usually changes them, not removes them. Calls become shorter and better qualified, because the caller already knows the likely range.",
    },
    {
      q: "What if our prices vary too much for a calculator?",
      a: 'Use bands and a "request a tailored quote" path for unusual jobs. A calculator can still help the common cases, which are usually most enquiries.',
    },
    {
      q: "How often should calculator prices be reviewed?",
      a: "Monthly, by one named owner, and immediately after any price change. An out of date calculator damages trust faster than having no calculator.",
    },
    {
      q: "What questions should a custom quote calculator ask?",
      a: "Only the questions that genuinely change the price. For most service businesses that means four to six choices, such as the type of job, size or quantity, level of service, timing and location or delivery method. Write each choice in the customer's words rather than internal package codes, add short explanations where a choice could be misunderstood, and set sensible defaults.",
    },
  ],
  internalLinks: [
    {
      label:
        "A Custom Booking Platform vs Off the Shelf Software: A Decision Guide for Service Businesses",
      to: "/blog/custom-booking-platform-vs-off-the-shelf-software",
    },
    {
      label: "A Customer Portal That Customers Actually Use: What to Include in Version One",
      to: "/blog/customer-portal-customers-actually-use",
    },
  ],
  cta: {
    title: "Give every enquiry an honest price range",
    body: "Pixel2Tech builds custom quote calculators and client tools for service businesses, starting with a small version one that covers the jobs you actually sell. If price questions are slowing your enquiries, a calculator that gives an honest range and a clear next step is a practical place to start.",
  },
  content: [
    {
      heading: "Why a range beats an exact price",
      body: [
        "Service businesses lose a surprising number of enquiries to one question: how much will it cost. A visitor who cannot get even a rough answer will often leave and ask a competitor instead. A custom quote calculator answers that question on your website, in minutes, and turns a vague enquiry into a lead with real details attached. The trick is to build a small, honest version first, and expand only when it proves useful.",
        "Most services cannot be priced exactly from a web form. Materials, scope, timing and location all change the final figure. A calculator that pretends otherwise will produce quotes your team cannot honour, and disappointed customers. A range, such as a starting price plus the factors that move it up, is both more honest and more useful.",
        "Present the range clearly, and explain it in one sentence. For example, a basic package may sit in one band, while added options move the price into the next band. When the visitor understands why the price moves, they trust the number more, and they arrive on the call with realistic expectations. That alone saves your sales team from repeating the same pricing conversation.",
      ],
    },
    {
      heading: "Choose the fewest choices that still change the price",
      body: [
        "Version one should ask only the questions that genuinely change the price. For most service businesses, that means four to six choices: the type of job, the size or quantity, the level of service, the timing, and the location or delivery method. Each extra question reduces completion, so every field must earn its place.",
        "Write each choice in the customer's words, not your internal terms. A customer does not know your package codes, but they do know whether they need a basic, standard or full service. Offer short explanations beside any choice that could be misunderstood, and set sensible defaults so a visitor can get a result quickly, then refine it if they wish.",
      ],
    },
    {
      heading: "Design the result page as a next step, not a dead end",
      body: [
        "The result page is where most calculators fail. They show a number and stop. A good result page shows the range, a short summary of the choices behind it, what is included and what is not, and one clear next step. That next step might be booking a call, requesting a confirmed quote, or sending the estimate to their email.",
        "Capture the lead at this point, while interest is highest. A short form asking for a name, email and the estimate reference is enough. Do not ask for a full brief at this stage. The calculator has already collected the useful detail, so pass those choices to your team or your CRM with the enquiry, and let the human conversation handle the rest.",
      ],
    },
    {
      heading: "Keep the calculator honest and easy to maintain",
      body: [
        "A calculator is only as good as its prices. Build it so prices, options and ranges can be updated without a developer each time. A simple settings page or a connected sheet, with one owner responsible for checking prices each month, prevents the common problem of a calculator quoting last year's rates.",
        "Also add a clear disclaimer near the result: this is an estimate, a final quote follows a short conversation or a site check, and certain items may be excluded. Honesty here does not reduce enquiries. It increases the quality of enquiries, because visitors who continue already understand the range and the next step.",
      ],
    },
    {
      heading: "What to leave out of version one",
      body: [
        "Leave out account logins, online payment for complex jobs, and dozens of optional extras. Leave out any option you cannot price confidently. A version one calculator that covers your three most common jobs well will outperform a large calculator that covers everything badly.",
        "Measure version one for a month before expanding. Track how many visitors start the calculator, how many reach a result, and how many request a confirmed quote. If one job type dominates, improve that path first. If visitors drop out at one question, rewrite or remove that question. Expansion should follow real use, not a wish list.",
      ],
    },
  ],
};

export default post satisfies PostBody;
