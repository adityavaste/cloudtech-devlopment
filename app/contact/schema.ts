export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://cloudtech.host/contact#contactpage",
  "url": "https://cloudtech.host/contact",
  "name": "Contact CloudTech",
  "description": "Get in touch with CloudTech for GST Registration, FSSAI License, Digital Signature Certificate (DSC), Data Management, AWS Hosting, and other business services."
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cloudtech.host/#organization",
  "name": "CloudTech",
  "url": "https://cloudtech.host",
  "logo": "https://cloudtech.host/logo.png",
  "email": "support@cloudtech.host",
  "telephone": "+91-7350247244",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-7350247244",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": [
        "English",
        "Hindi"
      ]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany"
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cloudtech.host"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://cloudtech.host/contact"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact CloudTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via phone, email, or by filling out the contact form on our website."
      }
    },
    {
      "@type": "Question",
      "name": "What services does CloudTech provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide GST Registration, FSSAI License, Digital Signature Certificate (DSC), AWS Hosting, Data Management, and other business registration services."
      }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our support team is available Monday to Saturday from 9:00 AM to 6:00 PM."
      }
    }
  ]
};