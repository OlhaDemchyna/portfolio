import React, { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiTheme = createTheme({
    palette: {
      background: {
        default: "#f8f9fa"
      },
    }
});

import { WeatherContext, useWeather } from '../../../helpers';

function Shell({ children }) {
    const contextValue = useWeather();

    useEffect(() => {
        contextValue.getTemperature('Kyiv')
    }, [])

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />

            <Paper elevation={10} sx={{ m: 3, mx: 'auto', p: 3, maxWidth: 700 }}>
                <WeatherContext.Provider value={contextValue}>
                    {children}
                </WeatherContext.Provider>
            </Paper>

            <Typography sx={{ mx: 'auto', mb: 3, maxWidth: 700 }} variant="caption" display="block">
                Open-source code, by{' '}
                <Link href="https://github.com/OlhaDemchyna" target="_blank">Olha Demchyna</Link>
            </Typography>
        </ThemeProvider>
    );
}

export default Shell;