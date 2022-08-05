import React from 'react';

import { Checkbox, List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material'

import RadioButtonUncheckedTwoToneIcon from '@mui/icons-material/RadioButtonUncheckedTwoTone';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function TasksList({ tasks, onRemove, onToggle }) {
    const handleRemove = (index) => (event) => {
        event.preventDefault();

        onRemove(index);
    }

    const handleToggle = (index) => (event) => {
        onToggle(index);
    }

    return (
        <List sx={{ mt: 3 }}>
            {tasks.map((item, index) => (
                <ListItem
                    key={item.id}
                    secondaryAction={
                        <IconButton edge="end" onClick={handleRemove(index)} aria-label="remove">
                            <DeleteForeverOutlinedIcon />
                        </IconButton>
                    }
                    divider={index !== tasks.length - 1}
                    disablePadding
                >
                    <Checkbox
                        checked={item.isChecked}
                        icon={<RadioButtonUncheckedTwoToneIcon />}
                        checkedIcon={<CheckCircleOutlineTwoToneIcon />}
                        onChange={handleToggle(index)}
                    />
                    <ListItemText primary={item.value} />
                </ListItem>
            ))}

            {tasks.length === 0 && <li className="list-group-item px-0">No tasks</li>}
        </List>
    );
}

export default TasksList;