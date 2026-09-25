import { useEffect, useRef } from "react";

const FOCUSABLE = [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

type FocusTrapOptions = {
  /**
   * Make every other top-level element in <body> `inert` while active, so Tab
   * and screen readers can't reach the page behind. Only for containers that
   * are portaled straight into <body> (e.g. BookingModal).
   */
  isolate?: boolean;
};

/**
 * Traps Tab focus within `ref` while `active` is true, moves initial focus to
 * the first focusable element inside, and returns focus to the element that
 * had it when the trap ends. Does not handle Escape (owners do).
 *
 * Keydown events inside a cross-origin iframe (e.g. the Calendly embed) never
 * reach this document, so Tab can still carry focus out of an embed. A
 * document-level focusin guard pulls it back, and `isolate` removes the page
 * behind from the tab order altogether.
 */
export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
  { isolate = false }: FocusTrapOptions = {},
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!active || !container) return;

    // Remember the trigger before anything becomes inert: an element that
    // turns inert while focused loses focus.
    const previouslyFocused =
      document.activeElement instanceof HTMLElement && document.activeElement !== document.body
        ? document.activeElement
        : null;

    const madeInert: Element[] = [];
    if (isolate) {
      for (const el of Array.from(document.body.children)) {
        if (el.contains(container) || el.hasAttribute("inert")) continue;
        el.setAttribute("inert", "");
        madeInert.push(el);
      }
    }

    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.closest("[inert]") && el.getClientRects().length > 0,
      );

    (getFocusable()[0] ?? container).focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) {
        e.preventDefault();
        container.focus({ preventScroll: true });
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey && (current === first || current === container)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onFocusIn = (e: FocusEvent) => {
      if (e.target instanceof Node && container.contains(e.target)) return;
      (getFocusable()[0] ?? container).focus({ preventScroll: true });
    };

    container.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      // Order matters: stop guarding, lift inert, then restore focus.
      container.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      madeInert.forEach((el) => el.removeAttribute("inert"));
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, [active, isolate]);

  return ref;
}
