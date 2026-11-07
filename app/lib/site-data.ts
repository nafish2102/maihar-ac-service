import type { IconName } from "../components/icons";

export const business = {
  name: "Maihar AC Service Center",
  shortName: "Maihar AC",
  address: "Housing Board Colony, Near Simran School, Maihar, Madhya Pradesh",
  phones: [
    { display: "9691365575", tel: "+919691365575" },
    { display: "7724959825", tel: "+917724959825" },
  ],
  // WhatsApp uses the first number with India's country code (91).
  whatsappNumber: "919691365575",
  // Add real opening hours here, e.g. "Mon-Sat, 9:00 am - 7:00 pm". While null,
  // the site asks visitors to call to confirm availability (no hours are invented).
  hours: null as string | null,
  locality: "Maihar",
  region: "Madhya Pradesh",
  streetAddress: "Housing Board Colony, Near Simran School",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const callLink = `tel:${business.phones[0].tel}`;
export const whatsappDefault = whatsappLink(
  "Hello, I need help with an appliance repair.",
);
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  "Housing Board Colony, Near Simran School, Maihar, Madhya Pradesh",
)}&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Housing Board Colony, Near Simran School, Maihar, Madhya Pradesh",
)}`;

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  image: string;
  alt: string;
  position?: string; // object-position for consistent cropping
};

export const services: Service[] = [
  {
    icon: "air-conditioner",
    title: "AC Repair & Installation",
    description:
      "Help with weak cooling, leaks, unusual noise, servicing, and setting up or shifting an AC.",
    image: "/images/service-ac.jpg",
    alt: "Technician repairing an air conditioner unit on a rooftop",
    position: "50% 50%",
  },
  {
    icon: "refrigerator",
    title: "Refrigerator Repair",
    description:
      "Support for cooling problems, unusual sounds, leaks and other everyday refrigerator faults.",
    image: "/images/service-refrigerator.jpg",
    alt: "Open refrigerator in a modern kitchen",
    position: "50% 40%",
  },
  {
    icon: "washing-machine",
    title: "Washing Machine Repair",
    description:
      "Help with drum, drainage, spin and start-up problems in top-load and front-load machines.",
    image: "/images/service-washing-machine.jpg",
    alt: "Close-up of a front-load washing machine drum",
    position: "50% 50%",
  },
  {
    icon: "freezer",
    title: "Deep Freezer Repair",
    description:
      "Repair support for deep freezers and chest freezers that are not cooling as they should.",
    image: "/images/service-deep-freezer.jpg",
    alt: "Glass-top chest freezer filled with frozen food",
    position: "50% 50%",
  },
  {
    icon: "microwave",
    title: "Microwave Oven Repair",
    description:
      "Attention for microwaves that do not heat, will not start, or show control and plate issues.",
    image: "/images/service-microwave.jpg",
    alt: "Technician repairing a microwave oven",
    position: "50% 45%",
  },
  {
    icon: "car",
    title: "Car AC Repair",
    description:
      "Help when your car AC is not cooling well, makes noise, or needs a proper check-up.",
    image: "/images/service-car-ac.jpg",
    alt: "Close-up of a car air-conditioning control panel",
    position: "50% 50%",
  },
  {
    icon: "water-drop",
    title: "RO Water Purifier Service",
    description:
      "Servicing and repair support for RO water purifiers, including flow and taste concerns.",
    image: "/images/service-water-purifier.jpg",
    alt: "Filling a bottle from a tap-mounted water filter",
    position: "50% 40%",
  },
  {
    icon: "geyser",
    title: "Geyser Repair",
    description:
      "Help with geysers that are not heating, leaking, or not switching on as expected.",
    image: "/images/service-geyser.jpg",
    alt: "Wall-mounted electric water heater in a bathroom",
    position: "50% 12%",
  },
];

export const brands = [
  "LG",
  "Samsung",
  "Whirlpool",
  "Haier",
  "Voltas",
  "IFB",
  "Godrej",
  "Panasonic",
  "Daikin",
  "Hitachi",
  "Blue Star",
];

export const appliances = [
  "AC",
  "Refrigerator",
  "Washing machine",
  "Deep freezer",
  "Microwave oven",
  "Car AC",
  "RO water purifier",
  "Geyser",
  "Other",
];

// Add genuine reviews here only, exactly as customers gave them.
export type Review = { name: string; text: string; source: string };
export const reviews: Review[] = [];

export const faqs = [
  {
    q: "Which appliances do you repair in Maihar?",
    a: "We repair ACs, refrigerators, washing machines, deep freezers, microwave ovens, car ACs, RO water purifiers and geysers for homes and businesses.",
  },
  {
    q: "Are you an authorised service center for any brand?",
    a: "No. We are an independent multi-brand repair service. We work on popular brands such as LG, Samsung, Whirlpool, Haier, Voltas, IFB, Godrej, Panasonic, Daikin, Hitachi and Blue Star, but we are not affiliated with or authorised by them.",
  },
  {
    q: "My AC is not cooling properly. What should I do?",
    a: "Switch the AC off if you notice water leaks, burning smells or loud noises. Then call or WhatsApp us with the brand, model and what you are seeing, and we will guide you on the next step.",
  },
  {
    q: "My refrigerator is not cooling or is making noise. Can you help?",
    a: "Yes. Tell us the brand, the type (single door, double door or side-by-side) and the problem. We will explain the likely issue and how we can help.",
  },
  {
    q: "Do you repair both top-load and front-load washing machines?",
    a: "Yes. We help with common issues such as the machine not spinning, not draining, not starting or making unusual noise. Share your machine type and brand when you contact us.",
  },
  {
    q: "My microwave is not heating. Is it worth repairing?",
    a: "It depends on the fault. Contact us with the brand and symptoms and we will explain the options before any work begins.",
  },
  {
    q: "Do you service RO water purifiers and geysers?",
    a: "Yes. We offer RO water purifier servicing and repair, and geyser repair for issues like no heating, leakage or the unit not switching on.",
  },
  {
    q: "How do I book a service?",
    a: "Call us, message us on WhatsApp, or use the booking form on this page. Describe the problem and we will help you schedule a visit.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Housing Board Colony, near Simran School, Maihar. Call us to confirm whether we can visit your location.",
  },
];
