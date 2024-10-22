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
import ButtonWithMessage from "../ButtonWithMessage/ButtonWithMessage.jsx";
import { useNavigate } from "react-router-dom";
import CommentArea from "../CommentArea/CommentArea.jsx";
import DrinkComments from "../../DrinkComments/DrinkComments.jsx";
import useCommentsList from "../../Hooks/useCommentsList.js";

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

  const {comments , isLoading , refreshComments} = useCommentsList(_id)

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

  const imageStyle = useRef({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  function copyProductlinkToBuffer(){
    navigator.clipboard.writeText(LINK);
  }
  return (
    <span {...props}>
      <section className={styles.detailedDrink}>
        <span className={styles.labels}>
        {price &&  <Label Icon={PaidIcon}>{price}</Label>}
          {timeInMins && <Label Icon={AccessTimeIcon}>{timeInMins}</Label>}
          {avgRating &&  <Label Icon={StarsIcon}>{avgRating}</Label>}
        </span>
        <h1>{title}</h1>
        <div className={styles.categories}>
          <h5>Categories</h5>
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
        <p>{description}</p>
      </section>
      <section className={styles.ingridients}>
        <div
          className={styles.ingridients__image}
          style={imageStyle.current}
        >

        </div>
        <div className={styles.ingredients__table}>
          <IngredientsTable
            ingredients={ingredients}
            id={_id}
          ></IngredientsTable>
        </div>
      </section>
      <section className={styles.instructions}>
        <CheckList list={instructions}>Instructions</CheckList>
      </section>
      <div className={styles.buttons}>

      <ButtonWithMessage onClick={copyProductlinkToBuffer}  Icon={<ShareIcon/>} msgText={"Link is copied"}>
        Share Link
      </ButtonWithMessage>
          <Button onClick={handleRedirect} endIcon={<WebIcon/>}>Open full page</Button>
      </div>
      <section className={styles.comments}>
      <CommentArea
        drinkID={drink._id}
        onComment={refreshComments}
      />
      <DrinkComments comments={comments} isLoading={isLoading}/>
      </section>
    </span>
  );
}
