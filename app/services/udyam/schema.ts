import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const udyamRegistrationSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Udyam Registration (MSME Registration)",

  description:
    "Register your business under the Udyam MSME portal with CloudTech. We provide fast and hassle-free Udyam Registration, certificate download, Udyam updates, and MSME support services for startups, proprietorships, partnerships, LLPs, and private limited companies across India.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Udyam Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/udyam`,

  image: `${BASE_URL}/images/udyam-registration.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/udyam`,
  },
};

export const udyamFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Udyam Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Udyam Registration is the official government registration for Micro, Small, and Medium Enterprises (MSMEs) in India. It provides businesses with an MSME recognition certificate and access to various government benefits.",
      },
    },
    {
      "@type": "Question",
      name: "Who can apply for Udyam Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Proprietorships, Partnership Firms, LLPs, Private Limited Companies, One Person Companies (OPCs), Hindu Undivided Families (HUFs), and Cooperative Societies engaged in manufacturing or services can apply.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for Udyam Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Generally, Aadhaar Number, PAN Card, GSTIN (if applicable), business information, bank details, and contact details are required.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of Udyam Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Benefits include easier access to government tenders, priority sector lending, lower interest rates, subsidy schemes, tax benefits, delayed payment protection, and MSME recognition.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Udyam Registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most Udyam Registrations are completed within 1 to 2 business days after successful verification.",
      },
    },
  ],
};

export const udyamBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Udyam Registration",
      item: `${BASE_URL}/services/udyam`,
    },
  ],
};