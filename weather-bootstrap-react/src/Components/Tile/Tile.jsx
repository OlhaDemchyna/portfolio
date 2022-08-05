import React from 'react';

import { formatDateWeekDay } from '../../../helpers';

import * as classes from './Tile.module.css';

function Tile({ icon, minTemperature, maxTemperature, date, className }) {
    return (
        <div className={className}>
            <div className={classes.weatherForecastDate}>{formatDateWeekDay(date)}</div>

            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" width="42" />

            <div className={classes.weatherForecastTemperature}>
                <span>{Math.round(minTemperature)}º </span>
                <span className={classes.weatherForecastTemperatureMin}>{Math.round(maxTemperature)}º </span>
            </div>
        </div>
    );
}

export default Tile;