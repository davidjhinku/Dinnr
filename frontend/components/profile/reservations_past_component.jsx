import React from 'react'
import ReservationPastDetails from './reservation_past_details'


class PastReservation extends React.Component {
    render() {
        let reservations;
        if (this.props.pastReservations.length < 1) {
            reservations = <li>No Prior Resevations</li>
        } else {
            reservations = this.props.pastReservations.map((reservation, idx) => { return <ReservationPastDetails key={`prof-${idx}`} reservation={reservation} restaurant={this.props.restaurants[reservation.restaurant_id]} /> })
        }

        return (
            <div className='component'>
                <h1>Past Reservation</h1>
                <hr/>
                <div className="profile-reservations">
                    <ul>
                        {reservations}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PastReservation;