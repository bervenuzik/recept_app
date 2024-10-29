import { useEffect, useState } from "react";
import LOCAL_STORAGE_KEY from "../Variables/favoritesKey.js"
import CardsGrid from "../../CardsGrid/CardsGrid.jsx";
import styles from "./FavoritePage.module.css"

function FavoritePage() {
    const [favorites , setFavorites] = useState([]);

    useEffect(() => {
        const updateFavorites = () => {
          const favoritesLS = localStorage.getItem(LOCAL_STORAGE_KEY);
          setFavorites(favoritesLS ? JSON.parse(favoritesLS) : []);
        };
        updateFavorites();
        window.addEventListener("storageChanged", updateFavorites);
    
        return () => {
          window.removeEventListener("storageChanged", updateFavorites);
        };
      }, []);

    return ( 
    <div className={styles.favoritePage}>
        
        {favorites.length == 0 && <h1>Your favorites list is empty</h1>}
        {favorites.length > 0 && <div>
                        <h3>Your favorite coctailes </h3>
                        <CardsGrid drinks={favorites}/>
                    </div>
        }   
        
    </div> 
    );
}

export default FavoritePage;