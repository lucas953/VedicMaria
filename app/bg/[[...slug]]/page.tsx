import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import AyurvedaPage from "../../ayurveda/AyurvedaClient";
import { ayurvedaDetails, getAyurvedaDetail } from "../../ayurveda/ayurvedaDetails";
import { AyurvedaDetailClient } from "../../ayurveda/[slug]/AyurvedaDetailClient";
import BookSessionPage from "../../book-session/BookSessionClient";
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
import { AyurvedaPulseDiagnosisWorkshopClient } from "../../upcoming-events/ayurveda-pulse-diagnosis-workshop/AyurvedaPulseDiagnosisWorkshopClient";
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

type BgDetail = {
  bg: {
    title: string;
    description: string;
  };
};

type DetailRoute = {
  getDetail: (slug: string) => BgDetail | undefined;
  render: (detail: BgDetail) => ReactNode;
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
  ["upcoming-events", "ayurveda-pulse-diagnosis-workshop"],
  ["our-team"],
  ["book-session"],
  ["contact"]
];

const topLevelPages: Record<string, () => ReactNode> = {
  "": () => <Home />,
  "vedic-astrology": () => <VedicAstrologyPage />,
  numerology: () => <NumerologyPage />,
  consultation: () => <ConsultationPage />,
  vastu: () => <VastuPage />,
  ayurveda: () => <AyurvedaPage />,
  trips: () => <TripsPage />,
  "upcoming-events": () => <UpcomingEventsPage />,
  "upcoming-events/ayurveda-pulse-diagnosis-workshop": () => (
    <AyurvedaPulseDiagnosisWorkshopClient />
  ),
  "our-team": () => <OurTeamPage />,
  "book-session": () => <BookSessionPage />,
  contact: () => <ContactPage />
};

const detailRoutes: Record<string, DetailRoute> = {
  "vedic-astrology": {
    getDetail: getAstrologyDetail,
    render: (detail) => (
      <AstrologyDetailClient
        detail={detail as NonNullable<ReturnType<typeof getAstrologyDetail>>}
      />
    )
  },
  numerology: {
    getDetail: getNumerologyDetail,
    render: (detail) => (
      <NumerologyDetailClient
        detail={detail as NonNullable<ReturnType<typeof getNumerologyDetail>>}
      />
    )
  },
  consultation: {
    getDetail: getConsultationDetail,
    render: (detail) => (
      <ConsultationDetailClient
        detail={detail as NonNullable<ReturnType<typeof getConsultationDetail>>}
      />
    )
  },
  vastu: {
    getDetail: getVastuDetail,
    render: (detail) => (
      <VastuDetailClient
        detail={detail as NonNullable<ReturnType<typeof getVastuDetail>>}
      />
    )
  },
  ayurveda: {
    getDetail: getAyurvedaDetail,
    render: (detail) => (
      <AyurvedaDetailClient
        detail={detail as NonNullable<ReturnType<typeof getAyurvedaDetail>>}
      />
    )
  },
  trips: {
    getDetail: getTripDetail,
    render: (detail) => (
      <TripDetailClient
        detail={detail as NonNullable<ReturnType<typeof getTripDetail>>}
      />
    )
  }
};

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
  "upcoming-events/ayurveda-pulse-diagnosis-workshop": {
    title: "Какво ти казва твоят пулс?",
    description:
      "90-минутен практически семинар по Аюрведа и пулсова диагностика в Yoga Vibe, San Stefano Plaza, на 26 септември 2026."
  },
  "our-team": {
    title: "Нашият екип",
    description:
      "Запознайте се с екипа на Astro Veda Life, който подкрепя ведическа астрология, нумерология, Аюрведа, Васту, образование и общност."
  },
  "book-session": {
    title: "Запазете сесия",
    description:
      "Запазете консултация с Astro Veda Life за ведическа астрология, лични насоки, взаимоотношения, житейска посока или последваща подкрепа."
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
    const detail = section ? detailRoutes[section]?.getDetail(detailSlug) : null;

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
  const topLevelPage = topLevelPages[path]?.();
  let page: ReactNode | null = topLevelPage ?? null;

  if (!page && section && detailSlug && detailRoutes[section]) {
    const detailRoute = detailRoutes[section];
    const detail = detailRoute.getDetail(detailSlug);

    if (!detail) {
      notFound();
    }

    page = detailRoute.render(detail);
  } else if (!page && section === "our-team" && detailSlug) {
    const resolvedSlug = resolveTeamSlug(detailSlug);

    if (!resolvedSlug) {
      notFound();
    }

    page = <TeamMemberClient slug={resolvedSlug} />;
  }

  if (!page) {
    notFound();
  }

  return <SiteChrome initialLanguage="bg">{page}</SiteChrome>;
}
