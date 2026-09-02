"use client";

import { useState, useMemo } from "react";
import { Search, X, ChefHat } from "lucide-react";
import { recipes, categories, type Recipe, type RecipeCategory } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";

/* ============================================
   Food & Recipes Page
   Searchable/filterable recipe gallery with
   modal detail view for each recipe
   ============================================ */

export default function FoodRecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<RecipeCategory>("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  /* Filter recipes based on search and category */
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        activeCategory === "All" || recipe.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Culinary Excellence
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Food & Recipes
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the culinary artistry of our award-winning chefs. Browse our signature
            dishes, explore recipes, and get inspired.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 px-4 bg-white border-b sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-12 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-text-light" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-text-light hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-text-light text-sm">
              Showing {filteredRecipes.length} of {recipes.length} recipes
            </p>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-primary text-sm font-medium hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Recipe Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  index={index}
                  onSelect={setSelectedRecipe}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-text mb-2">
                No Recipes Found
              </h3>
              <p className="text-text-light">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Chef&apos;s Note Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-4">
            A Note from Our Executive Chef
          </h2>
          <p className="text-text-light leading-relaxed italic">
            &ldquo;Every dish we create tells a story. From the freshest local ingredients to
            time-honored techniques, our culinary team is dedicated to crafting meals that
            delight the senses and create lasting memories. We invite you to explore our
            recipes and experience the passion behind every plate.&rdquo;
          </p>
          <p className="mt-4 font-heading font-bold text-text">
            Chef Antonio Bellini
          </p>
          <p className="text-sm text-text-light">Executive Chef, Small World Hotel</p>
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
}
