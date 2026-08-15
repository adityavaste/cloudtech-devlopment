import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const dataManagementServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Business Data Management Services",

  description:
    "CloudTech provides secure and professional business data management services including document management, data organization, digital record keeping, compliance documentation, cloud storage, backup solutions, and business data maintenance for startups, MSMEs, and enterprises across India.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-7350247244", // Replace
    email: "adityavaste@gmail.com", // Replace
  },

  serviceType: "Data Management",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/data-management`,

  image: `${BASE_URL}/images/data-management.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/data-management`,
  },
};

export const dataManagementFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Data Management?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Data Management involves organizing, storing, maintaining, securing, and managing business documents and digital records for easy access and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs Data Management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Businesses, startups, MSMEs, professionals, accountants, and organizations that manage customer records, compliance documents, invoices, and digital files can benefit from professional data management.",
      },
    },
    {
      "@type": "Question",
      name: "What types of documents can be managed?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "GST documents, FSSAI certificates, IEC certificates, Udyam Registration, company incorporation documents, invoices, employee records, contracts, and other business files.",
      },
    },
    {
      "@type": "Question",
      name: "Is my business data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. CloudTech follows secure data management practices with encrypted storage, controlled access, regular backups, and cloud-based protection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide cloud-based document management?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We provide cloud-based document storage, backup, organization, and management solutions that allow secure access from anywhere.",
      },
    },
  ],
};

export const dataManagementBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Data Management",
      item: `${BASE_URL}/services/data-management`,
    },
  ],
};