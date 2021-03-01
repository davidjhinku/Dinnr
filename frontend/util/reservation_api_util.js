export const fetchReservations = search => {
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
    return $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: {reservation}
    })
}

export const updateReservation = reservation => {
    debugger
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