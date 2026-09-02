"use client";

import { X, Clock, Users, ChefHat, Flame, ArrowLeft } from "lucide-react";
import type { Recipe } from "@/data/recipes";

/* ============================================
   RecipeModal Component
   Full-screen modal displaying recipe details
   including ingredients and preparation steps
   ============================================ */

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const gradients = [
  "from-orange-400 to-red-500",
  "from-blue-400 to-indigo-500",
  "from-green-400 to-teal-500",
  "from-pink-400 to-rose-500",
  "from-purple-400 to-violet-500",
  "from-amber-400 to-orange-500",
  "from-cyan-400 to-blue-500",
];

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header Image */}
        <div
          className={`relative h-56 bg-gradient-to-br ${
            gradients[recipe.id.length % gradients.length]
          } flex items-center justify-center rounded-t-2xl`}
        >
          <ChefHat className="w-20 h-20 text-white/30" />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Back Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full flex items-center gap-1.5 text-white text-sm hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          {/* Category Badge */}
          <span className="absolute bottom-4 left-4 bg-white/90 text-text px-4 py-1.5 rounded-full text-sm font-semibold">
            {recipe.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Meta */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">
            {recipe.name}
          </h2>
          <p className="text-text-light leading-relaxed mb-5">
            {recipe.description}
          </p>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b">
            <span className="flex items-center gap-1.5 text-sm text-text-light">
              <Clock className="w-4 h-4 text-primary" />
              {recipe.cookingTime}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-text-light">
              <Users className="w-4 h-4 text-primary" />
              {recipe.servings} servings
            </span>
            <span
              className={`flex items-center gap-1.5 text-sm px-3 py-1 rounded-full ${
                difficultyColors[recipe.difficulty]
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              {recipe.difficulty}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-text-light">
              <ChefHat className="w-4 h-4 text-primary" />
              {recipe.chef}
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h3 className="font-heading text-xl font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  I
                </span>
                Ingredients
              </h3>
              <ul className="space-y-2.5">
                {recipe.ingredients.map((ingredient, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-light"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div>
              <h3 className="font-heading text-xl font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm font-bold">
                  P
                </span>
                Preparation
              </h3>
              <ol className="space-y-3">
                {recipe.preparation.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-light"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-8 pt-6 border-t text-center">
            <button onClick={onClose} className="btn-primary">
              Close Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
