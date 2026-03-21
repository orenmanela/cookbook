import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Guacamole',
    category: 'Appetizer',
    country: 'Mexico',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['3 ripe avocados', '1 lime, juiced', '1/2 tsp salt', '1/2 cup diced onion', '3 tbsp chopped fresh cilantro', '2 roma tomatoes, diced', '1 tsp minced garlic'],
    instructions: [
      'In a medium bowl, mash together the avocados, lime juice, and salt.',
      'Mix in onion, cilantro, tomatoes, and garlic.',
      'Stir in cayenne pepper (optional).',
      'Refrigerate 1 hour for best flavor, or serve immediately.'
    ]
  },
  {
    id: '2',
    title: 'Margarita',
    category: 'Drink',
    country: 'Mexico',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['2 oz Tequila', '1 oz Lime juice', '1/2 oz Agave syrup', 'Salt for rim', 'Lime wedge'],
    instructions: [
      'Rim a glass with salt.',
      'Combine tequila, lime juice, and agave in a shaker with ice.',
      'Shake vigorously until chilled.',
      'Strain into the prepared glass over fresh ice.',
      'Garnish with a lime wedge.'
    ]
  },
  {
    id: '3',
    title: 'Pad Thai',
    category: 'Entree',
    country: 'Thailand',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    labels: ['Gluten-Free'],
    ingredients: ['8 oz Rice noodles', '2 tbsp Tamarind paste', '2 tbsp Fish sauce', '1 tbsp Honey', '2 cloves Garlic, minced', '2 Eggs', '1/2 lb Shrimp', 'Bean sprouts', 'Crushed peanuts'],
    instructions: [
      'Soak noodles in warm water for 20 mins until soft.',
      'Whisk tamarind, fish sauce, and honey for the sauce.',
      'Sauté garlic, then add shrimp until pink.',
      'Push shrimp aside, scramble eggs in the pan.',
      'Add noodles and sauce, toss until coated.',
      'Serve topped with bean sprouts, peanuts, and lime.'
    ]
  },
  {
    id: '4',
    title: 'Tiramisu',
    category: 'Dessert',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegetarian'],
    ingredients: ['6 Egg yolks', '3/4 cup Sugar', '2/3 cup Milk', '1 lb Mascarpone cheese', '1 1/4 cups Strong coffee', '1 package Ladyfingers', '1 tsp Cocoa powder'],
    instructions: [
      'Whisk egg yolks and sugar; stir in milk and cook over low heat until slightly thickened.',
      'Let cool, then fold in mascarpone cheese.',
      'Quickly dip ladyfingers in coffee and layer in a dish.',
      'Top with mascarpone mixture.',
      'Repeat layers and dust with cocoa powder.',
      'Refrigerate for at least 6 hours before serving.'
    ]
  },
  {
    id: '5',
    title: 'Falafel',
    category: 'Appetizer',
    country: 'Egypt',
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['1 cup dried chickpeas (soaked overnight)', '1/2 cup Onion', '1/2 cup Parsley', '3 cloves Garlic', '1 tbsp Cumin', 'Salt and Pepper', 'Oil for frying'],
    instructions: [
      'Process chickpeas, onion, parsley, and garlic in a food processor until ground but not pureed.',
      'Stir in spices.',
      'Form into small balls.',
      'Fry in hot oil until golden brown on all sides.',
      'Serve with tahini or in pita bread.'
    ]
  },
  {
    id: '6',
    title: 'Mango Lassi',
    category: 'Drink',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegetarian', 'Gluten-Free'],
    ingredients: ['1 cup Mango pulp', '1 cup Plain yogurt', '1/2 cup Milk', '2 tbsp Sugar', 'Pinch of Cardamom'],
    instructions: [
      'Put all ingredients into a blender.',
      'Blend until smooth and frothy.',
      'Pour into glasses and serve chilled.',
      'Garnish with a sprinkle of cardamom or saffron if desired.'
    ]
  },
  {
    id: '7',
    title: 'Ratatouille',
    category: 'Entree',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d128ad3e?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegan', 'Gluten-Free'],
    ingredients: ['1 Eggplant', '2 Zucchini', '2 Bell peppers', '4 Tomatoes', '3 cloves Garlic', 'Fresh Thyme', 'Olive oil'],
    instructions: [
      'Slice all vegetables into thin rounds.',
      'Sauté garlic and onions in a large skillet.',
      'Arrange sliced veggies in an alternating pattern in a baking dish.',
      'Drizzle with olive oil and sprinkle with thyme and salt.',
      'Cover and bake at 375°F for 40 mins, then 20 mins uncovered.'
    ]
  },
  {
    id: '8',
    title: 'Baklava',
    category: 'Dessert',
    country: 'Turkey',
    image: 'https://images.unsplash.com/photo-1519676867240-f031ee04a113?auto=format&fit=crop&w=800&q=80',
    labels: ['Vegetarian'],
    ingredients: ['1 lb Phyllo dough', '1 lb Walnuts, finely chopped', '1 cup Butter, melted', '1 tsp Cinnamon', '1 cup Water', '1 cup Sugar', '1/2 cup Honey'],
    instructions: [
      'Layer phyllo sheets in a pan, brushing each with melted butter.',
      'After 10 sheets, sprinkle a layer of walnuts mixed with cinnamon.',
      'Repeat until all ingredients are used, ending with 10 sheets of phyllo.',
      'Cut into diamonds and bake at 350°F until golden.',
      'Boil water, sugar, and honey to make syrup, then pour over hot baklava.'
    ]
  }
];
