import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileText,
  Search,
  Users,
  Sparkles,
  Mail,
  Send,
} from "lucide-react";
import { SERVICE_PRESENTATION } from "@/lib/service-presentation";
import type { ServiceTitle } from "@/lib/service-pages";

function ServiceDiagram({ kind }: { kind: "platform" | "search" | "automation" | "assistant" }) {
  if (kind === "automation" || kind === "assistant") {
    const automation = kind === "automation";
    const color = automation ? "#2563eb" : "#7c3aed";
    return (
      <svg
        viewBox="0 0 400 250"
        role="img"
        aria-label={
          automation
            ? "Illustration: an enquiry creates a CRM record and a follow-up task"
            : "Illustration of an AI assistant answering a question with linked document sources"
        }
        className="h-full w-full"
      >
        <rect width="400" height="250" fill={automation ? "#eff6ff" : "#f5f3ff"} />
        {automation ? (
          <g aria-hidden="true">
            <circle cx="30" cy="38" r="4" fill={color} />
            <text x="44" y="42" fontSize="11" fontWeight="600" fill={color}>
              A CONNECTED WORKFLOW
            </text>
            {[
              { label: "Enquiry", Icon: Mail },
              { label: "CRM", Icon: Users },
              { label: "Follow-up", Icon: Send },
            ].map(({ label, Icon }, index) => (
              <g key={label} transform={`translate(${24 + index * 124} 72)`}>
                <rect width="104" height="105" rx="16" fill="white" stroke="#dbeafe" />
                <Icon x="39" y="24" width="26" height="26" color={color} strokeWidth={1.5} />
                <text
                  x="52"
                  y="78"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill="#0f172a"
                >
                  {label}
                </text>
                {index < 2 && <ArrowRight x="109" y="45" width="13" height="15" color="#60a5fa" />}
              </g>
            ))}
            <Check x="25" y="204" width="16" height="16" color={color} />
            <text x="48" y="217" fontSize="12" fill="#334155">
              The right information. The next action.
            </text>
          </g>
        ) : (
          <g aria-hidden="true">
            <rect x="22" y="22" width="356" height="206" rx="18" fill="white" stroke="#ede9fe" />
            <Sparkles x="40" y="39" width="18" height="18" color={color} />
            <text x="67" y="53" fontSize="12" fontWeight="600" fill="#0f172a">
              Your knowledge, easier to find
            </text>
            <path d="M40 70 H360" stroke="#ede9fe" />
            <rect x="78" y="84" width="280" height="38" rx="10" fill="#ede9fe" />
            <text x="92" y="108" fontSize="12" fill="#4c1d95">
              What is our onboarding process?
            </text>
            <Sparkles x="40" y="142" width="17" height="17" color={color} />
            <text x="68" y="151" fontSize="12" fill="#334155">
              <tspan x="68">Start with the project brief, confirm the</tspan>
              <tspan x="68" dy="19">
                scope, then arrange the kickoff.
              </tspan>
            </text>
            <FileText x="68" y="190" width="14" height="14" color={color} />
            <text x="90" y="201" fontSize="10" fill={color}>
              Source: onboarding guide
            </text>
          </g>
        )}
      </svg>
    );
  }
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
