import * as APIUTIL from '../util/user_api_util';

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

const receiveUserData = payload => {
    debugger
    return {
        type: RECEIVE_USER_DATA,
        payload
    }
}

export const fetchUserData = userId => dispatch => {
    debugger
    return APIUTIL.fetchUserData(userId)
        .then(data => {
            debugger
            return dispatch(receiveUserData(data))
        })
}