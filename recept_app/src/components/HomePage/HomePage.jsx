import { useState , useEffect, useContext } from "react"
import styles from "./HomePage.module.css"
import { CircularProgress } from "@mui/material"
import doFetch from "../../functions/fetchData.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"
import Context from "../AppContext/AppContext.jsx"
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow.jsx";
 
function HomePage(){
    const [loading, setLoading] = useState(true);
    const {setDrinks , drinks} = useContext(Context)
    useEffect(()=>{
        doFetch("https://recept2-siden.reky.se/recipes" , (data) => {
            setDrinks(data)
            setLoading(false);
        })
    }, [])
 
    
    return (
        <div className={styles.home}>
            {loading && <CircularProgress size={"150px"} />}
            {(!loading && drinks) && <CardsGrid drinks={drinks}/>}
            <ScrollToTopArrow /> 
        </div>
    )
 
}
 
export default HomePage