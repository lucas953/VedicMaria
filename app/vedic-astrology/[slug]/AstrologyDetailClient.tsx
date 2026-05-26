"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { getLocalizedDetail } from "../../localizedDetail";
import type { AstrologyDetail } from "../astrologyDetails";

export function AstrologyDetailClient({ detail }: { detail: AstrologyDetail }) {
  const { lang, t } = useLanguage();
  const localized = getLocalizedDetail(detail, lang);

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.astrology.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{ label: t.pages.astrology.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToAstrology, href: "/vedic-astrology" }}
      />
      <section className="section page-intro" aria-labelledby="astrology-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.astrology.heading.eyebrow}</p>
          <h2 id="astrology-detail-title">{localized.title}</h2>
          <p>{localized.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.astrology.cta.title}
        text={t.pages.astrology.cta.text}
        buttonLabel={t.pages.astrology.cta.button}
        href="/contact"
      />
    </>
  );
}
