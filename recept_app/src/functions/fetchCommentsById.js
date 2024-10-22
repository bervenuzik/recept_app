export default async function fetchCommentsByID(id, errorCallback = ()=>{}){
    try{
    const response = await fetch(`https://recept2-siden.reky.se/recipes/${id}/comments`);
    if(!response.ok) errorCallback("failed to get Coments")
    return response.json();
    }catch(error){
        errorCallback(error)
    }
}