import { useEffect } from "react";

/** Media, plus any wrapper that opts in with a data-protect attribute. */
const PROTECTED = "img, video, picture, [data-protect]";

function isProtected(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(PROTECTED) !== null;
}

/**
 * Image and video protection: disables the context menu and drag-to-save on
 * media only, so images can't be copied straight off the page. Links and text
 * keep the native menu ("Open in new tab", "Copy link", copy text), clicks and
 * keyboard use are untouched (the context-menu key on a focused link targets
 * the link, not the image inside it).
 *
 * This is a deterrent, not real DRM — anyone determined can still fetch the
 * file — but it stops the casual "right click → save image / save video" path.
 */
export function ContentProtection() {
  useEffect(() => {
    const block = (e: Event) => {
      if (isProtected(e.target)) e.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
