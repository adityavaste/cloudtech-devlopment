"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Globe,
  TrendingUp,
  FileText,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  Ship,
  Plane,
  ShoppingCart,
  Factory,
  Package,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";

const IEC_FAQ = [
  {
    question: "Can I start exporting on Amazon Global Selling without IEC?",
    answer:
      "No. Amazon Global Selling, Flipkart Global, Alibaba, and every other export platform require a valid IEC number before you can list products. We get your IEC in 5-7 working days so you can start selling globally fast.",
  },
  {
    question: "How long does IEC registration actually take?",
    answer:
      "DGFT typically issues IEC within 5-7 working days after application. We file with pre-verified documents so you don't face rejections or delays. In urgent cases, we can expedite to 3-5 days.",
  },
  {
    question: "Is IEC registration free with the government?",
    answer:
      "Yes, DGFT does not charge a fee for IEC registration. You only pay our service fee for document preparation, portal filing, and follow-up. Our all-inclusive price covers everything — no hidden costs.",
  },
  {
    question: "What documents do I need for IEC?",
    answer:
      "PAN card, passport-size photo, cancelled cheque or bank statement, and address proof of business premises. For companies/LLPs, we also need incorporation certificate and board resolution. We send you a personalized checklist.",
  },
  {
    question: "Can I get IEC as an individual or do I need a company?",
    answer:
      "Individuals can get IEC under their personal PAN. You don't need a company. Many solo exporters and home-based sellers start with individual IEC and upgrade later. We handle both individual and business applications.",
  },
  {
    question: "Do you help with export incentives and schemes?",
    answer:
      "Yes. After IEC registration, we help you apply for RoDTEP, MEIS, and other DGFT export benefit schemes. This can save you 2-5% on every export shipment — often recovering the IEC cost in your first order.",
  },
];

const iecPlans = [
  {
    name: "Individual IEC",
    price: "₹1,999",
    period: "one-time",
    description: "For solo exporters & freelancers",
    features: [
      "10-digit IEC number",
      "Lifetime validity",
      "PAN-based registration",
      "DGFT portal filing",
      "Document verification",
      "5-7 day delivery",
      "Free consultation",
    ],
    cta: "Get Started",
    href: "#order",
    popular: false,
  },
  {
    name: "Business IEC",
    price: "₹2,999",
    period: "one-time",
    description: "For companies, LLPs & partnerships",
    features: [
      "10-digit IEC number",
      "Lifetime validity",
      "Company/LLP registration",
      "DGFT portal filing",
      "Board resolution draft",
      "Document verification",
      "5-7 day delivery",
      "Priority support",
    ],
    cta: "Most Popular",
    href: "#order",
    popular: true,
  },
  {
    name: "IEC + Export Setup",
    price: "₹5,999",
    period: "one-time",
    description: "IEC + AD Code + export documentation",
    features: [
      "Everything in Business IEC",
      "AD Code registration",
      "Export documentation setup",
      "RoDTEP scheme application",
      "Customs clearance guidance",
      "Amazon Global Selling ready",
      "Dedicated export consultant",
    ],
    cta: "Go Global",
    href: "#order",
    popular: false,
  },
];

