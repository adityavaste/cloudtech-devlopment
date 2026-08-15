"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundGradient?: boolean;
}

export function Hero({
  title = "Get a High-Converting Website in 14 Days—Without the $50K Price Tag",
  subtitle = "We build, host, and maintain conversion-focused websites for service businesses. Flat monthly fee. No hidden costs. No technical headaches.",
  primaryCta = { text: "Get Your Free Website Audit", href: "#audit" },
  secondaryCta = { text: "See Recent Work", href: "#portfolio" },
  backgroundGradient = true,
}: HeroProps) {
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
        body: JSON.stringify({ email, source: "hero_section", page: window.location.pathname }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustBadges = [
    { icon: Zap, text: "14-Day Delivery" },
    { icon: Shield, text: "99.9% Uptime" },
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <section
      className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        backgroundGradient ? "bg-gradient-to-b from-blue-50 via-white to-white" : "bg-background"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-10 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-center">
            <span className="font-semibold text-foreground">2+ businesses</span> launched this quarter
          </p>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 font-medium text-foreground">4.9/5</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            Only 3 spots left for September builds
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="max-w-md mx-auto mb-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="flex-1 px-5 py-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient-primary px-6 py-4 rounded-xl hover-lift font-semibold text-white shadow-lg flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Get Free Audit"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-green-800 font-semibold">Audit request received!</p>
                <p className="text-green-700 text-sm mt-1">Check your inbox in the next 5 minutes.</p>
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-3">
              Free. No credit card required. Unsubscribe anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center gap-1 group"
              >
                {secondaryCta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-8 border-t border-border/50">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}