import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "WordPress Image Optimisation: A Practical Routine That Speeds Up Every Page",
  metaTitle: "WordPress Image Optimisation: Speed Up Every Page",
  metaDescription:
    "Large images slow down WordPress pages more than anything else. Follow this practical image optimisation routine to speed up every page without losing quality.",
  ogTitle: "WordPress Image Optimisation: A Practical Routine That Speeds Up Every Page",
  ogDescription:
    "Large images slow down WordPress pages more than anything else. Follow this practical image optimisation routine to speed up every page without losing quality.",
  keywords: [
    "wordpress image optimisation",
    "speed up wordpress site",
    "compress wordpress images",
    "webp images wordpress",
    "wordpress page speed",
  ],
  keyTakeaways: [
    "Find the heaviest images first, because a small number of files usually causes most of the slowdown.",
    "Resize every image to the size it will actually display at, before you upload it.",
    "Use JPEG for photographs, PNG only where you need transparency, and a modern format such as WebP where your site supports it.",
    "Compress every image and check the result with your own eyes before it goes live.",
    "Make image optimisation part of publishing, so the media library never fills up with oversized files again.",
  ],
  faqs: [
    {
      q: "How much can image optimisation speed up a WordPress page?",
      a: "It depends on how large the images were to begin with. Pages with several oversized photos usually improve the most, because images are often the largest part of the page. The honest way to know is to test the page before and after with the same speed tool, on the same connection, and compare the results.",
    },
    {
      q: "Will compressing images make them look worse?",
      a: "Not if you use sensible settings and check the result. Compression at a moderate quality level is invisible on screen for most photographs. Problems appear when quality is pushed too low, which is why the routine includes a visual check before anything goes live.",
    },
    {
      q: "Should I convert all my images to WebP?",
      a: "WebP is a good choice for photographs and most general images, because it gives similar quality at a smaller size. Keep PNG or SVG for logos and graphics that need sharp edges or transparency. If your site serves older browsers, make sure a fallback format is in place before you convert everything.",
    },
    {
      q: "Do I need a plugin for image optimisation?",
      a: "A plugin helps, especially for compressing images that are already in the library and for generating smaller versions automatically. But a plugin cannot fix an oversized original on its own. Resizing before upload and choosing the right format still matter, with or without a plugin.",
    },
  ],
  internalLinks: [
    {
      label: "How to Speed Up a Slow WordPress Site",
      to: "/blog/speed-up-slow-wordpress-site-checklist",
    },
    {
      label: "WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime",
      to: "/blog/wordpress-monthly-maintenance-tasks",
    },
  ],
  cta: {
    title: "Let Pixel2Tech audit your WordPress site and put a proper image routine in place",
    body: "Large images are the most common reason a WordPress page feels slow, and the fix is a short routine rather than a rebuild. Resize before you upload, choose the right format, compress and check, then repeat it on every page. If you would like Pixel2Tech to audit your WordPress site and put a proper image routine in place, our WordPress and Shopify team can help, starting with the pages your customers visit most.",
  },
  content: [
    {
      heading: "Start with the images that cost the most",
      body: [
        "Most slow WordPress pages have the same cause, and it is not the theme or the hosting. It is the images. A single photo uploaded straight from a camera or a phone can be several megabytes, and a page with five of those asks every visitor to download far more than the page needs. The fix is not a one off clean up. It is a short routine you run every time an image goes on the site, so every new page starts fast and stays fast.",
        "Before you change anything, find out which images are doing the damage. Open the media library and sort by file size, or run a speed test on your slowest pages and look at the list of resources it reports. You will usually find the same pattern: a handful of large photos on the homepage, a service page, or a blog post account for most of the weight. Those are the images to fix first, because they give the biggest improvement for the least work.",
        "Check the dimensions as well as the file size. A photo that displays at 800 pixels wide but is stored at 4000 pixels wide is carrying five times the detail nobody will ever see. Note the pages where these images appear, and work through them in order of traffic. The homepage and the pages that bring in enquiries come first. Older blog posts can follow once the important pages are fixed. For a wider look at what slows a WordPress site down, read [How to Speed Up a Slow WordPress Site](/blog/speed-up-slow-wordpress-site-checklist).",
      ],
    },
    {
      heading: "Resize before you upload, not after",
      body: [
        "The most effective step in the whole routine happens before WordPress is involved at all. Resize each image to the width it will actually display at. A full width hero image on a desktop layout rarely needs to be wider than 1920 pixels. An image inside a content column is usually fine at 800 to 1200 pixels. A small thumbnail needs only a few hundred pixels. When you resize first, you remove most of the weight in one step, and everything after it becomes easier.",
        "Use a simple image editor for this, even a free one, and keep the original file somewhere safe in case you need a larger version later. Give the resized file a clear name that describes what it shows, using words separated by hyphens, because that helps search engines understand the image too. Upload only the resized version. WordPress creates its own smaller copies for different uses, but it cannot undo an oversized original, so the original you upload sets the ceiling for everything else.",
      ],
    },
    {
      heading: "Choose the right format for each image",
      body: [
        "Not every image needs the same format, and choosing well saves weight without any visible loss. Photographs, with their smooth tones and many colours, belong in JPEG or WebP. A photograph saved as a PNG is often several times larger for no visible benefit. Logos, icons, and graphics with sharp edges or text are better as PNG or SVG, where crisp lines matter more than file size. Screenshots usually work well as JPEG or WebP unless they contain small text that must stay perfectly sharp.",
        "WebP is worth using where your site and your audience's browsers support it, because it gives similar quality to JPEG at a smaller file size. Many optimisation plugins can generate WebP versions of your images and serve them automatically, with the original format as a fallback for older browsers. If you are unsure whether your setup supports it, test one page first and check it in a couple of browsers before you convert the whole library.",
      ],
    },
    {
      heading: "Compress every image, then check the result",
      body: [
        "Resizing and format choice remove most of the weight, and compression removes the rest. Compression reduces the file size by discarding detail the eye barely notices, and for web use the trade off is almost always worth it. Run every image through a compression tool or plugin before it goes live, and use a sensible quality setting rather than the maximum. For most photographs, a quality level in the middle of the range looks identical on screen to the original while cutting the file size sharply.",
        "Always check the result yourself before you publish. Open the compressed image at full size on a normal screen and look at the areas that suffer first: faces, text, gradients, and fine detail. If you can see banding, blocky patches, or blurred edges, raise the quality slightly and try again. This check takes seconds and it is the step that keeps compression safe. A routine that nobody checks will eventually publish a damaged image, and a routine that is checked stays trustworthy. Pair this with a regular maintenance habit, as described in [WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime](/blog/wordpress-monthly-maintenance-tasks).",
      ],
    },
    {
      heading: "Make the routine part of publishing, not a one off rescue",
      body: [
        "The reason image optimisation fails in most businesses is that it is treated as a project, not a habit. Someone spends a day fixing the library, then the next ten uploads go in at full size and the site slows down again. The fix is to put the routine into the publishing checklist itself, next to writing the title and checking the links. Whoever uploads an image follows the same three steps every time: resize, choose the format, compress and check. No image goes live without them.",
        "Assign the routine to a person, not to a vague intention. If several people publish on your site, write the steps down in one short document and keep it where they publish. Review the media library once a month and look for anything oversized that slipped through, then fix it and ask why it slipped through. A routine that is written down, checked monthly, and owned by someone is a routine that lasts, and a site that stays fast is a site that keeps its visitors.",
      ],
    },
  ],
};

export default post satisfies PostBody;
