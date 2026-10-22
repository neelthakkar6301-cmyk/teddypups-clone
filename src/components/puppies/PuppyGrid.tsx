import type { ReactNode, Ref } from "react";
import type { Puppy } from "../../types/puppy";
import PuppyCard from "./PuppyCard";

interface Props { puppies: Puppy[]; numbered?: boolean; compact?: boolean; trailing?: ReactNode; className?: string; listRef?: Ref<HTMLUListElement>; doorCards?: boolean }

export default function PuppyGrid({ puppies, numbered, compact, trailing, className = "", listRef, doorCards = false }: Props) {
  return (
    <ul ref={listRef} className={`puppy-grid ${className}`.trim()}>
      {puppies.map((p, i) => (
        <li key={p.id}><PuppyCard puppy={p} index={numbered ? i + 1 : undefined} compact={compact} door={doorCards} /></li>
      ))}
      {trailing && <li className="puppy-grid__trailing">{trailing}</li>}
    </ul>
  );
}
