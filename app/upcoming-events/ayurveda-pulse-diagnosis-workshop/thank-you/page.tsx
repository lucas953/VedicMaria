import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "../../../components/SiteChrome";
import { copy } from "../../../siteCopy";

export const metadata: Metadata = {
  title: "Payment Confirmed | Astro Veda Life",
  description:
    "Confirmation page for the What Is Your Pulse Telling You Ayurveda workshop.",
  robots: {
    index: false,
    follow: false
  }
};

const whatsappNumber = copy.en.contact.whatsapp.replace(/[^\d]/g, "");
const whatsappHref =
  `https://wa.me/${whatsappNumber}?text=` +
  "Hello%2C%20I%20have%20completed%20payment%20for%20What%20Is%20Your%20Pulse%20Telling%20You%3F%20and%20have%20a%20question.";

export default function AyurvedaPulseThankYouPage() {
  return (
    <SiteChrome>
      <main className="payment-thankyou">
        <section className="payment-thankyou-card" aria-labelledby="payment-confirmed">
          <div className="payment-thankyou-copy">
            <p className="eyebrow">Payment confirmed</p>
            <h1 id="payment-confirmed">Your place is confirmed</h1>
            <p className="payment-thankyou-lead">
              Thank you for joining <em>What Is Your Pulse Telling You?</em>
            </p>

            <div className="payment-thankyou-details" aria-label="Workshop details">
              <strong>Sunday, 27 September 2026 — 17:30</strong>
              <span>Yoga Vibe, San Stefano Plaza</span>
              <span>Duration: approximately 90 minutes</span>
            </div>

            <p>Please arrive around 10 minutes before the workshop begins.</p>
            <p>A confirmation has also been sent to your email.</p>
            <p>Questions? Contact us on WhatsApp.</p>

            <div className="button-row">
              <a className="button primary" href={whatsappHref}>
                WhatsApp
              </a>
              <Link
                className="button secondary"
                href="/upcoming-events/ayurveda-pulse-diagnosis-workshop"
              >
                Back to event
              </Link>
            </div>
          </div>

          <div className="payment-thankyou-visual">
            <img
              src="/images/events/ayurveda-pulse-workshop-en.png"
              alt="What Is Your Pulse Telling You workshop poster"
            />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
