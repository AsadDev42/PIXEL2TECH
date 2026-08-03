import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/contact.functions";

export function NewsletterForm() {
  const submit = useServerFn(submitContactForm);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const mountedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await submit({
        data: {
          firstName: "Newsletter",
          lastName: "Subscriber",
          email,
          subject: "Newsletter subscription",
          message: `New newsletter subscription request from ${email}.`,
          elapsedMs: Date.now() - mountedAt.current,
        },
      });
      toast.success("You're subscribed! We'll be in touch.");
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="newsletter-email" className="mb-1.5 block text-xs font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@yourmail.com"
          className="min-h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
