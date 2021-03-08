import React from 'react';
import { numberToTime} from '../../util/util_functions';
import {Link} from 'react-router-dom';

class ReservationUpcomingDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render(){
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        
        return (
            <div className="profile-reservation">
                <li>
                    <Link to={`/restaurants/${restaurant.id}`}>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                    {/* <img src={restaurant.photoUrl} alt="first image"/> */}
                    </Link>
                    <div className="upcoming-details">
                        <Link to={`/restaurants/${restaurant.id}`}><h3>{restaurant.name}</h3></Link>
                        <h4>{`${reservation.date} at ${numberToTime(reservation.time)}`}</h4>
                        <h4>{`Table for ${reservation.party_size} people.`}</h4>
                        <div className="upcoming-links">
                            <Link to={`${this.props.userId}/reservation/${reservation.id}`} target="_blank">View</Link>
                            <Link to={`${this.props.userId}/reservation/${reservation.id}`} target="_blank">Modify</Link>
                            <Link to={`${this.props.userId}/delete/reservation/${reservation.id}`} reservation={reservation} restaurant={restaurant}>
                            Cancel
                            </Link>
                        </div>
                    </div>
                </li>
                <hr/>
            </div>
        )
    }
}

export default ReservationUpcomingDetails;