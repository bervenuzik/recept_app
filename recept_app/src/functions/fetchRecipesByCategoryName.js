function fetchRecipesByCategoryName(categoryName , callback){
    fetch(`https://recept2-siden.reky.se/categories/${categoryName}/recipes`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            callback(data)
        })
        .catch((err)=>{
            console.error(`Error fetching ${categoryName} recipes:`, err);
        })
}

export default fetchRecipesByCategoryName;