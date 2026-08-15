export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://cloudtech.host/about#webpage",
  url: "https://cloudtech.host/about",
  name: "About CloudTech",
  description:
    "Learn about CloudTech, India's trusted provider of business registration, compliance, taxation, digital signature certificates, FSSAI, GST registration, ROC filings, cloud hosting, and IT services.",
  isPartOf: {
    "@id": "https://cloudtech.host/#website",
  },
  about: {
    "@id": "https://cloudtech.host/#organization",
  },
  inLanguage: "en-IN",
};


export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cloudtech.host/#organization",
  name: "CloudTech",
  url: "https://cloudtech.host",
  logo: "https://cloudtech.host/logo.png",
  image: "https://cloudtech.host/logo.png",
  description:
    "CloudTech provides GST Registration, FSSAI License, Digital Signature Certificates (DSC), Company Registration, Data Management, AWS Hosting, and business compliance services across India.",
  email: "support@cloudtech.host",
  telephone: "+91-7350247244",

  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },

  sameAs: [
    "https://www.facebook.com/cloudtech",
    "https://www.linkedin.com/company/cloudtech",
    "https://twitter.com/cloudtech"
  ]
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
      name: "About",
      item: "https://cloudtech.host/about",
    },
  ],
};
const schemas = [
  organizationSchema,
  aboutPageSchema,
  breadcrumbSchema,
];

export default schemas;