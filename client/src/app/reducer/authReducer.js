import * as types from '../types';

const userInfo = localStorage.getItem('jwt');

export const initialState = userInfo
    ? { loggedIn: true, userInfo } : { loggedIn: false, userInfo: null };

export default function(state= initialState, action) {
    switch(action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                loggedIn: true,
                userInfo: action.payload.userInfo,
            }
        case types.USER_LOGIN_ERROR:
            return {
                loggedIn: false,
                userInfo: null
            }
        default: return state
    }
}
