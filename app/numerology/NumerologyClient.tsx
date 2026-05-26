"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { cardsFromTuples, useLanguage } from "../i18n";
import { numerologyDetails } from "./numerologyDetails";

export default function NumerologyPage() {
  const { t } = useLanguage();
  const page = t.pages.numerology;
  const services = cardsFromTuples(page.cards).map((service, index) => ({
    ...service,
    href: `/numerology/${numerologyDetails[index].slug}`,
    ctaLabel: t.common.learnMore
  }));

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primary, href: "/contact" }}
      />
      <section className="section" aria-labelledby="numerology-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="numerology-services">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards services={services} />
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
