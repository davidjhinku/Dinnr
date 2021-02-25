import React from 'react';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container'
import SplashContainer from './splash_page/splash_container'
import SearchPageContainer from './search_page/search_page_container'
import RestaurantShowContainer from './restaurant_show/restaurant_show_container'
import ProfileContainer from './profile/profile_container'
import ReservationPageContainer from './reservation_page/reservation_page_container'
import NavFooter from './nav_footer/nav_footer'
import {Link, Route, Switch} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

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
            <Route exact path='/' component={SplashContainer} />
            <Route path='/search' component={SearchPageContainer} />
            <Route path='/restaurants/:restId' component={RestaurantShowContainer} />
            <ProtectedRoute exact path='/profile' component={ProfileContainer}/>
            <ProtectedRoute exact path='/reservation/:restId' component={ReservationPageContainer}/>
            <ProtectedRoute exact path='/reservation/:userId/:resId' component={ReservationPageContainer}/>
        </Switch>

        <footer className='nav-footer'>
            <NavFooter />
        </footer>
    </div>
)

export default App;