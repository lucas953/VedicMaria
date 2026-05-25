import { createPageMetadata } from "../seo";
import ContactPage from "./ContactClient";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Astro Veda Life for consultation requests, Vedic astrology readings, Vastu reviews, Ayurveda guidance, trips, and events.",
  path: "/contact"
});

export default function Page() {
  return <ContactPage />;
}
