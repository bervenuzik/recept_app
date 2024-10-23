import React, { useState, useEffect } from 'react';
import Header from './Header';
import fetchAllRecipes from '../functions/fetchAllRecipes';

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllRecipes((data) => {
      setRecipes(data);
      console.log('Recipes fetched:', data);
    });
  }, []);

  
  const filteredRecipes = recipes.filter((recipe) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const titleMatch = recipe.title.toLowerCase().includes(lowerCaseSearchTerm);
    const ingredientMatch = recipe.ingredients.some(ingredient =>
      ingredient.name.toLowerCase().includes(lowerCaseSearchTerm)
    );

    return titleMatch || ingredientMatch;
  });

  return (
    <div>
      <Header onSearchChange={setSearchTerm} /> 

      <div className="recipe-container">
        {filteredRecipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.map(ing => ing.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
