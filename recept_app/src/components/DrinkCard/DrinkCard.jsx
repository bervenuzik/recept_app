import { useEffect} from "react";
import useColorThief from "use-color-thief";
import styles from "./DrinkCard.module.css";
import StarsIcon from "@mui/icons-material/Stars";
import Label from "./Label/Label";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function DrinkCard({
  id,
  title,
  imageUrl,
  description,
  avgRating,
  timeInMins,
}) {

  const { color: imageColor } = useColorThief(imageUrl, {
    format: "rgb",
    colorCount: 10,
    quality: 10,
  });
  function getIsBackgroundDark(){
    if(!imageColor) return false;
    const brightness = Math.round(
      (imageColor[0] * 299 + imageColor[1] * 587 + imageColor[2] * 114) / 1000
    );
    if (brightness <= 128) {
      return true
    }
    return false;
  }
  
  const isBackgroundDark = getIsBackgroundDark();

  useEffect(() => {
    console.log(imageColor);
  }, [imageColor]);

  return (
    <div className={styles.card}>
      {avgRating && (
        <Label
          className={styles.rating}
          Icon={StarsIcon}
          text={avgRating}
          isDarkBg={isBackgroundDark}
        />
      )}
      {timeInMins && (
        <Label
          className={styles.time}
          Icon={AccessTimeIcon}
          text={timeInMins}
          isDarkBg={isBackgroundDark}
        />
      )}
      <img  src={imageUrl} alt={`${title}_image`} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a className={styles.link} href={`/drink/${id}`}>
        <button className={styles.btn}>Show More</button>
      </a>
    </div>
  );
}

export default DrinkCard;
