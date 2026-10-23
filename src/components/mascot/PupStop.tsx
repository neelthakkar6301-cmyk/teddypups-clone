import { TeddyFront, TeddySide } from "./TeddyArt";

interface Props {
  className?: string;
  facing?: "left" | "right";
  pose?: "side" | "front";
  /** A still stop always shows its own drawing; other stops are anchors the walking actor visits. */
  still?: boolean;
}

/** A place in a scene where Teddy stands. On the homepage the walking actor moves between these. */
export default function PupStop({ className = "", facing = "right", pose = "side", still = false }: Props) {
  return (
    <div className={`pup-stop ${className}`.trim()} data-pup-stop={still ? "still" : "walk"} data-facing={facing} aria-hidden="true">
      {pose === "front" ? <TeddyFront /> : <TeddySide />}
    </div>
  );
}
