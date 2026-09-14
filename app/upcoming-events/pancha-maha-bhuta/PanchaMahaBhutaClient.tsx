/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { panchaMahaBhutaStripeUrl } from "../../eventPaymentLinks";
import { useLanguage } from "../../i18n";
import { localizePath } from "../../localePaths";
import { copy } from "../../siteCopy";

const poster = "/images/events/pancha-maha-bhuta-2027-bg.png";
const paymentQr = "/images/events/pancha-maha-bhuta-stripe-qr.jpg";
const whatsappNumber = copy.en.contact.whatsapp.replace(/[^\d]/g, "");

const content = {
  en: {
    eyebrow: "Upcoming Journey",
    infoEyebrow: "South India Pilgrimage",
    reserveEyebrow: "Registration",
    title: "Pancha Maha Bhuta",
    subtitle: "A journey through the five elements",
    details: "25-31 January 2027 | 7 days | 6 nights | Starting point: Chennai, South India",
    price: "Tour price: 950 EUR",
    intro:
      "A journey into the heart of South India along the path of Pancha Maha Bhuta: Earth, Water, Fire, Air, and Ether.",
    posterAlt: "Pancha Maha Bhuta journey through the five elements poster",
    guide:
      "Vedic astrologer Arjun Chakraborty will be with us throughout the entire journey.",
    overview: [
      "According to ancient Indian philosophy, the five great elements shape not only the world around us but also our own inner nature.",
      "Over the course of 7 days, we will visit some of the most sacred and mystical places in South India, travel through the temples of the five elements, and connect with the ancient spiritual traditions of India."
    ],
    elements: [
      {
        name: "Air",
        place: "Sri Kalahasti",
        text: "Sri Kalahasteeshwara Temple, associated with breath, freedom, and movement."
      },
      {
        name: "Earth",
        place: "Kanchipuram",
        text: "Ekambareswarar Temple, symbolizing stability, roots, and inner grounding."
      },
      {
        name: "Fire",
        place: "Tiruvannamalai",
        text: "Arunachaleswarar Temple and sacred Arunachala, a place of transformation."
      },
      {
        name: "Ether",
        place: "Chidambaram",
        text: "Nataraja Temple, where silence, consciousness, and infinite space meet."
      },
      {
        name: "Water",
        place: "Thiruvanaikaval",
        text: "Jambukeswarar Temple, connected with flow, purification, and harmony with life."
      }
    ],
    journeyTitle: "Nine temples. Five elements. One journey.",
    journeyParagraphs: [
      "Our journey begins in Chennai and continues to Sri Kalahasti, the sacred place of the element Air. There, we will visit the Sri Kalahasteeshwara Temple, associated with breath, freedom, and movement.",
      "In Kanchipuram, we will visit the Ekambareswarar Temple, the temple of Earth, symbolizing stability, roots, and inner grounding.",
      "We will then continue to the mystical Tiruvannamalai and visit the Arunachaleswarar Temple, associated with the element of Fire and the sacred mountain Arunachala, a place of transformation, inner fire, and spiritual awakening.",
      "In Chidambaram, we will visit the Nataraja Temple, the sacred place of Ether and Space. Here, we encounter silence, consciousness, the Divine Spirit, and the infinite space that exists both within us and around us.",
      "We will then visit the Jambukeswarar Temple in Thiruvanaikaval, the sacred place of Water, connected with flow, purification, and the ability to move in harmony with life.",
      "During our journey, we will also visit one of the nine sacred Navagraha temples, dedicated to Shani, Saturn. This is a place of great mystical power, connected with time, destiny, and the karmic path of human life.",
      "We will pay homage to Shani, the lord of time and karma, and to the lessons that lead us toward awareness and inner maturity.",
      "We will also immerse ourselves in the atmosphere of Pondicherry, a beautiful city where Indian and French cultures meet, and visit the Sri Aurobindo Ashram.",
      "The final destination of our journey will be Auroville, a unique place dedicated to human unity, consciousness, and inner transformation.",
      "From the five elements to our inner selves.",
      "Pancha Maha Bhuta is a journey outward into ancient India and inward toward our own true essence."
    ],
    includesTitle: "What the price includes",
    includes: [
      "6 nights of accommodation along the route",
      "Partial meals during the journey",
      "Full meals during the first 4 days of the program",
      "Breakfast during the stay in Pondicherry",
      "Transportation throughout the journey by a small, comfortable air-conditioned bus",
      "All transfers and transportation according to the program",
      "A personal 20-minute astrology consultation for each participant with Arjun Chakraborty"
    ],
    excludesTitle: "What the price does not include",
    excludes: [
      "Taxes and entrance fees where applicable",
      "Donations at the temples",
      "Pujas and other temple rituals",
      "International and domestic flights",
      "Food and drinks not specified in the program",
      "Personal expenses and services not included in the program"
    ],
    reserveTitle: "Register for the journey",
    reserveText:
      "To reserve your place or ask for details, contact Astro Veda Life by email or WhatsApp.",
    emailButton: "Email to register",
    whatsappButton: "WhatsApp",
    back: "Back to events",
    whatsappText:
      "Hello%2C%20I%20would%20like%20more%20information%20about%20the%20Pancha%20Maha%20Bhuta%20journey%20in%20January%202027."
  },
  bg: {
    eyebrow: "Предстоящо пътуване",
    infoEyebrow: "Поклонническо пътуване в Южна Индия",
    reserveEyebrow: "Записване",
    title: "Панча Маха Бхута",
    subtitle: "Пътешествие през петте елемента",
    details: "25-31 януари 2027 г. | 7 дни | 6 нощувки | Начало: Ченай, Южна Индия",
    price: "Цена на тура: 950 евро",
    intro:
      "Пътуване в сърцето на Южна Индия по пътя на Панча Маха Бхута: Земя, Вода, Огън, Въздух и Етер.",
    posterAlt: "Панча Маха Бхута - пътешествие през петте елемента",
    guide:
      "Ведическият астролог Арджун Чакраборти ще бъде с нас по време на цялото пътуване.",
    overview: [
      "Според древната индийска философия петте велики елемента изграждат не само света около нас, но и самите нас.",
      "В рамките на 7 дни ще посетим едни от най-свещените и мистични места в Южна Индия, ще преминем през храмовете на петте елемента и ще се докоснем до древната духовна традиция на Индия."
    ],
    elements: [
      {
        name: "Въздух",
        place: "Шри Калахасти",
        text: "Храмът Шри Калахастеешвара, свързан с дъха, свободата и движението."
      },
      {
        name: "Земя",
        place: "Канчипурам",
        text: "Храмът Екамбарешварар, символ на стабилността, корените и вътрешната опора."
      },
      {
        name: "Огън",
        place: "Тируваннамалай",
        text: "Храмът Аруначалешварар и свещената планина Аруначала, място на трансформация."
      },
      {
        name: "Етер",
        place: "Чидамбарам",
        text: "Храмът Натараджа, където се срещаме с тишината, съзнанието и пространството."
      },
      {
        name: "Вода",
        place: "Тируванаикавал",
        text: "Храмът Джамбукешварар, свързан с потока, пречистването и хармонията с живота."
      }
    ],
    journeyTitle: "Девет храма. Пет елемента. Едно пътуване.",
    journeyParagraphs: [
      "Нашето пътуване започва от Ченай и продължава към Шри Калахасти, свещеното място на Въздуха. Там ще посетим храма Шри Калахастеешвара, свързан с дъха, свободата и движението.",
      "В Канчипурам ще посетим храма Екамбарешварар, храмът на Земята, символ на стабилността, корените и вътрешната опора.",
      "Ще продължим към мистичния Тируваннамалай и храма Аруначалешварар, свързан с елемента Огън и свещената планина Аруначала, място на трансформация, вътрешен огън и духовно пробуждане.",
      "В Чидамбарам ще посетим храма Натараджа, свещеното място на Етера и Пространството. Тук се срещаме с тишината, съзнанието, Божия дух и безкрайното пространство вътре и около нас.",
      "След това ще посетим храма Джамбукешварар в Тируванаикавал, свещеното място на Водата, свързано с потока, пречистването и способността да се движим заедно с живота.",
      "По време на пътуването ще посетим и един от деветте свещени храма на Наваграха, посветен на Шани - Сатурн. Това е място с голяма мистична сила, свързано с времето, съдбата и кармичния път на човека.",
      "Ще отдадем почит на Шани, господаря на времето и кармата, и на уроците, които ни водят към осъзнаване и вътрешна зрялост.",
      "Ще се потопим и в атмосферата на Пондичери - красив град, в който индийската и френската култура се срещат, и ще посетим ашрама на Шри Ауробиндо.",
      "Финалът на нашето пътуване ще бъде Ауровил - уникално място, посветено на човешкото единство, съзнанието и вътрешната трансформация.",
      "Специална част от програмата е възможността всеки участник да получи индивидуална 20-минутна астрологическа консултация с Арджун Чакраборти.",
      "От петте елемента към самите нас.",
      "Панча Маха Бхута е пътешествие навън към древната Индия и навътре към собствената ни същност."
    ],
    includesTitle: "Цената включва",
    includes: [
      "6 нощувки по маршрута",
      "Частично изхранване по време на пътуването",
      "Пълно изхранване през първите 4 дни от програмата",
      "Закуски по време на настаняването в Пондичери",
      "Транспорт по време на цялото пътуване с малък комфортен автобус с климатик",
      "Всички трансфери и придвижвания по програмата",
      "Индивидуална 20-минутна астрологическа консултация за всеки участник с Арджун Чакраборти"
    ],
    excludesTitle: "Цената не включва",
    excludes: [
      "Такси и входни такси, когато такива се изискват",
      "Дарения в храмовете",
      "Пуджи и други храмови ритуали",
      "Международни и вътрешни самолетни билети",
      "Храна и напитки извън посочените в програмата",
      "Лични разходи и услуги извън програмата"
    ],
    reserveTitle: "Записване за пътуването",
    reserveText:
      "За да запазите място или да зададете въпрос, свържете се с Astro Veda Life по имейл или WhatsApp.",
    emailButton: "Записване по имейл",
    whatsappButton: "WhatsApp",
    back: "Назад към събитията",
    whatsappText:
      "Здравейте%2C%20искам%20повече%20информация%20за%20пътуването%20Панча%20Маха%20Бхута%20през%20януари%202027."
  }
};

