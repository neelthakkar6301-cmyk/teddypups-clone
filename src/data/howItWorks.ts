export interface Step { title: string; text: string }
export interface Feature { title: string; text: string }

export const localSteps: Step[] = [
  { title: "Explore our puppies", text: "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information." },
  { title: "Choose your puppy", text: "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions." },
  { title: "Meet before you choose", text: "Spend time bonding before making your decision." },
  { title: "Pick-up or delivery", text: "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably." },
];

export const importSteps: Step[] = [
  { title: "Reserve your puppy", text: "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences." },
  { title: "Personalized consultation", text: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey." },
  { title: "Import and arrival", text: "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family." },
  { title: "Welcome home", text: "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home." },
];

/** Shorter wording used on imported puppy detail pages ("Coming home from abroad"). */
export const abroadSteps: Step[] = [
  { title: "Reserve your puppy", text: "Tell us which puppy has captured your heart." },
  { title: "Personalized consultation", text: "We finalize details with you and share updates on your puppy's journey." },
  { title: "Import and arrival", text: "We manage health checks, travel arrangements, and documentation." },
  { title: "Welcome home", text: "We help your new puppy settle in and ensure a smooth transition into your home." },
];

export const promise: Feature[] = [
  { title: "Hand-selected breeders", text: "We work only with breeders who uphold the highest ethical and health standards." },
  { title: "Full transparency", text: "Photos, videos, and health certificates are shared before your puppy travels." },
  { title: "Safe, stress-free delivery", text: "We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you." },
];

export const delivery: Feature[] = [
  { title: "Take your puppy home the same day", text: "Local puppies are available immediately — visit, fall in love, and go home together." },
  { title: "Delivery within Dubai", text: "Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably." },
  { title: "Safe international cargo", text: "We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free." },
  { title: "Worldwide delivery", text: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
];

export const whyUs: Feature[] = [
  { title: "International cargo", text: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
  { title: "Support 24/7", text: "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away." },
  { title: "Health guarantee", text: "All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
];

export const trustPoints: Feature[] = [
  { title: "Vet-checked & healthy", text: "Every puppy comes vaccinated, dewormed, and with a verified health certificate." },
  { title: "Korea to Dubai, safely", text: "Trusted breeders, safe travel, and premium care from start to finish." },
  { title: "Support 24/7", text: "Always here to help, from choosing your puppy to post-delivery support." },
  { title: "Trusted by families worldwide", text: "Puppies delivered to loving homes all around the world." },
];

export const journeySteps: Step[] = [
  { title: "Choose your breed", text: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle." },
  { title: "Get photos & details", text: "Our team will share real photos, health details, and all necessary information directly on WhatsApp." },
  { title: "Secure & safe delivery", text: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free." },
];
