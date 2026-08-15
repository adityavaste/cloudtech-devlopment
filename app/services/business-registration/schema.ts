import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const businessRegistrationServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Business Registration Services",

  description:
    "CloudTech provides complete business registration services across India including Sole Proprietorship, Partnership Firm, LLP Registration, Private Limited Company Registration, One Person Company (OPC), Startup India Registration, MSME/Udyam Registration, GST Registration, IEC Code, FSSAI License, Digital Signature Certificate (DSC), and other business compliance services.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Business Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/business-registration`,

  image: `${BASE_URL}/images/business-registration.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/business-registration`,
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Registration Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Limited Company Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LLP Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Partnership Firm Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sole Proprietorship Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "One Person Company (OPC) Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Startup India Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Udyam (MSME) Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GST Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Import Export Code (IEC)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FSSAI License Registration",
        },
      }
    ]
  }
};

export const businessRegistrationFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What business registration services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CloudTech provides Private Limited Company, LLP, Partnership Firm, Sole Proprietorship, OPC, Startup India, MSME (Udyam), GST, IEC, FSSAI, and Digital Signature Certificate registration services.",
      },
    },
    {
      "@type": "Question",
      name: "Which business structure is best for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Private Limited Company and LLP are the most preferred business structures for startups because they offer legal protection, credibility, and better funding opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does business registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on the registration type. Most registrations are completed within 3 to 10 business days after document verification.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register my business online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CloudTech offers completely online business registration services across India with expert assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-registration compliance support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We also provide GST filing, ROC filing, annual compliance, accounting, tax filing, document management, and other business compliance services.",
      },
    },
  ],
};

export const businessRegistrationBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Business Registration",
      item: `${BASE_URL}/services/business-registration`,
    },
  ],
};