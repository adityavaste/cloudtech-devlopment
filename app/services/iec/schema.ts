import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const iecServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Import Export Code (IEC) Registration",

  description:
    "CloudTech provides fast and hassle-free Import Export Code (IEC) Registration online. Get your IEC certificate from DGFT for import and export businesses anywhere in India with expert support and quick processing.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Import Export Code (IEC) Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/iec`,

  image: `${BASE_URL}/images/iec-registration.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/iec`,
  },
};

export const iecFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is an Import Export Code (IEC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Import Export Code (IEC) is a 10-digit registration issued by the Directorate General of Foreign Trade (DGFT) that is mandatory for businesses importing or exporting goods and services from India.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs an IEC Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Any individual, partnership, LLP, private limited company, or business planning to import or export goods or services from India requires an IEC Registration.",
      },
    },
    {
      "@type": "Question",
      name: "How long does IEC Registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "IEC Registration is generally processed within 1 to 3 working days after successful document verification.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for IEC Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "PAN Card, Aadhaar Card, business address proof, cancelled cheque, bank certificate, email address, and mobile number are commonly required.",
      },
    },
    {
      "@type": "Question",
      name: "Is IEC valid for a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. IEC remains valid for a lifetime, but businesses must update or confirm their IEC details annually on the DGFT portal as per government guidelines.",
      },
    },
  ],
};

export const iecBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "IEC Registration",
      item: `${BASE_URL}/services/iec`,
    },
  ],
};