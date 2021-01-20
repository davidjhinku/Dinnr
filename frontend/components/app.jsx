import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container'
import Modal from './modal/modal'
import {Link, Route} from 'react-router-dom'
// import SigninFormContainer from './session_form/signin_form_container'
// import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' className='header-logo'>
                <img src={window.dinnrUrl} />
            </Link>
            <NavBarContainer />
        </header>

        {/* <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
        
        {/* <switch>
            other pages/components in here
        </switch> */}

        <footer>
            {/* Social links */}
        </footer>
    </div>
)

export default App;