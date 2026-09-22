"use client";

import { Fragment } from "react";
import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { getLocalizedDetail } from "../../localizedDetail";
import { formattedAstrologyDescriptions, type AstrologyDetail } from "../astrologyDetails";

export function AstrologyDetailClient({ detail }: { detail: AstrologyDetail }) {
  const { lang, t } = useLanguage();
  const localized = getLocalizedDetail(detail, lang);
  const descriptionLines = formattedAstrologyDescriptions[detail.slug]?.[lang];
  const bodyDescription = descriptionLines
    ? descriptionLines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 ? <br /> : null}
          {line.map((part, partIndex) =>
            part.bold ? (
              <strong key={partIndex}>{part.text}</strong>
            ) : (
              <Fragment key={partIndex}>{part.text}</Fragment>
            )
          )}
        </Fragment>
      ))
    : localized.description;

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.astrology.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{ label: t.pages.astrology.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToAstrology, href: "/vedic-astrology" }}
        visual={detail.slug === "birth-chart-reading" ? "image" : "mandala"}
        imageSrc={detail.slug === "birth-chart-reading" ? "/images/heroes/birth-chart-reading.webp" : undefined}
        imageAspectRatio={detail.slug === "birth-chart-reading" ? "875 / 617" : undefined}
        theme="astrology"
      />
      <section className="section page-intro" aria-labelledby="astrology-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.astrology.heading.eyebrow}</p>
          <h2 id="astrology-detail-title">{localized.title}</h2>
          <p>{bodyDescription}</p>
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
