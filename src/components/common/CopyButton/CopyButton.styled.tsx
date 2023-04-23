import { allBreakpointValue } from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.button`
    position: relative;
    border-radius: 50%;
    background-color: rgba(35, 35, 35, 0.2);
    cursor: pointer;

    ${allBreakpointValue("width", 60, 40, 36, 36)};
    ${allBreakpointValue("height", 60, 40, 36, 36)};

    &:hover {
        & > svg {
            opacity: 0.6;
        }
    }

    & > svg {
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease-in-out;

        ${allBreakpointValue("width", 28.8, 19, 17, 17)};
        ${allBreakpointValue("height", 28.8, 19, 17, 17)};
    }
`;
