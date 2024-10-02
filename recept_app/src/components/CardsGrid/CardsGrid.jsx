import styles from "./CardsGrid.module.css"
import DrinkCard from "../DrinkCard/DrinkCard";

function CardsGrid({drinks}){

    return(
        <div className={styles.cardGrid}>
            {drinks.map((drink , index) => {
                return <DrinkCard 
                key={index}
                id={drink.id}
                {...drink}
                />;
            })}
        </div>
    )
}


export default CardsGrid