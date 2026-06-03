# Codex Handoff

## Current Project Goal
Maintain and extend the Astro Veda Life / Vedic Astrology website as a bilingual English/Bulgarian static Next.js site that can stage on Vercel and deploy to Hostinger shared hosting via the exported `out/` folder.

## Tech Stack
- Next.js 16 App Router, React 18, TypeScript.
- Static export via `next.config.mjs` with `output: "export"` and `images.unoptimized: true`.
- Plain CSS in `app/globals.css`; no component CSS framework.
- Custom client language context in `app/i18n.tsx`; copy lives mostly in `app/siteCopy.ts`.
- Web3Forms browser submission for contact; Cal.com/Cal.eu embed/link for booking.

## Important Files
- `next.config.mjs`: Static export settings for Hostinger.
- `HOSTINGER_DEPLOY.md`: Deployment steps and `.htaccess` clean-route instructions.
- `app/layout.tsx`: Root metadata, fonts, app shell.
- `app/template.tsx`: Wraps pages in `SiteChrome`.
- `app/components/SiteChrome.tsx`: Language provider plus header/footer/main structure.
- `app/i18n.tsx`: Language state, localStorage persistence, helpers.
- `app/siteCopy.ts`: Main EN/BG content dictionary and top-level page copy.
- `app/seo.ts`: Shared metadata helpers.
- `app/sitemap.ts`, `app/robots.ts`: Static SEO index files.
- `app/heroThemes.ts`: Hero gradient theme constants.
- `app/components/Hero.tsx`: Reusable hero with mandala, goddess, and Vastu image visuals.
- `app/components/ServiceCards.tsx`: Reusable service card grid with optional image backgrounds.
- `app/components/ContactForm.tsx`: Web3Forms contact form.
- `app/book-session/BookSessionClient.tsx`, `app/booking.ts`: Booking page and Cal URL/config.
- `app/detailPages.tsx`, `app/localizedDetail.ts`: Shared detail-page rendering helpers.
- `app/bg/[[...slug]]/page.tsx`: Static Bulgarian route mirror for top-level and detail pages.
- `app/*/[slug]/page.tsx`: Static detail routes for astrology, numerology, consultation, Vastu, Ayurveda, trips, and team.
- `public/`: Static assets, including OG image, favicon files, goddess hero image, team images, and Vastu images.

## Features Already Implemented
- Static-export-ready site for Vercel staging and Hostinger upload.
- EN/BG language switcher with localized clean routes under `/bg/...`.
- Main pages: Home, Vedic Astrology, Numerology, Consultation, Vastu, Ayurveda, Trips, Upcoming Events, Our Team, Contact, Book Session.
- Detail pages for service blocks across astrology, numerology, consultation, Vastu, Ayurveda, and trips.
- Per-page Metadata API SEO with canonical, Open Graph, and Twitter metadata.
- `sitemap.xml`, `robots.txt`, favicon, and OG image.
- Web3Forms contact form using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- Custom book-session page with Cal embed/link targeting `https://cal.eu/astrovedalife`.
- Hero image theming across top-level pages; Vastu page uses `vastu-shastra.jpg` and Vastu service cards use five Vastu card images.
- Team overview and team member pages with static params and typo/alias handling.

## Current Uncommitted Changes
- Only this handoff file should be modified after creation.
- Before this handoff update, `git status -sb` showed `## main...origin/main`.

## Current Bugs Or Incomplete Tasks
- No automated test suite exists; validation is currently build/lint/manual review.
- Some assets appear to be user-provided stock/reference images; confirm licensing before production use.
- Booking embed visual polish may need further browser/device review.
- Contact form depends on the public Web3Forms key being set before build/deploy.
- BG content/routes are implemented, but translations should still be reviewed by a native speaker.
- No backend storage, CRM, analytics, or spam-hardening beyond the current external form service.

## Design / Style Rules To Preserve
- Keep the warm, premium, calm spiritual feel: cream base, deep green/brown text, red CTA accents, gold/earth details.
- Preserve current typography scale and brand feel; large serif display headings, restrained sans-serif UI/body.
- Keep layouts spacious, editorial, and consistent; do not introduce generic landing-page/card-heavy redesigns.
- Maintain sticky responsive navigation and EN/BG switcher behavior.
- Preserve static-export compatibility: no API routes, server actions, runtime-only dynamic rendering, or optimized Next Image requirements.
- Keep pages visually consistent across languages and routes.

## Commands
- Install: `npm.cmd install`
- Dev server: `npm.cmd run dev`
- Build/static export: `npm.cmd run build`
- Lint: `npm.cmd run lint`
- Production start: `npm.cmd run start` (not used for Hostinger static hosting)
- Test: no `npm test` script currently exists.

## Next Recommended Steps
1. Run `npm.cmd run lint` and `npm.cmd run build` after this handoff update, then commit/push `docs/CODEX_HANDOFF.md`.
2. Manually review `/vastu`, `/bg/vastu`, `/book-session`, `/contact`, and key mobile widths after recent visual changes.
3. Confirm all public images are licensed and optimized for web size.
4. Add a lightweight smoke test script or Playwright checks for navigation, language switching, contact form rendering, Cal embed, and representative BG routes.
5. Review and polish Bulgarian translations.
6. Consider adding analytics, privacy/cookie copy if needed, and stronger spam controls for external forms.
