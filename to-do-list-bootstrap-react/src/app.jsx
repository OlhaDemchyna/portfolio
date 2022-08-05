import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Form from './Components/Form/Form';
import List from './Components/List/List';

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
        <div className="container shadow bg-body rounded my-4 p-4" style={{ maxWidth: 800 }}>
            <Form onAdd={addTask} />
            <List tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App />);
