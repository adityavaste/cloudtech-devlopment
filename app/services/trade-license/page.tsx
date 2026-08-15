'use client'

import { useState } from 'react'
import { CheckCircle, Shield, Phone, Star, Users, ArrowRight, AlertTriangle } from 'lucide-react'

export function HeroLeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', businessType: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to your CRM / webhook
    console.log('Lead captured:', formData)
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Copy & Trust */}
          <div className="space-y-6 sm:space-y-8">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-sm font-medium text-red-200">
              <AlertTriangle className="w-4 h-4" />
              Municipal raids increasing — protect your business now
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Get Your <span className="text-blue-400">Trade License</span> Before the Municipality Shuts You Down
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              2,400+ businesses across India trust CloudTech for hassle-free Trade License registration & renewal. Documents to approval — we handle everything.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5</span>
                <span>Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">2,400+</span>
                <span>Businesses Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-semibold text-white">100%</span>
                <span>Approval Rate</span>
              </div>
            </div>

            {/* Mini social proof strip */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-3">
                {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${color} border-2 border-slate-800 flex items-center justify-center text-xs font-bold`}>
                    {['RK', 'SP', 'AM', 'VT'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-medium">Rahul from Delhi</span> got his license yesterday
              </p>
            </div>
          </div>

          {/* RIGHT: Lead Capture Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30" />

            <div className="relative bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Check Your Eligibility — Free
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base">
                      Get a callback from our Trade License expert in <span className="font-semibold text-blue-600">10 minutes</span>
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Type</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 bg-white"
                        value={formData.businessType}
                        onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                      >
                        <option value="" disabled>Select your business type</option>
                        <option value="retail">Retail Shop / Store</option>
                        <option value="restaurant">Restaurant / Cafe</option>
                        <option value="office">Commercial Office</option>
                        <option value="warehouse">Warehouse / Godown</option>
                        <option value="manufacturing">Manufacturing Unit</option>
                        <option value="clinic">Medical Clinic</option>
                        <option value="hotel">Hotel / Lodge</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-base sm:text-lg"
                    >
                      Get Free Eligibility Check
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-center text-slate-400 flex items-center justify-center gap-1.5">
                      <Phone className="w-3 h-3" />
                      Expert will call you at your preferred time
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-500 mb-6">Our Trade License expert will call you within 10 minutes.</p>
                  <div className="bg-slate-50 rounded-lg p-4 text-left">
                    <p className="text-sm text-slate-600 mb-2"><strong>Meanwhile, keep ready:</strong></p>
                    <ul className="text-sm text-slate-500 space-y-1">
                      <li>• Property ownership proof</li>
                      <li>• PAN Card & Aadhaar</li>
                      <li>• Business address proof</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> 2-4 Weeks Processing</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> All Municipal Corporations</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> New + Renewal</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> 100% Online Process</span>
          </div>
        </div>
      </div>
    </section>
  )
}