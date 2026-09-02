import Link from "next/link";
import {
  Building2,
  UtensilsCrossed,
  Sparkles,
  Shield,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Award,
} from "lucide-react";
import Hero from "@/components/Hero";

/* ============================================
   Home Page
   Landing page with hero, services overview,
   why choose us, and call-to-action
   ============================================ */

/* Service cards for overview section */
const services = [
  {
    icon: Building2,
    title: "Luxury Accommodation",
    description:
      "180 beautifully appointed rooms and suites with modern amenities and stunning city views.",
    color: "#FF6B35",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description:
      "Three award-winning restaurants offering international cuisine and locally sourced ingredients.",
    color: "#004E89",
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description:
      "Full-service spa with therapeutic treatments, infinity pool, and state-of-the-art fitness center.",
    color: "#F7C948",
  },
  {
    icon: Shield,
    title: "24/7 Concierge",
    description:
      "Personalized guest services available around the clock to ensure an exceptional stay.",
    color: "#10B981",
  },
];

/* Why Choose Us values */
const values = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized globally for excellence in hospitality with over 15 industry awards.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Situated in the heart of the city, steps from major attractions and business districts.",
  },
  {
    icon: Star,
    title: "Personalized Experience",
    description:
      "Every stay is tailored to your preferences, from pillow choices to dining reservations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
              Everything You Need for a Perfect Stay
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-2xl shadow-md card-hover text-center group"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Why Choose Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                A Legacy of Hospitality Excellence
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                For over two decades, Small World Hotel has been the destination of choice for
                discerning travelers seeking authentic luxury and personalized service. Our 8
                specialized departments work in harmony to create experiences that go beyond
                expectations.
              </p>

              <div className="space-y-6">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-white mb-1">
                          {value.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/about"
                className="btn-primary mt-8 inline-flex"
              >
                Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Years of Excellence" },
                { number: "180", label: "Luxury Rooms & Suites" },
                { number: "50K+", label: "Happy Guests Annually" },
                { number: "3", label: "Award-Winning Restaurants" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.number}
                  </p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Our Team
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
            8 Departments, One Mission
          </h2>
          <p className="text-text-light max-w-2xl mx-auto mb-6">
            Every department at Small World Hotel works together to deliver
            an unparalleled guest experience.
          </p>
          <div className="section-divider mx-auto mb-10" />

          {/* Department Name Tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
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
              <span
                key={dept}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-text border border-gray-100 hover:border-primary hover:text-primary transition-colors"
              >
                {dept}
              </span>
            ))}
          </div>

          <Link href="/departments" className="btn-secondary">
            Meet Our Departments
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
          }}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book your stay at Small World Hotel and discover why guests return year after year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-white/15 backdrop-blur-sm text-white border border-white/25 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/25 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
