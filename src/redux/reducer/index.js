import { FETCH_LOCATION } from "../actions";
import { FETCH_WEATHER } from "../actions";
import { fetchWeather } from "../actions";
import { fetchLocation } from "../actions";
import { initialState } from "../store";

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case FETCH_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
        default:
            return state
    }
}