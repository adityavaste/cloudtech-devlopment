import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const digitalSignatureCertificateSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Digital Signature Certificate (DSC)",

  description:
    "Apply for Class 3 Digital Signature Certificate (DSC) online with CloudTech. We provide fast DSC registration for company directors, professionals, businesses, GST filing, MCA filings, Income Tax, eTender, ICEGATE, DGFT, and other government portals.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace with your number
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Digital Signature Certificate",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/dsc`,

  image: `${BASE_URL}/images/dsc.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/dsc`,
  },
};

export const dscFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Digital Signature Certificate (DSC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A Digital Signature Certificate (DSC) is an electronic signature used to securely sign digital documents and authenticate the identity of the signer.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs a DSC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Company directors, LLP partners, professionals, business owners, GST taxpayers, importers, exporters, and individuals filing documents on government portals require a DSC.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a DSC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most Digital Signature Certificates are issued within 1 to 2 business days after successful verification.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for DSC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Generally, Aadhaar Card, PAN Card, mobile number, email address, and a live photo/video verification are required.",
      },
    },
    {
      "@type": "Question",
      name: "Where is DSC used?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "DSC is used for MCA filings, Income Tax returns, GST filings, ICEGATE, DGFT, eTender portals, EPFO, and many other government services.",
      },
    },
  ],
};

export const dscBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Digital Signature Certificate",
      item: `${BASE_URL}/services/dsc`,
    },
  ],
};