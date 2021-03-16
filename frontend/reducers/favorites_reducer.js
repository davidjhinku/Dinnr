import {RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/favorite_actions';
import { RECEIVE_USER_DATA } from '../actions/user_actions';

let _default = {"none": "none"}

const favoritesReducer = (state = _default, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_USER_DATA:
            return action.payload.favorites
        case RECEIVE_FAVORITE:
            if (newState['none']) {
                delete newState['none']
            }
            return Object.assign(newState, {[action.favorite.restaurant_id]: action.favorite})
        case REMOVE_FAVORITE:
            delete newState[action.favorite.restaurant_id]
            if (JSON.stringify(newState) === '{}') {
                return _default
            }
            return newState
        default:
            return state;
    }
}

export default favoritesReducer;