import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Gem,
  Users,
  Globe,
  Leaf,
  HandHeart,
} from "lucide-react";

/* ============================================
   About Us Page
   Hotel history, mission, vision, and values
   ============================================ */

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Small World Hotel's history, mission, vision, and core values. Discover our commitment to hospitality excellence.",
};

/* Core values data */
const coreValues = [
  {
    icon: Heart,
    title: "Guest-Centric",
    description: "Every decision we make starts with our guests' comfort and satisfaction.",
    color: "#FF6B35",
  },
  {
    icon: Gem,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, no exceptions.",
    color: "#004E89",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our 8 departments work as one unified team to deliver exceptional experiences.",
    color: "#F7C948",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We celebrate diversity and welcome guests from every corner of the world.",
    color: "#10B981",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to eco-friendly practices and reducing our environmental footprint.",
    color: "#8B5CF6",
  },
  {
    icon: HandHeart,
    title: "Community",
    description: "We actively support local communities through employment and partnerships.",
    color: "#EC4899",
  },
];

/* Leadership team */
const leadership = [
  {
    name: "Robert Williams",
    role: "General Manager",
    bio: "With 25 years in luxury hospitality, Robert leads our team with passion and vision.",
  },
  {
    name: "Elena Vasquez",
    role: "Director of Operations",
    bio: "Elena ensures seamless daily operations across all 8 hotel departments.",
  },
  {
    name: "Chef Antonio Bellini",
    role: "Executive Chef",
    bio: "A Michelin-trained chef bringing culinary excellence to all our dining venues.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Guest Relations",
    bio: "Sarah and her team ensure every guest feels at home from arrival to departure.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            About Small World Hotel
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A legacy of hospitality excellence spanning over two decades, where every guest
            becomes part of our extended family.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Our History
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                From a Vision to a Landmark
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Founded in 2003, Small World Hotel began with a simple yet profound vision:
                  to create a place where travelers from around the globe could find a home
                  away from home, coupled with world-class service and genuine warmth.
                </p>
                <p>
                  What started as a boutique property with just 40 rooms has grown into a
                  premier 180-room luxury destination, recognized with over 15 international
                  hospitality awards. Our growth has been guided by an unwavering commitment
                  to our founding principles: exceptional service, attention to detail, and
                  treating every guest like family.
                </p>
                <p>
                  Today, our 8 specialized departments work in perfect harmony, each
                  contributing their expertise to create the signature Small World experience
                  that guests have come to love and recommend.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-white/60">
                  <Globe className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-sm">Hotel Building Image</p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5">
                <p className="font-heading text-3xl font-bold text-primary">20+</p>
                <p className="text-text-light text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text mb-4">
                Our Mission
              </h3>
              <p className="text-text-light leading-relaxed">
                To provide every guest with an extraordinary hospitality experience that
                exceeds expectations through personalized service, culinary excellence,
                and an unwavering commitment to comfort and quality. We strive to create
                lasting memories that bring guests back time and again.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text mb-4">
                Our Vision
              </h3>
              <p className="text-text-light leading-relaxed">
                To be the world&apos;s most beloved hotel brand, recognized for setting new
                standards in hospitality, sustainability, and guest satisfaction. We envision
                a future where Small World Hotel is synonymous with warmth, innovation, and
                unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Values
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
              What We Stand For
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-2xl shadow-md card-hover text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {person.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
