import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "WordPress Security Basics for Business Owners: A Checklist That Takes an Hour",
  metaTitle: "WordPress Security Basics for Business Owners",
  metaDescription:
    "WordPress security for business owners does not need a specialist. A one hour checklist covering logins, updates, backups, and the settings that stop most attacks.",
  ogTitle: "WordPress Security Basics for Business Owners: A Checklist That Takes an Hour",
  ogDescription:
    "WordPress security for business owners does not need a specialist. A one hour checklist covering logins, updates, backups, and the settings that stop most attacks.",
  keywords: [
    "WordPress security basics",
    "WordPress security checklist",
    "secure WordPress site",
    "business WordPress security",
    "Pixel2Tech WordPress",
  ],
  keyTakeaways: [
    "Most WordPress attacks are automated scans, not targeted hacking, so basic defences stop most of them.",
    "Strong, unique logins and two factor authentication matter more than any security plugin.",
    "Updates are security work: run them weekly, with a backup first, and remove what you do not use.",
    "A backup you have tested is the difference between a bad day and a lost website.",
    "Limit login attempts, hide the login page, and check the site monthly for changes you did not make.",
  ],
  faqs: [
    {
      q: "Is WordPress itself unsafe for a business website?",
      a: "No. WordPress powers a large share of business websites, and the core software is maintained and patched regularly. Most problems come from weak logins, old plugins, and missing updates, all of which a business owner can control.",
    },
    {
      q: "Do we need a paid security plugin?",
      a: "Not for the basics. A free reputable security plugin covers login protection, file alerts, and scanning. Paid versions add convenience and support, which are worth it if nobody on the team will check the free one regularly.",
    },
    {
      q: "How often should backups run?",
      a: "At least weekly for a brochure site, and daily for a site that takes orders, bookings, or new content often. The right frequency is the one where losing a day of changes is acceptable to the business.",
    },
    {
      q: "What should we do first if the site is hacked?",
      a: "Change every password, take the site offline or into maintenance mode, restore from the most recent clean backup, and update everything before going live again. Then find how the attacker got in, or it will happen again.",
    },
  ],
  internalLinks: [
    {
      label: "WordPress Plugin Updates Without Breaking Your Site: A Safe Weekly Routine",
      to: "/blog/wordpress-plugin-updates-safe-routine",
    },
    {
      label: "WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime",
      to: "/blog/wordpress-monthly-maintenance-tasks",
    },
  ],
  cta: {
    title: "Keep your WordPress site secure and running",
    body: "Pixel2Tech builds and maintains WordPress websites for service businesses, including the security setup, update routine, and backups that keep them running. If your site has not had a security check this year, a WordPress review is a practical place to start.",
  },
  content: [
    {
      heading: "Fix the logins first, because that is where attacks start",
      body: [
        "Most WordPress sites are not hacked by a skilled attacker targeting them personally. They are found by automated scans looking for weak logins, old plugins, and missing updates. That is good news for a business owner, because the fixes are simple and take about an hour. This checklist covers the basics that stop most attacks, in the order that matters most.",
        'The login page is the most attacked part of a WordPress site. Start there. Every user account should have a long, unique password, stored in a password manager rather than written down or reused from another service. The admin username should never be "admin", because that is the first name every automated scan tries. Create a new administrator account with a less obvious username, then delete the old "admin" account, moving its content to the new one.',
        "Turn on two factor authentication for every account that can publish or change settings. Most security plugins offer it, and it takes a few minutes to set up. With two factor authentication on, a stolen password alone is not enough to get in, which closes the most common way into a site. Also remove old accounts. A former employee or freelancer whose account still works is a door you forgot to lock.",
      ],
    },
    {
      heading: "Update everything, and remove what you do not use",
      body: [
        "Outdated plugins and themes are the second most common way into a WordPress site. Set a weekly time, the same time every week, to update the core, the theme, and every plugin you use. Take a backup before you update, and check the site after, so a broken update is caught the same day. For a safe routine that covers the full update process, read [WordPress Plugin Updates Without Breaking Your Site](/blog/wordpress-plugin-updates-safe-routine).",
        "Just as important is removing what you do not use. Every inactive plugin and theme is still code on the server, and old code is where vulnerabilities hide. If a plugin has not been used in three months, delete it, not just deactivate it. The same goes for themes: keep the active theme and one default theme as a fallback, and delete the rest. A smaller site is a safer site, and it is also faster to back up.",
      ],
    },
    {
      heading: "Keep a backup you have actually tested",
      body: [
        "A backup is only useful if it works. Many businesses discover too late that their backups were failing quietly for months. Check the backup schedule today: automatic backups should run at least weekly, and daily if the site changes often or takes orders. Keep at least one copy somewhere other than the same server, so a server problem does not take the backup with it.",
        "Then test the restore, at least once. A staging copy or a local test is enough to confirm the backup contains the database and the files, and that the site works when restored. Write down the restore steps while you do it, so the next person does not have to guess under pressure. A tested backup turns a hack into an afternoon of work. An untested one turns it into a rebuild.",
      ],
    },
    {
      heading: "Add the simple protections that block automated scans",
      body: [
        "A few small settings block a large share of automated attacks. Limit login attempts, so a scan that tries hundreds of passwords is locked out after a handful. Change the login page address if your setup allows it, so scans looking for the standard address find nothing. Disable file editing from inside the WordPress dashboard, so an attacker who gets in cannot easily change theme and plugin files.",
        "Add a reputable security plugin and turn on its basic protections: login attempt limiting, file change alerts, and a firewall if one is included. You do not need every feature turned on, and you do not need two security plugins competing with each other. One well configured plugin, plus the settings above, covers the basics. Check its alerts weekly, and act on them the same day.",
      ],
    },
    {
      heading: "Check the site monthly for changes you did not make",
      body: [
        "Security is not a one time job. Once a month, spend fifteen minutes checking the site for signs of trouble. Look at the users list for accounts you do not recognise. Look at the plugins list for anything new. Check the homepage and a few key pages for links or text you did not add. Check the security plugin's log for repeated failed logins from the same place.",
        "If something looks wrong, do not ignore it. Change all passwords, restore from a clean backup if you have one, and ask your host or developer to check for hidden files. Catching a problem in the first month is a small job. Catching it after a year, when search engines have already flagged the site, is a much bigger one.",
      ],
    },
  ],
};

export default post satisfies PostBody;
