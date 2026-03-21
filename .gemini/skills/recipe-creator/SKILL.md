---
name: recipe-creator
description: Generates high-quality, authentic recipes with metric ingredients, step-by-step instructions, and selects a relevant Unsplash image ID. Use this when you need to create new recipes for a cookbook or food app.
---

# Recipe Creator

This skill helps you generate realistic, authentic recipes.

## Guidelines

1. **Ingredients:** Must be in the metric system (grams, milliliters, etc.). Be specific about quantities.
2. **Instructions:** Provide clear, step-by-step cooking instructions.
3. **Categories:** Must be one of: 'Drink', 'Dessert', 'Entree', 'Appetizer'.
4. **Labels:** Can include 'Vegan', 'Vegetarian', 'Gluten-Free', or a combination.
5. **Image:** Choose a realistic Unsplash image URL for the dish. Use `https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80` (use a valid food-related photo ID).
6. **Format:** Output the recipe strictly as a TypeScript object that matches the `Recipe` interface.

```typescript
export interface Recipe {
  id: string;
  title: string;
  category: 'Drink' | 'Dessert' | 'Entree' | 'Appetizer';
  country: string;
  image: string;
  labels: ('Gluten-Free' | 'Vegan' | 'Vegetarian')[];
  ingredients: string[];
  instructions: string[];
}
```

## Process
When asked to create a recipe, return a single valid TypeScript object representing the recipe. Ensure all guidelines are met.
