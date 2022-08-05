function formatDateWithTime (timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let day = days[date.getDay()];
    
    return `${day} ${hours}:${minutes}`;
}

function formatDateWeekDay (timestamp) {
    let date = new Date(timestamp);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    return days[date.getDay()];
}

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}

export {
    formatDateWithTime,
    formatDateWeekDay,
    celsiusToFahrenheit,
}