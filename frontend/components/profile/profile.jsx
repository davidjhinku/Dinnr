import React from 'react';
import UpcomingReservation from './reservations_upcoming_component';
import PastReservation from './reservations_past_component';
import Favorites from './favorites_component'
import { updateReservation } from '../../util/reservation_api_util';
import {newDate} from '../../util/util_functions'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.reservations = React.createRef();
        this.favorites = React.createRef();
    }

    componentDidMount() {
        this.props.fetchUserData(this.props.currentUser.id)
    }

    scrollReservations() {
        this.reservations.current.scrollIntoView({ behavior: 'smooth' });
    }

    scrollFavorites() {
        this.favorites.current.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        if (this.props.reservations['default'] || Object.keys(this.props.reservations)[0] === 'id') {
            return (
                <div>Loading...</div>
            )
        } else {
            let currentUser = this.props.currentUser
            let currentTime = Date.now()
            
            let pastReservations;
            let upcomingReservations;

            if (this.props.reservations['none']) {
                pastReservations = []
                upcomingReservations = []
            } else {
                pastReservations = Object.values(this.props.reservations).filter(reservation => newDate(reservation.date, reservation.time) <= currentTime)
                upcomingReservations = Object.values(this.props.reservations).filter(reservation => newDate(reservation.date, reservation.time) > currentTime)
            }

            return(
                <div className='profile-page'>
                    <div className='profile-header'>
                        <div>
                            <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                            <p>0 points</p>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <nav className='profile-nav'>
                            <a onClick={this.scrollReservations.bind(this)}>Reservations</a>
                            <a onClick={this.scrollFavorites.bind(this)}>Saved Restaurants</a>
                            {/* <a href="">Account Details</a> */}
                        </nav>
                        <div className='profile-components'>
                            <nav ref={this.reservations}>
                                <UpcomingReservation upcomingReservations={upcomingReservations} restaurants={this.props.restaurants} userId={this.props.currentUser.id}/>
                                <PastReservation pastReservations={pastReservations} restaurants={this.props.restaurants} favorites={this.props.favorites} reviews={this.props.reviews} createFavorite={this.props.createFavorite} deleteFavorite={this.props.deleteFavorite} deleteReview={this.props.deleteReview}/>
                            </nav>
                            <nav ref={this.favorites}>
                                <Favorites favorites={this.props.favorites} restaurants={this.props.restaurants} reviews={this.props.reviews} deleteFavorite={this.props.deleteFavorite}/>
                            </nav>
                        </div>
                    </div>
    
                </div>
            )
        }

    }
}

export default Profile;