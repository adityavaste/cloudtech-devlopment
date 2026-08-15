'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { Shield, Clock, Zap, AlertCircle, Eye, BarChart3 } from 'lucide-react'

const SUPPORT_SERVICES = [
  {
    icon: Eye,
    title: 'Uptime Monitoring',
    description: '24/7 monitoring ensures your website stays online. We alert immediately to any issues.',
  },
  {
    icon: Shield,
    title: 'Security Monitoring',
    description: 'Continuous security scanning and threat detection to protect your data and visitors.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Regular optimization to keep your website fast and responsive for all visitors.',
  },
  {
    icon: Clock,
    title: 'Regular Updates',
    description: 'We keep your software, plugins, and security patches updated automatically.',
  },
  {
    icon: AlertCircle,
    title: 'Backup & Recovery',
    description: 'Automated daily backups with quick recovery if anything goes wrong.',
  },
  {
    icon: BarChart3,
    title: 'Performance Reports',
    description: 'Monthly reports showing your website performance, traffic, and improvement recommendations.',
  },
]

const SUPPORT_TIERS = [
  {
    name: 'Basic Support',
    price: '$49/month',
    response: '24-48 hours',
    features: [
      'Email support only',
      'Monthly reports',
      'Weekly backups',
      'Security updates',
      'Uptime monitoring',
      'Performance optimization',
    ],
  },
  {
    name: 'Priority Support',
    price: '$99/month',
    response: '2-4 hours',
    features: [
      'Email & phone support',
      'Twice daily reports',
      'Daily backups',
      'Security updates',
      '99.5% uptime SLA',
      'Advanced optimization',
      'Monthly strategy call',
    ],
    recommended: true,
  },
  {
    name: 'Premium Support',
    price: '$199/month',
    response: '1 hour',
    features: [
      '24/7 phone support',
      'Real-time monitoring',
      'Hourly backups',
      'Instant security patches',
      '99.99% uptime SLA',
      'Custom optimizations',
      'Weekly strategy calls',
      'Dedicated account manager',
    ],
  },
]

export default function SupportPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="24/7 Support & Maintenance"
        subtitle="Keep your website running smoothly with our comprehensive maintenance and support services."
        backgroundGradient
      />

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            What&apos;s Included in Our Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORT_SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-smooth">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Support Tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SUPPORT_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`rounded-lg border p-8 transition-smooth ${
                  tier.recommended
                    ? 'border-primary bg-blue-50 shadow-lg'
                    : 'border-border bg-card hover:border-primary'
                }`}
              >
                {tier.recommended && (
                  <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Response time: {tier.response}
                </p>
                <a
                  href="/contact"
                  className={`w-full block text-center px-4 py-2 rounded-lg font-semibold mb-6 transition-smooth ${
                    tier.recommended
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Choose Plan
                </a>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Why You Need Professional Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Without Support</h3>
              <ul className="space-y-3">
                {[
                  'Website goes down and you don\'t know for hours',
                  'Security vulnerabilities go undetected',
                  'Poor performance frustrates your customers',
                  'You waste time on technical issues',
                  'Outdated software causes problems',
                  'Data loss due to lack of backups',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">With Our Support</h3>
              <ul className="space-y-3">
                {[
                  'Immediate detection and resolution of issues',
                  'Proactive security monitoring and updates',
                  'Optimized performance at all times',
                  'Focus on growing your business',
                  'Automatic updates and patches',
                  'Protected from data loss',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Protect Your Business Today"
        subtitle="Start with a support plan and gain peace of mind knowing your website is in good hands."
        primaryCta={{ text: 'Subscribe to Support', href: '/contact' }}
      />
    </MainLayout>
  )
}
