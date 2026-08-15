"use client";

import { useState, FormEvent } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Building2,
  TrendingUp,
  DollarSign,
  Shield,
  Zap,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  Users,
  Landmark,
  Factory,
  Store,
  Briefcase,
  Plane,
  Sprout,
  GraduationCap,
  Truck,
  Laptop,
  FileText,
  Clock,
  Award,
} from "lucide-react";

const UDYAM_FAQ = [
  {
    question: "Is Udyam registration mandatory?",
    answer:
      "Udyam registration is not legally mandatory but practically essential. Without it, you cannot apply for government tenders, claim MSME subsidies, or access collateral-free MUDRA loans. Your competitors with Udyam registration win tenders and pay 1-2% less interest on bank loans.",
  },
  {
    question: "Who qualifies as an MSME?",
    answer:
      "MSMEs are classified by investment in plant/machinery and annual turnover. Micro: up to ₹1 crore investment / ₹5 crore turnover. Small: up to ₹10 crore investment / ₹50 crore turnover. Medium: up to ₹50 crore investment / ₹250 crore turnover. We assess your business and classify you correctly.",
  },
  {
    question: "How long does Udyam registration take?",
    answer:
      "Udyam registration itself is instant once submitted on the government portal. However, document preparation, business classification, and correct Aadhaar-PAN linking take expertise. We complete the entire process in 1-2 days and deliver your certificate with a compliance checklist.",
  },
  {
    question: "Can I update my Udyam registration later?",
    answer:
      "Yes. As your business grows, you can upgrade from Micro to Small to Medium. You can also update turnover, investment, and business details. We handle reclassification and updates at no extra charge for existing clients.",
  },
  {
    question: "What documents are needed for Udyam?",
    answer:
      "Only your Aadhaar number, PAN card, and business bank account details. The process is 100% online. No physical documents required. We handle the portal submission, OTP verification, and certificate download.",
  },
  {
    question: "Do I need Udyam for a service business?",
    answer:
      "Yes. Udyam applies to manufacturing, trading, and service businesses. IT consultancies, restaurants, logistics firms, and salons all qualify. The turnover and investment limits are the same across sectors.",
  },
  {
    question: "What happens if my Udyam details are wrong?",
    answer:
      "Incorrect classification or turnover reporting can lead to tender disqualification and subsidy rejection. We verify your financials before submission to ensure 100% accuracy and government compliance.",
  },
];

const udyamPlans = [
  {
    name: "Udyam Only",
    price: "₹999",
    period: "one-time",
    description: "For new businesses & startups",
    features: [
      "Udyam portal registration",
      "MSME classification",
      "Certificate download",
      "Aadhaar-PAN linking",
      "1-2 day delivery",
      "Free consultation",
    ],
    cta: "Register Now",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20register%20for%20Udyam",
    popular: false,
  },
  {
    name: "Udyam + GST",
    price: "₹2,999",
    period: "one-time",
    description: "Complete business registration",
    features: [
      "Everything in Udyam Only",
      "GST Registration",
      "MSME + GST certificate",
      "Bank loan guidance",
      "MUDRA loan application help",
      "Priority support",
    ],
    cta: "Most Popular",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20Udyam%20%2B%20GST%20registration",
    popular: true,
  },
  {
    name: "Growth Pack",
    price: "₹4,999",
    period: "one-time",
    description: "Udyam + GST + Tender eligibility",
    features: [
      "Udyam + GST Registration",
      "Government tender guidance",
      "PMEGP / CGTMSE application",
      "Subsidy claim assistance",
      "Complete compliance setup",
      "Dedicated manager",
    ],
    cta: "Scale My Business",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20the%20Udyam%20Growth%20Pack",
    popular: false,
  },
];

