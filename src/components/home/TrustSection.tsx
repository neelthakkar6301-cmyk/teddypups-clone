import type { CSSProperties } from "react";
import { Globe2, HeartPulse, MessageSquareMore, Plane } from "lucide-react";
import { trustPoints } from "../../data/howItWorks";
import PupStop from "../mascot/PupStop";
import { CityHorizon } from "./Illustrations";

/** One stamp per trust point: shape, ink colour, tilt and icon. */
const stamps = [
  { shape: "round", ink: "#a24a1a", tilt: "-8deg", Icon: HeartPulse },
  { shape: "ticket", ink: "#1f6b45", tilt: "5deg", Icon: Plane },
  { shape: "oval", ink: "#5a3a28", tilt: "-4deg", Icon: MessageSquareMore },
  { shape: "scallop", ink: "#c2622b", tilt: "7deg", Icon: Globe2 },
];

/** "Why families trust TeddyPups" as a stamped puppy passport, ending at a sunset over the city. */
export default function TrustSection() {
  return (
    <section className="scene passport" aria-labelledby="trust-title" style={{ "--sky-top": "#f0b866", "--sky-bottom": "#a65a30" } as CSSProperties}>
      <div className="gutter passport__inner">
        <div className="book">
          <div className="book__page book__page--left">
            <p className="book__kicker font-scrawl">puppy passport</p>
            <h2 id="trust-title" className="book__title">Why families trust TeddyPups</h2>
            <PupStop className="book__teddy" />
          </div>
          <ul className="book__page book__page--right">
            {trustPoints.map((t, i) => {
              const { shape, ink, tilt, Icon } = stamps[i];
              return (
                <li key={t.title} className="entry" style={{ "--ink-stamp": ink, "--tilt": tilt, "--i": i } as CSSProperties}>
                  <span className={`stamp stamp--${shape}`}>
                    <Icon className="stamp__icon" aria-hidden="true" strokeWidth={1.8} />
                    <span className="stamp__title font-plush">{t.title}</span>
                  </span>
                  <p className="entry__text">{t.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="horizon" aria-hidden="true">
        <span className="horizon__sun" />
        <CityHorizon className="horizon__city" />
      </div>
    </section>
  );
}
