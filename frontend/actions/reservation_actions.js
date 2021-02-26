import * as APIUTIL from '../util/reservation_api_util'

export const RECEIVE_RESERVATION_TIMESLOTS = "RECEIVE_RESERVATION_TIMESLOTS";
//send to searchParams cause its seperate from reservations
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
//send to it's own reducer under entities
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

export const createReservation = reservation => dispatch => {
    return APIUTIL.createReservation(reservation)
        .then(reservation => {
            return dispatch(receiveReservations(reservation))
        })
}