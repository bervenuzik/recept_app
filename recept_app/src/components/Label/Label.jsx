
import styles from "./Label.module.css";


export default function Label({ Icon, children , ...props }) {


  return (
    <span {...props}> 
      <div  className={styles.label}>
        <Icon className={styles.icon}/>
        <span className={styles.text}>{children}</span>
      </div>
    </span>
  );
}
