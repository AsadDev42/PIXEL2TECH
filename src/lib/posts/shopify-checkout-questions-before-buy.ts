import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Shopify Checkout Questions Customers Ask Before They Buy (and Where to Answer Them)",
  metaTitle: "Shopify Checkout Questions to Answer Before They Buy",
  metaDescription:
    "Most abandoned checkouts start with an unanswered question. The questions Shopify customers ask before they buy, and where on your store each answer belongs.",
  ogTitle: "Shopify Checkout Questions Customers Ask Before They Buy (and Where to Answer Them)",
  ogDescription:
    "Most abandoned checkouts start with an unanswered question, not a bad product. The questions Shopify customers ask before they buy, and exactly where on your store each answer belongs.",
  keywords: [
    "Shopify checkout",
    "abandoned checkout",
    "Shopify checkout questions",
    "delivery and returns",
    "guest checkout",
    "Shopify store optimisation",
    "ecommerce checkout",
  ],
  keyTakeaways: [
    "Most abandoned checkouts start with an unanswered question, not a bad product.",
    "Put delivery, returns and fit answers near the buy button on the product page.",
    "Show the full total, including delivery, in the cart before checkout.",
    "Answer payment, account and security questions on the checkout page itself, and offer guest checkout where possible.",
    "Answer shipping, tracking and contact questions in the order confirmation email and on the order status page.",
    "Audit your own store as a customer and fix the product page first, then the cart, then checkout, then the confirmation email.",
  ],
  faqs: [
    {
      q: "Why do customers abandon a Shopify checkout?",
      a: "Store owners often blame price, and sometimes price is the reason. More often, the customer had a simple question they could not answer quickly, such as how much delivery costs, when the order will arrive, whether returns are easy, or whether they need an account. Each unanswered question is a reason to pause, and a paused customer often does not come back.",
    },
    {
      q: "Where should delivery and returns information go on a Shopify store?",
      a: 'Put it on the product page, near the buy button, in one or two short lines with a link to full details. A line such as "Delivery in 3 to 5 working days. Free returns within 30 days." answers more than a paragraph buried lower on the page. If delivery cost varies by location, say so plainly and let customers check it before checkout.',
    },
    {
      q: "Should I offer guest checkout on my Shopify store?",
      a: 'Yes, where your store allows it. "Do I need an account?" is one of the questions customers ask at checkout, and forcing an account adds friction at the moment they are deciding whether to pay. Keep the rest of the form short as well, asking only for what you need to fulfil the order and explaining any field that is not obvious.',
    },
    {
      q: "Is a longer FAQ page the best way to reduce abandoned checkouts?",
      a: "Usually not. Customers rarely leave checkout to read a separate FAQ page. It works better to put each answer where the question comes up: delivery and returns on the product page, the full total in the cart, payment and account answers on the checkout page, and shipping and contact details in the order confirmation email.",
    },
    {
      q: "How can I find out which questions are stopping my Shopify checkout?",
      a: "Open your own store as a customer and go through it without buying. On each page, write down every question you ask yourself and note whether the answer is on that page or hidden elsewhere. Then fix the product page first, followed by the cart, checkout and the confirmation email. Five or six short, well placed answers often recover more checkouts than a redesign.",
    },
  ],
  internalLinks: [
    {
      label: "Shopify Black Friday Checklist 2026: Fix Checkout, Stop Bots",
      to: "/blog/shopify-bfcm-2026-checklist",
    },
    {
      label: "WordPress Maintenance: The Monthly Tasks That Stop Small Problems Becoming Downtime",
      to: "/blog/wordpress-monthly-maintenance-tasks",
    },
    {
      label: "Colour and Type Choices That Make a Small Brand Look Established",
      to: "/blog/colour-type-choices-small-brand-look-established",
    },
  ],
  cta: {
    title: "If your checkout loses customers you cannot explain, start with the questions above",
    body: "Pixel2Tech builds and improves Shopify stores for online brands, including product pages, checkout flows and post purchase emails that answer customer questions before they become abandoned carts. If your checkout loses customers you cannot explain, start with the questions above.",
  },
  content: [
    {
      heading: "Abandoned checkouts are often unanswered questions",
      body: [
        "When a customer leaves a Shopify checkout, store owners often assume the price was too high. Sometimes it was. More often, the customer had a simple question and could not find a quick answer: how much is delivery, when will it arrive, can I return it, is my payment safe, do I need an account? Each unanswered question is a reason to pause, and a paused customer often does not come back.",
        "The fix is not a longer FAQ page that nobody reads at checkout. It is putting each answer in the place where the question arises.",
      ],
    },
    {
      heading: "On the product page: delivery, returns and fit",
      body: [
        "Delivery and returns questions start on the product page, long before checkout. A customer deciding between two similar products wants to know, before adding anything to the cart, roughly how long delivery takes and whether returns are straightforward.",
        'Answer these questions near the buy button, in one or two short lines, with a link to full details. A line such as "Delivery in 3 to 5 working days. Free returns within 30 days." answers more than a paragraph buried at the bottom of the page. If delivery cost varies by location, say so plainly and let the customer check it before checkout, not during it.',
        "Fit and use questions belong here too. Size guides, what's included, and how the product is used should sit close to the product description and images. A customer who has to search for basic product facts will assume the store has not thought about them.",
      ],
    },
    {
      heading: "In the cart: total cost and discount doubts",
      body: [
        "The cart is where cost questions appear. Customers want to see the full total, including delivery, before they commit to checkout. A cart that hides delivery cost until the final step creates a surprise, and surprises at this stage usually end in abandonment.",
        "Show the delivery estimate in the cart where possible, and make discount codes easy to find and apply. If a code does not apply, explain why in plain words instead of showing a bare error. A customer who cannot use a code they saw advertised will leave feeling misled, even if the code was never meant for their item.",
      ],
    },
    {
      heading: "At checkout: payment, accounts and security",
      body: [
        "Checkout questions are about trust and friction. Customers ask: do I need an account, which payment methods do you accept, is my card safe, and what happens after I pay? Answer each one on the checkout page itself, not only on a separate help page.",
        'Offer guest checkout where your store allows it. State the payment methods clearly, with the logos customers recognise. A short note about what happens next, for example "You will receive an order confirmation by email within a few minutes, with tracking when your order ships," removes the uncertainty that follows payment.',
        "Keep the form short. Every field you add is a chance for a customer to stop. Ask only for what you need to fulfil the order, and explain any field that is not obvious.",
      ],
    },
    {
      heading: "After purchase: the questions that decide repeat orders",
      body: [
        "Questions do not stop at payment. Customers wonder when the order will ship, how to track it, and who to contact if something is wrong. An order confirmation email that answers those three questions, with a real contact route, prevents support messages and builds confidence for a second order.",
        "The same applies to the order status page. If tracking is delayed, say so, and give a time when it should appear. Silence after purchase is interpreted as a problem, even when the order is perfectly on track.",
      ],
    },
    {
      heading: "A simple audit you can run this week",
      body: [
        "Open your own store as a customer and buy nothing. On each page, write down every question you ask yourself, and note whether the answer is on that page or hidden elsewhere. Fix the product page first, then the cart, then checkout, then the confirmation email. Most stores find that five or six short, well placed answers recover more checkouts than a redesign.",
        "Pixel2Tech builds and improves Shopify stores for online brands, including product pages, checkout flows and post purchase emails that answer customer questions before they become abandoned carts. If your checkout loses customers you cannot explain, start with the questions above.",
      ],
    },
  ],
};

export default post satisfies PostBody;
