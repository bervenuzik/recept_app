function fetchAllRecipes(callback) {
    fetch('https://recept2-siden.reky.se/recipes')
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map(recipe => ({
          ...recipe,
          ingredients: recipe.ingredients || []
        }));
        
        callback(updatedData);
      })
      .catch((err) => {
        console.error('Error fetching recipes:', err);
      });
  }
  export default fetchAllRecipes;
  