"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { copy, useLanguage } from "../i18n";
import { tripDetails } from "./tripDetails";

export default function TripsPage() {
  const { t } = useLanguage();
  const page = t.pages.trips;
  const intro = "intro" in page ? page.intro : copy.en.pages.trips.intro;
  const services = tripDetails.map((detail) => ({
    title: detail.title,
    description: detail.description,
    href: `/trips/${detail.slug}`,
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
      <section className="section page-intro" aria-label="About Sacred Travel">
        <div className="page-intro-content">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="trip-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="trip-services">{page.heading.title}</h2>
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
