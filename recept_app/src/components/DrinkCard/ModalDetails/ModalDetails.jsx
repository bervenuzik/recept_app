import { useEffect, useRef , useCallback} from "react";
import styles from "./ModalDetails.module.css";
import { Button } from "@mui/material";
import { createPortal } from "react-dom";
import classNames from "classnames";
export default function ModalDetails({ open,onClose, children }) {
  const modal = useRef();
  const backdrop = useRef();
  //const prevScrolltop = useRef(0);

  const onWheel = (event) => {
    if (event.target === modal.current || modal.current.contains(event.target)) return;
    event.preventDefault();
  };

  const toOpen = useCallback(function toOpen() {
    document.addEventListener("wheel", onWheel, { passive: false });
    modal.current.showModal();
  }, [])

  const toClose = useCallback(function toClose() {
    document.removeEventListener("wheel", onWheel);
    modal.current.close();
  }, [])


  useEffect(() => {
    open ? toOpen() : toClose();
    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, [open , toOpen , toClose]);


  const backdropStyles = classNames({
    [`${styles.backdrop__visible}`]: open,
    [`${styles.backdrop}`]: true,
  });

  return createPortal(
    <>
      <div ref={backdrop} className={backdropStyles}></div>
      <dialog ref={modal} className={styles.window}>
        <div className={styles.closeBtn}>
          <Button onClick={onClose}>Close</Button>
        </div>
        <h1 className={styles.test}></h1>
        {children}
      </dialog>
    </>,
    document.getElementById("root")
  );
}
