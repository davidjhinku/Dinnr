import { RECEIVE_RESERVATIONS } from '../actions/reservation_actions'

const _defaultState = {
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

const reservationReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations
        default:
            return state;
    }
}

export default reservationReducer;