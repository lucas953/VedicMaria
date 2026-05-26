export const ayurvedaDetails = [
  {
    slug: "body-constitution",
    title: "Body Constitution",
    description:
      "Ayurveda helps you understand your natural constitution, or dosha, and the rhythm that supports your well-being. This insight brings clarity to your body, mind, digestion, energy, and emotional balance.",
    bg: {
      title: "Телесна конституция",
      description:
        "Аюрведа ви помага да разберете своята естествена конституция, или доша, и ритъма, който подкрепя вашето благополучие. Това прозрение носи яснота за тялото, ума, храносмилането, енергията и емоционалния баланс."
    }
  },
  {
    slug: "diet-digestion",
    title: "Diet & Digestion",
    description:
      "Food becomes medicine when it is chosen with awareness and care. Ayurvedic guidance supports better digestion, lighter energy, and a more harmonious relationship with your daily meals.",
    bg: {
      title: "Хранене и храносмилане",
      description:
        "Храната се превръща в лекарство, когато е избрана с осъзнатост и грижа. Аюрведичните насоки подкрепят по-добро храносмилане, по-лека енергия и по-хармонична връзка с ежедневното хранене."
    }
  },
  {
    slug: "daily-routine",
    title: "Daily Routine",
    description:
      "Simple daily rituals can gently restore balance and calm. Ayurveda offers nourishing routines for sleep, movement, self-care, and inner stability.",
    bg: {
      title: "Дневен режим",
      description:
        "Простите ежедневни ритуали могат нежно да възстановят баланса и спокойствието. Аюрведа предлага подхранващи практики за сън, движение, грижа за себе си и вътрешна стабилност."
    }
  },
  {
    slug: "seasonal-balance",
    title: "Seasonal Balance",
    description:
      "Each season brings different qualities that affect the body and mind. Ayurveda helps you adapt your food, habits, and lifestyle so you feel more grounded throughout the year.",
    bg: {
      title: "Сезонен баланс",
      description:
        "Всеки сезон носи различни качества, които влияят на тялото и ума. Аюрведа ви помага да адаптирате храната, навиците и начина си на живот, за да се чувствате по-заземени през цялата година."
    }
  },
  {
    slug: "natural-remedies",
    title: "Natural Remedies",
    description:
      "Ayurvedic remedies use herbs, oils, and simple practices to support the body's natural intelligence. They are gentle tools for bringing comfort, balance, and renewed vitality.",
    bg: {
      title: "Природни средства",
      description:
        "Аюрведичните средства използват билки, масла и прости практики, за да подкрепят естествената интелигентност на тялото. Те са нежни инструменти за комфорт, баланс и обновена жизненост."
    }
  }
] as const;

export type AyurvedaDetail = (typeof ayurvedaDetails)[number];

export function getAyurvedaDetail(slug: string) {
  return ayurvedaDetails.find((detail) => detail.slug === slug);
}
