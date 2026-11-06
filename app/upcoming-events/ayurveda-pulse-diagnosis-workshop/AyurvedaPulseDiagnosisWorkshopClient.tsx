/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useLanguage } from "../../i18n";
import { localizePath } from "../../localePaths";
import { copy } from "../../siteCopy";

const whatsappNumber = copy.en.contact.whatsapp.replace(/[^\d]/g, "");

const content = {
  en: {
    eyebrow: "Past Workshop",
    infoEyebrow: "Hands-on Ayurveda",
    reserveEyebrow: "Event archive",
    title: "What is your pulse telling you?",
    subtitle: "27.09.2026 | 17:30 | Yoga Vibe, San Stefano Plaza",
    intro:
      "Read and feel your body through the ancient wisdom of Ayurveda in a 90-minute practical workshop on Ayurveda and pulse diagnosis.",
    poster: "/images/events/ayurveda-pulse-workshop-en.png",
    posterAlt: "What is your pulse telling you Ayurveda workshop poster",
    introParagraphs: [
      "Ayurveda is an ancient tradition that helps us develop a deeper understanding of the body, mind, and our individual nature. It is closely connected to Yoga and shares with it a journey toward balance, awareness, and self-understanding.",
      "But this workshop is not just about listening and learning theory.",
      "You will experience Ayurveda through your own senses."
    ],
    highlights: [
      "You will discover the foundations of Ayurvedic pulse diagnosis.",
      "You will learn how to feel the pulse and what the Ayurvedic approach observes through it.",
      "You will practice pulse diagnosis during the workshop, feeling, observing, and exploring the pulse with your own hands.",
      "You will discover your natural constitution, or Prakriti, and learn how Ayurveda understands individual differences between people.",
      "You will explore the connection between Ayurveda and Yoga and how these two ancient traditions complement each other."
    ],
    experienceTitle: "Feel, observe, and explore the pulse",
    experienceText:
      "This is more than a lecture. It is a hands-on experience of Ayurveda: an opportunity to connect with ancient wisdom through the pulse, observation, and your own direct experience.",
    reserveTitle: "Event has expired",
    reserveText:
      "This workshop took place on 27 September 2026. Registration through this page is closed. Explore upcoming events for new dates.",
    expired: "Event has expired",
    whatsapp: "Contact us on WhatsApp",
    detailsLabel: "Workshop details",
    detailsDate: "27 September 2026, 17:30",
    detailsPlace: "Yoga Vibe, San Stefano Plaza | 90 minutes",
    finalTitle: "Discover upcoming events",
    finalText:
      "Explore our upcoming workshops and gatherings for new opportunities to learn and connect.",
    back: "Back to events",
    note: "This event has ended. Registration through this page is closed.",
    whatsappText:
      "Hello, I would like information about future Ayurveda workshops."
  },
  bg: {
    eyebrow: "Минал семинар",
    infoEyebrow: "Практическа Аюрведа",
    reserveEyebrow: "Архив на събитията",
    title: "Какво ти казва твоят пулс?",
    subtitle: "27.09.2026 | 17:30 | Yoga Vibe, San Stefano Plaza",
    intro:
      "Прочети и усети тялото си чрез хилядолетното знание на Аюрведа в 90-минутен практически семинар по Аюрведа и пулсова диагностика.",
    poster: "/images/events/ayurveda-pulse-workshop-bg.png",
    posterAlt: "Какво ти казва твоят пулс - Аюрведа семинар",
    introParagraphs: [
      "Аюрведа е древна традиция, която ни насочва към по-дълбоко разбиране на тялото, ума и нашата индивидуална природа. Тя е тясно свързана с Йога и споделя с нея стремежа към хармония, осъзнатост и себепознание.",
      "Но този семинар няма да бъде просто слушане и теория.",
      "Ще преживееш Аюрведа чрез собственото си усещане."
    ],
    highlights: [
      "Ще се запознаеш с основите на аюрведичната пулсова диагностика.",
      "Ще научиш как се усеща пулсът и какво наблюдава аюрведичният подход.",
      "Ще практикуваш по време на семинара - ще усещаш, наблюдаваш и изследваш пулса със собствените си ръце.",
      "Ще се докоснеш до разбирането за своята природна конституция (Пракрити) и ще видиш как Аюрведа обяснява индивидуалните различия между хората.",
      "Ще разгледаме връзката между Аюрведа и Йога и начина, по който тези две древни традиции се допълват."
    ],
    experienceTitle: "Усети, наблюдавай и изследвай пулса",
    experienceText:
      "Това не е просто лекция. Това е практическо преживяване на Аюрведа - среща с едно древно знание чрез пулса, наблюдението и собственото ти усещане.",
    reserveTitle: "Събитието е приключило",
    reserveText:
      "Този семинар се проведе на 27 септември 2026 г. Записването през тази страница е затворено. Разгледайте предстоящите събития за нови дати.",
    expired: "Събитието е приключило",
    whatsapp: "Свържете се по WhatsApp",
    detailsLabel: "Детайли за семинара",
    detailsDate: "27 септември 2026, 17:30",
    detailsPlace: "Yoga Vibe, San Stefano Plaza | 90 минути",
    finalTitle: "Разгледайте предстоящите събития",
    finalText:
      "Открийте предстоящите ни семинари и срещи за нови възможности за учене и общуване.",
    back: "Назад към събитията",
    note: "Събитието е приключило. Записването през тази страница е затворено.",
    whatsappText:
      "Здравейте, бих искал/а информация за бъдещи семинари по Аюрведа."
  }
};

