export const vastuDetails = [
  {
    slug: "home-vastu",
    title: "Home Vastu",
    description:
      "Home Vastu helps create a peaceful flow between your living space and your inner well-being. It brings attention to entrances, rooms, sleeping areas, and sacred corners so the home feels more balanced and supportive."
  },
  {
    slug: "office-vastu",
    title: "Office Vastu",
    description:
      "Office Vastu focuses on clarity, stability, and prosperity within the workspace. Through thoughtful placement and energy flow, it supports concentration, smoother collaboration, and a more grounded professional environment."
  },
  {
    slug: "land-property-review",
    title: "Land & Property Review",
    description:
      "Before choosing land or property, Vastu can reveal the subtle qualities of orientation, shape, and surrounding influences. This guidance helps you make decisions with greater confidence and calm."
  },
  {
    slug: "interior-energy-balance",
    title: "Interior Energy Balance",
    description:
      "Small changes in color, light, materials, and placement can gently shift the feeling of a room. Interior Vastu supports harmony by helping each space feel lighter, warmer, and more aligned."
  },
  {
    slug: "remedies",
    title: "Remedies",
    description:
      "Vastu remedies offer practical ways to restore balance without forcing major changes. They are respectful, simple adjustments designed to soften obstacles and invite more peace into the space."
  }
] as const;

export type VastuDetail = (typeof vastuDetails)[number];

export function getVastuDetail(slug: string) {
  return vastuDetails.find((detail) => detail.slug === slug);
}
