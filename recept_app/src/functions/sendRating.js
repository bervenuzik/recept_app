export default async function sendRating(rating , recipeID , sucssesCallback = ()=>{}){
    let response;
    try{
        response = await fetch(`https://recept2-siden.reky.se/recipes/${recipeID}/ratings` , {
        method:"POST",
        body:JSON.stringify({
                "rating": rating,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })}catch{
        throw new Error("Opssss, check your internet connection");
    }
    if(response.ok){
        sucssesCallback();
    }else{
        throw new Error("Rating is NOT added, try again");
    }
}