export default function UdyamPage() {
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
          phoneNumber: phone,
          businessType,
          turnover,
          source: "udyam_registration_page",
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
    { icon: Factory, label: "Manufacturing Unit" },
    { icon: Store, label: "Trading / Retail" },
    { icon: Briefcase, label: "IT / Consultancy" },
    { icon: Truck, label: "Logistics / Transport" },
    { icon: Plane, label: "Export Business" },
    { icon: Laptop, label: "E-commerce / D2C" },
    { icon: Sprout, label: "Agriculture / Food" },
    { icon: GraduationCap, label: "Training / Education" },
  ];

  const msmeClassification = [
    { category: "Micro Enterprise", investment: "Up to ₹1 crore", turnover: "Up to ₹5 crore" },
    { category: "Small Enterprise", investment: "Up to ₹10 crore", turnover: "Up to ₹50 crore" },
    { category: "Medium Enterprise", investment: "Up to ₹50 crore", turnover: "Up to ₹250 crore" },
  ];

  return (
    <MainLayout>
      {/* === HERO === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-emerald-800 via-green-900 to-teal-950">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Award className="w-4 h-4 text-emerald-200" />
                <span className="text-sm font-medium text-emerald-100">
                  3,000+ businesses registered across India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Stop Losing Tenders — Get{" "}
                <span className="text-emerald-400">Udyam Registration</span> in
                2 Days
              </h1>

              <p className="text-lg sm:text-xl text-emerald-100 mb-8 text-balance leading-relaxed">
                Government tenders reject you without it. Banks charge 1-2% extra
                interest without it. Subsidies up to 50% remain locked without
                it. We register your business as MSME and unlock every benefit
                you're entitled to.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Govt tender eligible",
                  "Bank loan priority",
                  "Subsidy access",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-emerald-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20Udyam%20registration%20urgently."
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
                    Check Your MSME Eligibility
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us your business type and turnover. We'll tell you your
                    MSME classification, benefits available, and how fast we can
                    register you.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="trading">Trading / Retail</option>
                          <option value="services">Services / IT</option>
                          <option value="food">Food / Restaurant</option>
                          <option value="export">Export Business</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                     
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My Udyam Quote"}
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
                    We're preparing your MSME assessment. Expect a call within
                    30 minutes.
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
            <Users className="w-5 h-5 text-emerald-600" />
            <span>
              <span className="font-bold text-foreground">3,000+</span> businesses
              registered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-500" />
            <span>
              <span className="font-bold text-foreground">1-2 Days</span> delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> govt portal
              verified
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

      {/* === PAIN: Without Udyam === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <span>Without Udyam, you're leaving money on the table</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Your Competitors Are Winning Tenders You Cannot Even Apply For
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Government tenders, bank loans, and subsidy schemes are reserved for
            Udyam-registered MSMEs. Without registration, you are competing with
            one hand tied behind your back.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹50L+",
                label: "Average government tender value lost without Udyam",
                icon: XCircle,
              },
              {
                stat: "1-2%",
                label: "Extra interest banks charge non-MSME businesses",
                icon: DollarSign,
              },
              {
                stat: "50%",
                label: "Subsidy on technology upgrade — only for Udyam holders",
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
              Every Growing Business Needs Udyam Registration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manufacturing, trading, services, or exports — if you have a
              business in India, Udyam opens doors that stay closed otherwise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure if your business qualifies?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your turnover and investment. We'll confirm your MSME
              category in 2 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20does%20my%20business%20qualify%20for%20Udyam%20registration?"
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

      {/* === MSME CLASSIFICATION TABLE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              MSME Classification Criteria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your classification depends on investment in plant & machinery and
              annual turnover. We assess and register you in the correct
              category.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Category
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Investment Limit
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Turnover Limit
                  </th>
                </tr>
              </thead>
              <tbody>
                {msmeClassification.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">
                      {row.category}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.investment}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                        {row.turnover}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Not sure where you fit?{" "}
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20what%20is%20my%20MSME%20classification?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Message us
            </a>{" "}
            for a free assessment.
          </p>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Cheaper Than One Lost Tender
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One government tender is worth lakhs. One bank loan saving is worth
              thousands. Udyam registration pays for itself immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {udyamPlans.map((plan, i) => (
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
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Government portal fee included. No hidden charges.
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
              From Application to Certificate in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the government portal, document verification, and
              classification. You focus on growing your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Consult",
                desc: "We assess your business and confirm the correct MSME classification.",
              },
              {
                icon: Shield,
                title: "Verify",
                desc: "We verify your Aadhaar, PAN, and business details for portal accuracy.",
              },
              {
                icon: Zap,
                title: "Register",
                desc: "Application submitted on the Udyam portal with OTP verification.",
              },
              {
                icon: CheckCircle,
                title: "Benefit",
                desc: "Certificate delivered. Start applying for tenders, loans, and subsidies.",
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

      {/* === UNLOCK BENEFITS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Unlock Government Schemes & Bank Privileges
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Udyam registration is the key that opens every government door. Here
            is what becomes available to you instantly.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "PMEGP Loan",
              "CGTMSE",
              "MUDRA Loan",
              "CLCSS Subsidy",
              "Govt Tenders",
              "Stand-Up India",
              "Export Benefits",
              "Tax Exemptions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 3,000+ Business Owners Chose CloudTech
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Government portals are confusing. One wrong classification and you
            miss out on Medium Enterprise benefits. We get it right the first
            time.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Accurate Classification",
                desc: "We classify you correctly so you access the maximum benefits available.",
              },
              {
                icon: Clock,
                title: "Same-Day Filing",
                desc: "Udyam portal submission within 24 hours of document verification.",
              },
              {
                icon: Shield,
                title: "Tender-Ready Certificate",
                desc: "Your certificate is formatted and verified for immediate government use.",
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before registering.
            </p>
          </div>

          <FAQAccordion items={UDYAM_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to unlock MSME benefits?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Register now and start applying for tenders and loans this week.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20register%20for%20Udyam."
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
        title="Register as MSME Before Your Next Tender Deadline"
        subtitle="Every day without Udyam is a day of lost subsidies, higher interest, and closed government doors. Register now."
        primaryCta={{
          text: "Apply for Udyam on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20register%20for%20Udyam.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}