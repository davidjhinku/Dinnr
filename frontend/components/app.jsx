import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container'
import {Link, Route} from 'react-router-dom'
import SigninFormContainer from './session_form/signin_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
    <div>
        <span>build Model here</span>
        <header>
            <Link to='/' className='header-logo'>
                <img src={window.dinnrUrl} />
            </Link>
            <NavBarContainer />
        </header>
        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

        <footer>

            <span>Social Links here</span>
        </footer>
    </div>
)

export default App;