import React from 'react';
import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Header from './Components/Header';
import Info from './Components/Info/Info';
import Portfolio from './Components/Portfolio';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                    scrollPaddingTop: 80,
                },
                body: {
                    marginTop: 80,
                },
            },
        }
    },
});

function App () {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />
            <Info />
            <Portfolio />
        </ThemeProvider>
        
    );
}

createRoot(document.getElementById('root')).render(<App />);
