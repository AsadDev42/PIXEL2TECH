import { MediaImage } from "@/components/media-image";
import { ArrowUpRight } from "lucide-react";

export type LiveStore = {
  /** Public URL of the live store. */
  url: string;
  /** Viewport-sized desktop screenshots (home first). */
  desktop: string[];
  /** Optional tall full-page homepage capture, shown in a scrollable window. */
  fullPage?: string;
  /** Phone screenshots. */
  mobile: string[];
  /** "website" for sites that are not online stores (changes a few labels). */
  kind?: "store" | "website";
};

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** A minimal browser window around a screenshot, with the store's address in the bar. */
function BrowserFrame({
  host,
  children,
  label,
}: {
  host: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
      <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-3">
        <span className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-background px-4 py-1 text-center text-xs text-muted-foreground">
          {host}
        </span>
      </div>
      {children}
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

/**
 * Presents a live Shopify store from screenshots: desktop pages in browser
 * frames, the full homepage in a scrollable window, and phone screens.
 */
export function StoreShowcase({ store, name }: { store: LiveStore; name: string }) {
  const host = hostOf(store.url);
  const site = store.kind === "website" ? "site" : "store";
  const [hero, ...restDesktop] = store.desktop;

  return (
    <div className="space-y-12 md:space-y-16">
      {hero && (
        <BrowserFrame host={host} label={`${name} ${site} homepage on desktop`}>
          <MediaImage
            src={hero}
            alt={`${name} ${site} homepage on desktop`}
            width={1440}
            height={900}
            loading="eager"
            decoding="async"
            draggable={false}
            className="block h-auto w-full"
          />
        </BrowserFrame>
      )}

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        {store.fullPage ? (
          <div>
            <h3 className="text-lg font-bold text-foreground">Scroll the homepage</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">
              The full homepage as it appears on desktop. Scroll inside the window.
            </p>
            <div className="mt-6">
              <BrowserFrame host={host} label={`${name} full homepage`}>
                <div
                  tabIndex={0}
                  role="region"
                  aria-label={`${name} full homepage, scrollable`}
                  className="max-h-[560px] overflow-y-auto overscroll-contain focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <MediaImage
                    src={store.fullPage}
                    alt={`${name} full homepage on desktop`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="block h-auto w-full"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        ) : null}

        {store.mobile.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-foreground">On mobile</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">
              {site === "store"
                ? "Most shoppers arrive on their phones, so the mobile layout matters most."
                : "Most visitors arrive on their phones, so the mobile layout matters most."}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
              {store.mobile.map((src, i) => (
                <li key={src}>
                  <div className="overflow-hidden rounded-[2rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-xl shadow-black/10">
                    <MediaImage
                      src={src}
                      alt={`${name} ${site} on mobile, screen ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="block aspect-[390/844] h-auto w-full rounded-[1.5rem] object-cover object-top"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {restDesktop.length > 0 && (
        <ul className="grid gap-8 md:grid-cols-2">
          {restDesktop.map((src, i) => (
            <li key={src}>
              <BrowserFrame host={host} label={`${name} ${site} page ${i + 2}`}>
                <MediaImage
                  src={src}
                  alt={`${name} ${site}, page ${i + 2} on desktop`}
                  width={1440}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="block h-auto w-full"
                />
              </BrowserFrame>
            </li>
          ))}
        </ul>
      )}

      <a
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
      >
        Visit the live {site}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
