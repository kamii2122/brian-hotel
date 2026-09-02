"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

/* ============================================
   Not Found Page
   Custom 404 page with hotel branding
   ============================================ */

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-heading text-8xl font-bold text-primary mb-4">404</p>
        <h1 className="font-heading text-3xl font-bold text-text mb-3">
          Page Not Found
        </h1>
        <p className="text-text-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}