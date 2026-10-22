import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { faqs as allFaqs } from "../../data/faqs";
import PageContainer from "../layout/PageContainer";
import SectionHeading from "../common/SectionHeading";

interface AccordionProps { ids?: string[] }

export function FaqAccordion({ ids }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const items = ids ? allFaqs.filter((f) => ids.includes(f.id)) : allFaqs;
  return (
    <ul className="faq">
      {items.map((f) => {
        const open = openId === f.id;
        return (
          <li key={f.id} className={`faq__item${open ? " is-open" : ""}`}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={`faq-${f.id}`} id={`faq-btn-${f.id}`} onClick={() => setOpenId(open ? null : f.id)}>
                <span className="faq__mark" aria-hidden="true">?</span>
                <span className="faq__q">{f.question}</span>
                {open ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
              </button>
            </h3>
            <div id={`faq-${f.id}`} role="region" aria-labelledby={`faq-btn-${f.id}`} hidden={!open}><p>{f.answer}</p></div>
          </li>
        );
      })}
    </ul>
  );
}

export default function FAQSection({ ids }: AccordionProps) {
  return (
    <section className="section section--tint" aria-labelledby="faq-title">
      <PageContainer narrow>
        <div className="section__head-row">
          <SectionHeading id="faq-title" title="Questions, answered" />
          <Link className="link-arrow" to="/faq">Read all questions <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <FaqAccordion ids={ids} />
      </PageContainer>
    </section>
  );
}
