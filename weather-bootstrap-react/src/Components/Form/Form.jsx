import React, { useContext } from 'react';

import { WeatherContext } from '../../../helpers';

function Form(props) {
    const { getTemperature } = useContext(WeatherContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        getTemperature(event.target.city.value);
    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <div className="flex-grow-1">
                <input type="search" name="city" placeholder="Type a city..." className="form-control" autoComplete="off" />
            </div>
            <button type="submit" className="btn btn-primary ms-4">Search</button>
        </form>
    );
}

export default Form;