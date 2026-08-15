"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  Database,
  Lock,
  Shield,
  Archive,
  CheckCircle,
  Clock,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Server,
  HardDrive,
  FileWarning,
  XCircle,
  Star,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";

const DATA_FAQ = [
  {
    question: "I already save files on Google Drive. Do I still need this?",
    answer:
      "Google Drive is file storage, not business data management. It doesn't backup your databases, website, customer records, or accounting software. One ransomware attack and your Drive files get encrypted too. We create isolated, encrypted backups that even you can't accidentally delete.",
  },
  {
    question: "How quickly can you restore my data if something goes wrong?",
    answer:
      "Standard recovery: 2-4 hours for full system restore. Critical data (customer DB, active orders): 30 minutes. We test recovery monthly so when disaster hits, we're not figuring it out — we're executing a playbook.",
  },
  {
    question: "What if my laptop gets stolen or office floods?",
    answer:
      "That's exactly why cloud backups exist. Your data lives in 3 geographically separate AWS regions. Even if your office burns down, your business data is safe and recoverable from any internet connection.",
  },
  {
    question: "Is my data safe with you? Can you see my files?",
    answer:
      "No. We use client-side encryption — your data is encrypted on your device before it ever reaches our servers. We hold the infrastructure keys, you hold the data keys. Even our engineers can't read your files.",
  },
  {
    question: "How much does business data management cost?",
    answer:
      "Our backup & management plans start at ₹1,999/month for up to 500GB. That includes daily automated backups, 30-day retention, disaster recovery, and 24/7 monitoring. Enterprise plans with compliance reporting start at ₹7,999/month.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You get a full export of all your data in standard formats (CSV, SQL dumps, PDFs). No lock-in, no hostage data. We believe in earning your business every month, not trapping you.",
  },
];

const plans = [
  {
    name: "Essential",
    price: "₹1,999",
    period: "/month",
    description: "For small businesses with basic backup needs",
    features: [
      "Up to 500GB storage",
      "Daily automated backups",
      "30-day retention",
      "Email alerts for issues",
      "Standard support",
      "Basic recovery (4 hours)",
    ],
    cta: "Get Started",
    href: "#audit",
    popular: false,
  },
  {
    name: "Business",
    price: "₹4,999",
    period: "/month",
    description: "For growing businesses with critical data",
    features: [
      "Up to 2TB storage",
      "Hourly automated backups",
      "90-day retention",
      "Real-time monitoring dashboard",
      "Priority WhatsApp support",
      "Fast recovery (30 min)",
      "Monthly security report",
    ],
    cta: "Most Popular",
    href: "#audit",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹9,999",
    period: "/month",
    description: "For businesses with compliance requirements",
    features: [
      "Unlimited storage",
      "Continuous backup",
      "1-year retention",
      "Compliance reporting (ISO/GDPR)",
      "Dedicated account manager",
      "Instant recovery",
      "Quarterly disaster drills",
      "Custom SLA",
    ],
    cta: "Talk to Sales",
    href: "https://wa.me/917350247244?text=Hello%2C%20I'm%20interested%20in%20Enterprise%20data%20management.",
    popular: false,
  },
];

