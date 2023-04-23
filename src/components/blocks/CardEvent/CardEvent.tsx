import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { SwiperOptions } from "swiper";
import {
    Container,
    CardEventImage,
    CardEventTitle,
    CardEventSubtitle,
    CardEventCopy,
    Slider,
    Nav,
} from "./CardEvent.styled";
import { EventI } from "@/interfaces";

const SWIPER_OPTIONS: SwiperOptions = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 8,
    loop: true,
    allowTouchMove: false,
};

export interface CardEventProps extends EventI {}

const CardEvent: React.FC<CardEventProps> = ({
    title,
    images,
    date,
    place,
}) => {
    const [swiper, setSwiper] = useState<SwiperCore>();

    return (
        <Container>
            {images &&
                (images.length > 1 ? (
                    <Slider onSwiper={setSwiper} {...SWIPER_OPTIONS}>
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <CardEventImage
                                    src={image}
                                    alt={title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}

                        <Nav swiper={swiper} />
                    </Slider>
                ) : (
                    <CardEventImage
                        src={images[0]}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                ))}

            <CardEventCopy copyText={`${title}, ${date}, ${place}`} />
            <CardEventTitle dangerouslySetInnerHTML={{ __html: title }} />
            <CardEventSubtitle
                dangerouslySetInnerHTML={{
                    __html: `${date}&ensp;&bull;&ensp;${place}`,
                }}
            />
        </Container>
    );
};

export default CardEvent;
