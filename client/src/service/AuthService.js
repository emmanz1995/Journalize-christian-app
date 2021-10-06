import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('userInfo')))

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
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            currentUserSubject.next(response.data)
        }
        return response.data;
    })
}

// function getUserInfo() {
//     return JSON.parse(localStorage.getItem('userInfo'));
// }

function onLogout() {
    localStorage.clear();
    currentUserSubject.next(null);
}

export const AuthService = {
    onLogin,
    // getUserInfo,
    onLogout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    },
}