export default function DataManagementPage() {
  const [email, setEmail] = useState("");
  const [businessSize, setBusinessSize] = useState("");
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
          businessSize,
          source: "data_management_page",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* === HERO: Fear-based + audit lead magnet === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full mix-blend-overlay filter blur-[150px] opacity-15 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400/30 mb-8">
                <AlertTriangle className="w-4 h-4 text-red-300" />
                <span className="text-sm font-medium text-red-200">
                  60% of SMBs close within 6 months of major data loss
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Is Your Business One Hard Drive Crash Away from Disaster?
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 text-balance leading-relaxed">
                Ransomware, hardware failure, accidental deletion — most Indian
                businesses have zero backup strategy. We protect your customer
                data, financial records, and website with automated,
                encrypted, off-site backups you can recover in hours, not
                weeks.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Free security audit",
                  "30-min data recovery",
                  "Military-grade encryption",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20a%20free%20data%20security%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Audit on WhatsApp
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
                    Free Data Security Audit
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We'll analyze your current data setup and send you a report
                    showing exactly what you're risking and how to fix it.
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Business Size
                      </label>
                      <select
                        value={businessSize}
                        onChange={(e) => setBusinessSize(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="">Select team size</option>
                        <option value="solo">Solo entrepreneur</option>
                        <option value="2-10">2-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="50+">50+ employees</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Analyzing..." : "Get My Free Audit"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free. No credit card. Report delivered in 24 hours.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Audit request received!
                  </h3>
                  <p className="text-muted-foreground">
                    We're preparing your security report. Check your inbox in 24
                    hours.
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
            <HardDrive className="w-5 h-5 text-emerald-600" />
            <span>
              <span className="font-bold text-foreground">50TB+</span> data
              protected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">0</span> data loss
              incidents
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">30-min</span> avg
              recovery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">180+</span> businesses
              protected
            </span>
          </div>
        </div>
      </section>

      {/* === PAIN: Real stories of data loss === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <FileWarning className="w-4 h-4" />
            <span>These happen every day</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Most Indian Businesses Have No Backup Plan
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            You think it won't happen to you — until it does. Here are the most
            common ways businesses lose everything, and how often they occur:
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "43%",
                label: "Of cyberattacks target small businesses",
                source: "Cybersecurity India Report 2025",
                icon: Shield,
              },
              {
                stat: "140 days",
                label: "Average time to detect a data breach",
                source: "IBM Security Report",
                icon: Eye,
              },
              {
                stat: "₹15 Lakhs",
                label: "Average cost of data recovery after ransomware",
                source: "Indian SMB Cyber Loss Survey",
                icon: TrendingUp,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-red-600 mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.label}
                </p>
                <p className="text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHAT WE PROTECT === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              What We Protect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If it matters to your business, we back it up. If you can't afford
              to lose it, we protect it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "Customer Database",
                desc: "CRM records, contact lists, purchase history, and loyalty data.",
              },
              {
                icon: Server,
                title: "Website & App Data",
                desc: "Full site backups, databases, media files, and configuration.",
              },
              {
                icon: Archive,
                title: "Financial Records",
                desc: "Accounting data, invoices, GST returns, and transaction logs.",
              },
              {
                icon: Lock,
                title: "Legal Documents",
                desc: "Contracts, registrations, compliance files, and IP records.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Set It and Forget It
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Once configured, everything runs automatically. You don't lift a
              finger.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Audit",
                desc: "We map every piece of critical data in your business.",
              },
              {
                icon: Lock,
                title: "Encrypt",
                desc: "Your data is encrypted before it leaves your device.",
              },
              {
                icon: Server,
                title: "Backup",
                desc: "Automated daily/hourly backups to 3 AWS regions.",
              },
              {
                icon: Shield,
                title: "Monitor",
                desc: "24/7 alerts if anything fails or looks suspicious.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Cheaper Than One Day of Downtime
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One ransomware attack costs ₹15+ lakhs to recover. Our plans start
              at the price of a daily chai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-50 to-white shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-emerald-600 hover:text-emerald-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Not sure which plan?{" "}
                <a
                  href="https://wa.me/917350247244?text=Hello%2C%20help%20me%20choose%20the%20right%20backup%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  Message us
                </a>{" "}
                — free recommendation in 10 minutes.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPARISON: With vs Without === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              With Us vs. Without Us
            </h2>
            <p className="text-lg text-muted-foreground">
              The difference is the difference between business continuity and
              business closure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-red-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Without Proper Backup
              </h3>
              <ul className="space-y-4">
                {[
                  "Data lives on one laptop or local server",
                  "No recovery plan when hardware fails",
                  "Ransomware = pay ₹15L+ or lose everything",
                  "Accidental deletion = permanent loss",
                  "Compliance violations = government fines",
                  "Customer trust destroyed after breach",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-lg shadow-emerald-100/30">
              <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                With CloudTech Backup
              </h3>
              <ul className="space-y-4">
                {[
                  "Data encrypted and stored in 3 AWS regions",
                  "Recovery playbook tested monthly",
                  "Ransomware-proof isolated backups",
                  "Accidental deletion? Restored in 30 minutes",
                  "Compliance reports generated automatically",
                  "Customers never know there was an issue",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === TRUST / GUARANTEE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Our Data Safety Promise
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            If we ever fail to recover your data from our backups, we refund 100%
            of fees paid plus cover your data recovery costs up to ₹5 lakhs.
            We've never had to use this guarantee because our systems work.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Client-Side Encryption",
                desc: "Your data is encrypted before it leaves your premises. We can't read it.",
              },
              {
                icon: Server,
                title: "3-Region Redundancy",
                desc: "Mumbai, Singapore, and Ireland. Even a regional disaster can't touch your data.",
              },
              {
                icon: Clock,
                title: "Tested Recovery",
                desc: "We perform full recovery drills monthly. No surprises when you actually need it.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              Everything you need to know before protecting your data.
            </p>
          </div>

          <FAQAccordion items={DATA_FAQ} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Still have questions?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Our security team replies on WhatsApp in under 10 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20have%20a%20question%20about%20data%20backup."
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
        title="Don't wait for a disaster to think about backups"
        subtitle="Every day without proper data protection is a day of risk. Get your free security audit and know exactly where you stand."
        primaryCta={{
          text: "Get Free Security Audit",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20a%20free%20data%20security%20audit.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}