import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContext {
    theme: ThemeMode;
    setTheme: (t: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContext>({
    theme: "light",
    setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
