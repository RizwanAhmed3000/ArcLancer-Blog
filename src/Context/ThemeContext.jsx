"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext()
const getfromLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        return value || "dark"
    }
}


export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getfromLocalStorage()
    });

    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>

}