"use client"

import { useState } from 'react'
import { MainLayout } from '@/components/layout/main-layout'
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Heart, Cpu, ShieldCheck } from 'lucide-react'

// Mock Data for Job Openings
const JOB_OPENINGS = [
  
  {
    id: 2,
    title: "Software Developer",
    department: "Engineering",
    location: "Hybrid (Pune)",
    type: "Full-time",
    salary: "-",
    description: "Next.js, React,Html, css."
  },
  {
    id: 3,
    title: "Business Development Executive",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    salary: "Base + High Incentives",
    description: "Identify new growth avenues and drive sales for our business registration and web development services."
  },
  {
    id: 4,
    title: "Technical Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Part-time / Shift",
    salary: "Competitive",
    description: "Assist clients with server maintenance, domain configuration, and troubleshooting hosting setups."
  }
]

// Perks & Benefits Data
const BENEFITS = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Modern Tech Stack",
    description: "Work with cutting-edge tools like Next.js 14+, AWS Cloud, Tailwind, and AI-assisted workflows."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote options, and generous paid time off to keep you refreshed."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Growth & Ownership",
    description: "Clear paths for mentorship, continuous learning budgets, and direct ownership of client impact."
  }
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  // Extract unique departments for filtering
  const departments = ["All", ...Array.from(new Set(JOB_OPENINGS.map(job => job.department)))]

  // Filtered jobs array
  const filteredJobs = selectedDepartment === "All" 
    ? JOB_OPENINGS 
    : JOB_OPENINGS.filter(job => job.department === selectedDepartment)

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-background text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            We're Hiring!
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6 tracking-tight">
            Build the Future of Cloud & Web with Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are looking for passionate builders, problem solvers, and innovators to join our distributed team. Explore our open roles below.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why You'll Love Working Here</h2>
            <p className="text-muted-foreground mt-2">Our culture centers on growth, flexibility, and building great products.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary/10">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Current Openings</h2>
              <p className="text-muted-foreground mt-1">Find a position that matches your skill set.</p>
            </div>

            {/* Department Filters */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedDepartment === dept
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Listing Container */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {job.description}
                    </p>
                    
                    {/* Meta tags Grid */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <a
                    href={`mailto:cloudtechenquiry@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-5 py-2.5 rounded-lg font-medium transition-all text-sm whitespace-nowrap shadow-sm group-hover:translate-x-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-border rounded-xl">
                <p className="text-muted-foreground">No roles currently open in this department.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spontaneous Application Section */}
      <section className="py-16 px-4 bg-muted/40 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">Don't see the right position?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We are always on the lookout for exceptional talent. Drop your CV and a summary of your skills into our inbox, and we'll keep you in mind for future roles.
          </p>
          <div className="pt-2">
            <a
              href="mailto:cloudtechenquiry@gmail.com?subject=Spontaneous Application - General Talent Pool"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-smooth text-sm"
            >
              Send Spontaneous Application
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}