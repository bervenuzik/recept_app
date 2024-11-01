import { Button } from "@mui/material";
import styles from "./Cookies.module.css"
import { useContext, useEffect } from "react";
import Context from "../AppContext/AppContext"
import LOCAL_STORAGE_COOKIES_KEY from "./Variables/Variables"

function Cookies () {
    const {isCookiesAccepted , acceptCookies ,rejectCookies,resetCookies} = useContext(Context);
    const btnStyles = { color: 'white' , margin:"0 15px", border:"1px solid white" }
    const isAcceptetLS = localStorage.getItem(LOCAL_STORAGE_COOKIES_KEY);
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === LOCAL_STORAGE_COOKIES_KEY && event.newValue === null) {
                resetCookies();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    if(isCookiesAccepted || isAcceptetLS == "true") return null;

    return ( <div className={styles.cookies}>
        <div className={styles.wrapper}>
            <span><p>Kan vi använda cookies?</p></span>
            <Button onClick={acceptCookies} sx={btnStyles}>Acceptera alla</Button>
            <Button onClick={acceptCookies} sx={btnStyles}>Acceptera nödvändiga</Button>
            <Button onClick={rejectCookies}sx={btnStyles}>Nej</Button>
        </div>
    </div> );
}

export default Cookies ;