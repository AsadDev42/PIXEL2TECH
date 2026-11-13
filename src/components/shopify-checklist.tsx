import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Download, RotateCcw } from "lucide-react";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { MediaImage } from "@/components/media-image";
import { trackEvent } from "@/lib/analytics";

const AREAS = [
  {
    id: "find",
    title: "Find the right product",
    why: "Shoppers need a useful route into the catalogue before they can consider buying.",
    checks: [
      "Can a new visitor understand the product range from the menu?",
      "Do collections use customer language, with helpful filters?",
      "Can search handle a product name, style or common spelling?",
    ],
    help: "We restructure navigation, collection templates and filter layouts around the range you actually sell.",
  },
  {
    id: "decide",
    title: "Make the buying decision",
    why: "A product page should answer the questions that stand between interest and an order.",
    checks: [
      "Are the selected size, colour, price and availability clear?",
      "Are dimensions, materials, ingredients or fit guidance easy to find?",
      "Can shoppers understand delivery and returns before adding to cart?",
    ],
    help: "We design product templates, variant states and information blocks, using approved product facts and real photography.",
  },
  {
    id: "order",
    title: "Complete the order",
    why: "The cart and checkout need to preserve the shopper’s choices and explain the final commitment.",
    checks: [
      "Does the correct variant and quantity reach the cart?",
      "Are discount, shipping and payment scenarios tested?",
      "Are failed payments and unavailable items explained clearly?",
    ],
    help: "We review the cart journey and test the checkout scenarios available within your Shopify setup. We agree any platform or plan constraints before development.",
  },
  {
    id: "phone",
    title: "Work on a phone",
    why: "A polished desktop design can still hide controls or make forms difficult on a small screen.",
    checks: [
      "Can you select a variant and add to cart without awkward scrolling?",
      "Do menus and drawers work with touch and keyboard?",
      "Are images readable, controls labelled and errors useful?",
    ],
    help: "We improve responsive layouts, interaction states and loading behaviour, then check representative pages on agreed devices.",
  },
  {
    id: "measure",
    title: "Measure the journey",
    why: "You need evidence to distinguish a design problem from a traffic, product or fulfilment problem.",
    checks: [
      "Are product views, cart actions and purchases recorded as intended?",
      "Are duplicate purchase events or missing values investigated?",
      "Does tracking follow your consent choices and privacy setup?",
    ],
    help: "We review the agreed event flow and integrations, document what was tested and identify gaps that need an analytics or privacy owner.",
  },
  {
    id: "maintain",
    title: "Keep the store maintainable",
    why: "A fix is more useful when your team can keep the store accurate after handover.",
    checks: [
      "Does the business control its store, domain and essential accounts?",
      "Are unused apps, theme customisations and recurring dependencies documented?",
      "Can the team update key content without breaking the layout?",
    ],
    help: "We document changed templates, settings and dependencies, and agree handover guidance for the parts your team will manage.",
  },
];

const checkId = (areaId: string, index: number) => `${areaId}-${index}`;
const ALL_CHECK_IDS = AREAS.flatMap((area) => area.checks.map((_, i) => checkId(area.id, i)));
const TOTAL_CHECKS = ALL_CHECK_IDS.length;
const STORAGE_KEY = "p2t-shopify-checklist-v1";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Ticks stay in this visitor's browser only. Blocked storage just means they aren't remembered. */
function useReviewedChecks() {
  const [reviewed, setReviewed] = useState<ReadonlySet<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
      if (Array.isArray(saved)) {
        setReviewed(new Set(ALL_CHECK_IDS.filter((id) => saved.includes(id))));
      }
    } catch {
      // Nothing usable saved.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...reviewed]));
    } catch {
      // Ticks still work for this visit.
    }
  }, [reviewed, loaded]);

  const toggle = (id: string) =>
    setReviewed((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return { reviewed, loaded, toggle, reset: () => setReviewed(new Set()) };
}

function ProgressBar({ value, dark = false }: { value: number; dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`h-2 w-full overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-muted"}`}
    >
      <div
        className={`h-full w-full origin-left rounded-full transition-transform duration-300 motion-reduce:transition-none ${
          dark ? "bg-sky-300" : "bg-primary"
        }`}
        style={{ transform: `scaleX(${value / TOTAL_CHECKS})` }}
      />
    </div>
  );
}

