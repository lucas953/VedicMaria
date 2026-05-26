"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import type { AstrologyDetail } from "../astrologyDetails";

export function AstrologyDetailClient({ detail }: { detail: AstrologyDetail }) {
  const { t } = useLanguage();

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.astrology.hero.eyebrow}
        title={detail.title}
        description={detail.description}
        primaryCta={{ label: t.pages.astrology.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToAstrology, href: "/vedic-astrology" }}
      />
      <section className="section page-intro" aria-labelledby="astrology-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.astrology.heading.eyebrow}</p>
          <h2 id="astrology-detail-title">{detail.title}</h2>
          <p>{detail.description}</p>
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
