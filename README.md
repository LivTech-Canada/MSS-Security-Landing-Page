# Martin's Security Services — Next.js 16

Converted from the supplied static HTML/CSS website to a Next.js 16 App Router project.

## Requirements
- Node.js 20.9+

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Vercel
Push this folder to GitHub, import the repository into Vercel, and deploy. No custom build command is required.

## Contact / careers form email
The frontend forms submit to `/api/contact`. To enable email delivery, add these Vercel environment variables:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (must be a verified sender/domain in Resend)
- `NEXT_PUBLIC_SITE_URL` (your final website URL)

Without those email variables, the site still builds and runs, but form submission returns a clear configuration message.

## Main routes
- `/`
- `/services`
- `/about`
- `/careers`
- `/contact`
