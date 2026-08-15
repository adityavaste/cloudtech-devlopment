'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg sm:rounded-xl overflow-hidden bg-white hover:shadow-md hover:border-accent transition-smooth"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 hover:bg-section-alt transition-colors text-left group"
          >
            <span className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
              {item.question}
            </span>

            <ChevronDown
              className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform flex-shrink-0 mt-1 sm:mt-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-blue-50 to-white border-t border-border animate-in">
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}