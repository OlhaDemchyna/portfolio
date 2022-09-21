import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Project from './Project/Project';

import toDoListBootstrap from '../images/to-do-list-bootstrap.png';
import toDoListMuiReact from '../images/to-do-list-mui-react.png';
import weatherBootstrapReact from '../images/weather-bootstrap-react.png';
import weatherMuiReact from '../images/weather-mui-react.png';

function Portfolio() {
    return (
        <Container maxWidth="lg" id="portfolio" sx={{ mb: 5 }}>
            <Stack direction="column-reverse" spacing={5}>
                <Project
                    title="Weather"
                    image={weatherBootstrapReact}
                    href="https://portfolio.demchyna.com/weather-bootstrap/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/weather-bootstrap"
                >
                    Weather project in which I used Bootstrap as CSS framework. 
                    It contains searching form and button, information about city, 
                    time, weather conditions, temperature in Celcium and Fahrenheit 
                    and Daily weather. All information was included with help of Axios.
                </Project>
                <Project 
                    title="Weather"
                    image={weatherBootstrapReact}
                    href="https://portfolio.demchyna.com/weather-bootstrap-react/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/weather-bootstrap-react"
                >
                    Weather project completely rewritten using React as JS library. 
                    It contains such Components as searching form with button, information about city, 
                    time, weather conditions, temperature in Celcium and Fahrenheit and Daily weather. 
                    All information was included with help of Axios.
                </Project>
                <Project 
                    title="Weather"
                    image={weatherMuiReact}
                    href="https://portfolio.demchyna.com/weather-mui-react/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/weather-mui-react"
                >
                    Weather project completely rewritten using MUI as UI framework and React as JS library. 
                    It contains such Components as searching form and button, information about 
                    city, time, weather conditions, temperature in Celcium and Fahrenheit and Daily weather. 
                    All information was included with help of Axios.
                </Project>
                
                <Project 
                    title="To Do List"
                    image={toDoListBootstrap}
                    href="https://portfolio.demchyna.com/to-do-list-bootstrap/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/to-do-list-bootstrap"
                >
                    To Do list project in which I used Bootstrap as CSS framework. 
                    It contains Form with Button, List with Checkbox and Delete element.
                </Project>
                <Project 
                    title="To Do List"
                    image={toDoListBootstrap}
                    href="https://portfolio.demchyna.com/to-do-list-bootstrap-react/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/to-do-list-bootstrap-react"
                >
                    To Do list project completely rewritten using React framework.
                    It contains such Components as Form, which includes Button, and List with Checkbox 
                    and Delete element.
                </Project>
                <Project 
                    title="To Do List"
                    image={toDoListMuiReact}
                    href="https://portfolio.demchyna.com/to-do-list-mui-react/"
                    github="https://github.com/OlhaDemchyna/portfolio/tree/main/to-do-list-mui-react"
                >
                    To Do list project completely rewritten using MUI as UI framework and React as JS library.
                    It contains such Components as Form, which includes Button, and List with Checkbox 
                    and Delete element.
                </Project>
            </Stack>
        </Container>
    );
}

export default Portfolio;