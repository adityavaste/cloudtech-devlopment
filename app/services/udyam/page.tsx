import {
  udyamRegistrationSchema,
  udyamFAQSchema,
  udyamBreadcrumbSchema,
} from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Building2, TrendingUp, DollarSign, Shield, Zap } from 'lucide-react'

const MSME_BENEFITS = [
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Government Subsidies',
    description: 'Access to various government schemes and financial assistance programs.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: 'Bank Loan Benefits',
    description: 'Easier access to bank loans with lower interest rates and better terms.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Priority Procurement',
    description: 'Government tenders and procurement reservations for MSMEs.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Business Growth',
    description: 'Support and mentoring programs to help scale your business.',
  },
]

const MSME_ELIGIBILITY = [
  { category: 'Micro Enterprise', investment: 'Up to 25 lakhs', production: 'Up to 5 crores' },
  { category: 'Small Enterprise', investment: '25-5 crores', production: '5-50 crores' },
  { category: 'Medium Enterprise', investment: '5-10 crores', production: '50-250 crores' },
]

const GOVERNMENT_SCHEMES = [
  'PMEGP - Prime Minister Employment Generation Program',
  'CGTMSE - Credit Guarantee Scheme',
  'MUDRA Loan - Up to 10 lakhs without collateral',
  'CLCSS - Collateral-Free Credit Scheme',
  'PMMY - Pradhan Mantri Mudra Yojana',
  'Stand-Up India - Women entrepreneur loans',
]

const UDYAM_FAQ = [
  {
    question: 'Is Udyam registration mandatory?',
    answer: 'Udyam registration is not mandatory but highly recommended. It brings numerous government benefits, subsidies, and loan opportunities.',
  },
  {
    question: 'Who qualifies as MSME?',
    answer: 'MSMEs are classified by investment in plant/machinery and turnover. We help determine your classification based on your business profile.',
  },
  {
    question: 'What benefits are available?',
    answer: 'Government schemes, bank loan priority, subsidy programs, priority in government tenders, and skill development support.',
  },
  {
    question: 'How do I upgrade my MSME classification?',
    answer: 'As your business grows, you can upgrade from Micro to Small to Medium. We handle the reclassification process.',
  },
  {
    question: 'Can I get a loan immediately after Udyam registration?',
    answer: 'Yes, Udyam registration opens doors to bank loans. We help you apply for MUDRA loans and other MSME schemes.',
  },
  {
    question: 'What documents are needed?',
    answer: 'PAN card, Aadhar card, business address proof, bank details, and investment/production details. The process is 100% online.',
  },
]
export const metadata = {
  title: "Udyam Registration Online | MSME Registration | CloudTech",
  description:
    "Apply for Udyam Registration (MSME Registration) online with CloudTech. Fast processing, expert support, certificate download, and MSME registration services for businesses across India.",

  keywords: [
    "Udyam Registration",
    "MSME Registration",
    "MSME Certificate",
    "Udyam Certificate",
    "Udyam Registration Online",
    "MSME Online Registration",
    "Small Business Registration",
    "Startup Registration",
    "Udyam Portal Registration",
    "CloudTech Udyam Services",
  ],
};
export default function UdyamPage() {
  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(udyamRegistrationSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(udyamFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(udyamBreadcrumbSchema),
    }}
  />
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Udyam Registration (MSME Registration)"
        subtitle="Get your business registered as MSME and access government benefits, subsidies, and priority bank loans."
        primaryCta={{ text: 'Register as MSME', href: '/contact' }}
        secondaryCta={{ text: 'Learn More', href: '/contact' }}
        backgroundGradient
      />
{/* What is Udyam */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
      What is Udyam Registration?
    </h2>

    <p className="text-base sm:text-lg text-secondary mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
      Udyam Registration is a simple online registration process that recognizes your business as a Micro, Small, or Medium 
      Enterprise (MSME). This government registration opens access to numerous schemes, subsidies, and priority financing options.
    </p>

    <p className="text-base sm:text-lg text-secondary leading-relaxed">
      Introduced in 2020, Udyam replaced the older MSME registration system and made the process completely online and instant. 
      Registration is free and can be completed in minutes with your PAN, Aadhar, and business details.
    </p>
  </div>
</section>

{/* MSME Classification */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      MSME Classification
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl border border-border overflow-hidden">
        <thead className="bg-gradient-to-r from-primary to-secondary text-white">
          <tr>
            <th className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">
              Category
            </th>
            <th className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">
              Investment Limit
            </th>
            <th className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">
              Turnover Limit
            </th>
          </tr>
        </thead>

        <tbody>
          {MSME_ELIGIBILITY.map((item, i) => (
            <tr
              key={i}
              className={i !== MSME_ELIGIBILITY.length - 1 ? 'border-b border-border' : ''}
            >
              <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 font-semibold text-foreground text-sm sm:text-base">
                {item.category}
              </td>
              <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-secondary text-sm sm:text-base">
                {item.investment}
              </td>
              <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-secondary text-sm sm:text-base">
                {item.production}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Benefits */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10 sm:mb-12 lg:mb-16">
      Benefits of Udyam Registration
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
      {MSME_BENEFITS.map((benefit, i) => (
        <div
          key={i}
          className="bg-white border border-border rounded-xl p-6 sm:p-7 lg:p-8 hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1"
        >
          <div className="mb-4 sm:mb-6">{benefit.icon}</div>
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
            {benefit.title}
          </h3>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Government Schemes */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      Government Schemes Available
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
      {GOVERNMENT_SCHEMES.map((scheme, i) => (
        <div
          key={i}
          className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg p-4 sm:p-5 lg:p-6 border border-border"
        >
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
          <span className="text-sm sm:text-base text-secondary font-medium leading-relaxed">
            {scheme}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Loan Benefits */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      Bank Loan & Subsidy Benefits
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
      <div className="bg-gradient-blue-light rounded-xl p-6 sm:p-7 lg:p-8 border border-border">
        <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
          Bank Loan Advantages
        </h3>

        <ul className="space-y-2 sm:space-y-3 text-secondary">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Lower interest rates (1-2% below standard)</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Loans up to 10 lakhs without collateral</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Quick approval process (5-7 days)</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Flexible repayment terms</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-blue-light rounded-xl p-6 sm:p-7 lg:p-8 border border-border">
        <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
          Subsidy & Grant Programs
        </h3>

        <ul className="space-y-2 sm:space-y-3 text-secondary">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Direct government subsidies up to 50%</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Skill development and training grants</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Export promotion schemes</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Technology and innovation support</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10 sm:mb-12 lg:mb-16">
      Frequently Asked Questions
    </h2>

    <FAQAccordion items={UDYAM_FAQ} />
  </div>
</section>

{/* CTA */}
<CTASection
  title="Register Your Business as MSME Today"
  subtitle="Get instant access to government benefits, bank loans, and subsidy programs. Registration is free and takes just 5 minutes."
  primaryCta={{ text: 'Start Udyam Registration', href: '/contact' }}
/>
    </MainLayout>
    </>
  )
}
