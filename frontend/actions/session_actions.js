import * as APIUTIL from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk actions
export const signup = user => dispatch => (
    APIUTIL.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON)))
    )
)

export const signin = user => dispatch => {
    return APIUTIL.signin(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON)))
    )
}

export const logout = () => dispatch => {
    return APIUTIL.logout().then(() => dispatch(logoutCurrentUser()))
}
