import React from "react";
import {
    Container,
    ToggleThemeTitle,
    ToggleThemeWrapper,
    Input,
} from "./ToggleTheme.styled";
import { useThemeMode } from "@/hooks/useThemeMode";

interface ToggleThemeProps {
    /* Component props */
}

const ToggleTheme: React.FC<ToggleThemeProps> = () => {
    const { toggleTheme, theme } = useThemeMode();

    return (
        <Container>
            <ToggleThemeTitle>Переключение темы</ToggleThemeTitle>
            <ToggleThemeWrapper>
                <p>{theme === "dark" ? "Тёмная" : "Светлая"}</p>
                <Input
                    type="checkbox"
                    onChange={() => toggleTheme()}
                    checked={theme === "dark"}
                />
            </ToggleThemeWrapper>
        </Container>
    );
};

export default ToggleTheme;
