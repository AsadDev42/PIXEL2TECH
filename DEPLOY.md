# Deploying pixel2tech.com

This site no longer uses Lovable. Here is where each part lives now:

| Part                         | Where it lives                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------ |
| Code                         | GitHub: `AsadDev42/PIXEL2TECH`, branch `main`                                  |
| Hosting (the running site)   | Prisma Compute, project `pixel2tech`, service `web`, region `us-west-1`        |
| Database (contact form rows) | Prisma Postgres, created and migrated by the deploy (`deploy/prisma/`)         |
| Emails (contact form)        | Resend (`RESEND_API_KEY`)                                                      |
| Domain and DNS               | Cloudflare (zone `pixel2tech.com`)                                             |
| Deploys                      | GitHub Actions: `.github/workflows/prisma-deploy.yml`, on every push to `main` |

You do the one-time setup below once. After that, pushing to `main` is all it takes.

All commands are for **PowerShell** on Windows. Run them from the `deploy\prisma` folder:

```powershell
cd C:\Users\ASAD\Documents\Pixel2Tech-Website\PIXEL2TECH\deploy\prisma
npm ci
```

You need Node.js 22.18 or newer (`node --version`).

---

## One-time setup

### Step 1. Log in to Prisma

```powershell
npx prisma auth login
npx prisma auth whoami
```

`auth login` opens your browser. `whoami` shows your account and workspace.

### Step 2. Check for an old project

```powershell
npx prisma project list
```

