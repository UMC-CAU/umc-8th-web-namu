import { createContext, PropsWithChildren, useContext, useState } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

type TTheme = Theme.LIGHT | Theme.DARK

interface IThemeContext {
    theme: TTheme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext|undefined>(undefined)

export const ThemeProvider = ({children}:PropsWithChildren) => {
    const [theme,setTheme] = useState<TTheme>(Theme.LIGHT)
    const toggleTheme = () => {
        setTheme((prevTheme)=> prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context 
}