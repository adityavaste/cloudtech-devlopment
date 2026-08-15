"use client"
import {
  contactSchema,
  organizationSchema,
  breadcrumbSchema,
  faqSchema,
} from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { FormEvent, useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

// Paste your Google Web App URL here (Or use process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL)
const contactpageurl  = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(contactpageurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Prevents CORS preflight blocks
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert("Failed to submit form. Check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
     <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

    
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Get In Touch With Us"
        subtitle="Have questions? Our team is here to help. Contact us for a free consultation or to discuss your project needs."
        backgroundGradient
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:cloudtechenquiry@gmail.com" className="text-primary hover:underline">
                  cloudtechenquiry@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:+917350247244" className="text-primary hover:underline">
                  +91 7350247244
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <a href="https://wa.me/917350247244" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  💬 Send us a message
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-muted-foreground">Saturday: 10 AM - 2 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  >
                    <option value="">Select Service</option>
                    <option value="website">Website Development</option>
                    <option value="hosting">AWS Hosting</option>
                    <option value="registration">Business Registration</option>
                    <option value="data">Data Management</option>
                    <option value="support">Support & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                ></textarea>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-blue-700 transition-smooth font-semibold disabled:bg-slate-400"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Map / Additional Info */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Prefer to schedule a call?</h2>
            <p className="text-muted-foreground mb-6">
              We offer free 30-minute consultations to discuss your business needs and how we can help.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hi!%20%F0%9F%91%8B%20I%20would%20like%20to%20start%20my%20business%20journey%20and%20I'm%20interested%20in%20your%20business%20registration%20services.%20Please%20guide%20me%20through%20the%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-blue-700 transition-smooth font-semibold"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
     
    </>
  )
}