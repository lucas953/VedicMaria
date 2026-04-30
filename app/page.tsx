"use client";

import { CTA } from "./components/CTA";
import { EventCards } from "./components/EventCards";
import { Hero } from "./components/Hero";
import { ServiceCards } from "./components/ServiceCards";
import { useLanguage } from "./i18n";

export default function Home() {
  const { t } = useLanguage();
  const home = t.home;
  const services = home.services.map((service) => ({
    ...service,
    ctaLabel: t.common.learnMore
  }));

  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        description={home.hero.description}
        primaryCta={{ label: home.hero.primary, href: "/consultation" }}
        secondaryCta={{ label: home.hero.secondary, href: "/vedic-astrology" }}
      />

      <section className="section founder-section" aria-labelledby="founder-title">
        <div className="founder-portrait" aria-hidden="true">
          <span>Maria</span>
        </div>
        <div className="founder-content">
          <p className="eyebrow">{home.founder.eyebrow}</p>
          <h2 id="founder-title">{home.founder.title}</h2>
          {home.founder.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="home-services">
        <div className="section-heading">
          <p className="eyebrow">{home.servicesHeading.eyebrow}</p>
          <h2 id="home-services">{home.servicesHeading.title}</h2>
          <p>{home.servicesHeading.text}</p>
        </div>
        <ServiceCards services={services} />
      </section>

      <section className="section alt" aria-labelledby="featured-events">
        <div className="section-heading">
          <p className="eyebrow">{home.eventHeading.eyebrow}</p>
          <h2 id="featured-events">{home.eventHeading.title}</h2>
          <p>{home.eventHeading.text}</p>
        </div>
        <EventCards events={t.events.slice(0, 2)} buttonLabel={t.common.registerInterest} />
      </section>

      <CTA
        title={home.cta.title}
        text={home.cta.text}
        buttonLabel={home.cta.button}
        href="/consultation"
      />
    </>
  );
}
