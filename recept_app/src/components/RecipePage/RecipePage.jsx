import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material";
import DetailedDrink from "../DetailedDrink/DetaileDrink";
import fetchProductById from "../../functions/fetchProductById.js"
import { useParams } from "react-router-dom";
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow.jsx";



function RecipePage() {
    const {id} = useParams()
    const [drink , setDrink] = useState({})
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        if(id){
            fetchProductById(   id , (data) => {
                setDrink(data)
                setLoading(false);
            })
        }
    }, [id])

    return(
        <>
            {loading && <CircularProgress />}
            {(!loading && drink) && <DetailedDrink drink={drink}/>}
            <ScrollToTopArrow /> 
        </>
    )
}

export default RecipePage