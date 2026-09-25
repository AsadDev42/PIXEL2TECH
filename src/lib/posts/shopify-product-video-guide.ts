import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Product Videos: Types, Specs and Where to Place Them",
  metaDescription:
    "Plan product videos that sell on Shopify: which types to make, Shopify video specs, gallery placement, page speed and reusing footage for ads and Reels.",
  keywords: [
    "Shopify product video",
    "product video for Shopify store",
    "add video to Shopify product page",
    "Shopify video specs",
    "product demo video ideas",
    "ecommerce product video types",
  ],
  keyTakeaways: [
    "Make a short demo first: the product working, in one clear take. Add a how-to, a lifestyle clip and customer video once the demo is live.",
    "As of September 2026, Shopify accepts uploaded product videos up to 10 minutes, 1 GB and 4K, in MP4, MOV or WebM, and streams them at 480p, 720p or 1080p depending on the viewer's connection.",
    "Keep a fast-loading image as the first gallery item and put the demo video second or near the buy box. For videos, Largest Contentful Paint uses the poster image or first frame, whichever comes first.",
    "A product page video is supporting content, so Google won't treat it as a watch page. It can still show a video badge in text and image results; key how-to videos deserve their own landing page.",
    "Plan one shoot for many outputs: product gallery, Meta and TikTok ads in 9:16, Reels and short email loops.",
  ],
  content: [
    {
      heading: "What product videos should a Shopify store make first?",
      definition:
        "Start with a short demo that shows the product working, then add a how-to, a lifestyle clip and customer video. As of September 2026, Shopify accepts MP4, MOV or WebM uploads up to 10 minutes and 1 GB. Put the demo in the product gallery and make sure it doesn't slow the page.",
      body: [
        "Product video earns its place when it answers a question a photo can't: how it moves, how big it is in a hand, how it goes on, what it sounds like, how it drapes. Pick the first video by asking which question your customer service team answers most.",
        "Length depends on the job. Shopify's [product video guide](https://www.shopify.com/blog/product-video) puts a typical product video between 15 seconds and two minutes, with 30 to 60 seconds as the sweet spot, and allows longer tutorials of up to 10 minutes.",
      ],
      table: {
        caption:
          "Product video types, what each one answers and where it goes (lengths are our starting estimates, not platform rules)",
        headers: ["Type", "Question it answers", "Typical length", "Best placement"],
        rows: [
          [
            "Demo",
            "Does it work, and what does it look like in use?",
            "15 to 45 seconds",
            "Product gallery, second slot",
          ],
          [
            "How-to",
            "Is it easy to use or install?",
            "1 to 3 minutes",
            "Below the description or a how-to page",
          ],
          [
            "Lifestyle",
            "Does it fit my space, style or routine?",
            "15 to 30 seconds",
            "Gallery or a section lower on the page",
          ],
          [
            "Customer or creator video",
            "Do people like me actually use it?",
            "15 to 60 seconds",
            "Near reviews",
          ],
          [
            "Comparison",
            "How is it different from what I use now?",
            "30 to 60 seconds",
            "Below the buy box or on a landing page",
          ],
        ],
      },
    },
    {
      heading: "Shot lists by product category",
      body: [
        "Every category has a few shots buyers expect. Missing one usually means a returns problem later, because customers fill the gap with their imagination.",
      ],
      subsections: [
        {
          heading: "Beauty",
          body: [
            "Beauty video sells on texture and shade, so light and color accuracy matter more than camera quality.",
          ],
          bullets: [
            "Extreme close-up of the product going on skin, in one take.",
            "The same shade on two or three skin tones.",
            "Packaging opened, applicator shown, size in hand.",
          ],
        },
        {
          heading: "Apparel",
          body: ["Clothing video should answer fit and fabric, the two things a flat photo hides."],
          bullets: [
            "A 360-degree turn on a model, with height and size worn stated on screen.",
            "Fabric movement: walking, sitting, stretching.",
            "Close-ups of stitching, lining, closures and care label.",
          ],
        },
        {
          heading: "Rugs and home decor",
          body: [
            "Scale and color are the hard parts. For Nayyer Carpets we built realistic mockups that place each carpet design in a well-lit, furnished room, so buyers can picture it at home, and the same visuals run on the website and in social posts. Video adds what stills can't: pile depth and how color shifts with light.",
          ],
          bullets: [
            "A slow walk-past showing the rug in a real room, with furniture for scale.",
            "Close-up of pile and backing, including a hand pressing into it.",
            "The rug in daylight and in warm evening light.",
          ],
        },
        {
          heading: "Gadgets and tools",
          body: [
            "For anything with buttons, ports or moving parts, show the job being done, start to finish.",
          ],
          bullets: [
            "Unboxing to first use, without cuts that hide setup steps.",
            "Every port, button and accessory, labeled on screen.",
            "The product doing its main job in a real setting.",
          ],
        },
      ],
    },
    {
      heading: "Shopify video specs (as of September 2026)",
      definition:
        "Shopify accepts uploaded product videos up to 10 minutes long, 1 GB in size and 4K resolution, as MP4, MOV or WebM files, and also supports YouTube and Vimeo links.",
      body: [
        "The [Shopify Help Center page on product media types](https://help.shopify.com/en/manual/products/product-media/product-media-types) lists the requirements below. Shopify converts WebM and MOV uploads and serves all video as MP4 or HLS, streaming at 480p, 720p or 1080p depending on the viewer's connection and the uploaded resolution.",
        "Your theme has to support video. Shopify says all Online Store 2.0 themes it builds and the Horizon family support video and 3D models; for third-party themes, check with the developer.",
      ],
      table: {
        caption: "Shopify product media specs from the Shopify Help Center (as of September 2026)",
        headers: ["Item", "Requirement"],
        rows: [
          ["Video length", "Up to 10 minutes"],
          ["Video file size", "Up to 1 GB"],
          ["Video resolution", "Up to 4K (4096 x 2160 px)"],
          ["Video file types", ".mp4, .mov or .webm (served as MP4 or HLS)"],
          ["External video", "YouTube or Vimeo links only"],
          [
            "Images (for poster frames and gallery)",
            "Up to 5000 x 5000 px or 25 megapixels, under 20 MB; 2048 x 2048 px works well for square images",
          ],
        ],
      },
    },
    {
      heading: "Should you host product videos on Shopify or YouTube?",
      body: [
        "For product pages, uploading to Shopify is usually the better default. The video plays in your theme's own player, streams at a quality that suits the connection, and keeps the shopper on your page without another platform's branding or suggestions around it.",
        "YouTube and Vimeo make sense for longer tutorials you also want people to find on those platforms. Google's [video SEO documentation](https://developers.google.com/search/docs/appearance/video) notes that when you embed a third-party player, Google may index the video both on your page and on the platform's own page.",
        "Many stores do both: a short Shopify-hosted demo in the gallery, and a longer YouTube tutorial embedded lower on the page or on a separate how-to page.",
      ],
      table: {
        caption: "Hosting options for Shopify product videos",
        headers: ["Option", "Good for", "Watch out for"],
        rows: [
          [
            "Shopify upload",
            "Gallery demos and short clips",
            "10-minute and 1 GB limits; you manage compression",
          ],
          [
            "YouTube embed",
            "Long tutorials you want found on YouTube",
            "Extra third-party player code, and YouTube's own suggestions after playback",
          ],
          [
            "Vimeo embed",
            "Clean branded playback for longer videos",
            "Theme support varies; check your theme version",
          ],
        ],
      },
    },
    {
      heading: "Where to place video on the product page",
      body: [
        "Placement is a trade-off between visibility and speed. The first gallery slot is the most visible spot on the page, and it's also the element most likely to decide how fast the page feels.",
        "A reliable pattern: a fast-loading hero image first, the demo video second in the gallery, a how-to section below the description, and customer videos next to reviews. On mobile, check that the video thumbnail is visible without scrolling the gallery sideways more than once.",
        "Add captions to every product video with speech, and don't autoplay with sound. Captions help shoppers watching on mute and are part of making the page usable for everyone; our [Shopify ADA compliance checklist](/blog/shopify-ada-compliance-checklist) covers media accessibility in more depth.",
      ],
      subsections: [
        {
          heading: "How to add a video to a Shopify product",
          body: [
            "Open the product in your Shopify admin, go to the Media section, and either upload the video file or add a YouTube or Vimeo link. Drag the media into the order you want; the first item is what shoppers see first on most themes, and often what appears on collection pages.",
            "Then preview the product page on a phone. Check that the video thumbnail is clear, that it plays without sound by default, and that the gallery still loads quickly on a mobile connection.",
          ],
        },
      ],
    },
    {
      heading: "Does video slow down a Shopify store?",
      definition:
        "It can. A heavy video or poster image in the first screen can delay Largest Contentful Paint, which Google's web.dev guidance says should be 2.5 seconds or less for at least 75% of page loads.",
      body: [
        "The web.dev [LCP guide](https://web.dev/articles/lcp) explains how video counts: for a video element, LCP uses the poster image load time or the first frame's presentation time, whichever is earlier. A large, uncompressed poster frame in the first gallery slot can quietly become your slowest element.",
        "Speed and search can pull in opposite directions. Google's video documentation says not to rely on user actions such as clicking to load a video if you want it discovered. A click-to-load placeholder is fine for a secondary how-to video; for the main demo, keep a real video element in the page and make its poster light.",
        "Run through this checklist before and after adding video to a product page:",
      ],
      bullets: [
        "Compress before upload; don't rely on the 1 GB limit as a target.",
        "Use a light, sharp poster image rather than a full-resolution frame grab.",
        "Keep a still image as the first gallery item if your page speed is already borderline.",
        "Don't autoplay large files in the first screen on mobile.",
        "Load videos further down the page only when they come into view.",
        "Remove old video apps and embeds you no longer use.",
        "Test the product page on a mid-range phone after every video change.",
      ],
    },
    {
      heading: "Video SEO basics for product pages",
      body: [
        "Google treats a product page video as complementary content. Its documentation lists a product page with a 360 video as an example of a page that isn't a watch page, which means it won't usually earn full video results. A non-watch page can still appear as a text result and in Google Images with a video badge.",
        "If a how-to or comparison video is worth ranking on its own, give it a dedicated video landing page with a unique title and description. For every video, Google also asks for a valid thumbnail at a stable URL, a video that isn't hidden behind other elements, and metadata through structured data, a video sitemap or Open Graph tags.",
        "Speed still matters for rankings and conversion. If the product page already struggles on mobile, read our guide to [Shopify INP and Core Web Vitals](/blog/shopify-inp-core-web-vitals) before adding more media.",
      ],
    },
    {
      heading: "One shoot, many cuts: product page, ads, Reels and email",
      body: [
        "The most expensive part of video is the shoot day, not the edit. Plan every output before the camera rolls, and the same footage can feed the store, your ads and your email for months.",
        "Ad cuts and product page cuts are not the same edit. Ads need a hook in the first seconds and a call to action; the product page needs the demo without the sales pitch. Our guide to [UGC ads for Shopify brands](/blog/ugc-ads-for-shopify-brands) covers the ad side, including hooks, captions and testing.",
        "Meta's [Reels ad specs](https://www.facebook.com/business/ads-guide/update/video/instagram-reels) recommend 9:16 at 1440 x 2560 pixels and leaving about 14% at the top, 35% at the bottom and 6% on each side clear of text and key visuals. Shoot wide enough that you can crop a 9:16 ad and a 4:5 or square gallery version from the same take. The outputs to plan from one shoot:",
      ],
      bullets: [
        "Product gallery: 15 to 45 second demo, no text-heavy overlays, captions on.",
        "Meta and TikTok ads: 9:16, hook first, safe zones respected, several hook versions.",
        "Reels and organic social: a looser cut with trending-style pacing.",
        "Email: a short silent loop exported as an animated GIF or WebP, linked to the product.",
        "Marketplaces and wholesale decks: a clean demo without price or offer text.",
      ],
      callout: {
        title: "From the studio",
        body: "Before a product shoot we write the output list first (gallery, ad, Reel, email) and mark each shot with the formats it has to serve. Anything that has to work in 9:16 gets framed with the product in the center third. It's a ten-minute planning step that saves a reshoot when the ad team asks for a vertical version.",
      },
    },
    {
      heading: "Budgeting: phone shoots vs studio production",
      body: [
        "A modern phone, a window and a tripod can produce a usable demo for many products. Studio production pays off when color accuracy, scale or consistency across a large catalog matter more than speed.",
        "Rather than start from a price, decide which of these you actually need. Each one adds cost, and most brands only need two or three for their first round:",
      ],
      subsections: [
        {
          heading: "Measure whether the video is working",
          body: [
            'Whatever you spend, measure it. Compare conversion rate and add-to-cart rate for the product before and after the video goes live, over the same number of weeks, and read return reasons and support tickets for the questions the video was meant to answer. If "smaller than expected" returns drop after you add a scale shot, the video is doing its job.',
            "If you have the footage but not the time to cut it, our [video editing and ad creative team](/services/video-editing-and-ads) turns one shoot into product page, ad and social versions.",
          ],
        },
      ],
      bullets: [
        "Phone shoot is usually enough: small products, demos, UGC-style clips, tutorials.",
        "Consider a studio for: color-critical products (cosmetics, textiles, rugs), large items needing space and controlled light, and catalogs where every video must match.",
        "Consider mockups or 3D for: products shown in many room settings, or items too large to move between sets.",
        "Budget for editing separately: cutting, captions, color matching and exports often take as long as the shoot.",
      ],
    },
  ],
  faqs: [
    {
      q: "What video formats does Shopify support?",
      a: "As of September 2026, Shopify accepts uploaded product videos as MP4, MOV or WebM files, up to 10 minutes long, 1 GB in size and 4K resolution. Shopify converts uploads and serves them as MP4 or HLS. You can also add YouTube or Vimeo links; other video URLs aren't supported. Your theme must support video.",
    },
    {
      q: "Does video slow down a Shopify store?",
      a: "It can. For video, Largest Contentful Paint uses the poster image or the first frame, whichever loads first, so a heavy video or poster in the first screen can slow the page. Compress files, use a light poster image, avoid autoplaying large files on mobile, and load videos further down the page only when needed.",
    },
    {
      q: "How long should a product video be?",
      a: "Shopify's product video guide puts a typical product video between 15 seconds and two minutes, with 30 to 60 seconds as the sweet spot. Tutorials and in-depth overviews can run up to 10 minutes. For the product gallery, a 15 to 45 second demo usually answers the main question without asking too much of a shopper.",
    },
    {
      q: "Should I host product videos on Shopify or YouTube?",
      a: "Upload short gallery demos to Shopify, which streams them at a quality that suits each viewer and keeps shoppers on your page. Use YouTube for longer tutorials you also want found there; Google may index an embedded YouTube video both on your page and on YouTube. Many stores use both.",
    },
    {
      q: "Can I reuse ad videos on product pages?",
      a: "Yes, with two checks. Recut the video without the ad-style hook and offer text, since product page shoppers need the demo, not the pitch. And confirm your agreement with any creator covers website use as well as ads, because usage rights are often limited to specific platforms and time periods.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: Product media types",
      href: "https://help.shopify.com/en/manual/products/product-media/product-media-types",
    },
    {
      label: "Shopify Blog: Product videos, best practices and examples",
      href: "https://www.shopify.com/blog/product-video",
    },
    {
      label: "Google Search Central: Video SEO best practices",
      href: "https://developers.google.com/search/docs/appearance/video",
    },
    { label: "web.dev: Largest Contentful Paint (LCP)", href: "https://web.dev/articles/lcp" },
    {
      label: "Meta Ads Guide: Instagram Reels video ad specifications",
      href: "https://www.facebook.com/business/ads-guide/update/video/instagram-reels",
    },
  ],
  internalLinks: [
    { label: "UGC ads for Shopify brands", to: "/blog/ugc-ads-for-shopify-brands" },
    {
      label: "Meta ads creative testing on a small budget",
      to: "/blog/meta-ads-creative-testing-small-budget",
    },
    { label: "Shopify INP and Core Web Vitals", to: "/blog/shopify-inp-core-web-vitals" },
    { label: "Shopify ADA compliance checklist", to: "/blog/shopify-ada-compliance-checklist" },
    { label: "Video editing and ads", to: "/services/video-editing-and-ads" },
  ],
  cta: {
    title: "Planning a product shoot for your Shopify store?",
    body: "Send us your product list and the pages you want video on. We'll suggest a shot list, the outputs to cut from it, and how to add them without slowing your product pages.",
  },
};

export default post;
