export const translateCondition = (condition: string) => {
    const translates: Record<string, string> = {
        clear: 'Ясно',
        "partly-cloudy": 'Малооблачно',
        cloudy: "Облачно с прояснениями",
        overcast: "Пасмурно",
        drizzle: "Морось",
        "light-rain": "Небольшой дождь",
        rain: "Дождь",
        "moderate-rain": "Умеренно сильный дождь",
        "heavy-rain": "Сильный дождь",
        "continuous-heavy-rain": "Длительный сильный дождь",
        showers: "Ливень",
        "wet-snow": "Дождь со снегом",
        "light-snow": "Небольшой снег",
        snow: "Снег",
        "snow-showers": "Cнегопад",
        hail: "Град",
        thunderstorm: "Гроза",
        "thunderstorm-with-rain": "Дождь с грозой",
        "thunderstorm-with-hail": "Гроза с градом"
    }

    try {
        return translates[condition]
    } catch (e) {
        return ''
    }
};
