export const RECEIVE_SEARCH_PARAMS = 'RECEIVE_SEARCH_PARAMS';

const receiveSearchParams = search => {
    debugger
    return {
        type: RECEIVE_SEARCH_PARAMS,
        search
    }
}

export const setSearchParams = search => dispatch => {
    debugger
    return dispatch(receiveSearchParams(search))
}