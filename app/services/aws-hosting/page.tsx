"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  Cloud,
  Zap,
  Shield,
  TrendingUp,
  Lock,
  BarChart3,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
  Phone,
  Server,
  Globe,
  Clock,
  XCircle,
  Star,
  Users,
  Rocket,
} from "lucide-react";

const AWS_FAQ = [
  {
    question: "My current host is slow. Will AWS actually fix that?",
    answer:
      "Yes. We see 40-70% speed improvements on average. AWS CloudFront CDN serves your site from the nearest data center to each visitor. That means a customer in Mumbai gets served from Mumbai, not a server in the US. Plus auto-scaling means your site never slows down during traffic spikes.",
  },
  {
    question: "How much does managed AWS hosting cost?",
    answer:
      "Our managed hosting plans start at ₹2,999/month for small business sites. That includes the AWS infrastructure cost, our management fee, SSL, backups, CDN, and 24/7 monitoring. No surprise overages. Enterprise sites with high traffic typically run ₹7,999-15,999/month.",
  },
  {
    question: "Will my website go down during migration?",
    answer:
      "Zero downtime. We use a staged migration process: clone your site to AWS, test everything, update DNS with a tiny TTL, and switch over. Most migrations happen in under 2 hours with zero visible interruption to visitors.",
  },
  {
    question: "Do I need to learn AWS to use this?",
    answer:
      "Absolutely not. That's the whole point of managed hosting. You get a simple dashboard for basic tasks (like adding email accounts). For anything technical — scaling, security patches, backups, monitoring — we handle it. You focus on your business.",
  },
  {
    question: "What if I outgrow my plan?",
    answer:
      "We scale you up automatically. If your traffic doubles overnight, AWS handles it without us even touching your server. If you need a bigger architecture, we upgrade you in minutes, not days. No migration fees for plan upgrades.",
  },
  {
    question: "How is this different from shared hosting like Hostinger/GoDaddy?",
    answer:
      "Shared hosting puts your site on a server with 500+ other websites. If one gets a traffic spike or is hacked, yours slows down or goes offline. AWS gives you dedicated resources, enterprise security, and 99.99% uptime. It's the difference between a shared apartment and your own house.",
  },
];

const hostingPlans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    description: "For small business websites & portfolios",
    features: [
      "Up to 10,000 monthly visitors",
      "1 website",
      "AWS CloudFront CDN",
      "Free SSL certificate",
      "Daily automated backups",
      "99.9% uptime SLA",
      "Email support",
    ],
    cta: "Get Started",
    href: "#audit",
    popular: false,
  },
  {
    name: "Business",
    price: "₹7,999",
    period: "/month",
    description: "For growing businesses with real traffic",
    features: [
      "Up to 100,000 monthly visitors",
      "3 websites",
      "AWS CloudFront + Edge caching",
      "Free SSL + WAF security",
      "Hourly backups + 30-day retention",
      "99.99% uptime SLA",
      "Priority WhatsApp support",
      "Monthly performance report",
    ],
    cta: "Most Popular",
    href: "#audit",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹15,999",
    period: "/month",
    description: "For high-traffic e-commerce & SaaS",
    features: [
      "Unlimited monthly visitors",
      "Unlimited websites",
      "Global CDN + Load balancing",
      "Enterprise security + DDoS protection",
      "Real-time backups + 90-day retention",
      "99.99% uptime SLA with credits",
      "Dedicated account manager",
      "24/7 phone + WhatsApp support",
    ],
    cta: "Talk to Sales",
    href: "https://wa.me/917350247244?text=Hello%2C%20I'm%20interested%20in%20Enterprise%20AWS%20hosting.",
    popular: false,
  },
];

