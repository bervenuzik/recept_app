import { Button, Snackbar, TextField } from "@mui/material";
import styles from "./Subscribe.module.css"
import useInput from "../../Hooks/useInput";
import { useCallback, useContext, useState } from "react";
import useError from "../../Hooks/useError";
import Context from "../AppContext/AppContext"
const LOCAL_STORAGE_SUBSCRIPTION_EMAIL_KEY = "subscription_email";

function Subscribe() {
    const [email , onEmailChange , resetEmail , validateEmail] =  useInput(emailValidator)
    const [error, setErrorMessage , resetError] = useError();
    const [isSubscribed , setIsSubscribed] = useState(false);
    const {isCookiesAccepted} = useContext(Context);
    const emailLS = localStorage.getItem(LOCAL_STORAGE_SUBSCRIPTION_EMAIL_KEY);

    const emailValidator = useCallback((email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },[])

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

    if(emailLS)setIsSubscribed(true); 

    return ( <div>
        <p>Subscribe on our News</p>
        <TextField
        onChange={(event) => {
          onEmailChange(event.target.value);
        }}
        value={email.value}
        required
        id="outlined-required"
        label="Email"
        fullWidth
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