import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/contact.functions";
import {
  CONTACT_FORM_INITIAL,
  CONTACT_SUCCESS_MESSAGE,
  buildInquirySubject,
  contactBaseSchema,
  submitErrorMessage,
  type ContactFormValues,
  type ContactSource,
} from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { useFormValidation, useSpamGuard } from "@/lib/use-form-validation";
import { cn } from "@/lib/utils";

/** Text input look shared by every lead form. Reads well on bg-background and bg-muted. */
export const FIELD_CLASS =
  "block min-h-12 w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
export const FIELD_VALID_CLASS =
  "border-muted-foreground/60 hover:border-foreground/60 dark:border-muted-foreground/50";
export const FIELD_INVALID_CLASS = "border-destructive";

export type FormStatusState =
  { kind: "idle" } | { kind: "success"; message: string } | { kind: "error"; message: string };

/**
 * The form's single polite live region. It is always mounted (so screen readers
 * register it) and only its content changes. Don't pair it with a toast: the
 * toaster has its own live region and the result would be read twice.
 */
export function FormStatus({ status }: { status: FormStatusState }) {
  return (
    <div role="status" aria-atomic="true">
      {status.kind === "idle" ? null : (
        <p
          className={cn(
            "mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed text-foreground",
            status.kind === "success"
              ? "border-primary/40 bg-primary/5"
              : "border-destructive/50 bg-destructive/5",
          )}
        >
          {status.kind === "success" ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
          )}
          <span className="min-w-0">{status.message}</span>
        </p>
      )}
    </div>
  );
}

/** Inline error under a field. Link it from the field with aria-describedby. */
export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm text-destructive">
      <AlertCircle className="h-4 w-4 shrink-0 translate-y-0.5" aria-hidden="true" />
      <span className="min-w-0">{message}</span>
    </p>
  );
}

