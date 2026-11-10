import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Speed Up a Slow WordPress Site: A Practical Checklist for Business Owners",
  metaTitle: "Speed Up a Slow WordPress Site: A Practical Checklist",
  metaDescription:
    "A slow WordPress site loses visitors before they read a word. This checklist shows owners how to measure the problem and which fixes matter most.",
  ogTitle: "Speed Up a Slow WordPress Site: A Practical Checklist for Business Owners",
  ogDescription:
    "A slow WordPress site loses visitors before they read a word. A practical speed checklist for business owners, from measuring the problem to the fixes that matter most.",
  keywords: [
    "speed up WordPress site",
    "slow WordPress site fix",
    "WordPress speed checklist",
    "WordPress performance tips",
    "Pixel2Tech WordPress",
  ],
  keyTakeaways: [
    "Measure speed before fixing anything, so you know what actually changed.",
    "Images are the most common cause of a slow WordPress site, and the easiest to fix.",
    "Every plugin and script on a page costs time, so keep only what the page needs.",
    "Caching and good hosting do the heavy lifting once the content is tidy.",
    "Recheck speed monthly, because new content and new plugins slow a site down again.",
  ],
  faqs: [
    {
      q: "How fast should a WordPress site load?",
      a: "Fast enough that a visitor on a phone does not notice waiting. As a practical target, aim for the main content to appear within about two and a half seconds on a mobile connection, and treat anything slower as work to do.",
    },
    {
      q: "Will changing the theme fix a slow site?",
      a: "Sometimes, if the theme is heavy with scripts and features you never use. But a new theme on top of uncompressed images and twenty active plugins will still be slow. Fix the content first, then judge the theme.",
    },
    {
      q: "Do we need a developer for WordPress speed work?",
      a: "The checklist in this guide covers what a business owner or a site manager can do: measuring, images, plugin tidy up, and caching. Server and hosting changes are worth a developer's help, especially on a site that takes enquiries or payments.",
    },
    {
      q: "Can speed work hurt search rankings if done badly?",
      a: "Yes, if a fix breaks pages, removes content, or blocks search engines from reading the site. That is why every change should be tested on a staging copy first, and why speed should be measured before and after each change.",
    },
    {
      q: "What is the most common cause of a slow WordPress site?",
      a: "On most slow WordPress sites, images cause more delay than anything else. Photos uploaded straight from a phone or a camera can be several megabytes each, so a page with five of them asks a visitor's phone to download far more than it needs. Resize each image to the size it displays at, compress it before upload, and use a modern format where your site supports it.",
    },
  ],
  internalLinks: [
    {
      label: "WordPress Plugin Updates Without Breaking Your Site",
      to: "/blog/wordpress-plugin-updates-safe-routine",
    },
    {
      label: "WooCommerce vs Shopify for Service Businesses: Which One Fits Your Sales Process",
      to: "/blog/woocommerce-vs-shopify-service-businesses",
    },
  ],
  cta: {
    title: "Make your WordPress site fast again",
    body: "Pixel2Tech builds and maintains WordPress sites for service businesses, including speed checks, safe updates, and hosting advice. If your site feels slow and you are not sure where the time goes, a speed check is a practical place to start.",
  },
  content: [
    {
      heading: "Measure first, so you fix the real problem",
      body: [
        "A slow website rarely announces itself. It simply loads a second too late, and the visitor is already gone. For a service business, that lost visitor is a lost enquiry, and the site owner often never knows it happened. Speed is not a technical luxury. It is part of the first impression. This checklist covers the fixes that matter most, in the order that saves the most time.",
        "Guessing at speed wastes money. Before changing anything, run the home page and one service page through a free speed test, such as PageSpeed Insights, and note the results. Test on mobile too, because most local customers will visit from a phone, and mobile connections are slower and less forgiving.",
        "Write down the score, the largest contentful paint time, and the list of the slowest items the test names. That list is your work plan. Fix the items at the top first, then test again. If a fix does not change the numbers, undo it and move on. A speed project with no measurements is just a list of opinions.",
      ],
    },
    {
      heading: "Fix images first, because they are usually the problem",
      body: [
        "On most slow WordPress sites, images cause more delay than anything else. Photos uploaded straight from a phone or a camera can be several megabytes each, and a page with five of them asks a visitor's phone to download far more than it needs.",
        "Resize every image to the size it actually displays at, compress it before upload, and use a modern format where your site supports it. A hero image rarely needs to be wider than the screen it fills. Thumbnails should be thumbnails, not full size photos squeezed into a small space. Set a rule for the team: no image goes live without compression. For the routine that keeps the whole site healthy, read [WordPress Plugin Updates Without Breaking Your Site](/blog/wordpress-plugin-updates-safe-routine).",
      ],
    },
    {
      heading: "Count what runs on every page",
      body: [
        "Every plugin adds code, and every piece of code takes time. Many WordPress sites carry plugins that were installed for one job, used once, and never removed. Others load chat widgets, tracking scripts, sliders, and popups on every page, including pages that never use them.",
        "List every active plugin and ask one question about each: what does this do for a visitor today. If the answer is unclear, deactivate it on a staging copy first, test the site, and remove it if nothing breaks. Do the same for scripts: a chat widget on the contact page is useful, the same widget on every blog post is a cost with no return. Fewer moving parts means fewer things to slow down and fewer things to break.",
      ],
    },
    {
      heading: "Let caching and hosting do the heavy lifting",
      body: [
        "Once the content is tidy, caching makes the biggest single difference for returning visitors. A caching plugin stores a ready made copy of each page, so the server does not have to build it from scratch on every visit. Set it up, test that forms and carts still work, and leave it running.",
        "Hosting matters just as much. A very cheap shared plan that hosts hundreds of sites on one server will always struggle at busy times, no matter how tidy the content is. If the speed test still shows slow server response after the content fixes, the host is the next thing to question. Ask the host what the plan actually includes, and compare it with a plan built for business sites rather than hobby sites.",
      ],
    },
    {
      heading: "Keep it fast after the fix",
      body: [
        "Speed work fails when it happens once and is never repeated. New pages, new photos, and new plugins will slow the site down again within a few months. Put a monthly speed check on the calendar, next to the update routine: run the same two pages through the same test, compare with the last numbers, and fix anything that slipped.",
        "Make the image rule part of publishing, not a separate project. Whoever uploads a photo compresses it first, every time. That single habit protects more speed than any one off optimisation project. A fast site is a maintained site, and maintenance is mostly small habits repeated on schedule.",
      ],
    },
  ],
};

export default post satisfies PostBody;
