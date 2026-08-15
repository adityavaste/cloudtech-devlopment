const SITE_URL = "https://cloudtech.host";

export const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/blog/#webpage`,
  url: `${SITE_URL}/blog`,
  name: "CloudTech Blog",
  description:
    "Read the latest articles on GST Registration, FSSAI License, Digital Signature Certificate (DSC), Company Registration, Web Development, Cloud Hosting, Data Management, and Business Compliance.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog/#blog`,
  url: `${SITE_URL}/blog`,
  name: "CloudTech Blog",
  description:
    "Expert articles and guides on business registration, compliance, IT services, cloud hosting, web development, and digital solutions.",
  publisher: {
    "@type": "Organization",
    name: "CloudTech",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
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
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_URL}/blog`,
    },
  ],
};

export const blogSchemas = [
  blogPageSchema,
  blogSchema,
  breadcrumbSchema,
];