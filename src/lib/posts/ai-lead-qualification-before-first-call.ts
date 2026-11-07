import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "AI Lead Qualification: What to Automate Before the First Human Call",
  metaTitle: "AI Lead Qualification Before the First Call",
  metaDescription: "AI can qualify leads before your team picks up the phone, if you automate the right questions. What to ask, what to score, and where a human must step in.",
  ogTitle: "AI Lead Qualification: What to Automate Before the First Human Call",
  ogDescription: "AI can qualify leads before your team picks up the phone, if you automate the right questions. What to ask, what to score, and where a human must step in.",
  keywords: [
    "AI lead qualification",
    "qualify leads with AI",
    "lead scoring automation",
    "sales automation",
    "Pixel2Tech AI solutions"
  ],
  keyTakeaways: [
    "Automate the questions that sort fit and intent, not the whole conversation.",
    "Ask only what changes the next step: budget range, timeline, service needed, and decision maker.",
    "Score simply, and let a human review borderline leads instead of rejecting them.",
    "Keep the experience short and honest: say what happens next, and when a human replies.",
    "Review the questions weekly at first, because the first version is never quite right."
  ],
  faqs: [
    {
      q: "Will AI qualification lose us good leads?",
      a: "It can, if it asks too much or rejects borderline leads automatically. Keep it short, score simply, and let a human review the middle band instead of rejecting it.",
    },
    {
      q: "How many questions should AI ask before a human steps in?",
      a: "Three to five, covering need, budget range, and timeline. More than that, and completion falls. The human call can cover the rest.",
    },
    {
      q: "Do we need a big CRM for this to work?",
      a: "No. A simple CRM or a well organised sheet can hold the score, the answers, and the next step. Move to a larger system only when volume makes the simple one painful.",
    },
    {
      q: "How do we know the qualification is working?",
      a: "Compare the share of first calls that turn into real opportunities before and after. If calls get shorter and better qualified, it is working. If good leads complain about the questions, shorten them.",
    },
  ],
  internalLinks: [
    {
      label: "Lead Scoring Without a Big CRM: A Simple System for Small Sales Teams",
      to: "/blog/lead-scoring-without-big-crm",
    },
    {
      label: "Lead Follow Up That Does Not Depend on Memory: A Simple CRM Routine for Small Teams",
      to: "/blog/lead-follow-up-crm-routine-small-teams",
    },
  ],
  cta: {
    title: "Qualify leads before the first call",
    body: "Pixel2Tech helps small teams set up AI lead qualification that fits their sales process, with clear questions, simple scoring, and a human handover built in from the start. If your team spends its first calls discovering basic fit, a short automated qualification is a practical place to save that time.",
  },
  content: [
    {
      heading: "Decide what a qualified lead means for you",
      body: [
        "Every sales team knows the cost of a first call with the wrong lead: twenty minutes spent discovering a budget, timeline, or need that does not fit, while a good lead waits. AI lead qualification moves that discovery earlier. It asks a few clear questions, checks the answers against what you actually sell, and hands the human team a lead that is already sorted. Done well, it shortens calls and raises their quality. Done badly, it feels like a barrier and loses good leads.",
        "Before any automation, write down what makes a lead worth a call. For most service businesses, that means three things: the need fits a service you sell, the budget or project size is in a workable range, and the timing is real, not someday. Add one more if it matters to you, such as location, decision maker, or a deadline.",
        "Keep the list short. Five criteria are enough, and every question you automate should map to one of them. If a question does not change whether the lead gets a call, a quote, or a nurture email, remove it. A short qualification that respects the lead's time will always outperform a long form that collects detail nobody uses."
      ],
    },
    {
      heading: "Automate the first three questions, not the whole call",
      body: [
        "The best place for AI is the first exchange: a chat on the website, a reply to a form, or a short message sequence after an enquiry. Let it ask the three questions that matter most, in plain language, and let it accept short, human answers rather than forcing a rigid menu. A lead who types a real sentence should get a sensible reply, not an error.",
        "The AI should also know when to stop. If the lead asks something unusual, gives an unclear answer, or shows urgency, the system should hand over to a human with the conversation attached. A qualification tool that tries to handle everything will eventually mishandle the lead that matters most. Automation should sort and prepare, not replace judgement."
      ],
    },
    {
      heading: "Score simply, and review the borderline cases",
      body: [
        "Give each answer a simple score, such as fit points for need and budget, and intent points for timeline and action taken. A lead who asked for a quote, named a budget range, and needs work this month scores higher than a lead who downloaded a guide with no timeline. Set clear bands: high scores go straight to the team, middle scores get a quick human check, and low scores go into a helpful nurture sequence.",
        "Never let a score reject a lead on its own. Scores are guides, and a low score with an unusual but real need deserves a human look. Review borderline leads each week, and adjust the rules when the same kind of lead keeps being scored wrong. The system should learn from the team's judgement, not override it."
      ],
    },
    {
      heading: "Tell the lead what happens next, and keep the promise",
      body: [
        "Qualification only feels fair when the lead knows what happens next. After the questions, say plainly what will follow: a call within one working day, a written quote by a stated time, or a short email with the next step. Then keep that promise, every time. A lead who was promised a fast reply and got silence will not trust the next message.",
        "Also be honest about AI. A short note that the first questions are automated, with a human reading every reply, is enough. Leads do not mind automation when it is quick and useful. They mind it when it wastes their time or pretends to be a person."
      ],
    },
    {
      heading: "Connect qualification to the CRM, or it will not stick",
      body: [
        "A qualification system that lives outside your CRM will be ignored within a month. The score, the answers, and the next step should land in the CRM with the lead, so the team sees the full picture before the first call. A simple setup is enough: a form or chat that writes to the CRM, a score field, and a task with a response time.",
        "Review the whole flow monthly. Check which questions leads skip, which answers predict real customers, and how fast qualified leads get a reply. Small fixes, such as rewording one question or lowering one threshold, usually improve results more than adding new features. Qualification is a habit supported by a tool, not a tool that replaces the habit."
      ],
    },
  ],
};

export default post satisfies PostBody;
