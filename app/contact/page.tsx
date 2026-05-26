import { createPageMetadata } from "../seo";
import ContactPage from "./ContactClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Astro Veda Life for consultation requests, Vedic astrology readings, Vastu reviews, Ayurveda guidance, trips, and events.",
  path: "/contact"
});

export default function Page() {
  return (
    <SiteChrome>
      <ContactPage />
    </SiteChrome>
  );
}
