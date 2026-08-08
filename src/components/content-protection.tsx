import { useEffect } from "react";

/**
 * Sitewide content protection: disables right-click (context menu), image
 * dragging and drag-to-save, and long-press save on touch devices, so images
 * can't be copied straight off the page.
 *
 * This is a deterrent, not real DRM — anyone determined can still fetch the
 * file — but it stops the casual "right click → copy image" path.
 */
export function ContentProtection() {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      // Allow the native menu inside editable fields so users can still
      // paste/spell-check in forms.
      if (t?.closest("input, textarea, [contenteditable='true']")) return;
      e.preventDefault();
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
