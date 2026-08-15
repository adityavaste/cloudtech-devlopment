import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="h-full flex flex-col">
      
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
          {title}
        </h3>
      </div>

      <p className="text-sm sm:text-base text-secondary flex-grow leading-relaxed">
        {description}
      </p>

      {href && (
        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border">
          <span className="text-primary font-semibold text-xs sm:text-sm hover:text-secondary transition-colors inline-flex items-center gap-1">
            Learn more <span className="text-base sm:text-lg">→</span>
          </span>
        </div>
      )}
    </div>
  )

  const baseClasses =
    "bg-card border border-border rounded-xl p-5 sm:p-6 lg:p-8 h-full transition-smooth group cursor-pointer"

  const hoverClasses =
    "hover:border-accent hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1"

  if (href) {
    return (
      <Link href={href}>
        <div className={`${baseClasses} ${hoverClasses}`}>
          {content}
        </div>
      </Link>
    )
  }

  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      {content}
    </div>
  )
}