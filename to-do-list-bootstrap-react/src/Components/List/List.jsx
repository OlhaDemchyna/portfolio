import React from 'react';

function List({ tasks, onRemove, onToggle }) {
    const handleRemove = (index) => (event) => {
        event.preventDefault();

        onRemove(index);
    }

    const handleToggle = (index) => (event) => {
        onToggle(index);
    }

    return (
        <ul className="list-group list-group-flush mt-4">
            {tasks.map((item, index) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="me-2" checked={item.isChecked} onChange={handleToggle(index)} />
                        {item.value}
                    </div>
                    <a href="#" className="text-primary text-decoration-none fw-bold" onClick={handleRemove(index)}>✕</a>
                </li>
            ))}

            {tasks.length === 0 && <li className="list-group-item px-0">No tasks</li>}
        </ul>
    );
}

export default List;