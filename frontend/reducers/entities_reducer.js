import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import restaurantsReducer from './restaurants_reducer'
import searchReducer from './search_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    search_params: searchReducer
})

export default entitiesReducer;