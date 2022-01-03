import React, {ReactElement, useState} from "react";

type ThemeType = {
    color: string,
    background: string
};
export const themes = {
    dark: {
        color: 'white',
        background: '#262626',
    } as ThemeType,
    light: {
        color: '#020247',
        background: 'white',
    } as ThemeType
}
type PointMenuType = 'Home' | 'About me' | 'Skills' | 'Portfolio' | 'Contact'


type ThemeContextType = {
    theme: ThemeType,
    toggleThemeApp: () => void,
    currentPoint:PointMenuType,
    setActivePointOfMenu:(point: PointMenuType) => void
}

export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({children}: { children: ReactElement }) => {

    const [theme, setTheme] = useState<ThemeType>(themes.light);
    const [currentPoint, setCurrentPoint] = useState<PointMenuType>('Home');

    const toggleThemeApp = () => {
        theme === themes.dark
            ? setTheme(themes.light)
            : setTheme(themes.dark)
    }

    const setActivePointOfMenu = (point: PointMenuType) => {
        setCurrentPoint(point)
    }

    const value: ThemeContextType = {theme,currentPoint, toggleThemeApp, setActivePointOfMenu}


    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>

}
