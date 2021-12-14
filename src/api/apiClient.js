import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'app-id': '61b1caa713321e37bcd81cd0',
    }
});

export default axiosClient;