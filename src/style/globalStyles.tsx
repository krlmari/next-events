import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import { color } from "./mixins";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        font-family: ${variables.fonts.default};
        scrollbar-gutter: stable;
        color: ${color("black")};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;

        transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;

        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
    }

    h1, h2, h3, h4, h5, span, a, p {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }

    input {
        margin: 0;
    }

    button {
        border: transparent;
        outline: transparent;
        padding: 0;

        &, &:active,
        &:focus {
            outline: none;
        }
    }

    .flex {
        display: flex;
    }
`;

export default GlobalStyle;
