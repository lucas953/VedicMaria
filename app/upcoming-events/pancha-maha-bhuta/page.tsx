import type { Metadata } from "next";
import { SiteChrome } from "../../components/SiteChrome";
import { createPageMetadata } from "../../seo";
import { PanchaMahaBhutaClient } from "./PanchaMahaBhutaClient";

const eventPath = "/upcoming-events/pancha-maha-bhuta";

export const metadata: Metadata = createPageMetadata({
  title: "Pancha Maha Bhuta",
  description:
    "A 7-day South India journey through the five elements from Chennai, 25-31 January 2027.",
  path: eventPath,
  image: "/images/events/pancha-maha-bhuta-2027-bg.png"
});

export default function PanchaMahaBhutaPage() {
  return (
    <SiteChrome>
      <PanchaMahaBhutaClient />
    </SiteChrome>
  );
}
