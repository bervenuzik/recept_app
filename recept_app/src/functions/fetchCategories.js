function fetchCategories(callback){
    fetch(`https://recept2-siden.reky.se/categories`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            callback(data)
        })
        .catch((err)=>{
            console.error('Error fetching Categories:', err);
        })
}

export default fetchCategories;