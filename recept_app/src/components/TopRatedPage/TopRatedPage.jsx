import { useState , useEffect, useContext } from "react"
import styles from "./TopRatedPage.module.css"
import { CircularProgress } from "@mui/material"
import doFetch from "../../functions/fetchData.js"
import CardsGrid from "../CardsGrid/CardsGrid.jsx"
import Context from "../AppContext/AppContext.jsx"

function TopRated(){
    const [loading, setLoading] = useState(true);
    const { setDrinks, drinks } = useContext(Context);
  
    useEffect(() => {
        doFetch("https://recept2-siden.reky.se/recipes", (data) => {
          const topRatedDrinks = getTopRatedDrinksByCategory(data);
          setDrinks(topRatedDrinks);
          setLoading(false);
        });
      }, []);
    
      const getTopRatedDrinksByCategory = (drinks) => {
        const categories = drinks.reduce((acc, drink) => {
          const category = drink.categories[0]; 
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(drink);
          return acc;
        }, {});
    
        const topRatedDrinks = Object.keys(categories).map((category) => {
          return categories[category].reduce((topDrink, currentDrink) =>
            currentDrink.avgRating > topDrink.avgRating ? currentDrink : topDrink
          );
        });
    
        return topRatedDrinks;
      };
    
      return (
        <div className={styles.home}>
          {loading && <CircularProgress />}
          {!loading && drinks && <CardsGrid drinks={drinks} />}
        </div>
    );
}
    
export default TopRated;