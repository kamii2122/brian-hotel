"use client";

import {
  Building2,
  Sparkles,
  UtensilsCrossed,
  Users,
  DollarSign,
  Megaphone,
  Shield,
  Wrench,
} from "lucide-react";
import type { Department } from "@/data/departments";

/* ============================================
   DepartmentCard Component
   Displays a single department with icon,
   description, and expandable responsibilities
   ============================================ */

/* Icon mapping from string identifier to Lucide component */
const iconMap: Record<string, React.ComponentType<Record<string, unknown>>> = {
  Building2,
  Sparkles,
  UtensilsCrossed,
  Users,
  DollarSign,
  Megaphone,
  Shield,
  Wrench,
};

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const IconComponent = iconMap[department.icon] || Building2;

  return (
    <div className="bg-white rounded-2xl shadow-md card-hover overflow-hidden group">
      {/* Color accent bar */}
      <div
        className="dept-color-bar"
        style={{ backgroundColor: department.color }}
      />

      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
            style={{ backgroundColor: `${department.color}15` }}
          >
            <IconComponent
              className="w-7 h-7"
              style={{ color: department.color }}
            />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-text">
              {department.name}
            </h3>
            <p className="text-sm text-text-light">
              Head: {department.head}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-light text-sm leading-relaxed mb-5">
          {department.description}
        </p>

        {/* Responsibilities */}
        <div>
          <h4 className="text-sm font-semibold text-text mb-2 uppercase tracking-wider">
            Key Responsibilities
          </h4>
          <ul className="space-y-1.5">
            {department.responsibilities.slice(0, 4).map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-light"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: department.color }}
                />
                {resp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}