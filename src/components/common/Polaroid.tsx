import type { CSSProperties } from "react";
import type { FamilyPhoto } from "../../data/testimonials";
import { imageSizes } from "../../data/imageSizes";
import { mediaUrl } from "../../utils/images";
import { PawPrint } from "../mascot/TeddyArt";

type TapeSpot = "center" | "left" | "right" | "corners";

/** Tilt, tape colour and tape spot, cycled so a wall of prints looks hand-hung. */
const LOOKS: { tilt: string; tape: string; spot: TapeSpot }[] = [
  { tilt: "-2.2deg", tape: "#f6d79a", spot: "center" },
  { tilt: "1.6deg", tape: "#f9cdbf", spot: "left" },
  { tilt: "-0.9deg", tape: "#cfe5f6", spot: "right" },
  { tilt: "2.4deg", tape: "#f6d79a", spot: "corners" },
  { tilt: "-1.5deg", tape: "#e9dcc4", spot: "center" },
  { tilt: "0.8deg", tape: "#f6d79a", spot: "right" },
  { tilt: "-2.6deg", tape: "#f9cdbf", spot: "left" },
  { tilt: "1.2deg", tape: "#cfe5f6", spot: "center" },
];

interface Props {
  photo: FamilyPhoto;
  look: number;
  label: string;
  onOpen: () => void;
  width?: number;
  /** Teddy pats the print with a paw as it lands on the wall. */
  paw?: boolean;
}

/** A taped polaroid print that opens the photo viewer. */
export default function Polaroid({ photo, look, label, onOpen, width = 640, paw = false }: Props) {
  const { tilt, tape, spot } = LOOKS[look % LOOKS.length];
  const [w, h] = imageSizes[photo.path.split("/").slice(0, 2).join("/")] ?? [320, 368];
  return (
    <button type="button" className="print" aria-label={label} onClick={onOpen}>
      <span className="polaroid" style={{ "--tilt": tilt, "--tape": tape } as CSSProperties}>
        {spot === "corners"
          ? <><span className="tape tape--tl" /><span className="tape tape--tr" /></>
          : <span className={`tape tape--${spot}`} />}
        <span className="polaroid__photo">
          <img src={mediaUrl(photo.path, width)} alt="A happy TeddyPups family with their new puppy" loading="lazy" width={w} height={h} />
        </span>
        <span className="polaroid__caption font-scrawl">{photo.caption}</span>
      </span>
      {paw && <PawPrint className="print__paw" />}
    </button>
  );
}
