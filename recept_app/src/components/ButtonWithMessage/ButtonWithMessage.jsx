import { useState } from "react";
import styles from "./ButtonWithMessage.module.css";
import { Button, Snackbar } from "@mui/material";


export default function ButtonWithMessage({msgText , Icon,children , onClick}) {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(true);
      onClick();
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleClick}>
            <span className={styles.button}>   
                <p>{children}</p>
                {Icon && Icon}
            </span>
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={msgText}
        />
      </div>
    );
  }