import {RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/favorite_actions';
import { RECEIVE_USER_DATA } from '../actions/user_actions';

let _default = {"none": "none"}

const favoritesReducer = (state = _default, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER_DATA:
            return action.payload.favorites
        case RECEIVE_FAVORITE:
            return Object.assign({}, state, {[action.favorite.restaurant_id]: action.favorite})
        case REMOVE_FAVORITE:
            let newState = Object.assign({}, state)
            delete newState[action.favorite.restaurant_id]
            return newState
        default:
            return state;
    }
}

export default favoritesReducer;