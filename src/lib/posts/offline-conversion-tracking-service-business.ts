import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Offline Conversion Tracking for Service Businesses",
  metaDescription:
    "If deals close by phone or in your CRM, Google Ads and Meta optimize for form fills, not customers. Send qualified leads and closed deals back to both.",
  keywords: [
    "offline conversion tracking for service businesses",
    "enhanced conversions for leads",
    "meta conversions api for crm",
    "gclid crm tracking",
    "hubspot google ads offline conversions",
    "track phone call leads",
    "improve lead quality google ads",
  ],
  keyTakeaways: [
    "Google Ads and Meta optimize toward whatever you report as a conversion. Report every form fill and they'll find more form fills, including unqualified ones.",
    "Offline conversion tracking sends later outcomes (qualified, booked, closed) from your CRM back to the ad platform, matched by click ID, Meta lead ID or hashed email and phone.",
    "For Google Ads, Google now points to enhanced conversions for leads set up through Data Manager. From June 15, 2026, Google says these uploads move to the Data Manager API and are blocked in the Google Ads API.",
    "For Meta lead ads, store the Meta lead ID in your CRM and send stage changes through the Conversions API for CRM at least once a day. Meta asks for at least 200 leads a month.",
    "Define your lead stages first. The integration is the easy part; agreeing what 'qualified' means is the step teams tend to skip.",
  ],
  content: [
    {
      heading: "What is offline conversion tracking?",
      definition:
        "Offline conversion tracking sends events that happen after the click, such as a qualified lead, a booked consultation or a signed contract, from your CRM back to Google Ads or Meta. The platform matches each event to the ad interaction that started it and learns which searches and audiences produce customers, not just form fills.",
      body: [
        "Ad platforms are very good at finding more of whatever you tell them counts. If a service business reports every form submission as a conversion, automated bidding will look for people likely to submit forms. That includes students, job seekers, competitors checking prices and people outside your service area.",
        "The real outcomes happen later and somewhere else: on the phone, in a consultation, in your CRM. Unless those outcomes flow back, the platform never learns the difference between a lead that became a five-figure case and one that never answered the phone.",
        "You don't need a separate attribution platform for this. Google Ads, Meta and most CRMs already have the pieces. The work is capturing the right identifiers when the lead arrives and agreeing on stage definitions. If you're not yet sure your forms and calls are tracked at all, start with our [diagnostic for websites that aren't generating leads](/blog/website-not-generating-leads).",
      ],
    },
    {
      heading: "Define lead stages before you touch an integration",
      definition:
        "Pick three or four stages every lead passes through, write a one-sentence definition for each, and decide which one each ad platform should optimize toward.",
      body: [
        "Volume matters when you choose the primary stage. Meta's documentation for the [Conversions API for CRM](https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration/) asks advertisers to generate at least 200 leads a month, to optimize for a stage that happens within 28 days, and for that stage's conversion rate to fall between 1% and 40%. If your deals take three months to close, 'closed' can't be your Meta optimization stage, but 'qualified' might be.",
        "Put the definitions in writing and get sales to agree to them. Make the stage field required in the CRM, and have someone clean it up every week. Stages that nobody updates produce bidding that learns the wrong lesson.",
      ],
      table: {
        caption: "Example lead stages for a service business",
        headers: ["Stage", "Example definition", "Send to ad platforms?"],
        rows: [
          [
            "Raw lead",
            "Any form fill, lead ad submission, or call longer than your minimum length",
            "Yes, as a secondary conversion so you can still see volume",
          ],
          [
            "Qualified lead",
            "In your service area, needs a service you offer, and reachable",
            "Yes; a practical primary goal when volume is low",
          ],
          [
            "Booked",
            "Consultation, estimate or appointment scheduled",
            "Yes, if you have enough volume",
          ],
          [
            "Closed or won",
            "Signed contract or paid invoice, with its value",
            "Yes, with the conversion value",
          ],
        ],
      },
    },
    {
      heading: "Google Ads: GCLID, enhanced conversions for leads and CRM imports",
      body: [
        "Google Ads gives every ad click a unique Google Click ID, or GCLID. The classic method, described in [Google's help on offline conversion imports](https://support.google.com/google-ads/answer/2998031), is to save that ID with the lead, then send it back with the conversion name and time when the person converts offline, for example by signing a contract.",
        "Enhanced conversions for leads is Google's upgraded version. The Google tag captures the email address or phone number a person enters in your lead form and hashes it with SHA-256. Later you upload the converted leads with the same details, and Google matches them against signed-in Google accounts. Per [Google's setup guide](https://support.google.com/google-ads/answer/11021502), the tag also collects GCLIDs automatically, and Google recommends continuing to import any GCLIDs you already capture alongside the user data. Setup requires auto-tagging and accepting Google's customer data policies.",
        "Google also reports that advertisers who imported first-party data such as email and phone alongside GCLIDs saw a median 10% increase in conversions compared with standard offline imports. That's Google's figure about its own product; treat it as a reason to test, not a promise.",
        "Two changes matter in 2026. Google now calls Data Manager the fastest way to set up or upgrade to enhanced conversions for leads, with GCLIDs and user-provided data both usable as match keys. And starting June 15, 2026, Google says offline conversion and enhanced conversions for leads uploads move to the Data Manager API and are blocked in the Google Ads API, and developer tokens that sent no requests between January and June 2026 won't be allowlisted for legacy access. If a developer built your upload script on the old API, check it now.",
        "CRMs connect in different ways. HubSpot's [ad conversion events](https://knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account) sync lifecycle stage changes to Google Ads using enhanced conversions for leads. As of September 2026, HubSpot lists the feature on Marketing Hub Starter, Professional and Enterprise, with limits of 5, 50 and 100 ad conversion events respectively, so it isn't available on the free tools.",
        "If you connect a CRM through Data Manager instead, know how often it pulls data. Google's enhanced conversions help page says that for Salesforce and HubSpot, Data Manager imports the last 14 days of data on the first successful run, then imports the changes reported since the previous run each time after that. Stage changes that happen between runs arrive on the next one.",
      ],
    },
    {
      heading: "Meta: Conversions API for CRM and the lead ID",
      body: [
        "For Meta lead ads using Instant Forms, Meta's method is the Conversions API for CRM. You store Meta's lead ID with each lead, then send an event back each time the lead changes stage. Meta asks for uploads at least once a day. If the lead ID isn't available, Meta accepts customer details such as email or phone instead.",
        "The lead ID is a 15 to 17 digit number. Meta's [guide to finding the lead ID](https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration/how-to-find-the-lead-id/) lists where it lives: the lead webhook and Graph API, and the ID field in partner tools such as Zapier, LeadsBridge and Make. The same page says HubSpot Lead Sync, Zoho Social and Microsoft Dynamics 365 don't support this data, so those setups need a webhook or partner integration to capture the ID. Whatever tool you use, map the ID to a CRM field before you launch the next lead campaign.",
        "Old tutorials describe a separate Offline Conversions API built around offline event sets. Meta's developer documentation now calls that its legacy API for offline events and names the Conversions API as the recommended method. If a vendor or tutorial still tells you to create an offline event set, it's out of date.",
        "Leads from your own website rather than Instant Forms are a different case. Meta built its CRM integration around lead ads, so for website leads you'd send events through the standard Conversions API with the customer details you collected. Check Meta's current documentation for the event setup before you build.",
      ],
    },
    {
      heading: "Phone calls: count call leads, not clicks on your number",
      body: [
        "For many service businesses, the best leads call. A tap on a phone link only shows intent. The conversion is a real conversation with someone who needs what you sell.",
        "Google Ads can track calls from your website by showing a Google forwarding number that replaces your number on the page. It counts a call as a conversion when it lasts longer than a minimum length you set, and it offers a separate import for businesses that record call outcomes in another system ([Google Ads Help](https://support.google.com/google-ads/answer/6095883)).",
        "Call duration is a rough proxy. A three-minute call can be a wrong number with a chatty caller. The better pattern is to log every call as a lead in the CRM, have the person who answered mark it qualified or not, and let that stage flow back to the ad platforms like any other lead.",
        "Dedicated call tracking tools add recordings, transcripts and per-visitor numbers. They're worth considering when phone is your main channel. Before you buy one, check that it can pass the click ID or caller details into your CRM, or you'll have call data you can't connect to anything.",
      ],
    },
    {
      heading: "Wiring it together: native integrations vs n8n, Zapier or Make",
      definition:
        "Use your CRM's native integration when it covers both platforms and the stages you need. Add an automation layer only for the gaps.",
      body: [
        "A typical automation-layer flow looks like this: when a deal's stage changes in the CRM, the workflow reads the stored GCLID, Meta lead ID, email and phone. It normalizes and hashes them where required, then sends the event to each platform with the stage name, time and value. It logs every send and alerts a person when a platform rejects an event.",
        "If you go that route, budget for upkeep as well as the build. Our breakdown of [n8n automation costs](/blog/n8n-automation-cost) covers hosting and maintenance. The same capture work also speeds up your response to new leads, which we cover in [how to automate lead follow-up](/blog/automate-lead-follow-up).",
      ],
      table: {
        caption: "Ways to send CRM outcomes to Google Ads and Meta",
        headers: ["Option", "Good for", "Watch out for"],
        rows: [
          [
            "Native CRM integration (for example, HubSpot ad conversion events)",
            "Standard lifecycle stages sent to Google and Meta",
            "Plan-tier limits, and which identifiers the CRM actually stores",
          ],
          [
            "Google Ads Data Manager",
            "Imports from supported CRMs and data sources, with GCLID and user data as match keys",
            "Stage definitions still have to be right in your CRM",
          ],
          [
            "Automation tool (n8n, Zapier or Make)",
            "Missing identifiers, custom stages, several CRMs or call tools",
            "Error handling, credentials and monitoring become your job",
          ],
          [
            "Custom code against the APIs",
            "High volume or unusual data models",
            "Maintenance as APIs change, such as Google's June 2026 move to the Data Manager API",
          ],
        ],
      },
      callout: {
        title: "From the studio",
        body: "Before we wire anything, we export the last few months of leads and check what share of them have a GCLID, a Meta lead ID or a usable email and phone stored. If most don't, the first job is fixing capture on the forms and the lead sync, not building the integration. It's a spreadsheet exercise, and it stops anyone from building a pipeline with nothing to send.",
      },
    },
    {
      heading: "Privacy and data hashing basics",
      body: [
        "Enhanced conversions for leads and Meta's CRM integration both use hashed customer data. Hashing with SHA-256 turns an email address into a fixed string that the platform can compare with its own hashed records without receiving the plain address. Normalize before you hash: trim spaces and lowercase emails, and format phone numbers the same way every time, with the country code. Inconsistent formatting is a common reason matches fail.",
        "Hashing isn't anonymity. You're still sharing personal data with an ad platform, so your privacy policy should say so, and you should honor opt-outs. US state privacy laws differ, and regulated sectors have stricter limits. Healthcare providers in particular should get advice before sending anything that could reveal a patient relationship to an ad platform. This section is general information, not legal advice.",
      ],
    },
    {
      heading: "What to expect after you switch",
      body: [
        "Reported conversions will drop when you move the primary goal from raw leads to qualified leads, because you're counting fewer, better events. Warn whoever reads the dashboard before it happens, and keep raw leads visible as a secondary conversion.",
        "Offline conversions also arrive late. A lead that qualifies a week after the click is uploaded a week later, so the most recent days in your reports will look weak until the uploads catch up. Judge performance on periods that have had time to mature.",
        "Give automated bidding time to adjust after changing goals, and avoid stacking other big changes, such as new budgets or landing pages, on top in the same weeks. Otherwise you won't know which change did what.",
        "Once it's running, review three numbers monthly: the share of leads with a usable identifier, the upload match or error rate each platform reports, and cost per qualified lead by campaign.",
      ],
    },
    {
      heading: "A setup checklist for your first month",
      body: [
        "Work through these in order. The first three items decide whether the rest has anything useful to send.",
      ],
      bullets: [
        "Write definitions for raw, qualified, booked and closed, and make the stage field required in your CRM",
        "Confirm auto-tagging is on in Google Ads and that GCLIDs or hashed email and phone reach the CRM",
        "Store the Meta lead ID for every Instant Form lead",
        "Track website calls, and log every call as a lead",
        "Create a conversion action for each stage and choose one primary goal per platform",
        "Connect through a native integration or Data Manager first, then fill gaps with an automation tool",
        "Check any custom upload scripts against Google's move to the Data Manager API",
        "Set an alert for failed uploads and review match rates monthly",
      ],
      subsections: [
        {
          heading: "Getting help with the setup",
          body: [
            "Pixel2Tech sets up this kind of CRM-to-ads pipeline as part of our [automation and CRM service](/services/automation-and-crm). If you'd rather do it in-house, the checklist above is the order we'd follow. Pair it with a landing page built for tracking from the start, as covered in our guide to Google Ads landing pages for service businesses.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is offline conversion tracking in Google Ads?",
      a: "It's a way to tell Google Ads which clicks turned into real business after the lead left your website, such as a qualified call or a signed contract. You store the Google Click ID or the lead's email and phone in your CRM, then upload the outcome. Google matches it to the original click, so bidding can favor searches that produce customers rather than just form fills.",
    },
    {
      q: "How do I send CRM data back to Meta ads?",
      a: "For Instant Form lead ads, use Meta's Conversions API for CRM. Store the Meta lead ID with each lead, then send an event each time the lead changes stage, at least once a day. Many CRMs do this through a native integration or a partner tool such as Zapier or Make. Meta asks for at least 200 leads a month to optimize on a CRM stage.",
    },
    {
      q: "Do I need a paid attribution tool for offline conversions?",
      a: "Usually not. Google Ads, Meta and most CRMs already support offline conversions through native integrations, Google's Data Manager or Meta's Conversions API. Attribution platforms can add cross-channel reporting, but the core job is capturing click IDs or contact details on every lead, defining clear stages and sending them back. An automation tool can fill any gaps between your CRM and the platforms.",
    },
    {
      q: "What is Enhanced Conversions for Leads?",
      a: "It's Google's upgraded offline conversion import. The Google tag captures the email or phone number a person enters in your lead form, hashed with SHA-256. When that lead later converts, you upload the same hashed details, and Google matches them to signed-in accounts. The tag also collects GCLIDs, and Google recommends importing both. As of 2026, Google recommends setting it up through Data Manager.",
    },
    {
      q: "How do I track phone call leads from my website?",
      a: "In Google Ads, set up call conversions for website calls, which show a Google forwarding number on your site and count calls longer than a minimum length you choose. For better data, log each call as a lead in your CRM, have whoever answered mark it qualified or not, and send that stage back to the ad platforms as an offline conversion.",
    },
  ],
  internalLinks: [
    { label: "How to automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    { label: "n8n automation cost", to: "/blog/n8n-automation-cost" },
    {
      label: "Google Ads landing pages for service businesses",
      to: "/blog/google-ads-landing-page-service-business",
    },
    {
      label: "Website not generating leads? A diagnostic",
      to: "/blog/website-not-generating-leads",
    },
    { label: "Automation and CRM", to: "/services/automation-and-crm" },
  ],
  sources: [
    {
      label: "Google Ads Help: About offline conversion imports",
      href: "https://support.google.com/google-ads/answer/2998031",
    },
    {
      label: "Google Ads Help: Set up enhanced conversions for leads",
      href: "https://support.google.com/google-ads/answer/11021502",
    },
    {
      label: "Google Ads Help: Tracking calls to a phone number on a website",
      href: "https://support.google.com/google-ads/answer/6095883",
    },
    {
      label: "Meta for Developers: Conversions API for CRM",
      href: "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration/",
    },
    {
      label: "Meta for Developers: How to find the Meta lead ID",
      href: "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration/how-to-find-the-lead-id/",
    },
    {
      label: "HubSpot Knowledge Base: Create and sync ad conversion events with Google Ads",
      href: "https://knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account",
    },
  ],
  cta: {
    title: "Is your ad spend learning from customers or from form fills?",
    body: "Tell us which CRM and ad platforms you use. We'll map which identifiers you already capture, what's missing, and the simplest way to send qualified leads and closed deals back to Google and Meta.",
  },
};

export default post;
