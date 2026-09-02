"use client";

import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ============================================
   Gallery Page
   Photo gallery with lightbox modal for
   viewing images in full screen
   ============================================ */

/* Gallery items with placeholder gradients and captions */
const galleryItems = [
  {
    id: 1,
    title: "Grand Lobby",
    category: "Hotel",
    gradient: "from-amber-200 to-orange-300",
    description: "Our stunning lobby welcomes guests with elegance and warmth.",
  },
  {
    id: 2,
    title: "Deluxe Suite",
    category: "Rooms",
    gradient: "from-blue-200 to-indigo-300",
    description: "Spacious suites with panoramic city views and luxury amenities.",
  },
  {
    id: 3,
    title: "The Golden Fork Restaurant",
    category: "Dining",
    gradient: "from-rose-200 to-pink-300",
    description: "Fine dining experience with a curated menu of international cuisine.",
  },
  {
    id: 4,
    title: "Infinity Pool",
    category: "Amenities",
    gradient: "from-cyan-200 to-blue-300",
    description: "Relax and unwind at our rooftop infinity pool with stunning views.",
  },
  {
    id: 5,
    title: "Spa & Wellness Center",
    category: "Amenities",
    gradient: "from-green-200 to-teal-300",
    description: "Rejuvenate your body and mind with our therapeutic spa treatments.",
  },
  {
    id: 6,
    title: "Presidential Suite",
    category: "Rooms",
    gradient: "from-purple-200 to-violet-300",
    description: "The ultimate luxury experience with private butler service.",
  },
  {
    id: 7,
    title: "Garden Terrace",
    category: "Hotel",
    gradient: "from-lime-200 to-green-300",
    description: "Our beautifully landscaped garden terrace, perfect for events.",
  },
  {
    id: 8,
    title: "The Blue Bar",
    category: "Dining",
    gradient: "from-slate-300 to-blue-400",
    description: "Craft cocktails and premium spirits in an elegant lounge setting.",
  },
  {
    id: 9,
    title: "Conference Hall",
    category: "Events",
    gradient: "from-yellow-200 to-amber-300",
    description: "State-of-the-art facilities for meetings, conferences, and events.",
  },
  {
    id: 10,
    title: "Fitness Center",
    category: "Amenities",
    gradient: "from-red-200 to-rose-300",
    description: "Modern gym equipment and personal training services available 24/7.",
  },
  {
    id: 11,
    title: "Rooftop Lounge",
    category: "Dining",
    gradient: "from-indigo-200 to-purple-300",
    description: "Breathtaking sunset views with gourmet appetizers and fine wines.",
  },
  {
    id: 12,
    title: "Wedding Venue",
    category: "Events",
    gradient: "from-pink-200 to-rose-300",
    description: "Create magical memories at our enchanting wedding and reception venues.",
  },
];

const galleryCategories = [
  "All",
  "Hotel",
  "Rooms",
  "Dining",
  "Amenities",
  "Events",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "next") {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    } else {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Visual Tour
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Take a visual tour of Small World Hotel. Explore our rooms, dining venues,
            amenities, and event spaces.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-4 bg-white border-b sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-text-light text-sm mb-6">
            Showing {filteredItems.length} photos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <Camera className="w-10 h-10 text-white/40" />
                </div>
                <div className="gallery-overlay">
                  <div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
          />
          <div className="relative max-w-4xl w-full">
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div
              className={`aspect-video bg-gradient-to-br ${filteredItems[lightboxIndex].gradient} rounded-2xl flex items-center justify-center`}
            >
              <Camera className="w-20 h-20 text-white/30" />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="font-heading text-xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="text-center mt-3">
              <span className="text-white/50 text-sm">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
