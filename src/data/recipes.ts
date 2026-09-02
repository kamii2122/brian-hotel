// Recipe data for Small World Hotel's culinary offerings
// Each recipe includes ingredients, preparation steps, and metadata

export type RecipeCategory =
  | "All"
  | "Seafood"
  | "Italian"
  | "Healthy"
  | "Dessert"
  | "Beverage"
  | "Main Course"
  | "Appetizer";

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  description: string;
  image: string;
  ingredients: string[];
  preparation: string[];
  cookingTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  chef: string;
}

export const categories: RecipeCategory[] = [
  "All",
  "Seafood",
  "Italian",
  "Healthy",
  "Dessert",
  "Beverage",
  "Main Course",
  "Appetizer",
];

export const recipes: Recipe[] = [
  {
    id: "grilled-salmon",
    name: "Grilled Salmon with Lemon Butter",
    category: "Seafood",
    description:
      "A perfectly grilled Atlantic salmon fillet glazed with a zesty lemon butter sauce, served on a bed of seasonal vegetables. This signature dish exemplifies our commitment to fresh, sustainable seafood.",
    image: "/images/recipes/salmon.jpg",
    ingredients: [
      "2 Atlantic salmon fillets (6 oz each)",
      "4 tbsp unsalted butter",
      "2 lemons, juiced and zested",
      "3 cloves garlic, minced",
      "2 tbsp fresh dill, chopped",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "1 cup asparagus spears",
      "Cherry tomatoes for garnish",
    ],
    preparation: [
      "Preheat grill to medium-high heat (400°F).",
      "Pat salmon fillets dry and season with salt, pepper, and olive oil.",
      "In a small saucepan, melt butter over medium heat. Add garlic and cook for 1 minute.",
      "Add lemon juice and zest to the butter. Stir in fresh dill. Keep warm.",
      "Place salmon on grill skin-side down. Cook for 4-5 minutes per side.",
      "Grill asparagus alongside the salmon with a light coating of olive oil.",
      "Plate the salmon over asparagus, drizzle with lemon butter sauce.",
      "Garnish with cherry tomatoes and a sprig of fresh dill. Serve immediately.",
    ],
    cookingTime: "25 minutes",
    servings: 2,
    difficulty: "Medium",
    chef: "Chef Antonio Bellini",
  },
  {
    id: "chicken-alfredo",
    name: "Chicken Alfredo Pasta",
    category: "Italian",
    description:
      "Creamy, indulgent fettuccine Alfredo topped with perfectly seared chicken breast. Our house-made Alfredo sauce combines parmesan, cream, and a touch of nutmeg for an authentic Italian experience.",
    image: "/images/recipes/alfredo.jpg",
    ingredients: [
      "1 lb fettuccine pasta",
      "2 chicken breasts, pounded thin",
      "2 cups heavy cream",
      "1 cup freshly grated Parmigiano-Reggiano",
      "4 tbsp butter",
      "3 cloves garlic, minced",
      "1/4 tsp nutmeg, freshly grated",
      "2 tbsp fresh parsley, chopped",
      "Salt and white pepper to taste",
      "1 tbsp olive oil",
    ],
    preparation: [
      "Cook fettuccine in salted boiling water according to package directions. Reserve 1 cup pasta water.",
      "Season chicken breasts with salt and pepper. Heat olive oil in a large skillet.",
      "Sear chicken for 5-6 minutes per side until golden and cooked through. Rest, then slice.",
      "In the same skillet, melt butter and sauté garlic for 30 seconds.",
      "Pour in heavy cream, bring to a gentle simmer. Cook for 5 minutes until slightly thickened.",
      "Add Parmigiano-Reggiano and nutmeg. Stir until cheese melts and sauce is smooth.",
      "Toss drained pasta in the sauce, adding pasta water as needed for consistency.",
      "Plate pasta, top with sliced chicken, garnish with parsley. Serve immediately.",
    ],
    cookingTime: "30 minutes",
    servings: 4,
    difficulty: "Medium",
    chef: "Chef Marco Rossi",
  },
  {
    id: "garden-salad",
    name: "Garden Fresh Salad",
    category: "Healthy",
    description:
      "A vibrant medley of locally sourced greens, heirloom tomatoes, crisp vegetables, and candied walnuts, dressed in our signature honey-balsamic vinaigrette. The perfect light and refreshing starter.",
    image: "/images/recipes/salad.jpg",
    ingredients: [
      "6 cups mixed greens (arugula, spinach, romaine)",
      "1 cup heirloom cherry tomatoes, halved",
      "1 English cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1 avocado, sliced",
      "1/2 cup candied walnuts",
      "1/3 cup crumbled goat cheese",
      "3 tbsp balsamic vinegar",
      "1/4 cup extra virgin olive oil",
      "1 tbsp honey",
      "1 tsp Dijon mustard",
      "Salt and pepper to taste",
    ],
    preparation: [
      "Wash and dry all greens thoroughly. Place in a large salad bowl.",
      "Prepare all vegetables: halve tomatoes, slice cucumber and onion, slice avocado.",
      "Make the dressing: whisk together balsamic vinegar, olive oil, honey, and Dijon mustard.",
      "Season dressing with salt and pepper to taste.",
      "Arrange greens on plates, top with vegetables, avocado slices, and goat cheese.",
      "Sprinkle candied walnuts over the salad.",
      "Drizzle with honey-balsamic vinaigrette just before serving.",
      "Serve immediately for maximum freshness and crunch.",
    ],
    cookingTime: "10 minutes",
    servings: 4,
    difficulty: "Easy",
    chef: "Chef Maria Santos",
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    category: "Dessert",
    description:
      "A decadent individual chocolate cake with a molten center that flows like lava when pierced with a spoon. Served with vanilla bean ice cream and fresh berries, this dessert is the grand finale every meal deserves.",
    image: "/images/recipes/lava-cake.jpg",
    ingredients: [
      "6 oz dark chocolate (70% cacao)",
      "1/2 cup unsalted butter",
      "3 large eggs",
      "3 large egg yolks",
      "1/4 cup granulated sugar",
      "2 tbsp all-purpose flour",
      "Pinch of sea salt",
      "1 tsp vanilla extract",
      "Cocoa powder for ramekins",
      "Vanilla bean ice cream for serving",
      "Fresh raspberries and mint for garnish",
    ],
    preparation: [
      "Preheat oven to 425°F (220°C). Butter and dust 4 ramekins with cocoa powder.",
      "Melt chocolate and butter together in a double boiler or microwave. Stir until smooth.",
      "In a separate bowl, whisk eggs, egg yolks, and sugar until thick and pale (about 3 minutes).",
      "Fold the chocolate mixture into the egg mixture gently.",
      "Add flour and salt, fold until just combined. Add vanilla extract.",
      "Divide batter evenly among prepared ramekins.",
      "Bake for exactly 12-14 minutes. The edges should be firm but the center soft.",
      "Let rest for 1 minute, then invert onto plates. Serve immediately with ice cream and berries.",
    ],
    cookingTime: "20 minutes",
    servings: 4,
    difficulty: "Hard",
    chef: "Chef Antoine Dupont",
  },
  {
    id: "tropical-smoothie",
    name: "Tropical Fruit Smoothie",
    category: "Beverage",
    description:
      "A refreshing blend of tropical fruits including mango, pineapple, banana, and coconut milk. This vibrant smoothie is perfect for a healthy start to your morning or a refreshing poolside treat.",
    image: "/images/recipes/smoothie.jpg",
    ingredients: [
      "1 cup frozen mango chunks",
      "1 cup frozen pineapple chunks",
      "1 ripe banana",
      "1 cup coconut milk",
      "1/2 cup Greek yogurt",
      "2 tbsp honey or agave nectar",
      "1 tbsp chia seeds (optional)",
      "Ice cubes as needed",
      "Fresh mint for garnish",
      "Toasted coconut flakes for garnish",
    ],
    preparation: [
      "Add coconut milk and Greek yogurt to the blender first.",
      "Add frozen mango, pineapple, and banana chunks.",
      "Drizzle in honey or agave nectar.",
      "Blend on high for 60-90 seconds until smooth and creamy.",
      "Add ice cubes if desired for a thicker consistency. Blend again.",
      "Taste and adjust sweetness if needed.",
      "Pour into chilled glasses.",
      "Garnish with fresh mint leaves and toasted coconut flakes. Serve immediately.",
    ],
    cookingTime: "5 minutes",
    servings: 2,
    difficulty: "Easy",
    chef: "Chef Maria Santos",
  },
  {
    id: "herb-crusted-lamb",
    name: "Herb-Crusted Lamb Chops",
    category: "Main Course",
    description:
      "Tender New Zealand lamb chops coated in a fragrant herb crust, pan-seared to perfection and finished in the oven. Served with rosemary jus and roasted root vegetables for an elegant main course.",
    image: "/images/recipes/lamb.jpg",
    ingredients: [
      "8 lamb rib chops",
      "1 cup fresh breadcrumbs",
      "3 tbsp fresh rosemary, minced",
      "2 tbsp fresh thyme, minced",
      "3 cloves garlic, minced",
      "3 tbsp Dijon mustard",
      "3 tbsp olive oil",
      "1 cup beef or lamb stock",
      "2 tbsp red wine",
      "Root vegetables (carrots, parsnips, potatoes)",
      "Salt and pepper to taste",
    ],
    preparation: [
      "Preheat oven to 400°F (200°C). Let lamb chops come to room temperature.",
      "Mix breadcrumbs with rosemary, thyme, garlic, 2 tbsp olive oil, salt, and pepper.",
      "Season lamb chops with salt and pepper. Sear in a hot skillet for 2 minutes per side.",
      "Brush the top of each chop with Dijon mustard, then press herb breadcrumb mixture onto it.",
      "Place chops on a baking sheet and bake for 8-10 minutes for medium-rare.",
      "While lamb bakes, deglaze the searing pan with red wine. Add stock and reduce by half.",
      "Roast root vegetables tossed in olive oil and herbs alongside the lamb.",
      "Plate vegetables, rest lamb chops for 3 minutes, then serve with rosemary jus drizzled over.",
    ],
    cookingTime: "35 minutes",
    servings: 4,
    difficulty: "Hard",
    chef: "Chef Antonio Bellini",
  },
  {
    id: "bruschetta",
    name: "Classic Tomato Bruschetta",
    category: "Appetizer",
    description:
      "Crispy toasted ciabatta rounds topped with a vibrant mixture of ripe Roma tomatoes, fresh basil, garlic, and aged balsamic vinegar. A classic Italian appetizer that awakens the palate.",
    image: "/images/recipes/bruschetta.jpg",
    ingredients: [
      "1 large ciabatta loaf, sliced into rounds",
      "6 Roma tomatoes, diced",
      "1/4 cup fresh basil leaves, chiffonade",
      "3 cloves garlic (2 minced, 1 whole for rubbing)",
      "2 tbsp extra virgin olive oil",
      "1 tbsp aged balsamic vinegar",
      "Salt and freshly cracked black pepper",
      "Shaved Parmigiano-Reggiano for garnish",
    ],
    preparation: [
      "Preheat oven to 375°F (190°C). Arrange ciabatta slices on a baking sheet.",
      "Brush each slice with olive oil and bake for 8-10 minutes until golden and crispy.",
      "While bread toasts, dice tomatoes and place in a bowl.",
      "Add minced garlic, basil, olive oil, and balsamic vinegar to tomatoes.",
      "Season with salt and pepper. Toss gently and let marinate for 10 minutes.",
      "Remove bread from oven. While still warm, rub each slice with the whole garlic clove.",
      "Spoon the tomato mixture generously onto each toast.",
      "Garnish with shaved Parmigiano-Reggiano and a drizzle of balsamic. Serve warm.",
    ],
    cookingTime: "15 minutes",
    servings: 6,
    difficulty: "Easy",
    chef: "Chef Marco Rossi",
  },
];
