"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

export type Language = "en" | "bg";

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
      registerInterest: "Register Interest"
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
          "Maria is a Clinical Psychologist with over 25 years of professional experience, bringing deep insight, empathy, and a profound understanding of human nature to her work.",
          "Her journey into astrology began more than 15 years ago, when a growing passion for this ancient symbolic language led her to explore its deeper spiritual and philosophical dimensions. She soon found her path in Vedic Astrology, a timeless tradition rooted in the rich wisdom of India.",
          "Maria's fascination with India's vast cultural and spiritual heritage inspired her to study with some of the great astrologers of our time, including K. N. Rao, one of the most respected figures in the field of Jyotish. She holds a diploma in Vedic Astrology from AAA Vedic Astrology University.",
          "Today, Maria is dedicated to sharing the wisdom of Vedic Astrology in a grounded, accessible, and meaningful way. She is currently creating a Vedic Astrology Society in Bulgaria, where she organizes regular lectures, educational events, and inspiring gatherings with knowledgeable guests and teachers from around the world.",
          "Through her unique combination of psychology and Vedic Astrology, Maria offers a compassionate approach that supports self-understanding, personal growth, and a deeper connection with life's greater patterns."
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
      vastu: {
        hero: {
          eyebrow: "Sacred space",
          title: "Vastu Shastra Services",
          description:
            "Bring harmony to homes, offices, land, and interiors with traditional Vastu insight and practical remedies.",
          primary: "Request Vastu Advice"
        },
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
            name: "Prof. Paritosh Banerjee",
            role: "Vedic Numerology and Vastu",
            image: "/team-paritosh.png",
            bio:
              "A Vedic Numerology and Vastu Guru specialist with over twenty years of experience consulting individual clients and organizations. He conducts Vastu Shastra courses across Europe and is a leading lecturer and member of the Dhakuria Institute of Astrological Sciences in Kolkata, India.",
            details:
              "Prof. Banerjee holds multiple international certificates and awards, including Sankhattyo Bharati Awards, International Jyotish Vastu Guru Award, and Jyotish-Vastu Padmasree Award. During his visits to Bulgaria, he conducts lectures, personal consultations, and Vastu and Numerology courses for beginner and advanced students."
          },
          {
            name: "Dr. Venu Sasikumar (BAMS, MD)",
            role: "Ayurveda",
            image: "/team-venu.jpg",
            bio:
              "A prominent Ayurveda practitioner, lecturer, and event organizer with more than twenty years of practice. He holds degrees in Ayurveda from Dr. M.G.R. Medical University and Rajiv Gandhi University of Health Sciences.",
            details:
              "Dr. Venu integrates Ayurveda, psychotherapy, Marma therapy, energy healing, Panchakarma, and traditional massage therapies. His holistic approach supports people with physical and mental disorders, psychosomatic illnesses, emotional trauma, and overall wellbeing."
          },
          {
            name: "Arjun Chakraborty",
            role: "Vedic Astrology",
            image: "/team-arjun.jpg",
            bio:
              "A Vedic astrologer from Kolkata with nearly twenty-five years of experience in Jyotish. He inherited the ancient knowledge of astrology from his uncle and teaches at respected astrological institutions.",
            details:
              "Arjun Chakraborty teaches at Hatibagan Tole and the Institute of Astrological Science and is a member of Grahamitra Gems. He has lectured and trained students in Bulgaria, Lithuania, Latvia, Estonia, Kazakhstan, Russia, and beyond."
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
      name: "Ведическа Астрология",
      tagline: "Джйотиш | Аюрведа | Васту"
    },
    nav: [
      { label: "Начало", href: navPaths.home },
      { label: "Ведическа астрология", href: navPaths.astrology },
      { label: "Нумерология", href: navPaths.numerology },
      { label: "Консултация", href: navPaths.consultation },
      { label: "Васту", href: navPaths.vastu },
      { label: "Аюрведа", href: navPaths.ayurveda },
      { label: "Пътувания", href: navPaths.trips },
      { label: "Предстоящи събития", href: navPaths.events },
      { label: "Нашият екип", href: navPaths.team },
      { label: "Контакт", href: navPaths.contact }
    ],
    contact: {
      email: "hello@vedicastrology.example",
      phone: "+1 (555) 019-8726",
      whatsapp: "+15550198726",
      location: "Онлайн консултации по целия свят и присъствени срещи с предварителна уговорка"
    },
    common: {
      learnMore: "Научете повече",
      registerInterest: "Заявете интерес"
    },
    footer: {
      text:
        "Спокойно духовно напътствие, основано на ведическата астрология, Аюрведа, Васту и осъзнатия начин на живот.",
      quickLinks: "Бързи връзки",
      contact: "Контакт"
    },
    form: {
      name: "Име",
      email: "Имейл",
      phone: "Телефон",
      preferredService: "Предпочитана услуга",
      selectService: "Изберете услуга",
      preferredDate: "Предпочитана дата",
      message: "Съобщение",
      submit: "Изпрати съобщение",
      options: [
        "Онлайн консултация",
        "Присъствена консултация",
        "Астрологично напътствие",
        "Васту съвет",
        "Аюрведични насоки за начин на живот",
        "Духовен коучинг"
      ]
    },
    home: {
      hero: {
        eyebrow: "Традиционно знание за съвременно благополучие",
        title: "Открийте своя космически план",
        description:
          "Спокойно и доверено пространство за астрологични прочити, консултации, Васту хармония, Аюрведични насоки, свещени пътувания и сезонни събития.",
        primary: "Запазете консултация",
        secondary: "Разгледайте услугите"
      },
      founder: {
        eyebrow: "Основател",
        title: "Запознайте се с Мария",
        paragraphs: [
          "Мария е клиничен психолог с над 25 години професионален опит и внася в работата си дълбока проницателност, емпатия и разбиране за човешката природа.",
          "Пътят и към астрологията започва преди повече от 15 години, когато растящият интерес към този древен символен език я отвежда към неговите по-дълбоки духовни и философски измерения. Скоро тя открива своя път във ведическата астрология, вечна традиция, вкоренена в богатата мъдрост на Индия.",
          "Очарованието на Мария от огромното културно и духовно наследство на Индия я вдъхновява да учи при някои от големите астролози на нашето време, включително К. Н. Рао, една от най-уважаваните фигури в областта на Джйотиш. Тя притежава диплома по ведическа астрология от AAA Vedic Astrology University.",
          "Днес Мария е посветена на това да споделя мъдростта на ведическата астрология по заземен, достъпен и смислен начин. В момента тя създава Общество по ведическа астрология в България, където организира редовни лекции, образователни събития и вдъхновяващи срещи с опитни гости и учители от цял свят.",
          "Чрез уникалното си съчетание от психология и ведическа астрология Мария предлага състрадателен подход, който подкрепя себепознанието, личностното израстване и по-дълбоката връзка с по-големите модели на живота."
        ]
      },
      servicesHeading: {
        eyebrow: "Услуги",
        title: "Напътствие за живота, дома, тялото и духа",
        text: "Изберете фокусирана подкрепа или съчетайте няколко традиции в една лична консултация."
      },
      eventHeading: {
        eyebrow: "Срещи",
        title: "Предстоящи събития",
        text: "Присъединете се към камерни семинари и кръгове за размисъл, учене и обновление."
      },
      cta: {
        title: "Присъединете се към нашата космическа общност",
        text:
          "Получавайте планетарни новини, астрологични прозрения и специални насоки.",
        button: "Абониране",
        placeholder: "Въведете вашия имейл"
      },
      services: [
        {
          title: "Ведическа астрология",
          href: navPaths.astrology,
          description:
            "Рождена карта, планетарни насоки, съвместимост, благоприятно време и духовна посока за осъзнати решения.",
          image: serviceImages.astrology
        },
        {
          title: "Консултация",
          href: navPaths.consultation,
          description:
            "Лични онлайн или присъствени срещи, които съчетават астрология, Васту, Аюрведа и духовен коучинг.",
          image: serviceImages.consultation
        },
        {
          title: "Васту",
          href: navPaths.vastu,
          description:
            "Преглед на дом, офис, имот и вътрешна енергия с практични средства за хармонични пространства.",
          image: serviceImages.vastu
        },
        {
          title: "Аюрведа",
          href: navPaths.ayurveda,
          description:
            "Баланс на дошите, хранене, дневен и сезонен ритъм и естествени насоки за ежедневното благополучие.",
          image: serviceImages.ayurveda
        },
        {
          title: "Пътувания",
          href: navPaths.trips,
          description:
            "Поклоннически пътувания, ретрийти, Аюрведични преживявания и персонализирани групови програми.",
          image: serviceImages.trips
        },
        {
          title: "Предстоящи събития",
          href: navPaths.events,
          description:
            "Сезонни семинари, медитативни кръгове, астрологични срещи и преживявания за учене и вдъхновение.",
          image: serviceImages.events
        }
      ]
    },
    events: [
      {
        date: "22 юни 2026",
        title: "Новолунен кръг за намерения",
        location: "Онлайн",
        description:
          "Спокойна вечер с ведическо време, водена рефлексия, мантра и задаване на намерение за лунния месец."
      },
      {
        date: "12 юли 2026",
        title: "Аюрведа семинар за летен баланс",
        location: "София, България",
        description:
          "Практични насоки за хранене, дневен ритъм и охлаждащи навици през топлия сезон."
      },
      {
        date: "9 август 2026",
        title: "Васту за спокоен дом",
        location: "Онлайн",
        description:
          "Практично въведение в стаи, входове, елементи и прости средства за хармония у дома."
      }
    ],
    pages: {
      astrology: {
        hero: {
          eyebrow: "Джйотиш напътствие",
          title: "Прочити по ведическа астрология",
          description:
            "Получете заземено разбиране за рождената карта, планетарните цикли, взаимоотношенията, предназначението и благоприятното време.",
          primary: "Заявете прочит"
        },
        heading: {
          eyebrow: "Ясни прочити с практични следващи стъпки",
          title: "Космически план и кармично разбиране",
          text: "Сесиите са създадени да бъдат състрадателни, конкретни и полезни в реалния живот."
        },
        cards: [
          ["Рождена карта", "Разберете своята натална карта, силни страни, кармични модели, планетарни влияния и по-дълбоки житейски теми."],
          ["Планетарни насоки", "Изследвайте текущи транзити, даши, средства и време за важни решения или преходи."],
          ["Кариера и дхарма", "Изяснете призвание, естествени дарби, професионални цикли, стил на лидерство и съгласувани избори."],
          ["Връзки и съвместимост", "Получете насоки за партньорство, семейна динамика, модели на общуване и съвместимост."],
          ["Жизнен път", "Карта на повтарящи се теми, духовни уроци и подкрепящи практики за личния път."],
          ["Духовно време", "Изберете благоприятни периоди за церемонии, начинания, пътувания, промени в дома и рефлексия."]
        ],
        cta: {
          title: "Заявете своя личен прочит",
          text:
            "Споделете въпроса си, рождените данни и предпочитания стил на сесия, за да подготвим фокусирана консултация.",
          button: "Заявете прочит"
        }
      },
      numerology: {
        hero: {
          eyebrow: "Свещени числа",
          title: "Нумерологични насоки",
          description:
            "Изследвайте символното значение на рождената дата, моделите в името, личните годишни цикли и числата, които оформят житейския ви път.",
          primary: "Заявете нумерологична консултация"
        },
        heading: {
          eyebrow: "Числа и ритъм",
          title: "Прозрение чрез вашите лични числа",
          text:
            "Нумерологичните сесии предлагат заземен начин за размисъл върху време, лични модели, взаимоотношения и важни избори."
        },
        cards: [
          ["Число на жизнения път", "Разберете основните теми, дарби и уроци, носени от рождената ви дата."],
          ["Лична годишна вибрация", "Изследвайте тона на текущата година и изборите, които тя подкрепя."],
          ["Нумерология на името", "Прегледайте енергийния модел на имена, инициали и личното изразяване."],
          ["Числа във взаимоотношенията", "Размислете върху съвместимост, общуване и общ ритъм чрез нумерологични модели."],
          ["Време за решения", "Използвайте числовите цикли като допълнителна перспектива за преходи, начинания и лични етапи."]
        ],
        cta: {
          title: "Открийте мъдростта във вашите числа",
          text:
            "Споделете рождената си дата, име и текущ въпрос, за да подготвим смислена нумерологична сесия.",
          button: "Заявете насоки"
        }
      },
      consultation: {
        hero: {
          eyebrow: "Лично напътствие",
          title: "Запазете консултация",
          description:
            "Изберете фокусирана сесия или интегрирана консултация по астрология, Васту, Аюрведа и духовен коучинг."
        },
        heading: {
          eyebrow: "Видове сесии",
          title: "Подкрепа, съобразена с вашия въпрос",
          text:
            "Донесете житейско решение, цел за благополучие, въпрос за връзка или пространство, което искате да хармонизирате."
        },
        cards: [
          ["Онлайн консултация", "Удобна видео сесия за клиенти навсякъде, със същата дълбочина и подготовка като присъствената работа."],
          ["Присъствена консултация", "Лична среща за астрология, Васту, Аюрведични насоки или интегрирана духовна подкрепа."],
          ["Астрологично напътствие", "Тълкуване на рождена карта, планетарно време, отношения и практични духовни средства."],
          ["Васту съвет", "Персонализирани предложения за дом, офис, имот, стаи и енергиен поток."],
          ["Аюрведични насоки", "Хранене, режим, сън, сезонна грижа и устойчиви ежедневни практики според дошите."],
          ["Духовен коучинг", "Рефлективна подкрепа за предназначение, преходи, практика, решения и вътрешна стабилност."]
        ],
        form: {
          eyebrow: "Заявка за час",
          title: "Разкажете ни от какво имате нужда",
          text:
            "Изпратете предпочитаната услуга и дата. Ще отговорим с налични часове и подробности за сесията."
        }
      },
      vastu: {
        hero: {
          eyebrow: "Свещено пространство",
          title: "Услуги по Васту Шастра",
          description:
            "Внесете хармония в домове, офиси, земя и интериори чрез традиционна Васту мъдрост и практични средства.",
          primary: "Заявете Васту съвет"
        },
        heading: {
          eyebrow: "Хармония на пространството",
          title: "По-спокойна връзка със средата",
          text:
            "Васту консултациите се фокусират върху съгласуване, комфорт, благополучие и емоционална лекота в ежедневните пространства."
        },
        cards: [
          ["Домашно Васту", "Оценка на входове, стаи, баланс на елементите, места за сън, свещени пространства и цялостен поток."],
          ["Офис Васту", "Преглед на работно разпределение, бюра, екипни зони, клиентски пространства и дизайн, подкрепящ просперитета."],
          ["Преглед на земя и имот", "Оценка на форма, ориентация, околни влияния и енергийна пригодност преди решения."],
          ["Енергиен баланс в интериора", "Уточняване на цветове, разположение, материали, светлина, движение и усещане във всяка стая."],
          ["Средства", "Практични и уважителни средства, които подкрепят баланса без крайни ремонти."]
        ],
        cta: {
          title: "Внесете баланс в пространството си",
          text:
            "Споделете план, въпроси или детайли за имота и ще препоръчаме подходящата консултация.",
          button: "Започнете Васту заявка"
        }
      },
      ayurveda: {
        hero: {
          eyebrow: "Естествен ритъм",
          title: "Аюрведични насоки за благополучие",
          description:
            "Подкрепете баланса чрез разбиране на дошите, хранене, дневен ритъм, сезонна грижа и естествени практики.",
          primary: "Разгледайте Аюрведа насоки"
        },
        heading: {
          eyebrow: "Тяло и ритъм",
          title: "Малки ежедневни избори с траен ефект",
          text:
            "Аюрведичните насоки са образователни и насочени към начина на живот, за да се чувствате по-съгласувани в ежедневието."
        },
        cards: [
          ["Баланс на дошите", "Разберете конституцията и текущите дисбаланси чрез нежни, персонализирани насоки."],
          ["Хранителни насоки", "Изследвайте храни, вкусове, ритъм на хранене и прости навици за естествен баланс."],
          ["Дневен режим", "Създайте устойчив динчаря за сън, движение, рефлексия, хранене и стабилна енергия."],
          ["Сезонен режим", "Адаптирайте храна, активност, почивка и грижа към сезоните и местния климат."],
          ["Консултация за начин на живот", "Практични насоки за стрес, храносмилане, сън, жизненост и емоционална устойчивост."],
          ["Естествено благополучие", "Нежен път към устойчивост чрез традиционна мъдрост и практичност в съвременния ден."]
        ],
        cta: {
          title: "Създайте режим, който ви подкрепя",
          text:
            "Започнете с консултация за начина на живот и получете препоръки според вашата конституция и сезон.",
          button: "Заявете насоки"
        }
      },
      trips: {
        hero: {
          eyebrow: "Духовни и уелнес пътувания",
          title: "Свещени пътувания",
          description:
            "Разгледайте поклоннически пътувания, ретрийти, културни турове, Аюрведични програми и персонализирани групови преживявания.",
          primary: "Планирайте пътуване"
        },
        heading: {
          eyebrow: "Пътешествия",
          title: "Пътуване с намерение и грижа",
          text:
            "Пътуванията се оформят около рефлексия, учене, комфорт и уважителна връзка с мястото."
        },
        cards: [
          ["Поклоннически пътувания", "Свещени преживявания с храмове, ритуали, рефлексия и смислен културен контекст."],
          ["Ретрийт преживявания", "Възстановяващи групови ретрийти с медитация, практики, учене и време за интеграция."],
          ["Културни турове", "Потапяне в наследство, духовни традиции, кухня, изкуства и местна мъдрост."],
          ["Аюрведични уелнес пътувания", "Пътувания, създадени около почивка, Аюрведичен ритъм, сезонна грижа и естествено благополучие."],
          ["Персонализирани групови пътувания", "Внимателно планирани маршрути за семейства, общности и частни групи."]
        ],
        cta: {
          title: "Създайте смислено групово преживяване",
          text: "Споделете дестинация, размер на групата, срокове и цели за благополучие.",
          button: "Започнете планиране"
        }
      },
      upcoming: {
        hero: {
          eyebrow: "Семинари и кръгове",
          title: "Предстоящи събития",
          description:
            "Присъединете се към сезонни занятия, медитативни кръгове, семинари по ведическа астрология и уелнес срещи.",
          primary: "Заявете интерес"
        },
        heading: {
          eyebrow: "Календар",
          title: "Примерни събития",
          text:
            "Тези примерни събития могат да бъдат заменени с актуални семинари, ретрийти и общностни срещи."
        }
      },
      team: {
        hero: {
          eyebrow: "Нашият екип",
          title: "Запознайте се с хората зад работата",
          description:
            "Малък и внимателен екип, който подкрепя астрология, обучение, консултации, ретрийти и общностни събития с грижа."
        },
        heading: {
          eyebrow: "Водачи и сътрудници",
          title: "Заземена подкрепа за вашия духовен път",
          text:
            "Тази страница може да се развива с профили на практици, гост-учители, партньори за ретрийти и събития."
        },
        cards: [
          ["Мария", "Основател, клиничен психолог и практик по ведическа астрология, който носи дълбочина, емпатия и духовна проницателност."],
          ["Гост-учители", "Поканени астролози, Аюрведа практици и духовни преподаватели за лекции и специални срещи."],
          ["Партньори за ретрийти", "Доверени сътрудници, които подкрепят свещени пътувания, грижа за събития и групови преживявания."]
        ],
        members: [
          {
            name: "Проф. Паритош Банерджи",
            role: "Ведическа нумерология и Васту",
            image: "/team-paritosh.png",
            bio:
              "Специалист по ведическа нумерология и Васту с над двадесет години опит в консултирането на индивидуални клиенти и организации. Провежда курсове по Васту Шастра в различни европейски държави и е водещ лектор и член на Dhakuria Institute of Astrological Sciences в Калкута, Индия.",
            details:
              "Проф. Банерджи има множество международни сертификати и отличия, сред които Sankhattyo Bharati Awards, International Jyotish Vastu Guru Award и Jyotish-Vastu Padmasree Award. При посещенията си в България провежда лекции, лични консултации и курсове по Васту и нумерология."
          },
          {
            name: "Д-р Вену Сасикумар (BAMS, MD)",
            role: "Аюрведа",
            image: "/team-venu.jpg",
            bio:
              "Изтъкнат Аюрведа практик, лектор и организатор на събития с повече от двадесет години практика. Притежава образование по Аюрведа от Dr. M.G.R. Medical University и Rajiv Gandhi University of Health Sciences.",
            details:
              "Д-р Вену съчетава Аюрведа, психотерапия, Марма терапия, енергийно лечение, Панчакарма и традиционни масажни терапии. Неговият холистичен подход подкрепя хора с физически и психични нарушения, психосоматични състояния, емоционални травми и нужда от цялостно благополучие."
          },
          {
            name: "Арджун Чакраборти",
            role: "Ведическа астрология",
            image: "/team-arjun.jpg",
            bio:
              "Ведически астролог от Калкута с почти двадесет и пет години опит в Джйотиш. Наследява древното знание за астрологията от своя чичо и преподава в уважавани астрологични институции.",
            details:
              "Арджун Чакраборти преподава в Hatibagan Tole и Institute of Astrological Science и е член на Grahamitra Gems. Той е изнасял лекции и обучения в България, Литва, Латвия, Естония, Казахстан, Русия и други страни."
          }
        ]
      },
      contact: {
        hero: {
          eyebrow: "Контакт",
          title: "Започнете разговор",
          description:
            "Изпратете съобщение за консултация, прочит, Васту преглед, Аюрведични насоки, пътуване или събитие."
        },
        heading: {
          eyebrow: "Свържете се",
          title: "Ще се радваме да ни пишете",
          location: "Локация"
        }
      }
    }
  }
} as const;

type Copy = (typeof copy)[Language];

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Copy;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const stored = window.localStorage.getItem("site-language");
    if (stored === "bg" || stored === "en") {
      return stored;
    }

    return "en";
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    window.localStorage.setItem("site-language", nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function cardsFromTuples(cards: readonly (readonly [string, string])[]) {
  return cards.map(([title, description]) => ({ title, description }));
}
