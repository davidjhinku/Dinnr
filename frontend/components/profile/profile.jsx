import React from 'react';
import UpcomingReservation from './reservations_upcoming_component';
import PastReservation from './reservations_past_component';
import Favorites from './favorites_component'
import { updateReservation } from '../../util/reservation_api_util';
import {newDate} from '../../util/util_functions'

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.currentUser.id)
    }

    render() {
        if (this.props.reservations['default'] || Object.keys(this.props.reservations)[0] === 'id') {
            return (
                <div>Loading...</div>
            )
        } else {
            let currentUser = this.props.currentUser
            let currentTime = Date.now()
            let pastReservations = Object.values(this.props.reservations).filter(reservation => newDate(reservation.date, reservation.time) <= currentTime)
            let upcomingReservations = Object.values(this.props.reservations).filter(reservation => newDate(reservation.date, reservation.time) > currentTime)

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
                            <a href="">Reservations</a>
                            <a href="">Saved Restaurants</a>
                            <a href="">Account Details</a>
                        </nav>
                        <div className='profile-components'>
                            <UpcomingReservation upcomingReservations={upcomingReservations} restaurants={this.props.restaurants} userId={this.props.currentUser.id}/>
                            <PastReservation pastReservations={pastReservations} restaurants={this.props.restaurants} favorites={this.props.favorites} createFavorite={this.props.createFavorite} deleteFavorite={this.props.deleteFavorite}/>
                            <Favorites favorites={this.props.favorites} restaurants={this.props.restaurants} deleteFavorite={this.props.deleteFavorite}/>
                        </div>
                    </div>
    
                </div>
            )
        }

    }
}

export default Profile;