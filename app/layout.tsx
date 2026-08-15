import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudtech.host"),

  title: {
    default:
      "Business Solutions | AWS Website Development & Business Registration",
    template: "%s | Business Solutions",
  },

  description:
    "Business Solutions provides professional AWS website development, cloud hosting, website maintenance, GST registration, Shop Act, Udyam, IEC, MSME registration, and complete business compliance services.",

  applicationName: "Business Solutions",

  authors: [
    {
      name: "Business Solutions",
      url: "https://cloudtech.host",
    },
  ],

  creator: "Business Solutions",

  publisher: "Business Solutions",

  category: "Business Services",

  classification:
    "AWS Website Development, Cloud Hosting, Business Registration, Compliance Services",

  keywords: [
    "AWS website development",
    "website development company",
    "small business website",
    "AWS cloud hosting",
    "managed AWS hosting",
    "website maintenance",
    "responsive website development",
    "business website",
    "landing page development",
    "ecommerce website",

    "GST registration",
    "Shop Act registration",
    "Shop Establishment License",
    "Udyam registration",
    "MSME registration",
    "IEC registration",
    "Import Export Code",
    "business registration",
    "startup registration",
    "company registration",
    "business compliance",

    "digital business solutions",
    "cloud solutions",
    "website and registration services",
    "India",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://cloudtech.host",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudtech.host",
    siteName: "Business Solutions",

    title: "AWS Website Development & Business Registration Services",

    description:
      "Professional AWS websites, secure cloud hosting, GST registration, Shop Act, Udyam, IEC, MSME registration and business compliance services.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AWS Website Development & Business Registration Services",

    description:
      "Professional websites, AWS hosting and complete business registration services.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },

  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "YOUR_YANDEX_CODE",
    // yahoo: "YOUR_YAHOO_CODE",
    // other: {
    //   "facebook-domain-verification": ["YOUR_FACEBOOK_CODE"],
    // },
  },
};
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [{ color: "white" }],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Business Solutions",
  url: "https://cloudtech.host",
  logo: "https://cloudtech.host/logo.png",
  email: "cloudtechenquiry@gmail.com",
  telephone: "+917350247244",
  sameAs: [
    "https://www.linkedin.com/company/yourcompany",
    "https://www.facebook.com/yourcompany",
    "https://www.instagram.com/yourcompany",
    "https://github.com/yourcompany",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Business Solutions",
  image: "https://cloudtech.host/logo.png",
  url: "https://cloudtech.host",
  telephone: "+917350247244",
  email: "cloudtechenquiry@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "hadapasar pune",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411028",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

//professional schema

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  "@id": "https://cloudtech.host/#professionalservice",

  name: "CloudTech",

  url: "https://cloudtech.host",

  logo: "https://cloudtech.host/logo.png",

  image: "https://cloudtech.host/og-image.jpg",

  description:
    "Professional website development and business registration services including GST Registration, IEC Registration, Udyam Registration, Shop Act License, Digital Signature Certificate, Trademark Registration, and AWS managed hosting.",

  telephone: "+91-7350247244",

  email: "cloudtechenquiry@gmail.com",

  priceRange: "₹₹",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Office Address",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],

  sameAs: [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage",
    "https://linkedin.com/company/yourcompany",
  ],

  hasOfferCatalog: {
    "@type": "serviceType",
    name: "Business Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AWS Website Hosting",
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
          name: "GST Return Filing",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IEC Registration",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Udyam Registration",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shop Act License",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MSME Registration",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Signature Certificate (DSC)",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trademark Registration",
        },
      },
    ],
  },
};

// websiteschema

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": "https://cloudtech.host/#website",

  url: "https://cloudtech.host",

  name: "CloudTech",

  alternateName: "CloudTech - Business Solutions",

  description:
    "Professional website development, AWS managed hosting, GST Registration, IEC Registration, Udyam Registration, Shop Act License, Trademark Registration, and business documentation services across India.",

  inLanguage: "en-IN",

  publisher: {
    "@id": "https://cloudtech.host/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* professional Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        {/* website Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
