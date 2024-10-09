function fetchData(id , callback){
    fetch(`https://recept2-siden.reky.se/recipes/${id}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{

            callback(data)
        })
        .catch((err)=>{
            console.error('Error fetching data:', err);
        })
}

export default fetchData;