import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Tile from '../Tile/Tile';

import { celsiusToFahrenheit, formatDateWithTime, WeatherContext } from '../../../helpers';

function Info() {
    const {
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

    const handleChangeUnit = (isNewUnitMetric) => (event) => {
        event.preventDefault();

        setIsUnitMetric(isNewUnitMetric);
    }

    return (
        <Box sx={{ mt: 3, px: 2, pb: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 500 }}>{city}</Typography>

                <Typography>Last Updated {formatDateWithTime(time)}</Typography>
                <Typography sx={{ textTransform: 'capitalize' }}>{description}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Grid spacing={3} container>
                    <Grid xs={6} item>
                        <Stack direction="row" alignItems="flex-start">
                            <Box component="img" sx={{ width: 75 }} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />

                            <Typography variant="h2" sx={{ fontWeight: 'normal' }}>{Math.round(temperature)}</Typography>

                            <ButtonGroup variant="text" size="small">
                                <Button
                                    onClick={handleChangeUnit(true)}
                                    color={isUnitMetric ? 'inherit' : 'primary'}
                                >ºC</Button>
                                <Button
                                    onClick={handleChangeUnit(false)}
                                    color={!isUnitMetric ? 'inherit' : 'primary'}
                                >ºF</Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography>Humidity: <span>{Math.round(humidity)}</span>%</Typography>
                        <Typography>Wind: <span>{Math.round(windSpeed)}</span> km/h</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Stack direction="row" justifyContent="space-between" spacing={2}>
                {daily.map((day) => (
                    <Tile
                        key={day.dt}
                        icon={day.weather[0].icon}
                        minTemperature={isUnitMetric ? day.temp.min : celsiusToFahrenheit(day.temp.min)}
                        maxTemperature={isUnitMetric ? day.temp.max : celsiusToFahrenheit(day.temp.max)}
                        date={day.dt * 1000}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default Info;