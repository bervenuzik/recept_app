
import styles from "./Label.module.css";
import classNames from 'classnames';
import { useState  , useEffect  } from "react";
import useColorThief from "use-color-thief";

export default function Label({ Icon, text ,imgUrl, ...props }) {
  const [isDark, setIsDark] = useState(false)
  const { color: imageColor } = useColorThief(imgUrl, {
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

  useEffect(() => {
    setIsDark(getIsBackgroundDark())
  }, [imageColor]);


const classes = classNames(styles.label , {
    [styles.inversed]: isDark,
})

  return (
    <span {...props}>
      <div className={classes}>
        <Icon className={styles.icon}/>
        <span className={styles.text}>{text}</span>
      </div>
    </span>
  );
}
