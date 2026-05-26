"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { getLocalizedDetail } from "../../localizedDetail";
import type { AyurvedaDetail } from "../ayurvedaDetails";

export function AyurvedaDetailClient({ detail }: { detail: AyurvedaDetail }) {
  const { lang, t } = useLanguage();
  const localized = getLocalizedDetail(detail, lang);

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.ayurveda.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{ label: t.pages.ayurveda.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToAyurveda, href: "/ayurveda" }}
      />
      <section className="section page-intro" aria-labelledby="ayurveda-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.ayurveda.heading.eyebrow}</p>
          <h2 id="ayurveda-detail-title">{localized.title}</h2>
          <p>{localized.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.ayurveda.cta.title}
        text={t.pages.ayurveda.cta.text}
        buttonLabel={t.pages.ayurveda.cta.button}
        href="/contact"
      />
    </>
  );
}
