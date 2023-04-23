import React from "react";
import {
    Container,
    EventsTitle,
    EventsMainInfo,
    EventsGrid,
} from "./Events.styled";
import CardEvent from "@/components/blocks/CardEvent/CardEvent";
import EventSlider from "@/components/blocks/EventSlider/EventSlider";
import Weather from "@/components/blocks/Weather/Weather";
import ToggleTheme from "@/components/common/ToggleTheme/ToggleTheme";
import { EventI, WeatherI } from "@/interfaces";

export interface CardsGridProps {
    title: string;
    cardsSlider: EventI[];
    cards: EventI[];
    weather: WeatherI;
}

const CardsGrid: React.FC<CardsGridProps> = ({
    title,
    cardsSlider,
    cards,
    weather,
}) => {
    return (
        <Container>
            <EventsTitle
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            />

            <EventsMainInfo>
                <EventSlider cards={cardsSlider} />
                <div>
                    <Weather info={weather} />
                    <ToggleTheme />
                </div>
            </EventsMainInfo>

            <EventsGrid>
                {cards.map((card, i) => (
                    <CardEvent key={i} {...card} />
                ))}
            </EventsGrid>
        </Container>
    );
};

export default CardsGrid;
