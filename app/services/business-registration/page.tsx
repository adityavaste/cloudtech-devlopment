"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Users,
  Calendar,
  AlertTriangle,
} from "lucide-react";

const REGISTRATION_FAQ = [
  {
    question: "How long does business registration actually take?",
    answer:
      "GST registration: 3-5 working days. Udyam/MSME: Same day. Shop Act: 7-10 days. IEC: 3-5 days. We file everything in parallel so your business is fully legal within 2 weeks, not 2 months.",
  },
  {
    question: "What if I don't know which registrations I need?",
    answer:
      "That's exactly why we offer a free consultation. Tell us your business type and location, and we'll send you a personalized checklist within 10 minutes. No charge, no obligation.",
  },
  {
    question: "Are government fees included in your price?",
    answer:
      "Yes. Our pricing is all-inclusive. You pay one flat fee that covers government fees, our service charge, document preparation, and filing. No surprise invoices later.",
  },
  {
    question: "What documents do I need to get started?",
    answer:
      "Typically just PAN card, Aadhaar, passport photo, and address proof. We send you a complete checklist after you book. If you're missing something, we help you get it.",
  },
  {
    question: "What if my application gets rejected?",
    answer:
      "We handle resubmission and corrections at zero extra cost until approved. In 3+ years, we've maintained a 99.2% first-attempt approval rate because we verify documents before filing.",
  },
  {
    question: "Do you help after registration is done?",
    answer:
      "Absolutely. We offer annual compliance packages (GST filing, renewal reminders, audit support) so you never miss a deadline or penalty.",
  },
];

