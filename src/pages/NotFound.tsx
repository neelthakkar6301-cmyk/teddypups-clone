import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import PupStop from "../components/mascot/PupStop";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/puppies", label: "Puppies" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/faq", label: "Questions" },
  { to: "/contact", label: "Contact" },
];

/** A "lost" poster with tear-off tabs, used for unknown pages and unknown puppies. */
export default function NotFound() {
  useDocumentTitle("Not found | TeddyPups U.A.E.");
  return (
    <div className="lost gutter">
      <div className="poster">
        <span className="tape tape--left" style={{ "--tape": "#f6d79a" } as CSSProperties} aria-hidden="true" />
        <span className="tape tape--right" style={{ "--tape": "#cfe5f6" } as CSSProperties} aria-hidden="true" />
        <p className="poster__kicker font-scrawl">have you seen this page?</p>
        <h1 className="poster__title font-plush">Lost<span className="sr-only">: this page has wandered off</span></h1>
        <div className="poster__photo"><PupStop still /></div>
        <p className="poster__desc">One page, last seen wandering off. It answers to the address you typed, but it isn't here any more. Teddy is on the case.</p>
        <p className="poster__reward font-scrawl">if found, take a tab:</p>
        <ul className="poster__tabs" aria-label="Pages that are here">
          {tabs.map((t) => <li key={t.to}><Link className="poster__tab" to={t.to}>{t.label}</Link></li>)}
        </ul>
      </div>
    </div>
  );
}