export function PanchaMahaBhutaClient() {
  const { lang } = useLanguage();
  const page = content[lang];
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${page.whatsappText}`;
  const paymentButton = lang === "bg" ? "Запази и плати" : "Reserve and pay";
  const qrLabel = lang === "bg" ? "Сканирайте за плащане със Stripe" : "Scan to pay with Stripe";
  const qrAlt =
    lang === "bg"
      ? "Stripe QR код за плащане за Панча Маха Бхута"
      : "Stripe payment QR code for Pancha Maha Bhuta";
  const reserveText =
    lang === "bg"
      ? "Запазете своето място чрез сигурния Stripe линк за плащане. За въпроси се свържете с Astro Veda Life по WhatsApp."
      : "Reserve your place through the secure Stripe payment link. For questions, contact Astro Veda Life on WhatsApp.";

  return (
    <>
      <section className="event-landing-hero">
        <div className="event-landing-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="event-subtitle">{page.subtitle}</p>
          <p>{page.details}</p>
          <p>{page.price}</p>
          <p>{page.intro}</p>
          <div className="button-row">
            <a
              className="button primary"
              href={panchaMahaBhutaStripeUrl}
              rel="noreferrer"
              target="_blank"
            >
              {paymentButton}
            </a>
            <a className="button secondary" href={whatsappHref}>
              {page.whatsappButton}
            </a>
          </div>
          <p className="event-note">{page.guide}</p>
        </div>
        <div
          className="event-hero-media event-poster-media compact-poster-media"
          style={{ "--event-image": `url("${poster}")` } as CSSProperties}
        >
          <img src={poster} alt={page.posterAlt} />
        </div>
      </section>

      <section className="section page-intro" aria-label="Journey introduction">
        <div className="page-intro-content">
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt" aria-labelledby="five-elements">
        <div className="section-heading">
          <p className="eyebrow">{page.infoEyebrow}</p>
          <h2 id="five-elements">{page.journeyTitle}</h2>
        </div>
        <div className="element-grid">
          {page.elements.map((element, index) => (
            <article className="element-card" key={element.name}>
              <span>{index + 1}</span>
              <h3>{element.name}</h3>
              <p>
                <strong>{element.place}</strong>
                <br />
                {element.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column" aria-labelledby="journey-route">
        <div>
          <p className="eyebrow">{page.infoEyebrow}</p>
          <h2 id="journey-route">{page.journeyTitle}</h2>
          <ul className="event-overview-list">
            {page.journeyParagraphs.map((paragraph) => (
              <li key={paragraph}>{paragraph}</li>
            ))}
          </ul>
        </div>
        <div
          className="event-booking-poster compact-booking-poster"
          style={{ "--event-image": `url("${poster}")` } as CSSProperties}
        >
          <img src={poster} alt={page.posterAlt} />
        </div>
      </section>

      <section className="section alt two-column" aria-labelledby="journey-includes">
        <div>
          <p className="eyebrow">{page.price}</p>
          <h2 id="journey-includes">{page.includesTitle}</h2>
          <ul className="event-inclusion-list">
            {page.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">{page.price}</p>
          <h2>{page.excludesTitle}</h2>
          <ul className="event-inclusion-list">
            {page.excludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="event-final-cta" aria-labelledby="pancha-register">
        <div>
          <h2 id="pancha-register">{page.reserveTitle}</h2>
          <p>{reserveText}</p>
        </div>
        <div className="event-payment-actions">
          <div className="button-row">
            <a
              className="button primary"
              href={panchaMahaBhutaStripeUrl}
              rel="noreferrer"
              target="_blank"
            >
              {paymentButton}
            </a>
            <a className="button secondary" href={whatsappHref}>
              {page.whatsappButton}
            </a>
            <Link className="button secondary" href={localizePath("/upcoming-events", lang)}>
              {page.back}
            </Link>
          </div>
          <figure className="event-payment-qr">
            <img src={paymentQr} alt={qrAlt} />
            <figcaption>{qrLabel}</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
