function fetchData(url , callback){
    fetch(url)
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