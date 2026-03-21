import React from 'react';
import { Recipe } from '../types';

interface Props {
  recipe: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div className="recipe-card">
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
        <div className="recipe-details">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
