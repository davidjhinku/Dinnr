import { RECEIVE_RESERVATION_TIMESLOTS } from '../actions/reservation_actions'
import { formsDateFormat } from '../util/util_functions'

const _defaultState = {
    0: "loading",
    1: "loading",
    2: "loading",
    3: "loading",
    4: "loading"
}

const timeslotsReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION_TIMESLOTS:
            return action.timeslots;
        default:
            return state;
    }
}

export default timeslotsReducer;