import type { EnquiryValues } from "../types/enquiry";
import type { Puppy } from "../types/puppy";

export const WHATSAPP_NUMBER = "971541676733";
export const PHONE_DISPLAY = "+971 54 167 6733";
export const PHONE_TEL = "tel:+971541676733";
export const CONTACT_EMAIL = "teddypupsadmin@gmail.com";
export const DEFAULT_MESSAGE = "Hi TeddyPups! I'd love to know more about your puppies.";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
export const defaultWhatsappUrl = whatsappUrl(DEFAULT_MESSAGE);
export const questionWhatsappUrl = whatsappUrl("Hi TeddyPups! I have a question:");

export function puppyWhatsappUrl(puppy: Puppy, pageUrl: string): string {
  const who = puppy.name !== puppy.breed ? `${puppy.name}, the ${puppy.breed}` : `the ${puppy.breed} (${puppy.gender.toLowerCase()})`;
  return whatsappUrl(`Hi TeddyPups! I'm interested in ${who}: ${pageUrl}`);
}

/** For a puppy that has gone home: ask for one just like them (reference wording). */
export function likeThisWhatsappUrl(puppy: Puppy, pageUrl: string): string {
  return whatsappUrl(`Hi TeddyPups! I loved ${puppy.name} (${pageUrl}). Do you have a puppy like them?`);
}

export function buildEnquiryMessage(v: EnquiryValues, puppyLabel?: string): string {
  const lines = ["Hi TeddyPups!"];
  if (puppyLabel) lines.push(`Puppy: ${puppyLabel}`);
  lines.push(`Name: ${v.name.trim()}`, `Phone: ${v.phone.trim()}`);
  if (v.email.trim()) lines.push(`Email: ${v.email.trim()}`);
  if (v.area.trim()) lines.push(`Area: ${v.area.trim()}`);
  if (v.message.trim()) lines.push("", v.message.trim());
  return lines.join("\n");
}
