import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "Can AI Replace Developers? Code vs Product Ownership",
  metaDescription:
    "See which development tasks AI can accelerate and why requirements, review, security, testing and production ownership still determine software quality.",
  keyTakeaways: [
    "Evaluate completed, reliable work rather than the volume of generated code.",
    "Use explicit acceptance criteria and small changes to make AI output reviewable.",
    "Keep a named owner for deployment, incidents and maintenance.",
  ],
  content: [
    {
      heading: "AI changes the work, but code is only one output",
      body: [
        "AI can help draft a component, explain unfamiliar code, suggest a migration or create a first implementation from a brief. Those are useful capabilities. They do not, by themselves, answer whether the feature solves the right problem, handles sensitive data correctly or will remain maintainable after the next change.",
        "The better question for a business is which work it can delegate while still verifying the outcome. A developer's role can shift towards specifying constraints, reviewing proposed changes and diagnosing failures. How far that shift goes depends on the system, the team and the cost of getting something wrong.",
      ],
    },
    {
      heading: "A feature request contains decisions that a prompt may hide",
      body: [
        "Consider a booking form. A generated interface might collect a name, email and preferred time. The product still needs decisions about time zones, unavailable slots, duplicate requests, cancellation rules and what happens when an email or calendar service is unavailable.",
        "Write these decisions as acceptance criteria before asking for implementation. For example: submitting the same request twice must not create two appointments, and an unavailable slot must produce a useful response. Concrete cases expose gaps that a screenshot or a happy-path demonstration can hide. They also give a reviewer something specific to evaluate.",
      ],
    },
    {
      heading: "Use AI where feedback is short and evidence is available",
      body: [
        "Small, bounded changes are easier to inspect than a large generated application. Give the assistant the relevant files, existing conventions and a precise outcome. Ask it to explain assumptions, then review the patch and run checks that exercise behaviour, including failure paths.",
        "Useful work includes documenting an existing interface, tracing an error, drafting a limited refactor or proposing tests for a known edge case. The task becomes riskier when nobody understands the generated dependencies, permissions or infrastructure. Faster output is valuable only if the team can still explain what it has shipped.",
      ],
      bullets: [
        "Keep changes small enough for a meaningful review.",
        "Use representative test data without exposing customer secrets.",
        "Check the deployed behaviour as well as the local build.",
      ],
    },
    {
      heading: "Read productivity research without turning it into a replacement claim",
      body: [
        "DORA's 2025 research describes AI as an amplifier of an organisation's existing strengths and weaknesses. That supports a practical interpretation: teams need clear processes and feedback loops to turn assistance into dependable delivery. It does not establish that every team will become faster or that a particular job disappears.",
        "Measure your own workflow. Record the time from a clear request to an accepted change, the amount of rework, defects found after release and the effort needed to maintain the result. Compare similar tasks. Counting generated lines or completed prompts can reward activity without revealing whether the product improved.",
      ],
    },
    {
      heading: "Production still needs an accountable owner",
      body: [
        "Someone must decide which changes reach customers, monitor whether they work and respond when an integration breaks. That owner may use AI extensively, but the responsibility is still concrete: restore the service, protect data and explain what changed.",
        "Before launching an AI-assisted project, identify who holds the deployment access, how backups and rollback work, and where operational instructions live. Also record the dependencies and how to update them. If nobody can answer those questions, the immediate gap is operational ownership, regardless of who or what wrote the code.",
      ],
    },
    {
      heading: "Choose a collaboration model that matches the risk",
      body: [
        "For a prototype, a founder may be comfortable using AI to explore an idea and discarding the result later. For a customer-facing application, pair implementation assistance with a reviewer who understands the system. For changes involving money, access or important records, use a more deliberate approval and verification process.",
        "AI can reduce the effort required for particular tasks and change what teams hire for. A stronger hiring or outsourcing brief therefore asks for evidence of problem-solving, testing and maintenance, alongside coding ability. Buy an outcome with a clear owner, rather than assuming a tool makes those responsibilities disappear.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can a non-developer build a prototype with AI?",
      a: "Often, yes. Keep its scope clear and assess the additional engineering and operational work before treating it as a production system.",
    },
    {
      q: "What should junior developers learn?",
      a: "Learn to read code, debug, model data, write useful tests and explain trade-offs. These skills help you evaluate generated work and develop judgement.",
    },
  ],
  sources: [
    {
      label: "DORA: 2025 State of AI-assisted Software Development",
      href: "https://dora.dev/research/2025/dora-report/",
    },
  ],
  internalLinks: [
    {
      label: "AI-built app launch checklist",
      to: "/blog/ai-built-app-launch-checklist",
    },
    {
      label: "Development services",
      to: "/services",
    },
  ],
  cta: {
    title: "Review the product behind the generated code",
    body: "We can help assess a prototype, define production requirements and plan the work needed for a maintainable launch.",
  },
} satisfies PostBody;

export default post;
