import * as types from '../types';

const initialState = []

export default function(prayers = initialState, action) {
    switch(action.type) {
        case types.GET_PRAYER_REQUESTS:
            return action.payload
        case types.GET_PRAYER_REQUESTS_ERROR:
            return {
                error: action.payload
            }
        default: return prayers
    }
}
