"use client";

import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { cardsFromTuples, useLanguage } from "../i18n";

export default function OurTeamPage() {
  const { t } = useLanguage();
  const page = t.pages.team;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: t.home.cta.button, href: "/consultation" }}
      />
      <section className="section" aria-labelledby="team-members">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="team-members">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards services={cardsFromTuples(page.cards)} />
      </section>
    </>
  );
}
