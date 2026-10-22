import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import ContactLetterForm from "../components/contact/ContactLetterForm";
import { MAPS_URL } from "../data/navigation";
import { showroomPhotos } from "../data/media";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { mediaUrl } from "../utils/images";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, defaultWhatsappUrl } from "../utils/whatsapp";

export default function Contact() {
  useDocumentTitle("Visit & contact | TeddyPups U.A.E.");
  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" title="Get in touch with us" subtitle="Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!" />
        </PageContainer>
      </section>
      <section className="section section--flush">
        <PageContainer className="contact">
          <ContactLetterForm />
          <aside className="contact__aside" aria-label="Other ways to reach us">
            <Button href={defaultWhatsappUrl} variant="whatsapp"><MessageCircle size={18} aria-hidden="true" /> WhatsApp {PHONE_DISPLAY}</Button>
            <dl className="contact__list">
              <div><dt><Phone size={16} aria-hidden="true" /> call us</dt><dd><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd></div>
              <div><dt><Mail size={16} aria-hidden="true" /> email</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
            </dl>
          </aside>
        </PageContainer>
      </section>
      <section className="section section--tint" aria-labelledby="visit-title">
        <PageContainer className="visit">
          <div>
            <SectionHeading id="visit-title" title="Visit us in Downtown Dubai" subtitle="Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face." />
            <p className="visit__place"><MapPin size={18} aria-hidden="true" /> Downtown Dubai, United Arab Emirates</p>
            <Button href={MAPS_URL} variant="secondary">Open in Google Maps</Button>
          </div>
          <img src={mediaUrl(showroomPhotos[3].path, 1080)} alt={showroomPhotos[3].alt} loading="lazy" width="520" height="520" />
        </PageContainer>
      </section>
    </>
  );
}
