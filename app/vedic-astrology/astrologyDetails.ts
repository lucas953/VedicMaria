export const astrologyDetails = [
  {
    slug: "birth-chart-reading",
    title: "Birth Chart Reading",
    description:
      "Your birth chart is a sacred map of your soul's journey, showing your gifts, patterns, and life direction. Through Vedic astrology, we explore its wisdom with clarity, compassion, and respect for your path.",
    bg: {
      title: "Прочит на рождената карта",
      description:
        "Вашата рождена карта е свещена карта на пътя на душата, която показва вашите дарби, модели и житейска посока. Чрез ведическата астрология изследваме нейната мъдрост с яснота, състрадание и уважение към вашия път."
    }
  },
  {
    slug: "career-purpose",
    title: "Career & Purpose",
    description:
      "Vedic astrology can reveal the natural talents and responsibilities you are here to develop. It offers gentle guidance for career choices, meaningful work, and a stronger connection to your life purpose.",
    bg: {
      title: "Кариера и предназначение",
      description:
        "Ведическата астрология може да разкрие естествените таланти и отговорности, които сте тук да развиете. Тя предлага нежни насоки за професионални избори, смислена работа и по-силна връзка с житейското предназначение."
    }
  },
  {
    slug: "love-relationships",
    title: "Love & Relationships",
    description:
      "Relationships carry lessons of harmony, growth, and understanding. A Vedic reading can illuminate emotional patterns, compatibility, and the deeper needs that shape your connections.",
    bg: {
      title: "Любов и взаимоотношения",
      description:
        "Взаимоотношенията носят уроци за хармония, растеж и разбиране. Ведическият прочит може да осветли емоционални модели, съвместимост и по-дълбоките потребности, които оформят връзките ви."
    }
  },
  {
    slug: "timing-life-cycles",
    title: "Timing & Life Cycles",
    description:
      "Every life moves through cycles of change, opportunity, and reflection. Vedic astrology helps you understand these periods so you can make decisions with patience and inner confidence.",
    bg: {
      title: "Време и житейски цикли",
      description:
        "Всеки живот преминава през цикли на промяна, възможности и размисъл. Ведическата астрология ви помага да разберете тези периоди, за да вземате решения с търпение и вътрешна увереност."
    }
  },
  {
    slug: "remedies-guidance",
    title: "Remedies & Guidance",
    description:
      "Vedic remedies offer simple, sacred ways to bring more balance into daily life. Through mantras, rituals, colors, gemstones, or mindful practices, they support peace, clarity, and alignment.",
    bg: {
      title: "Средства и насоки",
      description:
        "Ведическите средства предлагат прости и свещени начини да внесете повече баланс в ежедневието. Чрез мантри, ритуали, цветове, скъпоценни камъни или осъзнати практики те подкрепят мир, яснота и съгласуваност."
    }
  }
] as const;

export type AstrologyDetail = (typeof astrologyDetails)[number];

export function getAstrologyDetail(slug: string) {
  return astrologyDetails.find((detail) => detail.slug === slug);
}
