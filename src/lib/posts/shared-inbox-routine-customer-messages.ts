import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "A Shared Inbox Routine That Stops Customer Messages Falling Through the Cracks",
  metaTitle: "Shared Inbox Routine That Stops Missed Messages",
  metaDescription: "A simple shared inbox routine keeps every customer message answered and nothing lost. Set it up in four steps and stop replies falling through the cracks.",
  ogTitle: "A Shared Inbox Routine That Stops Customer Messages Falling Through the Cracks",
  ogDescription: "A simple shared inbox routine keeps every customer message answered and nothing lost. Set it up in four steps and stop replies falling through the cracks.",
  keywords: [
    "shared inbox routine",
    "customer messages falling through cracks",
    "shared inbox for small teams",
    "answer customer messages faster",
    "Pixel2Tech automation CRM"
  ],
  keyTakeaways: [
    "One shared inbox beats five personal inboxes, because every message is visible to the whole team.",
    "Every message needs an owner and a deadline, or it will sit unread while everyone assumes someone else will answer.",
    "Answer in order of urgency, not arrival, so a booking enquiry never waits behind a newsletter reply.",
    "A short first reply is better than a slow perfect reply, because it tells the customer they have been heard.",
    "Review the inbox twice a day, morning and afternoon, and close the day with zero unassigned messages."
  ],
  faqs: [
    {
      q: "What is a shared inbox?",
      a: "A shared inbox is one mailbox or message view that the whole team can see and work from. Instead of customer messages landing in personal inboxes, they arrive in one place where they can be assigned, labelled, and tracked until they are answered.",
    },
    {
      q: "How fast should a customer message be answered?",
      a: "Aim for a first reply within four working hours, and an owner assigned within one working hour. The first reply can be short. It only needs to confirm the message arrived and say when the full answer will come.",
    },
    {
      q: "Does a shared inbox work for a very small team?",
      a: "Yes, it works best for small teams, because it removes the guesswork about who should reply. Even a team of two benefits from one visible list, clear ownership, and a daily close.",
    },
    {
      q: "What should we do with messages that need a long answer?",
      a: "Reply first with a short acknowledgement and a time for the full answer. Then move the message to in progress with a note about what is needed. The customer stays informed, and the message stays visible until it is done.",
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
    title: "Stop customer messages falling through the cracks",
    body: "Pixel2Tech sets up shared inbox and CRM routines that keep every customer message visible, owned, and answered on time. If messages are slipping through the cracks in your business, an automation and CRM review is a practical place to start.",
  },
  content: [
    {
      heading: "One inbox, not five personal ones",
      body: [
        "A customer message that gets no reply is not just a missed email. It is a lost job, a bad review, or a client who quietly goes to a competitor. Most messages do not fall through the cracks because the team is lazy. They fall through because nobody knows who should answer, nobody knows whether it has been answered, and nobody checks again. A shared inbox routine fixes all three problems with a simple daily habit, and it works for a team of two just as well as a team of twenty.",
        "The first problem is scattered messages. When enquiries arrive in the inbox of whoever happens to be listed on the website, or in the personal inbox of the person who last spoke to the customer, nobody can see the full picture. A message sent to a staff member who is on holiday sits for days. A message sent to a general address gets answered twice, or not at all.",
        "A shared inbox solves this by putting every customer message in one place that the whole team can see. Email, website forms, and social messages can all route into the same view, so nothing hides in a private inbox. Assign one person to own the inbox each day, and make that ownership visible, so the team knows who is watching it. For a routine that pairs well with this, read [Lead Follow-Up CRM Routine for Small Teams](/blog/lead-follow-up-crm-routine-small-teams)."
      ],
    },
    {
      heading: "Give every message an owner and a deadline",
      body: [
        "Visibility alone is not enough. A message that everyone can see is still a message that nobody owns. The routine needs a simple rule: every new message gets an owner within one working hour, and every owner gives a first reply within four working hours. Write the rule down, share it with the team, and check it every day.",
        "Use three labels and nothing more. \"New\" means it has arrived and needs an owner. \"In progress\" means someone has replied and is waiting on the customer or on information. \"Done\" means the customer has what they need. Anything still marked new at the end of the day is the manager's job to chase, not the team's job to forget. Keep the system simple enough that a new hire understands it in ten minutes."
      ],
    },
    {
      heading: "Answer by urgency, not by arrival",
      body: [
        "Most teams answer messages in the order they arrived. That feels fair, but it is slow where speed matters most. A booking enquiry from a customer ready to buy should never wait behind a routine question that can wait until tomorrow. Sort new messages by what they need, not when they arrived.",
        "A simple order works well. First, customers with an active problem or an urgent booking. Second, new enquiries and quote requests. Third, general questions and feedback. This order takes thirty seconds to apply and saves hours of lost business. After hours messages need the same care, so a callback plan matters too, as covered in [Missed Calls and After Hours Callback Automation](/blog/missed-calls-after-hours-callback-automation)."
      ],
    },
    {
      heading: "A short first reply beats a slow perfect reply",
      body: [
        "Customers do not expect a full answer in five minutes. They expect to know they have been heard. A short first reply does that job: confirm you have the message, say what happens next, and give a time for the full answer. That one message turns a worried customer into a patient one.",
        "Keep a small set of first reply templates for the common cases: a quote request, a booking question, a problem report, and a general enquiry. Templates are not scripts to copy blindly. They are starting points that the team personalises with the customer's name and one line about their actual question. The goal is speed with a human touch, not speed without one."
      ],
    },
    {
      heading: "Close the day with zero unassigned messages",
      body: [
        "The routine ends the same way every day. In the last fifteen minutes, the inbox owner checks three things: nothing is still marked new, every in progress message has a next step written on it, and every customer who was promised a reply has received one. If something cannot be finished today, the customer gets a short message saying when it will be done.",
        "This daily close takes minutes and prevents the slow build up that turns into a crisis. Once a week, spend twenty minutes looking at the pattern: which questions keep repeating, which messages take longest, and which answers could become a template or a page on the website. A shared inbox is not just a queue to empty. It is the clearest record of what your customers actually need."
      ],
    },
  ],
};

export default post satisfies PostBody;
