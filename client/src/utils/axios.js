import axios from 'axios';

export const axiosWithoutAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:5000/api'
    });
}