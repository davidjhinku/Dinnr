import * as APIUTIL from '../util/restaurant_api_util'

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
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

export const fetchRestaurants = () => dispatch => {
    return APIUTIL.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)))
}
// eventually takes in filter data

export const fetchRestaurant = restId => dispatch => {
    return APIUTIL.fetchRestaurant(restId).then(restaurant => dispatch(receiveRestaurant(restaurant)))
}