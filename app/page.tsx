import { createPageMetadata } from "./seo";
import Home from "./HomeClient";
import { SiteChrome } from "./components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Vedic Astrology, Ayurveda and Vastu Guidance | Astro Veda Life",
  description:
    "Astro Veda Life offers Vedic astrology readings, consultation, Vastu, Ayurveda guidance, spiritual trips, and events.",
  path: "/"
});

export default function Page() {
  return (
    <SiteChrome>
      <Home />
    </SiteChrome>
  );
}
