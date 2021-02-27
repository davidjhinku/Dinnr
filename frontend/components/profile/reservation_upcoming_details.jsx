import React from 'react'

class ReservationUpcomingDetails extends React.Component {
    render(){
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

export default ReservationUpcomingDetails;