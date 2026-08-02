import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = { redirect_url?: string; redirect_to?: string; client?: { name?: string } | null };
type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
};
const oauth = () => (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s['authorization_id'] === "string" ? s['authorization_id'] : "",
  }),
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id");
    if (!authorizationId) throw new Error("Missing authorization_id");
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return { needsAuth: true as const, details: null };
    const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) {
      window.location.href = immediate;
      return { needsAuth: false as const, details: null };
    }
    return { needsAuth: false as const, details: data };
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-md px-5 py-24 text-center">
      <h1 className="font-heading text-2xl font-semibold">Authorization failed</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">{children}</div>
    </main>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function submit(mode: "signin" | "signup") {
    setBusy(true);
    setError(null);
    setNotice(null);
    const fn =
      mode === "signin"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href } });
    const { data, error: err } = await fn;
    setBusy(false);
    if (err) return setError(err.message);
    if (!data.session) return setNotice("Check your inbox to confirm your email, then reopen this link.");
    window.location.reload();
  }

  return (
    <Shell>
      <h1 className="font-heading text-2xl font-semibold">Sign in to continue</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sign in to authorize this app to use Pixel2Tech tools on your behalf.
      </p>
      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          void submit("signin");
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria-label="Password"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        {notice && <p className="text-sm text-muted-foreground">{notice}</p>}
        <button
          type="submit"
          disabled={busy}
          className="p2t-on-dark w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background disabled:opacity-60"
        >
          {busy ? "Please wait…" : "Sign in"}
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => void submit("signup")}
          className="w-full rounded-full border border-border px-6 py-3 text-sm font-medium disabled:opacity-60"
        >
          Create an account
        </button>
      </form>
    </Shell>
  );
}

function Consent() {
  const { needsAuth, details } = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (needsAuth) return <SignIn />;

  const clientName = details?.client?.name ?? "an app";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error: err } = approve
      ? await oauth().approveAuthorization(authorization_id)
      : await oauth().denyAuthorization(authorization_id);
    if (err) {
      setBusy(false);
      return setError(err.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("No redirect returned by the authorization server.");
    }
    window.location.href = target;
  }

  return (
    <Shell>
      <h1 className="font-heading text-2xl font-semibold">Connect {clientName} to Pixel2Tech</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This lets {clientName} read Pixel2Tech services, portfolio projects and blog articles through the
        agent integration, acting as you.
      </p>
      {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
      <div className="mt-8 flex gap-3">
        <button
          disabled={busy}
          onClick={() => void decide(true)}
          className="p2t-on-dark flex-1 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background disabled:opacity-60"
        >
          Approve
        </button>
        <button
          disabled={busy}
          onClick={() => void decide(false)}
          className="flex-1 rounded-full border border-border px-6 py-3 text-sm font-medium disabled:opacity-60"
        >
          Deny
        </button>
      </div>
    </Shell>
  );
}
