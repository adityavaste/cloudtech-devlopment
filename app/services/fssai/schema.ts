// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id": "https://cloudtech.host/services/fssai/#service",

  name: "FSSAI Registration",

  serviceType: "FSSAI Registration Service",

  description:
    "Apply for FSSAI Registration online with expert assistance. We provide Food License registration, document verification, application filing, and support for food businesses across India.",

  provider: {
    "@id": "https://cloudtech.host/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  audience: {
    "@type": "BusinessAudience",
    audienceType: "Food Business Operators",
  },

  category: "Business Registration",

  url: "https://cloudtech.host/services/fssai",

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://cloudtech.host/services/fssai",
  },
};

// WebPage Schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  "@id": "https://cloudtech.host/services/fssai/#webpage",

  url: "https://cloudtech.host/services/fssai",

  name: "FSSAI Registration Online | Food License Registration in India",

  description:
    "Get your FSSAI Registration or Food License online with fast processing and expert support for food businesses across India.",

  isPartOf: {
    "@id": "https://cloudtech.host/#website",
  },

  about: {
    "@id": "https://cloudtech.host/services/fssai/#service",
  },

  inLanguage: "en-IN",
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://cloudtech.host",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://cloudtech.host/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FSSAI Registration",
      item: "https://cloudtech.host/services/fssai",
    },
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is FSSAI Registration?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "FSSAI Registration is a mandatory food safety registration issued by the Food Safety and Standards Authority of India for eligible food business operators.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs FSSAI Registration?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Restaurants, cloud kitchens, home-based food businesses, food manufacturers, retailers, wholesalers, distributors, and other eligible food business operators require FSSAI Registration or License based on their turnover and business type.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for FSSAI Registration?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Common documents include Aadhaar Card, PAN Card, passport-size photograph, address proof, business address proof, and business details. Additional documents may be required depending on the business type.",
      },
    },
    {
      "@type": "Question",
      name: "How long does FSSAI Registration take?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "The processing time varies depending on the application and authority, but basic registrations are generally processed within a few working days after successful document verification.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for FSSAI Registration online?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete online FSSAI Registration services with document verification and expert assistance across India.",
      },
    },
  ],
};

// Export all schemas
export const schemas = [
  serviceSchema,
  webpageSchema,
  breadcrumbSchema,
  faqSchema,
];