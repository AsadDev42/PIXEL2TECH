import { ArrowUpRight } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import type { PortfolioItem } from "@/lib/portfolio-data";

/** Match the preview to the artwork, keeping labels outside the design. */
export function DesignProjectCard({
  item,
  priority = false,
}: {
  item: PortfolioItem;
  priority?: boolean;
}) {
  const isSocial = item.subcategory === "Social Media Design";
  const isBanner = item.subcategory === "Ad & Banner Design";
  const isMenu = item.subcategory === "Logo & Menu Design";
  const isThumbnail = item.subcategory === "Thumbnails";
  const isBook = item.slug === "book-cover-design-portfolio";
  const isLogo = item.slug === "logo-design-folio";
  const label = isSocial
    ? "Social media design"
    : isBanner
      ? "Affiliate banners"
      : isThumbnail
        ? "Thumbnails"
        : isMenu
          ? "Logo & menu design"
          : isBook
            ? "Book covers"
            : "Branding";
  const count = item.images?.length ?? 1;
  const format = isSocial
    ? "designs"
    : isBanner
      ? "banners"
      : isMenu
        ? "designs"
        : isThumbnail
          ? "thumbnails"
          : isBook
            ? "covers"
            : isLogo
              ? "logos"
              : "identity boards";

  return (
    <>
      <div
        className={
          isThumbnail
            ? "relative aspect-video overflow-hidden bg-muted"
            : isMenu
              ? "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted p-8"
              : isBook
                ? "relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-muted p-8"
                : "relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-muted p-4"
        }
      >
        {isBook && (
          <div
            aria-hidden="true"
            className="absolute inset-x-16 bottom-8 top-8 translate-x-2 rotate-3 rounded-r-md border border-border bg-background shadow-lg"
          />
        )}
        <MediaImage
          src={item.img}
          alt={`${item.title} — ${isThumbnail ? "landscape thumbnail" : isBook ? "book cover" : "complete design"} preview`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={
            isThumbnail
              ? "h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              : isBook
                ? "relative h-full max-w-full rounded-r-md object-contain drop-shadow-xl transition duration-500 group-hover:-translate-y-1"
                : "h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          }
        />
      </div>
      <div className="flex items-end justify-between gap-4 border-t border-border bg-background p-4 sm:p-6">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {count} {format}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition group-hover:bg-foreground group-hover:text-background"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </>
  );
}
