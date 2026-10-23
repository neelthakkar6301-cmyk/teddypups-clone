import type { Puppy } from "../types/puppy";

export function puppySubtitle(p: Puppy): string {
  const parts: string[] = [];
  if (p.name !== p.breed) parts.push(p.breed);
  parts.push(p.gender.toLowerCase());
  if (p.age) parts.push(p.age);
  return parts.join(" · ");
}

/** Door / card caption in the reference's wording, e.g. "Maltipoo, boy, 3 months, with video". */
export function doorMeta(p: Puppy): string {
  const parts: string[] = [];
  if (p.name !== p.breed) parts.push(p.breed);
  parts.push(p.gender.toLowerCase());
  if (p.age) parts.push(p.age);
  if (p.videoAvailable) parts.push("with video");
  return parts.join(", ");
}

export function categoryLabel(p: Puppy): string | undefined {
  if (p.category === "imported") return "Imported for you";
  if (p.category === "dubai") return "In Dubai";
  return undefined;
}
