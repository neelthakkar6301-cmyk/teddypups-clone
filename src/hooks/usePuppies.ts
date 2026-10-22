import { useMemo } from "react";
import { goneHomePuppies, availablePuppies, puppies } from "../data/puppies";
import type { BreedKey, OriginKey, Puppy } from "../types/puppy";

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

export interface PuppyFiltersState { breed?: BreedKey; origin?: OriginKey }

export function usePuppies(filters: PuppyFiltersState = {}) {
  const { breed, origin } = filters;
  return useMemo(() => {
    const match = (p: Puppy) =>
      (!breed || BREED_MATCH[breed](p.breed)) &&
      (!origin || p.category === (origin === "local" ? "dubai" : "imported"));
    return {
      available: availablePuppies.filter(match),
      goneHome: goneHomePuppies.filter(match),
      allAvailable: availablePuppies,
    };
  }, [breed, origin]);
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
