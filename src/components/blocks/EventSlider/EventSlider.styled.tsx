import styled from "styled-components";
import { Swiper } from "swiper/react";
import SliderNavigation from "@/components/common/SliderNavigation/SliderNavigation";
import { allBreakpointValue } from "@/style/mixins";

export const Slider = styled(Swiper)`
    position: relative;
    overflow: hidden;
    width: 100%;
`;

export const Nav = styled(SliderNavigation)`
    position: absolute;
    z-index: 1;

    ${allBreakpointValue("top", 40, 28, 20, 12)};
    ${allBreakpointValue("right", 40, 28, 20, 12)};

    .swiper-button {
        ${allBreakpointValue("width", 60, 40, 36, 36)};
        ${allBreakpointValue("height", 60, 40, 36, 36)};
    }
`;
