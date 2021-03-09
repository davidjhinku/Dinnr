import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'
import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions'
import {RECEIVE_USER_DATA} from '../actions/user_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants.reviews
        case RECEIVE_RESTAURANT: 
            return action.restaurant.reviews
        case RECEIVE_USER_DATA:
            return action.payload.reviews
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review})
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state)
            delete newState[action.review.restaurant_id]
            return newState
        default:
            return state
    }
}

export default reviewsReducer;