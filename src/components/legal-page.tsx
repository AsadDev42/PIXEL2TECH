import { FadeIn } from "@/components/motion";

export type LegalSection = { heading: string; body: string[] };

/** Shared reading layout for legal / policy pages. */
export function LegalBody({ updated, sections }: { updated: string; sections: LegalSection[] }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Last updated {updated}
        </p>
        <p className="mt-4 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
          This page is maintained by Pixel2Tech to answer common questions about how we work with your
          information. It describes our own practices and is not legal advice or an independent certification.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
