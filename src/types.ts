export type Category = 'Drink' | 'Dessert' | 'Entree' | 'Appetizer';

export type Label = 'Gluten-Free' | 'Vegan' | 'Vegetarian';

export interface Recipe {
  id: string;
  title: string;
  category: Category;
  country: string;
  image: string;
  labels: Label[];
  ingredients: string[];
  instructions: string[];
}
