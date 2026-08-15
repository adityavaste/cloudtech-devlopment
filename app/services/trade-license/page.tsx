"use client";

import { useState, FormEvent } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  Building,
  FileText,
  Clock,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  XCircle,
  Users,
  Shield,
  Landmark,
  Store,
  Utensils,
  Scissors,
  Building2,
  Pill,
  Home,
  Briefcase,
  Factory,
  Hotel,
  PartyPopper,
  Fuel,
  GraduationCap,
} from "lucide-react";

const TRADE_LICENSE_FAQ = [
  {
    question: "What is a Trade License?",
    answer:
      "A Trade License is a municipal permit that authorizes a business to legally operate in a specific location. It is issued by the Municipal Corporation for shops, establishments, and businesses within their jurisdiction. Without it, your business can be sealed and fined.",
  },
  {
    question: "Who needs a Trade License?",
    answer:
      "Any business engaged in trade or commercial activities including retail shops, restaurants, offices, warehouses, manufacturing units, hotels, medical clinics, petrol pumps, and entertainment centers require a Trade License from their local municipal corporation.",
  },
  {
    question: "How long does Trade License registration take?",
    answer:
      "Typically 2-4 weeks from document submission to certificate delivery. In metro cities, we have direct municipal relationships that help expedite processing. We handle all follow-ups and inspector coordination so you don't have to visit the office repeatedly.",
  },
  {
    question: "Can I get a Trade License on rented property?",
    answer:
      "Yes. A registered rent agreement or NOC from the property owner is sufficient. You do not need to own the premises. We help you prepare the correct rent agreement format accepted by your municipal corporation.",
  },
  {
    question: "What happens if I operate without a Trade License?",
    answer:
      "Municipal inspectors can seal your business immediately, impose fines ranging from ₹5,000 to ₹50,000 depending on your city and business type, and issue legal notices. You also cannot apply for government tenders or business loans without a valid Trade License.",
  },
  {
    question: "Is Trade License different from Shop Act?",
    answer:
      "Yes. Trade License is a municipal permit to conduct business at a specific location. Shop Act (Shops & Establishment Act) is a state-level registration governing working hours and employee conditions. Many businesses need both. We assess your location and tell you exactly what's required.",
  },
  {
    question: "Does Trade License need annual renewal?",
    answer:
      "Yes, most municipal corporations require annual renewal. Missing renewal can result in penalties and business closure. We provide automatic renewal reminders 60 days before expiry and handle the entire renewal process for you.",
  },
];

const tradeLicensePlans = [
  {
    name: "Trade License Only",
    price: "₹1,999",
    period: "one-time",
    description: "For shops, offices & restaurants",
    features: [
      "Municipal Trade License registration",
      "Document preparation & verification",
      "Municipal corporation filing",
      "Inspector coordination",
      "2-4 week delivery",
      "Annual renewal reminders",
      "Free consultation",
    ],
    cta: "Get Started",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20Trade%20License",
    popular: false,
  },
  {
    name: "Trade License + Shop Act",
    price: "₹3,999",
    period: "one-time",
    description: "Complete municipal & state compliance",
    features: [
      "Everything in Trade License Only",
      "Shops & Establishment Act registration",
      "State + Municipal filing",
      "Premises verification support",
      "Signage/board permission",
      "2-4 week delivery",
      "Priority support",
    ],
    cta: "Most Popular",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20Trade%20License%20%2B%20Shop%20Act",
    popular: true,
  },
  {
    name: "Business License Pack",
    price: "₹6,999",
    period: "one-time",
    description: "Trade License + Shop Act + GST + Fire NOC",
    features: [
      "Trade License + Shop Act",
      "GST Registration",
      "Fire NOC guidance",
      "Signage permission",
      "Complete compliance setup",
      "21-day delivery guarantee",
      "Dedicated relationship manager",
    ],
    cta: "Full Compliance",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20the%20Business%20License%20Pack",
    popular: false,
  },
];

