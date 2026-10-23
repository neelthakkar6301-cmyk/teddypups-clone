import type { CSSProperties } from "react";
import Button from "../components/common/Button";
import ContactLetterForm from "../components/contact/ContactLetterForm";
import { DubaiSkyline } from "../components/home/Illustrations";
import PupStop from "../components/mascot/PupStop";
import { PawPrint } from "../components/mascot/TeddyArt";
import { MAPS_URL } from "../data/navigation";
import { showroomPhotos } from "../data/media";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { mediaUrl } from "../utils/images";
import PageContainer from "../components/layout/PageContainer";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, defaultWhatsappUrl } from "../utils/whatsapp";

const showroom = showroomPhotos[3];

export default function Contact() {
  useDocumentTitle("Visit & contact | TeddyPups U.A.E.");
  return (
    <section className="scene contact" aria-labelledby="contact-title" style={{ "--sky-top": "#fff9ee", "--sky-bottom": "#f9dca4" } as CSSProperties}>
      <PageContainer>
        <header className="contact__head">
          <h1 id="contact-title" className="text-giant contact__title">Get in touch with us</h1>
          <p className="text-lede ink-soft">Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!</p>
        </header>

        <div className="contact__grid">
          <div className="contact__letter">
            <ContactLetterForm />
            <PupStop still className="contact__teddy" />
          </div>
          <div className="contact__aside">
            <Button href={defaultWhatsappUrl} variant="whatsapp" className="contact__wa">WhatsApp {PHONE_DISPLAY}</Button>
            <dl className="contact__list">
              <div><dt className="font-scrawl">call us</dt><dd><a className="link-ink" href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd></div>
              <div><dt className="font-scrawl">email</dt><dd><a className="link-ink" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
            </dl>
            <section className="shopfront" aria-labelledby="visit-title">
              <DubaiSkyline className="shopfront__city" />
              <div className="visit">
                <div>
                  <h2 id="visit-title" className="visit__title">Visit us in Downtown Dubai</h2>
                  <p className="visit__text">Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
                  <p className="visit__place"><PawPrint className="visit__paw" /> Downtown Dubai, United Arab Emirates</p>
                  <Button href={MAPS_URL} variant="secondary" className="visit__map">Open in Google Maps</Button>
                </div>
                <figure className="visit__photo">
                  <img src={mediaUrl(showroom.path, 640)} alt={showroom.alt} loading="lazy" width="176" height="235" style={{ objectPosition: "45.3% 44.4%" }} />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
