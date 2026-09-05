/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ayurvedaPulseWorkshopStripeUrl } from "../../eventPaymentLinks";
import { useLanguage } from "../../i18n";
import { localizePath } from "../../localePaths";
import { copy } from "../../siteCopy";

const whatsappNumber = copy.en.contact.whatsapp.replace(/[^\d]/g, "");
const hasStripeLink = ayurvedaPulseWorkshopStripeUrl.length > 0;

const content = {
  en: {
    eyebrow: "Upcoming Workshop",
    infoEyebrow: "Hands-on Ayurveda",
    reserveEyebrow: "Reserve",
    title: "What is your pulse telling you?",
    subtitle: "26.09.2026 | 18:30 | Yoga Vibe, San Stefano Plaza",
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
    reserveTitle: "30 EUR | 30 places available",
    reserveText:
      "Reserve your seat for the Ayurveda and pulse diagnosis workshop. Online card payment will open here once the Stripe Payment Link is ready.",
    stripeReady: "Reserve and pay 30 EUR",
    stripeSoon: "Stripe payment coming soon",
    whatsapp: "Reserve via WhatsApp",
    detailsLabel: "Workshop details",
    detailsDate: "26 September 2026, 18:30",
    detailsPlace: "Yoga Vibe, San Stefano Plaza | 90 minutes",
    finalTitle: "Feel the pulse. Read the body. Discover Ayurveda.",
    finalText:
      "Join a practical evening of Ayurveda, Yoga, pulse diagnosis, and direct experience.",
    back: "Back to events",
    note: "Limited to 30 places. Price: 30 EUR.",
    whatsappText:
      "Hello%2C%20I%20would%20like%20to%20reserve%20a%20place%20for%20the%20Ayurveda%20pulse%20diagnosis%20workshop."
  },
  bg: {
    eyebrow: "Предстоящ семинар",
    infoEyebrow: "Практическа Аюрведа",
    reserveEyebrow: "Запази място",
    title: "Какво ти казва твоят пулс?",
    subtitle: "26.09.2026 | 18:30 | Yoga Vibe, San Stefano Plaza",
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
    reserveTitle: "30 EUR | 30 места",
    reserveText:
      "Запази своето място за семинара по Аюрведа и пулсова диагностика. Онлайн плащането с карта ще бъде активно тук, когато Stripe линкът е готов.",
    stripeReady: "Запази и плати 30 EUR",
    stripeSoon: "Stripe плащането предстои",
    whatsapp: "Запази през WhatsApp",
    detailsLabel: "Детайли за семинара",
    detailsDate: "26 септември 2026, 18:30",
    detailsPlace: "Yoga Vibe, San Stefano Plaza | 90 минути",
    finalTitle: "Усети пулса. Прочети тялото си. Опознай Аюрведа.",
    finalText:
      "Присъедини се към практическа вечер на Аюрведа, Йога, пулсова диагностика и лично преживяване.",
    back: "Назад към събитията",
    note: "Местата са ограничени до 30. Цена: 30 EUR.",
    whatsappText:
      "Здравейте%2C%20искам%20да%20запазя%20място%20за%20семинара%20по%20Аюрведа%20и%20пулсова%20диагностика."
  }
};

export function AyurvedaPulseDiagnosisWorkshopClient() {
  const { lang } = useLanguage();
  const page = content[lang];
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${page.whatsappText}`;

  return (
    <>
      <section className="event-landing-hero">
        <div className="event-landing-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="event-subtitle">{page.subtitle}</p>
          <p>{page.intro}</p>
          <div className="button-row">
            {hasStripeLink ? (
              <a
                className="button primary"
                href={ayurvedaPulseWorkshopStripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                {page.stripeReady}
              </a>
            ) : (
              <button className="button primary" type="button" disabled>
                {page.stripeSoon}
              </button>
            )}
            <a className="button secondary" href={whatsappHref}>
              {page.whatsapp}
            </a>
          </div>
          <p className="event-note">{page.note}</p>
        </div>
        <div className="event-hero-media event-poster-media">
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
              {hasStripeLink ? (
                <a
                  className="button primary"
                  href={ayurvedaPulseWorkshopStripeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {page.stripeReady}
                </a>
              ) : (
                <button className="button primary" type="button" disabled>
                  {page.stripeSoon}
                </button>
              )}
              <a className="button secondary" href={whatsappHref}>
                {page.whatsapp}
              </a>
            </div>
          </div>
          <div className="event-booking-poster">
            <img src={page.poster} alt={page.posterAlt} />
          </div>
        </div>
      </section>

      <section className="event-final-cta" aria-labelledby="workshop-final-cta">
        <div>
          <h2 id="workshop-final-cta">{page.finalTitle}</h2>
          <p>{page.finalText}</p>
        </div>
        <div className="button-row">
          <a className="button primary" href={whatsappHref}>
            {page.whatsapp}
          </a>
          <Link className="button secondary" href={localizePath("/upcoming-events", lang)}>
            {page.back}
          </Link>
        </div>
      </section>
    </>
  );
}
