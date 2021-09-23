import axios from 'axios';
import * as types from '../types';
import AuthHeader from '../../config/AuthHeader'

const API_URL = process.env.REACT_APP_API_URL;

export const getPrayerRequests = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/v1/api/prayers/getmyprayers`, {
            headers: AuthHeader()
        })
        dispatch({
            type: types.GET_PRAYER_REQUESTS,
            payload: response.data
        })
    } catch(e) {
        console.log(e)
        dispatch({
            type: types.GET_PRAYER_REQUESTS_ERROR,
            payload: e
        })
    }
}
