import * as types from '../types';
import { AuthService } from '../../service/AuthService';

export const login = (email, password) => (dispatch) => {
    return AuthService.onLogin(email, password)
        .then((response) => {
            dispatch({
                type: types.USER_LOGIN,
                payload: { userInfo: response }
            });
            return Promise.resolve()
        }, (e) => {
            console.log(e)
            dispatch({
                type: types.USER_LOGIN_ERROR
            })
            return Promise.reject()
        })

}
