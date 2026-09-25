import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "n8n Cost in 2026: Cloud, Self-Hosting, Build and Upkeep",
  metaDescription:
    "What n8n costs: Cloud plans vs self-hosting, server and upkeep, build effort, and when it beats Zapier or Make on price. Prices as of September 2026.",
  keywords: [
    "n8n cost",
    "n8n pricing",
    "n8n self hosted vs cloud",
    "hire n8n expert cost",
    "n8n vs zapier cost",
    "n8n vps hosting",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the automation build and maintenance services discussed here.",
  keyTakeaways: [
    "n8n has three cost layers: the platform (a Cloud plan or your own server), the build, and upkeep. For most small teams, people time is the biggest line.",
    "As of September 2026, n8n Cloud starts at €20 a month billed annually for 2,500 workflow executions. The self-hosted Community edition is free to use under n8n's Sustainable Use License.",
    "Self-hosting swaps a subscription for server costs (DigitalOcean's basic droplets list at $6 to $24 a month) plus backups, SSL, monthly updates and monitoring.",
    "n8n charges per workflow execution regardless of how many steps run, while Zapier counts tasks per action and Make counts credits per module action. The longer and busier the workflow, the more that difference matters.",
    "Budget for maintenance from day one. APIs change, credentials expire, and n8n recommends updating self-hosted instances at least once a month.",
  ],
  content: [
    {
      heading: "How much does n8n cost?",
      definition:
        "n8n costs three things: the platform, the build and the upkeep. As of September 2026, n8n Cloud starts at €20 a month billed annually for 2,500 workflow executions, the self-hosted Community edition is free to use, and a small server lists at $6 to $24 a month. For most small businesses, build and upkeep time costs more.",
      body: [
        "The software is only one part of what you'll pay. Think of an n8n automation as three layers, and expect the plan or server to be the smallest of them.",
        "Platform is an n8n Cloud subscription or a server you run yourself. Build is the hours to design, connect, test and document workflows. Upkeep is fixing breakages, updating n8n, renewing credentials and changing workflows as the business changes.",
        "This guide prices each layer with live figures where they exist, and with illustrative estimates, clearly labeled, where they don't. It's written for founders and operations managers comparing n8n with Zapier or Make, or deciding whether to self-host or hire a builder.",
        "The table below puts the three layers side by side for a simple case. The assumptions: three straightforward workflows, 30 build hours on Cloud or 35 when the builder also sets up a server, a hypothetical rate of $50 an hour, and upkeep of two hours a month on Cloud or four when you maintain the server too. Replace every number with your own.",
        "In this example the platform is the smallest line, and self-hosting costs more overall because of the extra upkeep. Self-hosting saves money when that upkeep is cheap for you, for example because someone on staff already runs servers, or when your volume would otherwise push you onto a larger Cloud plan.",
      ],
      table: {
        caption:
          "Illustrative first-year cost for three simple workflows (assumptions in the text)",
        headers: ["Cost layer", "n8n Cloud Starter", "Self-hosted Community edition"],
        rows: [
          [
            "Platform",
            "€240 (€20 a month, billed annually)",
            "About $173 ($12 droplet plus $2.40 backups, for 12 months)",
          ],
          ["Build", "$1,500 (30 hours)", "$1,750 (35 hours, including server setup)"],
          [
            "Upkeep",
            "$1,200 (2 hours a month)",
            "$2,400 (4 hours a month, including server updates)",
          ],
          ["Year-one total", "€240 plus $2,700", "About $4,323"],
        ],
      },
    },
    {
      heading: "n8n Cloud vs self-hosted: plans and limits",
      definition:
        "n8n Cloud is hosted and maintained by n8n and priced by monthly workflow executions. Self-hosted n8n runs on your own server. The Community edition is free, and paid Business and Enterprise licenses add team, security and governance features.",
      body: [
        "Two definitions from the [n8n pricing page](https://n8n.io/pricing/) matter. An execution is one run of an entire workflow, no matter how many steps it has or how much data it processes. And every plan includes unlimited users, unlimited workflows and every integration. Annual billing saves 17% compared with paying monthly, and companies with fewer than 20 employees may qualify for a start-up plan at 50% off Business.",
        "The license matters if you're an agency or a software company. n8n's [license FAQ](https://docs.n8n.io/n8n-community-license/community-license/license-faq) says the free Community license lets you use n8n to run your own business, build automations for clients on your instance as long as they can't create or edit them, and charge clients for setup and maintenance. It doesn't let you host n8n as a service where clients build their own workflows, let end users configure workflows through your product, or white-label n8n. Those uses need a commercial agreement.",
      ],
      table: {
        caption: "n8n plans as listed on n8n.io (as of September 2026, annual billing)",
        headers: ["Plan", "Hosting", "Price", "Executions per month", "Notable features"],
        rows: [
          [
            "Starter",
            "n8n Cloud",
            "€20/month",
            "2,500",
            "5 concurrent executions, 1 shared project, unlimited users",
          ],
          [
            "Pro",
            "n8n Cloud",
            "€50/month",
            "10,000",
            "20 concurrent executions, 3 shared projects, workflow history, admin roles",
          ],
          [
            "Business",
            "Self-hosted",
            "€667/month",
            "40,000",
            "SSO, SAML and LDAP, separate environments, Git version control, scaling options",
          ],
          [
            "Enterprise",
            "Cloud or self-hosted",
            "Contact sales",
            "Custom",
            "200+ concurrent executions, log streaming, external secret stores, SLA support",
          ],
          [
            "Community edition",
            "Self-hosted",
            "Free",
            "Not metered by n8n; limited by your server",
            "Core product; features that need a license key stay locked",
          ],
        ],
      },
    },
    {
      heading: "What self-hosting actually involves",
      body: [
        "Self-hosting removes the subscription, not the cost. n8n's own [guide to choosing Cloud or self-hosting](https://docs.n8n.io/choose-how-to-use-n8n) lists installation, infrastructure and maintenance as your responsibility when you self-host, and recommends Cloud for teams without technical expertise.",
        "A typical small setup is one virtual server running n8n in Docker, a database, a reverse proxy that handles SSL, and automated backups. By default n8n stores workflows, credentials and execution data in SQLite. PostgreSQL is also supported, and it's the sensible choice once volume grows or you want the database backed up separately.",
        "Backups need care. n8n's [backup guide](https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/backup-and-restore) explains that credentials are stored encrypted, and that without the encryption key held in the .n8n folder, or a custom key you set, a restored database's credentials can't be decrypted. Back up that folder along with the database, and test a restore before you need one.",
        "Updates never stop. n8n [recommends updating](https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/update-n8n) self-hosted instances at least once a month, checking the release notes for breaking changes and testing on a separate instance first.",
        "Heavier workloads use queue mode, in which a main instance receives triggers and webhooks and passes executions through Redis to separate worker instances. That means more servers and another service to monitor. Most small businesses can start without it and add it when volume demands.",
      ],
      table: {
        caption:
          "Illustrative monthly cost of a small self-hosted n8n setup (as of September 2026)",
        headers: ["Item", "Example", "Monthly cost"],
        rows: [
          ["Server", "DigitalOcean Basic droplet, 2 GB RAM and 1 vCPU", "$12.00"],
          ["Server backups", "DigitalOcean weekly backups, 20% of the droplet price", "$2.40"],
          [
            "Domain and SSL",
            "An existing domain and a free certificate through the reverse proxy",
            "$0 extra",
          ],
          ["Monitoring", "Uptime checks and error alerts", "Free tiers exist; varies"],
          [
            "Upkeep time",
            "Updates, log checks and restore tests, assumed at 2 hours a month",
            "2 hours at your cost per hour",
          ],
        ],
      },
      bullets: [
        "A Docker or Docker Compose setup you can rebuild from a file",
        "PostgreSQL once volume grows, with its own backups",
        "Backups of the .n8n folder, including the encryption key",
        "HTTPS through a reverse proxy, and no unauthenticated access to the editor",
        "A monthly update window, tested on a second instance first",
        "Uptime and error alerts that reach a named person",
      ],
    },
    {
      heading: "Build costs: freelancer, agency or in-house",
      definition:
        "Build cost is hours multiplied by rate, and the hours depend less on n8n than on how many systems you connect, how messy the data is and how carefully failures are handled.",
      body: [
        "Server prices in the table above come from [DigitalOcean's droplet pricing](https://www.digitalocean.com/pricing/droplets), which lists basic droplets at $6, $12, $18 and $24 a month for 1 GB to 4 GB of RAM. Build costs have no equivalent public price list, because they depend on scope.",
        "A lead-capture workflow that takes a form submission, creates a CRM record and sends a team alert is a small job. A workflow that syncs orders between Shopify, an accounting system and a warehouse, retries partial failures and reconciles every night is a project. Both show up on a quote as 'an n8n workflow'.",
        "The effort drivers are the same across builders: how many apps are involved and whether n8n has native nodes for them or needs custom HTTP requests; the authentication type, since API keys are simpler than OAuth apps that need approval; data mapping and cleanup; error handling and retries; volume and rate limits; and documentation and handover.",
        "For an illustrative estimate: if a lead-routing workflow takes 12 hours to scope, build, test and document, it costs $600 at a hypothetical $50 an hour or $1,200 at $100 an hour. Ask every bidder for hours as well as a price, so you're comparing effort, not only totals.",
      ],
      table: {
        caption: "Who builds it: the trade-offs",
        headers: ["Option", "How it's usually priced", "Strengths", "Risks"],
        rows: [
          [
            "Freelancer",
            "Hourly, or fixed per workflow",
            "Lower cost for small, well-defined workflows",
            "Single point of failure; upkeep may not be included",
          ],
          [
            "Agency or studio",
            "Fixed project price plus an optional retainer",
            "Scoping, QA, documentation and continuity",
            "Higher price for very small jobs",
          ],
          [
            "In-house",
            "Salary and time",
            "Knows the business and can change things quickly",
            "Hard to justify for a few workflows; knowledge leaves with the person",
          ],
        ],
      },
      callout: {
        title: "From the studio",
        body: "We price upkeep before we price the build. For each workflow we list the outside systems it touches and what should happen when each one fails. That list becomes the error-handling spec and the maintenance estimate at the same time, so the running cost is on the table before anyone commits to the build.",
      },
    },
    {
      heading: "Maintenance: the cost nobody quotes",
      body: [
        "Automations break for reasons outside your control. An app changes its API or retires an endpoint, an OAuth token expires, a teammate renames a CRM field, a form gains a new question, or volume spikes past a rate limit. None of that appears in a build quote.",
        "A recent example: Google moved offline conversion uploads to its Data Manager API in June 2026, so workflows built on the old endpoint needed rework. We explain that change in our guide to [offline conversion tracking](/blog/offline-conversion-tracking-service-business).",
        "Build the safety net with the workflow, not after the first outage. n8n supports error workflows that run when another workflow fails; use one to alert a person with the workflow name, the failing step and the input. Keep credentials in n8n's credential store rather than pasted into nodes, and write a one-page runbook for each workflow covering what it does, what it touches and how to pause it.",
        "Budget upkeep as a monthly block of hours or a retainer. A simple way to size it: list your workflows, rate each low, medium or high risk by how many external APIs it depends on, and reserve time for each. One or two simple workflows need very little. Each new integration adds to the total.",
      ],
      subsections: [
        {
          heading: "What a maintenance agreement should cover",
          body: [
            "Whether upkeep comes from a freelancer, an agency or a colleague, write down what's included. Vague 'support' is how a broken workflow sits for a week while everyone assumes someone else is on it.",
          ],
          bullets: [
            "Response times for broken workflows, by severity",
            "Monthly n8n updates on self-hosted instances, and who tests them",
            "Credential renewals and changes to app permissions",
            "A set number of change hours each month, and the rate beyond them",
            "A short monthly report: failed executions, fixes made, upcoming API changes",
            "Offboarding: exported workflows, transferred credentials and current runbooks",
          ],
        },
      ],
    },
    {
      heading: "When is n8n cheaper than Zapier or Make?",
      definition:
        "n8n usually wins on platform cost when workflows have many steps or run often, because it charges per execution rather than per step. Zapier or Make can cost less overall when volumes are low and nobody on the team wants to maintain anything.",
      body: [
        "The three tools meter differently. n8n counts one execution per workflow run. [Zapier](https://zapier.com/pricing) counts a task each time a Zap successfully completes an action, and triggers don't count. [Make](https://www.make.com/en/pricing) counts a credit for each module action, such as adding a spreadsheet row or fetching an email.",
        "As of September 2026, Zapier's Professional plan starts at $19.99 a month billed annually for 750 tasks, and Team starts at $69 a month. Make's Core plan is listed from $9 a month for 10,000 credits, with annual billing saving 15% or more. n8n Cloud Starter is €20 a month billed annually for 2,500 executions.",
        "In the example below, Make's entry tier covers the volume, n8n's Starter covers it with room to spare, and Zapier needs a higher task tier than its entry level. Change the inputs and the answer changes. At 100 runs a month all three are cheap, and the deciding factor is who builds and maintains the workflow.",
        "Self-hosting shifts the math again. The platform line drops to server costs, but upkeep moves from the vendor to you. n8n tends to come out ahead on total cost when you have several busy workflows, someone technical to own them, or data you'd rather keep on your own server. It tends to lose when you have a handful of simple workflows and nobody who wants to look after a server.",
      ],
      table: {
        caption:
          "Illustrative monthly usage for one lead workflow with 6 action steps, run 1,000 times a month",
        headers: ["Platform", "How usage is counted", "Monthly usage", "Fits the entry tier?"],
        rows: [
          ["n8n Cloud", "1 execution per run", "1,000 executions", "Yes; Starter includes 2,500"],
          [
            "Zapier",
            "1 task per successful action step",
            "About 6,000 tasks",
            "No; the Professional entry tier is 750 tasks",
          ],
          [
            "Make",
            "1 credit per module action",
            "About 6,000 to 7,000 credits, depending on the trigger",
            "Yes; the Core entry tier is 10,000 credits",
          ],
        ],
      },
    },
    {
      heading: "Scoping checklist before you ask for quotes",
      body: [
        "Quotes are only comparable if every bidder answers the same questions. Send this list with your request, and ask each builder to state their assumptions where you can't answer yet.",
      ],
      bullets: [
        "What triggers each workflow, and how often it runs per day or month",
        "Every app involved, with your plan level and whether you have admin and API access",
        "Sample data, including messy real examples",
        "What should happen when a step fails, and who gets told",
        "Where it runs: n8n Cloud, your server or the builder's, and who owns the account",
        "Who maintains it after launch, how changes are requested and how fast they're handled",
        "Documentation and handover: a runbook, exported workflows and a credential list",
        "What personal data flows through it, and where that data is stored",
      ],
      subsections: [
        {
          heading: "Own the accounts, whoever builds",
          body: [
            "The n8n instance or Cloud workspace and every app credential should belong to your business, with the builder added as a user. If the relationship ends, you keep working automations instead of starting over.",
            "For a typical first workflow, see [how to automate lead follow-up](/blog/automate-lead-follow-up). If you're adding AI steps, our guide to [AI chatbot costs](/blog/ai-chatbot-cost-small-business) covers model usage fees, and our piece on AI automation for business operations looks at wider use cases. Pixel2Tech scopes, builds and maintains automations through our [automation and CRM service](/services/automation-and-crm).",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is n8n really free?",
      a: "The self-hosted Community edition is free to use under n8n's Sustainable Use License, which covers internal business use and building automations for clients on your own instance. You still pay for the server, backups and the time to maintain it. n8n Cloud is a paid subscription with a free trial, starting at €20 a month billed annually as of September 2026.",
    },
    {
      q: "How much does it cost to self-host n8n?",
      a: "The server can be modest. As of September 2026, DigitalOcean lists basic droplets at $6 to $24 a month, with weekly backups at 20% of the droplet price. Add a domain, SSL through a reverse proxy, monitoring and, most importantly, time for monthly updates, restore tests and fixing failures. For many small businesses, that time costs more than the server.",
    },
    {
      q: "How much do n8n developers charge?",
      a: "There's no reliable public rate card; freelancers usually bill hourly or per workflow, and agencies quote fixed projects plus optional retainers. Price depends on the number of apps, authentication, data cleanup, error handling and documentation. As an illustration, a 12-hour workflow costs $600 at $50 an hour. Ask every bidder for estimated hours so you can compare effort.",
    },
    {
      q: "Is n8n cheaper than Zapier?",
      a: "Often, for busy multi-step workflows, because n8n charges per workflow execution while Zapier counts a task for every completed action. A six-step workflow running 1,000 times a month uses about 6,000 Zapier tasks but only 1,000 n8n executions. For a few simple, low-volume workflows the difference is small, and Zapier's hosted simplicity may be worth more.",
    },
    {
      q: "Who maintains an n8n workflow after it's built?",
      a: "Agree on this before the build. Options are the original builder on a retainer, an in-house person trained at handover, or the vendor if you use n8n Cloud, which covers hosting and updates but not your workflows. Whoever it is needs error alerts, a runbook for each workflow and admin access to every connected app.",
    },
  ],
  internalLinks: [
    { label: "How to automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    {
      label: "Offline conversion tracking for service businesses",
      to: "/blog/offline-conversion-tracking-service-business",
    },
    { label: "AI chatbot cost for small businesses", to: "/blog/ai-chatbot-cost-small-business" },
    {
      label: "AI automation for business operations",
      to: "/blog/ai-automation-business-operations",
    },
    { label: "Automation and CRM", to: "/services/automation-and-crm" },
  ],
  sources: [
    { label: "n8n: Plans and pricing", href: "https://n8n.io/pricing/" },
    {
      label: "n8n Docs: Community license FAQ",
      href: "https://docs.n8n.io/n8n-community-license/community-license/license-faq",
    },
    {
      label: "n8n Docs: Update self-hosted n8n",
      href: "https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/update-n8n",
    },
    { label: "Zapier: Plans and pricing", href: "https://zapier.com/pricing" },
    { label: "Make: Pricing", href: "https://www.make.com/en/pricing" },
    {
      label: "DigitalOcean: Droplet pricing",
      href: "https://www.digitalocean.com/pricing/droplets",
    },
  ],
  cta: {
    title: "Want a real number for your n8n project?",
    body: "Send us the workflows you have in mind and the apps involved. We'll estimate build hours, the right hosting option and the monthly upkeep, so you can compare n8n, Zapier and Make on total cost.",
  },
};

export default post;
