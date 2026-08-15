import schemas from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { Heart, Lightbulb, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    <MainLayout>
      {/* Hero */}
      <Hero
        title="About CloudTech"
        subtitle="We're passionate about helping entrepreneurs and small businesses succeed online."
        backgroundGradient
      />

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-balance">
            Our Story
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              CloudTech was founded by a team of passionate developers and entrepreneurs who witnessed the struggle of small business owners trying to establish their online presence. We saw that most businesses had great ideas and products, but lacked affordable, accessible technology solutions.
            </p>
            <p>
              We started this company with a mission: to bridge the gap between small businesses and world-class technology. We wanted to provide professional web development, hosting, business registration, and support services at prices that make sense for startups and small enterprises.
            </p>
            <p>
              Today, we work with hundreds of businesses across different industries, helping them grow, scale, and succeed. What started as a small team has grown, but our core mission remains unchanged: empower small businesses with technology they can afford and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To make professional web development, cloud hosting, business registration, and digital solutions accessible and affordable for every small business and entrepreneur, regardless of technical knowledge or budget.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every small business has access to enterprise-grade technology and expertise. We want to be the trusted technology partner that helps businesses of all sizes compete and thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Customer First',
                desc: 'Your success is our success. We work hard to understand and solve your real problems.',
              },
              {
                icon: Users,
                title: 'Transparency',
                desc: 'No hidden fees, no jargon. We explain everything clearly and keep you updated.',
              },
              {
                icon: Target,
                title: 'Reliability',
                desc: 'We deliver what we promise, on time, every time. Your trust is everything.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'We stay current with technology trends to provide cutting-edge solutions.',
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-smooth">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aditya Vaste',
                role: 'Founder & CTO',
                bio: 'Full-stack developer with years experience building scalable web applications.',
              },
              {
                name: 'Vishal Jadhav',
                role: 'Business Lead',
                bio: 'Entrepreneur passionate about helping small businesses succeed with technology.',
              },
              {
                name: 'Aditya ',
                role: 'DevOps & Cloud Specialist',
                bio: 'AWS certified expert specializing in cloud infrastructure and security.',
              },
            ].map((member, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Why Choose Us?
          </h2>
          <div className="space-y-4">
            {[
              'We have years of combined experience in web development, hosting, and business services.',
              'We work specifically with small businesses and understand the unique challenges you face.',
              'Our team is available and responsive. We answer your questions and solve your problems.',
              'We use only the latest technologies like AWS, React, Next.js, and more.',
              'We provide transparent pricing with no surprise fees or hidden costs.',
              'We provide complete support even after your project launches.',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
  title="Ready to Work With Us?"
  subtitle="Schedule a free consultation and let's discuss how we can help your business grow."
  primaryCta={{
    text: "Book Consultation",
    href: "https://wa.me/917350247244?text=Hi,%20I'm%20interested%20in%20your%20business%20services.",
  }}
/>
    </MainLayout>
     </>
  )
}