export function ShopifyChecklist() {
  const { reviewed, loaded, toggle, reset } = useReviewedChecks();
  const count = reviewed.size;
  const areaCount = (area: (typeof AREAS)[number]) =>
    area.checks.filter((_, i) => reviewed.has(checkId(area.id, i))).length;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="lg:pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Free resource
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Review your Shopify store, one step at a time
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Review your catalogue, product pages and checkout. Record each issue, its URL and an
            owner for the fix.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Try the journey on both a phone and desktop.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#review-areas"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
            >
              Start the review <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/resources/shopify-store-review-checklist.md"
              download
              onClick={() => trackEvent("shopify_checklist_downloaded")}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
            >
              <Download size={16} aria-hidden="true" />
              Download free checklist
            </a>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            No signup required. The free Markdown file opens in a text editor and can be copied into
            your project tool.
          </p>
        </div>

        <section
          aria-labelledby="review-progress"
          aria-busy={!loaded}
          className="self-start rounded-[2rem] border border-transparent bg-slate-950 p-6 text-white sm:p-8 dark:border-white/15"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="review-progress" className="text-lg font-semibold">
              Your review
            </h2>
            <p className="text-sm text-slate-300">
              <span className="text-2xl font-medium tabular-nums text-white">{count}</span> of{" "}
              {TOTAL_CHECKS} reviewed
            </p>
          </div>
          <div className="mt-4">
            <ProgressBar value={count} dark />
          </div>
          <ol className="mt-4 divide-y divide-white/10">
            {AREAS.map((area, index) => {
              const done = areaCount(area);
              return (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className="flex min-h-12 items-center gap-3 rounded text-sm transition hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        done === area.checks.length
                          ? "bg-sky-300 text-slate-950"
                          : "border border-white/25 text-white"
                      }`}
                    >
                      {done === area.checks.length ? (
                        <Check size={14} aria-hidden="true" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span className="min-w-0 flex-1 font-medium">{area.title}</span>
                    <span className="shrink-0 text-slate-400">
                      {done}/{area.checks.length}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            Tick each item after reviewing it, even if it needs a fix. This tracks checks completed,
            not a store score. Your ticks stay in this browser.
          </p>
        </section>
      </header>

      <section id="review-areas" className="mt-16 scroll-mt-24 md:mt-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          What to check, and why it matters
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          You can use these checks yourself. If the findings need design, development or integration
          work, Pixel2Tech can turn them into an agreed scope and implement the changes.
        </p>

        <div className="sticky top-16 z-10 -mx-2 mt-8 flex items-center gap-4 rounded-2xl border border-border bg-background/95 px-4 py-3 backdrop-blur sm:top-[4.75rem]">
          <p aria-live="polite" className="shrink-0 text-sm font-semibold text-foreground">
            {count} of {TOTAL_CHECKS} reviewed
          </p>
          <div className="min-w-0 flex-1">
            <ProgressBar value={count} />
          </div>
          <button
            type="button"
            onClick={reset}
            disabled={!loaded || count === 0}
            className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING}`}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span className="hidden sm:inline">Reset</span>
            <span className="sr-only sm:hidden">Reset the review</span>
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          {AREAS.map((area, index) => {
            const complete = areaCount(area) === area.checks.length;
            return (
              <article
                key={area.id}
                id={area.id}
                className={`grid scroll-mt-40 gap-6 rounded-3xl border p-6 transition-colors sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 ${
                  complete ? "border-primary/50 bg-primary/5" : "border-border"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-primary">Area {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{area.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{area.why}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      What we do
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {area.help}
                    </p>
                  </div>
                </div>
                <ul className="grid content-start gap-2">
                  {area.checks.map((check, i) => {
                    const id = checkId(area.id, i);
                    const isReviewed = reviewed.has(id);
                    return (
                      <li key={id}>
                        <label
                          className={`flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring ${
                            isReviewed
                              ? "border-primary/40 bg-background"
                              : "border-border bg-background hover:bg-muted"
                          }`}
                        >
                          <input
                            type="checkbox"
                            disabled={!loaded}
                            checked={isReviewed}
                            onChange={() => toggle(id)}
                            className="peer sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                              isReviewed
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-muted-foreground/60 bg-background"
                            }`}
                          >
                            {isReviewed ? <Check size={14} /> : null}
                          </span>
                          <span
                            className={`text-sm leading-relaxed sm:text-base ${
                              isReviewed ? "text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {check}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mt-12 md:mt-16">
        <ContentGrid
          heading="Turn observations into a useful brief"
          numbered
          items={[
            {
              title: "Capture the problem",
              body: "For example: on a specific product page, the selected size is hard to distinguish on mobile. Attach the URL and a screenshot or recording. This is more actionable than ‘the store needs to convert better’.",
            },
            {
              title: "Set the priority",
              body: "Fix a broken purchase path before a decorative detail. Consider how many customers are affected, whether there is a workaround and what evidence supports the change.",
            },
            {
              title: "Agree the acceptance check",
              body: "For that size selector: the active choice is clear, sold-out sizes are identified and the correct size reaches the cart. Define the check before the redesign starts.",
            },
          ]}
        />
      </div>

      <section
        aria-labelledby="hi-street"
        className="mb-12 grid overflow-hidden rounded-3xl border border-border md:grid-cols-[1.4fr_1fr]"
      >
        <div className="p-6 sm:p-10">
          <h2 id="hi-street" className="text-2xl font-bold tracking-tight sm:text-3xl">
            See the work behind the advice
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Hi Street’s Shopify project uses style-based navigation, collection filters and size
            guidance for a footwear catalogue. The case study explains what was built; it does not
            claim an unmeasured conversion uplift.
          </p>
          <Link
            to="/portfolio/$slug"
            params={{ slug: "histreet-shopify-store" }}
            className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold text-primary hover:underline ${FOCUS_RING}`}
          >
            Explore the Hi Street project <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="relative h-64 bg-muted md:h-auto">
          <MediaImage
            src="/portfolio/histreet-shopify-store/desktop-home.webp"
            alt="The Hi Street Shopify store home page"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </section>

      <ProjectNextStep
        title="Want us to work through the fixes?"
        body="Send your store URL and the three issues that matter most. We can discuss a review, focused theme changes or a broader redesign, with scope and acceptance checks agreed before production."
        source="shopify-checklist"
        label="Discuss your Shopify store"
      />
    </div>
  );
}
