/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ayurvedaPulseWorkshopStripeUrl } from "../../eventPaymentLinks";
import { copy } from "../../siteCopy";
import { SiteChrome } from "../../components/SiteChrome";
import { createPageMetadata } from "../../seo";

const eventPath = "/upcoming-events/ayurveda-pulse-diagnosis-workshop";
const whatsappNumber = copy.en.contact.whatsapp.replace(/[^\d]/g, "");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20place%20for%20the%20Ayurveda%20pulse%20diagnosis%20workshop.`;
const hasStripeLink = ayurvedaPulseWorkshopStripeUrl.length > 0;

const workshopHighlights = [
  "Discover the foundations of Ayurvedic pulse diagnosis.",
  "Learn how to feel the pulse and what the Ayurvedic approach observes through it.",
  "Practice pulse diagnosis during the workshop with your own hands.",
  "Discover your natural constitution, or Prakriti.",
  "Explore the connection between Ayurveda and Yoga."
];

export const metadata: Metadata = createPageMetadata({
  title: "What Is Your Pulse Telling You?",
  description:
    "A 90-minute practical workshop on Ayurveda and pulse diagnosis at Yoga Vibe, San Stefano Plaza, on 26 September 2026.",
  path: eventPath,
  image: "/ayurveda main.jpg"
});

export default function AyurvedaPulseDiagnosisWorkshopPage() {
  return (
    <SiteChrome>
      <section className="event-landing-hero">
        <div className="event-landing-copy">
          <p className="eyebrow">Upcoming Workshop</p>
          <h1>What is your pulse telling you?</h1>
          <p className="event-subtitle">
            26.09.2026 | 18:30 | Yoga Vibe, San Stefano Plaza
          </p>
          <p>
            Read and feel your body through the ancient wisdom of Ayurveda in a
            90-minute practical workshop on Ayurveda and pulse diagnosis.
          </p>
          <div className="button-row">
            {hasStripeLink ? (
              <a
                className="button primary"
                href={ayurvedaPulseWorkshopStripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reserve and pay 30 EUR
              </a>
            ) : (
              <button className="button primary" type="button" disabled>
                Stripe payment coming soon
              </button>
            )}
            <a className="button secondary" href={whatsappHref}>
              Reserve via WhatsApp
            </a>
          </div>
          <p className="event-note">
            Limited to 30 places. Price: 30 EUR.
          </p>
        </div>
        <div className="event-hero-media">
          <img
            src="/ayurveda main.jpg"
            alt="Ayurveda workshop visual"
          />
          <div className="event-date-card">
            <span>Date and time</span>
            <strong>26 Sep | 18:30</strong>
            <p>Yoga Vibe, San Stefano Plaza</p>
          </div>
        </div>
      </section>

      <section className="section page-intro" aria-label="Workshop introduction">
        <div className="page-intro-content">
          <p>
            Ayurveda is an ancient tradition that helps us develop a deeper
            understanding of the body, mind, and our individual nature. It is
            closely connected to Yoga and shares with it a journey toward
            balance, awareness, and self-understanding.
          </p>
          <p>
            But this workshop is not just about listening and learning theory.
            You will experience Ayurveda through your own senses.
          </p>
        </div>
      </section>

      <section className="section alt two-column" aria-labelledby="workshop-experience">
        <div>
          <p className="eyebrow">Hands-on Ayurveda</p>
          <h2 id="workshop-experience">Feel, observe, and explore the pulse</h2>
          <p>
            This is more than a lecture. It is a hands-on experience of
            Ayurveda: an opportunity to connect with ancient wisdom through the
            pulse, observation, and your own direct experience.
          </p>
        </div>
        <div className="event-step-list">
          {workshopHighlights.map((highlight, index) => (
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
            <p className="eyebrow">Reserve your place</p>
            <h2 id="workshop-reserve">30 EUR | 30 places available</h2>
            <p>
              Reserve your seat for the Ayurveda and pulse diagnosis workshop.
              Online card payment will open here once the Stripe Payment Link is
              ready.
            </p>
            <div className="event-date-list">
              <span>Workshop details</span>
              <strong>26 September 2026, 18:30</strong>
              <p>Yoga Vibe, San Stefano Plaza | 90 minutes</p>
            </div>
            <div className="button-row">
              {hasStripeLink ? (
                <a
                  className="button primary"
                  href={ayurvedaPulseWorkshopStripeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pay with Stripe
                </a>
              ) : (
                <button className="button primary" type="button" disabled>
                  Stripe payment coming soon
                </button>
              )}
              <a className="button secondary" href={whatsappHref}>
                WhatsApp reservation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="event-final-cta" aria-labelledby="workshop-final-cta">
        <div>
          <h2 id="workshop-final-cta">Feel the pulse. Read the body. Discover Ayurveda.</h2>
          <p>
            Join a practical evening of Ayurveda, Yoga, pulse diagnosis, and
            direct experience.
          </p>
        </div>
        <div className="button-row">
          <a className="button primary" href={whatsappHref}>
            Reserve via WhatsApp
          </a>
          <Link className="button secondary" href="/upcoming-events">
            Back to events
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
