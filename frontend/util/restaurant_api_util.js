export const fetchRestaurants = search => {
    return $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: {search}
    })
}

export const fetchRestaurant = restId => {
    return $.ajax({
        method: 'GET',
        url: `api/restaurants/${restId}`
    })
}