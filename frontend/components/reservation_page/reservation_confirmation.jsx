import React from 'react'
import {Link} from 'react-router-dom'
import { numberToTime, dayOfWeek, readableDate, readableMonth, newDate} from '../../util/util_functions'

class ReservationConfirmation extends React.Component {
    componentDidMount() {
        this.props.fetchReservation(this.props.resId)
    }

    render() {
        let currUser = this.props.currentUser
        let currUserJoined = new Date(currUser.created_at)
        let rest = this.props.restaurant
        let reservation = this.props.reservation

        if (reservation.user_id !== currUser.id ||
            !rest ||
            reservation.restaurant_id !== rest.id) {
            return(
                <div>Loading</div>
            )
        } else {  
            let date = newDate(reservation.date, reservation.time)
            return(
                <div className="reservation-confirmation">
                    <div className="confirmation-left">
                        <div className="confirmation-summary">
                            <div className="confirmation-thanks">
                                <i className="fas fa-check-circle fa-3x"></i>
                                <div>
                                    <h2>Thanks! Your reservation is confirmed.</h2>
                                    <p>{`Confirmation #${reservation.id}`}</p>
                                </div>
                            </div>
                            <div className="reservation-details">
                                <Link to={`/restaurants/${rest.id}`} target="_blank">
                                    {/* <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" /> */}
                                    <img src={rest.photoUrls[0]}/>
                                </Link>
                                <div>
                                    <Link to={`/restaurants/${rest.id}`} target="_blank" className='name-link'><h2>{rest.name}</h2></Link>
                                    <div>
                                        <ul>
                                            <span>
                                                <i className="far fa-calendar-alt"></i>
                                                <li>{`${dayOfWeek(date)}, ${readableDate(date)}, ${numberToTime(reservation.time)}`}</li>
                                            </span>
                                            <span>
                                                <i className="far fa-user"></i>
                                                <li>{reservation.party_size} people</li>
                                            </span>
                                            <span>
                                                <Link to={`/modify/reservation/${reservation.id}`}>Modify</Link>
                                                <hr className='vert-line'/>
                                                <Link to={`/${currUser.id}/delete/reservation/${reservation.id}`}>Cancel</Link>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="confirmation-details">
                            <span>
                                <i className="far fa-clipboard fa-3x"></i>
                                <h2>Reservation details</h2>
                            </span>
                            <div>{reservation.occasion === '' ? 'No occasion selected' : reservation.occasion}</div>
                            <div>{reservation.special_request === '' ? 'No special requests' : reservation.special_request}</div>

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
                                <h3>{rest.name}</h3>
                                <h4>{rest.address}, {rest.city}</h4>
                                <Link to={`/restaurants/${rest.id}`} target="_blank">{"View Hours, Transportation, and Other Details >"}</Link>
                            </div>
                            <div className="map">
                                <a href={`https://maps.google.com/?q= ${rest.address}, ${rest.city}, ${rest.state}, ${rest.zip}`} target="_blank">
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&maptype=roadmap&markers=color:blue%7C${rest.lat},${rest.lng}&key=${window.googleAPIKey}`} alt="map"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="confirmation-right">
                        <div className="user">
                            <div className='avatar'>
                                {currUser.first_name.charAt(0)}{currUser.last_name.charAt(0)}
                            </div>
                            <div className='details'>
                                <h2>{currUser.first_name} {currUser.last_name}</h2>
                                <h4>Joined in {readableMonth(currUserJoined)} {currUserJoined.getFullYear()}</h4>

                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4>{currUser.primary_location}</h4>
                                </span>
                                <span>
                                    <i className="far fa-comment-alt fa-flip-horizontal"></i>
                                    <h4>0 reviews</h4>
                                </span>

                            </div>
                        </div>

                        <div className="history">

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ReservationConfirmation;