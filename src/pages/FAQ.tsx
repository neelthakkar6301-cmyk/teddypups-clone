import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { FaqAccordion } from "../components/home/FAQSection";
import { faqs } from "../data/faqs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { questionWhatsappUrl } from "../utils/whatsapp";

export default function FAQ() {
  useDocumentTitle("Questions & answers | TeddyPups U.A.E.");
  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" eyebrow="sniff out a question" title="Questions & answers" subtitle="Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7." />
          <p className="counter">{faqs.length} notes on the board</p>
          <p className="faq-ask"><Button href={questionWhatsappUrl} variant="whatsapp">Ask your own question</Button></p>
        </PageContainer>
      </section>
      <section className="section section--flush">
        <PageContainer narrow>
          <FaqAccordion />
        </PageContainer>
      </section>
    </>
  );
}
