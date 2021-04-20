import {RECEIVE_SEARCH_PARAMS} from '../actions/search_actions'
import {formsDateFormat} from '../util/util_functions'

const _defaultState = {
    date: formsDateFormat(),
    time: new Date().getHours() + 3,
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