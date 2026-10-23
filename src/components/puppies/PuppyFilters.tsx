import { useSearchParams } from "react-router-dom";
import { breedChips } from "../../data/navigation";
import type { PuppyFiltersState } from "../../hooks/usePuppies";

interface ChipProps { pressed: boolean; onClick: () => void; children: string }

function Chip({ pressed, onClick, children }: ChipProps) {
  return <button type="button" className="chip" aria-pressed={pressed} onClick={onClick}>{children}</button>;
}

/** Sticker-chip filter pad. Every choice lives in the URL so filtered views can be shared. */
export default function PuppyFilters({ filters }: { filters: PuppyFiltersState }) {
  const [, setParams] = useSearchParams();
  const { origin, collection, breed, gender } = filters;

  const update = (changes: Record<string, string | undefined>) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
      return next;
    }, { replace: true, preventScrollReset: true });
  };
  const any = Boolean(origin || collection || breed || gender);

  return (
    <div className="sketchpad" role="group" aria-label="Filter puppies">
      <div className="sketchpad__row">
        <span className="sketchpad__label font-scrawl">where</span>
        <Chip pressed={!origin && !collection} onClick={() => update({ origin: undefined, collection: undefined })}>Everywhere</Chip>
        <Chip pressed={origin === "imported"} onClick={() => update({ origin: origin === "imported" ? undefined : "imported", collection: undefined })}>Imported</Chip>
        <Chip pressed={collection === "korean-teacup"} onClick={() => update(collection ? { collection: undefined } : { origin: "imported", collection: "korean-teacup" })}>Korean Teacup</Chip>
      </div>
      <div className="sketchpad__row">
        <span className="sketchpad__label font-scrawl">breed</span>
        {breedChips.map((b) => (
          <Chip key={b.key} pressed={breed === b.key} onClick={() => update({ breed: breed === b.key ? undefined : b.key })}>{b.label}</Chip>
        ))}
      </div>
      <div className="sketchpad__row">
        <span className="sketchpad__label font-scrawl">boy or girl</span>
        <Chip pressed={gender === "male"} onClick={() => update({ gender: gender === "male" ? undefined : "male" })}>Boys</Chip>
        <Chip pressed={gender === "female"} onClick={() => update({ gender: gender === "female" ? undefined : "female" })}>Girls</Chip>
        {any && <button type="button" className="link-ink sketchpad__clear" onClick={() => update({ origin: undefined, collection: undefined, breed: undefined, gender: undefined })}>Clear filters</button>}
      </div>
    </div>
  );
}
