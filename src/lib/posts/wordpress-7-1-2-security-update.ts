import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "WordPress 7.1.2 Security Update: What Owners Must Do Now",
  metaDescription:
    "WordPress 7.1.2 patches CVE-2026-87902, a core flaw attacked within hours of release. Check your version, update safely and spot signs of compromise.",
  keywords: [
    "wordpress 7.1.2 security update",
    "cve-2026-87902",
    "wordpress vulnerability september 2026",
    "how to check wordpress version",
    "signs wordpress site hacked",
    "wordpress maintenance plan small business",
    "wordpress auto updates security release",
  ],
  keyTakeaways: [
    "WordPress 7.1.2, released September 22, 2026, fixes CVE-2026-87902: an unauthenticated flaw rated 9.2 under CVSS 4.0 that lets an attacker make WordPress include a PHP file from elsewhere on the server, which can lead to remote code execution.",
    "Every version from 4.7.0 to 7.1.1 is affected. Fixed releases exist for older branches too (7.0.6, 6.9.9, 6.8.10 and so on down to 4.7.37), so you don't need a major upgrade to get the patch.",
    "Patchstack recorded the first exploitation attempt at 11:49 UTC on release day, and CISA added the CVE to its Known Exploited Vulnerabilities catalog on September 25, 2026.",
    "Check three things today: your WordPress version, whether automatic background updates are working, and whether you still have admin and hosting logins yourself.",
    "Patching closes the hole but doesn't remove anything planted before you patched. Look for unknown admin users, unfamiliar PHP files, odd redirects and spam pages in Google.",
  ],
  content: [
    {
      heading: "What did the WordPress 7.1.2 security update fix?",
      definition:
        "WordPress 7.1.2 is a security release published September 22, 2026. It fixes CVE-2026-87902, a critical flaw rated 9.2 under CVSS 4.0 that lets an unauthenticated attacker make WordPress include a PHP file from elsewhere on the server, which can lead to remote code execution. Every version from 4.7.0 to 7.1.1 is affected.",
      body: [
        "The [WordPress.org release post](https://wordpress.org/news/2026/09/wordpress-7-1-2-release/) describes the bug in plain terms: page template resolution could be steered to a readable local PHP file outside the active theme's folders. It credits researcher Robert Ressl for responsible disclosure and says to update immediately.",
        "Patchstack's [technical write-up](https://patchstack.com/articles/wordpress-7-1-2-security-release-unauthenticated-lfi-to-rce/) explains why it's serious. The flaw sits in `get_page_template()`, and a value from the visitor's request was used to build template filenames without passing through WordPress's own traversal check. No login, no account and no click from anyone on your team is needed.",
        "That's the part owners should hear. This isn't a plugin you forgot to remove. It's WordPress core, and the attacker doesn't need a password.",
      ],
    },
    {
      heading: "Which WordPress sites are exposed to CVE-2026-87902?",
      definition:
        "Any site running WordPress 4.7.0 through 7.1.1 has the vulnerable code. Whether an attacker can go all the way to running code depends on the theme and the server.",
      body: [
        "Patchstack puts it as file inclusion always, code execution when the host lines up. The conditions it lists are an active theme with a top-level folder whose name starts with `page-`, a readable PHP file such as PEAR's `pearcmd.php` somewhere on the server, and PHP's `register_argc_argv` setting switched on, which it says is the default in official PHP Docker images and on cPanel servers running PHP below 8.5. [SecurityWeek](https://www.securityweek.com/critical-wordpress-vulnerability-exploited-immediately-after-disclosure/) names Twenty Twelve, Twenty Fourteen, Neve, Hestia and Sydney among the affected themes.",
        "Don't try to reason your way out of the update with that list. You probably can't see your server's PHP settings, and the fix costs nothing. The timeline also left no room for waiting:",
      ],
      bullets: [
        "September 22, 2026: WordPress 7.1.2 ships. The Hacker News reports Patchstack logged the first exploitation attempt at 11:49 UTC that same day.",
        "September 24, 2026: Help Net Security updates its story with Patchstack's note that attackers were using `pearcmd.php` to write PHP files to disk, that public scanning tools were circulating, and that attack traffic was running at more than ten times the first evening's volume.",
        "September 25, 2026: CISA adds CVE-2026-87902, listed as a WordPress Core Remote File Inclusion Vulnerability, to its Known Exploited Vulnerabilities catalog. Federal civilian agencies were given until September 28 to fix it.",
      ],
      table: {
        caption: "Fixed WordPress versions by branch",
        headers: ["If your site runs", "Update to at least", "Notes"],
        rows: [
          ["7.1.0 or 7.1.1", "7.1.2", "The current release"],
          ["7.0.x", "7.0.6", "Backported fix"],
          ["6.9.x", "6.9.9", "Backported fix"],
          ["6.8.x", "6.8.10", "Backported fix"],
          [
            "Any older branch back to 4.7",
            "The latest release in that branch",
            "Fixes go down to 4.7.37; WordPress calls these a courtesy and only supports the newest version",
          ],
          [
            "Older than 4.7.0",
            "Not affected by this CVE",
            "Running years-old software is its own emergency",
          ],
        ],
      },
    },
    {
      heading: "The 15-minute owner check",
      definition:
        "You don't need a developer to find out whether you're patched. You need an admin login, five minutes in the dashboard and a clear answer on who controls your hosting.",
      body: [
        "If your site was built years ago by someone who has since moved on, you may not know any of these answers offhand. Work through them in order; each one takes a few minutes.",
      ],
      table: {
        caption: "Owner self-check for WordPress 7.1.2",
        headers: ["Check", "Where to look", "Good answer", "Red flag"],
        rows: [
          [
            "Version",
            "Dashboard > Updates, or Tools > Site Health > Info > WordPress",
            "7.1.2, or the fixed release for your branch",
            "7.1.1 or lower in a branch that has a fix, or you can't log in to check",
          ],
          [
            "Automatic updates",
            "Dashboard > Updates (the line describing how the site is kept up to date), and Site Health's status tab",
            "Security and maintenance releases install automatically, with no Site Health warning about background updates",
            "Auto-updates turned off, or a Site Health warning nobody has read",
          ],
          [
            "Admin access",
            "Users > All Users, filtered by Administrator",
            "You have your own admin account, and you recognize every other admin",
            "You log in with a shared account, or you see names you don't know",
          ],
          [
            "Hosting access",
            "Your hosting company's control panel",
            "The account is in your company's name and you can sign in",
            "The hosting is billed to a former developer or agency and you've never seen the login",
          ],
          [
            "Backups",
            "Your host's backup screen or your backup plugin",
            "A recent backup stored somewhere other than the web server",
            "No one can tell you when the last backup ran",
          ],
        ],
      },
      subsections: [
        {
          heading: "If you can't log in at all",
          body: [
            "That's the real finding, and it's bigger than this patch. Our [website ownership checklist](/blog/website-ownership-checklist) walks through recovering control of your domain, hosting and code before you need them in a hurry.",
          ],
        },
      ],
    },
    {
      heading: "How do you update WordPress safely?",
      definition:
        "Take a backup, apply the security release for your branch, then test the pages that bring in business. For a patch release like this one, that usually takes minutes.",
      body: [
        "A point release like 7.1.2 is small by design, and WordPress published fixed versions for every branch back to 4.7, so an old site can take the fix without jumping to a new major version. That lowers the risk of breakage a lot. It doesn't remove it on a site that's been heavily customized.",
      ],
      bullets: [
        "Back up files and the database first, and download a copy or confirm it's stored off the server.",
        "On a simple brochure site, update from Dashboard > Updates. WordPress's own post says sites that support automatic background updates will start the process themselves.",
        "On a heavily customized site, or one where someone edited WordPress core files directly, apply the update on a staging copy first. Many hosts offer one-click staging.",
        "After updating, test the contact form, booking flow, phone click-to-call, checkout if you have one, and the pages your ads point to.",
        "If a plugin or theme breaks, don't roll WordPress back to 7.1.1. Deactivate the plugin that broke, or switch temporarily to a default theme, and fix the plugin. Going back to the vulnerable version is the one option that's off the table.",
      ],
    },
    {
      heading: "Updated but already hacked: signs you were hit before you patched",
      definition:
        "An update closes the door. It doesn't remove anything an attacker left inside while the door was open.",
      body: [
        "Attacks started on release day, so a site that updated on September 23 or later had a window. The Hacker News reported file names seen in these attacks, including `wp-pear-rce-flag.php`, `poc87902.php`, and files starting `luci_` or `zeta_` followed by random characters, written to `/tmp/` and `/var/tmp/`. Your developer or host can search for those. You can check the rest:",
      ],
      bullets: [
        "Administrator accounts you don't recognize, or familiar accounts whose email address changed.",
        "PHP files in `wp-content/uploads`, which should normally hold images and documents.",
        "Recently modified files in the theme or plugin folders that nobody on your side touched.",
        "Visitors, especially on phones or arriving from Google, being redirected to other sites.",
        "Pages you didn't write showing up in a `site:yourdomain.com` Google search, often pharmacy, casino or replica-goods spam in other languages.",
        "A warning in Google Search Console's Security Issues report, or an email from your host about malware or unusual outbound mail.",
      ],
      subsections: [
        {
          heading: "If you find any of these",
          body: [
            "Don't just delete the file you spotted and move on. Change every admin, hosting, database and FTP password, have someone look for the other files that usually come with the first one, and restore from a backup taken before September 22 if the damage is wide. Then check Search Console until any spam pages drop out.",
          ],
        },
      ],
    },
    {
      heading: "After the patch: what hardening actually helps?",
      definition:
        "Hardening won't stop the next core vulnerability, but it limits what an attacker can do and how long a compromise goes unnoticed.",
      body: [
        "WordPress's own [hardening guide](https://developer.wordpress.org/advanced-administration/security/hardening/) makes a point that fits this week well: once a vulnerability is fixed, the information needed to exploit it is almost certainly public. That's exactly what happened here. The basics that matter most for a small-business site:",
      ],
      bullets: [
        "Least-privilege accounts: one administrator per real person, editors for people who only publish, and no shared logins.",
        "Turn off the dashboard file editor by adding `define( 'DISALLOW_FILE_EDIT', true );` to `wp-config.php`. The guide notes this stops code edits through the dashboard but won't stop file uploads.",
        "A web application firewall, either at your host, through a CDN, or from a security vendor. Patchstack says its customers were covered by a mitigation rule for this CVE.",
        "Off-site, dated backups you have restored at least once, so you know they work.",
        "Automatic security updates left on. Most small-business sites are far safer auto-patched than waiting for a human to notice.",
      ],
      callout: {
        title: "From the studio",
        body: "When a core security release lands, we don't start with the update button. We start with a backup we've confirmed downloads, then a list of every admin user and a quick scan of recently changed files, and only then update. The order matters: if the site was already touched, you want the evidence captured before the update and cleanup change timestamps. Afterward we test the lead forms by submitting a real inquiry, because a site that's patched but silently not sending leads is its own kind of outage.",
      },
    },
    {
      heading: "Does your maintenance plan really exist?",
      definition:
        "A maintenance plan is only real if someone can tell you, with dates, when your site was last updated, backed up and checked.",
      body: [
        "Plenty of businesses pay a monthly fee to a developer or host and assume that covers this. This week is a good test. Send these questions and see how quickly, and how specifically, they come back:",
      ],
      bullets: [
        "Which WordPress version is the site on right now, and when was 7.1.2 or the branch fix applied?",
        "Are automatic security updates on? If not, why not, and who applies them?",
        "When was the last backup, where is it stored, and when did anyone last test a restore?",
        "Did you check for signs of compromise after this CVE, or only apply the update?",
        "Who has admin and hosting access today, and can you send me a list?",
        "If the site were hacked tomorrow, what does our plan include and what costs extra?",
      ],
      subsections: [
        {
          heading: "How to read the answers",
          body: [
            "A good provider answers with dates and version numbers. A vague reply, a promise to check, or silence tells you the plan exists on an invoice and nowhere else. That's worth knowing now rather than after a customer tells you your site redirects to a casino. If you're curious how much automated traffic is probing sites like yours, our piece on [bots outnumbering humans online](/blog/bots-outnumber-humans-online-2026-website-security) covers the wider picture.",
          ],
        },
      ],
    },
    {
      heading: "When should you get help?",
      body: [
        "Get help the same day if you can't log in, if your version is still below the fix, or if you found any sign of compromise. That's emergency work: update, clean, change credentials and confirm Google isn't flagging the site.",
        "Get a proper care plan if the update went fine but nobody could answer the maintenance questions above. Monthly updates, tested backups and someone checking the site after every security release cost less than one cleanup.",
        "Consider a rebuild if the site runs an abandoned theme, relies on plugins that no longer get updates, or was built by someone you can no longer reach. Our comparison of [WordPress, Webflow and Squarespace](/blog/wordpress-vs-webflow-vs-squarespace-service-business) can help you decide whether to stay on WordPress or move to a platform that handles updates for you.",
        "Pixel2Tech's [WordPress and Shopify team](/services/wordpress-and-shopify) handles all three: emergency updates and malware checks, ongoing maintenance, and migrations off builds nobody is looking after anymore.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is CVE-2026-87902?",
      a: "It's a critical WordPress core vulnerability, rated 9.2 under CVSS 4.0, in the page template function get_page_template(). An unauthenticated attacker can make WordPress include a readable PHP file from outside the theme folders, which can lead to remote code execution when certain theme and server conditions are met. WordPress 7.1.2 fixed it on September 22, 2026.",
    },
    {
      q: "Which WordPress versions are affected?",
      a: "Every version from 4.7.0 through 7.1.1. WordPress released 7.1.2 plus fixed versions for older branches, including 7.0.6, 6.9.9 and 6.8.10, down to 4.7.37. If you're on an older branch, update to the latest release in that branch or, better, to 7.1.2.",
    },
    {
      q: "Did my site update to WordPress 7.1.2 automatically?",
      a: "It should have if automatic background updates are working, since WordPress pushes security releases that way. Check Dashboard > Updates or Tools > Site Health > Info to confirm the version. Some hosts and developers turn auto-updates off, so don't assume it happened.",
    },
    {
      q: "Is my site safe once I've updated?",
      a: "It's safe from new attempts against this flaw, but not necessarily clean. Exploitation attempts started on September 22, the day of the release, so check for unknown admin users, unfamiliar PHP files, redirects and spam pages in Google, and have a professional look if anything seems off.",
    },
    {
      q: "Can updating WordPress break my site?",
      a: "A security point release rarely does, but heavily customized sites or outdated plugins can conflict. Back up first, use a staging copy if the site is complex, and if something breaks, fix or disable the plugin or theme rather than going back to the vulnerable version.",
    },
  ],
  sources: [
    {
      label: "WordPress.org: WordPress 7.1.2 Security Release (September 22, 2026)",
      href: "https://wordpress.org/news/2026/09/wordpress-7-1-2-release/",
    },
    {
      label: "Help Net Security: CVE-2026-87902 and the WordPress 7.1.2 security release",
      href: "https://www.helpnetsecurity.com/2026/09/23/cve-2026-87902-wordpress-7-1-2-security-release/",
    },
    {
      label: "Patchstack: WordPress 7.1.2 security release, unauthenticated LFI to RCE",
      href: "https://patchstack.com/articles/wordpress-7-1-2-security-release-unauthenticated-lfi-to-rce/",
    },
    {
      label:
        "The Hacker News: Attackers exploit WordPress CVE-2026-87902 within hours of disclosure",
      href: "https://thehackernews.com/2026/09/attackers-exploit-wordpress-cve-2026.html",
    },
    {
      label: "CISA: CISA adds one known exploited vulnerability to catalog (September 25, 2026)",
      href: "https://www.cisa.gov/news-events/alerts/2026/09/25/cisa-adds-one-known-exploited-vulnerability-catalog",
    },
    {
      label: "WordPress Developer Resources: Hardening WordPress",
      href: "https://developer.wordpress.org/advanced-administration/security/hardening/",
    },
  ],
  internalLinks: [
    { label: "Website development services", to: "/services/website-development" },
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    { label: "Website ownership checklist", to: "/blog/website-ownership-checklist" },
    {
      label: "Bots outnumber humans online: what it means for website security",
      to: "/blog/bots-outnumber-humans-online-2026-website-security",
    },
    {
      label: "WordPress vs Webflow vs Squarespace for service businesses",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
  ],
  cta: {
    title: "Not sure your site got the WordPress 7.1.2 fix?",
    body: "Send us your URL. Pixel2Tech will confirm your WordPress version, apply the fix for your branch, check for the files and accounts this attack leaves behind, and tell you plainly whether your current maintenance setup is doing its job.",
  },
};

export default post;
