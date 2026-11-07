import { business, faqs, services } from "./site-data";

// Only facts already shown on the page: no ratings, reviews, awards or hours we do not have.
export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        name: business.name,
        description:
          "Independent multi-brand home appliance repair in Maihar, Madhya Pradesh: AC, refrigerator, washing machine, deep freezer, microwave oven, car AC, RO water purifier and geyser.",
        telephone: business.phones.map((phone) => phone.tel),
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.locality,
          addressRegion: business.region,
          addressCountry: "IN",
        },
        areaServed: { "@type": "City", name: business.locality },
        ...(business.hours ? { openingHours: business.hours } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Appliance repair services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}
