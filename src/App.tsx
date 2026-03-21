import { useState } from 'react'
import { recipes } from './data/recipes'
import { RecipeCard } from './components/RecipeCard'
import type { Category, Recipe } from './types'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

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
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={(r) => setSelectedRecipe(r)}
          />
        ))}
      </main>

      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>×</button>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="modal-image" />
            <div className="modal-body">
              <div className="modal-header">
                <h2>{selectedRecipe.title}</h2>
                <span className="modal-country">{selectedRecipe.country}</span>
              </div>
              
              <div className="recipe-labels">
                {selectedRecipe.labels.map(label => (
                  <span key={label} className={`label ${label.toLowerCase().replace(' ', '-')}`}>
                    {label}
                  </span>
                ))}
              </div>

              <section>
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </section>

              <section>
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