export default function IECPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !phone || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
  name,
  email,
  phoneNumber: phone,
  businessType,
  tradeType,
  source: "business_registration_page",
  page:
    typeof window !== "undefined"
      ? window.location.pathname
      : "/",
}),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    { icon: Factory, label: "Manufacturer / Exporter" },
    { icon: ShoppingCart, label: "E-commerce Seller" },
    { icon: Package, label: "Trader / Merchant" },
    { icon: Ship, label: "Import Business" },
    { icon: Plane, label: "Freight Forwarder" },
    { icon: Globe, label: "Service Exporter" },
  ];

  return (
    <MainLayout>
      {/* === HERO: Global trade angle === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Globe className="w-4 h-4 text-indigo-200" />
                <span className="text-sm font-medium text-indigo-100">
                  600+ exporters registered
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your IEC in 5 Days — Start Exporting to 190+ Countries
              </h1>

              <p className="text-lg sm:text-xl text-indigo-100 mb-8 text-balance leading-relaxed">
                Without an Import Export Code, you can't ship a single product
                overseas. We handle your DGFT registration, AD Code setup, and
                export documentation — so your first international order ships
                legally.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Lifetime validity",
                  "Amazon Global ready",
                  "Govt fee: ₹0",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-indigo-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20an%20IEC%20 urgently."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Apply on WhatsApp
                </a>
                <a
                  href="tel:+917350247244"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call for Urgent IEC
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Get Your IEC Quote
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us about your trade business. We'll tell you exactly
                    what you need and the cost — in 10 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rahul Sharma"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Business Type
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="individual">Individual / Sole Proprietor</option>
                          <option value="partnership">Partnership Firm</option>
                          <option value="llp">LLP</option>
                          <option value="pvt-ltd">Private Limited</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          I Want To
                        </label>
                        <select
                          value={tradeType}
                          onChange={(e) => setTradeType(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select</option>
                          <option value="export">Export Only</option>
                          <option value="import">Import Only</option>
                          <option value="both">Both Export & Import</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My IEC Quote"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free quote. No payment required now.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Request received!
                  </h3>
                  <p className="text-muted-foreground">
                    We're preparing your IEC assessment. Expect a call within 30
                    minutes.
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
            <Globe className="w-5 h-5 text-indigo-600" />
            <span>
              <span className="font-bold text-foreground">600+</span> IECs
              issued
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">5-7 Days</span>{" "}
              delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">₹0</span> govt fee
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>
              <span className="font-bold text-foreground">4.9/5</span> rating
            </span>
          </div>
        </div>
      </section>

      {/* === PAIN: Can't trade without IEC === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>No IEC = No global trade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Your Shipment Is Stuck at Customs Without It
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            The Import Export Code is mandatory for every international
            shipment. Without it, customs won't clear your goods and export
            platforms won't onboard you.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "Blocked",
                label: "From Amazon Global, Alibaba & Flipkart Global",
                icon: XCircle,
              },
              {
                stat: "Seized",
                label: "Shipments held at customs without IEC",
                icon: AlertTriangle,
              },
              {
                stat: "₹0",
                label: "Export incentives you can't claim (RoDTEP, MEIS)",
                icon: DollarSign,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-red-600 mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHO NEEDS IT === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Who Needs an IEC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Anyone importing or exporting goods/services from India needs this
              code. No exceptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure if you need IEC or AD Code?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your product and destination. We'll tell you exactly
              what's required.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I'm%20not%20sure%20if%20I%20need%20IEC.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Get Free Advice
            </a>
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DGFT doesn't charge for IEC. You only pay our service fee for
              documentation and filing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {iecPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-indigo-500 bg-gradient-to-b from-indigo-50 to-white shadow-xl shadow-indigo-100/50 ring-1 ring-indigo-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                    {" "}
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20IEC%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-indigo-600 hover:text-indigo-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span>
                Govt fee: ₹0. Our price includes everything — no hidden charges.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              From Application to IEC in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the DGFT portal, document verification, and follow-up.
              You just provide the documents.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Consult",
                desc: "We assess your business and confirm the right IEC type.",
              },
              {
                icon: Shield,
                title: "Verify",
                desc: "We check your PAN, bank details, and address proof.",
              },
              {
                icon: Globe,
                title: "File",
                desc: "Application submitted on DGFT portal (ANF 2A).",
              },
              {
                icon: CheckCircle,
                title: "Deliver",
                desc: "10-digit IEC issued. Start shipping globally.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
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

      {/* === PLATFORM READY === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Sell on Every Global Platform
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every major export marketplace requires IEC. We make sure yours is
            ready.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Amazon Global",
              "Flipkart Global",
              "Alibaba",
              "IndiaMART",
              "eBay",
              "Etsy",
              "Shopify",
              "Custom Website",
            ].map((platform) => (
              <div
                key={platform}
                className="flex items-center justify-center gap-2 bg-white border border-slate-100 rounded-xl px-5 py-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 600+ Exporters Chose Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            DGFT portal is confusing and rejections are common. We prevent that
            by getting it right the first time.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Pre-Verification",
                desc: "We catch document errors before filing. 95% first-attempt approval.",
              },
              {
                icon: Clock,
                title: "Speed Guarantee",
                desc: "IEC in 5-7 days. Or we refund 20% of our fee.",
              },
              {
                icon: TrendingUp,
                title: "Export Incentives",
                desc: "We help you claim RoDTEP & MEIS — saving 2-5% per shipment.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              Everything you need to know before applying.
            </p>
          </div>

          <FAQAccordion items={IEC_FAQ} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to go global?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Apply now and get your IEC within 5-7 days.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20IEC%20registration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Apply on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Your first international shipment starts with IEC"
        subtitle="Every day without IEC is a day of missed global revenue. Get registered in 5-7 days and start selling to 190+ countries."
        primaryCta={{
          text: "Apply for IEC on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20apply%20for%20IEC%20registration.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}