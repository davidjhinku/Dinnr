import React from 'react'
import ReservationPastDetails from './reservation_past_details'
import { Link } from 'react-router-dom'

class PastReservation extends React.Component {
    render() {
        let reservations;

        if (this.props.pastReservations.length < 1 || this.props.pastReservations[0].user_id === 0) {
            reservations = <li className='no-reservations'>No Past Reservations <Link to='/'>Book a Table</Link></li>
        } else {
            reservations = this.props.pastReservations.map((reservation, idx) => { return <ReservationPastDetails key={`prof-${idx}`} reservation={reservation} restaurant={this.props.restaurants[reservation.restaurant_id]} createFavorite={this.props.createFavorite}/> })
        }

        return (
            <div className='component'>
                <h1>Past Reservation</h1>
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

export default PastReservation;