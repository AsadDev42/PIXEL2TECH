import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  h1: "Missed Calls After Hours: A Simple Automation That Books the Callback",
  metaTitle: "Missed Calls After Hours: Callback Automation",
  metaDescription:
    "Missed calls after hours are often lost enquiries. A simple callback automation captures the caller, promises a time and creates a task the team can follow.",
  ogTitle: "Missed Calls After Hours: A Simple Automation That Books the Callback",
  ogDescription:
    "Missed calls after hours are often lost enquiries, not just missed calls. A simple callback automation captures the caller, promises a time and creates a task the team can actually follow.",
  keywords: [
    "missed calls",
    "after hours callback",
    "callback automation",
    "service business",
    "CRM tasks",
    "automation",
  ],
  keyTakeaways: [
    "An unanswered after hours call is usually a lost enquiry, not just a missed call.",
    "A useful automation answers clearly, captures name, number and reason, creates one owned task, and confirms the callback time.",
    "Promise only a callback window the morning team can keep, including the next working day.",
    "Handle callback tasks first in the morning, in arrival order, and track called, booked and not reached.",
    "Keep it simple at first: one message, one capture form, one task list and one confirmation.",
  ],
  faqs: [
    {
      q: "What should an after hours message say to callers?",
      a: 'State your business hours and offer a callback instead of asking the caller to try again. A vague message such as "leave a message" helps nobody, while a clear one says when the next callback window opens. Promise a callback only, not a booking, quote or diagnosis, and let the callback itself do the selling.',
    },
    {
      q: "What information should a missed call automation capture?",
      a: "Name, number and reason for calling are enough. A long form after hours will lose the caller and can turn a warm enquiry cold. If the caller came from a website or an ad, keep that source with the record so the team has the context when they call back.",
    },
    {
      q: "How should missed calls on weekends and holidays be handled?",
      a: 'Promise the next working day, not "tomorrow". A Friday evening caller who is promised a Monday callback needs to hear Monday in the message. Set the next working day automatically if your system supports it, or use a simple rule the team can update for holidays, and keep the promised window realistic for the team that will make the calls.',
    },
    {
      q: "How do I know if an after hours callback automation is working?",
      a: "Track three numbers for a month: how many after hours callers were captured, how many were called inside the promised window, and how many became bookings. Those numbers show whether the automation is doing its job without a complicated dashboard. If the team cannot reach everyone inside the window, widen it or add a second callback slot.",
    },
    {
      q: "Where should missed call callback tasks go?",
      a: "Create one task in the system the team already uses, assigned to a named person or a small team, with a due time inside the promised callback window. Avoid sending callers to a general inbox with no owner, an email that can be buried or a note in a second app. Each morning, handle callback tasks before new work, in the order they arrived.",
    },
  ],
  internalLinks: [
    {
      label: "Automate Lead Follow-Up and Routing: A Small Business Guide",
      to: "/blog/automate-lead-follow-up",
    },
    {
      label: "Are Your Zapier, Make or n8n Automations Failing Silently?",
      to: "/blog/automations-failing-silently-audit",
    },
    {
      label:
        "A Custom Booking Platform vs Off the Shelf Software: A Decision Guide for Service Businesses",
      to: "/blog/custom-booking-platform-vs-off-the-shelf-software",
    },
  ],
  cta: {
    title: "Turn missed calls into owned callback tasks",
    body: "Pixel2Tech helps service businesses set up automation and CRM workflows that turn missed calls and form enquiries into owned tasks. If after hours calls are currently going unrecorded, a callback automation is a small project with a clear return to measure.",
  },
  content: [
    {
      heading: "A missed call is usually a lost enquiry",
      body: [
        "Most service businesses close at a set hour. Customers do not stop needing help at that hour. A person who calls after closing, hears ringing and gets no answer, will often call the next business on the list. That is not a phone problem. It is a lost enquiry that nobody recorded, so nobody can recover it.",
        "The fix does not need to be a 24 hour call centre. It needs to be a promise that is kept. Capture the caller, tell them exactly when you will call back, and create a task that someone owns in the morning.",
      ],
    },
    {
      heading: "What the automation should do, in order",
      body: [
        "A useful after hours automation has four steps, and each one matters.",
        'First, answer with a clear message. State the business hours, and offer a callback instead of asking the caller to try again. A vague message such as "leave a message" helps nobody. A clear message says when the next callback window opens.',
        "Second, capture the minimum details. Name, number and reason for calling are enough. A long form after hours will lose the caller. If the caller came from a website or ad, keep that source with the record so the team knows the context.",
        "Third, create one task in the system the team already uses. Not an email that can be buried, and not a note in a second app. One task, assigned to a named person or a small team, with a due time inside the promised callback window.",
        "Fourth, send the caller a confirmation. A short message that repeats the promised callback time builds trust. It also gives the caller a record, so they do not need to call again to check.",
      ],
    },
    {
      heading: "What to promise, and what not to promise",
      body: [
        'Promise only what the morning team can deliver. If callbacks happen between 9 and 11, say that. Do not promise "we will call you back shortly" when shortly means tomorrow. A specific window that is kept beats a fast promise that is broken.',
        'Also decide what happens on weekends and holidays. A Friday evening caller who is promised a Monday callback needs to hear Monday, not "tomorrow". Put the next working day in the message, automatically if your system supports it, or in a simple rule the team can update for holidays.',
        "Do not promise a booking, a quote or a diagnosis in the after hours message. Promise a callback, and let the callback do the selling. Overpromising in an automated message creates complaints that a human then has to undo.",
      ],
    },
    {
      heading: "The morning routine that makes it work",
      body: [
        "Automation fails when the morning routine is missing. Set one rule: callback tasks are handled before new work, in the order they arrived. Review them in a short daily check. Mark each one as called, booked, or not reached, with a second attempt time for the not reached group.",
        "Measure three numbers for a month. How many after hours callers were captured? How many were called inside the promised window? How many became bookings? Those three numbers tell you whether the automation is working, without any complicated dashboard.",
      ],
    },
    {
      heading: "Common mistakes to avoid",
      body: [
        "Sending the caller to a general inbox with no owner is the most common mistake. The message is technically captured, but nobody is responsible for it. Another mistake is asking for too much information up front, which turns a warm caller cold. A third is running the automation but never checking whether the promised window is realistic for the team size. If the team cannot call ten people between 9 and 11, widen the window or add a second callback slot.",
        "Keep the system simple at first. One message, one capture form, one task list, one confirmation. You can add routing by service or location later, once the basic promise is being kept every day.",
      ],
    },
  ],
};

export default post;
