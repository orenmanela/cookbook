import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Guacamole',
    category: 'Appetizer',
    country: 'Mexico',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['Avocados', 'Lime', 'Onion', 'Cilantro'],
    instructions: ['Mash avocados', 'Mix in other ingredients']
  },
  {
    id: '2',
    title: 'Margarita',
    category: 'Drink',
    country: 'Mexico',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['Tequila', 'Lime juice', 'Agave syrup'],
    instructions: ['Shake with ice', 'Strain into glass']
  },
  {
    id: '3',
    title: 'Pad Thai',
    category: 'Entree',
    country: 'Thailand',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    labels: ['Gluten-Free'],
    ingredients: ['Rice noodles', 'Shrimp', 'Peanuts', 'Bean sprouts'],
    instructions: ['Soak noodles', 'Stir fry everything']
  },
  {
    id: '4',
    title: 'Tiramisu',
    category: 'Dessert',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegetarian'],
    ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa'],
    instructions: ['Layer ingredients', 'Refrigerate']
  }
];
