// Run locally: node scripts/connect-google-calendar.mjs C:/path/to/oauth-client.json
// Uses a Desktop OAuth client. Secrets never appear in stdout or Git.
import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { randomBytes, createHash, timingSafeEqual } from "node:crypto";
import { resolve } from "node:path";

const clientFile = process.argv[2];
if (!clientFile)
  throw new Error("Supply the local path to a downloaded Google Desktop OAuth client JSON file.");
const client = JSON.parse(await readFile(clientFile, "utf8")).installed;
if (!client?.client_id || !client?.client_secret)
  throw new Error("Use a Desktop OAuth client, with the Calendar API enabled.");
const state = randomBytes(32).toString("hex");
const verifier = randomBytes(48).toString("base64url");
const challenge = createHash("sha256").update(verifier).digest("base64url");
let completed = false;
const server = createServer(async (request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  if (url.pathname !== "/oauth/callback") {
    response.writeHead(404).end();
    return;
  }
  const receivedState = url.searchParams.get("state") || "";
  if (
    completed ||
    Buffer.byteLength(receivedState) !== Buffer.byteLength(state) ||
    !timingSafeEqual(Buffer.from(receivedState), Buffer.from(state))
  ) {
    response.writeHead(400).end("Invalid OAuth state.");
    return;
  }
  if (url.searchParams.has("error")) {
    response.writeHead(400).end("Google access was not granted. You can close this tab.");
    return;
  }
  const code = url.searchParams.get("code");
  if (!code) {
    response.writeHead(400).end("Missing authorization code.");
    return;
  }
  completed = true;
  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      signal: AbortSignal.timeout(20000),
      body: new URLSearchParams({
        code,
        client_id: client.client_id,
        client_secret: client.client_secret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
        code_verifier: verifier,
      }),
    });
    const token = await tokenResponse.json();
    if (!tokenResponse.ok || !token.refresh_token)
      throw new Error("Google did not return offline access. Reconnect with consent enabled.");
    const calendarResponse = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary",
      {
        signal: AbortSignal.timeout(20000),
        headers: { Authorization: `Bearer ${token.access_token}` },
      },
    );
    const calendar = await calendarResponse.json();
    if (!calendarResponse.ok || calendar.id?.toLowerCase() !== "sales@pixel2tech.com")
      throw new Error("Sign in with sales@pixel2tech.com, the intended calendar owner.");
    if (!calendar.conferenceProperties?.allowedConferenceSolutionTypes?.includes("hangoutsMeet"))
      throw new Error(
        "This calendar does not support Google Meet conferencing. Enable Meet on the owner account.",
      );
    const values = {
      GOOGLE_CLIENT_ID: client.client_id,
      GOOGLE_CLIENT_SECRET: client.client_secret,
      GOOGLE_REFRESH_TOKEN: token.refresh_token,
      GOOGLE_CALENDAR_ID: calendar.id,
    };
    const env =
      Object.entries(values)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join("\n") + "\n";
    const root = resolve(import.meta.dirname, "..");
    await writeFile(resolve(root, ".env.google.local"), env, { mode: 0o600 });
    let local = await readFile(resolve(root, ".env.local"), "utf8").catch(() => "");
    local = local
      .split(/\r?\n/)
      .filter((line) => !/^GOOGLE_(CLIENT_ID|CLIENT_SECRET|REFRESH_TOKEN|CALENDAR_ID)=/.test(line))
      .join("\n");
    await writeFile(resolve(root, ".env.local"), `${local.trimEnd()}\n${env}`, { mode: 0o600 });
    response
      .writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Security-Policy": "default-src 'none'",
      })
      .end(
        "<h1>Calendar connected</h1><p>sales@pixel2tech.com is connected locally. You can close this tab. Production configuration and verification are next.</p>",
      );
    console.log(
      "Calendar verified. Credentials saved in ignored local env files. No secrets printed.",
    );
  } catch (error) {
    response
      .writeHead(400, { "Content-Type": "text/plain", "Cache-Control": "no-store" })
      .end("Calendar connection failed. See the local setup terminal.");
    console.error(error instanceof Error ? error.message : "Calendar connection failed");
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const redirectUri = `http://127.0.0.1:${server.address().port}/oauth/callback`;
const auth = new URL("https://accounts.google.com/o/oauth2/v2/auth");
auth.search = new URLSearchParams({
  client_id: client.client_id,
  redirect_uri: redirectUri,
  response_type: "code",
  scope:
    "https://www.googleapis.com/auth/calendar.events.owned https://www.googleapis.com/auth/calendar.events.freebusy https://www.googleapis.com/auth/calendar.calendars.readonly",
  access_type: "offline",
  prompt: "consent",
  login_hint: "sales@pixel2tech.com",
  state,
  code_challenge: challenge,
  code_challenge_method: "S256",
}).toString();
console.log("Open this Google consent URL locally. Approve only the intended sales account:");
console.log(auth.toString());
setTimeout(
  () => {
    if (!completed) {
      console.error("Connection timed out. Run setup again.");
      server.close();
      process.exitCode = 1;
    }
  },
  10 * 60 * 1000,
).unref();
