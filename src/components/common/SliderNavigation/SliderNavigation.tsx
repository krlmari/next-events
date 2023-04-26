import React from "react";
import { Container } from "./SliderNavigation.styled";
import Swiper from "swiper";
import Arrow from "@/icons/arrow.svg";

interface SliderNavigationProps {
    swiper?: Swiper;
    className?: string;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
    swiper,
    className,
}) => {
    return (
        <Container className={className}>
            <button
                className={`swiper-button prev`}
                onClick={() => swiper?.slidePrev()}>
                <Arrow />
            </button>
            <button
                className={`swiper-button next`}
                onClick={() => swiper?.slideNext()}>
                <Arrow />
            </button>
        </Container>
    );
};

export default SliderNavigation;
