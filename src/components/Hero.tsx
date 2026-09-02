import Link from "next/link";
import { ChevronRight, Star, Wifi, Car, UtensilsCrossed, Waves } from "lucide-react";

/* ============================================
   Hero Component
   Full-screen hero section for home page
   with gradient overlay and CTA buttons
   ============================================ */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-white/90 text-sm font-medium">
            5-Star Luxury Experience
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-accent">Small World Hotel</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Where every guest becomes family. Discover exceptional hospitality,
          world-class dining, and unforgettable experiences in the heart of the city.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-4 rounded-xl"
          >
            Book Your Stay
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="bg-white/15 backdrop-blur-sm text-white border border-white/25 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/25 transition-all inline-flex items-center gap-2"
          >
            Explore Our Hotel
          </Link>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {[
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Car, label: "Free Parking" },
            { icon: UtensilsCrossed, label: "Fine Dining" },
            { icon: Waves, label: "Spa & Pool" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Icon className="w-6 h-6 text-accent" />
              <span className="text-white text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
