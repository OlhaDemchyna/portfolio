import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Form from './Components/Form/Form';
import TasksList from './Components/TasksList/TasksList';

import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiTheme = createTheme({
    palette: {
      background: {
        default: "#f8f9fa"
      },
    }
});

function App () {
    const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('todos') || '[]'));

    const addTask = (newTask) => {
        if (newTask !== '') {
            tasks.push({
                id: Date.now(),
                isChecked: false,
                value: newTask,
            });

            saveTasks(tasks);
        }
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);

        saveTasks(tasks);
    }

    const toggleTask = (index) => {
        tasks[index].isChecked = !tasks[index].isChecked;

        saveTasks(tasks);
    }

    const saveTasks = (newTasks) => {
        setTasks([...newTasks]);

        window.localStorage.setItem('todos', JSON.stringify(newTasks));
    }

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />

            <Paper elevation={10} style={{ maxWidth: 800 }} sx={{ m: 3, mx: 'auto', p: 3 }}>
                <Form onAdd={addTask} />
                <TasksList tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
            </Paper>
        </ThemeProvider>
    )
}

createRoot(document.getElementById('root')).render(<App />);
