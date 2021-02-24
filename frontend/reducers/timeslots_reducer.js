import { RECEIVE_RESERVATION_TIMESLOTS } from '../actions/reservation_actions'
import { formsDateFormat } from '../util/util_functions'

const _defaultState = {
    0: "loading",
    1: "loading",
    2: "loading",
    3: "loading",
    4: "loading"
}

// function startingDate(){
//     const today = new Date()
//     let dd = today.getDate()
//     let mm = today.getMonth() + 1
//     const yyyy = today.getFullYear()

//     if (dd < 10) {
//         dd = '0' + dd
//     }
//     if (mm < 10) {
//         mm = '0' + mm
//     }
//     return `${yyyy}-${mm}-${dd}`
// }

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