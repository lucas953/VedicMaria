"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { useLanguage } from "../i18n";
import { getLocalizedDetail } from "../localizedDetail";
import { ayurvedaDetails } from "./ayurvedaDetails";

export default function AyurvedaPage() {
  const { lang, t } = useLanguage();
  const page = t.pages.ayurveda;
  const services = ayurvedaDetails.map((detail) => {
    const localized = getLocalizedDetail(detail, lang);

    return {
      title: localized.title,
      description: localized.description,
      href: `/ayurveda/${detail.slug}`,
      ctaLabel: t.common.learnMore
    };
  });

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primary, href: "/contact" }}
        visual="goddess"
        theme="ayurveda"
      />
      <section className="section" aria-labelledby="ayurveda-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="ayurveda-services">{page.heading.title}</h2>
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
