import {useState} from "react";

import styles from "./DrinkCard.module.css";
import StarsIcon from "@mui/icons-material/Stars";
import Label from "./Label/Label";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DetailedWindow from "./DetailedWindow/DetailedWindow";
import { Backdrop, Button } from "@mui/material";

function DrinkCard({
  id,
  title,
  imageUrl,
  description,
  avgRating,
  timeInMins,
}) {
  const [detailedMode , setDetailedMode] = useState(false);

  function showDetailedWindow(){
    setDetailedMode((prev)=>!prev)
  }
  return (
    <div className={styles.card}>
      {avgRating && (
        <Label
          className={styles.rating}
          Icon={StarsIcon}
          text={avgRating}
          imgUrl={imageUrl}
        />
      )}
      {timeInMins && (
        <Label
          className={styles.time}
          Icon={AccessTimeIcon}
          text={timeInMins}
          imgUrl={imageUrl}
        />
      )}
      <img  src={imageUrl} alt={`${title}_image`} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
        <Button onClick={showDetailedWindow} variant="text" className={styles.btn}>Show More</Button>
        
      <DetailedWindow onClose={showDetailedWindow} open={detailedMode}/>
    </div>
  );
}

export default DrinkCard;
