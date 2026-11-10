import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Re-engagement Emails: How to Win Back Subscribers Who Stopped Opening",
  metaTitle: "Re-engagement Emails: Win Back Subscribers",
  metaDescription: "Subscribers who stopped opening are not lost yet. A simple re-engagement email sequence that reminds them why they signed up, asks what they want, and cleans the list honestly.",
  ogTitle: "Re-engagement Emails: How to Win Back Subscribers Who Stopped Opening",
  ogDescription: "Subscribers who stopped opening are not lost yet. A simple re-engagement email sequence that reminds them why they signed up, asks what they want, and cleans the list honestly.",
  keywords: [
    "re-engagement emails",
    "win back email subscribers",
    "re-engagement email sequence",
    "email list cleaning",
    "Pixel2Tech email marketing"
  ],
  keyTakeaways: [
    "A subscriber who has not opened in three to six months is a re-engagement candidate, not a lost cause.",
    "Start with value, not a discount. Remind them what they signed up for, and give them something useful.",
    "Ask what they want to hear about. A reply or a click tells you more than an open rate.",
    "Send three emails, spaced a few days apart, then stop. More than that is pestering, not re-engagement.",
    "Remove people who do not respond. A clean list delivers better and sells better than a large silent one."
  ],
  faqs: [
    {
      q: "How long should we wait before re-engaging someone?",
      a: "Three to six months without an open is a practical trigger for most service businesses. Shorter than that, and you are chasing people who are simply busy. Longer, and the subscriber has usually forgotten you entirely.",
    },
    {
      q: "Should we offer a discount to win them back?",
      a: "Only if the subscriber is a past customer and the offer is relevant to them. For a general list, lead with useful content. A discount brings back people who want a deal, not people who want your emails.",
    },
    {
      q: "How many emails should the sequence have?",
      a: "Three is enough: value, preference, goodbye. Space them three to five days apart. More emails do not win more people back, they just train the subscriber to ignore you.",
    },
    {
      q: "What if someone re-engages and then goes quiet again?",
      a: "Let them go the second time. Run the sequence once per subscriber per year at most. Repeated re-engagement campaigns to the same people are a sign the regular emails need attention, not the subscriber.",
    },
  ],
  internalLinks: [
    {
      label: "A Welcome Email Series That Turns New Subscribers Into Enquiries",
      to: "/blog/welcome-email-series-subscribers-enquiries",
    },
    {
      label: "A Monthly Email Newsletter Service Businesses Can Actually Keep Up With",
      to: "/blog/monthly-email-newsletter-service-businesses",
    },
  ],
  cta: {
    title: "Win back subscribers who stopped opening",
    body: "Pixel2Tech helps service businesses build email systems that keep subscribers engaged, from welcome sequences to re-engagement and regular newsletters. If your list is large and quiet, an email review is a practical place to start.",
  },
  content: [
    {
      heading: "Find the right people to re-engage",
      body: [
        "Every email list has a quiet half: subscribers who signed up, read a few emails, then stopped opening. They are not necessarily gone. They may be busy, their inbox may be full, or your emails may have drifted away from what they wanted. A short re-engagement sequence finds out which it is, wins back the ones who still care, and removes the rest cleanly. That leaves a smaller list that actually opens, clicks, and buys.",
        "Do not send a re-engagement sequence to the whole list. Segment the subscribers who have not opened an email in three to six months, but who did open or click in the past. These are people who once cared. Subscribers who never opened anything are a different problem, and brand new subscribers should never be in this sequence.",
        "Check the segment size before you start. If it is a large share of the list, the problem may be the emails themselves: too frequent, too sales heavy, or off topic. A re-engagement sequence can win some of them back, but it cannot fix a content problem. If the segment is small, the sequence is a simple tidy up that keeps the list healthy. For the emails that keep new subscribers engaged from the start, read [A Welcome Email Series That Turns New Subscribers Into Enquiries](/blog/welcome-email-series-subscribers-enquiries)."
      ],
    },
    {
      heading: "Lead with value, not a discount",
      body: [
        "The first email should remind the subscriber why they signed up, and give them something useful right away. A short guide, a checklist, a useful answer to a common question, or a summary of the best recent content. The message is: this is what you have been missing, and it is still worth your time. A discount in the first email trains subscribers to ignore you until the next offer, and it brings back bargain hunters rather than real customers.",
        "Keep the email short and personal in tone. One idea, one useful thing, one clear next step. Mention that you noticed they have been away, without guilt or pressure. \"We have missed you\" is enough. A long apology, or a list of everything you have sent, reads as desperate and gets deleted."
      ],
    },
    {
      heading: "Ask them what they want, and make it easy to answer",
      body: [
        "The second email should ask a question, and make answering it take one click. Offer two or three topics and let the subscriber pick the one they want more of. A click on a topic is a strong signal: it tells you what to send them, and it tells your email system that this subscriber is active again. A reply works too, and replies help deliverability, but a click is easier for most people.",
        "This is also the email to offer a preference choice: fewer emails, a different topic, or a pause. Some subscribers stop opening because the emails come too often, not because they dislike them. Giving them control wins back people who would otherwise unsubscribe or stay silent. Record their choice and honour it. Nothing kills re-engagement faster than asking a preference and ignoring it."
      ],
    },
    {
      heading: "Say goodbye clearly, then remove them",
      body: [
        "The third email is the goodbye. Say plainly that this is the last email unless they click to stay, and give them one clear button to do it. Some subscribers will click, and those are the ones worth keeping. The rest will not respond, and that silence is your answer. Remove them from the regular list, or move them to a very occasional list if you prefer to keep the door open.",
        "Removing subscribers feels wrong, but a silent subscriber costs you. They drag down open rates, which hurts deliverability, which means your real readers see fewer of your emails. A list of one thousand people who open is worth far more than a list of five thousand who do not. Clean the list every few months, and the emails you send will reach the people who want them."
      ],
    },
    {
      heading: "Measure what the sequence actually won back",
      body: [
        "When the sequence ends, count what it did. How many subscribers clicked to stay? How many replied with a preference? How many were removed? Those three numbers tell you whether the list is healthier now, and whether the regular emails need work. If very few people stayed, the problem is probably the regular content, not the subscribers.",
        "Watch the next regular email after the cleanup. Open and click rates should rise, because the list is smaller and more interested. If they do not rise, the subject lines or the content still need attention. Keep a short note of each cleanup: the date, how many were removed, and how many stayed. Over a year, that note shows whether the list is growing with people who actually read, which is the only growth that matters."
      ],
    },
  ],
};

export default post satisfies PostBody;
