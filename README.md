# Martin's Security Solutions — Next.js 16 / Vercel

Production-ready conversion of the MSS premium website to **Next.js 16 App Router + React 19 + TypeScript**.

## Included

- Next.js 16 App Router
- TypeScript
- Responsive Home, Services, About, Careers and Contact routes
- `next/image` optimization for MSS assets
- SEO metadata, sitemap and robots routes
- Mobile navigation and scroll reveal interactions
- Quote and career forms through `/api/contact`
- Optional Resend email delivery
- Vercel-ready configuration
- No CCTV / camera-monitoring service
- Client-property images use MSS branding on the guard/vehicle, not on the client building wall

## Local development

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Next.js automatically. Keep the default build settings.
4. Add your custom domain under **Settings → Domains**.
5. Add the environment variables below if you want website forms to send email.

### Form email variables

The forms are already wired to `/api/contact`. For live email delivery, add:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=info@martinssecurity.ca
CONTACT_FROM_EMAIL=website@your-verified-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Without these email variables, the website deploys normally, but form submission returns a clear configuration message rather than silently losing a lead.

## Important before launch

Replace or confirm the final MSS phone number, email address, domain, legal/privacy content and any business claims before production launch.

## Navigation blank-page fix
This build includes a routing reliability fix for the issue where sections could remain invisible after client-side navigation:
- reveal animations now use progressive enhancement, so content is visible before JavaScript hydrates;
- reveal observers reinitialize on every App Router pathname change;
- a safety fallback forces any unrevealed content visible after 1.4 seconds;
- normal page navigation resets to the top while hash links still scroll to their intended section;
- page hero imagery now uses Next/Image with preload rather than CSS background loading;
- a branded `app/loading.tsx` skeleton prevents an empty black screen during route loading;
- primary navigation links are explicitly prefetched.


## Hydration-safe update

This build includes additional hardening for React/Next.js hydration mismatches:

- Next.js 16.3.5
- deterministic footer year (no render-time `Date()` call)
- route active state applied only after hydration
- root hydration warning protection for browser extensions that inject attributes into `<html>`/`<body>`
- browser format detection disabled to prevent phone/email auto-linking mismatches
- route and global error boundaries so production never falls back to an empty page

If a hydration warning appears only in your normal Chrome profile but disappears in Incognito with extensions disabled, the mismatch is being introduced by a browser extension modifying the HTML before React hydrates it.
