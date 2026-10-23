import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Search } from "lucide-react";
import Button from "../components/common/Button";
import PupStop from "../components/mascot/PupStop";
import { faqs } from "../data/faqs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import PageContainer from "../components/layout/PageContainer";
import { questionWhatsappUrl } from "../utils/whatsapp";

/** Pin colour and tilt for each note on the board. */
const NOTE_LOOKS = [
  { tilt: "-1.6deg", pin: "var(--color-toffee)" }, { tilt: "1.2deg", pin: "var(--color-sky-deep)" },
  { tilt: "-0.8deg", pin: "#d9a13c" }, { tilt: "1.8deg", pin: "#c45a6a" },
  { tilt: "-1.2deg", pin: "var(--color-toffee)" }, { tilt: "0.7deg", pin: "var(--color-sky-deep)" },
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Wraps every match of `query` in <mark>. */
function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  return text.split(new RegExp(`(${escape(query)})`, "gi")).map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part));
}

export default function FAQ() {
  useDocumentTitle("Questions & answers | TeddyPups U.A.E.");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  useReveal(listRef, ".note");

  const q = query.trim();
  const searching = q.length > 0;
  const matches = searching ? faqs.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q.toLowerCase())) : faqs;
  const isOpen = (id: string) => (searching ? true : openId === id);
  const count = searching ? `${matches.length} ${matches.length === 1 ? "note" : "notes"} found` : `${faqs.length} notes on the board`;

  return (
    <section className="scene faqroom" data-tone="dark" aria-labelledby="faq-title" style={{ "--sky-top": "#a95e32", "--sky-bottom": "#331c11" } as CSSProperties}>
      <PageContainer>
        <header className="faqroom__head">
          <h1 id="faq-title" className="text-giant">Questions &amp; answers</h1>
          <p className="text-lede ink-soft faqroom__lede">Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.</p>
        </header>

        <div className="notes" data-open={searching || openId ? "" : undefined}>
          <aside className="notes__side" aria-label="Find a question">
            <label className="notes__label font-scrawl" htmlFor="faq-search">sniff out a question</label>
            <div className="notes__search">
              <Search className="notes__lens" aria-hidden="true" />
              <input id="faq-search" type="search" placeholder="delivery, Korea, vaccinated…" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <p className="notes__count" aria-live="polite">{count}</p>
            <div className="notes__teddy">
              <span className="notes__bubble font-plush" aria-hidden="true"><span className="notes__q">?</span><span className="notes__a">!</span></span>
              <PupStop facing="right" />
            </div>
            <Button href={questionWhatsappUrl} variant="whatsapp" className="notes__ask">Ask your own question</Button>
          </aside>

          <div className="notes__board">
            <ul ref={listRef} className="notes__list">
              {matches.map((f, i) => {
                const look = NOTE_LOOKS[faqs.indexOf(f) % NOTE_LOOKS.length];
                const open = isOpen(f.id);
                return (
                  <li key={f.id} className="note" data-unfolded={open ? "" : undefined} style={{ "--tilt": look.tilt, "--pin": look.pin, "--i": i } as CSSProperties}>
                    <span className="note__pin" aria-hidden="true" />
                    <h2 className="note__q">
                      <button type="button" id={`q-${f.id}`} aria-expanded={open} aria-controls={`a-${f.id}`} onClick={() => setOpenId(openId === f.id ? null : f.id)}>
                        <span className="font-plush-text">{highlight(f.question, q)}</span>
                        <span className="note__chevron" aria-hidden="true" />
                      </button>
                    </h2>
                    <div id={`a-${f.id}`} role="region" aria-labelledby={`q-${f.id}`} className="note__answer">
                      <div className="note__flap"><p>{highlight(f.answer, q)}</p></div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {searching && matches.length === 0 && (
              <div className="note note--empty">
                <span className="note__pin" aria-hidden="true" />
                <p className="font-plush-text note__empty-title">No note about “{q}” yet.</p>
                <p><a className="link-ink" href={questionWhatsappUrl} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a> and we'll answer.</p>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
