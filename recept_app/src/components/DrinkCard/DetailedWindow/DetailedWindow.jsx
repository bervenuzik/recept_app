import { useEffect , useRef } from "react"
import styles from "./DetailedWindow.module.css"
import { Button } from "@mui/material";
export default function DetailedWindow({open , drink , onClose}){
    const window = useRef();
    useEffect(()=>{
        open? toOpen(): toClose();
        return document.removeEventListener('wheel', handleScroll);
    },[open])


    const handleScroll = (event) => {
        if (event.target === document.querySelector(`.${styles.window}::backdrop`)) {
          event.preventDefault();
        }
      };

    function toOpen(){
        window.current.showModal();
        document.getElementById("root").addEventListener('wheel', handleScroll, { passive: false });
    }
    function toClose(){
        window.current.close()
        document.getElementById("root").removeEventListener('wheel', handleScroll);
    }

    return(
        <dialog ref={window} className={styles.window}>
            <span className={styles.closeBtn} >
                <Button onClick={onClose}>Close</Button>
            </span>
            <h1 className={styles.test}>text</h1>
        </dialog>
    )
}