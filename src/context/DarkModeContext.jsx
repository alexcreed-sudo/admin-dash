import { createContext,useContext,useState,useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(() => {const stored = localStorage.getItem('darkMode'); if (stored!== null) return stored === "true";return window.matchMedia("(prefers-color-scheme:dark)").matches;});

    useEffect(() => {
        const root = document.documentElement;
        if(darkMode) {
            root.classList.add("dark");
        }else{
            root.classList.remove("dark");
        }
        localStorage.setItem("darkMode",darkMode);
    }, [darkMode]);
    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext);
