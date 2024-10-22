export default async function sendComment(comment , name , recipeID , sucssesCallback , errorCallback){
    try{
    const response = await fetch(`https://recept2-siden.reky.se/recipes/${recipeID}/comments` , {
        method:"POST",
        body:JSON.stringify({
                "comment": comment,
                "name": name,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    if(response.ok){
        sucssesCallback()
        return true
    }else{
        errorCallback("Comment is NOT added, try again");
        return false;
    }
}catch{
        errorCallback("Oppps, check yor internet connection");
        return false
}
}