export default function BusinessRegistrationPage() {
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "business_registration_page",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
          businessType,
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      name: "GST Registration",
      timeline: "3-5 Days",
      price: "From ₹1,999",
      desc: "Get GSTIN, ARN tracking, and filing guidance. Required for any business with turnover above ₹20L.",
      href: "/services/gst",
    },
    {
      name: "Udyam / MSME",
      timeline: "Same Day",
      price: "From ₹999",
      desc: "Unlock government subsidies, priority lending, and tax benefits. Certificate delivered within hours.",
      href: "/services/udyam",
    },
    {
      name: "Shop Act License",
      timeline: "7-10 Days",
      price: "From ₹1,499",
      desc: "Mandatory for retail shops and commercial establishments. We handle municipal filings end-to-end.",
      href: "/services/shop-act",
    },
    {
      name: "IEC Code",
      timeline: "3-5 Days",
      price: "From ₹2,499",
      desc: "Import-Export Code for global trade. Includes DGFT portal filing and lifetime validity setup.",
      href: "/services/iec",
    },
    {
      name: "FSSAI License",
      timeline: "15-30 Days",
      price: "From ₹2,999",
      desc: "Food business operator license. Central or state level depending on your turnover and reach.",
      href: "/services/fssai",
    },
    {
      name: "Company Incorporation",
      timeline: "10-15 Days",
      price: "From ₹5,999",
      desc: "Pvt Ltd, LLP, or OPC registration with DIN, DSC, MOA, AOA, and PAN/TAN of the company.",
      href: "/services/company",
    },
     {
      name: "DSC Registration",
      timeline: "3-5 Days",
      price: "From ₹1,999",
      desc: "Get your Digital Signature Certificate for government filings.",
      href: "/services/dsc",
    },
  ];

  const processSteps = [
    {
      day: "Step 1",
      title: "Free Consultation (10 mins)",
      desc: "Tell us your business type and city. We tell you exactly which registrations you need and what they cost. No guesswork.",
    },
    {
      day: "Step 2",
      title: "Document Collection",
      desc: "We send you a personalized checklist. Upload via WhatsApp or email. We verify everything before filing.",
    },
    {
      day: "Step 3",
      title: "Parallel Filing",
      desc: "We submit all applications simultaneously across government portals. You get tracking IDs for every filing.",
    },
    {
      day: "Step 4",
      title: "Approval & Delivery",
      desc: "Certificates delivered digitally + physically. We also set up your compliance calendar so you never miss a renewal.",
    },
  ];

  return (
    <MainLayout>
      {/* === HERO: Lead capture with specific offer === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-overlay filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Users className="w-4 h-4 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">
                  340+ businesses registered this year
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your Business Legally Registered in Under 2 Weeks
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 mb-8 text-balance leading-relaxed">
                GST, Udyam, Shop Act, IEC, FSSAI — we handle every government
                filing. One flat fee. Zero follow-up headaches. 99.2% approval
                rate on first attempt.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Government fees included",
                  "99.2% approval rate",
                  "Free resubmission",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-blue-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20help%20with%20business%20registration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+917350247244"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Get Your Free Registration Checklist
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us your business type. We'll send you a personalized
                    list of required registrations + pricing within 10 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Business Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Business Type
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your business type</option>
                        <option value="retail-shop">Retail Shop</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="food-business">Food Business</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="export-import">Export/Import</option>
                        <option value="service">Service Business</option>
                        <option value="startup">Startup</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Get My Free Checklist"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free. No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Checklist sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Check your inbox in the next 10 minutes. We've also WhatsApp'd
                    you a copy.
                  </p>
                  <a
                    href="https://wa.me/917350247244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF BAR === */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">340+</span> businesses
              registered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>
              <span className="font-bold text-foreground">4.9/5</span> rating
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">99.2%</span> approval
              rate
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">2-Week</span> average
              delivery
            </span>
          </div>
        </div>
      </section>

      {/* === PAIN SECTION === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Don't risk penalties</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Running an Unregistered Business Is Expensive
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Without proper registration, you can't open a business bank account,
            claim GST input credit, bid on government tenders, or legally
            invoice clients. One penalty notice costs more than all your
            registrations combined.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹10,000+",
                label: "Average GST late-filing penalty",
              },
              {
                stat: "3-6 Months",
                label: "DIY registration timeline",
              },
              {
                stat: "40%",
                label: "Of rejections are due to document errors",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <p className="text-3xl font-bold text-red-600 mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES WITH PRICING === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Registration Services & Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All prices include government fees, filing charges, and our
              service fee. What you see is what you pay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {service.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {service.desc}
                </p>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-foreground tracking-tight">
                    {service.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {" "}
                    all-inclusive
                  </span>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Not sure what you need?{" "}
                <a
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20need%20help%20figuring%20out%20which%20registrations%20I%20need."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Message us on WhatsApp
                </a>{" "}
                — we reply in 10 minutes.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No office visits. No paperwork confusion. We handle everything
              remotely.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                >
                  <div className="flex items-center gap-4 md:w-48 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/25 z-10">
                      {i + 1}
                    </div>
                  </div>
                  <div className="md:pt-2">
                    <span className="text-sm font-semibold text-blue-600 mb-1 block">
                      {step.day}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20start%20my%20registration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Start My Registration
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Free consultation. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* === TRUST / GUARANTEE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Our Guarantee
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            If your application is rejected due to our error, we fix it and
            refile at no cost. If we can't get you approved, you get a full
            refund. We've maintained a 99.2% first-attempt approval rate
            because we verify everything before filing.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "First-Attempt Approval",
                desc: "We verify documents before filing so rejections are rare.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                desc: "Every registration has a deadline. We meet it or you get 20% off.",
              },
              {
                icon: TrendingUp,
                title: "Lifetime Support",
                desc: "Renewals, amendments, and compliance help — we're always one message away.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <FAQAccordion items={REGISTRATION_FAQ} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Still have questions?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Our team replies on WhatsApp in under 10 minutes during business
              hours.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20have%20a%20question%20about%20business%20registration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Don't wait for a government notice to get compliant"
        subtitle="Every day you operate unregistered is a day of risk. Get your free checklist and pricing in the next 10 minutes."
        primaryCta={{
          text: "Get Free Checklist on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20my%20free%20registration%20checklist.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}