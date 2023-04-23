import {
    allBreakpointValue,
    font,
    mediaBreakpointDown,
    mediaBreakpointUp,
    sideOffsets,
    vw,
} from "@/style/mixins";
import styled from "styled-components";
import { Container as Weather } from "@/components/blocks/Weather/Weather.styled";

export const Container = styled.section`
    position: relative;

    ${sideOffsets()}
    ${allBreakpointValue("padding-top", 160, 100, 60, 60)};
    ${allBreakpointValue("padding-bottom", 160, 100, 60, 60)};
`;

export const EventsTitle = styled.p`
    ${font("h1")};
    ${allBreakpointValue("margin-bottom", 28, 20, 12, 20)};
`;

export const EventsMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    ${allBreakpointValue("margin-bottom", 120, 80, 60, 28)};

    ${mediaBreakpointUp("md")} {
        flex-direction: row;
    }

    & > div:nth-child(1) {
        ${mediaBreakpointDown("md")} {
            margin-bottom: ${vw(20, "xs")};
        }
    }

    & > div:nth-child(2) {
        ${allBreakpointValue("min-width", 370, 249, 159)};
        ${allBreakpointValue("margin-left", 40, 28, 20)};
    }

    ${Weather} {
        ${allBreakpointValue("margin-bottom", 20, 12, 12, 12)};
    }
`;

export const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;

    ${mediaBreakpointUp("md")} {
        grid-template-columns: 1fr 1fr;
        gap: 28px 20px;
    }

    ${mediaBreakpointUp("xl")} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 60px 28px;
    }

    ${mediaBreakpointUp("fhd")} {
        gap: ${vw(80)} ${vw(40)};
    }
`;
