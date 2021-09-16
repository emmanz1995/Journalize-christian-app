import axios from 'axios';

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
            localStorage.setItem('jwt', JSON.stringify(response.data));
        }
        return response.data;
    })
}

export const AuthService = {
    onLogin
}
