import React from 'react'
import {numberToTime, dayOfWeek, readableDate} from '../../util/util_functions'

class ReservationConfirmation extends React.Component {
    componentDidMount() {
        this.props.fetchReservation(this.props.resId)
    }

    render() {
        let currUser = this.props.currentUser
        let rest = this.props.restaurant
        let reservation = this.props.reservation
        let date = new Date(reservation.date)
        // debugger

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
                                <i class="fas fa-check-circle fa-3x"></i>
                                <div>
                                    <h2>Thanks! Your reservation is confirmed.</h2>
                                    <p>{`Confirmation #${reservation.id}`}</p>
                                </div>
                            </div>
                            <div className="reservation-details">
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                                {/* <img src={rest.photoUrl}/> */}
                                <div>
                                    <h2>{rest.name}</h2>
                                    <div>
                                        <ul>
                                            <span>
                                                <i class="far fa-calendar-alt"></i>
                                                <li>{`${dayOfWeek(date)}, ${readableDate(date)}, ${numberToTime(reservation.time)}`}</li>
                                            </span>
                                            <span>
                                                <i class="far fa-user"></i>
                                                <li>{reservation.party_size} people</li>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="confirmation-details">
                            <span>
                                <i class="far fa-clipboard fa-3x"></i>
                                <h2>Reservation details</h2>
                            </span>
                            <div>{reservation.occasion}</div>
                            <div>{reservation.special_request}</div>

                            <h3>What to know before you go</h3>
                            <h4>Important dining information</h4>
                            <p>
                                We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
                            </p>

                            <p>
                                We may contact you about this reservation, so please ensure your email and phone number are up to date.
                            </p>
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