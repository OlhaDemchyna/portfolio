import React, { useContext, useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import { WeatherContext } from '../../../helpers';

function Form() {
    const [inputValue, setInputValue] = useState('');

    const { error, getTemperature, setError } = useContext(WeatherContext);

    const handleChange = (event) => {
        setInputValue(event.target.value);

        setError('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        getTemperature(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
            >
                <Tooltip
                    title={error}
                    placement="bottom"
                    open={error !== ''}
                    TransitionProps={{ timeout: 0 }}
                    arrow
                >
                    <TextField
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type a city..."
                        name="task"
                        autoComplete="off"
                        size="small"
                        error={error !== ''}
                        fullWidth
                    />
                </Tooltip>
                <Button type="submit" variant="contained">Search</Button>
            </Stack>
        </form>
    );
}

export default Form;