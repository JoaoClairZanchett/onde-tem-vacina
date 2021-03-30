import axios from 'axios';

const api = axios.create({
    baseURL: 'https://otvbrasil.azurewebsites.net/api'
})

export default api;