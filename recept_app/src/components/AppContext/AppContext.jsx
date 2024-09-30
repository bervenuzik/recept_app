import { createContext, useState } from "react";

const Context = createContext({
    drinks:[],
    setDrinks:()=>{},
})




export function AppContext ({children}){
    const [drinks , setDrinks] = useState([]);
    const contextValue = {
        drinks,
        setDrinks,
    }


    return (
            <Context.Provider  value={contextValue}>
                {children}
            </Context.Provider>
    )
}


export default Context;