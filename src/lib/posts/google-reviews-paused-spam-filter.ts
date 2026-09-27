import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Google Reviews Paused? How to Ask Without Spam Flags",
  metaDescription:
    "Google now pauses new reviews when it detects a spike in spam reviews. Why genuine campaigns trip the filter and how to automate paced review requests.",
  keywords: [
    "google reviews paused",
    "google business profile spike in spam reviews",
    "google removed legitimate reviews",
    "how to ask for google reviews without getting flagged",
    "automated review request crm",
    "google review extortion scam",
    "google review policy incentives review gating",
  ],
  keyTakeaways: [
    "Since at least September 22, 2026, Google has emailed some Business Profile owners saying it detected a spike in spam reviews, removed them and paused new ratings, reviews and contributions, typically for a few days.",
    "Google hasn't published what counts as a spike. A one-day blast to your whole customer list produces the kind of sudden burst a spam system is built to catch, so it now carries real risk.",
    "If you got the email, stop outbound review asks until the pause lifts, then use the request-a-review link in the email for any genuine reviews you believe were removed by mistake.",
    "The safer setup is a CRM flow that asks each customer once, shortly after a completed job or attended appointment, with a daily cap and one follow-up. Never offer incentives or send only happy customers.",
    "For fake one-star attacks or extortion demands, don't pay or engage. Report reviews through the Reviews Management Tool and use Google's merchant extortion report form.",
  ],
  content: [
    {
      heading: "What does it mean when Google pauses your reviews?",
      definition:
        'Google reviews paused means Google has detected what it considers a spike in spam reviews on your Business Profile, removed the flagged reviews and temporarily stopped new ratings, reviews and contributions. Owners receive an email titled "Protecting your Business Profile from spam reviews." Google says the pause typically lifts within a few days.',
      body: [
        "Search Engine Roundtable reported the emails on September 22, 2026. The message tells owners that Google detected a spike in spam reviews, removed them so they don't affect the rating, and paused new contributions until the risk is mitigated. It adds that no action is required, and that if you believe legitimate reviews were removed by mistake, you can request a review.",
        "Two things are still unknown. Google hasn't published the threshold that triggers a pause, and as of this writing we haven't found a Google help page that documents the feature. What we do know comes from the email itself.",
        "For most businesses, a few days without new reviews is an inconvenience. For a dental practice or a roofing company that just launched a review push, it can wipe out the week the campaign was meant to pay off, and it may take genuine reviews with it.",
      ],
    },
    {
      heading: "Why can a genuine review campaign trigger the spam filter?",
      definition:
        "A spam filter sees patterns, not intent. A campaign that sends every past customer a request on the same day creates the same sudden burst of reviews that a paid review farm does.",
      body: [
        'Review spam has a shape: a profile that normally gets a handful of reviews a month suddenly gets dozens in a day or two. That\'s also what happens when an office manager exports 2,000 patient emails and sends one "Tell us how we did" message at 9 a.m. on a Tuesday.',
        "A commenter on the Search Engine Roundtable post raised the same worry about new locations that are collecting a steady stream of reviews. Google hasn't said how it separates the two, so the safest assumption is that volume and timing both matter. These are the campaign habits we'd retire first:",
      ],
      bullets: [
        "Bulk sends to an old list. Customers from three years ago who suddenly review on the same afternoon don't look like normal activity.",
        'One-day bursts. Launch-day pushes, "review week" contests for staff and holiday blasts all compress reviews into a narrow window.',
        "Reviews posted from one place. An in-office tablet or front-desk QR code at checkout means many reviews from the same device and network. Google's policy also says businesses shouldn't require or pressure people to leave reviews while on the premises.",
        "Staff quotas. Google's fake engagement policy specifically calls out merchants requesting that staff solicit a certain number of reviews.",
      ],
    },
    {
      heading: "What should you do if you got the Google spam review email?",
      definition:
        "Pause every outbound review request, let the profile settle, then ask Google to recheck any genuine reviews that disappeared.",
      body: [
        "Start by switching off anything that is still sending: automated review texts, email sequences, staff scripts and printed QR cards at the desk. Sending more requests into a paused profile gains nothing, and new activity during the pause is the last thing you want Google to see.",
        "Next, figure out which reviews were removed. Compare your current review list with a recent export or screenshot, or with your review-monitoring tool if you use one. If the removed reviews came from real customers, use the request-a-review option in Google's email and keep a list of those customers and their job or visit dates in case you need to show the reviews were genuine.",
        "Then look at what caused the spike. If it was your own campaign, the fix is the pacing covered below. If you didn't send anything and a wave of unfamiliar reviews appeared, treat it as an attack and go to the section on fake reviews.",
        "Don't ask customers whose reviews were removed to post again right away. A second burst of the same names is likely to look worse, not better.",
      ],
    },
    {
      heading: "Which review requests does Google allow, and what does it forbid?",
      definition:
        "Google lets you ask any customer for an honest review. It forbids incentives, asking only happy customers, staff quotas, reviews from insiders and pressure to review on site.",
      body: [
        "Google's own help page encourages businesses to remind customers to leave reviews and to share a review link or QR code. The limits are in the Maps user-generated content policy and the Business Profile help center, and US businesses also have the FTC's rule on fake reviews, announced August 14, 2024, which bans buying positive or negative reviews, undisclosed insider reviews and review suppression through threats or intimidation.",
      ],
      table: {
        caption: "Review requests: allowed vs not allowed",
        headers: ["Practice", "Allowed?", "Where it comes from"],
        rows: [
          [
            "Asking every customer for an honest review by text or email",
            "Yes",
            "Google encourages reminding customers and sharing a review link or QR code",
          ],
          [
            "Discounts, gift cards or raffle entries for leaving a review",
            "No",
            "Google calls incentives fake and misleading content; the FTC rule bans paying for reviews of a particular sentiment",
          ],
          [
            'Sending a "How did we do?" survey and forwarding only 5-star responders to Google (review gating)',
            "No",
            "Google's policy prohibits selectively soliciting positive reviews",
          ],
          [
            "Reviews from owners, employees or their relatives",
            "No",
            "Google prohibits conflict-of-interest content; the FTC rule targets undisclosed insider reviews",
          ],
          [
            "Staff targets for number of reviews collected",
            "No",
            "Google names this in its fake engagement policy",
          ],
          [
            "Asking customers to mention a service or keyword",
            "No",
            "Google says businesses shouldn't request that specific content be included",
          ],
          [
            "Threatening or pressuring reviewers to remove negative reviews",
            "No",
            "The FTC rule bans review suppression through legal threats or intimidation",
          ],
        ],
      },
    },
    {
      heading: "How do you build a paced review request flow?",
      definition:
        "A paced review flow asks each customer once, shortly after a real service event, and releases requests at a steady daily rate instead of in bursts.",
      body: [
        "The goal is for your review activity to track your actual business. If you complete eight jobs a day, roughly eight requests a day go out, and reviews trickle in at a rate that matches your calendar. Google hasn't published a safe number, so the cap is something you set from your own history, not a magic figure.",
        "Here's the flow we'd build in most CRMs:",
      ],
      bullets: [
        'Trigger on a real event. Use "job completed," "appointment attended" or "matter closed," not "contact created." No-shows and cancellations never enter the flow.',
        "Wait before sending. A delay of a few hours after a home-services job, or the next morning after a dental visit, gives the customer time to get home and still remember the visit.",
        "Queue, then release under a daily cap. Requests enter a queue and a scheduled step sends up to your cap each day, spread across business hours. If a busy Saturday creates 30 requests, some go out Sunday and Monday.",
        "One follow-up, then stop. A single reminder two or three days later on the other channel (email after SMS, or the reverse) is enough. Anyone who clicks the link or replies leaves the flow.",
        "Ask each person once. Store the request date on the contact and skip anyone asked in the past year, so repeat customers aren't asked after every visit.",
        "Keep a kill switch. One field or setting that pauses all sends lets you stop the flow in minutes if Google's email arrives.",
      ],
      table: {
        caption: "Before and after: moving from a blast to a paced flow",
        headers: ["Setting", "Blast campaign", "Paced CRM flow"],
        rows: [
          [
            "Who gets asked",
            "Everyone on the list",
            "Customers with a completed job or attended visit",
          ],
          ["When", "One day, same hour", "Hours to a day after the service"],
          ["Volume", "Whole list at once", "Daily cap based on normal job volume"],
          ["Follow-up", "Repeated blasts", "One reminder, then stop"],
          ["Pause control", "None", "One switch stops all sends"],
        ],
      },
      callout: {
        title: "From the studio",
        body: "Before we switch on any review automation, we pull the last 90 days of completed jobs or appointments and the reviews that arrived in the same window. That gives us the client's normal daily volume, and we set the cap close to it rather than guessing. We also check the message copy against Google's policy line by line: no discounts, no \"if you loved us\" filters, no requests to mention a service. For dental, med spa and legal clients, the message stays generic and never names a treatment or case.",
      },
    },
    {
      heading: "Which tools can run paced review requests?",
      definition:
        "Any system that knows when a job or appointment finished can trigger the request; the difference is how much control it gives you over timing and volume.",
      body: [
        "Start with the system that already records the service event. Adding a separate review app that works from a CSV upload recreates the batch-send problem.",
      ],
      subsections: [
        {
          heading: "HubSpot",
          body: [
            "A workflow can enroll a contact when a deal moves to a won or completed stage, wait, then send the review email. For daily caps, you'll usually need a queue property and a scheduled step, since a plain workflow sends as soon as contacts qualify.",
          ],
        },
        {
          heading: "HighLevel",
          body: [
            'HighLevel has a Review Request workflow action with SMS and email options, and its own help docs use "Appointment Completed" as the example trigger. Its reputation settings let you set an initial delay and a limited number of follow-ups.',
          ],
        },
        {
          heading: "Practice-management and field-service software",
          body: [
            "Many dental, med spa and home-services platforms include a built-in review request feature. It has the best trigger data, since it knows who actually showed up. Check whether it lets you set a delay and limit volume; some send to everyone as soon as a visit closes.",
          ],
        },
        {
          heading: "n8n or another workflow tool",
          body: [
            "When the service data sits in one system and messaging in another, a workflow tool like n8n can connect them: a webhook or poll picks up completed jobs, a queue table holds them, and a schedule trigger releases a capped batch each hour. We break down hosting and build costs in our post on [what n8n automation costs](/blog/n8n-automation-cost).",
          ],
        },
      ],
    },
    {
      heading: "How should you handle fake reviews and extortion attacks?",
      definition:
        "Report the reviews through Google's tools, report any demand for money through Google's merchant extortion form, and don't pay or respond to the attacker.",
      body: [
        "Google describes review extortion as a sudden increase in 1-star and 2-star reviews followed by someone demanding money, goods or services to remove them. Its guidance is direct: don't engage with or pay the people behind it, because paying can encourage more attempts and doesn't guarantee removal.",
        "The response has three parts:",
      ],
      bullets: [
        "Collect evidence. Screenshot every message demanding payment, including the date, time and sender, whether it came by email, WhatsApp, Telegram or another app. Save links to the suspicious reviews and note when they appeared.",
        "Report the demand. Google's help center links to a merchant extortion report form for these cases, and Google says it investigates and emails you the result.",
        'Report the reviews. Flag each one from your Business Profile or through the Reviews Management Tool, which shows a status such as "Decision pending" or "Report reviewed - no policy violation." If a review stays up, the tool allows a one-time appeal.',
      ],
      subsections: [
        {
          heading: "Don't bury the attack with a review drive",
          body: [
            "The instinct is to ask every happy customer to post at once to push the one-star reviews down. Under the new spike detection, that's the move most likely to pause your profile in the middle of an attack. Keep your paced flow running at its normal rate and let the reports work.",
            "Respond publicly only if you can do it briefly and calmly, and never confirm that a reviewer is a patient or client. Google also warns against reporting reviews just because you disagree with them, so reserve reports for clear policy violations.",
          ],
        },
      ],
    },
    {
      heading: "When should you bring in help to automate reviews safely?",
      definition:
        "Get help when your service data and messaging live in different systems, when you manage several locations, or when a pause or attack has already happened once.",
      body: [
        "A single-location business with a practice-management system that supports delays can often set this up in an afternoon. It gets harder when jobs close in a field-service app, contacts live in a CRM, texts go through a third tool, and every location has its own Business Profile, like the separate practitioner profiles we covered in our guide to [Google Business Profile practitioner listings](/blog/google-business-profile-practitioner-listings).",
        "Pixel2Tech builds this kind of automation for US dental practices, law firms, med spas and home-services companies through our [automation and CRM work](/services/automation-and-crm): triggers tied to completed jobs, queues with daily caps, one follow-up and a pause switch. The review request usually sits next to the rest of your post-job messaging, which we cover in [how to automate lead follow-up](/blog/automate-lead-follow-up). If reviews are part of a larger local ranking push, our SEO team handles the Business Profile side as well.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why did Google pause reviews on my Business Profile?",
      a: "Google emails owners when it detects a spike in spam reviews on a profile. It removes the reviews it flags and temporarily pauses new ratings, reviews and contributions until it considers the risk mitigated, which it says typically takes a few days. Google hasn't published what volume counts as a spike.",
    },
    {
      q: "How long does a Google review pause last?",
      a: "The email says the pause is typically lifted within a few days. Google hasn't published an exact duration. Stop outbound review requests during that time so new activity doesn't add to the pattern.",
    },
    {
      q: "Can I get legitimate reviews back after Google removes them?",
      a: "The email says that if you believe legitimate reviews were removed by mistake, you can request a review. Keep a record of which customers left them and when they were served, and don't ask those customers to post again straight away.",
    },
    {
      q: "Is it against Google's rules to ask customers for reviews?",
      a: "No. Google encourages businesses to remind customers to leave reviews and to share a review link or QR code. What it forbids is offering incentives, asking only satisfied customers, setting staff quotas, requesting specific content and pressuring people to review while on the premises.",
    },
    {
      q: "How many review requests can I send per day?",
      a: "Google hasn't published a limit. A sensible cap is close to your normal number of completed jobs or appointments per day, so review activity follows your real business instead of arriving in bursts.",
    },
    {
      q: "What should I do if someone demands money to remove fake reviews?",
      a: "Don't pay or engage. Screenshot the demands with dates and sender details, report the incident through Google's merchant extortion report form and report the reviews themselves through the Reviews Management Tool.",
    },
  ],
  sources: [
    {
      label:
        "Search Engine Roundtable: Google Business Profiles email notifications for detection of spike in spam reviews (September 22, 2026)",
      href: "https://www.seroundtable.com/google-business-profiles-spike-in-spam-reviews-42123.html",
    },
    {
      label: "Google: Maps user-generated content policy, prohibited and restricted content",
      href: "https://support.google.com/contributionpolicy/answer/7400114",
    },
    {
      label: "Google Business Profile Help: Tips to get more reviews",
      href: "https://support.google.com/business/answer/3474122",
    },
    {
      label: "Google Business Profile Help: Report inappropriate reviews",
      href: "https://support.google.com/business/answer/4596773",
    },
    {
      label: "Google Business Profile Help: Report negative review extortion scams",
      href: "https://support.google.com/business/answer/16404809",
    },
    {
      label: "FTC: Final rule banning fake reviews and testimonials (August 14, 2024)",
      href: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
    },
  ],
  internalLinks: [
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    { label: "SEO and search growth services", to: "/services/seo-and-search-growth" },
    { label: "How to automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    {
      label: "Google Business Profile practitioner listings",
      to: "/blog/google-business-profile-practitioner-listings",
    },
    { label: "What n8n automation costs", to: "/blog/n8n-automation-cost" },
  ],
  cta: {
    title: "Want review requests that never trip Google's spam filter?",
    body: "Tell us which CRM or practice software you use. Pixel2Tech will map a paced review flow triggered by completed jobs, with daily caps, one follow-up and a pause switch, and check the copy against Google's review policy.",
  },
};

export default post;
