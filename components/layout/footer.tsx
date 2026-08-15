import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-section-alt border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-12 h-8 sm:w-13 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">AWS</span>
              </div>
              <span className="font-bold text-base sm:text-lg text-foreground">
                CloudTech
              </span>
            </div>

            <p className="text-secondary text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              Empowering businesses with professional web development, AWS
              hosting, and business registration services.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="https://twitter.com"
                className="text-secondary hover:text-primary font-medium transition-smooth text-sm"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                className="text-secondary hover:text-primary font-medium transition-smooth text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">
              Services
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/services/business-registration"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Business Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aws-hosting"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  AWS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-management"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Data Management
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">
              Company
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">
              Get In Touch
            </h4>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:cloudtechenquiry@gmail.com"
                className="flex items-center gap-3 text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="break-all">cloudtechenquiry@gmail.com</span>
              </a>

              <a
                href="tel:+917350247244"
                className="flex items-center gap-3 text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                +91 7350247244
              </a>

              <a
                href="https://wa.me/917350247244"
                className="flex items-center gap-3 text-secondary hover:text-primary transition-smooth text-sm sm:text-base font-medium"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border pt-10 sm:pt-12">

          {/* CTA Section */}
          <div className="text-center mb-10 sm:mb-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
              Ready to Launch Your Business?
            </h3>

            <p className="text-sm sm:text-base text-secondary mb-5 sm:mb-6 font-medium">
              Get started with a free consultation today.
            </p>

            <a
              href="https://wa.me/917350247244?text=Hi!%20%F0%9F%91%8B%20I%20would%20like%20to%20start%20my%20business%20journey%20and%20I'm%20interested%20in%20your%20business%20registration%20services.%20Please%20guide%20me%20through%20the%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-gradient-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Start Your Journey
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-secondary gap-4 sm:gap-6">

            <p className="font-medium text-center md:text-left">
              &copy; {currentYear} Business Solutions. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center">
              <Link
                href="/privacy"
                className="hover:text-primary font-medium transition-smooth"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-primary font-medium transition-smooth"
              >
                Terms of Service
              </Link>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}