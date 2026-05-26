export const numerologyDetails = [
  {
    slug: "life-path-number",
    title: "Life Path Number",
    description:
      "Your Life Path Number reveals the deeper rhythm of your soul and the qualities you naturally carry. It offers gentle insight into your strengths, lessons, and the direction that feels most aligned."
  },
  {
    slug: "personal-year-cycle",
    title: "Personal Year Cycle",
    description:
      "Each year brings its own energy, inviting you to move, pause, begin, or complete. Your Personal Year Cycle helps you understand the season you are in and make choices with more calm and clarity."
  },
  {
    slug: "name-numerology",
    title: "Name Numerology",
    description:
      "Your name carries a subtle vibration that reflects how you express yourself in the world. Through name numerology, we explore the energy behind your identity, voice, and personal presence."
  },
  {
    slug: "relationship-numbers",
    title: "Relationship Numbers",
    description:
      "Numbers can reveal the natural flow between two people, showing where harmony, growth, and understanding may arise. This insight supports more conscious communication and emotional balance."
  },
  {
    slug: "decision-timing",
    title: "Decision Timing",
    description:
      "Numerology can offer a peaceful lens for choosing the right moment for important steps. It helps you align transitions, launches, and personal milestones with supportive cycles."
  }
] as const;

export type NumerologyDetail = (typeof numerologyDetails)[number];

export function getNumerologyDetail(slug: string) {
  return numerologyDetails.find((detail) => detail.slug === slug);
}
