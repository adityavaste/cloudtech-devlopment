"use client";

import { useState, useEffect } from "react"; // ✨ Added useEffect
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { PricingCard } from "@/components/ui/pricing-card";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PRICING_PLANS } from "@/lib/constants";
import { LeadFormModal } from "@/components/ui/lead-form-modal"; 

const PRICING_FAQ = [
  {
    question: "Can I change my plan later?",
    answer: "Yes, absolutely. You can upgrade or downgrade your plan at any time.",
  },
  {
    question: "Do you offer custom plans?",
    answer: "Yes. For enterprise needs, contact us for a custom quote tailored to your requirements.",
  },
  {
    question: "What is included in support?",
    answer: "Each plan includes email support. Growth and Enterprise plans include priority support and phone support.",
  },
  {
    question: "Are there setup fees?",
    answer: "No setup fees. All prices are transparent with no hidden charges.",
  },
  {
    question: "What if I need help choosing a plan?",
    answer: "Contact us for a free consultation. We'll recommend the best plan based on your needs and budget.",
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // ✨ Auto-detect plan parameter from URL on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const planFromUrl = searchParams.get("plan");
      
      if (planFromUrl) {
        // Simple matching logic to make sure the casing matches your PRICING_PLANS names
        const matchedPlan = PRICING_PLANS.find(
          (p) => p.name.toLowerCase() === planFromUrl.toLowerCase()
        );
        if (matchedPlan) {
          setSelectedPlan(matchedPlan.name);
        }
      }
    }
  }, []);

  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your business. No hidden fees, no surprises. Always upgrade or downgrade when you need."
        backgroundGradient
      />

      {/* Pricing Cards */}
      <section className="bg-background py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                ctaHref={plan.ctaHref}
                onSelectPlan={() => setSelectedPlan(plan.name)}
                isRecommended={plan.isRecommended}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-7">
            All plans include SSL certificate, automatic backups, and basic
            monitoring. Enterprise plans include custom features and dedicated
            support. Prices are billed monthly.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="gradient-subtle py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 lg:mb-14">
            Detailed Comparison
          </h2>

          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="min-w-[700px] w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold">Starter</th>
                  <th className="text-center px-6 py-4 font-semibold">Growth</th>
                  <th className="text-center px-6 py-4 font-semibold">Enterprise</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    feature: "Website Pages",
                    starter: "Up to 5",
                    growth: "Up to 15",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Storage",
                    starter: "10 GB",
                    growth: "100 GB",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "SSL",
                    starter: "✓",
                    growth: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Backups",
                    starter: "Weekly",
                    growth: "Daily",
                    enterprise: "Hourly",
                  },
                  {
                    feature: "Support",
                    starter: "Email",
                    growth: "Priority",
                    enterprise: "24/7",
                  },
                  {
                    feature: "SEO",
                    starter: "—",
                    growth: "Basic",
                    enterprise: "Advanced",
                  },
                  {
                    feature: "Email Accounts",
                    starter: "5",
                    growth: "25",
                    enterprise: "Unlimited",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-muted/30 transition"
                  >
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="text-center px-6 py-4">{row.starter}</td>
                    <td className="text-center px-6 py-4">{row.growth}</td>
                    <td className="text-center px-6 py-4">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 lg:mb-14">
            Pricing Questions
          </h2>
          <FAQAccordion items={PRICING_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
  title="Ready to Launch Your Business?"
  subtitle="Get a free consultation from our team today and start your journey to success."
  primaryCta={{
    text: "Book Free Consultation",
    href: `https://wa.me/917350247244?text=${encodeURIComponent(
      "Hi! 👋 I would like to start my business journey and I'm interested in your business registration services. Please guide me through the process."
    )}`,
    external: true,
   
  }}
/>

      {/* Modal renders over the page when a plan is clicked */}
      {selectedPlan && (
        <LeadFormModal 
          planName={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </MainLayout>
  );
}