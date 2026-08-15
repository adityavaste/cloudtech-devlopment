'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { ServiceCard } from '@/components/ui/service-card'
import { Code, Cloud, Briefcase, Database, Zap, Shield, Wrench, BarChart3 } from 'lucide-react'

const SERVICES_CATEGORIES = [
  {
    title: 'Website Development',
    description: 'Custom business websites, corporate sites, landing pages, portfolios, blogs, and booking systems tailored to your needs.',
    services: ['Business Websites', 'Corporate Sites', 'Landing Pages', 'Portfolios', 'Blogs', 'Booking Systems'],
    icon: Code,
  },
  {
    title: 'Custom Solutions',
    description: 'Build powerful custom applications including CRM systems, customer portals, dashboards, and inventory management.',
    services: ['CRM Systems', 'Customer Portals', 'Dashboards', 'Inventory Management', 'Analytics Tools', 'Custom Apps'],
    icon: Zap,
  },
  {
    title: 'Automation Services',
    description: 'Automate your business processes including lead management, email campaigns, and appointment booking.',
    services: ['Lead Management', 'Email Automation', 'Appointment Booking', 'Workflow Automation', 'API Integration', 'Data Sync'],
    icon: Wrench,
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your website secure, fast, and updated with our comprehensive maintenance and support packages.',
    services: ['Security Monitoring', 'Performance Optimization', 'Regular Backups', 'Software Updates', '24/7 Support', 'Bug Fixes'],
    icon: Shield,
  },
]

const ALL_SERVICES = [
  { icon: Code, title: 'Website Development', description: 'Professional websites built for your business' },
  { icon: Cloud, title: 'Cloud Hosting', description: 'AWS-powered hosting for reliability and scale' },
  { icon: Briefcase, title: 'Business Registration', description: 'Complete compliance and registration services' },
  { icon: Database, title: 'Data Management', description: 'Secure storage and backup solutions' },
  { icon: Zap, title: 'Automation', description: 'Streamline your business processes' },
  { icon: BarChart3, title: 'Analytics', description: 'Track performance and insights' },
  { icon: Shield, title: 'Security', description: 'Enterprise-grade security features' },
  { icon: Wrench, title: 'Maintenance', description: 'Ongoing support and updates' },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Services Designed for Your Business"
        subtitle="From website development to business registration and cloud hosting, we provide comprehensive solutions to help your business grow."
        backgroundGradient
      />

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_SERVICES.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Details by Category */}
      {SERVICES_CATEGORIES.map((category, idx) => (
        <section
          key={idx}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${idx % 2 === 0 ? 'bg-card' : 'gradient-subtle'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-balance">{category.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-blue rounded-lg h-64 flex items-center justify-center">
                <category.icon className="w-24 h-24 text-white opacity-30" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">We understand your needs and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">Create a custom strategy and timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Execution & Support</h3>
              <p className="text-muted-foreground text-sm">Build, launch, and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
  title="Ready to Launch Your Business?"
  subtitle="Get a free consultation from our team today and start your journey to success."
  primaryCta={{
    text: "Book Free Consultation",
    href: `https://wa.me/917350247244?text=${encodeURIComponent(
      "Hi! 👋 I would like to start my business journey and I'm interested in your business registration services. Please guide me through the process."
    )}`,
    external: true,
    
  }}
/>
    </MainLayout>
  )
}
