import styles from "./DrinkCard.module.css"
import StarsIcon from '@mui/icons-material/Stars';

function DrinkCard({id ,title , imageUrl ,description, avgRating}){
    return (
        <div className={styles.card}>
            <img  src={imageUrl} alt={title+"_image"}></img>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {avgRating && 
            <span className={styles.rating}>
                <StarsIcon/>
                {avgRating}
            </span>
            }
            <a className={styles.link} href={"/drink/"+id}>
                <button className={styles.btn}>Show More</button>
            </a>
        </div>
    )
    /* hej */

}

export default DrinkCard