export interface EnquiryValues {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
}
export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;
