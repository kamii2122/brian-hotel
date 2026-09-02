import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CalendarDays,
  Headphones,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

/* ============================================
   Contact Us Page
   Contact information, form, and location
   details for guest inquiries
   ============================================ */

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Small World Hotel. Reach us for reservations, event bookings, inquiries, and customer support.",
};

/* Contact information cards */
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Reservations)"],
    action: "tel:+15551234567",
    color: "#FF6B35",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@smallworldhotel.com", "reservations@smallworldhotel.com"],
    action: "mailto:info@smallworldhotel.com",
    color: "#004E89",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Hospitality Avenue", "New York, NY 10001"],
    action: "https://maps.google.com",
    color: "#F7C948",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Front Desk: 24/7", "Concierge: 6:00 AM - 11:00 PM"],
    action: null,
    color: "#10B981",
  },
];

/* Quick contact options */
const quickOptions = [
  {
    icon: CalendarDays,
    title: "Reservations",
    description: "Book your room or suite directly with our team.",
    phone: "+1 (555) 123-4568",
  },
  {
    icon: MessageSquare,
    title: "Event Inquiries",
    description: "Plan weddings, conferences, or special events.",
    phone: "+1 (555) 123-4570",
  },
  {
    icon: Headphones,
    title: "Guest Support",
    description: "24/7 assistance for current guests.",
    phone: "+1 (555) 123-4567",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, need to make a
            reservation, or want to plan an event, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Wrapper = info.action ? "a" : "div";
              return (
                <Wrapper
                  key={info.title}
                  href={info.action || undefined}
                  className="bg-white p-6 rounded-2xl shadow-md card-hover text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: info.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-text-light text-sm">
                      {detail}
                    </p>
                  ))}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-text text-center mb-8">
            Quick Contact Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg font-bold text-text mb-1">
                    {option.title}
                  </h3>
                  <p className="text-text-light text-sm mb-3">
                    {option.description}
                  </p>
                  <a
                    href={`tel:${option.phone.replace(/\s/g, "")}`}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    {option.phone}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-light mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">
                Find Us
              </h2>
              <p className="text-text-light mb-8">
                Located in the heart of New York City, easily accessible from all major
                transportation hubs.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-text-light font-medium">
                    123 Hospitality Avenue
                  </p>
                  <p className="text-text-light text-sm">New York, NY 10001</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary text-sm font-medium hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Transportation Info */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-heading text-lg font-bold text-text mb-3">
                  Getting Here
                </h3>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <strong>Airport:</strong> 25 minutes from JFK International
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <strong>Subway:</strong> Steps from Times Square (N, Q, R, W, 1, 2, 3)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <strong>Parking:</strong> Valet and self-parking available on-site
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <strong>Shuttle:</strong> Complimentary airport shuttle (advance booking required)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
