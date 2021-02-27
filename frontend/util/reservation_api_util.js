export const fetchReservations = search => { //date/time/restaurant
    // debugger
    return $.ajax({
        method: 'GET',
        url: 'api/reservations',
        data: {search}
    })
}

export const fetchReservation = resId => {
    return $.ajax({
        method: 'GET',
        url: `api/reservations/${resId}`
    })
}

export const createReservation = reservation => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: {reservation}
    })
}

export const updateReservation = reservation => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reservations/${reservation.id}`,
        data: {reservation}
    })
}

export const deleteReservation = resId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reservations/${resId}`
    })
}