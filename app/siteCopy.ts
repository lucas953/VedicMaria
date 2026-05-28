const navPaths = {
  home: "/",
  astrology: "/vedic-astrology",
  numerology: "/numerology",
  consultation: "/consultation",
  vastu: "/vastu",
  ayurveda: "/ayurveda",
  trips: "/trips",
  events: "/upcoming-events",
  team: "/our-team",
  contact: "/contact"
};

const serviceImages = {
  astrology: "radial-gradient(circle at 35% 30%, #f8dd8b, #bd4b2f 45%, #5a2e21)",
  consultation: "linear-gradient(135deg, #f7e4b8, #d89a36 48%, #6f3d28)",
  vastu: "linear-gradient(135deg, #efe4c6, #8f8f4f 50%, #3f5636)",
  ayurveda: "radial-gradient(circle at 30% 25%, #f6d56f, #8d9b54 48%, #2f4a32)",
  trips: "linear-gradient(135deg, #f4c86f, #b8482f 47%, #244938)",
  events: "radial-gradient(circle at 70% 25%, #f7e4a6, #c95d38 42%, #53311f)"
};

export const copy = {
  en: {
    brand: {
      name: "Vedic Astrology",
      tagline: "Jyotish | Ayurveda | Vastu"
    },
    nav: [
      { label: "Home", href: navPaths.home },
      { label: "Vedic Astrology", href: navPaths.astrology },
      { label: "Numerology", href: navPaths.numerology },
      { label: "Consultation", href: navPaths.consultation },
      { label: "Vastu", href: navPaths.vastu },
      { label: "Ayurveda", href: navPaths.ayurveda },
      { label: "Trips", href: navPaths.trips },
      { label: "Upcoming Events", href: navPaths.events },
      { label: "Our Team", href: navPaths.team },
      { label: "Contact", href: navPaths.contact }
    ],
    contact: {
      email: "hello@vedicastrology.example",
      phone: "+1 (555) 019-8726",
      whatsapp: "+15550198726",
      location: "Online consultations worldwide, with in-person sessions by appointment"
    },
    common: {
      learnMore: "Learn more",
      registerInterest: "Register Interest",
      backToTeam: "Back to Our Team",
      backToNumerology: "Back to Numerology",
      backToVastu: "Back to Vastu",
      backToAyurveda: "Back to Ayurveda",
      backToTrips: "Back to Trips",
      backToAstrology: "Back to Vedic Astrology",
      backToConsultation: "Back to Consultation",
      bookMeeting: "Book a Meeting",
      bookSession: "Book a Session"
    },
    footer: {
      text:
        "Calm spiritual guidance rooted in Vedic astrology, Ayurveda, Vastu, and intentional living.",
      quickLinks: "Quick Links",
      contact: "Contact"
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      preferredService: "Preferred service",
      selectService: "Select a service",
      preferredDate: "Preferred date",
      message: "Message",
      submit: "Send Message",
      options: [
        "Online consultation",
        "In-person consultation",
        "Astrology guidance",
        "Vastu advice",
        "Ayurveda lifestyle guidance",
        "Spiritual coaching"
      ]
    },
    home: {
      hero: {
        eyebrow: "Traditional insight for modern wellbeing",
        title: "Discover your cosmic blueprint",
        description:
          "A calm, trustworthy space for astrology readings, consultation, Vastu harmony, Ayurveda lifestyle guidance, sacred journeys, and seasonal events.",
        primary: "Book a Consultation",
        secondary: "Explore Services"
      },
      founder: {
        eyebrow: "Founder",
        title: "Meet Maria",
        paragraphs: [
          "For over 25 years, I have worked as a Clinical Psychologist, listening deeply to the stories, emotions, and inner journeys that shape our lives. Yet, more than 15 years ago, I discovered that some stories are written in a far older language â€” the language of the stars.",
          "This calling led me to the profound wisdom of Vedic Astrology and to India, where I studied with some of the most respected teachers of our time, including K. N. Rao and A. V. Sundaram, as well as traditional Nadi astrologers who preserve ancient lineages of knowledge passed down through generations.",
          "To me, Vedic Astrology is the â€œEye of the Vedasâ€ â€” a sacred system that illuminates the deeper patterns of life, karma, purpose, and transformation. It is not only a tool for prediction, but a path toward greater self-awareness and inner alignment.",
          "I hold a diploma from the American Academy of Vedic Art and Science (AAA) and continue to deepen my studies as a lifelong student of this timeless tradition.",
          "Inspired by a desire to share this wisdom with others, I founded the Vedic Astrology Society in Bulgaria, where I organize lectures, gatherings, and educational events, inviting teachers, seekers, and inspiring voices from around the world.",
          "During our sessions, I bring together the grounded empathy of psychology, the spiritual clarity of Vedic Astrology, and the humility of a fellow seeker still learning from life itself. I am not simply here to read your chart â€” I am here to help you understand yourself more deeply and reconnect with the path your soul came here to walk.",
          "Together, we look beyond the surface and explore the beautiful and meaningful script of your life.",
          "See you under the stars,",
          "Maria"
        ]
      },
      servicesHeading: {
        eyebrow: "Offerings",
        title: "Guidance for life, home, body, and spirit",
        text: "Choose focused support or blend several traditions into one personal consultation."
      },
      eventHeading: {
        eyebrow: "Gatherings",
        title: "Upcoming Events",
        text: "Join intimate workshops and circles designed for reflection, learning, and renewal."
      },
      cta: {
        title: "Join our cosmic community",
        text:
          "Receive planetary updates, astrological insights, and exclusive guidance.",
        button: "Subscribe",
        placeholder: "Enter your email"
      },
      services: [
        {
          title: "Vedic Astrology",
          href: navPaths.astrology,
          description:
            "Birth chart insight, planetary guidance, compatibility, timing, and spiritual direction for conscious decisions.",
          image: serviceImages.astrology
        },
        {
          title: "Consultation",
          href: navPaths.consultation,
          description:
            "Personal online or in-person sessions blending astrology, Vastu, Ayurveda, and spiritual coaching.",
          image: serviceImages.consultation
        },
        {
          title: "Vastu",
          href: navPaths.vastu,
          description:
            "Home, office, land, and interior energy reviews with practical remedies for balanced living spaces.",
          image: serviceImages.vastu
        },
        {
          title: "Ayurveda",
          href: navPaths.ayurveda,
          description:
            "Dosha balance, food, routine, seasonal rhythm, and natural lifestyle guidance for daily wellbeing.",
          image: serviceImages.ayurveda
        },
        {
          title: "Trips",
          href: navPaths.trips,
          description:
            "Pilgrimage journeys, retreats, Ayurveda escapes, and custom group travel experiences.",
          image: serviceImages.trips
        },
        {
          title: "Upcoming Events",
          href: navPaths.events,
          description:
            "Seasonal workshops, meditation circles, astrology gatherings, and wellness learning experiences.",
          image: serviceImages.events
        }
      ]
    },
    events: [
      {
        date: "June 22, 2026",
        title: "New Moon Intention Circle",
        location: "Online",
        description:
          "A calm evening of Vedic timing, guided reflection, mantra, and intention setting for the lunar month ahead."
      },
      {
        date: "July 12, 2026",
        title: "Ayurveda Summer Balance Workshop",
        location: "Austin, TX",
        description:
          "Learn practical diet, daily rhythm, and cooling lifestyle practices for the warmer season."
      },
      {
        date: "August 9, 2026",
        title: "Vastu for Peaceful Homes",
        location: "Online",
        description:
          "A practical introduction to reading rooms, entrances, elements, and simple remedies for home harmony."
      }
    ],
    pages: {
      astrology: {
        hero: {
          eyebrow: "Jyotish guidance",
          title: "Vedic Astrology Readings",
          description:
            "Receive grounded insight into your birth chart, planetary cycles, relationships, purpose, and auspicious timing.",
          primary: "Request a Reading"
        },
        intro: [
          "Unlock the secrets of your soul with Vedic Astrology, the ancient \"Science of Light\" and so called the \"Eye of Vedas\" that goes far beyond your daily horoscope. Vedic Astrology (Jyotish) uses the Sidereal zodiac to map the actual positions of the stars, giving you a pin-point blueprint of your destiny.",
          "By diving into your Nakshatras (Moon signs), it uncovers your deepest emotional truths and hidden talents. Even more powerful is its precise timing system, known as Dashas, which acts as a personal GPS to show you exactly when your biggest life shifts will happen.",
          "It doesnâ€™t just predict your futureâ€”it empowers you to change it through karmic insights and practical remedies like mantras and gemstones. Step into alignment and discover the life you were truly born to live."
        ],
        heading: {
          eyebrow: "Clear readings with practical next steps",
          title: "Cosmic blueprint and karmic understanding",
          text: "Sessions are designed to feel compassionate, specific, and useful in real life."
        },
        cards: [
          ["Birth Chart Reading", "Understand your natal chart, strengths, karmic patterns, planetary influences, and deeper life themes."],
          ["Planetary Guidance", "Explore current transits, dashas, remedies, and timing for important decisions or transitions."],
          ["Career & Dharma", "Clarify vocation, natural gifts, work cycles, leadership style, and aligned professional choices."],
          ["Relationships & Compatibility", "Receive guidance for partnership, family dynamics, communication patterns, and compatibility."],
          ["Life Path", "Map recurring themes, spiritual lessons, and supportive practices for your personal path."],
          ["Spiritual Timing", "Choose favorable windows for ceremonies, launches, travel, home changes, and reflection."]
        ],
        cta: {
          title: "Request your personal reading",
          text:
            "Share your question, birth details, and preferred session style so we can prepare a focused consultation.",
          button: "Request a Reading"
        }
      },
      numerology: {
        hero: {
          eyebrow: "Sacred numbers",
          title: "Numerology Guidance",
          description:
            "Explore the symbolic meaning of your birth date, name patterns, personal year cycles, and the numbers shaping your life path.",
          primary: "Request Numerology Guidance"
        },
        heading: {
          eyebrow: "Numbers and rhythm",
          title: "Insight through your personal numbers",
          text:
            "Numerology sessions offer a grounded way to reflect on timing, personality patterns, relationships, and meaningful life choices."
        },
        cards: [
          ["Life Path Number", "Understand the core themes, gifts, and lessons carried by your date of birth."],
          ["Personal Year Cycle", "Explore the tone of your current year and the choices it supports."],
          ["Name Numerology", "Review the energetic pattern of names, initials, and personal expression."],
          ["Relationship Numbers", "Reflect on compatibility, communication, and shared rhythm through numerological patterns."],
          ["Decision Timing", "Use number cycles as an additional lens for planning transitions, launches, and personal milestones."]
        ],
        cta: {
          title: "Discover the wisdom in your numbers",
          text:
            "Share your birth date, name, and current question so we can prepare a meaningful numerology session.",
          button: "Request Guidance"
        }
      },
      consultation: {
        hero: {
          eyebrow: "Personal guidance",
          title: "Book a Consultation",
          description:
            "Choose a focused session or an integrated consultation across astrology, Vastu, Ayurveda, and spiritual coaching."
        },
        heading: {
          eyebrow: "Session types",
          title: "Support tailored to your question",
          text:
            "Bring a life decision, a wellness goal, a relationship question, or a space to harmonize."
        },
        cards: [
          ["Online Consultation", "A convenient video session for clients anywhere, with the same depth and preparation as in-person work."],
          ["In-person Consultation", "A private appointment for astrology, Vastu, Ayurveda lifestyle guidance, or integrated spiritual support."],
          ["Astrology Guidance", "Birth chart interpretation, planetary timing, relationship insight, and practical spiritual remedies."],
          ["Vastu Advice", "Personalized suggestions for your home, office, land, rooms, and energetic flow."],
          ["Ayurveda Lifestyle Guidance", "Dosha-aware food, routine, sleep, seasonal care, and sustainable daily wellbeing practices."],
          ["Spiritual Coaching", "Reflective support for purpose, transitions, practice, decision making, and inner steadiness."]
        ],
        form: {
          eyebrow: "Booking request",
          title: "Tell us what you need",
          text:
            "Send your preferred service and date. We will reply with availability and session details."
        }
      },
      booking: {
        hero: {
          eyebrow: "Book a session",
          title: "Choose your consultation time",
          description:
            "Schedule a calm, focused session for Vedic astrology, guidance, relationship insight, life direction, or follow-up support."
        },
        intro: {
          eyebrow: "Booking calendar",
          title: "Find a time that feels right",
          text:
            "Use the calendar below to choose the session length and available time. You will receive the meeting details after booking."
        }
      },
      vastu: {
        hero: {
          eyebrow: "Sacred space",
          title: "Vastu Shastra Services",
          description:
            "Bring harmony to homes, offices, land, and interiors with traditional Vastu insight and practical remedies.",
          primary: "Request Vastu Advice"
        },
        intro: [
          "Just as the \"Eye of the Vedas\" reveals the secrets of time, Vastu Shastra unveils the hidden geometry of space. It is the sacred art of Directional Alchemy, a silent language spoken between your home and the cosmos.",
          "By aligning the five Great Elementsâ€”Earth, Water, Fire, Air, and Etherâ€”within your walls, Vastu transforms a mere structure into a living, breathing sanctuary of power.",
          "It is the architecture of the soul, where the magnetic pulse of the Earth meets the ancient laws of the universe. When your environment is in resonance with the Great Void, the doors to prosperity, health, and spiritual clarity swing open. Do not just inhabit a spaceâ€”command the energy within it."
        ],
        heading: {
          eyebrow: "Space harmony",
          title: "A calmer relationship with your environment",
          text:
            "Vastu consultations focus on alignment, comfort, prosperity, and emotional ease in the places you use every day."
        },
        cards: [
          ["Home Vastu", "Assess entrances, rooms, element balance, sleeping areas, sacred spaces, and overall household flow."],
          ["Office Vastu", "Review workplace layout, desk placement, team zones, client areas, and prosperity-supportive design."],
          ["Land & Property Review", "Evaluate plot shape, orientation, surrounding influences, and energetic suitability before decisions."],
          ["Interior Energy Balance", "Refine color, placement, materials, light, movement, and the feeling of each room."],
          ["Remedies", "Receive practical, respectful remedies that support balance without requiring extreme renovation."]
        ],
        cta: {
          title: "Bring balance to your space",
          text:
            "Share your floor plan, questions, or property details and we will recommend the right consultation.",
          button: "Start a Vastu Request"
        }
      },
      ayurveda: {
        hero: {
          eyebrow: "Natural rhythm",
          title: "Ayurveda Wellness Guidance",
          description:
            "Support balance through dosha awareness, food choices, daily rhythm, seasonal care, and natural wellbeing practices.",
          primary: "Explore Ayurveda Guidance"
        },
        heading: {
          eyebrow: "Body and rhythm",
          title: "Small daily choices with lasting effect",
          text:
            "Ayurveda guidance is educational and lifestyle-focused, designed to help you feel more aligned in ordinary life."
        },
        cards: [
          ["Dosha Balance", "Understand your constitution and current imbalances with gentle, personalized lifestyle guidance."],
          ["Diet Guidance", "Explore foods, tastes, meal rhythms, and simple preparation habits that support natural balance."],
          ["Daily Routine", "Design a sustainable dinacharya for sleep, movement, reflection, nourishment, and steady energy."],
          ["Seasonal Routine", "Adapt food, activity, rest, and self-care to changing seasons and your local climate."],
          ["Lifestyle Consultation", "Receive practical guidance for stress, digestion, sleep, vitality, and emotional steadiness."],
          ["Natural Wellbeing", "Build a gentle path toward resilience using traditional wisdom and modern daily practicality."]
        ],
        cta: {
          title: "Create a routine that supports you",
          text:
            "Begin with a lifestyle consultation and receive recommendations tailored to your constitution and season.",
          button: "Request Guidance"
        }
      },
      trips: {
        hero: {
          eyebrow: "Spiritual and Wellness Trips",
          title: "Sacred travel",
          description:
            "Explore pilgrimage journeys, retreats, cultural tours, Ayurveda wellness trips, and custom group experiences.",
          primary: "Plan a Journey"
        },
        intro: [
          "Step into a Journey of Awakening. Beyond the maps of the modern world lie the ancient energy centers of the Earthâ€”sacred portals where the veil between the human and the divine is thinnest. We invite you to join us on a pilgrimage to Indiaâ€™s hidden temples and power spots, journeying into the heart of a land where every stone tells a story of the infinite.",
          "These are not merely trips; they are initiations. Whether you are retreating into the deep healing of a traditional Ayurveda sanctuary, or entering our sacred halls to master ancient Vedic arts through our specialized courses, you are stepping into a lineage of timeless wisdom. Our teachings are designed to awaken the dormant knowledge within you, guided by the rhythms of the soul and the secrets of the masters.",
          "The path is callingâ€”answer the invitation of the ancients and unlock the divine blueprint within."
        ],
        heading: {
          eyebrow: "Journeys",
          title: "Travel with intention and care",
          text:
            "Trips are shaped around reflection, learning, comfort, and a respectful relationship with place."
        },
        cards: [
          ["Pilgrimage Journeys", "Sacred travel experiences centered on temples, rituals, reflection, and meaningful cultural context."],
          ["Retreat Experiences", "Restorative group retreats with meditation, wellness practices, learning, and spacious time to integrate."],
          ["Cultural Tours", "Immersive journeys through heritage sites, spiritual traditions, cuisine, arts, and local wisdom."],
          ["Ayurveda Wellness Trips", "Travel designed around rest, Ayurvedic rhythm, seasonal care, and natural wellbeing practices."],
          ["Custom Group Trips", "Thoughtfully planned itineraries for families, communities, and private groups seeking sacred travel."]
        ],
        cta: {
          title: "Design a meaningful group experience",
          text: "Tell us your destination interests, group size, timeline, and wellness goals.",
          button: "Start Planning"
        }
      },
      upcoming: {
        hero: {
          eyebrow: "Workshops and circles",
          title: "Upcoming Events",
          description:
            "Join seasonal classes, meditation circles, Vedic astrology workshops, and wellness gatherings.",
          primary: "Register Interest"
        },
        heading: {
          eyebrow: "Calendar",
          title: "Placeholder Events",
          text:
            "These sample events can be replaced with the latest workshops, retreats, and community gatherings."
        }
      },
      team: {
        hero: {
          eyebrow: "Our team",
          title: "Meet the people behind the work",
          description:
            "A small, thoughtful team supporting astrology, education, consultation, retreats, and community events with care."
        },
        heading: {
          eyebrow: "Guides and collaborators",
          title: "Grounded support for your spiritual journey",
          text:
            "This page can grow with practitioner profiles, guest teachers, retreat collaborators, and event partners."
        },
        cards: [
          ["Maria", "Founder, clinical psychologist, and Vedic astrology practitioner bringing depth, empathy, and spiritual insight."],
          ["Guest Teachers", "Invited astrologers, Ayurveda practitioners, and spiritual educators for lectures and special gatherings."],
          ["Retreat Partners", "Trusted collaborators supporting sacred travel, event care, and group experiences."]
        ],
        members: [
          {
            slug: "maria",
            name: "Maria",
            role: "Founder | Clinical Psychologist | Vedic Astrologer",
            image: "/Maria.jpg",
            intro:
              "Maria combines over 25 years of clinical psychology experience with deep study of Vedic Astrology.",
            bio: [
              "Maria is a Clinical Psychologist with over 25 years of professional experience, bringing deep insight, empathy, and a profound understanding of human nature to her work.",
              "Her journey into astrology began more than 15 years ago, when a growing passion for this ancient symbolic language led her to explore its deeper spiritual and philosophical dimensions. She soon found her path in Vedic Astrology, a timeless tradition rooted in the rich wisdom of India.",
              "Maria's fascination with India's vast cultural and spiritual heritage inspired her to study with some of the great astrologers of our time, including K. N. Rao, one of the most respected figures in the field of Jyotish. She holds a diploma in Vedic Astrology from AAA Vedic Astrology University.",
              "Today, Maria is dedicated to sharing the wisdom of Vedic Astrology in a grounded, accessible, and meaningful way. She is currently creating a Vedic Astrology Society in Bulgaria, where she organizes regular lectures, educational events, and inspiring gatherings with knowledgeable guests and teachers from around the world.",
              "Through her unique combination of psychology and Vedic Astrology, Maria offers a compassionate approach that supports self-understanding, personal growth, and a deeper connection with life's greater patterns."
            ]
          },
          {
            slug: "paritosh-banerjee",
            name: "Prof. Paritosh Banerjee",
            role: "Vedic Numerology and Vastu",
            image: "/team-paritosh.png",
            intro:
              "A Vedic Numerology and Vastu specialist with over twenty years of international teaching and consulting experience.",
            bio: [
              "Prof. Paritosh Banerjee is a Vedic Numerology and Vastu Guru specialist with over twenty years of experience in consulting individual clients and organizations. He conducts Vastu Shastra courses in Russia, Ukraine, Poland, Denmark, Italy and other countries.",
              "Paritosh Banerjee is a leading lecturer and member of the Dhakuria Institute of Astrological Sciences, Kolkata, India. He holds a number of international certificates and awards such as Sankhattyo Bharati Awards, International Jyotish Vastu Guru Award, Jyotish-Vastu Padmasree Award and others.",
              "Prof. Banerjee has conducted six Vastu and Numerology courses for beginners and advanced level with Bulgarian participants in the last two years. During his visits to Bulgaria, he conducts lectures and personal consultations on Vastu and Numerology."
            ]
          },
          {
            slug: "venu-sasikumar",
            name: "Dr. Venu Sasikumar (BAMS, MD)",
            role: "Ayurveda",
            image: "/team-venu.jpg",
            intro:
              "An Ayurveda practitioner and lecturer integrating Panchakarma, Marma therapy, psychotherapy, and holistic healing.",
            bio: [
              "Dr. Venu Sasikumar is a prominent figure in the field of Ayurveda, known for his contributions as both a lecturer and an event organizer. He plays a key role in organizing major events that attract participants from all over the world.",
              "He holds a Bachelor of Arts in Ayurveda (BAMS), as well as a B.A. from Dr. M.G.R. Medical University, and a Master of Arts in Ayurveda (MD) from Rajiv Gandhi University of Health Sciences.",
              "Dr. Venu has been practicing Ayurveda for over 20 years, developing his own distinctive style of treatment that integrates Ayurveda, psychotherapy, Marma therapy, and energy healing. He specializes in Panchakarma and traditional massage therapies.",
              "His expertise in Ayurveda, especially Panchakarma and holistic treatments, is highly regarded, making him a sought-after instructor in the field. He has trained numerous Ayurvedic and Panchakarma practitioners both in India and internationally.",
              "Dr. Venu's holistic methods are extremely beneficial for patients suffering from physical and mental disorders. He specializes in the management of psychosomatic illnesses, using counselling and deep meditation techniques designed to work with old emotional traumas.",
              "As an expert in Tantra Therapy, Dr. Venu uses Tantric healing methods to enhance personal energy and promote holistic health through comprehensive, personalized strategies."
            ]
          },
          {
            slug: "arjun-chakraborty",
            name: "Arjun Chakraborty",
            role: "Vedic Astrology",
            image: "/team-arjun.jpg",
            intro:
              "A Vedic astrologer from Kolkata with nearly twenty-five years of experience teaching and practicing Jyotish.",
            bio: [
              "For nearly a quarter of a century, Prof. Arjun Chakraborty has been working in the field of Vedic astrology, known as Jyotish, and is already an established name in it.",
              "He was born in Calcutta and inherited the ancient knowledge of Jyotish from his uncle. He is a professor at the classical astrological school Hatibagan Tole, teaches at the Institute of Astrological Science, and is a member of the famous astrological organization Grahamitra Gems.",
              "For nearly 10 years, he has been traveling the world, giving lectures, training beginners and advanced lovers of Vedic astrology.",
              "He inherited his profession and vocation from his uncle, a famous astrologer for his time in Calcutta. Vedic astrology is a teaching that is traditionally and often passed down within the family in India. This is how the secrets and sacredness of knowledge are preserved.",
              "Arjun Chakraborty has visited Bulgaria several times at the invitation of the Bulgarian Association for Vedic Astrology and the East-West Indological Foundation. He has given lectures and trainings on Vedic astrology not only in Bulgaria, but also in Lithuania, Latvia, Estonia, Kazakhstan, and Russia."
            ]
          }
        ]
      },
      contact: {
        hero: {
          eyebrow: "Contact",
          title: "Begin a conversation",
          description:
            "Send a note about your consultation, reading, Vastu review, Ayurveda guidance, trip, or event interest."
        },
        heading: {
          eyebrow: "Reach out",
          title: "We would love to hear from you",
          location: "Location"
        }
      }
    }
  },
  bg: {
    brand: {
      name: "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° ÐÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
      tagline: "Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ | ÐÑŽÑ€Ð²ÐµÐ´Ð° | Ð’Ð°ÑÑ‚Ñƒ"
    },
    nav: [
      { label: "ÐÐ°Ñ‡Ð°Ð»Ð¾", href: navPaths.home },
      { label: "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ", href: navPaths.astrology },
      { label: "ÐÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ", href: navPaths.numerology },
      { label: "ÐšÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ", href: navPaths.consultation },
      { label: "Ð’Ð°ÑÑ‚Ñƒ", href: navPaths.vastu },
      { label: "ÐÑŽÑ€Ð²ÐµÐ´Ð°", href: navPaths.ayurveda },
      { label: "ÐŸÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ", href: navPaths.trips },
      { label: "ÐŸÑ€ÐµÐ´ÑÑ‚Ð¾ÑÑ‰Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ", href: navPaths.events },
      { label: "ÐÐ°ÑˆÐ¸ÑÑ‚ ÐµÐºÐ¸Ð¿", href: navPaths.team },
      { label: "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚", href: navPaths.contact }
    ],
    contact: {
      email: "hello@vedicastrology.example",
      phone: "+1 (555) 019-8726",
      whatsapp: "+15550198726",
      location: "ÐžÐ½Ð»Ð°Ð¹Ð½ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ð¸ Ð¿Ð¾ Ñ†ÐµÐ»Ð¸Ñ ÑÐ²ÑÑ‚ Ð¸ Ð¿Ñ€Ð¸ÑÑŠÑÑ‚Ð²ÐµÐ½Ð¸ ÑÑ€ÐµÑ‰Ð¸ Ñ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»Ð½Ð° ÑƒÐ³Ð¾Ð²Ð¾Ñ€ÐºÐ°"
    },
    common: {
      learnMore: "ÐÐ°ÑƒÑ‡ÐµÑ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ",
      registerInterest: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑ",
      backToTeam: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ ÐµÐºÐ¸Ð¿Ð°",
      backToNumerology: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
      backToVastu: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ Ð’Ð°ÑÑ‚Ñƒ",
      backToAyurveda: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ ÐÑŽÑ€Ð²ÐµÐ´Ð°",
      backToTrips: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ",
      backToAstrology: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
      backToConsultation: "ÐÐ°Ð·Ð°Ð´ ÐºÑŠÐ¼ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
      bookMeeting: "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÑÑ€ÐµÑ‰Ð°",
      bookSession: "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÑÐµÑÐ¸Ñ"
    },
    footer: {
      text:
        "Ð¡Ð¿Ð¾ÐºÐ¾Ð¹Ð½Ð¾ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¾ Ð½Ð°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ, Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¾ Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, ÐÑŽÑ€Ð²ÐµÐ´Ð°, Ð’Ð°ÑÑ‚Ñƒ Ð¸ Ð¾ÑÑŠÐ·Ð½Ð°Ñ‚Ð¸Ñ Ð½Ð°Ñ‡Ð¸Ð½ Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚.",
      quickLinks: "Ð‘ÑŠÑ€Ð·Ð¸ Ð²Ñ€ÑŠÐ·ÐºÐ¸",
      contact: "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚"
    },
    form: {
      name: "Ð˜Ð¼Ðµ",
      email: "Ð˜Ð¼ÐµÐ¹Ð»",
      phone: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½",
      preferredService: "ÐŸÑ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð° ÑƒÑÐ»ÑƒÐ³Ð°",
      selectService: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÑƒÑÐ»ÑƒÐ³Ð°",
      preferredDate: "ÐŸÑ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð° Ð´Ð°Ñ‚Ð°",
      message: "Ð¡ÑŠÐ¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
      submit: "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚Ð¸ ÑÑŠÐ¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
      options: [
        "ÐžÐ½Ð»Ð°Ð¹Ð½ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
        "ÐŸÑ€Ð¸ÑÑŠÑÑ‚Ð²ÐµÐ½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
        "ÐÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¾ Ð½Ð°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ",
        "Ð’Ð°ÑÑ‚Ñƒ ÑÑŠÐ²ÐµÑ‚",
        "ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° Ð½Ð°Ñ‡Ð¸Ð½ Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚",
        "Ð”ÑƒÑ…Ð¾Ð²ÐµÐ½ ÐºÐ¾ÑƒÑ‡Ð¸Ð½Ð³"
      ]
    },
    home: {
      hero: {
        eyebrow: "Ð¢Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¾ Ð·Ð½Ð°Ð½Ð¸Ðµ Ð·Ð° ÑÑŠÐ²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾ Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ",
        title: "ÐžÑ‚ÐºÑ€Ð¸Ð¹Ñ‚Ðµ ÑÐ²Ð¾Ñ ÐºÐ¾ÑÐ¼Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿Ð»Ð°Ð½",
        description:
          "Ð¡Ð¿Ð¾ÐºÐ¾Ð¹Ð½Ð¾ Ð¸ Ð´Ð¾Ð²ÐµÑ€ÐµÐ½Ð¾ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾ Ð·Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð¸, ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ð¸, Ð’Ð°ÑÑ‚Ñƒ Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸, ÑÐ²ÐµÑ‰ÐµÐ½Ð¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ Ð¸ ÑÐµÐ·Ð¾Ð½Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ.",
        primary: "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
        secondary: "Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹Ñ‚Ðµ ÑƒÑÐ»ÑƒÐ³Ð¸Ñ‚Ðµ"
      },
      founder: {
        eyebrow: "ÐžÑÐ½Ð¾Ð²Ð°Ñ‚ÐµÐ»",
        title: "Ð—Ð°Ð¿Ð¾Ð·Ð½Ð°Ð¹Ñ‚Ðµ ÑÐµ Ñ ÐœÐ°Ñ€Ð¸Ñ",
        paragraphs: [
          "ÐŸÐ¾Ð²ÐµÑ‡Ðµ Ð¾Ñ‚ 25 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ñ€Ð°Ð±Ð¾Ñ‚Ñ ÐºÐ°Ñ‚Ð¾ ÐºÐ»Ð¸Ð½Ð¸Ñ‡ÐµÐ½ Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³, Ð²ÑÐ»ÑƒÑˆÐ²Ð°Ð¹ÐºÐ¸ ÑÐµ Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¾ Ð² Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸Ñ‚Ðµ, ÐµÐ¼Ð¾Ñ†Ð¸Ð¸Ñ‚Ðµ Ð¸ Ð²ÑŠÑ‚Ñ€ÐµÑˆÐ½Ð¸Ñ‚Ðµ Ð¿ÑŠÑ‚ÐµÑˆÐµÑÑ‚Ð²Ð¸Ñ, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¾Ñ„Ð¾Ñ€Ð¼ÑÑ‚ Ð¶Ð¸Ð²Ð¾Ñ‚Ð° Ð½Ð¸. ÐÐ¾ Ð¿Ñ€ÐµÐ´Ð¸ Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð¾Ñ‚ 15 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¾Ñ‚ÐºÑ€Ð¸Ñ…, Ñ‡Ðµ Ð½ÑÐºÐ¾Ð¸ Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸ ÑÐ° Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ð¸ Ð½Ð° Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ð¾-Ð´Ñ€ÐµÐ²ÐµÐ½ ÐµÐ·Ð¸Ðº â€” ÐµÐ·Ð¸ÐºÐ° Ð½Ð° Ð·Ð²ÐµÐ·Ð´Ð¸Ñ‚Ðµ.",
          "Ð¢Ð¾Ð²Ð° Ð¿Ñ€Ð¸Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¼Ðµ Ð¾Ñ‚Ð²ÐµÐ´Ðµ ÐºÑŠÐ¼ Ð´ÑŠÐ»Ð±Ð¾ÐºÐ°Ñ‚Ð° Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚ Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ ÐºÑŠÐ¼ Ð˜Ð½Ð´Ð¸Ñ, ÐºÑŠÐ´ÐµÑ‚Ð¾ ÑƒÑ‡Ð¸Ñ… Ð¿Ñ€Ð¸ ÐµÐ´Ð½Ð¸ Ð¾Ñ‚ Ð½Ð°Ð¹-ÑƒÐ²Ð°Ð¶Ð°Ð²Ð°Ð½Ð¸Ñ‚Ðµ ÑƒÑ‡Ð¸Ñ‚ÐµÐ»Ð¸ Ð½Ð° Ð½Ð°ÑˆÐµÑ‚Ð¾ Ð²Ñ€ÐµÐ¼Ðµ, Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ðš. Ð. Ð Ð°Ð¾ Ð¸ Ð. Ð’. Ð¡ÑƒÐ½Ð´Ð°Ñ€Ð°Ð¼, ÐºÐ°ÐºÑ‚Ð¾ Ð¸ Ð¿Ñ€Ð¸ Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¸ ÐÐ°Ð´Ð¸ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð·Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¿Ð°Ð·ÑÑ‚ Ð´Ñ€ÐµÐ²Ð½Ð¸ Ð»Ð¸Ð½Ð¸Ð¸ Ð½Ð° Ð·Ð½Ð°Ð½Ð¸Ðµ, Ð¿Ñ€ÐµÐ´Ð°Ð²Ð°Ð½Ð¸ Ð¿Ñ€ÐµÐ· Ð¿Ð¾ÐºÐ¾Ð»ÐµÐ½Ð¸ÑÑ‚Ð°.",
          "Ð—Ð° Ð¼ÐµÐ½ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ðµ â€žÐžÐºÐ¾Ñ‚Ð¾ Ð½Ð° Ð’ÐµÐ´Ð¸Ñ‚Ðµâ€œ â€” ÑÐ²ÐµÑ‰ÐµÐ½Ð° ÑÐ¸ÑÑ‚ÐµÐ¼Ð°, ÐºÐ¾ÑÑ‚Ð¾ Ð¾ÑÐ²ÐµÑ‚ÑÐ²Ð° Ð¿Ð¾-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¸Ñ‚Ðµ Ð¼Ð¾Ð´ÐµÐ»Ð¸ Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚Ð°, ÐºÐ°Ñ€Ð¼Ð°Ñ‚Ð°, Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð¸ Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑ‚Ð°. Ð¢Ñ Ð½Ðµ Ðµ ÑÐ°Ð¼Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ Ð·Ð° Ð¿Ñ€ÐµÐ´ÑÐºÐ°Ð·Ð°Ð½Ð¸Ðµ, Ð° Ð¿ÑŠÑ‚ ÐºÑŠÐ¼ Ð¿Ð¾-Ð³Ð¾Ð»ÑÐ¼Ð¾ ÑÐµÐ±ÐµÐ¿Ð¾Ð·Ð½Ð°Ð½Ð¸Ðµ Ð¸ Ð²ÑŠÑ‚Ñ€ÐµÑˆÐ½Ð¾ ÑÑŠÐ·Ð²ÑƒÑ‡Ð¸Ðµ.",
          "ÐŸÑ€Ð¸Ñ‚ÐµÐ¶Ð°Ð²Ð°Ð¼ Ð´Ð¸Ð¿Ð»Ð¾Ð¼Ð° Ð¾Ñ‚ American Academy of Vedic Art and Science (AAA) Ð¸ Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶Ð°Ð²Ð°Ð¼ Ð´Ð° Ð·Ð°Ð´ÑŠÐ»Ð±Ð¾Ñ‡Ð°Ð²Ð°Ð¼ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸ÐµÑ‚Ð¾ ÑÐ¸ ÐºÐ°Ñ‚Ð¾ Ð²ÐµÑ‡ÐµÐ½ ÑƒÑ‡ÐµÐ½Ð¸Ðº Ð½Ð° Ñ‚Ð°Ð·Ð¸ Ð±ÐµÐ·Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð° Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ñ.",
          "Ð’Ð´ÑŠÑ…Ð½Ð¾Ð²ÐµÐ½Ð° Ð¾Ñ‚ Ð¶ÐµÐ»Ð°Ð½Ð¸ÐµÑ‚Ð¾ Ð´Ð° ÑÐ¿Ð¾Ð´ÐµÐ»ÑÐ¼ Ñ‚Ð°Ð·Ð¸ Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚ Ñ Ð´Ñ€ÑƒÐ³Ð¸Ñ‚Ðµ, Ð¾ÑÐ½Ð¾Ð²Ð°Ñ… ÐžÐ±Ñ‰ÐµÑÑ‚Ð²Ð¾Ñ‚Ð¾ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð² Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ, ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¸Ñ€Ð°Ð¼ Ð»ÐµÐºÑ†Ð¸Ð¸, ÑÑ€ÐµÑ‰Ð¸ Ð¸ Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ, ÐºÐ°Ð½ÐµÐ¹ÐºÐ¸ ÑƒÑ‡Ð¸Ñ‚ÐµÐ»Ð¸, Ñ‚ÑŠÑ€ÑÐµÑ‰Ð¸ Ñ…Ð¾Ñ€Ð° Ð¸ Ð²Ð´ÑŠÑ…Ð½Ð¾Ð²ÑÐ²Ð°Ñ‰Ð¸ Ð³Ð»Ð°ÑÐ¾Ð²Ðµ Ð¾Ñ‚ Ñ†ÑÐ» ÑÐ²ÑÑ‚.",
          "ÐŸÐ¾ Ð²Ñ€ÐµÐ¼Ðµ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ‚Ðµ ÑÐµÑÐ¸Ð¸ ÑÑŠÑ‡ÐµÑ‚Ð°Ð²Ð°Ð¼ Ð·Ð°Ð·ÐµÐ¼ÐµÐ½Ð°Ñ‚Ð° ÐµÐ¼Ð¿Ð°Ñ‚Ð¸Ñ Ð½Ð° Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³Ð¸ÑÑ‚Ð°, Ð´ÑƒÑ…Ð¾Ð²Ð½Ð°Ñ‚Ð° ÑÑÐ½Ð¾Ñ‚Ð° Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ ÑÐ¼Ð¸Ñ€ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð½Ð° ÑÐ¿ÑŠÑ‚Ð½Ð¸Ðº Ð² Ñ‚ÑŠÑ€ÑÐµÐ½ÐµÑ‚Ð¾, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð²ÑÐµ Ð¾Ñ‰Ðµ ÑÐµ ÑƒÑ‡Ð¸ Ð¾Ñ‚ ÑÐ°Ð¼Ð¸Ñ Ð¶Ð¸Ð²Ð¾Ñ‚. ÐÐµ ÑÑŠÐ¼ Ñ‚ÑƒÐº Ð¿Ñ€Ð¾ÑÑ‚Ð¾, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ñ‡ÐµÑ‚Ð° Ð²Ð°ÑˆÐ°Ñ‚Ð° ÐºÐ°Ñ€Ñ‚Ð° â€” Ñ‚ÑƒÐº ÑÑŠÐ¼, Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½Ð° Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÑÐµÐ±Ðµ ÑÐ¸ Ð¿Ð¾-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¾ Ð¸ Ð´Ð° ÑÐµ ÑÐ²ÑŠÑ€Ð¶ÐµÑ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ñ Ð¿ÑŠÑ‚Ñ, Ð¿Ð¾ ÐºÐ¾Ð¹Ñ‚Ð¾ Ð´ÑƒÑˆÐ°Ñ‚Ð° Ð²Ð¸ Ðµ Ð´Ð¾ÑˆÐ»Ð° Ð´Ð° Ð²ÑŠÑ€Ð²Ð¸.",
          "Ð—Ð°ÐµÐ´Ð½Ð¾ Ð¿Ð¾Ð³Ð»ÐµÐ¶Ð´Ð°Ð¼Ðµ Ð¾Ñ‚Ð²ÑŠÐ´ Ð¿Ð¾Ð²ÑŠÑ€Ñ…Ð½Ð¾ÑÑ‚Ñ‚Ð° Ð¸ Ð¸Ð·ÑÐ»ÐµÐ´Ð²Ð°Ð¼Ðµ ÐºÑ€Ð°ÑÐ¸Ð²Ð¸Ñ Ð¸ ÑÐ¼Ð¸ÑÐ»ÐµÐ½ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¹ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ Ð¶Ð¸Ð²Ð¾Ñ‚.",
          "Ð©Ðµ ÑÐµ Ð²Ð¸Ð´Ð¸Ð¼ Ð¿Ð¾Ð´ Ð·Ð²ÐµÐ·Ð´Ð¸Ñ‚Ðµ,",
          "ÐœÐ°Ñ€Ð¸Ñ"
        ]
      },
      servicesHeading: {
        eyebrow: "Ð£ÑÐ»ÑƒÐ³Ð¸",
        title: "ÐÐ°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ Ð·Ð° Ð¶Ð¸Ð²Ð¾Ñ‚Ð°, Ð´Ð¾Ð¼Ð°, Ñ‚ÑÐ»Ð¾Ñ‚Ð¾ Ð¸ Ð´ÑƒÑ…Ð°",
        text: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ñ„Ð¾ÐºÑƒÑÐ¸Ñ€Ð°Ð½Ð° Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð° Ð¸Ð»Ð¸ ÑÑŠÑ‡ÐµÑ‚Ð°Ð¹Ñ‚Ðµ Ð½ÑÐºÐ¾Ð»ÐºÐ¾ Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¸ Ð² ÐµÐ´Ð½Ð° Ð»Ð¸Ñ‡Ð½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ."
      },
      eventHeading: {
        eyebrow: "Ð¡Ñ€ÐµÑ‰Ð¸",
        title: "ÐŸÑ€ÐµÐ´ÑÑ‚Ð¾ÑÑ‰Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ",
        text: "ÐŸÑ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½ÐµÑ‚Ðµ ÑÐµ ÐºÑŠÐ¼ ÐºÐ°Ð¼ÐµÑ€Ð½Ð¸ ÑÐµÐ¼Ð¸Ð½Ð°Ñ€Ð¸ Ð¸ ÐºÑ€ÑŠÐ³Ð¾Ð²Ðµ Ð·Ð° Ñ€Ð°Ð·Ð¼Ð¸ÑÑŠÐ», ÑƒÑ‡ÐµÐ½Ðµ Ð¸ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ."
      },
      cta: {
        title: "ÐŸÑ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½ÐµÑ‚Ðµ ÑÐµ ÐºÑŠÐ¼ Ð½Ð°ÑˆÐ°Ñ‚Ð° ÐºÐ¾ÑÐ¼Ð¸Ñ‡ÐµÑÐºÐ° Ð¾Ð±Ñ‰Ð½Ð¾ÑÑ‚",
        text:
          "ÐŸÐ¾Ð»ÑƒÑ‡Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð¿Ð»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¸ Ð½Ð¾Ð²Ð¸Ð½Ð¸, Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾Ð·Ñ€ÐµÐ½Ð¸Ñ Ð¸ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸.",
        button: "ÐÐ±Ð¾Ð½Ð¸Ñ€Ð°Ð½Ðµ",
        placeholder: "Ð’ÑŠÐ²ÐµÐ´ÐµÑ‚Ðµ Ð²Ð°ÑˆÐ¸Ñ Ð¸Ð¼ÐµÐ¹Ð»"
      },
      services: [
        {
          title: "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
          href: navPaths.astrology,
          description:
            "Ð Ð¾Ð¶Ð´ÐµÐ½Ð° ÐºÐ°Ñ€Ñ‚Ð°, Ð¿Ð»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸, ÑÑŠÐ²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚, Ð±Ð»Ð°Ð³Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð½Ð¾ Ð²Ñ€ÐµÐ¼Ðµ Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð° Ð¿Ð¾ÑÐ¾ÐºÐ° Ð·Ð° Ð¾ÑÑŠÐ·Ð½Ð°Ñ‚Ð¸ Ñ€ÐµÑˆÐµÐ½Ð¸Ñ.",
          image: serviceImages.astrology
        },
        {
          title: "ÐšÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
          href: navPaths.consultation,
          description:
            "Ð›Ð¸Ñ‡Ð½Ð¸ Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¸ÑÑŠÑÑ‚Ð²ÐµÐ½Ð¸ ÑÑ€ÐµÑ‰Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÑŠÑ‡ÐµÑ‚Ð°Ð²Ð°Ñ‚ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð’Ð°ÑÑ‚Ñƒ, ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¸ Ð´ÑƒÑ…Ð¾Ð²ÐµÐ½ ÐºÐ¾ÑƒÑ‡Ð¸Ð½Ð³.",
          image: serviceImages.consultation
        },
        {
          title: "Ð’Ð°ÑÑ‚Ñƒ",
          href: navPaths.vastu,
          description:
            "ÐŸÑ€ÐµÐ³Ð»ÐµÐ´ Ð½Ð° Ð´Ð¾Ð¼, Ð¾Ñ„Ð¸Ñ, Ð¸Ð¼Ð¾Ñ‚ Ð¸ Ð²ÑŠÑ‚Ñ€ÐµÑˆÐ½Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ Ñ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð° Ð·Ð° Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð°.",
          image: serviceImages.vastu
        },
        {
          title: "ÐÑŽÑ€Ð²ÐµÐ´Ð°",
          href: navPaths.ayurveda,
          description:
            "Ð‘Ð°Ð»Ð°Ð½Ñ Ð½Ð° Ð´Ð¾ÑˆÐ¸Ñ‚Ðµ, Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ, Ð´Ð½ÐµÐ²ÐµÐ½ Ð¸ ÑÐµÐ·Ð¾Ð½ÐµÐ½ Ñ€Ð¸Ñ‚ÑŠÐ¼ Ð¸ ÐµÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¾Ñ‚Ð¾ Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ.",
          image: serviceImages.ayurveda
        },
        {
          title: "ÐŸÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ",
          href: navPaths.trips,
          description:
            "ÐŸÐ¾ÐºÐ»Ð¾Ð½Ð½Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ, Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ Ð¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¸.",
          image: serviceImages.trips
        },
        {
          title: "ÐŸÑ€ÐµÐ´ÑÑ‚Ð¾ÑÑ‰Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ",
          href: navPaths.events,
          description:
            "Ð¡ÐµÐ·Ð¾Ð½Ð½Ð¸ ÑÐµÐ¼Ð¸Ð½Ð°Ñ€Ð¸, Ð¼ÐµÐ´Ð¸Ñ‚Ð°Ñ‚Ð¸Ð²Ð½Ð¸ ÐºÑ€ÑŠÐ³Ð¾Ð²Ðµ, Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸ ÑÑ€ÐµÑ‰Ð¸ Ð¸ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ Ð·Ð° ÑƒÑ‡ÐµÐ½Ðµ Ð¸ Ð²Ð´ÑŠÑ…Ð½Ð¾Ð²ÐµÐ½Ð¸Ðµ.",
          image: serviceImages.events
        }
      ]
    },
    events: [
      {
        date: "22 ÑŽÐ½Ð¸ 2026",
        title: "ÐÐ¾Ð²Ð¾Ð»ÑƒÐ½ÐµÐ½ ÐºÑ€ÑŠÐ³ Ð·Ð° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ",
        location: "ÐžÐ½Ð»Ð°Ð¹Ð½",
        description:
          "Ð¡Ð¿Ð¾ÐºÐ¾Ð¹Ð½Ð° Ð²ÐµÑ‡ÐµÑ€ Ñ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ¾ Ð²Ñ€ÐµÐ¼Ðµ, Ð²Ð¾Ð´ÐµÐ½Ð° Ñ€ÐµÑ„Ð»ÐµÐºÑÐ¸Ñ, Ð¼Ð°Ð½Ñ‚Ñ€Ð° Ð¸ Ð·Ð°Ð´Ð°Ð²Ð°Ð½Ðµ Ð½Ð° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸Ðµ Ð·Ð° Ð»ÑƒÐ½Ð½Ð¸Ñ Ð¼ÐµÑÐµÑ†."
      },
      {
        date: "12 ÑŽÐ»Ð¸ 2026",
        title: "ÐÑŽÑ€Ð²ÐµÐ´Ð° ÑÐµÐ¼Ð¸Ð½Ð°Ñ€ Ð·Ð° Ð»ÐµÑ‚ÐµÐ½ Ð±Ð°Ð»Ð°Ð½Ñ",
        location: "Ð¡Ð¾Ñ„Ð¸Ñ, Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ",
        description:
          "ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ, Ð´Ð½ÐµÐ²ÐµÐ½ Ñ€Ð¸Ñ‚ÑŠÐ¼ Ð¸ Ð¾Ñ…Ð»Ð°Ð¶Ð´Ð°Ñ‰Ð¸ Ð½Ð°Ð²Ð¸Ñ†Ð¸ Ð¿Ñ€ÐµÐ· Ñ‚Ð¾Ð¿Ð»Ð¸Ñ ÑÐµÐ·Ð¾Ð½."
      },
      {
        date: "9 Ð°Ð²Ð³ÑƒÑÑ‚ 2026",
        title: "Ð’Ð°ÑÑ‚Ñƒ Ð·Ð° ÑÐ¿Ð¾ÐºÐ¾ÐµÐ½ Ð´Ð¾Ð¼",
        location: "ÐžÐ½Ð»Ð°Ð¹Ð½",
        description:
          "ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¾ Ð²ÑŠÐ²ÐµÐ´ÐµÐ½Ð¸Ðµ Ð² ÑÑ‚Ð°Ð¸, Ð²Ñ…Ð¾Ð´Ð¾Ð²Ðµ, ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð° Ð·Ð° Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ Ñƒ Ð´Ð¾Ð¼Ð°."
      }
    ],
    pages: {
      astrology: {
        hero: {
          eyebrow: "Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ Ð½Ð°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ",
          title: "ÐŸÑ€Ð¾Ñ‡Ð¸Ñ‚Ð¸ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
          description:
            "ÐŸÐ¾Ð»ÑƒÑ‡ÐµÑ‚Ðµ Ð·Ð°Ð·ÐµÐ¼ÐµÐ½Ð¾ Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ Ð·Ð° Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð°Ñ‚Ð° ÐºÐ°Ñ€Ñ‚Ð°, Ð¿Ð»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¸Ñ‚Ðµ Ñ†Ð¸ÐºÐ»Ð¸, Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸ÑÑ‚Ð°, Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð¸ Ð±Ð»Ð°Ð³Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð½Ð¾Ñ‚Ð¾ Ð²Ñ€ÐµÐ¼Ðµ.",
          primary: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚"
        },
        intro: [
          "ÐžÑ‚ÐºÐ»ÑŽÑ‡ÐµÑ‚Ðµ Ñ‚Ð°Ð¹Ð½Ð¸Ñ‚Ðµ Ð½Ð° Ð´ÑƒÑˆÐ°Ñ‚Ð° ÑÐ¸ Ñ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ - Ð´Ñ€ÐµÐ²Ð½Ð°Ñ‚Ð° \"ÐÐ°ÑƒÐºÐ° Ð·Ð° ÑÐ²ÐµÑ‚Ð»Ð¸Ð½Ð°Ñ‚Ð°\", Ð½Ð°Ñ€Ð¸Ñ‡Ð°Ð½Ð° Ð¾Ñ‰Ðµ \"ÐžÐºÐ¾Ñ‚Ð¾ Ð½Ð° Ð’ÐµÐ´Ð¸Ñ‚Ðµ\", ÐºÐ¾ÑÑ‚Ð¾ Ð¾Ñ‚Ð¸Ð²Ð° Ð´Ð°Ð»ÐµÑ‡ Ð¾Ñ‚Ð²ÑŠÐ´ ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¸Ñ Ñ…Ð¾Ñ€Ð¾ÑÐºÐ¾Ð¿. Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ (Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ) Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° ÑÐ¸Ð´ÐµÑ€Ð°Ð»Ð½Ð¸Ñ Ð·Ð¾Ð´Ð¸Ð°Ðº, Ð·Ð° Ð´Ð° ÐºÐ°Ñ€Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ñ€Ð° Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»Ð½Ð¸Ñ‚Ðµ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸ Ð½Ð° Ð·Ð²ÐµÐ·Ð´Ð¸Ñ‚Ðµ Ð¸ Ð´Ð° Ð²Ð¸ Ð´Ð°Ð´Ðµ Ð¿Ñ€ÐµÑ†Ð¸Ð·ÐµÐ½ Ð¿Ð»Ð°Ð½ Ð½Ð° Ð²Ð°ÑˆÐ°Ñ‚Ð° ÑÑŠÐ´Ð±Ð°.",
          "ÐšÐ°Ñ‚Ð¾ Ð½Ð°Ð²Ð»Ð¸Ð·Ð° Ð²ÑŠÐ² Ð²Ð°ÑˆÐ¸Ñ‚Ðµ ÐÐ°ÐºÑˆÐ°Ñ‚Ñ€Ð¸ (Ð»ÑƒÐ½Ð½Ð¸ Ð·Ð½Ð°Ñ†Ð¸), Ñ‚Ñ Ñ€Ð°Ð·ÐºÑ€Ð¸Ð²Ð° Ð½Ð°Ð¹-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¸Ñ‚Ðµ Ð²Ð¸ ÐµÐ¼Ð¾Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ð¸ÑÑ‚Ð¸Ð½Ð¸ Ð¸ ÑÐºÑ€Ð¸Ñ‚Ð¸ Ñ‚Ð°Ð»Ð°Ð½Ñ‚Ð¸. ÐžÑ‰Ðµ Ð¿Ð¾-ÑÐ¸Ð»Ð½Ð° Ðµ Ð½ÐµÐ¹Ð½Ð°Ñ‚Ð° Ñ‚Ð¾Ñ‡Ð½Ð° ÑÐ¸ÑÑ‚ÐµÐ¼Ð° Ð·Ð° Ð²Ñ€ÐµÐ¼ÐµÐ²Ð¾ Ñ€Ð°Ð·Ñ‡Ð¸Ñ‚Ð°Ð½Ðµ, Ð¸Ð·Ð²ÐµÑÑ‚Ð½Ð° ÐºÐ°Ñ‚Ð¾ Ð”Ð°ÑˆÐ¸, ÐºÐ¾ÑÑ‚Ð¾ Ð´ÐµÐ¹ÑÑ‚Ð²Ð° ÐºÐ°Ñ‚Ð¾ Ð»Ð¸Ñ‡ÐµÐ½ GPS Ð¸ Ð¿Ð¾ÐºÐ°Ð·Ð²Ð° ÐºÐ¾Ð³Ð° Ñ‰Ðµ Ð½Ð°ÑÑ‚ÑŠÐ¿ÑÑ‚ Ð½Ð°Ð¹-Ð³Ð¾Ð»ÐµÐ¼Ð¸Ñ‚Ðµ Ð¶Ð¸Ñ‚ÐµÐ¹ÑÐºÐ¸ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸.",
          "Ð¢Ñ Ð½Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¿Ñ€ÐµÐ´ÑÐºÐ°Ð·Ð²Ð° Ð±ÑŠÐ´ÐµÑ‰ÐµÑ‚Ð¾ Ð²Ð¸ - Ñ‚Ñ Ð²Ð¸ Ð´Ð°Ð²Ð° ÑÐ¸Ð»Ð° Ð´Ð° Ð³Ð¾ Ð¿Ñ€Ð¾Ð¼ÐµÐ½ÑÑ‚Ðµ Ñ‡Ñ€ÐµÐ· ÐºÐ°Ñ€Ð¼Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾Ð·Ñ€ÐµÐ½Ð¸Ñ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð° ÐºÐ°Ñ‚Ð¾ Ð¼Ð°Ð½Ñ‚Ñ€Ð¸ Ð¸ ÑÐºÑŠÐ¿Ð¾Ñ†ÐµÐ½Ð½Ð¸ ÐºÐ°Ð¼ÑŠÐ½Ð¸. Ð’Ð»ÐµÐ·Ñ‚Ðµ Ð² ÑÑŠÐ·Ð²ÑƒÑ‡Ð¸Ðµ ÑÑŠÑ ÑÐµÐ±Ðµ ÑÐ¸ Ð¸ Ð¾Ñ‚ÐºÑ€Ð¸Ð¹Ñ‚Ðµ Ð¶Ð¸Ð²Ð¾Ñ‚Ð°, Ð·Ð° ÐºÐ¾Ð¹Ñ‚Ð¾ Ð½Ð°Ð¸ÑÑ‚Ð¸Ð½Ð° ÑÑ‚Ðµ Ñ€Ð¾Ð´ÐµÐ½Ð¸."
        ],
        heading: {
          eyebrow: "Ð¯ÑÐ½Ð¸ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð¸ Ñ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ ÑÐ»ÐµÐ´Ð²Ð°Ñ‰Ð¸ ÑÑ‚ÑŠÐ¿ÐºÐ¸",
          title: "ÐšÐ¾ÑÐ¼Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿Ð»Ð°Ð½ Ð¸ ÐºÐ°Ñ€Ð¼Ð¸Ñ‡Ð½Ð¾ Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ",
          text: "Ð¡ÐµÑÐ¸Ð¸Ñ‚Ðµ ÑÐ° ÑÑŠÐ·Ð´Ð°Ð´ÐµÐ½Ð¸ Ð´Ð° Ð±ÑŠÐ´Ð°Ñ‚ ÑÑŠÑÑ‚Ñ€Ð°Ð´Ð°Ñ‚ÐµÐ»Ð½Ð¸, ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚Ð½Ð¸ Ð¸ Ð¿Ð¾Ð»ÐµÐ·Ð½Ð¸ Ð² Ñ€ÐµÐ°Ð»Ð½Ð¸Ñ Ð¶Ð¸Ð²Ð¾Ñ‚."
        },
        cards: [
          ["Ð Ð¾Ð¶Ð´ÐµÐ½Ð° ÐºÐ°Ñ€Ñ‚Ð°", "Ð Ð°Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÑÐ²Ð¾ÑÑ‚Ð° Ð½Ð°Ñ‚Ð°Ð»Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°, ÑÐ¸Ð»Ð½Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸, ÐºÐ°Ñ€Ð¼Ð¸Ñ‡Ð½Ð¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸, Ð¿Ð»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¸ Ð²Ð»Ð¸ÑÐ½Ð¸Ñ Ð¸ Ð¿Ð¾-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¸ Ð¶Ð¸Ñ‚ÐµÐ¹ÑÐºÐ¸ Ñ‚ÐµÐ¼Ð¸."],
          ["ÐŸÐ»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸", "Ð˜Ð·ÑÐ»ÐµÐ´Ð²Ð°Ð¹Ñ‚Ðµ Ñ‚ÐµÐºÑƒÑ‰Ð¸ Ñ‚Ñ€Ð°Ð½Ð·Ð¸Ñ‚Ð¸, Ð´Ð°ÑˆÐ¸, ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð° Ð¸ Ð²Ñ€ÐµÐ¼Ðµ Ð·Ð° Ð²Ð°Ð¶Ð½Ð¸ Ñ€ÐµÑˆÐµÐ½Ð¸Ñ Ð¸Ð»Ð¸ Ð¿Ñ€ÐµÑ…Ð¾Ð´Ð¸."],
          ["ÐšÐ°Ñ€Ð¸ÐµÑ€Ð° Ð¸ Ð´Ñ…Ð°Ñ€Ð¼Ð°", "Ð˜Ð·ÑÑÐ½ÐµÑ‚Ðµ Ð¿Ñ€Ð¸Ð·Ð²Ð°Ð½Ð¸Ðµ, ÐµÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½Ð¸ Ð´Ð°Ñ€Ð±Ð¸, Ð¿Ñ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ñ†Ð¸ÐºÐ»Ð¸, ÑÑ‚Ð¸Ð» Ð½Ð° Ð»Ð¸Ð´ÐµÑ€ÑÑ‚Ð²Ð¾ Ð¸ ÑÑŠÐ³Ð»Ð°ÑÑƒÐ²Ð°Ð½Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸."],
          ["Ð’Ñ€ÑŠÐ·ÐºÐ¸ Ð¸ ÑÑŠÐ²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚", "ÐŸÐ¾Ð»ÑƒÑ‡ÐµÑ‚Ðµ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° Ð¿Ð°Ñ€Ñ‚Ð½ÑŒÐ¾Ñ€ÑÑ‚Ð²Ð¾, ÑÐµÐ¼ÐµÐ¹Ð½Ð° Ð´Ð¸Ð½Ð°Ð¼Ð¸ÐºÐ°, Ð¼Ð¾Ð´ÐµÐ»Ð¸ Ð½Ð° Ð¾Ð±Ñ‰ÑƒÐ²Ð°Ð½Ðµ Ð¸ ÑÑŠÐ²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚."],
          ["Ð–Ð¸Ð·Ð½ÐµÐ½ Ð¿ÑŠÑ‚", "ÐšÐ°Ñ€Ñ‚Ð° Ð½Ð° Ð¿Ð¾Ð²Ñ‚Ð°Ñ€ÑÑ‰Ð¸ ÑÐµ Ñ‚ÐµÐ¼Ð¸, Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¸ ÑƒÑ€Ð¾Ñ†Ð¸ Ð¸ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿ÑÑ‰Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸ Ð·Ð° Ð»Ð¸Ñ‡Ð½Ð¸Ñ Ð¿ÑŠÑ‚."],
          ["Ð”ÑƒÑ…Ð¾Ð²Ð½Ð¾ Ð²Ñ€ÐµÐ¼Ðµ", "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð±Ð»Ð°Ð³Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð½Ð¸ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¸ Ð·Ð° Ñ†ÐµÑ€ÐµÐ¼Ð¾Ð½Ð¸Ð¸, Ð½Ð°Ñ‡Ð¸Ð½Ð°Ð½Ð¸Ñ, Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ, Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸ Ð² Ð´Ð¾Ð¼Ð° Ð¸ Ñ€ÐµÑ„Ð»ÐµÐºÑÐ¸Ñ."]
        ],
        cta: {
          title: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ ÑÐ²Ð¾Ñ Ð»Ð¸Ñ‡ÐµÐ½ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚",
          text:
            "Ð¡Ð¿Ð¾Ð´ÐµÐ»ÐµÑ‚Ðµ Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ° ÑÐ¸, Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð¸Ñ‚Ðµ Ð´Ð°Ð½Ð½Ð¸ Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ ÑÑ‚Ð¸Ð» Ð½Ð° ÑÐµÑÐ¸Ñ, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð²Ð¸Ð¼ Ñ„Ð¾ÐºÑƒÑÐ¸Ñ€Ð°Ð½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ.",
          button: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚"
        }
      },
      numerology: {
        hero: {
          eyebrow: "Ð¡Ð²ÐµÑ‰ÐµÐ½Ð¸ Ñ‡Ð¸ÑÐ»Ð°",
          title: "ÐÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸",
          description:
            "Ð˜Ð·ÑÐ»ÐµÐ´Ð²Ð°Ð¹Ñ‚Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð½Ð¾Ñ‚Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð½Ð° Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð°Ñ‚Ð° Ð´Ð°Ñ‚Ð°, Ð¼Ð¾Ð´ÐµÐ»Ð¸Ñ‚Ðµ Ð² Ð¸Ð¼ÐµÑ‚Ð¾, Ð»Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð³Ð¾Ð´Ð¸ÑˆÐ½Ð¸ Ñ†Ð¸ÐºÐ»Ð¸ Ð¸ Ñ‡Ð¸ÑÐ»Ð°Ñ‚Ð°, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¾Ñ„Ð¾Ñ€Ð¼ÑÑ‚ Ð¶Ð¸Ñ‚ÐµÐ¹ÑÐºÐ¸Ñ Ð²Ð¸ Ð¿ÑŠÑ‚.",
          primary: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ"
        },
        heading: {
          eyebrow: "Ð§Ð¸ÑÐ»Ð° Ð¸ Ñ€Ð¸Ñ‚ÑŠÐ¼",
          title: "ÐŸÑ€Ð¾Ð·Ñ€ÐµÐ½Ð¸Ðµ Ñ‡Ñ€ÐµÐ· Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð»Ð¸Ñ‡Ð½Ð¸ Ñ‡Ð¸ÑÐ»Ð°",
          text:
            "ÐÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ ÑÐµÑÐ¸Ð¸ Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°Ñ‚ Ð·Ð°Ð·ÐµÐ¼ÐµÐ½ Ð½Ð°Ñ‡Ð¸Ð½ Ð·Ð° Ñ€Ð°Ð·Ð¼Ð¸ÑÑŠÐ» Ð²ÑŠÑ€Ñ…Ñƒ Ð²Ñ€ÐµÐ¼Ðµ, Ð»Ð¸Ñ‡Ð½Ð¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸, Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ñ Ð¸ Ð²Ð°Ð¶Ð½Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸."
        },
        cards: [
          ["Ð§Ð¸ÑÐ»Ð¾ Ð½Ð° Ð¶Ð¸Ð·Ð½ÐµÐ½Ð¸Ñ Ð¿ÑŠÑ‚", "Ð Ð°Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¸Ñ‚Ðµ Ñ‚ÐµÐ¼Ð¸, Ð´Ð°Ñ€Ð±Ð¸ Ð¸ ÑƒÑ€Ð¾Ñ†Ð¸, Ð½Ð¾ÑÐµÐ½Ð¸ Ð¾Ñ‚ Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð°Ñ‚Ð° Ð²Ð¸ Ð´Ð°Ñ‚Ð°."],
          ["Ð›Ð¸Ñ‡Ð½Ð° Ð³Ð¾Ð´Ð¸ÑˆÐ½Ð° Ð²Ð¸Ð±Ñ€Ð°Ñ†Ð¸Ñ", "Ð˜Ð·ÑÐ»ÐµÐ´Ð²Ð°Ð¹Ñ‚Ðµ Ñ‚Ð¾Ð½Ð° Ð½Ð° Ñ‚ÐµÐºÑƒÑ‰Ð°Ñ‚Ð° Ð³Ð¾Ð´Ð¸Ð½Ð° Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸Ñ‚Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ Ñ‚Ñ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ñ."],
          ["ÐÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð½Ð° Ð¸Ð¼ÐµÑ‚Ð¾", "ÐŸÑ€ÐµÐ³Ð»ÐµÐ´Ð°Ð¹Ñ‚Ðµ ÐµÐ½ÐµÑ€Ð³Ð¸Ð¹Ð½Ð¸Ñ Ð¼Ð¾Ð´ÐµÐ» Ð½Ð° Ð¸Ð¼ÐµÐ½Ð°, Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸ Ð¸ Ð»Ð¸Ñ‡Ð½Ð¾Ñ‚Ð¾ Ð¸Ð·Ñ€Ð°Ð·ÑÐ²Ð°Ð½Ðµ."],
          ["Ð§Ð¸ÑÐ»Ð° Ð²ÑŠÐ² Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸ÑÑ‚Ð°", "Ð Ð°Ð·Ð¼Ð¸ÑÐ»ÐµÑ‚Ðµ Ð²ÑŠÑ€Ñ…Ñƒ ÑÑŠÐ²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚, Ð¾Ð±Ñ‰ÑƒÐ²Ð°Ð½Ðµ Ð¸ Ð¾Ð±Ñ‰ Ñ€Ð¸Ñ‚ÑŠÐ¼ Ñ‡Ñ€ÐµÐ· Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸."],
          ["Ð’Ñ€ÐµÐ¼Ðµ Ð·Ð° Ñ€ÐµÑˆÐµÐ½Ð¸Ñ", "Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¹Ñ‚Ðµ Ñ‡Ð¸ÑÐ»Ð¾Ð²Ð¸Ñ‚Ðµ Ñ†Ð¸ÐºÐ»Ð¸ ÐºÐ°Ñ‚Ð¾ Ð´Ð¾Ð¿ÑŠÐ»Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð° Ð¿ÐµÑ€ÑÐ¿ÐµÐºÑ‚Ð¸Ð²Ð° Ð·Ð° Ð¿Ñ€ÐµÑ…Ð¾Ð´Ð¸, Ð½Ð°Ñ‡Ð¸Ð½Ð°Ð½Ð¸Ñ Ð¸ Ð»Ð¸Ñ‡Ð½Ð¸ ÐµÑ‚Ð°Ð¿Ð¸."]
        ],
        cta: {
          title: "ÐžÑ‚ÐºÑ€Ð¸Ð¹Ñ‚Ðµ Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚Ñ‚Ð° Ð²ÑŠÐ² Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ñ‡Ð¸ÑÐ»Ð°",
          text:
            "Ð¡Ð¿Ð¾Ð´ÐµÐ»ÐµÑ‚Ðµ Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð°Ñ‚Ð° ÑÐ¸ Ð´Ð°Ñ‚Ð°, Ð¸Ð¼Ðµ Ð¸ Ñ‚ÐµÐºÑƒÑ‰ Ð²ÑŠÐ¿Ñ€Ð¾Ñ, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð²Ð¸Ð¼ ÑÐ¼Ð¸ÑÐ»ÐµÐ½Ð° Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð° ÑÐµÑÐ¸Ñ.",
          button: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð½Ð°ÑÐ¾ÐºÐ¸"
        }
      },
      consultation: {
        hero: {
          eyebrow: "Ð›Ð¸Ñ‡Ð½Ð¾ Ð½Ð°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ",
          title: "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
          description:
            "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ñ„Ð¾ÐºÑƒÑÐ¸Ñ€Ð°Ð½Ð° ÑÐµÑÐ¸Ñ Ð¸Ð»Ð¸ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð¸Ñ€Ð°Ð½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ Ð¿Ð¾ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð’Ð°ÑÑ‚Ñƒ, ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¸ Ð´ÑƒÑ…Ð¾Ð²ÐµÐ½ ÐºÐ¾ÑƒÑ‡Ð¸Ð½Ð³."
        },
        heading: {
          eyebrow: "Ð’Ð¸Ð´Ð¾Ð²Ðµ ÑÐµÑÐ¸Ð¸",
          title: "ÐŸÐ¾Ð´ÐºÑ€ÐµÐ¿Ð°, ÑÑŠÐ¾Ð±Ñ€Ð°Ð·ÐµÐ½Ð° Ñ Ð²Ð°ÑˆÐ¸Ñ Ð²ÑŠÐ¿Ñ€Ð¾Ñ",
          text:
            "Ð”Ð¾Ð½ÐµÑÐµÑ‚Ðµ Ð¶Ð¸Ñ‚ÐµÐ¹ÑÐºÐ¾ Ñ€ÐµÑˆÐµÐ½Ð¸Ðµ, Ñ†ÐµÐ» Ð·Ð° Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ, Ð²ÑŠÐ¿Ñ€Ð¾Ñ Ð·Ð° Ð²Ñ€ÑŠÐ·ÐºÐ° Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾, ÐºÐ¾ÐµÑ‚Ð¾ Ð¸ÑÐºÐ°Ñ‚Ðµ Ð´Ð° Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ð·Ð¸Ñ€Ð°Ñ‚Ðµ."
        },
        cards: [
          ["ÐžÐ½Ð»Ð°Ð¹Ð½ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ", "Ð£Ð´Ð¾Ð±Ð½Ð° Ð²Ð¸Ð´ÐµÐ¾ ÑÐµÑÐ¸Ñ Ð·Ð° ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¸ Ð½Ð°Ð²ÑÑÐºÑŠÐ´Ðµ, ÑÑŠÑ ÑÑŠÑ‰Ð°Ñ‚Ð° Ð´ÑŠÐ»Ð±Ð¾Ñ‡Ð¸Ð½Ð° Ð¸ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° ÐºÐ°Ñ‚Ð¾ Ð¿Ñ€Ð¸ÑÑŠÑÑ‚Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð°."],
          ["ÐŸÑ€Ð¸ÑÑŠÑÑ‚Ð²ÐµÐ½Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ", "Ð›Ð¸Ñ‡Ð½Ð° ÑÑ€ÐµÑ‰Ð° Ð·Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð’Ð°ÑÑ‚Ñƒ, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð¸Ð»Ð¸ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð¸Ñ€Ð°Ð½Ð° Ð´ÑƒÑ…Ð¾Ð²Ð½Ð° Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð°."],
          ["ÐÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð¾ Ð½Ð°Ð¿ÑŠÑ‚ÑÑ‚Ð²Ð¸Ðµ", "Ð¢ÑŠÐ»ÐºÑƒÐ²Ð°Ð½Ðµ Ð½Ð° Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð° ÐºÐ°Ñ€Ñ‚Ð°, Ð¿Ð»Ð°Ð½ÐµÑ‚Ð°Ñ€Ð½Ð¾ Ð²Ñ€ÐµÐ¼Ðµ, Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ñ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð°."],
          ["Ð’Ð°ÑÑ‚Ñƒ ÑÑŠÐ²ÐµÑ‚", "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ Ð¿Ñ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ Ð·Ð° Ð´Ð¾Ð¼, Ð¾Ñ„Ð¸Ñ, Ð¸Ð¼Ð¾Ñ‚, ÑÑ‚Ð°Ð¸ Ð¸ ÐµÐ½ÐµÑ€Ð³Ð¸ÐµÐ½ Ð¿Ð¾Ñ‚Ð¾Ðº."],
          ["ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸", "Ð¥Ñ€Ð°Ð½ÐµÐ½Ðµ, Ñ€ÐµÐ¶Ð¸Ð¼, ÑÑŠÐ½, ÑÐµÐ·Ð¾Ð½Ð½Ð° Ð³Ñ€Ð¸Ð¶Ð° Ð¸ ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð²Ð¸ ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ð´Ð¾ÑˆÐ¸Ñ‚Ðµ."],
          ["Ð”ÑƒÑ…Ð¾Ð²ÐµÐ½ ÐºÐ¾ÑƒÑ‡Ð¸Ð½Ð³", "Ð ÐµÑ„Ð»ÐµÐºÑ‚Ð¸Ð²Ð½Ð° Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð° Ð·Ð° Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ, Ð¿Ñ€ÐµÑ…Ð¾Ð´Ð¸, Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ°, Ñ€ÐµÑˆÐµÐ½Ð¸Ñ Ð¸ Ð²ÑŠÑ‚Ñ€ÐµÑˆÐ½Ð° ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð¾ÑÑ‚."]
        ],
        form: {
          eyebrow: "Ð—Ð°ÑÐ²ÐºÐ° Ð·Ð° Ñ‡Ð°Ñ",
          title: "Ð Ð°Ð·ÐºÐ°Ð¶ÐµÑ‚Ðµ Ð½Ð¸ Ð¾Ñ‚ ÐºÐ°ÐºÐ²Ð¾ Ð¸Ð¼Ð°Ñ‚Ðµ Ð½ÑƒÐ¶Ð´Ð°",
          text:
            "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚ÐµÑ‚Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð°Ñ‚Ð° ÑƒÑÐ»ÑƒÐ³Ð° Ð¸ Ð´Ð°Ñ‚Ð°. Ð©Ðµ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ð¼ Ñ Ð½Ð°Ð»Ð¸Ñ‡Ð½Ð¸ Ñ‡Ð°ÑÐ¾Ð²Ðµ Ð¸ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸ Ð·Ð° ÑÐµÑÐ¸ÑÑ‚Ð°."
        }
      },
      booking: {
        hero: {
          eyebrow: "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÑÐµÑÐ¸Ñ",
          title: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ñ‡Ð°Ñ Ð·Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
          description:
            "Ð—Ð°Ð¿Ð°Ð·ÐµÑ‚Ðµ ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½Ð° Ð¸ Ñ„Ð¾ÐºÑƒÑÐ¸Ñ€Ð°Ð½Ð° ÑÐµÑÐ¸Ñ Ð·Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð½Ð°ÑÐ¾ÐºÐ¸, Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ñ, Ð¶Ð¸Ñ‚ÐµÐ¹ÑÐºÐ° Ð¿Ð¾ÑÐ¾ÐºÐ° Ð¸Ð»Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð²Ð°Ñ‰Ð° Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð°."
        },
        intro: {
          eyebrow: "ÐšÐ°Ð»ÐµÐ½Ð´Ð°Ñ€ Ð·Ð° Ð·Ð°Ð¿Ð¸ÑÐ²Ð°Ð½Ðµ",
          title: "ÐÐ°Ð¼ÐµÑ€ÐµÑ‚Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð¾ Ð²Ñ€ÐµÐ¼Ðµ",
          text:
            "Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¹Ñ‚Ðµ ÐºÐ°Ð»ÐµÐ½Ð´Ð°Ñ€Ð° Ð¿Ð¾-Ð´Ð¾Ð»Ñƒ, Ð·Ð° Ð´Ð° Ð¸Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ð½Ð° ÑÐµÑÐ¸ÑÑ‚Ð° Ð¸ ÑÐ²Ð¾Ð±Ð¾Ð´ÐµÐ½ Ñ‡Ð°Ñ. Ð¡Ð»ÐµÐ´ Ð·Ð°Ð¿Ð¸ÑÐ²Ð°Ð½Ðµ Ñ‰Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸Ñ‚Ðµ Ð·Ð° ÑÑ€ÐµÑ‰Ð°Ñ‚Ð°."
        }
      },
      vastu: {
        hero: {
          eyebrow: "Ð¡Ð²ÐµÑ‰ÐµÐ½Ð¾ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾",
          title: "Ð£ÑÐ»ÑƒÐ³Ð¸ Ð¿Ð¾ Ð’Ð°ÑÑ‚Ñƒ Ð¨Ð°ÑÑ‚Ñ€Ð°",
          description:
            "Ð’Ð½ÐµÑÐµÑ‚Ðµ Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ Ð² Ð´Ð¾Ð¼Ð¾Ð²Ðµ, Ð¾Ñ„Ð¸ÑÐ¸, Ð·ÐµÐ¼Ñ Ð¸ Ð¸Ð½Ñ‚ÐµÑ€Ð¸Ð¾Ñ€Ð¸ Ñ‡Ñ€ÐµÐ· Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð° Ð’Ð°ÑÑ‚Ñƒ Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð°.",
          primary: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð’Ð°ÑÑ‚Ñƒ ÑÑŠÐ²ÐµÑ‚"
        },
        intro: [
          "Ð¢Ð¾Ñ‡Ð½Ð¾ ÐºÐ°ÐºÑ‚Ð¾ \"ÐžÐºÐ¾Ñ‚Ð¾ Ð½Ð° Ð’ÐµÐ´Ð¸Ñ‚Ðµ\" Ñ€Ð°Ð·ÐºÑ€Ð¸Ð²Ð° Ñ‚Ð°Ð¹Ð½Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ñ€ÐµÐ¼ÐµÑ‚Ð¾, Ð’Ð°ÑÑ‚Ñƒ Ð¨Ð°ÑÑ‚Ñ€Ð° Ñ€Ð°Ð·ÐºÑ€Ð¸Ð²Ð° ÑÐºÑ€Ð¸Ñ‚Ð°Ñ‚Ð° Ð³ÐµÐ¾Ð¼ÐµÑ‚Ñ€Ð¸Ñ Ð½Ð° Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾Ñ‚Ð¾. Ð¢Ð¾Ð²Ð° Ðµ ÑÐ²ÐµÑ‰ÐµÐ½Ð¾Ñ‚Ð¾ Ð¸Ð·ÐºÑƒÑÑ‚Ð²Ð¾ Ð½Ð° Ð°Ð»Ñ…Ð¸Ð¼Ð¸ÑÑ‚Ð° Ð½Ð° Ð¿Ð¾ÑÐ¾ÐºÐ¸Ñ‚Ðµ - Ñ‚Ð¸Ñ… ÐµÐ·Ð¸Ðº Ð¼ÐµÐ¶Ð´Ñƒ Ð²Ð°ÑˆÐ¸Ñ Ð´Ð¾Ð¼ Ð¸ ÐºÐ¾ÑÐ¼Ð¾ÑÐ°.",
          "ÐšÐ¾Ð³Ð°Ñ‚Ð¾ Ð¿ÐµÑ‚Ñ‚Ðµ Ð’ÐµÐ»Ð¸ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° - Ð—ÐµÐ¼Ñ, Ð’Ð¾Ð´Ð°, ÐžÐ³ÑŠÐ½, Ð’ÑŠÐ·Ð´ÑƒÑ… Ð¸ Ð•Ñ‚ÐµÑ€ - Ð±ÑŠÐ´Ð°Ñ‚ Ð¿Ð¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¸ Ð² Ñ…Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ Ð²ÑŠÐ² Ð²Ð°ÑˆÐµÑ‚Ð¾ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾, Ð’Ð°ÑÑ‚Ñƒ Ð¿Ñ€ÐµÐ²Ñ€ÑŠÑ‰Ð° Ð¾Ð±Ð¸ÐºÐ½Ð¾Ð²ÐµÐ½Ð°Ñ‚Ð° Ð¿Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ° Ð² Ð¶Ð¸Ð²Ð¾, Ð´Ð¸ÑˆÐ°Ñ‰Ð¾ ÑÐ²ÐµÑ‚Ð¸Ð»Ð¸Ñ‰Ðµ Ð½Ð° ÑÐ¸Ð»Ð°.",
          "Ð¢Ð¾Ð²Ð° Ðµ Ð°Ñ€Ñ…Ð¸Ñ‚ÐµÐºÑ‚ÑƒÑ€Ð°Ñ‚Ð° Ð½Ð° Ð´ÑƒÑˆÐ°Ñ‚Ð°, ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð¼Ð°Ð³Ð½Ð¸Ñ‚Ð½Ð¸ÑÑ‚ Ð¿ÑƒÐ»Ñ Ð½Ð° Ð—ÐµÐ¼ÑÑ‚Ð° ÑÑ€ÐµÑ‰Ð° Ð´Ñ€ÐµÐ²Ð½Ð¸Ñ‚Ðµ Ð·Ð°ÐºÐ¾Ð½Ð¸ Ð½Ð° Ð’ÑÐµÐ»ÐµÐ½Ð°Ñ‚Ð°. ÐšÐ¾Ð³Ð°Ñ‚Ð¾ ÑÑ€ÐµÐ´Ð°Ñ‚Ð° Ð²Ð¸ Ðµ Ð² Ñ€ÐµÐ·Ð¾Ð½Ð°Ð½Ñ Ñ Ð’ÐµÐ»Ð¸ÐºÐ°Ñ‚Ð° ÐŸÑƒÑÑ‚Ð¾Ñ‚Ð°, Ð²Ñ€Ð°Ñ‚Ð¸Ñ‚Ðµ ÐºÑŠÐ¼ Ð¿Ñ€Ð¾ÑÐ¿ÐµÑ€Ð¸Ñ‚ÐµÑ‚, Ð·Ð´Ñ€Ð°Ð²Ðµ Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð° ÑÑÐ½Ð¾Ñ‚Ð° ÑÐµ Ð¾Ñ‚Ð²Ð°Ñ€ÑÑ‚. ÐÐµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¾Ð±Ð¸Ñ‚Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾ - Ð¾Ð²Ð»Ð°Ð´ÐµÐ¹Ñ‚Ðµ ÐµÐ½ÐµÑ€Ð³Ð¸ÑÑ‚Ð° Ð² Ð½ÐµÐ³Ð¾."
        ],
        heading: {
          eyebrow: "Ð¥Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ Ð½Ð° Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾Ñ‚Ð¾",
          title: "ÐŸÐ¾-ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½Ð° Ð²Ñ€ÑŠÐ·ÐºÐ° ÑÑŠÑ ÑÑ€ÐµÐ´Ð°Ñ‚Ð°",
          text:
            "Ð’Ð°ÑÑ‚Ñƒ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ð¸Ñ‚Ðµ ÑÐµ Ñ„Ð¾ÐºÑƒÑÐ¸Ñ€Ð°Ñ‚ Ð²ÑŠÑ€Ñ…Ñƒ ÑÑŠÐ³Ð»Ð°ÑÑƒÐ²Ð°Ð½Ðµ, ÐºÐ¾Ð¼Ñ„Ð¾Ñ€Ñ‚, Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ Ð¸ ÐµÐ¼Ð¾Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð° Ð»ÐµÐºÐ¾Ñ‚Ð° Ð² ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð°."
        },
        cards: [
          ["Ð”Ð¾Ð¼Ð°ÑˆÐ½Ð¾ Ð’Ð°ÑÑ‚Ñƒ", "ÐžÑ†ÐµÐ½ÐºÐ° Ð½Ð° Ð²Ñ…Ð¾Ð´Ð¾Ð²Ðµ, ÑÑ‚Ð°Ð¸, Ð±Ð°Ð»Ð°Ð½Ñ Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ, Ð¼ÐµÑÑ‚Ð° Ð·Ð° ÑÑŠÐ½, ÑÐ²ÐµÑ‰ÐµÐ½Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð° Ð¸ Ñ†ÑÐ»Ð¾ÑÑ‚ÐµÐ½ Ð¿Ð¾Ñ‚Ð¾Ðº."],
          ["ÐžÑ„Ð¸Ñ Ð’Ð°ÑÑ‚Ñƒ", "ÐŸÑ€ÐµÐ³Ð»ÐµÐ´ Ð½Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð½Ð¾ Ñ€Ð°Ð·Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ, Ð±ÑŽÑ€Ð°, ÐµÐºÐ¸Ð¿Ð½Ð¸ Ð·Ð¾Ð½Ð¸, ÐºÐ»Ð¸ÐµÐ½Ñ‚ÑÐºÐ¸ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð° Ð¸ Ð´Ð¸Ð·Ð°Ð¹Ð½, Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿ÑÑ‰ Ð¿Ñ€Ð¾ÑÐ¿ÐµÑ€Ð¸Ñ‚ÐµÑ‚Ð°."],
          ["ÐŸÑ€ÐµÐ³Ð»ÐµÐ´ Ð½Ð° Ð·ÐµÐ¼Ñ Ð¸ Ð¸Ð¼Ð¾Ñ‚", "ÐžÑ†ÐµÐ½ÐºÐ° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ð°, Ð¾Ñ€Ð¸ÐµÐ½Ñ‚Ð°Ñ†Ð¸Ñ, Ð¾ÐºÐ¾Ð»Ð½Ð¸ Ð²Ð»Ð¸ÑÐ½Ð¸Ñ Ð¸ ÐµÐ½ÐµÑ€Ð³Ð¸Ð¹Ð½Ð° Ð¿Ñ€Ð¸Ð³Ð¾Ð´Ð½Ð¾ÑÑ‚ Ð¿Ñ€ÐµÐ´Ð¸ Ñ€ÐµÑˆÐµÐ½Ð¸Ñ."],
          ["Ð•Ð½ÐµÑ€Ð³Ð¸ÐµÐ½ Ð±Ð°Ð»Ð°Ð½Ñ Ð² Ð¸Ð½Ñ‚ÐµÑ€Ð¸Ð¾Ñ€Ð°", "Ð£Ñ‚Ð¾Ñ‡Ð½ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ñ†Ð²ÐµÑ‚Ð¾Ð²Ðµ, Ñ€Ð°Ð·Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ, Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð¸, ÑÐ²ÐµÑ‚Ð»Ð¸Ð½Ð°, Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ð¸ ÑƒÑÐµÑ‰Ð°Ð½Ðµ Ð²ÑŠÐ² Ð²ÑÑÐºÐ° ÑÑ‚Ð°Ñ."],
          ["Ð¡Ñ€ÐµÐ´ÑÑ‚Ð²Ð°", "ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ Ð¸ ÑƒÐ²Ð°Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð°, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿ÑÑ‚ Ð±Ð°Ð»Ð°Ð½ÑÐ° Ð±ÐµÐ· ÐºÑ€Ð°Ð¹Ð½Ð¸ Ñ€ÐµÐ¼Ð¾Ð½Ñ‚Ð¸."]
        ],
        cta: {
          title: "Ð’Ð½ÐµÑÐµÑ‚Ðµ Ð±Ð°Ð»Ð°Ð½Ñ Ð² Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾Ñ‚Ð¾ ÑÐ¸",
          text:
            "Ð¡Ð¿Ð¾Ð´ÐµÐ»ÐµÑ‚Ðµ Ð¿Ð»Ð°Ð½, Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ¸ Ð¸Ð»Ð¸ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸ Ð·Ð° Ð¸Ð¼Ð¾Ñ‚Ð° Ð¸ Ñ‰Ðµ Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑŠÑ‡Ð°Ð¼Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð°Ñ‚Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ.",
          button: "Ð—Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑ‚Ðµ Ð’Ð°ÑÑ‚Ñƒ Ð·Ð°ÑÐ²ÐºÐ°"
        }
      },
      ayurveda: {
        hero: {
          eyebrow: "Ð•ÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½ Ñ€Ð¸Ñ‚ÑŠÐ¼",
          title: "ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ",
          description:
            "ÐŸÐ¾Ð´ÐºÑ€ÐµÐ¿ÐµÑ‚Ðµ Ð±Ð°Ð»Ð°Ð½ÑÐ° Ñ‡Ñ€ÐµÐ· Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð´Ð¾ÑˆÐ¸Ñ‚Ðµ, Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ, Ð´Ð½ÐµÐ²ÐµÐ½ Ñ€Ð¸Ñ‚ÑŠÐ¼, ÑÐµÐ·Ð¾Ð½Ð½Ð° Ð³Ñ€Ð¸Ð¶Ð° Ð¸ ÐµÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸.",
          primary: "Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹Ñ‚Ðµ ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð½Ð°ÑÐ¾ÐºÐ¸"
        },
        heading: {
          eyebrow: "Ð¢ÑÐ»Ð¾ Ð¸ Ñ€Ð¸Ñ‚ÑŠÐ¼",
          title: "ÐœÐ°Ð»ÐºÐ¸ ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸ Ñ Ñ‚Ñ€Ð°ÐµÐ½ ÐµÑ„ÐµÐºÑ‚",
          text:
            "ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð½Ð°ÑÐ¾ÐºÐ¸ ÑÐ° Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð½Ð¸ Ð¸ Ð½Ð°ÑÐ¾Ñ‡ÐµÐ½Ð¸ ÐºÑŠÐ¼ Ð½Ð°Ñ‡Ð¸Ð½Ð° Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚, Ð·Ð° Ð´Ð° ÑÐµ Ñ‡ÑƒÐ²ÑÑ‚Ð²Ð°Ñ‚Ðµ Ð¿Ð¾-ÑÑŠÐ³Ð»Ð°ÑÑƒÐ²Ð°Ð½Ð¸ Ð² ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð¸ÐµÑ‚Ð¾."
        },
        cards: [
          ["Ð‘Ð°Ð»Ð°Ð½Ñ Ð½Ð° Ð´Ð¾ÑˆÐ¸Ñ‚Ðµ", "Ð Ð°Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÐºÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸ÑÑ‚Ð° Ð¸ Ñ‚ÐµÐºÑƒÑ‰Ð¸Ñ‚Ðµ Ð´Ð¸ÑÐ±Ð°Ð»Ð°Ð½ÑÐ¸ Ñ‡Ñ€ÐµÐ· Ð½ÐµÐ¶Ð½Ð¸, Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸."],
          ["Ð¥Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸", "Ð˜Ð·ÑÐ»ÐµÐ´Ð²Ð°Ð¹Ñ‚Ðµ Ñ…Ñ€Ð°Ð½Ð¸, Ð²ÐºÑƒÑÐ¾Ð²Ðµ, Ñ€Ð¸Ñ‚ÑŠÐ¼ Ð½Ð° Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ð¸ Ð½Ð°Ð²Ð¸Ñ†Ð¸ Ð·Ð° ÐµÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½ Ð±Ð°Ð»Ð°Ð½Ñ."],
          ["Ð”Ð½ÐµÐ²ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼", "Ð¡ÑŠÐ·Ð´Ð°Ð¹Ñ‚Ðµ ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð² Ð´Ð¸Ð½Ñ‡Ð°Ñ€Ñ Ð·Ð° ÑÑŠÐ½, Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ, Ñ€ÐµÑ„Ð»ÐµÐºÑÐ¸Ñ, Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ Ð¸ ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ."],
          ["Ð¡ÐµÐ·Ð¾Ð½ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼", "ÐÐ´Ð°Ð¿Ñ‚Ð¸Ñ€Ð°Ð¹Ñ‚Ðµ Ñ…Ñ€Ð°Ð½Ð°, Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚, Ð¿Ð¾Ñ‡Ð¸Ð²ÐºÐ° Ð¸ Ð³Ñ€Ð¸Ð¶Ð° ÐºÑŠÐ¼ ÑÐµÐ·Ð¾Ð½Ð¸Ñ‚Ðµ Ð¸ Ð¼ÐµÑÑ‚Ð½Ð¸Ñ ÐºÐ»Ð¸Ð¼Ð°Ñ‚."],
          ["ÐšÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ Ð·Ð° Ð½Ð°Ñ‡Ð¸Ð½ Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚", "ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸ Ð·Ð° ÑÑ‚Ñ€ÐµÑ, Ñ…Ñ€Ð°Ð½Ð¾ÑÐ¼Ð¸Ð»Ð°Ð½Ðµ, ÑÑŠÐ½, Ð¶Ð¸Ð·Ð½ÐµÐ½Ð¾ÑÑ‚ Ð¸ ÐµÐ¼Ð¾Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð° ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð²Ð¾ÑÑ‚."],
          ["Ð•ÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½Ð¾ Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ", "ÐÐµÐ¶ÐµÐ½ Ð¿ÑŠÑ‚ ÐºÑŠÐ¼ ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð²Ð¾ÑÑ‚ Ñ‡Ñ€ÐµÐ· Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð° Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð¾ÑÑ‚ Ð² ÑÑŠÐ²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¸Ñ Ð´ÐµÐ½."]
        ],
        cta: {
          title: "Ð¡ÑŠÐ·Ð´Ð°Ð¹Ñ‚Ðµ Ñ€ÐµÐ¶Ð¸Ð¼, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð²Ð¸ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ñ",
          text:
            "Ð—Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑ‚Ðµ Ñ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ Ð·Ð° Ð½Ð°Ñ‡Ð¸Ð½Ð° Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚ Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÑ‚Ðµ Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑŠÐºÐ¸ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ð²Ð°ÑˆÐ°Ñ‚Ð° ÐºÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ñ Ð¸ ÑÐµÐ·Ð¾Ð½.",
          button: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð½Ð°ÑÐ¾ÐºÐ¸"
        }
      },
      trips: {
        hero: {
          eyebrow: "Ð”ÑƒÑ…Ð¾Ð²Ð½Ð¸ Ð¸ ÑƒÐµÐ»Ð½ÐµÑ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ",
          title: "Ð¡Ð²ÐµÑ‰ÐµÐ½Ð¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ",
          description:
            "Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹Ñ‚Ðµ Ð¿Ð¾ÐºÐ»Ð¾Ð½Ð½Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ, Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸, ÐºÑƒÐ»Ñ‚ÑƒÑ€Ð½Ð¸ Ñ‚ÑƒÑ€Ð¾Ð²Ðµ, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¸ Ð¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ.",
          primary: "ÐŸÐ»Ð°Ð½Ð¸Ñ€Ð°Ð¹Ñ‚Ðµ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ðµ"
        },
        intro: [
          "ÐŸÑ€Ð¸ÑÑ‚ÑŠÐ¿ÐµÑ‚Ðµ ÐºÑŠÐ¼ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ñ€Ð¾Ð±ÑƒÐ¶Ð´Ð°Ð½ÐµÑ‚Ð¾. ÐžÑ‚Ð²ÑŠÐ´ ÐºÐ°Ñ€Ñ‚Ð¸Ñ‚Ðµ Ð½Ð° ÑÑŠÐ²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¸Ñ ÑÐ²ÑÑ‚ ÑÐµ Ð½Ð°Ð¼Ð¸Ñ€Ð°Ñ‚ Ð´Ñ€ÐµÐ²Ð½Ð¸Ñ‚Ðµ ÐµÐ½ÐµÑ€Ð³Ð¸Ð¹Ð½Ð¸ Ñ†ÐµÐ½Ñ‚Ñ€Ð¾Ð²Ðµ Ð½Ð° Ð—ÐµÐ¼ÑÑ‚Ð° - ÑÐ²ÐµÑ‰ÐµÐ½Ð¸ Ð¿Ð¾Ñ€Ñ‚Ð°Ð»Ð¸, ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð·Ð°Ð²ÐµÑÐ°Ñ‚Ð° Ð¼ÐµÐ¶Ð´Ñƒ Ñ‡Ð¾Ð²ÐµÑˆÐºÐ¾Ñ‚Ð¾ Ð¸ Ð±Ð¾Ð¶ÐµÑÑ‚Ð²ÐµÐ½Ð¾Ñ‚Ð¾ Ðµ Ð½Ð°Ð¹-Ñ‚ÑŠÐ½ÐºÐ°. ÐšÐ°Ð½Ð¸Ð¼ Ð²Ð¸ Ð´Ð° ÑÐµ Ð¿Ñ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½Ð¸Ñ‚Ðµ ÐºÑŠÐ¼ Ð¿Ð¾ÐºÐ»Ð¾Ð½Ð½Ð¸Ñ‡ÐµÑÐºÐ¾ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ðµ Ð´Ð¾ ÑÐºÑ€Ð¸Ñ‚Ð¸Ñ‚Ðµ Ñ…Ñ€Ð°Ð¼Ð¾Ð²Ðµ Ð¸ ÑÐ¸Ð»Ð¾Ð²Ð¸ Ð¼ÐµÑÑ‚Ð° Ð½Ð° Ð˜Ð½Ð´Ð¸Ñ, Ð½Ð°Ð²Ð»Ð¸Ð·Ð°Ð¹ÐºÐ¸ Ð² ÑÑŠÑ€Ñ†ÐµÑ‚Ð¾ Ð½Ð° Ð·ÐµÐ¼Ñ, ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð²ÑÐµÐºÐ¸ ÐºÐ°Ð¼ÑŠÐº Ñ€Ð°Ð·ÐºÐ°Ð·Ð²Ð° Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ñ Ð·Ð° Ð±ÐµÐ·ÐºÑ€Ð°Ñ.",
          "Ð¢Ð¾Ð²Ð° Ð½Ðµ ÑÐ° Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ; Ñ‚Ð¾Ð²Ð° ÑÐ° Ð¿Ð¾ÑÐ²ÐµÑ‰ÐµÐ½Ð¸Ñ. ÐÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð´Ð°Ð»Ð¸ ÑÐµ Ð¾Ñ‚Ñ‚ÐµÐ³Ð»ÑÑ‚Ðµ Ð² Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¾Ñ‚Ð¾ Ð»ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð½Ð° Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¾ ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¾ ÑÐ²ÐµÑ‚Ð¸Ð»Ð¸Ñ‰Ðµ, Ð¸Ð»Ð¸ Ð²Ð»Ð¸Ð·Ð°Ñ‚Ðµ Ð² Ð½Ð°ÑˆÐ¸Ñ‚Ðµ ÑÐ²ÐµÑ‰ÐµÐ½Ð¸ Ð·Ð°Ð»Ð¸, Ð·Ð° Ð´Ð° Ð¾Ð²Ð»Ð°Ð´ÐµÐµÑ‚Ðµ Ð´Ñ€ÐµÐ²Ð½Ð¸ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¸Ð·ÐºÑƒÑÑ‚Ð²Ð° Ñ‡Ñ€ÐµÐ· ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸Ñ‚Ðµ Ð½Ð¸ ÐºÑƒÑ€ÑÐ¾Ð²Ðµ, Ð²Ð¸Ðµ Ð¿Ñ€Ð¸ÑÑ‚ÑŠÐ¿Ð²Ð°Ñ‚Ðµ Ð² Ð»Ð¸Ð½Ð¸Ñ Ð½Ð° Ð±ÐµÐ·Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð° Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚. ÐÐ°ÑˆÐ¸Ñ‚Ðµ ÑƒÑ‡ÐµÐ½Ð¸Ñ ÑÐ° ÑÑŠÐ·Ð´Ð°Ð´ÐµÐ½Ð¸ Ð´Ð° ÑÑŠÐ±ÑƒÐ´ÑÑ‚ Ð´Ñ€ÐµÐ¼ÐµÑ‰Ð¾Ñ‚Ð¾ Ð·Ð½Ð°Ð½Ð¸Ðµ Ð²ÑŠÐ² Ð²Ð°Ñ, Ð²Ð¾Ð´ÐµÐ½Ð¸ Ð¾Ñ‚ Ñ€Ð¸Ñ‚Ð¼Ð¸Ñ‚Ðµ Ð½Ð° Ð´ÑƒÑˆÐ°Ñ‚Ð° Ð¸ Ñ‚Ð°Ð¹Ð½Ð¸Ñ‚Ðµ Ð½Ð° Ð¼Ð°Ð¹ÑÑ‚Ð¾Ñ€Ð¸Ñ‚Ðµ.",
          "ÐŸÑŠÑ‚ÑÑ‚ Ð²Ð¸ Ð¿Ñ€Ð¸Ð·Ð¾Ð²Ð°Ð²Ð° - Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€ÐµÑ‚Ðµ Ð½Ð° Ð¿Ð¾ÐºÐ°Ð½Ð°Ñ‚Ð° Ð½Ð° Ð´Ñ€ÐµÐ²Ð½Ð¸Ñ‚Ðµ Ð¸ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡ÐµÑ‚Ðµ Ð±Ð¾Ð¶ÐµÑÑ‚Ð²ÐµÐ½Ð¸Ñ Ð¿Ð»Ð°Ð½ Ð²ÑŠÑ‚Ñ€Ðµ Ð²ÑŠÐ² Ð²Ð°Ñ."
        ],
        heading: {
          eyebrow: "ÐŸÑŠÑ‚ÐµÑˆÐµÑÑ‚Ð²Ð¸Ñ",
          title: "ÐŸÑŠÑ‚ÑƒÐ²Ð°Ð½Ðµ Ñ Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸Ðµ Ð¸ Ð³Ñ€Ð¸Ð¶Ð°",
          text:
            "ÐŸÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸ÑÑ‚Ð° ÑÐµ Ð¾Ñ„Ð¾Ñ€Ð¼ÑÑ‚ Ð¾ÐºÐ¾Ð»Ð¾ Ñ€ÐµÑ„Ð»ÐµÐºÑÐ¸Ñ, ÑƒÑ‡ÐµÐ½Ðµ, ÐºÐ¾Ð¼Ñ„Ð¾Ñ€Ñ‚ Ð¸ ÑƒÐ²Ð°Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð° Ð²Ñ€ÑŠÐ·ÐºÐ° Ñ Ð¼ÑÑÑ‚Ð¾Ñ‚Ð¾."
        },
        cards: [
          ["ÐŸÐ¾ÐºÐ»Ð¾Ð½Ð½Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ", "Ð¡Ð²ÐµÑ‰ÐµÐ½Ð¸ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ Ñ Ñ…Ñ€Ð°Ð¼Ð¾Ð²Ðµ, Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð¸, Ñ€ÐµÑ„Ð»ÐµÐºÑÐ¸Ñ Ð¸ ÑÐ¼Ð¸ÑÐ»ÐµÐ½ ÐºÑƒÐ»Ñ‚ÑƒÑ€ÐµÐ½ ÐºÐ¾Ð½Ñ‚ÐµÐºÑÑ‚."],
          ["Ð ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ", "Ð’ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ñ‰Ð¸ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸ Ñ Ð¼ÐµÐ´Ð¸Ñ‚Ð°Ñ†Ð¸Ñ, Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸, ÑƒÑ‡ÐµÐ½Ðµ Ð¸ Ð²Ñ€ÐµÐ¼Ðµ Ð·Ð° Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ."],
          ["ÐšÑƒÐ»Ñ‚ÑƒÑ€Ð½Ð¸ Ñ‚ÑƒÑ€Ð¾Ð²Ðµ", "ÐŸÐ¾Ñ‚Ð°Ð¿ÑÐ½Ðµ Ð² Ð½Ð°ÑÐ»ÐµÐ´ÑÑ‚Ð²Ð¾, Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¸ Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¸, ÐºÑƒÑ…Ð½Ñ, Ð¸Ð·ÐºÑƒÑÑ‚Ð²Ð° Ð¸ Ð¼ÐµÑÑ‚Ð½Ð° Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚."],
          ["ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ ÑƒÐµÐ»Ð½ÐµÑ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ", "ÐŸÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ, ÑÑŠÐ·Ð´Ð°Ð´ÐµÐ½Ð¸ Ð¾ÐºÐ¾Ð»Ð¾ Ð¿Ð¾Ñ‡Ð¸Ð²ÐºÐ°, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡ÐµÐ½ Ñ€Ð¸Ñ‚ÑŠÐ¼, ÑÐµÐ·Ð¾Ð½Ð½Ð° Ð³Ñ€Ð¸Ð¶Ð° Ð¸ ÐµÑÑ‚ÐµÑÑ‚Ð²ÐµÐ½Ð¾ Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ."],
          ["ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ", "Ð’Ð½Ð¸Ð¼Ð°Ñ‚ÐµÐ»Ð½Ð¾ Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð°Ð½Ð¸ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚Ð¸ Ð·Ð° ÑÐµÐ¼ÐµÐ¹ÑÑ‚Ð²Ð°, Ð¾Ð±Ñ‰Ð½Ð¾ÑÑ‚Ð¸ Ð¸ Ñ‡Ð°ÑÑ‚Ð½Ð¸ Ð³Ñ€ÑƒÐ¿Ð¸."]
        ],
        cta: {
          title: "Ð¡ÑŠÐ·Ð´Ð°Ð¹Ñ‚Ðµ ÑÐ¼Ð¸ÑÐ»ÐµÐ½Ð¾ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¾ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ",
          text: "Ð¡Ð¿Ð¾Ð´ÐµÐ»ÐµÑ‚Ðµ Ð´ÐµÑÑ‚Ð¸Ð½Ð°Ñ†Ð¸Ñ, Ñ€Ð°Ð·Ð¼ÐµÑ€ Ð½Ð° Ð³Ñ€ÑƒÐ¿Ð°Ñ‚Ð°, ÑÑ€Ð¾ÐºÐ¾Ð²Ðµ Ð¸ Ñ†ÐµÐ»Ð¸ Ð·Ð° Ð±Ð»Ð°Ð³Ð¾Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ðµ.",
          button: "Ð—Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑ‚Ðµ Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð°Ð½Ðµ"
        }
      },
      upcoming: {
        hero: {
          eyebrow: "Ð¡ÐµÐ¼Ð¸Ð½Ð°Ñ€Ð¸ Ð¸ ÐºÑ€ÑŠÐ³Ð¾Ð²Ðµ",
          title: "ÐŸÑ€ÐµÐ´ÑÑ‚Ð¾ÑÑ‰Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ",
          description:
            "ÐŸÑ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½ÐµÑ‚Ðµ ÑÐµ ÐºÑŠÐ¼ ÑÐµÐ·Ð¾Ð½Ð½Ð¸ Ð·Ð°Ð½ÑÑ‚Ð¸Ñ, Ð¼ÐµÐ´Ð¸Ñ‚Ð°Ñ‚Ð¸Ð²Ð½Ð¸ ÐºÑ€ÑŠÐ³Ð¾Ð²Ðµ, ÑÐµÐ¼Ð¸Ð½Ð°Ñ€Ð¸ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ ÑƒÐµÐ»Ð½ÐµÑ ÑÑ€ÐµÑ‰Ð¸.",
          primary: "Ð—Ð°ÑÐ²ÐµÑ‚Ðµ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑ"
        },
        heading: {
          eyebrow: "ÐšÐ°Ð»ÐµÐ½Ð´Ð°Ñ€",
          title: "ÐŸÑ€Ð¸Ð¼ÐµÑ€Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ",
          text:
            "Ð¢ÐµÐ·Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ Ð¼Ð¾Ð³Ð°Ñ‚ Ð´Ð° Ð±ÑŠÐ´Ð°Ñ‚ Ð·Ð°Ð¼ÐµÐ½ÐµÐ½Ð¸ Ñ Ð°ÐºÑ‚ÑƒÐ°Ð»Ð½Ð¸ ÑÐµÐ¼Ð¸Ð½Ð°Ñ€Ð¸, Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸ Ð¸ Ð¾Ð±Ñ‰Ð½Ð¾ÑÑ‚Ð½Ð¸ ÑÑ€ÐµÑ‰Ð¸."
        }
      },
      team: {
        hero: {
          eyebrow: "ÐÐ°ÑˆÐ¸ÑÑ‚ ÐµÐºÐ¸Ð¿",
          title: "Ð—Ð°Ð¿Ð¾Ð·Ð½Ð°Ð¹Ñ‚Ðµ ÑÐµ Ñ Ñ…Ð¾Ñ€Ð°Ñ‚Ð° Ð·Ð°Ð´ Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚Ð°",
          description:
            "ÐœÐ°Ð»ÑŠÐº Ð¸ Ð²Ð½Ð¸Ð¼Ð°Ñ‚ÐµÐ»ÐµÐ½ ÐµÐºÐ¸Ð¿, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ñ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ðµ, ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ð¸, Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸ Ð¸ Ð¾Ð±Ñ‰Ð½Ð¾ÑÑ‚Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ Ñ Ð³Ñ€Ð¸Ð¶Ð°."
        },
        heading: {
          eyebrow: "Ð’Ð¾Ð´Ð°Ñ‡Ð¸ Ð¸ ÑÑŠÑ‚Ñ€ÑƒÐ´Ð½Ð¸Ñ†Ð¸",
          title: "Ð—Ð°Ð·ÐµÐ¼ÐµÐ½Ð° Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð° Ð·Ð° Ð²Ð°ÑˆÐ¸Ñ Ð´ÑƒÑ…Ð¾Ð²ÐµÐ½ Ð¿ÑŠÑ‚",
          text:
            "Ð¢Ð°Ð·Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð¼Ð¾Ð¶Ðµ Ð´Ð° ÑÐµ Ñ€Ð°Ð·Ð²Ð¸Ð²Ð° Ñ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ð¸ Ð½Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ†Ð¸, Ð³Ð¾ÑÑ‚-ÑƒÑ‡Ð¸Ñ‚ÐµÐ»Ð¸, Ð¿Ð°Ñ€Ñ‚Ð½ÑŒÐ¾Ñ€Ð¸ Ð·Ð° Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸ Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ."
        },
        cards: [
          ["ÐœÐ°Ñ€Ð¸Ñ", "ÐžÑÐ½Ð¾Ð²Ð°Ñ‚ÐµÐ», ÐºÐ»Ð¸Ð½Ð¸Ñ‡ÐµÐ½ Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ðº Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð½Ð¾ÑÐ¸ Ð´ÑŠÐ»Ð±Ð¾Ñ‡Ð¸Ð½Ð°, ÐµÐ¼Ð¿Ð°Ñ‚Ð¸Ñ Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð° Ð¿Ñ€Ð¾Ð½Ð¸Ñ†Ð°Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚."],
          ["Ð“Ð¾ÑÑ‚-ÑƒÑ‡Ð¸Ñ‚ÐµÐ»Ð¸", "ÐŸÐ¾ÐºÐ°Ð½ÐµÐ½Ð¸ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð·Ð¸, ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ†Ð¸ Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¸ Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð°Ñ‚ÐµÐ»Ð¸ Ð·Ð° Ð»ÐµÐºÑ†Ð¸Ð¸ Ð¸ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð½Ð¸ ÑÑ€ÐµÑ‰Ð¸."],
          ["ÐŸÐ°Ñ€Ñ‚Ð½ÑŒÐ¾Ñ€Ð¸ Ð·Ð° Ñ€ÐµÑ‚Ñ€Ð¸Ð¹Ñ‚Ð¸", "Ð”Ð¾Ð²ÐµÑ€ÐµÐ½Ð¸ ÑÑŠÑ‚Ñ€ÑƒÐ´Ð½Ð¸Ñ†Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿ÑÑ‚ ÑÐ²ÐµÑ‰ÐµÐ½Ð¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ð¸Ñ, Ð³Ñ€Ð¸Ð¶Ð° Ð·Ð° ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ Ð¸ Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ð¿Ñ€ÐµÐ¶Ð¸Ð²ÑÐ²Ð°Ð½Ð¸Ñ."]
        ],
        members: [
          {
            slug: "maria",
            name: "ÐœÐ°Ñ€Ð¸Ñ",
            role: "ÐžÑÐ½Ð¾Ð²Ð°Ñ‚ÐµÐ» | ÐšÐ»Ð¸Ð½Ð¸Ñ‡ÐµÐ½ Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³ | Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ¸ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³",
            image: "/Maria.jpg",
            intro:
              "ÐœÐ°Ñ€Ð¸Ñ ÑÑŠÑ‡ÐµÑ‚Ð°Ð²Ð° Ð½Ð°Ð´ 25 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¾Ð¿Ð¸Ñ‚ Ð² ÐºÐ»Ð¸Ð½Ð¸Ñ‡Ð½Ð°Ñ‚Ð° Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³Ð¸Ñ Ñ Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¾ Ð¸Ð·ÑƒÑ‡Ð°Ð²Ð°Ð½Ðµ Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ.",
            bio: [
              "ÐœÐ°Ñ€Ð¸Ñ Ðµ ÐºÐ»Ð¸Ð½Ð¸Ñ‡ÐµÐ½ Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³ Ñ Ð½Ð°Ð´ 25 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¿Ñ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»ÐµÐ½ Ð¾Ð¿Ð¸Ñ‚ Ð¸ Ð²Ð½Ð°ÑÑ Ð² Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚Ð° ÑÐ¸ Ð´ÑŠÐ»Ð±Ð¾ÐºÐ° Ð¿Ñ€Ð¾Ð½Ð¸Ñ†Ð°Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚, ÐµÐ¼Ð¿Ð°Ñ‚Ð¸Ñ Ð¸ Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ Ð·Ð° Ñ‡Ð¾Ð²ÐµÑˆÐºÐ°Ñ‚Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ð°.",
              "ÐŸÑŠÑ‚ÑÑ‚ Ð¸ ÐºÑŠÐ¼ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸ÑÑ‚Ð° Ð·Ð°Ð¿Ð¾Ñ‡Ð²Ð° Ð¿Ñ€ÐµÐ´Ð¸ Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð¾Ñ‚ 15 Ð³Ð¾Ð´Ð¸Ð½Ð¸, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ñ€Ð°ÑÑ‚ÑÑ‰Ð¸ÑÑ‚ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑ ÐºÑŠÐ¼ Ñ‚Ð¾Ð·Ð¸ Ð´Ñ€ÐµÐ²ÐµÐ½ ÑÐ¸Ð¼Ð²Ð¾Ð»ÐµÐ½ ÐµÐ·Ð¸Ðº Ñ Ð¾Ñ‚Ð²ÐµÐ¶Ð´Ð° ÐºÑŠÐ¼ Ð½ÐµÐ³Ð¾Ð²Ð¸Ñ‚Ðµ Ð¿Ð¾-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¸ Ð¸ Ñ„Ð¸Ð»Ð¾ÑÐ¾Ñ„ÑÐºÐ¸ Ð¸Ð·Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ. Ð¡ÐºÐ¾Ñ€Ð¾ Ñ‚Ñ Ð¾Ñ‚ÐºÑ€Ð¸Ð²Ð° ÑÐ²Ð¾Ñ Ð¿ÑŠÑ‚ Ð²ÑŠÐ² Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð²ÐµÑ‡Ð½Ð° Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ñ, Ð²ÐºÐ¾Ñ€ÐµÐ½ÐµÐ½Ð° Ð² Ð±Ð¾Ð³Ð°Ñ‚Ð°Ñ‚Ð° Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚ Ð½Ð° Ð˜Ð½Ð´Ð¸Ñ.",
              "ÐžÑ‡Ð°Ñ€Ð¾Ð²Ð°Ð½Ð¸ÐµÑ‚Ð¾ Ð½Ð° ÐœÐ°Ñ€Ð¸Ñ Ð¾Ñ‚ Ð¾Ð³Ñ€Ð¾Ð¼Ð½Ð¾Ñ‚Ð¾ ÐºÑƒÐ»Ñ‚ÑƒÑ€Ð½Ð¾ Ð¸ Ð´ÑƒÑ…Ð¾Ð²Ð½Ð¾ Ð½Ð°ÑÐ»ÐµÐ´ÑÑ‚Ð²Ð¾ Ð½Ð° Ð˜Ð½Ð´Ð¸Ñ Ñ Ð²Ð´ÑŠÑ…Ð½Ð¾Ð²ÑÐ²Ð° Ð´Ð° ÑƒÑ‡Ð¸ Ð¿Ñ€Ð¸ Ð½ÑÐºÐ¾Ð¸ Ð¾Ñ‚ Ð³Ð¾Ð»ÐµÐ¼Ð¸Ñ‚Ðµ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð·Ð¸ Ð½Ð° Ð½Ð°ÑˆÐµÑ‚Ð¾ Ð²Ñ€ÐµÐ¼Ðµ, Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ðš. Ð. Ð Ð°Ð¾. Ð¢Ñ Ð¿Ñ€Ð¸Ñ‚ÐµÐ¶Ð°Ð²Ð° Ð´Ð¸Ð¿Ð»Ð¾Ð¼Ð° Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¾Ñ‚ AAA Vedic Astrology University.",
              "Ð”Ð½ÐµÑ ÐœÐ°Ñ€Ð¸Ñ Ðµ Ð¿Ð¾ÑÐ²ÐµÑ‚ÐµÐ½Ð° Ð½Ð° Ñ‚Ð¾Ð²Ð° Ð´Ð° ÑÐ¿Ð¾Ð´ÐµÐ»Ñ Ð¼ÑŠÐ´Ñ€Ð¾ÑÑ‚Ñ‚Ð° Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¿Ð¾ Ð·Ð°Ð·ÐµÐ¼ÐµÐ½, Ð´Ð¾ÑÑ‚ÑŠÐ¿ÐµÐ½ Ð¸ ÑÐ¼Ð¸ÑÐ»ÐµÐ½ Ð½Ð°Ñ‡Ð¸Ð½. Ð’ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° Ñ‚Ñ ÑÑŠÐ·Ð´Ð°Ð²Ð° ÐžÐ±Ñ‰ÐµÑÑ‚Ð²Ð¾ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð² Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ, ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¸Ñ€Ð° Ñ€ÐµÐ´Ð¾Ð²Ð½Ð¸ Ð»ÐµÐºÑ†Ð¸Ð¸, Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ Ð¸ Ð²Ð´ÑŠÑ…Ð½Ð¾Ð²ÑÐ²Ð°Ñ‰Ð¸ ÑÑ€ÐµÑ‰Ð¸ Ñ Ð¾Ð¿Ð¸Ñ‚Ð½Ð¸ Ð³Ð¾ÑÑ‚Ð¸ Ð¸ ÑƒÑ‡Ð¸Ñ‚ÐµÐ»Ð¸ Ð¾Ñ‚ Ñ†ÑÐ» ÑÐ²ÑÑ‚.",
              "Ð§Ñ€ÐµÐ· ÑƒÐ½Ð¸ÐºÐ°Ð»Ð½Ð¾Ñ‚Ð¾ ÑÐ¸ ÑÑŠÑ‡ÐµÑ‚Ð°Ð½Ð¸Ðµ Ð¾Ñ‚ Ð¿ÑÐ¸Ñ…Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ ÐœÐ°Ñ€Ð¸Ñ Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð° ÑÑŠÑÑ‚Ñ€Ð°Ð´Ð°Ñ‚ÐµÐ»ÐµÐ½ Ð¿Ð¾Ð´Ñ…Ð¾Ð´, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ñ ÑÐµÐ±ÐµÐ¿Ð¾Ð·Ð½Ð°Ð½Ð¸ÐµÑ‚Ð¾, Ð»Ð¸Ñ‡Ð½Ð¾ÑÑ‚Ð½Ð¾Ñ‚Ð¾ Ð¸Ð·Ñ€Ð°ÑÑ‚Ð²Ð°Ð½Ðµ Ð¸ Ð¿Ð¾-Ð´ÑŠÐ»Ð±Ð¾ÐºÐ°Ñ‚Ð° Ð²Ñ€ÑŠÐ·ÐºÐ° Ñ Ð¿Ð¾-Ð³Ð¾Ð»ÐµÐ¼Ð¸Ñ‚Ðµ Ð¼Ð¾Ð´ÐµÐ»Ð¸ Ð½Ð° Ð¶Ð¸Ð²Ð¾Ñ‚Ð°."
            ]
          },
          {
            slug: "paritosh-banerjee",
            name: "ÐŸÑ€Ð¾Ñ„. ÐŸÐ°Ñ€Ð¸Ñ‚Ð¾Ñˆ Ð‘Ð°Ð½ÐµÑ€Ð´Ð¶Ð¸",
            role: "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ Ð’Ð°ÑÑ‚Ñƒ",
            image: "/team-paritosh.png",
            intro:
              "Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ Ð’Ð°ÑÑ‚Ñƒ Ñ Ð½Ð°Ð´ Ð´Ð²Ð°Ð´ÐµÑÐµÑ‚ Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¼ÐµÐ¶Ð´ÑƒÐ½Ð°Ñ€Ð¾Ð´ÐµÐ½ Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð°Ñ‚ÐµÐ»ÑÐºÐ¸ Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ð½Ñ‚ÑÐºÐ¸ Ð¾Ð¿Ð¸Ñ‚.",
            bio: [
              "ÐŸÑ€Ð¾Ñ„. ÐŸÐ°Ñ€Ð¸Ñ‚Ð¾Ñˆ Ð‘Ð°Ð½ÐµÑ€Ð´Ð¶Ð¸ Ðµ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ Ð’Ð°ÑÑ‚Ñƒ Ñ Ð½Ð°Ð´ Ð´Ð²Ð°Ð´ÐµÑÐµÑ‚ Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¾Ð¿Ð¸Ñ‚ Ð² ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð¸Ð½Ð´Ð¸Ð²Ð¸Ð´ÑƒÐ°Ð»Ð½Ð¸ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¸ Ð¸ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸Ð¸. ÐŸÑ€Ð¾Ð²ÐµÐ¶Ð´Ð° ÐºÑƒÑ€ÑÐ¾Ð²Ðµ Ð¿Ð¾ Ð’Ð°ÑÑ‚Ñƒ Ð¨Ð°ÑÑ‚Ñ€Ð° Ð² Ð ÑƒÑÐ¸Ñ, Ð£ÐºÑ€Ð°Ð¹Ð½Ð°, ÐŸÐ¾Ð»ÑˆÐ°, Ð”Ð°Ð½Ð¸Ñ, Ð˜Ñ‚Ð°Ð»Ð¸Ñ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸ Ð´ÑŠÑ€Ð¶Ð°Ð²Ð¸.",
              "ÐŸÐ°Ñ€Ð¸Ñ‚Ð¾Ñˆ Ð‘Ð°Ð½ÐµÑ€Ð´Ð¶Ð¸ Ðµ Ð²Ð¾Ð´ÐµÑ‰ Ð»ÐµÐºÑ‚Ð¾Ñ€ Ð¸ Ñ‡Ð»ÐµÐ½ Ð½Ð° Dhakuria Institute of Astrological Sciences, ÐšÐ°Ð»ÐºÑƒÑ‚Ð°, Ð˜Ð½Ð´Ð¸Ñ. ÐŸÑ€Ð¸Ñ‚ÐµÐ¶Ð°Ð²Ð° Ñ€ÐµÐ´Ð¸Ñ†Ð° Ð¼ÐµÐ¶Ð´ÑƒÐ½Ð°Ñ€Ð¾Ð´Ð½Ð¸ ÑÐµÑ€Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¸ Ð¸ Ð¾Ñ‚Ð»Ð¸Ñ‡Ð¸Ñ, ÑÑ€ÐµÐ´ ÐºÐ¾Ð¸Ñ‚Ð¾ Sankhattyo Bharati Awards, International Jyotish Vastu Guru Award, Jyotish-Vastu Padmasree Award Ð¸ Ð´Ñ€ÑƒÐ³Ð¸.",
              "ÐŸÑ€Ð¾Ñ„. Ð‘Ð°Ð½ÐµÑ€Ð´Ð¶Ð¸ Ðµ Ð¿Ñ€Ð¾Ð²ÐµÐ» ÑˆÐµÑÑ‚ ÐºÑƒÑ€ÑÐ° Ð¿Ð¾ Ð’Ð°ÑÑ‚Ñƒ Ð¸ Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð·Ð° Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‰Ð¸ Ð¸ Ð½Ð°Ð¿Ñ€ÐµÐ´Ð½Ð°Ð»Ð¸ Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÑƒÑ‡Ð°ÑÑ‚Ð½Ð¸Ñ†Ð¸ Ð¿Ñ€ÐµÐ· Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ‚Ðµ Ð´Ð²Ðµ Ð³Ð¾Ð´Ð¸Ð½Ð¸. ÐŸÑ€Ð¸ Ð¿Ð¾ÑÐµÑ‰ÐµÐ½Ð¸ÑÑ‚Ð° ÑÐ¸ Ð² Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ Ð¿Ñ€Ð¾Ð²ÐµÐ¶Ð´Ð° Ð»ÐµÐºÑ†Ð¸Ð¸ Ð¸ Ð»Ð¸Ñ‡Ð½Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ð¸ Ð¿Ð¾ Ð’Ð°ÑÑ‚Ñƒ Ð¸ Ð½ÑƒÐ¼ÐµÑ€Ð¾Ð»Ð¾Ð³Ð¸Ñ."
            ]
          },
          {
            slug: "venu-sasikumar",
            name: "Ð”-Ñ€ Ð’ÐµÐ½Ñƒ Ð¡Ð°ÑÐ¸ÐºÑƒÐ¼Ð°Ñ€ (BAMS, MD)",
            role: "ÐÑŽÑ€Ð²ÐµÐ´Ð°",
            image: "/team-venu.jpg",
            intro:
              "ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ðº Ð¸ Ð»ÐµÐºÑ‚Ð¾Ñ€, ÐºÐ¾Ð¹Ñ‚Ð¾ ÑÑŠÑ‡ÐµÑ‚Ð°Ð²Ð° ÐŸÐ°Ð½Ñ‡Ð°ÐºÐ°Ñ€Ð¼Ð°, ÐœÐ°Ñ€Ð¼Ð° Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ñ, Ð¿ÑÐ¸Ñ…Ð¾Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ñ Ð¸ Ñ…Ð¾Ð»Ð¸ÑÑ‚Ð¸Ñ‡Ð½Ð¾ Ð»ÐµÑ‡ÐµÐ½Ð¸Ðµ.",
            bio: [
              "Ð”-Ñ€ Ð’ÐµÐ½Ñƒ Ð¡Ð°ÑÐ¸ÐºÑƒÐ¼Ð°Ñ€ Ðµ Ð¸Ð·Ñ‚ÑŠÐºÐ½Ð°Ñ‚Ð° Ñ„Ð¸Ð³ÑƒÑ€Ð° Ð² Ð¾Ð±Ð»Ð°ÑÑ‚Ñ‚Ð° Ð½Ð° ÐÑŽÑ€Ð²ÐµÐ´Ð°, Ð¸Ð·Ð²ÐµÑÑ‚ÐµÐ½ Ñ Ð¿Ñ€Ð¸Ð½Ð¾ÑÐ° ÑÐ¸ ÐºÐ°Ñ‚Ð¾ Ð»ÐµÐºÑ‚Ð¾Ñ€ Ð¸ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ‚Ð¾Ñ€ Ð½Ð° ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ. Ð¢Ð¾Ð¹ Ð¸Ð³Ñ€Ð°Ðµ ÐºÐ»ÑŽÑ‡Ð¾Ð²Ð° Ñ€Ð¾Ð»Ñ Ð² Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð³Ð¾Ð»ÐµÐ¼Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¿Ñ€Ð¸Ð²Ð»Ð¸Ñ‡Ð°Ñ‚ ÑƒÑ‡Ð°ÑÑ‚Ð½Ð¸Ñ†Ð¸ Ð¾Ñ‚ Ñ†ÑÐ» ÑÐ²ÑÑ‚.",
              "ÐŸÑ€Ð¸Ñ‚ÐµÐ¶Ð°Ð²Ð° Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ð¾ ÐÑŽÑ€Ð²ÐµÐ´Ð° (BAMS), ÐºÐ°ÐºÑ‚Ð¾ Ð¸ ÑÑ‚ÐµÐ¿ÐµÐ½ Ð¾Ñ‚ Dr. M.G.R. Medical University Ð¸ Ð¼Ð°Ð³Ð¸ÑÑ‚ÑŠÑ€ÑÐºÐ° ÑÑ‚ÐµÐ¿ÐµÐ½ Ð¿Ð¾ ÐÑŽÑ€Ð²ÐµÐ´Ð° (MD) Ð¾Ñ‚ Rajiv Gandhi University of Health Sciences.",
              "Ð”-Ñ€ Ð’ÐµÐ½Ñƒ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÑƒÐ²Ð° ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð¾Ñ‚ 20 Ð³Ð¾Ð´Ð¸Ð½Ð¸, Ñ€Ð°Ð·Ð²Ð¸Ð²Ð°Ð¹ÐºÐ¸ ÑÐ²Ð¾Ð¹ Ð¾Ñ‚Ð»Ð¸Ñ‡Ð¸Ñ‚ÐµÐ»ÐµÐ½ ÑÑ‚Ð¸Ð» Ð½Ð° Ð»ÐµÑ‡ÐµÐ½Ð¸Ðµ, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð¸Ñ€Ð° ÐÑŽÑ€Ð²ÐµÐ´Ð°, Ð¿ÑÐ¸Ñ…Ð¾Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ñ, ÐœÐ°Ñ€Ð¼Ð° Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ñ Ð¸ ÐµÐ½ÐµÑ€Ð³Ð¸Ð¹Ð½Ð¾ Ð»ÐµÑ‡ÐµÐ½Ð¸Ðµ. Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð° Ð² ÐŸÐ°Ð½Ñ‡Ð°ÐºÐ°Ñ€Ð¼Ð° Ð¸ Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¸ Ð¼Ð°ÑÐ°Ð¶Ð½Ð¸ Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ð¸.",
              "ÐÐµÐ³Ð¾Ð²Ð°Ñ‚Ð° ÐµÐºÑÐ¿ÐµÑ€Ñ‚Ð¸Ð·Ð° Ð² ÐÑŽÑ€Ð²ÐµÐ´Ð°, Ð¾ÑÐ¾Ð±ÐµÐ½Ð¾ Ð² ÐŸÐ°Ð½Ñ‡Ð°ÐºÐ°Ñ€Ð¼Ð° Ð¸ Ñ…Ð¾Ð»Ð¸ÑÑ‚Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ð¸, Ðµ Ð²Ð¸ÑÐ¾ÐºÐ¾ Ñ†ÐµÐ½ÐµÐ½Ð° Ð¸ Ð³Ð¾ Ð¿Ñ€Ð°Ð²Ð¸ Ñ‚ÑŠÑ€ÑÐµÐ½ Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð°Ñ‚ÐµÐ». ÐžÐ±ÑƒÑ‡Ð¸Ð» Ðµ Ð¼Ð½Ð¾Ð¶ÐµÑÑ‚Ð²Ð¾ ÐÑŽÑ€Ð²ÐµÐ´Ð° Ð¸ ÐŸÐ°Ð½Ñ‡Ð°ÐºÐ°Ñ€Ð¼Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ†Ð¸ Ð² Ð˜Ð½Ð´Ð¸Ñ Ð¸ Ð² Ð¼ÐµÐ¶Ð´ÑƒÐ½Ð°Ñ€Ð¾Ð´ÐµÐ½ Ð¿Ð»Ð°Ð½.",
              "Ð¥Ð¾Ð»Ð¸ÑÑ‚Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð¼ÐµÑ‚Ð¾Ð´Ð¸ Ð½Ð° Ð´-Ñ€ Ð’ÐµÐ½Ñƒ ÑÐ° Ð¸Ð·ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ð¿Ð¾Ð»ÐµÐ·Ð½Ð¸ Ð·Ð° Ð¿Ð°Ñ†Ð¸ÐµÐ½Ñ‚Ð¸, ÑÑ‚Ñ€Ð°Ð´Ð°Ñ‰Ð¸ Ð¾Ñ‚ Ñ„Ð¸Ð·Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¸ Ð¿ÑÐ¸Ñ…Ð¸Ñ‡Ð½Ð¸ Ð½Ð°Ñ€ÑƒÑˆÐµÐ½Ð¸Ñ. Ð¢Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð° Ð² ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð½Ð° Ð¿ÑÐ¸Ñ…Ð¾ÑÐ¾Ð¼Ð°Ñ‚Ð¸Ñ‡Ð½Ð¸ Ð·Ð°Ð±Ð¾Ð»ÑÐ²Ð°Ð½Ð¸Ñ Ñ‡Ñ€ÐµÐ· ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð¸Ñ€Ð°Ð½Ðµ Ð¸ Ð´ÑŠÐ»Ð±Ð¾ÐºÐ¸ Ð¼ÐµÐ´Ð¸Ñ‚Ð°Ñ‚Ð¸Ð²Ð½Ð¸ Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ¸, Ð½Ð°ÑÐ¾Ñ‡ÐµÐ½Ð¸ ÐºÑŠÐ¼ ÑÑ‚Ð°Ñ€Ð¸ ÐµÐ¼Ð¾Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ñ‚Ñ€Ð°Ð²Ð¼Ð¸.",
              "ÐšÐ°Ñ‚Ð¾ ÐµÐºÑÐ¿ÐµÑ€Ñ‚ Ð² Tantra Therapy, Ð´-Ñ€ Ð’ÐµÐ½Ñƒ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° Ñ‚Ð°Ð½Ñ‚Ñ€Ð¸Ñ‡Ð½Ð¸ Ð»ÐµÑ‡ÐµÐ±Ð½Ð¸ Ð¼ÐµÑ‚Ð¾Ð´Ð¸ Ð·Ð° Ð·Ð°ÑÐ¸Ð»Ð²Ð°Ð½Ðµ Ð½Ð° Ð»Ð¸Ñ‡Ð½Ð°Ñ‚Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ Ð¸ Ð½Ð°ÑÑŠÑ€Ñ‡Ð°Ð²Ð°Ð½Ðµ Ð½Ð° Ñ†ÑÐ»Ð¾ÑÑ‚Ð½Ð¾Ñ‚Ð¾ Ð·Ð´Ñ€Ð°Ð²Ðµ Ñ‡Ñ€ÐµÐ· Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸ ÑÑ‚Ñ€Ð°Ñ‚ÐµÐ³Ð¸Ð¸."
            ]
          },
          {
            slug: "arjun-chakraborty",
            name: "ÐÑ€Ð´Ð¶ÑƒÐ½ Ð§Ð°ÐºÑ€Ð°Ð±Ð¾Ñ€Ñ‚Ð¸",
            role: "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ",
            image: "/team-arjun.jpg",
            intro:
              "Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ¸ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³ Ð¾Ñ‚ ÐšÐ°Ð»ÐºÑƒÑ‚Ð° Ñ Ð¿Ð¾Ñ‡Ñ‚Ð¸ Ð´Ð²Ð°Ð´ÐµÑÐµÑ‚ Ð¸ Ð¿ÐµÑ‚ Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¾Ð¿Ð¸Ñ‚ Ð² Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð¸ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ°Ñ‚Ð° Ð½Ð° Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ.",
            bio: [
              "Ð’ Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶ÐµÐ½Ð¸Ðµ Ð½Ð° Ð¿Ð¾Ñ‡Ñ‚Ð¸ Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ Ð²ÐµÐº Ð¿Ñ€Ð¾Ñ„. ÐÑ€Ð´Ð¶ÑƒÐ½ Ð§Ð°ÐºÑ€Ð°Ð±Ð¾Ñ€Ñ‚Ð¸ Ñ€Ð°Ð±Ð¾Ñ‚Ð¸ Ð² Ð¾Ð±Ð»Ð°ÑÑ‚Ñ‚Ð° Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ, Ð¿Ð¾Ð·Ð½Ð°Ñ‚Ð° ÐºÐ°Ñ‚Ð¾ Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ, Ð¸ Ð²ÐµÑ‡Ðµ Ðµ ÑƒÑ‚Ð²ÑŠÑ€Ð´ÐµÐ½Ð¾ Ð¸Ð¼Ðµ Ð² Ð½ÐµÑ.",
              "Ð Ð¾Ð´ÐµÐ½ Ðµ Ð² ÐšÐ°Ð»ÐºÑƒÑ‚Ð° Ð¸ Ð½Ð°ÑÐ»ÐµÐ´ÑÐ²Ð° Ð´Ñ€ÐµÐ²Ð½Ð¾Ñ‚Ð¾ Ð·Ð½Ð°Ð½Ð¸Ðµ Ð·Ð° Ð”Ð¶Ð¹Ð¾Ñ‚Ð¸Ñˆ Ð¾Ñ‚ ÑÐ²Ð¾Ñ Ñ‡Ð¸Ñ‡Ð¾. Ð¢Ð¾Ð¹ Ðµ Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð°Ñ‚ÐµÐ» Ð² ÐºÐ»Ð°ÑÐ¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð° ÑˆÐºÐ¾Ð»Ð° Hatibagan Tole, Ð¿Ñ€ÐµÐ¿Ð¾Ð´Ð°Ð²Ð° Ð² Institute of Astrological Science Ð¸ Ðµ Ñ‡Ð»ÐµÐ½ Ð½Ð° Ð¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ð° Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ Grahamitra Gems.",
              "Ð’ Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶ÐµÐ½Ð¸Ðµ Ð½Ð° Ð±Ð»Ð¸Ð·Ð¾ 10 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¿ÑŠÑ‚ÑƒÐ²Ð° Ð¿Ð¾ ÑÐ²ÐµÑ‚Ð°, Ð¸Ð·Ð½Ð°ÑÑ Ð»ÐµÐºÑ†Ð¸Ð¸ Ð¸ Ð¾Ð±ÑƒÑ‡Ð°Ð²Ð° Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‰Ð¸ Ð¸ Ð½Ð°Ð¿Ñ€ÐµÐ´Ð½Ð°Ð»Ð¸ Ð»ÑŽÐ±Ð¸Ñ‚ÐµÐ»Ð¸ Ð½Ð° Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ.",
              "Ð¢Ð¾Ð¹ Ð½Ð°ÑÐ»ÐµÐ´ÑÐ²Ð° Ð¿Ñ€Ð¾Ñ„ÐµÑÐ¸ÑÑ‚Ð° Ð¸ Ð¿Ñ€Ð¸Ð·Ð²Ð°Ð½Ð¸ÐµÑ‚Ð¾ ÑÐ¸ Ð¾Ñ‚ ÑÐ²Ð¾Ñ Ñ‡Ð¸Ñ‡Ð¾, Ð¸Ð·Ð²ÐµÑÑ‚ÐµÐ½ Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³ Ð·Ð° Ð²Ñ€ÐµÐ¼ÐµÑ‚Ð¾ ÑÐ¸ Ð² ÐšÐ°Ð»ÐºÑƒÑ‚Ð°. Ð’ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ°Ñ‚Ð° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ðµ ÑƒÑ‡ÐµÐ½Ð¸Ðµ, ÐºÐ¾ÐµÑ‚Ð¾ Ð² Ð˜Ð½Ð´Ð¸Ñ Ñ‚Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¾ Ñ‡ÐµÑÑ‚Ð¾ ÑÐµ Ð¿Ñ€ÐµÐ´Ð°Ð²Ð° Ð² ÑÐµÐ¼ÐµÐ¹ÑÑ‚Ð²Ð¾Ñ‚Ð¾. Ð¢Ð°ÐºÐ° ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ñ‚Ð°Ð¹Ð½Ð¸Ñ‚Ðµ Ð¸ ÑÐ²ÐµÑ‰ÐµÐ½Ð¾ÑÑ‚Ñ‚Ð° Ð½Ð° Ð·Ð½Ð°Ð½Ð¸ÐµÑ‚Ð¾.",
              "ÐÑ€Ð´Ð¶ÑƒÐ½ Ð§Ð°ÐºÑ€Ð°Ð±Ð¾Ñ€Ñ‚Ð¸ Ðµ Ð¿Ð¾ÑÐµÑ‰Ð°Ð²Ð°Ð» Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ Ð½ÑÐºÐ¾Ð»ÐºÐ¾ Ð¿ÑŠÑ‚Ð¸ Ð¿Ð¾ Ð¿Ð¾ÐºÐ°Ð½Ð° Ð½Ð° Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ°Ñ‚Ð° Ð°ÑÐ¾Ñ†Ð¸Ð°Ñ†Ð¸Ñ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð¸ Ñ„Ð¾Ð½Ð´Ð°Ñ†Ð¸Ñ Ð˜Ð·Ñ‚Ð¾Ðº-Ð—Ð°Ð¿Ð°Ð´. Ð˜Ð·Ð½Ð°ÑÑÐ» Ðµ Ð»ÐµÐºÑ†Ð¸Ð¸ Ð¸ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¿Ð¾ Ð²ÐµÐ´Ð¸Ñ‡ÐµÑÐºÐ° Ð°ÑÑ‚Ñ€Ð¾Ð»Ð¾Ð³Ð¸Ñ Ð½Ðµ ÑÐ°Ð¼Ð¾ Ð² Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ, Ð½Ð¾ Ð¸ Ð² Ð›Ð¸Ñ‚Ð²Ð°, Ð›Ð°Ñ‚Ð²Ð¸Ñ, Ð•ÑÑ‚Ð¾Ð½Ð¸Ñ, ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½ Ð¸ Ð ÑƒÑÐ¸Ñ."
            ]
          }
        ]
      },
      contact: {
        hero: {
          eyebrow: "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚",
          title: "Ð—Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑ‚Ðµ Ñ€Ð°Ð·Ð³Ð¾Ð²Ð¾Ñ€",
          description:
            "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚ÐµÑ‚Ðµ ÑÑŠÐ¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ð·Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ, Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚, Ð’Ð°ÑÑ‚Ñƒ Ð¿Ñ€ÐµÐ³Ð»ÐµÐ´, ÐÑŽÑ€Ð²ÐµÐ´Ð¸Ñ‡Ð½Ð¸ Ð½Ð°ÑÐ¾ÐºÐ¸, Ð¿ÑŠÑ‚ÑƒÐ²Ð°Ð½Ðµ Ð¸Ð»Ð¸ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ðµ."
        },
        heading: {
          eyebrow: "Ð¡Ð²ÑŠÑ€Ð¶ÐµÑ‚Ðµ ÑÐµ",
          title: "Ð©Ðµ ÑÐµ Ñ€Ð°Ð´Ð²Ð°Ð¼Ðµ Ð´Ð° Ð½Ð¸ Ð¿Ð¸ÑˆÐµÑ‚Ðµ",
          location: "Ð›Ð¾ÐºÐ°Ñ†Ð¸Ñ"
        }
      }
    }
  }
} as const;

