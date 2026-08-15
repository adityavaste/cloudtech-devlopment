import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  onSelectPlan?: () => void // ✨ New prop to handle modal triggers
  isRecommended?: boolean
}

export function PricingCard({
  name,
  price,
  period = 'per month',
  description,
  features,
  ctaText,
  ctaHref,
  onSelectPlan, // ✨ Destructure the new prop
  isRecommended = false,
}: PricingCardProps) {
  
  // Shared styles for both Link and Button to preserve your exact design
  const ctaClasses = `text-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl font-bold mb-6 sm:mb-8 transition-smooth text-sm sm:text-base ${
    isRecommended
      ? 'btn-gradient-primary shadow-lg w-full'
      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg w-full'
  }`

  return (
    <div
      className={`rounded-xl border transition-smooth flex flex-col h-full ${
        isRecommended
          ? 'border-accent bg-gradient-to-br from-white to-blue-50 shadow-lg lg:shadow-xl shadow-blue-100/50 lg:scale-105 ring-2 ring-blue-200'
          : 'border-border bg-white hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent hover:-translate-y-1'
      }`}
    >
      {isRecommended && (
        <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-t-xl text-center">
          Most Popular Choice
        </div>
      )}

      <div className="p-6 sm:p-7 lg:p-8 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
          {name}
        </h3>

        <p className="text-sm sm:text-base text-secondary mb-5 sm:mb-8">
          {description}
        </p>

        <div className="mb-6 sm:mb-8">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {price}
          </span>
          <span className="text-sm sm:text-base lg:text-lg text-secondary ml-2 sm:ml-3">
            {period}
          </span>
        </div>

        {/* ✨ Conditional Rendering: If onSelectPlan is passed, use a button for the modal */}
        {onSelectPlan ? (
          <button onClick={onSelectPlan} className={ctaClasses}>
            {ctaText}
          </button>
        ) : (
          <Link href={ctaHref} className={ctaClasses}>
            {ctaText}
          </Link>
        )}

        <div className="space-y-3 sm:space-y-4 flex-grow">
          <p className="font-bold text-foreground text-xs sm:text-sm uppercase tracking-wide">
            What's Included:
          </p>

          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-secondary leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}