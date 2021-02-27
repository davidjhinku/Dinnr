import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, CLEAR_RESTAURANTS} from '../actions/restaurant_actions'
import {RECEIVE_SEARCH_PARAMS} from '../actions/search_actions'
import {RECEIVE_RESERVATION} from '../actions/reservation_actions'
import {receiveUserData, RECEIVE_USER_DATA} from '../actions/user_actions'

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, {[action.restaurant.id]: action.restaurant})
        // case CLEAR_RESTAURANTS:
        //     return {}
        case RECEIVE_SEARCH_PARAMS:
            return {}
        case RECEIVE_RESERVATION:
            // return Object.assign({}, state, { [action.reservationData.restaurants.id]: action.reservationData.restaurants })
            debugger
            return Object.assign({}, { [action.reservationData.restaurants.id]: action.reservationData.restaurants})
        case RECEIVE_USER_DATA:
            return action.payload.restaurants
        default:
            return state;
    }
}

export default restaurantsReducer;