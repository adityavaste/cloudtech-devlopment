"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Briefcase,
  FileText,
  DollarSign,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  Users,
  Building2,
  Store,
  Factory,
  Clock,
  Shield,
  MapPin,
} from "lucide-react";

const PT_FAQ = [
  {
    question: "I only have 2 employees. Do I still need Professional Tax registration?",
    answer:
      "Yes, in most states Professional Tax applies from the first employee. In Maharashtra, registration is mandatory if you employ even one person. The tax amount is small (₹175-2,500/month depending on salary), but non-registration attracts penalties up to ₹50,000. We register you correctly from day one.",
  },
  {
    question: "Which states require Professional Tax?",
    answer:
      "PT is applicable in Maharashtra, Karnataka, Gujarat, Andhra Pradesh, Telangana, Tamil Nadu, Kerala, West Bengal, Bihar, Assam, and others. Each state has different rates, slabs, and filing frequencies. We handle state-specific registration and compliance so you don't need to learn 20 different rulebooks.",
  },
  {
    question: "How often do I need to file Professional Tax returns?",
    answer:
      "It varies by state. Maharashtra: monthly filing by the last day of each month. Karnataka: quarterly. Gujarat: annual for small employers. We track your state's schedule and file on time every period — you never miss a deadline.",
  },
  {
    question: "What happens if I don't register or file on time?",
    answer:
      "Penalties range from ₹5,000 to ₹50,000 per violation depending on the state. In Maharashtra, late registration attracts ₹5/day penalty, and late filing attracts 1.5% monthly interest. We ensure you're registered before your first salary payout and file every return on time.",
  },
  {
    question: "Do you handle PT for multiple states?",
    answer:
      "Yes. If your employees work across Maharashtra, Karnataka, and Gujarat, we register you in each state and handle separate filings. Our multi-state compliance package starts at ₹2,999/month for up to 50 employees across 3 states.",
  },
  {
    question: "Can you integrate with our payroll system?",
    answer:
      "Yes. We work with Zoho Payroll, RazorpayX Payroll, GreytHR, and manual Excel sheets. We calculate PT deductions automatically and file returns directly from your payroll data. No double data entry.",
  },
];

const ptPlans = [
  {
    name: "Registration Only",
    price: "₹1,999",
    period: "one-time",
    description: "For new employers setting up PT",
    features: [
      "State-specific registration",
      "Registration certificate",
      "PT deduction setup",
      "Salary slab configuration",
      "Filing calendar setup",
      "3-day delivery",
    ],
    cta: "Register Now",
    href: "#order",
    popular: false,
  },
  {
    name: "Registration + Quarterly Filing",
    price: "₹4,999",
    period: "first year",
    description: "Registration + 4 quarterly returns",
    features: [
      "Everything in Registration",
      "Quarterly PT returns",
      "Payment reminders",
      "Employee addition/removal",
      "Penalty protection",
      "WhatsApp support",
      "Annual compliance report",
    ],
    cta: "Most Popular",
    href: "#order",
    popular: true,
  },
  {
    name: "Monthly Compliance",
    price: "₹999",
    period: "/month",
    description: "For growing teams (5+ employees)",
    features: [
      "Monthly PT calculation",
      "Monthly/quarterly filing",
      "Employee onboarding PT setup",
      "Salary revision updates",
      "Multi-state support",
      "Dedicated accountant",
      "Audit-ready records",
    ],
    cta: "Start Compliance",
    href: "#order",
    popular: false,
  },
];

