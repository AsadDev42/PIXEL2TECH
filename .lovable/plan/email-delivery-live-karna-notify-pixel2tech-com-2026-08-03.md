# Email delivery live karna: notify.pixel2tech.com

## Abhi ki asal state (live DNS check se)

- Domain ka DNS Hostinger par hi hai (nameservers: `ns1.dns-parking.com`, `ns2.dns-parking.com`).
- TXT verification record **pehle se add ho chuka hai** aur live hai — ye step already done hai.
- **Sirf ek cheez baaki hai:** `notify.pixel2tech.com` ke liye NS records. Abhi wahan koi delegation nahi hai.

## Hostinger par NS record ka masla

Hostinger ke DNS Zone Editor me **NS record type available hai** (A, AAAA, CNAME, MX, TXT, NS, SRV, CAA). Agar aapko "Add record" ke type dropdown me NS nazar nahi aaya, to aksar wajah ye hoti hai:

- Aap domain ke bajaye website/hosting sidebar wale chhote editor me the, ya
- Domain Hostinger nameservers par nahi tha (yahan hai, is liye ye masla nahi), ya
- Type list scroll karne par NS neeche chhupa hua tha.

Yaani domain transfer ya DNS provider change karne ki zaroorat **nahi** hai.

## Aapko kya karna hai (hPanel me, 2 minute)

1. hPanel → **Domains** → `pixel2tech.com` → **DNS / Nameservers**.
2. **Add record** → Type: **NS**.
3. Record 1 — Name/Host: `notify`, Points to: `ns3.lovable.cloud`, TTL default → Save.
4. Record 2 — Name/Host: `notify`, Points to: `ns4.lovable.cloud`, TTL default → Save.
5. Bas. TXT record dobara add karne ki zaroorat nahi.

Agar NS type phir bhi dropdown me na mile, to Hostinger support ko bolein: "Please add two NS records for host `notify` pointing to ns3.lovable.cloud and ns4.lovable.cloud" — wo minute me kar dete hain.

## Uske baad mera kaam

- Main live DNS aur email domain status dobara check karunga.
- Verification complete hote hi ek test send karke confirm karunga ke `sales@pixel2tech.com` par email pohanch rahi hai, aur delivery logs check karunga.
- Koi code change ki zaroorat nahi — forms, templates aur sending sab pehle se wired hain; sirf DNS delegation ka intezaar hai.

## Note

DNS propagation aam tor par 10–30 minute leta hai (max 24 ghante). Us waqt tak sends `domain_not_verified` return karenge — ye normal hai, bug nahi.
