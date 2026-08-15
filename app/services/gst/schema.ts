export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id": "https://cloudtech.host/services/gst/#service",

  name: "GST Registration",

  serviceType: "GST Registration",

  description:
    "Professional GST Registration services for businesses across India.",

  provider: {
    "@id": "https://cloudtech.host/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://cloudtech.host/services/gst",
};

export const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  "@id": "https://cloudtech.host/services/gst/#webpage",

  url: "https://cloudtech.host/services/gst",

  name: "GST Registration",

  description:
    "Professional GST Registration services for businesses across India.",

  isPartOf: {
    "@id": "https://cloudtech.hostcom/#website",
  },

  about: {
    "@id": "https://cloudtech.hostcom/services/gst/#service",
  },
};

export const breadcrumbSchema = {
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
      name: "GST Registration",
      item: "https://cloudtech.host/services/gst",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Who needs GST Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses crossing the GST threshold and other eligible entities must obtain GST Registration.",
      },
    },
    {
      "@type": "Question",
      name: "How long does GST Registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually between 3 and 7 working days after document verification.",
      },
    },
  ],

  
};
export const schemas = [
  serviceSchema,
  webpageSchema,
  breadcrumbSchema,
  faqSchema,
];