import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Lead Follow Up That Does Not Depend on Memory: A Simple CRM Routine for Small Teams",
  metaTitle: "Lead Follow Up That Does Not Depend on Memory",
  metaDescription: "Leads are lost when follow up depends on memory. A simple CRM routine that assigns every enquiry, sets the next step, and keeps small teams consistent.",
  ogTitle: "Lead Follow Up That Does Not Depend on Memory: A Simple CRM Routine for Small Teams",
  ogDescription: "Leads are lost when follow up depends on memory. A simple CRM routine that assigns every enquiry, sets the next step, and keeps small teams consistent.",
  keywords: [
    "lead follow up",
    "CRM routine",
    "small team CRM",
    "lead management",
    "sales follow up process",
  ],
  keyTakeaways: [
    "Every enquiry needs one owner, one next step, and one date for that step.",
    "A small team needs a short, repeatable routine, not a complex system.",
    "Follow up should be prompt, personal, and focused on the next useful action.",
    "A weekly review catches stuck leads before they go cold.",
    "Good records make handover easy when someone is away or leaves the team.",
  ],
  faqs: [
    {
      q: "How many follow ups are enough?",
      a: "There is no single number that suits every business, but a useful pattern is a prompt first reply, a helpful second contact, and a third contact that offers a clear next step or a polite close.",
    },
    {
      q: "Do we need expensive CRM software for this routine?",
      a: "No. The routine matters more than the tool. A simple CRM that your team will actually open every day is better than a powerful system that nobody uses.",
    },
    {
      q: "What should we do when a lead goes quiet?",
      a: "Send one final message that is honest and helpful, offering a clear choice, such as a short call or a note that you will close the enquiry for now. Record the outcome.",
    },
    {
      q: "How do we handle leads when the owner is away?",
      a: "Before leave, the owner should hand over open leads with their next steps and dates, and a colleague should be named as cover.",
    },
  ],
  internalLinks: [
    {
      label: "AI Chat Support That Actually Helps: What to Automate, What to Keep Human",
      to: "/blog/ai-chat-support-automate-vs-keep-human",
    },
    {
      label: "How to Automate Lead Follow-Up and Routing for Small Businesses",
      to: "/blog/automate-lead-follow-up",
    },
  ],
  cta: {
    title: "Follow up still depends on memory?",
    body: "A CRM routine does not need to be complicated to work. One list, one owner per lead, one clear next step, and a short weekly review will protect more revenue than a complex system that nobody maintains. Pixel2Tech helps small teams set up automation and CRM routines that fit how they actually work. If follow up in your team still depends on memory, it may be time to build a routine that does the remembering for you.",
  },
  content: [
    {
      heading: "Put every enquiry in one place, on the same day",
      body: [
        "Most lost leads are not lost because a business is too slow or too expensive. They are lost because nobody followed up, or because the follow up happened too late, or because two people both assumed the other person had replied. Enquiries arrive by email, phone, social media, and website forms, and each one lives in a different place. A simple CRM routine fixes this without adding heavy process.It gives every lead an owner, a next step, and a date.",
        "The first rule is simple: if an enquiry is not in the CRM, it does not exist for follow up purposes. It does not matter whether it arrived by email, form, call, or message. The same day it arrives, record the contact details, the source, and a short note about what the person asked for. Make this a daily habit, not a weekly catch up task, because a lead recorded days late is already a lead at risk.",
      ],
    },
    {
      heading: "Assign one owner and one next step",
      body: [
        "Every lead needs a named owner. Shared ownership usually means no ownership, so avoid assigning a lead to a team or a group. Alongside the owner, record one clear next step, such as send a quote, book a call, or share examples of past work. Vague notes such as \"follow up soon\" do not help, because they do not say what to do or when to do it.A useful next step names the action and the date.",
      ],
    },
    {
      heading: "Follow up quickly, then follow up with purpose",
      body: [
        "Speed matters, but so does relevance. A quick first reply that confirms the enquiry, answers the main question, and states the next step is usually better than a long reply sent days later. After that first contact, each follow up should have a reason. Share something useful, answer an open question, or move the conversation forward with a clear suggestion. If a lead says the timing is not right, record that honestly and set a sensible date to check back.",
      ],
    },
    {
      heading: "Use a short daily and weekly routine",
      body: [
        "A CRM only works if it is checked regularly, and the routine should be short enough to survive busy weeks. Each morning, every team member checks their own list and completes the actions due that day. Once a week, the team reviews the full pipeline together, for a short time. The questions are simple: which leads moved forward, which leads are stuck, and which leads need a different next step.Stuck leads often need a decision, not another reminder.",
      ],
    },
    {
      heading: "Keep records short, honest, and useful",
      body: [
        "Good CRM records are brief and factual. Record what the customer asked for, what was promised, and what happened next. Avoid long opinionated notes, and avoid personal comments that would not be helpful if a colleague read them later. When records are clean, handover becomes simple. If the owner is on leave, another team member can pick up the conversation without asking the customer to repeat everything.",
      ],
    },
  ],
};

export default post satisfies PostBody;
