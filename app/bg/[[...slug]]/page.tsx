import { notFound } from "next/navigation";
import AyurvedaPage from "../../ayurveda/AyurvedaClient";
import { ayurvedaDetails, getAyurvedaDetail } from "../../ayurveda/ayurvedaDetails";
import { AyurvedaDetailClient } from "../../ayurveda/[slug]/AyurvedaDetailClient";
import ConsultationPage from "../../consultation/ConsultationClient";
import {
  consultationDetails,
  getConsultationDetail
} from "../../consultation/consultationDetails";
import { ConsultationDetailClient } from "../../consultation/[slug]/ConsultationDetailClient";
import ContactPage from "../../contact/ContactClient";
import Home from "../../HomeClient";
import NumerologyPage from "../../numerology/NumerologyClient";
import {
  getNumerologyDetail,
  numerologyDetails
} from "../../numerology/numerologyDetails";
import { NumerologyDetailClient } from "../../numerology/[slug]/NumerologyDetailClient";
import OurTeamPage from "../../our-team/OurTeamClient";
import { TeamMemberClient } from "../../our-team/[slug]/TeamMemberClient";
import { createPageMetadata } from "../../seo";
import { resolveTeamSlug, routableTeamSlugs } from "../../teamSlugs";
import TripsPage from "../../trips/TripsClient";
import { getTripDetail, tripDetails } from "../../trips/tripDetails";
import { TripDetailClient } from "../../trips/[slug]/TripDetailClient";
import UpcomingEventsPage from "../../upcoming-events/UpcomingEventsClient";
import VastuPage from "../../vastu/VastuClient";
import { getVastuDetail, vastuDetails } from "../../vastu/vastuDetails";
import { VastuDetailClient } from "../../vastu/[slug]/VastuDetailClient";
import VedicAstrologyPage from "../../vedic-astrology/VedicAstrologyClient";
import {
  astrologyDetails,
  getAstrologyDetail
} from "../../vedic-astrology/astrologyDetails";
import { AstrologyDetailClient } from "../../vedic-astrology/[slug]/AstrologyDetailClient";
import { SiteChrome } from "../../components/SiteChrome";

type BgParams = {
  slug?: string[];
};

const bgStaticRoutes = [
  [],
  ["vedic-astrology"],
  ["numerology"],
  ["consultation"],
  ["vastu"],
  ["ayurveda"],
  ["trips"],
  ["upcoming-events"],
  ["our-team"],
  ["contact"]
];

const bgPageMetadata: Record<string, { title: string; description: string }> = {
  "": {
    title: "Ведическа астрология, Аюрведа и Васту насоки",
    description:
      "Astro Veda Life предлага ведически астрологични прочити, консултации, Васту, Аюрведа насоки, духовни пътувания и събития."
  },
  "vedic-astrology": {
    title: "Ведическа астрология",
    description:
      "Ведически астрологични прочити за рождена карта, предназначение, взаимоотношения, житейски цикли и духовни насоки."
  },
  numerology: {
    title: "Нумерология",
    description:
      "Нумерологични насоки за число на жизнения път, личен годишен цикъл, име, взаимоотношения и подходящ момент за решения."
  },
  consultation: {
    title: "Запазете консултация",
    description:
      "Запазете онлайн или присъствена консултация за ведическа астрология, Васту, Аюрведа насоки или духовна подкрепа."
  },
  vastu: {
    title: "Васту Шастра услуги",
    description:
      "Внесете хармония в дома, офиса, земята и интериора чрез традиционна Васту мъдрост и практични средства."
  },
  ayurveda: {
    title: "Аюрведа насоки",
    description:
      "Аюрведични насоки за доша баланс, хранене, дневен режим, сезонна грижа и природни средства."
  },
  trips: {
    title: "Духовни пътувания",
    description:
      "Поклоннически пътувания, ритрийти, културни преживявания и персонализирани духовни маршрути."
  },
  "upcoming-events": {
    title: "Предстоящи събития",
    description:
      "Семинари, кръгове и духовни събития за ведическа астрология, Аюрведа, Васту и осъзнат живот."
  },
  "our-team": {
    title: "Нашият екип",
    description:
      "Запознайте се с екипа на Astro Veda Life, който подкрепя ведическа астрология, нумерология, Аюрведа, Васту, образование и общност."
  },
  contact: {
    title: "Контакт",
    description:
      "Свържете се с Astro Veda Life за консултации, ведически астрологични прочити, Васту прегледи, Аюрведа насоки, пътувания и събития."
  }
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...bgStaticRoutes,
    ...astrologyDetails.map((detail) => ["vedic-astrology", detail.slug]),
    ...numerologyDetails.map((detail) => ["numerology", detail.slug]),
    ...consultationDetails.map((detail) => ["consultation", detail.slug]),
    ...vastuDetails.map((detail) => ["vastu", detail.slug]),
    ...ayurvedaDetails.map((detail) => ["ayurveda", detail.slug]),
    ...tripDetails.map((detail) => ["trips", detail.slug]),
    ...routableTeamSlugs.map((slug) => ["our-team", slug])
  ].map((slug) => ({ slug }));
}

