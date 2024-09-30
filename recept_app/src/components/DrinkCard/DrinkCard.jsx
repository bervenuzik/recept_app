import styles from "./DrinkCard.module.css"

function DrinkCard({id ,title , imageUrl ,description, rating}){
    return (
        <div className={styles.card}>
            <img  src={imageUrl} alt={title+"_image"}></img>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.rating}>{description}</p>
            <p className={styles.rating}>{rating}</p>
            <a className={styles.link} href={"/drink/"+id}>
                <button className={styles.btn}>Show More</button>
            </a>
        </div>
    )

}

export default DrinkCard