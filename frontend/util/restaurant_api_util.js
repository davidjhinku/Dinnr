export const fetchRestaurants = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/restaurants'
    })
}
// eventually add data which used to get specific ones

export const fetchRestaurant = restId => {
    return $.ajax({
        method: 'GET',
        url: `api/restaurants/${restId}`
    })
}