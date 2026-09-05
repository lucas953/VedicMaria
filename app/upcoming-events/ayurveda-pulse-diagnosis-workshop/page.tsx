import type { Metadata } from "next";
import { SiteChrome } from "../../components/SiteChrome";
import { createPageMetadata } from "../../seo";
import { AyurvedaPulseDiagnosisWorkshopClient } from "./AyurvedaPulseDiagnosisWorkshopClient";

const eventPath = "/upcoming-events/ayurveda-pulse-diagnosis-workshop";

export const metadata: Metadata = createPageMetadata({
  title: "What Is Your Pulse Telling You?",
  description:
    "A 90-minute practical workshop on Ayurveda and pulse diagnosis at Yoga Vibe, San Stefano Plaza, on 26 September 2026.",
  path: eventPath,
  image: "/images/events/ayurveda-pulse-workshop-en.png"
});

export default function AyurvedaPulseDiagnosisWorkshopPage() {
  return (
    <SiteChrome>
      <AyurvedaPulseDiagnosisWorkshopClient />
    </SiteChrome>
  );
}
