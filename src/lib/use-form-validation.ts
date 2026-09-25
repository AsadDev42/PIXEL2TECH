import { useCallback, useEffect, useRef, useState } from "react";
import type { z } from "zod";

type Errors<T> = Partial<Record<keyof T, string>>;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Shared client-side form helper for the lead forms.
 *
 * - Inline validation: a field validates on blur once it has a value, and after
 *   that (or after a submit attempt) on every keystroke, so an error clears as
 *   soon as the value becomes valid. Tabbing through empty fields stays quiet.
 * - Submit guard: an in-flight ref blocks double submissions even if the button
 *   is tapped twice before React re-renders (common on mobile).
 * - Focus management: on a failed submit the first invalid field (in page
 *   order) is focused and scrolled into view. The field's error text is linked
 *   with aria-describedby, so screen readers hear it on focus; forms should not
 *   add role="alert" on top of this.
 */
export function useFormValidation<
  S extends z.ZodType<Record<string, unknown>, Record<string, unknown>>,
>(schema: S, initial: z.input<S> & Record<string, unknown>) {
  type Values = typeof initial;
  type Key = keyof Values;

  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors<Values>>({});
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  // Refs mirror state so event handlers always see the latest values.
  const valuesRef = useRef<Values>(initial);
  const touchedRef = useRef<Partial<Record<Key, boolean>>>({});
  const submittedOnce = useRef(false);
  const inFlight = useRef(false);
  const initialRef = useRef(initial);
  /** Attach to the submit button so focus can be restored after sending. */
  const submitRef = useRef<HTMLButtonElement>(null);
  const wasSubmitting = useRef(false);

  // A focused button that becomes disabled can drop focus to <body> in some
  // browsers. When sending ends, put keyboard users back on the button.
  useEffect(() => {
    if (wasSubmitting.current && !submitting) {
      const active = document.activeElement;
      if (!active || active === document.body) submitRef.current?.focus();
    }
    wasSubmitting.current = submitting;
  }, [submitting]);

  const fieldError = useCallback(
    (key: Key, allValues: Values): string | undefined => {
      const result = schema.safeParse(allValues);
      if (result.success) return undefined;
      return result.error.issues.find((i) => i.path[0] === key)?.message;
    },
    [schema],
  );

  const markTouched = useCallback((keys: Key[]) => {
    const next = { ...touchedRef.current };
    for (const key of keys) next[key] = true;
    touchedRef.current = next;
    setTouched(next);
  }, []);

  const setField = useCallback(
    (key: Key) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...valuesRef.current, [key]: e.target.value } as Values;
      valuesRef.current = next;
      setValues(next);
      if (touchedRef.current[key] || submittedOnce.current) {
        const message = fieldError(key, next);
        setErrors((prev) => ({ ...prev, [key]: message }));
      }
    },
    [fieldError],
  );

  const handleBlur = useCallback(
    (key: Key) => () => {
      const current = valuesRef.current;
      const hasValue = String(current[key] ?? "").trim() !== "";
      if (!hasValue && !touchedRef.current[key] && !submittedOnce.current) return;
      markTouched([key]);
      setErrors((prev) => ({ ...prev, [key]: fieldError(key, current) }));
    },
    [fieldError, markTouched],
  );

  const reset = useCallback(() => {
    valuesRef.current = initialRef.current;
    touchedRef.current = {};
    submittedOnce.current = false;
    setValues(initialRef.current);
    setErrors({});
    setTouched({});
  }, []);

  /**
   * Validates, then runs `onValid` at most once at a time. On a failed
   * validation, `onInvalid` receives the errors (e.g. to show a summary).
   */
  const handleSubmit = useCallback(
    (onValid: (data: z.output<S>) => Promise<void>, onInvalid?: (errors: Errors<Values>) => void) =>
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inFlight.current) return;

        submittedOnce.current = true;
        const form = e.currentTarget;
        const parsed = schema.safeParse(valuesRef.current);

        if (!parsed.success) {
          const next: Errors<Values> = {};
          for (const issue of parsed.error.issues) {
            const key = issue.path[0] as Key;
            if (!next[key]) next[key] = issue.message;
          }
          setErrors(next);
          markTouched(Object.keys(next) as Key[]);
          onInvalid?.(next);

          // First invalid control in page order, not schema order.
          const field = Array.from(form.elements).find(
            (el): el is HTMLInputElement | HTMLTextAreaElement =>
              (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
              Boolean(next[el.name as Key]),
          );
          field?.focus({ preventScroll: true });
          field?.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "center",
          });
          return;
        }

        inFlight.current = true;
        setSubmitting(true);
        try {
          await onValid(parsed.data);
        } finally {
          inFlight.current = false;
          setSubmitting(false);
        }
      },
    [schema, markTouched],
  );

  return {
    values,
    errors,
    touched,
    submitting,
    submitRef,
    setField,
    handleBlur,
    handleSubmit,
    reset,
  };
}

/**
 * Anti-spam helpers every public form sends with its data: a honeypot value
 * (real people never see the field) and the time since the form mounted.
 */
export function useSpamGuard() {
  const [website, setWebsite] = useState("");
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);
  const elapsedMs = useCallback(
    () => (mountedAt.current ? Math.max(0, Date.now() - mountedAt.current) : 0),
    [],
  );
  return { website, setWebsite, elapsedMs };
}
