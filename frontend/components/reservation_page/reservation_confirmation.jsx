import React from 'react'
import {numberToTime} from '../../util/util_functions'

class ReservationConfirmation extends React.Component {
    componentDidMount() {
        this.props.fetchReservation(this.props.resId)
    }

    render() {
        let currUser = this.props.currentUser
        let rest = this.props.restaurant
        let reservation = this.props.reservation
        debugger

        if (reservation.user_id !== currUser.id ||
            !rest ||
            reservation.restaurant_id !== rest.id) {
            return(
                <div>Loading</div>
            )
        } else {  
            return(
                <div className="reservation-confirmation">
                    <div className="confirmation-left">
                        <div className="confirmation-summary">
                            <div className="confirmation-thanks">
                                <h2>Thans! Your reservation is confirmed.</h2>
                            </div>
                            <div className="reservation-details">
                                {/* <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" /> */}
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
                            <p>The occasion</p>
                            <p>Special requests</p>
                        </div>
                        <div className="restaurant">
                            <div className="details">
                                <p>The details again</p>
                            </div>
                            <div className="map">
                                <p>A map</p>
                            </div>
                        </div>
                    </div>
                    <div className="confirmation-right">
                        <div>The users name, location, review count</div>
                    </div>
                </div>
            )
        }
    }
}

export default ReservationConfirmation;