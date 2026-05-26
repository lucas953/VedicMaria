export const tripDetails = [
  {
    slug: "spiritual-journeys",
    title: "Spiritual Journeys",
    description:
      "Travel becomes deeper when it is guided by meaning and inner intention. These journeys invite you to slow down, reconnect, and experience sacred places with an open heart.",
    bg: {
      title: "Духовни пътувания",
      description:
        "Пътуването става по-дълбоко, когато е водено от смисъл и вътрешно намерение. Тези пътувания ви канят да забавите темпото, да се свържете отново със себе си и да преживеете свещени места с отворено сърце."
    }
  },
  {
    slug: "india-pilgrimages",
    title: "India Pilgrimages",
    description:
      "India offers ancient temples, holy rivers, and timeless traditions that awaken the spirit. Each pilgrimage is created to bring insight, devotion, and a quiet sense of transformation.",
    bg: {
      title: "Поклоннически пътувания в Индия",
      description:
        "Индия предлага древни храмове, свещени реки и вечни традиции, които пробуждат духа. Всяко поклонническо пътуване е създадено да донесе прозрение, отдаденост и тихо усещане за трансформация."
    }
  },
  {
    slug: "retreats",
    title: "Retreats",
    description:
      "Retreats offer a peaceful space to pause, breathe, and return to yourself. Through gentle practices, sacred teachings, and supportive surroundings, you can restore balance from within.",
    bg: {
      title: "Ритрийти",
      description:
        "Ритрийтите предлагат спокойно пространство, в което да спрете, да дишате и да се върнете към себе си. Чрез нежни практики, свещени учения и подкрепяща среда можете да възстановите баланса отвътре."
    }
  },
  {
    slug: "cultural-experiences",
    title: "Cultural Experiences",
    description:
      "Every journey carries the beauty of local traditions, rituals, food, music, and daily life. These experiences help you connect not only with a place, but with its living soul.",
    bg: {
      title: "Културни преживявания",
      description:
        "Всяко пътуване носи красотата на местните традиции, ритуали, храна, музика и ежедневен живот. Тези преживявания ви помагат да се свържете не само с мястото, но и с неговата жива душа."
    }
  },
  {
    slug: "personalized-trips",
    title: "Personalized Trips",
    description:
      "A personalized trip is shaped around your rhythm, interests, and spiritual needs. Whether you seek learning, healing, or quiet discovery, the journey is designed to feel meaningful and aligned.",
    bg: {
      title: "Персонализирани пътувания",
      description:
        "Персонализираното пътуване се оформя около вашия ритъм, интереси и духовни потребности. Независимо дали търсите учене, изцеление или тихо откривателство, пътешествието е създадено да бъде смислено и съгласувано."
    }
  }
] as const;

export type TripDetail = (typeof tripDetails)[number];

export function getTripDetail(slug: string) {
  return tripDetails.find((detail) => detail.slug === slug);
}
