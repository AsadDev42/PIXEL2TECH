import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Internal Tools Your Team Will Actually Use: A Practical Build Guide",
  metaTitle: "Internal Tools Your Team Will Actually Use",
  metaDescription: "Internal tools fail when they ignore daily work. A practical guide to building tools your team will actually use, from the first workflow to launch.",
  ogTitle: "Internal Tools Your Team Will Actually Use: A Practical Build Guide",
  ogDescription: "Internal tools fail when they ignore daily work. A practical build guide for building internal tools your team will actually use, from the first workflow to launch.",
  keywords: [
    "internal tools small business",
    "custom internal tools",
    "build internal tools",
    "team workflow software",
    "Pixel2Tech custom platforms"
  ],
  keyTakeaways: [
    "Build around one real workflow that the team repeats every week, not a list of requested features.",
    "Design for the busiest user first, because that person decides whether the tool survives.",
    "Keep version one small and ship it early, then improve it from real use.",
    "Treat permissions, search and exports as core features, not later additions.",
    "Launch with short training and a clear owner, then measure use every week."
  ],
  faqs: [
    {
      q: "How do we choose the first workflow to build?",
      a: "Choose the workflow the team repeats most often and complains about most clearly. A daily or weekly task with clear steps and a visible cost when it goes wrong is the right start.",
    },
    {
      q: "Should we build an internal tool or buy software?",
      a: "Buy when standard software fits the workflow well and the cost is clear. Build when the workflow is specific to your business, when off the shelf tools need constant workarounds, or when the process itself is a strength worth keeping. Our guide to [a custom booking platform versus off the shelf software](/blog/custom-booking-platform-vs-off-the-shelf-software) uses the same test.",
    },
    {
      q: "How long should version one take?",
      a: "Long enough to cover one workflow properly, including permissions, search, and a simple export. If version one covers several workflows, it is probably too large. Cut scope until one workflow is solid.",
    },
    {
      q: "Who should own the tool after launch?",
      a: "One named person should own it, with time set aside to collect feedback and fix problems. Without an owner, small issues pile up until the team stops using the tool.",
    },
  ],
  internalLinks: [
    {
      label: "A Customer Portal That Customers Actually Use",
      to: "/blog/customer-portal-customers-actually-use",
    },
  ],
  cta: {
    title: "Build internal tools your team will actually use",
    body: "Pixel2Tech builds custom platforms and internal tools for service businesses in Los Angeles, New York, New Jersey, Dubai, Qatar, Malaysia, Singapore, Peru, Spain, and Italy. If your team still runs key work through spreadsheets and message threads, a small, focused internal tool is often the right next step. Talk to us through pixel2tech.com/contact and we will help you pick the first workflow to build.",
  },
  content: [
    {
      heading: "Start with the job, not the feature list",
      body: [
        "An internal tool earns its place only when the team reaches for it without being told. Many internal tools fail not because the code is weak, but because the tool asks for extra work and gives little back. This guide shows how to build internal tools your team will actually use, starting with one real workflow, keeping version one small, and testing with the people who will open it every day.",
        "Every useful internal tool starts with a job the team already does by hand. Watch how the work happens today, note where it stalls, and write down the exact steps, the people involved, and the information that moves between them. A tool built on that picture fits the work. A tool built on a feature list fits a meeting.",
        "Pick one workflow for version one, and pick the one that causes the most repeated pain. A quoting workflow, a job tracker, or a client record system are good candidates when the team touches them daily. If the first workflow saves time every week, the team will ask for the next one. If it saves time once a quarter, nobody will remember it exists."
      ],
    },
    {
      heading: "Design for the busiest person on the team",
      body: [
        "Ask who will use the tool most, then design for that person first. The busiest user has the least patience for extra clicks, unclear labels, or screens that show information they never need. If the tool feels fast for that person, it will feel fast for everyone else.",
        "Test the design with real tasks, not a guided tour. Give the busiest user a real job, watch where they pause, and fix those points before you add anything new. A tool that passes a real task test is ready for the team. A tool that only passes a demo is ready for another round of design."
      ],
    },
    {
      heading: "Keep version one small on purpose",
      body: [
        "Version one should do one workflow well and leave the rest for later. A small scope means a faster launch, fewer decisions, and a tool the team can learn in one sitting. It also means the team can give useful feedback, because they have used the real thing instead of reviewing a long plan.",
        "Write down what version one will not include, and share that list with the team. A clear boundary stops the build from growing while it is still unfinished, and it sets honest expectations. For a wider view on deciding what belongs in version one, read [A Customer Portal That Customers Actually Use](/blog/customer-portal-customers-actually-use). The same discipline applies to internal tools."
      ],
    },
    {
      heading: "Build the boring parts first: permissions, search and exports",
      body: [
        "Permissions, search, and exports decide whether a tool is trusted. People need to find a record in seconds, see only what they should see, and take the data out when they need it. A tool without search becomes a cupboard that nobody opens. A tool without clear permissions becomes a risk the team works around.",
        "Build these parts into version one, not into a later phase that never arrives. Test search with real names, real job numbers, and misspelt queries. Test exports with the person who prepares reports. When the boring parts work, the interesting parts get used."
      ],
    },
    {
      heading: "Launch with training, then measure real use",
      body: [
        "A launch is a short training session and a named owner, not an announcement email. Show the team the one workflow, let each person complete it once with real data, and answer questions in the room. People adopt tools they have already used once, with help nearby.",
        "After launch, measure use every week. Count how many jobs pass through the tool, how often people return to spreadsheets, and which steps still cause questions. Fix the top problem, then measure again. A tool that improves every week stays in use. One that never changes is quietly replaced."
      ],
    },
  ],
};

export default post satisfies PostBody;
