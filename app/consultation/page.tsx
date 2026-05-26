import { createPageMetadata } from "../seo";
import ConsultationPage from "./ConsultationClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Book a Consultation",
  description:
    "Book an online or in-person consultation for Vedic astrology, Vastu, Ayurveda lifestyle guidance, or spiritual coaching.",
  path: "/consultation"
});

export default function Page() {
  return (
    <SiteChrome>
      <ConsultationPage />
    </SiteChrome>
  );
}
