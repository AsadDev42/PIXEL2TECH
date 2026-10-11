import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Is My Lovable App Secure? 9 Checks Before You Launch",
  metaDescription:
    "Built a site or portal with Lovable, Bolt, v0 or Replit? Nine checks before real customers arrive: database rules, secret keys, logins, backups, SEO, ownership.",
  keywords: [
    "is my lovable app secure",
    "vibe coded app security checklist",
    "ai built website production ready",
    "supabase row level security",
    "ai generated website seo",
    "who owns an ai built app",
    "lovable app launch checklist",
  ],
  keyTakeaways: [
    "AI builders such as Lovable and Bolt can produce a working app quickly, but the security of your data depends on how the database rules, keys and logins were set up, and Lovable's own documentation says that responsibility sits with you.",
    "The most important check for a Supabase-backed app is Row Level Security: Supabase says a table in an exposed schema without it is readable and writable by any role with a grant on it.",
    "Only publishable keys belong in the browser. Supabase secret (service_role) keys and Stripe secret keys bypass protections and must stay on the server.",
    "Reverting a version in Lovable or Bolt restores code, not data, and Supabase's Free plan doesn't include downloadable backups, so set up your own data exports before launch.",
    "Before customers arrive, make sure your company holds the domain, hosting, database and code accounts, and that Google can read your pages as real HTML.",
  ],
  content: [
    {
      heading: "Is my Lovable app secure?",
      definition:
        "It might be, but the builder can't promise it. Whether an app made with Lovable, Bolt, v0, Replit or Cursor is secure depends on its database access rules, where its keys live and how logins limit what each user sees. Lovable's documentation says you are responsible for making sure your app meets the security requirements for its use case.",
      body: [
        "AI app builders are genuinely useful. A business owner can get a client portal, booking tool or internal dashboard working in an afternoon, and plenty of those projects launch and do their job. The risk is the gap between an app that works when you click through it and one that's safe once customers and their data show up.",
        "That gap is what people keep asking about. Over the past month, one of the most repeated questions on Reddit's r/nocode has been some version of how do I check whether my vibe-coded app is secure, alongside threads about what production-ready actually means and who owns an internal tool someone built with AI. One founder summed up a common experience: the site was finished, but getting it live was a different job.",
        "Lovable is upfront about this. Its [security documentation](https://docs.lovable.dev/features/security) describes automatic and on-demand security scans, then states plainly that these tools help find common issues but cannot guarantee complete security, and it recommends a professional review for apps that handle sensitive data. That's a fair description of every AI builder on the market.",
      ],
      subsections: [
        {
          heading: "What was CVE-2025-48757?",
          body: [
            "In May 2025, a vulnerability record, [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757), was published describing insufficient database Row Level Security policies in Lovable through April 15, 2025 that let remote, unauthenticated attackers read or write database tables of generated sites. It carries a 9.3 critical score from MITRE, the CVE numbering authority that assigned it.",
            "The record is marked disputed. Lovable's position, as recorded in the CVE itself, is that each customer accepts responsibility for protecting their own application's data. Both readings point to the same practical lesson for owners: the platform generating your app and the rules protecting your data are separate things, and someone has to check the second one.",
          ],
        },
      ],
    },
    {
      heading: "Check 1: Can strangers read or change your database?",
      definition:
        "Most Lovable apps and many Bolt apps store data in Supabase, a hosted Postgres database. Row Level Security (RLS) is the set of rules inside that database deciding which user can see or change which rows. Without it, the data may be open to anyone who has your app's public key, and that key is in your website's code.",
      body: [
        "Supabase's own [RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security) is blunt: a table in an exposed schema without RLS is readable and writable by any role with a grant on it. On projects that still grant the anonymous role access by default, that means unauthenticated requests. Its [production checklist](https://supabase.com/docs/guides/deployment/going-into-prod) asks you to enable RLS on every table and to review the Security Advisor before going live.",
        "Turning RLS on is only half the job. With RLS enabled and no policies, nothing is readable through the public key, which often breaks the app. The tempting fix, whether from you or from the AI, is a policy that lets everyone through. That makes the app work again and puts you back where you started.",
      ],
      bullets: [
        "In Lovable, run the security scan and read the database review. Lovable says it flags tables without per-record access control and rules that let everyone through, and you can see the policies under More > Cloud > Database > RLS policies.",
        "If you have your own Supabase project, open the Security Advisor in the Supabase dashboard and fix every RLS warning before launch.",
        "Create two test accounts. Log in as the first, add a record, then log in as the second and see whether you can find it, including by changing an ID in the page address.",
        "List every table holding customer names, emails, phone numbers, invoices or files. For each one, write down in plain English who should be able to see a row. If you can't, the AI couldn't either.",
      ],
    },
    {
      heading: "Check 2: Are secret keys sitting in your website's code?",
      definition:
        "Anything shipped to the browser can be read by anyone who opens your site. Publishable keys are designed for that. Secret keys are not, and a secret key in frontend code gives whoever finds it the same power as your server.",
      body: [
        "Supabase's [API keys documentation](https://supabase.com/docs/guides/api/api-keys) splits keys into two kinds. The publishable key (called anon in older projects) is safe in web pages because Row Level Security still applies to it. The secret key (the legacy service_role key) bypasses every RLS policy, and Supabase says never to put one in a browser, a shipped application or source control. Supabase also notes its legacy anon and service_role keys are being deprecated by the end of 2026, so older projects will need to move to the new key format.",
        "Payments follow the same pattern. Stripe's [API keys guide](https://docs.stripe.com/keys) says only publishable keys, which start with `pk_live_` or `pk_test_`, are safe to expose; keys starting with `sk_` or `rk_` belong on the server. Lovable's documentation makes the same point for every third-party service: secrets can't be stored safely in client-side code, so they belong in its Secrets store and should be used from server-side functions.",
      ],
      bullets: [
        "Open your live site, right-click and choose View Page Source or open the browser's developer tools, and search the loaded files for `sb_secret_`, `service_role`, `sk_live_` and `sk_test_`.",
        "Search your GitHub repository for the same strings, including old commits, since a key that was removed later is still in the history.",
        "If you find a secret key anywhere public, rotate it in the provider's dashboard first, then fix the code. Deleting it from the code alone doesn't make it secret again.",
        "Never paste live keys into the AI chat. Use the builder's secrets feature, which Lovable says it will prompt you to do if you paste one.",
      ],
    },
    {
      heading: "Check 3: Do logins and roles actually limit what people see?",
      definition:
        "Authentication proves who someone is. Authorization decides what they're allowed to do. AI-built apps often get the first right and the second only on the surface, hiding an admin button without stopping a regular user from calling the same action.",
      body: [
        "A client portal where every client can see every other client's files is the classic failure. It usually happens because the rule lives in the page design (only show the admin menu to admins) rather than in the database or server (only let admins run this query).",
      ],
      bullets: [
        "Log in as an ordinary user and try the admin page addresses directly. You should be turned away, not shown an empty page that still loads data.",
        "Check that new sign-ups must confirm their email if your app is invite-only or holds personal data; Supabase lists email confirmation in its production checklist.",
        "Decide whether anyone at all should be able to sign up. Many internal tools should only allow invited accounts.",
        "Turn on multi-factor authentication for every account that controls the app: the builder, Supabase, GitHub, hosting and the domain registrar.",
      ],
    },
    {
      heading: "Check 4: Who holds the accounts, domain and hosting?",
      definition:
        "An app has several separate accounts behind it: the AI builder workspace, the database, the code repository, the hosting, the domain and any payment or email service. Each should be in your company's name, with at least two people able to sign in.",
      body: [
        "Ownership questions come up most when a freelancer, employee or agency built the app in their own workspace. That works until they leave, stop answering, or a billing card expires. Supabase's checklist recommends more than one organization owner for exactly this reason: so one lost login doesn't lock the business out.",
        "Register the domain with a registrar in your company's account, then connect it to the builder. Our [website ownership checklist](/blog/website-ownership-checklist) goes through each account and how to take back control of one you don't hold.",
      ],
      table: {
        caption: "Accounts behind a typical AI-built app",
        headers: ["Account", "What it controls", "Good answer"],
        rows: [
          [
            "AI builder workspace (Lovable, Bolt, v0, Replit)",
            "Editing, publishing, version history",
            "Company workspace, two admins, paid plan in the company's name",
          ],
          [
            "Database (Supabase or Lovable Cloud)",
            "All customer data, logins, files",
            "Company organization, MFA on, more than one owner",
          ],
          [
            "Code repository (GitHub)",
            "A copy of the code you can take elsewhere",
            "Company GitHub organization, private repo",
          ],
          [
            "Domain registrar",
            "Your web address and email routing",
            "Registered to the business, auto-renew on",
          ],
          [
            "Payments and email (Stripe, email provider)",
            "Money and customer messages",
            "Business accounts, keys stored only in server-side secrets",
          ],
        ],
      },
    },
    {
      heading: "Check 5: Do you have backups of the data, not just the code?",
      definition:
        "Version history in an AI builder saves your app's code. It doesn't save the records your customers created. You need a separate, tested backup of the database and any uploaded files.",
      body: [
        "This catches people out. Lovable's [version history docs](https://docs.lovable.dev/features/projects/history) say reverting restores your project's code only and does not roll back database data. Bolt's [backup and restore page](https://support.bolt.new/building/using-bolt/rollback-backup) says the same about Bolt and Supabase databases. So if a bad prompt deletes a table, going back a version won't bring the rows back.",
        "Supabase's [backups documentation](https://supabase.com/docs/guides/platform/backups) says Pro projects get daily backups kept for seven days, and recommends that Free plan projects regularly export their own data; its production checklist adds that Free plan backups can't be downloaded. Database backups also don't include files stored through Supabase Storage, so uploaded documents need their own plan. If you use Lovable Cloud, its [Cloud documentation](https://docs.lovable.dev/integrations/cloud) includes an option to export your data, and warns that removing Cloud permanently deletes the instance.",
      ],
      bullets: [
        "Confirm which plan your database is on and what backups that plan includes.",
        "Schedule a regular export of the database and uploaded files to storage your company controls.",
        "Restore one backup into a test project before launch, so you know it works.",
      ],
    },
    {
      heading: "Check 6: Can you test changes before customers see them?",
      definition:
        "Once real people use the app, every new prompt is a change to a live system. You need a way to try changes away from customers, and you need to know whether that test space shares your real data.",
      body: [
        "Lovable's [drafts](https://docs.lovable.dev/features/drafts) let you build changes in a copy and preview them before they reach your project, and publishing stays a separate step. The catch is in its own documentation: a draft has no backend of its own and uses your project's real data, so anything you add or change while testing is real. Lovable suggests creating your own test records rather than editing existing ones.",
        "For anything beyond small edits, set up staging: a second database with test data, a separate preview address, and a short list of flows to click through before every release (sign-up, login, the main form, payment and the follow-up email).",
      ],
    },
    {
      heading: "Check 7: Can Google read your pages?",
      definition:
        "Many AI-built sites are single-page apps: the server sends a nearly empty page and JavaScript builds the content in the browser. Google can render JavaScript, but it does so in a separate step, and not every crawler can.",
      body: [
        "Google's [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) explain that pages are crawled, queued for rendering and then indexed, and that server-side rendering or pre-rendering is still a great idea because not all bots can run JavaScript. Google also asks for real `<a href>` links, the History API rather than `#` fragments for routes, and unique titles and descriptions on each page.",
        "Lovable has addressed part of this. Its [SEO guide](https://docs.lovable.dev/tips-tricks/seo-geo) says apps created from May 13, 2026 use TanStack Start with server-side rendering. Older React and Vite apps get on-request pre-rendering served only to verified crawlers such as Google, Bing, social-preview bots and AI engines. Third-party SEO scanners still see the bare single-page app, and social previews depend on correct Open Graph tags for each page. Other builders differ, so check yours.",
      ],
      bullets: [
        "Give every important page its own title and meta description, not one shared title across the whole app.",
        "Make sure the site has an accurate sitemap and a robots.txt file that doesn't block the pages you want found, then submit the sitemap in Google Search Console.",
        "Run your key pages through Search Console's URL Inspection tool to confirm Google can fetch and index them.",
        "Check that a mistyped address shows a not-found page rather than your home page; Google calls the wrong version a soft 404.",
        "If your app is a logged-in portal, keep private pages out of the index entirely.",
      ],
    },
    {
      heading: "Check 8: Can everyone use it?",
      definition:
        "Accessibility means people using screen readers, keyboards, zoom or high-contrast settings can complete the same tasks as everyone else. AI-generated interfaces often look polished while missing labels, focus states and contrast.",
      body: [
        "The W3C's [Easy Checks](https://www.w3.org/WAI/test-evaluate/easy-checks/) are a good owner-level start: page titles, image alt text, headings, color contrast, visible keyboard focus, zoom, and form labels and required fields. The W3C says these checks are quick rather than exhaustive, and a page can pass them and still have barriers.",
        "Try your main flow using only the Tab and Enter keys. If you can't reach a button or can't see where you are on the page, neither can a keyboard user. For the legal side in the US, see our guide to [ADA website compliance for small businesses](/blog/ada-website-compliance-small-business).",
      ],
    },
    {
      heading: "Check 9: Do you own the code, and can you take it with you?",
      definition:
        "Owning an AI-built app means two things: the builder's terms give you rights to what you made, and you hold a working copy of the code and data outside the builder.",
      body: [
        "Lovable's [product terms](https://lovable.dev/product-terms) (section 4.5, effective February 2026) say the customer owns the applications, websites and projects it builds and any AI output generated for it, subject to third-party rights in the underlying models, training data or outputs. Read the current terms of whichever builder you use yourself, and ask a lawyer if ownership matters for a sale, investment or client contract.",
        "Rights on paper matter less if you can't get the code out. Lovable's [GitHub integration](https://docs.lovable.dev/integrations/github) syncs a project to a repository, private by default. Bolt's [project docs](https://support.bolt.new/building/using-bolt/projects-files) describe Export > Download for a zip of the project and a separate GitHub sync. Connect the repository to your company's GitHub organization, not a contractor's personal account, and have a developer confirm the exported code builds and runs on its own.",
      ],
    },
    {
      heading: "Three beliefs that get AI-built apps in trouble",
      body: [
        "Most launch problems we hear about trace back to one of these assumptions, not to the AI tool itself.",
      ],
      subsections: [
        {
          heading: "The platform handles security",
          body: [
            "The platform secures its own systems and gives you tools. Your tables, policies, keys and user roles are your app's configuration. Lovable's documentation and the dispute note on CVE-2025-48757 both put that responsibility with the customer.",
          ],
        },
        {
          heading: "Pasting a long security checklist into the AI fixes it",
          body: [
            "Asking the AI to make the app secure, or pasting a 50-point checklist, often produces confident changes you can't verify. The AI may add a policy that technically exists but still lets everyone read the table. Use checklists to find questions, then confirm each answer yourself with the tests above or with someone who can read the policies.",
          ],
        },
        {
          heading: "If it looks done, it's ready to launch",
          body: [
            "A finished design says nothing about backups, account ownership, crawlability or whether user A can see user B's invoices. Those parts are invisible until something goes wrong. Automated traffic will find a public app quickly; our piece on [bots outnumbering humans online](/blog/bots-outnumber-humans-online-2026-website-security) explains why an obscure address isn't protection.",
          ],
        },
      ],
    },
    {
      heading: "When do you need a developer: harden or rebuild?",
      definition:
        "Bring in a developer before launch if the app stores personal, financial or health data, takes payments, or serves more than one client company. Most AI-built apps can be hardened rather than rebuilt.",
      body: [
        "Hardening means keeping your app and fixing what's underneath: writing and testing RLS policies table by table, moving keys and third-party calls server-side, adding a staging database, setting up backups and monitoring, and moving accounts into company ownership. For a small portal or internal tool, that's usually days of work, not months.",
        "A rebuild makes sense when the data model is wrong for the business, when nobody can explain what the generated code does and changes keep breaking other parts, or when you need integrations, audit trails or performance the builder can't support. Our guide to [custom web app development costs](/blog/custom-web-app-development-cost) covers what that path typically involves.",
        "Either way, ask for a written list of what was checked, what changed and what's still a known risk.",
        "If you'd like a second pair of eyes, Pixel2Tech's [custom platforms and apps team](/services/custom-platforms-and-apps) reviews AI-built apps before launch and hardens or rebuilds them, and our [website development](/services/website-development) team handles the SEO and accessibility side for marketing sites built the same way.",
      ],
      callout: {
        title: "From the studio",
        body: "When we review an AI-built app, we start with the data, not the code. We list every table, write one sentence about who should see each row, then log in as two different test users and try to break that sentence. That single exercise finds most of the serious problems, and it's something an owner can sit in on and understand.",
      },
    },
  ],
  faqs: [
    {
      q: "How do I check if my vibe-coded app is secure?",
      a: "Start with the data. Run your builder's security scan or Supabase's Security Advisor, confirm Row Level Security is on for every table with real policies, and test with two user accounts to see whether one can view the other's records. Then search your live site's code for secret keys and confirm admin pages reject normal users. For apps holding sensitive data, get a professional review.",
    },
    {
      q: "Is the Supabase anon key safe to have in my frontend?",
      a: "Yes, the publishable key (anon in older projects) is designed to ship in web pages, but only because Row Level Security limits what it can do. If RLS is off or a policy lets everyone through, that public key can read and change your data. The secret or service_role key must never appear in the browser.",
    },
    {
      q: "Is CVE-2025-48757 still a risk for my Lovable app?",
      a: "The CVE describes missing or insufficient RLS policies in Lovable apps through April 15, 2025, and Lovable disputes it on the basis that customers are responsible for their app's data protection. Whatever the label, the underlying risk applies to any Supabase-backed app with weak policies, so check your own tables rather than relying on the date.",
    },
    {
      q: "Who owns an app built with Lovable or Bolt?",
      a: "Lovable's product terms say the customer owns the apps it builds and the AI output generated for it, subject to third-party rights. Check your own builder's current terms. In practice, ownership also depends on whose accounts hold the workspace, database, repository and domain, so make sure those are in your company's name.",
    },
    {
      q: "Can Google index a website built with Lovable or Bolt?",
      a: "Yes, but how well depends on rendering. Lovable says apps created from May 13, 2026 use server-side rendering, while older apps get pre-rendered HTML served to verified crawlers. Other builders may produce client-side apps. Check key pages with Google Search Console's URL Inspection tool and make sure each has its own title, description and sitemap entry.",
    },
    {
      q: "Do I need to rebuild my AI-built app before launch?",
      a: "Usually not. Most apps can be hardened by fixing database policies, moving secrets server-side, adding backups and staging, and moving accounts into company ownership. A rebuild is worth considering when the data model doesn't fit the business or changes keep breaking unrelated features.",
    },
  ],
  sources: [
    {
      label: "NVD: CVE-2025-48757",
      href: "https://nvd.nist.gov/vuln/detail/CVE-2025-48757",
    },
    {
      label: "Lovable Documentation: Security",
      href: "https://docs.lovable.dev/features/security",
    },
    {
      label: "Supabase Docs: Row Level Security",
      href: "https://supabase.com/docs/guides/database/postgres/row-level-security",
    },
    {
      label: "Supabase Docs: Understanding API keys",
      href: "https://supabase.com/docs/guides/api/api-keys",
    },
    {
      label: "Supabase Docs: Production checklist",
      href: "https://supabase.com/docs/guides/deployment/going-into-prod",
    },
    {
      label: "Supabase Docs: Database backups",
      href: "https://supabase.com/docs/guides/platform/backups",
    },
    {
      label: "Stripe Docs: API keys",
      href: "https://docs.stripe.com/keys",
    },
    {
      label: "Google Search Central: Understand JavaScript SEO basics",
      href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    },
    {
      label: "Lovable Documentation: Optimize your app for SEO and AI search",
      href: "https://docs.lovable.dev/tips-tricks/seo-geo",
    },
    {
      label: "Lovable Documentation: Version history",
      href: "https://docs.lovable.dev/features/projects/history",
    },
    {
      label: "Lovable Documentation: Drafts",
      href: "https://docs.lovable.dev/features/drafts",
    },
    {
      label: "Lovable Documentation: GitHub integration",
      href: "https://docs.lovable.dev/integrations/github",
    },
    {
      label: "Lovable: Product terms",
      href: "https://lovable.dev/product-terms",
    },
    {
      label: "Bolt Help Center: Backups, restore, and version history",
      href: "https://support.bolt.new/building/using-bolt/rollback-backup",
    },
    {
      label: "W3C WAI: Easy Checks, a first review of web accessibility",
      href: "https://www.w3.org/WAI/test-evaluate/easy-checks/",
    },
  ],
  internalLinks: [
    { label: "Custom platforms and apps", to: "/services/custom-platforms-and-apps" },
    { label: "Website development services", to: "/services/website-development" },
    { label: "Website ownership checklist", to: "/blog/website-ownership-checklist" },
    { label: "Custom web app development cost", to: "/blog/custom-web-app-development-cost" },
    {
      label: "Bots outnumber humans online: what it means for website security",
      to: "/blog/bots-outnumber-humans-online-2026-website-security",
    },
    {
      label: "ADA website compliance for small businesses",
      to: "/blog/ada-website-compliance-small-business",
    },
  ],
  cta: {
    title: "About to put real customers on an AI-built app?",
    body: "Send us the link and tell us what data it holds. Pixel2Tech will check the database rules, keys, logins, backups and account ownership, and tell you plainly whether it needs a few fixes, a proper hardening pass or nothing at all.",
  },
};

export default post;
