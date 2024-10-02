
import styles from "./Label.module.css";
import classNames from 'classnames';

export default function Label({ Icon, text ,isDarkBg, ...props }) {

const classes = classNames(styles.label , {
    [styles.inversed]: isDarkBg,
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
