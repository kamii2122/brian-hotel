import { Clock, Users, ChefHat, Flame } from "lucide-react";
import type { Recipe } from "@/data/recipes";

/* ============================================
   RecipeCard Component
   Displays a recipe with image placeholder,
   ingredients preview, and cooking info
   ============================================ */

/* Difficulty badge color mapping */
const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

/* Category badge colors */
const categoryColors: Record<string, string> = {
  Seafood: "bg-blue-100 text-blue-700",
  Italian: "bg-orange-100 text-orange-700",
  Healthy: "bg-green-100 text-green-700",
  Dessert: "bg-pink-100 text-pink-700",
  Beverage: "bg-purple-100 text-purple-700",
  "Main Course": "bg-amber-100 text-amber-700",
  Appetizer: "bg-teal-100 text-teal-700",
};

/* Placeholder gradient backgrounds for recipe images when no image is available */
const gradients = [
  "from-orange-400 to-red-500",
  "from-blue-400 to-indigo-500",
  "from-green-400 to-teal-500",
  "from-pink-400 to-rose-500",
  "from-purple-400 to-violet-500",
  "from-amber-400 to-orange-500",
  "from-cyan-400 to-blue-500",
];

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  onSelect: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, index, onSelect }: RecipeCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md card-hover overflow-hidden cursor-pointer group"
      onClick={() => onSelect(recipe)}
    >
      {/* Image Placeholder with Gradient */}
      <div
        className={`relative h-52 bg-gradient-to-br ${
          gradients[index % gradients.length]
        } flex items-center justify-center`}
      >
        <ChefHat className="w-16 h-16 text-white/30" />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            categoryColors[recipe.category] || "bg-gray-100 text-gray-700"
          }`}
        >
          {recipe.category}
        </span>
        {/* Difficulty Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            difficultyColors[recipe.difficulty]
          }`}
        >
          <Flame className="w-3 h-3 inline mr-1" />
          {recipe.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>
        <p className="text-text-light text-sm leading-relaxed mb-4 line-clamp-2">
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-text-light">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            {recipe.cookingTime}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            {recipe.servings} servings
          </span>
        </div>

        {/* Ingredients Preview */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-text-light uppercase tracking-wider font-medium mb-2">
            Key Ingredients
          </p>
          <div className="flex flex-wrap gap-1.5">
            {recipe.ingredients.slice(0, 4).map((ing, i) => (
              <span
                key={i}
                className="text-xs bg-gray-50 text-text-light px-2 py-1 rounded-md"
              >
                {ing.split(",")[0].replace(/\d+\s*\w*\s*/, "").trim()}
              </span>
            ))}
            {recipe.ingredients.length > 4 && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                +{recipe.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
