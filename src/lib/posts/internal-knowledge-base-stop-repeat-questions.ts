import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "An Internal Knowledge Base That Stops Repeat Questions: A Simple Build Guide",
  metaTitle: "Internal Knowledge Base: Stop Repeat Questions",
  metaDescription: "The same questions keep reaching your team because the answers live in people's heads. A simple internal knowledge base fixes that.",
  ogTitle: "An Internal Knowledge Base That Stops Repeat Questions: A Simple Build Guide",
  ogDescription: "The same questions keep reaching your team because the answers live in people's heads. A simple internal knowledge base fixes that.",
  keywords: [
    "internal knowledge base",
    "stop repeat questions team",
    "build knowledge base guide",
    "team knowledge base setup",
    "Pixel2Tech custom platforms"
  ],
  keyTakeaways: [
    "A knowledge base turns repeated questions into searchable answers, so the team stops interrupting the same people.",
    "Start with the questions your team actually asks, not with a grand plan to document everything.",
    "One short page per topic beats one long document nobody can search.",
    "Give every page an owner and a review date, or the answers will quietly go out of date.",
    "Launch small, with the ten most asked questions, and grow it from real use."
  ],
  faqs: [
    {
      q: "What tool should we use for a knowledge base?",
      a: "Use the tool your team already opens every day, whether that is a wiki, a shared docs system, or a custom portal. The best tool is the one people will actually search, not the one with the most features.",
    },
    {
      q: "How long should each page be?",
      a: "Short enough to answer the question in one read, usually a few short paragraphs or a numbered list of steps. If a page grows long, split it into two pages with clear titles.",
    },
    {
      q: "Who should write the pages?",
      a: "The person who knows the answer best writes the first draft, and the page owner keeps it current. Short, plain writing matters more than polished writing, because the reader needs the answer, not the prose.",
    },
    {
      q: "What if the team keeps asking in chat instead of searching?",
      a: "Make the base easy to reach, reply with links when a question is already answered there, and add a page for any question asked twice. Habits change when the base proves faster than waiting for a reply.",
    },
  ],
  internalLinks: [
    {
      label: "Lead Follow Up That Does Not Depend on Memory: A Simple CRM Routine for Small Teams",
      to: "/blog/lead-follow-up-crm-routine-small-teams",
    },
    {
      label: "A Customer Portal That Customers Actually Use: What to Include in Version One",
      to: "/blog/customer-portal-customers-actually-use",
    },
  ],
  cta: {
    title: "Give your team a knowledge base that saves time",
    body: "Pixel2Tech builds custom platforms and internal tools, including knowledge bases and customer portals that teams actually use. If repeat questions are eating your team's time, a small internal platform is a practical place to start.",
  },
  content: [
    {
      heading: "Start with the questions your team actually asks",
      body: [
        "Every team has questions that get asked again and again: how do we handle this client request, where is that file, what is the process for this task? When the answers live only in people's heads, every new starter asks the same things and every busy day interrupts the one person who knows. An internal knowledge base fixes this. It is one place where the team writes down how things work, so the answer is found in a search instead of a message.",
        "Do not start by trying to document the whole business. Start by listing the questions the team asks most often. Ask everyone to note the questions they answer more than once a week for a fortnight. The list is usually short and very practical: how to process a refund, how to set up a new client, where the brand files live, what to say when a client asks for a discount.",
        "Write the answers to those questions first. Ten good pages that solve real interruptions are worth more than a hundred pages nobody reads. If a question is asked often but has no clear answer, writing the page forces the team to agree on one, which is a benefit in itself."
      ],
    },
    {
      heading: "One short page per topic, written to be found",
      body: [
        "A knowledge base works when a person can find the answer in under a minute. That means one page per topic, with a clear title that matches the words people actually search for. \"How to process a refund\" beats \"Finance procedures, section 4\". Write the steps in order, in plain language, and keep each page short enough to read without scrolling far.",
        "Add the details that save a follow up question: who to contact if the steps do not work, a link to the right form or file, and the date the page was last checked. A page that answers the question and the next question is a page the team will trust. For the handover thinking behind this, read [Lead Follow Up That Does Not Depend on Memory](/blog/lead-follow-up-crm-routine-small-teams)."
      ],
    },
    {
      heading: "Give every page an owner and a review date",
      body: [
        "The most common reason a knowledge base fails is stale answers. A process changes, nobody updates the page, and the team stops trusting the whole system. Prevent this by giving every page one owner and one review date. The owner does not have to write every word, but they are responsible for checking that the page is still right.",
        "Set a simple rhythm: each owner reviews their pages once a quarter, or whenever the process changes. A short note at the bottom of each page, \"Last checked: November 2026, by Sarah\", tells the reader the answer is current. Pages with no owner and no date are the ones that go stale first, so do not publish a page until both are set."
      ],
    },
    {
      heading: "Make it the easiest place to find an answer",
      body: [
        "A knowledge base only works if reaching for it is easier than messaging a colleague. Put the search box where the team already works: on the intranet home page, inside the chat tool, or as a pinned link. If finding the base takes more effort than asking in chat, people will keep asking in chat.",
        "Encourage the habit gently. When someone answers a question in chat that the base already covers, reply with the link as well as the answer. When a new question comes up twice, add a page for it the same week. The base grows from real questions, and the team learns to check it first because it keeps saving them time."
      ],
    },
    {
      heading: "Launch small and grow from real use",
      body: [
        "A knowledge base does not need a big launch. Pick the ten most asked questions, write those pages, and tell the team where to find them. Then watch what people search for and which pages get used. The searches that find nothing are your next pages to write. The pages nobody opens may need a better title or may simply not be needed.",
        "Measure the simplest thing: are repeat questions falling? Ask the team once a month what they still have to ask a colleague about. Each answer that moves into the base is time given back to the whole team. A small base that grows from use will last far longer than a large one written in a single push and never updated."
      ],
    },
  ],
};

export default post satisfies PostBody;
