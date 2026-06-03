/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "../../components/SiteChrome";
import { createPageMetadata } from "../../seo";

const eventPath = "/upcoming-events/ayurvedic-consultations-bansko";
const whatsappHref =
  "https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=Hello%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20consultation%20in%20Bansko";

const benefits = [
  "Stress",
  "Fatigue",
  "Digestion",
  "Sleep",
  "Lifestyle imbalance",
  "Prevention and general wellbeing"
];

const consultationSteps = [
  "Ayurvedic constitution assessment",
  "Lifestyle and routine review",
  "Digestion, sleep, stress, and energy discussion",
  "Personalized recommendations adapted to your body and lifestyle"
];

const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "The consultation usually lasts around 45 to 60 minutes, depending on your needs and the depth of the assessment."
  },
  {
    question: "What language is it in?",
    answer:
      "Consultations can usually be arranged in English. Please contact us in advance if you need another language option."
  },
  {
    question: "Do I need previous Ayurveda knowledge?",
    answer:
      "No. The consultation is suitable for complete beginners. Dr. Venu will guide you through the process in a simple and practical way."
  },
  {
    question: "Is it suitable for beginners?",
    answer:
      "Yes. You do not need to know your dosha or have any previous experience with Ayurveda."
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can request your appointment through WhatsApp or the booking form on this page."
  },
  {
    question: "What should I bring?",
    answer:
      "Bring any relevant questions about your digestion, sleep, stress, energy, routine, or lifestyle. If you have recent health information you wish to discuss, you may bring it too."
  }
];

export const metadata: Metadata = createPageMetadata({
  title: "Ayurvedic Consultations in Bansko",
  description:
    "Book an Ayurvedic consultation with Dr. Venu Sasikumar at Pirin Sense, Bansko, from 29 June to 10 July.",
  path: eventPath,
  image: "/images/events/ayurveda-bansko-hero.jpg"
});

