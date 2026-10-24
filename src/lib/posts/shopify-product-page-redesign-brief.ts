import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Shopify Product Page Redesign: What to Fix First",
  metaDescription:
    "Redesign Shopify product pages around buying questions, useful product data and mobile choices. Use this brief to scope the work and check delivery.",
  keyTakeaways: [
    "Identify the buying decision that is difficult before choosing a new layout.",
    "Include content, product data, variant states and merchant editing in the scope.",
    "Check representative products and measure commercial effects separately from delivery.",
  ],
  content: [
    {
      heading: "When does a Shopify product page need a redesign?",
      body: [
        "A Shopify product page redesign is useful when shoppers cannot confidently choose the right item, understand the offer or complete the next step. Start by identifying that decision problem. Replacing the layout simply because it looks old can leave missing product information, confusing variants and unclear delivery terms untouched.",
        "Compare several real products before commissioning a new template. A single-size accessory, a shoe with colour and size choices and a bundle may need different information. Record customer questions alongside the page URL and device. Support messages, onsite search terms and screen recordings can provide useful evidence, subject to your privacy settings. None of those sources alone proves why someone abandoned an order.",
        "This guide helps a store owner brief a focused product-page project. It covers the template, content, data and checks needed before publishing. If the problem extends across navigation, cart and tracking, start with our [free Shopify store checklist](/resources/shopify-store-checklist) to avoid treating every store issue as a product-page issue.",
      ],
    },
    {
      heading: "Separate a content gap from an interface problem",
      body: [
        "Imagine a footwear store receiving repeated questions about fit. If the page has no size measurements, changing the button colour will not answer them. The missing input is product information. If measurements exist but are buried beneath unrelated content, the interface is also part of the problem. Write both findings into the brief so the designer and merchant have clear responsibilities.",
        "A useful issue log contains the product URL, the customer question, the current evidence, the proposed change and the person supplying the information. ‘Improve conversion’ is a business goal, but it is not a build instruction. ‘Place the approved size chart beside the size selector and make it usable on a phone’ is a change a team can design, implement and test.",
        "Prioritise problems that block selection or create incorrect expectations. Missing availability states, misleading package contents and unclear recurring commitments can deserve attention before a decorative image carousel. Keep a separate list for improvements that need new photography, copy approval or operational decisions; a developer cannot resolve those by rearranging the template.",
      ],
    },
    {
      heading: "Map the information to the buying decision",
      body: [
        "List what the customer needs to know in order: what this is, whether it fits the need, which option to choose, what it costs and what happens after ordering. The order can vary by category. A skincare buyer may need ingredients and usage information; a furniture buyer may need dimensions and assembly details; a footwear buyer may need fit guidance and available sizes.",
        "Use a consistent content model for repeated information. Shopify supports specialised product information through metafields, which compatible themes can reference in the editor. [Shopify’s product documentation](https://help.shopify.com/en/manual/products/add-update-products) explains that relationship. Agree the field names, fallback behaviour and responsibility for populating them before the design depends on that data.",
        "Avoid squeezing every reassurance into the area around the purchase button. Keep the immediate decision clear, then group supporting detail under descriptive headings. Claims, reviews and guarantees should come from approved business information. Never add invented ratings, urgency counters or unsupported benefits to make a mockup look more persuasive. The finished page needs to represent the actual offer.",
      ],
    },
    {
      heading: "Design every variant state, not only the ideal screenshot",
      body: [
        "A product template has several states: nothing selected, an available combination selected, an unavailable combination, a sold-out item and a failed add-to-cart action. Ask the team to show those states. The selected option should remain understandable without depending only on a subtle colour change, and the cart should receive the same item the shopper chose.",
        "Check whether changing a variant needs to update the image, price, availability or other information. Document the expected behaviour using real catalogue examples. If a product has different pricing by option, a static mockup showing one attractive price does not explain the implementation. If an app controls bundles or subscriptions, include that dependency in the review.",
        "Test the return journey too. A shopper may open a size guide, return to the page, change a quantity and inspect the cart. Their context should remain clear. Do not assume that adding a sticky purchase bar solves these problems; it can repeat an incomplete choice or cover useful content. Introduce it only when its behaviour is defined and checked.",
      ],
    },
    {
      heading: "Use product media to answer specific questions",
      body: [
        "Give each image a job. A primary image identifies the product, a detail image explains material or finish, a scale image helps with dimensions and an in-use image shows context. A short demonstration may be useful when the buying question involves movement or a process. More media is not automatically better if the images repeat the same information.",
        "Prepare an asset list with the product, required view, source file, approval status and intended placement. Tell the designer which images are final and which are placeholders. If the project includes video, define the action to demonstrate and whether captions, alternate crops or a poster image are needed. Our [product video guide](/blog/shopify-product-video-guide) covers that separate production decision.",
        "Performance belongs in the media brief. Ask how large images are delivered, what loads immediately and how the page behaves before all media arrives. Review actual product pages on a representative phone and connection. A fast blank template is not useful evidence for a catalogue page filled with real images and app widgets. Capture the conditions when comparing results.",
      ],
    },
    {
      heading: "Write a scope that includes editing and maintenance",
      body: [
        "A practical scope names the product families covered, the templates being changed, reusable information blocks and app integrations. It also identifies excluded work: new photography, catalogue clean-up, checkout changes or translation may require separate tasks. If several stores or markets are involved, list them explicitly rather than assuming one template behaves identically everywhere.",
        "Include merchant editing in the acceptance criteria. Ask the developer to demonstrate how your team changes a size guide, product note or image without editing code. Decide what happens when a field is empty. A template that looks complete only with the developer’s sample product can become inconsistent as soon as your team adds a new item.",
        "Before implementation, agree where the work will be previewed and how the existing theme can be restored. Shopify recommends [duplicating a theme before customisation](https://help.shopify.com/en/manual/online-store/themes/managing-themes/duplicating-themes). That is a theme copy, not a complete backup of all store data. Your launch plan should separately account for any catalogue, navigation or app-setting changes.",
      ],
    },
    {
      heading: "Check the finished page with a small acceptance matrix",
      body: [
        "Choose representative products rather than testing only the one used in the presentation. Include a simple item, a multi-variant item, a sold-out item and a product with optional data missing. Repeat the relevant shopping actions on desktop and mobile, and check keyboard access to menus, controls and information panels. Record pass or fail with the exact product and device.",
        "For each case, verify that the title, price and selected variant agree; the correct variant and quantity reach the cart; unavailable choices are explained; approved delivery and returns information is accessible; and empty content blocks do not leave broken spacing. Test any agreed events with the analytics owner rather than assuming a button click equals a successful purchase.",
        "Compare post-launch behaviour with a baseline that includes traffic sources, promotions, stock availability and the measurement period. A design change does not independently prove a revenue increase. If traffic or the offer changed at the same time, describe that uncertainty. The immediate delivery outcome is a working, maintainable product template; commercial results require observation after launch.",
      ],
    },
    {
      heading: "Questions to ask before approving the proposal",
      body: [
        "Ask the team to walk through one representative product with you. Which information comes from standard product fields, which needs new fields and which is controlled by an app? This short exercise exposes dependencies that can disappear inside a broad promise to redesign the page. Request an explicit list of what the merchant must supply before implementation can be completed.",
        "Ask how the new template will be applied. Some products may use a different template or an app-controlled layout, and changing one assignment may not update the whole catalogue. Agree how those exceptions will be identified and checked. Also ask which theme settings remain editable and which behaviours would require a developer to change later.",
        "Finally, request a launch checklist with a named approver and a way to restore the prior theme if an agreed check fails. Keep a record of product-data changes separately from theme changes. This gives the business a more useful handover than a final screenshot and helps the team make a controlled publication decision.",
      ],
    },
    {
      heading: "A product-page brief you can send to an agency",
      body: [
        "Use this example as a starting structure, not a description of an actual client result: ‘We sell footwear on Shopify. Customers ask about fit, and the current size selection is hard to distinguish on mobile. We need an improved product template using our approved measurements, existing product photography and current theme. Please include available, unavailable and sold-out states, cart checks and merchant editing guidance.’",
        "Attach three representative product links, the current theme name, relevant app names, approved content and your issue log. State who approves design and who can confirm product facts. Ask the agency to explain what stays within the current theme and what needs custom development. Our [theme customisation comparison](/blog/shopify-theme-customization-vs-custom-theme) can help you frame that discussion.",
        "For a concrete portfolio reference, [Hi Street’s Shopify project](/portfolio/histreet-shopify-store) shows style-based navigation, size choices and product guidance in a footwear catalogue. Pixel2Tech can review your current product journey, define the required changes and build an agreed scope. Send the store URL and the buying questions customers struggle with so the conversation starts with evidence rather than a generic redesign.",
      ],
    },
  ],
  internalLinks: [
    { label: "Shopify store review checklist", to: "/resources/shopify-store-checklist" },
    { label: "Shopify project outcomes", to: "/results" },
    { label: "Discuss a product-page project", to: "/contact" },
  ],
  sources: [
    {
      label: "Shopify: adding and updating products",
      href: "https://help.shopify.com/en/manual/products/add-update-products",
    },
    {
      label: "Shopify: duplicating themes",
      href: "https://help.shopify.com/en/manual/online-store/themes/managing-themes/duplicating-themes",
    },
  ],
  cta: {
    title: "Make the next product-page update purposeful.",
    body: "Send your store URL, three representative products and the questions shoppers keep asking. We can discuss the content, template changes and checks your project needs.",
  },
};
export default post;
