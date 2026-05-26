"use client";

import { Hero } from "../../components/Hero";
import { consultationBookingPath } from "../../booking";
import { useLanguage } from "../../i18n";
import { localizePath } from "../../localePaths";
import { getLocalizedDetail } from "../../localizedDetail";
import type { ConsultationDetail } from "../consultationDetails";

export function ConsultationDetailClient({
  detail
}: {
  detail: ConsultationDetail;
}) {
  const { lang, t } = useLanguage();
  const page = t.pages.consultation;
  const localized = getLocalizedDetail(detail, lang);

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={localized.title}
        description={localized.description}
        primaryCta={{
          label: t.common.bookMeeting,
          href: consultationBookingPath
        }}
        secondaryCta={{ label: t.common.backToConsultation, href: "/consultation" }}
      />
      <section className="section page-intro" aria-labelledby="consultation-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="consultation-detail-title">{localized.title}</h2>
          <p>{localized.description}</p>
        </div>
      </section>
      <section className="section alt two-column" aria-labelledby="consultation-booking">
        <div>
          <p className="eyebrow">{page.form.eyebrow}</p>
          <h2 id="consultation-booking">{page.hero.title}</h2>
          <p>{page.form.text}</p>
          <div className="button-row">
            <a
              className="button primary"
              href={localizePath(consultationBookingPath, lang)}
            >
              {t.common.bookMeeting}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
