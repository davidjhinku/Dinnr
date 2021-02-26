import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, CLEAR_RESTAURANTS} from '../actions/restaurant_actions'
import {RECEIVE_SEARCH_PARAMS} from '../actions/search_actions'
import {RECEIVE_RESERVATION} from '../actions/reservation_actions'

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
            return Object.assign({}, state, { [action.reservationData.restaurants.id]: action.reservationData.restaurants })
        default:
            return state;
    }
}

export default restaurantsReducer;