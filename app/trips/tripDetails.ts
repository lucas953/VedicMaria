export const tripDetails = [
  {
    slug: "spiritual-journeys",
    title: "Spiritual Journeys",
    description:
      "Travel becomes deeper when it is guided by meaning and inner intention. These journeys invite you to slow down, reconnect, and experience sacred places with an open heart."
  },
  {
    slug: "india-pilgrimages",
    title: "India Pilgrimages",
    description:
      "India offers ancient temples, holy rivers, and timeless traditions that awaken the spirit. Each pilgrimage is created to bring insight, devotion, and a quiet sense of transformation."
  },
  {
    slug: "retreats",
    title: "Retreats",
    description:
      "Retreats offer a peaceful space to pause, breathe, and return to yourself. Through gentle practices, sacred teachings, and supportive surroundings, you can restore balance from within."
  },
  {
    slug: "cultural-experiences",
    title: "Cultural Experiences",
    description:
      "Every journey carries the beauty of local traditions, rituals, food, music, and daily life. These experiences help you connect not only with a place, but with its living soul."
  },
  {
    slug: "personalized-trips",
    title: "Personalized Trips",
    description:
      "A personalized trip is shaped around your rhythm, interests, and spiritual needs. Whether you seek learning, healing, or quiet discovery, the journey is designed to feel meaningful and aligned."
  }
] as const;

export type TripDetail = (typeof tripDetails)[number];

export function getTripDetail(slug: string) {
  return tripDetails.find((detail) => detail.slug === slug);
}
