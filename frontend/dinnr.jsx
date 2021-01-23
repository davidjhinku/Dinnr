import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//testing
// import {signup, signin, logout} from './actions/session_actions'
import {fetchRestaurants, fetchRestaurant} from './actions/restaurant_actions'
//testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    let store
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }


    //testing
    // window.signup = signup
    // window.signin = signin
    // window.logout = logout
    window.fetchRestaurants = fetchRestaurants
    window.fetchRestaurant = fetchRestaurant
    window.getState = store.getState
    window.dispatch = store.dispatch
    //testing

    ReactDOM.render(<Root store={store} />, root)
})