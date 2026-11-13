import type { ReactNode } from "react";
import { PageShell } from "@/components/site-chrome";
import "@/components/studio-page.css";

/** Opt-in editorial treatment; the shared header, footer and other routes stay unchanged. */
export function StudioPage({ children }: { children: ReactNode }) {
  return (
    <PageShell>
      <div className="studio-page">{children}</div>
    </PageShell>
  );
}
