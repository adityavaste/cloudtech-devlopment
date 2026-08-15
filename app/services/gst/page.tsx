"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  FileText,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  Building2,
  ShoppingCart,
  Briefcase,
  Factory,
  Store,
  Home,
} from "lucide-react";

const GST_FAQ = [
  {
    question: "Is GST registration really mandatory for my business?",
    answer:
      "Yes, if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for services, ₹10 lakhs for special category states). Even below that, voluntary registration lets you claim Input Tax Credit and sell to GST-registered businesses. Without it, you can't invoice corporates or sell on Amazon/Flipkart.",
  },
  {
    question: "How fast can I get my GSTIN?",
    answer:
      "Typically 7-15 working days if documents are correct. We file with pre-verified documents so you don't face rejections or back-and-forth with GST officers. Urgent cases can be expedited to 5-7 days.",
  },
  {
    question: "Can I claim Input Tax Credit (ITC) immediately?",
    answer:
      "Yes, once your GSTIN is active. Every GST you pay on business purchases (raw materials, rent, services) can be claimed as credit against your GST liability. Most businesses save 12-18% on their tax outgo through proper ITC claims.",
  },
  {
    question: "What documents do I need for GST registration?",
    answer:
      "PAN, Aadhaar, passport photo, address proof of business premises, bank statement, and business registration proof (Shop Act/Partnership deed/etc). We send you a personalized checklist and verify everything before filing.",
  },
  {
    question: "What if my GST application gets rejected?",
    answer:
      "We handle resubmission and corrections at zero extra cost. Our first-attempt approval rate is 94% because we pre-verify documents and address common rejection reasons before filing.",
  },
  {
    question: "Do you also file GST returns?",
    answer:
      "Yes. We offer monthly/quarterly GST return filing starting at ₹999/month. This includes GSTR-1, GSTR-3B, and annual returns. We also reconcile your ITC so you never miss a credit.",
  },
];

const gstPlans = [
  {
    name: "GST Registration",
    price: "₹1,999",
    period: "one-time",
    description: "For new businesses & first-time registration",
    features: [
      "GSTIN + Certificate",
      "Document verification",
      "Portal filing (REG-01)",
      "Officer follow-up",
      "ARN tracking",
      "7-15 day delivery",
      "Free consultation",
    ],
    cta: "Register Now",
    href: "#order",
    popular: true,
  },
  {
    name: "GST Registration + Returns",
    price: "₹4,999",
    period: "first year",
    description: "Registration + 12 months of return filing",
    features: [
      "Everything in Registration",
      "Monthly GSTR-1 & GSTR-3B",
      "Annual return (GSTR-9)",
      "ITC reconciliation",
      "Payment reminders",
      "Dedicated accountant",
      "WhatsApp support",
    ],
    cta: "Best Value",
    href: "#order",
    popular: false,
  },
  {
    name: "GST Migration",
    price: "₹1,499",
    period: "one-time",
    description: "Switch from old VAT/CST/Service Tax to GST",
    features: [
      "Provisional ID conversion",
      "Data migration",
      "Amendment filing",
      "Credit transfer",
      "New certificate",
      "5-7 day delivery",
    ],
    cta: "Migrate Now",
    href: "#order",
    popular: false,
  },
];

