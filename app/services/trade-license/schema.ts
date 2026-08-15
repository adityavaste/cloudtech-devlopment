import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const tradeLicenseServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Trade License Registration",

  description:
    "CloudTech provides online Trade License registration and renewal services for shops, restaurants, manufacturers, offices, startups, and businesses across India. Fast documentation, expert assistance, and end-to-end compliance support.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace with your number
    email: "support@cloudtech.host", // Replace with your email
  },

  serviceType: "Trade License Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/trade-license`,

  image: `${BASE_URL}/images/trade-license.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/trade-license`,
  },
};

export const tradeLicenseFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Trade License?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A Trade License is a legal certificate issued by the local municipal authority that allows a business to operate within a specific jurisdiction while complying with local laws and safety standards.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs a Trade License?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Shops, restaurants, hotels, manufacturing units, warehouses, offices, clinics, salons, and most commercial establishments require a Trade License before starting business operations.",
      },
    },
    {
      "@type": "Question",
      name: "Which documents are required for Trade License registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Generally required documents include Aadhaar Card, PAN Card, business address proof, identity proof, passport-size photographs, property tax receipt, rent agreement or ownership proof, and business incorporation documents if applicable.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to obtain a Trade License?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The processing time depends on the municipal authority but typically ranges from 7 to 15 working days after successful document verification.",
      },
    },
    {
      "@type": "Question",
      name: "Can CloudTech help with Trade License renewal?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. CloudTech provides Trade License registration, renewal, modification, and compliance support for businesses across India.",
      },
    },
  ],
};

export const tradeLicenseBreadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${BASE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Trade License",
      item: `${BASE_URL}/services/trade-license`,
    },
  ],
};