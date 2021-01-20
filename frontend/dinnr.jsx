import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

//testing
import {signup, signin, logout} from './util/session_api_util'
//testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore()

    //testing
    window.signup = signup
    window.signin = signin
    window.logout = logout
    window.getState = store.getState
    //testing

    ReactDOM.render(<h1>React Loaded</h1>, root)
})