- **No project called `pixel2tech`:** go to Step 3.
- **A `pixel2tech` project exists:** look inside it:

  ```powershell
  npx prisma project show pixel2tech
  ```

  If it is empty, keep it. The first deploy will use it.

  If it already has a database or a service (for example, one you made by hand in the Prisma Console), the first deploy will stop with `HostedStateBootstrapError`. Delete those resources, or delete the project, in the [Prisma Console](https://console.prisma.io), then continue.

### Step 3. Create and link the project

Only create it if Step 2 did not find one:

```powershell
npx prisma project create pixel2tech --region us-west-1
```

Then link this folder to it:

```powershell
npx prisma project link pixel2tech
```

This writes a small `.prisma/` folder. It is in `.gitignore`, so it never goes to GitHub.

### Step 4. Let GitHub deploy to Prisma

Pick **one** option.

**Option A (recommended): connect the repository.** GitHub then gets a short-lived login for every deploy. You don't store any secret.

```powershell
npx prisma git connect https://github.com/AsadDev42/PIXEL2TECH
```

Follow the prompts. If GitHub asks you to install the Prisma app, allow it for the `PIXEL2TECH` repository. This command must run in a normal terminal window (it asks you questions).

**Option B (only if Option A keeps failing): a service token.**

1. In the [Prisma Console](https://console.prisma.io), create a **service token** for your workspace. Copy it.
2. In the workspace **settings**, copy the **workspace id**.
3. On GitHub, open the repository, then **Settings > Secrets and variables > Actions > New repository secret**. Add both:

   | Secret name            | Value             |
   | ---------------------- | ----------------- |
   | `PRISMA_SERVICE_TOKEN` | the service token |
   | `PRISMA_WORKSPACE_ID`  | the workspace id  |

The workflow uses the token automatically when `PRISMA_SERVICE_TOKEN` exists. Otherwise it uses Option A.

### Step 5. Set the site's secret settings

The running site reads these settings. Set them on the Prisma project, never in the code:

| Name                  | Needed?  | What it is                                                                                   |
| --------------------- | -------- | -------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`      | Yes      | Resend API key. Without it, contact form emails are not sent (form entries are still saved). |
| `EMAIL_FROM`          | Optional | Sender, for example `Pixel2Tech <noreply@notify.pixel2tech.com>`. That is also the default.  |
| `CONTACT_OWNER_EMAIL` | Optional | Inbox that gets new contact form alerts. Default: `sales@pixel2tech.com`.                    |

```powershell
npx prisma project env add RESEND_API_KEY=re_your_key_here --role production
npx prisma project env add CONTACT_OWNER_EMAIL=sales@pixel2tech.com --role production
npx prisma project env list --role production
```

To change a value later, use `env update` with the same format, then **deploy again** (see "How deploys happen"). A changed value only takes effect on the next deploy: the site reads these values when a new build starts, so always re-run the workflow after a change.

The sender address must be on a domain you verified in Resend (the default uses `notify.pixel2tech.com`). Set up that domain like this:

1. In **Cloudflare > pixel2tech.com > DNS > Records**, delete the old Lovable email records first. Lovable handed `notify.pixel2tech.com` over to its own name servers, so while these records exist, every record you add under `notify` in Cloudflare is ignored and Resend can never verify the domain:
   - the `NS` records named `notify` (content `ns3.lovable.cloud` and `ns4.lovable.cloud`)
   - any `TXT` record whose name starts with `_lovable-email`
2. In Resend, open **Domains > Add domain** and enter `notify.pixel2tech.com`.
3. Add every record Resend shows (MX, SPF `TXT`, DKIM `TXT`) in Cloudflare, each with the proxy set to **DNS only** (grey cloud).
4. Click **Verify** in Resend. It can take a few minutes.

**Do not set** these. Prisma sets them, and setting them yourself breaks the site:

- `PORT`, `HOST`, `NITRO_PORT`, `NITRO_HOST`
- `DATABASE_URL`, `DATABASE_URL_POOLED`, or anything starting with `COMPOSER_` (the database is connected automatically)

### Step 6. First deploy

Push any commit to `main`, or on GitHub open **Actions > prisma-deploy > Run workflow** (branch `main`).

When the run finishes:

1. Open the run log, step **Deploy to Prisma Compute**. It must say `credential: short-lived workspace token via GitHub OIDC` (Option A) or show the deploy running with your token (Option B).
2. The last step, **Check the deploy really happened**, prints the live `...prisma.build` URL in the run summary.
3. Open that URL and check: the home page, a blog post, a portfolio page, the videos, and send a test message with the contact form.
4. Check that HTTPS works without a redirect loop. Replace the address with your `...prisma.build` URL:

   ```powershell
   curl.exe -sI https://YOUR-SERVICE.prisma.build/about
   ```

   The first line must say `HTTP/1.1 200` (or `HTTP/2 200`). If it says `301` with a `location:` pointing at the same address, **do not do Step 7**. The site redirects to HTTPS only when Prisma's edge reports the visitor used plain http (`x-forwarded-proto: http`), so a loop means that header is wrong. Report it before going further.

5. Check that a portfolio video answers partial requests (iPhones need this):

   ```powershell
   curl.exe -s -D - -o NUL -H "Range: bytes=0-1" https://YOUR-SERVICE.prisma.build/portfolio/ugc-video-ads/1.mp4
   ```

   The first line must say `206`, with a `content-range: bytes 0-1/...` line.

You can also get the URL from the terminal:

```powershell
npx prisma service list
npx prisma service show web
```

### Step 7. Point pixel2tech.com at Prisma

Do this only after Step 6 works. The site can be offline for a few minutes during the switch.

1. Ask Prisma for the DNS record:

   ```powershell
   npx prisma service domain add pixel2tech.com --service web
   ```

   The first time, this fails with `DOMAIN_DNS_NOT_CONFIGURED` and **prints the CNAME target**. Write it down. Always use the value it prints.

2. In **Cloudflare > pixel2tech.com > DNS > Records**:

   **Delete** the old Lovable records:

   | Type | Name  | Content         |
   | ---- | ----- | --------------- |
   | A    | `@`   | `185.158.133.1` |
   | A    | `www` | `185.158.133.1` |

   Also delete any `AAAA` records for `@` or `www`, and any `TXT` record whose name contains `lovable`.

   **Add**:

   | Type  | Name  | Target                       | Proxy status              | TTL  |
   | ----- | ----- | ---------------------------- | ------------------------- | ---- |
   | CNAME | `@`   | the target printed in step 1 | **DNS only** (grey cloud) | Auto |
   | CNAME | `www` | the target printed in step 1 | **DNS only** (grey cloud) | Auto |

   The proxy **must be off** (grey cloud). With the orange cloud on, Prisma cannot see the record or issue the HTTPS certificate. Don't touch the email records (MX, SPF, DKIM, DMARC).

3. Add both domains and wait until they are active (up to about 15 minutes):

   ```powershell
   npx prisma service domain add pixel2tech.com --service web
   npx prisma service domain add www.pixel2tech.com --service web
   npx prisma service domain wait pixel2tech.com --service web
   npx prisma service domain wait www.pixel2tech.com --service web
   ```

4. Open `https://pixel2tech.com` and `https://www.pixel2tech.com`. Both should show the site with a valid lock icon.

5. Tell search engines about the new host. The site no longer submits its sitemap on its own:
   - [Google Search Console](https://search.google.com/search-console): open the `pixel2tech.com` property, go to **Sitemaps**, and submit `https://pixel2tech.com/sitemap.xml`.
   - [Bing Webmaster Tools](https://www.bing.com/webmasters): open the site, go to **Sitemaps**, and submit the same address.

   Do this again after you publish a new blog post or page if you want it found quickly.

If a domain stays stuck:

```powershell
npx prisma service domain show pixel2tech.com --service web
npx prisma service domain retry pixel2tech.com --service web
```

### Step 8. Disconnect Lovable

Do this once the site works on `pixel2tech.com` from Prisma.

**First, save the old contact form entries.** Everything people sent through the form before the move is stored in Lovable Cloud (Supabase), not in the new Prisma database. Nothing copies it over.

1. In Lovable, open the Pixel2Tech project, then the **Cloud** database view. Open the `contacts` table and export all rows as CSV. Keep the file somewhere safe: it holds visitors' names, emails and phone numbers.
2. Check the file opens and the row count matches the table.

**Then disconnect Lovable:**

1. In Lovable, open the Pixel2Tech project, then **Settings > GitHub > Disconnect**. Lovable stops pushing to the repository. Your code stays on GitHub.
2. In the same Lovable project, remove the custom domain `pixel2tech.com` (and `www`) if it is still listed.
3. Optional: on GitHub, open **Settings > Applications > Installed GitHub Apps**. Remove the Lovable app's access to `PIXEL2TECH`, or uninstall it.

4. Retire the old Lovable Cloud backend once you have the CSV. Until you do, the old `contacts` table still accepts new rows from anyone who has its public address (it is in the site's old code), and it still holds personal data with a provider the privacy policy no longer lists. In the Lovable project's Cloud settings, delete or pause the Cloud project. If you can't, at least remove the table's rule that lets anonymous visitors insert rows, then delete the old rows.

From now on, don't edit the site in Lovable. Edit the code in the repository and push to `main`.

---

## How deploys happen

Every push to `main` starts the **prisma-deploy** workflow on GitHub Actions:

1. Installs packages with `bun install --frozen-lockfile` (uses the committed `bun.lock`), then `npm ci` in `deploy/prisma` (uses `deploy/prisma/package-lock.json`). The site's database code imports from `deploy/prisma`, so the build needs both.
2. Builds the site with `NITRO_PRESET=node-server npm run build`, which writes the server to `.output/`.
3. Runs `prisma deploy` in `deploy/prisma`. This creates the database on the first deploy, applies any new database migrations from `deploy/prisma/migrations/`, uploads `.output/` and makes the new version live.
4. Fails the run if nothing was deployed (for example, if the repository lost its Prisma connection).

To deploy again without a code change (for example, after changing a setting in Step 5), open **Actions > prisma-deploy > Run workflow** on `main`.

Watch progress under the **Actions** tab on GitHub. A red run means the live site did not change.

If the install step fails with a lockfile error, run `bun install` on your computer, commit the updated `bun.lock`, and push again.

## How to roll back

If a deploy breaks the site, switch back to the previous version right away:

```powershell
npx prisma service version list web
npx prisma service version rollback web
```

`rollback` without options goes back one version. To pick an exact version from the list:

```powershell
npx prisma service version rollback web --to ver_123
```

Then fix the code: undo the bad commit on GitHub (for example with `git revert`) and push to `main`. Otherwise the next push deploys the broken code again.

A rollback only changes the running code. It does **not** undo database migrations.

## How to see logs

Live logs from the running site:

```powershell
npx prisma service logs web --follow
```

Logs from one version (version ids come from `npx prisma service version list web`):

```powershell
npx prisma service logs web --version-id ver_123 --tail 200
```

Build and deploy logs are on GitHub under **Actions > prisma-deploy > the run**.

## Common problems

| What you see                                                     | What to do                                                                                                                                         |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Run fails with "Nothing was deployed" or `skipped-no-credential` | The repository is not connected. Repeat Step 4.                                                                                                    |
| `HostedStateBootstrapError` on the first deploy                  | The `pixel2tech` project already has a database or service. See Step 2.                                                                            |
| `DOMAIN_DNS_NOT_CONFIGURED`                                      | The Cloudflare CNAME is missing, wrong, or proxied (orange cloud). See Step 7.                                                                     |
| Contact form works but no emails arrive                          | Check `RESEND_API_KEY` (Step 5), check the sender domain is verified in Resend, then redeploy. Look for errors with `npx prisma service logs web`. |
| A setting change does nothing                                    | Settings apply only on the next deploy. Run the workflow again.                                                                                    |

## Good to know

- The site sleeps when nobody visits. The first visit after a quiet period can be a little slower.
- A request must start answering within 60 seconds.
- Outgoing traffic is billed. The Free plan includes 10 GB per month, and the site's videos use most of it. Check usage in the Prisma Console.
- The videos are served by the site itself. It answers partial (range) requests for every video under `/media/` and `/portfolio/`, which iPhones and iPads need to play them. Still test a few on an iPhone after the first deploy.
- The contact form's per-visitor limit counts requests by the last address in the `x-forwarded-for` header, which Prisma's edge is expected to add. If many unrelated people report "too many requests", or spam gets through, check that header in the service logs.
