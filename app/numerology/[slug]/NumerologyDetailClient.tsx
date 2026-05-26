"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import type { NumerologyDetail } from "../numerologyDetails";

export function NumerologyDetailClient({ detail }: { detail: NumerologyDetail }) {
  const { t } = useLanguage();

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.numerology.hero.eyebrow}
        title={detail.title}
        description={detail.description}
        primaryCta={{ label: t.pages.numerology.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToNumerology, href: "/numerology" }}
      />
      <section className="section page-intro" aria-labelledby="numerology-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.numerology.heading.eyebrow}</p>
          <h2 id="numerology-detail-title">{detail.title}</h2>
          <p>{detail.description}</p>
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
