import { Sparkle } from "../mascot/TeddyArt";

export interface Star { left: string; top: string; size: number }

/** A scatter of slowly twinkling stars for night scenes. */
export default function Twinkles({ stars, className = "" }: { stars: Star[]; className?: string }) {
  return (
    <div className={`twinkles ${className}`.trim()} aria-hidden="true">
      {stars.map((s, i) => (
        <Sparkle key={`${s.left}-${s.top}`} className="twinkle" style={{ left: s.left, top: s.top, width: s.size, animationDelay: `${(i * 0.4).toFixed(2)}s` }} />
      ))}
    </div>
  );
}
