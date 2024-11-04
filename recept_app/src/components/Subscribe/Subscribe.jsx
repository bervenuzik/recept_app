import { Button, Paper, Snackbar, TextField } from "@mui/material";
import styles from "./Subscribe.module.css"
import useInput from "../../Hooks/useInput";
import { useCallback, useContext, useState } from "react";
import useError from "../../Hooks/useError";
import Context from "../AppContext/AppContext"
const LOCAL_STORAGE_SUBSCRIPTION_EMAIL_KEY = "subscription_email";

function Subscribe() {

    const emailValidator = useCallback((email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },[])

    const [email , onEmailChange , resetEmail , validateEmail] =  useInput(emailValidator)
    const [error, setErrorMessage , resetError] = useError();
    const [isSubscribed , setIsSubscribed] = useState(false);
    const {isCookiesAccepted} = useContext(Context);
    const emailLS = localStorage.getItem(LOCAL_STORAGE_SUBSCRIPTION_EMAIL_KEY);

    

    function onSubscribe(){
        if(!isCookiesAccepted){
            setErrorMessage("Du måste acceptera cookies först");
            return;
        }
        validateEmail();
        if(!email.isValid) {
            setErrorMessage("Fel email format, försök igen")
            return;
        }
        localStorage.setItem(LOCAL_STORAGE_SUBSCRIPTION_EMAIL_KEY , email);
        setIsSubscribed(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        resetError();
    }

    if(emailLS || isSubscribed) return <p className={styles.subscription}>You are subscribed on our news</p> 

    return ( <div className={styles.subscription}>
       
        <p>Subscribe on our News</p>
        <TextField
        onChange={(event) => {
          onEmailChange(event.target.value.trim());
        }}
        value={email.value}
        required
        placeholder="Youremail@mail.com"
        id="outlined-required"
        label="Email"
        margin="dense" 
        error={email.showError}
        />
        <Button onClick={onSubscribe}>Subscribe</Button>
        <Snackbar
         open={error.status}
         autoHideDuration={4000}
         onClose={handleClose}
         message={error.message}
      />
      
    </div> );
}

export default Subscribe;