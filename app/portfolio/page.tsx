"use client";
import Image from "next/image";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { BarChart3 } from "lucide-react";

export default function PortfolioPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Our Portfolio"
        subtitle="Explore some of the successful projects we've completed for businesses like yours."
        backgroundGradient
      />

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-smooth hover:shadow-lg"
              >
                <div className="relative h-100 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-primary font-semibold text-sm">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Projects */}
          <div className="bg-card border border-border rounded-lg p-12 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We have many more successful projects. Contact us to discuss how
              we can create something similar for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-blue-700 transition-smooth font-semibold"
            >
              View More / Contact
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Success Stories?"
        subtitle="Let's create something amazing for your business."
        primaryCta={{ text: "Start Your Project", href: "/contact" }}
      />
    </MainLayout>
  );
}
