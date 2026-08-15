"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Store,
  Clock,
  FileText,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  ShoppingBag,
  Utensils,
  Scissors,
  Building2,
  Pill,
  Home,
  Shield,
  Landmark,
} from "lucide-react";

const SHOP_ACT_FAQ = [
  {
    question: "Can I open a current account without Shop Act?",
    answer:
      "Most banks require a Shop Act license or GST registration to open a business current account. Without it, you're stuck using a personal savings account for business transactions — which creates accounting chaos and tax complications. We get your Shop Act certificate in 7-10 days so you can open a proper business account.",
  },
  {
    question: "My shop is on rent. Can I still get Shop Act?",
    answer:
      "Yes. A rent agreement or NOC from the property owner is sufficient for Shop Act registration. You don't need to own the property. We help you prepare the right rent agreement format if you don't have one.",
  },
  {
    question: "How long does Shop Act registration take?",
    answer:
      "Typically 7-10 working days after document submission. In metro cities like Mumbai, Pune, Bangalore, and Hyderabad, we have direct relationships with municipal corporations that help expedite processing. Urgent cases can be completed in 3-5 days.",
  },
  {
    question: "What if the municipal inspector visits before I have the license?",
    answer:
      "Operating without a Shop Act license can result in immediate closure of your shop, fines up to ₹5,000-25,000 depending on the state, and legal notices. We recommend getting registered before you open your doors to customers.",
  },
  {
    question: "Is Shop Act different from Trade License?",
    answer:
      "Yes. Shop Act (Shops & Establishment Act) regulates working hours, employee conditions, and shop operations. Trade License is a municipal permit to conduct business at a specific location. Some states require both. We assess your location and tell you exactly what's needed.",
  },
  {
    question: "Do I need to renew Shop Act every year?",
    answer:
      "Most states issue Shop Act licenses with lifetime or long-term validity (3-5 years). We handle renewals when due and send you reminders 60 days before expiry so your license never lapses.",
  },
];

const shopActPlans = [
  {
    name: "Shop Act Only",
    price: "₹1,499",
    period: "one-time",
    description: "For retail shops & small offices",
    features: [
      "Shops & Establishment Act registration",
      "Registration certificate",
      "Municipal filing",
      "Document preparation",
      "7-10 day delivery",
      "Lifetime validity (most states)",
      "Free consultation",
    ],
    cta: "Get Started",
    href: "#order",
    popular: false,
  },
  {
    name: "Shop Act + Trade License",
    price: "₹2,999",
    period: "one-time",
    description: "Complete municipal compliance package",
    features: [
      "Everything in Shop Act Only",
      "Trade License registration",
      "Municipal corporation filing",
      "Premises verification support",
      "Signage/board permission",
      "7-10 day delivery",
      "Priority support",
    ],
    cta: "Most Popular",
    href: "#order",
    popular: true,
  },
  {
    name: "Business Launch Pack",
    price: "₹4,999",
    period: "one-time",
    description: "Shop Act + GST + Bank account assistance",
    features: [
      "Shop Act + Trade License",
      "GST Registration",
      "Current account opening help",
      "Udyam/MSME registration",
      "Complete compliance setup",
      "14-day delivery guarantee",
      "Dedicated manager",
    ],
    cta: "Launch My Business",
    href: "#order",
    popular: false,
  },
];

