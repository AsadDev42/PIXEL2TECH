import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Reserved space before the section mounts — prevents layout shift. */
  minHeight?: number | string;
  /** How early to mount before the section scrolls into view. */
  rootMargin?: string;
  /** Optional custom placeholder; defaults to a neutral skeleton. */
  fallback?: ReactNode;
  className?: string;
};

/**
 * Defers mounting of a heavy below-the-fold section until the user scrolls
 * near it. Keeps the initial render (and any JS chunk it pulls in) small,
 * while reserving layout space so nothing jumps when it appears.
 */
export function LazySection({
  children,
  minHeight = 480,
  rootMargin = "300px 0px",
  fallback,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {show ? (
        children
      ) : (
        fallback ?? (
          <div
            aria-hidden="true"
            className="mx-auto max-w-7xl animate-pulse rounded-3xl bg-muted/60"
            style={{ minHeight }}
          />
        )
      )}
    </div>
  );
}