export default function AyurvedicConsultationsBanskoPage() {
  return (
    <SiteChrome>
      <section className="event-landing-hero">
        <div className="event-landing-copy">
          <p className="eyebrow">Upcoming Event</p>
          <h1>Ayurvedic Consultations in Bansko</h1>
          <p className="event-subtitle">
            Dr. Venu Sasikumar | 29 June - 10 July | Pirin Sense
          </p>
          <p>
            A personal Ayurvedic consultation to understand your constitution,
            lifestyle patterns, digestion, sleep, stress, energy, and overall
            wellbeing, with practical recommendations adapted to you.
          </p>
          <div className="button-row">
            <a className="button primary" href={whatsappHref}>
              Book your consultation
            </a>
            <a className="button secondary" href="#booking">
              View booking details
            </a>
          </div>
          <p className="event-note">
            Placeholder: replace the WhatsApp number before launch. Instagram
            CTA can use: DM BANSKO or use the link in bio to book.
          </p>
        </div>
        <div className="event-hero-media">
          <img
            src="/images/events/ayurveda-bansko-hero.jpg"
            alt="Ayurvedic consultations in Bansko at Pirin Sense"
          />
          <div className="event-date-card">
            <span>Dates</span>
            <strong>29 Jun - 10 Jul</strong>
            <p>Pirin Sense, Bansko</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="event-benefits">
        <div className="section-heading">
          <p className="eyebrow">Who it is for</p>
          <h2 id="event-benefits">
            For anyone seeking balance, clarity, and practical wellbeing support
          </h2>
          <p>
            These one-to-one sessions are designed for everyday concerns and
            prevention, not only for people already familiar with Ayurveda.
          </p>
        </div>
        <div className="event-benefit-grid">
          {benefits.map((benefit) => (
            <article className="event-mini-card" key={benefit}>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt two-column" aria-labelledby="event-consultation">
        <div>
          <p className="eyebrow">The consultation</p>
          <h2 id="event-consultation">
            What happens during an Ayurvedic consultation?
          </h2>
          <p>
            Ayurveda looks at the whole person: your body constitution,
            digestion, routine, sleep, stress, emotional state, and lifestyle.
            The consultation helps identify patterns and offers practical
            recommendations for greater balance.
          </p>
        </div>
        <div className="event-step-list">
          {consultationSteps.map((step, index) => (
            <article className="event-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section event-practitioner" aria-labelledby="event-practitioner">
        <div className="event-profile-photo">
          <img
            src="/images/events/dr-venu-sasikumar.jpg"
            alt="Dr. Venu Sasikumar"
          />
        </div>
        <div>
          <p className="eyebrow">About the practitioner</p>
          <h2 id="event-practitioner">Dr. Venu Sasikumar</h2>
          <p>
            Dr. Venu Sasikumar is an Ayurvedic doctor with deep experience in
            traditional Ayurvedic assessment, lifestyle guidance, and
            personalized wellbeing support.
          </p>
          <p>
            His approach is warm, practical, and human. Rather than offering
            generic advice, he helps each person understand their own
            constitution, daily rhythm, and the patterns that may be affecting
            energy, digestion, sleep, stress, and overall balance.
          </p>
          <p>
            During the Bansko consultations, he will offer individual guidance
            in a calm setting at Pirin Sense, supporting both beginners and
            people already familiar with Ayurveda.
          </p>
          <div className="event-placeholder-card">
            <h3>Credentials placeholder</h3>
            <p>
              Add final Dr. Venu credentials, official degree, clinic, years of
              experience, specialties, or biography details here.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt event-location" aria-labelledby="event-location">
        <div>
          <p className="eyebrow">Location</p>
          <h2 id="event-location">Pirin Sense, Bansko</h2>
          <p>
            The consultations take place at Pirin Sense in Bansko, surrounded by
            the calm mountain atmosphere of the Pirin region, an ideal setting
            for rest, reflection, and renewal.
          </p>
          <div className="event-placeholder-card">
            <h3>Address placeholder</h3>
            <p>Add full Pirin Sense address here.</p>
          </div>
        </div>
        <div className="event-location-media">
          <img
            src="/images/events/pirin-sense-bansko.jpg"
            alt="Pirin Sense Bansko venue"
          />
          <div className="event-map-placeholder">
            <p>Google Map embed placeholder</p>
            <span>Paste Google Map embed URL before launch.</span>
          </div>
        </div>
      </section>

      <section id="booking" className="section event-booking" aria-labelledby="event-booking">
        <div className="event-booking-panel">
          <div>
            <p className="eyebrow">Booking</p>
            <h2 id="event-booking">Book your consultation</h2>
            <p>
              Consultations are available from 29 June to 10 July at Pirin
              Sense, Bansko. Appointments are limited and should be booked in
              advance.
            </p>
            <div className="event-date-list">
              <span>Available dates</span>
              <strong>29 June - 10 July</strong>
              <p>Exact appointment times confirmed by message.</p>
            </div>
            <a className="button primary" href={whatsappHref}>
              Book on WhatsApp
            </a>
          </div>

          <form className="event-booking-form">
            <h3>Booking request</h3>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label>
              <span>Preferred date</span>
              <input type="text" name="date" placeholder="Example: 2 July" />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us briefly what you would like support with."
              />
            </label>
            <button className="button primary" type="button">
              Send booking request
            </button>
            <p>Placeholder: connect this form to the booking integration before launch.</p>
          </form>
        </div>
      </section>

      <section className="section alt" aria-labelledby="event-faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="event-faq">Frequently asked questions</h2>
        </div>
        <div className="event-faq-list">
          {faqs.map((faq) => (
            <details className="event-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="event-final-cta" aria-labelledby="event-final-cta">
        <div>
          <h2 id="event-final-cta">Ready to book your Ayurvedic consultation?</h2>
          <p>
            Send us a message with the word BANSKO or book directly through
            WhatsApp.
          </p>
        </div>
        <div className="button-row">
          <a className="button primary" href={whatsappHref}>
            Book your consultation
          </a>
          <Link className="button secondary" href="/upcoming-events">
            Back to events
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
