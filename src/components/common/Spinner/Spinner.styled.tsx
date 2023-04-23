import { allBreakpointValue, color } from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    border: 3px solid;
    border-color: ${color("blue")} transparent ${color("blue")} transparent;
    border-radius: 50%;
    animation: spin 1.4s linear infinite;

    ${allBreakpointValue("height", 50, 50, 50, 50)};
    ${allBreakpointValue("width", 50, 50, 50, 50)};

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
