import { FETCH_LOCATION } from "../actions";
import { initialState } from "../store";

export default const locationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOCATION:
            return {
                ...state,
                location: payload
            }
        default:
            return state
    }
}