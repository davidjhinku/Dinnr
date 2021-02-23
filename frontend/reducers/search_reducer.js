import {RECEIVE_SEARCH_PARAMS} from '../actions/search_actions'
import {formsDateFormat} from '../util/util_functions'

const _defaultState = {
    date: formsDateFormat(),
    time: new Date().getHours() + 1,
    party_size: 2,
    wildcard: '',
}

// function startingDate(){
//     const today = new Date()
//     let dd = today.getDate()
//     let mm = today.getMonth() + 1
//     const yyyy = today.getFullYear()

//     if (dd < 10) {
//         dd = '0' + dd
//     }
//     if (mm < 10) {
//         mm = '0' + mm
//     }
//     return `${yyyy}-${mm}-${dd}`
// }

const searchReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SEARCH_PARAMS:
            debugger
            return action.search
        default:
            return state;
    }
}

export default searchReducer;

// Maybe clear on receive a restaurant or profile as that leaves the params areas