import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const UrlBackend = "http://localhost:4000"

    const [aToken, setAToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem("aToken") : false)
    const [dToken, setDToken] = useState(localStorage.getItem("dToken") ? localStorage.getItem("dToken") : false)

    const value = {
        aToken, setAToken,
        dToken,setDToken,
        UrlBackend
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider