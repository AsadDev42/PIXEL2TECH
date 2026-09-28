import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Sell Internationally on Shopify: Markets, Duties and VAT",
  metaDescription:
    "Set up Shopify Markets for the UK, EU and US: local pricing, DDP vs DDU, EU IOSS at EUR 150, UK VAT at GBP 135 and US de minimis as of September 2026.",
  keywords: [
    "sell internationally on Shopify",
    "Shopify Markets setup",
    "Shopify duties and import taxes",
    "DDP vs DDU Shopify",
    "IOSS Shopify EU VAT",
    "UK VAT 135 rule overseas sellers",
    "US de minimis 2026",
    "Shopify multi-currency pricing",
  ],
  keyTakeaways: [
    "Selling internationally on Shopify means one store with Shopify Markets: a market per region with its own prices, currency, language and duty settings, backed by the right tax registrations.",
    "Local-currency checkout needs Shopify Payments or Adyen. Market-specific prices and percentage adjustments work on every plan.",
    "Ship DDP where you can. Shopify can collect duties at checkout if your products have HS codes and your carrier supports DDP labels; Managed Markets hands the whole job to Global-e as merchant of record.",
    "EU orders of EUR 150 or less can use IOSS, and a EUR 3 per-item customs duty applies to them from 1 July 2026. UK orders of GBP 135 or less require the seller to register for UK VAT and charge it at checkout.",
    "As of September 2026, the US has no duty-free de minimis: CBP suspended it for all countries from August 29, 2025, so every parcel into the US can owe duties.",
  ],
  content: [
    {
      heading: "How do you sell internationally on Shopify?",
      definition:
        "You run one store with Shopify Markets, create a market for each region (for example UK, EU, US), set local prices and currencies, decide who pays duties (DDP or DDU), register for the taxes each destination requires (EU IOSS, UK VAT, US duties) and translate the pages buyers read before paying.",
      body: [
        "This guide is for US brands opening the UK and EU, and UK or EU brands selling into the US. The Shopify setup is the same in both directions. The tax rules are not, and three of them changed between 2025 and 2026. Settle tax and duties first, because they decide your prices.",
      ],
    },
    {
      heading: "How do you set up Shopify Markets for the UK, EU and US?",
      body: [
        "Shopify Markets lives under Settings > Markets. Each market is a group of countries that share a currency, price list, language and domain. A sensible first setup has three: home, one market that shares your language, and the EU as a single market you split by country later.",
      ],
      bullets: [
        "Create the market and add its countries (for a US brand: United Kingdom first, then the EU).",
        "Set the market currency and decide between automatic conversion and fixed prices per product.",
        "Assign a domain or subfolder, for example example.com/en-gb or example.com/de.",
        "Publish the languages that market needs and review every translated page before launch.",
        "Turn on duty and import tax collection for the countries where you'll ship DDP.",
        "Add HS codes and country of origin to every product you'll ship abroad.",
        "Create shipping rates for the market instead of copying domestic ones.",
      ],
    },
    {
      heading: "Currencies and local pricing: what needs Shopify Payments",
      body: [
        "Shopify's page on [selling in local currencies](https://help.shopify.com/en/manual/international/pricing/limitations) is clear on the key limit: only Shopify Payments or Adyen can charge customers in their local currency. Orders through other third-party providers are processed in your store's default currency.",
        "[Shopify Payments is available](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) to businesses in the US, the UK and most EU countries, so for the brands this guide is written for, it's usually the simplest route. The same Shopify page notes that market-specific product prices and percentage price adjustments are available on all plans, even without Shopify Payments.",
        "Convert prices, then round them by hand. A UK shopper reads GBP 42.00 as a price and GBP 41.37 as a conversion. Build in costs that only exist abroad: currency conversion, packaging, pricier returns and any duty you absorb.",
        "Review market prices every quarter. For which payment methods to switch on per market, see our guide to [Shopify payment gateways in the US, UK and EU](/blog/shopify-payment-gateways-us-uk-eu).",
      ],
    },
    {
      heading: "Who pays duties: DDP or DDU?",
      definition:
        "Under DDP (delivered duty paid), you collect duties and import taxes at checkout and the customer pays nothing on delivery. Under DDU or DAP, the customer pays them when the parcel arrives.",
      body: [
        "Shopify's [duties and import taxes guide](https://help.shopify.com/en/manual/international/duties-and-import-taxes) warns that the DAP route can result in additional charges to the customer. A surprise bill at the door is where refused parcels come from, so DDP is usually worth the setup for consumer orders.",
        "To [collect duties at checkout](https://help.shopify.com/en/manual/international/duties-and-import-taxes/charging-duties), Shopify requires HS codes on your products, a carrier that supports DDP labels if you buy labels through Shopify, and no Shopify Fulfillment Network. Carrier brokerage fees aren't included in the duties Shopify calculates, so add them to your shipping rates.",
        "The alternative is [Managed Markets](https://help.shopify.com/en/manual/international/managed-markets/overview), where Global-e acts as merchant of record. Global-e registers for tax in the countries you sell to and remits duties and taxes for you. It's available to businesses in the continental US and to certain stores in Canada and the UK.",
      ],
      table: {
        caption:
          "Ways to handle duties on Shopify (fees as listed in Shopify's help center, September 2026)",
        headers: ["Option", "Who handles tax registration", "Shopify fee", "Best for"],
        rows: [
          [
            "Ship DDU/DAP",
            "Customer pays at the door; you still need UK VAT or IOSS where required",
            "None",
            "Testing demand with a few orders; B2B buyers who handle their own imports",
          ],
          [
            "Duty collection at checkout",
            "You (UK VAT, IOSS, US importer role via your carrier)",
            "0.85% of the order with Shopify Payments, 1.5% with other providers (Shopify lists a temporary reduced rate of 0.5%)",
            "Brands with an accountant and carrier set up for DDP",
          ],
          [
            "Managed Markets (Global-e)",
            "Global-e as merchant of record",
            "3.5% on Basic, Grow and Advanced; 3.25% on Plus; plus currency conversion and payment processing",
            "US and eligible UK brands that want one partner for tax, duties and local payments",
          ],
        ],
      },
    },
    {
      heading: "EU VAT and IOSS: the EUR 150 line",
      body: [
        "The EU charges VAT on every imported parcel, whatever its value. For consignments of EUR 150 or less, the [Import One-Stop Shop (IOSS)](https://vat-one-stop-shop.ec.europa.eu/one-stop-shop/register-oss_en) lets you charge the buyer's local VAT at checkout and declare it through a single IOSS return, so the parcel clears without the customer paying anything extra. IOSS is voluntary, and goods subject to excise duty are excluded.",
        "Most sellers based outside the EU, including US brands, must appoint an EU-established intermediary to register. The Commission's registration page gives Norway as an example of an exception, based on a VAT recovery agreement with the EU. UK sellers should confirm their position with an adviser.",
        "Without IOSS, VAT is collected at import and the carrier usually collects it from the customer before delivery. Above EUR 150, IOSS doesn't apply at all, and normal import VAT and customs duty rules take over.",
        "One more change matters for 2026. The Commission's [guidance on the temporary flat duty](https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en) says a EUR 3 customs duty per item (not per parcel) applies from 1 July 2026 to e-commerce consignments of EUR 150 or less, regardless of VAT scheme, until 1 July 2028, when normal customs duties apply. A three-item order now carries EUR 9 of duty before VAT, so price bundles with that in mind.",
      ],
    },
    {
      heading: "UK VAT on imports: the GBP 135 rule",
      body: [
        "For goods sent from outside the UK directly to UK consumers in consignments of GBP 135 or less, [GOV.UK guidance](https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk) says the seller must charge and account for VAT at the point of sale. That means registering for UK VAT, whatever your sales volume. Sales through online marketplaces follow separate rules, and gifts and excise goods are excluded.",
        "Above GBP 135, normal import VAT and customs rules apply at the border. The duty relief below GBP 135 is also going. The government's [policy paper on low-value imports](https://www.gov.uk/government/publications/reforming-customs-rules-for-low-value-imports/reforming-the-customs-treatment-of-low-value-imports-into-the-uk), updated 13 July 2026, says the change will come into force by October 2028 at the latest, on a date set by regulations. Plan for duty on every UK parcel within two years.",
      ],
      table: {
        caption: "Low-value import rules for the three main markets, as of September 2026",
        headers: ["Market", "Threshold", "VAT or sales tax", "Customs duty"],
        rows: [
          [
            "European Union",
            "EUR 150",
            "VAT on every import; at checkout via IOSS for EUR 150 or less, otherwise at import",
            "EUR 3 per item on consignments of EUR 150 or less from 1 July 2026 to 1 July 2028; normal duty above EUR 150",
          ],
          [
            "United Kingdom",
            "GBP 135",
            "Seller registers and charges UK VAT at checkout for GBP 135 or less; import VAT above",
            "Relief for GBP 135 or less still applies, to be removed by October 2028 at the latest",
          ],
          [
            "United States",
            "USD 800 (suspended)",
            "No federal VAT; state sales tax rules apply to sellers with nexus in a state",
            "Duty-free de minimis suspended for all countries since August 29, 2025; duties apply at any value",
          ],
        ],
      },
    },
    {
      heading: "US de minimis in 2026: what UK and EU brands need to know",
      body: [
        "Parcels worth USD 800 or less used to enter the US duty-free. CBP announced that the [suspension for all countries took effect on August 29, 2025](https://www.cbp.gov/newsroom/national-media-release/cbp-ready-enforce-end-de-minimis-loophole-securing-borders-and), ahead of a permanent statutory repeal scheduled for July 1, 2027.",
        "CBP's [e-commerce FAQs](https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs), last updated September 2, 2026, say the suspension covers goods valued at USD 800 or less arriving by all modes, including the international postal network. All applicable duties, taxes and fees are due based on classification, country of origin and value. A new informal entry process for mail took effect July 24, 2026.",
        "For a UK or EU brand, every US order can now carry duty, with your carrier or broker handling the entry. Duty rates for US imports have changed several times since 2025, so ask your carrier to quote the current rate for your top five HS codes before you set US prices, and recheck them before each peak season.",
        "US sales tax is separate: there's no federal VAT, but states set their own rules, and remote sellers can owe tax in a state once sales there cross its threshold. Ask a US tax adviser early.",
      ],
    },
    {
      heading: "Translation, domains and local trust",
      body: [
        "Shopify's [language settings](https://help.shopify.com/en/manual/international/languages) let you publish up to 20 languages on the Basic, Grow and Advanced plans, and up to 30 on Shopify Plus. Languages are assigned per market through subfolders (example.com/de) or subdomains (de.example.com), and Shopify adds hreflang tags and includes published languages in your sitemap.",
        "Treat machine translation as a draft. Have a native speaker review product titles, size guidance, checkout notices and your returns policy.",
        "UK and US English pages that differ only by currency need correct hreflang and canonicals; see our note on [Shopify duplicate collection URLs](/blog/shopify-duplicate-content-collection-urls).",
      ],
      bullets: [
        "Sizes in both inches and centimeters, with UK, EU and US size conversions where they differ.",
        "Delivery estimates per country on the product page, not only at checkout.",
        "A clear line on duties: 'Duties and taxes included' (DDP) or 'You may pay import charges on delivery' (DDU).",
      ],
    },
    {
      heading: "Shipping and returns across borders",
      body: [
        "Carrier choice follows your duty decision. Shopify's duties guide lists which carriers support DDP labels bought through Shopify, including DHL Express and DHL eCommerce. If you use your own carrier account or a 3PL, confirm in writing that it ships DDP to each destination.",
        "Returns are where international margins disappear. Decide before launch between free returns, a local returns address through your carrier or 3PL, store credit, or a returnless refund below a set value, and make every page say the same thing.",
        "Fraud patterns also change once you ship abroad. Our guide to [reducing Shopify chargebacks and fraud](/blog/reduce-shopify-chargebacks-and-fraud) covers the checks worth adding before you open new countries.",
      ],
    },
    {
      heading: "Launch checklist for your first international market",
      body: ["Open one market, run real orders through it, then add the next."],
      bullets: [
        "Market created with its countries, currency, domain or subfolder and language.",
        "Prices set and rounded per market, with foreign-only costs built in.",
        "Shopify Payments (or Adyen) active so buyers pay in their own currency.",
        "HS codes and country of origin on every product you'll ship abroad.",
        "DDP or DDU decided per market, with the duty line on product, cart and confirmation pages.",
        "Tax registrations in place: UK VAT for orders of GBP 135 or less, IOSS (with an intermediary if needed) for EU orders of EUR 150 or less, and a US duty plan.",
        "Carrier confirmed for DDP to each destination, with written transit times.",
        "Translations reviewed by a native speaker; hreflang checked in the page source.",
        "International returns policy published and a test return completed.",
        "Five test orders placed end to end: payment, label, tracking email, delivery and refund.",
      ],
      callout: {
        title: "From the studio",
        body: "Before we switch a market on for a client, we place test orders from inside that market using a VPN and a real card, then read the checkout like a customer would: the currency on every line, the duty wording, the delivery estimate and the order confirmation email. We look for small things like a hard-coded dollar sign in a theme snippet or a shipping rate copied from the home market. We also ask the client's accountant to confirm the UK VAT, IOSS and US duty setup in writing before launch. This is process advice, not tax advice.",
      },
    },
    {
      heading: "When one store isn't enough",
      body: [
        "One store with Markets covers most brands. A second store makes sense when a region needs a different legal entity, payment provider or catalog. For complex multi-region needs, a [headless Shopify build](/blog/headless-shopify-commerce-guide) is another route, though rarely the first step.",
        "If you also sell wholesale abroad, the same store can serve trade buyers with separate pricing; see our guide to [Shopify B2B without Shopify Plus](/blog/shopify-b2b-without-shopify-plus). Pixel2Tech's [WordPress and Shopify team](/services/wordpress-and-shopify) sets up markets, pricing, translations and product pages for brands expanding across the US, UK and EU.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need a separate Shopify store for each country?",
      a: "Usually not. Shopify Markets lets one store sell to many countries with separate prices, currencies, languages and domains per market. A second store makes sense when a region needs a different legal entity, a different payment provider or a very different catalog. Start with one store and split only when running markets together creates more work than it saves.",
    },
    {
      q: "Do I have to register for UK VAT to sell to UK customers?",
      a: "If you sell goods from outside the UK directly to UK consumers in consignments of GBP 135 or less, GOV.UK guidance says you must charge and account for UK VAT at the point of sale, which means registering for UK VAT. Sales through online marketplaces follow different rules. Above GBP 135, import VAT and duty are handled at the border instead.",
    },
    {
      q: "What is IOSS and do US sellers need it?",
      a: "IOSS is the EU's Import One-Stop Shop. It lets sellers charge EU VAT at checkout on imported consignments of EUR 150 or less, so customers pay nothing on delivery. It's voluntary, but without it VAT is collected at import, usually from the customer. Most sellers based outside the EU, including US brands, need an EU-established intermediary to register.",
    },
    {
      q: "Is there still a USD 800 duty-free limit for parcels to the US?",
      a: "No, not as of September 2026. CBP suspended duty-free de minimis treatment for shipments from all countries effective August 29, 2025, covering goods valued at USD 800 or less by all modes, including mail. A permanent statutory repeal is scheduled for July 1, 2027. Duties now depend on each product's classification, country of origin and value.",
    },
    {
      q: "Should I ship DDP or DDU to international customers?",
      a: "For consumer orders, DDP is usually the better choice. The customer pays duties and taxes at checkout and nothing on delivery, which reduces refused parcels and support tickets. DDU is cheaper to set up and can work for testing demand or for business buyers who handle their own imports, but say so clearly on the product page, the cart and the order confirmation.",
    },
    {
      q: "Can Shopify charge customers in euros or pounds?",
      a: "Yes, if you use Shopify Payments or Adyen. Shopify only supports local-currency checkout through those two providers; other payment providers process orders in your store's default currency. Market-specific prices and percentage price adjustments are available on all plans, so you can still set EU and UK prices even before local-currency checkout is switched on.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Collecting international duties and import taxes at checkout",
      href: "https://help.shopify.com/en/manual/international/duties-and-import-taxes/charging-duties",
    },
    {
      label: "Shopify Help Center: Overview of Managed Markets",
      href: "https://help.shopify.com/en/manual/international/managed-markets/overview",
    },
    {
      label: "European Commission: Guidance on the temporary flat duty on low-value imports",
      href: "https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en",
    },
    {
      label: "European Commission VAT One Stop Shop: Registering for the import scheme (IOSS)",
      href: "https://vat-one-stop-shop.ec.europa.eu/one-stop-shop/register-oss_en",
    },
    {
      label: "GOV.UK: VAT and overseas goods sold directly to customers in the UK",
      href: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk",
    },
    {
      label: "U.S. Customs and Border Protection: E-commerce FAQs",
      href: "https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs",
    },
  ],
  internalLinks: [
    { label: "WordPress and Shopify services", to: "/services/wordpress-and-shopify" },
    {
      label: "Shopify payment gateways in the US, UK and EU",
      to: "/blog/shopify-payment-gateways-us-uk-eu",
    },
    {
      label: "Reduce Shopify chargebacks and fraud",
      to: "/blog/reduce-shopify-chargebacks-and-fraud",
    },
    { label: "Shopify B2B without Shopify Plus", to: "/blog/shopify-b2b-without-shopify-plus" },
    { label: "Headless Shopify guide", to: "/blog/headless-shopify-commerce-guide" },
  ],
  cta: {
    title: "Opening your first overseas market?",
    body: "Tell us which country you want to sell to and what you sell. We'll set up the market, local pricing, translations and duty settings in Shopify, and flag the tax registrations to confirm with your accountant before launch.",
  },
};

export default post;