export default function ShopActPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [businessType, setBusinessType] = useState("");
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
          state,
          businessType,
          source: "shop_act_page",
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
    { icon: ShoppingBag, label: "Retail Shop / General Store" },
    { icon: Utensils, label: "Restaurant / Cafe" },
    { icon: Scissors, label: "Salon / Spa / Wellness" },
    { icon: Building2, label: "Office / Consultancy" },
    { icon: Pill, label: "Pharmacy / Medical Store" },
    { icon: Home, label: "Grocery / Kirana Store" },
  ];

  return (
    <MainLayout>
      {/* === HERO: Bank account + legal angle === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-700 via-orange-800 to-red-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Store className="w-4 h-4 text-amber-200" />
                <span className="text-sm font-medium text-amber-100">
                  1,100+ shops licensed across India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Get Your Shop Act License in 7 Days — Open Your Business Bank Account
              </h1>

              <p className="text-lg sm:text-xl text-amber-100 mb-8 text-balance leading-relaxed">
                Banks won't open a current account without it. Municipal inspectors can seal your shop without it. We handle your Shop Act registration from document prep to certificate delivery — so you can operate legally from day one.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Bank account ready",
                  "Municipal compliant",
                  "Rent shop accepted",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-amber-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20Shop%20Act%20registration%20urgently."
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
                    Check Your Shop Act Requirement
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us your state and shop type. We'll tell you exactly what's needed, how much it costs, and how fast we can deliver.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          State
                        </label>
                        <select
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        >
                          <option value="">Select state</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="telangana">Telangana</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="delhi">Delhi</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Shop Type
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="retail">Retail Shop</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="salon">Salon / Spa</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="office">Office</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-amber-600 text-white font-bold shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My Shop Act Quote"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free requirement check. No payment required now.
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
                    We're preparing your Shop Act assessment. Expect a call within 30 minutes.
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
            <Store className="w-5 h-5 text-amber-600" />
            <span>
              <span className="font-bold text-foreground">1,100+</span> shops licensed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">7-10 Days</span> delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> bank accepted
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

      {/* === PAIN: Can't operate without it === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Opening without Shop Act is risky</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Your Shop Can't Open Legally Without This
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Municipal corporations actively inspect commercial areas. Banks require Shop Act for business accounts. Without it, you're operating in the grey zone.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹25,000",
                label: "Maximum fine for operating without Shop Act",
                icon: AlertTriangle,
              },
              {
                stat: "Rejected",
                label: "Business current account without Shop Act or GST",
                icon: XCircle,
              },
              {
                stat: "Sealed",
                label: "Shops closed by municipal inspectors for non-compliance",
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
              Every Shop & Commercial Space Needs This
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you sell goods or provide services from a commercial premises, Shop Act applies to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure if Shop Act applies to your business?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your business type and city. We'll confirm in 2 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20does%20Shop%20Act%20apply%20to%20my%20business?"
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
              Cheaper Than One Municipal Fine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One penalty notice costs more than getting properly licensed. Our prices include all municipal fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {shopActPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-amber-500 bg-gradient-to-b from-amber-50 to-white shadow-xl shadow-amber-100/50 ring-1 ring-amber-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-amber-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20Shop%20Act%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-amber-600 hover:text-amber-600"
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
                Municipal fee included in all plans. No hidden charges.
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
              We handle the municipal corporation, document verification, and inspector coordination. You focus on your shop.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Consult",
                desc: "We confirm your state's Shop Act requirements and documents needed.",
              },
              {
                icon: Shield,
                title: "Verify",
                desc: "We check your rent agreement, ID proof, and premises details.",
              },
              {
                icon: Store,
                title: "File",
                desc: "Application submitted to municipal corporation with all documents.",
              },
              {
                icon: CheckCircle,
                title: "Deliver",
                desc: "Certificate delivered. Open your bank account and start trading.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
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

      {/* === BANK ACCOUNT READY === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Open Your Business Current Account
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every major bank accepts our Shop Act certificate for current account opening. No more mixing personal and business money.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "HDFC Bank",
              "ICICI Bank",
              "SBI",
              "Axis Bank",
              "Kotak Mahindra",
              "Bank of Baroda",
              "IndusInd",
              "Union Bank",
            ].map((bank) => (
              <div
                key={bank}
                className="flex items-center justify-center gap-2 bg-white border border-slate-100 rounded-xl px-5 py-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {bank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 1,100+ Shop Owners Chose Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Municipal processes are slow and confusing. We know the right officers, the right formats, and the right follow-up.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document Perfection",
                desc: "We format your rent agreement and ID proof exactly as the municipality wants.",
              },
              {
              icon: Clock,
              title: "Speed Guarantee",
              desc: "Shop Act in 7-10 days with direct municipal follow-up.",
            },
            {
              icon: Shield,
              title: "Zero Penalty Risk",
              desc: "Fully compliant registration so you never get sealed or fined.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-left shadow-sm"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4">
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

    {/* === FAQ === */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about Shop Act registration? We've got answers.
          </p>
        </div>

        <FAQAccordion items={SHOP_ACT_FAQ} />
      </div>
    </section>

    {/* === CTA SECTION === */}
    <CTASection
        title="Don't let a payroll tax penalty surprise you"
        subtitle="Every employee you hire adds compliance responsibility. Register for Professional Tax now and stay ahead of every filing deadline."
        primaryCta={{
          text: "Apply for PT on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20register%20for%20Professional%20Tax.",
        }}
        showForm={false}
      />
  </MainLayout>
);
}