export function AyurvedaPulseDiagnosisWorkshopClient() {
  const { lang } = useLanguage();
  const page = content[lang];
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(page.whatsappText)}`;

  return (
    <>
      <section className="event-landing-hero">
        <div className="event-landing-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="event-subtitle">{page.subtitle}</p>
          <p>{page.intro}</p>
          <div className="button-row">
            <button className="button primary" type="button" disabled>
              {page.expired}
            </button>
            <a className="button secondary" href={whatsappHref}>
              {page.whatsapp}
            </a>
          </div>
          <p className="event-note">{page.note}</p>
        </div>
        <div
          className="event-hero-media event-poster-media"
          style={{ "--event-image": `url("${page.poster}")` } as CSSProperties}
        >
          <img src={page.poster} alt={page.posterAlt} />
        </div>
      </section>

      <section className="section page-intro" aria-label="Workshop introduction">
        <div className="page-intro-content">
          {page.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt two-column" aria-labelledby="workshop-experience">
        <div>
          <p className="eyebrow">{page.infoEyebrow}</p>
          <h2 id="workshop-experience">{page.experienceTitle}</h2>
          <p>{page.experienceText}</p>
        </div>
        <div className="event-step-list">
          {page.highlights.map((highlight, index) => (
            <article className="event-step" key={highlight}>
              <span>{index + 1}</span>
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section event-booking" aria-labelledby="workshop-reserve">
        <div className="event-booking-panel">
          <div>
            <p className="eyebrow">{page.reserveEyebrow}</p>
            <h2 id="workshop-reserve">{page.reserveTitle}</h2>
            <p>{page.reserveText}</p>
            <div className="event-date-list">
              <span>{page.detailsLabel}</span>
              <strong>{page.detailsDate}</strong>
              <p>{page.detailsPlace}</p>
            </div>
            <div className="button-row">
              <button className="button primary" type="button" disabled>
                {page.expired}
              </button>
              <a className="button secondary" href={whatsappHref}>
                {page.whatsapp}
              </a>
            </div>
          </div>
          <div
            className="event-booking-poster"
            style={{ "--event-image": `url("${page.poster}")` } as CSSProperties}
          >
            <img src={page.poster} alt={page.posterAlt} />
          </div>
        </div>
      </section>

      <section className="event-final-cta" aria-labelledby="workshop-final-cta">
        <div>
          <h2 id="workshop-final-cta">{page.finalTitle}</h2>
          <p>{page.finalText}</p>
        </div>
        <div className="event-payment-actions">
          <div className="button-row">
            <button className="button primary" type="button" disabled>
              {page.expired}
            </button>
            <a className="button secondary" href={whatsappHref}>
              {page.whatsapp}
            </a>
            <Link className="button secondary" href={localizePath("/upcoming-events", lang)}>
              {page.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
