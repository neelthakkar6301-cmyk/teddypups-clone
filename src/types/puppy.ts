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
  colour?: string;
  status: PuppyStatus;
  category?: PuppyCategory;
  /** Media paths, resolved to URLs with mediaUrl(). First image is the cover. */
  images: string[];
  /** Videos in the gallery; `index` is the gallery slot whose image is the video's poster. */
  videos?: PuppyVideo[];
  description?: string;
  healthDetails: string[];
}

export interface PuppyVideo { index: number; src: string }

export type BreedKey = "maltipoo" | "pomeranian" | "poodle" | "cavapoo" | "shih-tzu";
export type OriginKey = "local" | "imported";
export type CollectionKey = "korean-teacup";
export type GenderKey = "male" | "female";
