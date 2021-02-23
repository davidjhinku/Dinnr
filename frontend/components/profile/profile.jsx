import React from 'react';
import UpcomingReservation from './reservations_upcoming_component';
import PastReservation from './reservations_past_component';
import Favorite from './favorites_component'

class Profile extends React.Component {

    render() {
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
                        <UpcomingReservation />
                        <PastReservation />
                        <Favorite />
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;