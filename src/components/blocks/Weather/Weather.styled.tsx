import {
    allBreakpointValue,
    color,
    font,
    mediaBreakpointDown,
    vw,
} from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${color("gray")};
    border-radius: 16px;

    color: ${({ theme }) => theme.mode === "dark" && "black"};

    ${font("text-l")};
    ${allBreakpointValue("min-height", 439, 304, 291, 172)};
    ${allBreakpointValue("padding", 20, 12, 12, 12)};

    p::first-letter {
        text-transform: capitalize;
    }
`;

export const WeatherMessages = styled.div`
    margin: auto;
`;

export const WeatherError = styled.p`
    text-align: center;
`;

export const WeatherTitle = styled.div`
    flex-direction: column;
    ${allBreakpointValue("margin-bottom", 60, 40, 40, 28)};

    & > div {
        align-items: center;
        ${allBreakpointValue("margin-bottom", 20, 12, 12, 8)};

        p {
            ${allBreakpointValue("margin-left", 10, 7, 7, 8)};
            color: ${color("blue")};
            ${font("text-2")};
        }

        & > svg {
            ${allBreakpointValue("width", 14, 12, 10, 10)};
            ${allBreakpointValue("height", 14, 10, 10, 10)};
        }
    }
`;

export const WeatherFact = styled.div`
    ${allBreakpointValue("margin-bottom", 85 - 12, 66 - 12, 33 - 12, 20 - 12)};

    ${mediaBreakpointDown("md")} {
        display: flex;
        align-items: center;
    }

    & > div:first-of-type {
        align-items: center;
        ${allBreakpointValue("margin-bottom", 20, 12, 12)};

        p {
            ${allBreakpointValue("margin-left", 20, 12, 8, 8)};
            ${font("text-3")};
        }
    }

    & > div:nth-of-type(2) {
        ${mediaBreakpointDown("md")} {
            margin-left: ${vw(20, "xs")};
        }
    }
`;

export const WeatherParts = styled.div`
    margin-top: auto;
    flex-wrap: wrap;

    & > div {
        & > p {
            color: rgba(35, 35, 35, 0.5);
            ${allBreakpointValue("margin-top", 12, 12, 12, 12)};
            ${allBreakpointValue("margin-bottom", 12, 12, 12, 8)};
        }

        & > div {
            display: flex;
            align-items: center;

            & > p {
                margin-left: 10px;
                ${font("text-2")};
            }
        }
    }

    & > div:not(:last-of-type) {
        ${allBreakpointValue("margin-right", 40, 20, 12, 40)};
    }
`;

export const WeatherCondition = styled.p`
    ${allBreakpointValue("margin-bottom", 10, 8, 8, 8)};
`;

export const WeatherFactIcon = styled.div`
    ${allBreakpointValue("height", 80, 54, 36, 36)};
    ${allBreakpointValue("width", 80, 54, 36, 36)};
`;

export const WeatherPartIcon = styled.div`
    ${allBreakpointValue("height", 24, 16, 14, 14)};
    ${allBreakpointValue("width", 24, 16, 14, 14)};
`;
