# Native strategy call booking

The booking modal is owned by the website. No Calendly embed or runtime remains.
The calendar owner is sales@pixel2tech.com. Calls are 30 minutes, with two hours'
notice and a 30-day horizon. Hours use Asia/Karachi: Monday–Friday 09:00–18:00,
Saturday 10:00–16:00; Sunday closed. Slot labels use the visitor's local timezone.

## Connect the owner account

1. In Google Cloud, enable the Google Calendar API. Configure an OAuth consent
   app for Pixel2Tech. Use an Internal app if this Workspace permits it, otherwise
   an appropriate published External app. External apps left in Testing issue
   short-lived refresh tokens and are unsuitable for permanent production use.
2. Create a Desktop OAuth client and download its JSON locally. Do not commit it,
   paste its contents in chat, or put credentials in any VITE variable.
3. Run `node scripts/connect-google-calendar.mjs C:/path/to/client.json` from the
   repository. Open the displayed official Google URL, sign in as
   sales@pixel2tech.com and review/approve the Calendar permissions yourself.
   The local callback verifies the owner and Google Meet support before saving
   credentials in ignored `.env.local` and `.env.google.local` files.
4. Import only `.env.google.local` to production using the pinned CLI, from
   deploy/prisma: `node node_modules/prisma/dist/prisma.js project env add
--file ../../.env.google.local --role production`. Redeploy the app to apply it.
5. Test real availability and one owner-approved booking. Verify the owner's
   event, visitor invitation and Google Meet link before announcing activation.

Required server variables: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
GOOGLE_REFRESH_TOKEN and GOOGLE_CALENDAR_ID. The setup script refuses other
calendar owners. Revoke the app from the owner's Google account to disconnect.

## Failure and concurrency handling

Missing credentials show an email call-request option; no pretend slots or
confirmation. Calendar errors fail closed. POSTs validate inputs and apply a
honeypot, minimum fill duration and best-effort per-process IP rate limits.
For sustained public abuse, configure a shared rate limiter or CAPTCHA at the edge.

Availability is rechecked immediately before booking. Deterministic event IDs
prevent simultaneous website bookings of the same slot across instances. Retrying
the same booking ID returns the existing event. Canceled events are restored with
an If-Match precondition, so two restorations cannot overwrite one another.
Google or a human calendar owner can still create an overlapping external event
between availability checking and insertion; Calendar does not provide a
transaction spanning free/busy and event creation.

Google sends attendee invitations (`sendUpdates=all`), and conference generation
uses `conferenceDataVersion=1`. A confirmed event with conferencing still pending
is described honestly; no Meet URL is fabricated. Notes and email remain in the
owner's Calendar event, not analytics. Errors exposed to visitors omit credentials
and upstream event details.
