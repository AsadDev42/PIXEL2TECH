# Email DNS Verification: notify.pixel2tech.com

## Live DNS check (abhi kiya gaya)

- Root domain ab Cloudflare par hai (`sydney.ns.cloudflare.com`, `everton.ns.cloudflare.com`) — switch complete.
- NS delegation live hai: `notify.pixel2tech.com` → `ns3.lovable.cloud`, `ns4.lovable.cloud`.
- Verification TXT live hai, correct value (`...b3ddd1d`) maujood hai.

Lovable ka email domain status abhi bhi "Verifying DNS" hai — records sahi hain, sirf Lovable side ka re-check pending hai (usually kuch minutes, max 72 hours).

## Ek chhota masla: extra TXT records

`_lovable-email.pixel2tech.com` par 3 TXT values hain — 1 correct aur 2 purani/adhoori:

- Rakhein: `lovable_email_verify=5a0171ab1f938254ee05f65cb27c761fc7f40e3d4b14877a17ae3f225b3ddd1d`
- Hataayein: `lovable_email_verify=3616f17d39d768f0601f593481746effe5eb5aa9f230ff83dbe31afa9514ae5a`
- Hataayein: `lovable_email_verify=5a0171ab1f938254ee05f65cb27c761fc7f40e3d4b14877a17ae3f225b3ddd1` (last `d` missing — truncated copy)

Ye zaroori nahi ke verification rok dein, lekin saaf rakhna behtar hai.

## Steps

1. Cloudflare DNS me upar wale 2 extra TXT values delete karein, sirf sahi wala rakhein.
2. Cloud → Emails me **Verify Domain** click karein taake re-check foran chale.
3. Domain active hote hi main website ka form submit kar ke confirm karunga ke `sales@pixel2tech.com` par email pohanch rahi hai, aur delivery logs check karunga.

## Notes

- Koi code change ki zaroorat nahi — forms, templates aur sending pehle se wired hain.
- Verify hone tak sends `domain_not_verified` return karenge; ye expected hai, bug nahi.
