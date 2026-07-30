import { useCallback, useRef, useState } from "react";
import type { z } from "zod";

type Errors<T> = Partial<Record<keyof T, string>>;

/**
 * Shared client-side form helper for the contact forms.
 *
 * - Inline validation: a field validates on blur, and once it has been touched
 *   (or a submit attempt happened) it re-validates on every keystroke so the
 *   error clears as soon as the value becomes valid.
 * - Submit guard: an in-flight ref blocks double submissions even if the button
 *   is tapped twice before React re-renders (common on mobile).
 * - Focus management: on a failed submit the first invalid field is focused and
 *   scrolled into view, which matters on small screens where the error can be
 *   off-screen.
 */
export function useFormValidation<S extends z.ZodType<any, any, any>>(
  schema: S,
  initial: z.input<S> & Record<string, unknown>,
) {
  type Values = typeof initial;

  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors<Values>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const submittedOnce = useRef(false);
  const inFlight = useRef(false);

  const fieldError = useCallback(
    (key: keyof Values, allValues: Values): string | undefined => {
      const result = schema.safeParse(allValues);
      if (result.success) return undefined;
      const issue = result.error.issues.find((i) => i.path[0] === key);
      return issue?.message;
    },
    [schema],
  );

  const setField = useCallback(
    (key: keyof Values) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setValues((prev) => {
          const next = { ...prev, [key]: value } as Values;
          if (touched[key] || submittedOnce.current) {
            const message = fieldError(key, next);
            setErrors((prevErrors) => ({ ...prevErrors, [key]: message }));
          }
          return next;
        });
      },
    [fieldError, touched],
  );

  const handleBlur = useCallback(
    (key: keyof Values) => () => {
      setTouched((prev) => ({ ...prev, [key]: true }));
      setErrors((prev) => ({ ...prev, [key]: fieldError(key, values) }));
    },
    [fieldError, values],
  );

  const reset = useCallback(() => {
    setValues(initial);
    setErrors({});
    setTouched({});
    submittedOnce.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Validates, then runs `onValid` at most once at a time.
   * Returns true when the submission actually ran and succeeded.
   */
  const handleSubmit = useCallback(
    (onValid: (data: z.output<S>) => Promise<void>) =>
      async (e: React.FormEvent) => {
        e.preventDefault();
        if (inFlight.current) return;

        submittedOnce.current = true;
        const parsed = schema.safeParse(values);

        if (!parsed.success) {
          const next: Errors<Values> = {};
          for (const issue of parsed.error.issues) {
            const key = issue.path[0] as keyof Values;
            if (!next[key]) next[key] = issue.message;
          }
          setErrors(next);
          setTouched((prev) => {
            const all = { ...prev };
            for (const key of Object.keys(next)) all[key as keyof Values] = true;
            return all;
          });

          const form = e.currentTarget as HTMLFormElement;
          const firstKey = Object.keys(next)[0];
          const field = form?.querySelector?.<HTMLElement>(`[name="${firstKey}"]`);
          field?.scrollIntoView({ behavior: "smooth", block: "center" });
          field?.focus({ preventScroll: true });
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
    [schema, values],
  );

  return { values, errors, touched, submitting, setField, handleBlur, handleSubmit, reset };
}
