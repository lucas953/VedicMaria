export const canonicalTeamSlugs = [
  "maria",
  "paritosh-banerjee",
  "venu-sasikumar",
  "arjun-chakraborty"
] as const;

const aliases: Record<string, (typeof canonicalTeamSlugs)[number]> = {
  "paritosh-banereje": "paritosh-banerjee",
  "paritosh-banerje": "paritosh-banerjee",
  "paritosh-banergee": "paritosh-banerjee",
  "prof-paritosh-banerjee": "paritosh-banerjee",
  "dr-venu-sasikumar": "venu-sasikumar",
  "venu": "venu-sasikumar",
  "arjun": "arjun-chakraborty"
};

export const routableTeamSlugs = [...canonicalTeamSlugs, ...Object.keys(aliases)];

export function resolveTeamSlug(slug: string) {
  if (canonicalTeamSlugs.includes(slug as (typeof canonicalTeamSlugs)[number])) {
    return slug as (typeof canonicalTeamSlugs)[number];
  }

  return aliases[slug] ?? null;
}
