export const astrologyDetails = [
  {
    slug: "birth-chart-reading",
    title: "Birth Chart Reading",
    description:
      "Your birth chart is a sacred map of your soul's journey, showing your gifts, patterns, and life direction. Through Vedic astrology, we explore its wisdom with clarity, compassion, and respect for your path."
  },
  {
    slug: "career-purpose",
    title: "Career & Purpose",
    description:
      "Vedic astrology can reveal the natural talents and responsibilities you are here to develop. It offers gentle guidance for career choices, meaningful work, and a stronger connection to your life purpose."
  },
  {
    slug: "love-relationships",
    title: "Love & Relationships",
    description:
      "Relationships carry lessons of harmony, growth, and understanding. A Vedic reading can illuminate emotional patterns, compatibility, and the deeper needs that shape your connections."
  },
  {
    slug: "timing-life-cycles",
    title: "Timing & Life Cycles",
    description:
      "Every life moves through cycles of change, opportunity, and reflection. Vedic astrology helps you understand these periods so you can make decisions with patience and inner confidence."
  },
  {
    slug: "remedies-guidance",
    title: "Remedies & Guidance",
    description:
      "Vedic remedies offer simple, sacred ways to bring more balance into daily life. Through mantras, rituals, colors, gemstones, or mindful practices, they support peace, clarity, and alignment."
  }
] as const;

export type AstrologyDetail = (typeof astrologyDetails)[number];

export function getAstrologyDetail(slug: string) {
  return astrologyDetails.find((detail) => detail.slug === slug);
}
