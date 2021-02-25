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

// const _defaultState = {
//     "date": null,
//     "time": null,
//     "party_size": null,
//     "user_id": null,
//     "restaurant_id": null,
//     "phone": null,
//     "email": null,
//     "occasion": null,
//     "special_request": null
// }

const reservationReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations
        default:
            return _defaultState;
    }
}

export default reservationReducer;