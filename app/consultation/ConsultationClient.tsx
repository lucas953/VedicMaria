"use client";

import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { consultationBookingPath } from "../booking";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";
import { getLocalizedDetail } from "../localizedDetail";
import { consultationDetails } from "./consultationDetails";

export default function ConsultationPage() {
  const { lang, t } = useLanguage();
  const page = t.pages.consultation;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: t.common.bookMeeting, href: consultationBookingPath }}
      />
      <section className="section" aria-labelledby="consultation-types">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="consultation-types">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards
          services={consultationDetails.map((detail) => {
            const localized = getLocalizedDetail(detail, lang);

            return {
              title: localized.title,
              description: localized.description,
              href: `/consultation/${detail.slug}`,
              ctaLabel: t.common.learnMore
            };
          })}
        />
      </section>
      <section className="section alt two-column" aria-labelledby="booking-form">
        <div>
          <p className="eyebrow">{page.form.eyebrow}</p>
          <h2 id="booking-form">{page.form.title}</h2>
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
        <ContactForm />
      </section>
    </>
  );
}
