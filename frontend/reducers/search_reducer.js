import {RECEIVE_SEARCH_PARAMS} from '../actions/search_actions'
import {formsDateFormat} from '../util/util_functions'

const _defaultState = {
    date: formsDateFormat(),
    time: new Date().getHours() + 1,
    party_size: 2,
    wildcard: '',
}

const searchReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SEARCH_PARAMS:
            return action.search;
        default:
            return state;
    }
}

export default searchReducer;

// Maybe clear on receive a restaurant or profile as that leaves the params areas