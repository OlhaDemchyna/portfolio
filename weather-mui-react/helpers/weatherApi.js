import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const weatherApi = axios.create({ baseURL });

weatherApi.interceptors.request.use((request) => {
    const url = new URL(request.baseURL + request.url);

    url.searchParams.append('appid', '2833a5c0ffd88b47f1e5f1647b27776f')
    url.searchParams.append('units', 'metric')

    request.url = url.toString().substring(baseURL.length);

    return request;
});

export { weatherApi }
