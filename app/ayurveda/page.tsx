"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { cardsFromTuples, useLanguage } from "../i18n";

export default function AyurvedaPage() {
  const { t } = useLanguage();
  const page = t.pages.ayurveda;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primary, href: "/contact" }}
      />
      <section className="section" aria-labelledby="ayurveda-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="ayurveda-services">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards services={cardsFromTuples(page.cards)} />
      </section>
      <CTA
        title={page.cta.title}
        text={page.cta.text}
        buttonLabel={page.cta.button}
        href="/contact"
      />
    </>
  );
}
