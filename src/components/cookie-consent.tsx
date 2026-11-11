import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
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
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-40 max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-border bg-background p-5 text-foreground shadow-2xl sm:inset-x-auto sm:left-6 sm:max-w-lg sm:p-6"
        >
          <h2 className="text-lg font-bold tracking-tight">Cookies on Pixel2Tech</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We use necessary cookies to make this site work. With your permission, we also use
            analytics cookies from Google Analytics and Microsoft Clarity to see how visitors use
            the site so we can improve it. We don&apos;t use advertising cookies. Read more in our{" "}
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
          <h2 id="cookie-settings-title" className="text-xl font-bold tracking-tight">
            Cookie preferences
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Choose which cookies we may use. You can change this at any time from the Cookie
            settings link at the bottom of every page.
          </p>

          <ul className="mt-6 divide-y divide-border border-y border-border">
            <li className="flex items-start justify-between gap-4 py-4">
              <div>
                <h3 className="font-semibold">Necessary</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Keep the site working, such as remembering this cookie choice and your light or
                  dark theme. These can&apos;t be switched off.
                </p>
              </div>
              <span className="shrink-0 pt-1 text-xs font-semibold text-muted-foreground">
                Always on
              </span>
            </li>
            <li className="flex items-start justify-between gap-4 py-4">
              <div>
                <label htmlFor="cookie-analytics" className="font-semibold">
                  Analytics
                </label>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Google Analytics and Microsoft Clarity record the pages you visit, where you came
                  from, clicks and scrolling, and Clarity makes session replays and heatmaps. We
                  don&apos;t use Clarity to collect what you type in forms.
                </p>
              </div>
              <Switch
                id="cookie-analytics"
                checked={analytics}
                onCheckedChange={setAnalytics}
                className="mt-1"
              />
            </li>
            <li className="flex items-start justify-between gap-4 py-4">
              <div>
                <h3 className="font-semibold">Advertising</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Not used. We don&apos;t run advertising, retargeting or social media tracking
                  pixels. Embedded YouTube videos and Google Maps come from Google, which may set
                  its own cookies when they load.
                </p>
              </div>
              <span className="shrink-0 pt-1 text-xs font-semibold text-muted-foreground">
                Not used
              </span>
            </li>
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
