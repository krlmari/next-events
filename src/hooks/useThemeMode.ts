import { ThemeMode, useThemeContext } from "@/context/ThemeContext";
import { useEffect } from "react";

export const useThemeMode = () => {
    const themeCtx = useThemeContext();

    const setMode = (mode: ThemeMode) => {
        window.localStorage.setItem("theme", mode);
        themeCtx.setTheme(mode);
    };

    const toggleTheme = () => {
        setMode(themeCtx.theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        if (localTheme) {
            setMode(localTheme as ThemeMode);
        }
    }, []);

    return { theme: themeCtx.theme, toggleTheme };
};
