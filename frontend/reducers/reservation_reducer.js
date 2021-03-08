import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION } from '../actions/reservation_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_USER_DATA} from '../actions/user_actions'

const _defaultState = {"default":
    {
        "date": 0,
        "time": 0,
        "party_size": 0,
        "user_id": 0,
        "restaurant_id": 0,
        "phone": "",
        "email": "",
        "occasion": "",
        "special_request": "",
    }
}

const reservationReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            return action.reservationData.reservations
        // case RECEIVE_CURRENT_USER:
        //     debugger
        //     return action.payload.reservations
        case RECEIVE_USER_DATA:
            return action.payload.reservations
        default:
            return state;
    }
}

export default reservationReducer;