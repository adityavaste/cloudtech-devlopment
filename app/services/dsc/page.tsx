"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Lock,
  FileText,
  Clock,
  Smartphone,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Shield,
  Zap,
  XCircle,
  Star,
  Calendar,
  TrendingUp,
} from "lucide-react";

const DSC_FAQ = [
  {
    question: "Will this DSC work on GST, Income Tax, and MCA portals?",
    answer:
      "Yes. We issue DSCs from government-authorized Certifying Authorities (eMudhra, VSign, Capricorn). Every DSC we provide is pre-configured for MCA21, GST, Income Tax e-Filing, DGFT, ICEGATE, and eTender portals. If it doesn't work, we replace it free.",
  },
  {
    question: "How fast can I get my DSC?",
    answer:
      "Class 2 & 3 DSC with USB token: Same-day delivery in metro cities (Mumbai, Delhi, Bangalore, Pune, Hyderabad). 24-48 hours for tier-2 cities. Video KYC verification takes 15 minutes. No office visit required.",
  },
  {
    question: "I have a DSC but it's expiring. Can you renew it?",
    answer:
      "Yes. DSC renewal is faster than new issuance — typically 2-4 hours after document verification. We can also convert your old USB token DSC to a newer token if needed. Renewal prices are 20% lower than new purchase.",
  },
  {
    question: "What's the difference between Class 2 and Class 3 DSC?",
    answer:
      "Class 2: For GST filing, income tax, MCA forms by directors/authorized signatories. Class 3: Required for eTenders, eAuctions, and high-value transactions. Most business owners need Class 2. If you're bidding on government tenders, you need Class 3.",
  },
  {
    question: "Do I need to visit your office?",
    answer:
      "No. Everything is done online. We send you a video KYC link, you verify your identity via video call, and we courier the USB token to your address. For bulk orders (5+ DSCs), we offer on-site setup at your office.",
  },
  {
    question: "What if I lose my USB token?",
    answer:
      "We keep your certificate backup for 30 days. If you lose the token, we issue a replacement token with the same certificate for a nominal fee of ₹500. We also offer cloud-based DSC options where no physical token is needed.",
  },
];

const dscPlans = [
  {
    name: "Class 2 DSC",
    price: "₹1,999",
    period: "/2 years",
    description: "For GST, Income Tax, MCA filings",
    features: [
      "2-year validity",
      "USB token included",
      "Works on all government portals",
      "Video KYC (15 mins)",
      "Same-day delivery in metros",
      "Free replacement if defective",
    ],
    cta: "Buy Now",
    href: "#order",
    popular: false,
  },
  {
    name: "Class 3 DSC",
    price: "₹3,499",
    period: "/2 years",
    description: "For eTenders, eAuctions, high-value transactions",
    features: [
      "2-year validity",
      "USB token included",
      "eTender & eAuction compatible",
      "Video KYC (15 mins)",
      "Same-day delivery in metros",
      "Free replacement if defective",
      "Priority support",
    ],
    cta: "Most Popular",
    href: "#order",
    popular: true,
  },
  {
    name: "Class 3 + Signing",
    price: "₹4,999",
    period: "/2 years",
    description: "For legal document signing & contracts",
    features: [
      "2-year validity",
      "USB token included",
      "Document signing capability",
      "Legal validity under IT Act",
      "Video KYC (15 mins)",
      "Same-day delivery in metros",
      "Priority support",
    ],
    cta: "Buy Now",
    href: "#order",
    popular: false,
  },
];

