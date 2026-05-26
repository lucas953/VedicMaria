export const numerologyDetails = [
  {
    slug: "life-path-number",
    title: "Life Path Number",
    description:
      "Your Life Path Number reveals the deeper rhythm of your soul and the qualities you naturally carry. It offers gentle insight into your strengths, lessons, and the direction that feels most aligned.",
    bg: {
      title: "Число на жизнения път",
      description:
        "Вашето число на жизнения път разкрива по-дълбокия ритъм на душата и качествата, които естествено носите. То предлага меко прозрение за вашите сили, уроци и посоката, която усещате като най-съгласувана."
    }
  },
  {
    slug: "personal-year-cycle",
    title: "Personal Year Cycle",
    description:
      "Each year brings its own energy, inviting you to move, pause, begin, or complete. Your Personal Year Cycle helps you understand the season you are in and make choices with more calm and clarity.",
    bg: {
      title: "Личен годишен цикъл",
      description:
        "Всяка година носи своя енергия, която ви приканва да действате, да спрете, да започнете или да завършите. Личният годишен цикъл ви помага да разберете сезона, в който се намирате, и да избирате с повече спокойствие и яснота."
    }
  },
  {
    slug: "name-numerology",
    title: "Name Numerology",
    description:
      "Your name carries a subtle vibration that reflects how you express yourself in the world. Through name numerology, we explore the energy behind your identity, voice, and personal presence.",
    bg: {
      title: "Нумерология на името",
      description:
        "Вашето име носи фина вибрация, която отразява начина, по който се изразявате в света. Чрез нумерологията на името изследваме енергията зад вашата идентичност, глас и лично присъствие."
    }
  },
  {
    slug: "relationship-numbers",
    title: "Relationship Numbers",
    description:
      "Numbers can reveal the natural flow between two people, showing where harmony, growth, and understanding may arise. This insight supports more conscious communication and emotional balance.",
    bg: {
      title: "Числа във взаимоотношенията",
      description:
        "Числата могат да разкрият естествения поток между двама души и да покажат къде могат да възникнат хармония, растеж и разбиране. Това прозрение подкрепя по-осъзнато общуване и емоционален баланс."
    }
  },
  {
    slug: "decision-timing",
    title: "Decision Timing",
    description:
      "Numerology can offer a peaceful lens for choosing the right moment for important steps. It helps you align transitions, launches, and personal milestones with supportive cycles.",
    bg: {
      title: "Подходящ момент за решения",
      description:
        "Нумерологията може да предложи спокоен поглед при избора на правилния момент за важни стъпки. Тя помага да съгласувате преходи, начинания и лични етапи с подкрепящи цикли."
    }
  }
] as const;

export type NumerologyDetail = (typeof numerologyDetails)[number];

export function getNumerologyDetail(slug: string) {
  return numerologyDetails.find((detail) => detail.slug === slug);
}
