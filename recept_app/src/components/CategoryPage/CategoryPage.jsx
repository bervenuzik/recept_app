import { useState , useEffect, useContext } from "react"
import styles from "./CategoryPage.module.css"
import { CircularProgress } from "@mui/material"
import fetchCategoriesByName from "../../functions/fetchCategoriesByName.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"
import Context from "../AppContext/AppContext.jsx"
import { useParams } from "react-router-dom"
 
function CategoryPage(){
    const {categoryName} = useParams()
    const [drink , setDrink] = useState([])
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        if(categoryName){
            fetchCategoriesByName(categoryName, (data) => {
                console.log(data);
                setDrink(data)
                setLoading(false);
            })
        }
    }, [categoryName])
 
    
    return (
        <div className={styles.home}>
            {loading && <CircularProgress />}
            {(!loading && drink) && <CardsGrid drink={drink}/>}
        </div>
    )
 
}
 
export default CategoryPage