import { createContext } from "react";

const Context = createContext({})


const contextValue = {}

export function AppContext ({children}){

    <Context.Provider  value={contextValue}>
        {children}
    </Context.Provider>
}


export default Context;