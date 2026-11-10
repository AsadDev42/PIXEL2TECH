import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime",
  metaTitle: "WordPress Monthly Maintenance Tasks That Prevent Downtime",
  metaDescription:
    "A practical monthly WordPress maintenance routine for business owners: updates, backups, security checks, speed checks and content checks that prevent downtime.",
  ogTitle: "WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime",
  ogDescription:
    "A practical monthly WordPress maintenance routine for business owners: updates, backups, security checks, speed checks and content checks that prevent downtime.",
  keywords: [
    "WordPress maintenance",
    "WordPress backups",
    "WordPress updates",
    "WordPress security",
    "website speed",
    "monthly maintenance",
  ],
  keyTakeaways: [
    "A quiet website can hide small problems until the site goes down or an enquiry never arrives.",
    "Test backups, including files and database, before updating anything.",
    "Update in order: backup, core, theme, then plugins, and test key pages and forms afterwards.",
    "Review users, security reports and login activity, and remove unused accounts, plugins and themes.",
    "Check speed and mobile display, and fix broken links and outdated content.",
    "Keep a one page monthly log, with a fixed day each month for the routine.",
  ],
  faqs: [
    {
      q: "What WordPress maintenance tasks should be done every month?",
      a: "A simple monthly WordPress maintenance routine covers seven steps: confirm a recent, tested backup; update core, theme and plugins, then test key pages and forms; remove unused plugins, themes and user accounts; review security reports and login activity; check speed and mobile display; fix broken links and outdated content; and write a short note in a maintenance log.",
    },
    {
      q: "In what order should WordPress updates be done?",
      a: "Back up first, then update WordPress core, then the theme, then plugins, one group at a time. Updating everything at once makes it hard to tell which change caused a problem. Afterwards, check the home page, a service page, the contact page and any checkout or booking step, and submit a test enquiry through your own form.",
    },
    {
      q: "How do I know if my WordPress backups actually work?",
      a: "Check that a recent backup exists and that it includes both the files and the database. If backups run automatically, read the reports, because a failed backup job that nobody reads is the same as no backup at all. Once in a while, test the restore process on a staging copy rather than on the live site.",
    },
    {
      q: "Should I delete inactive WordPress plugins and themes?",
      a: "Yes. Unused plugins and themes are not harmless: they still need updates and still add risk, even when inactive. If a plugin has not been used in months, delete it rather than leaving it installed. The same monthly review is a good time to remove user accounts for people who no longer work with you.",
    },
    {
      q: "Why keep a WordPress maintenance log?",
      a: "A one page WordPress maintenance log records the date, what was updated, what was tested and anything that needs attention next month. If a problem appears later, the log shows what changed and when. If someone else takes over the site, it shows them the routine. Pair it with a fixed day each month for the checks.",
    },
  ],
  internalLinks: [
    {
      label: "WordPress vs Webflow vs Squarespace for a Service Business Site",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
    {
      label: "WordPress 7.1.2 Security Fix: What Business Owners Must Do Now",
      to: "/blog/wordpress-7-1-2-security-update",
    },
  ],
  cta: {
    title: "Let Pixel2Tech look after your WordPress site",
    body: "Pixel2Tech looks after WordPress and Shopify websites for service businesses and online stores, including updates, backups, security checks and ongoing fixes. If your site has not had a proper maintenance check in a while, a monthly routine is the simplest place to start.",
  },
  content: [
    {
      heading: "Why a quiet website still needs attention",
      body: [
        "A WordPress website can look fine while small problems build up underneath it. A plugin falls behind on updates. A backup stops running. An unused user account stays active. A form stops sending messages. None of these show up on the home page, until the day the site goes down or an enquiry never arrives.",
        "Monthly maintenance is not about constant rebuilding. It is a short, regular routine that catches small issues while they are still easy to fix.",
      ],
    },
    {
      heading: "Start with a backup you have actually tested",
      body: [
        "Backups only count if you can restore from them. Before you update anything, check that a recent backup exists and that it includes both the files and the database. Once in a while, test the restore process on a staging copy, not on the live site.",
        "If your backup is automatic, check the reports. Automatic does not mean working. A failed backup job that nobody reads is the same as no backup at all.",
      ],
    },
    {
      heading: "Update in the right order, and check afterwards",
      body: [
        "A sensible update order is: backup first, then WordPress core, then the theme, then plugins, one group at a time. Updating everything at once makes it hard to know which change caused a problem.",
        "After updates, check the pages that matter most: the home page, a service page, the contact page, and the checkout or booking step if you have one. Submit a test enquiry through your own form. Many site owners discover broken forms months after the break, because nobody tested them.",
        "Remove plugins and themes you no longer use. Unused code is not harmless. It still needs updates, and it still adds risk. If a plugin has not been used in months, delete it rather than leaving it installed and inactive.",
      ],
    },
    {
      heading: "Review users, comments and security basics",
      body: [
        "Once a month, review who can log in to your site. Remove accounts for people who no longer work with you, and check that administrators are only the people who truly need that level of access. Strong, unique passwords and two factor authentication for admin accounts are basic steps that prevent the most common break ins.",
        "Check for spam comments and unwanted user registrations. A sudden rise in either can be an early sign that a form or setting needs attention. Also confirm that your security plugin or service is active and reporting, rather than assuming it is running.",
      ],
    },
    {
      heading: "Check speed and mobile display, not just desktop",
      body: [
        "Speed and layout problems often appear gradually, as new plugins and images are added. Once a month, open your main pages on a phone, not just on a desktop computer. Check that buttons are easy to tap, text is readable without zooming, and images load in a sensible order.",
        "Look at your largest images too. A single uncompressed image uploaded by a team member can slow down a whole page. Resizing and compressing images before upload is a small habit that keeps the site fast over time.",
      ],
    },
    {
      heading: "Keep content and links current",
      body: [
        "Broken links and outdated information quietly damage trust. Check that your contact details, opening hours, service descriptions and pricing notes still match reality. Update team pages when people join or leave, and remove seasonal offers that have ended.",
        "A quick link check once a month is enough for most small sites. Fix broken internal links first, since those are pages you control. Then check important external links, such as booking tools and social profiles.",
      ],
    },
    {
      heading: "Write down what you did",
      body: [
        "A one page maintenance log saves time and arguments. Note the date, what was updated, what was tested, and anything that needs attention next month. If a problem appears later, the log shows what changed and when. If someone else takes over the site, the log shows them the routine.",
        "A simple monthly checklist could look like this:",
        "1. Confirm a recent, tested backup",
        "2. Update core, theme and plugins, then test key pages and forms",
        "3. Remove unused plugins, themes and user accounts",
        "4. Review security reports and login activity",
        "5. Check speed and mobile display on main pages",
        "6. Fix broken links and outdated content",
        "7. Write a short note in the maintenance log",
        "Set a fixed day each month for this routine. The businesses that suffer downtime are rarely the ones with the worst websites. They are the ones with no routine at all.",
        "Pixel2Tech looks after WordPress and Shopify websites for service businesses and online stores, including updates, backups, security checks and ongoing fixes. If your site has not had a proper maintenance check in a while, a monthly routine is the simplest place to start.",
      ],
    },
  ],
} satisfies PostBody;

export default post;
