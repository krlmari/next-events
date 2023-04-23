import { css, FlattenSimpleInterpolation } from "styled-components";
import variables from "./variables";

export const rem: (size: number, rootFontSize?: number) => string = (
    size,
    rootFontSize = 16
) => {
    return `${size / rootFontSize}rem`;
};

export const remFluidMiddle: (
    property: string,
    minSize: number,
    tabletSize: number,
    smallDeskSize: number,
    maxSize: number,
    rootFontSize?: number
) => FlattenSimpleInterpolation = (
    property,
    minSize,
    tabletSize,
    smallDeskSize,
    maxSize,
    rootFontSize = 16
) => {
    const minSizeRem = rem(minSize);
    const tabletSizeRem = rem(tabletSize);
    const smallDeskSizeRem = rem(smallDeskSize);
    const maxSizeRem = rem(maxSize);

    return css`
        //mobile
        ${property}: ${rem(minSize * 0.8)};

        @media (min-width: 370px) {
            ${property}: ${minSizeRem};
        }

        @media (min-width: 500px) {
            ${property}: calc(${minSizeRem} + ( ${tabletSize /
            rootFontSize} - ${minSize / rootFontSize}) * 
                            ((100vw - ${rem(370)}) / (767 - 370)));
        }

        // tablet
        @media (min-width: 767px) {
            ${property}: calc(${tabletSizeRem} + (${smallDeskSize /
            rootFontSize} - ${tabletSize / rootFontSize}) *
                            ((100vw - ${rem(767)}) / (1280 - 767)));

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }
        }

        //min desk
        @media (min-width: 1280px) {
            ${property}: calc(${smallDeskSizeRem} + (${maxSize /
            rootFontSize} - ${smallDeskSize / rootFontSize}) * 
                ((100vw - ${rem(1280)}) / (1920 - 1280)));

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
        }

        // больше 1920
        @media (min-width: 1920px) {
            ${property}: ${maxSizeRem};

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) *
                0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
        }

        @media (min-width: 2000px) {
            ${property}: ${(maxSize / 1920) * 100}vw;
        }
    `;
};

export const remAdaptiveFont = (
    minSize: number,
    tabletSize: number,
    smallDeskSize: number,
    maxSize: number
): FlattenSimpleInterpolation => {
    return remFluidMiddle(
        "font-size",
        minSize,
        tabletSize,
        smallDeskSize,
        maxSize,
        16
    );
};

const typography = {
    "text-b": css`
        ${remAdaptiveFont(14, 14, 17.3, 26)};
        line-height: 1.4;
        font-family: ${variables.fonts.GraphikLCGBoldName};
    `,
    "text-l": css`
        ${remAdaptiveFont(12, 12, 12, 18)};
        line-height: 1;
        font-family: ${variables.fonts.GraphikLCGLightName};
    `,
    "text-2": css`
        ${remAdaptiveFont(12, 12, 14, 20)};
        line-height: 1;
        font-family: ${variables.fonts.GraphikLCGMediumName};
    `,
    "text-3": css`
        ${remAdaptiveFont(36, 36, 54, 80)};
        line-height: 1;
        font-family: ${variables.fonts.GraphikLCGSemiboldName};
    `,
    h1: css`
        ${remAdaptiveFont(18, 20, 24, 36)};
        line-height: 1;
        font-family: ${variables.fonts.GraphikLCGSemiboldName};
    `,
};

export type Typography = keyof typeof typography;

export default typography;
