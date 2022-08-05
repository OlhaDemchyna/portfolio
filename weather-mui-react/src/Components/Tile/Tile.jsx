import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatDateWeekDay } from '../../../helpers';

function Tile({ icon, minTemperature, maxTemperature, date }) {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography>{formatDateWeekDay(date)}</Typography>

            <Box component="img" sx={{ width: 64 }} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />

            <div>
                <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>{Math.round(maxTemperature)}º </Typography>
                <Typography component="span" variant="body2">{Math.round(minTemperature)}º </Typography>
            </div>
        </Box>
    );
}

export default Tile;