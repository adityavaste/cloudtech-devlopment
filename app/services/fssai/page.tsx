"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Utensils,
  Shield,
  FileText,
  Clock,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  MapPin,
  Store,
  Home,
  Factory,
  Truck,
} from "lucide-react";

const FSSAI_FAQ = [
  {
    question: "Can I list on Swiggy/Zomato without FSSAI?",
    answer:
      "No. Both platforms require a valid FSSAI license number before they'll onboard your restaurant or cloud kitchen. We get you registered and provide the license number within 7-10 days so you can start taking orders.",
  },
  {
    question: "I run a home-based food business. Do I need FSSAI?",
    answer:
      "Yes, if your annual turnover exceeds ₹12 lakhs. But even below that threshold, having FSSAI registration builds massive customer trust and is required by most delivery platforms. We recommend it for every food business.",
  },
  {
    question: "How long does FSSAI registration take?",
    answer:
      "Basic Registration: 7-10 days. State License: 15-20 days. Central License: 25-30 days. We file correctly the first time so you don't face rejections or delays. Most of our clients get their Basic Registration in under 10 days.",
  },
  {
    question: "What documents do I need?",
    answer:
      "PAN, Aadhaar, passport photo, address proof of premises, and a simple food safety plan. For manufacturers, we also need product labels and NOC from municipality. We send you a personalized checklist after you book.",
  },
  {
    question: "What if FSSAI rejects my application?",
    answer:
      "We handle resubmission and corrections at no extra cost. Our first-attempt approval rate is 96% because we verify your documents and premises details before filing. If there's an inspection, we guide you through it.",
  },
  {
    question: "Do you handle renewals?",
    answer:
      "Absolutely. FSSAI licenses are valid for 3 years. We send renewal reminders 60 days before expiry and handle the entire renewal process so your license never lapses.",
  },
];

const fssaiPlans = [
  {
    name: "Basic Registration",
    price: "₹2,999",
    period: "one-time",
    description: "Turnover below ₹12 Lakhs",
    features: [
      "Valid for 3 years",
      "FSSAI Registration Certificate",
      "14-digit FSSAI number",
      "Works on Swiggy/Zomato",
      "Document preparation",
      "Government fee included",
      "7-10 day delivery",
    ],
    cta: "Get Started",
    href: "#order",
    popular: false,
  },
  {
    name: "State License",
    price: "₹5,999",
    period: "one-time",
    description: "Turnover ₹12L – ₹20 Crores",
    features: [
      "Valid for 3 years",
      "State FSSAI License",
      "14-digit FSSAI number",
      "Swiggy/Zomato + Retail ready",
      "Food safety plan included",
      "Government fee included",
      "15-20 day delivery",
      "Inspection guidance",
    ],
    cta: "Most Popular",
    href: "#order",
    popular: true,
  },
  {
    name: "Central License",
    price: "₹9,999",
    period: "one-time",
    description: "Turnover above ₹20 Crores",
    features: [
      "Valid for 3 years",
      "Central FSSAI License",
      "14-digit FSSAI number",
      "Pan-India operations",
      "Export eligibility",
      "Government fee included",
      "25-30 day delivery",
      "Dedicated compliance manager",
    ],
    cta: "Apply Now",
    href: "#order",
    popular: false,
  },
];

