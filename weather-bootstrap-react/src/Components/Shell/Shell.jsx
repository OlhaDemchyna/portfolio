import React, { useEffect } from 'react';

import { useWeather, WeatherContext } from '../../../helpers';

import * as classes from './Shell.module.css';

function Shell({ children }) {
    const contextValue = useWeather();

    useEffect(() => {
        contextValue.getTemperature('Kyiv')
    }, [])

    return (
        <div className="container">
            <div className={classes.weatherAppWrapper}>
                <div className={classes.weatherApp}>
                    <WeatherContext.Provider value={contextValue}>
                        {children}
                    </WeatherContext.Provider>
                </div>
                <small>
                    Open-source code, by{' '}
                    <a href="https://github.com/OlhaDemchyna" target="_blank">Olha Demchyna</a>
                </small>
            </div>
        </div>
    );
}

export default Shell;