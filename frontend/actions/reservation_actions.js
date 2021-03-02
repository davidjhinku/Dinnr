import * as APIUTIL from '../util/reservation_api_util'

export const RECEIVE_RESERVATION_TIMESLOTS = "RECEIVE_RESERVATION_TIMESLOTS";
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS'
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

const receiveReservation = reservationData => {
    return {
        type: RECEIVE_RESERVATION,
        reservationData
    }
}  //convention could change to payload

const receiveReservationErrors = errors => {
    return {
        type: RECEIVE_RESERVATION_ERRORS,
        errors
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
            return dispatch(receiveReservation(reservation))
        })
}

export const createReservation = reservation => dispatch => {
    return APIUTIL.createReservation(reservation)
        .then(reservation => {
            return dispatch(receiveReservations(reservation))
        })
}

export const updateReservation = reservation => dispatch => {
    return APIUTIL.updateReservation(reservation)
        .then(reservation => {
            return dispatch(receiveReservations(reservation))
        })
        // .catch(errors => {
        //     return dispatch(receiveReservationErrors(errors.responseJSON))
        // })
}

export const deleteReservation = resId => dispatch => {
    return APIUTIL.deleteReservation(resId)
        .then(reservation => {
            
        })
}