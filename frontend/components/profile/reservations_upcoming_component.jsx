import React from 'react'
import ReservationUpcomingDetails from './reservation_upcoming_details'
import {Link} from 'react-router-dom'

class UpcomingReservation extends React.Component {

    render() {
        let reservations;
        if (this.props.upcomingReservations.length < 1) {
            reservations = <li className='no-reservations'>No Upcoming Resevations <Link to='/'>Book a Table</Link></li>
        } else {
            reservations = this.props.upcomingReservations.map((reservation, idx) => { return <ReservationUpcomingDetails key={`prof-${idx}`} reservation={reservation} restaurant={this.props.restaurants[reservation.restaurant_id]} userId={this.props.userId}/> })
        }

        return (
            <div className='component'>
                <h1>Upcoming Reservation</h1>
                <hr/>
                {/* <div className="profile-reservations"> */}
                    <ul>
                        {reservations}
                    </ul>
                {/* </div> */}
            </div>
        )
    }
}

export default UpcomingReservation;