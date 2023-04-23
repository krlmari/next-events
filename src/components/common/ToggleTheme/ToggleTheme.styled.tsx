import {
    allBreakpointValue,
    color,
    font,
    mediaBreakpointDown,
    mediaBreakpointUp,
} from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${color("gray")};
    border-radius: 16px;

    ${mediaBreakpointUp("md")} {
        flex-direction: column;
    }

    ${allBreakpointValue("min-height", 101, 64, 57, 38)};
    ${allBreakpointValue("padding", 20, 12, 12, 12)};
`;

export const ToggleThemeTitle = styled.p`
    color: ${color("blue")};

    ${font("text-2")};
    ${allBreakpointValue("margin-bottom", 10, 7, 7)};
`;

export const ToggleThemeWrapper = styled.div`
    display: flex;
    align-items: center;

    & > p {
        color: ${({ theme }) => theme.mode === "dark" && "black"};
        user-select: none;
        ${font("text-l")};
        ${allBreakpointValue("margin-right", 20, 12, 12, 12)};
    }
`;

export const Input = styled.input`
    position: relative;
    appearance: none;
    border: 2px solid rgba(35, 35, 35, 0.2);
    border-radius: 370px;
    cursor: pointer;

    ${allBreakpointValue("width", 54, 34, 26, 26)};
    ${allBreakpointValue("height", 28, 18, 14, 14)};

    &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 2px;
        background: ${color("blue")};
        border-radius: 50%;
        transform: translate(0%, -50%);
        transition: left 0.3s linear;

        ${allBreakpointValue("width", 21, 14, 10, 10)};
        ${allBreakpointValue("height", 21, 14, 10, 10)};

        ${mediaBreakpointDown("xs")} {
            left: 0;
        }
    }

    &:checked::after {
        left: 50%;
    }
`;