/** Spam trap. Inert, so people, keyboards and screen readers never reach it. */
export function HoneypotField({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      inert
      className="pointer-events-none absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input
        id={id}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

type FieldKey = keyof ContactFormValues;

const INPUT_FIELDS: ReadonlyArray<{
  key: Exclude<FieldKey, "message">;
  label: string;
  required: boolean;
  type: "text" | "email" | "tel";
  autoComplete: string;
  inputMode?: "text" | "email" | "tel";
  maxLength: number;
  placeholder?: string;
  hint?: string;
}> = [
  {
    key: "firstName",
    label: "First name",
    required: true,
    type: "text",
    autoComplete: "given-name",
    maxLength: 100,
  },
  {
    key: "lastName",
    label: "Last name",
    required: true,
    type: "text",
    autoComplete: "family-name",
    maxLength: 100,
  },
  {
    key: "email",
    label: "Email",
    required: true,
    type: "email",
    autoComplete: "email",
    inputMode: "email",
    maxLength: 255,
    placeholder: "you@company.com",
  },
  {
    key: "phone",
    label: "Phone",
    required: false,
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    maxLength: 40,
    hint: "Include your country code",
  },
];

function describedBy(...ids: Array<string | false | undefined>) {
  return ids.filter(Boolean).join(" ") || undefined;
}

export type ContactFormProps = {
  /** Which page the form is on. Goes into the owner's email subject and analytics. */
  source: ContactSource;
  /** Prefix for element ids. Defaults to `contact-<source>`; set it if a page shows two forms. */
  idPrefix?: string;
  submitLabel?: string;
  className?: string;
};

/**
 * The one contact form used on Home, Contact and Services: first and last name,
 * email, optional phone and a message. Works from 320px up (one column, two
 * from `sm`), on bg-background or bg-muted, in light and dark mode.
 */
export function ContactForm({
  source,
  idPrefix,
  submitLabel = "Send message",
  className,
}: ContactFormProps) {
  const p = idPrefix ?? `contact-${source}`;
  const submit = useServerFn(submitContactForm);
  const guard = useSpamGuard();
  const { values, errors, submitting, submitRef, setField, handleBlur, handleSubmit, reset } =
    useFormValidation(contactBaseSchema, CONTACT_FORM_INITIAL);
  const [status, setStatus] = useState<FormStatusState | { kind: "invalid" }>({ kind: "idle" });

  const errorCount = Object.values(errors).filter(Boolean).length;
  let shownStatus: FormStatusState;
  if (status.kind !== "invalid") shownStatus = status;
  else if (errorCount === 0) shownStatus = { kind: "idle" };
  else
    shownStatus = {
      kind: "error",
      message:
        errorCount === 1
          ? "Please fix the highlighted field."
          : `Please fix the ${errorCount} highlighted fields.`,
    };

  const onChange = (key: FieldKey) => {
    const update = setField(key);
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      update(e);
      if (status.kind === "success" || status.kind === "error") setStatus({ kind: "idle" });
    };
  };

  const onSubmit = handleSubmit(
    async (data) => {
      setStatus({ kind: "idle" });
      try {
        await submit({
          data: {
            ...data,
            subject: buildInquirySubject(data.firstName, data.lastName, source),
            source,
            website: guard.website,
            elapsedMs: guard.elapsedMs(),
          },
        });
        trackEvent("contact_form_submitted", { source });
        reset();
        setStatus({ kind: "success", message: CONTACT_SUCCESS_MESSAGE });
      } catch (err) {
        setStatus({ kind: "error", message: submitErrorMessage(err) });
      }
    },
    () => setStatus({ kind: "invalid" }),
  );

  const messageId = `${p}-message`;
  const messageErrorId = `${messageId}-error`;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-busy={submitting || undefined}
      className={cn("relative grid gap-x-6 gap-y-5 sm:grid-cols-2", className)}
    >
      <p className="text-sm text-muted-foreground sm:col-span-2">
        Fields marked{" "}
        <span aria-hidden="true" className="font-semibold text-destructive">
          *
        </span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <HoneypotField id={`${p}-website`} value={guard.website} onChange={guard.setWebsite} />

      {INPUT_FIELDS.map((f) => {
        const id = `${p}-${f.key}`;
        const hintId = f.hint ? `${id}-hint` : undefined;
        const errorId = `${id}-error`;
        const error = errors[f.key];
        return (
          <div key={f.key} className="min-w-0">
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
              {f.label}
              {f.required ? (
                <span aria-hidden="true" className="ml-1 text-destructive">
                  *
                </span>
              ) : (
                <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
              )}
            </label>
            <input
              id={id}
              name={f.key}
              type={f.type}
              inputMode={f.inputMode}
              autoComplete={f.autoComplete}
              enterKeyHint="next"
              placeholder={f.placeholder}
              maxLength={f.maxLength}
              required={f.required}
              readOnly={submitting}
              value={values[f.key]}
              onChange={onChange(f.key)}
              onBlur={handleBlur(f.key)}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy(hintId, error && errorId)}
              className={cn(FIELD_CLASS, error ? FIELD_INVALID_CLASS : FIELD_VALID_CLASS)}
            />
            {f.hint ? (
              <p id={hintId} className="mt-2 text-sm text-muted-foreground">
                {f.hint}
              </p>
            ) : null}
            <FieldError id={errorId} message={error} />
          </div>
        );
      })}

      <div className="min-w-0 sm:col-span-2">
        <label htmlFor={messageId} className="mb-2 block text-sm font-medium text-foreground">
          Message
          <span aria-hidden="true" className="ml-1 text-destructive">
            *
          </span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          maxLength={5000}
          required
          readOnly={submitting}
          placeholder="What are you working on, and where could you use a hand?"
          value={values.message}
          onChange={onChange("message")}
          onBlur={handleBlur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy(errors.message && messageErrorId)}
          className={cn(
            FIELD_CLASS,
            "min-h-32 resize-y",
            errors.message ? FIELD_INVALID_CLASS : FIELD_VALID_CLASS,
          )}
        />
        <FieldError id={messageErrorId} message={errors.message} />
      </div>

      <div className="min-w-0 sm:col-span-2">
        <button
          ref={submitRef}
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3 text-base font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <Loader2
              className="h-4 w-4 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : null}
          {submitting ? "Sending…" : submitLabel}
        </button>
        <FormStatus status={shownStatus} />
      </div>
    </form>
  );
}
