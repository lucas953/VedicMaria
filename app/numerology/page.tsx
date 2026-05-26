import { createPageMetadata } from "../seo";
import NumerologyPage from "./NumerologyClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Numerology Guidance",
  description:
    "Explore life path numbers, name numerology, personal year cycles, relationship numbers, and timing for meaningful decisions.",
  path: "/numerology"
});

export default function Page() {
  return (
    <SiteChrome>
      <NumerologyPage />
    </SiteChrome>
  );
}
