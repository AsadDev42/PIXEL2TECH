import { Link } from "@tanstack/react-router";
import { Download, ArrowUpRight } from "lucide-react";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";

const AREAS = [
  {
    title: "01 / Find the right product",
    why: "Shoppers need a useful route into the catalogue before they can consider buying.",
    checks: [
      "Can a new visitor understand the product range from the menu?",
      "Do collections use customer language, with helpful filters?",
      "Can search handle a product name, style or common spelling?",
    ],
    help: "We restructure navigation, collection templates and filter layouts around the range you actually sell.",
  },
  {
    title: "02 / Make the buying decision",
    why: "A product page should answer the questions that stand between interest and an order.",
    checks: [
      "Are the selected size, colour, price and availability clear?",
      "Are dimensions, materials, ingredients or fit guidance easy to find?",
      "Can shoppers understand delivery and returns before adding to cart?",
    ],
    help: "We design product templates, variant states and information blocks, using approved product facts and real photography.",
  },
  {
    title: "03 / Complete the order",
    why: "The cart and checkout need to preserve the shopper’s choices and explain the final commitment.",
    checks: [
      "Does the correct variant and quantity reach the cart?",
      "Are discount, shipping and payment scenarios tested?",
      "Are failed payments and unavailable items explained clearly?",
    ],
    help: "We review the cart journey and test the checkout scenarios available within your Shopify setup. We agree any platform or plan constraints before development.",
  },
  {
    title: "04 / Work on a phone",
    why: "A polished desktop design can still hide controls or make forms difficult on a small screen.",
    checks: [
      "Can you select a variant and add to cart without awkward scrolling?",
      "Do menus and drawers work with touch and keyboard?",
      "Are images readable, controls labelled and errors useful?",
    ],
    help: "We improve responsive layouts, interaction states and loading behaviour, then check representative pages on agreed devices.",
  },
  {
    title: "05 / Measure the journey",
    why: "You need evidence to distinguish a design problem from a traffic, product or fulfilment problem.",
    checks: [
      "Are product views, cart actions and purchases recorded as intended?",
      "Are duplicate purchase events or missing values investigated?",
      "Does tracking follow your consent choices and privacy setup?",
    ],
    help: "We review the agreed event flow and integrations, document what was tested and identify gaps that need an analytics or privacy owner.",
  },
  {
    title: "06 / Keep the store maintainable",
    why: "A fix is more useful when your team can keep the store accurate after handover.",
    checks: [
      "Does the business control its store, domain and essential accounts?",
      "Are unused apps, theme customisations and recurring dependencies documented?",
      "Can the team update key content without breaking the layout?",
    ],
    help: "We document changed templates, settings and dependencies, and agree handover guidance for the parts your team will manage.",
  },
];

export function ShopifyChecklist() {
  return (
    <>
      <div className="mt-10 grid gap-6 rounded-3xl bg-slate-950 p-6 text-white sm:p-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Use it on your own store
          </p>
          <h2 className="mt-3 text-2xl font-semibold">One review. A prioritised list of fixes.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Open your store on a phone and desktop. Record the page, the issue, evidence and an
            owner for each fix. The free Markdown file opens in a text editor and can be copied into
            your project tool.
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl border border-white/20 p-6">
          <p className="text-sm text-slate-300">No signup required.</p>
          <a
            href="/resources/shopify-store-review-checklist.md"
            download
            className="mt-4 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-blue-100"
          >
            <Download size={18} aria-hidden="true" />
            Download free checklist
          </a>
          <a
            href="#review-areas"
            className="mt-4 inline-flex min-h-11 items-center justify-center text-sm underline underline-offset-4"
          >
            Read the checks below
          </a>
        </div>
      </div>
      <section id="review-areas" className="scroll-mt-24 py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          What to check, why it matters, how we help.
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          You can use these checks yourself. If the findings need design, development or integration
          work, Pixel2Tech can turn them into an agreed scope and implement the changes.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {AREAS.map((area) => (
            <article key={area.title} className="rounded-2xl border border-border p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.why}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                {area.checks.map((check) => (
                  <li key={check} className="flex gap-3">
                    <span aria-hidden="true" className="text-primary">
                      □
                    </span>
                    {check}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  What we do
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.help}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContentGrid
        heading="Turn observations into a useful brief."
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
      <div className="mb-12 rounded-2xl border border-border p-6">
        <h2 className="text-xl font-semibold">See the work behind the advice.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Hi Street’s Shopify project uses style-based navigation, collection filters and size
          guidance for a footwear catalogue. The case study explains what was built; it does not
          claim an unmeasured conversion uplift.
        </p>
        <Link
          to="/portfolio/$slug"
          params={{ slug: "histreet-shopify-store" }}
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
        >
          Explore the Hi Street project <ArrowUpRight size={16} />
        </Link>
      </div>
      <ProjectNextStep
        title="Want us to work through the fixes?"
        body="Send your store URL and the three issues that matter most. We can discuss a review, focused theme changes or a broader redesign, with scope and acceptance checks agreed before production."
        source="shopify-checklist"
        label="Discuss your Shopify store"
      />
    </>
  );
}
