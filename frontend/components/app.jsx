import React from 'react';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container'
import SplashContainer from './splash_page/splash_container'
import SearchPageContainer from './search/search_page_container'
import NavFooter from './nav_footer/nav_footer'
import {Link, Route, Switch} from 'react-router-dom'
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

        <Switch>
            <Route path='/search' component={SearchPageContainer} />
            <Route path='/' component={SplashContainer} />
            {/* route to the searchpagecomponent */}
        </Switch>

        <footer className='nav-footer'>
            <NavFooter />
        </footer>
    </div>
)

export default App;