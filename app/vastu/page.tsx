import { createPageMetadata } from "../seo";
import VastuPage from "./VastuClient";

export const metadata = createPageMetadata({
  title: "Vastu Shastra Services",
  description:
    "Bring harmony to homes, offices, land, and interiors with traditional Vastu Shastra insight and practical remedies.",
  path: "/vastu"
});

export default function Page() {
  return <VastuPage />;
}
