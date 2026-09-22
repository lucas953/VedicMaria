type DescriptionLine = readonly { text: string; bold?: boolean }[];
type LocalizedDescription = Record<"en" | "bg", readonly DescriptionLine[]>;

export const birthChartReadingDescription: LocalizedDescription = {
  en: [
    [{ text: "Your birth chart is the unique celestial signature of the moment you entered this world.", bold: true }],
    [{ text: "Through the ancient wisdom of Vedic astrology, discover your purpose, relationships, vocation, gifts and the cycles shaping your life." }],
    [
      { text: "Understand not only " },
      { text: "what", bold: true },
      { text: " is unfolding, but " },
      { text: "why", bold: true },
      { text: " — and how your karma, nature and choices shape the path ahead." }
    ],
    [{ text: "A private encounter with the stars.", bold: true }],
    [{ text: "A deeper understanding of your unique journey.", bold: true }]
  ],
  bg: [
    [{ text: "Вашата рождена карта е уникалният небесен подпис на мига, в който сте дошли на този свят.", bold: true }],
    [{ text: "Чрез древната мъдрост на ведическата астрология открийте своето предназначение, взаимоотношения, призвание, дарби и циклите, които оформят живота ви." }],
    [
      { text: "Разберете не само " },
      { text: "какво", bold: true },
      { text: " се случва, но и " },
      { text: "защо", bold: true },
      { text: " — и как вашата карма, природа и избори оформят пътя пред вас." }
    ],
    [{ text: "Лична среща със звездите.", bold: true }],
    [{ text: "По-дълбоко разбиране на вашия уникален път.", bold: true }]
  ]
};

export const loveSoulConnectionsDescription: LocalizedDescription = {
  en: [
    [{ text: "The heart may whisper, but the stars remember.", bold: true }],
    [],
    [{ text: "Is it love, destiny, karma — or a promise carried from another lifetime?" }],
    [],
    [{ text: "Vedic astrology reveals the deeper patterns behind the relationships that find us: the bonds that awaken, transform and teach us, and the rare connections that feel less like meeting someone new and more like remembering someone known." }],
    [],
    [{ text: "Perhaps some souls are not meant to be found —", bold: true }],
    [{ text: "but recognized.", bold: true }]
  ],
  bg: [
    [{ text: "Сърцето може да шепне, но звездите помнят.", bold: true }],
    [],
    [{ text: "Любов ли е, съдба, карма — или обещание, пренесено от друг живот?" }],
    [],
    [{ text: "Ведическата астрология разкрива по-дълбоките закономерности зад взаимоотношенията, които ни намират: връзките, които ни пробуждат, преобразяват и учат, и онези редки срещи, които усещаме не толкова като запознанство с някого нов, а като спомен за някого познат." }],
    [],
    [{ text: "Може би някои души не са предопределени да бъдат намерени —", bold: true }],
    [{ text: "а разпознати.", bold: true }]
  ]
};

export const timingLifeCyclesDescription: LocalizedDescription = {
  en: [
    [{ text: "Every life has its own rhythm." }],
    [{ text: "Moments of expansion, encounters, transformation, challenges and turning points — each arrives in its own time." }],
    [{ text: "One of the most profound and distinctive systems within Vedic astrology is the ancient science of the Dashas — planetary periods that reveal the unfolding rhythm of life through the nine Grahas." }],
    [{ text: "Each Dasha activates a different dimension of the birth chart, opening a particular chapter of the journey — love and relationships, career, prosperity, inner transformation, spiritual evolution." }],
    [{ text: "It is the art of reading not only what is written in the stars, but when the moment has arrived for it to unfold." }],
    [{ text: "Because in astrology, it is not enough to know what is possible." }],
    [{ text: "The deeper question is:" }],
    [{ text: "Why now?" }],
    [{ text: "The chart reveals the potential." }],
    [{ text: "The Dasha reveals the time." }]
  ],
  bg: [
    [{ text: "Всеки живот има свой ритъм." }],
    [{ text: "Моменти на разгръщане, срещи, промяна, изпитания и съдбовни обрати — всичко идва в своето време." }],
    [{ text: "Една от най-мистичните и прецизни системи във ведическата астрология е позната като Даши — древна система от планетарни периоди, която разкрива ритъма на времето през деветте грахи." }],
    [{ text: "Всяка Даша активира различен пласт от рождената карта и отваря определена глава от житейския път — любов, отношения, професия, материален свят, вътрешна трансформация, духовно израстване." }],
    [{ text: "Това е изкуството да разчетеш не само какво е заложено в звездите, но и кога времето е готово да го разкрие." }]
  ]
};

