import React from "react";
import {
    Container,
    CardEventMainText,
    CardEventMainCopy,
    CardEventMainTitle,
    CardEventMainDescription,
    CardEventMainSubtitle,
} from "./CardEventMain.styled";
import { EventI } from "@/interfaces";

export interface CardEventMainProps extends EventI {}

const CardEventMain: React.FC<CardEventMainProps> = ({
    title,
    description,
    image,
    date,
    place,
}) => {
    return (
        <Container backgroundImage={image}>
            <CardEventMainCopy
                copyText={`${title}, ${
                    (description && description + ",") || ""
                } ${date}, ${place}`}
            />
            <CardEventMainText>
                <CardEventMainTitle
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {description && (
                    <CardEventMainDescription
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
                <CardEventMainSubtitle
                    dangerouslySetInnerHTML={{
                        __html: `${date}&ensp;&bull;&ensp;${place}`,
                    }}
                />
            </CardEventMainText>
        </Container>
    );
};

export default CardEventMain;
