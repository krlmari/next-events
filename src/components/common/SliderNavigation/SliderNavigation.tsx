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
            <div
                className={`swiper-button prev`}
                onClick={() => swiper?.slidePrev()}>
                <Arrow />
            </div>
            <div
                className={`swiper-button next`}
                onClick={() => swiper?.slideNext()}>
                <Arrow />
            </div>
        </Container>
    );
};

export default SliderNavigation;
