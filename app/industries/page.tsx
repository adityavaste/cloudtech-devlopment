'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { INDUSTRIES_SERVED } from '@/lib/constants'
import { Building2 } from 'lucide-react'

const INDUSTRY_DETAILS = [
  {
    industry: 'Healthcare',
    useCases: [
      'Patient appointment booking systems',
      'HIPAA-compliant data management',
      'Telemedicine integration',
      'Patient information portals',
    ],
  },
  {
    industry: 'E-commerce',
    useCases: [
      'Shopping cart and payment integration',
      'Inventory management systems',
      'Product catalog management',
      'Order tracking and fulfillment',
    ],
  },
  {
    industry: 'Real Estate',
    useCases: [
      'Property listing websites',
      'Virtual tour integrations',
      'Lead management systems',
      'CRM for agents',
    ],
  },
  {
    industry: 'Restaurants & Food',
    useCases: [
      'Online ordering systems',
      'Reservation booking',
      'Menu management',
      'Delivery integration',
    ],
  },
  {
    industry: 'Professional Services',
    useCases: [
      'Client portals',
      'Appointment scheduling',
      'Document management',
      'Invoice and payment systems',
    ],
  },
  {
    industry: 'Education',
    useCases: [
      'Course management systems',
      'Student portals',
      'Online class platforms',
      'Grade and attendance tracking',
    ],
  },
]

export default function IndustriesPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Solutions for Every Industry"
        subtitle="We have experience across diverse industries and understand the unique challenges each sector faces."
        backgroundGradient
      />

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {INDUSTRIES_SERVED.map((industry, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-smooth cursor-pointer">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Solutions by Industry
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRY_DETAILS.map((detail, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-smooth">
                <h3 className="text-xl font-bold mb-4 text-primary">{detail.industry}</h3>
                <ul className="space-y-3">
                  {detail.useCases.map((useCase, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                      <span className="text-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Why We're Different
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Industry Expertise',
                desc: 'We understand the unique requirements and regulations of your industry.',
              },
              {
                title: 'Compliance Knowledge',
                desc: 'We ensure your solution meets all industry compliance and security standards.',
              },
              {
                title: 'Custom Solutions',
                desc: 'We build solutions specifically tailored to your industry needs, not generic templates.',
              },
              {
                title: 'Best Practices',
                desc: 'We follow industry best practices and standards to ensure success.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Build Something for Your Industry"
        subtitle="Schedule a consultation to discuss how we can serve your specific business needs."
        primaryCta={{ text: 'Get Industry Solution', href: '/contact' }}
      />
    </MainLayout>
  )
}