export default function ProfessionalTaxPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [employees, setEmployees] = useState("");
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
          state,
          employees,
          source: "professional_tax_page",
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
    { icon: Building2, label: "Private Limited Company" },
    { icon: Store, label: "Retail Shop / Trading" },
    { icon: Factory, label: "Manufacturing Unit" },
    { icon: Briefcase, label: "Consulting Firm" },
    { icon: Users, label: "Restaurant / Hotel" },
    { icon: MapPin, label: "Multi-State Business" },
  ];

  const stateRates = [
    { state: "Maharashtra", rate: "₹175–2,500/yr", filing: "Monthly" },
    { state: "Karnataka", rate: "₹200–2,400/yr", filing: "Monthly" },
    { state: "Gujarat", rate: "₹80–2,500/yr", filing: "Monthly" },
    { state: "Telangana", rate: "₹150–2,500/yr", filing: "Monthly" },
    { state: "Tamil Nadu", rate: "₹100–2,500/yr", filing: "Half-Yearly" },
    { state: "West Bengal", rate: "₹90–2,500/yr", filing: "Monthly" },
  ];

  return (
    <MainLayout>
      {/* === HERO: Penalty avoidance angle === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Shield className="w-4 h-4 text-teal-200" />
                <span className="text-sm font-medium text-teal-100">
                  500+ employers compliant across 12 states
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Avoid ₹50,000 Penalty — Register for Professional Tax Before Your Next Payroll
              </h1>

              <p className="text-lg sm:text-xl text-teal-100 mb-8 text-balance leading-relaxed">
                Hiring employees in Maharashtra, Karnataka, or Gujarat? Professional Tax registration is mandatory from day one. We register you, set up deductions, and file returns — so you never face a penalty notice.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "12 states covered",
                  "Penalty protection",
                  "Payroll integration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-teal-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20Professional%20Tax%20registration%20urgently."
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
                    Check Your PT Requirement
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us your state and team size. We'll tell you if PT applies, what it costs, and how fast we can register you.
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select state</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="telangana">Telangana</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="west-bengal">West Bengal</option>
                          <option value="andhra-pradesh">Andhra Pradesh</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Number of Employees
                        </label>
                        <select
                          value={employees}
                          onChange={(e) => setEmployees(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select</option>
                          <option value="1-5">1–5 employees</option>
                          <option value="6-20">6–20 employees</option>
                          <option value="21-50">21–50 employees</option>
                          <option value="50+">50+ employees</option>
                          <option value="planning">Planning to hire</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-teal-600 text-white font-bold shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My PT Quote"}
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
                    We're preparing your PT assessment. Expect a call within 30 minutes.
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
            <Users className="w-5 h-5 text-teal-600" />
            <span>
              <span className="font-bold text-foreground">500+</span> employers
              compliant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span>
              <span className="font-bold text-foreground">12</span> states
              covered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">₹0</span> penalties
              for our clients
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

      {/* === PAIN: Penalty for non-compliance === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Non-compliance is expensive</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            One Missed Filing Costs More Than a Year of Compliance
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional Tax seems small — until you get the penalty notice. State governments actively audit employers, and the fines add up fast.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹50,000",
                label: "Maximum penalty for non-registration (Maharashtra)",
                icon: AlertTriangle,
              },
              {
                stat: "₹5/day",
                label: "Late registration penalty that accumulates daily",
                icon: Clock,
              },
              {
                stat: "1.5%/mo",
                label: "Interest on late PT payments",
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
              Who Needs Professional Tax Compliance?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Any employer with staff in a PT-applicable state must register and file. No minimum employee count.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <biz.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-foreground">
                  {biz.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-teal-50 rounded-2xl border border-teal-100">
            <p className="text-foreground font-semibold mb-2">
              Not sure if PT applies to your state?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your state and we'll confirm requirements in 2 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20does%20Professional%20Tax%20apply%20in%20my%20state?"
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

      {/* === STATE RATES TABLE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Professional Tax Rates by State
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rates and filing frequency vary by state. We handle the complexity so you don't have to.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    State
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Annual Rate
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Filing
                  </th>
                </tr>
              </thead>
              <tbody>
                {stateRates.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">
                      {row.state}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.rate}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                        {row.filing}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see your state?{" "}
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20what%20is%20the%20Professional%20Tax%20rate%20in%20my%20state?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold hover:underline"
            >
              Message us
            </a>{" "}
            for your state's rates.
          </p>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Cheaper Than One Penalty Notice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One late filing penalty costs more than a year of our compliance service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ptPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-teal-500 bg-gradient-to-b from-teal-50 to-white shadow-xl shadow-teal-100/50 ring-1 ring-teal-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-teal-200 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
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
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20Professional%20Tax%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg"
                      : "border-2 border-slate-200 text-foreground hover:border-teal-600 hover:text-teal-600"
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
                Multi-state business?{" "}
                <a
                  href="https://wa.me/917350247244?text=Hello%2C%20I%20have%20employees%20in%20multiple%20states.%20Help%20with%20PT?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Message us
                </a>{" "}
                for custom pricing.
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
              Compliance in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle registration, calculation, filing, and record-keeping. You focus on your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Register",
                desc: "State-specific PT registration with the labour department.",
              },
              {
                icon: Users,
                title: "Setup",
                desc: "Configure salary slabs and deduction rules in your payroll.",
              },
              {
                icon: Clock,
                title: "File",
                desc: "Monthly/quarterly returns filed on time, every time.",
              },
              {
                icon: Shield,
                title: "Protect",
                desc: "Audit-ready records and penalty protection guarantee.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">
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

      {/* === PAYROLL INTEGRATION === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Works With Your Payroll System
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            No manual calculations. No double data entry. We integrate with your existing payroll.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Zoho Payroll",
              "RazorpayX",
              "GreytHR",
              "Keka",
              "Excel Sheets",
              "Tally",
              "QuickBooks",
              "Custom Software",
            ].map((system) => (
              <div
                key={system}
                className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {system}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 500+ Employers Trust Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Payroll compliance is boring until it's expensive. We make sure it never becomes expensive.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "State Expertise",
                desc: "We know Maharashtra's monthly rules and Karnataka's quarterly rules. No guesswork.",
              },
              {
                icon: Clock,
                title: "Never Miss a Deadline",
                desc: "Automated filing calendar. Returns submitted before the due date. Every time.",
              },
              {
                icon: Shield,
                title: "Penalty Protection",
                desc: "If you get a PT penalty while on our plan, we pay it. That's our guarantee.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

          <FAQAccordion items={PT_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to get compliant?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Register now and file your first return before the next deadline.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20register%20for%20Professional%20Tax."
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