import { useState, type ChangeEvent, type FormEvent } from "react";
import type { EnquiryErrors, EnquiryValues } from "../types/enquiry";
import { validateEnquiry } from "../utils/validation";
import { buildEnquiryMessage, whatsappUrl } from "../utils/whatsapp";

export function useEnquiryForm(initialMessage: string, puppyLabel?: () => string | undefined) {
  const [values, setValues] = useState<EnquiryValues>({ name: "", phone: "", email: "", area: "", message: initialMessage });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [opened, setOpened] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryValues]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    window.open(whatsappUrl(buildEnquiryMessage(values, puppyLabel?.())), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return { values, errors, opened, onChange, onSubmit };
}
