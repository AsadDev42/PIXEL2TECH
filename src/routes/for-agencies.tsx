import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";

export const Route = createFileRoute("/for-agencies")({
  head: () =>
    businessHead(
      "/for-agencies",
      "White-label design & development for agencies",
      "An in-house production partner for agency website builds, Shopify stores, design and video. See how briefs, reviews and handovers work with Pixel2Tech.",
    ),
  component: () => (
    <BusinessLanding
      eyebrow="For agencies"
      title="Keep the client relationship. Add the team to deliver."
      intro="When an approved project needs more production capacity, Pixel2Tech can handle the agreed design, development or editing work. You stay responsible for your client relationship; we agree who manages the brief, feedback and delivery before the project starts."
      capabilities={[
        {
          title: "Website and store production",
          body: "Turn approved designs into Shopify, WordPress or custom websites, including responsive pages, product layouts and the integrations in your brief.",
        },
        {
          title: "Brand and campaign design",
          body: "Give us the brand guidelines and required formats. We develop layouts, social creatives and campaign assets that belong to the same visual system.",
        },
        {
          title: "Video editing and motion",
          body: "Supply the footage, references and delivery formats. We edit the story, captions, graphics and versions agreed for each channel.",
        },
        {
          title: "A defined part of your workflow",
          body: "Use us for a complete build or a clearly scoped production task. Share your review process so feedback reaches the right person and version.",
        },
      ]}
      projects={["acely-website", "skin-deep-shopify-store", "holloway-diamonds-wordpress-website"]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="When a production partner makes sense"
          intro="Start with the gap in your team. That tells us what to take on and what should stay with you."
          items={[
            {
              title: "Your design is approved, but development is waiting",
              body: "We review the files, required pages and functionality, then scope the build. Your team can keep directing the account while production moves forward.",
            },
            {
              title: "Campaign deadlines have filled your team's capacity",
              body: "We agree an asset list, source material and review rounds. That gives both teams a concrete delivery plan instead of an open-ended request for extra help.",
            },
            {
              title: "A project needs a discipline you do not have in-house",
              body: "Bring us in for the Shopify, website, design or video part. We define the hand-off points so your other specialists know what to supply and what they will receive.",
            },
          ]}
        />
        <ContentGrid
          heading="How we work with your agency"
          numbered
          items={[
            {
              title: "Review a real brief",
              body: "Send the platform, pages or assets, designs, content status and target date. Tell us whether client calls and approvals go through your team or include us.",
            },
            {
              title: "Agree responsibilities and milestones",
              body: "We outline deliverables, dependencies, review points and a written quote. Work starts once the scope is agreed and the required assets or access are ready.",
            },
            {
              title: "Produce, review and hand over",
              body: "Your nominated reviewer gathers feedback at the agreed checkpoints. We make the scoped changes, check the delivery and hand over the files or access listed in the proposal.",
            },
          ]}
        />
        <section className="border-t border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                A useful first message
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                For example: “We have an approved six-page design, final copy and a WordPress build
                to deliver. Our project manager will collect client feedback.” This lets us assess
                the work, dependencies and schedule together.
              </p>
            </div>
            <div className="rounded-2xl bg-muted/40 p-6">
              <h3 className="text-lg font-semibold">Include these details</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>The client sector and the problem the project should solve</li>
                <li>The deliverable list, platform and design or brand references</li>
                <li>Who supplies content, access and approvals</li>
                <li>The target date and any fixed launch dependencies</li>
                <li>How you want us to communicate and appear to your client</li>
              </ul>
            </div>
          </div>
        </section>
        <ProjectNextStep
          title="Have a brief that needs a production team?"
          body="Share the work you want us to own. We will review the requirements, flag missing inputs and discuss a scope your agency can plan around."
          source="agencies-next-step"
          label="Discuss an agency brief"
        />
      </div>
    </BusinessLanding>
  ),
});
