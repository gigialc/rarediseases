import axios from 'axios';


//fastapi application is in port 8000
const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;


