import React from 'react';
import UpcomingReservation from './reservations_upcoming_component';
import PastReservation from './reservations_past_component';
import Favorite from './favorites_component'
import { updateReservation } from '../../util/reservation_api_util';
import {newDate} from '../../util/util_functions'

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.currentUser.id)
    }

    render() {

        if (this.props.reservations['default']) {
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
                            <PastReservation pastReservations={pastReservations} restaurants={this.props.restaurants}/>
                            <Favorite />
                        </div>
                    </div>
    
                </div>
            )
        }

    }
}

export default Profile;