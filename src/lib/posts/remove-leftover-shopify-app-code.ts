import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Remove Leftover App Code From Your Shopify Theme Safely",
  metaDescription:
    "Uninstalling a Shopify app doesn't always remove the code it added to your theme. Learn why, how to find leftover scripts, and how to remove them safely.",
  keywords: [
    "remove leftover app code shopify",
    "shopify app uninstalled code still there",
    "shopify ghost code",
    "shopify store slow after uninstalling apps",
    "shopify theme cleanup",
    "theme app extensions vs injected code",
  ],
  keyTakeaways: [
    "Uninstalling an app removes the blocks and embeds it added through theme app extensions, but code an app wrote directly into your theme files stays until someone deletes it.",
    "Always work on a duplicate theme. Shopify's code editor keeps a file timeline, but Shopify notes that its history is finite.",
    "Search theme.liquid, snippets, sections, assets and config files for the app's name, its vendor and the domains its scripts load from. Remove the reference to a snippet before deleting the snippet itself.",
    "Use the browser's Network and Console tabs to confirm nothing still calls the dead app, then test product pages, cart, checkout and tracking before you publish.",
    "Check Settings > Customer events too. Custom pixels someone added by hand aren't part of your theme and aren't cleaned up by a theme search.",
  ],
  content: [
    {
      heading: "Does uninstalling a Shopify app remove its code?",
      definition:
        "Partly. Blocks and embeds from apps built with theme app extensions are removed automatically when you uninstall the app. Code an app wrote directly into your theme files, such as script tags in theme.liquid or snippet files, stays in your theme until you or a developer removes it.",
      body: [
        "Shopify's developer documentation is clear on the first half: when merchants uninstall an app, the blocks associated with it are automatically and entirely removed from online store themes. That covers apps that integrate through app blocks and app embeds.",
        "The second half is in [Shopify's help center](https://help.shopify.com/en/manual/apps/uninstalling-apps): some apps add code to your theme that isn't removed automatically when you uninstall. Shopify advises checking the app's listing or contacting the developer before uninstalling to find out whether extra steps are needed. Most people only read that advice after the app is gone.",
        "Leftover code costs you in two ways. It can keep requesting scripts and stylesheets on every page view for a service you no longer use, which adds work for the browser. And code that calls a function from a script that no longer loads will throw errors. If that call shares a script block with something you need, the rest of the block never runs, which is how a long-gone app can quietly break a working feature.",
        "One more practical note from Shopify: uninstalling a paid app cancels future recurring charges, but you may still be billed for the current cycle, and apps that bill outside Shopify must be cancelled with the vendor directly.",
      ],
    },
    {
      heading: "App blocks and embeds vs injected code: which kind of app did you have?",
      definition:
        "If the app showed up in the theme editor as a block or under App embeds, it probably cleaned up after itself. If its setup guide asked you to paste code, or it edited theme files for you, assume something was left behind.",
      body: [
        "Shopify's help center describes app blocks as app features you place where you want them through the theme editor, and app embeds as elements that float on the page or add code without being visible to customers. Both are managed from the theme editor, and both come from theme app extensions.",
        "Older apps, and some current ones, work differently. They write snippet files into your theme, add script tags to theme.liquid, or ask you to paste code into a section. That's the code that survives an uninstall.",
      ],
      table: {
        caption: "How app code gets into a Shopify store, and whether it leaves",
        headers: [
          "How the app integrated",
          "Where it lives",
          "Removed on uninstall?",
          "How to spot it",
        ],
        rows: [
          [
            "App block",
            "Inside a section, placed through the theme editor",
            "Yes, according to Shopify",
            "Appears in the theme editor with the app's name",
          ],
          [
            "App embed",
            "Toggled in the theme editor's App embeds panel",
            "Yes, according to Shopify",
            "Listed in the App embeds panel",
          ],
          [
            "Code written into theme files",
            "theme.liquid, snippets, sections, assets",
            "Not necessarily; Shopify says some app code isn't removed automatically",
            "Snippet or asset files named after the app; script tags pointing at the app's domain",
          ],
          [
            "Code pasted by hand from an app's setup guide",
            "Anywhere, often theme.liquid or a Custom Liquid section",
            "No; the app never knew it was there",
            "Search for the vendor's name or script domain",
          ],
          [
            "Legacy storefront script tag",
            "Loaded by Shopify, not stored in your theme files",
            "Managed by the app; Shopify plans to stop injecting these on March 1, 2027",
            "Shows in the Network tab but not in a theme code search",
          ],
          [
            "Custom pixel",
            "Settings > Customer events",
            "No; it's not tied to an app",
            "Listed under Customer events",
          ],
        ],
      },
    },
    {
      heading: "Before you touch code: duplicate your theme and keep a backup",
      body: [
        "Never clean up code on your live theme. In your admin, go to Online Store > Themes, open the menu next to your current theme and choose Duplicate. The copy appears in your theme library as 'Copy of' plus the theme name. Shopify's own advice is to make a backup like this before customizing, so you can discard changes and start again.",
        "Your theme library holds a maximum of 20 themes, so you may need to delete an old unused one first. Duplicating copies the theme only; products, collections, pages and files aren't part of it and aren't affected.",
        "The code editor also has a Timeline view for each file that lets you restore an earlier version. It's a useful safety net, but Shopify notes that timeline history is finite, so older versions might not be available. The duplicate theme is your real backup.",
        "Before you start, write down a baseline: which pages you'll test, what your web performance report shows, and whether a test order records correctly in your analytics. You'll compare against it at the end.",
      ],
    },
    {
      heading: "Where does leftover app code hide in a Shopify theme?",
      definition:
        "Mostly in five places: layout/theme.liquid, the snippets folder, sections (including Custom Liquid blocks), the assets folder and the config folder. Search each one for the app's name, the vendor's company name and the domain its scripts loaded from.",
      body: [
        "Shopify's code editor can search across all theme files at once and shows every match with the file it's in. Search for several terms per app: the app's name, the developer's company name, and any domain you saw in the Network tab (more on that in the next section).",
        "Work through the results methodically. A snippet file on its own does nothing; it runs only where another file renders or includes it. That's why the order of removal matters.",
      ],
      bullets: [
        "layout/theme.liquid: script and link tags near the closing head or body tag, and render or include calls that pull in an app's snippet.",
        "snippets/: files named after the app. Before deleting one, search the whole theme for its file name so you catch every render or include call; a reference to a missing snippet produces a Liquid error on the page.",
        "sections/ and Custom Liquid blocks: embed code pasted into a Custom Liquid section or block in the theme editor. A [Shopify Community thread on slow stores after uninstalling apps](https://community.shopify.com/t/store-slower-after-uninstalling-apps-how-to-check-for-leftover-app-code-in-your-theme-and-remove-it-safely/672753) calls these out specifically.",
        "assets/: JavaScript and CSS files named after the app, which theme.liquid or a snippet may still load.",
        "config/settings_data.json: your theme's saved settings. Search it for the app's name too, and edit it with care, because a single missing comma breaks the file.",
        "templates/: JSON templates can reference sections or blocks you removed, so check the theme editor still opens each template after cleanup.",
      ],
    },
    {
      heading: "Finding dead scripts with your browser's Network and Console tabs",
      body: [
        "A theme search only finds what you know to search for. The browser shows you what actually loads. Open your live storefront in Chrome, open DevTools, go to the Network tab, filter to JS and reload. Sort by domain and list every third-party domain you see.",
        "Match each domain to an app you still use, a tool your marketing team runs, or the theme itself. Anything you can't match is a lead. Requests that fail (a 404 or a blocked request) are especially suspicious: they often point to an app whose back end is gone.",
        "Then open the Console tab and reload again. Red errors that mention an app's name, or complain that a function or object is not defined, often come from leftover code that expects a script that no longer loads.",
        "Repeat this on a product page, a collection page and the cart, because some app code only loads on certain templates. Our guide to [Shopify INP and Core Web Vitals](/blog/shopify-inp-core-web-vitals) explains how to measure whether these scripts are also slowing down interactions.",
      ],
      callout: {
        title: "From the studio",
        body: "During a cleanup we keep a simple two-column sheet: every third-party domain from the Network tab on the left, the app or tool that owns it on the right. Any row we can't fill in gets searched in the theme code and raised with the client before anything is deleted. It's quick, and it prevents the classic mistake of removing a script that turns out to power the store's reviews.",
      },
    },
    {
      heading: "How to remove leftover code safely and test afterward",
      definition:
        "Remove one app's code at a time on the duplicate theme, starting with the references and finishing with the files, then test the pages that earn money before you publish.",
      body: [
        "On the duplicate theme, delete the reference first: the render or include call, the script tag, the link tag. Save and preview the duplicate. If the page renders cleanly and the console is quieter, delete the now-unused snippet or asset file.",
        "Do one app at a time and log what you removed, from which file, and why. If something breaks later, the log tells you exactly what to put back.",
      ],
      bullets: [
        "Home page: header, menus, search and any popups still work.",
        "Collection page: filters, sorting and quick-add buttons respond.",
        "Product page: variant selection, image gallery, price updates and add to cart.",
        "Cart drawer and cart page: quantity changes, discount field and the checkout button.",
        "Checkout: start a checkout and, if you can, place a test order you then cancel or refund.",
        "Tracking: confirm the test order appears once in GA4 and in Meta Events Manager.",
        "Console: no new errors on any of the pages above, on desktop and on a phone.",
      ],
      subsections: [
        {
          heading: "Publishing the cleaned theme",
          body: [
            "When the duplicate passes, publish it and keep the old theme unpublished in your library for a while as a rollback. After publishing, open the theme editor's App embeds panel and confirm the embeds you rely on are switched on. Shopify's help center notes that apps need to be reactivated when you change your published theme, so it's worth a check.",
          ],
        },
      ],
    },
    {
      heading: "Leftover tracking pixels and customer events",
      body: [
        "Not all leftover code lives in the theme. Go to Settings > Customer events in your admin. Shopify lists two kinds of pixel there: app pixels, installed by marketing and data apps, and custom pixels, added by hand in the pixels manager. Shopify recommends app pixels where possible and custom pixels only when no app pixel does the job.",
        "Look for custom pixels for tools you've stopped using, and for pairs that do the same job, such as a hand-built GA4 pixel running next to the Google & YouTube channel. Shopify's pixel migration guide says tracking the same event more than once is a common problem when stores move tracking around.",
        "Old tracking code in theme.liquid is the other half of the problem. A Meta or Google tag pasted into the theme years ago will double-count events if you now use the official channel apps. If your purchase tracking changed after Shopify's August 2026 checkout deadline, our guide to [fixing tracking after Additional Scripts](/blog/shopify-additional-scripts-removed-tracking-fix) walks through it.",
      ],
    },
    {
      heading: "How to choose apps that won't leave a mess next time",
      body: ["The cheapest cleanup is the one you never need. A few habits make uninstalls clean."],
      bullets: [
        "Ask before installing: 'Does this app use app blocks and app embeds, or does it edit my theme files?'",
        "Treat the Built for Shopify badge as a good sign. As of September 2026, its requirements say online store apps must use theme app extensions and shouldn't add, remove or edit theme files, apart from narrow exceptions such as page builders.",
        "Read the listing for uninstall instructions before you install, as Shopify recommends.",
        "Duplicate your theme before installing any app that asks for theme changes, so you have a clean copy to compare against.",
        "Keep an app log: install date, who asked for it, what it added to the theme, and how to remove it.",
        "Plan for Shopify's script tag deprecation: apps still relying on legacy storefront script tags have until March 1, 2027 to move to app embeds or web pixels.",
        "For features that matter to your business, compare a [custom Shopify app with a public app](/blog/custom-shopify-app-vs-public-app); code you own is code you can remove cleanly.",
      ],
    },
    {
      heading: "When to get help",
      body: [
        "If your theme has years of app history, custom edits from several developers, or a search turns up code nobody can explain, get a second pair of eyes before deleting anything. The risk isn't the cleanup itself; it's removing something that looked dead but wasn't.",
        "At Pixel2Tech, our [WordPress & Shopify team](/services/wordpress-and-shopify) does this kind of cleanup on a duplicate theme with a written log of every change. If you'd rather do it yourself, the steps above are the same ones we follow.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does uninstalling a Shopify app remove its code?",
      a: "It depends on how the app was built. Shopify removes app blocks and app embeds automatically when you uninstall an app that uses theme app extensions. Code an app wrote into your theme files, or code you pasted from its setup guide, isn't removed automatically. Shopify recommends checking the app's listing or asking the developer about extra uninstall steps before you remove it.",
    },
    {
      q: "How do I know if my theme has leftover app code?",
      a: "Open your storefront with Chrome DevTools and check the Network tab for scripts from domains you can't match to an app you still use, and the Console tab for errors mentioning old apps. Then search your theme code for the names of apps you've uninstalled. Snippet files named after old apps and script tags in theme.liquid are the most common finds.",
    },
    {
      q: "Can leftover app code slow down my Shopify store?",
      a: "Yes, it can. If leftover code still requests scripts or stylesheets, the browser has to fetch and run them on every page view, which competes with the interactions your shoppers make. Code that expects a missing script can also throw errors. Shopify's web performance report and a quick look at the Network tab will show whether old apps are still loading anything.",
    },
    {
      q: "Is it safe to delete app snippets from my Shopify theme?",
      a: "It's safe if you do it on a duplicate theme and remove references before files. Search the whole theme for the snippet's name first, delete each render or include call, preview the pages, and only then delete the snippet file. Test product pages, cart, checkout and tracking before publishing, and keep the old theme as a rollback.",
    },
    {
      q: "Should I use an app to clean up leftover code?",
      a: "A cleanup app can speed up the search, but it's another app that needs access to your theme, and it can't always tell dead code from code a developer added on purpose. For most stores, a manual search on a duplicate theme is enough. If you do use a tool, run it on the duplicate and review each proposed change yourself.",
    },
  ],
  sources: [
    {
      label: "Shopify.dev: UX guidelines for theme app extensions",
      href: "https://shopify.dev/docs/apps/build/online-store/theme-app-extensions/ux",
    },
    {
      label: "Shopify Help Center: Uninstalling apps",
      href: "https://help.shopify.com/en/manual/apps/uninstalling-apps",
    },
    {
      label: "Shopify Help Center: Duplicating themes",
      href: "https://help.shopify.com/en/manual/online-store/themes/managing-themes/duplicating-themes",
    },
    {
      label: "Shopify Help Center: Editing theme code",
      href: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes/edit-code/edit-theme-code",
    },
    {
      label: "Shopify developer changelog: Script tags deprecation",
      href: "https://shopify.dev/changelog/online-store-script-tags-deprecation",
    },
    {
      label: "Shopify.dev: Built for Shopify requirements",
      href: "https://shopify.dev/docs/apps/launch/built-for-shopify/requirements",
    },
  ],
  internalLinks: [
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    {
      label: "Fix tracking after Additional Scripts",
      to: "/blog/shopify-additional-scripts-removed-tracking-fix",
    },
    { label: "Custom Shopify app vs public app", to: "/blog/custom-shopify-app-vs-public-app" },
    { label: "Common Shopify issues and fixes", to: "/blog/shopify-issues-and-how-to-fix-them" },
    { label: "WordPress & Shopify services", to: "/services/wordpress-and-shopify" },
  ],
  cta: {
    title: "Not sure which code is safe to delete?",
    body: "Send us the apps you've uninstalled and your store URL. We'll map every third-party script to its owner, clean up on a duplicate theme and hand you a log of each change before anything goes live.",
  },
};

export default post;
