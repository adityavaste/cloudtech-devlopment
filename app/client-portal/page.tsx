'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ClientPortalPage() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Client Portal</h1>
          <p className="text-muted-foreground mb-8">
            Access your projects, invoices, files, and support tickets from one secure location.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground text-sm mb-4">
              This portal requires authentication. Please log in with your client credentials.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-blue-700 transition-smooth font-semibold mb-3">
              Client Login
            </button>
            <p className="text-muted-foreground text-sm">
              Don't have an account? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <p className="font-semibold text-foreground">Portal Features:</p>
            <ul className="text-left space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                Track project progress and status
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                View and download invoices
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                Access project files and assets
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                Submit and track support requests
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                Manage documents and records
              </li>
            </ul>
          </div>

          <Link
            href="/contact"
            className="inline-block text-primary font-semibold hover:underline"
          >
            Need help accessing your portal? Contact us →
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
