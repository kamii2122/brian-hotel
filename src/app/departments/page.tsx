import type { Metadata } from "next";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";

/* ============================================
   Departments Page
   Displays all 8 hotel departments with
   their details and responsibilities
   ============================================ */

export const metadata: Metadata = {
  title: "Our Departments",
  description:
    "Discover the 8 specialized departments at Small World Hotel that work together to deliver exceptional hospitality experiences.",
};

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Our Departments
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Behind every exceptional guest experience is a team of dedicated professionals
            working across 8 specialized departments.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Excellence in Every Department
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
              8 Departments, One Unified Mission
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-text-light max-w-2xl mx-auto">
              Each department plays a vital role in creating the signature Small World Hotel
              experience. Together, they ensure every guest receives nothing but the best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Department Interaction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
              How Our Departments Work Together
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Guest Arrival",
                description:
                  "From the moment you arrive, Front Office welcomes you, Security ensures your safety, and Housekeeping has prepared your room to perfection.",
                step: "01",
              },
              {
                title: "During Your Stay",
                description:
                  "Food & Beverage delights your palate, Maintenance keeps everything running smoothly, and our Concierge team handles every request.",
                step: "02",
              },
              {
                title: "Behind the Scenes",
                description:
                  "Finance manages billing seamlessly, HR ensures our team is well-trained, and Sales & Marketing shares our story with the world.",
                step: "03",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
