import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "How to Write Meta Descriptions Customers Actually Click",
  metaTitle: "How to Write Meta Descriptions That Get Clicks",
  metaDescription: "A good meta description earns the click before the page loads. Here is how to write one that matches search intent and brings in the right visitors.",
  ogTitle: "How to Write Meta Descriptions Customers Actually Click",
  ogDescription: "A good meta description earns the click before the page loads. Here is how to write one that matches search intent and brings in the right visitors.",
  keywords: [
    "write meta descriptions customers click",
    "meta description guide",
    "meta descriptions SEO clicks",
    "improve click through rate search",
    "Pixel2Tech SEO"
  ],
  keyTakeaways: [
    "A meta description should answer the searcher's question in one or two plain sentences.",
    "Put the main keyword and the benefit early, because long descriptions get cut off on small screens.",
    "Match the words to the search intent, so the click brings a visitor who actually wants your service.",
    "Every page needs its own description, because a copied one tells Google the pages are the same.",
    "Check your click through rate in Search Console and rewrite the descriptions that get seen but not clicked."
  ],
  faqs: [
    {
      q: "How long should a meta description be?",
      a: "Keep it under 160 characters, and put the important words in the first half. Longer descriptions get cut off, especially on phones, so the key message must come early.",
    },
    {
      q: "Do meta descriptions affect Google rankings?",
      a: "No, Google does not use them as a ranking factor. They do affect clicks, though, and more clicks from the right visitors is real traffic that helps the business.",
    },
    {
      q: "Should I include the keyword in the meta description?",
      a: "Yes, include the main keyword near the start, in the searcher's own words. It shows the reader the page matches their search, and Google often highlights it in the results.",
    },
    {
      q: "What if I leave the meta description blank?",
      a: "Google will write one for you by pulling text from the page, and that text is rarely the best summary. Writing your own description takes five minutes and gives you control over the first impression.",
    },
  ],
  internalLinks: [
    {
      label: "Search Intent for Service Pages: Match the Page to What the Customer Actually Wants",
      to: "/blog/search-intent-service-pages",
    },
    {
      label: "How to Get Cited by AI Search: A Practical Guide for Service Websites",
      to: "/blog/get-cited-ai-search-service-websites",
    },
  ],
  cta: {
    title: "Write meta descriptions that earn the click",
    body: "Pixel2Tech writes SEO and search growth content that earns clicks from the right visitors, from meta descriptions to full service pages. If your pages appear in search but nobody clicks, an SEO review is a practical place to start.",
  },
  content: [
    {
      heading: "Answer the question, not your company history",
      body: [
        "A meta description is the short text under your page title in Google search results. It is often the first thing a customer reads about your business, and it decides whether they click your page or the one below it. Google does not use it as a ranking factor, but the click it earns is real traffic, and real traffic is what matters. Most meta descriptions fail because they describe the business instead of answering the searcher. Write for the person who typed the query, not for your own company brochure.",
        "Searchers type a problem into Google. They scan the results for the page that solves it. A meta description that says \"We are a leading provider of quality services since 2010\" answers nothing, so it gets skipped. A description that says what the page does for the reader gets the click.",
        "Start by finding the question behind the keyword. Someone searching for \"emergency plumber near me\" wants to know if you are available now and how fast you come. Someone searching for \"how much does a website cost\" wants a price guide, not a sales pitch. Write the description as a direct answer to that question, in the words the searcher would use. For help matching pages to what searchers actually want, read [Search Intent for Service Pages](/blog/search-intent-service-pages)."
      ],
    },
    {
      heading: "Put the keyword and the benefit in the first half",
      body: [
        "Google shows about 155 to 160 characters of a meta description on desktop, and often less on a phone. If the important words sit at the end, the searcher never sees them. Put the main keyword near the start, and follow it immediately with the benefit: what the reader will learn, find, or be able to do after clicking.",
        "A useful shape is simple. First, name the topic in the searcher's words. Second, say what the page gives them. Third, add a reason to click now, such as a guide, a checklist, or a clear next step. Keep the whole thing under 160 characters so it shows in full. Count the characters before you publish, because a description that gets cut off mid sentence looks unfinished."
      ],
    },
    {
      heading: "Match the description to the search intent",
      body: [
        "A meta description fails when it promises one thing and the page delivers another. The visitor clicks, finds the wrong content, and leaves within seconds. That wasted click also tells Google the page was not a good match, which hurts the page over time. The description and the page must agree.",
        "Check the intent before you write. Informational searches want a guide or an answer, so promise a clear explanation. Commercial searches want a comparison or a price, so promise the facts that help a decision. Local searches want a place and a service, so name the service and the area. When the description matches the intent, the click brings a visitor who stays, and that is the visitor worth having."
      ],
    },
    {
      heading: "Write a unique description for every page",
      body: [
        "It is tempting to copy one good description across similar pages, or to leave the field blank and let Google write one for you. Both are mistakes. A copied description tells Google the pages are near duplicates, and a missing description means Google picks whatever text it finds, which is rarely the best sales line on the page.",
        "Give every important page its own description, even if the pages look similar. A service page and a location page for the same service need different descriptions, because the searcher behind each one wants something different. Pages that rarely appear in search can share a simpler pattern, but the pages that bring in customers deserve individual attention. Good meta descriptions also help AI search tools cite your pages, as covered in [How to Get Cited in AI Search](/blog/get-cited-ai-search-service-websites)."
      ],
    },
    {
      heading: "Test, measure, and rewrite the weak ones",
      body: [
        "Meta descriptions are not finished when they are published. They are a test you run every month. Open Search Console, find the pages that appear in search often but get few clicks, and read their descriptions as a searcher would. Ask one question: does this tell me why to click this page instead of the others?",
        "Rewrite the weakest five descriptions each month, one change at a time, and check the result after four weeks. Small changes work well: a clearer benefit, a more specific keyword, or a direct answer instead of a vague promise. Over a few months, the pages that matter most will carry descriptions that earn their clicks, and the habit costs less than an hour a month."
      ],
    },
  ],
};

export default post satisfies PostBody;
