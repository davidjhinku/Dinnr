import React from 'react';
import {Link} from 'react-router-dom';

class FavoriteDetails extends React.Component {
    render() {
        let restaurant = this.props.restaurant

        return (
            <div className='profile-favorite'>
                <li>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                    {/* <img src={restaurant.photoUrl} alt="first image"/> */}
                    <div className="favorite-details">
                        <h3>{restaurant.name}</h3>
                        <button><i class="fas fa-bookmark"></i>Remove from saved restaurants</button>
                        <div className="attributes">
                            <span>{restaurant.cuisine_type}</span>
                            <hr/>
                            <span>{restaurant.city}</span>
                        </div>
                    </div>
                    <Link to={`/reservations/${restaurant.id}`}>Reserve Now</Link>
                </li>
                <hr/>
            </div>
        )
    }
}

export default FavoriteDetails;