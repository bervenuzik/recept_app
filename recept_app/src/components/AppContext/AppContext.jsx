import { createContext, useCallback, useState } from "react";
import LOCAL_STORAGE_COOKIES_KEY from "../Cookies/Variables/Variables"

const Context = createContext({
    isCookiesAccepted:Boolean,
    drinks:[],
    setDrinks:()=>{},
    acceptCookies:()=>{},
    resetCookies:()=>{},
    rejectCookies:()=>{}
})




export function AppContext ({children}){
    const [drinks , setDrinks] = useState([]);
    const [isCookiesAccepted , setIsCookiesAccepted] = useState(false);

    const acceptCookies = useCallback(()=>{
        setIsCookiesAccepted(()=> {return true});
        localStorage.setItem(LOCAL_STORAGE_COOKIES_KEY , true);
    },[])
    const rejectCookies = useCallback(()=>{
        setIsCookiesAccepted(()=> {return false});
        localStorage.setItem(LOCAL_STORAGE_COOKIES_KEY , false);
    },[])



    const resetCookies = useCallback(()=>{
        localStorage.setItem(LOCAL_STORAGE_COOKIES_KEY , "deleted");
        setIsCookiesAccepted(()=> {return false});
    },[])

    const contextValue = {
        isCookiesAccepted,
        drinks,
        setDrinks,
        acceptCookies,
        resetCookies,
        rejectCookies
    }
   
    return (
            <Context.Provider  value={contextValue}>
                {children}
            </Context.Provider>
    )
}


export default Context;