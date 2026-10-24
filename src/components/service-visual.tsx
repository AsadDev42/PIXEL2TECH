import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Database, FileText, Search, Users } from "lucide-react";
import { SERVICE_PRESENTATION } from "@/lib/service-presentation";
import type { ServiceTitle } from "@/lib/service-pages";

function ServiceDiagram({ kind }: { kind: "platform" | "search" }) {
  const platform = kind === "platform";
  return (
    <div
      aria-label={
        platform
          ? "Illustration of a client portal connecting people, projects and data"
          : "Illustration of an SEO review moving from site checks to content and measurement"
      }
      role="img"
      className={`flex h-full flex-col justify-center p-5 sm:p-6 ${platform ? "bg-indigo-50 text-indigo-950" : "bg-emerald-50 text-emerald-950"}`}
    >
      <div
        aria-hidden="true"
        className="rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm"
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-xs font-bold tracking-wide">
            {platform ? "CLIENT WORKSPACE" : "SEARCH REVIEW"}
          </span>
          <span
            className={`h-2 w-2 rounded-full ${platform ? "bg-indigo-500" : "bg-emerald-500"}`}
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {(platform
            ? [
                { Icon: Users, label: "People" },
                { Icon: FileText, label: "Projects" },
                { Icon: Database, label: "Data" },
              ]
            : [
                { Icon: Search, label: "Site checks" },
                { Icon: FileText, label: "Content" },
                { Icon: Check, label: "Measure" },
              ]
          ).map(({ Icon, label }) => (
            <div key={label} className="rounded-xl bg-slate-50 px-2 py-4 text-center">
              <Icon size={22} strokeWidth={1.5} className="mx-auto" />
              <span className="mt-2 block text-[10px] font-semibold sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-2 flex-1 rounded-full ${platform ? "bg-indigo-100" : "bg-emerald-100"}`}
          />
          <span
            className={`h-2 w-12 rounded-full ${platform ? "bg-indigo-400" : "bg-emerald-400"}`}
          />
          <span
            className={`h-2 w-6 rounded-full ${platform ? "bg-indigo-200" : "bg-emerald-200"}`}
          />
        </div>
      </div>
    </div>
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
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
      {visual.illustration ? (
        <ServiceDiagram kind={visual.illustration} />
      ) : (
        <img
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
