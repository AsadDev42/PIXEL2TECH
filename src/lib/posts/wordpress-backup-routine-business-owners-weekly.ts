import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "A WordPress Backup Routine Every Business Owner Should Run Weekly",
  metaTitle: "A Weekly WordPress Backup Routine for Business Owners",
  metaDescription:
    "A weekly WordPress backup routine takes minutes and saves weeks of work. Here is what to save, where to keep it, and how to test that it works.",
  ogTitle: "A WordPress Backup Routine Every Business Owner Should Run Weekly",
  ogDescription:
    "A weekly WordPress backup routine takes minutes and saves weeks of work. Here is what to save, where to keep it, and how to test that it works.",
  keywords: [
    "WordPress backup routine weekly",
    "how to back up WordPress site",
    "WordPress backup plugin business owners",
    "test WordPress restore staging",
    "Pixel2Tech WordPress maintenance",
  ],
  keyTakeaways: [
    "Back up both your files and your database, because a website needs both to come back to life.",
    "Keep at least one copy away from your web server, such as in cloud storage or a separate drive.",
    "Run the backup weekly, and always before updates, design changes, or new plugins.",
    "Test a restore at least once, so you know the backup works before you need it.",
    "Write the routine down and assign one person to own it, so it happens even when the week is busy.",
  ],
  faqs: [
    {
      q: "How often should I back up my WordPress site?",
      a: "Weekly is right for most business websites that change a few times a month. If your site changes daily, with new posts, orders, or bookings, back up daily instead. Always take an extra backup before any update, new plugin, or design change, whatever your regular schedule is. The right frequency is the one that limits how much work you can afford to lose.",
    },
    {
      q: "What is the difference between a backup and a restore point from my host?",
      a: "A hosting restore point is a snapshot your host keeps, and it can be useful, but you do not control it, and it may only go back a short time. Your own backup is a copy you control, stored separately, with a schedule you choose. Keep both if you can, but never rely on the host alone, because host snapshots can be lost, limited, or unavailable when you need them most.",
    },
    {
      q: "Do I need a backup plugin, or can my host handle it?",
      a: "Many hosts offer backups, and some include them in the plan, but a dedicated backup plugin gives you more control over what is saved, how often, and where it is stored. The best setup for most owners is both: the host backup as a safety net, and a plugin backup stored in your own cloud account. Check what your host actually includes before you assume you are covered.",
    },
    {
      q: "How do I know my backup actually works?",
      a: "The only way to know is to test a restore on a staging copy of your site and check that the pages, images, and forms all work. Check also that the backup file exists each week, that its date is recent, and that its size is close to the size of your site. If the backup is much smaller than the site, or if it is missing, something is wrong and needs fixing before you need it.",
    },
  ],
  internalLinks: [
    {
      label: "WordPress Security Basics for Business Owners",
      to: "/blog/wordpress-security-basics-business-owners",
    },
    {
      label: "WordPress Plugin Updates Without Breaking Your Site",
      to: "/blog/wordpress-plugin-updates-safe-routine",
    },
  ],
  cta: {
    title: "Set up backups, security and safe updates",
    body: "A weekly backup routine is one of the cheapest forms of insurance a business owner can have. It takes minutes to run, it costs little, and it turns a disaster into a short interruption. Set it up this week, test a restore, and write the routine down. If you would like help setting up backups, security, and safe updates for your WordPress site, Pixel2Tech builds and maintains WordPress websites for service businesses, with routines that keep your site safe without adding work to your week.",
  },
  content: [
    {
      heading: "What a WordPress backup must include",
      body: [
        "A weekly WordPress backup routine takes minutes and saves weeks of work when something goes wrong. A failed update, a hacked plugin, or a simple mistake can take a website offline in seconds, and without a recent backup the recovery becomes a rebuild. This guide shows what to save, where to keep it, and how to test that your backup actually works, so a bad day never becomes a lost website.",
        "A complete WordPress backup has two parts: the files and the database. The files include your themes, your plugins, your uploads, and the WordPress core files. The database holds your posts, your pages, your comments, your settings, and your user accounts. Without the files, your site has no design and no media. Without the database, it has no content. Both are needed, and a backup that only saves one of them is not a real backup.",
        "Most backup plugins save both parts together, which is the simplest approach for a business owner. Check the plugin settings to confirm that both are included, and that the backup covers the uploads folder where your images live. Some setups exclude large folders by default, which can leave your media behind. A quick check of the backup size against the size of your site will usually reveal a problem: if the backup is far smaller than the site, something is missing.",
        "Keep a note of what your backup contains and where it lives. If you ever need to hand the recovery to a developer, that note saves time and avoids guesswork. It should list the plugin used, the schedule, the storage location, and the login details for the storage account, kept securely. A backup you cannot find or cannot open is no better than no backup at all.",
      ],
    },
    {
      heading: "Where to keep your backups",
      body: [
        "Never keep your only backup on the same server as your website. If the server fails, is hacked, or is suspended, the backup goes down with the site. The rule is simple: keep at least one copy somewhere else. Cloud storage is a good option for most small businesses, because it is automatic, it keeps older copies, and it is separate from your hosting account.",
        "A common setup is to keep recent backups in cloud storage and an occasional copy on a separate drive or a different cloud account. For example, a business might keep the last four weekly backups in the cloud, and download a monthly copy to an external drive kept in the office. This gives you several chances to recover, even if one copy is damaged or out of date. Keep the number of copies manageable. Four to eight recent backups is usually enough, and older copies can be deleted on a schedule.",
        "Check who can access the backups. The storage account should be protected with a strong password and two factor authentication, and only the people who need access should have it. A backup contains a full copy of your website, including customer data, so treat it with the same care as the live site. For more on keeping the site itself secure, read [WordPress Security Basics for Business Owners](/blog/wordpress-security-basics-business-owners).",
      ],
    },
    {
      heading: "Run it weekly, and always before a change",
      body: [
        "A weekly schedule works for most business websites. It is frequent enough that you never lose more than a week's work, and it is light enough that it does not become a burden. Pick a quiet time, such as early on a Monday morning or on a Sunday evening, and set the backup to run automatically. An automated schedule is better than a manual one, because it happens even when the week is busy.",
        "Always run an extra backup before making a change. Before updating WordPress, a theme, or a plugin, before adding a new plugin, and before editing the design or the content in bulk, take a fresh backup first. If the change breaks something, you can restore in minutes instead of spending hours undoing it. This habit is the single most valuable part of the routine, and it costs only a few minutes each time.",
        "Make sure the backup actually ran. An automated schedule that fails silently is a common problem, and owners often discover it only when they need the backup. Check once a week that a new backup file exists, that its date is recent, and that its size looks normal. Many plugins send an email when a backup completes or fails, so make sure those emails reach someone who reads them. For a safe way to handle the updates themselves, read [WordPress Plugin Updates Without Breaking Your Site](/blog/wordpress-plugin-updates-safe-routine).",
      ],
    },
    {
      heading: "Test a restore before you need one",
      body: [
        "A backup you have never tested is a hope, not a plan. Testing a restore sounds technical, but it is straightforward with most backup plugins. The usual method is to restore the backup to a staging copy of the site, a private test version that visitors cannot see, and check that the pages, images, and forms all work. Your hosting provider or your developer can set up staging if you do not already have it.",
        "Test at least once, soon after you set up the routine, and again after any major change to the site. During the test, check the homepage, a few key pages, the contact form, and the images. If anything is missing, find out why before you need the backup for real. Common causes are an excluded folder, a backup that stopped halfway, or a storage account that ran out of space. Each of these is easy to fix once you know about it.",
        "Keep a short record of the test: the date, what was restored, and whether it worked. That record is useful if you ever need to prove the routine works, and it reminds you when the next test is due. A test every few months is enough for most sites, plus a fresh test after any change to the backup plugin or the storage setup.",
      ],
    },
    {
      heading: "Write the routine down and assign an owner",
      body: [
        "A routine that lives only in one person's head will stop when that person is busy, on holiday, or leaves the business. Write it down in a short document: what is backed up, how often, where the copies live, how to check that a backup ran, and how to restore it. Keep the document where your team can find it, and keep the login details in a secure password manager, not in the document itself.",
        "Assign one person to own the routine. That person checks each week that the backup ran, follows up if it failed, and runs the restore test when it is due. The owner does not need to be technical. They need to know what to check and who to call if something is wrong. For a small business, the owner might be you, or a team member, or your web developer under a care plan. What matters is that someone specific is responsible.",
        "Review the routine twice a year. Check that the storage still has space, that the plugin is still supported, that the schedule still fits how often the site changes, and that the owner still has access. A website that is updated daily may need a daily backup instead of weekly, while a site that rarely changes may be fine with weekly. Let the pace of change decide the pace of backups, and adjust the routine when the business changes.",
      ],
    },
  ],
};

export default post satisfies PostBody;
