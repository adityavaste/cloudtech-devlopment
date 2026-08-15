import Image from "next/image";
export const SERVICES = [
  {
    title: 'Website Development',
    description: 'Custom-built websites tailored to your business needs, from small business sites to complex web applications.',
    href: '/services',
  },
  {
    title: 'AWS Cloud Hosting',
    description: 'Secure, scalable cloud infrastructure powered by Amazon Web Services for reliable performance.',
    href: '/services/aws-hosting',
  },
  {
    title: 'Business Registration',
    description: 'Complete business registration and compliance services to help you start legally and successfully.',
    href: '/services/business-registration',
  },
  {
    title: 'Data Management',
    description: 'Secure storage, backup, and management of your business-critical data with enterprise security.',
    href: '/services/data-management',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Small Business Welcome',
    description: 'We specialize in helping startups and small businesses without overwhelming complexity.',
  },
  {
    title: 'Personal Support',
    description: 'Dedicated team members who understand your business and provide personalized guidance.',
  },
  {
    title: 'No Tech Knowledge Needed',
    description: 'We explain everything in plain language. No confusing jargon or technical overload.',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. Clear, upfront pricing so you know exactly what you\'re paying for.',
  },
]

export const BUSINESS_SERVICES = [
  { title: 'Shop Act Registration', description: 'Legal registration for retail and shop businesses.',link: "/services/shop-act", },
  { title: 'Udyam Registration', description: 'MSME registration for small business benefits and subsidies.',link: "/services/udyam", },
  { title: 'FSSAI License', description: 'Food business safety and compliance certification.' ,link: "/services/fssai",},
  { title: 'GST Registration', description: 'Goods and Services Tax registration and compliance.',link: "/services/gst", },
  { title: 'IEC Code', description: 'Import-Export Code for international business operations.',link: "/services/iec", },
  { title: 'Trade License', description: 'Municipal trade license for local business operations.' ,link: "/services/trade-license",},
  { title: 'Professional Tax', description: 'Professional tax registration for service providers.',link: "/services/professional-tax", },
  { title: 'DSC Certificate', description: 'Digital Signature Certificate for online transactions.' ,link: "/services/dsc",},
  { title: 'Annual Compliance', description: 'Annual filing and regulatory compliance management.' },
  { title: 'License Renewal', description: 'Hassle-free license and permit renewal services.' },
]

export const AWS_BENEFITS = [
  { title: 'Global Infrastructure', description: 'Deploy your application worldwide with AWS data centers.' },
  { title: '99.99% Uptime', description: 'Enterprise-grade reliability and availability guarantee.' },
  { title: 'Auto-Scaling', description: 'Automatically handle traffic spikes without manual intervention.' },
  { title: 'Security First', description: 'World-class security with compliance certifications.' },
  { title: 'Cost Effective', description: 'Pay only for what you use with flexible pricing.' },
  { title: 'Easy Management', description: 'Simple dashboard to monitor and manage your infrastructure.' },
]

export const HOW_WE_WORK = [
  { step: 1, title: 'Consultation', description: 'We discuss your business needs and goals in detail.' },
  { step: 2, title: 'Planning', description: 'Create a customized strategy and project timeline.' },
  { step: 3, title: 'Development', description: 'Build your solution with regular updates and feedback.' },
  { step: 4, title: 'Testing', description: 'Thorough testing to ensure quality and performance.' },
  { step: 5, title: 'Launch & Support', description: 'Deploy and provide ongoing support and maintenance.' },
]

