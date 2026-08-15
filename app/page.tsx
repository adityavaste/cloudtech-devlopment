import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta-section";
import { PricingCard } from "@/components/ui/pricing-card";
import { Testimonial } from "@/components/ui/testimonial";
import { FAQAccordion } from "@/components/ui/faq-accordion";

import {
  SERVICES,
  BUSINESS_SERVICES,
  AWS_BENEFITS,
  HOW_WE_WORK,
  TESTIMONIALS,
  PRICING_PLANS,
  FAQ_ITEMS,
  PORTFOLIO_ITEMS,
} from "@/lib/constants";
import {
  Zap,
  Users,
  Shield,
  TrendingUp,
  Briefcase,
  CheckCircle,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  Globe,
  Headphones,
  ArrowRight,
  Calendar,
  Clock,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Business Registration & Website Development Services | Launch in 14 Days",

  description:
    "Get your business legally registered (GST, Shop Act, Udyam, IEC) and a professional website live in 14 days. Flat pricing, no hidden fees. 127+ businesses launched.",

  keywords: [
    "business registration",
    "GST registration",
    "Shop Act license",
    "MSME registration",
    "IEC code",
    "business website",
    "website development",
    "business launch",
    "startup compliance",
  ],

  openGraph: {
    title: "Launch Your Business in 14 Days — Registration + Website",
    description:
      "From GST to going live — we handle the paperwork and the website so you can focus on customers.",
    url: "https://yourdomain.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Registration & Website Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function Home() {
  return (
    <MainLayout>
      {/* === HERO: Lead capture first === */}
      <Hero
        title="Launch Your Business in 14 Days — From Paperwork to Website"
        subtitle="We register your business (GST, Shop Act, Udyam) and build your professional website. One team. Flat fee. Zero headaches."
        primaryCta={{ text: "Get Free Business Launch Plan", href: "#audit" }}
        secondaryCta={{ text: "See How It Works", href: "#process" }}
        backgroundGradient
      />

      {/* === PROOF BAR === */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">127+</span> businesses launched this quarter
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> legal compliance guaranteed
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">14-Day</span> delivery guarantee
            </span>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US (Problem + Outcome) === */}
     
<FeatureGrid
 title="Stop bleeding money on a website that doesn't sell"
subtitle="Most agency sites look pretty but convert poorly. We fix the three things that actually matter: speed, trust, and clarity."
highlightedIndex={0}
bottomCta={{
  text: "Get Your Free Conversion Audit",
  href: "https://wa.me/917350247244?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20conversion%20audit%20for%20my%20website.",
  subtext: "See exactly why your current site isn't converting",
}}
 features={[
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Launch in 14 Days, Not 4 Months",
    description:
      "A fast, streamlined website launch using proven components and a focused delivery process.",
    outcome:
      "Your new site is live before your competitors finish their discovery call. We ship fast because we use battle-tested components, not custom spaghetti code.",
    stat: "14-Day Delivery",
    checks: ["No scope creep", "Weekly progress demos", "Post-launch support"],
    cta: { text: "See how we ship fast", href: "#process" },
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "Built to Convert, Not Just Impress",
    description:
      "Conversion-focused design that turns more visitors into qualified leads and customers.",
    outcome:
      "Pretty doesn't pay the bills. Every section is engineered around a single goal: turning visitors into leads. We A/B test layouts so you don't have to guess.",
    stat: "3x Avg. Conversion Lift",
    checks: ["Lead capture built-in", "Mobile-optimized CTAs", "Analytics setup"],
    cta: { text: "View case studies", href: "#portfolio" },
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Zero Maintenance Headaches",
    description:
      "Reliable hosting, security, backups, and ongoing updates handled for you.",
    outcome:
      "Updates, security patches, hosting, backups — we handle it all. You get a site that just works, 24/7, without hiring a dev team.",
    stat: "99.9% Uptime",
    checks: ["AWS hosting included", "SSL & security", "Monthly reports"],
    cta: { text: "What's included", href: "#pricing" },
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "Flat Fee, Zero Surprises",
    description:
      "Simple, predictable pricing with everything you need included from day one.",
    outcome:
      "No hourly billing. No 'out of scope' invoices. One predictable monthly price covers everything from design to hosting to edits.",
    stat: "Fixed Pricing",
    checks: ["Unlimited minor edits", "No setup fees", "Cancel anytime"],
    cta: { text: "See pricing", href: "#pricing" },
  },

  ]}
/>

      {/* === HOW WE WORK (Timeline with urgency) === */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              From Idea to Live in 14 Days
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses take 3-6 months to get registered and online. We cut that to 2 weeks with a battle-tested process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  day: "Day 1-2",
                  title: "Discovery & Document Collection",
                  desc: "We audit your business needs, collect KYC documents, and file your first registrations (GST/Shop Act).",
                  icon: Users,
                },
                {
                  day: "Day 3-5",
                  title: "Registration Filing",
                  desc: "All applications submitted through official portals. You get tracking IDs for every filing. Website design begins in parallel.",
                  icon: Shield,
                },
                {
                  day: "Day 6-10",
                  title: "Website Build & Content",
                  desc: "Your custom site takes shape. We write your copy, set up contact forms, and integrate Google Business.",
                  icon: Zap,
                },
                {
                  day: "Day 11-12",
                  title: "Review & Revisions",
                  desc: "You see the live site. We make unlimited revisions until you're 100% satisfied. Registrations start getting approved.",
                  icon: Eye,
                },
                {
                  day: "Day 13-14",
                  title: "Launch & Handover",
                  desc: "Site goes live on your domain. All certificates delivered. Training call included. You're open for business.",
                  icon: Rocket,
                },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="flex items-center gap-4 md:w-48 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/25 z-10">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="md:hidden font-bold text-blue-600">{step.day}</span>
                  </div>
                  <div className="md:pt-2">
                    <span className="hidden md:inline-block text-sm font-semibold text-blue-600 mb-1">{step.day}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
           <Link
  href="https://wa.me/917350247244?text=Hi%2C%20I%27d%20like%20to%20get%20my%2014-day%20launch%20plan."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg bg-blue-600 hover:bg-blue-700 transition-all"
>
  Get My 14-Day Launch Plan
  <ArrowRight className="w-4 h-4" />
</Link>

<p className="mt-3 text-sm text-muted-foreground">
  Free. No commitment. Get your plan on WhatsApp in 5 minutes.
</p>
          </div>
        </div>
      </section>

      {/* === SERVICES (What you actually get) === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Everything You Need to Go Live
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't hire a CA, a web developer, and a designer. We handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Business Registrations",
                items: ["GST Registration", "Shop Act License", "Udyam/MSME", "IEC Code", "FSSAI (if needed)"],
                cta: { text: "See registration details", href: "/services/registration" },
              },
              {
                icon: Globe,
                title: "Professional Website",
                items: ["Custom design & development", "Mobile-responsive", "Contact forms & maps", "Google Business setup", "SEO optimization"],
                cta: { text: "View website packages", href: "/services/website" },
              },
              {
                icon: Cloud,
                title: "AWS Cloud Hosting",
                items: ["99.9% uptime", "SSL certificate", "Daily backups", "CDN for speed", "6 months free"],
                cta: { text: "Hosting details", href: "/services/aws-hosting" },
              },
              {
                icon: Headphones,
                title: "Ongoing Support",
                items: ["Unlimited minor edits", "Monthly performance reports", "Security updates", "Content changes", "Phone & WhatsApp support"],
                cta: { text: "Support plans", href: "/services/support" },
              },
            ].map((service, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.cta.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
                >
                  {service.cta.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO (Proof) === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Businesses We Launched
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients. Not mockups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item, i) => (
              <div key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 h-48 flex items-center justify-center relative overflow-hidden">
                  <BarChart3 className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{item.category || "Business Launch"}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-green-700 font-semibold text-sm bg-green-50 px-3 py-2 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                    {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS (Trust) === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Don't Take Our Word For It
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              127+ businesses trust us with their launch. Here's what a few of them said.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING (Anchoring + Risk Reversal) === */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Simple Pricing. No Hidden Fees.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Government fees, website build, hosting, and support — all included. You won't get a surprise invoice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 ${
                  plan.isRecommended
                    ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-xl shadow-blue-100/50 ring-1 ring-blue-500/20"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm"> one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.isRecommended
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>14-day money-back guarantee on all plans. No questions asked.</span>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ (Objection Handling) === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-foreground font-semibold mb-2">Still have questions?</p>
            <p className="text-muted-foreground text-sm mb-4">
              Talk to a real human. We respond in under 10 minutes during business hours.
            </p>
           <a
  href="https://wa.me/917350247244?text=Hi%2C%20I%27m%20interested%20in%20your%20website%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
>
  WhatsApp us now
  <ArrowRight className="w-4 h-4" />
</a>
              
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Ready to stop waiting and start selling?"
        subtitle="Your competitors are already online. In 14 days, you could be too. Get your free launch plan and see exactly what it'll take."
        primaryCta={{ text: "Get My Free Launch Plan", href: "#audit" }}
        showForm={true}
        socialProof={{ count: "127+", label: "businesses launched this quarter" }}
      />
    </MainLayout>
  );
}