export default function FSSAIPage() {
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
          source: "fssai_page",
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
    { icon: Store, label: "Restaurant / Cafe" },
    { icon: Home, label: "Cloud Kitchen" },
    { icon: Factory, label: "Food Manufacturer" },
    { icon: Utensils, label: "Bakery / Confectionery" },
    { icon: Truck, label: "Food Delivery" },
    { icon: MapPin, label: "Home-based Food Business" },
  ];

  return (
    <MainLayout>
      {/* === HERO: Platform access + legal fear === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-700 via-emerald-800 to-teal-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Utensils className="w-4 h-4 text-green-200" />
                <span className="text-sm font-medium text-green-100">
                  850+ food businesses licensed
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your FSSAI License in 7 Days — Start Selling Legally
              </h1>

              <p className="text-lg sm:text-xl text-green-100 mb-8 text-balance leading-relaxed">
                Can't get on Swiggy or Zomato without it. Can't operate a cloud
                kitchen without it. We handle your FSSAI registration
                end-to-end — from document prep to certificate delivery.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Swiggy/Zomato ready",
                  "Govt fee included",
                  "96% first-approval rate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-green-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20FSSAI%20registration%20for%20my%20food%20business."
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
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Check Your FSSAI Eligibility
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us about your food business. We'll tell you which
                    license you need and the exact cost — in 10 minutes.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="restaurant">Restaurant / Cafe</option>
                          <option value="cloud-kitchen">Cloud Kitchen</option>
                          <option value="manufacturer">Food Manufacturer</option>
                          <option value="bakery">Bakery / Confectionery</option>
                          <option value="delivery">Food Delivery</option>
                          <option value="home-based">Home-based Food Business</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My FSSAI Quote"}
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
                    We're preparing your FSSAI recommendation. Expect a call
                    within 30 minutes.
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
            <Store className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">850+</span> food
              businesses licensed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">7-10 Days</span> for
              Basic Registration
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">96%</span> first-approval
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

      {/* === PAIN: Operating without FSSAI === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Operating without FSSAI is illegal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            You Can't Sell Food Without It
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            FSSAI registration isn't optional — it's mandatory under the Food
            Safety and Standards Act. Operating without it exposes you to raids,
            fines, and platform rejection.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹10 Lakhs",
                label: "Maximum penalty for operating without FSSAI",
                icon: AlertTriangle,
              },
              {
                stat: "Rejected",
                label: "From Swiggy, Zomato & Amazon without FSSAI number",
                icon: XCircle,
              },
              {
                stat: "Shut Down",
                label: "FSSAI can seal your premises for non-compliance",
                icon: Shield,
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
              Every Food Business Needs FSSAI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you make, sell, distribute, or import food — you need this
              license. No exceptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-green-50 rounded-2xl border border-green-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure which category you fall under?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your business details and we'll tell you exactly which
              license you need.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I'm%20not%20sure%20which%20FSSAI%20license%20I%20need.%20Can%20you%20help?"
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
              All-Inclusive Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Government fee + our service charge + document prep + filing.
              One price. No surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {fssaiPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-green-500 bg-gradient-to-b from-green-50 to-white shadow-xl shadow-green-100/50 ring-1 ring-green-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-green-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20FSSAI%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-green-600 hover:text-green-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Government fee included in all plans. No hidden charges.
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
              From Application to License in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the paperwork, government portal, and follow-up. You
              focus on your kitchen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Check Eligibility",
                desc: "Tell us your business type and turnover. We identify the right license category.",
              },
              {
                icon: Shield,
                title: "Prepare Documents",
                desc: "We send you a personalized checklist and verify every document before filing.",
              },
              {
                icon: Utensils,
                title: "File Application",
                desc: "We submit on the FSSAI portal with a complete food safety management plan.",
              },
              {
                icon: CheckCircle,
                title: "Get Licensed",
                desc: "Certificate delivered digitally + physically. Start selling legally.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Get On Swiggy, Zomato & Amazon
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every major food platform requires a valid FSSAI license number. We
            make sure yours is ready.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Swiggy",
              "Zomato",
              "Amazon Food",
              "BigBasket",
              "Blinkit",
              "Dunzo",
              "EatSure",
              "Direct Website",
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
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why Food Businesses Trust Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We've licensed 850+ food businesses across India. From home bakers
            to restaurant chains, we know exactly what FSSAI officers look for.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document Perfection",
                desc: "We verify every document before filing. 96% first-attempt approval rate.",
              },
              {
                icon: Clock,
                title: "Speed Guarantee",
                desc: "Basic Registration in 7-10 days. State License in 15-20 days. Or we refund 20%.",
              },
              {
                icon: Shield,
                title: "Inspection Support",
                desc: "If FSSAI schedules a premises inspection, we guide you through every step.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

          <FAQAccordion items={FSSAI_FAQ} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to get licensed?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Apply now and get your FSSAI number within 7-10 days.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20FSSAI%20registration."
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
        title="Stop risking your food business"
        subtitle="Every day without FSSAI is a day of legal risk and lost platform revenue. Get licensed in 7-10 days and start selling everywhere."
        primaryCta={{
          text: "Apply for FSSAI on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20apply%20for%20FSSAI%20registration.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}