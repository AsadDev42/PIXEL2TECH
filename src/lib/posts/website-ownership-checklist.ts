import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Do You Own Your Website? Domain, Hosting & Code Checklist",
  metaDescription:
    "Find out if you really own your website. Audit the domain, hosting, email, platform accounts, analytics and code rights, then use our handover checklist.",
  keywords: [
    "who owns my website after it is built",
    "website ownership checklist",
    "domain registered in developer's name",
    "website handover checklist",
    "transfer domain from web designer",
    "website source code ownership",
  ],
  keyTakeaways: [
    "You own your website only if your business holds the domain registration, the hosting and platform accounts, the email admin, the analytics and ad accounts, and a written copyright assignment for the custom design and code.",
    "Check the domain first. The registrant should be your business, the registrar login should be yours, and auto-renew should be on. ICANN requires registrars to give the domain holder the transfer code within five calendar days of a request.",
    "On Shopify, agencies should work through collaborator accounts. Shopify doesn't allow store ownership to be transferred to a collaborator.",
    "Make your business a verified owner in Search Console, an Administrator in Google Analytics and the primary owner of your Google Business Profile.",
    "Under US copyright rules, commissioned work counts as made for hire only in nine categories with a signed agreement. Ask for an explicit assignment clause and have an attorney review it.",
  ],
  content: [
    {
      heading: "Who owns your website after a developer builds it?",
      definition:
        "You own your website only if you control its parts: the domain registration in your name, the hosting and platform accounts, the business email, the analytics and ad accounts, and a written contract that assigns the design and code copyright to you. Paying the final invoice doesn't transfer all of that on its own.",
      body: [
        "Most ownership problems stay invisible until you need something. You want to switch agencies, your freelancer stops replying, you're selling the business, or a renewal notice goes to someone else's inbox and the domain lapses.",
        "Each of those moments is easy if the accounts are already in your name and hard if they aren't. This checklist walks through every layer in the order you should check it, and ends with a handover list to complete before you make the final payment.",
        "One note before you start: this is practical guidance, not legal advice. For contract wording and disputes, talk to an attorney in your jurisdiction.",
      ],
    },
    {
      heading: "Step 1: check the domain, DNS and SSL",
      definition:
        "The domain is the one asset you can't replace, so the registrant (the person or organization listed as holding it) should be your business.",
      body: [
        "Log into the registrar where the domain is registered, or ask your developer which registrar it is. Public lookup tools often show redacted details now, so the registrar account is the reliable place to check. Confirm three things: the registrant name or organization is your business, the account email is one you control, and auto-renew is on with a payment method you own.",
        "As of September 2026, ICANN's registrant FAQs say your registrar must give you the transfer authorization code within five calendar days of your request. A transfer to another registrar can be refused within 60 days of the initial registration or a previous transfer, and changing the registrant's name, organization or email address can also block transfers for 60 days. Registrars handle these rules slightly differently, so read your registrar's help page before you start.",
        "Next, check DNS. If the domain points to a separate DNS provider, such as a CDN or your host, that account needs to be yours too, because whoever controls DNS controls where your website and email go. SSL certificates are usually issued automatically by the host, but note who receives the renewal warnings.",
      ],
      subsections: [
        {
          heading: "If the domain is registered in your developer's name",
          body: [
            "This is common, and usually not malicious: it was quicker for the developer to buy the domain on their own account. Fix it calmly:",
          ],
          bullets: [
            "Ask in writing for the registrant details to be changed to your business, or for the domain to be moved to a registrar account you create.",
            "Offer to repay any renewal fees they covered on your behalf.",
            "Don't change contact details and start a registrar transfer on the same day without checking the lock rules above.",
            "If a registrar won't provide the authorization code to the listed registrant, ICANN accepts transfer complaints.",
          ],
        },
      ],
    },
    {
      heading: "Step 2: hosting, business email and backups",
      definition:
        "Hosting and email should be billed to your business and owned by an admin login you control, with the developer added as a separate user.",
      body: [
        "The billing contact is often the real owner in practice. If hosting is paid on your agency's card as part of a bundle, you don't control the account, and leaving the agency can mean rebuilding somewhere else under time pressure.",
      ],
      bullets: [
        "Hosting account: owned and billed by your business.",
        "Developer access: a separate user or collaborator login, never your own password.",
        "Business email, for example Google Workspace or Microsoft 365: your business holds the top-level admin account.",
        "Backups: you know where they are, how often they run, and you've downloaded a full copy at least once.",
        "Staging sites: you know where they live, and they're blocked from search engines.",
      ],
    },
    {
      heading: "Step 3: platform accounts and licenses",
      definition:
        "On hosted platforms, ownership is a role inside the account, so check who holds the owner role rather than who has a login.",
      body: [
        "Each platform handles this differently. The principle is the same: the business owns the account, and outside help gets its own access that you can remove.",
      ],
      subsections: [
        {
          heading: "Shopify",
          body: [
            "Shopify separates the store owner from staff and collaborators. [Collaborator accounts](https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts) are how Shopify Partners, such as agencies and freelancers, get access: you give them a request code, and you can generate a new code at any time to invalidate old ones. Collaborators don't count toward your store's user limit, and the store owner can remove them.",
            "Shopify also states that you can't transfer store ownership to a collaborator. If your developer created the store under their own login and you work in it as staff, ownership needs to be transferred to you properly, not just shared.",
          ],
        },
        {
          heading: "WordPress",
          body: [
            "You should have an Administrator login of your own. Premium themes and plugins are licensed per account, and if the licenses sit in your developer's account, updates and support stop when that relationship ends. Ask for licenses to be bought in your business's name or transferred to it, and keep a list of every paid plugin with its renewal date.",
          ],
        },
        {
          heading: "Webflow and Squarespace",
          body: [
            "The site should live in a workspace or account owned by your business, with the agency added as a guest or contributor. Moving a site between accounts later is usually possible, but it's slower than setting it up correctly on day one. If you're still choosing a platform, our [WordPress vs Webflow vs Squarespace comparison](/blog/wordpress-vs-webflow-vs-squarespace-service-business) covers how hard each one is to leave.",
          ],
        },
      ],
    },
    {
      heading: "Step 4: data and marketing accounts",
      definition:
        "Your analytics, search and ad history are business records. If the accounts belong to your agency, the history leaves when the agency does.",
      body: [
        "Check each account below and note the role your business holds today. Anything other than the role in the middle column is a gap to close.",
      ],
      table: {
        caption: "Data and marketing accounts to audit",
        headers: ["Account", "Role your business needs", "What to check"],
        rows: [
          [
            "Google Search Console",
            "Verified owner",
            "Who else is listed as an owner, and whether former owners' verification tokens were removed",
          ],
          [
            "Google Analytics",
            "Administrator on the account",
            "Only Administrators can add and delete users and assign roles",
          ],
          [
            "Google Business Profile",
            "Primary owner",
            "A profile has one primary owner; managers can't add or remove users",
          ],
          [
            "Google Ads and Meta ads",
            "Admin on an account or business portfolio your business owns",
            "The agency should be a partner or user, not the owner",
          ],
          [
            "Tag Manager, call tracking, CRM, email marketing",
            "Admin or owner",
            "Billing in your name, with the agency as a user",
          ],
        ],
      },
      subsections: [
        {
          heading: "A Search Console detail worth knowing",
          body: [
            "[Search Console](https://support.google.com/webmasters/answer/7687615) distinguishes verified owners, who proved ownership with a token such as an uploaded HTML file, from delegated owners, who were added by a verified owner. Both have the same permissions.",
            "When you remove a former owner, Google says you must also delete their verification tokens, or they can re-verify later. And if all verified owners are removed, the remaining users and delegated owners lose access after a grace period. Make sure at least one verified owner is someone inside your business.",
          ],
        },
      ],
    },
    {
      heading: "Step 5: code, design files and IP clauses",
      definition:
        "Having a copy of the files isn't the same as owning the rights to them; the contract decides who holds the copyright.",
      body: [
        "The US Copyright Office's [Circular 30](https://www.copyright.gov/circs/circ30.pdf) explains that a work is \"made for hire\" in two situations: when an employee creates it as part of their regular duties, or when a commissioned work falls into one of nine specific categories and both parties sign a written agreement saying it's a work made for hire. If a work fails any of those requirements, it isn't a work made for hire.",
        'Websites built by an outside agency or freelancer don\'t clearly fit those nine categories, so a "work for hire" sentence on its own may not do what you expect. Ask an attorney to review the contract, and look for these clauses:',
      ],
      bullets: [
        "Assignment of copyright in the custom design and code to your business on final payment.",
        "A license to any pre-existing code, frameworks or tools the agency reuses, so you can keep running and changing the site.",
        "A list of third-party licenses (themes, plugins, fonts, stock photos) and whose name each is in.",
        "Delivery of source files: design files, code repository access and exported content.",
        "No license keys, kill switches or hosting lock-ins that stop the site working if you leave.",
      ],
      subsections: [
        {
          heading: "Before you sign the next contract",
          body: [
            "If you're choosing a vendor now, add these clauses to your brief and weigh them when [comparing website development quotes](/blog/compare-website-development-quotes). Agencies that hesitate over ownership terms before the project starts rarely become easier about them after it ends.",
          ],
        },
      ],
    },
    {
      heading: ".pk domains and PKNIC accounts",
      definition:
        "PKNIC runs the .pk registry, and its site says the domain name holder is responsible for keeping the registered contact information up to date.",
      body: [
        "Many businesses in Pakistan registered their .pk or .com.pk domain through a reseller, or through the freelancer who built the site. PKNIC notes that its appointed resellers and agents are independent companies, so the account that controls your domain may sit with a third party rather than with PKNIC directly.",
        "PKNIC's site has separate options for changing a domain's registered details and for changing its registrar. Ask whoever registered the domain to update the holder and contact details to your business, and get the login for the account that manages it. PKNIC also states that a domain name can't be modified after registration, so a new name means a new registration, not an edit.",
      ],
    },
    {
      heading: "How to recover access politely and legally",
      definition:
        "Most access problems end with a clear written request and an offer to settle anything owed. Escalation is for the cases where that fails.",
      body: ["Work through these steps in order:"],
      bullets: [
        "List every account from this checklist and mark which ones you can't access.",
        "Email the developer with the list, what you need for each (owner role, transfer or login) and a reasonable deadline.",
        "Offer to pay outstanding invoices or renewal fees; many disputes are about money, not access.",
        "For the domain, contact the registrar's support team and ask what proof of ownership it accepts.",
        "For Google accounts, use each product's own ownership or access request process.",
        "If a registrar refuses to release the authorization code to the listed registrant, file a transfer complaint with ICANN.",
        "If the developer refuses and you believe the contract gives you ownership, talk to an attorney before you take the site down or rebuild it.",
      ],
      subsections: [
        {
          heading: "What not to do",
          body: [
            "Don't log into accounts registered to someone else with credentials you weren't given, and don't change their passwords, even if you still have an old login. It can create legal problems and makes a friendly resolution less likely. Keep every request in writing so there's a record of what you asked for and when.",
          ],
        },
      ],
    },
    {
      heading: "Printable handover checklist before the final payment",
      definition: "Make the final payment conditional on this list being complete.",
      body: [
        "Print it, attach it to the contract, and tick each line with your developer on the handover call:",
      ],
      bullets: [
        "Domain registered to your business, registrar login in your name, auto-renew on.",
        "DNS provider account in your name.",
        "Hosting or platform account owned and billed by your business.",
        "Business email admin account held by your business.",
        "CMS administrator login for you, with the developer on a separate account.",
        "Shopify store owned by your business, with the agency as a collaborator.",
        "Theme, plugin, app and font licenses in your name, with a written list and renewal dates.",
        "Search Console: your business is a verified owner.",
        "Google Analytics: your business has Administrator access.",
        "Google Business Profile: your business is the primary owner.",
        "Ad accounts, pixels and tags in accounts your business owns.",
        "Design files and code repository delivered or shared.",
        "A full site backup downloaded and stored by you.",
        "Signed copyright assignment for the custom design and code.",
        "A one-page document listing every service the site depends on and who to contact about each.",
      ],
      callout: {
        title: "From the studio",
        body: "The cleanest handovers start before any work does. Have the client create the domain, hosting, platform and analytics accounts, then invite the agency as a user. At the end of the project nothing has to move; the agency's access is simply removed. It takes a few minutes at kickoff and avoids a long back-and-forth later.",
      },
    },
    {
      heading: "Make ownership part of the project from day one",
      body: [
        "The cheapest time to settle ownership is before work starts. Put the checklist in your brief, create the accounts yourself, and add your agency as a user. When you later change agencies or platforms, you'll be moving a site you already control.",
        "If you're not sure what you own today, Pixel2Tech's [website development](/services/website-development) team can run this audit on your current site and tell you which accounts need to move, and in what order.",
      ],
    },
  ],
  faqs: [
    {
      q: "Who owns my website if a developer built it?",
      a: "It depends on the accounts and the contract. You own the domain if it's registered to your business, and the hosting and platform accounts if they're in your name. The copyright in custom design and code ordinarily belongs to whoever created it, unless the work legally qualifies as made for hire or the contract assigns it to you. Check both the accounts and the contract.",
    },
    {
      q: "How do I transfer my domain from my web designer?",
      a: "First ask the designer to change the registrant details to your business or move the domain into a registrar account you own. For a move to a new registrar, have the transfer lock removed and request the authorization code; ICANN's rules require the registrar to provide it to the domain holder within five calendar days. Watch for 60-day locks after registration, transfers or registrant changes.",
    },
    {
      q: "Can a developer take my website down?",
      a: "If they control the hosting, domain or platform account, they technically can, which is why those accounts should be in your name. Whether they're allowed to depends on your contract and any unpaid invoices. If you're worried, move the accounts into your business's name now, keep your own backup, and talk to an attorney if a dispute is already underway.",
    },
    {
      q: "Should the domain be in my name or the agency's?",
      a: "Your business's name, always. The registrant is the legal holder of the domain, and the registrar account controls renewals, DNS and transfers. An agency can manage the domain with delegated access or a separate login without owning it. If a registrar or agency suggests otherwise for convenience, ask for the arrangement and the exit process in writing.",
    },
    {
      q: "What should a website handover include?",
      a: "At minimum: the domain and registrar login in your name, the hosting or platform account owned by your business, admin access to the CMS, analytics, Search Console and Business Profile, all licenses listed and transferred, design files and code, a full backup, and a signed copyright assignment for the custom work. Tie the final payment to that list.",
    },
  ],
  sources: [
    {
      label: "ICANN: FAQs for registrants on transferring your domain name",
      href: "https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en",
    },
    {
      label: "PKNIC: .pk registry",
      href: "https://www.pknic.net.pk/",
    },
    {
      label: "Shopify Help Center: Collaborator accounts",
      href: "https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts",
    },
    {
      label: "Search Console Help: Managing owners, users and permissions",
      href: "https://support.google.com/webmasters/answer/7687615",
    },
    {
      label: "Google Business Profile Help: Profile owners and managers",
      href: "https://support.google.com/business/answer/3403100",
    },
    {
      label: "U.S. Copyright Office: Circular 30, Works Made for Hire",
      href: "https://www.copyright.gov/circs/circ30.pdf",
    },
  ],
  internalLinks: [
    {
      label: "WordPress vs Webflow vs Squarespace for service businesses",
      to: "/blog/wordpress-vs-webflow-vs-squarespace-service-business",
    },
    {
      label: "Website redesign cost for small businesses",
      to: "/blog/website-redesign-cost-small-business",
    },
    {
      label: "How to compare website development quotes",
      to: "/blog/compare-website-development-quotes",
    },
    { label: "Traffic dropped after a redesign?", to: "/blog/website-traffic-drop-after-redesign" },
    { label: "Website development services", to: "/services/website-development" },
  ],
  cta: {
    title: "Not sure who holds the keys to your website?",
    body: "Send us your domain and a list of the logins you have. We'll tell you which accounts your business controls, which it doesn't, and the order to fix them in.",
  },
};

export default post;
