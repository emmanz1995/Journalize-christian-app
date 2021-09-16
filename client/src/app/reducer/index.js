import { combineReducers } from 'redux';
import prayerReducer from './prayerReducer';
import authReducer from './authReducer';

export default combineReducers({
    prayerReducer,
    authReducer
})
