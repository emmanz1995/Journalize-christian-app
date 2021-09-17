import axios from 'axios';
import * as types from '../types';

const API_URL = process.env.REACT_APP_API_URL;
const jwt = JSON.parse(localStorage.getItem('jwt'));

export const getPrayerRequests = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/v1/api/prayers/getmyprayers`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
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
