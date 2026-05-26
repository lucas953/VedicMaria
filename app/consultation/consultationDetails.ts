export const consultationDetails = [
  {
    slug: "personal-consultation",
    title: "Personal Consultation",
    description:
      "A personal consultation offers a calm space to explore your questions with depth and care. Together, we look at your life path, current challenges, and the guidance that can support your next steps."
  },
  {
    slug: "vedic-astrology-reading",
    title: "Vedic Astrology Reading",
    description:
      "Through your birth chart, we uncover patterns, strengths, and important life cycles. This reading brings clarity to your journey while honoring your free will and inner wisdom."
  },
  {
    slug: "relationship-guidance",
    title: "Relationship Guidance",
    description:
      "Relationships often mirror our deepest needs and lessons. A consultation can help you understand emotional dynamics, compatibility, and ways to create more harmony and compassion."
  },
  {
    slug: "career-life-direction",
    title: "Career & Life Direction",
    description:
      "When you feel uncertain about work or purpose, guidance can bring a clearer sense of direction. We explore your natural talents, timing, and the choices that feel most aligned with your path."
  },
  {
    slug: "remedies-follow-up",
    title: "Remedies & Follow-Up",
    description:
      "After the consultation, simple remedies or practices may be suggested to support balance and peace. Follow-up guidance helps you integrate the insights gently into your daily life."
  }
] as const;

export type ConsultationDetail = (typeof consultationDetails)[number];

export function getConsultationDetail(slug: string) {
  return consultationDetails.find((detail) => detail.slug === slug);
}
