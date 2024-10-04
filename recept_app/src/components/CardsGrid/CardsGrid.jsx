import styles from "./CardsGrid.module.css"
import DrinkCard from "../DrinkCard/DrinkCard";


function CardsGrid({drinks}){

    return(
        <>
        <div className={styles.cardGrid}>
            {drinks.map((drink) => {
                return <DrinkCard 
                key={drink._id}
                drink={drink}
                />;
            })}
        </div>
        </>
    )
}


export default CardsGrid