export default function TradeLicensePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
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
          phoneNumber: phone,
          city,
          businessType,
          source: "trade_license_page",
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
    { icon: Store, label: "Retail Shop / General Store" },
    { icon: Utensils, label: "Restaurant / Cafe / Bakery" },
    { icon: Building2, label: "Commercial Office" },
    { icon: Briefcase, label: "Warehouse / Godown" },
    { icon: Factory, label: "Manufacturing Unit" },
    { icon: Pill, label: "Medical Clinic / Pharmacy" },
    { icon: Hotel, label: "Hotel / Lodge / Guest House" },
    { icon: PartyPopper, label: "Entertainment / Event Hall" },
    { icon: Fuel, label: "Petrol Pump / Fuel Station" },
    { icon: GraduationCap, label: "Educational Institute" },
    { icon: Scissors, label: "Salon / Spa / Wellness" },
    { icon: Home, label: "Real Estate / Construction" },
  ];

  const cityRequirements = [
    { city: "Mumbai", time: "15-20 days", validity: "Annual renewal" },
    { city: "Delhi", time: "20-30 days", validity: "Annual renewal" },
    { city: "Bangalore", time: "15-25 days", validity: "Annual renewal" },
    { city: "Hyderabad", time: "10-15 days", validity: "Annual renewal" },
    { city: "Chennai", time: "20-30 days", validity: "Annual renewal" },
    { city: "Pune", time: "15-20 days", validity: "Annual renewal" },
  ];

  return (
    <MainLayout>
      {/* === HERO === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
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
                <Building className="w-4 h-4 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">
                  2,400+ businesses licensed across India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Avoid ₹50,000 Fine — Get Your{" "}
                <span className="text-blue-400">Trade License</span> Before the
                Next Inspection
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 mb-8 text-balance leading-relaxed">
                Banks won't approve business loans without it. Government tenders
                reject you without it. Municipal inspectors can seal your shop
                without warning. We handle your Trade License from document prep
                to certificate delivery.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Municipal compliant",
                  "Tender eligible",
                  "Loan ready",
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
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20Trade%20License%20registration%20urgently."
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
                    Check Your Trade License Requirement
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us your city and business type. We'll tell you exactly
                    what's needed, how much it costs, and how fast we can
                    deliver.
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
                          <option value="retail">Retail Shop</option>
                          <option value="restaurant">Restaurant / Cafe</option>
                          <option value="office">Commercial Office</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="hotel">Hotel / Lodge</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Checking..." : "Get My Trade License Quote"}
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
                    We're preparing your Trade License assessment. Expect a call
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
            <Building className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">2,400+</span> businesses
              licensed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>
              <span className="font-bold text-foreground">2-4 Weeks</span> delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> municipal
              approved
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

      {/* === PAIN: Penalty for non-compliance === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Operating without Trade License is risky</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            The Municipality Can Seal Your Business Without Warning
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Municipal corporations actively inspect commercial areas. Banks and
            government bodies require a valid Trade License. Without it, you're
            one inspection away from shutdown.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "₹50,000+",
                label: "Maximum municipal fine for operating without Trade License",
                icon: AlertTriangle,
              },
              {
                stat: "Sealed",
                label: "Businesses closed by municipal inspectors for non-compliance",
                icon: XCircle,
              },
              {
                stat: "Rejected",
                label: "Bank loans & government tenders without valid Trade License",
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
              Every Commercial Business Needs a Trade License
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you operate from a commercial premises and engage in trade,
              manufacturing, or services, your municipal corporation requires a
              Trade License.
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
              Not sure if Trade License applies to your business?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Message us your business type and city. We'll confirm requirements
              in 2 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20does%20Trade%20License%20apply%20to%20my%20business?"
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

      {/* === CITY REQUIREMENTS TABLE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Trade License Processing by City
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processing time and requirements vary by municipal corporation. We
              handle the complexity so you don't have to.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    City
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Processing Time
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Validity
                  </th>
                </tr>
              </thead>
              <tbody>
                {cityRequirements.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">
                      {row.city}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.time}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {row.validity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see your city?{" "}
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20what%20is%20the%20Trade%20License%20process%20in%20my%20city?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Message us
            </a>{" "}
            for your city's requirements.
          </p>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Cheaper Than One Municipal Penalty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One sealing notice or fine costs more than getting properly
              licensed. Our prices include all municipal fees and inspector
              coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tradeLicensePlans.map((plan, i) => (
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
                  href={plan.href}
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
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Municipal fee included in all plans. No hidden charges.
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
              From Application to License in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the municipal corporation, document verification, and
              inspector coordination. You focus on running your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Consult",
                desc: "We confirm your municipal requirements and documents needed for your city.",
              },
              {
                icon: Shield,
                title: "Verify",
                desc: "We check your property papers, ownership proof, and business details.",
              },
              {
                icon: Building,
                title: "File",
                desc: "Application submitted to municipal corporation with all documents and fees.",
              },
              {
                icon: CheckCircle,
                title: "Deliver",
                desc: "License certificate delivered. Operate legally and apply for tenders & loans.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
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

      {/* === BANK & TENDER ELIGIBILITY === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Unlock Government Tenders & Business Loans
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every major bank and government department requires a valid Trade
            License. Stop losing opportunities because of missing paperwork.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Bank Loans",
              "Govt Tenders",
              "MSME Subsidy",
              "GST Registration",
              "Fire NOC",
              "Signage Permit",
              "Property Tax",
              "Insurance",
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why 2,400+ Business Owners Trust CloudTech
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Municipal processes are slow, opaque, and frustrating. We know the
            right officers, the right formats, and the right follow-up strategy
            for every major city in India.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document Perfection",
                desc: "We format your property papers and business proof exactly as the municipality wants.",
              },
              {
                icon: Clock,
                title: "Speed Guarantee",
                desc: "Trade License in 2-4 weeks with direct municipal follow-up and status tracking.",
              },
              {
                icon: Shield,
                title: "Zero Closure Risk",
                desc: "Fully compliant registration so your business never gets sealed or fined.",
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

          <FAQAccordion items={TRADE_LICENSE_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to get licensed?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Apply now and get your Trade License before the next municipal
              inspection.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20apply%20for%20Trade%20License."
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
        title="Get Your Trade License Before the Next Inspection"
        subtitle="Don't wait for a municipal notice. Apply for Trade License now and operate with full legal protection."
        primaryCta={{
          text: "Apply for Trade License on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20to%20apply%20for%20Trade%20License.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}