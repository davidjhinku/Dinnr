import {RECEIVE_FAVORITE} from '../actions/favorite_actions';
import { RECEIVE_USER_DATA } from '../actions/user_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        // case RECEIVE_USER_DATA:
        //     return action.payload.favorites
        case RECEIVE_FAVORITE:
            return action.favorite
        default:
            return state;
    }
}

export default favoritesReducer;