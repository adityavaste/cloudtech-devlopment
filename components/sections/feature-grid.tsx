import { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  /** Conversion-focused: the outcome/benefit, not the mechanism */
  outcome?: string;
  /** Optional micro-stat for social proof ("3x faster", "99.9% uptime") */
  stat?: string;
  /** Optional CTA per card */
  cta?: {
    text: string;
    href: string;
  };
  /** Optional checklist items inside the card */
  checks?: string[];
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  /** Highlight one card to draw attention to your #1 value prop */
  highlightedIndex?: number;
  /** Section-level CTA below the grid */
  bottomCta?: {
    text: string;
    href: string;
    subtext?: string;
  };
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  highlightedIndex,
  bottomCta,
}: FeatureGridProps) {
  const gridClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight leading-[1.15]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={`grid grid-cols-1 ${gridClass} gap-6 lg:gap-8`}>
          {features.map((feature, index) => {
            const isHighlighted = highlightedIndex === index;

            return (
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isHighlighted
                    ? "border-blue-500/30 bg-gradient-to-b from-blue-50/80 to-white shadow-blue-100/50 shadow-lg ring-1 ring-blue-500/20"
                    : "border-border bg-white hover:border-blue-200 hover:shadow-blue-100/40"
                }`}
              >
                {/* Highlight badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                    isHighlighted
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Stat */}
                {feature.stat && (
                  <div className="mb-3 text-2xl font-bold text-blue-600 tracking-tight">
                    {feature.stat}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Outcome / Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.outcome || feature.description}
                </p>

                {/* Checklist */}
                {feature.checks && feature.checks.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {feature.checks.map((check, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Spacer to push CTA to bottom */}
                <div className="mt-auto pt-4">
                  {feature.cta ? (
                    <Link
                      href={feature.cta.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
                    >
                      {feature.cta.text}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <div className="h-5" /> /* maintain spacing */
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {bottomCta && (
          <div className="mt-16 text-center">
            <Link
              href={bottomCta.href}
              className="btn-gradient-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover-lift"
            >
              {bottomCta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {bottomCta.subtext && (
              <p className="mt-3 text-sm text-muted-foreground">{bottomCta.subtext}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}