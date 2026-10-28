import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function PortfolioImageGallery({
  images,
  title,
  itemLabel = "thumbnail",
}: {
  images: string[];
  title: string;
  itemLabel?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const move = (direction: number) =>
    setActive((index) =>
      index === null ? null : (index + direction + images.length) % images.length,
    );

  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">Select a {itemLabel} to view it larger.</p>
      <ul
        className={
          itemLabel === "banner"
            ? "columns-1 gap-4 sm:columns-2 lg:columns-3"
            : itemLabel === "design"
              ? "grid gap-6 md:grid-cols-2"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {images.map((src, index) => (
          <li key={src} className={itemLabel === "banner" ? "mb-4 break-inside-avoid" : undefined}>
            <button
              type="button"
              aria-label={`Open ${itemLabel} ${index + 1} of ${images.length}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setActive(index);
              }}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <MediaImage
                src={src}
                alt={`${title}, design ${index + 1} of ${images.length}`}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className={
                  itemLabel === "banner"
                    ? "h-auto w-full object-contain"
                    : itemLabel === "post"
                      ? "aspect-[4/5] h-auto w-full object-contain"
                      : "aspect-video h-auto w-full object-contain"
                }
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2 right-2 rounded-full bg-black/70 p-2 text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Expand className="h-4 w-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent
          className="w-[calc(100%-2rem)] max-h-[calc(100dvh-2rem)] max-w-6xl gap-4 overflow-y-auto rounded-2xl border-white/15 bg-neutral-950 p-4 text-white sm:p-6"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            trigger.current?.focus();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <DialogTitle className="pr-8 text-base leading-snug">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Full {itemLabel} preview. Use the left and right arrow keys to browse, or press Escape
            to close.
          </DialogDescription>
          {active !== null && (
            <>
              <MediaImage
                key={images[active]}
                src={images[active]}
                alt={`${title}, design ${active + 1} of ${images.length}, enlarged`}
                className="max-h-[calc(100dvh-15rem)] w-full object-contain"
                draggable={false}
              />
              <a
                href={images[active]}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-self-center text-sm text-white/80 underline underline-offset-4 hover:text-white"
              >
                Open full-size image
              </a>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  aria-label={`Previous ${itemLabel}`}
                  disabled={images.length < 2}
                  onClick={() => move(-1)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <p
                  aria-live="polite"
                  aria-atomic="true"
                  className="text-sm tabular-nums text-white/80"
                >
                  {active + 1} / {images.length}
                </p>
                <button
                  type="button"
                  aria-label={`Next ${itemLabel}`}
                  disabled={images.length < 2}
                  onClick={() => move(1)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
