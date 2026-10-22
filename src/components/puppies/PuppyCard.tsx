import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import type { Puppy } from "../../types/puppy";
import { puppySubtitle } from "../../utils/formatters";
import { mediaUrl } from "../../utils/images";

interface Props { puppy: Puppy; index?: number; compact?: boolean; door?: boolean }

export default function PuppyCard({ puppy, index, compact, door = false }: Props) {
  const sold = puppy.status === "sold";
  return (
    <Link to={`/puppies/${puppy.slug}`} className={`puppy-card${door ? " puppy-card--door" : ""}${sold ? " is-sold" : ""}`}>
      {door && <div className="puppy-card__body">
        <h3 className="puppy-card__name">{puppy.name}</h3>
        {!compact && !sold && <p className="puppy-card__meta">{puppySubtitle(puppy)}</p>}
      </div>}
      <div className="puppy-card__media">
        <img src={mediaUrl(puppy.images[0], 640)} alt={`${puppy.name}, ${puppy.gender.toLowerCase()} ${puppy.breed} puppy`} loading="lazy" width="480" height="640" />
        <span className={`tag ${sold ? "tag--sold" : "tag--available"}`}>{sold ? "gone home ♥" : "Available"}</span>
        {puppy.videoAvailable && <span className="tag tag--video"><Play size={12} aria-hidden="true" /> video</span>}
        {!door && index !== undefined && <span className="puppy-card__index" aria-hidden="true">{String(index).padStart(2, "0")}</span>}
        {door && <span className="puppy-card__door-panels" aria-hidden="true"><span className="puppy-card__door-panel puppy-card__door-panel--left" /><span className="puppy-card__door-panel puppy-card__door-panel--right" /></span>}
      </div>
      {!door && <div className="puppy-card__body">
        <h3 className="puppy-card__name">{puppy.name}</h3>
        {!compact && !sold && <p className="puppy-card__meta">{puppySubtitle(puppy)}</p>}
      </div>}
    </Link>
  );
}
