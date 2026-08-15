import { WithContext, Service, FAQPage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://cloudtech.host";

export const awsHostingServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "AWS Cloud Hosting Services",

  description:
    "CloudTech provides professional AWS cloud hosting solutions for businesses, startups, and eCommerce websites. We offer secure, scalable, high-performance hosting with SSL, backups, CDN, monitoring, migrations, and managed AWS infrastructure.",

  provider: {
    "@type": "ProfessionalService",
    name: "CloudTech",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX", // Replace
    email: "support@cloudtech.host", // Replace
  },

  serviceType: "AWS Cloud Hosting",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: `${BASE_URL}/services/aws-hosting`,

  image: `${BASE_URL}/images/aws-hosting.jpg`,

  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services/aws-hosting`,
  },
};

export const awsHostingFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is AWS Hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AWS Hosting is cloud hosting powered by Amazon Web Services, providing scalable, secure, and highly available infrastructure for websites and applications.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose AWS hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AWS offers excellent performance, high availability, automatic scaling, enterprise-grade security, global infrastructure, and reliable uptime for businesses of all sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you migrate existing websites to AWS?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. CloudTech provides complete website migration to AWS with minimal downtime while preserving your data, databases, emails, and SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide managed AWS hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We handle server setup, security updates, SSL installation, backups, monitoring, performance optimization, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Which websites can be hosted on AWS?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We host business websites, eCommerce stores, WordPress websites, custom applications, corporate portals, blogs, SaaS platforms, and web applications on AWS.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SSL certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Every AWS hosting plan includes SSL configuration to ensure secure HTTPS connections.",
      },
    },
  ],
};

export const awsHostingBreadcrumbSchema: WithContext<BreadcrumbList> = {
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
      name: "AWS Hosting",
      item: `${BASE_URL}/services/aws-hosting`,
    },
  ],
};