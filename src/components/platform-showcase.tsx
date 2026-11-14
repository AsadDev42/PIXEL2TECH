import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  CheckCheck,
  Circle,
  Folder,
  LayoutDashboard,
  Layers,
  LockKeyhole,
  MessageSquare,
  MoreHorizontal,
  Smartphone,
} from "lucide-react";

const CONCEPTS = [
  {
    name: "Client portal",
    icon: Layers,
    heading: "One place for every review.",
    description:
      "Give clients a clear view of their projects, files and approvals, with access limited to the work they should see.",
    workspace: "Client workspace",
    project: "Brand launch",
    task: "Review the first direction",
    stages: ["Brief received", "Design in progress", "Ready for your review"],
    phone: "Your feedback, connected.",
  },
  {
    name: "Operations dashboard",
    icon: LayoutDashboard,
    heading: "A clear next step for your team.",
    description:
      "Bring requests, ownership and progress into one workspace, so your team can see what needs attention and who handles it.",
    workspace: "Team workspace",
    project: "Service requests",
    task: "Assign the next request",
    stages: ["Request received", "Owner assigned", "Ready to schedule"],
    phone: "Keep work moving.",
  },
  {
    name: "Mobile app",
    icon: Smartphone,
    heading: "The important task, in your pocket.",
    description:
      "Design the mobile journey around a useful action: review a file, check a request or confirm the next step without returning to a desk.",
    workspace: "Connected workspace",
    project: "On-the-go reviews",
    task: "Check the latest update",
    stages: ["Update shared", "Review in progress", "Ready to approve"],
    phone: "Pick up where you left off.",
  },
] as const;

/** Authored interface concepts with sample content, never presented as client screenshots. */
export function PlatformPreview({ variant = 0 }: { variant?: number }) {
  const concept = CONCEPTS[variant] ?? CONCEPTS[0];
  return (
    <div
      role="img"
      aria-label={`Illustrative ${concept.name.toLowerCase()} concept: a desktop workspace with project stages and a mobile review screen. Sample content, not a client project.`}
      className="relative isolate overflow-hidden bg-[#eaf3fb] px-4 pb-8 pt-6 text-slate-900 sm:px-8 sm:pb-10 sm:pt-8"
    >
      <div aria-hidden="true">
        <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="mb-5 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
          <span>Built around your workflow</span>
          <span className="rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sky-800">
            UI concept
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,58,99,0.45)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-950 text-white">
                <Layers size={14} />
              </span>
              <span className="text-[11px] font-semibold">Workspace</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Bell size={13} />
              <span className="grid h-6 w-6 place-items-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-800">
                JD
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex w-12 shrink-0 flex-col items-center gap-5 border-r border-slate-100 bg-slate-50 py-5 sm:w-14">
              {[LayoutDashboard, Folder, MessageSquare, CalendarDays].map((Icon, index) => (
                <span
                  key={index}
                  className={`grid h-7 w-7 place-items-center rounded-lg ${index === 0 ? "bg-sky-100 text-sky-700" : "text-slate-400"}`}
                >
                  <Icon size={14} />
                </span>
              ))}
              <LockKeyhole size={13} className="mt-auto text-slate-400" />
            </div>
            <div className="min-w-0 flex-1 p-4 sm:p-5">
              <p className="text-[10px] text-slate-500">{concept.workspace}</p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <p className="text-base font-semibold tracking-tight sm:text-lg">
                  {concept.project}
                </p>
                <MoreHorizontal size={16} className="text-slate-400" />
              </div>
              <div className="mt-4 rounded-xl bg-slate-950 p-4 text-white">
                <p className="text-[9px] uppercase tracking-widest text-sky-200">Your next step</p>
                <p className="mt-2 max-w-40 text-sm font-semibold leading-snug">{concept.task}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] text-sky-200">
                  Open project <ArrowUpRight size={12} />
                </span>
              </div>
              <p className="mt-4 text-[10px] font-semibold">Project activity</p>
              <div className="mt-2 space-y-2 pb-10 sm:pb-8">
                {concept.stages.map((stage, index) => (
                  <div key={stage} className="flex items-center gap-2 text-[10px] text-slate-600">
                    {index === 2 ? (
                      <Circle size={12} className="shrink-0 text-sky-500" />
                    ) : (
                      <CheckCheck size={12} className="shrink-0 text-emerald-600" />
                    )}
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-3 w-32 rounded-[1.75rem] border-[5px] border-slate-950 bg-white p-3 shadow-xl sm:bottom-6 sm:right-5 sm:w-36">
          <div className="mx-auto h-1 w-10 rounded-full bg-slate-950" />
          <div className="mt-4 flex items-center justify-between">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-sky-100 text-sky-700">
              <Layers size={12} />
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <p className="mt-3 text-[11px] font-semibold leading-snug">{concept.phone}</p>
          <div className="mt-3 rounded-lg bg-sky-50 p-2">
            <div className="flex gap-1">
              <span className="h-1 flex-1 rounded bg-sky-500" />
              <span className="h-1 flex-1 rounded bg-sky-500" />
              <span className="h-1 flex-1 rounded bg-sky-200" />
            </div>
            <p className="mt-2 text-[8px] text-slate-600">Ready for review</p>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-slate-950 px-2 py-2 text-[8px] font-medium text-white">
            <Check size={10} /> Review update
          </div>
          <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export function PlatformShowcase() {
  const [active, setActive] = useState(0);
  const concept = CONCEPTS[active]!;
  return (
    <section aria-labelledby="platform-concepts-title" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Picture your platform
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2
            id="platform-concepts-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Different screens.
            <br />
            One connected experience.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            A portal for your clients, a dashboard for your team, or an app for people on the move.
            Explore these interface concepts to see how the same workflow can fit different users.
          </p>
        </div>
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Choose an interface concept"
        >
          {CONCEPTS.map(({ name, icon: Icon }, index) => (
            <button
              key={name}
              type="button"
              aria-pressed={active === index}
              aria-controls="platform-concept-panel"
              onClick={() => setActive(index)}
              className={`inline-flex min-h-12 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${active === index ? "border-foreground bg-foreground text-background" : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"}`}
            >
              <Icon size={16} aria-hidden="true" />
              {name}
            </button>
          ))}
        </div>
        <div
          id="platform-concept-panel"
          className="mt-6 grid overflow-hidden rounded-3xl border border-border bg-background lg:grid-cols-[1.1fr_1fr]"
        >
          <PlatformPreview variant={active} />
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {concept.name}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {concept.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {concept.description}
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-muted/60 p-4">
              <LockKeyhole size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Roles, permissions and the next action are designed into the journey from the start.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Illustrative UI concepts with sample content, not client project screenshots. Your
              interface is designed around your own brand and agreed scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
