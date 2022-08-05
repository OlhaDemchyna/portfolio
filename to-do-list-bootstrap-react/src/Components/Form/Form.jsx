import React, { useState } from 'react';

function Form({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handdleSubmit = (event) => {
        event.preventDefault();

        onAdd(inputValue);

        setInputValue('');
    }

    return (
        <form className="d-flex" onSubmit={handdleSubmit}>
            <div className="flex-grow-1">
                <input
                    className="form-control"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="What do you need to do today?"
                    name="task"
                    autoComplete="off"
                />
            </div>
            <div className="ms-4">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    );
}

export default Form;