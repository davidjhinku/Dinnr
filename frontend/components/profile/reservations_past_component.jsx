import React from 'react'
import ReservationPastDetails from './reservation_past_details'
import { Link } from 'react-router-dom'

class PastReservation extends React.Component {
    render() {
        let reservations;

        if (this.props.pastReservations.length < 1 || this.props.pastReservations[0].user_id === 0) {
            reservations = <li className='no-reservations'>No Past Reservations <Link to='/'>Book a Table</Link></li>
        } else {
            reservations = this.props.pastReservations.map((reservation, idx) => {
                return <ReservationPastDetails key={`prof-${idx}`}
                    reservation={reservation}
                    restaurant={this.props.restaurants[reservation.restaurant_id]}
                    favorites={this.props.favorites}
                    reviews={this.props.reviews}
                    createFavorite={this.props.createFavorite}
                    deleteFavorite={this.props.deleteFavorite}
                    deleteReview={this.props.deleteReview}/>
                })
        }

        return (
            <div className='component'>
                <h1>Past Reservations</h1>
                <hr/>
                <ul>
                    {reservations}
                </ul>
            </div>
        )
    }
}

export default PastReservation;