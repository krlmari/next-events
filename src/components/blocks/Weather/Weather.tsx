import React, { useEffect, useState } from "react";
import {
    Container,
    WeatherMessages,
    WeatherError,
    WeatherTitle,
    WeatherFact,
    WeatherParts,
    WeatherFactIcon,
    WeatherPartIcon,
    WeatherCondition,
    WeatherFeels,
} from "./Weather.styled";
import { getWeatherYandex } from "@/lib/api";
import Spinner from "@/components/common/Spinner/Spinner";
import dayjs from "dayjs";
import LocationArrow from "@/icons/location-arrow.svg";
import { translateCondition } from "@/helpers/translate";
import { WeatherI } from "@/interfaces";

const getTemp = (temp: number) => {
    if (temp > 0) {
        return `+${temp}°`;
    } else {
        return `${temp}°`;
    }
};

interface WeatherProps {
    info: WeatherI;
}

const Weather: React.FC<WeatherProps> = ({ info }) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            if (!info.coordinates) return;

            try {
                const { data } = await getWeatherYandex({
                    lat: info.coordinates.lat,
                    lon: info.coordinates.lon,
                });
                if (data) {
                    setError(false);
                    setData(data);
                }
            } catch (err) {
                setError(true);
            }
        };

        getData();
    }, []);

    return (
        <Container>
            {(!data || error) && (
                <WeatherMessages>
                    {!data && !error && <Spinner />}
                    {error && (
                        <WeatherError>
                            Ошибка <br />
                            <br />
                            Не удалось загрузить данные о погоде
                        </WeatherError>
                    )}
                </WeatherMessages>
            )}

            {data && (
                <>
                    <WeatherTitle className="flex">
                        <div className="flex">
                            <LocationArrow />
                            <p>{info.title}</p>
                        </div>
                        {data.now_dt && (
                            <p>
                                {dayjs(data.now_dt, "DD.MM.YYYY")
                                    .locale("ru")
                                    .format("dddd, DD MMMM")}
                            </p>
                        )}
                    </WeatherTitle>

                    <WeatherFact>
                        <div className="flex">
                            {data.fact?.icon && (
                                <WeatherFactIcon
                                    src={`https://yastatic.net/weather/i/icons/funky/dark/${data.fact.icon}.svg`}
                                    alt={"icon"}
                                    layout="fixed"
                                    width={80}
                                    height={80}
                                />
                            )}

                            {data.fact?.temp && (
                                <p>{getTemp(data.fact.temp)}</p>
                            )}
                        </div>

                        <div>
                            {data.fact?.condition && (
                                <WeatherCondition>
                                    {translateCondition(data.fact.condition)}
                                </WeatherCondition>
                            )}

                            {data.fact?.feels_like && (
                                <WeatherFeels>
                                    Ощущается как{" "}
                                    {getTemp(data.fact.feels_like)}
                                </WeatherFeels>
                            )}
                        </div>
                    </WeatherFact>

                    {!!data.forecasts?.length && data.forecasts[0].parts && (
                        <WeatherParts className="flex">
                            <div>
                                <p>Вечером </p>
                                <div>
                                    <WeatherPartIcon
                                        src={`https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.evening.icon}.svg`}
                                        alt={"icon"}
                                        layout="fixed"
                                        width={24}
                                        height={24}
                                    />
                                    <p>
                                        {getTemp(
                                            data.forecasts[0].parts.evening
                                                .temp_avg
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>Ночью </p>
                                <div>
                                    <WeatherPartIcon
                                        src={`https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.night.icon}.svg`}
                                        alt={"icon"}
                                        layout="fixed"
                                        width={24}
                                        height={24}
                                    />
                                    <p>
                                        {getTemp(
                                            data.forecasts[0].parts.night
                                                .temp_avg
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>Утром </p>
                                <div>
                                    <WeatherPartIcon
                                        src={`https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.morning.icon}.svg`}
                                        alt={"icon"}
                                        layout="fixed"
                                        width={24}
                                        height={24}
                                    />
                                    <p>
                                        {getTemp(
                                            data.forecasts[0].parts.morning
                                                .temp_avg
                                        )}
                                    </p>
                                </div>
                            </div>
                        </WeatherParts>
                    )}
                </>
            )}
        </Container>
    );
};

export default Weather;
