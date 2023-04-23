import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { SwiperOptions } from "swiper";
import { Slider, Nav } from "./EventSlider.styled";
import CardEventMain from "@/components/blocks/CardEventMain/CardEventMain";
import { EventI } from "@/interfaces";

const SWIPER_OPTIONS: SwiperOptions = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 8,
    loop: true,
    allowTouchMove: false,
};

interface CardEventSliderProps {
    cards: EventI[];
}

const CardEventSlider: React.FC<CardEventSliderProps> = ({ cards }) => {
    const [swiper, setSwiper] = useState<SwiperCore>();

    return (
        <>
            {cards?.length > 1 ? (
                <Slider onSwiper={setSwiper} {...SWIPER_OPTIONS}>
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <CardEventMain {...card} />
                        </SwiperSlide>
                    ))}

                    <Nav swiper={swiper} />
                </Slider>
            ) : (
                <CardEventMain {...cards[0]} />
            )}
        </>
    );
};

export default CardEventSlider;
