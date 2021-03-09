import * as APIUTIL from '../util/restaurant_api_util'

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveRestaurants = restaurants => {
    return {
        type: RECEIVE_RESTAURANTS,
        restaurants
    }
}

const receiveRestaurant = restaurant => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant
    }
}

// export const clearRestaurants = () => {
//     return {
//         type: CLEAR_RESTAURANTS
//     }
// }

export const fetchRestaurants = search => dispatch => {
    return APIUTIL.fetchRestaurants(search).then(restaurants => {
        return dispatch(receiveRestaurants(restaurants))})
}

export const fetchRestaurant = restId => dispatch => {
    return APIUTIL.fetchRestaurant(restId).then(restaurant => {
        return dispatch(receiveRestaurant(restaurant))
    })
    
}