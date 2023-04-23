import CopyButton from "@/components/common/CopyButton/CopyButton";
import {
    allBreakpointValue,
    color,
    font,
    mediaBreakpointUp,
    vw,
} from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.div<{ backgroundImage?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    color: ${color("white")};
    height: ${vw(360, "xs")};
    width: 100%;

    ${allBreakpointValue("padding", 40, 28, 20, 12)};

    ${mediaBreakpointUp("md")} {
        height: 100%;
    }

    ${({ backgroundImage }) =>
        backgroundImage &&
        `
            background-image: url(${backgroundImage});
            background-color: ${color("gray")};
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
    `};
`;

export const CardEventMainText = styled.div`
    margin-top: auto;
`;

export const CardEventMainTitle = styled.p`
    ${font("text-b")};
    ${allBreakpointValue("margin-bottom", 20, 12, 8, 8)};
`;

export const CardEventMainDescription = styled.p`
    ${font("text-l")};
    ${allBreakpointValue("margin-bottom", 20, 12, 8, 8)};
`;

export const CardEventMainSubtitle = styled.p`
    ${font("text-l")};
`;

export const CardEventMainCopy = styled(CopyButton)`
    background-color: rgba(255, 255, 255, 0.15);
`;
