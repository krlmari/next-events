import { AppProps } from "next/app";
import { SwitchTransition, Transition } from "react-transition-group";
import GlobalStyle from "@/style/globalStyles";
import "@/style/fonts.css";
import ScrollBarProvider from "@/context/ScrollBarContext";
import { RecoilRoot } from "recoil";
import "swiper/css";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/style/themes";
import { ThemeContext, ThemeMode } from "@/context/ThemeContext";
import { useState } from "react";

import "dayjs/locale/ru";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    const [theme, setTheme] = useState<ThemeMode>("light");
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
        <RecoilRoot>
            <SWRConfig value={{ fetcher }}>
                <ScrollBarProvider>
                    <ThemeContext.Provider value={{ theme, setTheme }}>
                        <ThemeProvider theme={themeMode}>
                            <GlobalStyle />
                            <SwitchTransition>
                                <Transition key={asPath} timeout={600}>
                                    <Component {...pageProps} />
                                </Transition>
                            </SwitchTransition>
                        </ThemeProvider>
                    </ThemeContext.Provider>
                </ScrollBarProvider>
            </SWRConfig>
        </RecoilRoot>
    );
};

export default MyApp;
