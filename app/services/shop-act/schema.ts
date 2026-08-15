import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const shopActServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Shop Act Registration",

  description:
    "Get Shop Act (Shop & Establishment License) Registration online with CloudTech. We help businesses, startups, shops, offices, restaurants, cafes, salons, and commercial establishments obtain their Shop Act License quickly and compliantly across India.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Shop Act Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/shop-act`,

  image: `${BASE_URL}/images/shop-act.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/shop-act`,
  },
};

export const shopActFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Shop Act Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Shop Act Registration, also known as Shop and Establishment Registration, is a government license required for shops, offices, restaurants, and commercial establishments operating in India.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs a Shop Act License?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Every business operating from a commercial establishment such as a retail shop, office, salon, restaurant, clinic, or service business may require Shop Act Registration as per state regulations.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for Shop Act Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Commonly required documents include Aadhaar Card, PAN Card, address proof of the business, owner's photograph, rent agreement or property documents, electricity bill, and business details.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Shop Act Registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The registration process generally takes 3 to 7 working days depending on the state's approval process and document verification.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose CloudTech for Shop Act Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "CloudTech provides end-to-end assistance including document verification, application filing, government portal submission, and continuous support until your Shop Act License is issued.",
      },
    },
  ],
};

export const shopActBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Shop Act Registration",
      item: `${BASE_URL}/services/shop-act`,
    },
  ],
};