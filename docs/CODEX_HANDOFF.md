# Codex Handoff

## Current Project Goal
Build and maintain a bilingual English/Bulgarian professional website for Maria's Vedic Astrology practice, including services, events, consultations, trips, numerology, Ayurveda, Vastu, and team profiles.

## Tech Stack
- Next.js 16 App Router
- React 18
- TypeScript
- CSS in `app/globals.css`
- Bilingual content managed in a custom React context in `app/i18n.tsx`
- Static assets in `public/`

## Important Files
- `app/layout.tsx`: Root layout, wraps the app with `LanguageProvider`, header, main, and footer.
- `app/i18n.tsx`: Main bilingual content dictionary and language context/localStorage persistence.
- `app/page.tsx`: Homepage layout: hero, upcoming events carousel, founder section, services, community signup CTA.
- `app/components/Header.tsx`: Sticky top nav, active state, mobile menu, EN/BG switcher.
- `app/components/Footer.tsx`: Footer links and contact info from the bilingual dictionary.
- `app/components/Hero.tsx`: Reusable hero section.
- `app/components/ServiceCards.tsx`: Reusable service-style card grid.
- `app/components/EventCarousel.tsx`: Homepage sliding events carousel with arrows, dots, and auto-advance.
- `app/components/EventCards.tsx`: Event card grid for the events page.
- `app/components/CTA.tsx`: Reusable CTA, including newsletter/community variant for homepage.
- `app/our-team/page.tsx`: Team overview cards.
- `app/our-team/[slug]/page.tsx`: Static team bio route wrapper.
- `app/our-team/[slug]/TeamMemberClient.tsx`: Client-rendered bilingual team bio detail.
- `app/teamSlugs.ts`: Canonical team slugs and typo aliases.
- `app/globals.css`: Global visual system, responsive layout, cards, header, carousel, team, forms, footer.
- `public/Maria.jpg`: Maria founder/team image.
- `public/team-arjun.jpg`, `public/team-paritosh.png`, `public/team-venu.jpg`: Team portraits.

## Features Implemented
- Multi-page bilingual site with EN/BG switcher.
- Pages: Home, Vedic Astrology, Numerology, Consultation, Vastu, Ayurveda, Trips, Upcoming Events, Our Team, Contact.
- Sticky responsive top navigation with active state.
- Homepage real Maria photo, founder bio, service cards, sliding events carousel, and cosmic community signup CTA.
- Team overview with four compact profile cards: Maria, Prof. Paritosh Banerjee, Dr. Venu Sasikumar, Arjun Chakraborty.
- Dedicated full bio pages for each team member.
- Team route aliases for common typo paths, including `paritosh-banereje`.
- Premium spiritual visual style using warm cream, deep green/brown, red accents, Playfair Display and DM Sans.
- GitHub remote: `https://github.com/lucas953/VedicMaria.git`; current branch `main`.

## Current Uncommitted Changes
- None at handoff creation. `git status -sb` shows `main...origin/main`.
- This handoff file itself is newly added and should be committed after review.

## Current Bugs / Incomplete Tasks
- No known build or lint failures.
- No real backend/email integration for forms or newsletter signup; forms are static placeholders.
- Bulgarian content exists, but some team bios are translated/adapted rather than professionally localized.
- Service/event images are still mostly CSS gradients except for Maria/team portraits.
- No automated test suite beyond lint/build.

## Design / Style Rules To Preserve
- Keep the site warm, premium, spiritual, and professional; avoid generic template feeling.
- Preserve the current typography pairing: `Playfair Display` for headings/brand, `DM Sans` for body/UI.
- Preserve warm cream background, deep green/brown premium sections, red active pills/buttons, gold/earth accents.
- Cards should stay clean, rounded lightly, cream/white, with subtle borders/shadows.
- Top nav must remain sticky, mobile responsive, and bilingual.
- Keep content centralized in `app/i18n.tsx` when possible.
- Preserve compact team cards with small centered portraits and Learn More buttons; long bios stay on detail pages.

## Commands
- Install dependencies: `npm.cmd install`
- Dev server: `npm.cmd run dev`
- Build: `npm.cmd run build`
- Lint: `npm.cmd run lint`
- Start production server after build: `npm.cmd run start`
- Tests: no test script currently exists.

## Next Recommended Steps
1. Commit this handoff file: `git add docs/CODEX_HANDOFF.md && git commit -m "Add Codex handoff" && git push`.
2. Add real submission handling for contact, consultation, and newsletter forms.
3. Replace remaining gradient placeholders with curated real images.
4. Review and polish Bulgarian translations with a native speaker.
5. Add SEO metadata per page and social preview images.
6. Add basic smoke tests or Playwright checks for navigation, language switching, and team bio routes.
