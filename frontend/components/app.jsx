import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container'
import NavFooter from './nav_footer/nav_footer'
import Modal from './modal/modal'
import {Link, Route} from 'react-router-dom'
// import SigninFormContainer from './session_form/signin_form_container'
// import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
    <div className="main-app">
        <Modal />
        <header className='nav-bar'>
            <Link to='/' className='header-link'>
                <img src={window.dinnrUrl} className='header-logo'/>
            </Link>
            <NavBarContainer />
        </header>
        <h1>This is the restaurant search</h1>
        {/* <switch>
            other pages/components in here
        </switch> */}

        <footer className='nav-footer'>
            <NavFooter />
        </footer>
    </div>
)

export default App;