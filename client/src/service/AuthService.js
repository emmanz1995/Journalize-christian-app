import axios from 'axios';
import decode from 'jwt-decode';

const API_URL = process.env.REACT_APP_API_URL;

function onLogin(email, password) {
    return axios.post(`${API_URL}/v1/auth/login`, {
        email, password,
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((response) => {
        if(response.data.token) {
            localStorage.setItem('jwt', JSON.stringify(response.data.token));
        }
        return response.data;
    })
}

function getUserInfo() {
    try {
        const token = localStorage.getItem('jwt');
        return decode(token);
    } catch(e) {
        return null;
    }
}

function onLogout() {
    localStorage.clear();
}

export const AuthService = {
    onLogin,
    getUserInfo,
    onLogout
}
