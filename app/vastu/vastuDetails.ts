export const vastuDetails = [
  {
    slug: "home-vastu",
    title: "Home Vastu",
    description:
      "Home Vastu helps create a peaceful flow between your living space and your inner well-being. It brings attention to entrances, rooms, sleeping areas, and sacred corners so the home feels more balanced and supportive.",
    bg: {
      title: "Домашно Васту",
      description:
        "Домашното Васту помага да се създаде спокоен поток между жилищното пространство и вътрешното ви благополучие. То насочва внимание към входове, стаи, зони за сън и свещени кътчета, така че домът да се усеща по-балансиран и подкрепящ."
    }
  },
  {
    slug: "office-vastu",
    title: "Office Vastu",
    description:
      "Office Vastu focuses on clarity, stability, and prosperity within the workspace. Through thoughtful placement and energy flow, it supports concentration, smoother collaboration, and a more grounded professional environment.",
    bg: {
      title: "Офис Васту",
      description:
        "Офис Васту се фокусира върху яснота, стабилност и благополучие в работното пространство. Чрез внимателно разположение и енергиен поток то подкрепя концентрацията, по-гладкото сътрудничество и по-заземена професионална среда."
    }
  },
  {
    slug: "land-property-review",
    title: "Land & Property Review",
    description:
      "Before choosing land or property, Vastu can reveal the subtle qualities of orientation, shape, and surrounding influences. This guidance helps you make decisions with greater confidence and calm.",
    bg: {
      title: "Преглед на земя и имот",
      description:
        "Преди да изберете земя или имот, Васту може да разкрие фините качества на ориентацията, формата и околните влияния. Тези насоки ви помагат да вземате решения с повече увереност и спокойствие."
    }
  },
  {
    slug: "interior-energy-balance",
    title: "Interior Energy Balance",
    description:
      "Small changes in color, light, materials, and placement can gently shift the feeling of a room. Interior Vastu supports harmony by helping each space feel lighter, warmer, and more aligned.",
    bg: {
      title: "Енергиен баланс в интериора",
      description:
        "Малки промени в цвят, светлина, материали и разположение могат нежно да променят усещането в една стая. Интериорното Васту подкрепя хармонията, като помага на всяко пространство да се усеща по-леко, по-топло и по-съгласувано."
    }
  },
  {
    slug: "remedies",
    title: "Remedies",
    description:
      "Vastu remedies offer practical ways to restore balance without forcing major changes. They are respectful, simple adjustments designed to soften obstacles and invite more peace into the space.",
    bg: {
      title: "Средства за хармонизиране",
      description:
        "Васту средствата предлагат практични начини за възстановяване на баланса без големи промени. Те са уважителни и прости корекции, създадени да смекчат препятствията и да поканят повече мир в пространството."
    }
  }
] as const;

export type VastuDetail = (typeof vastuDetails)[number];

export function getVastuDetail(slug: string) {
  return vastuDetails.find((detail) => detail.slug === slug);
}
