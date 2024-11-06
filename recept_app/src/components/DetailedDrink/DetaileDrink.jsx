import { useRef } from "react";
import styles from "./DetaileDrink.module.css";
import CategoryButton from "../CategoryButton/CategoryButton.jsx";
import StarsIcon from "@mui/icons-material/Stars";
import PaidIcon from '@mui/icons-material/Paid';
import ShareIcon from '@mui/icons-material/Share';
import WebIcon from '@mui/icons-material/Web';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IngredientsTable from "../IngredientsTable/IngredientsTable.jsx";
import Label from "../Label/Label.jsx";
import CheckList from "../Instructions/CheckList.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DrinkComments from "../DrinkComments/DrinkComments.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";
import ButtonWithMessage from "../ButtonWithMessage/ButtonWithMessage.jsx"
import RatingStars from "../RatingStars/RatingStars.jsx";
import BackHandIcon from '@mui/icons-material/BackHand';
import useColorThief from "use-color-thief";


export default function DetailedDrink({ drink, ...props }) {
  const {
    _id,
    title,
    description,
    imageUrl,
    timeInMins,
    price,
    categories,
    instructions,
    ingredients,
    avgRating,
  } = drink;

  const { color } = useColorThief(imageUrl, {
    format: 'hex',
    colorCount: 1,
    quality: 20,
  });

  if(color) console.log(color)

  function isImageLight(color) {
    // Формула для расчета яркости цвета
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    // Пороговое значение для определения светлого цвета
    return brightness > 128;
  }

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipe/${_id}`);
  };

  const handleRedirectToCategoryPage = (category)=>{
    navigate(`/categories/${category}`);
  }
  
  const PROTOCOL = location.protocol
  const HOSTNAME = location.hostname;
  const PORT = location.port ? (":"+location.port) : ""
  const LINK = PROTOCOL + "//" + HOSTNAME + PORT + "/recipe/" + _id;


  function copyProductlinkToBuffer(){
    navigator.clipboard.writeText(LINK);
  }

  const getDifficulty = (numIngredients) => {
    if (numIngredients <= 3) return "Enkel";
    if (numIngredients <= 6) return "Medium";
    return "Svår";
  };

  const difficulty = getDifficulty(ingredients.length);


  return (
    <span {...props}>
      <section className={styles.detailedDrink}>
        <span className={styles.labels}>
        {price &&  <Label Icon={PaidIcon}>{price}</Label>}
          {timeInMins && <Label Icon={AccessTimeIcon}>{timeInMins}</Label>}
          {avgRating &&  <Label Icon={StarsIcon}>{Number.parseFloat(avgRating).toFixed(1)}</Label>}
          {difficulty && <Label Icon={BackHandIcon}>{difficulty}</Label>}
        </span>
        <h1>{title}</h1>
        {/* <Difficulty ingredients={ingredients}/> */}
        <div className={styles.categories}>
          <h5>Kategori</h5>
          <div className={styles.cactegories__list}>
            {categories.map((category, index) => {
              return (
                <CategoryButton onClick={()=>handleRedirectToCategoryPage(category)} key={index}>
                  {category}
                </CategoryButton>
              );
            })}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </section>
      <section className={styles.ingridients}>
        <div className={styles.ingridients_image_container}>
        <img className={styles.ingridients__image} src={imageUrl}/>
        </div> 
        <div className={styles.ingredients__table}>
          <IngredientsTable
            ingredients={ingredients}
            id={_id}
          ></IngredientsTable>
        </div>
      </section>
      <section className={styles.instructions}>
        <CheckList list={instructions}>Instruktioner</CheckList>
      </section>
      <div className={styles.buttons}>

      <ButtonWithMessage onClick={copyProductlinkToBuffer}  Icon={<ShareIcon/>} msgText={"Länk kopierad"}>
        Dela länk
      </ButtonWithMessage>
          <Button onClick={handleRedirect} endIcon={<WebIcon/>}>Öppna fullständig sida</Button>
      </div>
      <section className={styles.comments}>
      <RatingStars drinkID={_id}/>
      <DrinkComments drinkID={_id}/>
      </section>
    </span>
  );
}
