# Vedic astrology Website

A responsive bilingual English/Bulgarian Next.js website for an elegant Vedic astrology brand offering consultation, Vastu, Ayurveda, trips, events, and contact pages.

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Edit Page Content

- English and Bulgarian page copy, navigation, contact details, homepage services, and placeholder events live in `app/i18n.tsx`.
- Shared components live in `app/components/`.
- Each page is in its own route folder under `app/`, for example:
  - `app/vedic-astrology/page.tsx`
  - `app/consultation/page.tsx`
  - `app/vastu/page.tsx`
  - `app/ayurveda/page.tsx`
  - `app/trips/page.tsx`
  - `app/upcoming-events/page.tsx`
  - `app/contact/page.tsx`
- Global styling is in `app/globals.css`.

To update text, edit the relevant `en` or `bg` section in `app/i18n.tsx`. To change colors and spacing, edit the CSS variables near the top of `app/globals.css`.

## Deploy

This project can be deployed to any Next.js-friendly host such as Vercel, Netlify, Cloudflare Pages, or a VPS.

Typical production build:

```bash
npm run build
npm run start
```

For Vercel, import the repository, keep the default Next.js settings, and deploy. For static-oriented hosts, confirm they support Next.js App Router features before deploying.
