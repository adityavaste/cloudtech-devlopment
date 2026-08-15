import type { MetadataRoute } from "next";

const lastModified = new Date();

const services = [
  "aws-hosting",
  "business-registration",
  "data-management",
  "dsc",
  "dsc",
  "fssai",
  "gst",
  "iec",
  "professional-tax",
  "shop-act",
  "trade-license",
  "udyam",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://cloudtech.host",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cloudtech.host/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cloudtech.host/services",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://cloudtech.host/pricing",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cloudtech.host/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://cloudtech.host/contact",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host/portfolio",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
     {
      url: "https://cloudtech.host/industries",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host/faq",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host/client-portal",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `https://cloudtech.host/services/${service}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}