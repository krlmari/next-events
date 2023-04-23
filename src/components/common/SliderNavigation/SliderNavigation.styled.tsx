import styled from "styled-components";
import { allBreakpointValue } from "@/style/mixins";

export const Container = styled.div`
    display: flex;
    align-items: center;

    .swiper-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        ${allBreakpointValue("width", 60, 40, 36, 36)};
        ${allBreakpointValue("height", 60, 40, 36, 36)};

        &.prev {
            svg {
                transform: rotate(-180deg);
            }
        }

        &.next {
            ${allBreakpointValue("margin-left", 10, 8, 8, 8)};
        }

        &:hover:not(.disabled) {
            svg {
                opacity: 0.6;
            }
        }

        svg {
            display: block;
            ${allBreakpointValue("width", 24, 16, 14, 14)};
            ${allBreakpointValue("height", 24, 16, 14, 14)};
            stroke: currentColor;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
    }
`;
