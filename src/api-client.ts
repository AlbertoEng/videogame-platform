import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '547e71b8d88f4c319fa0c974a5783fff'
    }
})