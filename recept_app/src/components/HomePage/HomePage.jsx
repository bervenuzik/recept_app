import { useState , useEffect } from "react"
import styles from "./HomePage.module.css"
import { CircularProgress } from "@mui/material"
import doFetch from "../../functions/fetchData.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"

function HomePage(){
    const [drinks , setDrinks] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        doFetch("https://recept2-siden.reky.se/recipes" , (data) => {
            setDrinks(data)
            setLoading(false);
        })
    }, [])

    

    return (
        <div className={styles.home}>
            {loading && <CircularProgress />}
            {(!loading && drinks) && <CardsGrid drinks={drinks}/>}
        </div>
    )

}

export default HomePage