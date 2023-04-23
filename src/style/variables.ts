const variables = {
    col: 100 / 24,
    offset: {
        mobile: 20,
        tablet: 36,
        desktop1280: 100,
        desktop1440: 160,
        desktop1920: 160,
    },
    videoRatio: (9 / 16) * 100,
    fonts: {
        default: "Arial",
        GraphikLCGLightName: "GraphikLCG-Light",
        GraphikLCGBoldName: "GraphikLCG-Bold",
        GraphikLCGMediumName: "GraphikLCG-Medium",
        GraphikLCGSemiboldName: "GraphikLCG-Semibold",
    },
};

export type FontFamily = keyof typeof variables.fonts;

export type Offset = keyof typeof variables.offset;

export default variables;
