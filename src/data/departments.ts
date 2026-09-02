// Department data for Small World Hotel
// Each department includes an id, name, icon identifier, description, responsibilities, and head

export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  responsibilities: string[];
  head: string;
  color: string;
}

export const departments: Department[] = [
  {
    id: "front-office",
    name: "Front Office",
    icon: "Building2",
    description:
      "The Front Office is the heart of guest interactions, serving as the first and last point of contact. Our dedicated team ensures seamless check-in and check-out experiences, manages reservations, and handles all guest inquiries with warmth and professionalism.",
    responsibilities: [
      "Guest registration and check-in/check-out",
      "Reservation management and confirmation",
      "Concierge services and guest assistance",
      "Room assignment and key management",
      "Handling guest complaints and requests",
      "Coordination with other hotel departments",
      "Managing front desk operations 24/7",
      "Processing payments and billing",
    ],
    head: "Sarah Mitchell",
    color: "#FF6B35",
  },
  {
    id: "housekeeping",
    name: "Housekeeping",
    icon: "Sparkles",
    description:
      "Our Housekeeping team maintains the highest standards of cleanliness and comfort throughout the hotel. From pristine guest rooms to immaculate公共 areas, they ensure every corner reflects our commitment to excellence.",
    responsibilities: [
      "Daily room cleaning and turndown service",
      "Linen and laundry management",
      "Public area maintenance and cleaning",
      "Mini-bar restocking and inventory",
      "Deep cleaning and sanitization protocols",
      "Guest amenity replenishment",
      "Lost and found management",
      "Sustainable cleaning practices",
    ],
    head: "Maria Rodriguez",
    color: "#004E89",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    icon: "UtensilsCrossed",
    description:
      "The Food & Beverage department orchestrates culinary excellence across all dining venues. From fine dining to casual eateries, room service to banquet catering, we deliver memorable gastronomic experiences.",
    responsibilities: [
      "Restaurant and bar operations",
      "Room service and in-room dining",
      "Banquet and event catering",
      "Menu development and seasonal specials",
      "Kitchen management and food preparation",
      "Beverage service and wine pairing",
      "Food safety and hygiene compliance",
      "Guest dietary accommodation",
    ],
    head: "Chef Antonio Bellini",
    color: "#F7C948",
  },
  {
    id: "human-resources",
    name: "Human Resources",
    icon: "Users",
    description:
      "Our Human Resources department is the backbone of our team, recruiting top talent, fostering professional development, and cultivating a positive work environment that empowers every team member to excel.",
    responsibilities: [
      "Recruitment and onboarding",
      "Employee training and development",
      "Performance management and reviews",
      "Compensation and benefits administration",
      "Employee relations and engagement",
      "Workplace safety and compliance",
      "Diversity and inclusion initiatives",
      "Payroll processing",
    ],
    head: "David Chen",
    color: "#8B5CF6",
  },
  {
    id: "finance",
    name: "Finance",
    icon: "DollarSign",
    description:
      "The Finance department ensures the financial health and sustainability of Small World Hotel. Through meticulous accounting, budgeting, and financial planning, they support all departments in achieving operational excellence.",
    responsibilities: [
      "Financial reporting and analysis",
      "Budget preparation and monitoring",
      "Accounts payable and receivable",
      "Revenue management and forecasting",
      "Tax compliance and auditing",
      "Cost control and optimization",
      "Procurement and vendor management",
      "Financial planning and strategy",
    ],
    head: "Lisa Thompson",
    color: "#10B981",
  },
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    icon: "Megaphone",
    description:
      "Our Sales & Marketing team drives brand awareness, guest acquisition, and revenue growth. Through strategic campaigns, partnerships, and digital presence, they showcase Small World Hotel to the world.",
    responsibilities: [
      "Brand management and promotion",
      "Digital marketing and social media",
      "Corporate sales and partnerships",
      "Event promotion and coordination",
      "Market research and competitor analysis",
      "Public relations and media outreach",
      "Loyalty program management",
      "Revenue optimization strategies",
    ],
    head: "James Wilson",
    color: "#EC4899",
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    description:
      "The Security department safeguards our guests, staff, and property around the clock. Through vigilant monitoring, strict protocols, and emergency preparedness, they ensure a safe and secure environment for everyone.",
    responsibilities: [
      "24/7 surveillance and monitoring",
      "Access control and key management",
      "Emergency response and evacuation",
      "Fire safety and prevention",
      "Incident investigation and reporting",
      "Guest safety and protection",
      "Parking and valet security",
      "Cybersecurity and data protection",
    ],
    head: "Robert Martinez",
    color: "#64748B",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: "Wrench",
    description:
      "Our Maintenance department keeps Small World Hotel running smoothly. From routine repairs to major renovations, HVAC systems to electrical infrastructure, they ensure all facilities operate at peak performance.",
    responsibilities: [
      "Preventive maintenance scheduling",
      "Guest room and facility repairs",
      "HVAC and plumbing maintenance",
      "Electrical systems management",
      "Grounds and exterior maintenance",
      "Energy efficiency initiatives",
      "Renovation and improvement projects",
      "Vendor and contractor coordination",
    ],
    head: "Tom Anderson",
    color: "#F59E0B",
  },
];
