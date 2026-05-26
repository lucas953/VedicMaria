"use client";

import { consultationBookingUrl } from "../booking";
import { Hero } from "../components/Hero";
import { useLanguage } from "../i18n";

export default function BookSessionPage() {
  const { t } = useLanguage();
  const page = t.pages.booking;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />
      <section className="section booking-section" aria-labelledby="booking-calendar">
        <div className="section-heading">
          <p className="eyebrow">{page.intro.eyebrow}</p>
          <h2 id="booking-calendar">{page.intro.title}</h2>
          <p>{page.intro.text}</p>
        </div>
        <div className="booking-frame-shell">
          <iframe
            className="booking-frame"
            title="Astro Veda Life booking calendar"
            src={consultationBookingUrl}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
