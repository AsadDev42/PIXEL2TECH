import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Lead Scoring Without a Big CRM: A Simple System for Small Sales Teams",
  metaTitle: "Lead Scoring Without a Big CRM: Simple System",
  metaDescription:
    "Small sales teams do not need expensive software to prioritise leads. A simple lead scoring system that sorts hot, warm and cold enquiries in plain terms.",
  ogTitle: "Lead Scoring Without a Big CRM: A Simple System for Small Sales Teams",
  ogDescription:
    "Small sales teams do not need expensive software to prioritise leads. A simple lead scoring system that sorts hot, warm and cold enquiries in plain terms.",
  keywords: [
    "lead scoring small teams",
    "lead scoring without CRM",
    "prioritise sales leads",
    "hot warm cold leads",
    "Pixel2Tech automation",
  ],
  keyTakeaways: [
    "Lead scoring is simply a way to rank enquiries, so the best ones get attention first.",
    "Score on fit and intent: who the lead is, and what they have actually done.",
    "Keep the system small: five or six scoring rules are enough to start.",
    "Review scores weekly, and adjust any rule that keeps ranking the wrong leads highly.",
    "Scoring only works if the team follows it: hot leads get a same day reply, every time.",
  ],
  faqs: [
    {
      q: "How many scoring rules should we start with?",
      a: "Five or six. Two or three for fit, and three for intent. Add more only after the first version has been reviewed for a month.",
    },
    {
      q: "What if a lead scores low but feels promising?",
      a: "Trust the conversation over the score in individual cases. Scoring guides priority, it does not replace judgement. Note the exception, and check later whether the rule needs changing.",
    },
    {
      q: "Should old leads lose points over time?",
      a: "Yes. Reduce intent points if a lead has not engaged for two or three weeks, so fresh, active leads rise to the top.",
    },
    {
      q: "Do we need a CRM to run lead scoring?",
      a: "No. A sheet works for a small team. Move to a CRM when lead volume, or the time spent scoring, makes the sheet painful.",
    },
  ],
  internalLinks: [
    {
      label: "Lead Follow Up That Does Not Depend on Memory: A Simple CRM Routine for Small Teams",
      to: "/blog/lead-follow-up-crm-routine-small-teams",
    },
    {
      label: "Missed Calls After Hours: A Simple Automation That Books the Callback",
      to: "/blog/missed-calls-after-hours-callback-automation",
    },
  ],
  cta: {
    title: "Answer the best leads first, every morning",
    body: "Pixel2Tech helps small teams set up simple CRM and automation systems, including lead scoring that fits a sheet or a basic CRM, with clear hot, warm and cold routines. If your team answers enquiries in the order they arrive, a small scoring system is a practical first improvement.",
  },
  content: [
    {
      heading: "Score fit first: is this lead right for you",
      body: [
        "Small sales teams often treat every enquiry the same, because they have no system for sorting them. The result is predictable: hot leads wait while the team answers polite enquiries that will never buy, and good opportunities cool off. Lead scoring fixes this, and it does not need a big CRM. A simple points system, run in a sheet or a basic CRM, can tell a small team who to call first, every morning.",
        "Fit asks whether this lead matches the customers you serve best. Useful fit signals for a service business include the type of business, the size of the job, the location or service area, and the budget range if it is known. A lead that matches your best customers scores higher than a lead outside your service area or below your minimum job size.",
        "Keep fit scoring simple. Give points for a match on each of two or three fit factors, and subtract points, or mark as unqualified, for a clear mismatch, such as a service you do not offer. The goal is not a perfect profile. It is a quick, honest answer to one question: is this the kind of customer we do well for.",
      ],
    },
    {
      heading: "Score intent second: what have they actually done",
      body: [
        "Intent asks what the lead has done, not what they say they might do. A visitor who requested a quote, booked a call, or used a quote calculator shows stronger intent than a visitor who downloaded a free guide. A lead who opened three emails and visited a pricing page shows more intent than a lead who filled in one form and disappeared.",
        "Give the highest points to actions that cost the lead effort or commitment: a booked call, a detailed enquiry, a reply to a follow up. Give fewer points to light actions, such as a single page visit or a social media follow. Intent points should also fade with time. A lead who was hot three weeks ago, with no reply since, should not still sit at the top of the list.",
      ],
    },
    {
      heading: "Build a simple hot, warm and cold routine",
      body: [
        "Turn the score into a daily routine the team can follow without thinking. For example, leads above a set threshold are hot, and get a same day call and a personal follow up. Mid range leads are warm, and get a helpful reply and a follow up within two working days. Low scoring leads are cold, and go into a simple nurture sequence, such as a useful email every few weeks, rather than taking sales time.",
        "Write the routine down, with one owner and one response time for each band. A scoring system that nobody follows is just a spreadsheet. A simple routine, followed every day, is what actually shortens response times for the leads that matter most.",
      ],
    },
    {
      heading: "Review and fix the rules every week",
      body: [
        "No first version of lead scoring is right. Review it weekly for the first month. Look at which leads became customers, and what they scored. Look at which high scoring leads went nowhere, and why. If one rule keeps pushing poor leads to the top, change it or remove it. If a signal you ignored, such as a repeat visit to a pricing page, keeps appearing in won deals, add it.",
        "Also ask the sales team what the scores miss. They talk to leads every day, and they will spot patterns a sheet cannot: a job type that always closes, a source that always wastes time, or a question that signals a serious buyer. Add one improvement at a time, and keep the system small enough that the team still trusts it.",
      ],
    },
    {
      heading: "Start with a sheet, upgrade only when it hurts",
      body: [
        "A sheet with columns for fit points, intent points, total score and next action is enough for most small teams. Add the score when a lead arrives, sort by score each morning, and work from the top. When the volume grows, or when scoring takes more time than calling, move the same rules into a basic CRM or automation tool. The rules stay the same. Only the tool changes.",
        "The benefit is not the software. It is the habit: every lead gets a fair, consistent rank, and the best leads get the fastest reply. That habit, kept for a month, usually shows up in faster replies, fewer lost hot leads, and a calmer sales day.",
      ],
    },
  ],
};

export default post satisfies PostBody;
