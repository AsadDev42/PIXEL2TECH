import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Google Business Profile Suggested Edits: The 4-Day Rule",
  metaDescription:
    "Google gives Business Profile owners 4 days to reject suggested edits before they may go live. How to catch them and make your website back the right data.",
  keywords: [
    "google business profile suggested edits",
    "google business profile 4 days to reject edits",
    "google updates on business profile",
    "stop google changing business hours",
    "google business profile notifications setup",
    "localbusiness schema hours and phone",
    "google business profile audit checklist",
  ],
  keyTakeaways: [
    "Google's help document now says that once you're notified of a suggested edit, you have 4 days to accept or reject it. Search Engine Roundtable reported the update on September 23, 2026.",
    "If you don't respond, Google may publish the edit automatically when other public information, such as your business website, supports it. Your site is the evidence Google checks.",
    "Google also says it may apply some user edits without prior review, so a notification setup alone isn't enough. Check the profile for information shown in blue, which marks changes made by Google.",
    "The costly edits are hours, primary category, phone number, website URL and closure status. Every one of them should match your website, your LocalBusiness schema and your Business Profile exactly.",
    "Name one person per listing who acts on alerts within 4 days, route notifications to a shared inbox or CRM, and run a short audit every month.",
  ],
  content: [
    {
      heading: "What changed on September 23, 2026?",
      definition:
        "Google Business Profile suggested edits are changes that users or Google propose to your listing. Under Google's updated help document, reported September 23, 2026, an owner who is notified has 4 days to accept or reject a suggestion. After that, Google may publish it if other public information, such as your website, supports it.",
      body: [
        'Barry Schwartz at [Search Engine Roundtable](https://www.seroundtable.com/google-business-profiles-4-days-42139.html) spotted the change on September 23, 2026. Google\'s help page, titled "Understand Google updates on your Business Profile," now puts a number on a process that used to be vague.',
        "The page says that if a suggested edit needs your review, you may get an email or an in-product notification. Once notified, you have 4 days. If you don't respond, Google may automatically publish the update if it's supported by other publicly available information, and it names your business website as the example.",
        "Two more lines on the same page matter. Google says it may apply suggested user edits without prior review when those edits meet its policy guidelines. And inside the profile editor, information changed by Google is shown in blue. So some edits will never reach your inbox at all, and the only place you'll see them is the profile itself.",
        'The help document doesn\'t say "business days." Until Google says otherwise, plan as if a notification that lands on a Friday afternoon runs out on Tuesday.',
      ],
    },
    {
      heading: "Why is your website now the tie-breaker?",
      definition:
        "When nobody answers a suggested edit, Google looks for public information that supports it. Your website is the source it names, so whatever your site says can confirm a wrong edit as easily as a right one.",
      body: [
        "Google's help page lists where its updates come from: user reports, licensed content, your business website and other publicly available information. The new wording makes the website the tie-breaker when you stay silent.",
        "That's fine when your site is accurate. It's a problem when it isn't, and stale details are easy to miss on a site that has been edited for years. Common examples on law, dental and home-services sites:",
      ],
      bullets: [
        "The footer still lists last year's hours while the contact page shows the new ones.",
        "An old tracking number or a former receptionist's direct line sits on a landing page from a past ad campaign.",
        "A location page for an office you closed is still published and indexed.",
        "A holiday banner with reduced hours was never taken down.",
        "The schema markup in the site header still has the phone number and hours from the original build.",
      ],
      subsections: [
        {
          heading: "How a wrong edit gets confirmed",
          body: [
            "Say a patient suggests on Maps that your dental office closes at 4 pm on Fridays. Your profile says 5 pm. Your contact page says 5 pm, but the footer, left over from an older schedule, says 4 pm. Nobody answers the notification. After 4 days Google looks for support, finds 4 pm on your own site, and may publish it. Now the listing is wrong, and your website helped make it wrong.",
          ],
        },
      ],
    },
    {
      heading: "Which suggested edits cost the most?",
      definition:
        "The edits that hurt most are the ones that stop a customer from reaching you: hours, primary category, phone number, website URL, address and closure status.",
      body: [
        "Not every suggestion matters equally. A wrong attribute is annoying. A wrong phone number means calls go somewhere else. Here's how they rank, and what your website needs to show so the evidence points the right way.",
      ],
      table: {
        caption: "High-risk suggested edits and the website evidence that matters",
        headers: ["Field", "How it goes wrong", "What it costs", "What your website should show"],
        rows: [
          [
            "Hours",
            "A customer arrives after an early close or on a holiday and reports different hours",
            "People see you as closed during hours you're open, or show up when you're shut",
            "One set of hours, identical on every page and in openingHoursSpecification",
          ],
          [
            "Primary category",
            "A user suggests a broader or different category, such as a general category instead of a specific practice area",
            "You may stop showing for the searches that bring your best cases or patients",
            "Service pages and headings that clearly state what the business is",
          ],
          [
            "Phone number",
            "An old number, a call-tracking number or a single practitioner's line is suggested",
            "Calls go to a dead line, the wrong office or nobody at all",
            "The same local number on the contact page, header, footer and telephone property",
          ],
          [
            "Website URL",
            "The link is changed to a directory profile, an old domain or a different location's page",
            "Clicks leave your site, and your conversion tracking loses them",
            "A working location page at the URL you use on the profile",
          ],
          [
            "Permanently closed",
            "Someone reports you as closed after a move, a renovation or a location that shares your name",
            "Your listing can stop generating calls entirely until it's fixed",
            "Current address, hours and recent content that shows the business is operating",
          ],
          [
            "Address",
            "A suite number is dropped or an old address is suggested after a move",
            "Directions lead to the wrong door or the old office",
            "The full address, suite included, written the same way everywhere",
          ],
        ],
      },
    },
    {
      heading: "How do you make sure someone responds within 4 days?",
      definition:
        "Turn on the notifications that cover profile changes, send them to an inbox more than one person watches, and name one responder per listing with a backup for weekends and vacations.",
      body: [
        "Google's [notifications help page](https://support.google.com/business/answer/7198436?hl=en) lists five types: account updates, features and tips, customer activity, business info alerts, and bookings and requests. On a computer, open your Business Profile, choose More, then Notifications, and switch types on or off. In the Google Maps app, tap Business, then the notifications icon.",
        "Keep account updates and business info alerts on. Account updates cover changes to your Business Profile, and business info alerts remind you to keep details current. Google notes that even if you turn some notifications off, you may still get important updates.",
        "The weak point is usually where those emails land. Often they go to the personal Gmail of whoever created the profile years ago. Fix the routing:",
      ],
      bullets: [
        "Give each person who manages the listing their own Google Account. Google's [owners and managers page](https://support.google.com/business/answer/3403100) says each user needs their own account, and Google Groups can't be added as owners or managers.",
        "Set a mail filter on each of those accounts that forwards Business Profile emails to a shared inbox, such as a listings@ address the office manager and marketing lead both watch.",
        "If you run a CRM or help desk, have that forward create a task with a 3-day due date. That leaves a day of slack inside Google's 4-day window.",
        "Assign a backup responder for weekends and vacations, and write both names down where the team can find them.",
        "Add a weekly calendar check of the profile itself for blue text, because edits Google applies without review won't wait for your reply.",
      ],
      subsections: [
        {
          heading: 'What "acting" means',
          body: [
            "If the suggestion is right, accept it and update your website the same day so the two agree. If it's wrong, reject it, then check the site for anything that supports the wrong version and fix that too. Google's page says you can always update your Business Profile directly, so if a wrong edit has already gone live, correct the field and clean up the website evidence behind it.",
          ],
        },
      ],
    },
    {
      heading: "How do you align your website with your profile?",
      definition:
        "Pick one version of your name, address, phone, hours and URL for each location, then make the website text, the LocalBusiness schema and the Business Profile say exactly that.",
      body: [
        "Google's [guidelines for representing your business](https://support.google.com/business/answer/3038177) say your name should reflect your real-world name, as used consistently on your storefront, website, stationery and as known to customers. They also ask for regular customer-facing hours and a local phone number instead of a central call center number whenever possible. Build the website around the same facts.",
        "Then mark those facts up. Google's [LocalBusiness structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) requires name and address, and recommends telephone, url and openingHoursSpecification among others. A few details from that page are worth getting right:",
      ],
      bullets: [
        "The telephone should be the primary number customers call, with the country code and area code.",
        "The url should be the fully qualified, working URL of that specific location's page, not just the homepage when you have several offices.",
        "For a day you're closed, set both opens and closes to 00:00. For 24-hour service, use 00:00 to 23:59.",
        "For seasonal hours, add validFrom and validThrough dates so old hours don't linger in the markup.",
        "For departments with their own listings, nest them with the department property and name them in the {store name} {department name} format.",
      ],
      table: {
        caption: "Before and after: one location, three sources of truth",
        headers: ["Item", "Before (conflicting)", "After (aligned)"],
        rows: [
          [
            "Hours",
            "Contact page 8 to 5; footer 8 to 4; schema 9 to 5",
            "8 to 5 in all three places, with holiday hours in validFrom and validThrough",
          ],
          [
            "Phone",
            "Header has a call-tracking number; schema has the main line",
            "One local number in the text and the telephone property; tracking handled separately",
          ],
          [
            "Address",
            '"Ste 200" on one page, suite missing on another',
            "Full address with suite, written identically everywhere",
          ],
          [
            "URL",
            "Profile links to the homepage; location page exists but isn't used",
            "Profile and schema url both point to the working location page",
          ],
        ],
      },
      subsections: [
        {
          heading: "Service-area businesses",
          body: [
            "Google's guidelines say a service-area business should hide its address from customers. If you're a plumber or roofer who works at customers' homes, your website shouldn't publish a street address the profile hides, and the cities you list as served should match the service area on the profile. Our guide to [service area pages for contractors](/blog/service-area-pages-for-contractors) covers how to build those pages without creating doorway pages.",
          ],
        },
      ],
      callout: {
        title: "From the studio",
        body: "Keep one spreadsheet with a row per location: name, address, phone, hours, holiday hours, profile URL, location page URL and the person responsible. When anything changes, update the website and the schema first, then the Business Profile, on the same day. That order means that if a suggestion arrives in between, the public evidence already shows the new version. Before every holiday, update the sheet, the site and the profile together.",
      },
    },
    {
      heading: "Who should own which listing in a multi-location practice?",
      definition:
        "Every listing needs a named owner who controls access and a named responder who acts on alerts. In multi-location and multi-practitioner businesses those are often different people.",
      body: [
        "Google's roles are simple. There is one primary owner. Owners can add or remove users, manage profile information and delete the profile. Managers have mostly the same access but can't add or remove users or remove the profile. New owners and managers also wait 7 days before they can delete a profile, remove other users or transfer primary ownership, so add people before you need them.",
        "Law firms and medical or dental practices add a layer: individual attorneys, dentists and physicians can have their own practitioner listings. Suggested edits can land on those too, and the practitioner is rarely the person watching for them. Our guide to [practitioner listings for law and dental](/blog/google-business-profile-practitioner-listings) explains who qualifies and how to name them. For suggested edits, the rule is simpler: every practitioner listing needs a responder on the firm's side, not only the practitioner.",
      ],
      table: {
        caption: "Ownership map for a typical multi-location practice",
        headers: ["Listing", "Primary owner", "Day-to-day responder", "Website page it must match"],
        rows: [
          [
            "Main office",
            "Firm or practice account controlled by a partner or owner",
            "Office manager, with a marketing backup",
            "Main location page",
          ],
          [
            "Each additional office",
            "Same firm account",
            "That office's manager",
            "That office's location page",
          ],
          [
            "Practitioner listings",
            "Firm account, with the practitioner added as a manager if they want access",
            "Office manager for that practitioner's location",
            "The practitioner's bio page",
          ],
          [
            "Department listings",
            "Firm account",
            "Department lead",
            "The department page, named {practice name} {department name}",
          ],
        ],
      },
    },
    {
      heading: "What should a monthly profile audit include?",
      definition:
        "A monthly audit is a short check of each listing against your website and your source-of-truth sheet, looking for Google updates, drift and missed notifications.",
      body: [
        "Put it on the calendar for the first week of each month and give it to the same person each time. Check each listing for:",
      ],
      bullets: [
        "Any information shown in blue in the profile editor, which marks changes Google made.",
        "Hours, including any special or holiday hours coming up in the next 30 days.",
        "Primary and additional categories, compared with what you set last month.",
        "Phone number and website URL, and whether the URL loads the correct location page.",
        "Address, suite number and, for service-area businesses, the service area.",
        "The website: header, footer, contact page, location pages and schema markup, checked against the same sheet.",
        "People and access: remove former staff and confirm the backup responder still has access.",
        "Notification settings on each responder's account, and a test that the forwarding rule still works.",
      ],
    },
    {
      heading: "When should you hand GBP monitoring to a local SEO team?",
      body: [
        "If you have one location and an office manager who likes owning this, the routine above is enough. It's worth handing off when you have several locations or practitioner listings, when nobody can say who created the profile, when the website has more than a couple of conflicting details, or when calls have already dropped after a wrong edit. A listing problem often shows up first as fewer calls, and our guide to [why a website isn't generating leads](/blog/website-not-generating-leads) covers the other causes worth ruling out.",
        "Pixel2Tech's [SEO and search growth](/services/seo-and-search-growth) team manages Business Profiles, aligns location pages and LocalBusiness schema with each listing, and runs the monthly audit. Our [automation and CRM](/services/automation-and-crm) team can route profile notifications into your CRM or help desk as tasks with due dates, so a suggested edit gets an owner the day it arrives.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long do I have to reject a suggested edit on Google Business Profile?",
      a: "Google's help document says that once you're notified of a suggested edit, you have 4 days to accept or reject it. If you don't respond, Google may automatically publish the update if other publicly available information, such as your business website, supports it. Search Engine Roundtable reported the updated wording on September 23, 2026.",
    },
    {
      q: "Can Google change my Business Profile without telling me?",
      a: "Yes. Google's help page says it may apply suggested user edits to your business information without prior review in cases where the edits meet its policy guidelines. Changes made by Google appear in blue in the profile editor, so check your profile regularly rather than relying only on email notifications.",
    },
    {
      q: "Why does my website matter for Google Business Profile edits?",
      a: "Google names your business website as an example of the public information it uses to support an unanswered suggested edit. If your site shows old hours, an old phone number or a closed office, that content can support a wrong edit. Keep the website text and LocalBusiness schema identical to the profile.",
    },
    {
      q: "Who gets Google Business Profile notifications?",
      a: "Users on the profile can receive notifications by email, Search or Maps, and each user controls their own settings under More, then Notifications. Google Groups can't be added as owners or managers, so add named Google Accounts and forward their Business Profile emails to a shared inbox or CRM.",
    },
    {
      q: "What should I do if a wrong suggested edit has already gone live?",
      a: "Correct the field directly in your Business Profile; Google's help page says you can always update your profile to keep it accurate. Then find whatever on your website supports the wrong version, such as an old footer, schema markup or an outdated location page, and fix it so the public evidence matches.",
    },
  ],
  sources: [
    {
      label:
        "Search Engine Roundtable: Google Business Profiles have 4 days to reject edits (September 23, 2026)",
      href: "https://www.seroundtable.com/google-business-profiles-4-days-42139.html",
    },
    {
      label: "Google Business Profile Help: Understand Google updates on your Business Profile",
      href: "https://support.google.com/business/answer/3480441",
    },
    {
      label: "Google Business Profile Help: Manage your notifications",
      href: "https://support.google.com/business/answer/7198436?hl=en",
    },
    {
      label: "Google Business Profile Help: Manage your Business Profile owners and managers",
      href: "https://support.google.com/business/answer/3403100",
    },
    {
      label: "Google Business Profile Help: Guidelines for representing your business on Google",
      href: "https://support.google.com/business/answer/3038177",
    },
    {
      label: "Google Search Central: Local business (LocalBusiness) structured data",
      href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
    },
  ],
  internalLinks: [
    { label: "SEO and search growth services", to: "/services/seo-and-search-growth" },
    { label: "Automation and CRM services", to: "/services/automation-and-crm" },
    {
      label: "Google Business Profile practitioner listings for law and dental",
      to: "/blog/google-business-profile-practitioner-listings",
    },
    { label: "Why your website isn't generating leads", to: "/blog/website-not-generating-leads" },
    {
      label: "Service area pages for contractors",
      to: "/blog/service-area-pages-for-contractors",
    },
  ],
  cta: {
    title: "Find out what your website is telling Google about your hours",
    body: "Send us your website and your Business Profile links. We'll compare every location's name, address, phone, hours and schema against the listing, flag each conflict a suggested edit could lean on, and set up alert routing so someone answers within 4 days.",
  },
};

export default post;
