import type { CSSProperties } from "react";
import { faqs } from "../../data/faqs";
import Button from "../common/Button";
import Twinkles, { type Star } from "../common/Twinkles";
import PupStop from "../mascot/PupStop";
import { Sparkle } from "../mascot/TeddyArt";

const STARS: Star[] = [
  { left: "8%", top: "12%", size: 16 }, { left: "22%", top: "30%", size: 9 }, { left: "41%", top: "8%", size: 12.6 },
  { left: "57%", top: "22%", size: 8 }, { left: "72%", top: "6%", size: 14.4 }, { left: "88%", top: "18%", size: 10.8 },
  { left: "95%", top: "42%", size: 9 }, { left: "4%", top: "58%", size: 10.8 }, { left: "34%", top: "70%", size: 7.2 },
  { left: "63%", top: "84%", size: 9.9 }, { left: "83%", top: "66%", size: 12.6 },
];

/** Homepage preview of the FAQ, under the night sky. */
export default function FAQSection({ ids }: { ids: string[] }) {
  const items = faqs.filter((f) => ids.includes(f.id));
  return (
    <section className="scene night" data-tone="dark" aria-labelledby="questions-title" style={{ "--sky-top": "#4d2b19", "--sky-bottom": "#2f1a10" } as CSSProperties}>
      <Twinkles stars={STARS} />
      <div className="night__grid gutter">
        <div className="night__intro">
          <h2 id="questions-title" className="text-huge">Questions, answered</h2>
          <Button to="/faq" variant="secondary" className="night__cta">Read all questions</Button>
          <div className="night__pup">
            <span className="night__wonder font-plush" aria-hidden="true">?</span>
            <PupStop className="night__teddy" />
          </div>
        </div>
        <dl className="night__list">
          {items.map((f) => (
            <div key={f.id} className="qa">
              <dt className="qa__q font-plush"><Sparkle className="qa__star" />{f.question}</dt>
              <dd className="qa__a">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
