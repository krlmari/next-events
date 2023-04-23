import styled from "styled-components";
import Image from "@/components/common/Image/Image";
import { allBreakpointValue, clampText, font } from "@/style/mixins";
import CopyButton from "@/components/common/CopyButton/CopyButton";
import { Swiper } from "swiper/react";
import SliderNavigation from "@/components/common/SliderNavigation/SliderNavigation";

export const Container = styled.div`
    position: relative;
`;

export const CardEventImage = styled(Image)`
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    user-select: none;
    pointer-events: none;

    ${allBreakpointValue("height", 300, 200, 220, 220)};
    ${allBreakpointValue("margin-bottom", 20, 12, 8, 8)};
`;

export const CardEventTitle = styled.p`
    ${font("text-b")};
    ${allBreakpointValue("margin-bottom", 20, 12, 8, 8)};
`;

export const CardEventSubtitle = styled.p`
    ${font("text-l")};
    ${clampText(1)};

    color: ${({ theme }) =>
        theme.mode === "dark" ? "white" : "rgba(35, 35, 35, 0.6)"};
`;

export const CardEventCopy = styled(CopyButton)`
    position: absolute;
    z-index: 1;

    ${allBreakpointValue("top", 21, 12, 12, 12)};
    ${allBreakpointValue("left", 19, 12, 12, 12)};

    ${allBreakpointValue("width", 50, 34, 30, 30)};
    ${allBreakpointValue("height", 50, 34, 30, 30)};

    & > svg {
        ${allBreakpointValue("width", 24, 16, 14, 14)};
        ${allBreakpointValue("height", 24, 16, 14, 14)};
    }
`;

export const Slider = styled(Swiper)``;

export const Nav = styled(SliderNavigation)`
    position: absolute;
    z-index: 1;

    ${allBreakpointValue("top", 21, 12, 12, 12)};
    ${allBreakpointValue("right", 19, 12, 12, 12)};

    .swiper-button {
        background-color: rgba(35, 35, 35, 0.2);
        ${allBreakpointValue("width", 50, 34, 30, 30)};
        ${allBreakpointValue("height", 50, 34, 30, 30)};
    }
`;
