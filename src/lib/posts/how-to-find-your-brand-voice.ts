import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "How to Find Your Brand Voice: A Practical Guide",
  metaDescription:
    "How to find a brand voice that fits your business, write it down in plain words and keep it consistent across your website, emails and ads.",
  keyTakeaways: [
    "Brand voice is how your business talks when it writes: its tone, word choices and attitude, not a slogan.",
    "Start with your customers' worries and what they need to feel, not a bigger competitor's voice.",
    "Describe three or four traits with examples and opposites, and keep the guide to one page where writers work.",
    "Test the voice on your home page, emails, ads and forms, and review it twice a year.",
  ],
  faqs: [
    {
      q: "What is brand voice, and how is it different from a tagline?",
      a: "Brand voice is how your business talks when it writes: the tone, word choices and attitude that show up in every message. A tagline is a single line, while voice runs through your website, emails, ads and forms. A clear voice makes a business feel like one team instead of several strangers sharing a logo.",
    },
    {
      q: "How do I find my brand voice as a small business?",
      a: "Start with your customers rather than a bigger competitor. Ask who is reading, what they worry about, what they need to feel before they contact you, and what would sound wrong to them even if it sounds clever. Then choose three or four voice traits, explain each with an example, and write down the opposite of each trait.",
    },
    {
      q: 'Why are descriptions like "professional yet friendly" not enough for a brand voice?',
      a: 'Vague phrases can mean almost anything, so they do not help anyone write. Describe each trait with what you actually do, for example: "We are warm and direct. We greet the reader, answer the question in the first two sentences, and avoid jargon." Adding an opposite, such as warm but not chatty, stops writers drifting to either extreme.',
    },
    {
      q: "How long should a brand voice guide be?",
      a: "One page is enough for most small teams. Include your three or four traits with short examples, words you use and avoid, how you open an email, web page and ad, how you handle bad news, and two before and after rewrites. Keep it where writers actually work, next to your brand colours and logo files.",
    },
    {
      q: "How do I keep a brand voice consistent when freelancers or new staff write for us?",
      a: "Make the voice page part of every brief, and ask new writers to rewrite one existing paragraph in your voice before they start a larger job. That short test shows misunderstandings early, when they are cheap to fix. Review the voice twice a year, keeping what still fits and updating what sounds dated.",
    },
  ],
  content: [
    {
      heading: "Why brand voice matters more than a tagline",
      body: [
        "Most small businesses spend weeks on a logo and minutes on how they sound. Then the website sounds formal, the emails sound casual, and the ads sound like someone else wrote them. Visitors notice the mismatch, even if they cannot name it. They feel less sure about who they are dealing with.",
        "Brand voice is simply how your business talks when it writes. It is not a slogan. It is the tone, the word choices and the attitude that show up in every message. A clear voice makes a business feel like one team instead of several strangers sharing a logo.",
      ],
    },
    {
      heading: "Start with your customer, not your competitors",
      body: [
        "A common mistake is copying the voice of a bigger competitor. Their voice fits their customers, their prices and their history. Yours should fit the people you actually serve.",
        "Ask three questions before you write a single guideline:",
        "1. Who is reading this, and what do they worry about?",
        "2. What do they need to feel before they contact you?",
        "3. What would sound wrong to them, even if it sounds clever?",
        "A law firm client wants calm and precise language. A fitness coach client wants energy and encouragement. A home services customer wants plain, reassuring instructions. The right voice follows the reader, not the trend.",
      ],
    },
    {
      heading: "Describe your voice in plain words",
      body: [
        'Vague descriptions like "professional yet friendly" do not help anyone write. They can mean almost anything. Choose three or four traits and explain each one with an example.',
        'For example, instead of "friendly", write: "We are warm and direct. We greet the reader, answer the question in the first two sentences, and avoid jargon." Instead of "expert", write: "We explain the reason behind a recommendation in one short sentence, so the reader can judge it for themselves."',
        "Then add the opposite for each trait. If you are warm and direct, you are not chatty for its own sake. If you are expert, you are not academic. Opposites stop writers from drifting to either extreme.",
      ],
    },
    {
      heading: "Build a small voice guide, not a long document",
      body: [
        "You do not need a fifty page manual. One page is enough for most small teams. It should include:",
        "- The three or four voice traits, each with a short example",
        "- Words you use often, and words you avoid",
        "- How you open an email, a web page and an ad",
        "- How you handle bad news, such as a delay or a price increase",
        "- Two before and after examples that show a weak sentence rewritten in your voice",
        "Keep this page where writers actually work. A guide hidden in a shared drive helps nobody. Pin it in the same place as your brand colours and logo files.",
      ],
    },
    {
      heading: "Test the voice on real pages",
      body: [
        "Once the guide exists, test it on the pages customers see first. Read your home page out loud. Does it sound like the same business that sends your emails? Read a recent ad. Would a customer recognise it as yours without seeing the logo?",
        "Pay special attention to forms and error messages. These are often written last and they reveal the real voice of a business. A warm brand that shows a cold, technical error message has a gap worth fixing.",
      ],
    },
    {
      heading: "Keep it consistent when more people write for you",
      body: [
        "Consistency breaks when a new freelancer, agency or team member joins and nobody shares the guide. Make the voice page part of every brief. Ask new writers to rewrite one existing paragraph in your voice before they start a larger job. That short test shows misunderstandings early, when they are cheap to fix.",
        "Review the voice twice a year. Businesses change, services change and customers change. A short review keeps the voice current without starting from scratch. Keep what still fits, update what sounds dated, and remove traits nobody follows.",
      ],
    },
    {
      heading: "A simple starting point",
      body: [
        "If you have no voice guide today, start with one page and one rule: every piece of writing should answer the reader's question early, in words the reader would use themselves. That single habit improves more pages than any list of clever phrases.",
        "Pixel2Tech helps service businesses build brand systems that stay consistent, from logo and colours to the words on every page. If your website, emails and ads sound like different businesses, a brand voice guide is a practical place to start.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Branding beyond the logo",
      to: "/blog/branding-beyond-the-logo",
    },
    {
      label: "Brand guidelines checklist",
      to: "/blog/brand-guidelines-for-small-business",
    },
    {
      label: "Brand identity process for startups",
      to: "/blog/brand-identity-process-for-startups",
    },
  ],
  cta: {
    title: "Make your website, emails and ads sound like one business",
    body: "If your website, emails and ads sound like different businesses, a brand voice guide is a practical place to start.",
  },
} satisfies PostBody;

export default post;
