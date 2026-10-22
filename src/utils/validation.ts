import type { EnquiryErrors, EnquiryValues } from "../types/enquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!v.name.trim()) errors.name = "Please tell us your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) errors.phone = "Please add a phone or WhatsApp number.";
  else if (!/^\+?[\d\s\-().]+$/.test(v.phone.trim()) || digits.length < 8 || digits.length > 15)
    errors.phone = "Enter a valid number with country code, e.g. +971 50 123 4567.";
  if (v.email.trim() && !EMAIL_RE.test(v.email.trim())) errors.email = "That email address doesn't look right.";
  return errors;
}
