"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Server } from "lucide-react";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Server className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>

              <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-none">
                Cloud<span className="text-blue-600">Tech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              Home
            </Link>
 


            <Link
              href="/about"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/services/business-registration"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-t-xl text-sm"
                >
                  Business Registration
                </Link>

                <Link
                  href="/services/aws-hosting"
                  className="block px-5 py-3 hover:bg-blue-50 text-sm"
                >
                  AWS Hosting
                </Link>

                <Link
                  href="/services/data-management"
                  className="block px-5 py-3 hover:bg-blue-50 text-sm"
                >
                  Data Management
                </Link>

                <Link
                  href="/services"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-b-xl border-t text-sm"
                >
                  All Services
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="px-3 py-2 rounded-lg font-medium hover:text-primary hover:bg-blue-50 transition"
            >
              carreer
            </Link>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/917350247244?text=Hi!%20%F0%9F%91%8B%20I%20would%20like%20to%20start%20my%20business%20journey%20and%20I'm%20interested%20in%20your%20business%20registration%20services.%20Please%20guide%20me%20through%20the%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-gradient-primary px-6 lg:px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
          >
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-in">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-1">
                  <Link
                    href="/services/business-registration"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-sm"
                  >
                    Business Registration
                  </Link>

                  <Link
                    href="/services/aws-hosting"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-sm"
                  >
                    AWS Hosting
                  </Link>

                  <Link
                    href="/services/data-management"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-sm"
                  >
                    Data Management
                  </Link>

                  <Link
                    href="/services"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-sm"
                  >
                    All Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              Contact
            </Link>
 <Link
              href="/careers"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium"
            >
              Career
            </Link>
         
          </div>
        )}
      </div>
    </nav>
  );
}
