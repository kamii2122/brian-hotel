import Link from "next/link";
import {
  Hotel,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

/* ============================================
   Footer Component
   Shared across all pages with hotel info,
   quick links, and social media
   ============================================ */

/* WhatsApp contact (international format) */
const WHATSAPP_NUMBER = "254794554119";
const WHATSAPP_DISPLAY = "+254 794 554 119";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Hotel className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold">Small World</span>
                <span className="block text-xs font-medium tracking-widest uppercase text-accent">
                  Hotel
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Where every guest becomes family. Experience world-class hospitality,
              exceptional dining, and unforgettable memories at Small World Hotel.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/departments", label: "Our Departments" },
                { href: "/food-recipes", label: "Culinary Menu" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              {[
                "Front Office",
                "Housekeeping",
                "Food & Beverage",
                "Human Resources",
                "Finance",
                "Sales & Marketing",
                "Security",
                "Maintenance",
              ].map((dept) => (
                <li key={dept}>
                  <Link
                    href="/departments"
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Hospitality Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@smallworldhotel.com"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  info@smallworldhotel.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Small World Hotel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
