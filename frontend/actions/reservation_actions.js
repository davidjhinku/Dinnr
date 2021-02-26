import * as APIUTIL from '../util/reservation_api_util'

export const RECEIVE_RESERVATION_TIMESLOTS = "RECEIVE_RESERVATION_TIMESLOTS";
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
// export const CREATED_RESERVATION = 'CREATED_RESERVATION'

const receiveTimeslots = timeslots => {
    return {
        type: RECEIVE_RESERVATION_TIMESLOTS,
        timeslots
    }
}

const receiveReservations = reservations => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
}

const receiveReservation = reservation => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

// const createdReservation = () => {
//     return {
//         type: CREATED_RESERVATION,
//     }
// }

export const checkTimeslots = search => dispatch => {
    return APIUTIL.fetchReservations(search)
        .then(timeslots => {
            debugger
            return dispatch(receiveTimeslots(timeslots))
        })
}

export const fetchReservations = userId => dispatch => {
    return APIUTIL.fetchReservations(userId)
        .then(reservations => {
            return dispatch(receiveReservations(reservations))
        })
}

export const fetchReservation = resId => dispatch => {
    return APIUTIL.fetchReservation(resId)
        .then(reservation => {
            debugger
            return dispatch(receiveReservation(reservation))
        })
}

export const createReservation = reservation => dispatch => {
    return APIUTIL.createReservation(reservation)
        .then(reservation => {
            debugger
            return dispatch(receiveReservations(reservation))
        })
}