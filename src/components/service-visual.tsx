import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Database, FileText, Search, Users, Mail, Send } from "lucide-react";
import { SERVICE_PRESENTATION } from "@/lib/service-presentation";
import type { ServiceTitle } from "@/lib/service-pages";

const WORKFLOWS = {
  automation: {
    title: "From enquiry to follow-up",
    steps: [
      { Icon: Mail, label: "Capture the enquiry", detail: "An agreed form or inbox" },
      { Icon: Users, label: "Create the CRM record", detail: "Map fields and check duplicates" },
      { Icon: Send, label: "Assign the next action", detail: "A task with an owner" },
    ],
  },
  assistant: {
    title: "An answer you can trace",
    steps: [
      {
        Icon: Search,
        label: "Ask a specific question",
        detail: "A task from your team's workflow",
      },
      {
        Icon: FileText,
        label: "Retrieve permitted sources",
        detail: "The documents that user can access",
      },
      {
        Icon: Check,
        label: "Review the answer and sources",
        detail: "Test accuracy and useful fallbacks",
      },
    ],
  },
  platform: {
    title: "A workspace around your process",
    steps: [
      {
        Icon: Users,
        label: "Define people and permissions",
        detail: "Who can see and change each record",
      },
      {
        Icon: FileText,
        label: "Connect the project workflow",
        detail: "The screens and decisions that matter",
      },
      {
        Icon: Database,
        label: "Keep information connected",
        detail: "Agreed data and integrations",
      },
    ],
  },
  search: {
    title: "A practical search review",
    steps: [
      {
        Icon: Search,
        label: "Check crawl and indexation",
        detail: "Find barriers before adding content",
      },
      {
        Icon: FileText,
        label: "Improve the priority pages",
        detail: "Match the buyer's search and questions",
      },
      {
        Icon: Check,
        label: "Measure the response",
        detail: "Search visibility and useful enquiries",
      },
    ],
  },
};

export function ServiceDiagram({ kind }: { kind: keyof typeof WORKFLOWS }) {
  const workflow = WORKFLOWS[kind];
  return (
    <div className="studio-workflow flex h-full min-h-80 flex-col bg-muted p-6 sm:p-8">
      <p className="text-xs font-medium text-muted-foreground">Illustrative workflow</p>
      <h3 className="mt-2 text-xl font-medium leading-snug">{workflow.title}</h3>
      <ol className="mt-6 grid gap-2">
        {workflow.steps.map(({ Icon, label, detail }, index) => (
          <li
            key={label}
            className="studio-workflow-row flex items-start gap-4 rounded-lg border border-border bg-background p-4"
          >
            <span className="studio-step pt-1 text-xs font-medium tabular-nums text-primary">
              0{index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
            </div>
            <Icon
              size={18}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Tools, access and acceptance checks are agreed in your scope.
      </p>
    </div>
  );
}

/** A scope preview, explicitly separated from published client work. */
export function ServiceScopePreview({
  title,
  outputs,
}: {
  title: string;
  outputs: readonly { title: string }[];
}) {
  return (
    <aside
      aria-label={`${title} scope outline`}
      className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8"
    >
      <p className="text-xs font-medium text-muted-foreground">Scope outline</p>
      <h2 className="mt-2 text-2xl font-medium leading-snug">{title}</h2>
      <p className="mt-4 text-sm font-medium">What we can prepare</p>
      <ul className="mt-3 divide-y divide-border border-y border-border">
        {outputs.slice(0, 3).map((output, index) => (
          <li key={output.title} className="flex items-start gap-4 py-4 text-sm">
            <span className="studio-step text-xs tabular-nums text-primary">0{index + 1}</span>
            {output.title}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Proposed scope, not a client project. Final deliverables are agreed in writing.
      </p>
    </aside>
  );
}

export function ServiceVisual({
  title,
  priority = false,
}: {
  title: ServiceTitle;
  priority?: boolean;
}) {
  const visual = SERVICE_PRESENTATION[title];
  const contain = [
    "Website Development",
    "WordPress & Shopify",
    "Automation & CRM",
    "AI Solutions",
  ].includes(title);
  const body = (
    <div
      className={`relative overflow-hidden bg-muted ${visual.illustration ? "min-h-80" : "aspect-[16/10]"}`}
    >
      {visual.illustration ? (
        <ServiceDiagram kind={visual.illustration} />
      ) : (
        <MediaImage
          src={visual.image}
          alt={visual.alt}
          width={960}
          height={600}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${contain ? "object-contain object-top p-4" : "object-cover"}`}
        />
      )}
      {visual.project && (
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/95 text-foreground shadow-sm"
        >
          <ArrowUpRight size={17} />
        </span>
      )}
    </div>
  );
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-background">
      {visual.project ? (
        <Link
          to="/portfolio/$slug"
          params={{ slug: visual.project }}
          aria-label={`Explore ${visual.caption}`}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          {body}
        </Link>
      ) : (
        body
      )}
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {visual.caption}
      </figcaption>
    </figure>
  );
}