export default function DSCPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dscType, setDscType] = useState("");
  const [urgency, setUrgency] = useState("");
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
      dscType,
      howUrgent: urgency,
      source: "dsc_page",
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

  return (
    <MainLayout>
      {/* === HERO: Urgency-driven for deadline-pressured buyers === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-600 via-orange-700 to-red-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Clock className="w-4 h-4 text-amber-200" />
                <span className="text-sm font-medium text-amber-100">
                  Same-day delivery in metros
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your DSC in 24 Hours — Before the Filing Deadline
              </h1>

              <p className="text-lg sm:text-xl text-orange-100 mb-8 text-balance leading-relaxed">
                GST return due? MCA form pending? eTender deadline approaching?
                We issue government-authorized Digital Signature Certificates
                with same-day delivery. No office visit. Video KYC in 15
                minutes.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "1,200+ DSCs issued",
                  "Works on all portals",
                  "USB token included",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-orange-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20a%20DSC%20urgently."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+917350247244"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call for Urgent Order
                </a>
              </div>
            </div>

            {/* Right: Order Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Order Your DSC
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Fill this form and we'll call you within 30 minutes to
                    confirm your DSC type and arrange delivery.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          DSC Type
                        </label>
                        <select
                          value={dscType}
                          onChange={(e) => setDscType(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="class2">Class 2 (GST/IT/MCA)</option>
                          <option value="class3">Class 3 (eTender)</option>
                          <option value="class3-sign">
                            Class 3 + Signing
                          </option>
                          <option value="not-sure">Not sure — help me choose</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          How urgent?
                        </label>
                        <select
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select urgency</option>
                          <option value="today">Need it today</option>
                          <option value="tomorrow">Need it tomorrow</option>
                          <option value="this-week">This week is fine</option>
                          <option value="planning">Just planning ahead</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-orange-600 text-white font-bold shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Get DSC Quote & Delivery"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    No payment required now. We'll call to confirm before
                    processing.
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
                    We're preparing your DSC quote. Expect a call within 30
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
            <FileText className="w-5 h-5 text-orange-600" />
            <span>
              <span className="font-bold text-foreground">1,200+</span> DSCs
              issued
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">24hr</span> delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> portal
              compatible
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>
              <span className="font-bold text-foreground">4.8/5</span> rating
            </span>
          </div>
        </div>
      </section>

      {/* === PAIN: What happens without DSC === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Missing a DSC costs more than buying one</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            You Can't File Anything Without It
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A Digital Signature Certificate isn't optional anymore. Without one,
            you're locked out of every government portal that matters to your
            business.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹10,000",
                label: "Late GST filing penalty per return",
                icon: Calendar,
              },
              {
                stat: "₹1,000/day",
                label: "MCA late filing fees for companies",
                icon: TrendingUp,
              },
              {
                stat: "Disqualified",
                label: "From government tenders without Class 3 DSC",
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

      {/* === PRICING === */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Transparent Pricing. No Hidden Fees.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Price includes USB token, government fees, and delivery. What you
              see is what you pay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dscPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-xl shadow-orange-100/50 ring-1 ring-orange-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-orange-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20order%20a%20DSC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-orange-600 hover:text-orange-600"
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
                Not sure which DSC you need?{" "}
                <a
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20need%20help%20choosing%20the%20right%20DSC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Message us
                </a>{" "}
                — we'll tell you in 2 minutes.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Get Your DSC in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No office visit. No paperwork confusion. From order to delivery in
              under 24 hours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Order",
                desc: "Fill the form or WhatsApp us. We confirm DSC type and price.",
              },
              {
                icon: Shield,
                title: "Video KYC",
                desc: "15-minute video verification. No documents to mail. Done on your phone.",
              },
              {
                icon: Zap,
                title: "Process",
                desc: "We file with the Certifying Authority. Certificate generated same day.",
              },
              {
                icon: Lock,
                title: "Deliver",
                desc: "USB token couriered to your address. Pre-configured. Ready to use.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
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

      {/* === PORTAL COMPATIBILITY === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Works on Every Government Portal
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our DSCs are pre-configured and tested on all major government
            platforms. If it doesn't work, we replace it free.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "GST Portal",
              "Income Tax e-Filing",
              "MCA21",
              "DGFT",
              "ICEGATE",
              "eTender / eAuction",
              "TRACES",
              "PF / ESI",
              "Banking Portals",
            ].map((portal) => (
              <div
                key={portal}
                className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {portal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why Buy From Us Instead of Directly from CA?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            You could buy a DSC directly from a Certifying Authority. But when
            something goes wrong — token not working, portal rejection, renewal
            confusion — you're on your own. We handle everything.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Buying Direct from CA
              </h3>
              <ul className="space-y-3">
                {[
                  "Figure out which DSC type yourself",
                  "No help if portal rejects your DSC",
                  "Token stops working? Buy a new one",
                  "Renewal reminders? None",
                  "Video KYC confusion? No support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg shadow-orange-100/30">
              <h3 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Buying From CloudTech
              </h3>
              <ul className="space-y-3">
                {[
                  "We recommend the exact DSC you need",
                  "Portal issue? We fix it remotely",
                  "Token defective? Free replacement",
                  "Auto-renewal reminders 30 days before expiry",
                  "Video KYC done via WhatsApp call",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before ordering.
            </p>
          </div>

          <FAQAccordion items={DSC_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Need your DSC today?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Urgent orders get priority processing. Message us on WhatsApp.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20need%20a%20DSC%20urgently%20(today)."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp for Urgent Order
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Don't miss another filing deadline"
        subtitle="Every day without a DSC is a day of penalty risk. Order now and get your certificate delivered within 24 hours."
        primaryCta={{
          text: "Order DSC on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20order%20a%20DSC.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}