"use client";

import { EventCards } from "../components/EventCards";
import { Hero } from "../components/Hero";
import { useLanguage } from "../i18n";

export default function UpcomingEventsPage() {
  const { t } = useLanguage();
  const page = t.pages.upcoming;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primary, href: "/contact" }}
      />
      <section className="section" aria-labelledby="events-list">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="events-list">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <EventCards events={t.events} buttonLabel={t.common.registerInterest} />
      </section>
    </>
  );
}
