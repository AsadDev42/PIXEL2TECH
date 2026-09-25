import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify ADA Compliance: A Practical WCAG Checklist",
  metaDescription:
    "A Shopify accessibility checklist for themes, product pages, cart drawers and apps. Find and fix the WCAG issues most likely to draw a demand letter.",
  keywords: [
    "shopify ada compliance",
    "shopify accessibility",
    "shopify wcag 2.2",
    "accessible shopify theme",
    "shopify alt text bulk edit",
    "shopify accessibility audit",
    "shopify accessibility app",
  ],
  disclosure:
    "This article is practical guidance for store teams, not legal advice. If you've received a demand letter or a lawsuit about accessibility, speak to a lawyer about your situation.",
  keyTakeaways: [
    "The ADA covers goods and services businesses offer online, but the Justice Department hasn't set a technical standard for private businesses. WCAG is the benchmark audits use, and Shopify itself targets WCAG 2.2 Level AA.",
    "Shopify covers part of the stack: its checkout has a published accessibility conformance report, while your theme, apps and content are yours to fix. Shopify says following its theme guidelines doesn't guarantee a fully accessible store.",
    "The biggest store-specific risks are interactive: cart drawers and modals without focus management, unlabeled variant and swatch pickers, auto-rotating slideshows and app popups that trap keyboard users.",
    "Test in three passes: an automated scan, a keyboard-only run from home page to checkout, and a screen-reader spot check. Automated tools alone miss a lot.",
    "An overlay app won't make a store compliant on its own. In 2025 the FTC ordered one vendor to pay $1 million over claims that its AI tool could make any website WCAG-compliant.",
  ],
  content: [
    {
      heading:
        "Why do Shopify stores get accessibility demand letters, and what does the law require?",
      definition:
        "The ADA requires businesses open to the public to make their goods and services accessible, and the Justice Department says that includes what they offer on the web. It hasn't set a technical standard for private businesses; its guidance points to WCAG and the federal Section 508 Standards as helpful references.",
      body: [
        "The Justice Department's [web accessibility guidance](https://www.ada.gov/resources/web-guidance/), published March 18, 2022, gives businesses flexibility in how they make their sites accessible. It also lists the barriers it sees most: poor color contrast, relying on color alone to convey information, missing alt text, videos without captions, inaccessible forms, and sites that only work with a mouse. A typical online store has chances to get every one of them wrong.",
        "Some accessibility vendor pages say the ADA 'requires WCAG 2.2 AA' for online stores. That's not what the Justice Department's guidance for businesses says, as of September 2026. In practice, though, WCAG is the yardstick audits and demand letters measure against, and Shopify's own accessibility statement says it uses WCAG 2.2 as its guiding principle and aims for Level AA. Using the same target for your store is sensible.",
        "For the wider legal picture, including the separate rules for state and local governments, see our [ADA website compliance guide for small businesses](/blog/ada-website-compliance-small-business). This checklist sticks to what a Shopify team can fix.",
      ],
    },
    {
      heading: "What does Shopify handle, and what's on you?",
      definition:
        "Shopify maintains its checkout and publishes an accessibility conformance report for it, and its Theme Store sets baseline accessibility requirements for listed themes. Everything you add on top, including theme edits, apps, product media and page content, is your responsibility.",
      body: [
        "Shopify's Theme Store requirements, published in 2021, ask themes for a minimum average Lighthouse accessibility score of 90 across the home, product, collection and cart pages, plus manual checks for keyboard navigation, form labels, alt text, contrast, visible focus, logical focus order and touch target size. That's a good starting point, not a finish line. Shopify's help center says plainly that following its theme guidelines alone doesn't guarantee a fully accessible store.",
        "Checkout is Shopify's, but it isn't perfect either. Shopify's [accessibility conformance report for Checkout](https://www.shopify.com/accessibility/vpat-checkout), dated March 2026, marks several WCAG criteria as only partially supported, including contrast, visible focus, target size and status messages, and it states that merchants are responsible for making sure their own store complies with applicable laws.",
      ],
      table: {
        caption: "Who controls each part of a Shopify store's accessibility",
        headers: ["Area", "Who controls it", "What to do"],
        rows: [
          [
            "Checkout pages",
            "Shopify, plus any branding and checkout extensions you add",
            "Keep brand colors readable, test your own checkout extensions, and read Shopify's conformance report",
          ],
          [
            "Theme: header, menus, product, collection, cart",
            "You and your theme developer",
            "Work through the theme and product page checklists below",
          ],
          [
            "Apps and app embeds",
            "App developers, chosen by you",
            "Test each one with a keyboard; ask vendors for conformance information",
          ],
          [
            "Product images, video, PDFs, size charts",
            "You",
            "Alt text, captions and text versions of image-only content",
          ],
          [
            "Theme settings you change (colors, fonts)",
            "You",
            "Re-check contrast after every color or font change",
          ],
        ],
      },
    },
    {
      heading: "Theme checklist: headings, focus, contrast, keyboard and skip links",
      body: [
        "Fix these at the template level and every page benefits. Most map directly to Shopify's theme best practices on shopify.dev and to WCAG 2.2 success criteria.",
      ],
      bullets: [
        "Headings: heading levels in order without skipping, as Shopify's help center recommends, with the page's main topic as the top-level heading.",
        "Visible focus: every link, button and form field shows a clear focus indicator (WCAG 2.4.7). Don't remove outlines without a replacement.",
        "Focus not hidden: a focused element isn't entirely covered by a sticky header, cookie banner or chat launcher (WCAG 2.2, criterion 2.4.11).",
        "Skip link: a 'Skip to content' link that becomes visible on focus, per Shopify's theme guidelines.",
        "Contrast: at least 4.5:1 for normal text and 3:1 for large text. Shopify's guidelines define large as 24px regular or 18.5px bold (WCAG 1.4.3).",
        "Links: text links are underlined or have another visual cue besides color.",
        "Keyboard: menus, mega menus, search, country and language selectors all work with Tab, Shift+Tab, Enter, Space and Escape, and focus follows the visual order.",
        "Target size: interactive targets are at least 24 by 24 CSS pixels (WCAG 2.2, criterion 2.5.8). Shopify's Theme Store asks for 44 by 44 on primary controls.",
        "Slideshows: don't autoplay, as Shopify recommends; if something moves automatically for more than five seconds, users need a way to pause or stop it (WCAG 2.2.2).",
      ],
    },
    {
      heading: "Product page checklist: media, variant pickers, swatches and prices",
      body: [
        "Product pages carry most of a store's custom UI, and most of its accessibility bugs. Shopify's Theme Store article is blunt about alt text: using the product title in place of an image description isn't satisfactory. Describe what each image shows, such as the angle, the color and the detail that matters.",
        "For large catalogs, Shopify's product CSV includes an Image Alt Text column. You can export products, fill in the column and import it back. Shopify's help center notes the field accepts up to 512 characters and suggests 125 or fewer. Test the import on a handful of products first, because a CSV import updates every column it contains.",
      ],
      bullets: [
        "Variant pickers use real form controls (radio buttons or a select) with visible or programmatic labels, not clickable divs.",
        "Each color swatch has an accessible name such as 'Color: Olive', and the selected swatch is announced as selected (WCAG 4.1.2, Name, Role, Value).",
        "Sold-out variants are marked in text, not just greyed out, so the information doesn't rely on color alone.",
        "Price changes after a variant change are announced, and sale prices include hidden text like 'Regular price' and 'Sale price' so a struck-through number makes sense when read aloud.",
        "Quantity buttons have labels such as 'Increase quantity for Linen Shirt', not just a plus sign.",
        "Add-to-cart confirmation is announced without moving focus. The W3C's own example for WCAG 4.1.3, Status Messages, is a shopping cart count that a screen reader reads out.",
        "Error messages, such as 'Select a size', appear in text next to the control and are announced.",
      ],
    },
    {
      heading: "Cart drawers and modals: focus management and escape routes",
      definition:
        "When a cart drawer, quick view or popup opens, keyboard focus should move into it, stay inside it while it's open, close with the Escape key, and return to the button that opened it. Shopify's theme accessibility guidelines describe exactly this pattern.",
      body: [
        "Two failures are common. In the first, focus stays on the page behind the drawer, so a keyboard user tabs through invisible links while the drawer sits on top. In the second, focus goes into the drawer and can't get out, which fails WCAG 2.1.2, No Keyboard Trap.",
        "Also check that the close button has a label a screen reader can read, that quantity changes inside the drawer announce the new total, and that the drawer's heading tells users where they are.",
        "Cart drawers are also a common source of slow taps. If you're rebuilding one, fix its responsiveness in the same pass; our guide to [Shopify INP and Core Web Vitals](/blog/shopify-inp-core-web-vitals) covers the performance side.",
      ],
      callout: {
        title: "From the studio",
        body: "When we test a cart drawer, we put the mouse out of reach and try to buy one product starting from the home page, using only Tab, Shift+Tab, Enter, Space and Escape. Every time we lose track of where focus is, we write it down with the template name. It takes a few minutes per template and finds the problems automated scans can't see.",
      },
    },
    {
      heading: "Apps and embeds: popups, reviews, chat and upsell widgets",
      body: [
        "Apps inject interface your theme developer never built and often never tested. They're behind many of the problems a keyboard pass turns up, so test each app embed on its own.",
        "If an app fails, check its settings for an accessible mode or layout, contact the developer with the specific failure, and switch off the embed if it blocks shoppers from buying. Ask vendors for their accessibility conformance information before you install, not after.",
      ],
      bullets: [
        "Email and discount popups: can a keyboard user reach the close button, does Escape close the popup, and does focus return to the page?",
        "Review widgets: star ratings have a text equivalent ('4.5 out of 5 stars'), and review photos have alt text or are marked decorative.",
        "Chat launchers: they don't cover focused content or the checkout button on small screens.",
        "Upsell and 'frequently bought together' popups: they don't steal focus mid-purchase, and they can be dismissed from the keyboard.",
        "Cookie banners: buttons are reachable by keyboard and the banner doesn't hide focused elements.",
      ],
      subsections: [
        {
          heading: "What about accessibility overlay apps?",
          body: [
            "Overlay and widget apps promise one-click compliance. The FTC has already acted on that kind of claim: in April 2025 it finalized an order requiring accessiBe to pay $1 million and barring it from claiming its automated products can make any website WCAG-compliant without evidence to support it, according to the [FTC's announcement](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million). Fix the theme and content; don't rely on a layer on top.",
          ],
        },
      ],
    },
    {
      heading: "Content checklist: PDFs, size charts and video",
      body: [
        "Content problems multiply with your catalog, so set rules for new uploads even before you fix old ones.",
        "If a creative partner produces your product and ad videos (we make social and ad creative for Shopify brands such as MADLUVV), ask for caption files as part of the delivery rather than adding them later. Captioning during the edit is simpler than retrofitting a whole video library.",
      ],
      bullets: [
        "Size charts: publish them as HTML tables, not images of tables. If you keep an image, put the same data in text next to it.",
        "PDFs: care guides and lookbooks either meet accessibility basics (real text, tags, reading order) or have an HTML version on the page.",
        "Video: captions on every product and brand video with speech, as Shopify's help center recommends (WCAG 1.2.2).",
        "Background video: autoplaying video that runs longer than five seconds needs a pause control.",
        "Link text: 'Shop linen shirts' instead of 'Click here' or 'Learn more'.",
        "Blog and landing pages: headings in order, alt text on every informative image, and no text baked into banner images without a text equivalent.",
      ],
    },
    {
      heading: "How to test: automated scan, keyboard pass, screen-reader spot check",
      body: [
        "No single test is enough. The W3C's [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) are a good first review, but the W3C itself warns that a page can pass them and still have significant accessibility barriers. Combine three passes on your key templates: home, collection, product, cart drawer, cart page and a sample content page.",
      ],
      table: {
        caption: "Three test passes and what each one catches",
        headers: ["Test", "Tools", "Catches", "Misses"],
        rows: [
          [
            "Automated scan",
            "Lighthouse in Chrome DevTools, axe or WAVE browser extensions",
            "Missing alt attributes, low contrast, missing form labels, some ARIA errors",
            "Whether alt text is meaningful, focus order, keyboard traps, confusing announcements",
          ],
          [
            "Keyboard-only pass",
            "Your keyboard: Tab, Shift+Tab, Enter, Space, Escape, arrow keys",
            "Traps, invisible focus, unreachable controls, popups that can't be closed",
            "How things sound to a screen reader user",
          ],
          [
            "Screen-reader spot check",
            "VoiceOver (Mac, iPhone), NVDA (Windows), TalkBack (Android)",
            "Unlabeled buttons and swatches, silent cart updates, unclear prices",
            "Anything on pages you didn't test",
          ],
        ],
      },
    },
    {
      heading: "Fix order: templates first, then catalog content",
      body: [
        "Start where one fix repairs thousands of pages. A template fix to the product page, header or cart drawer applies to every product at once. Catalog content, such as alt text for every image, is slower and scales with the size of your catalog.",
        "Budget follows the same split. Template fixes are developer time and depend on how custom your theme is; a heavily modified theme takes longer to fix than a current Shopify theme with few edits. If your theme is old and heavily patched, it's worth comparing [theme customization with a custom theme](/blog/shopify-theme-customization-vs-custom-theme) before paying for fixes twice.",
      ],
      bullets: [
        "First: anything that blocks buying, such as keyboard traps, unreachable add-to-cart or checkout buttons, and popups that can't be closed.",
        "Second: product page controls, including variant pickers, swatches, quantity and price announcements.",
        "Third: navigation, focus visibility, skip link and contrast across the theme.",
        "Fourth: app embeds that fail testing, to fix, configure or replace.",
        "Fifth: catalog content, starting with alt text on best-sellers, then size charts, PDFs and video captions.",
      ],
    },
    {
      heading: "Staying accessible after launch",
      body: [
        "Accessibility drifts. A theme update changes a component, a new app adds a popup, a new product drop goes live with no alt text. Build checks into the routine instead of running one big audit a year.",
        "Add alt text and captions to your product upload checklist. Run a keyboard pass after every theme update and every new app. Re-check contrast whenever someone changes brand colors in the theme editor. And keep a short log of what you tested and when; it's useful evidence of ongoing effort.",
        "If you'd like help with the template-level work, the [WordPress & Shopify team](/services/wordpress-and-shopify) at Pixel2Tech fixes themes on a duplicate copy and tests with keyboard and screen reader before anything goes live.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is my Shopify theme ADA compliant out of the box?",
      a: "No theme can guarantee that. Themes in the Shopify Theme Store must meet baseline accessibility requirements, including a minimum average Lighthouse accessibility score and manual keyboard, contrast and focus checks. But your color choices, app embeds, product media and edits all change the result, and Shopify says following its guidelines alone doesn't guarantee a fully accessible store. Test your live store, not the demo.",
    },
    {
      q: "Does Shopify make my store accessible automatically?",
      a: "Partly. Shopify maintains its checkout and publishes a conformance report for it, and themes listed in its Theme Store must meet baseline accessibility requirements. Shopify's own checkout report, dated March 2026, still lists some criteria as partially supported and says merchants are responsible for their store's compliance. Your theme customizations, apps and content remain your job.",
    },
    {
      q: "How do I add alt text to Shopify product images in bulk?",
      a: "Use the product CSV. Export your products, fill in the Image Alt Text column for each image row, and import the file back. Shopify accepts up to 512 characters but suggests 125 or fewer. Test the import on a few products first, write descriptions rather than repeating product titles, and prioritize best-sellers if you can't do the whole catalog at once.",
    },
    {
      q: "Will an accessibility app make my Shopify store compliant?",
      a: "Not on its own. Overlay apps can't fix keyboard traps in your cart drawer, unlabeled swatches or missing captions in the way a code fix can. In 2025 the FTC ordered one overlay vendor to pay $1 million over claims that its AI tool could make any website WCAG-compliant. Use automated tools to find issues, then fix them in the theme and content.",
    },
    {
      q: "How often should I audit my Shopify store for accessibility?",
      a: "Run a quick keyboard pass after every theme update and every new app install, and a fuller three-pass audit (automated scan, keyboard, screen reader) on key templates at least once or twice a year. Add alt text and captions to your product upload process so new content doesn't create new problems between audits.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Accessibility for themes",
      href: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility",
    },
    {
      label: "Shopify.dev: Accessibility best practices for themes",
      href: "https://shopify.dev/docs/storefronts/themes/best-practices/accessibility",
    },
    {
      label: "Shopify Partners: Theme Store accessibility requirements",
      href: "https://www.shopify.com/partners/blog/theme-store-accessibility-requirements",
    },
    {
      label: "ADA.gov: Guidance on web accessibility and the ADA",
      href: "https://www.ada.gov/resources/web-guidance/",
    },
    {
      label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
      href: "https://www.w3.org/TR/WCAG22/",
    },
    {
      label: "W3C WAI: Easy Checks, a first review of web accessibility",
      href: "https://www.w3.org/WAI/test-evaluate/preliminary/",
    },
  ],
  internalLinks: [
    {
      label: "ADA website compliance for small businesses",
      to: "/blog/ada-website-compliance-small-business",
    },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    {
      label: "Theme customization vs custom theme",
      to: "/blog/shopify-theme-customization-vs-custom-theme",
    },
    { label: "Common Shopify issues and fixes", to: "/blog/shopify-issues-and-how-to-fix-them" },
    { label: "WordPress & Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Want your cart drawer tested by keyboard and screen reader?",
    body: "Send us your store URL. We'll run the three-pass test on your key templates, list the issues in fix order, and repair template-level problems on a duplicate theme so your live store keeps selling.",
  },
};

export default post;
