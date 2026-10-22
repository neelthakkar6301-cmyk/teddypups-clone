import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, defaultWhatsappUrl } from "../../utils/whatsapp";

/** Sticky bottom action bar shown on small screens. */
export default function WhatsAppButton() {
  return (
    <div className="action-bar">
      <a className="btn btn--whatsapp" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp us
      </a>
      <a className="btn btn--secondary" href={PHONE_TEL}><Phone size={18} aria-hidden="true" /> Call</a>
    </div>
  );
}
