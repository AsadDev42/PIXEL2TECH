import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2 } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/contact.functions";
import {
  NEWSLETTER_SUCCESS_MESSAGE,
  newsletterSchema,
  submitErrorMessage,
} from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { useFormValidation, useSpamGuard } from "@/lib/use-form-validation";
import { cn } from "@/lib/utils";
import {
  FIELD_CLASS,
  FIELD_INVALID_CLASS,
  FIELD_VALID_CLASS,
  FieldError,
  FormStatus,
  HoneypotField,
  type FormStatusState,
} from "@/components/contact-form";

const INITIAL = { email: "" };

/** Email-only signup used in the blog sidebar. Same email rule as the contact form. */
export function NewsletterForm({
  idPrefix = "newsletter",
  className,
}: {
  /** Prefix for element ids; set it if a page shows two signup forms. */
  idPrefix?: string;
  className?: string;
}) {
  const subscribe = useServerFn(subscribeToNewsletter);
  const guard = useSpamGuard();
  const { values, errors, submitting, submitRef, setField, handleBlur, handleSubmit, reset } =
    useFormValidation(newsletterSchema, INITIAL);
  const [status, setStatus] = useState<FormStatusState>({ kind: "idle" });

  const emailId = `${idPrefix}-email`;
  const errorId = `${emailId}-error`;
  const updateEmail = setField("email");

  const onSubmit = handleSubmit(
    async (data) => {
      setStatus({ kind: "idle" });
      try {
        await subscribe({
          data: { email: data.email, website: guard.website, elapsedMs: guard.elapsedMs() },
        });
        trackEvent("newsletter_signup", { location: "blog" });
        reset();
        setStatus({ kind: "success", message: NEWSLETTER_SUCCESS_MESSAGE });
      } catch (err) {
        setStatus({ kind: "error", message: submitErrorMessage(err) });
      }
    },
    // The inline error is linked to the focused field; no summary needed for one field.
    () => setStatus({ kind: "idle" }),
  );

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-busy={submitting || undefined}
      className={cn("relative mt-4", className)}
    >
      <HoneypotField id={`${idPrefix}-website`} value={guard.website} onChange={guard.setWebsite} />
      <label htmlFor={emailId} className="mb-2 block text-sm font-medium text-foreground">
        Email address
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        enterKeyHint="send"
        placeholder="you@company.com"
        maxLength={255}
        required
        readOnly={submitting}
        value={values.email}
        onChange={(e) => {
          updateEmail(e);
          if (status.kind !== "idle") setStatus({ kind: "idle" });
        }}
        onBlur={handleBlur("email")}
        aria-invalid={errors.email ? true : undefined}
        aria-describedby={errors.email ? errorId : undefined}
        className={cn(FIELD_CLASS, errors.email ? FIELD_INVALID_CLASS : FIELD_VALID_CLASS)}
      />
      <FieldError id={errorId} message={errors.email} />
      <button
        ref={submitRef}
        type="submit"
        disabled={submitting}
        className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
        ) : null}
        {submitting ? "Subscribing…" : "Subscribe"}
      </button>
      <FormStatus status={status} />
    </form>
  );
}
