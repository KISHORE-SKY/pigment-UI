import { createContext, useContext, useEffect, useState } from "react";

const themeContext=createContext();

function ThemeContainer({children}) {
    const [isDarkMode,setIsDarkMode]=useState(()=>{
        const savedTheme=localStorage.getItem('theme');
        return savedTheme ? savedTheme==='dark' : window.matchMedia("(prefers-color-scheme: dark)").matches;
    })

    useEffect(()=>{
        const root = window.document.documentElement;
        if(isDarkMode){
            root.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
        else{
            root.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
    },[isDarkMode])

    const toggleTheme=()=>setIsDarkMode(!isDarkMode);
    return(
        <>
            <themeContext.Provider value={{isDarkMode,toggleTheme}}>
                {children}
            </themeContext.Provider>
        </>
    );
}

export default ThemeContainer;
export const useTheme=()=> useContext(themeContext);
