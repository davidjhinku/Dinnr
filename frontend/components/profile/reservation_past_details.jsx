import React from 'react'

class ReservationPastDetails extends React.Component {
    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        debugger
        return (
            <li className='profile-reservation'>
                {reservation.date}
                {restaurant.name}
            </li>
        )
    }
}

export default ReservationPastDetails;