import { useLocation } from "react-router-dom";
import { PawPrint, TeddySide } from "../mascot/TeddyArt";

const PRINTS = [
  { left: "18%", top: "6px", rotate: "14deg", delay: "0.16s" },
  { left: "27%", top: "-4px", rotate: "6deg", delay: "0.28s" },
  { left: "36%", top: "7px", rotate: "18deg", delay: "0.4s" },
  { left: "45%", top: "-3px", rotate: "4deg", delay: "0.52s" },
  { left: "54%", top: "6px", rotate: "16deg", delay: "0.64s" },
];

/**
 * Quilt "curtain" that Teddy runs across on every page load / route change, then lifts away.
 * Re-keyed on pathname so the CSS animation replays. Hidden for reduced motion.
 */
export default function Curtain() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="curtain" aria-hidden="true">
      <div className="curtain__blanket">
        <div className="curtain__stage">
          <div className="curtain__prints">
            {PRINTS.map((p) => (
              <span key={p.left} className="curtain__print" style={{ left: p.left, top: p.top, rotate: p.rotate, animationDelay: p.delay }}><PawPrint /></span>
            ))}
          </div>
          <div className="curtain__runner"><TeddySide /></div>
          <p className="curtain__note font-scrawl">every puppy is family</p>
        </div>
      </div>
    </div>
  );
}
