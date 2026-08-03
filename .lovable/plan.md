# Complete notify.pixel2tech.com Email DNS Setup

## Goal
Move DNS hosting from Hostinger to Cloudflare Free while keeping the domain registered at Hostinger, then delegate `notify.pixel2tech.com` to Lovable so form notifications can reach `sales@pixel2tech.com`.

## Steps
1. Add `pixel2tech.com` to a free Cloudflare account and let Cloudflare import the existing DNS zone.
2. Before changing nameservers, compare the imported records with Hostinger and preserve all website, `www`, mail, verification, and other existing records. Keep website records proxied only where appropriate; mail-related records must remain DNS-only.
3. In Hostinger, replace the domain's current authoritative nameservers with the two nameservers assigned by Cloudflare. The domain registration stays at Hostinger.
4. Once Cloudflare shows the zone as active, add these exact records in Cloudflare DNS:
   - TXT — Name: `_lovable-email` — Value: `lovable_email_verify=5a0171ab1f938254ee05f65cb27c761fc7f40e3d4b14877a17ae3f225b3ddd1`
   - NS — Name: `notify` — Target: `ns3.lovable.cloud`
   - NS — Name: `notify` — Target: `ns4.lovable.cloud`
5. Wait for DNS propagation, then re-check the Lovable Email domain status. No A, AAAA, or CNAME substitute is available for this managed email setup.
6. After the domain becomes active, submit a website form and confirm that the notification is delivered to `sales@pixel2tech.com`; inspect email delivery logs if it is not.

## Safety Checks
- Do not delete or overwrite imported website and mailbox DNS records.
- Do not change the domain registrar or hosting package.
- Do not add A, AAAA, CNAME, MX, SPF, or DKIM records under `notify`; Lovable manages that delegated subdomain after the NS records resolve.
- DNS propagation may take up to 72 hours, although it is often faster.