export const heroThemes = [
  "home",
  "astrology",
  "consultation",
  "vastu",
  "numerology",
  "ayurveda",
  "trips",
  "events",
  "team",
  "contact",
  "booking"
] as const;

export type HeroTheme = (typeof heroThemes)[number];
