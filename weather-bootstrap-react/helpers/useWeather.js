import { createContext, useState } from 'react';

import { weatherApi } from './weatherApi';
import { celsiusToFahrenheit } from './utilities';

const WeatherContext = createContext({});

function useWeather() {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [time, setTime] = useState(0);
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [daily, setDaily] = useState([]);
    const [isUnitMetric, setIsUnitMetric] = useState(true);

    const getTemperature = (cityValue) => {
        if (cityValue !== "") {
            weatherApi.get(`/weather?q=${cityValue}`)
                .then(handleTemperature)
                .catch(handleError);
        }
    }

    const handleTemperature = (response) => {
        const lat = response.data.coord.lat;
        const lon = response.data.coord.lon;

        setCity(response.data.name);
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setTime(response.data.dt*1000);
        setDescription(response.data.weather[0].description);
        setIcon(response.data.weather[0].icon);

        setError('');

        weatherApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`)
            .then(handleForecast)
            .catch(handleError);
    };

    const handleForecast = (response) => {
        setDaily(response.data.daily.slice(1, 7))

        setError('');
    };

    const handleError = (error) => {
        let message = 'Oops, something went wrong';

        if (error?.response?.status === 404) {
            message = 'City is not found 🤷🏼‍♀️';
        }
        
        setError(message);
    };

    return {
        city,
        temperature: isUnitMetric ? temperature : celsiusToFahrenheit(temperature),
        humidity,
        windSpeed,
        time,
        description,
        icon,
        daily,
        error,
        isUnitMetric,
        getTemperature,
        setIsUnitMetric,
    };
}

export { useWeather, WeatherContext }
