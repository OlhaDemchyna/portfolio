import React, { useContext } from 'react';

import Tile from '../Tile/Tile';

import { WeatherContext, formatDateWithTime, celsiusToFahrenheit } from '../../../helpers';

import * as classes from './Info.module.css';

function Info() {
    const {
      error,
      city,
      description,
      icon,
      time,
      temperature,
      humidity,
      windSpeed,
      daily,
      isUnitMetric,
      setIsUnitMetric,
    } = useContext(WeatherContext);

    if (city === '') {
        return null;
    }

    if (error) {
        return (
          <p className="text-danger mt-3">{error}</p>
        )
    }

    const handleChangeUnit = (isNewUnitMetric) => (event) => {
        event.preventDefault();

        setIsUnitMetric(isNewUnitMetric);
    }

    return (
        <div className="mt-3">
            <div className={classes.overview}>
              <h1 className={classes.city}>{city}</h1>
              <ul className={classes.ul}>
                <li className={classes.li}>Last Updated {formatDateWithTime(time)}</li>
                <li className={`${classes.li} ${classes.description}`}>{description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={`clearfix ${classes.weatherTemperature}`}>
                  <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="float-start" />
                  <div className="float-start">
                    <strong>{Math.round(temperature)}</strong>
                    <span className={classes.weatherTemperatureUnits}>
                      <a onClick={handleChangeUnit(true)} href="#" className={isUnitMetric ? classes.weatherTemperatureAActive : ''}>ºC</a> |
                      <a onClick={handleChangeUnit(false)} href="#" className={!isUnitMetric ? classes.weatherTemperatureAActive : ''}>ºF</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul className={classes.ul}>
                  <li className={classes.li}>Humidity: <span>{Math.round(humidity)}</span>%</li>
                  <li className={classes.li}>Wind: <span>{Math.round(windSpeed)}</span> km/h</li>
                </ul>
              </div>
            </div>
            <div className={classes.weatherForecast}>
                <div className="row">
                    {daily.map((day) => (
                        <Tile
                            key={day.dt}
                            className="col-2"
                            icon={day.weather[0].icon}
                            minTemperature={isUnitMetric ? day.temp.min : celsiusToFahrenheit(day.temp.min)}
                            maxTemperature={isUnitMetric ? day.temp.max : celsiusToFahrenheit(day.temp.max)}
                            date={day.dt * 1000}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info;