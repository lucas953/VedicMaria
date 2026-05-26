import { SiteChrome } from "../components/SiteChrome";
import { createPageMetadata } from "../seo";
import BookSessionPage from "./BookSessionClient";

export const metadata = createPageMetadata({
  title: "Book a Session",
  description:
    "Book a consultation session with Astro Veda Life for Vedic astrology, personal guidance, relationship insight, life direction, or follow-up support.",
  path: "/book-session"
});

export default function Page() {
  return (
    <SiteChrome>
      <BookSessionPage />
    </SiteChrome>
  );
}
