import React from 'react';
import ReactDOM from 'react-dom';

//testing
import {signup, signin, logout} from './util/session_api_util'
//testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')

    //testing
    window.signup = signup
    window.signin = signin
    window.logout = logout
    //testing

    ReactDOM.render(<h1>React Loaded</h1>, root)
})