export const TESTIMONIALS = [
  {
    quote: 'They transformed our business website and helped us with registration. Highly professional and affordable.',
    author: 'Chandrakant Satpute',
    role: 'Founder',
    company: 'Kalyani finance',
    rating: 5,
  },
  {
    quote: 'Amazing support team. They explained everything clearly without technical jargon. Highly recommended!',
    author: 'Vishal Jadhav',
    role: 'Business Owner',
    company: 'Resistor vyapar',
    rating: 5,
  },
  {
    quote: 'Our hosting is now on AWS and performance improved significantly. Great migration experience.',
    author: 'Aditya Vaste',
    role: 'CTO',
    company: 'aditya exports',
    rating: 5,
  },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹5,000',
    description: 'Perfect for small businesses',
    features: [
      'Basic website (5 pages)',
      'Shared hosting included',
      '3 months support',
      'SSL certificate',
      'Email support',
    ],
    ctaText: 'Get Started',
    ctaHref: '/pricing?plan=Starter',
    isRecommended: false,
  },
  {
    name: 'Growth',
    price: '₹30,000',
    description: 'For growing businesses',
    features: [
      'Advanced website (15 pages)',
      'AWS cloud hosting',
      '12 months support',
      'SSL certificate',
      'Priority email support',
      'Monthly analytics report',
      'Basic SEO optimization',
    ],
    ctaText: 'Get Started',
    ctaHref: '/pricing?plan=Growth',
    isRecommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For enterprise solutions',
    features: [
      'Custom development',
      'Dedicated AWS infrastructure',
      '24/7 phone support',
      'Advanced security features',
      'Custom integrations',
      'Weekly analytics & reports',
      'Advanced SEO & marketing',
    ],
    ctaText: 'Contact Sales',
    ctaHref: '/pricing?plan=Enterprise',
    isRecommended: false,
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does a website project typically take?',
    answer: 'A basic website usually takes 2-4 weeks, while more complex projects might take 1-2 months. We provide a detailed timeline during the initial consultation.',
  },
  {
    question: 'Do you provide hosting services?',
    answer: 'Yes! We offer both shared hosting and AWS cloud hosting depending on your needs and budget.',
  },
  {
    question: 'What if I need to make changes after launch?',
    answer: 'We provide support packages that include regular maintenance and updates. Changes can be made anytime through our support team.',
  },
  {
    question: 'Can you help with business registration?',
    answer: 'Absolutely! We handle all types of business registrations including Shop Act, Udyam, FSSAI, GST, and more.',
  },
  {
    question: 'What is the cost of business registration services?',
    answer: 'Costs vary depending on the type of registration. We provide transparent pricing upfront with no hidden charges.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we offer support packages ranging from 3 months to ongoing support with various levels of service.',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    title: 'Finance Platform', // Slightly polished title for better presentation
    description: 'Built a complete e-commerce solution with payment integration for an online retailer.',
    category: 'Finance',
    result: '150% increase in online sales',
    background: 'The client needed a secure, high-throughput financial portal to handle a surging volume of online retail transactions. The legacy system suffered from high cart abandonment due to complex checkout flows and frequent payment timeouts. We designed a streamlined, multi-gateway payment architecture to resolve these bottlenecks.',
    image: '/finance.png', // Place this file in your /public folder
  },
  {
    title: 'SaaS Application',
    description: 'Developed a subscription-based project management tool hosted on AWS.',
    category: 'SaaS',
    result: '500+ active users in first month',
    background: 'Remote teams lacked a centralized, real-time tool to track agile sprints without overwhelming clutter. Our objective was to build a highly scalable, multi-tenant SaaS infrastructure from scratch. Leveraging AWS serverless architecture allowed us to handle rapid initial user onboarding while keeping operational costs low.',
   
    image: '/saas.png', 
  },
  {
    title: 'Local Service Business Website',
    description: 'Created a professional website for a local service provider with appointment booking.',
    category: 'Business Website',
    result: '3x increase in inquiries',
    background: 'A local service provider relied heavily on manual phone bookings, leading to missed opportunities after business hours. We built a localized web presence integrated with an automated, calendar-syncing booking engine, transforming their digital footprint into a passive lead-generation machine.',
   
    image: '/local.png', 
  },
]

export const INDUSTRIES_SERVED = [
  'Healthcare',
  'Education',
  'Restaurants & Food',
  'Retail & E-commerce',
  'Real Estate',
  'Legal Services',
  'Consulting',
  'Manufacturing',
  'Startups',
  'Financial Services',
  'Travel & Tourism',
  'Local Services',
]
