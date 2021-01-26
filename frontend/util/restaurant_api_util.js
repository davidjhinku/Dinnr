export const fetchRestaurants = search => {
    return $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: {search}
    })
}
// eventually add data which used to get specific ones

export const fetchRestaurant = restId => {
    return $.ajax({
        method: 'GET',
        url: `api/restaurants/${restId}`
    })
}