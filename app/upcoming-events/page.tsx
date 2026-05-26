import { createPageMetadata } from "../seo";
import UpcomingEventsPage from "./UpcomingEventsClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Upcoming Events",
  description:
    "Join Astro Veda Life workshops, meditation circles, astrology gatherings, Ayurveda sessions, and Vastu learning events.",
  path: "/upcoming-events"
});

export default function Page() {
  return (
    <SiteChrome>
      <UpcomingEventsPage />
    </SiteChrome>
  );
}
