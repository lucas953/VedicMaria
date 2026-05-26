"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { getLocalizedDetail } from "../../localizedDetail";
import type { VastuDetail } from "../vastuDetails";

export function VastuDetailClient({ detail }: { detail: VastuDetail }) {
  const { lang, t } = useLanguage();
  const localized = getLocalizedDetail(detail, lang);

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.vastu.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{ label: t.pages.vastu.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToVastu, href: "/vastu" }}
      />
      <section className="section page-intro" aria-labelledby="vastu-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.vastu.heading.eyebrow}</p>
          <h2 id="vastu-detail-title">{localized.title}</h2>
          <p>{localized.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.vastu.cta.title}
        text={t.pages.vastu.cta.text}
        buttonLabel={t.pages.vastu.cta.button}
        href="/contact"
      />
    </>
  );
}
