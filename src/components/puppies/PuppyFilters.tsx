import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { breedChips } from "../../data/navigation";
import type { PuppyFiltersState } from "../../hooks/usePuppies";

const originLabel = { local: "Puppies in Dubai", imported: "Imported for you" } as const;

/** Reflects the ?breed= / ?origin= links used on the homepage; hidden when no filter is active. */
export default function PuppyFilters({ filters }: { filters: PuppyFiltersState }) {
  const { breed, origin } = filters;
  if (!breed && !origin) return null;
  const breedLabel = breedChips.find((b) => b.key === breed)?.label;
  return (
    <div className="filters" role="status">
      <span>Showing:</span>
      {breedLabel && <span className="chip">{breedLabel}</span>}
      {origin && <span className="chip">{originLabel[origin]}</span>}
      <Link to="/puppies" className="filters__clear"><X size={14} aria-hidden="true" /> Clear filters</Link>
    </div>
  );
}
