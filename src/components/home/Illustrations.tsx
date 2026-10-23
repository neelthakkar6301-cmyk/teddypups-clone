import { useId } from "react";

/** Line drawing of the Downtown Dubai skyline (Burj Khalifa in the middle). */
export function DubaiSkyline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M2 118 H298" />
      <path d="M12 118 V84 H30 V118 M36 118 V64 H56 V118 M62 118 V92 H74 V118" />
      <path d="M152 118 V52 L155 36 L156.5 8 L158 36 L161 52 V118 M146 118 V74 L152 66 M167 118 V74 L161 66" />
      <path d="M186 118 V74 L202 66 V118 M210 118 V56 H228 V118 M236 118 V88 H252 V118 M258 118 V70 H276 V118 M282 118 V94 H296 V118" />
    </svg>
  );
}

interface FlightProps { className?: string; photo: string; label: string }

/** Dotted flight route from Korea up to a plane carrying a puppy in its porthole, landing in Dubai. */
export function FlightPath({ className, photo, label }: FlightProps) {
  const clip = useId();
  return (
    <div className={className}>
      <svg viewBox="0 0 660 300" role="img" aria-label={label}>
        <path className="flight__route" d="M190 238 C240 120 360 70 500 82" />
        <circle className="flight__dot" cx="190" cy="238" r="8" />
        <text className="flight__label" x="168" y="276">Korea</text>
        <text className="flight__label" x="602" y="222">Dubai</text>
        <g className="flight__plane" transform="translate(560 100) rotate(26)">
          <path className="flight__wing flight__wing--far" d="M-12 -24 L18 -86 L44 -80 L24 -24Z" />
          <path className="flight__wing" d="M-84 -4 L-106 -44 L-82 -42 L-60 -14Z" />
          <path className="flight__body" d="M-92 2 C-92 -20 -42 -30 18 -30 C70 -30 98 -14 98 2 C98 16 72 28 18 28 C-42 28 -92 22 -92 2Z" />
          <path className="flight__wing" d="M-18 22 L16 84 L44 78 L26 22Z" />
          <defs><clipPath id={clip}><circle cx="38" cy="-1" r="15" /></clipPath></defs>
          <image href={photo} x="23" y="-16" width="30" height="30" clipPath={`url(#${clip})`} preserveAspectRatio="xMidYMid slice" />
          <circle className="flight__porthole" cx="38" cy="-1" r="15" />
          <path className="flight__line" d="M72 -18 Q86 -10 88 2" />
        </g>
      </svg>
    </div>
  );
}

/** City silhouette that the dusk scene rises out of. Fill comes from CSS. */
export function CityHorizon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 160 V128 H40 V112 H70 V124 H100 V96 H128 V120 H160 V104 H190 V132 H230 V88 H252 V70 H262 V88 H284 V118 H330 V100 H360 V122 H400 V84 H430 V112 H470 V100 H500 V126 H560 V92 H590 V60 L600 30 L610 60 V92 H640 V118 H680 V96 H720 V124 H760 V106 H800 V82 H826 V114 H870 V98 H900 V128 H940 V72 H968 V104 H1010 V90 H1040 V120 H1080 V100 H1120 V116 H1160 V86 H1190 V122 H1240 V104 H1270 V94 H1300 V126 H1350 V110 H1390 V120 H1440 V160Z" />
    </svg>
  );
}

/** Wicker basket that Teddy sits in at the bottom of every page. */
export function Basket({ part }: { part: "back" | "front" }) {
  if (part === "back") {
    return (
      <svg className="basket__back" viewBox="0 0 300 240" aria-hidden="true">
        <ellipse className="basket__hollow" cx="150" cy="150" rx="118" ry="26" />
      </svg>
    );
  }
  return (
    <svg className="basket__front" viewBox="0 0 300 240" aria-hidden="true">
      <path className="basket__body" d="M34 152 Q150 196 266 152 L246 228 Q150 246 54 228Z" />
      <path className="basket__weave" d="M44 182 Q150 214 256 182 M50 206 Q150 232 250 206" />
      <path className="basket__weave basket__weave--stakes" d="M80 166 L86 234 M115 174 L118 240 M150 177 V241 M185 174 L182 240 M220 166 L214 234" />
      <path className="basket__rim-line" d="M32 152 Q150 194 268 152" />
      <path className="basket__rim" d="M32 152 Q150 194 268 152" />
    </svg>
  );
}

/** Dotted route to a little house, used in the third chat message. */
export function DeliveryRoute({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 70" aria-hidden="true">
      <path className="route__line" d="M12 52 C60 20 110 64 170 34" />
      <circle className="route__dot" cx="12" cy="52" r="5" />
      <path className="route__home" d="M170 40 L188 24 L206 40 V60 H170Z" />
      <path className="route__heart" d="M188 50 C184 46 180 44 182 41 C184 38 187 39 188 42 C189 39 192 38 194 41 C196 44 192 46 188 50Z" />
    </svg>
  );
}
