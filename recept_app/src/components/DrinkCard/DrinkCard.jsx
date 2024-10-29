import {useState} from "react";

import styles from "./DrinkCard.module.css";
import ModalDetails from "../ModalDetails/ModalDetails";
import { Button } from "@mui/material";
import DetailedDrink from "../DetailedDrink/DetaileDrink";
import { useNavigate } from "react-router-dom";
import FavoritsHeart from "../Favorite/FavoriteHeart/FavoritsHeart.jsx";


function DrinkCard({drink}) {
  const [detailedMode , setDetailedMode] = useState(false);
  const {title, imageUrl ,description} = drink;
  const navigate = useNavigate();

  function showDetailedWindow(){
    setDetailedMode((prev)=>!prev)
  }

  const handleRedirect = () => {
    navigate(`/recipe/${drink._id}`);
  };
  return (
    <div  className={styles.card}>
      <img  onClick={handleRedirect} src={imageUrl} alt={`${title}_image`} />
      <div className={styles.info}>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
        <Button onClick={showDetailedWindow} variant="text" className={styles.btn}>Show More</Button>
        <FavoritsHeart className={styles.favorite} drink={drink}/>
        
      <ModalDetails onClose={showDetailedWindow} open={detailedMode}>
        <DetailedDrink drink={drink}></DetailedDrink>
      </ModalDetails>
      </div>
    </div>
  );
}

export default DrinkCard;

//TODO: перенести модальное окно в корень проекта  и поменять логику на useContext