function pathFromParams(params: BgParams) {
  return (params.slug ?? []).join("/");
}

function bgPath(path: string) {
  return path ? `/bg/${path}` : "/bg";
}

export async function generateMetadata({
  params
}: {
  params: Promise<BgParams>;
}) {
  const resolvedParams = await params;
  const path = pathFromParams(resolvedParams);
  const [section, detailSlug] = resolvedParams.slug ?? [];

  if (detailSlug) {
    const detail =
      section === "vedic-astrology"
        ? getAstrologyDetail(detailSlug)
        : section === "numerology"
          ? getNumerologyDetail(detailSlug)
          : section === "consultation"
            ? getConsultationDetail(detailSlug)
            : section === "vastu"
              ? getVastuDetail(detailSlug)
              : section === "ayurveda"
                ? getAyurvedaDetail(detailSlug)
                : section === "trips"
                  ? getTripDetail(detailSlug)
                  : null;

    if (detail) {
      return createPageMetadata({
        title: detail.bg.title,
        description: detail.bg.description,
        path: bgPath(path)
      });
    }
  }

  if (section === "our-team" && detailSlug) {
    return createPageMetadata({
      title: "Член на екипа",
      description:
        "Запознайте се с екипа на Astro Veda Life и неговата работа във ведическа астрология, Аюрведа, Васту и духовно образование.",
      path: bgPath(path)
    });
  }

  const metadata = bgPageMetadata[path];

  if (!metadata) {
    return createPageMetadata({
      title: "Страница",
      description: "Astro Veda Life",
      path: "/bg"
    });
  }

  return createPageMetadata({
    ...metadata,
    path: bgPath(path)
  });
}

export default async function BgPage({
  params
}: {
  params: Promise<BgParams>;
}) {
  const resolvedParams = await params;
  const path = pathFromParams(resolvedParams);
  const [section, detailSlug] = resolvedParams.slug ?? [];
  let page: React.ReactNode;

  if (path === "") {
    page = <Home />;
  } else if (path === "vedic-astrology") {
    page = <VedicAstrologyPage />;
  } else if (path === "numerology") {
    page = <NumerologyPage />;
  } else if (path === "consultation") {
    page = <ConsultationPage />;
  } else if (path === "vastu") {
    page = <VastuPage />;
  } else if (path === "ayurveda") {
    page = <AyurvedaPage />;
  } else if (path === "trips") {
    page = <TripsPage />;
  } else if (path === "upcoming-events") {
    page = <UpcomingEventsPage />;
  } else if (path === "our-team") {
    page = <OurTeamPage />;
  } else if (path === "contact") {
    page = <ContactPage />;
  } else if (section === "vedic-astrology" && detailSlug) {
    const detail = getAstrologyDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <AstrologyDetailClient detail={detail} />;
  } else if (section === "numerology" && detailSlug) {
    const detail = getNumerologyDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <NumerologyDetailClient detail={detail} />;
  } else if (section === "consultation" && detailSlug) {
    const detail = getConsultationDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <ConsultationDetailClient detail={detail} />;
  } else if (section === "vastu" && detailSlug) {
    const detail = getVastuDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <VastuDetailClient detail={detail} />;
  } else if (section === "ayurveda" && detailSlug) {
    const detail = getAyurvedaDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <AyurvedaDetailClient detail={detail} />;
  } else if (section === "trips" && detailSlug) {
    const detail = getTripDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = <TripDetailClient detail={detail} />;
  } else if (section === "our-team" && detailSlug) {
    const resolvedSlug = resolveTeamSlug(detailSlug);

    if (!resolvedSlug) {
      notFound();
    }

    page = <TeamMemberClient slug={resolvedSlug} />;
  } else {
    notFound();
  }

  return <SiteChrome initialLanguage="bg">{page}</SiteChrome>;
}
