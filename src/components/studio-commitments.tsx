import { Link } from "@tanstack/react-router";

export function StudioCommitments() {
  const rows = [
    {
      criterion: "Who makes the work",
      studio: "The in-house design, development and video team",
      discuss: "Ask who will work on your project and how you will reach them.",
    },
    {
      criterion: "Scope and cost",
      studio: "A fixed written quote for an agreed scope",
      discuss: "Compare deliverables, revisions and exclusions, not just the headline price.",
    },
    {
      criterion: "Working across disciplines",
      studio: "Brand, website, video and automation in one studio",
      discuss: "Check how design and development hand-offs are managed.",
    },
    {
      criterion: "Launch planning",
      studio: "Milestones and timing agreed before production",
      discuss: "Ask about review rounds, dependencies and post-launch support.",
    },
  ];
  return (
    <section aria-labelledby="home-commitments-title" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Choosing your delivery partner
        </p>
        <h2
          id="home-commitments-title"
          className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
        >
          A studio team. A clear agreement.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Comparing a studio, a larger agency or a freelancer? Start with who does the work, what is
          included and how decisions get made.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">
              Pixel2Tech's approach and questions to ask any delivery partner
            </caption>
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="px-5 py-4">
                  What matters
                </th>
                <th scope="col" className="px-5 py-4">
                  At Pixel2Tech
                </th>
                <th scope="col" className="px-5 py-4">
                  Ask any provider
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.criterion} className="border-t border-border">
                  <th scope="row" className="px-5 py-5 font-semibold">
                    {row.criterion}
                  </th>
                  <td className="px-5 py-5">{row.studio}</td>
                  <td className="px-5 py-5 text-muted-foreground">{row.discuss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "A person replies",
              body: "We reply to project enquiries within one business day.",
            },
            {
              title: "Confidentiality and ownership",
              body: "Confidentiality and IP terms are set out in our terms and your project agreement. A signed NDA takes precedence where applicable.",
            },
            {
              title: "Support, agreed in writing",
              body: "Scope, acceptance criteria and any post-launch support are written into the project proposal before work begins.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-muted/50 p-6">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Read our{" "}
          <Link to="/terms-and-conditions" className="underline underline-offset-4">
            terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="underline underline-offset-4">
            privacy policy
          </Link>
          , or explore our{" "}
          <Link to="/for-agencies" className="underline underline-offset-4">
            agency partner work
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
