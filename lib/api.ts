import axios, { AxiosPromise } from "axios";
import indexPage from "../data/index.json";

/** @description - Адрес /api для запросов на бэк */

export const getIndexPage = () => indexPage;

const createWeatherAxiosInstance = (baseURL: string | undefined) =>
    axios.create({
        baseURL: baseURL,
        headers: {
            Accept: "application/json",
            "X-Yandex-API-Key": process.env.WEATHER_KEY!,
        },
    });

const axiosWeatherInstance = createWeatherAxiosInstance(
    process.env.API_URL_WEATHER
);

export const getWeather = (params: {
    lat: number;
    lon: number;
}): Promise<AxiosPromise<any>> =>
    axiosWeatherInstance.get(`forecast`, { params });

const stubDelay = async (delayMs: number) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, delayMs);
    });

export const getWeatherYandex = async (params?: {
    lat: number;
    lon: number;
}): Promise<AxiosPromise> => {
    await stubDelay(1000);
    return axios.post(`/api/getWeatherYandex`, { params });
};
