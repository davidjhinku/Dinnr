import React from 'react';
import UpcomingReservation from './reservations_upcoming_component';
import PastReservation from './reservations_past_component';
import Favorite from './favorites_component'
import { updateReservation } from '../../util/reservation_api_util';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.currentUser.id)
    }

    render() {
            let currentTime = Date.now()
            let pastReservations = Object.values(this.props.reservations).filter(reservation => new Date(reservation.date) <= currentTime)

            let upcomingReservations = Object.values(this.props.reservations).filter(reservation => new Date(reservation.date) > currentTime)

            return(
                <div className='profile-page'>
                    <div className='profile-header'>
                        <div>
                            <h1>The Name</h1>
                            <p>The Points</p>
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

export default Profile;