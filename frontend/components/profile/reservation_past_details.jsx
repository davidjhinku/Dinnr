import React from 'react';
import {Link} from 'react-router-dom'
import { numberToTime } from '../../util/util_functions';

class ReservationPastDetails extends React.Component {
    constructor(props){
        super(props)
        this.addFavorite = this.addFavorite.bind(this)
        this.removeFavorite = this.removeFavorite.bind(this)
    }

    addFavorite(e) {
        e.preventDefault()
        debugger
        this.props.createFavorite({user_id: this.props.reservation.user_id, restaurant_id: this.props.restaurant.id})
    }

    removeFavorite(e) {
        e.preventDefault()
        debugger
        let favorites = this.props.favorites
        let restId = this.props.restaurant.id
        this.props.deleteFavorite(favorites[restId].id)
    }

    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        let favorite
        
        if (this.props.favorites[restaurant.id]) {
            favorite = <button onClick={this.removeFavorite}><i class="fas fa-bookmark"></i>  Restaurant saved</button>
        } else {
            favorite = <button onClick={this.addFavorite}><i className="far fa-bookmark"></i>  Save this restaurant</button>
        }
        
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
                            {/* <button onClick={this.addFavorite}><i className="far fa-bookmark"></i>  Save this restaurant</button> */}
                            {favorite}
                        </div>
                    </div>
                </li>
                <hr/>
            </div>
        )
    }
}

export default ReservationPastDetails;