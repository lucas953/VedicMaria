"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { copy, useLanguage } from "../i18n";
import { astrologyDetails } from "./astrologyDetails";

export default function VedicAstrologyPage() {
  const { t } = useLanguage();
  const page = t.pages.astrology;
  const intro = "intro" in page ? page.intro : copy.en.pages.astrology.intro;
  const services = astrologyDetails.map((detail) => ({
    title: detail.title,
    description: detail.description,
    href: `/vedic-astrology/${detail.slug}`,
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
      <section className="section page-intro" aria-label="About Vedic Astrology">
        <div className="page-intro-content">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="astrology-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="astrology-services">{page.heading.title}</h2>
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
