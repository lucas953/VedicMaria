import type { DatedEvent } from "../../eventDates";

export const lecturePath = "/upcoming-events/vedic-astrology-lectures";
export const registrationEmail = "jyotishagirl@gmail.com";

export const lectureCopy = {
  en: {
    title: "Vedic Astrology Lectures",
    description: "Explore Ashtakavarga, planetary transits and talents in the birth chart. Two lectures in Sofia on 14–15 November 2026, 10:30–14:30 each day. €45 per lecture.",
    eyebrow: "Sofia · 14–15 November 2026",
    introduction: "Two lectures on planetary strength, favourable periods and the talents revealed in a birth chart.",
    programme: "Explore the programme",
    back: "Back to events",
    dateLabel: "Date",
    timeLabel: "Time",
    time: "10:30–14:30 · Bulgarian time",
    priceLabel: "Price per lecture",
    price: "€45",
    venueLabel: "Venue",
    address: "145 Evlogi i Hristo Georgievi Blvd., 1st floor, Sofia",
    register: "Register by email",
    registrationTitle: "Reserve your place",
    registrationText: "Email us with the lecture you would like to attend: Ashtakavarga and Planetary Transits, Talents in the Birth Chart, or both.",
    lectures: [
      {
        id: "ashtakavarga",
        title: "Ashtakavarga and Planetary Transits",
        date: "Saturday, 14 November 2026",
        isoDate: "2026-11-14",
        question: "How can we assess planetary strength and identify favourable periods in the horoscope?",
        paragraphs: [
          "Ashtakavarga is one of the most fascinating and practical systems in Vedic astrology. It helps us understand how planets activate different areas of life and what results their transits may bring.",
          "In this lecture, we will explore how to use Ashtakavarga for deeper analysis and more precise interpretation of planetary transits."
        ],
        topicsIntro: "",
        topics: []
      },
      {
        id: "talents",
        title: "Talents in the Birth Chart",
        date: "Sunday, 15 November 2026",
        isoDate: "2026-11-15",
        question: "How can we discover a child’s innate abilities and potential for growth?",
        paragraphs: [
          "Every horoscope contains unique information about the talents, aptitudes and abilities that can be developed throughout life.",
          "How can Vedic astrology help us recognise the potential of young children and guide their development in the right direction?"
        ],
        topicsIntro: "In this lecture, we will explore indicators of:",
        topics: [
          "Academic abilities and intellectual potential",
          "Sporting aptitude and physical abilities",
          "Musical and artistic talents",
          "Innate gifts and areas for future development",
          "Talents in an individual’s birth chart and favourable periods for their expression"
        ]
      }
    ]
  },
  bg: {
    title: "Лекции по ведическа астрология",
    description: "Аштакаварга, транзитите на планетите и талантите в хороскопа. Две лекции в София на 14–15 ноември 2026 г., от 10:30 до 14:30 ч. Цена: 45 евро за лекция.",
    eyebrow: "София · 14–15 ноември 2026 г.",
    introduction: "Две лекции за силата на планетите, благоприятните периоди и талантите, разкрити в рождената карта.",
    programme: "Разгледайте програмата",
    back: "Към всички събития",
    dateLabel: "Дата",
    timeLabel: "Час",
    time: "10:30–14:30 ч. · българско време",
    priceLabel: "Цена за една лекция",
    price: "45 евро",
    venueLabel: "Място",
    address: "бул. „Евлоги и Христо Георгиеви“ 145, ет. 1, София",
    register: "Записване по имейл",
    registrationTitle: "Запазете своето място",
    registrationText: "Пишете ни коя лекция желаете да посетите: „Аштакаварга и транзитите на планетите“, „Талантите в хороскопа“ или и двете.",
    lectures: [
      {
        id: "ashtakavarga",
        title: "Аштакаварга и транзитите на планетите",
        date: "Събота, 14 ноември 2026 г.",
        isoDate: "2026-11-14",
        question: "Как да разчитаме силата на планетите и да определяме благоприятните периоди в хороскопа?",
        paragraphs: [
          "Аштакаварга е една от най-интересните и практически приложими системи във ведическата астрология. Тя ни помага да разберем как планетите активират различните сфери на живота и какви резултати могат да донесат техните транзити.",
          "В лекцията ще разгледаме как да използваме Аштакаварга за по-задълбочен анализ и по-точна интерпретация на транзитите."
        ],
        topicsIntro: "",
        topics: []
      },
      {
        id: "talents",
        title: "Талантите в хороскопа",
        date: "Неделя, 15 ноември 2026 г.",
        isoDate: "2026-11-15",
        question: "Как да открием вродените способности и потенциала за развитие на детето?",
        paragraphs: [
          "Всеки хороскоп съдържа уникална информация за талантите, заложбите и способностите, които могат да бъдат развити през живота.",
          "Как чрез ведическата астрология да разпознаем потенциала на малките деца и да насочим развитието им в правилната посока?"
        ],
        topicsIntro: "В лекцията ще разгледаме показателите за:",
        topics: [
          "Академични способности и интелектуален потенциал",
          "Спортни заложби и физически способности",
          "Музикални и артистични таланти",
          "Вродени дарби и области за бъдещо развитие",
          "Талантите в рождената карта на натива и подходящите периоди за тяхното проявление"
        ]
      }
    ]
  }
};

export function lectureListings(lang: "en" | "bg"): DatedEvent[] {
  const page = lectureCopy[lang];
  return page.lectures.map((lecture) => ({
    title: lecture.title,
    date: `${lecture.date} | 10:30–14:30`,
    startDate: lecture.isoDate,
    endDate: lecture.isoDate,
    location: page.address,
    description: `${lecture.question} ${page.priceLabel}: ${page.price}.`,
    href: `${lecturePath}#${lecture.id}`,
    image: "/images/heroes/birth-chart-reading.webp"
  }));
}
