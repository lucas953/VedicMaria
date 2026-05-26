export const ayurvedaDetails = [
  {
    slug: "body-constitution",
    title: "Body Constitution",
    description:
      "Ayurveda helps you understand your natural constitution, or dosha, and the rhythm that supports your well-being. This insight brings clarity to your body, mind, digestion, energy, and emotional balance."
  },
  {
    slug: "diet-digestion",
    title: "Diet & Digestion",
    description:
      "Food becomes medicine when it is chosen with awareness and care. Ayurvedic guidance supports better digestion, lighter energy, and a more harmonious relationship with your daily meals."
  },
  {
    slug: "daily-routine",
    title: "Daily Routine",
    description:
      "Simple daily rituals can gently restore balance and calm. Ayurveda offers nourishing routines for sleep, movement, self-care, and inner stability."
  },
  {
    slug: "seasonal-balance",
    title: "Seasonal Balance",
    description:
      "Each season brings different qualities that affect the body and mind. Ayurveda helps you adapt your food, habits, and lifestyle so you feel more grounded throughout the year."
  },
  {
    slug: "natural-remedies",
    title: "Natural Remedies",
    description:
      "Ayurvedic remedies use herbs, oils, and simple practices to support the body's natural intelligence. They are gentle tools for bringing comfort, balance, and renewed vitality."
  }
] as const;

export type AyurvedaDetail = (typeof ayurvedaDetails)[number];

export function getAyurvedaDetail(slug: string) {
  return ayurvedaDetails.find((detail) => detail.slug === slug);
}
