import { TeddyFront, TeddySide } from "./TeddyArt";

interface Props {
  className?: string;
  facing?: "left" | "right";
  pose?: "side" | "front";
  /** A still stop always shows its own drawing; other stops are anchors the walking actor visits. */
  still?: boolean;
  /** "treadmill": Teddy keeps walking on the spot here while the page scrolls (pinned door hallway). */
  act?: "treadmill";
}

/** A place in a scene where Teddy stands. On the homepage the walking actor moves between these. */
export default function PupStop({ className = "", facing = "right", pose = "side", still = false, act }: Props) {
  return (
    <div className={`pup-stop ${className}`.trim()} data-pup-stop={still ? "still" : "walk"} data-facing={facing} data-act={act} aria-hidden="true">
      {pose === "front" ? <TeddyFront /> : <TeddySide />}
    </div>
  );
}
