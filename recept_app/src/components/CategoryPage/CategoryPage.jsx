import { useState , useEffect } from "react"
import styles from "./CategoryPage.module.css"
import { CircularProgress } from "@mui/material"
import fetchCategoriesByName from "../../functions/fetchRecipesByCategoryName.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"
import { useParams } from "react-router-dom"
 
function CategoryPage(){
    const {categoryName} = useParams()
    const [drinks , setDrinks] = useState([])
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        if(categoryName){
            fetchCategoriesByName(categoryName, (data) => {
                setDrinks(data)
                setLoading(false);
            })
        }
    }, [categoryName])
 
    
    return (
        <div className={styles.home}>
            {loading && <CircularProgress />}
            {(!loading && drinks) && <CardsGrid drinks={drinks}/>}
        </div>
    )
 
}
 
export default CategoryPage