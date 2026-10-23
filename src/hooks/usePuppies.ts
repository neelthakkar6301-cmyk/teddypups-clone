import { useMemo } from "react";
import { goneHomePuppies, availablePuppies, puppies } from "../data/puppies";
import type { BreedKey, CollectionKey, GenderKey, OriginKey, Puppy } from "../types/puppy";

const BREED_MATCH: Record<BreedKey, (breed: string) => boolean> = {
  maltipoo: (b) => b.toLowerCase().includes("maltipoo"),
  pomeranian: (b) => b.toLowerCase().includes("pomeranian"),
  poodle: (b) => b.toLowerCase().includes("poodle"),
  cavapoo: (b) => b.toLowerCase().includes("cavapoo"),
  "shih-tzu": (b) => b.toLowerCase().includes("shih tzu"),
};

export function parseBreed(value: string | null): BreedKey | undefined {
  return value && value in BREED_MATCH ? (value as BreedKey) : undefined;
}
export function parseOrigin(value: string | null): OriginKey | undefined {
  return value === "local" || value === "imported" ? value : undefined;
}
export function parseCollection(value: string | null): CollectionKey | undefined {
  return value === "korean-teacup" ? value : undefined;
}
export function parseGender(value: string | null): GenderKey | undefined {
  return value === "male" || value === "female" ? value : undefined;
}

export interface PuppyFiltersState { breed?: BreedKey; origin?: OriginKey; collection?: CollectionKey; gender?: GenderKey }

/** Reads every filter from the URL search params (?origin=&collection=&breed=&gender=). */
export function filtersFromParams(params: URLSearchParams): PuppyFiltersState {
  return {
    origin: parseOrigin(params.get("origin")),
    collection: parseCollection(params.get("collection")),
    breed: parseBreed(params.get("breed")),
    gender: parseGender(params.get("gender")),
  };
}

function matches(p: Puppy, { breed, origin, collection, gender }: PuppyFiltersState): boolean {
  if (breed && !BREED_MATCH[breed](p.breed)) return false;
  if (origin && p.category !== (origin === "local" ? "dubai" : "imported")) return false;
  if (collection && !p.breed.toLowerCase().includes("korean teacup")) return false;
  // "Boy & girl" litters count for both.
  if (gender === "male" && !p.gender.startsWith("Boy")) return false;
  if (gender === "female" && !p.gender.toLowerCase().includes("girl")) return false;
  return true;
}

export function usePuppies(filters: PuppyFiltersState = {}) {
  const { breed, origin, collection, gender } = filters;
  return useMemo(() => {
    const f = { breed, origin, collection, gender };
    return {
      available: availablePuppies.filter((p) => matches(p, f)),
      goneHome: goneHomePuppies,
      allAvailable: availablePuppies,
    };
  }, [breed, origin, collection, gender]);
}

export function findPuppy(slug: string | undefined): Puppy | undefined {
  return slug ? puppies.find((p) => p.slug === slug) : undefined;
}

/** Previous / next within the same list (available or gone home), wrapping around. */
export function getNeighbours(puppy: Puppy): { prev: Puppy; next: Puppy } {
  const list = puppy.status === "available" ? availablePuppies : goneHomePuppies;
  const i = list.findIndex((p) => p.id === puppy.id);
  return { prev: list[(i - 1 + list.length) % list.length], next: list[(i + 1) % list.length] };
}
