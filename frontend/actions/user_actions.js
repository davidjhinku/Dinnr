import * as APIUTIL from '../util/user_api_util';

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

const receiveUserData = payload => {
    return {
        type: RECEIVE_USER_DATA,
        payload
    }
}

export const fetchUserData = userId => dispatch => {
    return APIUTIL.fetchUserData(userId)
        .then(data => {
            return dispatch(receiveUserData(data))
        })
}