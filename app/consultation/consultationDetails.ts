export const consultationDetails = [
  {
    slug: "personal-consultation",
    title: "Personal Consultation",
    description:
      "A personal consultation offers a calm space to explore your questions with depth and care. Together, we look at your life path, current challenges, and the guidance that can support your next steps.",
    bg: {
      title: "Лична консултация",
      description:
        "Личната консултация предлага спокойно пространство, в което да разгледате въпросите си с дълбочина и грижа. Заедно изследваме вашия житейски път, настоящите предизвикателства и насоките, които могат да подкрепят следващите ви стъпки."
    }
  },
  {
    slug: "vedic-astrology-reading",
    title: "Vedic Astrology Reading",
    description:
      "Through your birth chart, we uncover patterns, strengths, and important life cycles. This reading brings clarity to your journey while honoring your free will and inner wisdom.",
    bg: {
      title: "Ведически астрологичен прочит",
      description:
        "Чрез вашата рождена карта разкриваме модели, силни страни и важни житейски цикли. Този прочит носи яснота за пътя ви, като почита свободната ви воля и вътрешната мъдрост."
    }
  },
  {
    slug: "relationship-guidance",
    title: "Relationship Guidance",
    description:
      "Relationships often mirror our deepest needs and lessons. A consultation can help you understand emotional dynamics, compatibility, and ways to create more harmony and compassion.",
    bg: {
      title: "Насоки за взаимоотношения",
      description:
        "Взаимоотношенията често отразяват най-дълбоките ни нужди и уроци. Консултацията може да ви помогне да разберете емоционалната динамика, съвместимостта и начините за повече хармония и състрадание."
    }
  },
  {
    slug: "career-life-direction",
    title: "Career & Life Direction",
    description:
      "When you feel uncertain about work or purpose, guidance can bring a clearer sense of direction. We explore your natural talents, timing, and the choices that feel most aligned with your path.",
    bg: {
      title: "Кариера и житейска посока",
      description:
        "Когато се чувствате несигурни относно работата или предназначението си, насоките могат да донесат по-ясно усещане за посока. Изследваме естествените ви таланти, подходящото време и изборите, които са най-съгласувани с пътя ви."
    }
  },
  {
    slug: "remedies-follow-up",
    title: "Remedies & Follow-Up",
    description:
      "After the consultation, simple remedies or practices may be suggested to support balance and peace. Follow-up guidance helps you integrate the insights gently into your daily life.",
    bg: {
      title: "Средства и последваща подкрепа",
      description:
        "След консултацията могат да бъдат предложени прости средства или практики за подкрепа на баланса и мира. Последващите насоки ви помагат нежно да интегрирате прозренията в ежедневието си."
    }
  }
] as const;

export type ConsultationDetail = (typeof consultationDetails)[number];

export function getConsultationDetail(slug: string) {
  return consultationDetails.find((detail) => detail.slug === slug);
}
