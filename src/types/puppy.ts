export type Gender = "Boy" | "Girl" | "Boy & girl";
export type PuppyStatus = "available" | "sold";
/** "dubai" = local / showroom, "imported" = imported for you. Left undefined when not verified on the reference site. */
export type PuppyCategory = "dubai" | "imported";

export interface Puppy {
  id: string;
  slug: string;
  /** Display title (a given name such as "Max", or the breed when unnamed). */
  name: string;
  breed: string;
  gender: Gender;
  age?: string;
  status: PuppyStatus;
  category?: PuppyCategory;
  /** Media paths, resolved to URLs with mediaUrl(). First image is the cover. */
  images: string[];
  videoAvailable?: boolean;
  description?: string;
  healthDetails: string[];
}

export type BreedKey = "maltipoo" | "pomeranian" | "poodle" | "cavapoo" | "shih-tzu";
export type OriginKey = "local" | "imported";