export default function AWSHostingPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
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
          url,
          source: "aws_hosting_page",
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
      {/* === HERO: Speed audit lead magnet === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[150px] opacity-15 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-blue-100">
                  Average 40-70% speed improvement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Is Your Slow Website Costing You Customers?
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 text-balance leading-relaxed">
                Every 1-second delay in load time drops conversions by 7%. We
                migrate your site to AWS and optimize it for speed, security,
                and scale — so you stop losing revenue to a slow server.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Free speed audit",
                  "Zero-downtime migration",
                  "99.99% uptime guarantee",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20a%20free%20website%20speed%20audit."
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
                    Free Website Speed Audit
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Enter your website URL and email. We'll analyze your current
                    hosting and send you a report with exact speed issues +
                    AWS migration quote.
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
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
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Audit request received!
                  </h3>
                  <p className="text-muted-foreground">
                    We're analyzing {url} now. Check your inbox in 24 hours.
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
            <Server className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">500+</span> sites
              migrated
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span>
              <span className="font-bold text-foreground">40-70%</span> speed
              boost
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">99.99%</span> uptime
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">24/7</span> monitoring
            </span>
          </div>
        </div>
      </section>

      {/* === PAIN: Slow hosting = lost money === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Slow sites lose customers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Your Cheap Hosting Is Quietly Killing Your Revenue
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Shared hosting puts your website on a server with 500+ other sites.
            When one gets traffic, yours slows down. When one gets hacked,
            you're at risk. Here's what that actually costs you:
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                stat: "7%",
                label: "Conversion drop per 1-second delay",
                source: "Google Research",
              },
              {
                stat: "53%",
                label: "Visitors abandon if load takes >3 seconds",
                source: "Akamai Study",
              },
              {
                stat: "₹50,000+",
                label: "Average annual revenue loss from downtime",
                source: "SMB India Survey",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
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

      {/* === COMPARISON TABLE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Shared Hosting vs. Managed AWS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See why businesses are leaving cheap shared hosting for AWS.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-red-600 uppercase tracking-wider text-center">
                    Cheap Shared Hosting
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-blue-600 uppercase tracking-wider text-center bg-blue-50/50">
                    Our Managed AWS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Websites per server", shared: "500+", aws: "Yours only" },
                  { feature: "Uptime guarantee", shared: "99% (3.6h downtime/mo)", aws: "99.99% (<4 min/mo)" },
                  { feature: "Traffic spikes", shared: "Site crashes", aws: "Auto-scales instantly" },
                  { feature: "Security", shared: "Basic firewall", aws: "WAF + DDoS + encryption" },
                  { feature: "Backups", shared: "Weekly (if lucky)", aws: "Daily + 30-90 day retention" },
                  { feature: "Support", shared: "Ticket system (24-48h)", aws: "WhatsApp + phone (10 min)" },
                  { feature: "Migration help", shared: "DIY or paid extra", aws: "Free, zero downtime" },
                  { feature: "SSL certificate", shared: "Basic shared SSL", aws: "Dedicated + auto-renew" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        {row.shared}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-foreground font-medium bg-blue-50/30">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        {row.aws}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20migrate%20my%20site%20to%20AWS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Migrate My Site to AWS
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Free migration. Zero downtime. Start today.
            </p>
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Simple, Predictable Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No surprise overages. No hidden AWS fees. One flat monthly price
              covers everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, i) => (
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
              <Shield className="w-4 h-4 text-green-600" />
              <span>
                Not sure which plan?{" "}
                <a
                  href="https://wa.me/917350247244?text=Hello%2C%20help%20me%20choose%20the%20right%20AWS%20hosting%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Message us
                </a>{" "}
                — we'll recommend the right one in 10 minutes.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW MIGRATION WORKS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Migration in 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zero downtime. Zero data loss. We handle everything while you
              sleep.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Audit",
                desc: "We analyze your current site, database, and traffic patterns.",
              },
              {
                icon: Rocket,
                title: "Clone",
                desc: "Build an identical copy on AWS in a staging environment.",
              },
              {
                icon: Shield,
                title: "Test",
                desc: "Run performance and security tests. You approve before go-live.",
              },
              {
                icon: Zap,
                title: "Switch",
                desc: "Update DNS. Traffic routes to AWS. Old host deactivated.",
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

          <div className="mt-16 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-foreground font-semibold mb-2">
              Typical migration time: 2-4 hours
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Most migrations happen during off-peak hours so your customers
              never notice.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20schedule%20a%20migration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            >
              Schedule Free Migration
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* === TRUST / GUARANTEE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Our Uptime Guarantee
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            If your site experiences downtime due to our infrastructure, we
            credit you 10x the downtime cost. In 3 years of managed hosting,
            we've had zero unplanned outages on our Business and Enterprise
            plans.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global CDN",
                desc: "Content served from 400+ edge locations worldwide.",
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                desc: "WAF, DDoS protection, encryption, and daily malware scans.",
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                desc: "Our team gets alerted before you even notice an issue.",
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
              Everything you need to know before migrating.
            </p>
          </div>

          <FAQAccordion items={AWS_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-foreground font-semibold mb-2">
              Still have questions?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Our technical team replies on WhatsApp in under 10 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20have%20a%20question%20about%20AWS%20hosting."
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
        title="Stop losing customers to a slow website"
        subtitle="Every day on cheap hosting is a day of lost revenue. Get your free speed audit and migration quote in the next 24 hours."
        primaryCta={{
          text: "Get Free Speed Audit",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20a%20free%20website%20speed%20audit.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}