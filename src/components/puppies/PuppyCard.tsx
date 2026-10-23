import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Puppy } from "../../types/puppy";
import { puppySubtitle } from "../../utils/formatters";
import { focusOf, mediaUrl } from "../../utils/images";
import { PAW_PATH } from "../mascot/TeddyArt";

const WASHES = ["#f2be6b", "#bfddf5", "#fbe3b4", "#f9cdbf", "#e8c39a"];

/** Small deterministic random generator so every card keeps the same "hand-drawn" look. */
function seeded(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/** A wobbly circle (viewBox 0..100), like a quick pencil ring. */
function ring(rand: () => number, r: number, turns = 1): string {
  const steps = Math.round(28 * turns);
  const start = rand() * Math.PI * 2;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = start + (i / 28) * Math.PI * 2;
    const rr = r + (rand() - 0.5) * 2.2;
    pts.push(`${(50 + Math.cos(a) * rr).toFixed(2)} ${(50 + Math.sin(a) * rr).toFixed(2)}`);
  }
  return `M${pts.join(" L")}`;
}

type Doodle = "paw" | "heart" | "sparkle" | "dots" | "swish";
const DOODLES: Doodle[] = ["paw", "heart", "sparkle", "dots", "swish"];

function DoodleMark({ kind, x, y }: { kind: Doodle; x: number; y: number }) {
  const t = `translate(${x} ${y})`;
  switch (kind) {
    case "paw": return <g transform={`${t} scale(0.16) translate(-32 -32)`} className="sketch__doodle sketch__doodle--fill"><path d={PAW_PATH} /></g>;
    case "heart": return <path transform={t} className="sketch__doodle sketch__doodle--line" d="M0 3 C-6 -2 -7 -7 -3.5 -8.5 C-1.5 -9.2 0 -7.5 0 -6 C0 -7.5 1.5 -9.2 3.5 -8.5 C7 -7 6 -2 0 3Z" />;
    case "sparkle": return <path transform={t} className="sketch__doodle sketch__doodle--ink" d="M0 -7 C0.8 -2 2 -0.8 7 0 C2 0.8 0.8 2 0 7 C-0.8 2 -2 0.8 -7 0 C-2 -0.8 -0.8 -2 0 -7Z" />;
    case "dots": return <g transform={t} className="sketch__doodle sketch__doodle--ink"><circle cx="-4" cy="0" r="1.6" /><circle cx="1" cy="-3" r="1.6" /><circle cx="5" cy="1" r="1.6" /></g>;
    default: return <path transform={t} className="sketch__doodle sketch__doodle--accent" d="M-4 -5 L4 -3 M-5 0 L4 2 M-3 5 L3 6.5" />;
  }
}

interface Props { puppy: Puppy; index: number; small?: boolean }

/** A puppy drawn into Teddy's sketchbook: round photo, inked ring, colour wash and doodles. */
export default function PuppyCard({ puppy, index, small = false }: Props) {
  const rand = seeded(index + puppy.slug.length * 7);
  const tilt = ((rand() - 0.5) * 5).toFixed(2);
  const wash = WASHES[Math.floor(rand() * WASHES.length)];
  const washShift = `${((rand() - 0.5) * 8).toFixed(1)}% ${(3 + rand() * 4).toFixed(1)}%`;
  const line = ring(rand, 47, 1.08);
  const retrace = ring(rand, 49, 0.35);
  const doodles = [0, 1].map((k) => ({
    kind: DOODLES[Math.floor(rand() * DOODLES.length)],
    angle: (k === 0 ? 200 : 20) + rand() * 60,
  }));
  const sold = puppy.status === "sold";
  const label = [puppy.name, ...(puppy.name !== puppy.breed ? [puppy.breed] : []), puppy.gender.toLowerCase(), ...(puppy.age ? [puppy.age] : []), sold ? "gone home" : "available"].join(", ");

  return (
    <Link to={`/puppies/${puppy.slug}`} className={`sketch${small ? " sketch--small" : ""}`} aria-label={label}
      style={{ "--tilt": `${tilt}deg`, "--d": `${(index % 9) * 70}ms`, "--wash": wash } as CSSProperties}>
      <span className="sketch__frame">
        <svg className="sketch__wash" viewBox="0 0 100 100" style={{ translate: washShift }} aria-hidden="true">
          <path d="M50 4 C76 3 97 22 96 50 C95 77 76 97 49 96 C22 95 4 76 5 49 C6 23 25 5 50 4Z" />
        </svg>
        <span className="sketch__photo">
          <img src={mediaUrl(puppy.images[0], small ? 256 : 640)} alt="" loading="lazy" width="320" height="320" style={{ objectPosition: focusOf(puppy.images[0]) }} />
        </span>
        <svg className="sketch__ink" viewBox="0 0 100 100" aria-hidden="true">
          <path className="sketch__line" pathLength={1} d={line} />
          <path className="sketch__line sketch__line--retrace" pathLength={1} d={retrace} />
          {!small && doodles.map((d, i) => {
            const a = (d.angle * Math.PI) / 180;
            return <DoodleMark key={i} kind={d.kind} x={50 + Math.cos(a) * 60} y={50 + Math.sin(a) * 60} />;
          })}
        </svg>
        {sold
          ? <span className="sketch__sticker sketch__sticker--home font-scrawl">gone home ♥</span>
          : <span className="sketch__sticker font-scrawl">Available</span>}
        {Boolean(puppy.videos?.length) && !small && <span className="sketch__video">▶ video</span>}
      </span>
      <span className="sketch__name font-plush">{puppy.name}</span>
      {!small && <span className="sketch__meta">{puppySubtitle(puppy)}</span>}
    </Link>
  );
}