export default function GSTPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [turnover, setTurnover] = useState("");
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
          phone,
          businessType,
          turnover,
          source: "gst_page",
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

  const businessTypes = [
    { icon: Store, label: "Retail Shop / Trader" },
    { icon: Factory, label: "Manufacturer" },
    { icon: Briefcase, label: "Service Provider" },
    { icon: ShoppingCart, label: "E-commerce Seller" },
    { icon: Building2, label: "Restaurant / Hotel" },
    { icon: Home, label: "Freelancer / Consultant" },
  ];

  return (
    <MainLayout>
      {/* === HERO: Money-saving angle === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium text-blue-100">
                  2,000+ businesses registered
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your GSTIN in 7 Days — Start Saving Tax Immediately
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 mb-8 text-balance leading-relaxed">
                Without GST registration, you're paying 18% extra on every
                business purchase. We register your business, set up your
                returns, and help you claim Input Tax Credit from day one.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Govt fee: ₹0",
                  "ITC from day 1",
                  "Sell on Amazon/Flipkart",
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
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20register%20for%20GST."
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
                  Call for Urgent GST
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Check Your GST Eligibility
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us about your business. We'll tell you if GST is
                    mandatory, how much ITC you can claim, and the exact cost.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="retail">Retail / Trading</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="services">Services</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="restaurant">Restaurant / Hotel</option>
                          <option value="freelancer">Freelancer</option>
                        </select>
                      </div>
                    
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My GST Quote"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free eligibility check. No payment required now.
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
                    We're preparing your GST assessment. Expect a call within 30
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
            <FileText className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">2,000+</span> GSTINs
              issued
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">7-15 Days</span>{" "}
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

      {/* === PAIN: Cost of no GST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Operating without GST is expensive</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Every Month Without GST Costs You Money
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            GST isn't just a compliance checkbox — it's a money-saving tool.
            Without it, you're overpaying on taxes and losing business
            opportunities.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "18%",
                label: "Extra tax you pay on every purchase (no ITC)",
                icon: DollarSign,
              },
              {
                stat: "₹10,000",
                label: "Late registration penalty + interest",
                icon: AlertTriangle,
              },
              {
                stat: "Blocked",
                label: "From selling to corporates & government",
                icon: XCircle,
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
              Who Needs GST Registration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mandatory above ₹40L turnover. But even below that, GST opens
              doors to bigger clients and tax savings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure if GST applies to you?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your turnover and business type. We'll tell you in 2
              minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I'm%20not%20sure%20if%20I%20need%20GST.%20Can%20you%20help?"
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
              Government fee for GST registration is ₹0. You only pay our
              service charge for documentation and filing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {gstPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-xl shadow-blue-100/50 ring-1 ring-blue-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20GST%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-blue-600 hover:text-blue-600"
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
              From Application to GSTIN in 5 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the GST portal, document verification, and officer
              follow-up. You just provide the documents.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: FileText,
                title: "Consult",
                desc: "We assess your business and tell you the right GST type.",
              },
              {
                icon: Shield,
                title: "Verify",
                desc: "We check your documents for errors before filing.",
              },
              {
                icon: FileText,
                title: "File",
                desc: "Application submitted on GST portal (Form REG-01).",
              },
              {
                icon: MessageCircle,
                title: "Follow-up",
                desc: "We respond to officer queries and clarifications.",
              },
              {
                icon: CheckCircle,
                title: "Deliver",
                desc: "GSTIN + certificate delivered. Start claiming ITC.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            What GST Registration Unlocks
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            It's not just about compliance. GST registration is a business
            growth tool.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: TrendingUp,
                title: "Input Tax Credit",
                desc: "Claim 18% GST back on every business purchase. Rent, raw materials, software, services — everything.",
              },
              {
                icon: Building2,
                title: "Sell to Big Companies",
                desc: "Corporates and government buyers only purchase from GST-registered vendors. Without it, you're invisible.",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Ready",
                desc: "Amazon, Flipkart, Meesho, and Shopify India require GSTIN for seller onboarding.",
              },
              {
                icon: Shield,
                title: "Legal Protection",
                desc: "Avoid ₹10,000+ penalties, interest on late registration, and potential business closure notices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 2,000+ Businesses Chose Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            GST registration seems simple until you hit a rejection. We prevent
            that by getting it right the first time.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Pre-Verification",
                desc: "We catch document errors before filing. 94% first-attempt approval.",
              },
              {
                icon: Clock,
                title: "Speed Guarantee",
                desc: "GSTIN in 7-15 days. Or we refund 20% of our fee.",
              },
              {
                icon: DollarSign,
                title: "ITC Optimization",
                desc: "We don't just register you — we show you how to save tax.",
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
              Everything you need to know before registering.
            </p>
          </div>

          <FAQAccordion items={GST_FAQ} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to get your GSTIN?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Apply now and start claiming Input Tax Credit within 7-15 days.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20GST%20registration."
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
        title="Stop overpaying tax. Start claiming ITC."
        subtitle="Every month without GST is a month of lost tax credits and missed business. Get registered in 7-15 days and keep more of what you earn."
        primaryCta={{
          text: "Apply for GST on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20apply%20for%20GST%20registration.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}