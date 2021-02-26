import React from 'react'
import {numberToTime} from '../../util/util_functions'

class ReservationConfirmation extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchReservation(this.props.resId)
            .then(reservation => {
                debugger
                return this.props.fetchRestaurant(this.props.reservation.restaurant_id)
            })

            // How do i get the restaurant to go after we get the reservation id?
    }

    render() {
        let currUser = this.props.currentUser
        let rest = this.props.restaurant
        let reservation = this.props.reservation
        debugger

        if (reservation.user_id !== currUser.id) {
            return(
                <div>Loading</div>
            )
        } else {  
            return(
                <div className="reservation-confirmation">
                    <div className="confirmation-left">
                        <div className="confirmation-summary">
                            <div className="confirmation-thanks">

                            </div>
                            <div className="reservation-details">
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                                {/* <img src={rest.photoUrl}/> */}
                                <div>
                                    <h2>{rest.name}</h2>
                                    <div>
                                        <ul>
                                            <li>{reservation.date}</li>
                                            <li>{numberToTime(reservation.time)}</li>
                                            <li>{reservation.party_size} people</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="confirmation-details">
                            <h2>Reservation details</h2>
                        </div>
                        <div className="restaurant">
                            <div className="details">

                            </div>
                            <div className="map">

                            </div>
                        </div>
                    </div>
                    <div className="confirmation-right">

                    </div>
                </div>
            )
        }
    }
}

export default ReservationConfirmation;