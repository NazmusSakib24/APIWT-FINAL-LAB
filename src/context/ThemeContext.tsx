import { createContext, useEffect, useState } from "react"

interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}