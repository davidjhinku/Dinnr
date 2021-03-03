import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash_page/splash_container';
import SearchPageContainer from './search_page/search_page_container';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import ProfileContainer from './profile/profile_container';
import ReservationPageContainer from './reservation_page/reservation_page_container';
import ReservationConfirmationContainer from './reservation_page/reservation_confirmation_container';
import ModifyReservationContainer from './reservation_page/modify_reservation_container';
import DeleteReservationContainer from './reservation_page/delete_reservation_container';
import DeleteReservationConfirmation from './reservation_page/delete_confirmation_container';
import CreateReviewContainer from './review_form/review_form_container'
import NavFooter from './nav_footer/nav_footer';
import {Link, Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ReservationConfirmation from './reservation_page/reservation_confirmation';

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
            <ProtectedRoute exact path='/modify/reservation/:resId' component={ModifyReservationContainer}/>
            <ProtectedRoute exact path='/delete/reservation/:resId/canceled' component={DeleteReservationConfirmation}/>
            <ProtectedRoute exact path='/reservation/:restId/:time' component={ReservationPageContainer}/>
            <ProtectedRoute exact path='/:userId/reservation/:resId' component={ReservationConfirmationContainer}/>
            <ProtectedRoute exact path='/:userId/delete/reservation/:resId' component={DeleteReservationContainer}/>
            <ProtectedRoute exact path='/:userId/review/:restId/:resId' component={CreateReviewContainer}/>
        </Switch>

        <footer className='nav-footer'>
            <NavFooter />
        </footer>
    </div>
)

export default App;