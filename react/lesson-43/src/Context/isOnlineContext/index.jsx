import { createContext, useState } from "react";

export const IsOnlineContext = createContext()

export const IsOnlineContextProvider = ({children}) => {
    const [online,setOnline] = useState(false)
    const handleClick = () => {
        setOnline((pre) => !pre)
    }
    return (
        <IsOnlineContext.Provider value={[online,handleClick]}>
            {children}
        </IsOnlineContext.Provider>
    )
}