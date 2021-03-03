import React from 'react';
import {Link} from 'react-router-dom'
import { numberToTime } from '../../util/util_functions';

class ReservationPastDetails extends React.Component {
    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        
        return (
            <div className='profile-reservation'>
                <li>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                    {/* <img src={restaurant.photoUrl} alt="first image"/> */}
                    <div className="past-details">
                        <h3>{restaurant.name}</h3>
                        {/* <h4>{`${reservation.date} at ${numberToTime(reservation.time)}`}</h4> */}
                        <h3>{reservation.date}</h3>
                        <h4>{`Table for ${reservation.party_size} people.`}</h4>
                        <div className="past-links">
                            <Link to={`/${reservation.user_id}/review/${restaurant.id}/${reservation.id}`}><i className="far fa-comment-alt"></i>  Write Review</Link>
                            {/* <button><i className="far fa-comment-alt"></i>  Write Review</button> */}
                            <button><i className="far fa-bookmark"></i>  Save this restaurant</button>
                        </div>
                    </div>
                </li>
                <hr/>
            </div>
        )
    }
}

export default ReservationPastDetails;