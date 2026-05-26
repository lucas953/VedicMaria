import { createPageMetadata } from "../seo";
import OurTeamPage from "./OurTeamClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet the Astro Veda Life team supporting Vedic astrology, numerology, Ayurveda, Vastu, education, and community events.",
  path: "/our-team"
});

export default function Page() {
  return (
    <SiteChrome>
      <OurTeamPage />
    </SiteChrome>
  );
}
