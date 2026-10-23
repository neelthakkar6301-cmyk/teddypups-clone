import { Link } from "react-router-dom";
import type { Puppy } from "../../types/puppy";
import { doorMeta } from "../../utils/formatters";
import { mediaUrl } from "../../utils/images";
import { PawPrint } from "../mascot/TeddyArt";

/** Door paint, cycled along a row of doors. */
const DOOR_COLORS = ["#a24a1a", "#5a3a28", "#d4893f", "#b8644a", "#7a4a2e"];

interface Props { puppy: Puppy; index: number; open?: boolean }

/** A puppy behind an arched door: the leaf swings open on hover, focus or when Teddy walks by. */
export default function PuppyDoor({ puppy, index, open }: Props) {
  const sold = puppy.status === "sold";
  return (
    <li className="door" data-open={open ? "true" : undefined}>
      <Link className="door__link" to={`/puppies/${puppy.slug}`} style={{ ["--door" as string]: DOOR_COLORS[index % DOOR_COLORS.length] }}>
        <span className="door__plate">
          <span className="door__name font-plush">{puppy.name}</span>
          <span className="door__meta">{doorMeta(puppy)}</span>
        </span>
        <span className="door__frame">
          <span className="door__room">
            <img src={mediaUrl(puppy.images[0], 640)} alt={`${puppy.name === puppy.breed ? "" : `${puppy.name}, `}${puppy.gender.toLowerCase()} ${puppy.breed} puppy`} loading="lazy" width="320" height="416" />
          </span>
          <span className="door__way" aria-hidden="true">
            <span className="door__leaf">
              <PawPrint className="door__peephole" />
              <span className="door__knob" />
            </span>
          </span>
          <span className={`door__tag font-scrawl${sold ? " door__tag--home" : ""}`}>{sold ? "gone home" : "Available"}</span>
        </span>
      </Link>
    </li>
  );
}
