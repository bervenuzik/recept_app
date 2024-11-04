import { useState , useEffect } from "react"
import styles from "./CategoryPage.module.css"
import { CircularProgress, Typography } from "@mui/material"
import fetchCategoriesByName from "../../functions/fetchCategoriesByName.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"
import { useParams } from "react-router-dom"
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow.jsx";
 
function CategoryPage(){
    const {categoryName} = useParams()
    const [drinks , setDrinks] = useState([])
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        if(categoryName){
            fetchCategoriesByName(categoryName, (data) => {
                console.log(data);
                setDrinks(data)
                setLoading(false);
            })
        }
    }, [categoryName])
 
    
    return (
        <div className={styles.home}>
            <Typography variant="h2">
                {categoryName}
            </Typography>
            {loading && <CircularProgress />}
            {(!loading && drinks) && <CardsGrid drinks={drinks}/>}
            <ScrollToTopArrow /> 
        </div>
    )
 
}
 
export default CategoryPage