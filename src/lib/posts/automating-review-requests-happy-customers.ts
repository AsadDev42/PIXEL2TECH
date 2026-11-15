import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Automating Review Requests: A Simple Workflow That Asks Every Happy Customer at the Right Time",
  metaTitle: "Automate Review Requests and Ask Every Happy Customer",
  metaDescription:
    "Happy customers rarely leave reviews on their own. A simple automated workflow asks at the right moment and turns good work into visible proof.",
  ogTitle:
    "Automating Review Requests: A Simple Workflow That Asks Every Happy Customer at the Right Time",
  ogDescription:
    "Happy customers rarely leave reviews on their own. A simple automated workflow asks at the right moment and turns good work into visible proof.",
  keywords: [
    "automate review requests",
    "review request workflow",
    "ask customers for reviews",
    "Google review automation",
    "Pixel2Tech automation CRM",
  ],
  keyTakeaways: [
    "Ask for a review when the good feeling is freshest, usually within a day of a completed job or a happy moment.",
    "Send the request by the channel the customer already uses, such as text message, email, or WhatsApp.",
    "Make leaving a review take under a minute, with one link that goes straight to your review page.",
    "Route unhappy customers to your team first, so you can fix the problem before it becomes a public review.",
    "Track who was asked, who replied, and who never responded, so no happy customer is missed twice.",
  ],
  faqs: [
    {
      q: "When is the best time to ask a customer for a review?",
      a: "The best time is shortly after a clear happy moment, usually within a few hours to one day of a completed job, a delivery, or a successful appointment. The experience is still fresh, and the customer is most willing to help. Asking weeks later feels like an afterthought, and asking before the work is finished feels premature.",
    },
    {
      q: "Should I ask for reviews by email, text, or WhatsApp?",
      a: "Use the channel your customers already use to talk to you. Text and WhatsApp messages are usually opened more often than email, so they often work better for review requests. Email can still work well for businesses where most communication happens by email. The key is to use a familiar sender and a direct link to your review page.",
    },
    {
      q: "Is it okay to offer a discount in exchange for a review?",
      a: "No, you should not offer a reward in exchange for a positive review. Most review platforms prohibit it, and it can damage trust if customers or readers discover it. You can ask every customer for an honest review, and you can make the process easy, but the review itself should always be the customer's own words.",
    },
    {
      q: "What should I do if a customer leaves a negative review?",
      a: "Reply promptly, politely, and in public, then take the detailed conversation private. Acknowledge the problem, apologise for the experience, and explain what you will do to fix it. A thoughtful reply shows future customers that you take feedback seriously. Never argue with a reviewer in public, and never ask a platform to remove a genuine review simply because it is negative.",
    },
  ],
  internalLinks: [
    {
      label: "A Shared Inbox Routine for Customer Messages",
      to: "/blog/shared-inbox-routine-customer-messages",
    },
    {
      label: "Google Business Profile Posts That Bring Local Enquiries",
      to: "/blog/google-business-profile-posts-local-enquiries",
    },
  ],
  cta: {
    title: "Set up a review request workflow in your CRM",
    body: "A simple automated workflow turns the good work you already do into reviews that future customers can see. Pick the right moment, use the channel your customers trust, make it take under a minute, and catch problems before they go public. If you would like help setting up a review request workflow inside your CRM, Pixel2Tech builds automation and CRM systems that ask every happy customer at the right time, without adding work for your team.",
  },
  content: [
    {
      heading: "Pick the moment, not just the message",
      body: [
        "Happy customers rarely leave reviews on their own, even when they loved the service. They are busy, they move on to the next thing, and the good feeling fades before they ever open a review page. An automated review request workflow fixes this by asking at the right moment, in the right place, with as little effort as possible. This guide shows how to build a simple workflow that asks every happy customer, catches problems early, and turns good work into visible proof that brings in the next customer.",
        "Timing matters more than wording. A review request sent weeks after the job feels like an afterthought, and a request sent before the work is finished feels premature. The best moment is shortly after a clear happy point: the job is done, the delivery arrived, the appointment went well, or the customer said thank you. That is when the experience is fresh and the customer is most willing to help.",
        "Map the happy moments in your own business. A cafe in Los Angeles might ask after a first visit that went well, or after a regular customer tries a new menu item. A law firm in New York might ask once a case closes and the client has the result in hand. A cleaning company might ask the evening after the first clean, when the customer walks into a fresh home. Each business has its own moment, and the workflow should trigger on that moment, not on a fixed calendar date.",
        "Keep the delay short. For most services, asking within a few hours to one day works best. If you wait a week, the customer has moved on. If you ask too soon, before the result is clear, the request can feel pushy. Test a short delay first, then adjust based on how many customers respond. A simple workflow in your CRM can trigger the message automatically when a job is marked complete, so nobody on your team has to remember to send it.",
      ],
    },
    {
      heading: "Choose the channel your customers already use",
      body: [
        "A review request only works if the customer actually sees it. Email works well for some businesses, but many customers ignore marketing email and never open it. Text messages and WhatsApp messages are opened far more often, because they arrive where the customer already talks to friends and family. Choose the channel your customers already use to talk to you, and send the request there.",
        'Keep the message short and personal. Use the customer\'s name, mention the specific service they received, and include one link that opens your review page directly. A message like "Hi Sarah, thanks for visiting us today. If you have a minute, we would love a quick review here" works better than a long formal email. The customer should be able to go from the message to the review form in one tap, without searching for your business name or creating an account first.',
        "Do not send the request from a number or address the customer does not recognise. If your team normally talks to customers on WhatsApp, send the request on WhatsApp. If bookings happen by email, send it by email. Consistency builds trust, and a familiar sender makes the request feel like a natural follow up rather than a marketing blast. For more on keeping customer messages organised, read [A Shared Inbox Routine](/blog/shared-inbox-routine-customer-messages).",
      ],
    },
    {
      heading: "Make leaving a review take under a minute",
      body: [
        "Every extra step loses reviewers. If a customer has to search for your business, pick the right listing, sign in, and then find the review box, most will give up. Your workflow should remove as much friction as possible. Use a direct link to your review page, not to your homepage. Test the link yourself on a phone before you send it to anyone.",
        'Tell the customer how long it will take. A line like "It takes less than a minute" sets the right expectation and makes the request feel small. You can also suggest what to write about, such as the service they received or the person who helped them, without telling them what to say. Never write the review for them, and never offer a reward in exchange for a positive review, as that can break platform rules and damage trust.',
        "If your business uses Google Business Profile, the direct review link is the most useful one to share. It sends the customer straight to the review form for your listing. Keep that link saved in your CRM so every automated message uses the same correct link. For ideas on what to do with the reviews once they arrive, read [Google Business Profile Posts That Bring Local Enquiries](/blog/google-business-profile-posts-local-enquiries), which shows how fresh reviews and posts work together to bring local enquiries.",
      ],
    },
    {
      heading: "Catch unhappy customers before they go public",
      body: [
        "Not every customer is happy, and an automated request sent to an unhappy customer can backfire. A good workflow asks a simple question first: how was your experience. If the answer is positive, the workflow sends the review link. If the answer is negative or neutral, the workflow routes the customer to your team instead, so you can listen, apologise, and fix the problem privately.",
        "This two step approach protects your reputation and improves your service at the same time. Customers who feel heard often become loyal, even after a problem. Customers who feel ignored are the ones who leave public reviews out of frustration. Build the feedback step into the workflow from the start, not as an afterthought. A short message with a simple rating or a yes or no question is enough to sort happy from unhappy.",
        "Make sure someone on your team actually reads the negative feedback and replies quickly. An automated workflow that collects complaints and ignores them is worse than no workflow at all. Set a rule that negative feedback gets a human reply within one working day. That reply is where you recover the relationship, and it is also where you learn what needs fixing in your service.",
      ],
    },
    {
      heading: "Track it, and follow up once, politely",
      body: [
        "A workflow without tracking is guesswork. Your CRM should record who was asked, when they were asked, and whether they responded. That record stops you from asking the same customer twice in a week, and it shows you which jobs produce the most reviews and which produce none. Over time, the pattern tells you where the service is strongest and where the ask needs better timing.",
        "One polite follow up is reasonable. If a customer does not respond to the first request, a single reminder a few days later is fine. After that, stop. Repeated reminders feel like pressure, and pressure produces either silence or a review written out of annoyance. Respect the customer's time, and let the happy customers who want to help do so on their own terms.",
        "Review the results monthly. Look at how many requests were sent, how many reviews came back, and what the reviews say. If the response rate is low, change one thing at a time: the timing, the channel, or the wording. Small changes add up. A steady flow of genuine reviews, even a few each month, builds a stronger public record than a sudden burst followed by silence.",
      ],
    },
  ],
};

export default post satisfies PostBody;
