import type { Ref } from "react";
import type { Puppy } from "../../types/puppy";
import PuppyCard from "./PuppyCard";

interface Props { puppies: Puppy[]; small?: boolean; className?: string; label?: string; listRef?: Ref<HTMLUListElement> }

/** A grid of sketchbook puppy cards. */
export default function PuppyGrid({ puppies, small = false, className = "sketches", label, listRef }: Props) {
  return (
    <ul ref={listRef} className={className} aria-label={label}>
      {puppies.map((p, i) => <li key={p.id}><PuppyCard puppy={p} index={i} small={small} /></li>)}
    </ul>
  );
}
