import { useEffect, useRef , useCallback} from "react";
import styles from "./ModalDetails.module.css";
import { Button } from "@mui/material";
import { createPortal } from "react-dom";
import classNames from "classnames";
export default function ModalDetails({ open,onClose, children }) {
  const modal = useRef();
  const backdrop = useRef();

  const onWheel = useCallback((event) => {
    if (event.target === modal.current || modal.current.contains(event.target)) {
      const modalContent = modal.current;
      const scrollTop = modalContent.scrollTop;
      const scrollHeight = modalContent.scrollHeight;
      const clientHeight = modalContent.clientHeight;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }, []);

  const toOpen = useCallback(function toOpen() {
    document.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("touchmove", onWheel, { passive: false });
    modal.current.showModal();
  }, [onWheel])

  const toClose = useCallback(function toClose() {
    document.removeEventListener("wheel", onWheel);
    document.removeEventListener("touchmove", onWheel);
    modal.current.close();
  }, [onWheel])


  useEffect(() => {
    open ? toOpen() : toClose();
    return () => {
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("touchmove", onWheel);
      
    };
  }, [open , toOpen , toClose]);


  const backdropStyles = classNames({
    [`${styles.backdrop__visible}`]: open,
    [`${styles.backdrop}`]: true,
  });

  return <>
      <div ref={backdrop} className={backdropStyles}></div>
      <dialog ref={modal} className={styles.window}>
        <span className={styles.closeBtn}>
          <Button onClick={onClose}>Close</Button>
        </span>
        {children}
      </dialog>
    </>;
}
