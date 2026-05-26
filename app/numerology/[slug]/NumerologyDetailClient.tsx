"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { getLocalizedDetail } from "../../localizedDetail";
import type { NumerologyDetail } from "../numerologyDetails";

export function NumerologyDetailClient({ detail }: { detail: NumerologyDetail }) {
  const { lang, t } = useLanguage();
  const localized = getLocalizedDetail(detail, lang);

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.numerology.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{ label: t.pages.numerology.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToNumerology, href: "/numerology" }}
      />
      <section className="section page-intro" aria-labelledby="numerology-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.numerology.heading.eyebrow}</p>
          <h2 id="numerology-detail-title">{localized.title}</h2>
          <p>{localized.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.numerology.cta.title}
        text={t.pages.numerology.cta.text}
        buttonLabel={t.pages.numerology.cta.button}
        href="/contact"
      />
    </>
  );
}
