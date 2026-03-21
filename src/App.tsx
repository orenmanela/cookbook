import { useState } from 'react'
import { recipes } from './data/recipes'
import { RecipeCard } from './components/RecipeCard'
import { Category } from './types'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')

  const categories: (Category | 'All')[] = ['All', 'Drink', 'Dessert', 'Entree', 'Appetizer']

  const filteredRecipes = activeCategory === 'All' 
    ? recipes 
    : recipes.filter(r => r.category === activeCategory)

  return (
    <div className="app">
      <header>
        <h1>Global Cookbook</h1>
        <p>Mobile-first international recipes</p>
      </header>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <main className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
    </div>
  )
}

export default App
