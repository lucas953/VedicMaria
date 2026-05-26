import { createPageMetadata } from "../seo";
import VedicAstrologyPage from "./VedicAstrologyClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Vedic Astrology Readings",
  description:
    "Receive Vedic astrology insight into your birth chart, planetary timing, relationships, life purpose, and practical remedies.",
  path: "/vedic-astrology"
});

export default function Page() {
  return (
    <SiteChrome>
      <VedicAstrologyPage />
    </SiteChrome>
  );
}
