import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function PortfolioImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const move = (direction: number) =>
    setActive((index) =>
      index === null ? null : (index + direction + images.length) % images.length,
    );

  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">Select a thumbnail to view it larger.</p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <li key={src}>
            <button
              type="button"
              aria-label={`Open thumbnail ${index + 1} of ${images.length}`}
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
                className="aspect-video h-auto w-full object-contain"
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
            Full thumbnail preview. Use the left and right arrow keys to browse, or press Escape to
            close.
          </DialogDescription>
          {active !== null && (
            <>
              <MediaImage
                key={images[active]}
                src={images[active]}
                alt={`${title}, design ${active + 1} of ${images.length}, enlarged`}
                className="max-h-[calc(100dvh-12rem)] w-full object-contain"
                draggable={false}
              />
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  aria-label="Previous thumbnail"
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
                  aria-label="Next thumbnail"
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
