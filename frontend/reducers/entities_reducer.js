import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import restaurantsReducer from './restaurants_reducer'
import searchReducer from './search_reducer'
import timeslotsReducer from './timeslots_reducer'
import reservationReducer from './reservation_reducer'
import reviewsReducer from './reviews_reducer'
import favoritesReducer from './favorites_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    search_params: searchReducer,
    timeslots: timeslotsReducer,
    reservations: reservationReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer
})

export default entitiesReducer;