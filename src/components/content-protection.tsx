import { useEffect } from "react";

/**
 * Image and video protection: disables the context menu and drag-to-save on
 * media only, so images can't be copied straight off the page. Links and text
 * keep the native menu ("Open in new tab", "Copy link", copy text).
 *
 * This is a deterrent, not real DRM — anyone determined can still fetch the
 * file — but it stops the casual "right click → copy image" path.
 */
export function ContentProtection() {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "IMG" || t.tagName === "VIDEO")) e.preventDefault();
    };

    const blockDrag = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "IMG" || t.tagName === "VIDEO")) e.preventDefault();
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return null;
}
