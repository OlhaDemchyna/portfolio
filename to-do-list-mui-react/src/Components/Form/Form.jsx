import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Form({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onAdd(inputValue);

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
            >
                <TextField
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="What do you need to do today?"
                    name="task"
                    autoComplete="off"
                    size='small'
                    fullWidth
                />
                <Button type="submit" variant="contained">Add</Button>
            </Stack>
        </form>
    );
}

export default Form;