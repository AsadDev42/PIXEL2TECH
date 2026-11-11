import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Ban, ChartColumn, Cookie, ShieldCheck } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { onOpenCookieSettings, readConsent, saveConsent } from "@/lib/consent";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
/** Accept and reject share one style: refusing must be as easy as accepting. */
const CHOICE_BUTTON = `inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`;
const TEXT_BUTTON = `inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`;

const POLICY_HASH = "cookies-and-similar-technologies";

/**
 * Cookie banner and preferences dialog. The banner shows until the visitor
 * makes a choice; the footer's "Cookie settings" link reopens the dialog.
 * Rendered only after hydration, because the choice lives in a browser cookie.
 */
export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [decided, setDecided] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const stored = readConsent();
    setDecided(stored !== null);
    setAnalytics(stored?.analytics ?? false);
    setReady(true);
    return onOpenCookieSettings(() => {
      setAnalytics(readConsent()?.analytics ?? false);
      dialogRef.current?.showModal();
    });
  }, []);

  function choose(allowAnalytics: boolean) {
    saveConsent(allowAnalytics);
    setAnalytics(allowAnalytics);
    setDecided(true);
    dialogRef.current?.close();
  }

  function openPreferences() {
    dialogRef.current?.showModal();
  }

  if (!ready) return null;

  return (
    <>
      {!decided && (
        <section
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-4 bottom-4 z-40 max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-border bg-background p-5 text-foreground shadow-2xl sm:inset-x-auto sm:left-6 sm:max-w-lg sm:p-6"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
            >
              <Cookie className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Your privacy, your call
              </p>
              <h2 id="cookie-banner-title" className="text-lg font-bold tracking-tight">
                Can we measure your visit?
              </h2>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Essential cookies keep the site working. With your OK, Google Analytics and Microsoft
            Clarity show us which pages help visitors and where they get stuck, so we can make the
            site better. No ads, no retargeting. Details are in our{" "}
            <Link
              to="/privacy-policy"
              hash={POLICY_HASH}
              className="font-medium text-foreground underline underline-offset-4"
            >
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button type="button" className={CHOICE_BUTTON} onClick={() => choose(false)}>
              Reject non-essential
            </button>
            <button type="button" className={CHOICE_BUTTON} onClick={() => choose(true)}>
              Accept all
            </button>
            <button type="button" className={TEXT_BUTTON} onClick={openPreferences}>
              Manage preferences
            </button>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-settings-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-slate-950/60"
      >
        <form
          method="dialog"
          className="p-6 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            choose(analytics);
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Cookie settings
          </p>
          <h2 id="cookie-settings-title" className="mt-2 text-2xl font-bold tracking-tight">
            Choose what we can use
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Switch on only what you are comfortable with. You can change your mind any time from
            Cookie settings at the bottom of every page.
          </p>

          <ul className="mt-6 grid gap-3">
            <CookieRow
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Essential"
              tagline="Keeps the site working"
              status={<StatusBadge>Always on</StatusBadge>}
            >
              Remembers this choice and your light or dark theme. These can&apos;t be switched off.
            </CookieRow>
            <CookieRow
              icon={<ChartColumn className="h-5 w-5" />}
              title={<label htmlFor="cookie-analytics">Analytics</label>}
              tagline="Helps us improve the site"
              status={
                <Switch
                  id="cookie-analytics"
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  className="mt-1"
                />
              }
            >
              Google Analytics and Microsoft Clarity show which pages people visit, where they came
              from and how they scroll and click, including Clarity session replays and heatmaps. We
              don&apos;t use Clarity to collect what you type in forms.
            </CookieRow>
            <CookieRow
              icon={<Ban className="h-5 w-5" />}
              title="Advertising"
              tagline="We don't track you for ads"
              status={<StatusBadge>Not used</StatusBadge>}
            >
              No advertising, retargeting or social media pixels. Embedded YouTube videos and Google
              Maps come from Google, which may set its own cookies when they load.
            </CookieRow>
          </ul>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            <button type="button" className={TEXT_BUTTON} onClick={() => choose(false)}>
              Reject non-essential
            </button>
            <button type="submit" className={TEXT_BUTTON}>
              Save choices
            </button>
            <button type="button" className={CHOICE_BUTTON} onClick={() => choose(true)}>
              Accept all
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
      {children}
    </span>
  );
}

/** One cookie category: icon, name, a one-line promise, then the detail. */
function CookieRow({
  icon,
  title,
  tagline,
  status,
  children,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  tagline: string;
  status: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-border p-4">
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm font-medium text-foreground/80">{tagline}</p>
          </div>
          {status}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </li>
  );
}
