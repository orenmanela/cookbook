import React from 'react';
import type { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<Props> = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <div className="recipe-header">
          <h3 className="recipe-title">{recipe.title}</h3>
          <span className="recipe-country">{recipe.country}</span>
        </div>
        <div className="recipe-labels">
          {recipe.labels.map(label => (
            <span key={label} className={`label ${label.toLowerCase().replace(' ', '-')}`}>
              {label}
            </span>
          ))}
        </div>
        <p className="click-hint">Click for instructions</p>
      </div>
    </div>
  );
};
