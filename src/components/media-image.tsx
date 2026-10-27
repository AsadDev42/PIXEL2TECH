import type { ComponentProps } from "react";

/** Server-rendered image metadata: use the content description as its default title. */
export function MediaImage({ alt, title, ...props }: ComponentProps<"img">) {
  const description = (alt || title || "Pixel2Tech project artwork").replace(/\s+/g, " ").trim();
  return <img {...props} alt={description} title={title || description} />;
}