export const vedicRemediesDescription: LocalizedDescription = {
  en: [
    [{ text: "In the ancient vision of Vedic astrology, destiny is not always a closed door." }],
    [{ text: "The Rishis understood that karma has its own rhythm — yet through awareness, devotion, and conscious action, its expression may sometimes be softened, redirected, or transformed." }],
    [{ text: "Vedic remedies are sacred practices entrusted through this lineage of knowledge: mantras whispered with intention, rituals performed with reverence, offerings to the planetary deities, sacred colors, gemstones, and disciplines chosen in harmony with one’s celestial pattern." }],
    [{ text: "Their purpose is not to erase karma, but to restore balance within its unfolding — to calm certain influences, strengthen others, and create a more harmonious relationship with the forces shaping one’s life." }],
    [
      { text: "At the heart of this tradition lies a profound understanding: " },
      { text: "the planets do not merely reveal karma; they also show where conscious alignment may change the way we meet it.", bold: true }
    ],
    [{ text: "Through the wisdom of the Rishis, the seeker is given not only a map of destiny, but a way to participate in it." }],
    [{ text: "This is the subtle art of Vedic astrology — transforming what is written into what may yet be lived.", bold: true }]
  ],
  bg: [
    [{ text: "В древното познание на ведическата астрология съдбата не винаги е затворена врата." }],
    [{ text: "Ришите са разбирали, че кармата има свой ритъм — но чрез осъзнатост, преданост и съзнателно действие нейното проявление понякога може да бъде смекчено, пренасочено или преобразено." }],
    [{ text: "Ведическите средства са свещени практики, предавани през тази древна линия на знание — мантри, произнесени с намерение, ритуали, извършени с почит, дарове към планетарните божества, свещени цветове, скъпоценни камъни и практики, подбрани в хармония с личната небесна карта." }],
    [{ text: "Тяхната цел не е да заличат кармата, а да внесат хармония в нейното проявление — да успокоят определени влияния, да укрепят други и да създадат по-съзнателна връзка със силите, които оформят живота ни." }],
    [
      { text: "В основата на тази традиция стои едно дълбоко разбиране: " },
      { text: "планетите не само разкриват кармата — те показват и къде чрез осъзнатост можем да променим начина, по който я преживяваме.", bold: true }
    ],
    [{ text: "Мъдростта на Ришите ни дава не просто карта на съдбата, а възможност да участваме в нейното проявление." }],
    [{ text: "Това е финото изкуство на ведическата астрология — да превърнеш написаното в това, което все още предстои да бъде изживяно.", bold: true }]
  ]
};

export const formattedAstrologyDescriptions: Partial<Record<string, LocalizedDescription>> = {
  "birth-chart-reading": birthChartReadingDescription,
  "love-relationships": loveSoulConnectionsDescription,
  "timing-life-cycles": timingLifeCyclesDescription,
  "remedies-guidance": vedicRemediesDescription
};

export const astrologyDetails = [
  {
    slug: "birth-chart-reading",
    title: "Birth Chart Reading",
    description:
      "Your birth chart is a sacred map of your soul's journey, showing your gifts, patterns, and life direction. Through Vedic astrology, we explore its wisdom with clarity, compassion, and respect for your path.",
    bg: {
      title: "Прочит на рождената карта",
      description:
        "Вашата рождена карта е свещена карта на пътя на душата, която показва вашите дарби, модели и житейска посока. Чрез ведическата астрология изследваме нейната мъдрост с яснота, състрадание и уважение към вашия път."
    }
  },
  {
    slug: "career-purpose",
    title: "Career & Purpose",
    description:
      "Vedic astrology can reveal the natural talents and responsibilities you are here to develop. It offers gentle guidance for career choices, meaningful work, and a stronger connection to your life purpose.",
    bg: {
      title: "Кариера и предназначение",
      description:
        "Ведическата астрология може да разкрие естествените таланти и отговорности, които сте тук да развиете. Тя предлага нежни насоки за професионални избори, смислена работа и по-силна връзка с житейското предназначение."
    }
  },
  {
    slug: "love-relationships",
    title: "love & soul connections",
    description:
      "Relationships carry lessons of harmony, growth, and understanding. A Vedic reading can illuminate emotional patterns, compatibility, and the deeper needs that shape your connections.",
    bg: {
      title: "любов и връзки между душите",
      description:
        "Взаимоотношенията носят уроци за хармония, растеж и разбиране. Ведическият прочит може да осветли емоционални модели, съвместимост и по-дълбоките потребности, които оформят връзките ви."
    }
  },
  {
    slug: "timing-life-cycles",
    title: "Timing & Life Cycles",
    description:
      "Every life moves through cycles of change, opportunity, and reflection. Vedic astrology helps you understand these periods so you can make decisions with patience and inner confidence.",
    bg: {
      title: "Време и житейски цикли",
      description:
        "Всеки живот преминава през цикли на промяна, възможности и размисъл. Ведическата астрология ви помага да разберете тези периоди, за да вземате решения с търпение и вътрешна увереност."
    }
  },
  {
    slug: "remedies-guidance",
    title: "Vedic Remedies",
    description:
      "Vedic remedies offer simple, sacred ways to bring more balance into daily life. Through mantras, rituals, colors, gemstones, or mindful practices, they support peace, clarity, and alignment.",
    bg: {
      title: "Ведически средства",
      description:
        "Ведическите средства предлагат прости и свещени начини да внесете повече баланс в ежедневието. Чрез мантри, ритуали, цветове, скъпоценни камъни или осъзнати практики те подкрепят мир, яснота и съгласуваност."
    }
  }
] as const;

export type AstrologyDetail = (typeof astrologyDetails)[number];

export function getAstrologyDetail(slug: string) {
  return astrologyDetails.find((detail) => detail.slug === slug);
}
