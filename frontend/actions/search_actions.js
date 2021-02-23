export const RECEIVE_SEARCH_PARAMS = 'RECEIVE_SEARCH_PARAMS';

const receiveSearchParams = search => {
    return {
        type: RECEIVE_SEARCH_PARAMS,
        search
    }
}

export const setSearchParams = search => dispatch => {
    return dispatch(receiveSearchParams(search))
}