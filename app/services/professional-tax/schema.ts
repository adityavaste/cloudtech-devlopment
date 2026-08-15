import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const professionalTaxServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Professional Tax Registration & Compliance",

  description:
    "CloudTech provides Professional Tax (PT) registration, enrollment, registration certificate, monthly and annual return filing, compliance management, and Professional Tax consultancy services for businesses, employers, companies, LLPs, proprietorships, and professionals across India.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "Professional Tax Registration",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/professional-tax`,

  image: `${BASE_URL}/images/professional-tax.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/professional-tax`,
  },
};

export const professionalTaxFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Professional Tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Professional Tax is a state-level tax levied on salaried employees, professionals, traders, and businesses. The rates and regulations vary from state to state.",
      },
    },
    {
      "@type": "Question",
      name: "Who is required to register for Professional Tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Businesses employing staff, companies, LLPs, partnership firms, proprietorships, freelancers, and professionals may be required to obtain Professional Tax registration depending on state regulations.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for Professional Tax Registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Common documents include PAN Card, Aadhaar Card, business registration proof, address proof, GST certificate (if applicable), bank details, employee information, and passport-size photographs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Professional Tax return filing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. CloudTech assists with Professional Tax registration, monthly and annual return filing, payment, compliance, and renewal services.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Professional Tax registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Registration timelines depend on the respective state government but are generally completed within a few working days after document verification.",
      },
    },
  ],
};

export const professionalTaxBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "Professional Tax",
      item: `${BASE_URL}/services/professional-tax`,
    },
  ],
};